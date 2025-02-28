const CallToAction = () => {
  return (
    <section className="call-action">
      <div className="container">
        <div className="call-action-content">
          <h4>Got a Project in Mind? Let's Make</h4>
          <h4>Something Awesome Together.</h4>
          <a href="#" className="btn btn--primary">
            Hire Me
            <svg width="33" height="24" viewBox="0 0 33 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M31 12.025H1" stroke="#DFE3EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M25.9502 6.00006L32.0002 12.0241L25.9502 18.0491" stroke="#DFE3EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <img className="call-ac-shape-1" src="images/call-sm-shape.png" alt="shape" />
          <img className="call-ac-dot-1" src="images/call-dot-1.png" alt="dot" />
          <img className="call-ac-dot-2" src="images/call-dot-1.png" alt="dot" />
          <img className="call-ac-shape-2" src="images/call-lg-shape.png" alt="dot" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
