import { sanityClient } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
    return builder.image(source).url();
};