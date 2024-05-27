import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// public 
import LayoutPublic from './components/public/LayoutPublic';
import SignIn from './pages/auth/public/SignIn';
import LandingPage from './pages/public/LandingPage';

// Private
import Dashboard from './pages/private/Dashboard';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';
  return isLoggedIn ? <>{children}</> : <Navigate to="/signin" />;
};

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LayoutPublic />}>
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
