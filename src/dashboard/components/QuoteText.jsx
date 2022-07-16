import React from 'react';

const QuoteText = (props) => {
  return (
    <div className='quote-text' style={{color: props.color}}>
      <span id='text'>{props.quote}</span>
    </div>
  );
}

export default QuoteText;
