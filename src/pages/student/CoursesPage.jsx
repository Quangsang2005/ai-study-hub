import PageHeader from '../../components/common/PageHeader';
import Badge from '../../components/common/Badge';
import CourseCard from '../../components/student/CourseCard';
import { courses, courseCategories } from '../../mocks/coursesMock';

function CoursesPage() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Courses"
        title="Browse curated learning tracks"
        description="Explore popular courses and continue building your study plan."
      />
      <div className="inline-filters">
        {courseCategories.map((category) => <Badge key={category}>{category}</Badge>)}
      </div>
      <section className="course-grid">
        {courses.map((course) => <CourseCard key={course.id} course={course} />)}
      </section>
    </div>
  );
}

export default CoursesPage;
