export const allPostsQuery = `*[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    categories[]->{
        _id,
        title
    }
}`;

export const latestPostQuery = `*[_type == "post"] | order(_createdAt desc)[0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    categories[]->{
        _id,
        title
    }
}`;