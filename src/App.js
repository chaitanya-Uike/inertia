import './App.css';
import Navbar from './components/navbar'
import Home from './pages/Home'
import Map from './pages/Map'
import Footer from './components/footer'
import About from './pages/About';
import LeaderBoard from './pages/LeaderBoard';
import Schedule from './pages/Schedule';
import Events from './pages/Events';
import {useLocation,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useEffect} from 'react';


const App=()=> {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(location);
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/event" element={<Events />} />
        <Route exact path="/leaderboard" element={<LeaderBoard />} />
        <Route exact path="/schedule" element={<Schedule />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
