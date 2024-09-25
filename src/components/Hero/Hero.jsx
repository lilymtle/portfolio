// import styling
import "./Hero.scss";

export function Hero() {
    return (
        <main className="hero">
            <div className="hero__container">
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
            </div>
        </main>
    );
};