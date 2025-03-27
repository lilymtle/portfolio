// styling
import { Link, useLocation } from "react-router-dom";
import "./BlogPost.scss";


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function BlogPostPage(): JSX.Element {
    const location = useLocation();
    const post = location.state;

    return (
        <section className="blog__post">
            <article className="blog__container--post">
            <h1 className="blog__heading">
                {post.title}
            </h1>

            <div className="blog__container--post-image">
                <img
                    className="blog__post-image"
                    src={post.image}
                    alt={post.title}
                />
            </div>

            <div className="blog__container--date-category">
                {post.categories.map((category: any) => (
                    <Link
                        key={category._id}
                        to={`/blog/category/${category.title}`}
                        className="blog__post-category"
                    >
                            {category.title}
                    </Link>
                ))}
                <p className="blog__post-date">Published {post.publishedAt}</p>
            </div>

            {post.body.map((block: any, index: number) => (
                <div key={block._key} className="blog__container-post">
                    {block.children.map((child: any, childIndex: number) => (
                        <p key={`${block._key}-${childIndex}`}  className="blog__post-text">
                            {child.text}
                        </p>
                    ))}
                </div>
            ))}
            </article>

            <section className="blog__post-nav">
                <nav className="blog__container--post-nav">
                    <div className="blog__post-nav-item">
                        <a className="blog__post-nav-link" href="/">
                            <ArrowBackIosIcon 
                                className="blog__post-nav-icon"
                                sx={{
                                    fontSize: {
                                        xs: 15,
                                        sm: 15,
                                        md: 15
                                    }
                                }}
                            />
                            <p className="blog__post-nav-label">Previous</p>
                        </a>
                    </div>

                    <div className="blog__post-nav-item">
                        <a className="blog__post-nav-link" href="/">
                            <p className="blog__post-nav-label">Next</p>
                            <ArrowForwardIosIcon 
                                className="blog__post-nav-icon"
                                sx={{
                                    fontSize: {
                                        xs: 15,
                                        sm: 15,
                                        md: 15
                                    }
                                }}
                            />
                            </a>
                    </div>
                </nav>
            </section>
        </section>
    );
};