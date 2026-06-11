import { NavLink } from 'react-router-dom';
import logoImg from '../../assets/images/logo.jpg';
import { currentUser } from '../../mocks/userMock';

const mainItems = [
  {
    slug: 'home',
    label: 'Home',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
  },
  {
    slug: 'ai-tutor',
    label: 'AI Tutor',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
  },
  {
    slug: 'library',
    label: 'Library',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
  },
  {
    slug: 'practice-tests',
    label: 'Practice Tests',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        <path d="M9 14h6"></path>
        <path d="M9 18h6"></path>
        <path d="M9 10h.01"></path>
      </svg>
    ),
  },
];

function StudentSidebar() {
  return (
    <aside className="dashboard-sidebar admin-sidebar">
      <div className="admin-sidebar-shell">
        <div className="admin-sidebar-brand" style={{ marginBottom: '24px' }}>
          <span className="admin-sidebar-brand-mark">
            <img src={logoImg} alt="StudyHub Logo" className="admin-brand-logo" />
          </span>
        </div>

        <div style={{ marginBottom: '8px', paddingLeft: '10px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', color: '#1a1926' }}>Main</span>
        </div>

        <nav className="sidebar-menu admin-sidebar-menu">
          {mainItems.map((item) => (
            <NavLink
              key={item.slug}
              to={'/student/' + item.slug}
              className={({ isActive }) => ['sidebar-link', 'admin-sidebar-link', isActive ? 'active' : ''].join(' ').trim()}
            >
              <span className="sidebar-icon admin-sidebar-icon">{item.icon}</span>
              <span className="admin-sidebar-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div style={{ marginTop: '24px', marginBottom: '8px', paddingLeft: '10px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', color: '#1a1926' }}>History</span>
        </div>
        <nav className="sidebar-menu admin-sidebar-menu">
          {/* History items can go here later */}
        </nav>

        <div className="admin-sidebar-footer" style={{ borderTop: 'none', paddingTop: '10px', marginTop: 'auto' }}>
          <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ width: '100%', height: '1px', background: '#efedf4', marginBottom: '10px' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
              <NavLink to="/student/profile" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#1a1926', cursor: 'pointer' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #efedf4', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img src={logoImg} alt="Profile" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                </div>
                <span style={{ fontSize: '12px', fontWeight: '600' }}>Profile</span>
              </NavLink>
              
              <button style={{ background: '#eef1f8', color: '#5046e5', border: 'none', borderRadius: '12px', padding: '6px 10px', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}>
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default StudentSidebar;
