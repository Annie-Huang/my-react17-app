import React from 'react';
import FRInput from './FRInput';

const FRParentInput = React.forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div>
      <FRInput ref={ref} />
    </div>
  );
});

export default FRParentInput;
