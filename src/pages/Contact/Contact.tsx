// import styling
import "./Contact.scss";

// import components
import { TextField, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

import Joi from "joi";
import { ChangeEvent, FormEvent, useState } from "react";

import emailjs from "emailjs-com";

const schema = Joi.object({
    name: Joi.string()
        .pattern(/^[A-Za-z\s]+$/)
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

interface FormMessage {
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

    const [formMessage, setFormMessage] = useState<FormMessage>({
        message: "I'm glad you're here! If you'd like to connect or have any questions, ideas, or feedback, please fill out the form. I'll get back to you soon! 😊"
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        const { error } = schema.validate({ [name]: value }, { abortEarly: false });
        
        if (error) {
            const fieldError = error.details.find(detail => detail.path[0] === name)?.message || "";
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: fieldError
            }));
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ""
            }));
        }
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

            const form = e.target as HTMLFormElement;

            emailjs.sendForm(
                "service_2cxmdzx",
                "template_j211a9j",
                form,
                "tDdRLxrlqMtJXgleK"
            )
            .then((result) => {
                console.log("Success:", result.text);
                setFormData({ name: "", email: "", message: "" });
                setFormMessage({ message: "Thank you for reaching out! I truly appreciate your message and will do my best to respond as soon as possible. 😁" });
            }, (error) => {
                console.error("Error:", error.text);
                setFormMessage({ message: "Uh oh... Something went wrong! 😅 Please try again later, and we'll get it sorted." })
            });
        }
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
                                {formMessage.message}
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
                                <button className="button button--send" type="submit">SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};