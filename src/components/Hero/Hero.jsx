// import styling
import "./Hero.scss";

// import logos
import linkedinLogo from "../../assets/logos/linkedin-logo.png";
import githubLogo from "../../assets/logos/github-logo.svg";

// import images
import heroImage from "../../assets/images/hero-character.png";

// import component
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
            </div>
        </section>
    );
};