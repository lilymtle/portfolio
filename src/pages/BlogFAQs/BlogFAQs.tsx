// styling
import "./BlogFAQs.scss";

// component
import AccordionBox from "../../components/Accordion/Accordion";

// data
import { blogFAQs, careerFAQs } from "../../data/faqs";

import { Helmet, HelmetProvider } from "react-helmet-async";

export function BlogFAQs() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>
                        Blog | FAQs
                    </title>
                </Helmet>
            </HelmetProvider>

            <section className="blog__faqs">
                <h1 className="blog__faqs-header">
                    FAQs
                </h1>

                <p className="blog__faqs-text">
                    If you have any questions that aren't answered here, you can contact me here {/* add link later */}.
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
        </>
    );
};