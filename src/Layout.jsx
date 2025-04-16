import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UserContextProvider from './context/UserContextProvider';
import Sidebar from './components/Sidebar/Sidebar';
// import { ThemeProvider } from './context/Theme';

function Layout() {
  return (
    <div>
      {/* <ThemeProvider> */}
      <UserContextProvider>
        <div className="flex h-screen">
          <Sidebar />
          <div className="ms-64 flex-1">
            <Header />
            <main className="h-full">
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      </UserContextProvider>
      {/* </ThemeProvider> */}

    </div>
  );
}

export default Layout;

// Step 2: Wrap all the children inside a Provider 