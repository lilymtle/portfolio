interface Projects {
    id: number;
    name: string;
    description: string;
    tools: string[];
    image: string;
    video?: string;
    live?: string;
    github?: string;
    notes?: string;
};

export const projects: Projects[] = [
    {
        id: 1,
        name: "MoodCompass",
        description: "MoodCompass offers a safe space for managing negative moods through educational resources. Users can access resources without an account, but must sign up to favorite them.",
        tools: [
            "/assets/icons/react-shield.svg",
            "/assets/icons/nodejs-shield.svg",
            "/assets/icons/mysql-shield.svg",
            "/assets/icons/javascript-shield.svg",
            "/assets/icons/express-shield.svg",
            "/assets/icons/knex-shield.png",
            "/assets/icons/axios-shield.png",
            "/assets/icons/sass-shield.svg",
            "/assets/icons/firebase-shield.svg",
            "/assets/icons/material-ui-shield.svg",
            "/assets/icons/git-shield.svg",
            "/assets/icons/github-shield.svg"
        ],
        image: "/assets/images/mood-compass.png",
        live: "https://mood-compass.vercel.app/",
        github: "https://github.com/lilymtle/mood-compass",
        notes: "MoodCompass is still a work in progress. Feel free to check the GitHub repo for updates."
    },
    {
        id: 2,
        name: "Koru",
        description: "Koru connects you to the Māori concept of growth and renewal, inviting daily reflections to foster gratitude and mindfulness.",
        tools: [
            "/assets/icons/nextjs-shield.svg",
            "/assets/icons/typescript-shield.svg",
            "/assets/icons/mysql-shield.svg",
            "/assets/icons/knex-shield.png",
            "/assets/icons/tailwind-shield.svg",
            "/assets/icons/firebase-shield.svg",
            "/assets/icons/material-ui-shield.svg",
            "/assets/icons/git-shield.svg",
            "/assets/icons/github-shield.svg"
        ],
        image: "/assets/images/koru.png",
        github: "https://github.com/lilymtle/koru",
        notes: "Koru is still a work in progress. Feel free to check the GitHub repo for updates."
    },
    {
        id: 3,
        name: "Portfolio",
        description: "My personal portfolio, offering a glimpse into who I am and the projects I've worked on. The thumbnail and preview display the previous version of my porfolio.",
        tools: [
            "/assets/icons/react-shield.svg",
            "/assets/icons/typescript-shield.svg",
            "/assets/icons/sass-shield.svg",
            "/assets/icons/material-ui-shield.svg",
            "/assets/icons/git-shield.svg",
            "/assets/icons/github-shield.svg"
        ],
        image: "/assets/images/portfolio.png",
        video: "/assets/videos/portfolio.mp4",
        github: "https://github.com/lilymtle/portfolio"
    },
    {
        id: 4,
        name: "TELUS",
        description: "TELUS What Your Preference Is an interactive quiz new and existing TELUS users can use to receive their personalized TV bundle. The quiz is engaging and short in order to reduce option paralysis and decision fatigue. Developed using Agile (Scrum) methodology.",
        tools: [
            "/assets/icons/react-shield.svg",
            "/assets/icons/javascript-shield.svg",
            "/assets/icons/axios-shield.png",
            "/assets/icons/sass-shield.svg",
            "/assets/icons/git-shield.svg",
            "/assets/icons/github-shield.svg",
            "/assets/icons/jira-shield.svg"
        ],
        image: "/assets/images/telus.png",
        video: "/assets/videos/telus.mp4"
    },
    {
        id: 5,
        name: "InStock",
        description: "InStock is a fully responsive full-stack web application that delivers an inventory Management System for a Fortune 500 client. It features a list of the client's warehouses inventory items. Developed using Agile (Scrum) methodology.",
        tools: [
            "/assets/icons/react-shield.svg",
            "/assets/icons/nodejs-shield.svg",
            "/assets/icons/mysql-shield.svg",
            "/assets/icons/express-shield.svg",
            "/assets/icons/knex-shield.png",
            "/assets/icons/axios-shield.png",
            "/assets/icons/sass-shield.svg",
            "/assets/icons/git-shield.svg",
            "/assets/icons/github-shield.svg",
            "/assets/icons/jira-shield.svg",
            "/assets/icons/postman-shield.svg"
        ],
        image: "/assets/images/instock.png",
        video: "/assets/videos/instock.mp4"
    },
    {
        id: 6,
        name: "BrainFlix",
        description: "BrainFlix is a fully responsive video streaming platform with its own API service.",
        tools: [
            "/assets/icons/react-shield.svg",
            "/assets/icons/axios-shield.png",
            "/assets/icons/sass-shield.svg",
            "/assets/icons/json-shield.png",
            "/assets/icons/git-shield.svg",
            "/assets/icons/github-shield.svg",
            "/assets/icons/postman-shield.svg"
        ],
        image: "/assets/images/brainflix.png",
        video: "/assets/videos/brainflix.mp4"
    },
    {
        id: 7,
        name: "BandSite",
        description: "This is a fully responsive website for an up-and-coming band. It consists of two pages, the main page and shows page. The main page has information about the band and a photo gallery, whereas the shows page has a list of their upcoming shows.",
        tools: [
            "/assets/icons/html-shield.svg",
            "/assets/icons/sass-shield.svg",
            "/assets/icons/javascript-shield.svg",
            "/assets/icons/axios-shield.png",
            "/assets/icons/git-shield.svg",
            "/assets/icons/github-shield.svg",
        ],
        image: "/assets/images/bandsite.png",
        video: "/assets/videos/bandsite.mp4"
    },
    {
        id: 8,
        name: "CoffeeShop",
        description: "Coffee Shop is a static multi-page web application that is broken down into two pages: landing page and menu page. The landing page has product information, and the menu page provides further details about the coffee shop's offerings.",
        tools: [
            "/assets/icons/html-shield.svg",
            "/assets/icons/sass-shield.svg",
            "/assets/icons/git-shield.svg",
            "/assets/icons/github-shield.svg",
        ],
        image: "/assets/images/coffeeshop.png",
        video: "/assets/videos/coffeeshop.m4"
    }
];