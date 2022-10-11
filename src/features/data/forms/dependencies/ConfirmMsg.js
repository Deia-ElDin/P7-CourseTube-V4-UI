import PropTypes from 'prop-types';

const ConfirmMsg = ({ msg }) => {
  return msg && <p className="confirm">{msg}</p>;
};

ConfirmMsg.propTypes = {
  msg: PropTypes.string,
};

export default ConfirmMsg;
