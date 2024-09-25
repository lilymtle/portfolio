// import styling
import "./ProjectPage.scss";

export function ProjectPage() {
    return (
        <section className="project">
            <h2 className="project__subheader">
                Projects
            </h2>

            <section className="project__cards">
                <ul className="card__list">
                    <li className="card">

                        <img
                            className="card__img"
                            src="src/assets/images/mood-compass-img.png"
                            alt="screenshot of moodcompass project" />
                    </li>
                </ul>
            </section>
        </section>
    )
}