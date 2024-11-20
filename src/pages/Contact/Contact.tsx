// import styling
import "./Contact.scss";

// import components
import { TextField, InputAdornment } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

import Joi from "joi";

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "ca", "net"]}})
        .required,
    message: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required,
})

export function ContactPage() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="screen">
                    <div className="screen__header">
                        <div className="screen__header screen__header--left">
                            <div className="screen__header-button screen__header-button--close"></div>
                            <div className="screen__header-button screen__header-button--maximize"></div>
                            <div className="screen__header-button screen__header-button--minimize"></div>
                        </div>
                        <div className="screen__header screen__header--right">
                            <div className="screen__header-ellipsis"></div>
                            <div className="screen__header-ellipsis"></div>
                            <div className="screen__header-ellipsis"></div>
                        </div>
                    </div>

                    <div className="screen__content">
                        <div className="screen__content-item screen__content-item--left">
                            <div className="app-title">
                                <h2 className="contact__header">
                                    Let's talk!
                                </h2>
                            </div>
                            <p className="contact__text">
                                Fill out this form to send me a message.
                            </p>
                        </div>

                        <form className="contact__form">
                            <div className="input__wrapper">
                                <TextField
                                    className="input__field"
                                    label="name"
                                    variant="filled"
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonIcon sx={{fontSize: "1.2rem", paddingTop: "1rem", paddingBottom: "0.5rem"}} />
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                />
                            </div>

                            <div className="input__wrapper">
                                <TextField
                                    className="input__field"
                                    label="email"
                                    variant="filled"
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailIcon sx={{fontSize: "1.2rem", paddingTop: "1rem", paddingBottom: "0.5rem"}} />
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                />
                            </div>

                            <div className="input__wrapper">
                                <TextField
                                    className="input__field"
                                    label="message"
                                    id="message"
                                    variant="filled"
                                    multiline
                                    rows={2}
                                />
                            </div>

                            <div className="contact__buttons">
                                <button className="button button--cancel">CANCEL</button>
                                
                                <button className="button button--send">SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};