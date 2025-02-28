const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-content">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-0">
              <div className="banner-content-left">
                <h3 className="font-xl">
                  Hello, I’m Anthony, a DevOps <span>Engineer.</span>
                </h3>
                <p>
                  DevOps Engineer, Software Developer, and Cloud Architect based in Belgium.
                  Over the past 5 years, as a student, I’ve worked with many technologies on
                  many projects and up-and-coming startups.
                </p>
                <a href="#" className="btn btn--primary">Hire Me</a>
                <a href="#" className="btn btn--secondary">View work</a>
                <div className="follow-content">
                  <span>Follow me on</span>
                  <div className="follow-content-social">
                    <a href="#" className="social social-square">
                      {/* Exemple d’icône SVG */}
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0.000976562C4.48594 0.000976562 0 4.48692 0 10.0009C0 15.5148 4.48594 20.0008 10 20.0008C15.5141 20.0008 20 15.5148 20 10.0009C20 4.48692 15.5141 0.000976562 10 0.000976562ZM16.5166 4.71716C17.6392 6.09905 18.3304 7.84326 18.3879 9.74462C16.3083 9.3141 14.4252 9.36462 12.7629 9.69056C12.4619 8.98667 12.1503 8.31606 11.8358 7.68228C13.6462 6.90238 15.2223 5.90627 16.5166 4.71716Z" fill="currentColor"/>
                      </svg>
                    </a>
                    {/* Tu peux ajouter d’autres icônes ici */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-0">
              <div className="banner-content-right">
                <img src="images/banner.png" alt="banner-img" />
                <img className="dot-shadow-img" src="images/dot-shadow-img.png" alt="dot-shadow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
