// import styling
import "./Accordion.scss";

// import components
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Technical Skills
                </AccordionSummary>
                <AccordionDetails>
                    <p className="accordion__text--bold">
                        Languages:
                    </p>
                    <p className="accordion__text">
                        HTML, CSS, SASS, JavaScript, React, Node.js, Express.js, Knex.js, and
                        MySQL
                    </p>

                    <p className="accordion__text--bold accordion__text--tools">
                        Tools:
                    </p>

                    <p className="accordion__text">
                        REST API Development, REST API Integration, Axios, Firebase, Git, GitHub, 
                        Agile Methodologies, Scrum, Jira, Postman, Material UI,
                        Microsoft Office, Articulate 360
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Soft Skills
                </AccordionSummary>
                <AccordionDetails>
                    Leadership, communication, collaboration, prioritization, organization, project management,
                    attention to detail, critical thinking, problem-solving, multi-tasking,
                    education/teaching/mentoring, user-centered thinking, adaptability, documentation, reporting,
                    and data analysis
                </AccordionDetails>
            </Accordion>
        </div>
    );
};