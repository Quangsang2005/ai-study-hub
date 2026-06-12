import Card from '../../components/common/Card';
import PageHeader from '../../components/common/PageHeader';

const items = [
  ['Email notifications', 'Receive updates for quizzes, uploads, and AI recommendations.'],
  ['Study reminders', 'Get scheduled nudges to stay on track.'],
  ['Dark summary export', 'Use alternate formatting for generated notes.'],
  ['Auto-save chats', 'Keep AI tutor sessions in your history.'],
];

function StudentSettingsPage() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Settings"
        title="Customize your learning workspace"
        description="Preference toggles and account controls prepared for future integration."
      />
      <Card title="Preferences" description="Student-side settings">
        <div className="settings-list">
          {items.map(([title, description]) => (
            <div key={title} className="settings-item">
              <div>
                <strong>{title}</strong>
                <div className="muted">{description}</div>
              </div>
              <div className="toggle" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default StudentSettingsPage;
