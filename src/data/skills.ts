interface HardSkills {
    id: number;
    icon: string;
    name: string;
    alt: string;
};

interface SoftSkills {
    id: number;
    emoji: string;
    skill: string;
};

export const techLanguages: HardSkills[] = [
    {
        id: 1,
        icon: "/assets/icons/html.svg",
        name: "HTML",
        alt: "HTML icon"
    },
    {
        id: 2,
        icon: "/assets/icons/css.svg",
        name: "CSS",
        alt: "CSS icon",
    },
    {
        id: 3,
        icon: "/assets/icons/sass.svg",
        name: "SASS",
        alt: "SASS icon"
    },
    {
        id: 4,
        icon: "/assets/icons/tailwind.svg",
        name: "Tailwind CSS",
        alt: "Tailwind CSS icon"
    },
    {
        id: 5,
        icon: "/assets/icons/javascript.svg",
        name: "JavaScript",
        alt: "JavaScript icon"
    },
    {
        id: 6,
        icon: "/assets/icons/typescript.svg",
        name: "TypeScript",
        alt: "TypeScript icon"
    },
    {
        id: 7,
        icon: "/assets/icons/react.svg",
        name: "React",
        alt: "React icon"
    },
    {
        id: 8,
        icon: "/assets/icons/nextjs.svg",
        name: "Next.js",
        alt: "Next.js icon"
    },
    {
        id: 9,
        icon: "/assets/icons/nodejs.svg",
        name: "Node.js",
        alt: "Node.js icon"
    },
    {
        id: 10,
        icon: "/assets/icons/express.svg",
        name: "Express",
        alt: "Express icon"
    },
    {
        id: 11,
        icon: "/assets/icons/mysql.svg",
        name: "MySQL",
        alt: "MySQL icon"
    }
];

export const techTools: HardSkills[] = [
    {
        id: 1,
        icon: "/assets/icons/git.svg",
        name: "Git",
        alt: "Git icon"
    },
    {
        id: 2,
        icon: "/assets/icons/github.svg",
        name: "GitHub",
        alt: "GitHub icon"
    },
    {
        id: 3,
        icon: "/assets/icons/firebase.svg",
        name: "Firebase",
        alt: "Firebase icon"
    },
    {
        id: 4,
        icon: "/assets/icons/postman.svg",
        name: "Postman",
        alt: "Postman icon"
    },
    {
        id: 5,
        icon: "/assets/icons/material-ui.svg",
        name: "Material UI",
        alt: "Material UI icon"
    }
];

export const softSkills: SoftSkills[] = [
    {
        id: 1,
        emoji: "⭐️",
        skill: "Leadership"
    },
    {
        id: 2,
        emoji: "💬",
        skill: "Communication"
    },
    {
        id: 3,
        emoji: "🫶🏻",
        skill: "Empathy"
    },
    {
        id: 4,
        emoji: "👯‍♀️",
        skill: "Collaboration"
    },
    {
        id: 5,
        emoji: "💡",
        skill: "Critical Thinking"
    },
    {
        id: 6,
        emoji: "👥💭",
        skill: "User-centred Thinking"
    },
    {
        id: 7,
        emoji: "🗓️",
        skill: "Organization"
    },
    {
        id: 8,
        emoji: "🔧",
        skill: "Problem Solving"
    },
    {
        id: 9,
        emoji: "🏋🏻‍♀️",
        skill: "Adaptability"
    },
    {
        id: 10,
        emoji: "📑",
        skill: "Project Management"
    },
    {
        id: 11,
        emoji: "📚",
        skill: "Education"
    },
    {
        id: 12,
        emoji: "🤹‍♂️",
        skill: "Multi-tasking"
    },
    {
        id: 13,
        emoji: "📊",
        skill: "Data Analysis"
    },
    {
        id: 14,
        emoji: "📝",
        skill: "Documentation"
    }
];