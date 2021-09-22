import React, { useState } from 'react';
import styled from 'styled-components';
import AsyncSelect from 'react-select/async';
import { ColourOption, colourOptions } from './data';

const filterColors = (inputValue: string) =>
  colourOptions.filter((colourOption) =>
    colourOption.label.toLowerCase().includes(inputValue.toLowerCase())
  );

const loadOptions = (inputValue: string, callback: any) => {
  // console.log('In loadOptions method, inputValue=', inputValue);
  setTimeout(() => {
    // console.log('Called callback method...');
    callback(filterColors(inputValue));
  }, 1000);
};

const promiseOptions = (inputValue: string) =>
  new Promise<ColourOption[]>((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

const SearchBox = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (newValue: string) => {
    console.log('In handleInputChange method, newValue=', newValue);
    const newInputValue = newValue.replace(/\W/g, '');
    setInputValue(newInputValue);
    // console.log('In handleInputChange method, newInputValue=', newInputValue);
    return newInputValue;
  };

  const clearValue = () => {
    console.log('clearValue is called');
    setInputValue('');
  };

  // loadOptions={loadOptions}
  return (
    <SearchBoxWrapper>
      SearchBox <br />
      inputValue: {inputValue}
      <AsyncSelect
        isClearable
        clearValue={clearValue}
        cacheOptions
        loadOptions={promiseOptions}
        defaultOptions
        onInputChange={handleInputChange}
      />
    </SearchBoxWrapper>
  );
};

const SearchBoxWrapper = styled.div`
  max-width: 400px;
  margin: 100px 0 0 50px;
`;
export default SearchBox;
