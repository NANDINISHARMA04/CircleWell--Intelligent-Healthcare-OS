
export const DEMO = {
  uid:       'demo_user_001',
  name:      'Nandini Sharma',
  email:     'nandini.sharma@email.com',
  healthId:  'CW-4589-7821',
  blood:     'B+',
  dob:       '15 Mar 1990',
  phone:     '+91 98765 43210',
  avatar:    'AM',
  stats: {
    visits:        12,
    prescriptions: 28,
    reports:        5,
    orders:         2,
  }
};

// ── Navigation config ──
const NAV_ITEMS = [
  { id: 'dashboard',    label: 'Dashboard',         icon: '🏠', href: 'dashboard.html' },
  { id: 'appointments', label: 'Appointments',       icon: '📅', href: 'appointments.html' },
  { id: 'doctors',      label: 'Find Doctors',       icon: '🔬', href: 'doctors.html' },
  { id: 'records',      label: 'Medical Vault',      icon: '🗂',  href: 'records.html' },
  { id: 'analytics',   label: 'Health Analytics',   icon: '📊', href: 'analytics.html' },
  { id: 'insurance',   label: 'Insurance & Claims', icon: '🛡',  href: 'insurance.html' },
  { id: 'family',      label: 'Family Profiles',    icon: '👨‍👩‍👧', href: 'family.html' },
  { id: 'ai',          label: 'AI Assistant',       icon: '🤖', href: 'ai.html' },
  { id: 'emergency',   label: 'Emergency',          icon: '🚨', href: 'emergency.html', danger: true },
];

// ── Sidebar builder ──
export function buildSidebar(activePage, user) {
  const initials = (user.name || 'U').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  const navHTML = NAV_ITEMS.map(item => {
    const active  = item.id === activePage ? 'active' : '';
    const danger  = item.danger ? 'nav-emergency' : '';
    return `<a href="${item.href}" class="nav-item ${active} ${danger}">
      <span class="nav-icon">${item.icon}</span>
      <span>${item.label}</span>
    </a>`;
  }).join('');

  return `<aside class="sidebar" id="sidebar">
    <div class="sidebar-logo">
      <div class="logo-text">CircleWell</div>
      <div class="logo-tag">Intelligent Healthcare OS</div>
    </div>
    <div class="sidebar-user">
      <div class="user-avatar">${initials}</div>
      <div>
        <div class="user-name">${user.name}</div>
        <div class="user-id">${user.healthId}</div>
      </div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section">Navigation</div>
      ${navHTML}
      <div class="nav-section" style="margin-top:12px;">Account</div>
      <a href="profile.html" class="nav-item ${activePage === 'profile' ? 'active' : ''}">
        <span class="nav-icon">👤</span>
        <span>My Profile</span>
      </a>
    </nav>
    <div class="sidebar-footer">
      <button onclick="window.handleLogout ? window.handleLogout() : (sessionStorage.clear(), window.location.href='../index.html')">
        🚪 Sign Out
      </button>
    </div>
  </aside>`;
}

// ── Toast ──
let _toastContainer = null;
function getToastContainer() {
  if (!_toastContainer) {
    _toastContainer = document.createElement('div');
    _toastContainer.className = 'toast-container';
    document.body.appendChild(_toastContainer);
  }
  return _toastContainer;
}

export function toast(message, type = 'success') {
  const container = getToastContainer();
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  const icon = type === 'error' ? '❌' : '✅';
  el.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(el);
  setTimeout(() => {
    el.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => el.remove(), 300);
  }, 3000);
}

// ── Modals ──
export function openModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

export function closeModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

export function setupModals() {
  // Close on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // Close buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const overlay = btn.closest('.modal-overlay');
      if (overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(o => {
        o.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  });
}

// ── Auth guard (optional) ──
export function requireAuth() {
  const user = sessionStorage.getItem('cw_user');
  const demo = sessionStorage.getItem('cw_demo');
  if (!user && !demo) {
    window.location.href = '../index.html';
    return false;
  }
  return true;
}
