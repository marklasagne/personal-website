import React from 'react';
import styled from 'styled-components';

import linkedin from '../assets/icons/linkedin.svg';
import github from '../assets/icons/github.svg';
import codepen from '../assets/icons/codepen.svg';
import behance from '../assets/icons/behance.svg';

const socialIconsData = [
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/marklisanti/', icon: linkedin },
  { name: 'GitHub', link: 'https://github.com/marklasagne/', icon: github },
  { name: 'CodePen', link: 'https://codepen.io/marklasagne', icon: codepen },
  { name: 'Behance', link: 'https://www.behance.net/marklasagne/', icon: behance },
];

const SocialIcons = () => {
  return (
    <SocialsContainer>
      {socialIconsData.map(({ name, link, icon }) => (
        <a key={name} href={link} rel="noopener noreferrer" target="_blank">
          <SocialIcon src={icon} alt={name} />
        </a>
      ))}
    </SocialsContainer>
  );
};

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SocialIcon = styled.img`
  color: #000000;
  width: 3.5rem;
  text-decoration: none;
  margin: 0.5rem;
  &:hover {
    opacity: 75%;
  }
`;

export default SocialIcons;