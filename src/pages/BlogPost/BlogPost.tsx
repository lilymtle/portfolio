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

    const formatText = (child: any, block: any) => {
        let textElement = <>{child.text}</>;
        const linkMark = block.markDefs?.find((mark: any) => child.marks.includes(mark._key));

        if (child.marks?.includes("strong")) {
            textElement = <strong>{textElement}</strong>;
        }
        if (child.marks?.includes("em")) {
            textElement = <em>{textElement}</em>;
        }

        if (linkMark?.href) {
            textElement = <a className="blog__post-link" href={linkMark.href} target="_blank" rel="noopener noreferrer">{textElement}</a>;
        }

        return textElement;
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

                    {post.body.map((block: any) => {
                        if (block._type === "image" && block.asset?.url) {
                            return (
                                <div key={block._key} className="blog__post-image-container">
                                    <img
                                        className="blog__post-image"
                                        src={block.asset.url}
                                        alt={block.alt || "Default alt text"}
                                    />
                                </div>
                            );
                        }

                        if (block._type === "block") {
                            switch (block.style) {
                                case "h1":
                                    return (
                                        <h1 key={block._key} className="blog__post-heading">
                                            {block.children.map((child: any) => formatText(child, block))}
                                        </h1>
                                    );
                                case "h2":
                                    return (
                                        <h2 key={block._key} className="blog__post-heading">
                                            {block.children.map((child: any) => formatText(child, block))}
                                        </h2>
                                    );
                                case "h3":
                                    return (
                                        <h3 key={block._key} className="blog__post-heading">
                                            {block.children.map((child: any) => formatText(child, block))}
                                        </h3>
                                    );
                                case "blockquote":
                                    return (
                                        <blockquote key={block._key} className="blog__post-quote">
                                            {block.children.map((child: any) => formatText(child, block))}
                                        </blockquote>
                                    );
                                default:
                                    return (
                                        <p key={block._key} className="blog__post-text">
                                            {block.children.map((child: any) => formatText(child, block))}
                                        </p>
                                    );
                            }
                        }
                        return null;
                    })}

                </article>
            </section>
        </>
    );
};