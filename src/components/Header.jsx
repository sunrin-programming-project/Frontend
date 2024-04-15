import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/header.scss";

const Header = () => {
  return (
    <>
      <header>
        <div className="left-side">
          <h1>ConHub</h1>
        </div>
        <div className="search-bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input placeholder="어떤 대회를 찾으세요?" type="text" />
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="right-side">
          <p>Login</p>
        </div>
      </header>
    </>
  );
};

export default Header;
