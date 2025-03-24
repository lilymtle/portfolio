import { sanityClient } from "./sanity";
import { allPostsQuery, latestPostQuery } from "./queries";

export async function getAllBlogPosts() {
    return await sanityClient.fetch(allPostsQuery);
};

export async function getLatestBlogPost() {
    return await sanityClient.fetch(latestPostQuery);
};