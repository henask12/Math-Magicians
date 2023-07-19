import React from 'react';
import PropTypes from 'prop-types';

function QuoteDisplay({
  quote, author, category, quote2,
}) {
  return (
    <div className="container mx-auto px-4 mt-5 mb-5 translate-x-px">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer">
          <h3 className="text-xl font-bold mb-2">
            {' '}
            {category}
            {' '}
            -
            {' '}
            {author}
            {' '}
          </h3>
          <p className="text-sm mb-4">{quote}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer">
          <h3 className="text-xl font-bold mb-2">
            {' '}
            {quote2[0]?.category}
            {' '}
            -
            {' '}
            {quote2[0]?.author}
            {' '}
          </h3>
          <p className="text-sm mb-4">{quote2[0]?.quote}</p>
        </div>
      </div>
    </div>
  );
}
QuoteDisplay.propTypes = {
  quote: PropTypes.string.isRequired,
};
QuoteDisplay.propTypes = {
  author: PropTypes.string.isRequired,
};
QuoteDisplay.propTypes = {
  category: PropTypes.string.isRequired,
};
QuoteDisplay.propTypes = {
  quote2: PropTypes.string.isRequired,
};
export default QuoteDisplay;
