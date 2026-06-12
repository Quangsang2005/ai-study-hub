import { Link } from 'react-router-dom';
import Card from '../../components/common/Card';
import PageHeader from '../../components/common/PageHeader';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { practiceTests } from '../../mocks/quizMock';

function PracticeTestsPage() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Practice tests"
        title="Review, retry, or launch a new test"
        description="Mock practice assessments connected to your study content."
        action={<Link to="/student/practice-tests/generate"><Button>Generate test</Button></Link>}
      />
      <section className="grid-3">
        {practiceTests.map((test) => (
          <Card key={test.id} title={test.title} description={test.course} action={<Badge>{test.status}</Badge>}>
            <div className="section-stack">
              <div className="inline-filters">
                <Badge tone="success">{test.questions} questions</Badge>
                <Badge>{test.difficulty}</Badge>
                <Badge>{test.duration}</Badge>
              </div>
              <div className="muted">{test.score ? 'Latest score: ' + test.score + '%' : 'No score yet'}</div>
              <Link to={'/student/quiz/' + test.id}><Button>Open test</Button></Link>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}

export default PracticeTestsPage;
