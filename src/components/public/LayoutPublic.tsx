import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const LayoutPublic: React.FC = () => (
  <div>
    <NavBar />
    <Header title="Welcome to Coding Blind Tech!" />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default LayoutPublic;
