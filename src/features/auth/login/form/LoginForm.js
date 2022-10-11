import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../../hooks/hooks';
import { setCredentials } from '../../slices/authSlice';
import { useLoginMutation } from '../../slices/authApiSlice';
import { useNavigate } from 'react-router-dom';
import Username from './dependencies/Username';
import Password from './dependencies/Password';
import ErrMsg from './dependencies/ErrMsg';
import LoadingMsg from './dependencies/LoadingMsg';
import SignInBtn from './dependencies/SignInBtn';

const LoginForm = () => {
  const [username, setUsername] = useState('Deia.User');
  const [password, setPassword] = useState('123');
  const [showPassword, setShowPassword] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    setErrMsg('');
  }, [username, password, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...userData }));
      setPassword('');
      navigate('/coursetube');
    } catch (err) {
      if (!err) setErrMsg('No Server Response');
      else if (err?.status) setErrMsg(err.data);
      else setErrMsg('Login failed');
    }
  };

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit}
      aria-label="Login Form"
    >
      <Username
        username={username}
        setUsername={setUsername}
        setPassword={setPassword}
      />
      <Password
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <ErrMsg username={username} errMsg={errMsg} />
      <LoadingMsg isLoading={isLoading} />
      <SignInBtn />
    </form>
  );
};

export default LoginForm;
