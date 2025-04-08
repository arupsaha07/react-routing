import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UserContextProvider from './context/UserContextProvider';
import { ThemeProvider } from './context/Theme';

function Layout() {
  return (
    // <ThemeProvider>
      <UserContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </UserContextProvider>
    // </ThemeProvider>
  );
}

export default Layout;
