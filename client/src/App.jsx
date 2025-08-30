import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import CourseReviews from "./pages/CourseReviews";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses/:courseId/reviews" element={<CourseReviews />} />
      </Routes>
    </Router>
  );
}

export default App;
