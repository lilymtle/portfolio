// import styling
import "./ProjectPage.scss";

import { Carousel } from "../../components/Carousel/Carousel.jsx";

export function ProjectPage() {
    const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


    return (
        <section className="projects">
            <h2 className="project__subheader">
                Projects
            </h2>

            <p className="project__text">
                Hover over the images for more details!
            </p>

            <section>
                <div className="carousel">
                    <Carousel slides={SLIDES} options={OPTIONS} />
                </div>
            </section>

            <section className="project__cards">
                <ul className="card__list">
                    <li className="card">
                    <div className="card__inner">
                        <div className="card__front">
                            <h3 className="project__subheader--small">
                                MoodCompass
                            </h3>

                            <div className="card__img">
                                <img className="card__img--laptop" 
                                src="/src/assets/images/laptop-screen.png" />

                                <div className="card__overlay">
                                    <img
                                        className="card__img--project"
                                        src="src/assets/images/mood-compass-img.png"
                                        alt="screenshot of moodcompass project" />
                                </div>
                            </div>
                        </div>

                        <div className="card__back">
                            <h3 className="project__subheader--small">
                                Casestudy
                            </h3>
                        </div>
                        </div>
                    </li>

                    <li className="card">
                    <div className="card__inner">
                        <div className="card__front">
                            <h3 className="project__subheader--small">
                                TELUS What Your Preference Is
                            </h3>

                            <div className="card__img">
                                <img className="card__img--laptop" 
                            src="/src/assets/images/laptop-screen.png" />

                            <div className="card__overlay">
                                <img
                                    className="card__img--project"
                                    src="src/assets/images/mood-compass-img.png"
                                    alt="screenshot of moodcompass project" />
                            </div>
                            </div>
                        </div>

                        <div className="card__back">
                            <h3 className="project__subheader--small">
                                Casestudy
                            </h3>
                        </div>
                        </div>
                    </li>

                    <li className="card">
                    <div className="card__inner">
                        <div className="card__front">
                            <h3 className="project__subheader--small">
                                InStock
                            </h3>

                            <div className="card__img">
                                <img className="card__img--laptop" 
                            src="/src/assets/images/laptop-screen.png" />

                            <div className="card__overlay">
                                <img
                                    className="card__img--project"
                                    src="src/assets/images/mood-compass-img.png"
                                    alt="screenshot of moodcompass project" />
                            </div>
                            </div>
                        </div>

                        <div className="card__back">
                            <h3 className="project__subheader--small">
                                Casestudy
                            </h3>
                        </div>
                        </div>
                    </li>

                    <li className="card">
                    <div className="card__inner">
                        <div className="card__front">
                            <h3 className="project__subheader--small">
                                BrainFlix
                            </h3>

                            <div className="card__img">
                                <img className="card__img--laptop" 
                            src="/src/assets/images/laptop-screen.png" />

                            <div className="card__overlay">
                                <img
                                    className="card__img--project"
                                    src="src/assets/images/mood-compass-img.png"
                                    alt="screenshot of moodcompass project" />
                            </div>
                            </div>
                        </div>

                        <div className="card__back">
                            <h3 className="project__subheader--small">
                                Casestudy
                            </h3>
                        </div>
                        </div>
                    </li>

                    <li className="card">
                    <div className="card__inner">
                        <div className="card__front">
                            <h3 className="project__subheader--small">
                                Bandsite
                            </h3>

                            <div className="card__img">
                                <img className="card__img--laptop" 
                            src="/src/assets/images/laptop-screen.png" />

                            <div className="card__overlay">
                                <img
                                    className="card__img--project"
                                    src="src/assets/images/mood-compass-img.png"
                                    alt="screenshot of moodcompass project" />
                            </div>
                            </div>
                        </div>

                        <div className="card__back">
                            <h3 className="project__subheader--small">
                                Casestudy
                            </h3>
                        </div>
                        </div>
                    </li>

                    <li className="card">
                    <div className="card__inner">
                        <div className="card__front">
                            <h3 className="project__subheader--small">
                                Coffee Shop
                            </h3>

                            <div className="card__img">
                                <img className="card__img--laptop" 
                            src="/src/assets/images/laptop-screen.png" />

                            <div className="card__overlay">
                                <img
                                    className="card__img--project"
                                    src="src/assets/images/mood-compass-img.png"
                                    alt="screenshot of moodcompass project" />
                            </div>
                            </div>
                        </div>

                        <div className="card__back">
                            <h3 className="project__subheader--small">
                                Casestudy
                            </h3>
                        </div>
                        </div>
                    </li>

                </ul>
            </section>
        </section>
    )
}