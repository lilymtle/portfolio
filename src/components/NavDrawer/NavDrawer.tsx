// import styling
import "./NavDrawer.scss";

// import hook
import { useState } from "react";

import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from "@mui/icons-material/Menu";

interface navDrawerLinks {
    id: number;
    text: string;
    link?: string;
}

export default function TemporaryDrawer() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleResumeClick = (path:string): void => {
        window.open(path, "_blank");
    };

    const navDrawerLinks: navDrawerLinks[] = [
        {
            id: 1,
            text: "About",
            link: "#about"
        },
        {
            id: 2,
            text: "Projects",
            link: "#projects"
        },
        {
            id: 3,
            text: "Resume",
        },
        {
            id: 4,
            text: "Contact",
            link: "#contact"
        }
    ];

    const NavDrawer = (
        <Box sx={{ width: 320 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {navDrawerLinks.map((navDrawerLink, index) => (
                    <div key={index}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                {navDrawerLink.id === 3 ? (
                                        <ListItemText
                                            primary={navDrawerLink.text}
                                            className="navbar__text"
                                            sx={{
                                                color: "#FFB26F"
                                            }}
                                            disableTypography={true}
                                            onClick={() => handleResumeClick("/files/lily-le-resume.pdf")}
                                        />
                                ) : (
                                    <a href={navDrawerLink.link}>
                                        <ListItemText
                                            primary={navDrawerLink.text}
                                            className="navbar__text"
                                            disableTypography={true}
                                        />
                                    </a>
                                )}
                            </ListItemButton>
                        </ListItem>

                        {index !== navDrawerLinks.length - 1 && (
                            <Divider sx={{ marginLeft: "2rem", marginRight: "2rem" }} />
                        )}
                    </div>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                <MenuIcon sx={{color: "black"}}/>
            </Button>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                {NavDrawer}
            </Drawer>
        </div>
    );
};