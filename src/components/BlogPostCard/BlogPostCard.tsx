// styling
import "./BlogPostCard.scss";

interface Category {
    _id: string;
    title: string;
}

export interface BlogPostCard {
    title: string;
    image: string;
    excerpt: string;
    categories: Category[];
    publishedAt: string;
};


export function BlogPostCard({ title, image, excerpt, categories, publishedAt }: BlogPostCard): JSX.Element {
    return (
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
                            {excerpt} <a className="blog__post-card-link" href="/">read more</a>
                        </p>
                    </div>

                    <div className="blog__post-card-footer">
                        {categories.map((category) => (
                            <p key={category._id} className="blog__post-card-category">
                                {category.title}
                            </p>
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
    );
};