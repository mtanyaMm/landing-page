import logo from "../assets/logo.svg";
import instagram from "../assets/instagram.svg";
import tik_tok from "../assets/tik_tok.svg";
import facebook from "../assets/facebook.svg";

export default function Footer() {
  return (
    <footer id="footer">
      <img src={logo} alt="logo" />
      <div className="footer-content">
        <h1>Join us!</h1>
        <div className="social_media">
          <img src={instagram} alt="instagram" />
          <img src={tik_tok} alt="tik tok" />
          <img src={facebook} alt="facebook" />
        </div>
        <nav className="menu footer-menu">
          <li>
            <a href="#advantages">Advantages</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#prices">Price</a>
          </li>
          <li>
            <a href="#feedbacks">Feedbacks</a>
          </li>
          <li>
            <a href="#footer">Contacts</a>
          </li>
        </nav>
      </div>
      <div></div>
    </footer>
  );
}
