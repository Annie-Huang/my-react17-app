import React, { useState } from 'react';
import {
  ColourOption,
  colourOptions,
  FlavourOption,
  groupedOptions,
} from './data';
import Select, { components } from 'react-select';
import { GroupHeadingProps } from 'react-select/src/components/Group';
import styled from 'styled-components';

const groupStyles = {
  border: `2px dotted ${colourOptions[2].color}`,
  color: 'white',
  background: colourOptions[2].color,
  padding: '5px 0px',
  display: 'flex',
};

const GroupHeading = (
  props: GroupHeadingProps<ColourOption | FlavourOption, false>
) => (
  <div style={groupStyles}>
    <components.GroupHeading {...props} />
    <div>Heading...</div>
    {/*<Tooltip content='Custom GroupHeading Component'>*/}
    {/*  <EditorPanelIcon label='Editor Panel' />*/}
    {/*</Tooltip>*/}
  </div>
);

const GroupedSearchBox = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  return (
    <GroupedSearchBoxWrapper>
      GroupedSearch <br />
      inputValue: {inputValue}
      <Select<ColourOption | FlavourOption>
        defaultValue={colourOptions[1]}
        options={groupedOptions}
        components={{ GroupHeading }}
        styles={{
          groupHeading: (base) => ({
            ...base,
            flex: '1 1',
            color: 'white',
            margin: 0,
          }),
        }}
        onInputChange={handleInputChange}
      />
    </GroupedSearchBoxWrapper>
  );
};

const GroupedSearchBoxWrapper = styled.div`
  max-width: 400px;
  margin: 100px 0 0 50px;
`;

export default GroupedSearchBox;
