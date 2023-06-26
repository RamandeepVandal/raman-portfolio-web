// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// screen
import { HomePage } from "./screens/HomePage"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
