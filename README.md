# Technoverse 2.O

React, React Three Fiber, and Express implementation for Technoverse 2.O.

## Run locally

1. Copy `.env.example` to `.env` and set `VITE_REGISTRATION_FORM_URL` plus a secure `ADMIN_API_TOKEN`.
2. Install dependencies with `npm.cmd install` in PowerShell (or `npm install` in another shell).
3. Run the API: `npm.cmd run server`.
4. In a second terminal, run the client: `npm.cmd run dev`.

The frontend reads its public event and leaderboard data from `http://localhost:8787/api/public` by default. Configure `VITE_API_URL` if the API is hosted elsewhere.

## API

- `GET /api/public` – public events and leaderboard data
- `PUT /api/admin/events/:id` – update a checkpoint (Bearer `ADMIN_API_TOKEN`)
- `PUT /api/admin/leaderboard` – replace leaderboard data (Bearer `ADMIN_API_TOKEN`)

No real ACM logo or official registration URL was provided; the interface uses a text mark and safely leaves registration unlinked until the official URL is configured.
