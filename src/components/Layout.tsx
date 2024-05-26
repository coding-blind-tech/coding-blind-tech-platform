import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

const Layout: React.FC = () => (
  <div>
    <NavBar />
    <Header />
    <MainContent />
    <Footer />
  </div>
);

export default Layout;
