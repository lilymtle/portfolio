// import styling
import "./Hero.scss";

// import logos
import linkedinLogo from "../../assets/logos/linkedin-logo.png";
import githubLogo from "../../assets/logos/github-logo.svg";

// import images
import heroImage from "../../assets/images/hero-character.png";

// import components
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from "react-router-dom";

export function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <img
                    className="hero__character"
                    src={heroImage}
                    alt="illustration of a woman sitting on a beanbag with her hands in her pockets"
                />

                <div className="hero__content">
                    <h1 className="hero__header">
                        Hi, there!
                    </h1>

                    <p className="hero__text">
                        My name is <span className="hero__text--lavender">Lily</span>, and it's so
                        awesome to meet you.
                    </p>

                    <p className="hero__text hero__text--cta">
                        Let's get in touch!
                    </p>
                </div>

                <ArrowDownwardIcon 
                    className="hero__arrow-icon"
                    sx={{color: "#6962AD"}}
                />
            </div>
        </section>
    );
};