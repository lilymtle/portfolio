// styling
import { Link, useLocation } from "react-router-dom";
import "./BlogPost.scss";

// components
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Helmet, HelmetProvider } from "react-helmet-async";

export function BlogPostPage(): JSX.Element {
    const location = useLocation();
    const post = location.state;
    const previousPage = location.state?.from || "/blog";

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>
                        Blog | {post.title}
                    </title>
                </Helmet>
            </HelmetProvider>

            <section className="blog__post">
                <div className="blog__container-back">
                    <Link className="blog__back-link" to={previousPage}>
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

                        <p className="blog__back-link-label">
                            Back
                        </p>
                    </Link>
                </div>
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
                                <p key={`${block._key}-${childIndex}`} className="blog__post-text">
                                    {child.text}
                                </p>
                            ))}
                        </div>
                    ))}
                </article>
            </section>
        </>
    );
};