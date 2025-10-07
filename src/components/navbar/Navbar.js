import sun from "./../../images/icons/Sun.svg";
import moon from "./../../images/icons/Moon.svg";

import { NavLink} from "react-router-dom";

const Navbar = () => {


  const activeLink = 'nav-list__link nav-list__link-active';
  const normalLink = 'nav-list__link';




    return (   
    <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to="/" className="logo">
              <b>Freelancer</b> portfolio
            </NavLink>

            <button className="dark-mode-btn ">
              <img className="dark-mode-btn__icon" src={sun} alt="Light mode" />
              <img
                className="dark-mode-btn__icon"
                src={moon}
                alt="Light mode"
              />
            </button>

            <ul className="nav-list">
              <li className="nav-list__item" >
                <NavLink to= "/" className={({isActive}) => {
                  return isActive ? activeLink : normalLink;
                }}>
                  Projects
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink to="/skills" className={({isActive}) => {
                  return isActive ? activeLink : normalLink;
                }}>
                Skills
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink to="/contacts" className={({isActive}) => {
                  return isActive ? activeLink : normalLink;
                }}>Contacts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>);
}
 
export default Navbar;