document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector("main");

    // Introductory content
    const introContent = {
        title: "L6 Psychology Optional Module Information",
        description: `
            This site has been put together to help you decide which optional modules you want to do at Level 6. Here are few key things to keep in mind:
            <ul>
            <li>This site is for information only.</li>
            <li>Modules will only run if there are sufficient interest.</li>
            <li>It is recommended that you choose an option that interests you.</li> 
            <li>Consider which types of assessment tend to produce your best grades.</li>
            <li>Get in touch with the module leader for the module to ask any questions.</li>
            <li>Timetable information is based on the current academic year and are subject to change.</li>
            </ul>
            To get started click on your programme at the top.
            `
    };
    // function to load introductory content
    function loadIntroContent() {
        mainContent.innerHTML = `
            <h2>${introContent.title}</h2>
            <p>${introContent.description}</p>
        `;
    }

    //function to add listeners to the programme buttons
    function addProgrammeButtonListeners() {
        //this code will load main content information on click - so we need a load content information function
        const newProgrammeButtons = document.querySelectorAll(".programme-option");
        newProgrammeButtons.forEach(button => {
            button.addEventListener("click", () => {
                const programmeId = button.id;
                const programmeInfo = programmeDetails[programmeId];

                if (programmeInfo) {
                    updateMainContent(programmeInfo.title, programmeInfo.description, programmeInfo.modules);
                    // alert("updating")
                }

                setInactivityTimeout();
            });
        });
    };


    function updateMainContent(title, description, moduleIds = []) {
        let mandatoryModulesHTML = "";
        let optionalSemester1HTML = "";
        let optionalSemester2HTML = "";

        if (moduleIds.length) {
            moduleIds.forEach(moduleId => {
                const module = modules[moduleId]; // Access the module object
                if (module) { // Ensure the module exists
                    const moduleSection = createModuleSection(moduleId);

                    if (module.mandatory) {
                        // Mandatory module
                        mandatoryModulesHTML += moduleSection;
                    } else {
                        // Optional module sorted by semester
                        if (module.semester1) {
                            optionalSemester1HTML += moduleSection;
                        }
                        if (module.semester2) {
                            optionalSemester2HTML += moduleSection;
                        }
                    }
                }
            });
        }

        mainContent.innerHTML = `
            <h2>${title}</h2>
            <p>${description}</p>
    
            <h3>Mandatory Programme Modules</h3>
            ${mandatoryModulesHTML || "<p>No unique modules available for this programme.</p>"}
    
            <h3>Optional Modules - Semester 1</h3>
            ${optionalSemester1HTML || "<p>No Semester 1 modules available.</p>"}
    
            <h3>Optional Modules - Semester 2</h3>
            ${optionalSemester2HTML || "<p>No Semester 2 modules available.</p>"}
    
            <button class="back-button">Back</button>
        `;

        // Add event listeners to collapsible buttons
        const collapsibleButtons = document.querySelectorAll(".collapsible");
        collapsibleButtons.forEach(button => {
            button.addEventListener("click", function () {
                this.classList.toggle("active");
                const content = this.nextElementSibling;
                content.style.display = content.style.display === "block" ? "none" : "block";
            });
        });

        // Add event listener to the "Back" button
        const backButton = document.querySelector(".back-button");
        backButton.addEventListener("click", () => {
            loadIntroContent();
        });
    }


    function createModuleSection(moduleId) {
        const module = modules[moduleId];
        return `
            <div class="module">
                <button class="collapsible">${module.title}</button>
                <div class="module-content">
                    <p>${module.description}</p>
                    ${module.staff ? `<h3>Staff</h3><p>${module.staff}</p>` : ""}
                    ${module.assignments ? `<h3>Assessments</h3><p>${module.assignments}</p>` : ""}
                </div>
                <div class="gap"></div>
            </div>
        `;
    }

    function setInactivityTimeout() {
        clearTimeout(window.inactivityTimeout);
        window.inactivityTimeout = setTimeout(() => {
            loadIntroContent();
        }, 300000); // 300,000 milliseconds = 5 minutes
    }

    loadIntroContent();
    addProgrammeButtonListeners();
});

