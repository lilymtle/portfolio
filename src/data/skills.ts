interface HardSkills {
    id: number;
    icon: string;
    alt: string;
};

interface SoftSkills {
    id: number;
    emoji: string;
    skill: string;
}

export const techLanguages: HardSkills[] = [
    {
        id: 1,
        icon: "/assets/icons/html.svg",
        alt: "HTML"
    },
    {
        id: 2,
        icon: "/assets/icons/css.svg",
        alt: "CSS",
    },
    {
        id: 3,
        icon: "/assets/icons/sass.svg",
        alt: "SASS"
    },
    {
        id: 4,
        icon: "/assets/icons/tailwind.svg",
        alt: "Tailwind CSS"
    },
    {
        id: 5,
        icon: "/assets/icons/javascript.svg",
        alt: "JavaScript"
    },
    {
        id: 6,
        icon: "/assets/icons/typescript.svg",
        alt: "TypeScript"
    },
    {
        id: 7,
        icon: "/assets/icons/react.svg",
        alt: "React"
    },
    {
        id: 8,
        icon: "/assets/icons/nextjs.svg",
        alt: "Next.js"
    },
    {
        id: 9,
        icon: "/assets/icons/nodejs.svg",
        alt: "Node.js"
    },
    {
        id: 10,
        icon: "/assets/icons/express.svg",
        alt: "Express"
    },
    {
        id: 11,
        icon: "/assets/icons/mysql.svg",
        alt: "MySQL"
    }
];

export const techTools: HardSkills[] = [
    {
        id: 1,
        icon: "/assets/icons/git.svg",
        alt: "Git"
    },
    {
        id: 2,
        icon: "/assets/icons/github.svg",
        alt: "GitHub"
    },
    {
        id: 3,
        icon: "/assets/icons/firebase.svg",
        alt: "Firebase"
    },
    {
        id: 4,
        icon: "/assets/icons/postman.svg",
        alt: "Postman"
    },
    {
        id: 5,
        icon: "/assets/icons/material-ui.svg",
        alt: "Material UI"
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
        skill: "Problen Solving"
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
]