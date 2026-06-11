import { Link } from 'react-router-dom';
import AuthShell from '../../components/auth/AuthShell';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

function RegisterPage() {
  return (
    <AuthShell
      title="Create your account"
      description="Set up your AI StudyHub workspace and start learning with mock-powered UI today."
      footer={<p className="muted">Already registered? <Link to="/login">Log in</Link></p>}
    >
      <Input label="Full name" placeholder="Lena Parker" />
      <Input label="Email address" placeholder="you@example.com" />
      <Input label="Password" type="password" placeholder="Create a password" />
      <Input label="Confirm password" type="password" placeholder="Repeat your password" />
      <Button className="btn-full">Create account</Button>
    </AuthShell>
  );
}

export default RegisterPage;
