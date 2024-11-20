// import styling
import "./Contact.scss";

// import components
import { TextField, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

import Joi from "joi";
import { ChangeEvent, FormEvent, useState } from "react";

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        .messages({
            "string.empty": "Name is required",
            "string.min": "Your name should be at least 3 characters long",
            "string.max": "Your name should be at most 30 characters long"
        }),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "ca", "net"]}})
        .required()
        .messages({
            "string.empty": "Email is required",
            "string.email": "Please enter a valid email address"
        }),
    message: Joi.string()
        .alphanum()
        .min(3)
        .max(300)
        .required()
        .messages({
            "string.empty": "Message is required",
            "string.min": "Message should be at least 3 characters long",
            "string.max": "Message should be at most 300 characters long",
        }),
})

interface FormData {
    name: string;
    email: string;
    message: string;
};

interface Errors {
    name: string;
    email: string;
    message: string;
}

export function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState<Errors>({
        name: "",
        email: "",
        message: "",

    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const { error } = schema.validate(formData, { abortEarly: false});
        
        if (error) {
            const newErrors: Errors = {
                name: "",
                email: "",
                message: ""
            };

            error.details.map((detail) => {
                newErrors[detail.path[0] as keyof Errors] = detail.message;
            });

            setErrors(newErrors);
        } else {
            setErrors({ name: "", email: "", message: "" });
            setFormData({ name: "", email: "", message: ""});

            alert("Form submitted!");
        }
    };

    const handleCancel = (e: FormEvent) => {
        e.preventDefault();
        setErrors({ name: "", email: "", message: "" });
        setFormData({ name: "", email: "", message: ""});
    };

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

                        <form 
                            className="contact__form"
                            onSubmit={handleSubmit}
                        >
                            <div className="input__wrapper">
                                <TextField
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="input__field"
                                    label="name"
                                    variant="filled"
                                    error={!!errors.name}
                                    helperText={errors.name}
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
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="input__field"
                                    label="email"
                                    variant="filled"
                                    error={!!errors.email}
                                    helperText={errors.email}
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
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="input__field"
                                    label="message"
                                    id="message"
                                    variant="filled"
                                    error={!!errors.message}
                                    helperText={errors.message}
                                    multiline
                                    rows={2}
                                />
                            </div>

                            <div className="contact__buttons">
                                <button className="button button--cancel" type="reset" onClick={handleCancel}>CANCEL</button>
                                
                                <button className="button button--send" type="submit">SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};