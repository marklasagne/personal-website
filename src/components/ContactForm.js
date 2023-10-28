import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const ContactForm = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send Message');
  const [buttonStyle, setButtonStyle] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xtktt7b','template_jwu0pys', form.current, 'paGw-b_4m1vD028Ql')
      .then((result) => {
        console.log(result.text);
        setButtonText('Message Sent \u2714');
        setButtonStyle({ color: 'green' });
      }, (error) => {
        console.log(error.text);
        setButtonText('Try again \u2718');
        setButtonStyle({ color: 'red' }); 
      });
  };

  return (
    <>
      <FormContainer onSubmit={sendEmail} ref={form}>
        <StyledTitle>Let's talk about feelings...</StyledTitle>
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
        <StyledButton style={buttonStyle} type="submit">{buttonText}</StyledButton>
      </FormContainer>


    </>
  );
};

const StyledTitle = styled.p`
  font-size: 12px;
  font-weight: bold;
  font-style: italic;
`;

const FormContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #d9d9d9;
  font-family: Verdana; 
  font-size: 0.75rem;
  padding-left: 0;
  padding-right: 0;
  border-radius: 0; 
  margin: 2rem 1rem 1rem 1rem;
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
  margin: 2rem 1rem 1rem 1rem;
  &:focus, &:active {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: #000; }
  }
`;

const StyledButton = styled.button`
  overflow-x: ${props => props.isScrolledX === false ? `rotate(90deg)` : `rotate(-90deg)`};
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