const programmeDetails = {
    "psych": {
        title: "Psychology",
        description: "Students on this programme can choose <strong>4</strong> optional modules in total. You can choose from modules in either semester 1 or semester 2. It is recommended that you choose two modules each semester.",
        modules: [
            "psy6145", "psy6115", "psy6005", "psy6035", "psy6045", "psy6125", "psy6165",
            "psy6015", "psy6065", "psy6075", "psy6085", "psy6135", "psy6155", "psy6175"
        ]
    },
    "counselling": {
        title: "Counselling Psychology",
        description: "Students on this programme can choose <strong>2</strong> optional modules. You should choose from Semester 1 or Semester 2 options.",
        modules: [
            "psy6145", "psy6115", "psy6005", "psy6035", "psy6045", "psy6125", "psy6165",
            "psy6015", "psy6013", "psy6075", "psy6085", "psy6135", "psy6155", "psy6175"
        ]
    },
    "sport-psych": {
        title: "Sport Psychology",
        description: "Students on this programme can choose <strong>2</strong> optional modules. You should choose from Semester 1 or Semester 2 options.",
        modules: [
            "psy6145", "psy6115", "psy6005", "psy6035", "psy6045", "psy6125", "psy6165",
            "psy6015", "psy6065", "psy6075", "psy6085", "psy6135", "psy6155", "psy6175", "psy6033"
        ]
    },
    "forensic-psych": {
        title: "Forensic Psychology",
        description: "Students on this programme can choose <strong>2</strong> optional modules. You should choose from Semester 1 or Semester 2 options.",
        modules: [
            "psy6145", "psy6115", "psy6005", "psy6035", "psy6045", "psy6125", "psy6165",
            "psy6015", "psy6065", "psy6075", "psy6085", "psy6023", "psy6155", "psy6175"
        ]
    },
    "child-dev": {
        title: "Psychology and Child Development",
        description: "Students on this programme can choose <strong>2</strong> optional modules. You should choose from Semester 1 or Semester 2 options.",
        modules: [
            "psy6145", "psy6115", "psy6005", "psy6035", "psy6045", "psy6125", "psy6165",
            "psy6015", "psy6065", "psy6075", "psy6085", "psy6135", "psy6155", "psy6175", "psy6003"
        ]
    },
    "with-soc": {
        title: "Psychology with Sociology",
        description: "Students on this programme can choose <strong>2</strong> optional modules. You should choose from Semester 1 or Semester 2 options.",
        modules: [
            "psy6075", "psy6125", "psy6165"
        ]
    },
    "with-crim": {
        title: "Psychology with Criminology",
        description: "Students on this programme can choose <strong>2</strong> optional modules. You should choose from Semester 1 or Semester 2 options.",
        modules: [
            "psy6135", "psy6085", "psy6045"
        ]
    }
};

