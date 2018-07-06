import React from 'react';

const NewQuoteBtn = ({ displayQuote }) => {
    return (
        <button className="btn"
         onClick={displayQuote}>
            New quote
        </button>
    )
}

export default NewQuoteBtn;