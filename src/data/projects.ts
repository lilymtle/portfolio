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

const githubPath = "https://www.github.com/lilymtle";
const imagePath = "/assets/images";
const badgePath = "/assets/badges";
const videoPath = "/assets/videos";

export const projects: Projects[] = [
    {
        id: 1,
        name: "The Verse",
        description: "As the intern and primary developer for the main site of The Verse, I collaborated with the designer, project manager, and founder to develop a website that showcases the company's mission and the innovative games they are creating. Currently, the project is focused on front-end development, with plans to implement a back end in the future.",
        tools: [
            `${badgePath}/react.svg`,
            `${badgePath}/typescript.svg`,
            `${badgePath}/sass.svg`
        ],
        image: `${imagePath}/the-verse.png`,
        live: "https://versebuilding.com"
    },
    {
        id: 2,
        name: "MoodCompass",
        description: "MoodCompass offers a safe space for managing negative moods through educational resources.",
        tools: [
            `${badgePath}/react.svg`,
            `${badgePath}/nodejs.svg`,
            `${badgePath}/mysql.svg`,
            `${badgePath}/javascript.svg`,
            `${badgePath}/express.svg`,
            `${badgePath}/knex.png`,
            `${badgePath}/axios.png`,
            `${badgePath}/sass.svg`,
            `${badgePath}/firebase.svg`,
            `${badgePath}/material-ui.svg`,
            `${badgePath}/git.svg`,
            `${badgePath}/github.svg`
        ],
        image: `${imagePath}/mood-compass.png`,
        live: "https://mood-compass.vercel.app/",
        github: `${githubPath}/mood-compass`,
        notes: "MoodCompass is still a work in progress. Feel free to check the GitHub repo for updates."
    },
    {
        id: 3,
        name: "Koru",
        description: "Koru connects you to the Māori concept of growth and renewal, inviting daily reflections to foster gratitude and mindfulness.",
        tools: [
            `${badgePath}/nextjs.svg`,
            `${badgePath}/typescript.svg`,
            `${badgePath}/mysql.svg`,
            `${badgePath}/knex.png`,
            `${badgePath}/tailwind.svg`,
            `${badgePath}/firebase.svg`,
            `${badgePath}/material-ui.svg`,
            `${badgePath}/git.svg`,
            `${badgePath}/github.svg`
        ],
        image: `${imagePath}/koru.png`,
        github: `${githubPath}/koru`,
        notes: "Koru is still a work in progress. Feel free to check the GitHub repo for updates."
    },
    {
        id: 4,
        name: "Portfolio",
        description: "My personal portfolio, offering a glimpse into who I am and the projects I've worked on. The thumbnail and preview display the previous version of my porfolio.",
        tools: [
            `${badgePath}/react.svg`,
            `${badgePath}/typescript.svg`,
            `${badgePath}/sass.svg`,
            `${badgePath}/material-ui.svg`,
            `${badgePath}/git.svg`,
            `${badgePath}/github.svg`
        ],
        image: `${imagePath}/portfolio.png`,
        video: `${videoPath}/portfolio.mp4`,
        github: `${githubPath}/portfolio`
    },
    {
        id: 5,
        name: "CheerBot",
        description: "CheerBot is a positivity-driven Discord bot designed to spread good vibes and uplift your community.",
        tools: [
            `.${badgePath}/javascript.svg`,
            `.${badgePath}/discordjs.png`,
            `${badgePath}/axios.png`,
            `${badgePath}/git.svg`,
            `${badgePath}/github.svg`
        ],
        image: `${imagePath}/cheerbot.png`,
        video: `${videoPath}/cheerbot.mp4`,
        github: `${githubPath}/cheerbot`
    },
    {
        id: 6,
        name: "TELUS",
        description: "TELUS What Your Preference Is an interactive quiz new and existing TELUS users can use to receive their personalized TV bundle.",
        tools: [
            `${badgePath}/react.svg`,
            `${badgePath}/javascript.svg`,
            `${badgePath}/axios.png`,
            `${badgePath}/sass.svg`,
            `${badgePath}/git.svg`,
            `${badgePath}/github.svg`,
            `${badgePath}/jira.svg`
        ],
        image: `${imagePath}/telus.png`,
        video: `${videoPath}/telus.mp4`
    },
    {
        id: 7,
        name: "InStock",
        description: "InStock is a fully responsive full-stack web app providing an inventory management system for a Fortune 500 client. It displays a list of warehouse inventory.",
        tools: [
            `${badgePath}/react.svg`,
            `${badgePath}/nodejs.svg`,
            `${badgePath}/mysql.svg`,
            `${badgePath}/express.svg`,
            `${badgePath}/knex.png`,
            `${badgePath}/axios.png`,
            `${badgePath}/sass.svg`,
            `${badgePath}/git.svg`,
            `${badgePath}/github.svg`,
            `${badgePath}/jira.svg`,
            `${badgePath}/postman.svg`
        ],
        image: `${imagePath}/instock.png`,
        video: `${videoPath}/instock.mp4`,
        notes: "GitHub repo not publicly available per institution request."
    },
    {
        id: 8,
        name: "BrainFlix",
        description: "BrainFlix is a fully responsive video streaming platform with its own API service.",
        tools: [
            `${badgePath}/react.svg`,
            `${badgePath}/axios.png`,
            `${badgePath}/sass.svg`,
            `${badgePath}/json.png`,
            `${badgePath}/git.svg`,
            `${badgePath}/github.svg`,
            `${badgePath}/postman.svg`
        ],
        image: `${imagePath}/brainflix.png`,
        video: `${videoPath}/brainflix.mp4`,
        notes: "GitHub repo not publicly available per institution request."

    },
    {
        id: 9,
        name: "BandSite",
        description: "A fully responsive website for an emerging band, featuring two pages: the main page with band information and a photo gallery, and a shows page listing upcoming performances.",
        tools: [
            `${badgePath}/html.svg`,
            `${badgePath}/sass.svg`,
            `${badgePath}/javascript.svg`,
            `${badgePath}/axios.png`,
            `${badgePath}/git.svg`,
            `${badgePath}/github.svg`,
        ],
        image: `${imagePath}/bandsite.png`,
        video: `${videoPath}/bandsite.mp4`,
        notes: "GitHub repo not publicly available per institution request."
    },
    {
        id: 10,
        name: "CoffeeShop",
        description: "CoffeeShop is a static, multi-page web app with two pages: a landing page featuring product information and a menu page detailing the shop's offerings.",
        tools: [
            `${badgePath}/html.svg`,
            `${badgePath}/sass.svg`,
            `${badgePath}/git.svg`,
            `${badgePath}/github.svg`,
        ],
        image: `${imagePath}/coffeeshop.png`,
        video: `${videoPath}/coffeeshop.mp4`,
        notes: "GitHub repo not publicly available per institution request."
    },
    {
        id: 11,
        name: "CINEMATICATS",
        description: "CINEMATICATs is a static web application that help users find movie recommendations with a cat companion.",
        tools: [
            `${badgePath}/html.svg`,
            `${badgePath}/sass.svg`,
            `${badgePath}/javascript.svg`,
            `${badgePath}/axios.png`,
            `${badgePath}/git.svg`,
            `${badgePath}/github.svg`,
            `${badgePath}/figma.svg`
        ],
        image: `${imagePath}/cinematicats.png`,
        video: `${videoPath}/cinematicats.mp4`
    },
];