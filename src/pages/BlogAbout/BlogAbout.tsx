// styling
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./BlogAbout.scss";

export function BlogAbout() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>
                        Blog | About
                    </title>
                </Helmet>
            </HelmetProvider>
            
            <section className="blog__about">
                <h1 className="blog__heading">
                    A Little Nook
                </h1>

                <p className="blog__about-text">
                    This wee corner of mine is a special space where I share my thoughts on topics
                    and/or things that interests me. Also, it's a way to organize and unload the
                    millions of thoughts running around in my head. 🫣
                </p>

                <div className="blog__about-container">
                    <div className="blog__wrapper--subheader-image">
                        <h2 className="blog__subheading">
                            Hi, I'm Lily
                        </h2>

                        <img
                            className="blog__about-image--me"
                            src="/assets/images/me.png"
                            alt="Photo of myself" />
                    </div>

                    <div className="blog__wrapper--text">
                        <p className="blog__about-text">
                            Nice to meet ya! I'm from Canada, where I live with my wonderful husband and
                            two adorable cats. As a Leo, ENFJ, and Gryffindor, I like to think of myself as a
                            burst of energy and sunshine. I'm passioante about reading, cooking, traveling,
                            health & wellness, gaming, and so much more!
                        </p>

                        <p className="blog__about-text">
                            I have a unique background that bridges healthcare and technology. Feel free
                            to explore more about my professional journey by visiting my <a className="blog__about-link" href="/">portfolio</a>!
                        </p>
                    </div>
                </div>

                <h2 className="blog__subheading">
                    The Why
                </h2>

                <div className="blog__about-container">
                    <div className="blog__wrapper--image">
                        <img
                            className="blog__about-image--illustration"
                            src="/assets/images/blog-about-why-illustration.jpeg"
                            alt="Illustration of a woman thinking while writing" />
                    </div>

                    <div className="blog__wrapper--text">
                        <p className="blog__about-text">
                            I used to write a lot when I was younger. In fact, I took creative writing classes
                            and had a knack for short stories, poems, and fiction. But as time went by
                            <span className="blog__about-text--italics">*cough*</span> I became an adult with
                            responsibilities <span className="blog__about-text--italics">*cough*</span>, I
                            went from writing stories and poems to documentation, research papers, and articles.
                        </p>

                        <p className="blog__about-text">
                            My hopes with this space is to:
                        </p>

                        <ul className="blog__about-list">
                            <li className="blog__about-list-item">
                                Rekindle my love for and skills in writing
                            </li>

                            <li className="blog__about-list-item">
                                Rediscover my creativity
                            </li>

                            <li className="blog__about-list-item">
                                Connect with others
                            </li>

                            <li className="blog__about-list-item">
                                Help others and myself
                            </li>

                            <li className="blog__about-list-item">
                                Have fun
                            </li>
                        </ul>
                    </div>
                </div>

                <h3 className="blog__subheading">
                    Disclaimer
                </h3>

                <div className="blog__about-container--disclaimer">
                    <p className="blog__about-text--disclaimer">
                        The content on this blog is for informational and entertainment purposes only.
                        It reflects my personal opinions and experiences and should not be considered
                        professional advice in health, technology, or any other field. Readers are
                        encouraged to seek professional guidance or conduct their own research for
                        specific concerns. I am not liable for any actions taken based on the information
                        provided here.
                    </p>
                </div>
            </section>
        </>
    );
};