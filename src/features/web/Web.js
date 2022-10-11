import useFetchData from '../../hooks/useFetchData';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import WebBody from './webBody/WebBody';

const Web = () => {
  useFetchData();

  return (
    <section>
      <Header />
      <Sidebar />
      <WebBody />
    </section>
  );
};

export default Web;
