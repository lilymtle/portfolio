// import styling
import { BasicTabs } from "../../components/Tabs/Tabs";
import "./AboutPage.scss";

export function AboutPage() {
    return (
        <section className="about" id="about">
            <h2 className="about__subheader">
                About
            </h2>

            <p className="about__text">
                As a former nurse transitioning to software engineering, I bring a unique 
                perspective to tech development. My nursing experience has shaped my understanding
                of user needs, allowing me to create empathetic, efficient software solutions.
                I also honed my ability to communicate effectively, manage high-stress situations,
                and think critically—skills that seamlessly translate to software development.
            </p>
            
            <BasicTabs />
        </section>
    );
};