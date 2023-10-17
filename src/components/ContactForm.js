import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  const formInitialDetails = {
    name: '',
    info: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
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
      <p>Reach out!</p>
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
          rows="6"
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
  width: 300px;
  height: 2.5rem;
  margin: 1rem 1rem 1rem 1rem;
`;

const StyledTextarea = styled.textarea`
  width: 300px;
  height: 7.5rem;
  margin: 1rem 1rem 1rem 1rem;
`;

const StyledButton = styled.button`
  width: 300px;
  height: 2.5rem;
  margin: 1rem 1rem 1rem 1rem;
`;

export default ContactForm;