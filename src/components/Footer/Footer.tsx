// import styling
import "./Footer.scss";

// import hook
import { useState } from "react";

// import components
import { Link } from "react-router-dom";
import BasicModal from "../Modal/Modal";

// import data
import { attributions } from "../../data/attributions";

export function Footer() {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <footer>
                <p className="footer__text">
                    © Crafted with 💜 (and also React, TypeScript + SASS) by Lily.
                </p>
                <p
                    className="footer__text footer__text--credits"
                    onClick={handleOpen}
                >
                    Credits
                </p>
            </footer>

            <BasicModal
                open={open}
                handleClose={handleClose}
                modalClassName="footer__modal"
                title="Credits"
            >
                <ul className="modal__list">
                    {attributions.map((attribution, index) => (
                        <li className="modal__list-item" key={index}>
                            ✨ <p>
                                {attribution.name} by <Link className="modal__link" to={attribution.link}>{attribution.creator}</Link>
                            </p>
                        </li>
                    ))}
                </ul>
            </BasicModal>
        </>
    )
};