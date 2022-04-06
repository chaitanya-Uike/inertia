import './App.css';
import Navbar from './components/navbar'
import Home from './pages/Home'
import Map from './pages/Map'
import Footer from './components/footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />

        <Routes>

          <Route path="/map" element={<Map />} />
          <Route path="/" element={<Home />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
