import React, { Component } from 'react';
import NewQuoteBtn from '../components/NewQuoteBtn';
import Twitter from '../components/Twitter';
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
       const shuffledQuotes = _.shuffle(this.state.quotes);
       this.setState({
           quotes: shuffledQuotes
       })

    }
    render() {
        const { quotes } = this.state;
        const quoteArr = quotes.map(entry => {
            return <div>
                        <i className="fa fa-quote-left"></i>
                        <span> {entry.quote}</span>
                        <p id="quote-author">{entry.author}</p>
                   </div>
        })
        return (
            <div id="quote-box">
               <blockquote id="quote">{quoteArr[0]}</blockquote>
               <div className="btn-group">
                    <Twitter quote={this.state.quotes[0].quote}/>
                    <NewQuoteBtn  displayQuote={this.displayQuote}/>
               </div>
            </div>
        );
    }
}

export default Quote;