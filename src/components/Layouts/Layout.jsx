import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header></Header>
      <main className="min-h-screen">
        {navigation.state === 'loading' ? (
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-infinity loading-lg"></span>
          </div>
        ) : (
          <Outlet></Outlet>
        )}
      </main>

      <Footer></Footer>
    </>
  );
};

export default Layout;
