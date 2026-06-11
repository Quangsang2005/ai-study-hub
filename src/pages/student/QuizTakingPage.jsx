import { Link, useParams } from 'react-router-dom';
import Card from '../../components/common/Card';
import PageHeader from '../../components/common/PageHeader';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { practiceTests, quizQuestions } from '../../mocks/quizMock';

function QuizTakingPage() {
  const { quizId } = useParams();
  const test = practiceTests.find((item) => item.id === quizId) || practiceTests[0];
  const currentQuestion = quizQuestions[0];

  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Quiz mode"
        title={test.title}
        description="Timed question flow UI using mock content only."
        action={<Badge>{test.duration}</Badge>}
      />
      <section className="split-panel">
        <Card title="Question 1" description={currentQuestion.question}>
          <div className="section-stack">
            {currentQuestion.options.map((option) => (
              <label key={option} className="quiz-option">
                <input type="radio" name="quiz-option" />
                <span>{option}</span>
              </label>
            ))}
            <div className="inline-actions">
              <Button variant="ghost">Previous</Button>
              <Button>Save & next</Button>
            </div>
          </div>
        </Card>
        <Card title="Test overview" description="Quick status panel for the current attempt.">
          <div className="section-stack">
            <div className="simple-list">
              <div className="list-item"><span className="list-icon">QS</span><div>{test.questions} total questions</div></div>
              <div className="list-item"><span className="list-icon">DF</span><div>{test.difficulty}</div></div>
              <div className="list-item"><span className="list-icon">TM</span><div>{test.duration} remaining</div></div>
            </div>
            <Link to={'/student/quiz/' + test.id + '/result'}><Button>Finish attempt</Button></Link>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default QuizTakingPage;
