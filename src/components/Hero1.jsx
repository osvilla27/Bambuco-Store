
import React from 'react';
import styled from 'styled-components';

const ContactSection = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contáctanos</ContactTitle>
      <ContactForm>
        <ContactInput type="email" placeholder="Correo electrónico" />
        <ContactInput type="tel" placeholder="Teléfono" />
        <ContactTextarea placeholder="Mensaje" />
        <ContactButton>Enviar</ContactButton>
      </ContactForm>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  padding: 50px;

  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`;

const ContactTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const ContactInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ccc;

  &:focus {
    outline: none;
  }
`;

const ContactTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ccc;

  &:focus {
    outline: none;
  }
`;

const ContactButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }

  &:focus {
    outline: none;
  }
`;

export default ContactSection;


