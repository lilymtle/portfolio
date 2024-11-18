// import styling
import "./About.scss";

// import data
import { educationExperience } from "../data/experience";
import { professionalExperience } from "../data/experience";

export function AboutPage() {
    return (
        <section className="about">
            <h2 className="about__header">
                About Me
            </h2>

            <div className="about__wrapper">
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
                        <h4 className="about__label">
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
                                        <p className="about__item-text about__item-text--label">
                                            {item.institution}
                                        </p>

                                        <p className="about__item-text about__item-text--italic">
                                            {item.date}
                                        </p>
                                        
                                        <p className="about__item-text about__item-text--details">
                                            {item.qualification}, {item.discipline}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="about__experience--professional">
                        <h4 className="about__label">
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
                                        <p className="about__item-text about__item-text--label">
                                            {item.company}
                                        </p>

                                        <p className="about__item-text about__item-text--italic">
                                            {item.date}
                                        </p>
                                        
                                        <p className="about__item-text about__item-text--details">
                                            {item.role}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    )
};