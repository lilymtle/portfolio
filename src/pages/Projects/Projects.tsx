// import styling
import "./Projects.scss";

// import data
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/Cards/ProjectCard/ProjectCard";

export function ProjectsPage() {
    return (
        <section id="projects" className="projects">
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
                            tools={project.tools?.map((tool, toolIndex) => (
                                <img 
                                    key={toolIndex}
                                    className="card__tools" 
                                    src={tool} 
                                    alt={`Tool ${index}`} 
                                />
                            )) || []}
                            live={project.live}
                            video={project.video}
                            github={project.github}
                            notes={project.notes}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
};