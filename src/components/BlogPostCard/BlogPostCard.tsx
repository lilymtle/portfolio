// styling
import { Link } from "react-router-dom";
import "./BlogPostCard.scss";

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


export function BlogPostCard({ title, image, excerpt, body, categories, publishedAt, slug}: BlogPostCard): JSX.Element {
    return (
        <Link className="blog__post-card-link" to={`/blog/post/${slug}`} state={{ title, image, body, categories, publishedAt }}>
        <div className="blog__post-card-container">
            <div className="blog__post-card">
                <div className="blog__post-card-image-wrapper">
                    <img
                        className="blog__post-card-image"
                        src={image}
                        alt="Placeholder"
                    />
                </div>

                <div className="blog__post-card-content">
                    <div className="blog__post-card-title-description">
                        <h2 className="blog__subheading">
                            {title}
                        </h2>

                        <p className="blog__post-card-text">
                            {excerpt}
                        </p>
                    </div>

                    <div className="blog__post-card-footer">
                        {categories.map((category) => (
                            <Link
                                className="blog__post-card-category"
                                to={`/blog/category/${category.title}`}
                            >
                                {category.title}
                            </Link>
                        ))}

                        <p className="blog__post-card-divider">
                            |
                        </p>

                        <p className="blog__post-card-date">
                            {publishedAt}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};