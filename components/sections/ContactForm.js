import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        if (!e.target.name || !e.target.name.value ||
            !e.target.lastName || !e.target.lastName.value ||
            !e.target.phone || !e.target.phone.value ||
            !e.target.email || !e.target.email.value ||
            !e.target.message || !e.target.message.value) {
            alert("Please fill out the entire form.");
            return;
        }

        // Example of EmailJS SDK configuration with public key
        const emailjs = require('emailjs-com');
        const serviceID = process.env.YOUR_SERVICE_ID;
        const templateID = process.env.YOUR_TEMPLATE_ID;

        emailjs.init('ly3LSPpd-ZHWfZUj9');

        const formData = {
            name: e.target.name.value,
            lastName: e.target.lastName.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        emailjs.send(
            "service_a2jed5e",
            "template_6o9bmn4",
            formData,
            "ly3LSPpd-ZHWfZUj9"
        ).then(
            (response) => {
                alert("Form submitted successfully!");
            },
            (error) => {
                console.error(error);
                alert("There was an error submitting the form.");
            }
        ).catch((error) => {
            console.error(error);
            alert("There was an error submitting the form.");
        });
    };


    return (
        <form onSubmit={sendEmail}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-grp">
                        <input name="name" type="text" placeholder="First Name" required />
                        <label><i className="fas fa-user"></i></label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-grp">
                        <input name="lastName" type="text" placeholder="Last Name" required />
                        <label><i className="fas fa-user"></i></label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-grp">
                        <input name="phone" type="text" placeholder="Phone Number" required />
                        <label><i className="fas fa-phone-alt"></i></label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-grp">
                        <input name="email" type="email" placeholder="Email Address" required />
                        <label><i className="fas fa-envelope"></i></label>
                    </div>
                </div>
            </div>
            <div className="form-grp">
                <textarea name="message" placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="btn">Submit Now</button>
        </form>
    );
};

export default ContactForm;
