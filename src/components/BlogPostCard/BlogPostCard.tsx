// styling
import { Link, useLocation } from "react-router-dom";
import "./BlogPostCard.scss";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

interface Category {
    _id: string;
    title: string;
}

export interface BlogPostCard {
    title: string;
    image: string;
    excerpt: string;
    body: string;
    categories: Category[];
    publishedAt: string;
    slug?: string;
};


export function BlogPostCard({ title, image, excerpt, body, categories, publishedAt, slug }: BlogPostCard): JSX.Element {
    const location = useLocation();

    return (
        <div className="blog__post-card-container">
            <Link 
                className="blog__post-card-link" 
                to={`/blog/post/${slug}`} 
                state={{ title, image, body, categories, publishedAt, from: location.pathname + location.search }}
            >
                <article className="blog__post-card">
                    <div className="blog__post-card-image-wrapper">
                        <img
                            className="blog__post-card-image"
                            src={image}
                            alt="Placeholder"
                            loading="lazy"
                        />
                    </div>

                    <div className="blog__post-card-content">
                        <div className="blog__post-card-title-description">
                            <h2 className="blog__subheading blog__subheading--black">
                                {title}
                            </h2>

                            <p className="blog__post-card-text">
                                {excerpt}
                            </p>
                        </div>
                    </div>
                </article>
            </Link>

            <div className="blog__post-card-footer">
                {categories.map((category) => (
                    <Link
                        key={category._id}
                        className="blog__post-card-category"
                        to={`/blog/category/${category.title}`}
                    >
                        {capitalizeFirstLetter(category.title)}
                    </Link>
                ))}

                <p className="blog__post-card-divider">|</p>
                <p className="blog__post-card-date">{publishedAt}</p>
            </div>
        </div>
    );
};