import React from 'react'

const QuotesBox = ({ quote, author, background, changeQuotes }) => {
    
    return (
        <div className="quote">
            <i class="fas fa-quote-left" style={{ color: background }}></i>
            <h3 style={{ color: background }}>{quote}</h3>
            <div className='container-details'>
                <p style={{ color: background }}>{author}</p>
                <button onClick={changeQuotes} style={{ color: background }}>
                    <i className="fas fa-chevron-circle-right"></i>
                </button>   
            </div>               
        </div>
    )
}

export default QuotesBox
