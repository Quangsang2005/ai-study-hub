import { Link } from 'react-router-dom';
import AuthShell from '../../components/auth/AuthShell';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      description="Sign in to continue your study sessions, quizzes, and AI tutor conversations."
      footer={<p className="muted">Need an account? <Link to="/register">Create one</Link></p>}
    >
      <Input label="Email address" placeholder="you@example.com" />
      <Input label="Password" type="password" placeholder="Enter your password" />
      <div className="page-header-row">
        <label className="muted"><input type="checkbox" /> Remember me</label>
        <Link to="/forgot-password" className="muted">Forgot password?</Link>
      </div>
      <Button className="btn-full">Log in</Button>
    </AuthShell>
  );
}

export default LoginPage;
