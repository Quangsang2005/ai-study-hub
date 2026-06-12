import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import StatCard from '../../components/common/StatCard';
import { learningStats } from '../../mocks/userMock';
import { courses } from '../../mocks/coursesMock';
import heroIllustration from '../../assets/hero-illustration.svg';

function LandingPage() {
  return (
    <div className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <Badge>Study smarter with AI</Badge>
          <h1>One modern hub for courses, documents, quizzes, and your AI tutor.</h1>
          <p>
            AI StudyHub helps students upload notes, chat with an AI tutor, generate practice tests,
            and track progress in a polished dashboard built for consistent daily learning.
          </p>
          <div className="hero-actions">
            <Link to="/register"><Button>Start learning</Button></Link>
            <Link to="/guide"><Button variant="ghost">See how it works</Button></Link>
          </div>
        </div>
        <div>
          <img src={heroIllustration} alt="AI StudyHub dashboard preview" />
        </div>
      </section>

      <section className="stats-grid">
        {learningStats.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </section>

      <section className="grid-3">
        <Card title="AI Tutor Chat" description="Ask questions, review notes, and get guided explanations.">
          <div className="feature-list">
            <div className="feature-item"><span className="feature-icon">01</span><div>Context-aware answers based on your uploaded documents.</div></div>
            <div className="feature-item"><span className="feature-icon">02</span><div>Generate revision prompts, explanations, and quick checks.</div></div>
          </div>
        </Card>
        <Card title="Practice Tests" description="Turn courses and notes into realistic exam-style questions.">
          <div className="feature-list">
            <div className="feature-item"><span className="feature-icon">03</span><div>Create quizzes by topic, difficulty, and question count.</div></div>
            <div className="feature-item"><span className="feature-icon">04</span><div>Review detailed results and personalized focus areas.</div></div>
          </div>
        </Card>
        <Card title="Admin Control" description="Monitor users, content, payments, and moderation in one place.">
          <div className="feature-list">
            <div className="feature-item"><span className="feature-icon">05</span><div>Manage documents, practice tests, and library health.</div></div>
            <div className="feature-item"><span className="feature-icon">06</span><div>Track revenue, settings, and review queues cleanly.</div></div>
          </div>
        </Card>
      </section>

      <section className="course-grid">
        {courses.slice(0, 3).map((course) => (
          <Card key={course.id} title={course.title} description={course.description} action={<Badge>{course.level}</Badge>}>
            <div className="section-stack">
              <div className="muted">{course.instructor} - {course.students.toLocaleString()} students</div>
              <div className="inline-filters">
                <Badge tone="success">{course.category}</Badge>
                <Badge>{course.lessons} lessons</Badge>
              </div>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}

export default LandingPage;
