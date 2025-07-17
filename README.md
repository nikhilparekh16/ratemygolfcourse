# RateMyGolfCourse

A full-stack web app where golfers can rate, review, and upload photos of golf courses 

## Features (In Progress)

- User authentication (sign up, log in, session handling)
- View a list of golf courses
- Leave a review with a 1–5 star rating and written feedback
- Upload photos of the course
- See the average rating and cost for each course
- Filter/search by course name, city, and type (public/private)
- Responsive, clean UI built with React and TailwindCSS

##  Tech Stack

| Layer        | Tools/Libraries                                                                 |
|--------------|----------------------------------------------------------------------------------|
| Frontend     | React, TailwindCSS                                                              |
| Backend      | Node.js, Express                                                                |
| Database     | PostgreSQL via [Supabase]                                                       |
| Auth         | Supabase Auth (JWT-based)                                                       |
| Hosting      | TBD                                                                             |
| Versioning   | Git, GitHub 

## Current Progress

- Initialized full-stack repo with `client/` and `server/`
- Set up Express server (`/api/courses` route working)
- Connected to Supabase PostgreSQL database
- Created and populated `courses` table with 200+ real courses in NJ
- Cleaned and imported CSV data into Supabase via dashboard
- Environment variables and `.gitignore` securely configured