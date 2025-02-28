const Testimonial = () => {
  return (
    <section className="testomonial">
      <div className="container">
        <div className="testomonial-content">
          <h3 className="font-sm">
            Client Testimonial
            <div className="deep-dot"></div>
          </h3>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="testomonial-content-left">
                {/* Quatre blocs pour les personnes */}
                {[...Array(4)].map((_, index) => (
                  <div className="testomonial-person-area" key={index}>
                    <div className="testomonial-person-content">
                      <div className="person-img">
                        <img src="images/testomonial-1.png" alt="img" />
                      </div>
                      <div className="person-text">
                        <div className="name">Sundar Pichai</div>
                        <div className="title-name">
                          CEO &amp; Founder of <span>Google</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="testomonial-content-right">
                <div className="rating-area">
                  <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3009 4.48313C15.6678 3.73997 16.7275 3.73997 17.0944 4.48313L20.0852 10.5423C20.2307 10.8371 20.5119 11.0416 20.8373 11.0891L27.5272 12.067C28.3471 12.1868 28.6739 13.1946 28.0803 13.7728L23.2411 18.4862C23.0052 18.7159 22.8976 19.0471 22.9532 19.3716L24.0951 26.0291C24.2352 26.8461 23.3777 27.4691 22.644 27.0833L16.6631 23.938C16.3717 23.7847 16.0236 23.7847 15.7322 23.938L9.75128 27.0833C9.01765 27.4691 8.16011 26.8461 8.30022 26.0291L9.44207 19.3716C9.49773 19.0471 9.39007 18.7159 9.1542 18.4862L4.315 13.7728C3.7214 13.1946 4.04819 12.1868 4.8681 12.067L11.558 11.0891C11.8834 11.0416 12.1646 10.8371 12.3101 10.5423L15.3009 4.48313Z" fill="#FF8718"/>
                  </svg>
                  <span className="para-2">5.0 Star Rating</span>
                </div>
                <h4>
                  “If you're looking for someone who will challenge your UX/UI thinking and really cut to the core of what's important for users, then Jesse is your man. On top of that, he brings a level of enthusiasm to the craft that's energizing for everyone who works with him.”
                </h4>
                <img className="testomonial-shape" src="images/testomonial-shape.png" alt="shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
