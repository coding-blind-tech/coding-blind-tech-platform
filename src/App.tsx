import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import LayoutPublic from './components/layouts/LayoutPublic';
import LayoutPrivate from './components/layouts/LayoutPrivate';
import LandingPage from './pages/public/LandingPage';
import SignIn from './pages/auth/SignIn';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Confirmation from './pages/auth/Confirmation';
import Dashboard from './pages/private/Dashboard';

const App: React.FC = () => {
  const isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';

  const PublicRoute: React.FC = () => (
    <LayoutPublic>
      <Outlet />
    </LayoutPublic>
  );

  const PrivateRoute: React.FC = () => (
    isLoggedIn ? <LayoutPrivate><Outlet /></LayoutPrivate> : <Navigate to="/signin" />
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<LandingPage />} />
          <Route path="signin" element={isLoggedIn ? <Navigate to="/private/dashboard" /> : <SignIn />} />
          <Route path="register" element={isLoggedIn ? <Navigate to="/private/dashboard" /> : <Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="confirmation" element={<Confirmation />} />
        </Route>
        <Route path="/private" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
