// styling
import { Link, useLocation } from "react-router-dom";
import "./BlogPost.scss";

// components
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Helmet, HelmetProvider } from "react-helmet-async";

// util
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { handleScrollToTop } from "../../utils/handleScrollToTop";

// hooks
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// sanity
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { getPostBySlug } from "../../sanity/fetchBlogPosts";
import { urlFor } from "../../sanity/sanityImage";

export function BlogPostPage(): JSX.Element {
    useEffect(() => {
        handleScrollToTop();
    }, []);

    const location = useLocation();
    const previousPage = location.state?.from || "/blog";
    const { slug } = useParams();
    const [post, setPost] = useState(location.state || null);

    useEffect(() => {
        if (!slug) return;
        const fetchPost = async () => {
            try {
                const result = await getPostBySlug(slug);
                setPost(result);
            } catch (error) {
                console.error("Failed to fetch post:", error);
            }
        };
        fetchPost();
    }, [slug]);

    if (!post) {
        return <p className="blog__loading">Loading blog post...</p>;
    }

    const components: PortableTextComponents = {
        block: {
            h2: ({ children }) => <h2 className="blog__post-subheading">{children}</h2>,
            h3: ({ children }) => <h3 className="blog__post-subheading blog__post-subheading--medium">{children}</h3>,
            blockquote: ({ children }) => <blockquote className="blog__post-quote">{children}</blockquote>,
            normal: ({ children }) => <p className="blog__post-text">{children}</p>,
        },
        list: {
            bullet: ({ children }) => <ul className="blog__post-list">{children}</ul>,
            number: ({ children }) => <ol className="blog__post-list">{children}</ol>,
        },
        listItem: {
            bullet: ({ children }) => <li className="blog__post-list-item">{children}</li>,
            number: ({ children }) => <li className="blog__post-list-item">{children}</li>,
        },
        marks: {
            strong: ({ children }) => <strong>{children}</strong>,
            em: ({ children }) => <em>{children}</em>,
            link: ({ value, children }) => (
                <a
                    className="blog__post-link"
                    href={value.href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            ),
        },
        types: {
            image: ({ value }) => (
                <div className="blog__container-post-image blog__container-post-image--inline">
                    <img
                        className="blog__post-image blog__post-image--inline"
                        src={value.asset.url}
                        alt={value.alt || 'Blog image'}
                    />
                </div>
            ),
        },
    };

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
                <article className="blog__container-post">
                    <h1 className="blog__post-heading">
                        {post.title}
                    </h1>

                    <div className="blog__container-post-image--header">
                    <img
                        className="blog__post-image blog-post-image--header"
                        src={post.imageUrl}
                        alt={post.title}
                        />
                    </div>

                    <div className="blog__container-post-date-category">
                        {post.categories.map((category: any) => (
                            <Link
                                key={category._id}
                                to={`/blog/category/${category.title}`}
                                className="blog__post-category blog__post-link"
                            >
                                {capitalizeFirstLetter(category.title)}
                            </Link>
                        ))}
                        <p className="blog__post-date">Published {post.publishedAt}</p>
                    </div>

                    <PortableText value={post.body} components={components} />

                </article>
            </section>
        </>
    );
};