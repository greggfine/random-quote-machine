import React, { Component } from 'react';
import NewQuoteBtn from '../components/NewQuoteBtn';
import _ from 'lodash'
// import quotes from '../quotes.json';

class Quote extends Component {
    constructor(props){
        super(props)

        this.state = {
            quotes: [
                {
                    quote: "It's not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
                    author: "-Ann Landers"
                },
                {
                    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
                    author: "-Napoleon Hill"
                },
                {
                    quote: "Strive not to be a success, but rather to be of value.",
                    author: "-Albert Einstein"
                }
            ]
        };
    }

    displayQuote = () => {
       this.setState({
           quotes: _.shuffle(this.state.quotes)
       })

    }
    render() {
        const { quotes } = this.state;
        const quoteArr = quotes.map(entry => {
            return <div>
                        <h1>{entry.quote}</h1>
                        <p>{entry.author}</p>
                   </div>
        })
        return (
            <React.Fragment>
               {quoteArr[0]}
               <NewQuoteBtn displayQuote={this.displayQuote}/>
            </React.Fragment>
        );
    }
}

export default Quote;