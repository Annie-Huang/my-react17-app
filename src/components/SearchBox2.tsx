import React from 'react';
import Downshift from 'downshift';
// import { menuStyles, comboboxStyles } from './shared';

const items = [
  { value: 'apple' },
  { value: 'pear' },
  { value: 'orange' },
  { value: 'grape' },
  { value: 'banana' },
];

const menuStyles = {
  maxHeight: 80,
  maxWidth: 300,
  overflowY: 'scroll',
  backgroundColor: '#eee',
  padding: 0,
  listStyle: 'none',
  position: 'relative',
};

const comboboxStyles = { display: 'inline-block', marginLeft: '5px' };
const SearchBox2 = () => {
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
        getToggleButtonProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps,
      }) => (
        <div>
          <label {...getLabelProps()}>Enter a fruit:</label>
          <div
            style={comboboxStyles}
            {...getRootProps({ refKey: 'refKey' }, { suppressRefError: true })}
          >
            <input {...getInputProps()} />
            <button {...getToggleButtonProps()} aria-label={'toggle menu'}>
              &#8595;
            </button>
          </div>
          <ul {...getMenuProps()} style={menuStyles}>
            {isOpen
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
              : null}
          </ul>
        </div>
      )}
    </Downshift>
  );
};

export default SearchBox2;
