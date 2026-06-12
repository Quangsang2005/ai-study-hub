import { Link, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Button from '../../components/common/Button';

function SelectContextPage() {
  const navigate = useNavigate();

  const handleSelectContext = () => {
    navigate('/student/ai-tutor/chat');
  };

  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="New Chat"
        title="Select Context"
        description="Choose what materials the AI Tutor should focus on for this session."
      />
      
      <div style={{ maxWidth: '800px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '24px', margin: '0 auto' }}>
        <h3 style={{ marginTop: 0 }}>Available Documents</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Select one or more documents from your library.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', border: '1px solid var(--border)', borderRadius: '8px', cursor: 'pointer' }}>
            <input type="checkbox" />
            <div>
              <div style={{ fontWeight: 'bold' }}>Introduction to Computer Science</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Course Material • 24 Pages</div>
            </div>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', border: '1px solid var(--border)', borderRadius: '8px', cursor: 'pointer' }}>
            <input type="checkbox" />
            <div>
              <div style={{ fontWeight: 'bold' }}>OOP Chapter 2.pdf</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Uploaded Document • 12 Pages</div>
            </div>
          </label>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
          <Link to="/student/ai-tutor">
            <Button variant="secondary">Cancel</Button>
          </Link>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button variant="secondary" onClick={handleSelectContext}>Skip Context</Button>
            <Button onClick={handleSelectContext}>Start Chat with Context</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectContextPage;
