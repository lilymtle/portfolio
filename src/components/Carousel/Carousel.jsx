import { useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './CarouselArrowButton/CarouselArrowButton.jsx'
import { DotButton, useDotButton } from './CourselDotButton/CarouselDotButton.jsx'

import "./Carousel.scss";



export function Carousel(props) {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel({
        ...options,
        loop: true,
    });

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="carousel">
            <div className="carousel__viewport" ref={emblaRef}>
                <div className="carousel__container">


                    <div className="carousel__slide">
                        <li className="card">
                            <div className="card__inner">
                                <div className="card__front">
                                    <h3 className="card__subheader--small">
                                        MoodCompass
                                    </h3>

                                    <img
                                        className="card__img"
                                        src="src/assets/images/mood-compass.png"
                                        alt="screenshot of mood-compass in a macbook frame" /> 
                                </div>

                                <div className="card__back">
                                    <h3 className="card__subheader--small">
                                        Overview
                                    </h3>

                                    <p className="card__text">
                                        MoodCompass is dedicated to mental health, providing a safe space
                                        for managing negative moods through education. Resources are
                                        available without an account, but users need to sign up to
                                        favorite them. A mood tracker and log will be added in the future.
                                    </p>

                                    <h3 className="card__subheader--small">
                                        Tools Used
                                    </h3>

                                    <ul className="card__list">
                                        <li className="card__item">
                                            <p className="card__text">
                                                React
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                SASS
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Node.js
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                MySQL
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Express.js
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Knex.js
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Axios
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Database-Integrated RESTful API Development
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Firebase
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Material UI
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Git
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                GitHub
                                            </p>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </li>
                    </div>


                    <div className="carousel__slide">
                        <li className="card">
                            <div className="card__inner">
                                <div className="card__front">
                                    <h3 className="card__subheader--small">
                                        TELUS What Your Preference Is
                                    </h3>

                                    <img
                                        className="card__img"
                                        src="src/assets/images/telus.png"
                                        alt="screenshot of telus what your preference is in a macbook frame" />    
                                </div>

                                <div className="card__back">
                                    <h3 className="card__subheader--small">
                                        Overview
                                    </h3>

                                    <p className="card__text">
                                        MoodCompass is dedicated to mental health, providing a safe space
                                        for managing negative moods through education. Resources are
                                        available without an account, but users need to sign up to
                                        favorite them. A mood tracker and log will be added in the future.
                                    </p>

                                    <h3 className="card__subheader--small">
                                        Tools Used
                                    </h3>

                                    <ul className="card__list">
                                        <li className="card__item">
                                            <p className="card__text">
                                                React
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                SASS
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Axios
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                RESTful API Development
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Git
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                GitHub
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Agile (Scrum)
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Jira
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </div>

                    <div className="carousel__slide">
                        <li className="card">
                            <div className="card__inner">
                                <div className="card__front">
                                    <h3 className="card__subheader--small">
                                        InStock
                                    </h3>

                                        <img
                                            className="card__img"
                                            src="src/assets/images/instock.png"
                                            alt="screenshot of instock in a macbook frame" />                                     
                                </div>

                                <div className="card__back">
                                    <h3 className="card__subheader--small">
                                        Overview
                                    </h3>

                                    <p className="card__text">
                                        MoodCompass is dedicated to mental health, providing a safe space
                                        for managing negative moods through education. Resources are
                                        available without an account, but users need to sign up to
                                        favorite them. A mood tracker and log will be added in the future.
                                    </p>

                                    <h3 className="card__subheader--small">
                                        Tools Used
                                    </h3>

                                    <ul className="card__list">
                                        <li className="card__item">
                                            <p className="card__text">
                                                React
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                SASS
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Node.js
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                MySQL
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Express.js
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Knex.js
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Axios
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Database-Integrated RESTful API Development
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Git
                                            </p>
                                        </li>


                                        <li className="card__item">
                                            <p className="card__text">
                                                GitHub
                                            </p>
                                        </li>


                                        <li className="card__item">
                                            <p className="card__text">
                                                Agile (Scrum)
                                            </p>
                                        </li>


                                        <li className="card__item">
                                            <p className="card__text">
                                                Jira
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Postman
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </div>



                    <div className="carousel__slide">
                        <li className="card">
                            <div className="card__inner">
                                <div className="card__front">
                                    <h3 className="card__subheader--small">
                                        BrainFlix
                                    </h3>



                                    <img
                                        className="card__img"
                                        src="src/assets/images/brainflix.png"
                                        alt="screenshot of telus what your preference is in a macbook frame" />    



                                </div>

                                <div className="card__back">
                                <h3 className="card__subheader--small">
                                        Overview
                                    </h3>

                                    <p className="card__text">
                                        MoodCompass is dedicated to mental health, providing a safe space
                                        for managing negative moods through education. Resources are
                                        available without an account, but users need to sign up to
                                        favorite them. A mood tracker and log will be added in the future.
                                    </p>

                                    <h3 className="card__subheader--small">
                                        Tools Used
                                    </h3>

                                    <ul className="card__list">
                                        <li className="card__item">
                                            <p className="card__text">
                                                React
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                SASS
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Axios
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                RESTful API Development
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Git
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                GitHub
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Postman
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </div>


                    <div className="carousel__slide">
                        <li className="card">
                            <div className="card__inner">
                                <div className="card__front">
                                    <h3 className="card__subheader--small">
                                        Bandsite
                                    </h3>

                                    <img
                                        className="card__img"
                                        src="src/assets/images/bandsite.png"
                                        alt="screenshot of telus what your preference is in a macbook frame" />    


                                </div>

                                <div className="card__back">
                                <h3 className="card__subheader--small">
                                        Overview
                                    </h3>

                                    <p className="card__text">
                                        This is a fully responsive website for a trendy band group. There
                                        are two pages: landing page and shows page. The landing page is the
                                        main page with information about the band, photo gallery, and comment
                                        section. The shows page provides additional details about upcoming shows
                                        by the band. 
                                    </p>

                                    <h3 className="card__subheader--small">
                                        Tools Used
                                    </h3>

                                    <ul className="card__list">
                                        <li className="card__item">
                                            <p className="card__text">
                                                HTML
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                SASS
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                JavaScript
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Axios
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Git
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                GitHub
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </div>


                    <div className="carousel__slide">
                        <li className="card">
                            <div className="card__inner">
                                <div className="card__front">
                                    <h3 className="card__subheader--small">
                                        CoffeeShop
                                    </h3>



                                    <img
                                        className="card__img"
                                        src="src/assets/images/coffeeshop.png"
                                        alt="screenshot of telus what your preference is in a macbook frame" />    



                                </div>

                                <div className="card__back">
                                <h3 className="card__subheader--small">
                                        Overview
                                    </h3>

                                    <p className="card__text">
                                        This project is a static web app that is broken down into two
                                        pages: landing page and menu page. The landing page has product information,
                                        and the menu page provides further details about the coffee shop's offerings.
                                    </p>

                                    <h3 className="card__subheader--small">
                                        Tools Used
                                    </h3>

                                    <ul className="card__list">
                                        <li className="card__item">
                                            <p className="card__text">
                                                HTML
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                SASS
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Git
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                GitHub
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </div>


                    <div className="carousel__slide">
                        <li className="card">
                            <div className="card__inner">
                                <div className="card__front">
                                    <h3 className="card__subheader--small">
                                        CINEMATICATS
                                    </h3>

                                    <img
                                        className="card__img"
                                        src="src/assets/images/cinematicats.png"
                                        alt="screenshot of telus what your preference is in a macbook frame" />    


                                </div>

                                <div className="card__back">
                                <h3 className="card__subheader--small">
                                        Overview
                                    </h3>

                                    <p className="card__text">
                                        This project is part of a hackathon and was created by a team
                                        of three people. CINEMATICATs is powered by two APIs: <Link className="card__link" to="https://www.omdbapi.com/">OMDb API</Link> and <Link className="card__link" to="https://thecatapi.com/">The Cat API</Link>.
                                    </p>

                                    <h3 className="card__subheader--small">
                                        Role
                                    </h3>

                                    <p className="card__text">
                                        Front-end developer
                                    </p>

                                    <h3 className="card__subheader--small">
                                        Tools Used
                                    </h3>

                                    <ul className="card__list">
                                        <li className="card__item">
                                            <p className="card__text">
                                                HTML
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                SASS
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                JavaScript
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Axios
                                            </p>
                                        </li>


                                        <li className="card__item">
                                            <p className="card__text">
                                                RESTful API Integration
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text">
                                                Git
                                            </p>
                                        </li>
                                    
                                        <li className="card__item">
                                            <p className="card__text">
                                                GitHub
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                    </div>


                </div>
            </div>

            <div className="carousel__controls">
                <div className="carousel__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="carousel__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'carousel__dot'.concat(
                                index === selectedIndex ? ' carousel__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
