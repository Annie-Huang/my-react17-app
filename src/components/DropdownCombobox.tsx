import React, {useState} from 'react';
import {useCombobox} from 'downshift';
import {comboboxStyles, items, menuStyles} from './shared';
import styled, {css} from 'styled-components';

const DropdownCombobox = () => {
  const [inputItems, setInputItems] = useState(items)
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    openMenu,
    // selectItem,
    reset,
    selectedItem
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter(item =>
          inputValue ? item.toLowerCase().startsWith(inputValue.toLowerCase()) : false,
        ),
      )
    },
  })

  /*
          <button
          tabIndex={-1}
          onClick={() => {
            selectItem(null)
          }}
          aria-label="clear selection"
        >
          &#215;
        </button>
  */
  return (
    <div>
      <label {...getLabelProps()}>Choose an element:</label>
      <div style={comboboxStyles} {...getComboboxProps()}>
        <input
          {...getInputProps({
            onFocus: () => {
              if (!isOpen) {
                openMenu()
              }
            },
          })}
        />
        <button
          tabIndex={-1}
          onClick={() => {
            // selectItem(null)
            reset();
            // selectedItem(null);
          }}
          aria-label="clear selection"
        >
          &#215;
        </button>
        <button
          type="button"
          {...getToggleButtonProps()}
          aria-label="toggle menu"
        >
          &#8595;
        </button>
      </div>
      <Menu {...getMenuProps()}>
        {isOpen &&
        inputItems.map((item, index) => (
          <Item isHighlightedIndex={highlightedIndex === index}
            key={`${item}${index}`}
            {...getItemProps({item, index})}
          >
            {item}
          </Item>
        ))}
      </Menu>
    </div>
  );
};


const Menu = styled.ul`
  max-height: 600px;
  max-width: 300px;
  overflow-y: scroll;
  background-color: #eee;
  padding: 0;
  list-style: none;
  position: relative;
`;

const Item = styled.li<{
  isHighlightedIndex: boolean
}>`
  ${props =>
    props.isHighlightedIndex &&
    css`
      background-color: #bde4ff;
    `}

`;
export default DropdownCombobox;
