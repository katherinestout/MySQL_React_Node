import React from 'react';

const FlavorCard = props => (

<div>

<p>{props.type} 
<span>&nbsp;</span> 
${props.price}</p>

<button onClick={() => props.handleClick(props.id)}>Delete</button>
<span>&nbsp;</span> 
<button>Replace</button>
  </div>

)

export default FlavorCard;