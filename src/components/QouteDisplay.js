import React from 'react';
import PropTypes from 'prop-types';

function QuoteDisplay({ quote }) {
  return <div>{quote}</div>;
}
QuoteDisplay.propTypes = {
  quote: PropTypes.string.isRequired,
};
export default QuoteDisplay;
