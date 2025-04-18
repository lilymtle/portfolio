// styling
import "./NavDrawer.scss";

// hook
import { useState } from "react";

// components
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from "@mui/icons-material/Menu";
interface navDrawerLinks {
    id: number;
    text: string;
    link?: string;
};

export default function TemporaryDrawer() {
    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleResumeClick = (path: string): void => {
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
            text: "Blog",
            link: "/blog"
        },
        {
            id: 4,
            text: "Resume",
        },
        {
            id: 5,
            text: "Contact",
            link: "#contact"
        }
    ];

    const NavDrawer = (
        <Box sx={{ width: "100%" }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {navDrawerLinks.map((navDrawerLink, index) => (
                    <div key={index}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                {navDrawerLink.id === 4 ? (
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
                    </div>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                <MenuIcon sx={{ color: "black" }} />
            </Button>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                {NavDrawer}
            </Drawer>
        </div>
    );
};