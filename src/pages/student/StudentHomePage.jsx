import Card from '../../components/common/Card';
import PageHeader from '../../components/common/PageHeader';
import StatCard from '../../components/common/StatCard';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { currentUser, learningStats, notifications } from '../../mocks/userMock';
import { myCourseMilestones } from '../../mocks/coursesMock';
import { documents } from '../../mocks/documentsMock';

function StudentHomePage() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Student dashboard"
        title={'Welcome back, ' + currentUser.name.split(' ')[0]}
        description="Pick up where you left off, jump into practice, or review fresh materials from your library."
        action={<Button>Start AI session</Button>}
      />

      <section className="stats-grid">
        {learningStats.map((item) => <StatCard key={item.label} {...item} />)}
      </section>

      <section className="split-panel">
        <Card title="This week's priorities" description="A short list to keep momentum steady.">
          <div className="simple-list">
            {myCourseMilestones.map((item) => (
              <div className="list-item" key={item.id}>
                <span className="list-icon">GO</span>
                <div>
                  <strong>{item.title}</strong>
                  <div className="muted">Due {item.due} - {item.status}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Notifications" description="Recent alerts across learning and content.">
          <div className="simple-list">
            {notifications.map((note) => (
              <div className="list-item" key={note.id}>
                <span className="list-icon">!</span>
                <div>
                  <strong>{note.title}</strong>
                  <div className="muted">{note.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid-2">
        <Card title="Recent documents" description="Continue reading from your library.">
          <div className="simple-list">
            {documents.map((document) => (
              <div className="list-item" key={document.id}>
                <span className="list-icon">{document.type}</span>
                <div>
                  <strong>{document.title}</strong>
                  <div className="muted">{document.course} - {document.updatedAt}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Tutor recommendation" description="A suggested next action based on your progress.">
          <div className="section-stack">
            <Badge tone="success">Best next step</Badge>
            <h3 className="card-title">Review backpropagation with a guided explanation</h3>
            <p className="card-description">Your recent quiz score is strong, but the AI tutor flagged one focus area worth reinforcing before the next test.</p>
            <Button>Open AI tutor</Button>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default StudentHomePage;
