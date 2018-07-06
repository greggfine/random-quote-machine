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
                    quote: "Space is not only high, it's low. It's a bottomless pit.",
                    author: "-Sun Ra"
                },
                {
                    quote: "If death is the absence of life, then death's death is life.",
                    author: "-Sun Ra"
                },
                {
                    quote: "The possible has been tried and failed. Now it's time to try the impossible.",
                    author: "-Sun Ra"
                },
                {
                    quote: "Jazz is there and gone. It happens. You have to be present for it. That simple.",
                    author: "-Keith Jarrett"
                },
                {
                    quote: "One thing you learn: if you want to reveal yourself, you also have to know where to stop.",
                    author: "-Keith Jarrett"
                },
                {
                    quote: "I can't even tolerate my own playing on electric keyboards. It's not about the musical ideas - the sound itself is toxic. It's like eating plastic broccoli.",
                    author: "-Keith Jarrett"
                },
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