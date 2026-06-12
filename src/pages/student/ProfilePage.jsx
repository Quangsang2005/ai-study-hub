import Card from '../../components/common/Card';
import PageHeader from '../../components/common/PageHeader';
import Avatar from '../../components/common/Avatar';
import Badge from '../../components/common/Badge';
import { currentUser } from '../../mocks/userMock';

function ProfilePage() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Profile"
        title="Student profile"
        description="A clean overview of identity, study streak, and academic details."
      />
      <section className="grid-2">
        <Card title="Personal details" description="Mock student identity data.">
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Avatar name={currentUser.name} size={72} />
            <div>
              <h3 className="card-title">{currentUser.name}</h3>
              <div className="muted">{currentUser.email}</div>
              <div className="inline-filters" style={{ marginTop: 12 }}>
                <Badge>{currentUser.level}</Badge>
                <Badge tone="success">{currentUser.major}</Badge>
              </div>
            </div>
          </div>
        </Card>
        <Card title="Learning stats" description="Current momentum and overall progress.">
          <div className="simple-list">
            <div className="list-item"><span className="list-icon">PT</span><div>{currentUser.points} points earned</div></div>
            <div className="list-item"><span className="list-icon">ST</span><div>{currentUser.streakDays} day streak</div></div>
            <div className="list-item"><span className="list-icon">HR</span><div>{currentUser.totalStudyHours} total study hours</div></div>
            <div className="list-item"><span className="list-icon">CR</span><div>{currentUser.completedCourses} completed courses</div></div>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default ProfilePage;
