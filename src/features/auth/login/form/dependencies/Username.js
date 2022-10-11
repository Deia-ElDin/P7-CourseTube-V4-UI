import PropTypes from 'prop-types';

const Username = ({ username, setUsername, setPassword }) => {
  const handleUsernameChange = (e) => {
    setPassword('');
    setUsername(e.target.value);
  };

  return (
    <fieldset>
      <label htmlFor="username">Username:</label>
      <select name="username" id="username" onChange={handleUsernameChange} value={username}>
        <option value="Deia.User">Deia.User</option>
        <option value="Deia.Admin">Deia.Admin</option>
      </select>
    </fieldset>
  );
};

Username.propTypes = {
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default Username;
