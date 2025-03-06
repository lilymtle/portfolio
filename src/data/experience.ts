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

export const educationExperience: EducationExperience[] = [
    {
        id: 1,
        institution: "BrainStation",
        date: "Jul 2024 - Sep 2024",
        qualification: "Diploma",
        discipline: "Software Engineering",
        gpa: 4.0,
        logo: "/assets/logos/brainstation.png"
    },
    {
        id: 2,
        institution: "Toronto Metropolitan University",
        date: "Sep 2021 - Jun 2023",
        qualification: "Master's Degree",
        discipline: "Nursing, Leadership",
        gpa: 4.0,
        logo: "/assets/logos/tmu.jpg"
    },
    {
        id: 3,
        institution: "Toronto Metropolitan University",
        date: "Sep 2013 - Jun 2018",
        qualification: "Bachelor's Degree",
        discipline: "Nursing",
        gpa: 3.3,
        logo: "/assets/logos/tmu.jpg"
    }
];

export const professionalExperience: ProfessionalExperience[] = [
    {
        id: 1,
        company: "Ontario Ministry of Health",
        date: "Feb 2025 - Present",
        role: "Health Analyst & Developer",
        logo: "/assets/logos/ontario-government.jpeg"
    },
    {
        id: 2,
        company: "The Verse",
        date: "Nov 2024 - Feb 2025",
        role: "Web Developer",
        logo: "/assets/logos/the-verse.jpeg"
    },
    {
        id: 3,
        company: "Lakeridge Health",
        date: "Aug 2023 - Jul 2024",
        role: "Clinical Practice Leader",
        logo: "/assets/logos/lakeridge-health.jpeg"
    },
    {
        id: 4,
        company: "Centre for Addiction and Mental Health",
        date: "Sep 2018 - Aug 2023",
        role: "Registered Nurse",
        logo: "/assets/logos/camh.jpeg"
    },
    {
        id: 5,
        company: "University of Toronto",
        date: "Nov 2022 - Dec 2022",
        role: "Clinical Instructor (Secondment)",
        logo: "/assets/logos/uoft.jpeg"
    }
];