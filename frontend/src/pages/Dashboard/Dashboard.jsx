
import { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { icon: "▦", name: "Dashboard" },
    { icon: "▣", name: "Appointments" },
    { icon: "◷", name: "My Queue" },
    { icon: "♡", name: "Medical Records" },
    { icon: "⚙", name: "Settings" },
  ];

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">M+</div>
          <h2>Medi<span>Q</span></h2>
        </div>

        <p className="menu-heading">MENU</p>

        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={active === item.name ? "menu-item active" : "menu-item"}
              onClick={() => setActive(item.name)}
            >
              <span>{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-icon">?</div>
            <h4>Need Help?</h4>
            <p>Contact our support team anytime.</p>
            <button>Get Support</button>
          </div>

          <button className="logout-btn">
            ↪ &nbsp; Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">

        {/* Topbar */}
        <header className="topbar">
          <div>
            <h3>Patient Portal</h3>
            <p>Manage your healthcare in one place</p>
          </div>

          <div className="topbar-right">
            <button className="notification">♧</button>

            <div className="profile">
              <div className="avatar">H</div>
              <div>
                <h4>Hania Sheikh</h4>
                <p>Patient</p>
              </div>
              <span>⌄</span>
            </div>
          </div>
        </header>

        {/* Welcome */}
        <section className="welcome-section">
          <div>
            <span className="welcome-tag">✦ PATIENT DASHBOARD</span>
            <h1>Welcome back, Hania!</h1>
            <p>
              Your health matters. Manage your appointments
              and track your queue easily.
            </p>
          </div>

          <div className="welcome-decoration">
            <div className="medical-circle">✚</div>
          </div>
        </section>

        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon blue">▣</div>
            <div>
              <p>Total Appointments</p>
              <h2>12</h2>
              <small>All your bookings</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">✓</div>
            <div>
              <p>Completed Visits</p>
              <h2>08</h2>
              <small>Successfully completed</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">◷</div>
            <div>
              <p>Upcoming Visits</p>
              <h2>02</h2>
              <small>Scheduled appointments</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">♡</div>
            <div>
              <p>Health Records</p>
              <h2>05</h2>
              <small>Your medical history</small>
            </div>
          </div>

        </section>

        {/* Main Dashboard Grid */}
        <section className="content-grid">

          {/* Appointment */}
          <div className="content-card appointment-card">
            <div className="card-heading">
              <div>
                <span className="section-label">YOUR NEXT VISIT</span>
                <h2>Upcoming Appointment</h2>
              </div>
              <span className="status-badge">Confirmed</span>
            </div>

            <div className="doctor-info">
              <div className="doctor-avatar">👨‍⚕️</div>
              <div>
                <h3>Dr. Ahmed Khan</h3>
                <p>General Physician</p>
              </div>
            </div>

            <div className="appointment-details">
              <div>
                <span>▦</span>
                <div>
                  <small>Date</small>
                  <strong>25 Nov, 2026</strong>
                </div>
              </div>

              <div>
                <span>◷</span>
                <div>
                  <small>Time</small>
                  <strong>10:30 AM</strong>
                </div>
              </div>
            </div>

            <div className="appointment-footer">
              <p>Appointment ID: <strong>#MQ1025</strong></p>
              <button className="details-btn">View Details →</button>
            </div>
          </div>

          {/* Queue Status */}
          <div className="content-card queue-card">
            <div className="card-heading">
              <div>
                <span className="section-label">LIVE TRACKING</span>
                <h2>Queue Status</h2>
              </div>
              <span className="live-dot">● Live</span>
            </div>

            <div className="queue-number">
              <div>
                <small>Your Token Number</small>
                <h1>#024</h1>
              </div>
              <div className="queue-icon">♙</div>
            </div>

            <div className="queue-progress">
              <div className="progress-info">
                <span>Queue Progress</span>
                <strong>60%</strong>
              </div>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>

            <div className="queue-bottom">
              <div>
                <small>People Ahead</small>
                <h3>04</h3>
              </div>
              <div>
                <small>Estimated Wait</small>
                <h3>20 min</h3>
              </div>
            </div>

            <p className="queue-note">
              Stay updated! Your turn is getting closer.
            </p>
          </div>

        </section>

        {/* Quick Actions */}
        <section className="quick-section">
          <div className="section-title">
            <div>
              <span className="section-label">GET STARTED</span>
              <h2>Quick Actions</h2>
            </div>
          </div>

          <div className="quick-grid">
            <button className="quick-card">
              <div className="quick-icon blue">＋</div>
              <div>
                <h3>Book Appointment</h3>
                <p>Schedule a new visit</p>
              </div>
              <span>→</span>
            </button>

            <button className="quick-card">
              <div className="quick-icon green">◷</div>
              <div>
                <h3>Get a Token</h3>
                <p>Join the virtual queue</p>
              </div>
              <span>→</span>
            </button>

            <button className="quick-card">
              <div className="quick-icon purple">♡</div>
              <div>
                <h3>Medical History</h3>
                <p>View your health records</p>
              </div>
              <span>→</span>
            </button>
          </div>
        </section>

        <footer className="dashboard-footer">
          © 2026 MediQ. Your Health, Our Priority.
        </footer>

      </main>
    </div>
  );
}

export default Dashboard;
