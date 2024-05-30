import React from 'react';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import UserToolbar from '../common/private/UserToolbar';
import { Outlet } from 'react-router-dom';

const LayoutPrivate: React.FC = () => (
  <div>
    <NavBar />
    <UserToolbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default LayoutPrivate;
