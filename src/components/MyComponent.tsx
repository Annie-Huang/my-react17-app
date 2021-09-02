import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const MyComponent = () => {
  return (
    <MyComponentWrapper>
      <Select options={options} />
    </MyComponentWrapper>
  );
};

const MyComponentWrapper = styled.div`
  max-width: 400px;
  margin: 100px auto;
`;

export default MyComponent;
