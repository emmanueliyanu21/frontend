import Footer from '../../components/Footer/Index'
import Blog  from './Blog/Index'
import HomeBanner  from './HeroBanner/Index'
import Service from './Service/Index'
import Testimonial from './Testimonial/Index'

function Home() {
  return (
    <>
    <HomeBanner />
    <Service />
    <Testimonial />
    <Blog />
    <Footer />
    </>
  )
}

export default Home