import React from 'react'



function Band(props) {
  
  return (
    <div>
      {props.bands.map((band, index) => (
        <div key={index}>
          <li>{band}</li>
        </div>
      ))}
    </div>
  );
}

export default Band
