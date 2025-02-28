const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="about-content-left">
                <img className="about-img" src="images/about.png" alt="about-img" />
                <img className="about-white-shadow" src="images/about-white-shadow.png" alt="shadow" />
                <img className="about-black-dot" src="images/black-dot.png" alt="dot-shape" />
                <img className="lg-round-shape" src="images/lg-round-shape.png" alt="shape" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="about-content-right">
                <h3 className="font-md">
                  Product Designer, UI/UX Designer, and Developer based in Brazil.
                </h3>
                <p className="para-2">
                  Morbi quam velit, euismod in imperdiet vitae, elementum et elit. Nunc finibus,
                  felis sit amet sollicitudin sollicitudin, nisi magna feugiat enim, in maximus urna
                  enim ac tortor. Nunc in volutpat ipsum, molestie commodo odio. Quisque auctor nisi mi.
                  Aenean venenatis sapien et interdum interdum.
                </p>
                <div className="project-document">
                  <div className="project-year">
                    <h2 className="font-lg">17+</h2>
                    <span className="para-2">Years of Experience</span>
                  </div>
                  <div className="project-completed">
                    <h2 className="font-lg">325+</h2>
                    <span className="para-2">Completed Projects</span>
                  </div>
                </div>
                <a href="#" className="btn btn--primary">
                  say hi
                  <svg width="33" height="24" viewBox="0 0 33 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M31 12.025H1" stroke="#DFE3EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M25.9502 6.00006L32.0002 12.0241L25.9502 18.0491" stroke="#DFE3EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
