// app.js
document.addEventListener("DOMContentLoaded", () => {
    const profilesList = document.getElementById("profilesList");
    const searchInput = document.getElementById("searchInput");
    const keywordSelect = document.getElementById("keywordSelect");
    const clearBtn = document.getElementById("clearFiltersBtn");

    let allProfiles = [];

    // ---- Fetch JSON data ----------------------------------------------------
    fetch("data/staff-projects.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to load staff-projects.json");
            }
            return res.json();
        })
        .then((data) => {
            // Expecting { staff: [...] }
            allProfiles = data.staff || [];
            buildKeywordDropdown(allProfiles);

            renderProfiles(allProfiles);
        })
        .catch((err) => {
            console.error(err);
            profilesList.innerHTML =
                '<div class="error-message">Sorry, the project list could not be loaded.</div>';
        });

    // ---- Rendering ----------------------------------------------------------

    function renderProfiles(profiles) {
        profilesList.innerHTML = "";

        if (!profiles.length) {
            profilesList.innerHTML =
                '<div class="empty-message">No profiles match your search or filters.</div>';
            return;
        }

        profiles.forEach((profile, index) => {
            const card = document.createElement("article");
            card.className = "profile-card";
            card.setAttribute("tabindex", "0");
            card.setAttribute("data-index", index);
            card.setAttribute("aria-expanded", "false");

            // avatar content: prefer image -> emoji -> initials
            // Avatar: use profile.avatar or fall back to default image
            const avatarSrc = profile.avatar && profile.avatar.trim() !== ""
                ? profile.avatar
                : "images/default-avatar.jpg";

            const avatarInner = `<img src="${avatarSrc}" alt="Profile picture of ${profile.name}" />`;


            const keywordsHtml = (profile.keywords || [])
                .map(
                    (kw) =>
                        `<span class="keyword-chip" aria-label="Keyword: ${kw}">${kw}</span>`
                )
                .join("");

            const topicsHtml = (profile.topics || [])
                .map((topic, i) => {
                    const ideas = (topic.ideas || [])
                        .map((idea) => `<li>${idea}</li>`)
                        .join("");

                    return `
            <section class="profile-topic">
              <h3>${i + 1}. ${topic.title}</h3>
              <p>${topic.description}</p>
              ${ideas
                            ? `<p><strong>Within this topic, you could investigate:</strong></p>
                     <ul>${ideas}</ul>`
                            : ""
                        }
            </section>
          `;
                })
                .join("");

            card.innerHTML = `
        <div class="profile-header">
          <div class="profile-avatar">
            ${avatarInner}
          </div>

          <div class="profile-main">
            <div class="profile-name">${profile.name}</div>
            <div class="keyword-row">
              ${keywordsHtml}
            </div>
          </div>

          <div class="profile-actions">
            <button
              class="email-btn"
              type="button"
              aria-label="Email ${profile.name}"
              data-email="${profile.email || ""}"
            >
              ✉️<span>Email me</span>
            </button>
          </div>
        </div>

        <div class="profile-details">
          ${topicsHtml || "<p>No project details have been added yet.</p>"}

          <div class="profile-detail-footer">
            <button class="detail-btn" type="button">
              <span class="detail-btn-icon">❓</span>
              Questions? Email me
            </button>
            <button class="detail-btn" type="button">
              <span class="detail-btn-icon">👍</span>
              Interested in this topic
            </button>
          </div>
        </div>
      `;

            profilesList.appendChild(card);
        });
    }

    // ---- Filtering ----------------------------------------------------------
    function buildKeywordDropdown(profiles) {
        const allKeywords = new Set();

        profiles.forEach((profile) => {
            (profile.keywords || []).forEach((kw) => {
                if (kw && kw.trim() !== "") {
                    allKeywords.add(kw.trim());
                }
            });
        });

        const sorted = Array.from(allKeywords).sort((a, b) =>
            a.localeCompare(b, undefined, { sensitivity: "base" })
        );

        // Clear existing options except the first "All keywords"
        keywordSelect.innerHTML = '<option value="">All keywords</option>';

        sorted.forEach((kw) => {
            const opt = document.createElement("option");
            opt.value = kw;
            opt.textContent = kw;
            keywordSelect.appendChild(opt);
        });
    }

    function applyFilters() {
  const term = searchInput.value.trim().toLowerCase();
  const selectedKeyword = keywordSelect.value.trim().toLowerCase();

  const filtered = allProfiles.filter((profile) => {
    const topicsText = (profile.topics || [])
      .map((t) => {
        const ideasText = (t.ideas || []).join(" ");
        return `${t.title} ${t.description} ${ideasText}`;
      })
      .join(" ");

    const allText =
      [
        profile.name,
        (profile.keywords || []).join(" "),
        topicsText
      ]
        .join(" ")
        .toLowerCase() || "";

    const keywordText = (profile.keywords || []).join(" ").toLowerCase();

    const matchesSearch = !term || allText.includes(term);
    const matchesKeyword =
      !selectedKeyword || keywordText.includes(selectedKeyword);

    return matchesSearch && matchesKeyword;
  });

  renderProfiles(filtered);
}



    searchInput.addEventListener("input", applyFilters);
    keywordSelect.addEventListener("change", applyFilters);

    clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        keywordSelect.value = "";
        renderProfiles(allProfiles);
        searchInput.focus();
    });


    // ---- Expand / collapse handling ----------------------------------------

    // Use event delegation so re-rendering is safe
    profilesList.addEventListener("click", (event) => {
        const emailBtn = event.target.closest(".email-btn");
        if (emailBtn) {
            // prevent card toggling
            event.stopPropagation();
            const email = emailBtn.getAttribute("data-email");
            if (email) {
                window.location.href = `mailto:${email}`;
            }
            return;
        }

        const detailFooterEmail = event.target.closest(".detail-btn");
        if (detailFooterEmail && detailFooterEmail.textContent.includes("Email")) {
            event.stopPropagation();
            const card = event.target.closest(".profile-card");
            if (!card) return;
            // pick up data-email from header button
            const headerEmailBtn = card.querySelector(".email-btn");
            const email = headerEmailBtn
                ? headerEmailBtn.getAttribute("data-email")
                : "";
            if (email) {
                window.location.href = `mailto:${email}`;
            }
            return;
        }

        const card = event.target.closest(".profile-card");
        if (!card) return;

        toggleCard(card);
    });

    // Allow keyboard toggle (Enter/Space) when card is focused
    profilesList.addEventListener("keydown", (event) => {
        const card = event.target.closest(".profile-card");
        if (!card) return;

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleCard(card);
        }
    });

    function toggleCard(card) {
        const isOpen = card.classList.contains("open");
        const details = card.querySelector(".profile-details");
        if (!details) return;

        if (isOpen) {
            card.classList.remove("open");
            card.setAttribute("aria-expanded", "false");
        } else {
            card.classList.add("open");
            card.setAttribute("aria-expanded", "true");
        }
    }
});
