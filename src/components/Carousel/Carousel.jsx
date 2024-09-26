import { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './CarouselArrowButton/CarouselArrowButton.jsx'
import { DotButton, useDotButton } from './CourselDotButton/CarouselDotButton.jsx'

import "./Carousel.scss";

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max)

export function Carousel(props) {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const tweenFactor = useRef(0)
    const tweenNodes = useRef([])

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const setTweenNodes = useCallback((emblaApi) => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.embla__slide__number')
        })
    }, [])

    const setTweenFactor = useCallback((emblaApi) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenScale = useCallback((emblaApi, eventName) => {
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()
        const slidesInView = emblaApi.slidesInView()
        const isScrollEvent = eventName === 'scroll'

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target()

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target)

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress)
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress)
                            }
                        }
                    })
                }

                const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
                const scale = numberWithinRange(tweenValue, 0, 1).toString()
                const tweenNode = tweenNodes.current[slideIndex]
                tweenNode.style.transform = `scale(${scale})`
            })
        })
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        setTweenNodes(emblaApi)
        setTweenFactor(emblaApi)
        tweenScale(emblaApi)

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenScale)
            .on('scroll', tweenScale)
            .on('slideFocus', tweenScale)
    }, [emblaApi, tweenScale])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">


                    <div className="embla__slide">
                        <div className="embla__slide__number">1</div>

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



                    <div className="embla__slide">
                        <div className="embla__slide__number">2</div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide__number">3</div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide__number">4</div>
                    </div>

                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
