import Card from '../../components/common/Card';
import PageHeader from '../../components/common/PageHeader';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

function AdminSettingsPage() {
  return (
    <div className="page-shell">
      <PageHeader eyebrow="Settings" title="Admin settings" description="Configure platform preferences and moderation defaults." />
      <section className="grid-2">
        <Card title="Platform preferences" description="UI-only configuration fields.">
          <div className="section-stack">
            <Input label="Platform name" placeholder="AI StudyHub" />
            <Input label="Support email" placeholder="support@studyhub.com" />
            <Input label="Default reminder time" placeholder="18:00" />
            <Button>Save settings</Button>
          </div>
        </Card>
        <Card title="Moderation controls" description="Prepared for future backend rules.">
          <div className="settings-list">
            <div className="settings-item"><div><strong>Auto-flag low confidence questions</strong><div className="muted">Queue uncertain content for review.</div></div><div className="toggle" /></div>
            <div className="settings-item"><div><strong>Require payment receipts</strong><div className="muted">Add a review checkpoint for failed syncs.</div></div><div className="toggle" /></div>
            <div className="settings-item"><div><strong>Notify admins on document spikes</strong><div className="muted">Surface unusual upload activity quickly.</div></div><div className="toggle" /></div>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default AdminSettingsPage;
