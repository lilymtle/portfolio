// styling
import "./BlogPosts.scss";

// components
import { BlogSubNav } from "../../components/BlogSubNav/BlogSubNav";
import PaginationOutlined from "../../components/Pagination/Pagination";

export function BlogPostsPage() {
    return (
        <section className="blog__posts">
            <div className="blog__sub-nav-container">
                <p className="blog__label">Browse:</p>

                <BlogSubNav />
            </div>

            <div className="blog__wrapper-heading">
                <h1 className="blog__heading">
                    Posts
                </h1>

                <div className="blog__sort-container">
                    <label className="blog__label">Sort by:</label>

                    <select className="blog__sort-dropdown">
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>

            <section className="blog__posts-cards">
                <ul className="blog__posts-list">
                    <li className="blog__posts-item">
                        <div className="blog__post-card-container">
                            <div className="blog__post-card">
                                <div className="blog__post-card-image-wrapper">
                                    <img
                                        className="blog__post-card-image"
                                        src="/assets/images/hero-background.jpg"
                                        alt="Placeholder"
                                    />
                                </div>

                                <div className="blog__post-card-content">
                                    <div className="blog__post-card-title-description">
                                        <h2 className="blog__subheading">
                                            Transitioning from Healthcare to Tech
                                        </h2>

                                        <p className="blog__post-card-text">
                                            Healthcare and technology are such contrasting fields,
                                            but they intersect in so many ways... <a className="blog__post-card-link" href="/">read more</a>
                                        </p>
                                    </div>

                                    <div className="blog__post-card-footer">
                                        <p className="blog__post-card-category">
                                            Technology
                                        </p>  

                                        <p className="blog__post-card-divider">
                                            |
                                        </p>
                                        
                                        <p className="blog__post-card-date">
                                            Yesterday
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="blog__posts-item">
                        <div className="blog__post-card-container">
                            <div className="blog__post-card">
                                <div className="blog__post-card-image-wrapper">
                                    <img
                                        className="blog__post-card-image"
                                        src="/assets/images/hero-background.jpg"
                                        alt="Placeholder"
                                    />
                                </div>

                                <div className="blog__post-card-content">
                                    <div className="blog__post-card-title-description">
                                        <h2 className="blog__subheading">
                                            England & Scotland Honeymoon
                                        </h2>

                                        <p className="blog__post-card-text">
                                            My husband and I went to the UK for our honeymoon,
                                            and I left a piece of myself in Scotland... <a className="blog__post-card-link" href="/">read more</a>
                                        </p>
                                    </div>

                                    <div className="blog__post-card-footer">
                                        <p className="blog__post-card-category">
                                            Travel
                                        </p>  

                                        <p className="blog__post-card-divider">
                                            |
                                        </p>
                                        
                                        <p className="blog__post-card-date">
                                            2 days ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="blog__posts-item">
                        <div className="blog__post-card-container">
                            <div className="blog__post-card">
                                <div className="blog__post-card-image-wrapper">
                                    <img
                                        className="blog__post-card-image"
                                        src="/assets/images/hero-background.jpg"
                                        alt="Placeholder"
                                    />
                                </div>

                                <div className="blog__post-card-content">
                                    <div className="blog__post-card-title-description">
                                        <h2 className="blog__subheading">
                                            Social Media Detox
                                        </h2>

                                        <p className="blog__post-card-text">
                                            Have you ever wasted hours doom scrolling on social media? I watched a video recently that opened up my eyes on how our phone impacts... <a className="blog__post-card-link" href="/">read more</a>
                                        </p>
                                    </div>

                                    <div className="blog__post-card-footer">
                                        <p className="blog__post-card-category">
                                            Lifestyle
                                        </p>  

                                        <p className="blog__post-card-divider">
                                            |
                                        </p>
                                        
                                        <p className="blog__post-card-date">
                                            a week ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            
            <PaginationOutlined />
        </section>
    );
};