
import { NavLink, Link } from "react-router-dom";
import "./DashboardSidebar.css";

function DashboardSidebar() {
  const menuItems = [
    { icon: "⌂", name: "Dashboard", path: "/dashboard" },
    { icon: "＋", name: "Book Appointment", path: "/dashboard/book-appointment" },
    { icon: "▤", name: "My Appointments", path: "/dashboard/appointments" },
    { icon: "◷", name: "My Token", path: "/dashboard/token" },
    { icon: "✚", name: "Find Doctors", path: "/dashboard/doctors" },
    { icon: "◎", name: "My Profile", path: "/dashboard/profile" },
  ];

  return (
    <aside className="patient-sidebar">

      <Link to="/dashboard" className="patient-logo">
        <span className="patient-logo-icon">+</span>
        Medi<span>Q</span>
      </Link>

      <p className="sidebar-title">MAIN MENU</p>

      <nav className="patient-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `patient-nav-link ${isActive ? "active" : ""}`
            }
          >
            <span className="patient-nav-icon">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-support">
        <div className="support-icon">?</div>
        <h4>Need Assistance?</h4>
        <p>We're here to help you with your healthcare journey.</p>
        <button type="button">Contact Support</button>
      </div>

      <Link to="/" className="patient-logout">
        <span>⇥</span> Logout
      </Link>

    </aside>
  );
}

export default DashboardSidebar;
