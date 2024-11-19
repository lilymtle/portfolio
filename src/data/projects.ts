interface Projects {
    id: number;
    name: string;
    description: string;
    features?: string[];
    tools: string[];
    image: string;
    live?: string;
    github?: string;
};

export const projects: Projects[] = [
    {
        id: 1,
        name: "MoodCompass",
        description: "MoodCompass offers a safe space for managing negative moods through educational resources. Users can access resources without an account, but must sign up to favorite them. A mood tracker and log will be added in the future.",
        features: [
            "User services (registration, login, and logout",
            "User authentication and authorization",
            "Protected routes",
            "Favoriting and unfavoriting items",
            "Dynamic data stored and retrieved from a database",
            "Form validation"
        ],
        tools: [
            "React",
            "SASS",
            "Node.js",
            "MySQL",
            "Express",
            "Knex.js",
            "Axios",
            "Restful API Development",
            "Firebase",
            "Material UI",
            "Git",
            "GitHub"
        ],
        image: "/assets/images/mood-compass.png",
        live: "https://mood-compass.vercel.app/",
        github: "https://github.com/lilymtle/mood-compass"
    },
    {
        id: 2,
        name: "Koru",
        description: "Koru",
        tools: [
            "Next.js",
            "Tailwind CSS",
            "JavaScript",
            "TypeScript",
            "Knex.js",
            "MySQL",
            "Material UI",
            "Firebase",
            "Git",
            "GitHub"
        ],
        image: "/assets/images/mood-compass.png",
        live: "https://mood-compass.vercel.app/",
        github: "https://github.com/lilymtle/mood-compass"
    },
    {
        id: 3,
        name: "Portfolio",
        description: "My personal porfolio.",
        tools: [
            "React",
            "JavaScript",
            "TypeScript",
            "SASS",
            "Material UI"
        ],
        image: "/assets/images/mood-compass.png",
        github: "https://github.com/lilymtle/portfolio"
    },
    {
        id: 4,
        name: "TELUS",
        description: "TELUS What Your Preference Is an interactive quiz new and existing TELUS users can use to receive their personalized TV bundle.The quiz is engaging and short in order to reduce option paralysis and decision fatigue.",
        features: [
            "Carousel hero banner",
            "Personalized quiz"
        ],
        tools: [
            "React",
            "SASS",
            "Axios",
            "RESTFUL API Development",
            "Git",
            "GitHub",
            "Agile (Scrum)",
            "Jira"
        ],
        image: "/assets/images/mood-compass.png",
        github: "https://github.com/lilymtle/portfolio"
    },
    {
        id: 5,
        name: "InStock",
        description: "InStock is a fully responsive full-stack web application that delivers an inventory Management System for a Fortune 500 client. It features a list of the client's warehouses inventory items.",
        features: [
            "Adding, modifying, and/or deleting a warehouse and/or inventory item",
            "Dynamic data stored and retrieved from a database",
            "Form validation"
        ],
        tools: [
            "React",
            "SASS",
            "Node.js",
            "MySQL",
            "Express",
            "Knex.js",
            "Axios",
            "RESTFUL API Development",
            "Git",
            "GitHub",
            "Agile (Scrum)",
            "Jira",
            "Postman"
        ],
        image: "/assets/images/mood-compass.png",
    },
    {
        id: 6,
        name: "BrainFlix",
        description: "BrainFlix is a fully responsive video streaming platform with its own API service.",
        features: [
            "Adding a video",
            "Form validation"
        ],
        tools: [
            "React",
            "SASS",
            "Axios",
            "RESTful API Development",
            "JSON",
            "Git",
            "GitHub",
            "Postman"
        ],
        image: "/assets/images/mood-compass.png",
    },
    {
        id: 7,
        name: "BandSite",
        description: "This is a fully responsive website for an up-and-coming band. It consists of two pages, the main page and shows page. The main page has information about the band and a photo gallery, whereas the shows page has a list of their upcoming shows.",
        features: [
            "Adding a comment",
            "Form validation"
        ],
        tools: [
            "HTML",
            "SASS",
            "JavaScript",
            "Axios",
            "RESTful API Integration",
            "Git",
            "GitHub"
        ],
        image: "/assets/images/mood-compass.png",
    },
    {
        id: 8,
        name: "CoffeeShop",
        description: "Coffee Shop is a static multi-page web application that is broken down into two pages: landing page and menu page. The landing page has product information, and the menu page provides further details about the coffee shop's offerings.",
        features: [
            "Adding a comment",
            "Form validation"
        ],
        tools: [
            "HTML",
            "SASS",
            "Git",
            "GitHub"
        ],
        image: "/assets/images/mood-compass.png",
    }
];