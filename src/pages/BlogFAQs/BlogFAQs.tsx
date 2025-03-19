// styling
import "./BlogFAQs.scss";

// component
import AccordionBox from "../../components/Accordion/Accordion";

// data
import { blogFAQs, careerFAQs } from "../../data/faqs";

export function BlogFAQs() {
    return (
        <section className="blog__faqs">
            <h1 className="blog__faqs-header">
                FAQs
            </h1>

            <p className="blog__faqs-text">
                I have compiled a list of questions that I have been 
                asked about—<span className="blog__faqs-text--italics">frequently</span>. Check out
                the categories below.
            </p>

            <div className="blog__faqs-container">
                <h2 className="blog__faqs-subheader">
                    Blog
                </h2>

                {blogFAQs.map((blogFAQ, index) => (
                    <AccordionBox
                        title={blogFAQ.question}
                        key={index}
                    >
                        <p className="blog__faqs-text blog__faqs-text--answer">
                            {blogFAQ.answer}
                        </p>
                    </AccordionBox>
                ))}
            </div>

            <div className="blog__faqs-container">
                <h2 className="blog__faqs-subheader">
                    Career
                </h2>

                {careerFAQs.map((careerFAQ, index) => (
                    <AccordionBox
                        title={careerFAQ.question}
                        key={index}
                    >
                        <p className="blog__faqs-text blog__faqs-text--answer">
                            {careerFAQ.answer}
                        </p>
                    </AccordionBox>
                ))}
            </div>
        </section>
    );
};