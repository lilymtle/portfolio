// styling
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Blog.scss";
import { Header } from "../../components/Header/Header";

export function BlogPage() {
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
                <section className="blog__home">
                    <h1 className="blog__home-header">
                        A Little Nook
                    </h1>

                    <p className="blog__text">
                        After months of contemplation, I decided to create this space for me
                        to pour my thoughts into. This wee corner of mine will include my
                        ramblings on various topics, both technical and non-technical.
                    </p>

                    <h2 className="blog__home-subheader">
                        Latest Post
                    </h2>

                    <h2 className="blog__home-subheader">
                        Playlist
                    </h2>

                    <iframe src="https://open.spotify.com/embed/playlist/2noyZgg466AcWSAJo0HSEh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </section>
            </main>
        </>
    );
};