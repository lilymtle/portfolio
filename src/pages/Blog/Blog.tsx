// styling
import "./Blog.scss";

// components
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BlogPostCard } from "../../components/BlogPostCard/BlogPostCard";

// util & hooks
import { timeAgo } from "../../utils/timeAgo";
import { getExcerpt } from "../../utils/getExcerpt";
import { useEffect, useState } from "react";

// sanity
import { getLatestBlogPost } from "../../sanity/fetchBlogPosts";
import { urlFor } from "../../sanity/sanityImage";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

export function BlogPage() {
    const [latestPost, setLatestPost] = useState<any>(null);

    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                const data = await getLatestBlogPost();
                if (!data) throw new Error("No latest post found");
                setLatestPost(data);
            } catch (error) {
                console.error("Error fetching latest post:", error);
            }
        };
        fetchBlogPost();
    }, []);

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>
                        Blog | Lily Le
                    </title>
                </Helmet>
            </HelmetProvider>

            <main>
                <section id="welcome" className="blog__home">
                    <section className="blog__intro">
                        <h1 className="blog__home-header">
                            Hi there 👋🏻
                        </h1>

                        <p className="blog__text">
                            After months of contemplation, I decided to create this space for me
                            to pour my thoughts into. This wee corner of mine will include my
                            ramblings on various topics, both technical and non-technical.
                        </p>
                    </section>

                    <h2 className="blog__home-subheader">
                        Latest Post
                    </h2>

                    <Link
                        className="blog__latest-post-link"
                        to={`/post/${latestPost?.slug?.current}`}
                    >
                            <article className="blog__post-card">
                                {latestPost ? (
                                    <BlogPostCard
                                        title={latestPost.title}
                                        image={urlFor(latestPost.mainImage)}
                                        excerpt={getExcerpt(latestPost.body, 150)}
                                        body={latestPost.body}
                                        categories={latestPost.categories}
                                        publishedAt={timeAgo(latestPost.publishedAt)}
                                    />
                                ) : <p>Loading latest post...</p>}
                        </article>
                    </Link>

                    <Divider className="blog__divider" />

                    <section className="blog__current-activities">
                        <h2 className="blog__home-subheader">
                            Currently I am...
                        </h2>
                        
                        <div className="blog__current-items">
                            <article className="blog__current-item blog__current-item--game">
                                <div className="blog__current-item-overlay"></div>
                                <p className="blog__current-item-text">
                                    Playing Baldur's Gate 3
                                </p>
                            </article>

                            <article className="blog__current-item blog__current-item--show">
                                <div className="blog__current-item-overlay"></div>
                                <p className="blog__current-item-text">
                                    Watching The First Frost (难哄)
                                </p>
                            </article>

                            <article className="blog__current-item blog__current-item--book">
                                <div className="blog__current-item-overlay"></div>
                                <p className="blog__current-item-text">
                                    Reading Kitchen by Yoshimoto, Banana
                                </p>
                            </article>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
};