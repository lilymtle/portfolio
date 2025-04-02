// styling
import "./BlogContact.scss";

// components
import { TextField, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

import { useContactForm } from "../../utils/useContactForm";

export function BlogContactPage() {
    const { errors, formData, formMessage, handleInputChange, handleSubmit } = useContactForm(
        "Use the form below to send me your questions, feedback, and comments. I would love to hear from you!"
    );

    return (
        <section className="blog__contact">
            <h1 className="blog__heading">
                Send a Message
            </h1>

            <p className="blog__contact-text">
                {formMessage.message}
            </p>

            <div className="blog__contact-form">
                <form
                    className="blog__contact-form"
                    onSubmit={handleSubmit}
                >
                    <div className="blog__wrapper-input">
                        <TextField
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="blog__input-field"
                            label="name"
                            variant="filled"
                            error={!!errors.name}
                            helperText={errors.name}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon
                                                sx={{
                                                    fontSize: {
                                                        xs: "1.2rem",
                                                        sm: "1.5rem",
                                                        md: "1.5rem",
                                                        lg: "1.5rem",
                                                        xl: "1.5rem"
                                                    },
                                                    paddingTop: {
                                                        xs: "0.5rem",
                                                        sm: "0.3rem"
                                                    }
                                                }} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </div>

                    <div className="blog__wrapper-input">
                        <TextField
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="blog__input-field"
                            label="email"
                            variant="filled"
                            error={!!errors.email}
                            helperText={errors.email}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon
                                                sx={{
                                                    fontSize: {
                                                        xs: "1.2rem",
                                                        sm: "1.4rem",
                                                        md: "1.4rem",
                                                        lg: "1.5rem",
                                                        xl: "1.5rem"
                                                    },
                                                    paddingTop: {
                                                        xs: "0.5rem",
                                                        sm: "0.3rem"
                                                    }
                                                }} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </div>

                    <div className="blog__wrapper-input">
                        <TextField
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="blog__input-field"
                            label="message"
                            id="message"
                            variant="filled"
                            error={!!errors.message}
                            helperText={errors.message}
                            multiline
                            rows={2}
                        />
                    </div>

                    <div className="blog__form-submit">
                        <button className="blog__send-button" type="submit">SEND</button>
                    </div>
                </form>
            </div>
        </section>
    );
};