// import styling
import "./Tabs.scss";

// import hook
import { useState } from "react";

// import components
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AccordionUsage from "../Accordion/Accordion.jsx";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            className="tab__panel"
            {...other}
        >
            {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
        </div>
    );
};

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};

export function BasicTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className="tabs__container">
            <Box className="tabs__header">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "white"
                        }
                    }}>
                    <Tab label="Education" className="tab" {...a11yProps(0)} />
                    <Tab label="Skills" className="tab" {...a11yProps(1)} />
                    <Tab label="Fun" className="tab" {...a11yProps(2)} />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                <ul className="tab__list">
                    <li className="tab__item">
                        <div className="tab__title-year-container">

                            <div className="tab__emoji">
                                💻 
                            </div>

                            <p className="tab__text--title">
                                Diploma, Software Engineering
                            </p>
                        
                            <p className="tab__text--year">
                                2024
                            </p>
                        </div>

                        <p className="tab__text--description">
                            BrainStation
                        </p>

                        <p className="tab__text--description">
                            Field of Study:
                        </p>

                        <ul className="tab__list--studies">
                            <li className="tab__item--description-text">
                                <p className="tab__text--description-list">
                                    Full-Stack Engineer
                                </p>
                            </li>
                        </ul>

                        <p className="tab__text--description">
                            GPA: 4.0
                        </p>
                    </li>
                    <li className="tab__item--second">
                        <div className="tab__title-year-container">

                            <div className="tab__emoji">
                                💉
                            </div>

                            <p className="tab__text--title">
                                    Master of Nursing
                                </p> 

                                <p className="tab__text--year">
                                    2023
                                </p>
                        </div>

                        <p className="tab__text--description">
                            Toronto Metropolitan University
                        </p>


                        <p className="tab__text--description">
                            Field of Study:
                        </p>

                        <ul className="tab__list--studies">
                            <li className="tab__item--description-text">
                                <p className="tab__text--description-list">
                                    Leadership in Health Policy and Education
                                </p>
                            </li>
                        </ul>

                        <p className="tab__text--description">
                            GPA: 4.0
                        </p>
                    </li>
                </ul>
            </CustomTabPanel>


            <CustomTabPanel value={value} index={1}>

                <AccordionUsage />

                <p clasName="tab__text">
                    In addition to practicing and improving my JavaScript, I would also like
                    to learn the following languages:
                </p>

                <ul className="tab__list--languages">
                    <li className="tab__item">
                        <p className="tab__text">
                            Typescript
                        </p>
                    </li>

                    <li className="tab__item">
                        <p className="tab__text">
                            Python
                        </p>
                    </li>

                    <li className="tab__item">
                        <p className="tab__text">
                            Next.js & Nest.js
                        </p>
                    </li>

                    <li className="tab__item">
                        <p className="tab__text">
                            Flutter
                        </p>
                    </li>
                </ul>
                
            </CustomTabPanel>


            <CustomTabPanel value={value} index={2}>
                <p className="tab__text">
                    Although understanding my education and skills are important,
                    getting to know me as a <span className="italics">person</span> is also vital!
                </p>

                <ul className="tab__list">
                    <li className="tab__item--fun">
                        <div className="tab__emoji">
                            🐱
                        </div>
                        <p className="tab__text">
                            I have two cats, Catrick (orange tabby) and Bib (black). 
                        </p>
                    </li>

                    <li className="tab__item--fun">
                        <div className="tab__emoji">
                            🏋🏻‍♀️ 
                        </div>
                        <p className="tab__text">
                            I love weightlifting/powerlifting, swimming, hiking, going on walks, Muay Thai, and Brazilian JiuJitsu. 
                        </p>
                    </li>

                    <li className="tab__item--fun">
                        <div className="tab__emoji">
                            🎮 
                        </div>
                        <p className="tab__text">
                            I am a PC and console gamer. I love games like ACNH and SDV!
                        </p>
                    </li>

                    <li className="tab__item--fun">
                        <div className="tab__emoji">
                            👀
                        </div>
                        <p className="tab__text">
                            I love anime and manga.
                        </p>
                    </li>

                    <li className="tab__item--fun">
                        <div className="tab__emoji">
                            💬
                        </div>
                        <p className="tab__text">
                            I am greedy for languages. I am learning Korean, Japanese, and French.
                        </p>
                    </li>

                    <li className="tab__item--fun">
                        <div className="tab__emoji">
                            🍟
                        </div>
                        <p className="tab__text">
                            I love to cook, bake, and discover new places to eat delicious food.
                        </p>
                    </li>

                    <li className="tab__item--fun">
                        <div className="tab__emoji">
                            ✈️
                        </div>
                        <p className="tab__text">
                            I've been to: Seoul, Busan, Hanoi, Saigon, Nha Trang, Da Nang, Hội An, 
                            and more. I will be visiting England and Scotland in October 2024!
                        </p>
                    </li>

                </ul>
            </CustomTabPanel>
        </Box>
    );
};