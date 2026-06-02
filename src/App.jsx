import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import SensorInnovation from './components/SensorInnovation'
import CaregiverDemo from './components/CaregiverDemo'
import Inspiration from './components/Inspiration'
import DesignProcess from './components/DesignProcess'
import Differentiator from './components/Differentiator'
import Gallery from './components/Gallery'
import FuturePlans from './components/FuturePlans'
import Awards from './components/Awards'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <SensorInnovation />
        <CaregiverDemo />
        <Inspiration />
        <DesignProcess />
        <Differentiator />
        <Gallery />
        <FuturePlans />
        <Awards />
      </main>
      <Footer />
    </div>
  )
}
