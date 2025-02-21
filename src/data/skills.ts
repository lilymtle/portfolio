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

const iconPath = "/assets/icons";

export const techLanguages: HardSkills[] = [
    {
        id: 1,
        icon: `${iconPath}/html.svg`,
        name: "HTML",
        alt: "HTML icon"
    },
    {
        id: 2,
        icon: `${iconPath}/css.svg`,
        name: "CSS",
        alt: "CSS icon",
    },
    {
        id: 3,
        icon: `${iconPath}/sass.svg`,
        name: "SASS",
        alt: "SASS icon"
    },
    {
        id: 4,
        icon: `${iconPath}/tailwind.svg`,
        name: "Tailwind CSS",
        alt: "Tailwind CSS icon"
    },
    {
        id: 5,
        icon: `${iconPath}/javascript.svg`,
        name: "JavaScript",
        alt: "JavaScript icon"
    },
    {
        id: 6,
        icon: `${iconPath}/typescript.svg`,
        name: "TypeScript",
        alt: "TypeScript icon"
    },
    {
        id: 7,
        icon: `${iconPath}/react.svg`,
        name: "React",
        alt: "React icon"
    },
    {
        id: 8,
        icon: `${iconPath}/nextjs.svg`,
        name: "Next.js",
        alt: "Next.js icon"
    },
    {
        id: 9,
        icon: `${iconPath}/nodejs.svg`,
        name: "Node.js",
        alt: "Node.js icon"
    },
    {
        id: 10,
        icon: `${iconPath}/express.svg`,
        name: "Express",
        alt: "Express icon"
    },
    {
        id: 11,
        icon: `${iconPath}/mysql.svg`,
        name: "MySQL",
        alt: "MySQL icon"
    }
];

export const techTools: HardSkills[] = [
    {
        id: 1,
        icon: `${iconPath}/git.svg`,
        name: "Git",
        alt: "Git icon"
    },
    {
        id: 2,
        icon: `${iconPath}/github.svg`,
        name: "GitHub",
        alt: "GitHub icon"
    },
    {
        id: 3,
        icon: `${iconPath}/firebase.svg`,
        name: "Firebase",
        alt: "Firebase icon"
    },
    {
        id: 4,
        icon: `${iconPath}/postman.svg`,
        name: "Postman",
        alt: "Postman icon"
    },
    {
        id: 5,
        icon: `${iconPath}/material-ui.svg`,
        name: "Material UI",
        alt: "Material UI icon"
    },
    {
        id: 6,
        icon: `${iconPath}/figma.svg`,
        name: "Figma",
        alt: "Figma icon"
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