import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = [];
    setIsLoggedIn(isAuthenticated);
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      <nav>
        <div className="leftside">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Link to="/account">Account</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="rightside"></div>
      </nav>
      {}
      {isLoggedIn && (
        <div>
          {}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Nav;
