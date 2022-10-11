import PropTypes from 'prop-types';

const ErrMsg = ({ msg }) => {
  return msg && <p className="err">{msg}</p>;
};

ErrMsg.propTypes = {
  msg: PropTypes.string,
};

export default ErrMsg;
