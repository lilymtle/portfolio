// import images
import brainstationLogo from "../assets/logos/brainstation.png";
import tmuLogo from "../assets/logos/tmu.jpg";
import theVerseLogo from "../assets/logos/the-verse.jpeg";

interface EducationExperience {
    index: number;
    institution: string;
    date: string;
    qualification: string;
    discipline: string;
    gpa: number;
    logo: string;
};

interface ProfessionalExperience {
    index: number;
    company: string;
    date: string;
    role: string;
    logo: string;
}

export const educationExperience: EducationExperience[] = [
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

export const professionalExperience: ProfessionalExperience[] = [
    {
        index: 1,
        company: "The Verse",
        date: "Nov 2024 - Present",
        role: "Web Developer Intern",
        logo: theVerseLogo
    }
];