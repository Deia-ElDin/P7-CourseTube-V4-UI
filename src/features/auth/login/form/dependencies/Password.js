import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Password = ({ password, setPassword, showPassword, setShowPassword }) => {
  return (
    <fieldset className="password-fieldset">
      <div className="password-div">
        <label htmlFor="password">Password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {showPassword ? (
          <AiFillEyeInvisible
            className="password-icon"
            data-testid="hide-password-icon"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <AiFillEye
            className="password-icon"
            data-testid="show-password-icon"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
    </fieldset>
  );
};

Password.propTypes = {
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  setShowPassword: PropTypes.func.isRequired,
};

export default Password;
