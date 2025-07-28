import Header from "../components/Header";

export default function About() {
    return (
        <>
            <Header/>
            <div>
                <h1 className="text-3xl font-semibold mb-4">About</h1>
                <hr ></hr>
                <p className="text-xl font-semibold mb-4">Welcome to RateMyGolfCourse! 
                    RateMyGolfCourse is an interactive web application that allows golf lovers to discover 
                    and share their experiences about golf courses in New Jersey. 
                    RateMyGolfCourse allows users to search for public and private courses, filter by number of holes, 
                    or read user reviews. This platform allows golf lovers to make informed decisions before they play.
                    RateMyGolfCourse aims to provide a simple, community driven way to explore and rate your favorite golf destinations.
                </p>
                <hr></hr>

            </div>
        </>
    );
}