// import styling
import { BasicTabs } from "../../components/Tabs/Tabs";
import "./AboutPage.scss";

export function AboutPage() {
    return (
        <section className="about">
            <h2 className="about__subheader">
                About Me
            </h2>
            
            <BasicTabs />
        </section>
    );
};