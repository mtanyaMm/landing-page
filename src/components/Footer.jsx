export default function Footer() {
  return (
    <footer id="footer">
      <img src="../assets/logo.svg" alt="logo" />
      <div className="footer-content">
        <h1>Join us!</h1>
        <div className="social_media">
          <img src="../assets/instagram.svg" alt="instagram" />
          <img src="../assets/tik_tok.svg" alt="tik tok" />
          <img src="../assets/facebook.svg" alt="facebook" />
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
