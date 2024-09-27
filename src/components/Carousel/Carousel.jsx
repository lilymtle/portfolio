import { useCallback, useEffect, useRef } from 'react'
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
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
  
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
                            <h3 className="project__subheader--small">
                                MoodCompass
                            </h3>

                            <div className="card__img">
                                <img className="card__img--laptop" 
                                src="/src/assets/images/laptop-screen.png" />

                                <div className="card__overlay">
                                    <img
                                        className="card__img--project"
                                        src="src/assets/images/mood-compass-img.png"
                                        alt="screenshot of moodcompass project" />
                                </div>
                            </div>
                        </div>

                        <div className="card__back">
                            <h3 className="project__subheader--small">
                                Casestudy
                            </h3>
                        </div>
                        </div>
                    </li>
            </div>


            <div className="carousel__slide">
            <li className="card">
                    <div className="card__inner">
                        <div className="card__front">
                            <h3 className="project__subheader--small">
                                TELUS What Your Preference Is
                            </h3>

                            <div className="card__img">
                                <img className="card__img--laptop" 
                                src="/src/assets/images/laptop-screen.png" />

                                <div className="card__overlay">
                                    <img
                                        className="card__img--project"
                                        src="src/assets/images/mood-compass-img.png"
                                        alt="screenshot of moodcompass project" />
                                </div>
                            </div>
                        </div>

                        <div className="card__back">
                            <h3 className="project__subheader--small">
                                Casestudy
                            </h3>
                        </div>
                        </div>
                    </li>
            </div>

            <div className="carousel__slide">
            <li className="card">
                    <div className="card__inner">
                        <div className="card__front">
                            <h3 className="project__subheader--small">
                                InStock
                            </h3>

                            <div className="card__img">
                                <img className="card__img--laptop" 
                                src="/src/assets/images/laptop-screen.png" />

                                <div className="card__overlay">
                                    <img
                                        className="card__img--project"
                                        src="src/assets/images/mood-compass-img.png"
                                        alt="screenshot of moodcompass project" />
                                </div>
                            </div>
                        </div>

                        <div className="card__back">
                            <h3 className="project__subheader--small">
                                Casestudy
                            </h3>
                        </div>
                        </div>
                    </li>
            </div>



            <div className="carousel__slide">
            <li className="card">
                    <div className="card__inner">
                        <div className="card__front">
                            <h3 className="project__subheader--small">
                                BrainFlix
                            </h3>

                            <div className="card__img">
                                <img className="card__img--laptop" 
                                src="/src/assets/images/laptop-screen.png" />

                                <div className="card__overlay">
                                    <img
                                        className="card__img--project"
                                        src="src/assets/images/mood-compass-img.png"
                                        alt="screenshot of moodcompass project" />
                                </div>
                            </div>
                        </div>

                        <div className="card__back">
                            <h3 className="project__subheader--small">
                                Casestudy
                            </h3>
                        </div>
                        </div>
                    </li>
            </div>


            <div className="carousel__slide">
            <li className="card">
                    <div className="card__inner">
                        <div className="card__front">
                            <h3 className="project__subheader--small">
                                Bandsite
                            </h3>

                            <div className="card__img">
                                <img className="card__img--laptop" 
                                src="/src/assets/images/laptop-screen.png" />

                                <div className="card__overlay">
                                    <img
                                        className="card__img--project"
                                        src="src/assets/images/mood-compass-img.png"
                                        alt="screenshot of moodcompass project" />
                                </div>
                            </div>
                        </div>

                        <div className="card__back">
                            <h3 className="project__subheader--small">
                                Casestudy
                            </h3>
                        </div>
                        </div>
                    </li>
            </div>


            <div className="carousel__slide">
            <li className="card">
                    <div className="card__inner">
                        <div className="card__front">
                            <h3 className="project__subheader--small">
                                CoffeeShop
                            </h3>

                            <div className="card__img">
                                <img className="card__img--laptop" 
                                src="/src/assets/images/laptop-screen.png" />

                                <div className="card__overlay">
                                    <img
                                        className="card__img--project"
                                        src="src/assets/images/mood-compass-img.png"
                                        alt="screenshot of moodcompass project" />
                                </div>
                            </div>
                        </div>

                        <div className="card__back">
                            <h3 className="project__subheader--small">
                                Casestudy
                            </h3>
                        </div>
                        </div>
                    </li>
            </div>


            <div className="carousel__slide">
            <li className="card">
                    <div className="card__inner">
                        <div className="card__front">
                            <h3 className="project__subheader--small">
                                CINEMATICATS
                            </h3>

                            <div className="card__img">
                                <img className="card__img--laptop" 
                                src="/src/assets/images/laptop-screen.png" />

                                <div className="card__overlay">
                                    <img
                                        className="card__img--project"
                                        src="src/assets/images/mood-compass-img.png"
                                        alt="screenshot of moodcompass project" />
                                </div>
                            </div>
                        </div>

                        <div className="card__back">
                            <h3 className="project__subheader--small">
                                Casestudy
                            </h3>
                        </div>
                        </div>
                    </li>
                
            </div>


            <div className="carousel__slide">
            <li className="card">
                    <div className="card__inner">
                        <div className="card__front">
                            <h3 className="project__subheader--small">
                                CINEMATICATS
                            </h3>

                            <div className="card__img">
                                <img className="card__img--laptop" 
                                src="/src/assets/images/laptop-screen.png" />

                                <div className="card__overlay">
                                    <img
                                        className="card__img--project"
                                        src="src/assets/images/mood-compass-img.png"
                                        alt="screenshot of moodcompass project" />
                                </div>
                            </div>
                        </div>

                        <div className="card__back">
                            <h3 className="project__subheader--small">
                                Casestudy
                            </h3>
                        </div>
                        </div>
                    </li>
                
            </div>


            <div className="carousel__slide">
            <li className="card">
                    <div className="card__inner">
                        <div className="card__front">
                            <h3 className="project__subheader--small">
                                CINEMATICATS
                            </h3>

                            <div className="card__img">
                                <img className="card__img--laptop" 
                                src="/src/assets/images/laptop-screen.png" />

                                <div className="card__overlay">
                                    <img
                                        className="card__img--project"
                                        src="src/assets/images/mood-compass-img.png"
                                        alt="screenshot of moodcompass project" />
                                </div>
                            </div>
                        </div>

                        <div className="card__back">
                            <h3 className="project__subheader--small">
                                Casestudy
                            </h3>
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
