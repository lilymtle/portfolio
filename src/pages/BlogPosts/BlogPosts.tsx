// styling
import "./BlogPosts.scss";

// components
import { BlogSubNav } from "../../components/BlogSubNav/BlogSubNav";
import PaginationOutlined from "../../components/Pagination/Pagination";
import { BlogPostCard } from "../../components/BlogPostCard/BlogPostCard";

// utils & hooks
import { getExcerpt } from "../../utils/getExcerpt";
import { timeAgo } from "../../utils/timeAgo";
import { useState, useEffect } from "react";

// sanity
import { getAllBlogPosts } from "../../sanity/fetchBlogPosts";
import { urlFor } from "../../sanity/sanityImage";
import { useSearchParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function BlogPostsPage() {
    const [posts, setPosts] = useState<any>(null);
    const [sortOrder, setSortOrder] = useState<string>("latest");
    const postsPerPage: number = 4;
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;
    
    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const data = await getAllBlogPosts();
                if (!data) throw new Error("No posts found");
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }
        fetchBlogPosts();
    }, []);

    const sortedPosts = posts ? [...posts].sort((a, b) => {
        return sortOrder === "latest"
            ? new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
            : new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
    }) : [];

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

    return (
        <>
                    <HelmetProvider>
                        <Helmet>
                            <title>
                                Blog | Posts
                            </title>
                        </Helmet>
                    </HelmetProvider>

        <section className="blog__posts">
            <div className="blog__sub-nav-container">
                <BlogSubNav />
            </div>

            <div className="blog__wrapper-heading">
                <h1 className="blog__heading">
                    Posts
                </h1>

                <div className="blog__sort-container">
                    <label className="blog__label">Sort by:</label>

                    <select
                        className="blog__sort-dropdown"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>

            <section className="blog__posts-cards">
                <ul className="blog__posts-list">
                    {currentPosts.length > 0 ? (
                        currentPosts.map((post) => (
                            <li key={post._id} className="blog__posts-list-item">
                                <BlogPostCard
                                    title={post.title}
                                    image={urlFor(post.mainImage)}
                                    excerpt={getExcerpt(post.body, 100)}
                                    body={post.body}
                                    categories={post.categories}
                                    publishedAt={timeAgo(post.publishedAt)}
                                    slug={post.slug.current}
                                />
                            </li>
                        ))
                    ) : (
                        <p>Loading posts...</p>
                    )}
                </ul>
            </section>


            <PaginationOutlined
                count={totalPages}
                page={currentPage}
                onChange={(page) => setSearchParams({ page: page.toString() })}
                />
        </section>

        </>
    );
};