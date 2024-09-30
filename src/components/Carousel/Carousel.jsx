import useEmblaCarousel from 'embla-carousel-react'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './CarouselArrowButton/CarouselArrowButton.jsx'
import { DotButton, useDotButton } from './CourselDotButton/CarouselDotButton.jsx'

import "./Carousel.scss";

import Button from '@mui/material/Button';
import BasicModal from '../Modal/Modal.jsx';

import { useState } from 'react';


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

    const [openModal, setOpenModal] = useState({ open: false, title: "", videoPath: "" });

    const handleOpen = (title, videoPath) => {
        setOpenModal({ open: true, title, videoPath });
    };

    const handleClose = () => setOpenModal({ ...openModal, open: false });


    return (
        <section className="carousel">
            <div className="carousel__viewport" ref={emblaRef}>
                <div className="carousel__container">


                    <div className="carousel__slide">
                        <li className="card">
                            <div className="card__inner">
                                <div className="card__front">
                                    <h2 className="card__subheader">
                                        MoodCompass
                                    </h2>

                                <div className="card__img-wrapper">
                                    <img
                                        className="card__img"
                                        src="src/assets/images/mood-compass.png"
                                        alt="screenshot of mood-compass in a macbook frame" /> 
                                </div>
                                </div>

                                <div className="card__back">
                                    <h2 className="card__subheader">
                                        Overview
                                    </h2>

                                    <p className="card__text">
                                        MoodCompass is dedicated to mental health, providing a safe space
                                        for managing negative moods through education. Resources are
                                        available without an account, but users need to sign up to
                                        favorite them. A mood tracker and log will be added in the future.
                                    </p>

                                    <p className="card__text--features-title">
                                        Features include:
                                    </p>

                                        <ul className="card__list--features">
                                            <li className="card__item--features">
                                                <p className="card__text--features">
                                                    User services (registration, login, and logout)
                                                </p>
                                            </li>

                                            <li className="card__item--features">
                                                <p className="card__text--features">
                                                    User authentication and authorization
                                                </p>
                                            </li>

                                            <li className="card__item--features">
                                                <p className="card__text--features">
                                                    Protected routes
                                                </p>
                                            </li>

                                            <li className="card__item--features">
                                                <p className="card__text--features">
                                                    Favoriting and unfavoriting items
                                                </p>
                                            </li>

                                            <li className="card__item--features">
                                                <p className="card__text--features">
                                                    Dynamic data stored and retirved from a database
                                                </p>
                                            </li>

                                            <li className="card__item--features">
                                                <p className="card__text--features">
                                                    Form validation
                                                </p>
                                            </li>
                                        </ul>

                                    <h2 className="card__subheader">
                                        Tools Used
                                    </h2>

                                    <ul className="card__list">
                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                React
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                SASS
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Node.js
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                MySQL
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Express.js
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Knex.js
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Axios
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                RESTful API Development
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Firebase
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Material UI
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Git
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                GitHub
                                            </p>
                                        </li>
                                    </ul>

                                    <Button 
                                className="preview-btn"
                                onClick={() => handleOpen("MoodCompass", "/videos/moodcompass.mp4")}>Preview</Button>
                                <BasicModal 
                                open={openModal.open} 
                                handleClose={handleClose}
                                title={openModal.title}
                                videoPath={openModal.videoPath} />

                                </div>
                            </div>
                        </li>
                    </div>


                    <div className="carousel__slide">
                        <li className="card">
                            <div className="card__inner">
                                <div className="card__front">
                                    <h2 className="card__subheader">
                                        TELUS What Your Preference Is
                                    </h2>

                                    <div className="card__img-wrapper">
                                    <img
                                        className="card__img"
                                        src="src/assets/images/telus.png"
                                        alt="screenshot of telus what your preference is in a macbook frame" />    
                                    </div>
                                </div>

                                <div className="card__back">
                                    <h2 className="card__subheader">
                                        Overview
                                    </h2>

                                    <p className="card__text">
                                        TELUS What Your Preference Is an interactive quiz new and existing
                                        TELUS users can use to receive their personalized TV bundle. The
                                        quiz is engaging and short in order to reduce option paralysis and
                                        decision fatigue.
                                    </p>

                                    <p className="card__text--features-title">
                                        Features include:
                                    </p>

                                        <ul className="card__list--features">
                                            <li className="card__item--features">
                                                <p className="card__text--features">
                                                    Carousel hero banner
                                                </p>
                                            </li>

                                            <li className="card__item--features">
                                                <p className="card__text--features">
                                                    Personalized quiz
                                                </p>
                                            </li>
                                        </ul>

                                    <p className="card__text">
                                        This was a group project for TELUS x BrainStation industry
                                        challenge/hackathon, and we were given 24-hours to present a solution
                                        to a problem. Jira was used throughout the process to develop, 
                                        communicate, and organize the project until completion.
                                    </p>

                                    <h2 className="card__subheader">
                                        Role
                                    </h2>

                                    <p className="card__text">
                                        Front-End Developer
                                    </p>

                                    <h2 className="card__subheader">
                                        Tools Used
                                    </h2>

                                    <ul className="card__list">
                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                React
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                SASS
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Axios
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                RESTful API Development
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                JSON
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Git
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                GitHub
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Agile (Scrum)
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Jira
                                            </p>
                                        </li>
                                    </ul>


                                    <Button 
                                className="preview-btn"
                                onClick={() => handleOpen("TELUS What Your Preference Is", "/videos/telus.mp4")}>Preview</Button>
                                <BasicModal 
                                open={openModal.open} 
                                handleClose={handleClose}
                                title={openModal.title}
                                videoPath={openModal.videoPath} />
                                </div>
                            </div>
                        </li>
                    </div>

                    <div className="carousel__slide">
                        <li className="card">
                            <div className="card__inner">
                                <div className="card__front">
                                    <h2 className="card__subheader">
                                        InStock
                                    </h2>

                                        <img
                                            className="card__img"
                                            src="src/assets/images/instock.png"
                                            alt="screenshot of instock in a macbook frame" />                                     
                                </div>

                                <div className="card__back">
                                    <h2 className="card__subheader">
                                        Overview
                                    </h2>

                                    <p className="card__text">
                                        InStock is a fully responsive full-stack web application that delivers an inventory
                                        Management System for a Fortune 500 client. It features a list of the
                                        client's warehouses inventory items.
                                    </p>

                                    <p className="card__text--features-title">
                                        Features include:
                                    </p>

                                        <ul className="card__list--features">
                                            <li className="card__item--features">
                                                <p className="card__text--features">
                                                    Adding, modifying, and/or deleting a warehouse and/or inventory
                                                    item
                                                </p>
                                            </li>

                                            <li className="card__item--features">
                                                <p className="card__text--features">
                                                    Dynamic data stored and retrieved from a database
                                                </p>
                                            </li>

                                            <li className="card__item--features">
                                                <p className="card__text--features">
                                                    Form validation
                                                </p>
                                            </li>
                                        </ul>

                                    <p className="card__text">
                                        This was a group project that incorporated Agile methodologies, particularly Scrum.
                                        Jira was used for project development and management, enhancing
                                        efficiency, communication, and organization. Each member took turns
                                        being the Scrum Master.
                                    </p>

                                    <h2 className="card__subheader">
                                        Roles
                                    </h2>

                                    <p className="card__text">
                                        Full-Stack Developer, Scrum Master
                                    </p>

                                    <h2 className="card__subheader">
                                        Tools Used
                                    </h2>

                                    <ul className="card__list">
                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                React
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                SASS
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Node.js
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                MySQL
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Express.js
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Knex.js
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Axios
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                RESTful API Development
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Git
                                            </p>
                                        </li>


                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                GitHub
                                            </p>
                                        </li>


                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Agile (Scrum)
                                            </p>
                                        </li>


                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Jira
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Postman
                                            </p>
                                        </li>
                                    </ul>


                                    <Button 
                                className="preview-btn"
                                onClick={() => handleOpen("InStock", "/videos/instock.mp4")}>Preview</Button>
                                <BasicModal 
                                open={openModal.open} 
                                handleClose={handleClose}
                                title={openModal.title}
                                videoPath={openModal.videoPath} />
                                </div>
                            </div>
                        </li>
                    </div>



                    <div className="carousel__slide">
                        <li className="card">
                            <div className="card__inner">
                                <div className="card__front">
                                    <h2 className="card__subheader">
                                        BrainFlix
                                    </h2>

                                    <div className="card__img-wrapper">
                                    <img
                                        className="card__img"
                                        src="src/assets/images/brainflix.png"
                                        alt="screenshot of telus what your preference is in a macbook frame" />    
                                    </div>
                                </div>

                                <div className="card__back">
                                <h2 className="card__subheader">
                                        Overview
                                    </h2>

                                    <p className="card__text">
                                        BrainFlix is a fully responsive video streaming platform 
                                        with its own API service.
                                    </p>

                                    <p className="card__text--features-title">
                                        Features include:
                                    </p>

                                        <ul className="card__list--features">
                                            <li className="card__item--features">
                                                <p className="card__text--features">
                                                    Adding a video
                                                </p>
                                            </li>

                                            <li className="card__item--features">
                                                <p className="card__text--features">
                                                    Form validation
                                                </p>
                                            </li>

                                        </ul>

                                    <h2 className="card__subheader">
                                        Tools Used
                                    </h2>

                                    <ul className="card__list">
                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                React
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                SASS
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Axios
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                RESTful API Development
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                JSON
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Git
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                GitHub
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Postman
                                            </p>
                                        </li>
                                    </ul>


                                    <Button 
                                className="preview-btn"
                                onClick={() => handleOpen("BrainFlix", "/videos/brainflix.mp4")}>Preview</Button>
                                <BasicModal 
                                open={openModal.open} 
                                handleClose={handleClose}
                                title={openModal.title}
                                videoPath={openModal.videoPath} />
                                </div>
                            </div>
                        </li>
                    </div>


                    <div className="carousel__slide">
                        <li className="card">
                            <div className="card__inner">
                                <div className="card__front">
                                    <h2 className="card__subheader">
                                        Bandsite
                                    </h2>
                                    <div className="card__img-wrapper">
                                    <img
                                        className="card__img"
                                        src="src/assets/images/bandsite.png"
                                        alt="screenshot of telus what your preference is in a macbook frame" />    
</div>

                                </div>

                                <div className="card__back">
                                <h2 className="card__subheader">
                                        Overview
                                    </h2>

                                    <p className="card__text">
                                        This is a fully responsive website for an up-and-coming band.
                                        It consists of two pages, the main page and shows page. The main
                                        page has information about the band and a photo gallery, whereas the
                                        shows page has a list of their upcoming shows.
                                    </p>

                                    <p className="card__text--features-title">
                                        Features include:
                                    </p>

                                        <ul className="card__list--features">
                                            <li className="card__item--features">
                                                <p className="card__text--features">
                                                    Adding a comment
                                                </p>
                                            </li>

                                            <li className="card__item--features">
                                                <p className="card__text--features">
                                                    Form validation
                                                </p>
                                            </li>

                                        </ul>


                                    <h2 className="card__subheader">
                                        Tools Used
                                    </h2>

                                    <ul className="card__list">
                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                HTML
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                SASS
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                JavaScript
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Axios
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                API Integration
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Git
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                GitHub
                                            </p>
                                        </li>
                                    </ul>


                                    <Button 
                                className="preview-btn"
                                onClick={() => handleOpen("BandSite", "/videos/bandsite.mp4")}>Preview</Button>
                                <BasicModal 
                                open={openModal.open} 
                                handleClose={handleClose}
                                title={openModal.title}
                                videoPath={openModal.videoPath} />
                                </div>
                            </div>
                        </li>
                    </div>


                    <div className="carousel__slide">
                        <li className="card">
                            <div className="card__inner">
                                <div className="card__front">
                                    <h2 className="card__subheader">
                                        CoffeeShop
                                    </h2>


                                    <div className="card__img-wrapper">
                                    <img
                                        className="card__img"
                                        src="src/assets/images/coffeeshop.png"
                                        alt="screenshot of telus what your preference is in a macbook frame" />    
</div>

                                </div>

                                <div className="card__back">
                                <h2 className="card__subheader">
                                        Overview
                                    </h2>

                                    <p className="card__text">
                                        Coffee Shop is a static multi-page web application that is broken down into two
                                        pages: landing page and menu page. The landing page has product information,
                                        and the menu page provides further details about the coffee shop's offerings.
                                    </p>

                                    <h2 className="card__subheader">
                                        Tools Used
                                    </h2>

                                    <ul className="card__list">
                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                HTML
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                SASS
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Git
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                GitHub
                                            </p>
                                        </li>
                                    </ul>

                                    <Button 
                                className="preview-btn"
                                onClick={() => handleOpen("CoffeeShop", "/videos/coffeeshop.mp4")}>Preview</Button>
                                <BasicModal 
                                open={openModal.open} 
                                handleClose={handleClose}
                                title={openModal.title}
                                videoPath={openModal.videoPath} />

                                </div>
                            </div>
                        </li>
                    </div>


                    <div className="carousel__slide">
                        <li className="card">
                            <div className="card__inner">
                                <div className="card__front">
                                    <h2 className="card__subheader">
                                        CINEMATICATS
                                    </h2>

                                    <div className="card__img-wrapper">
                                    <img
                                        className="card__img"
                                        src="src/assets/images/cinematicats.png"
                                        alt="screenshot of telus what your preference is in a macbook frame" />    
</div>

                                </div>

                                <div className="card__back">
                                <h2 className="card__subheader">
                                        Overview
                                    </h2>

                                    <p className="card__text">
                                        CINEMATICATs is a static web application that help users
                                        find movie recommendations with a cat companion.
                                    </p>

                                    <p className="card__text--features-title">
                                        Features include:
                                    </p>
                                        <ul className="card__list--features">
                                            <li className="card__item--features">
                                                <p className="card__text--features">
                                                    Randomly generates a movie with a cat friend
                                                </p>
                                            </li>
                                        </ul>


                                    <p className="card__text">
                                        This was a group project for the first BrainStation hackathon. 
                                        Figma was used during the brainstorming stage, and Slack was used for
                                        team communication.
                                    </p>

                                    <h2 className="card__subheader">
                                        Role
                                    </h2>

                                    <p className="card__text">
                                        Front-End developer
                                    </p>

                                    <h2 className="card__subheader">
                                        Tools Used
                                    </h2>

                                    <ul className="card__list">
                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                HTML
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                SASS
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                JavaScript
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Axios
                                            </p>
                                        </li>


                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                RESTful API Integration
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Git
                                            </p>
                                        </li>
                                    
                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                GitHub
                                            </p>
                                        </li>

                                        <li className="card__item">
                                            <p className="card__text--tools">
                                                Figma
                                            </p>
                                        </li>
                                    </ul>


                                    <Button 
                                className="preview-btn"
                                onClick={() => handleOpen("CINEMATICATS", "/videos/cinematicats.mp4")}>Preview</Button>
                                <BasicModal 
                                open={openModal.open} 
                                handleClose={handleClose}
                                title={openModal.title}
                                videoPath={openModal.videoPath} />


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
