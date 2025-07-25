import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col bg-green-50 p-8">
        <main>
          <h1 className="text-5xl font-semibold mb-4 text-black ">Welcome to RateMyGolfCourse! ⛳🏌️</h1>
          <p className="text-xl mb-4 text-gray-500"> Find and review your favorite golf courses in NJ</p>
          <p className="text-xl mb-2 text-gray-500">- 🌟 Rate Courses</p>
          <p className="text-xl mb-2 text-gray-500">- 🔍 Filter and find the best course for you</p>
          <p className="text-xl mb-8 text-gray-500">- 📚 Read reviews</p>
          <Link
            to="/courses"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            View/Search Courses
          </Link>
        </main>
      </div>
    </>
  );
}