import React, { useRef } from 'react';
import FrParentInput from './FRParentInput';

const FRGrandParentInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onButtonClicked = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <FrParentInput ref={inputRef} />
      <button type='button' onClick={onButtonClicked}>
        Focus Input
      </button>
    </div>
  );
};

export default FRGrandParentInput;
