import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import ProgramDetail from './pages/ProgramDetail';
import ImpactStories from './pages/ImpactStories';
import StoryDetail from './pages/StoryDetail';
import Resources from './pages/Resources';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/our-work/:slug" element={<ProgramDetail />} />
            <Route path="/impact-stories" element={<ImpactStories />} />
            <Route path="/impact-stories/:slug" element={<StoryDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
