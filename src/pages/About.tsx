// import styling
import "./About.scss";

// import data
import { educationExperience } from "../data/experience";
import { professionalExperience } from "../data/experience";
import { techLanguages } from "../data/skills";
import { techTools } from "../data/skills";
import { softSkills } from "../data/skills";

// import component
import AccordionBox from "../components/Accordion/Accordion";

export function AboutPage() {
    return (
        <section className="about">
            <h2 className="about__header">
                About Me
            </h2>
        
            <p className="about__text">
                With 5+ years of healthcare experience, I've developed strong critical 
                thinking, communication, and empathy skills, which I’m excited to apply in 
                tech to create user-focused solutions.
            </p>

            <p className="about__text">
                Outside of work, I’m passionate about 
                weightlifting, cooking, reading, traveling, and diving into movies, 
                videogames, and anime. I’m also currently learning French, always eager to 
                expand my horizons and embrace new challenges.
            </p>

            <section className="about__experience">
                <h3 className="about__subheader">
                    Experience
                </h3>
                
                <div className="about__experience--education">
                    <h4 className="about__subheader--small">
                        Education
                    </h4>

                    <ul className="about__list">
                        {educationExperience.map((item, index) => (
                            <li key={index} className="about__item">
                                <img 
                                    className="about__logo"
                                    src={item.logo}
                                />
                                
                                <div className="about__experience-wrapper">
                                    <p className="about__text about__text--experience">
                                        {item.institution}
                                    </p>

                                    <p className="about__text about__text--experience">
                                        {item.date}
                                    </p>
                                    
                                    <p className="about__text about__text--experience">
                                        {item.qualification}, {item.discipline}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="about__experience--professional">
                    <h4 className="about__subheader--small">
                        Professional
                    </h4>

                    <ul className="about__list">
                        {professionalExperience.map((item, index) => (
                            <li key={index} className="about__item">
                                <img 
                                    className="about__logo"
                                    src={item.logo}
                                />
                                
                                <div className="about__experience-wrapper">
                                    <p className="about__text about__text--experience">
                                        {item.company}
                                    </p>

                                    <p className="about__text about__text--experience">
                                        {item.date}
                                    </p>
                                    
                                    <p className="about__text about__text--experience">
                                        {item.role}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="about__skills">
                <h3 className="about__subheader--small">
                    Skills
                </h3>

                <div className="about__wrapper">

                <AccordionBox
                    title="Technical"
                >
                    <ul className="about__list about__list--tech-skills">
                        {techLanguages.map((techLanguage, index) => (
                            <li key={index} className="about__item about__item--tech-skills">                                    
                                <img 
                                    className="skill__icon"
                                    src={techLanguage.icon}
                                    alt={techLanguage.alt}
                                />
                            </li>
                        ))}
                    </ul>
                </AccordionBox>

                <AccordionBox
                    title="Tools"
                >
                    <ul className="about__list about__list--tech-skills">
                        {techTools.map((techTool, index) => (
                            <li key={index} className="about__item about__item--tech-skills">                                    
                                <img 
                                    className="skill__icon"
                                    src={techTool.icon}
                                    alt={techTool.alt}
                                />
                            </li>
                        ))}
                    </ul>

                    <p className="about__text">
                        Others:
                    </p>

                    <p className="about__text about__text--tech-skills">
                        Agile (Scrum), Jira, RESTful API Development and Integration, Axios,
                        Microsoft Office, Articulate 360
                    </p>
                </AccordionBox>

                <AccordionBox title="Soft">
                    <ul className="about__list about__list--soft-skills">
                        {softSkills.map((softSkill, index) => (
                            <li key={index} className="about__item about__item--soft-skills">                                    
                                <p className="about__text about__text--soft-skills">
                                {softSkill.emoji} {softSkill.skill}
                                </p>
                            </li>
                        ))}
                    </ul>
                </AccordionBox>
                </div>
            </section>
        </section>
    )
};