/* eslint-disable no-unused-vars */
import { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// ✅ Lazy load the components
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));

function App() {
  const [count, setCount] = useState(0);

  return (
      <div>
          <Link to="/">Home</Link> &nbsp;&nbsp;
          <Link to="/about">About</Link>
       

        {/* ✅ Wrap lazy routes inside Suspense */}
        <Suspense fallback={<div>Loading Page...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
  );
}

export default App;
