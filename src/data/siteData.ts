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
  headline: "Senior Computer Science Student and Software Engineer",
  location: "San Luis Obispo, California",
  email: "roanmorgan04@gmail.com",
  github: "https://github.com/roanmorgan53",
  linkedin: "https://www.linkedin.com/in/roan-morgan-b78582225/",
  graduation: "June 2026",
  gpa: "3.72 / 4.0",
  aboutMessage:
    "Hi, I'm Roan. I'm a computer scientist from California's Central Valley. Throughout my time learning computer science, I am most interested in the interaction computers can have with the world around us. When I'm not coding I enjoy the outdoors, and lifting weights.",
  quickIntro:
    "I build practical software systems across mobile, web, and computer vision, with a focus on clean execution and real-world impact.",
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
      timeframe: "Oct 2025 - Present",
      role: "Full-stack Software Engineer",
      summary:
        "Developing an iOS and Android mobile application for an international nonprofit's technician workflow and case management.",
      highlights: [
        "Leading development of a React Native application supporting 100+ participant case records.",
        "Built an automated testing workflow with Jest and GitHub Actions for stable releases.",
        "Implementing role-based access and GDPR-conscious authentication patterns.",
        "Building and integrating an Express.js and MongoDB backend API for scalable data management.",
        "Collaborating directly with stakeholders in an Agile workflow.",
      ],
      technologies: ["React Native", "Express.js", "MongoDB", "Jest", "GitHub Actions", "Agile"],
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
        "/images/nsf/pr2.jpeg",
        "/images/nsf/pr3.jpg",
        "/images/nsf/edge_setup.JPG",
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      title: "LLM Emoji Trivia Web App",
      timeframe: "Jan 2025 - May 2025",
      summary:
        "Built an interactive emoji charades game with local LLM-powered hints and answer validation for fully local gameplay.",
      technologies: ["Next.js", "TypeScript", "tRPC", "Prisma", "Tailwind CSS", "LMStudio", "Gemini 2 2B"],
      links: [],
    },
    {
      title: "Bee Detection Web App",
      timeframe: "Jun 2024 - Aug 2024",
      summary:
        "Improved a Flask application used to track bee behavior experiments and added multiprocessing support for experiment management.",
      technologies: ["Python", "Flask", "Computer Vision", "Multiprocessing"],
      links: [],
    },
    {
      title: "LLEAP Exoskeleton Contributions",
      timeframe: "Sep 2025 - Present",
      summary:
        "Contributing software for lower-limb exoskeleton research, including encoder integration and movement correction.",
      technologies: ["Python", "C++", "ROS2", "Embedded Systems"],
      links: [
        { label: "LLEAP", url: "https://github.com/Project-LLEAP/LLEAP" },
        { label: "Encoder", url: "https://github.com/Project-LLEAP/encoder" },
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
        "GPA: 3.72 / 4.0",
        "Relevant Coursework: Systems Programming, Data Structures and Algorithms, Cybersecurity, Software Engineering, Database Systems, Computer Networks",
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
