// import styling
import "./Hero.scss";

import { Header } from "../Header/Header.jsx";

export function Hero() {
    return (
        <main className="hero">
            <div className="hero__background-container">
                <img 
                className="hero__img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" />
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
            </div>

            {/* <div className="hero__container">
                <div className="hero__wrapper">
                    <h1 className="hero__header">
                        Hi there 👋🏻,
                    </h1>

                    <h2 className="hero__subheader">
                        I'm Lily!
                    </h2>

                    <p className="hero__text">
                        A registered nurse turned <span className="hero__text--teal">software engineer</span>!
                    </p>
                </div>

                <div className="circle-container">
                    <img 
                        className="hero__img"
                        src="/src/assets/images/hero-img.svg"
                        alt="illustration of a woman on a laptop" />
                </div>
            </div> */}
        </main>
    );
};