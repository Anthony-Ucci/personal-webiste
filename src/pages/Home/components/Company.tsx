const Company = () => {
  return (
    <section className="company">
      <div className="container">
        <div className="company-content">
          <div className="row align-items-center">
            <div className="col-xl-3 px-0">
              <div className="company-content-text">
                <h3 className="font-xs">
                  I Worked with <span>289+</span> Companies all over the World.
                </h3>
              </div>
            </div>
            <div className="col-xl-9 px-0">
              <div className="company-content-social-activity">
                <div className="social-img-icon">
                  <a href="#" className="youtube">
                    <img src="images/youtube.png" alt="youtube" />
                  </a>
                </div>
                <div className="social-img-icon">
                  <a href="#" className="google youtube">
                    <img src="images/google.png" alt="google" />
                  </a>
                </div>
                <div className="social-img-icon">
                  <a href="#" className="adobe youtube">
                    <img src="images/adobe.png" alt="adobe" />
                  </a>
                </div>
                <div className="social-img-icon">
                  <a href="#" className="sketch youtube">
                    <img src="images/sketch.png" alt="sketch" />
                  </a>
                </div>
                <div className="social-img-icon">
                  <a href="#" className="sketch youtube">
                    <svg width="32" height="20" viewBox="0 0 32 20" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M29.3333 10.0249H2.66663" stroke="#684FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M24.8444 4L30.2221 10.024L24.8444 16.049" stroke="#684FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
