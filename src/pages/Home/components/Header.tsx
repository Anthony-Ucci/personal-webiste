const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="header-content">
          <a href="#" className="logo">
            <img src="images/logo.png" alt="logo" />
          </a>
          <div className="header-content-menu">
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
