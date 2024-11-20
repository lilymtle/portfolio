// import styling
import { ReactNode } from "react";
import "../ProjectCard/ProjectCard.scss"
import { useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BasicModal from "../../Modal/Modal";

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
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                            {live && <a className="card__link" href={live} target="blank">Live</a>}
                            {video && <p className="card__button" onClick={handleOpen}>Preview</p>}
                            {github && <a className="card__link" href={github} target="blank">GitHub</a>}
                        </div>
                    </section>
                </div>
            </div>
            <BasicModal 
                open={open} 
                handleClose={handleClose} 
                modalClassName="project__modal"
                title={title}
            >
                <video controls width="100%">
                    <source src={video} type="video/mp4" />
                </video>
            </BasicModal>
        </div>
    )
};