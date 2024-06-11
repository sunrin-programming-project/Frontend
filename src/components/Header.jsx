import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/header.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Header = ({ onSearch }) => {
  const [isLogined, setIsLogined] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const backend = `${import.meta.env.VITE_APP_BACKEND_URL}/auth/status`;
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(backend, {
          withCredentials: true,
        });
        setIsLogined(response.data.isAuthenticated);
      } catch (error) {
        console.error("Error checking auth status:", error);
        setIsLogined(false);
      }
    };

    checkAuthStatus();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <header className="header">
      <div className="left-side">
        <h1>
          <Link to="/">ConHub</Link>
        </h1>
      </div>
      <div className="search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input placeholder="어떤 대회를 찾으세요?" type="text" value={searchTerm} onChange={handleSearch} />
        {searchTerm && <FontAwesomeIcon icon={faXmark} onClick={clearSearch} />}
      </div>

      <div className="right-side">
        {isLogined ? (
          <div className="profile">
            <a href="http://localhost:3000/auth/logout">Logout</a>
            <span> | </span>
            <Link to="/profile">Profile</Link>
          </div>
        ) : (
          <div className="profile">
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
