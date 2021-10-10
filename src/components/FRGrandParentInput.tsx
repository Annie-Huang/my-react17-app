import React, { useRef } from 'react';
import FRParentInput from './FRParentInput';
import FRInput from './FRInput';

const FRGrandParentInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onButtonClicked = () => {
    inputRef?.current?.focus();
  };

  return (
    <div>
      <FRParentInput ref={inputRef} />
      {/*<FRInput ref={inputRef} />*/}
      <button type='button' onClick={onButtonClicked}>
        Focus Input
      </button>
    </div>
  );
};

export default FRGrandParentInput;
