import { useAppDispatch } from '../../../../../../hooks/hooks';
import { handleLogoClick } from '../../leftHeaderSlice';

function Logo() {
  const dispatch = useAppDispatch();

  return (
    <figure className="logo" onClick={() => dispatch(handleLogoClick())}>
      <img src="https://www.svgrepo.com/show/157839/youtube.svg" alt="CourseTube Logo" />
    </figure>
  );
}

export default Logo;
