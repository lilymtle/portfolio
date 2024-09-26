// import styling
import "./ProjectPage.scss";

export function ProjectPage() {
    return (
        <section className="projects">
            <h2 className="project__subheader">
                Projects
            </h2>

            <p className="project__text">
                Hover over the images for more details!
            </p>

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
                </ul>
            </section>
        </section>
    )
}