import { Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

function App() {
  return (
    <Routes>
      {/* Public Routes wrapped in PublicLayout */}
      <Route path="/" element={<PublicLayout />}>
        {/* Redirect home to login since other pages are placeholders for now */}
        <Route index element={<Navigate to="/login" replace />} />
        
        <Route path="login" element={<LoginPage />} />
        
        {/* Temporary placeholder routes to prevent router errors when clicking nav links */}
        <Route
          path="features"
          element={
            <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 600 }}>
              Features Page (Coming Soon)
            </div>
          }
        />
        <Route
          path="guide"
          element={
            <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 600 }}>
              Guide Page (Coming Soon)
            </div>
          }
        />
        <Route
          path="pricing"
          element={
            <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 600 }}>
              Pricing Page (Coming Soon)
            </div>
          }
        />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="forgot-password"
          element={
            <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 600 }}>
              Forgot Password Page (Coming Soon)
            </div>
          }
        />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
