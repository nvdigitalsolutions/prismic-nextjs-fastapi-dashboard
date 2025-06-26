# Prismic + Next.js + Tailwind CSS + Vercel + FastAPI Dashboard

## Overview

This starter repo sets up:
- **Frontend**: Next.js with Tailwind CSS, integrated with Prismic CMS.
- **Backend**: FastAPI server with basic user management (user & admin).
- **Deployment**: Vercel for frontend and any compatible host for backend.

## Account Setup

Before running this project, you’ll need the following accounts:

1. **GitHub**
   - Sign up at https://github.com/.
   - Create a new repository named `prismic-nextjs-fastapi-dashboard`.
   - Clone it locally:
     ```bash
     git clone git@github.com:your-username/prismic-nextjs-fastapi-dashboard.git
     ```

2. **Prismic CMS**
   - Sign up at https://prismic.io/.
   - From the dashboard, select **New repository**.
   - Give it a name (e.g. `your-repo-name`) and choose any starter kit.
   - Go to **Settings > API & Security** and note:
     - **API endpoint** (e.g. `https://your-repo-name.cdn.prismic.io/api/v2`)
     - **Access Token** (create a permanent token).

3. **Vercel** (Frontend Hosting)
   - Sign up at https://vercel.com/ (or use your GitHub login).
   - Import the GitHub repo you created.
   - Under **Project Settings > Environment Variables**, add:
     - `PRISMIC_REPO_NAME` = your-prismic-repo-name
     - `PRISMIC_ACCESS_TOKEN` = the token from Prismic
     - `NEXT_PUBLIC_API_URL` = `https://<your-vercel-domain>/api`

4. **Backend Hosting** (e.g., Railway, Heroku, or any FastAPI-friendly host)
   - Sign up for your chosen platform.
   - Create a new project/app, and link your GitHub backend folder or deploy via CLI.
   - Configure environment variables:
     - `DATABASE_URL` = your database connection string (e.g. `postgres://...` or SQLite file URL)
     - `SECRET_KEY` = a long random string (for JWT signing)
     - `ALGORITHM` = `HS256`
     - `ACCESS_TOKEN_EXPIRE_MINUTES` = `30`

5. **Optional: Custom Domain**
   - On Vercel, add a custom domain under **Domains** and follow DNS instructions.


## Setup

### Backend

1. Navigate to `backend/`
2. Copy `.env.example` to `.env` and fill in values.
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend

1. Navigate to `frontend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run:
   ```bash
   npm run dev
   ```

### Project Structure

├── backend/
│   ├── app/
│   ├── main.py
│   ├── requirements.txt
│   └── .env.example
├── frontend/
│   ├── pages/
│   ├── lib/
│   ├── styles/
│   ├── package.json
│   └── .env.example
├── .gitignore
└── README.md

### Deploy

- Frontend on Vercel (auto from `frontend/`).
- Backend on any FastAPI-friendly host.
