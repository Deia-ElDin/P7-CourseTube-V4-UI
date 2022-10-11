import { useAppSelector } from './hooks/hooks';
import { Routes, Route } from 'react-router-dom';
import { ActiveTheme } from './features/web/header/rightHeader/rightHeaderSlice';
import useWindowSize from './hooks/useWindowSize';
import Layout from './components/Layout';
import RequiredAuth from './features/auth/authorization/RequiredAuth';
import Login from './features/auth/login/Login';
import Web from './features/web/Web';
import './sass/App.css';

function App() {
  const theme = useAppSelector(ActiveTheme);

  useWindowSize();

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <main className="App" id={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route index element={<Login />}></Route>
          {/* protected routes */}
          <Route element={<RequiredAuth />}>
            <Route path="coursetube" element={<Web />}></Route>
          </Route>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
