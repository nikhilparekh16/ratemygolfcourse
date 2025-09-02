# RateMyGolfCourse

A full-stack web app where golfers can rate, review, and upload photos of golf courses 

## Features

- User authentication (sign up, log in, session handling)
- Search and filter through golf courses by name, location, and course type.
- Leave a review with a 1–5 star rating and written feedback.
- Feedback is stored in a supabase DB and other users can read these.
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

## How to Run Locally

1. Clone the repo  
   `git clone https://github.com/your-username/ratemygolfcourse.git`

2. Install dependencies for both client and server  
   ```bash
   cd client
   npm install
   cd ../server
   npm install
3. Create a `.env` file in `client/` with your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
    `VITE_SUPABASE_URL=...`
    `VITE_SUPABASE_ANON_KEY=...`

4. Create a `.env` file in `server/` with your database and JWT secret
    `PORT=5001`
    `DATABASE_URL=...`
    `JWT_SECRET=...`

5. Upload and run this schema into the supabase
    ```sql
    -- Golf Courses
    create table courses (
        id uuid primary key default gen_random_uuid(),
        name text not null,
        location text,
        holes integer,
        course_type text,
        created_at timestamp default now()
    );

    -- Reviews
    create table reviews (
        id uuid primary key default gen_random_uuid(),
        user_id uuid not null,           -- will store Supabase Auth user UUID
        course_id uuid references courses(id),
        rating integer check (rating >= 1 and rating <= 5),
        text text,
        created_at timestamp default now()
    );

6. Upload Golf - Sheet1.csv in Supabase

7. In one terminal
    ```bash
    cd server
    npm run start

8. In another terminal
    ```bash
    cd client
    npm run dev

App will be available at http://localhost:5173
