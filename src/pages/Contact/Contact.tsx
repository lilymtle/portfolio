// import styling
import "./Contact.scss";

// import components
import { TextField, InputAdornment } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export function ContactPage() {
    return (
        <section className="contact">
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
                                    label="Name"
                                    slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon sx={{fontSize: "1.2rem"}} />
                                            </InputAdornment>
                                        ),
                                        },
                                    }}
                                />
                            </div>

                            <div className="input__wrapper">
                                <TextField
                                    className="input__field"
                                    label="Email"
                                    slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon sx={{fontSize: "1.2rem"}} />
                                            </InputAdornment>
                                        ),
                                        },
                                    }}
                                />
                            </div>

                            <div className="input__wrapper">
                                <TextField
                                    className="input__field"
                                    label="Message"
                                    multiline
                                    rows={4}
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