interface BlogFAQs {
    id: number;
    question: string;
    answer: string;
};

interface CareerFAQs{
    id: number;
    question: string;
    answer: string;
};

export const blogFAQs: BlogFAQs[] = [
    {
        id: 1,
        question: "What is the image in your hero/header?",
        answer: "It is a photo taken by Eberhard Grossgasteiger on Pexels. It is a snapshot of mountains in Scotland's West Highlands. "
    },
    {
        id: 2, 
        question: "How often do you post new content?",
        answer: "Whenever I have time. I'll aim for once or twice a week depending on how busy I am!"
    },
    {
        id: 3,
        question: "Can I suggest topics for future posts?",
        answer: "If it relates to any of the categories I write about, then sure. You can send me a message on my Contact page."
    },
    {
        id: 4,
        question: "What tools or resources do you use to create your blog?",
        answer: "I coded my blog using React, TypeScript, and Sass. My blog is a subdirectory of my portfolio, which is deployed through Vercel. In terms of the actual posts, I use a headless CMS called Sanity."
    }
];

export const careerFAQs: CareerFAQs[] = [
    {
        id: 1,
        question: "What sparked your interest in technology?",
        answer: "I’ve always been curious about how technology shapes the way we live and solve problems. It’s amazing how it touches so many industries and makes life easier in unexpected ways. That’s what drew me in—I just love learning and exploring what’s possible with it. Also, it was really cool when I printed my first Hello World haha."
    },
    {
        id: 2,
        question: "What was BrainStation like?",
        answer: "Intense and fast-paced, as bootcamps typically are! You’ll find yourself learning something new every single day, which can be both challenging and exciting."
    },
    {
        id: 3,
        question: "How can I prepare for BrainStation and be successful?",
        answer: "Create a schedule and stick to it to avoid falling behind. You may also need to dedicate extra time outside of class to dive deeper into concepts, and that’s perfectly okay. Most importantly, don’t hesitate to ask questions during class or set up 1:1s with teachers and TAs—they’re there to help!",
    },
    {
        id: 4,
        question: "What did you learn at BrainStation?",
        answer: "A lot, haha! The curriculum includes modern web technologies, programmatic thinking, software development methodologies, project management, and much more."
    },
    {
        id: 5,
        question: "Am I cooked if I'm a bootcamp grad?",
        answer: "I get asked this a lot—and I’ve asked myself the same question! No, you’re not “cooked.” The job market may be tough, but it’s not impossible. It will require persistence, effort, and patience, but success is absolutely achievable.",
    },
    {
        id: 6,
        question: "How were you able to land a role so soon after BrainStation?",
        answer: "Tailoring your resume and cover letter is crucial! I focused on leveraging my unique background and connecting it to the company’s mission. This approach worked well for my internship applications. For my current role, I landed it through networking."
    },
    {
        id: 7,
        question: "Do I have to network?",
        answer: "Do you have to? No. Should you? Absolutely! Networking opens doors to opportunities you might not even see advertised. It helps you build relationships, showcase your skills, and learn from others in the industry."
    },
    {
        id: 8,
        question: "How do I network?",
        answer: "Practice your pitch, attend networking events, and send that LinkedIn message for a coffee chat! Just remember—it’s a conversation, not a one-sided talk. Be yourself and engage authentically."
    },
    {
        id: 9,
        question: "Who do I network with?",
        answer: "Focus on connecting with people working in roles or companies you aspire to join. Seek out individuals who share a similar journey or career path, and reach out to those you find interesting or want to learn from."
    }
];