import React from 'react';

const QuoteAuthor = (props) => {
  return (
    <div className='quote-author' style={{color: props.color}}>
      <span id='author'>{props.author}</span>
    </div>
  );
}

export default QuoteAuthor;
