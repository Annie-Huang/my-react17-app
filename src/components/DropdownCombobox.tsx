import React, {useState} from 'react';
import {useCombobox} from 'downshift';
import {comboboxStyles, items, menuStyles} from './shared';

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
    selectItem,
    reset,
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
      <ul {...getMenuProps()} style={menuStyles}>
        {isOpen &&
        inputItems.map((item, index) => (
          <li
            style={
              highlightedIndex === index
                ? {backgroundColor: '#bde4ff'}
                : {}
            }
            key={`${item}${index}`}
            {...getItemProps({item, index})}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownCombobox;
