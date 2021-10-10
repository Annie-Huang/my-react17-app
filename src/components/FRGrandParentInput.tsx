import React, { useRef } from 'react';
import FRParentInput from './FRParentInput';

const FRGrandParentInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onButtonClicked = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <FRParentInput ref={inputRef} />
      <button type='button' onClick={onButtonClicked}>
        Focus Input
      </button>
    </div>
  );
};

export default FRGrandParentInput;
