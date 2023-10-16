import React from 'react';
import { useState } from "react";
import { Row, MainFont, Column } from '../components/PageComponents.js';
import styled from 'styled-components';

const ContactForm = () => {
  const formInitialDetails = {
    name: "",
    info: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <div>
      <h1>Reach out!</h1>
      <p>I am always looking to collab or talk about feelings... </p>
      <form>
        <Row>
          <input
            type="text"
            value={formDetails.firstName}
            placeholder="Name"
            onChange={(e) => onFormUpdate("name", e.target.value)}
          />
          <input
            type="text"
            value={formDetails.lastName}
            placeholder="Email/ social media"
            onChange={(e) => onFormUpdate("info", e.target.value)}
          />
        </Row>
        <Row>
          <textarea
            rows="6"
            value={formDetails.message}
            placeholder="Message"
            onChange={(e) => onFormUpdate("message", e.target.value)}
          ></textarea>
        </Row>
        <button type="submit">{buttonText}</button>
        {status.message && (
          <div className="row">
            <p className={status.success === false ? "danger" : "success"}>
              {status.message}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;