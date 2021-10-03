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
            {isOpen
              ? items
                  .filter(
                    (item) => !inputValue || item.value.includes(inputValue)
                  )
                  .map((item, index) => (
                    <Item
                      isHighlightedIndex={highlightedIndex === index}
                      isSelectedItem={selectedItem === item}
                      {...getItemProps({
                        key: item.value,
                        index,
                        item,
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

const Item = styled.li<{
  isHighlightedIndex: boolean;
  isSelectedItem: boolean;
}>`
  border: 1px solid red;
  background-color: ${(props) =>
    props.isHighlightedIndex ? 'lightgray' : 'white'}
  font-weight: ${(props) => (props.isSelectedItem ? 'bold' : 'normal')}
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
