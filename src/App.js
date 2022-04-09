import './App.css';
import Navbar from './components/navbar/navbar2'
import Home from './pages/Home'
import Map from './pages/Map'
import Footer from './components/footer'
import About from './pages/About';
import LeaderBoard from './pages/LeaderBoard';
import Schedule from './pages/Schedule';
import Events from './pages/Events';
import EventPage from './pages/EventPage/EventPage';

import Robotleague from './pages/EventPage/RobotLeague/RobotLeague'
import DRAICplayground from './pages/EventPage/DRAICplayground/DRAICplayground'
import Workshops from './pages/EventPage/Workshops/Workshops'
import SpaceTech from './pages/EventPage/SapceTech/SpaceTech'
import ShortCompetition from './pages/EventPage/ShortCompetition/ShortCompetition'

import DRAICplaygroundDetails from './pages/EventPage/DRAICplayground/DRAICplaygroundDetails'

import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from 'react';

const App = () => {
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
        <Route exact path="/event/:id" element={<EventPage />} />

        <Route exact path="/event/spacetech" element={<SpaceTech />} />
        <Route exact path="/event/workshop" element={<Workshops />} />
        <Route exact path="/event/robotleague" element={<Robotleague />} />
        <Route exact path="/event/draicplayground" element={<DRAICplayground />} />
        <Route exact path="/event/shortcompetitions" element={<ShortCompetition />} />

        <Route exact path="/event/draicplayground/:id" element={<DRAICplaygroundDetails />} />

        <Route exact path="/schedule" element={<Schedule />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes >
      <Footer />
    </div >
  );
}

export default App;
