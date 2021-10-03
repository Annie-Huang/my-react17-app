import React from 'react';
import styled from 'styled-components';
import Downshift from 'downshift';

const items = [
  { value: 'apple' },
  { value: 'pear' },
  { value: 'orange' },
  { value: 'grape' },
  { value: 'banana' },
];

const SearchBox = () => {
  //             {...getRootProps({}, { suppressRefError: true })}
  return (
    <Downshift
      onChange={(selection) =>
        alert(
          selection ? `You selected ${selection.value}` : 'Selection Cleared'
        )
      }
      itemToString={(item) => (item ? item.value : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps,
      }) => (
        <SearchBoxWrapper>
          <label {...getLabelProps()}>Enter a fruit</label>
          <div
            style={{ display: 'inline-block' }}
            {...getRootProps({ refKey: 'refKey' }, { suppressRefError: true })}
          >
            <input {...getInputProps()} />
          </div>

          <Menu {...getMenuProps()}>
            {/*            {isOpen
              ? items
                  .filter(
                    (item) => !inputValue || item.value.includes(inputValue)
                  )
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: item.value,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? 'lightgray' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        },
                      })}
                    >
                      {item.value}
                    </li>
                  ))
              : null}*/}
            {isOpen
              ? items
                  .filter(
                    (item) => !inputValue || item.value.includes(inputValue)
                  )
                  .map((item, index) => (
                    <Item
                      {...getItemProps({
                        key: item.value,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? 'lightgray' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        },
                      })}
                    >
                      {item.value}
                    </Item>
                  ))
              : null}
          </Menu>
        </SearchBoxWrapper>
      )}
    </Downshift>
  );
};

const Item = styled.li`
  border: 1px solid red;
`;

const Menu = styled.ul`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SearchBoxWrapper = styled.div`
  //border: 2px solid green;
  padding: 20px;
`;

export default SearchBox;
