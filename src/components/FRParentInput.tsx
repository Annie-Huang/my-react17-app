import React from 'react';
import FRInput from './FRInput';

const FrParentInput = React.forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div>
      <FRInput ref={ref} />
    </div>
  );
});

export default FrParentInput;
