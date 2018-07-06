import React from 'react';

const NewQuoteBtn = ({ displayQuote }) => {
    return (
        <button
         onClick={displayQuote}>
            New quote
        </button>
    )
}

export default NewQuoteBtn;