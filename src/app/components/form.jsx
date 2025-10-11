"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import contacFormStyles from "@/app/ContactForm.module.css";
import { faMessage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from 'react-hot-toast';


export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    // Prepare template params for EmailJS
    const templateParams = {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      course: formData.course,
      message: formData.message,
    };

    emailjs
      .send(
        "service_ni7kogj",
        "template_ugcpy6r",
        templateParams,
        "-2f3BjhjcF_SirLQm"
      )
      .then(
        (response) => {
            toast.success('Message sent successfully!');
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            course: "",
            message: "",
          });
          setSending(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error('Failed to send message. Please try again.');
          setSending(false);
        }
      );
  };

  return (
    <form className={contacFormStyles.contactform} onSubmit={handleSubmit} id="contactForm">
      <h2>
        <span className={contacFormStyles.icon}>
          <FontAwesomeIcon
            icon={faMessage}
            style={{ color: "#e1bb0eff", height: "25px", width: "25px", marginRight: "5px" }}
          />
        </span>
        Send us a Message
      </h2>

      <div className={contacFormStyles.formrow}>
        <div className={contacFormStyles.formgroup}>
          <label>
            Full Name <span className={contacFormStyles.required}>*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Your Full Name"
            required
          />
        </div>
        <div className={contacFormStyles.formgroup}>
          <label>
            Email Address <span className={contacFormStyles.required}>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email Address"
            required
          />
        </div>
      </div>

      <div className={contacFormStyles.formrow}>
        <div className={contacFormStyles.formgroup}>
          <label>
            Phone Number <span className={contacFormStyles.required}>*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Your Phone Number"
            required
          />
        </div>
        <div className={contacFormStyles.formgroup}>
          <label>
            Course <span className={contacFormStyles.required}>*</span>
          </label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            <option value="Diploma in English & Management">Diploma in English & Management</option>
            <option value="Saturday English Course">Saturday English Course</option>
            <option value="General English">General English</option>
          </select>
        </div>
      </div>

      <div className={contacFormStyles.formgroup}>
        <label>
          Message <span className={contacFormStyles.required}>*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="10"
          placeholder="Tell us about your English learning goals and any questions you have..."
          required
        ></textarea>
      </div>

      <button type="submit" className={contacFormStyles.sendbtn} disabled={sending}>
        {sending ? "Sending..." : "Send Message"}
        <FontAwesomeIcon
          icon={faPaperPlane}
          style={{ color: "#fff", height: "20px", width: "20px", marginLeft: "15px" }}
        />
      </button>
    </form>
  );
}
