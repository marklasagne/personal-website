// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GridItem = ({ image, id }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <>
      <ContainerDiv>
          <Item src={image} alt="whoops" onClick={handleRoute} />
          <CenterText class="centered">Centered</CenterText>
        </ContainerDiv>
    </>
  );
}

const ContainerDiv = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const CenterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Item = styled.img`
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
    cursor: pointer;
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)
`;

export default GridItem;

