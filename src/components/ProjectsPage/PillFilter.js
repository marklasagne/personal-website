// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

import React, { useState } from 'react';
import styled from 'styled-components';

const PillFilter = ({ tag, onClick }) => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <PillButton className={isActive ? 'active': null} onClick={() => {toggleClass(); onClick();}}>{tag}</PillButton>
    </>
  );
}

const PillButton = styled.div`
  color: #808080;
  border: 2px solid;
  padding: 0.625rem 1.25rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 0.25rem 0.125rem;
  cursor: pointer;
  border-radius: 30px;
  &.active {
    color: #ffffff;
    background: #000000;
    border: 2px solid #000000;
  }
`;

export default PillFilter;

