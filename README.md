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
   - Give it the name `prismic-nextjs-fastapi-dashboard` and choose any starter kit.
   - Go to **Settings > API & Security** and note:
     - **API endpoint**: `https://prismic-nextjs-fastapi-dashboard.prismic.io/api/v2`
     - **Access Token** (create a permanent token).

3. **Frontend Hosting**
   - **Vercel**
     - Sign up at https://vercel.com/ (or use your GitHub login).
     - Import the GitHub repository.
     - Under **Project Settings > Environment Variables**, add:
       - `PRISMIC_REPO_NAME` = prismic-nextjs-fastapi-dashboard
       - `PRISMIC_ACCESS_TOKEN` = the token from Prismic
       - `NEXT_PUBLIC_API_URL` = `https://<your-vercel-domain>/api`
   - **DigitalOcean App Platform**
     - Sign up at https://www.digitalocean.com/.
     - Create a **New App**.
     - Connect your GitHub repo and select the `frontend` directory.
     - In **Build & Deploy** settings:
       - **Build Command**: `npm install && npm run build`
       - **Output Directory**: `.next`
       - **Run Command**: `npm start`
     - Under **Environment Variables**, add:
       - `PRISMIC_REPO_NAME` = prismic-nextjs-fastapi-dashboard
       - `PRISMIC_ACCESS_TOKEN` = the token from Prismic
       - `NEXT_PUBLIC_API_URL` = `https://<your-app>.ondigitalocean.app/api`
     - Choose your region and click **Create App**.

4. **Backend Hosting**
   - Sign up for your chosen FastAPI-friendly platform (Railway, Heroku, or DigitalOcean App Platform).
   - Create a new project/app and connect the `backend` folder from your repo.
   - Configure **Environment Variables**:
     - `DATABASE_URL` = your database connection string (e.g. `postgres://...` or SQLite file URL)
     - `SECRET_KEY` = a long random string (for JWT signing)
     - `ALGORITHM` = `HS256`
     - `ACCESS_TOKEN_EXPIRE_MINUTES` = `30`
   - For DigitalOcean App Platform backend component:
     - **Run Command**: `uvicorn main:app --host 0.0.0.0 --port 8000 --reload`
     - Choose a region and **Create App**.

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
   The requirements now include `psycopg2-binary` so Postgres databases work out of the box.
4. Run:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend

1. Navigate to `frontend/`
2. If you haven't already initialized Prismic, run:
   ```bash
   npx @slicemachine/init@latest --repository prismic-nextjs-fastapi-dashboard --starter nextjs-starter-prismic-minimal
   ```
3. Copy `.env.example` to `.env` and fill in your Prismic credentials.
4. Install dependencies:
   ```bash
   npm install
   ```
5. Run:
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
