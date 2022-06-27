// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout, reset } from "../../features/auth/authSlice";
import logo from "../../assets/argentBankLogo.png";
import "./navbar.css";

/**
 * Navbar component
 */

function Navbar() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    // navigate("/");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="main-nav-items-container">
        {user ? (
          <>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {profile.firstName}
            </Link>
            <Link className="main-nav-item" to="/" onClick={onLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
