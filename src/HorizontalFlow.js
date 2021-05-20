import React, { useState } from 'react';

import ReactFlow, { removeElements, addEdge ,MiniMap, Controls } from 'react-flow-renderer';

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const onNodeMouseEnter = (event, node) => console.log('mouse enter:', node);
const onNodeMouseMove = (event, node) => console.log('mouse move:', node);
const onNodeMouseLeave = (event, node) => console.log('mouse leave:', node);
const onNodeContextMenu = (event, node) => {
  event.preventDefault();
  console.log('context menu:', node);
};

const initialElements = [
  {
    id: 'horizontal-1',
    sourcePosition: 'right',
    type: 'input',
    className: 'dark-node',
    data: { label: 'START' },
    position: { x: 0, y: 40 },
    style: {
         
        backgroundColor: '#2E86C1',
        color: 'white',
        border: '1px solid #21618C',
        width: 180,
      },
  },
  
  {
    id: 'horizontal-2',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'STAGE 1' },
    position: { x: 250, y: 0 },
     
  },

  {
    id: 'horizontal-2-1',
    //sourcePosition: 'bottom',
    targetPosition: 'top',
    data: { label: 'STAGE 3' },
    position: { x: 250, y: 220 },
   // className: 'dark-node',
   
  },

  {
    id: 'horizontal-3',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'STAGE 2' },
    position: { x: 250, y: 100 },
    style: {
        background: '#D6D5E6',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
  },
  {
    id: 'horizontal-4',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'STAGE 4' },
    position: { x: 500, y: 0 },
  },
  {
    id: 'horizontal-5',
    sourcePosition: 'top',
    targetPosition: 'bottom',
    data: { label: 'STAGE 6' },
    position: { x: 485, y: 60 },
    style: {
         
        color: '#333',
        border: '1px solid red',
        width: 180,
        fontSize: '12px',
      },
  },
  {
    id: 'horizontal-6',
    sourcePosition: 'bottom',
    targetPosition: 'top',
    data: { label: 'STAGE 7' },
    position: { x: 485, y: 140 },
    style: {
         
        color: '#333',
        border: '1px solid green',
        width: 180,
      },
  },
  {
    id: 'horizontal-7',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'STAGE 8' },
    position: { x: 750, y: 30 },
  },
  {
    id: 'horizontal-8',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'COMPLETE' },
    position: { x: 750, y: 200 },
    style: {
         
        backgroundColor: '#EC7063',
        color: 'white',
        border: '1px solid #943126',
        width: 180,
        fontWright: 'bold'
      },
  },

  {
    id: 'horizontal-e1-2',
    source: 'horizontal-1',
    type: 'smoothstep',
    target: 'horizontal-2',
    arrowHeadType: 'arrowclosed',
    animated: false,
  },
  {
    id: 'horizontal-e1-3',
    source: 'horizontal-1',
    type: 'smoothstep',
    target: 'horizontal-3',
    arrowHeadType: 'arrowclosed',
    animated: false,
  },
  {
    id: 'horizontal-e1-4',
    source: 'horizontal-2',
    type: 'smoothstep',
    target: 'horizontal-4',
    arrowHeadType: 'arrowclosed',
    label: 'edge label',
  },
  {
    id: 'horizontal-e3-5',
    source: 'horizontal-3',
    type: 'smoothstep',
    target: 'horizontal-5',
    arrowHeadType: 'arrowclosed',
    animated: false,
  },
  {
    id: 'horizontal-e3-6',
    source: 'horizontal-3',
    type: 'smoothstep',
    target: 'horizontal-6',
    arrowHeadType: 'arrowclosed',
    animated: false,
  },
  {
    id: 'horizontal-e5-7',
    source: 'horizontal-5',
    type: 'smoothstep',
    target: 'horizontal-7',
    arrowHeadType: 'arrowclosed',
    animated: false,
  },
  {
    id: 'horizontal-e6-8',
    source: 'horizontal-6',
    type: 'smoothstep',
    target: 'horizontal-8',
    arrowHeadType: 'arrowclosed',
    animated: false,
  },
  {
    id: 'horizontal-e7-9',
    source: 'horizontal-3',
    type: 'smoothstep',
    target: 'horizontal-2-1',
    arrowHeadType: 'arrowclosed',
    animated: false,
  },
  {
    id: 'horizontal-e8-10',
    source: 'horizontal-2-1',
    type: 'smoothstep',
    target: 'horizontal-6',
    arrowHeadType: 'arrowclosed',
    animated: false,
  },
];

const HorizontalFlow = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const changeClassName = () => {
    setElements((elms) =>
      elms.map((el) => {
        if (el.type === 'input') {
          el.className = el.className ? '' : 'dark-node';
        }

        return { ...el };
      })
    );
  };

  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onLoad={onLoad}
      selectNodesOnDrag={false}
      onNodeMouseEnter={onNodeMouseEnter}
      onNodeMouseMove={onNodeMouseMove}
      onNodeMouseLeave={onNodeMouseLeave}
      onNodeContextMenu={onNodeContextMenu}
    >
       {/* <MiniMap />
      <Controls /> */}
    </ReactFlow>
  );
};

export default HorizontalFlow;