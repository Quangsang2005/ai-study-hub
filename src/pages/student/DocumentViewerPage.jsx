import { Link, useParams } from 'react-router-dom';
import Card from '../../components/common/Card';
import PageHeader from '../../components/common/PageHeader';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { documents } from '../../mocks/documentsMock';

function DocumentViewerPage() {
  const { documentId } = useParams();
  const document = documents.find((item) => item.id === documentId) || documents[0];

  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Document viewer"
        title={document.title}
        description={document.description}
        action={<Link to="/student/library"><Button variant="ghost">Back to library</Button></Link>}
      />
      <section className="split-panel">
        <Card title="Preview" description="Mock document viewing area for the UI scaffold.">
          <div className="upload-zone" style={{ minHeight: 420, display: 'grid', placeItems: 'center' }}>
            <div>
              <div className="empty-illustration" style={{ marginBottom: 20 }}>DOC</div>
              <strong>{document.title}</strong>
              <p className="muted">Rendered viewer placeholder for {document.pages} pages.</p>
            </div>
          </div>
        </Card>
        <Card title="Details" description="Metadata and study actions.">
          <div className="section-stack">
            <div className="inline-filters">
              <Badge>{document.type}</Badge>
              <Badge tone="success">{document.category}</Badge>
            </div>
            <div className="simple-list">
              <div className="list-item"><span className="list-icon">AU</span><div>{document.author}</div></div>
              <div className="list-item"><span className="list-icon">CO</span><div>{document.course}</div></div>
              <div className="list-item"><span className="list-icon">UP</span><div>Updated {document.updatedAt}</div></div>
              <div className="list-item"><span className="list-icon">SZ</span><div>{document.size}</div></div>
            </div>
            <Button>Ask AI about this document</Button>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default DocumentViewerPage;
