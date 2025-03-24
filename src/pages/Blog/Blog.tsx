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

export function BlogPage() {
    const [latestPost, setLatestPost] = useState<any>(null);

    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                const data = await getLatestBlogPost();
                if (!data) throw new Error("No latest post found");
                setLatestPost(data);
                console.log(data);
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
                    <h1 className="blog__home-header">
                        Hi there 👋🏻
                    </h1>


                    <p className="blog__text">
                        After months of contemplation, I decided to create this space for me
                        to pour my thoughts into. This wee corner of mine will include my
                        ramblings on various topics, both technical and non-technical.
                    </p>

                    <h2 className="blog__home-subheader">
                        Latest Post
                    </h2>

                    <article className="blog__post">
                        {latestPost ? (
                            <BlogPostCard
                                title={latestPost.title}
                                image={urlFor(latestPost.mainImage)}
                                excerpt={getExcerpt(latestPost.body, 150)}
                                categories={latestPost.categories}
                                publishedAt={timeAgo(latestPost.publishedAt)}
                            />
                        ) : <p>Loading latest post...</p>}
                    </article>

                    <h2 className="blog__home-subheader">
                        Playlist
                    </h2>

                </section>
            </main>
        </>
    );
};