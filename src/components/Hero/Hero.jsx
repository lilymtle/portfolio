// import styling
import "./Hero.scss";

// import component
import { Link } from "react-router-dom";

export function Hero() {
    return (
        <>
            <div className="hero__background-container">
                <img 
                className="hero__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" />
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
            </div>

            <section className="hero__content-container">
                <p className="hero__text">Let's connect: </p>

                <Link to="https://linkedin.com/in/lilymtle">
                    <img 
                        className="hero__icon"
                        src="src/assets/logos/linkedin-logo.png"
                        alt="linkedin icon" />
                </Link>

                <Link to="https://github.com/lilymtle">
                    <img
                        className="hero__icon"
                        src="src/assets/logos/github-logo.svg"
                        alt="github icon" />
                </Link>
            </section>
        </>
    );
};