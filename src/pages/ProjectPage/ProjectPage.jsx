// import styling
import "./ProjectPage.scss";

import { Carousel } from "../../components/Carousel/Carousel.jsx";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css"


export function ProjectPage() {


    const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


    return (
        <ScrollAnimation animateIn="fadeInRight" duration={2}>
            <section className="projects" id="projects">
                <h2 className="project__subheader">
                    Projects
                </h2>

                <p className="project__text">
                    Hover over the images for more details.
                </p>

                <section className="project__carousel">
                    <Carousel slides={SLIDES} options={OPTIONS} />
                </section>

            </section>
        </ScrollAnimation>
    )
}