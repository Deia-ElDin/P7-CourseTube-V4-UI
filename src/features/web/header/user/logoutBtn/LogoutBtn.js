import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../../../../hooks/hooks';
import { DisplayLogoutBtn, handleDisplayLogoutBtn } from '../userSlice';
import { useNavigate } from 'react-router-dom';

const Logoutbtn = () => {
  const logoutBtn = useAppSelector(DisplayLogoutBtn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await axios.get(
        'https://project-7-coursetube-v4-server.herokuapp.com/logout',
        {
          withCredentials: true,
        }
      );

      dispatch(handleDisplayLogoutBtn());
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    logoutBtn && (
      <button className="logout-btn form-btn" onClick={handleClick}>
        Logout
      </button>
    )
  );
};

export default Logoutbtn;
