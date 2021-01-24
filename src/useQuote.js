import { useState, useEffect } from 'react'

function useQuote() {

  const [quote, setQuote] = useState({});

    useEffect(() => {
      const fetchQuote = async () =>
        await fetch(
          `https://type.fit/api/quotes`
        )
          .then((result) => result.json())
          .then((data) => {
            const randomQuote = Math.floor(Math.random() * data.length)
            console.log(data[randomQuote].text);
              setQuote(data[randomQuote]);

        });
      fetchQuote();

    }, []);
 return quote;
}

export default useQuote;

