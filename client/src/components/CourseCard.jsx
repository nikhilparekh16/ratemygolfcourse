export default function CourseCard({ course }) {
    return (
      <div className="border rounded-xl p-4 shadow hover:shadow-md transition">
        <h2 className="text-xl font-semibold">{course.name}</h2>
        <p className="text-sm text-gray-600">{course.location}</p>
        <p className="text-sm">Holes: {course.holes}</p>
        <p className="text-sm">Type: {course.course_type}</p>
        {course.avg_rating && (
          <p className="text-yellow-500 font-medium">⭐ {course.avg_rating.toFixed(1)} / 5</p>
        )}
      </div>
    );
  }