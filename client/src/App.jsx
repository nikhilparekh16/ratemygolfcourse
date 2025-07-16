import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="text-xl font-bold text-center mt-20">Welcome to RateMyGolfCourse</div>} />
      </Routes>
    </Router>
  );
}

export default App;
