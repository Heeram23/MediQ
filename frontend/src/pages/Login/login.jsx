
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">

        <div className="brand">
          <svg viewBox="0 0 100 90" className="brand-heart">
            <path
              d="M50 83 C40 72 5 47 5 27 C5 4 33 -3 50 18 C67 -3 95 4 95 27 C95 47 60 72 50 83Z"
              fill="white"
            />
            <path
              d="M10 43 H32 L40 25 L49 59 L59 34 L65 43 H90"
              fill="none"
              stroke="#0865c9"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </svg>

          <div>
            <h1>MediQ</h1>
            <p>Your Health, Our Priority</p>
          </div>
        </div>

        <div className="brand-line"></div>

        <div className="left-content">
          <h2>
            Better Healthcare
            <br />
            for a <span>Healthier</span> You
          </h2>

          <p className="intro">
            Book appointments, consult doctors and
            <br />
            take care of your health — all in one place.
          </p>

          <div className="features">

            <div className="feature">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="16" rx="2"/>
                  <path d="M7 2v6 M17 2v6 M3 10h18 M8 14h2 M14 14h2"/>
                </svg>
              </div>
              <span>Easy Appointments</span>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="7" r="4"/>
                  <path d="M4 22v-2a8 8 0 0 1 16 0v2 M9 15l3 3 3-3"/>
                </svg>
              </div>
              <span>Expert Doctors</span>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <span>Secure & Reliable</span>
            </div>

          </div>

          <div className="mission-box">
            <svg viewBox="0 0 24 24">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>
            </svg>
            <span>Your Health<br />Our Mission</span>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">

        <div className="login-form-container">

          <div className="login-heading">
            <h2>Welcome Back!</h2>
            <p>Login to your MediQ account</p>
            <div className="heading-line"></div>
          </div>

          <form onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="input-box">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m3 6 9 7 9-7"/>
              </svg>

              <input
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="input-box">
              <svg viewBox="0 0 24 24">
                <rect x="4" y="10" width="16" height="12" rx="2"/>
                <path d="M8 10V6a4 4 0 0 1 8 0v4"/>
                <circle cx="12" cy="16" r="1"/>
              </svg>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* REMEMBER / FORGOT */}
            <div className="login-options">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember Me
              </label>

              <Link to="/forgot-password">
                Forgot Password?
              </Link>
            </div>

            {/* LOGIN BUTTON */}
            <button type="submit" className="login-btn">
              <span>⇥</span> Login
            </button>

          </form>

          {/* OR DIVIDER */}
          <div className="or-divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="social-buttons">
            <button type="button" className="social-btn">
              <b className="google-icon">G</b>
              Continue with Google
            </button>

            <button type="button" className="social-btn">
              <b className="facebook-icon">f</b>
              Continue with Facebook
            </button>
          </div>

          {/* BOTTOM SIGNUP ONLY */}
          <div className="bottom-signup">
            Don't have an account?
            <Link to="/signup">Sign Up →</Link>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Login;
