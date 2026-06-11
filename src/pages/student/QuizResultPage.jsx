import Card from '../../components/common/Card';
import PageHeader from '../../components/common/PageHeader';
import StatCard from '../../components/common/StatCard';
import { quizResult } from '../../mocks/quizMock';

function QuizResultPage() {
  const stats = [
    { label: 'Score', value: quizResult.score + '%', change: quizResult.percentile },
    { label: 'Correct', value: String(quizResult.correct), change: 'Strong accuracy' },
    { label: 'Wrong', value: String(quizResult.wrong), change: 'Review notes' },
    { label: 'Time spent', value: quizResult.timeSpent, change: 'Efficient pace' },
  ];

  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Results"
        title="Your practice test summary"
        description="A mock analytics view showing performance and suggested review areas."
      />
      <section className="stats-grid">
        {stats.map((item) => <StatCard key={item.label} {...item} />)}
      </section>
      <section className="grid-2">
        <Card title="Strengths" description="Concepts you handled well.">
          <div className="simple-list">
            {quizResult.strengths.map((item) => <div key={item} className="list-item"><span className="list-icon">OK</span><div>{item}</div></div>)}
          </div>
        </Card>
        <Card title="Focus next" description="Topics worth revisiting before your next attempt.">
          <div className="simple-list">
            {quizResult.focusAreas.map((item) => <div key={item} className="list-item"><span className="list-icon">GO</span><div>{item}</div></div>)}
          </div>
        </Card>
      </section>
    </div>
  );
}

export default QuizResultPage;
