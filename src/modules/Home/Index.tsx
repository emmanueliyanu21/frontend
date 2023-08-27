import Footer from "../../components/Footer/Index";
import Navbar from "../../components/Navbar/Index";
import Blog from "./Blog/Index";
import HomeBanner from "./HeroBanner/Index";
import Service from "./Service/Index";
import Testimonial from "./Testimonial/Index";

function Home() {
  return (
    <>
      <div className="hero_wrapper">
        <Navbar />
        <HomeBanner />
      </div>
      <Service />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  );
}

export default Home;
