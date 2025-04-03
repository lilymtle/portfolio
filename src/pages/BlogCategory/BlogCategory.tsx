// styling
import { useEffect, useState } from "react";
import "./BlogCategory.scss";
import { useParams } from "react-router-dom";
import { getPostsByCategory } from "../../sanity/fetchBlogPosts";
import { BlogPostCard } from "../../components/BlogPostCard/BlogPostCard";
import { urlFor } from "../../sanity/sanityImage";
import { getExcerpt } from "../../utils/getExcerpt";
import { timeAgo } from "../../utils/timeAgo";
import PaginationOutlined from "../../components/Pagination/Pagination";
import { BlogSubNav } from "../../components/BlogSubNav/BlogSubNav";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

export function BlogCategoryPage() {
    const { category } = useParams<{ category: string }>();

    const [posts, setPosts] = useState<any[]>([]);
    const [sortOrder, setSortOrder] = useState<string>("latest");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const postsPerPage: number = 5;
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!category) {
            console.error("Category is not found");
            return;
        };

        const fetchPostsByCategory = async () => {
            try {
                const posts = await getPostsByCategory(category);
                if (!posts) throw new Error("No posts found");
                setPosts(posts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPostsByCategory();
    }, [category]);

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
                        Blog | {category}
                    </title>
                </Helmet>
            </HelmetProvider>

            <section className="blog__category">
                <BlogSubNav />
                <div className="blog__wrapper-heading">
                    <h1 className="blog__heading">
                        {capitalizeFirstLetter(category)}
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
                                        excerpt={getExcerpt(post.body, 150)}
                                        body={post.body}
                                        categories={post.categories}
                                        publishedAt={timeAgo(post.publishedAt)}
                                        slug={post.slug.current}
                                    />
                                </li>
                            ))
                        ) : (
                            <p>Looks like there is nothing posted on this, yet. 🙃</p>
                        )}
                    </ul>
                </section>

                <PaginationOutlined
                    count={totalPages}
                    page={currentPage}
                    onChange={setCurrentPage}
                />
            </section>
        </>
    );
};