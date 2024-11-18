// import styling
import "./Hero.scss";

// import components
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <img
                    className="hero__character"
                    src="/assets/images/hero-character.png"
                    alt="illustration of a woman sitting on a beanbag with her hands in her pockets"
                />

                <div className="hero__content">
                    <h1 className="hero__header">
                        Hi, there!
                    </h1>

                    <div className="hero__overlay">
                        <p className="hero__text">
                            My name is <span className="hero__text--lavender">Lily</span>, and it's so
                            awesome to meet you. 😄 Let's get in touch!
                        </p>
                    </div>

                    <div className="hero__cta">
                        <p className="hero__button hero__button--linkedin">
                            LinkedIn
                        </p>

                        <p className="hero__button hero__button--github">
                            GitHub
                        </p>
                    </div>
                </div>

                <ArrowDownwardIcon 
                    className="hero__arrow-icon"
                    sx={{
                        fontSize: {
                            sm: "2.5rem"
                        }
                    }}
                />
            </div>
        </section>
    );
};