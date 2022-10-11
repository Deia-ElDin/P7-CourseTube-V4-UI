import { useAppDispatch } from '../../../../../hooks/hooks';
import { handleDisplayLogoutBtn } from '../userSlice';

const UserImg = () => {
  const dispatch = useAppDispatch();

  return (
    <figure className="user" data-testid="user" onClick={() => dispatch(handleDisplayLogoutBtn())}>
      <img src={process.env.PUBLIC_URL + '/img/Deia.jpg'} alt="Deia" />
    </figure>
  );
};

export default UserImg;
