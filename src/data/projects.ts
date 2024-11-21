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
        description: "MoodCompass offers a safe space for managing negative moods through educational resources.",
        tools: [
            "/assets/badges/react.svg",
            "/assets/badges/nodejs.svg",
            "/assets/badges/mysql.svg",
            "/assets/badges/javascript.svg",
            "/assets/badges/express.svg",
            "/assets/badges/knex.png",
            "/assets/badges/axios.png",
            "/assets/badges/sass.svg",
            "/assets/badges/firebase.svg",
            "/assets/badges/material-ui.svg",
            "/assets/badges/git.svg",
            "/assets/badges/github.svg"
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
            "/assets/badges/nextjs.svg",
            "/assets/badges/typescript.svg",
            "/assets/badges/mysql.svg",
            "/assets/badges/knex.png",
            "/assets/badges/tailwind.svg",
            "/assets/badges/firebase.svg",
            "/assets/badges/material-ui.svg",
            "/assets/badges/git.svg",
            "/assets/badges/github.svg"
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
            "/assets/badges/react.svg",
            "/assets/badges/typescript.svg",
            "/assets/badges/sass.svg",
            "/assets/badges/material-ui.svg",
            "/assets/badges/git.svg",
            "/assets/badges/github.svg"
        ],
        image: "/assets/images/portfolio.png",
        video: "/assets/videos/portfolio.mp4",
        github: "https://github.com/lilymtle/portfolio"
    },
    {
        id: 4,
        name: "TELUS",
        description: "TELUS What Your Preference Is an interactive quiz new and existing TELUS users can use to receive their personalized TV bundle.",
        tools: [
            "/assets/badges/react.svg",
            "/assets/badges/javascript.svg",
            "/assets/badges/axios.png",
            "/assets/badges/sass.svg",
            "/assets/badges/git.svg",
            "/assets/badges/github.svg",
            "/assets/badges/jira.svg"
        ],
        image: "/assets/images/telus.png",
        video: "/assets/videos/telus.mp4"
    },
    {
        id: 5,
        name: "InStock",
        description: "InStock is a fully responsive full-stack web app providing an inventory management system for a Fortune 500 client. It displays a list of warehouse inventory.",
        tools: [
            "/assets/badges/react.svg",
            "/assets/badges/nodejs.svg",
            "/assets/badges/mysql.svg",
            "/assets/badges/express.svg",
            "/assets/badges/knex.png",
            "/assets/badges/axios.png",
            "/assets/badges/sass.svg",
            "/assets/badges/git.svg",
            "/assets/badges/github.svg",
            "/assets/badges/jira.svg",
            "/assets/badges/postman.svg"
        ],
        image: "/assets/images/instock.png",
        video: "/assets/videos/instock.mp4",
        notes: "GitHub repo not publicly available per institution request."
    },
    {
        id: 6,
        name: "BrainFlix",
        description: "BrainFlix is a fully responsive video streaming platform with its own API service.",
        tools: [
            "/assets/badges/react.svg",
            "/assets/badges/axios.png",
            "/assets/badges/sass.svg",
            "/assets/badges/json.png",
            "/assets/badges/git.svg",
            "/assets/badges/github.svg",
            "/assets/badges/postman.svg"
        ],
        image: "/assets/images/brainflix.png",
        video: "/assets/videos/brainflix.mp4",
        notes: "GitHub repo not publicly available per institution request."

    },
    {
        id: 7,
        name: "BandSite",
        description: "A fully responsive website for an emerging band, featuring two pages: the main page with band information and a photo gallery, and a shows page listing upcoming performances.",
        tools: [
            "/assets/badges/html.svg",
            "/assets/badges/sass.svg",
            "/assets/badges/javascript.svg",
            "/assets/badges/axios.png",
            "/assets/badges/git.svg",
            "/assets/badges/github.svg",
        ],
        image: "/assets/images/bandsite.png",
        video: "/assets/videos/bandsite.mp4",
        notes: "GitHub repo not publicly available per institution request."
    },
    {
        id: 8,
        name: "CoffeeShop",
        description: "CoffeeShop is a static, multi-page web app with two pages: a landing page featuring product information and a menu page detailing the shop's offerings.",
        tools: [
            "/assets/badges/html.svg",
            "/assets/badges/sass.svg",
            "/assets/badges/git.svg",
            "/assets/badges/github.svg",
        ],
        image: "/assets/images/coffeeshop.png",
        video: "/assets/videos/coffeeshop.mp4",
        notes: "GitHub repo not publicly available per institution request."
    },
    {
        id: 9,
        name: "CINEMATICATS",
        description: "CINEMATICATs is a static web application that help users find movie recommendations with a cat companion.",
        tools: [
            "../assets/badges/html.svg",
            "../assets/badges/sass.svg",
            "../assets/badges/javascript.svg",
            "../assets/badges/axios.png",
            "../assets/badges/git.svg",
            "../assets/badges/github.svg",
            "../assets/badges/figma.svg"
        ],
        image: "/assets/images/cinematicats.png",
        video: "/assets/videos/cinematicats.mp4"
    }
];