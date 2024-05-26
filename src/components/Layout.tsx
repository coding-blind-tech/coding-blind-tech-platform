import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => (
  <div>
    <NavBar />
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
