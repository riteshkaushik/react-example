import React, { useState } from 'react';

import ReactFlow, { isEdge, removeElements, addEdge ,MiniMap, Controls, Handle } from 'react-flow-renderer';

import ColorSelectorNode from './flows/ColorSelectorNode';
import TwoTargetNode from './flows/TwoTargetNode';
import TwoTargetOneSource from './flows/TwoTargetOneSource';

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const onNodeMouseEnter = (event, node) => console.log('mouse enter:', node);
const onNodeMouseMove = (event, node) => console.log('mouse move:', node);
const onNodeMouseLeave = (event, node) => console.log('mouse leave:', node);
const onNodeContextMenu = (event, node) => {
  event.preventDefault();
  console.log('context menu:', node);
};

const nodeTypes = {
    selectorNode: ColorSelectorNode,
    twoTargetNode: TwoTargetNode,
    twoTargetOneSource: TwoTargetOneSource

  };

const initialElements = [
  {
    id: 'start',
    sourcePosition: 'right',
    type: 'input',
    className: 'dark-node',
    data: { label: 'START' },
    position: { x: 0, y: 50 },
    style: {
        backgroundColor: '#2E86C1',
        color: 'white',
        border: '2px solid white',
        borderRadius: '10px',
        padding: '10px', 
        width: 70,
      },
  },
  
  {
    id: 'anchordata',
    sourcePosition: 'top',
    targetPosition: 'left',
    data: { label: 'AnchorData in CDP(S3)' },
    position: { x: 140, y: 0 },
    style: {
        backgroundColor: '#3498DB',
        border: '2px solid #73AD21',
        borderRadius: '10px',
        padding: '10px', 
        width: 150,
      },
  },

  {
    id: 'tradedata',
    //sourcePosition: 'bottom',
    // targetPosition: 'top',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'TradeData in CDP(S3)' },
    position: { x: 140, y: 43 },
   // className: 'dark-node',
   style: {
    backgroundColor: '#3498DB',
    border: '2px solid #73AD21',
    borderRadius: '10px',
    padding: '10px', 
      width: 150,
  },
  },

  {
    id: 'fdr',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'FDR Data and Tag \n Generation in CDP' },
    position: { x: 140, y: 85 },
    style: {
        backgroundColor: '#3498DB',
        border: '2px solid #73AD21',
        borderRadius: '10px',
        padding: '10px', 
          width: 150,
      },
   
  },

  {
    id: 'rdr',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'RDR Data and Tag \n Generation in CDP' },
    position: { x: 140, y: 143 },
    style: {
        backgroundColor: '#3498DB',
        border: '2px solid #73AD21',
        borderRadius: '10px',
        padding: '10px', 
          width: 150,
      },
   
  },

  {
    id: 'facility',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Facility Mapper Gauss \n Exposure data in CDP' },
    position: { x: 140, y: 203 },
    style: {
        backgroundColor: '#3498DB',
        border: '2px solid #73AD21',
        borderRadius: '10px',
        padding: '10px', 
          width: 150,
      },
   
  },

  {
    id: 'selm',
    type: 'selectorNode',
    sourcePosition:  'right',
    targetPosition: 'top',
    data: { label: 'Selm Facility Mapping in \n S3' },
    position: { x: 380, y: 0 },
    style: {
        backgroundColor: '#D7DBDD',
        border: '2px solid #85C1E9',
        borderRadius: '10px',
        padding: '10px', 
          width: 150,
      },
   
  },

  {
    id: 'report',
    type: 'twoTargetNode',
    sourcePosition:  'right',
    targetPosition: 'top',
    data: { label: 'Break Fast Report' },
    position: { x: 780, y: 85 },
    style: {
        backgroundColor: '#2E86C1',
        color: 'white',
        border: '2px solid white',
        borderRadius: '10px',
        padding: '10px', 
        width: 140,
      },
   
  },

  {
    id: 'tradestatus',
    sourcePosition: 'right',
    targetPosition: 'left',
    type:'twoTargetOneSource',
    data: { label: 'Trade Status in CDP S3' },
    position: { x: 380, y: 85 },
    style: {
        backgroundColor: '#3498DB',
        border: '2px solid #73AD21',
        borderRadius: '10px',
        padding: '10px', 
          width: 150,
      },
   
  },

  {
    id: 'a',
    source: 'start',
    type: 'step',
    target: 'anchordata',
    arrowHeadType: 'arrowclosed',
    animated: false,
  },
  {
    id: 'b',
    source: 'start',
    type: 'step',
    target: 'tradedata',
    arrowHeadType: 'arrowclosed',
    animated: false,
  },
  {
    id: 'c',
    source: 'start',
    type: 'step',//'smoothstep',
    target: 'fdr',
    arrowHeadType: 'arrowclosed',
    animated: false,
  },

  {
    id: 'd',
    source: 'start',
    type: 'step',
    target: 'rdr',
    arrowHeadType: 'arrowclosed',
    animated: false,
  },

  {
    id: 'e',
    source: 'start',
    type: 'step',
    target: 'facility',
    arrowHeadType: 'arrowclosed',
    animated: false,
  },

  {
    id: 'f',
    type: 'step',
    source: 'anchordata',
    target: 'selm',
    targetHandle: 'a',
    arrowHeadType: 'arrowclosed',
    animated: false,
  },

  {
    id: 'g',
    type: 'step',
    source: 'fdr',
    target: 'selm',
    targetHandle: 'b',
    arrowHeadType: 'arrowclosed',
    animated: false,
  },

  {
    id: 'h',
    type: 'step',
    source: 'tradedata',
    target: 'report',
    targetHandle: 'a',
    arrowHeadType: 'arrowclosed',
    animated: false,
  },

  {
    id: 'i',
    type: 'step',
    source: 'tradestatus',
    target: 'selm',
    targetHandle: 'c',
    arrowHeadType: 'arrow',
    arrowTailType: 'arrow',
    animated: false,
  },
];

const HorizontalFlow1 = () => {
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

  const flowStyles = { height: 500 };

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
      nodeTypes={nodeTypes}
       
    >
       {/* <MiniMap />
      <Controls /> */}
    </ReactFlow>
  );
};

export default HorizontalFlow1;