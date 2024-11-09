// import styling
import "./ProjectPage.scss";
import "animate.css/animate.compat.css"

// import components
import { Carousel } from "../../components/Carousel/Carousel.jsx";
import ScrollAnimation from "react-animate-on-scroll";

export function ProjectPage() {

const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
            <section className="projects" id="projects">
                <ScrollAnimation animateIn="fadeInRight" duration={2}>
                    <h1 className="project__header">
                        Projects
                    </h1>

                    <p className="project__text">
                        Hover over the images for more details.
                    </p>

                    <section className="project__carousel">
                        <Carousel slides={SLIDES} options={OPTIONS} />
                    </section>
                </ScrollAnimation>
            </section>
    );
};