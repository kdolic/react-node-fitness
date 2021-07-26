import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Slide from 'react-reveal/Slide';
import '../../css/Dashboard/DashQuote.css';

const DashQuote = () => {
    const [quotes, setQuotes] = useState('');

    const getQuote = () => {
        axios.get('https://type.fit/api/quotes')
        .then((res) => {
            let randomNum = Math.floor(Math.random() * res.data.length);
            setQuotes(res.data[randomNum]);
        })
    }

    useEffect(() => {
        getQuote();
    }, [])

    return (
        <Slide left>
        <div className='quoteContainer'>
            <div className="quoteFlex">
                <p>{quotes.text}</p>
                <p> - {quotes.author}</p>
            </div>
           </div>
        </Slide>
    )
}

export default DashQuote
