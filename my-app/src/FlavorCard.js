import React from 'react';

const FlavorCard = props => (

<div>
<div className="right">
{props.type} 
<span>&nbsp;</span> 
${props.price}


<button className="delete-button" onClick={() => props.handleClick(props.id)}>DELETE</button>
<span>&nbsp;</span> 
<button className="update-button"
onClick={() => props.handleUpdate(props.type)}>Mint Choco Chip is the best</button>
  </div>
  </div>

)

export default FlavorCard;