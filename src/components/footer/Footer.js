import "./style.css"

import vk from "./../../images/icons/vk.svg"
import instagram from "./../../images/icons/instagram.svg"
import twitter from "./../../images/icons/twitter.svg"
import gitHub from "./../../images/icons/gitHub.svg"
import linkedIn from "./../../images/icons/linkedIn.svg"

const Footer = () => {
    return ( 
         <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#!">
                  <img src={vk} alt="Vk" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={instagram} alt="Instagram" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={twitter} alt="Twitter" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={gitHub} alt="GitHub" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={linkedIn} alt="IN" />
                </a>
              </li>
            </ul>

            <div className="copyright">
              <p>© 2025 frontend-dev.com</p>
            </div>
          </div>
        </div>
      </footer>

     );
}
 
export default Footer;