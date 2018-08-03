import React from 'react';

function House(props) {
  return (
    <div>
      <div>
      Name: {props.name} 
      </div>
      <div>
      Address: {props.address}
      </div>
      <div>
      City: {props.city}
      </div>
      <div>
      State: {props.state}
      </div>
      <div>
      Zip: {props.zip}
      </div>
      <button onClick={ () => props.deleteHouse(props.id)}>Delete</button>
    </div>
  )
}

export default House;