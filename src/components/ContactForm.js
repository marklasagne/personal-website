import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xtktt7b','template_jwu0pys', form.current, 'paGw-b_4m1vD028Ql')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <FormContainer onSubmit={sendEmail} ref={form}>
        <p>Let's talk about feelings...</p>
        <StyledInput
          type="text"
          name="from_name"
          placeholder="Name"
        />
        <StyledInput
          type="text"
          name="from_info"
          placeholder="Email/ social media"
        />
        <StyledTextarea
          rows="7"
          col="30"
          name="message"
          placeholder="Message"
        ></StyledTextarea>
        <StyledButton type="submit">Send Message</StyledButton>
      </FormContainer>


    </>
  );
};

const FormContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #d9d9d9;
  font-family: Verdana; 
  font-size: 0.75rem;
  padding-left: 0;
  padding-right: 0;
  border-radius: 0; 
  margin: 1rem 1rem 1rem 1rem;
  &:focus, &:active {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: #000; }
  }
`;

const StyledTextarea = styled.textarea`
  border: none;
  border-bottom: 1px solid #d9d9d9;
  font-family: Verdana; 
  font-size: 0.75rem;
  padding-left: 0;
  padding-right: 0;
  border-radius: 0; 
  margin: 1rem 1rem 1rem 1rem;
  &:focus, &:active {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: #000; }
  }
`;

const StyledButton = styled.button`
  margin: 1rem 1rem 1rem 1rem;
  color: #808080;
  background: none;
  border: 2px solid #808080;
  font-size: 0.8rem;
  width: 25%;
  padding: 15px;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background: #000000;
    border: 2px solid #000000;
  }
`;



export default ContactForm;