import PropTypes from 'prop-types';

const LoadingMsg = ({ isLoading }) => {
  return isLoading && <h1 className="loading">Loading...</h1>;
};

LoadingMsg.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default LoadingMsg;
