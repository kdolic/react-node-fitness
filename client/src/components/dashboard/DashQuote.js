import React, {useState, useEffect} from 'react';

const DashQuote = () => {
    const [quotes, setQuotes] = useState('');

    const getQuote = () => {
        fetch('https://type.fit/api/quotes')
        .then((res) => res.json())
        .then((data) => {
            let randomNum = Math.floor(Math.random() * data.length);
            setQuotes(data[randomNum]);
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
