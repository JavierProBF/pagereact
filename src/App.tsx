import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Init from './pages/init';
import About from './pages/about';
import Onboarding from './pages/onboarding';
import ErrorPage from './pages/error';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Init />} />
        <Route path="/about" element={<About />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
