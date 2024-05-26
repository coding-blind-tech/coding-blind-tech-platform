import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import SignIn from './pages/auth/SignIn';
import LandingPage from './pages/LandingPage';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';
  return isLoggedIn ? <>{children}</> : <Navigate to="/signin" />;
};

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="signin" element={<SignIn />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  </Router>
);

export default App;
