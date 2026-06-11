import { Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import VerifyEmailPage from './pages/auth/VerifyEmailPage';
import LandingPage from './pages/landing/LandingPage';
import GuidePage from './pages/landing/GuidePage';
import PricingPage from './pages/landing/PricingPage';

function App() {
  return (
    <Routes>
      {/* Public Routes wrapped in PublicLayout */}
      <Route path="/" element={<PublicLayout />}>
        {/* Render the main Landing Page as the home view */}
        <Route index element={<LandingPage />} />
        
        <Route path="login" element={<LoginPage />} />
        
        {/* Redirect features to index since the Landing page serves as the Features showcase */}
        <Route path="features" element={<Navigate to="/" replace />} />
        
        {/* Active pages for guide and pricing */}
        <Route path="guide" element={<GuidePage />} />
        <Route path="pricing" element={<PricingPage />} />
        
        <Route path="register" element={<RegisterPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="verify-email" element={<VerifyEmailPage />} />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
