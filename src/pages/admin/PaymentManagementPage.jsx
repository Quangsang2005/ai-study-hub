import Card from '../../components/common/Card';
import PageHeader from '../../components/common/PageHeader';
import Table from '../../components/common/Table';
import Badge from '../../components/common/Badge';
import { payments } from '../../mocks/adminMock';

function PaymentManagementPage() {
  return (
    <div className="page-shell">
      <PageHeader eyebrow="Payments" title="Payment management" description="Track plan purchases and billing status across the platform." />
      <Card title="Transactions" description="Mock payment records.">
        <Table
          columns={['Student', 'Amount', 'Method', 'Status', 'Date']}
          data={payments}
          renderRow={(payment) => (
            <tr key={payment.id}>
              <td>{payment.student}</td>
              <td>{payment.amount}</td>
              <td>{payment.method}</td>
              <td><Badge tone={payment.status === 'Paid' ? 'success' : 'warning'}>{payment.status}</Badge></td>
              <td>{payment.date}</td>
            </tr>
          )}
        />
      </Card>
    </div>
  );
}

export default PaymentManagementPage;
