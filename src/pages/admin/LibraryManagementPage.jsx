import Card from '../../components/common/Card';
import PageHeader from '../../components/common/PageHeader';
import Table from '../../components/common/Table';
import { libraryOverview } from '../../mocks/adminMock';
import { documents } from '../../mocks/documentsMock';

function LibraryManagementPage() {
  return (
    <div className="page-shell">
      <PageHeader eyebrow="Library" title="Library management" description="Track inventory, formats, and recent content updates." />
      <section className="grid-2">
        <Card title="Category totals" description="Content volume by type.">
          <div className="simple-list">
            {libraryOverview.map((entry) => (
              <div key={entry.name} className="list-item"><span className="list-icon">CT</span><div>{entry.name} - {entry.count}</div></div>
            ))}
          </div>
        </Card>
        <Card title="Recent uploads" description="Latest documents entering the library.">
          <Table
            columns={['Document', 'Type', 'Updated']}
            data={documents}
            renderRow={(document) => (
              <tr key={document.id}>
                <td>{document.title}</td>
                <td>{document.type}</td>
                <td>{document.updatedAt}</td>
              </tr>
            )}
          />
        </Card>
      </section>
    </div>
  );
}

export default LibraryManagementPage;
