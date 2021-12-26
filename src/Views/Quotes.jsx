import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router'; 
import RehearsalContext from '../Context/Rehearsal'
import QuotesBox from '../Components/QuotesBox';
import '../Styles/Quotes.css'
const Colours = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871",
    "#581845"
];
// testing`
const Quotes = () => {
    const { state } = useContext(RehearsalContext)
    const { quoteObj } = state
    const { quotes } = quoteObj
    const getNumber = (max) => Math.floor(Math.random() * max); 
    const [quot, setQuot] = useState(quotes[getNumber(quotes.length)]);
    const handleQuotes = () => {
        const numberOfQuotes = getNumber(quotes.length);
        setQuot(quotes[numberOfQuotes]);
    };
    const background = Colours[getNumber(Colours.length)];
    document.body.style = `background: ${background}`;
    const navigate = useNavigate()
    return (
        
        <div className='container-quote'>
            <i  style = {{ cursor: 'pointer', color: `${background}`, marginLeft: '90%'}} className="fas fa-home" onClick={()=> navigate('/')}/>
            <QuotesBox
                quote={quot.quote} 
                author={quot.author}
                background={background}
                changeQuotes={handleQuotes}
            />

        </div>
    )
}

export default Quotes
