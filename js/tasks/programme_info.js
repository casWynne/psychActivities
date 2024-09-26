document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    const programmeMenu = document.getElementById('programme-menu');
    const programmeDetails = document.getElementById('programme-details');
    const moduleDetails = document.getElementById('module-details');
    const backButton = document.getElementById('back-button');

    // Load JSON Data
    fetch('../data/programme_info.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("JSON Data Loaded:", data); // Check if data is loaded correctly
            if (data && data.programmes && data.programmes.length > 0) {
                renderProgrammeMenu(data.programmes, data); // Pass data to renderProgrammeMenu
            } else {
                console.error("No programmes found in JSON data.");
                programmeMenu.innerHTML = '<p>No programmes available at the moment.</p>';
            }
        })
        .catch(error => console.error('Error loading JSON:', error));

    // Render Programme Menu
    function renderProgrammeMenu(programmes, data) { // Add data parameter
        console.log("Rendering Programme Menu", programmes); // Log to verify programme data
        programmeMenu.innerHTML = `
            <h2>Psychology Programmes</h2>
            <p>Select a programme to view details and associated modules:</p>
        `;
        programmes.forEach(programme => {
            const button = document.createElement('button');
            button.textContent = programme.name;
            button.addEventListener('click', () => {
                console.log("Programme Button Clicked:", programme.name); // Log button click
                showProgrammeDetails(programme, data); // Pass data to showProgrammeDetails
            });
            programmeMenu.appendChild(button);
            console.log("Programme Button Created:", programme.name); // Log each button creation
        });
        
        programmeMenu.style.display = 'block'; 
        programmeMenu.classList.remove('hidden');
        programmeDetails.classList.add('hidden');
        moduleDetails.classList.add('hidden');
        backButton.classList.add('hidden');
        
        console.log("Programme Menu Classes:", programmeMenu.classList);
        console.log("Programme Details Classes:", programmeDetails.classList);
        console.log("Module Details Classes:", moduleDetails.classList);
    }

    // Show Programme Details and Module Menu
    function showProgrammeDetails(programme, data) { 
        console.log("Showing Programme Details for:", programme.name);
        programmeDetails.innerHTML = `
            <h2>${programme.name}</h2>
        `;
        renderDetails(programmeDetails, programme.details);
    
        const staffSection = createStaffSection(programme.staff, data);
        programmeDetails.appendChild(staffSection);
    
        const moduleMenu = document.createElement('div');
        moduleMenu.classList.add('module-menu');
        moduleMenu.innerHTML = `<h3>Modules:</h3>`;
        
        // Iterate through the module IDs and create buttons with module names
        programme.modules.forEach(moduleId => {
            // Find the corresponding module object in the data.modules array
            const module = data.modules.find(mod => mod.id === moduleId);
            
            if (module) {
                const moduleButton = document.createElement('button');
                moduleButton.textContent = module.name; // Use the actual module name
                moduleButton.addEventListener('click', () => showModuleDetails(moduleId, data)); // Pass data to showModuleDetails
                moduleMenu.appendChild(moduleButton);
                console.log("Module Button Created for Programme:", programme.name, "Module Name:", module.name); // Log module name
            } else {
                console.warn("Module not found for ID:", moduleId); // Log if module not found
            }
        });
        programmeDetails.appendChild(moduleMenu);
    
        // Hide Programme Menu and Show Programme Details
        programmeMenu.style.display = 'none'; 
        programmeDetails.classList.remove('hidden');
        moduleDetails.classList.add('hidden');
        backButton.classList.remove('hidden');
    
        // Set Back Button to Go Back to Programme Menu
        backButton.onclick = () => {
            programmeMenu.style.display = 'block';
            renderProgrammeMenu(data.programmes, data);
        };
        
        console.log("Programme Details Classes After Showing:", programmeDetails.classList);
    }
    

    // Render Staff Section
    function createStaffSection(staffId, data) { // Add data parameter
        const staffMember = data.staff.find(staff => staff.id === staffId);
        const staffSection = document.createElement('div');
        staffSection.classList.add('staff-section');

        if (staffMember) {
            staffSection.innerHTML = `
                <h3>Staff Member</h3>
                <p>If you have any questions about the programme, please contact ${staffMember.name}.</p>
                <img src="../${staffMember.picture}" alt="${staffMember.name}" class="staff-image">
                <p class="staff-name"><strong>${staffMember.name}</strong></p>
            `;
            console.log("Staff Section Created for:", staffMember.name); // Log staff section creation
        } else {
            staffSection.innerHTML = `<p>Please speak to a member of staff for more details.</p>`;
            console.warn("Staff Member Not Found for ID:", staffId); // Log if staff not found
        }

        return staffSection;
    }

    // Show Module Details
    function showModuleDetails(moduleId, data) { // Add data parameter
        console.log("Showing Module Details for Module ID:", moduleId);
        const module = data.modules.find(mod => mod.id === moduleId);
        if (!module) {
            console.error(`Module with ID ${moduleId} not found.`);
            return;
        }

        moduleDetails.innerHTML = `
            <h2>${module.name}</h2>
        `;
        renderDetails(moduleDetails, module.details);

        // Show Module Details, Hide Others
        programmeMenu.style.display = 'none'; // Hide the programme menu
        programmeDetails.classList.add('hidden');
        moduleDetails.classList.remove('hidden');
        backButton.classList.remove('hidden');

        // Set Back Button to Go Back to Programme Details
        backButton.onclick = () => {
            showProgrammeDetails(data.programmes.find(prog => prog.modules.includes(moduleId)), data);
        };
        
        console.log("Module Details Classes After Showing:", moduleDetails.classList);
    }

    // Render Details Function (Reusable for Programme and Module)
    function renderDetails(targetElement, details) {
        console.log("Rendering Details for Target Element:", targetElement.id, details); // Log details being rendered
        targetElement.innerHTML = ''; // Clear existing content
        details.forEach(detail => {
            if (detail.type === 'header') {
                const header = document.createElement('h3');
                header.textContent = detail.content;
                targetElement.appendChild(header);
                console.log("Detail Header Added:", detail.content); // Log each detail added
            } else if (detail.type === 'text') {
                const paragraph = document.createElement('p');
                paragraph.textContent = detail.content;
                targetElement.appendChild(paragraph);
                console.log("Detail Text Added:", detail.content); // Log each detail added
            } else if (detail.type === 'image') {
                const image = document.createElement('img');
                image.classList.add('details-image');
                image.src = `../${detail.src}`; // Updated image path
                image.alt = detail.alt;
                targetElement.appendChild(image);
                console.log("Detail Image Added:", detail.src); // Log each image added
            }
        });
    }
});
