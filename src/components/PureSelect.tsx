import React from 'react';
import styled from 'styled-components';

const PureSelect = () => {
  return (
    <PureSelectWrapper>
      <select>
        <option value='grapefruit'>Grapefruit</option>
        <option value='lime'>Lime</option>
        <option selected value='coconut'>
          Coconut
        </option>
        <option value='mango'>Mango</option>
      </select>
    </PureSelectWrapper>
  );
};

const PureSelectWrapper = styled.div`
  max-width: 400px;
  margin: 100px 0 0 100px;
`;
export default PureSelect;
