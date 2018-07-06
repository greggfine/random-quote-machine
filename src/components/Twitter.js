import React from 'react';

const Twitter = ( { quote } ) => {
    const quoteString = `https://twitter.com/intent/tweet?text=${quote}`;

    return (
        // <div className="twitter-div">
            <a className="twitter" href=
             {quoteString}
            target="_blank">
            <i className="fa fa-twitter fa-2x"></i>
            </a>
        // </div>
    );
};

export default Twitter;


