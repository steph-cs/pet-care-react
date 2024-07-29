import './App.css'
import Cta from './components/Cta'
import Header from './components/Header'
import Newsletter from './components/Newsletter'
import Statistics from './components/Statistics'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AboutUs from './components/AboutUs'
import HelpSection from './components/HelpSection'

function App() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-neutral-90 ">
        <Header />
        <Cta />
        <HelpSection />
        <Statistics />
        <AboutUs />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}

export default App
