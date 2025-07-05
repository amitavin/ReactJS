import {APP_LOGO_URL} from "../utils/constants";


const Header = () => {
  return (
    <div className="header">
      <div className="app-logo">
        <img className="logo" src={APP_LOGO_URL} alt="React Logo" />
      </div>
        <div className="app-nav-items">
            <ul>
                <li><a>Home</a> </li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
                <li><a>Cart🛒</a></li>
            </ul>
            </div>
    </div>
  );
}

export default Header;