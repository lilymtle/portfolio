// import styling
import "./Projects.scss";

// import data
import { projects } from "../../data/projects";

export function ProjectsPage() {
    return (
        <section className="projects">
            <h2 className="projects__header">
                My Projects
            </h2>

            <div className="gridywrap">

                {projects.map((project, index) => (
                    <div key={index} className="gridy-2 gridyhe-1">
                        <div
                            className="gridimg"
                            style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            &nbsp;
                        </div>
                        <div className="gridinfo">
                            <h3>
                                {project.name}
                            </h3>
                            <p className="gridexerpt">
                                {project.description}
                            </p>

                            {/* Features Section */}
                            {project.features && project.features.length > 0 && (
                                <>
                                    <p className="gridexercpt">
                                        Features include:
                                    </p>

                                    <ul className="project__features-list">
                                        {project.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="project__feature">{feature}</li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {/* Tools Section */}
                            <p className="gridexrcpt">
                                Tools used:
                            </p>

                            <ul className="project__features-list">
                                {project.tools.map((tool, toolIndex) => (
                                    <li key={toolIndex} className="project__feature">{tool}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};