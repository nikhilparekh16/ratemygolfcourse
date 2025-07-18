import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center p-8">
      <h1 className="text-5xl font-bold mb-4">⛳ Rate My Golf Course</h1>
      <p className="text-xl mb-8">Find and review your favorite golf courses in NJ</p>
      <Link
        to="/courses"
        className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
      >
        View/Search Courses
      </Link>
    </div>
  );
}