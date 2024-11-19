// import styling
import "./Projects.scss";

// import data
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/Cards/ProjectCard/ProjectCard";

export function ProjectsPage() {
    return (
        <section className="projects">
            <h2 className="projects__header">
                My Projects
            </h2>

            <ul className="projects__list">
                {projects.map((project, index) => (
                    <li key={index} className="project__item">
                        <ProjectCard 
                            image={project.image}
                            title={project.name} 
                            description={project.description}
                            features={project.features?.map((feature, featureIndex) => (
                                <li key={featureIndex}>{feature}</li>
                            )) || []}
                            tools={project.tools.map((tool, toolIndex) => (
                                <li key={toolIndex}>{tool}</li>
                            ))}
                            live={project.live}
                            github={project.github}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
};