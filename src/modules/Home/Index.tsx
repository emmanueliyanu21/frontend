import "./Home.css";

import Footer from "../../components/Footer/Index";
import Navbar from "../../components/Navbar/Index";
import Blog from "./Blog/Index";
import HomeBanner from "./HeroBanner/Index";
import Service from "./Service/Index";
import Testimonial from "./Testimonial/Index";

import { hero, serviceData, testimonial, blog, footer, navbar } from "./static-data";

function Home() {
  return (
    <>
      <div className="hero_wrapper">
        <Navbar {...navbar} />
        <HomeBanner {...hero} />
      </div>
      <Service {...serviceData} />
      <Testimonial {...testimonial} />
      <Blog {...blog} />
      <Footer {...footer} />
    </>
  );
}

export default Home;
