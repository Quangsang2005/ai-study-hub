import { Link } from 'react-router-dom';
import Card from '../../components/common/Card';
import PageHeader from '../../components/common/PageHeader';
import Button from '../../components/common/Button';
import { tutorModes, chatThreads } from '../../mocks/chatMock';

function AITutorPage() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="AI tutor"
        title="Choose how you want to study"
        description="Switch between guided explanations, quiz drills, and fast summaries based on your goals."
        action={<Link to="/student/ai-tutor/chat"><Button>Open chat</Button></Link>}
      />
      <section className="grid-3">
        {tutorModes.map((mode) => (
          <Card key={mode.id} title={mode.title} description={mode.description}>
            <Button variant="secondary">Use mode</Button>
          </Card>
        ))}
      </section>
      <Card title="Recent conversations" description="Continue an earlier tutoring thread.">
        <div className="simple-list">
          {chatThreads.map((thread) => (
            <div className="list-item" key={thread.id}>
              <span className="list-icon">AI</span>
              <div>
                <strong>{thread.title}</strong>
                <div className="muted">{thread.topic} - {thread.updatedAt}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default AITutorPage;
