import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
        <div className='quoteContainer'>
            <p>{quotes.text}</p>
            <p> - {quotes.author}</p>
        </div>
    )
}

export default DashQuote
