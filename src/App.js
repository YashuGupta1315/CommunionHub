import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./pages/Footer";
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Show loader when route changes
    const timer = setTimeout(() => setLoading(false), 1000); // Simulated load time

    return () => clearTimeout(timer); // Cleanup
  }, [location.pathname]); 

  return (
    <>
      {loading && <Loader />}
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
