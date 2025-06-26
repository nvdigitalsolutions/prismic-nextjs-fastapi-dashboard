# Prismic + Next.js + Tailwind CSS + Vercel + FastAPI Dashboard

## Overview

This starter repo sets up:
- **Frontend**: Next.js with Tailwind CSS, integrated with Prismic CMS.
- **Backend**: FastAPI server with basic user management (user & admin).
- **Deployment**: Vercel for frontend and any compatible host for backend.

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

### Deploy

- Frontend on Vercel (auto from `frontend/`).
- Backend on any FastAPI-friendly host.
