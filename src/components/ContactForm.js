import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  const formInitialDetails = {
    name: '',
    info: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <>
      <FormContainer>
      <p>Let's talk about feelings...</p>
        <StyledInput
          type="text"
          value={formDetails.name}
          placeholder="Name"
          onChange={(e) => onFormUpdate('name', e.target.value)}
        />
        <StyledInput
          type="text"
          value={formDetails.info}
          placeholder="Email/ social media"
          onChange={(e) => onFormUpdate('info', e.target.value)}
        />
        <StyledTextarea
          rows="7"
          col="30"
          value={formDetails.message}
          placeholder="Message"
          onChange={(e) => onFormUpdate('message', e.target.value)}
        ></StyledTextarea>
        <StyledButton type="submit">{buttonText}</StyledButton>
        {status.message && (
          <div className="row">
            <p className={status.success === false ? 'danger' : 'success'}>
              {status.message}
            </p>
          </div>
        )}
      </FormContainer>


    </>
  );
};

const FormContainer = styled.div`
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