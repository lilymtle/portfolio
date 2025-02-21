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
};

export const educationExperience: EducationExperience[] = [
    {
        index: 1,
        institution: "BrainStation",
        date: "Jul 2024 - Sep 2024",
        qualification: "Diploma",
        discipline: "Software Engineering",
        gpa: 4.0,
        logo: "/assets/logos/brainstation.png"
    },
    {
        index: 2,
        institution: "Toronto Metropolitan University",
        date: "Sep 2021 - Jun 2023",
        qualification: "Master's Degree",
        discipline: "Nursing, Leadership",
        gpa: 4.0,
        logo: "/assets/logos/tmu.jpg"
    }
];

export const professionalExperience: ProfessionalExperience[] = [
    {
        index: 1,
        company: "Ontario Ministry of Health",
        date: "Feb 2025 - Present",
        role: "Health Analyst & Developer",
        logo: "/assets/logos/ontario-government.jpeg"
    },
    {
        index: 2,
        company: "The Verse",
        date: "Nov 2024 - Feb 2025",
        role: "Web Developer",
        logo: "/assets/logos/the-verse.jpeg"
    }
];