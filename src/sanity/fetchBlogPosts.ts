import { sanityClient } from "./sanity";
import { allPostsQuery, latestPostQuery, postsByCategoryQuery, postBySlugQuery } from "./queries";

export async function getAllBlogPosts() {
    return await sanityClient.fetch(allPostsQuery);
};

export async function getLatestBlogPost() {
    return await sanityClient.fetch(latestPostQuery);
};

export async function getPostsByCategory(category: string) {
    return await sanityClient.fetch(postsByCategoryQuery, { category });
};

export async function getPostBySlug(slug: string) {
    return await sanityClient.fetch(postBySlugQuery, { slug });
};