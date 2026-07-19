import Logo from "../../assets/images/logo.svg";
import Hambuger from "../../assets/images/icon-menu.svg";
import Close from "../../assets/images/icon-close.svg";
import Cart from "../../assets/images/icon-cart.svg";
import Profile from "../../assets/images/image-avatar.png";

import { useState, type FC } from "react";

import "./nav.scss";

const Nav: FC = () => {
  const [active, setActive] = useState<Boolean>(false);

  const handleClose = (): void => setActive(false);
  const handleOpen = (): void => setActive(true);

  const navClass: string = active ? "nav-body " : "hidden nav-body";
  return (
    <nav className="nav">
      <div className="nav-header">
        <button onClick={handleOpen} className="btn-nav">
          <img src={Hambuger} alt="" />
        </button>
        <h1>
          <a href="/">
            <img src={Logo} alt="Main Company Logo" className="logo" />
          </a>
        </h1>
      </div>
      <div className={navClass}>
        <button className="btn-nav" onClick={handleClose}>
          <img src={Close} />
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
          <img src={Profile} alt="" className="avatar" />
        </a>
      </div>
    </nav>
  );
};
export default Nav;
