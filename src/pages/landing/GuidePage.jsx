import Card from '../../components/common/Card';
import PageHeader from '../../components/common/PageHeader';

const steps = [
  ['Upload your material', 'Import notes, slides, or readings into your library.'],
  ['Study with AI', 'Use guided explanations, summaries, and practice prompts.'],
  ['Generate tests', 'Create timed quizzes from documents or courses.'],
  ['Track improvement', 'Review scores, streaks, and progress over time.'],
];

function GuidePage() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="How it works"
        title="A simple workflow for focused learning"
        description="Move from uploaded content to quiz-ready mastery in a few clean steps."
      />
      <section className="grid-2">
        {steps.map(([title, description], index) => (
          <Card key={title} title={title} description={description} action={<span className="badge badge-primary">0{index + 1}</span>} />
        ))}
      </section>
      <section className="grid-3">
        <Card title="For students" description="Browse courses, organize a library, and stay in flow with AI-guided practice." />
        <Card title="For instructors" description="Prepare learning content, review quality, and manage assessments quickly." />
        <Card title="For admins" description="Oversee platform usage, payments, moderation, and system settings in one hub." />
      </section>
    </div>
  );
}

export default GuidePage;
