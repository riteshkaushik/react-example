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
        position="left"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />   
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: 18, background: '#555' }}
      />
      <Handle
        type="source"
        position="bottom"
        id="b"
        style={{ bottom: -6, top: 'auto', background: '#555' }}
      />
    </>
  );
});