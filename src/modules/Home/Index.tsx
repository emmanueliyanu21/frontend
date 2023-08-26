import { Footer } from '../../components/Footer/Footer'
import { Blog } from './Blog/Blog'
import { HomeBanner } from './HeroBanner/HeroBanner'
import { Service } from './Service/Service'
import { Testimonial } from './Testimonial/Testimonial'

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