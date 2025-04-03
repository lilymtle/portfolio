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
                console.log("Latest Post:", data);
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
                        Blog | Lily's Corner
                    </title>
                </Helmet>
            </HelmetProvider>

            <main>
                <section className="blog__home">
                    <section className="blog__intro">
                        <h1 className="blog__heading">
                            Hi there 👋🏻
                        </h1>

                        <p className="blog__text">
                            After months of contemplation, I decided to create this space to pour my thoughts 
                            into—a quiet corner where creativity and curiosity meet. Here, you'll find my 
                            musings on everything that fascinates me, whether technical or non-technical. 
                            This blog is a home for my thoughts, personal reflections, and the things I care about most.
                        </p>

                        <p className="blog__text">
                            My hope is that this space becomes more than a collection of ramblings; instead, 
                            I want it to spark inspiration, provide insights, and create a connection. Whether 
                            you're here to learn something new, share in an opinion, or simply stumble across 
                            an interesting thought, I welcome you to this little corner of mine. Let’s explore 
                            together.
                        </p>
                    </section>

                    <h2 className="blog__subheading blog__subheading--black">
                        Latest Post
                    </h2>

                    {latestPost ? (
                        <BlogPostCard
                            title={latestPost.title}
                            image={urlFor(latestPost.mainImage)}
                            excerpt={getExcerpt(latestPost.body, 150)}
                            body={latestPost.body}
                            categories={latestPost.categories}
                            publishedAt={timeAgo(latestPost.publishedAt)}
                            slug={latestPost.slug.current}
                        />
                    ) : <p>Loading latest post...</p>}


                    <Divider className="blog__divider" />

                    <section className="blog__current-activities">
                        <h2 className="blog__subheading blog__subheading--black">
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