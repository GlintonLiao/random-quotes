import React from 'react';

const Buttons = (props) => {
  return (
    <div className='buttons'>
      <button
        id={props.id}
        onClick={props.handleClick} 
        style={{color: "white", backgroundColor: props.color}}
        className="button"
      >
        New Quotes
      </button>
    </div>
  );
}

export default Buttons;
