// import styling
import { ReactNode } from "react";
import "../ProjectCard/ProjectCard.scss"

import AccordionBox from "../../Accordion/Accordion";
import { Link } from "react-router-dom";

interface Card {
    image: string;
    title: string;
    description: string;
    role?: string;
    features: ReactNode[];
    tools: ReactNode[];
    live?: string;
    github?: string;
}

export function ProjectCard({ image, title, description, role, features, tools, live, github }: Card): JSX.Element {
    return (
        <div className="card__container">
            <div className="card" style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}}>
                <div className="card__info">
                    <h3 className="card__title">
                        {title}
                    </h3>

                    <section className="card__description">
                        <p>{description}</p>
                        
                        {features && features.length > 0 && (
                            <AccordionBox title="Features">
                                <ul>{features}</ul>
                            </AccordionBox>
                        )}

                        <AccordionBox title="Tools Used">
                            <ul>{tools}</ul>
                        </AccordionBox>

                        {live && <Link className="card__link" to={live}>Live</Link>}
                        {github && <Link className="card__link" to={github}>GitHub</Link>}

                    </section>
                </div>
            </div>
        </div>
    )
};