import { Link } from 'react-router-dom';
import AuthShell from '../../components/auth/AuthShell';
import Button from '../../components/common/Button';

function VerifyEmailPage() {
  return (
    <AuthShell
      title="Verify your email"
      description="We sent a confirmation link to your inbox so you can unlock your dashboard."
      footer={<p className="muted">Wrong email? <Link to="/register">Update details</Link></p>}
    >
      <div className="empty-state">
        <div className="empty-illustration">OK</div>
        <h3 className="card-title">Check your inbox</h3>
        <p className="card-description">Use the link to activate your account, then return to the platform.</p>
      </div>
      <Button className="btn-full">Resend verification email</Button>
    </AuthShell>
  );
}

export default VerifyEmailPage;
