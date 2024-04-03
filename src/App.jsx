// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// screen
import { HomePage } from "./screens/HomePage"
import ParticlesComp from "./components/ParticlesComp";

function App() {
  return (
    <>
    <ParticlesComp id="particles" />
    <Router basename="/raman-portfolio-web">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
