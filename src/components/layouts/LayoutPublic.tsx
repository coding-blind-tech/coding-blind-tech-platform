import React from 'react';
import NavBar from '../common/NavBar';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Outlet } from 'react-router-dom';

const LayoutPublic: React.FC = () => (
  <div>
    <NavBar />
    <Outlet />
    <Footer />
  </div>
);

export default LayoutPublic;
