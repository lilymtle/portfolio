// import styling
import { BasicTabs } from "../../components/Tabs/Tabs.jsx";
import "./AboutPage.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css"

export function AboutPage() {
    return (
        <ScrollAnimation animateIn="fadeInLeft" duration={2}>
            <section className="about" id="about">
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
            </section>
        </ScrollAnimation>
    );
};