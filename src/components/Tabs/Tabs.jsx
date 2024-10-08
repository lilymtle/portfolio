// import styling
import "./Tabs.scss";

// import image
import catsImage from "../../assets/images/catrick-and-bib.png";

// import hook
import { useState } from "react";

// import components
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AccordionUsage from "../Accordion/Accordion.jsx";
import Button from "@mui/material/Button";
import BasicModal from "../Modal/Modal.jsx";

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
    const [openModal, setOpenModal] = useState({ open: false, title: "", imagePath: "" });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpen = (title, imagePath) => {
        setOpenModal({ open: true, title, imagePath });
    };

    const handleClose = () => setOpenModal({ ...openModal, open: false });

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
                        
                        <div className="tab__description-container">
                            <p className="tab__text--school">
                                BrainStation
                            </p>

                            <p className="tab__text--field">
                                Field of Study:
                            </p>

                            <ul className="tab__list--field">
                                <li className="tab__item--field">
                                    <p className="tab__text--field">
                                        Full-Stack Engineer
                                    </p>
                                </li>
                            </ul>

                            <p className="tab__text--grade">
                                GPA: 4.0
                            </p>
                        </div>
                    </li>

                    <li className="tab__item--education">
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

                        <div className="tab__description-container">
                            <p className="tab__text--school">
                                Toronto Metropolitan University
                            </p>

                            <p className="tab__text--field">
                                Field of Study:
                            </p>

                            <ul className="tab__list--field">
                                <li className="tab__item--field">
                                    <p className="tab__text--field">
                                        Leadership in Health Policy and Education
                                    </p>
                                </li>
                            </ul>

                            <p className="tab__text--grade">
                                GPA: 4.0
                            </p>
                        </div>
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
                <ul className="tab__list">
                    <li className="tab__item--fun">
                        <div className="tab__emoji--cat">
                            🐱
                        </div>

                            <p className="tab__text--cat">
                                I have two cats, Catrick (orange) and Bib (black).
                            </p>
                    </li>

                    <li className="tab__item--fun-cat-pic">
                        <Button
                                className="modal__cat-btn"
                                onClick={() => handleOpen("Meet Catrick and Bib")}>Cat Tax!</Button>
                        <BasicModal
                            open={openModal.open}
                            handleClose={handleClose}
                            title={openModal.title}
                            imagePath={catsImage}
                            imageAlt="catrick (orange) and bib (black) sleeping on a couch" />
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
                            I love video games, anime, and manga!
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
                            I like traveling and learning new languages!
                        </p>
                    </li>

                </ul>
            </CustomTabPanel>
        </Box>
    );
};