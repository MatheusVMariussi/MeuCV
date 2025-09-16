import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #2a2a2a;
`;

const ContactText = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 1rem;
`;

const ContactEmail = styled.a`
  color: #007acc;
  font-weight: bold;
  font-size: 1.3rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2>Contato</h2>
      <ContactText>Sinta-se à vontade para entrar em contato comigo.</ContactText>
      <ContactEmail href="mailto:matheus.mariussi@pucpr.edu.br">
        matheus.mariussi@pucpr.edu.br
      </ContactEmail>
    </ContactSection>
  );
};

export default Contact;