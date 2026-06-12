import Card from '../../components/common/Card';
import PageHeader from '../../components/common/PageHeader';
import Table from '../../components/common/Table';
import Badge from '../../components/common/Badge';
import { practiceTests } from '../../mocks/quizMock';

function PracticeTestManagementPage() {
  return (
    <div className="page-shell">
      <PageHeader eyebrow="Practice tests" title="Practice test management" description="Review generated tests and their current state." />
      <Card title="Assessment catalog" description="All mock practice tests.">
        <Table
          columns={['Title', 'Course', 'Difficulty', 'Status']}
          data={practiceTests}
          renderRow={(test) => (
            <tr key={test.id}>
              <td>{test.title}</td>
              <td>{test.course}</td>
              <td>{test.difficulty}</td>
              <td><Badge>{test.status}</Badge></td>
            </tr>
          )}
        />
      </Card>
    </div>
  );
}

export default PracticeTestManagementPage;
