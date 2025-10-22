/* ==============================================
   LTU Programme – Minimal, Collapsible Explorer
   ============================================== */

/* ---------- Static DATA (edit freely) ---------- */
const DATA = {
  copy: {
    programmeDescription:
      `
      <h2>Shape your future from day one</h2>
      <p>Unlike most psychology degrees, at Leeds Trinity you can <strong>specialise from your very first year</strong>, choosing a pathway that reflects your passions and career goals. Whether you’re drawn to mental health, education, crime, health, business, or sport, your pathway runs throughout your degree - allowing you to explore what inspires you while still gaining a full <strong>BPS-accredited Psychology foundation</strong>.</p>
      <p>Alongside core psychological science, you’ll explore real-world issues through applied projects, research, and professional skills development - preparing you for postgraduate training or a career where psychology makes a difference.</p>
      <p>By completing the required number of credits in your chosen area, you’ll <strong>graduate with your pathway named on your degree certificate</strong>, highlighting your specialist expertise.</p>
      <p>Whether you arrive knowing exactly where you want to go, or you’re still exploring your options, this degree adapts to you. You might follow a single pathway from start to finish as <em>The Specialist</em>, mix and match your interests as <em>The Explorer</em>, or begin in one area and evolve into another as <em>The Pathfinder</em>. However you approach it, your Psychology degree will reflect your journey — and the future you want to build.</p>
      `,
    pathwayDescription:
      "<h3>BSc (Hons) Psychology with six pathways:</h3>"
  },

  // Student profiles - THIS SECTION WAS MISSING/CAUSING THE ERROR
  profiles: [
    {
      id: "explorer",
      name: "The Explorer",
      icon: "compass",
      intro:
        "If you’re fascinated by all things Psychology and want to discover what each pathway offers…",
      bullets: [
        "Pick optional modules from a mix of areas (e.g., Forensic, Health, Counselling).",
        "Build a broad foundation of knowledge.",
        "Graduate with a versatile BSc (Hons) Psychology degree that fits you."
      ]
    },
    {
      id: "specialist",
      name: "The Specialist",
      icon: "target",
      intro:
        "If you already know where you’re headed — e.g., becoming a Counselling Psychologist…",
      bullets: [
        "Choose optional modules only from your chosen pathway.",
        "Focus on building knowledge and skills for your future career.",
        "Graduate with a BSc (Hons) Psychology (Counselling Perspectives) degree — a strong foundation for postgraduate training."
      ]
    },
    {
      id: "pathfinder",
      name: "The Pathfinder",
      icon: "shuffle",
      intro:
        "If you start focussed (say, Health Psychology) but your interests evolve as you study…",
      bullets: [
        "Begin by following one pathway (e.g., Health Psychology).",
        "Stay flexible and switch things up partway through!*",
        "Graduate with a versatile BSc (Hons) Psychology degree shaped by your choices."
      ]
    }
  ],

  // Year rules: customise the message per level (or delete a line to hide)
  yearRules: {
    "Level 4":
      "Level 4: Students can select one pathway optional module in Semester 2 (alongside compulsory modules).",
    "Level 5":
      "Level 5: Students select one pathway optional module in Semester 1 AND one pathway optional module in Semester 2 (alongside compulsory modules).",
    "Level 6":
      "Level 6: Students can select three optional modules from the list available across Semester 1 and Semester 2 (alongside compulsory year-long Research Project)."
  },

  // Pathway names must match the CSS mapping in styles.css
  pathways: [
    "Psychology",
    "Counselling",
    "Education & Child Dev",
    "Forensic",
    "Health",
    "Occupational, Business & Marketing",
    "Sport & Exercise"
  ],

  // ---- Modules: (Your module data has been retained) ----
  modules: [
    // --------------------------------- Level 4 Modules ---------------------------------
    { id: "PSY4113", title: "Exploring Human Experience", tagline: "Discover how people grow, connect, and shape the world around them.", overview: "Explore the foundations of social and developmental psychology through real-world applications. You’ll examine how individuals think, relate, and develop across the lifespan, using qualitative and quantitative research approaches — while considering global, cultural, and historical influences that shape modern psychology.", assessments: ["500-word essay", "2,000-word or equivalent Negotiated Assessment*"], tl_methods: ["2 x 1.5-hour interactive lectures", "1 x 2-hour practical workshop"], level: "Level 4", term: "Sem 1", isCompulsory: true, duration: "semester", pathways: ["Psychology"] },
    { id: "PSY4015", title: "Being a Successful Student", tagline: "Become a confident learner - where academic success starts with self-belief.", overview: "Discover the skills and strategies that help you thrive at university. You’ll explore the hidden curriculum - the unwritten rules of academic life - and develop key skills in writing, referencing, communication, and teamwork. Learn to manage your time effectively, use feedback to grow, and build the resilience needed to succeed throughout your degree.", assessments: ["10-minute group presentation (Employer Challenge)", "1,000-word Reflective Portfolio"], tl_methods: ["1 x 1.5-hour group tutorial"], level: "Level 4", term: "Sem 1", isCompulsory: true, duration: "semester", pathways: ["Psychology"] },
    { id: "PSY4135", title: "Perspectives in Psychology", tagline: "Discover how psychology shapes everyday life - from classrooms to courtrooms and beyond.", overview: "Explore key areas of applied psychology including counselling, forensic, education, health, business, and sport. Through real-world case studies, you’ll examine ethical practice, professional roles, and the impact of psychology on individuals, organisations, and society.", assessments: ["Infographic and Pre-recorded Presentation"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 4", term: "Sem 1", isCompulsory: true, duration: "semester", pathways: ["Psychology"] },
    { id: "PSY4123", title: "Investigating Mechanisms of Behaviour", tagline: "Discover how the brain and mind shape behaviour - from neurons to global impact.", overview: "Explore the foundations of cognitive and biological psychology through real-world applications. You’ll examine how thought, emotion, and physiology interact, using both quantitative and qualitative research approaches, while considering cultural, ethical, and historical perspectives that have shaped modern psychology.", assessments: ["Online quiz", "2,000-word Quantitative Research Report", "6-hours Research Participation"], tl_methods: ["2 x 1.5-hour interactive lectures", "1 x 2-hour practical workshop"], level: "Level 4", term: "Sem 2", isCompulsory: true, duration: "semester", pathways: ["Psychology"] },
    { id: "PSY4025", title: "Building my Future", tagline: "Build your future - where your psychology journey meets real-world opportunity.", overview: "Discover how to turn your skills into a career with confidence and purpose. You’ll explore career pathways in psychology and beyond, strengthen your CV, practise interview skills, and learn how to find and secure placements, volunteer roles, and graduate opportunities - preparing you for your next steps after university.", assessments: ["Skill badge portfolio", "Professional Challenge Project or Work-Based Experience (20-hours)", "1,500-word CV and skills-based reflection"], tl_methods: ["1 x 1.5-hour group tutorial"], level: "Level 4", term: "Sem 2", isCompulsory: true, duration: "semester", pathways: ["Psychology"] },
    
    // Level 4 Optional Modules (Sem 2)
    { id: "PSY4115", title: "Psychology in Context", tagline: "Discover applied psychology - where understanding people transforms communities.", overview: "Explore how psychology addresses real-world challenges through evidence-based practice. You’ll examine how psychological theory supports mental health, equality, and social justice, and learn how psychology contributes to tackling issues such as discrimination, health inequalities, and poverty.", assessments: ["1,500-word Negotiated Capstone Assessment*"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 4", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Psychology"] },
    { id: "PSY4125", title: "Counselling Psychology in Context", tagline: "Discover the foundations of counselling psychology - where theory meets real-world impact.", overview: "Explore how psychology supports wellbeing through real-world counselling practice. You’ll learn about therapeutic approaches, ethical practice, and evidence-based interventions - developing skills to promote mental health, diversity, and social justice.", assessments: ["1,500-word Negotiated Capstone Assessment*"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 4", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Counselling"] },
    { id: "PSY4135_EDU", title: "Education and Child Development Psychology in Context", tagline: "Discover the psychology of learning and development - where theory shapes brighter futures.", overview: "Explore how psychology informs education and child development through real-world case studies. You’ll learn about key theories of learning, behaviour, and social context, and examine evidence-based interventions that support inclusion and wellbeing. Develop an understanding of how psychology promotes equality, diversity, and social justice in educational settings.", assessments: ["1,500-word Negotiated Capstone Assessment*"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 4", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Education & Child Dev"] },
    { id: "PSY4415", title: "Forensic Psychology in Context", tagline: "Discover the psychology of crime and justice - where science meets the real world.", overview: "Explore how psychology helps us understand criminal behaviour, risk, and rehabilitation through real-world case studies. You’ll examine evidence-based approaches in offender rehabilitation, eyewitness testimony, and investigative psychology, while considering how psychology promotes ethics, equality, and social justice within legal and correctional systems.", assessments: ["1,500-word Negotiated Capstone Assessment*"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 4", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Forensic"] },
    { id: "PSY4515", title: "Health Psychology in Context", tagline: "Discover the psychology of health and wellbeing - where behaviour meets better living.", overview: "Explore how psychology supports physical and mental health through real-world case studies. You’ll learn about the biopsychosocial model, behaviour change theories, and evidence-based interventions for health promotion and illness prevention - examining how psychology reduces health inequalities and promotes wellbeing across diverse communities.", assessments: ["1,500-word Negotiated Capstone Assessment*"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 4", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Health"] },
    { id: "PSY4615", title: "Occupational, Business and Marketing Psychology in Context", tagline: "Discover the psychology of work, business, and consumer behaviour - where people drive performance and purpose.", overview: "Explore how psychology shapes workplaces, organisations, and markets through real-world case studies. You’ll learn about motivation, leadership, and consumer behaviour, examining evidence-based approaches to wellbeing, branding, and organisational culture — and how psychology promotes ethics, inclusion, and social responsibility in professional and consumer settings.", assessments: ["1,500-word Negotiated Capstone Assessment*"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 4", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Occupational, Business & Marketing"] },
    { id: "PSY4715", title: "Sport and Exercise Psychology in Context", tagline: "Discover the psychology of sport and exercise - where mindset powers performance.", overview: "Explore how psychology enhances motivation, resilience, and wellbeing through real-world case studies. You’ll learn about theories of performance, confidence, and group dynamics, and examine evidence-based approaches that promote inclusion, mental health, and social equality in sport and physical activity.", assessments: ["1,500-word Negotiated Capstone Assessment*"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 4", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Sport & Exercise"] },
    
    // --------------------------------- Level 5 Modules ---------------------------------
    { id: "PSY5113", title: "Mind, Brain and Social Behaviour", tagline: "Explore the science of mind, behaviour, and human connection.", overview: "Delve into how psychologists investigate thought, behaviour, and experience across social, developmental, cognitive, and biological perspectives. Examine how people grow, relate, and decide—while uncovering the ethical, cultural, and global forces that shape psychological research and real-world impact.", assessments: ["2,000-word or equivalent Negotiated Group Assessment*", "2,000-word Infographic with Supporting Exposition"], tl_methods: ["2 x 1.5-hour interactive lectures", "1 x 2-hour practical workshop"], level: "Level 5", term: "Sem 1", isCompulsory: true, duration: "semester", pathways: ["Psychology"] },
    { id: "PSY5015", title: "Differences and Diversity", tagline: "Discover the factors that define our individuality", overview: "Explore the fascinating field of individual differences, from personality and intelligence to emotion, motivation, and health. Investigate how psychology explains diversity in human experience—including gender identity and differences—through theory, evidence, and critical evaluation.", assessments: ["2,000-word ‘What if’ Analysis"], tl_methods: ["2 x 2.5-hour interactive lectures"], level: "Level 5", term: "Sem 1", isCompulsory: true, duration: "semester", pathways: ["Psychology"] },

    // Level 5 Optional Modules (Sem 1)
    { id: "PSY5115", title: "Concepts in Psychology", tagline: "From theory to practice: exploring psychology in action", overview: "Explore how core areas of psychology—social, developmental, biological, and cognitive—intersect to shape human behaviour and inform real-world solutions. Examine classic and contemporary theories, analyse case studies across diverse settings, and consider the ethical and cultural dimensions of applying psychology in practice.", assessments: ["2,000-word Case Study"], tl_methods: ["2 x 2.5-hour workshops"], level: "Level 5", term: "Sem 1", isCompulsory: false, duration: "semester", pathways: ["Psychology"] },
    { id: "PSY5215", title: "Concepts in Counselling Psychology", tagline: "Bridging psychological theory and therapeutic practice.", overview: "Examine how core areas of psychology—biological, cognitive, social, and developmental—inform the principles and practice of counselling psychology. Through case studies and real-world examples, explore key therapeutic approaches, the science behind mental health, and the ethical and cultural dimensions of effective psychological care.", assessments: ["2,000-word Case Study"], tl_methods: ["2 x 2.5-hour workshops"], level: "Level 5", term: "Sem 1", isCompulsory: false, duration: "semester", pathways: ["Counselling"] },
    { id: "PSY5315", title: "Concepts in Education and Child Development Psychology", tagline: "Applying psychology to learning and development.", overview: "Discover how psychology informs education and child development, integrating theory with real-world practice. Through case studies and applied research, explore how brain development, learning processes, and social-emotional factors influence teaching, behaviour, and inclusion in diverse educational settings.", assessments: ["2,000-word Case Study"], tl_methods: ["2 x 2.5-hour workshops"], level: "Level 5", term: "Sem 1", isCompulsory: false, duration: "semester", pathways: ["Education & Child Dev"] },
    { id: "PSY5415", title: "Concepts in Forensic Psychology", tagline: "Uncover the psychology behind crime and justice.", overview: "Explore how psychological theory and research illuminate the causes of criminal behaviour and inform forensic practice. Through real-world cases and applied study, examine biological, cognitive, social, and developmental influences on offending, as well as the ethical, cultural, and rehabilitative dimensions of working within the justice system.", assessments: ["2,000-word Case Study"], tl_methods: ["2 x 2.5-hour workshops"], level: "Level 5", term: "Sem 1", isCompulsory: false, duration: "semester", pathways: ["Forensic"] },
    { id: "PSY5515", title: "Concepts in Health Psychology", tagline: "Exploring the psychology behind behaviour, health, and care", overview: "Explore how biological, cognitive, social, and developmental factors shape health behaviours and outcomes. Using case studies and applied research, examine the psychological principles behind behaviour change, stress management, and public health interventions, while considering ethical, cultural, and lifespan perspectives.", assessments: ["2,000-word Case Study"], tl_methods: ["2 x 2.5-hour workshops"], level: "Level 5", term: "Sem 1", isCompulsory: false, duration: "semester", pathways: ["Health"] },
    { id: "PSY5615", title: "Concepts in Occupational, Business and Marketing Psychology", tagline: "Applying psychology to work, leadership, and consumer behaviour.", overview: "Explore how psychological principles shape organisational performance, leadership, and consumer decision-making. Through case studies and applied research, examine cognitive, social, and developmental factors in the workplace, marketing, and business, while considering ethics, diversity, and well-being in professional contexts.", assessments: ["2,000-word Case Study"], tl_methods: ["2 x 2.5-hour workshops"], level: "Level 5", term: "Sem 1", isCompulsory: false, duration: "semester", pathways: ["Occupational, Business & Marketing"] },
    { id: "PSY5715", title: "Concepts in Sport and Exercise Psychology", tagline: "Enhancing performance, motivation, and well-being through psychology", overview: "Explore how social, developmental, biological, and cognitive psychology inform athletic performance, motivation, and engagement in physical activity. Through applied research and case studies, examine strategies for enhancing skill, managing stress, and promoting well-being, while considering diversity, ethics, and the cultural context of sport.", assessments: ["2,000-word Case Study"], tl_methods: ["2 x 2.5-hour workshops"], level: "Level 5", term: "Sem 1", isCompulsory: false, duration: "semester", pathways: ["Sport & Exercise"] },
    
    { id: "PSY5123", title: "Transforming Lives", tagline: "Applying psychology to create real-world impact", overview: "Explore how psychological research can transform lives, communities, and societies by addressing contemporary issues. Work collaboratively to design research projects, applying methods and knowledge to advance social justice and global development goals.", assessments: ["2 x 2,000-word Research Reports", "6-hours Research Participation"], tl_methods: ["1 x 1.5-hour interactive workbook", "1 x 1.5-hour interactive lecture", "1 x 2-hour workshop"], level: "Level 5", term: "Sem 2", isCompulsory: true, duration: "semester", pathways: ["Psychology"] },
    { id: "PSY5025", title: "Being a Successful Graduate", tagline: "Develop, showcase, and advance your skills for the future", overview: "Develop the skills and knowledge essential for your career and further study. Learn to map your strengths, create a career passport, and gain practical guidance on applications, personal statements, and navigating postgraduate or graduate opportunities.", assessments: ["Badge portfolio", "1,500-word CV and Skills-Based Reflection"], tl_methods: ["1 x 1.5-hour group tutorial", "90-hours work-based experience"], level: "Level 5", term: "Sem 2", isCompulsory: true, duration: "semester", pathways: ["Psychology"] },
    
    // Level 5 Optional Modules (Sem 2)
    { id: "PSY5125_CONTEMP", title: "Contemporary Issues in Psychology", tagline: "Investigating the pressing issues shaping modern psychology", overview: "Investigate current and emerging issues in psychology, from digital well-being and AI ethics to body image and sustainability. Engage with cutting-edge research through discussions, activities, and applied projects, developing critical skills to evaluate and understand contemporary psychological challenges.", assessments: ["2,000-word Research Proposal"], tl_methods: ["2 x 2.5-hour workshops"], level: "Level 5", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Psychology"] },
    { id: "PSY5225", title: "Contemporary Issues in Counselling Psychology", tagline: "Examining the cutting edge of counselling psychology.", overview: "Explore contemporary issues in counselling psychology, from mental health stigma and inequalities in care to AI in therapy and workplace well-being. Engage with the latest research through discussions, applied activities, and critical evaluation to understand and address real-world challenges in mental health.", assessments: ["2,000-word Research Proposal"], tl_methods: ["2 x 2.5-hour workshops"], level: "Level 5", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Counselling"] },
    { id: "PSY5325", title: "Contemporary Issues in Education and Child Development Psychology", tagline: "Exploring the forefront of education and child development psychology.", overview: "Investigate contemporary issues in education and child development, from mental health and learning disabilities to equity, gender development, and AI in learning. Engage with cutting-edge research through discussions, activities, and critical evaluation to address real-world challenges in educational practice.", assessments: ["2,000-word Research Proposal"], tl_methods: ["2 x 2.5-hour workshops"], level: "Level 5", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Education & Child Dev"] },
    { id: "PSY5425", title: "Contemporary Issues in Forensic Psychology", tagline: "Exploring contemporary developments in criminal and forensic psychology", overview: "Examine contemporary issues in forensic psychology, from false memories and interrogation techniques to mental illness in the criminal justice system and psychopathy. Engage with cutting-edge research through discussions, activities, and critical evaluation to understand and address real-world forensic challenges.", assessments: ["2,000-word Research Proposal"], tl_methods: ["2 x 2.5-hour workshops"], level: "Level 5", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Forensic"] },
    { id: "PSY5525", title: "Contemporary Issues in Health Psychology", tagline: "Exploring contemporary developments in health and well-being", overview: "Investigate contemporary issues in health psychology, from health disparities and behaviour change to stress and well-being. Engage with cutting-edge research through discussions, activities, and critical evaluation to understand and address real-world health challenges.", assessments: ["2,000-word Research Proposal"], tl_methods: ["2 x 2.5-hour workshops"], level: "Level 5", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Health"] },
    { id: "PSY5625", title: "Contemporary Issues in Occupational, Business and Marketing Psychology", tagline: "Tackling today’s challenges in work, business, and marketing psychology", overview: "Investigate current developments in occupational, business, and marketing psychology, from workplace well-being and leadership to AI, remote work, and consumer behaviour. Engage with cutting-edge research through discussions, activities, and critical evaluation to address real-world organisational and market challenges.", assessments: ["2,000-word Research Proposal"], tl_methods: ["2 x 2.5-hour workshops"], level: "Level 5", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Occupational, Business & Marketing"] },
    { id: "PSY5725", title: "Contemporary Issues in Sport and Exercise Psychology", tagline: "Exploring contemporary developments in athletic performance and well-being", overview: "Investigate current developments in sport and exercise psychology, from mental health and motivation to equity, inclusion, and performance challenges. Engage with cutting-edge research through discussions, activities, and critical evaluation to address real-world issues in sport and physical activity.", assessments: ["2,000-word Research Proposal"], tl_methods: ["2 x 2.5-hour workshops"], level: "Level 5", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Sport & Exercise"] },
    
    // --------------------------------- Level 6 Modules ---------------------------------
    { id: "PSY616X", title: "Psychology Research Project (Pathway Perspectives)", tagline: "Bring psychology to life through your own research journey.", overview: "Design and conduct your own independent research project using quantitative or qualitative methods. You’ll explore techniques such as statistical analysis, experimental design, and thematic analysis to answer a question that matters to you. With a strong focus on ethics and participant wellbeing, you’ll develop the skills to produce meaningful, responsible, and impactful psychological research - tailored to your chosen pathway.", assessments: ["10-minute poster presentation", "Ethical approval", "8,000-word research report"], tl_methods: ["10 x 1.5-hour interactive lectures", "15 x 2-hour practical workshop", "6-hours individual supervision"], level: "Level 6", term: "All year", isCompulsory: true, duration: "all-year", pathways: ["Psychology"] },
    
    // Level 6 Optional Modules (Distributed for rendering)
    { id: "PSY6815", title: "Psychology of Mental Health and Distress", tagline: "Explore the psychology of mental health - where understanding leads to compassion and change.", overview: "Examine how psychology explains and responds to mental distress through diverse perspectives and critical debate. You’ll explore diagnostic systems, causes of mental ill-health, and evidence-based interventions across different populations. Learn to evaluate treatments from both scientific and service-user viewpoints, consider barriers to access, and apply the BPS Code of Ethics to promote equity, inclusion, and social justice in mental health practice.", assessments: ["2,000-word or equivalent Negotiated Assessment*"], tl_methods: ["1 x 1.5-hour lecture", "1 x 1-hour seminar"], level: "Level 6", term: "Sem 1", isCompulsory: false, duration: "semester", pathways: ["Psychology"] },
    { id: "PSY6825", title: "Cyberpsychology", tagline: "Discover the psychology of the digital world - where technology meets human behaviour.", overview: "Explore how online environments shape the way we think, feel, and connect. You’ll examine topics such as online relationships, risk-taking, digital addiction, and the rise of AI in everyday life. Learn how psychological principles influence online design, behaviour, and identity, and uncover the key social and historical moments that have shaped our digital age.", assessments: ["2,000-word Written Assignment"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 6", term: "Sem 1", isCompulsory: false, duration: "semester", pathways: ["Psychology"] },
    { id: "PSY6835", title: "Illusions, Biases, and Cognitive Impairments", tagline: "Explore how the mind can mislead - and what that reveals about how we think.", overview: "Through sensory illusions, cognitive biases, and neurological disorders, you’ll uncover how perception, attention, and reasoning really work. From the Rubber Hand Illusion to confirmation bias, you’ll investigate how the brain interprets - and sometimes distorts - reality, gaining insight into the fascinating mechanisms behind human thought and behaviour.", assessments: ["2,000-word Essay"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 6", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Psychology"] },
    
    { id: "PSY6215", title: "Counselling Psychology in Practice (Counselling Perspectives)", tagline: "Discover how counselling transforms lives - through connection, inclusion, and care.", overview: "Explore key approaches to counselling and psychotherapy across individual, group, and technology-assisted settings. You’ll examine contemporary issues such as culture, neurodivergence, poverty, and spirituality, gaining insight into how social justice principles shape inclusive, ethical, and effective counselling practice in today’s diverse world.", assessments: ["2,000-word or equivalent Negotiated Assessment* (Response to Problem)"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 6", term: "Sem 1", isCompulsory: false, duration: "semester", pathways: ["Counselling"] },
    { id: "PSY6225", title: "The Great Psychotherapy Debate (Counselling Perspectives)", tagline: "Step into the great psychotherapy debate - where theory meets real-world change.", overview: "Explore how different therapeutic approaches help people overcome challenges such as anxiety and depression. You’ll examine the effectiveness of key models - including dynamic, person-centred, mindfulness, and compassion-focused therapies - and consider how diverse methods, techniques, and therapist styles contribute to client transformation across different contexts.", assessments: ["2,000-word or equivalent Negotiated Assessment* (Response to Problem)"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 6", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Counselling"] },
    
    { id: "PSY6315", title: "Key Skills for Working with Children, Young People, and Families (Education and Child Development Perspectives)", tagline: "Develop the skills to make a difference - supporting children, young people, and families.", overview: "Explore the psychological principles and interpersonal skills needed to work effectively in education, health, and community settings. You’ll examine positive psychology, communication strategies, and practitioner wellbeing, applying theory and research to real-world contexts where compassion, adaptability, and understanding are key.", assessments: ["2,000-word Case Study"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 6", term: "Sem 1", isCompulsory: false, duration: "semester", pathways: ["Education & Child Dev"] },
    { id: "PSY6325", title: "Questions of Modern Childhood (Education and Child Development Perspectives)", tagline: "Explore the big questions shaping modern childhood.", overview: "From screen time to parenting styles, you’ll examine the debates that influence how children are raised, educated, and supported today. Drawing on psychological theory and evidence, you’ll evaluate competing perspectives and learn how to communicate your findings clearly and confidently to a range of audiences.", assessments: ["15-minute individual presentation"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 6", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Education & Child Dev"] },

    { id: "PSY6415", title: "Investigative Psychology (Forensic Perspectives)", tagline: "Discover how psychology helps solve crimes and deliver justice.", overview: "Explore how psychological science supports real-world policing and criminal investigation. You’ll examine topics such as offender profiling, criminal behaviour, and interview techniques, while critically evaluating theories and research that inform evidence gathering, crime prevention, and courtroom practice.", assessments: ["2,000-word Essay"], tl_methods: ["1 x 1.5-hour lecture", "1 x 1-hour seminar"], level: "Level 6", term: "Sem 1", isCompulsory: false, duration: "semester", pathways: ["Forensic"] },
    { id: "PSY6425", title: "Working with Dangerous and Serious Offenders (Forensic Perspectives)", tagline: "Explore how psychology supports rehabilitation and risk management in forensic settings.", overview: "Examine how psychological theories and research are applied to understand, assess, and work with serious and high-risk offenders. Through real-world case studies and contemporary research, you’ll investigate risk assessment, intervention, and rehabilitation models - developing evidence-based insights into how psychology promotes positive change within the criminal justice system.", assessments: ["2,000-word Case Study"], tl_methods: ["1 x 1.5-hour lecture", "1 x 1-hour seminar"], level: "Level 6", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Forensic"] },
    
    { id: "PSY6515", title: "The Science and Art of Living Well (Health Perspectives)", tagline: "Discover the science and art of living well - where psychology meets everyday life.", overview: "Explore how psychological principles enhance well-being across the lifespan. You’ll examine the science of happiness, resilience, self-compassion, and stress management, learning practical, evidence-based techniques to promote mental and physical health in yourself and others.", assessments: ["2,000-word Portfolio"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 6", term: "Sem 1", isCompulsory: false, duration: "semester", pathways: ["Health"] },
    { id: "PSY6525", title: "Behaviour Change for Health (Health Perspectives)", tagline: "Empower positive change - where psychology transforms lives.", overview: "Discover how behaviour change theories, and psychological research can reduce unhealthy habits and promote wellbeing. You’ll examine factors that influence behaviours such as physical activity, diet, sleep, and alcohol use — and learn how to design effective interventions that empower individuals and communities to break barriers and build healthier lifestyles.", assessments: ["2,000-word or equivalent Negotiated Group Assessment*"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 6", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Health"] },

    { id: "PSY6615", title: "Work Psychology (Occupational, Business and Marketing Perspectives)", tagline: "Explore the psychology of work - driving performance, wellbeing, and culture.", overview: "Examine how psychological science enhances the workplace, covering topics such as recruitment, training, motivation, stress, and leadership. You’ll learn evidence-based strategies for improving productivity and wellbeing, while considering how psychological principles promote diversity and ethical practice in modern organisations.", assessments: ["2,000-word Case Study"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 6", term: "Sem 1", isCompulsory: false, duration: "semester", pathways: ["Occupational, Business & Marketing"] },
    { id: "PSY6625", title: "Consumer and Marketing Psychology (Occupational, Business and Marketing Perspectives)", tagline: "Uncover the psychology of consumer choice and marketing influence.", overview: "Explore how cognitive and social psychology shape consumer behaviour, from attention and memory to motivation and decision-making. You’ll examine the ethics of advertising, the impact of branding, and the psychological factors behind purchasing choices - developing a critical understanding of marketing and consumer practices.", assessments: ["2,000-word Written Assignment"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 6", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Occupational, Business & Marketing"] },

    { id: "PSY6715", title: "The Psychology of Injury and Rehabilitation (Sport and Exercise Perspectives)", tagline: "Explore the psychology of recovery - building resilience in sport and exercise.", overview: "Examine the psychological impact of sports injury, from initial diagnosis to long-term rehabilitation. You’ll explore theories of coping, adherence to treatment, and the role of the psychologist in supporting mental and emotional recovery, learning how to apply evidence-based strategies to promote wellbeing and a successful return to activity.", assessments: ["2,000-word or equivalent Negotiated Assessment*"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 6", term: "Sem 1", isCompulsory: false, duration: "semester", pathways: ["Sport & Exercise"] },
    { id: "PSY6725", title: "The Psychology of Human Performance (Sport and Exercise Perspectives)", tagline: "Discover what drives peak performance - and the psychology behind success.", overview: "Explore how psychological principles enhance performance and wellbeing in high-pressure environments. You’ll examine theories and research on motivation, focus, resilience, and the interaction between individuals and their environments - gaining insight into how psychology helps people perform at their best.", assessments: ["2,000-word or equivalent Negotiated Assessment*"], tl_methods: ["1 x 2.5-hour workshop"], level: "Level 6", term: "Sem 2", isCompulsory: false, duration: "semester", pathways: ["Sport & Exercise"] },
  ]
};

/* ---------- App state & constants ---------- */
const state = { q: "", kind: "all", pathway: null };

const YEARS = [
  { id: "l4", level: "Level 4", heading: "Level 4 (Year 1)" },
  { id: "l5", level: "Level 5", heading: "Level 5 (Year 2)" },
  { id: "l6", level: "Level 6", heading: "Level 6 (Year 3)" }
];

const TERM_ATTR = { "All year": "all-year", "Sem 1": "sem1", "Sem 2": "sem2" };

/* ---------- DOM helpers ---------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (root, sel) => Array.from(root.querySelectorAll(sel));

/* ---------- Mount top copy (auto-hide if blank) ---------- */
function mountCopy() {
  const { programmeDescription, pathwayDescription } = DATA.copy || {};
  const p = $("#programme-description"),
    s = $("#student-profiles"),
    d = $("#pathway-description");

  if (programmeDescription) {
    p.innerHTML = programmeDescription;
    p.hidden = false;
  } else p.hidden = true;

  // Student profiles section is always visible if we have data to render
  if ((DATA.profiles || []).length) {
    s.hidden = false;
  } else {
    s.hidden = true;
  }

  if (pathwayDescription) {
    d.innerHTML = pathwayDescription;
    d.hidden = false;
  } else d.hidden = true;
}

/* ---------- Pathway chips ---------- */
function mountPathways() {
  const ul = $("#pathway-list");
  if (!ul) return;
  ul.innerHTML = "";
  (DATA.pathways || []).forEach((label) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pathway-chip";
    btn.dataset.pathway = label;
    btn.setAttribute("aria-pressed", "false");
    btn.innerHTML = `<span class="dot" aria-hidden="true"></span>${label}`;
    btn.addEventListener("click", () => {
      if (state.pathway === label) {
        state.pathway = null;
        btn.setAttribute("aria-pressed", "false");
      } else {
        $$("#pathway-list .pathway-chip").forEach((b) =>
          b.setAttribute("aria-pressed", "false")
        );
        state.pathway = label;
        btn.setAttribute("aria-pressed", "true");
      }
      renderAll();
    });
    li.appendChild(btn);
    ul.appendChild(li);
  });
}

/* ---------- Filtering ---------- */
function matches(m) {
  if (state.pathway && !m.pathways?.includes(state.pathway)) return false;

  if (state.kind === "compulsory" && !m.isCompulsory) return false;
  if (state.kind === "optional" && m.isCompulsory) return false;
  if (state.kind === "all-year" && m.duration !== "all-year") return false;
  if (state.kind === "semester" && m.duration !== "semester") return false;

  const q = state.q.trim().toLowerCase();
  if (q) {
    const hay = [m.title, m.tagline, m.overview]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    if (!hay.includes(q)) return false;
  }
  return true;
}

/* ---------- Module element (<details>) ---------- */
function moduleEl(m) {
  const det = document.createElement("details");
  det.className = "module";
  det.dataset.pathway = m.pathways?.[0] || "Psychology";

  const summary = document.createElement("summary");

  const title = document.createElement("span");
  title.className = "title";
  title.textContent = m.title;

  const meta = document.createElement("span");
  meta.className = "meta";

  const t1 = document.createElement("span");
  t1.className = "tag " + (m.isCompulsory ? "compulsory" : "optional");
  t1.textContent = m.isCompulsory ? "Compulsory" : "Optional";

  const t2 = document.createElement("span");
  t2.className = "tag " + (m.duration === "all-year" ? "all-year" : "semester");
  t2.textContent = m.duration === "all-year" ? "All year" : "Semester";

  meta.append(t1, t2);
  summary.append(title, meta);
  det.appendChild(summary);

  const body = document.createElement("div");
  body.className = "body";
  const parts = [];
  if (m.tagline) parts.push(`<strong>${m.tagline}</strong>`);
  if (m.overview) parts.push(m.overview);
  if (m.assessments?.length)
    parts.push(`<em>Assessment:</em> ${m.assessments.join(", ")}`);
  if (m.tl_methods?.length)
    parts.push(`<em>T&L:</em> ${m.tl_methods.join(", ")}`);
  body.innerHTML = parts.join("<br/>");
  det.appendChild(body);

  return det;
}

/* ---------- Render a single year (adds rule, hides empties) ---------- */
function renderYear(yearId, level, headingText) {
  const root = document.getElementById(yearId);
  if (!root) return;

  // 1. Ensure <h2> header exists and is updated
  let h2 = root.querySelector("h2");
  if (!h2) {
    h2 = document.createElement('h2');
    h2.id = `${yearId}-h`;
    // Find the first semester div to insert the h2 before it
    const firstSemester = root.querySelector('.semester');
    if (firstSemester) {
      root.insertBefore(h2, firstSemester);
    } else {
      root.prepend(h2); // Fallback to prepending if no semester divs exist (though they should)
    }
  }
  if (headingText) h2.textContent = headingText;


  root.hidden = false;

  $$(root, ".semester").forEach((s) => {
    s.hidden = false;
    // Remove old content container if it exists, to be rebuilt
    const oldContent = s.querySelector('.semester-content');
    if (oldContent) oldContent.remove();
  });


  $$(root, ".year-rule").forEach((n) => n.remove());

  const mods = (DATA.modules || [])
    .filter((m) => m.level === level && matches(m))
    .sort(
      (a, b) =>
        (a.term > b.term) - (a.term < b.term) || a.title.localeCompare(b.title)
    );

  if (!mods.length) {
    root.hidden = true;
    return;
  }

  const ruleText = DATA.yearRules?.[level];
  if (ruleText) {
    const p = document.createElement("p");
    p.className = "year-rule";
    const optionalCount = mods.filter((m) => !m.isCompulsory).length;
    p.innerHTML = `${ruleText}<br><small>Optional modules visible with current filters: <strong>${optionalCount}</strong></small>`;
    h2.insertAdjacentElement("afterend", p);
  }

  const buckets = { "All year": [], "Sem 1": [], "Sem 2": [] };
  mods.forEach((m) => (buckets[m.term] ? buckets[m.term].push(m) : null));

  Object.entries(buckets).forEach(([label, list]) => {
    const bucket = root.querySelector(
      `.semester[data-term="${TERM_ATTR[label]}"]`
    );
    if (!bucket) return;

    if (!list.length) {
      bucket.hidden = true;
      return;
    }

    // Create a new container for modules within the open semester details
    const content = document.createElement('div');
    content.className = 'semester-content';
    
    list.forEach((m) => content.appendChild(moduleEl(m)));
    bucket.appendChild(content); // Append the container to the details element
  });
}

/* ---------- Render all years ---------- */
function renderAll() {
  YEARS.forEach(({ id, level, heading }) => renderYear(id, level, heading));
}

/* ---------- Footer controls ---------- */
function mountFooter() {
  const resetBtn = $("#reset");
  const searchInp = $("#q");
  const kindSel = $("#filter-kind");

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      state.q = "";
      state.kind = "all";
      state.pathway = null;
      if (searchInp) searchInp.value = "";
      if (kindSel) kindSel.value = "all";
      $$("#pathway-list .pathway-chip").forEach((b) =>
        b.setAttribute("aria-pressed", "false")
      );
      renderAll();
    });
  }

  if (searchInp) {
    searchInp.addEventListener("input", (e) => {
      state.q = e.target.value;
      renderAll();
    });
  }

  if (kindSel) {
    kindSel.addEventListener("change", (e) => {
      state.kind = e.target.value;
      renderAll();
    });
  }
}

/* ---------- Profiles (cards) ---------- */
function svgIcon(name) {
  const common =
    'width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"';
  if (name === "compass") {
    return `<svg ${common} aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="16 8 14 14 8 16 10 10"/></svg>`;
  }
  if (name === "target") {
    return `<svg ${common} aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/></svg>`;
  }
  if (name === "shuffle") {
    return `<svg ${common} aria-hidden="true"><path d="M16 3h5v5"/><path d="M4 4l11 11"/><path d="M21 16v5h-5"/><path d="M15 4h2a4 4 0 0 1 4 4v0"/><path d="M4 20l6-6"/></svg>`;
  }
  return "";
}

function renderProfiles() {
  const host = document.querySelector("#student-profiles");
  if (!host) return;
  
  host.innerHTML = ''; // Clear everything to rebuild

  // 1. Add the main header for the profiles
  const sectionHeader = document.createElement('h3');
  sectionHeader.textContent = 'Your degree, your pathway... which one will you take?'; // Add your desired header text here
  host.appendChild(sectionHeader);

  // 2. Ensure the card container wrapper is present
  const container = document.createElement('div');
  container.className = 'profile-cards-container';
  host.appendChild(container);

  // Check if there are profiles to render
  if (!(DATA.profiles || []).length) {
    host.hidden = true;
    return;
  }
  host.hidden = false;

  // Render each profile card
  (DATA.profiles || []).forEach((p) => {
    const card = document.createElement("article");
    // FIX: Add the profile-specific class (explorer, specialist, pathfinder) for CSS styling
    card.className = `profile-card ${p.id}`; 
    
    // Create the H3 element with the icon and name
    const h3 = document.createElement("h3");
    const icon = document.createElement("span");
    icon.className = "profile-icon";
    icon.innerHTML = svgIcon(p.icon);
    h3.append(icon, p.name);

    // Create the intro paragraph
    const intro = document.createElement("p");
    intro.textContent = p.intro;
    
    // Create the bulleted list
    const ul = document.createElement("ul");
    (p.bullets || []).forEach((t) => {
        const li = document.createElement("li");
        li.textContent = t;
        ul.appendChild(li);
    });

    // Append all parts to the card
    card.append(h3, intro, ul);
    
    // Append the card to the container
    container.appendChild(card);
  });
}
/* ---------- Back to Top Button Logic ---------- */
function mountBackToTop() {
    const button = $("#back-to-top");
    if (!button) return;

    // Show/hide button based on scroll position
    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            button.classList.add("show");
        } else {
            button.classList.remove("show");
        }
    };

    // Scroll to top with smooth animation
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // Attach event listeners
    window.addEventListener("scroll", toggleVisibility);
    button.addEventListener("click", scrollToTop);

    // Initial check in case page loads partway down
    toggleVisibility(); 
}
/* ---------- Boot ---------- */
(function init() {
  mountCopy();
  mountPathways();
  mountFooter();
  renderProfiles(); 
  renderAll();
  mountBackToTop();
})();


