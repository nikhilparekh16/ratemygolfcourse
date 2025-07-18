# RateMyGolfCourse

A full-stack web app where golfers can rate, review, and upload photos of golf courses 

## Features (In Progress)

- User authentication (sign up, log in, session handling)
- Leave a review with a 1–5 star rating and written feedback
- Upload photos of the course
- See the average rating and cost for each course
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
- Filter/search by course name, city, and type (public/private) of golf courses in NJ
- Cleaned and imported CSV data into Supabase via dashboard
- Environment variables and `.gitignore` securely configured

## How to Run Locally

1. Clone the repo  
   `git clone https://github.com/your-username/ratemygolfcourse.git`

2. Install dependencies for both client and server  
   ```bash
   cd client
   npm install
   cd ../server
   npm install
3. Create a .env file in server/ with your Supabase credentials
    SUPABASE_URL=...
    SUPABASE_KEY=...
4. # In one terminal
    cd server
    npm run dev

    # In another terminal
    cd client
    npm run dev

App will be available at http://localhost:5173
