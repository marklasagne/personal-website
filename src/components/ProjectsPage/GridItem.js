// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GridItem = ({ image, id, title, description}) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <>
      <ContainerDiv onClick={handleRoute}>
          <Item src={image} alt="whoops" />
          <TextContainer>
            <CenterText class="centered">{title}</CenterText>
            <DescriptionText class="centered">{description}</DescriptionText>
          </TextContainer>
        </ContainerDiv>
    </>
  );
}

const ContainerDiv = styled.div`
  position: relative;
  text-align: center;
  color: white;
  cursor: pointer;
  margin:0;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 150px;
  position: absolute;
  bottom: 0px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0),  rgba(0,0,0,0.75) 75%);
  ${ContainerDiv}:hover & {
    height: 300px;
  }
`;

const CenterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background: rgba(0,0,0,0.5);
  padding: 0.5rem;
  transform: translate(-50%, -50%);
  font-size: 1rem;
`;

const DescriptionText = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%, 75%);
  opacity: 0;
  font-size: .75rem;
  transition: opacity 0.3s ease, transform 0.3s ease;
  ${TextContainer}:hover & {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const Item = styled.img`
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)
`;

export default GridItem;

