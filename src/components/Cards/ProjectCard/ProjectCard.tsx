// import styling
import { ReactNode } from "react";
import "../ProjectCard/ProjectCard.scss"

import AccordionBox from "../../Accordion/Accordion";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

interface Card {
    image: string;
    title: string;
    description: string;
    role?: string;
    tools: ReactNode[];
    live?: string;
    video?: string;
    github?: string;
    notes?: string;
}

export function ProjectCard({ image, title, description, tools, live, video, github, notes }: Card): JSX.Element {
    return (
        <div className="card__container">
            <div className="card" style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}}>
                <div className="card__info">
                    <h3 className="card__title">
                        {title}
                    </h3>

                    <section className="card__description">
                        <p className="card__description--text">{description}</p>

                        <p className="card__description--text-small">{notes}</p>

                        <p className="card__description--text-blue">Built with:</p>

                        <Marquee>
                            {tools}
                        </Marquee>

                        <div className="card__wrapper--buttons">
                            {live && <Link className="card__link" to={live}>Live</Link>}
                            {video && <Link className="card__link" to={video}>Preview</Link>}
                            {github && <Link className="card__link" to={github}>GitHub</Link>}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
};