export type ExperienceItem = {
  title: string;
  organization: string;
  location: string;
  timeframe: string;
  role: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  imageUrls?: string[];
};

export type ProjectItem = {
  title: string;
  timeframe: string;
  summary: string;
  technologies: string[];
  imageUrls?: string[];
  links: { label: string; url: string }[];
};

export type EducationItem = {
  school: string;
  degree: string;
  location: string;
  timeframe: string;
  details?: string[];
};

export const siteData = {
  name: "Roan Morgan",
  headline: "Software Engineer",
  location: "Tulare County, California",
  email: "roanmorgan04@gmail.com",
  github: "https://github.com/roanmorgan53",
  linkedin: "https://www.linkedin.com/in/roanmorgan53/",
  graduation: "June 2026",
  gpa: "3.72 / 4.0",
  aboutMessage:
    "Hi, I'm Roan. I'm a computer scientist from California's Central Valley. One of my main interests is the interaction computers can have with the world around us. When I'm not coding I enjoy the outdoors, and lifting weights.",
  quickIntro:
    "I build practical software systems across mobile, web, and computer vision, with a focus on clean execution and product quality.",
  coreSkills: [
    "TypeScript",
    "React Native",
    "React",
    "Express.js",
    "MongoDB",
    "Python",
    "C/C++",
    "SQL",
    "Docker",
    "GitHub Actions",
    "Jest",
    "Agile",
  ],
  experiences: [
    {
      title: "Caritas Valencia Mobile Application",
      organization: "Cal Poly Senior Project",
      location: "San Luis Obispo, CA",
      timeframe: "October 2025 - June 2026",
      role: "Full-stack Software Engineer",
      summary:
        "Developed an iOS and Android mobile application for an international nonprofit's technician workflow and case management.",
      highlights: [
        "Led development of iOS and Android mobile app using React Native for Spanish nonprofit serving 200+ participant case records",
        "Automated testing workflow using GitHub Actions and Jest, ensuring quality production code",
        "Configured CI/CD to include a code style check using Prettier, enforcing code styling consistency",
        "Worked with international client in an Agile environment, effectively maintaining contact with project stakeholders throughout product development",
        "Integrated interactive map supporting participant location organization"

      ],
      technologies: ["React Native", "Express.js", "MongoDB", "Jest", "GitHub Actions", "Agile"],
      imageUrls: [
        "/images/caritas/caritas_map.png",
        "/images/caritas/caritas_addpin.png",
        "/images/caritas/caritas_filter.png",
        "/images/caritas/caritas_movepin.png",
      ]
    },
    {
      title: "NSF Undergraduate Research",
      organization: "University of Puerto Rico, Rio Piedras",
      location: "San Juan, Puerto Rico",
      timeframe: "Jun 2024 - Aug 2024",
      role: "Undergraduate Researcher",
      summary:
        "Worked on bee behavior detection systems using computer vision, dataset labeling, and edge compute workflows.",
      highlights: [
        "Fine-tuned a YOLOv8 model for bee labeling with high precision.",
        "Improved edge compute workflows by labeling behavior and pose datasets in CVAT.ai.",
        "Enhanced pose estimation for real-time tracking and analysis.",
        "Authored technical research documentation for project stakeholders.",
        "Operated NVIDIA Jetson Orin and DeepStream for edge inference testing.",
      ],
      technologies: ["Python", "YOLOv8", "CVAT", "NVIDIA Jetson Orin", "DeepStream", "Flask"],
      imageUrls: [
        "/images/nsf/pr1.jpg",
        "/images/nsf/pr3.jpg",
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      title: "Distributed ATC Alert System",
      timeframe: "May 2026",
      summary: "ATC Alert System with Task Queue from Realtime ADSB data",
      technologies: ["Apache Kafka", "Golang", "KRaft"],
      links: [
        {label: "Repo", url: "https://github.com/camdnn/distributed-kafka-taskflow"},
        {label: "Presentation", url: "https://docs.google.com/presentation/d/1z2e08VMjZ0XtHdAznagiowWE1_vRbGyEVbaxNORmT2I/edit?usp=sharing"}
      ]
    },
    {
      title: "Genetic Mario",
      timeframe: "May 2026",
      summary: "Mario teaches himself how to play 1-1 using a genetic algorithm.",
      technologies: ["PyTorch", "Neural Network", "Genetic Algorithm"],
      links: [
        {label: "Repo", url: "https://github.com/roanmorgan53/Genetic_Mario"},
        {label: "Presentation", url: "https://docs.google.com/presentation/d/1Z_3riAhZNqiBXvm0aQV9p1BpNzlXvL2pN_srHSMdecw/edit?usp=sharing"}
      ]
    },
    {
      title: "LLEAP Exoskeleton Contributions",
      timeframe: "Sep 2025 - Present",
      summary:
        "Contributing software for lower-limb exoskeleton research, including encoder integration and movement correction.",
      technologies: ["Python", "C++", "ROS2", "Embedded Systems"],
      links: [
        { label: "LLEAP", url: "https://github.com/Project-LLEAP/LLEAP" },
      ],
    },
  ] as ProjectItem[],
  education: [
    {
      school: "California Polytechnic State University, San Luis Obispo",
      degree: "B.S. in Computer Science",
      location: "San Luis Obispo, CA",
      timeframe: "Expected June 2026",
      details: [
        "GPA: 3.59 / 4.0",
        "Relevant Coursework: Systems Programming, Data Structures and Algorithms, Cybersecurity, Software Engineering, Database Systems, Computer Networks, Operating Systems",
      ],
    },
    {
      school: "University of Tennessee, Knoxville",
      degree: "Computer Science Studies",
      location: "Knoxville, TN",
      timeframe: "1 Year",
    },
    {
      school: "College of the Sequoias",
      degree: "Associate Degrees in Computer Science, Math, and Physics",
      location: "Visalia, CA",
      timeframe: "2 Years",
    },
  ] as EducationItem[],
};
