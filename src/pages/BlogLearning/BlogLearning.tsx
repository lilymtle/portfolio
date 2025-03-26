// styling
import { learningResources } from "../../data/resources";
import "./BlogLearning.scss";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function BlogLearningPage() {
    return (
        <section className="blog__resources">
            <h1 className="blog__heading">
                Learning Resources
            </h1>

            <p className="blog__text">
                Text 
            </p>
            
            <ul className="blog__resources-list">
                {learningResources.map((learningResource) => (
                    <li className="blog__resources-list-item">
                        <article className="blog__resource-card">
                            <div className="blog__container--resource-subheading-text">
                                <h2 className="blog__subheading blog__subheading--remove-top-margin">{learningResource.name}</h2>
                                <p className="blog__text">{learningResource.website}</p>
                            </div>

                            <div className="blog__container--resource-number">
                                <a className="blog__resource-arrow-icon" href={learningResource.link}><ArrowForwardIcon /></a>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
};