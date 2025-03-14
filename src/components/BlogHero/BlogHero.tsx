// styling
import "./BlogHero.scss";

export function BlogHero() {
    return (
        <section className="blog__hero">
            <img 
            className="blog__hero-logo"
            alt='Green to blue gradient bubble logo that says 
            "Lily Le - Just a blog"'
            src="/assets/logos/blog-logo.png" />
        </section>
    );
};