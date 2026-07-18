import Logo from "../../assets/images/logo.svg";
import Hambuger from "../../assets/images/icon-menu.svg";
import Close from "../../assets/images/icon-close.svg";
import Cart from "../../assets/images/icon-cart.svg";
import Profile from "../../assets/images/image-avatar.png";

import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-header">
        <button>
          <img src={Hambuger} alt="" />
        </button>
        <a href="/">
          <img src={Logo} alt="Main Company Logo" />
        </a>
      </div>
      <div className="nav-body">
        <button>
          <img src={Close} />{" "}
        </button>
        <ul className="nav-items">
          <li>
            <a href="#!">Collections</a>
          </li>
          <li>
            <a href="#!">Men</a>
          </li>
          <li>
            <a href="#!">Women</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="nav-footer">
        <a href="#!">
          <img src={Cart} alt="" />
        </a>
        <a href="#!">
          <img src={Profile} alt="" />
        </a>
      </div>
    </nav>
  );
};
export default Nav;
