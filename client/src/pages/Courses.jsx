import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [courseType, setCourseType] = useState("all");
  const [holeFilter, setHoleFilter] = useState("all");

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch("http://localhost:5001/api/courses");
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((course) => {
    const lower = searchTerm.toLowerCase();

    const matchesSearch =
      course.name.toLowerCase().includes(lower) ||
      course.location.toLowerCase().includes(lower);

    const matchesType =
      courseType === "all" || course.course_type.toLowerCase() === courseType;

    const holes = parseInt(course.holes);
    const matchesHoles =
      holeFilter === "all" ||
      (holeFilter === "less" && holes < 18) ||
      (holeFilter === "equal" && holes === 18) ||
      (holeFilter === "greater" && holes > 18);

    return matchesSearch && matchesType && matchesHoles;
  });

  return (
    <>
      <Header />
      <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">All Golf Courses</h1>

      {/* Filters Section */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded shadow-sm focus:outline-none focus:ring w-full sm:w-64 text-black"
        />

        <select
          value={courseType}
          onChange={(e) => setCourseType(e.target.value)}
          className="p-2 border rounded shadow-sm focus:outline-none focus:ring text-black"
        >
          <option value="all">All Types</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="semi-private">Semi-Private</option>
        </select>

        <select
          value={holeFilter}
          onChange={(e) => setHoleFilter(e.target.value)}
          className="p-2 border rounded shadow-sm focus:outline-none focus:ring text-black"
        >
          <option value="all">All Holes</option>
          <option value="less">Less than 18</option>
          <option value="equal">Exactly 18</option>
          <option value="greater">More than 18</option>
        </select>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length === 0 ? (
        <p>No matching courses found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourses.map((course) => (
            <div key={course.id}>
              <CourseCard course={course} />
              <Link
              to={`/courses/${course.id}/reviews`}
              className="mt-2 inline-block bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
              >
                View Reviews
              </Link>
            </div>
            ))}
        </div>
      )}
    </div>
    </>
  );
}
