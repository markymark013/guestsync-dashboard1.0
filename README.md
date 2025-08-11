# GuestSync Dashboard (Firebase-ready)

This project is a minimal Next.js + Tailwind dashboard wired to Firebase Firestore for real-time tasks.

## What is included
- Next.js pages-based app
- Tailwind CSS configured
- Firebase initialization with Firestore (real-time listeners)
- `Tasks` component that listens to the `tasks` collection
- Instructions for running locally, uploading to GitHub, and deploying to Vercel

## Quick Start (locally)
1. Unzip the project and open a terminal at the project root.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start dev server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000

## Firebase setup (already included)
The `firebase.js` file is pre-filled with your Firebase config for project `guest-21009`.

## Firestore collection structure
Create a collection named `tasks`. Documents should contain fields (example):
- title (string)
- note (string)
- room (string)
- status (string) e.g. "Open" or "Closed"
- priority (string)
- assigned (string)
- createdAt (timestamp) - use serverTimestamp when adding

## Deploying to Vercel
1. Push this folder to a GitHub repo.
2. On Vercel, click New Project → Import Git Repository → pick your repo → Deploy.

If you want, I can walk you through pushing to GitHub step-by-step.
