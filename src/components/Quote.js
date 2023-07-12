import React, { useEffect, useState } from 'react';
import QuoteDisplay from './QouteDisplay';

function Quote() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://api.api-ninjas.com/v1/quotes?category=life',
        {
          headers: { 'X-Api-Key': 'KngqeNNPDXdnVHYdSkldtQ==mlFR9OH13F8KvuPk' },
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setQuote(data[0]?.quote);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return <QuoteDisplay quote={quote} />;
}

export default Quote;
