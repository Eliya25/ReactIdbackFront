import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../src/components/pages/LoginPage.jsx";
import Register from "../src/components/pages/Register.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
