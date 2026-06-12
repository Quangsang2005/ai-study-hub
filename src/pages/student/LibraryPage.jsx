import PageHeader from '../../components/common/PageHeader';
import Badge from '../../components/common/Badge';
import DocumentCard from '../../components/student/DocumentCard';
import { documentCategories, documents } from '../../mocks/documentsMock';

function LibraryPage() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Library"
        title="Your uploaded study materials"
        description="Browse notes, summaries, and research assets across every subject."
      />
      <div className="inline-filters">
        {documentCategories.map((category) => <Badge key={category}>{category}</Badge>)}
      </div>
      <section className="grid-3">
        {documents.map((document) => <DocumentCard key={document.id} document={document} />)}
      </section>
    </div>
  );
}

export default LibraryPage;
