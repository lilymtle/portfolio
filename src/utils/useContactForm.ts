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
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "ca", "net"] } })
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
});

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

export function useContactForm(initialMessage: string) {
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
        message: initialMessage
    })

    // handle form input changes
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

    // handle form submission
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const { error } = schema.validate(formData, { abortEarly: false });

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

    return { errors, formData, formMessage, handleInputChange, handleSubmit };
};