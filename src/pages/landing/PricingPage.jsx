import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import PageHeader from '../../components/common/PageHeader';
import Badge from '../../components/common/Badge';

const plans = [
  { name: 'Starter', price: '$0', detail: 'For first-time learners', perks: ['Course browsing', 'Basic AI chat', '3 practice tests / month'] },
  { name: 'Pro', price: '$24', detail: 'For serious students', perks: ['Unlimited library uploads', 'Advanced tutor modes', 'Full quiz analytics'], featured: true },
  { name: 'Team', price: '$89', detail: 'For schools and academies', perks: ['Admin dashboard', 'Shared content controls', 'Payment and moderation tools'] },
];

function PricingPage() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Pricing"
        title="Choose the plan that fits your study rhythm"
        description="A simple set of plans for solo learners and organizations alike."
      />
      <section className="pricing-grid">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            title={plan.name}
            description={plan.detail}
            action={plan.featured ? <Badge>Most popular</Badge> : null}
            className={plan.featured ? 'featured-plan' : ''}
          >
            <div className="section-stack">
              <div className="metric-value">{plan.price}<span className="muted" style={{ fontSize: '1rem' }}>/mo</span></div>
              <div className="simple-list">
                {plan.perks.map((perk) => (
                  <div key={perk} className="list-item"><span className="list-icon">OK</span><div>{perk}</div></div>
                ))}
              </div>
              <Button>{plan.featured ? 'Start Pro' : 'Choose plan'}</Button>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}

export default PricingPage;
