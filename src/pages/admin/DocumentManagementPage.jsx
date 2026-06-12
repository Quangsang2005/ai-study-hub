import Card from '../../components/common/Card';
import PageHeader from '../../components/common/PageHeader';
import Table from '../../components/common/Table';
import { documents } from '../../mocks/documentsMock';

function DocumentManagementPage() {
  return (
    <div className="page-shell">
      <PageHeader eyebrow="Documents" title="Document management" description="Audit materials by author, course, and update recency." />
      <Card title="Document list" description="Current mock library records.">
        <Table
          columns={['Document', 'Course', 'Author', 'Updated']}
          data={documents}
          renderRow={(document) => (
            <tr key={document.id}>
              <td>{document.title}</td>
              <td>{document.course}</td>
              <td>{document.author}</td>
              <td>{document.updatedAt}</td>
            </tr>
          )}
        />
      </Card>
    </div>
  );
}

export default DocumentManagementPage;
