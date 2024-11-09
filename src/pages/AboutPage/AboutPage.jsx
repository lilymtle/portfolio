// import styling
import "./AboutPage.scss";
import "animate.css/animate.compat.css"

// import components
import { BasicTabs } from "../../components/Tabs/Tabs.jsx";
import ScrollAnimation from "react-animate-on-scroll";

export function AboutPage() {
    return (
        <section className="about" id="about">
            <ScrollAnimation animateIn="fadeInLeft" duration={2}>
                <h1 className="about__header">
                    About
                </h1>

                <p className="about__text">
                    As a former nurse transitioning to software engineering, I bring a unique 
                    perspective to tech development. My nursing experience has shaped my understanding
                    of user needs, allowing me to create empathetic, efficient software solutions.
                    I also honed my ability to communicate effectively, manage high-stress situations,
                    and think critically—skills that seamlessly translate to software development.
                </p>

                <BasicTabs />
            </ScrollAnimation>
        </section>
    );
};