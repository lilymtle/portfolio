// styling
import { Helmet, HelmetProvider } from "react-helmet-async";
import { learningResources } from "../../data/resources";
import "./BlogLearning.scss";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function BlogLearningPage() {
    return (
        <>
                    <HelmetProvider>
                        <Helmet>
                            <title>
                                Blog | Learning
                            </title>
                        </Helmet>
                    </HelmetProvider>

        <section className="blog__resources">
            <h1 className="blog__heading">
                Learning Resources
            </h1>

            <p className="blog__text">
                Here you will find various learning resources, all of which are free or have free options.
                Some of these are resources I've used, while others are resources I stumbled upon and think is worth sharing.
                I will try to update this list periodically.
            </p>
            
            <ul className="blog__resources-list">
                {learningResources.map((learningResource) => (
                    <li key={learningResource.id} className="blog__resources-list-item">
                        <article className="blog__resource-card">
                            <div className="blog__container-resource-subheading-text">
                                <h2 className="blog__subheading blog__subheading--black blog__subheading--remove-top-margin">{learningResource.name}</h2>
                                <p className="blog__text blog__text--remove-bottom-margin">{learningResource.website}</p>
                            </div>

                            <div className="blog__container-resource-arrow">
                                <a className="blog__resource-arrow-link" href={learningResource.link}><ArrowForwardIcon /></a>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
        </>
    );
};