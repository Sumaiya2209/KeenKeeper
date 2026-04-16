import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;