// import styling
import "./Tabs.scss";

// import hook
import { useState } from "react";

// import components
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <p className="tab__text">
                    Get to know me as a <span className="italics">person</span>!
                </p>

                <ul className="tab__list">
                    <li className="tab__item">
                        <p className="tab__text">
                            💉 
                        </p>
                    </li>
                </ul>
            </CustomTabPanel>
        </Box>
    );
};