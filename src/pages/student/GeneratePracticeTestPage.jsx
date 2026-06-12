import Card from '../../components/common/Card';
import Input from '../../components/common/Input';
import PageHeader from '../../components/common/PageHeader';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';

function GeneratePracticeTestPage() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Generate test"
        title="Build a custom practice set"
        description="Choose topic, question volume, and difficulty before generating a mock test."
      />
      <section className="split-panel">
        <Card title="Test settings" description="Inputs are placeholders for upcoming API integration.">
          <div className="section-stack">
            <Input label="Course or topic" placeholder="Machine Learning Foundations" />
            <Input label="Difficulty" placeholder="Intermediate" />
            <Input label="Question count" placeholder="20" />
            <Input label="Special instructions" as="textarea" placeholder="Focus on backpropagation and model evaluation" />
            <Button>Generate practice test</Button>
          </div>
        </Card>
        <Card title="Preview" description="A quick snapshot of the planned assessment.">
          <div className="section-stack">
            <div className="inline-filters">
              <Badge>20 questions</Badge>
              <Badge tone="success">Timed mode</Badge>
              <Badge>MCQ + short answer</Badge>
            </div>
            <p className="card-description">The generated assessment will pull from your selected topic, recent uploads, and preferred difficulty level once backend logic is connected.</p>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default GeneratePracticeTestPage;
