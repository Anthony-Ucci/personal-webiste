const Project = () => {
  return (
    <section className="project">
      <div className="container">
        <h4 className="font-sm">
          My Selected Work
          <div className="deep-dot"></div>
        </h4>
        <div className="row">
          {/* Exemple de 6 projets */}
          {[1, 2, 3, 4, 5, 6].map((_item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 project-content" key={index}>
              <div className="project-work">
                <div className="project-work-image">
                  <img src={`images/project-img-${(index % 3) + 1}.jpg`} alt="" />
                </div>
                <div className="project-work-text">
                  <h5 className="font-mini"><a href="#">Project Title {index + 1}</a></h5>
                  <a href="#" className="right-arrow-icon">
                    <span>View Project</span>
                    <svg width="36" height="24" viewBox="0 0 36 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M33 12.03H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M27.95 4.80005L34 12.0288L27.95 19.2588" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
