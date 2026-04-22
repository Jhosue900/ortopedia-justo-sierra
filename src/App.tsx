import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Certifications from './components/Certifications';
import Insurers from './components/Insurers';
import Specialties from './components/Specialties';
import Team from './components/Team';
import Process from './components/Process';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Certifications />
      <Insurers />
      <Specialties />
      <Team />
      <Process />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
