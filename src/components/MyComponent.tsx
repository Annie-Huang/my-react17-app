import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

export interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const MyComponent = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  return (
    <MyComponentWrapper>
      MyComponent <br />
      selectedOption: {JSON.stringify(selectedOption)}
      <Select onChange={setSelectedOption} options={options} />
    </MyComponentWrapper>
  );
};

const MyComponentWrapper = styled.div`
  max-width: 400px;
  margin: 100px 0 0 50px;
`;

export default MyComponent;
