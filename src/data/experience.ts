// import images
import brainstationLogo from "../assets/logos/brainstation.png";
import tmuLogo from "../assets/logos/tmu.jpg";

interface Experience {
    index: number;
    institution: string;
    date: string;
    qualification: string;
    discipline: string;
    gpa: number;
    logo: string;
};

export const experience: Experience[] = [
    {
        index: 1,
        institution: "BrainStation",
        date: "Jul 2024 - Sep 2024",
        qualification: "Diploma",
        discipline: "Software Engineering",
        gpa: 4.0,
        logo: brainstationLogo
    },
    {
        index: 2,
        institution: "Toronto Metropolitan University",
        date: "Sep 2021 - Jun 2023",
        qualification: "Master's Degree",
        discipline: "Nursing",
        gpa: 4.0,
        logo: tmuLogo
    }
];