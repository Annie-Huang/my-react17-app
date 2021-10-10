import React from 'react';

const FRInput = React.forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div>
      <input type='text' ref={ref} />
    </div>
  );
});

export default FRInput;
