import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Header from "../components/Header";

export default function CourseReviews() {
  const { courseId } = useParams();  
  const [reviews, setReviews] = useState([]);
  const [courseName, setCourseName] = useState("");

  useEffect(() => {
    async function fetchReviews() {
      const { data, error } = await supabase
        .from("reviews")
        .select(`
          id,
          text,
          rating,
          course_id,
          courses ( name )
        `)
        .eq("course_id", courseId);

      if (error) {
        console.error(error);
      } else {
        setReviews(data);

        if (data.length > 0 && data[0].courses) {
          setCourseName(data[0].courses.name);
        } else {
          const { data: courseData } = await supabase
            .from("courses")
            .select("name")
            .eq("id", courseId)
            .single();

          if (courseData) {
            setCourseName(courseData.name);
          }
        }
      }
    }

    fetchReviews();
  }, [courseId]);

  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">
          Reviews for {courseName || "this course"}
        </h1>

        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((review) => (
              <li key={review.id} className="mb-4">
                <p className="font-semibold">Rating: {review.rating}</p>
                <p>{review.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
