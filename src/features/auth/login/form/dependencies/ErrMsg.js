import PropTypes from 'prop-types';

const ErrMsg = ({ username, errMsg }) => {
  const adminErrMsg =
    'You are not authorized to log in with this user, kindly log in as Deia.User with the password = 123';

  return <p className="err">{username === 'Deia.Admin' ? adminErrMsg : errMsg}</p>;
};

ErrMsg.propTypes = {
  username: PropTypes.string.isRequired,
  errMsg: PropTypes.string,
};

export default ErrMsg;
