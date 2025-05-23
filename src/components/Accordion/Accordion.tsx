// import styling
import "./Accordion.scss";

// import components
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import type
import { ReactNode } from "react";

interface AccordionProps {
    title: string;
    children: ReactNode;
};

export default function AccordionBox({ title, children }: AccordionProps): JSX.Element {
    return (
            <Accordion className="accordion">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    {title}
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>
            </Accordion>
    );
};