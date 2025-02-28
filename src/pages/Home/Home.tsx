import Header from "./components/Header.tsx";
import Banner from "./components/Banner.tsx";
import About from "./components/About.tsx";
import Service from "./components/Service.tsx";
import Project from "./components/Project.tsx";
import Company from "./components/Company.tsx";
import CallToAction from "./components/CallToAction.tsx";
import Testimonial from "./components/Testimonial.tsx";
import Blog from "./components/Blog.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Service />
      <Project />
      <Company />
      <CallToAction />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;