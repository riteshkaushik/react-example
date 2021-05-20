import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

export default memo(({ data }) => {
  return (
    <>
     
      <div>
       {data.label}
      </div>
      

<Handle
        type="target"
        position="top"
        id="a"
        style={{ bottom: 35, top: 'auto', background: 'red' }}
      />
 


    <Handle
        type="target"
        position="bottom"
        id="b"
        style={{ bottom: -6, top: 'auto', background: 'white' }}
      />
    </>
  );
});