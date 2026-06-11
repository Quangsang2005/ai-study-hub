import { Link } from 'react-router-dom';
import AuthShell from '../../components/auth/AuthShell';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Reset your password"
      description="Enter your email and we will send a reset link."
      footer={<p className="muted">Remembered it? <Link to="/login">Go back to login</Link></p>}
    >
      <Input label="Email address" placeholder="you@example.com" />
      <Button className="btn-full">Send reset link</Button>
    </AuthShell>
  );
}

export default ForgotPasswordPage;
