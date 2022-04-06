import './App.css';
import Navbar from './components/navbar'
import Home from './pages/Home'
import Map from './pages/Map'
import Footer from './components/footer'
import About from './pages/About';
import LeaderBoard from './pages/LeaderBoard';
import Schedule from './pages/Schedule';
import Events from './pages/Events';
import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";
function App() {
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
