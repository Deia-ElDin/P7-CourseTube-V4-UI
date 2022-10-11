import UserImg from './userImg/UserImg';
import Logoutbtn from './logoutBtn/LogoutBtn';

function User() {
  return (
    <section className="user-container">
      <UserImg />
      <Logoutbtn />
    </section>
  );
}

export default User;
