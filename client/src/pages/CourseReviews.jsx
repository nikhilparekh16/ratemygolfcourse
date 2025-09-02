import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Header from "../components/Header";

export default function CourseReviews() {
  const { courseId } = useParams();  
  const [reviews, setReviews] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [user, setUser] = useState(null);
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch signed-in user
  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getUser();
      if (error) console.error(error);
      else setUser(data.user);
    }
    getUser();
  }, []);

  // Fetch reviews + course name
  useEffect(() => {
    async function fetchReviews() {
      const { data, error } = await supabase
        .from("reviews")
        .select(`
          id,
          text,
          rating,
          created_at,
          courses ( name )
        `)
        .eq("course_id", courseId)
        .order("created_at", { ascending: false });

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

  // Submit new review
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("reviews").insert([
      {
        user_id: user.id,
        course_id: courseId,
        rating,
        text,
      },
    ]);

    if (error) {
      console.error(error);
    } else {
      // Refresh reviews
      const { data: newReviews } = await supabase
        .from("reviews")
        .select(`
          id,
          text,
          rating,
          created_at,
          courses ( name )
        `)
        .eq("course_id", courseId)
        .order("created_at", { ascending: false });

      setReviews(newReviews);
      setText("");
      setRating(5);
    }
    setLoading(false);
  }

  return (
    <>
      <Header />
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          Reviews for {courseName || "this course"}
        </h1>

        {/* Review form if logged in */}
        {user ? (
          <form onSubmit={handleSubmit} className="mb-8 p-4 border rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Leave a Review</h2>
            <label className="block mb-2">
              Rating:
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="ml-2 border rounded p-1 text-black"
              >
                {[1,2,3,4,5].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write your review..."
              className="w-full border rounded p-2 mb-2 text-black"
              rows={3}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {loading ? "Posting..." : "Submit Review"}
            </button>
          </form>
        ) : (
          <p className="mb-8 text-gray-600">Sign in to leave a review.</p>
        )}

        {/* Show reviews */}
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((review) => (
              <li key={review.id} className="mb-4 p-3 border-b text-black">
                <p className="font-semibold">Rating: {review.rating} ⭐</p>
                <p>{review.text}</p>
                <p className="text-sm text-black">
                  {new Date(review.created_at).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
