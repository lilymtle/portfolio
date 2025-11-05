interface EducationExperience {
    id: number;
    institution: string;
    date: string;
    qualification: string;
    discipline: string;
    gpa: number;
    logo: string;
};

interface ProfessionalExperience {
    id: number;
    company: string;
    date: string;
    role: string;
    logo: string;
};

const imgPath = "/assets/logos";

export const educationExperience: EducationExperience[] = [
    {
        id: 1,
        institution: "BrainStation",
        date: "Jul 2024 - Sep 2024",
        qualification: "Diploma",
        discipline: "Software Engineering",
        gpa: 4.0,
        logo: `${imgPath}/brainstation.png`
    },
    {
        id: 2,
        institution: "Toronto Metropolitan University",
        date: "Sep 2021 - Jun 2023",
        qualification: "Master's Degree",
        discipline: "Nursing, Leadership",
        gpa: 4.0,
        logo: `${imgPath}/tmu.jpg`
    },
    {
        id: 3,
        institution: "Toronto Metropolitan University",
        date: "Sep 2013 - Jun 2018",
        qualification: "Bachelor's Degree",
        discipline: "Nursing",
        gpa: 3.3,
        logo: `${imgPath}/tmu.jpg`
    }
];

export const professionalExperience: ProfessionalExperience[] = [
    {
        id: 1,
        company: "Ontario Ministry of Health",
        date: "Feb 2025 - Sep 2025",
        role: "Software Developer",
        logo: `${imgPath}/ontario-government.jpeg`
    },
    {
        id: 2,
        company: "The Verse",
        date: "Nov 2024 - Feb 2025",
        role: "Web Developer",
        logo: `${imgPath}/the-verse.jpeg`
    },
    {
        id: 3,
        company: "Lakeridge Health",
        date: "Aug 2023 - Jul 2024",
        role: "Clinical Practice Leader",
        logo: `${imgPath}/lakeridge-health.jpeg`
    },
    {
        id: 4,
        company: "CAMH",
        date: "Sep 2018 - Aug 2023",
        role: "Registered Nurse",
        logo: `${imgPath}/camh.jpeg`
    },
    {
        id: 5,
        company: "University of Toronto",
        date: "Nov 2022 - Dec 2022",
        role: "Clinical Instructor (Secondment)",
        logo: `${imgPath}/uoft.jpeg`
    }
];