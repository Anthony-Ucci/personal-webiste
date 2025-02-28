const Service = () => {
  return (
    <section className="service">
      <div className="container">
        <div className="service-text">
          <h4 className="font-sm">
            My Service
            <div className="deep-dot"></div>
          </h4>
        </div>
        <div className="row">
          {/* Quatre cartes de service */}
          {[1, 2, 3, 4].map((_item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className="service-content-area">
                <div className="layer-svg">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.33325L3.33334 11.6666L20 19.9999L36.6667 11.6666L20 3.33325Z" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.33334 28.3333L20 36.6666L36.6667 28.3333" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.33334 20L20 28.3333L36.6667 20" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-xs">UI/UX</p>
                <p className="font-xs">DESIGN</p>
                <span className="light-dot"></span>
                <a href="#" className="right-arrow-icon">
                  <span>Discuss now</span>
                  <svg width="36" height="24" viewBox="0 0 36 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M33 12.03H3" stroke="#0A1931" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27.95 4.80005L34 12.0288L27.95 19.2588" stroke="#0A1931" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
