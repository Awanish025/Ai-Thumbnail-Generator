# Thumblify - Project Documentation

## 1. Project Overview
Thumblify is a MERN stack application that leverages Google's Gemini AI (specifically `gemini-pro-vision` capabilities) to generate custom YouTube thumbnails. It integrates with Cloudinary for image storage and features a secure authentication system.

## 2. Architecture & Tech Stack
*   **Frontend**: React (Vite), Tailwind CSS, Framer Motion
*   **Backend**: Node.js, Express.js
*   **Database**: MongoDB (Mongoose)
*   **AI Service**: Google Gemini API
*   **Storage**: Cloudinary
*   **Authentication**: Express Sessions with MongoDB Store

## 3. Database Schema

### User Model
| Field | Type | Description |
| :--- | :--- | :--- |
| `name` | String | User's full name |
| `email` | String | Unique email address |
| `password` | String | Hashed password (optional if using Google Auth) |
| `googleId` | String | Google OAuth ID (unique, sparse) |
| `credit` | Number | User's credit balance (Default: 10) |

### Thumbnail Model
| Field | Type | Description |
| :--- | :--- | :--- |
| `userId` | ObjectId | Reference to `User` |
| `title` | String | Title of the thumbnail |
| `style` | String | Enum: "Bold & Graphic", "Minimalist", etc. |
| `aspect_ratio` | String | Enum: "16:9", "1:1", "9:16" |
| `color_scheme` | String | Enum: "vibrant", "sunset", "neon", etc. |
| `image_url` | String | Cloudinary URL of the generated image |
| `isGenerating` | Boolean | Status flag for generation process |

## 4. API Reference

### Authentication (`/api/auth`)
*   **POST** `/register`: Create a new account.
    *   *Body*: `{ name, email, password }`
*   **POST** `/login`: Login with email/password.
    *   *Body*: `{ email, password }`
*   **POST** `/logout`: End the session.
*   **GET** `/verify`: Check current session status (returns user data if logged in).

### Thumbnail Operations (`/api/thumbnail`)
*   **POST** `/generate`: Generate a new thumbnail.
    *   *Protected*: Yes
    *   *Body*: `{ title, prompt, style, aspect_ratio, color_scheme }`
    *   *Process*: Deducts credit -> Calls Gemini -> Uploads to Cloudinary -> Saves to DB.
*   **DELETE** `/delete/:id`: Delete a specific thumbnail.
    *   *Protected*: Yes

### User Data (`/api/user`)
*   **GET** `/thumbnails`: Fetch all thumbnails created by the logged-in user.
    *   *Protected*: Yes
*   **GET** `/thumbnail/:id`: Fetch details of a specific thumbnail.
    *   *Protected*: Yes

## 5. Deployment Configuration

### Backend (Render)
*   **Build Command**: `npm install`
*   **Start Command**: `npm start`
*   **Env Variables**: `MONGODB_URI`, `SESSION_SECRET`, `GEMINI_API_KEY`, `CLOUDINARY_*`, `CLIENT_URL`.

### Frontend (Vercel)
*   **Framework**: Vite
*   **Env Variables**: `VITE_BASE_URL` (Set to Render Backend URL).
