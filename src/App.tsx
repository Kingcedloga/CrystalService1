import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { Customs } from './pages/Customs';
import { Freight } from './pages/Freight';
import { Travel } from './pages/Travel';
import { Tracking } from './pages/Tracking';
import { Quote } from './pages/Quote';
import { Partners } from './pages/Partners';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { News } from './pages/News';
import { NewsDetail } from './pages/NewsDetail';
import { Careers } from './pages/Careers';
import { Offices } from './pages/Offices';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Legal } from './pages/Legal';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Home />} />
          <Route path="/customs" element={<Customs />} />
          <Route path="/freight" element={<Freight />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;