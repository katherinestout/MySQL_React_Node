import React from 'react';

const FlavorCard = props => (


  <div 
  onClick={() => props.handleClick(props.id)}>

{props.type}
{props.price}
  </div>



)

export default FlavorCard;