const modules = {
    "psy6145": {
        title: "Psychology Research Project",
        staff: "Dr Tim Vestner, Dr Fayme Yeates",
        semester1: true,
        semester2: true,
        description: "An independent research project conducted throughout the year. We will ask you to produce your research idea before the end of Level 5.",
        assignments: "Research Project Report",
        mandatory: true
    },
    "psy6115": {
        title: "Professional Learning Through Work",
        staff: "Dr Ben Morris",
        semester1: true,
        semester2: true,
        description: "A work-based learning module to develop professional experience which runs throught out both semesters.",
        assignments: "Work-based Portfolio",
        mandatory: true
    },
    "psy6005": {
        title: "Biopsychology of Stress and Illness",
        staff: "Dr James Jackson",
        semester1: true,
        semester2: false,
        description: "This module explores the biological foundations of stress and illness, examining how our bodies respond to stressors and the role of subjective appraisal in health outcomes. Stress is a key precursor to both physical and mental health issues, and the module investigates how pathological conditions can emerge. Topics include stress appraisal, hormonal and neurotransmitter changes, immune function, cardiovascular disease, affective disorders, addiction, epigenetics, coping strategies, and accessing support. <p>Students will progress towards submission through structured weekly milestones, with informal group presentations fostering cohort-wide discussion and real-time feedback. Additionally, each group will receive a personalized podcast (via Panopto) summarizing their progress and offering further insights.</p>",
        assignments: "Group Grant Proposal (2000 words)",
        mandatory: false
    },
    "psy6035": {
        title: "Business Psychology",
        staff: "Bruce Rainford",
        semester1: true,
        semester2: false,
        description: "Business Psychology explores how psychology enhances workplace performance, job satisfaction, and organisational success. Covering key areas like recruitment, motivation, leadership, and workplace culture, this module applies psychological principles to real-world professional settings. Whether or not you pursue a career in business psychology, the insights gained will be valuable across industries, particularly when applying for jobs. Topics include career development, team dynamics, performance management, organisational change, and coping with workplace challenges.",
        assignments: "Case Study (2000 words)",
        mandatory: false
    },
    "psy6045": {
        title: "Psychology of Mental Health and Distress",
        staff: "Dr Louisa Peters",
        semester1: true,
        semester2: false,
        description: "This module provides a critical exploration of mental distress, examining its historical, social, and cultural contexts. It covers key models of mental illness, including biomedical, biopsychosocial, and service-user-led approaches, while also addressing barriers to treatment and equitable access to care. <p>Through lectures, group discussions, and debates, students will engage with topics such as psychiatric diagnosis, stigma, psychological interventions, and recovery. This challenging yet engaging module strengthens critical thinking skills, offering valuable insights applicable across psychology and mental health fields.</p>",
        assignments: "Written Assignment (2000 words)",
        mandatory: false
    },
    "psy6125": {
        title: "Health Behaviour Change in Context",
        staff: "Dr Ben Morris",
        semester1: true,
        semester2: false,
        description: "Led by Dr. Ben Morris, this module explores how health psychology assesses and influences behaviour change across various settings, from hospitals to communities. Topics include the Leeds Health Profile, health behaviours, behaviour change models, and effective communication for a lay audience. <p>Taught through interactive seminars and online resources, this module equips students with practical skills relevant to careers in health psychology, with many past students progressing into professional training or using it to enhance their degree profile.</p>",
        assignments: "Intervention Assessment (2500 words)",
        mandatory: false
    },
    "psy6165": {
        title: "Illusions, Biases, and Cognitive Impairments",
        staff: "Dr Tim Vestner",
        semester1: true,
        semester2: false,
        description: "This module explores how outliers, individual differences, and disorders reveal the complexities of human cognition. By examining amnesia, visual disorders, cultural and individual biases, and neurological conditions, students will gain insight into memory, perception, and consciousness. <p>Through critical analysis of atypical cognitive phenomena, students will challenge conventional understanding of how the mind works. Assessment allows for exploration of a chosen topic, encouraging deeper engagement with the subject.</p>",
        assignments: "Essay (2500 words)",
        mandatory: false
    },
    "psy6015": {
        title: "Psychology Negotiated Essay",
        staff: null,
        semester1: false,
        semester2: true,
        description: "This module offers students the opportunity to explore a self-chosen topic within psychology through a 3,000-word critical essay, without conducting empirical research. With guidance from a supervisor, students can delve deeply into an area of personal interest, ensuring it falls within psychology and does not overlap with other Level 6 assessments. <p>Past topics have included eugenics, social representation theory, gender identity, electroconvulsive therapy, and cultural influences on biological evolution.</p> Students submit a proposal at the start of Semester 2 and are matched with a supervisor from a diverse range of expertise, including critical psychology, forensic psychology, and mental health. Early discussion with staff is encouraged to refine ideas.",
        assignments: "Negotiated Essay (2500 words)",
        mandatory: false
    },
    "psy6065": {
        title: "Counselling Psychology",
        staff: "Bruce Rainford",
        semester1: false,
        semester2: true,
        description: "This module explores the theories, techniques, and applications of counselling psychology, focusing on the Psychodynamic, Humanistic, and Cognitive-Behavioural approaches. Students will critically examine how these frameworks address psychological distress and evaluate their effectiveness through research evidence.<p>The module also covers integrated therapy approaches, alternative delivery methods (e.g., time-limited therapy, NHS Stepped Care), and emerging trends, including new technologies and Positive Psychology.</p><p>Key topics include:</p><ul><li>The origins and applications of psychodynamic, humanistic, and cognitive-behavioural therapy</li><li>Therapeutic relationships and counselling delivery models</li><li>Innovations in counselling, including digital interventions</li><p>Assessment involves a client case study, where students apply multiple therapeutic approaches to assess psychological distress and develop an evidence-based intervention plan.</p>",
        assignments: "Case Study (2500 words)",
        mandatory: false
    },
    "psy6075": {
        title: "Critical Psychology",
        staff: "Dr Candice Whitaker",
        semester1: false,
        semester2: true,
        description: "Co-designed with Leeds Trinity psychology students, this module applies a feminist and discursive lens to critically explore gender, sexuality, race, social class, and justice. It examines the interpretative frameworks shaping these topics, addressing key ideological dilemmas and personal perspectives. <p>The module is framed by two central questions:</P><ul><li>How does psychology help people?</li><li>How could psychology help people?</li></ul><p>Sessions are highly interactive, featuring small group discussions, student-led presentations, and debates. Assessment includes:</p><ul><li>Active participation in at least four presentation weeks (pass/fail).</li><li>Conference poster (50%) exploring a module topic, supported by academic literature.</li><li>Reflective report (50%) analyzing personal learning and module content, grounded in academic research.<em> (Assessment subject to approval.)</em></li></ul>",
        assignments: "Written Report (2000 words)",
        mandatory: false
    },
    "psy6085": {
        title: "Cyberpsychology",
        staff: "Dr Paul McGivern",
        semester1: false,
        semester2: true,
        description: "This module explores the psychological impact of technology and human-computer interaction, examining how digital advancements shape individuals and society. Topics include online relationships, social media, gaming, addiction, cybercrime, data security, and the online behavior of children and young people. <p>Drawing from social, cognitive, health, and developmental psychology, students will critically analyze how technology influences thoughts, behaviors, and identity. The module also considers the benefits and challenges of emerging digital trends in education, health, and social settings.</p>",
        assignments: "Written Assignment (2500 words)",
        mandatory: false
    },
    "psy6135": {
        title: "Forensic Psychology",
        staff: "Dr Zac Nahouli",
        semester1: false,
        semester2: true,
        description: "This module explores the role of psychology in the criminal justice system, examining how psychological theories apply to crime, criminal behavior, and offender rehabilitation. Students will critically assess psychology’s impact at all stages, from crime detection to prosecution, incarceration, and rehabilitation. <p>Key topics include:</p><ul><li>Theories of crime and offender motivations</li><li>Violent and sexual offenders</li><li>Personality disorders and risk assessment</li><li>Gender differences in offending</li><li>Young offenders and serial killers</li></ul><p>By the end of the module, students will have a comprehensive understanding of contemporary forensic psychology and its real-world applications.</p>",
        assignments: "Essay (2500 words)",
        mandatory: false
    },
    "psy6155": {
        title: "Environmental Psychology",
        staff: "Dr Laura De Pretto",
        semester1: false,
        semester2: true,
        description: "This module examines the psychological relationship between humans and the natural environment, exploring both our impact on the planet and how nature influences wellbeing and psychological outcomes. <p>Students will investigate two key areas:</p><ol><li>Encouraging pro-environmental behavior – Understanding, assessing, and modifying environmental awareness using psychological theories, with a focus on the UN Sustainable Development Goals.</li><li>The psychological benefits of nature – Exploring restorative environments, biophilia, nature therapies, and child development.</li></ol><p>For assessment, students will create a resource to promote pro-environmental behaviors, choosing from formats such as educational workshops, podcasts, or infographics.</p>",
        assignments: "Negotiated Assessment (2000 words or equivalent)",
        mandatory: false
    },
    "psy6175": {
        title: "Collaborative Insights in Psychology and Culture",
        staff: "Dr Laura De Pretto",
        semester1: false,
        semester2: true,
        description: "This module explores cross-cultural psychology, examining how culture shapes behavior, cognition, and emotions. Students will engage in online, multicampus sessions with international peers and lecturers, gaining diverse perspectives on psychological theories and practices.<p>Key topics include:</p><ul><li>Cultural dimensions of personality, emotion, and communication</li><li>The psychological effects of globalization, migration, and acculturation</li>Cross-cultural frameworks applied to real-world issues</li></ul><p>Through group discussions, case studies, and collaborative international projects, students will critically analyze cultural influences on psychology and develop a deeper understanding of global perspectives.</p>",
        assignments: "Cultural Immersion Reflection and Analysis (2000 words)",
        mandatory: false
    },
    "psy6013": {
        title: "Applied Counselling Psychology",
        staff: null,
        semester1: false,
        semester2: true,
        description: "This module focuses on the practical application of counselling psychology, exploring interventions and therapeutic techniques. Students learn how to tailor psychological approaches to meet the diverse needs of clients in various contexts.",
        assignments:"A case study analysis and reflective essay, where students apply counselling theories to practical scenarios, demonstrating their understanding of therapeutic interventions.",
        mandatory: true
    },
    "psy6023": {
        title: "Applied Forensic Psychology",
        staff: null,
        semester1: false,
        semester2: true,
        description: "In this module, students apply their knowledge to complex forensic cases, focusing on intervention strategies, risk assessment, and the evaluation of rehabilitation programs. The module emphasizes critical thinking and reflective practice, preparing students for professional roles in forensic psychology.",
        assignments: "A case study analysis and reflective essay applying forensic psychology principles to real-world scenarios.",
        mandatory: true
    },
    "psy6003": {
        title: "Applied Child and Educational Psychology",
        staff: null,
        semester1: false,
        semester2: true,
        description: "In this module we will explore the role of wider society, educational psychologists, and other school-based practitioners in supporting children's wider development, from developing socioemotional skills to ensuring their wellbeing. We will be asking questions like: 'Are schools a good place to address child mental health issues?', 'How can schools improve pupil wellbeing?', and 'What evidence is there that school-based interventions work?'. Throughout the module you will get the chance to put yourself in the shoes of an educational psychologist, drawing on psychological ideas and new research to suggest strategies to support those in education settings. You’ll also get to meet members of our wider psychology team, learning how they apply their specialist knowledge areas to supporting children's development in a variety of contexts.",
        assignments: "Students will write a comprehensive essay evaluating the role of educational psychologists and other practitioners in supporting child development (50%), and working together to present a case study or an intervention strategy to support children and young people in educational settings.",
        mandatory: true
    },
    "psy6033": {
        title: "Sport Psychology in Context",
        staff: null,
        semester1: false,
        semester2: true,
        description: "This module explores the application of sport psychology principles in diverse contexts, such as professional sports teams, individual athletes, and community sports settings. It includes a critical evaluation of case studies, intervention strategies, and contemporary issues in sport psychology. Students develop a sophisticated understanding of how psychological factors can impact performance, well-being, and development across different populations and levels of sport participation.",
        assignments: null,
        mandatory: true
    }
};
