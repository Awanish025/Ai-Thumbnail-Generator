# Thumblify - AI  Thumbnail Generator

> [!IMPORTANT]
> 🚧 **This project is currently under active development.** Features and APIs are subject to change.

Thumblify is a powerful, AI-driven application designed to help content creators generate eye-catching, high-CTR YouTube thumbnails in seconds. Built with the MERN stack and powered by Google's Gemini AI.

## 🚀 Features

-   **AI Generation**: Generate unique thumbnails based on video titles and prompts using Gemini AI.
-   **Customization**: Select from various styles (Bold, Minimalist, Futuristic, etc.), aspect ratios, and color schemes.
-   **User Dashboard**: Save, view, and manage your generated history.
-   **Authentication**: Secure login and signup system with credit management.
-   **Responsive Design**: Fully responsive UI built with Tailwind CSS and Framer Motion.

## 🛠️ Tech Stack

-   **Frontend**: React (Vite), Tailwind CSS, Framer Motion, Lucide React
-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB
-   **AI & Storage**: Google Gemini API, Cloudinary

## 📦 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/AI_Thumbnail_Generator.git
cd AI_Thumbnail_Generator
```

### 2. Backend Setup
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory with the following variables:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
CLOUDINARY_URL=your_cloudinary_url
```

Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
Open a new terminal, navigate to the client directory, and install dependencies:
```bash
cd ../client
npm install
```

Start the development server:
```bash
npm run dev
```

## 🔐 Environment Variables

| Variable | Description |
| :--- | :--- |
| `MONGODB_URI` | MongoDB connection string (Atlas or Local) |
| `SESSION_SECRET` | Secret key for session management |
| `GEMINI_API_KEY` | API key from Google AI Studio |
| `CLOUDINARY_URL` | Cloudinary API environment variable |

## 🌟 Usage

1.  **Sign Up/Login**: Create an account to access the generator.
2.  **Generate**: Go to the "Generate" page, enter your video title, select a style, and click "Generate".
3.  **Manage**: View your past creations in the "My Generation" tab.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
