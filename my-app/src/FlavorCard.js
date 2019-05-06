import React from 'react';

const FlavorCard = props => (

<div className="list-grid-one">
<p>
{props.type} 
<span>&nbsp;</span> 
${props.price}
<span>&nbsp;</span> 
</p>

<button className="delete-button" 
onClick={() => props.handleClick(props.id)}>DELETE</button>
<span>&nbsp;</span> 
<button className="update-button"
onClick={() => props.handleUpdate(props.id)}>UDATE</button>
  </div>


)

export default FlavorCard;