# Book Bank

This is a full-stack web application that serves as a digital library or "Book Bank". It allows users to browse, search, and filter a collection of books. The project is built using the MERN stack (MongoDB, Express.js, React, Node.js) with TypeScript and styled with Tailwind CSS.

## ✨ Features

- **Browse Books**: View a collection of books in a responsive card-based layout.
- **Dynamic Filtering**: Filter books by Author, Subject, and Publication Year.
- **Modern UI**: Clean and responsive user interface built with Tailwind CSS, Headless UI, and Heroicons.
- **RESTful API**: A backend API built with Express.js to serve book data from a MongoDB database.

## 🛠️ Tech Stack

LLM(chatgpt) links used for resolving minor issue while during project - 
1. Filter and Card sync - https://chatgpt.com/c/68b82364-32f8-8322-b067-98f32d6ce89d
2. Props given to Sidebar.tsx as per Cards.tsx - https://chatgpt.com/c/68b82364-32f8-8322-b067-98f32d6ce89d
3. Fetch API corrected having minor mistake - https://chatgpt.com/?utm_source=google&utm_medium=paidsearch_brand&utm_campaign=GOOG_C_SEM_GBR_BackToSchool_CHT_SEA_ACQ_PER_MIX_ALL_APAC_IN_EN_082225&utm_term=chatgpt&utm_content=191102245624&utm_ad=771607822706&utm_match=e&gad_source=1&gad_campaignid=22930008418&gbraid=0AAAAA-IW-UWAzYFYbvKwdMQLwbg3VnisE&gclid=Cj0KCQjw8eTFBhCXARIsAIkiuOyxbkwJiCOQKxpSSzB-kp7p6en3-H07Ss4Uk-I8CeJ_VKjab4_zd4MaAty6EALw_wcB 
4. Fetch issue resolved - https://chatgpt.com/?utm_source=google&utm_medium=paidsearch_brand&utm_campaign=GOOG_C_SEM_GBR_BackToSchool_CHT_SEA_ACQ_PER_MIX_ALL_APAC_IN_EN_082225&utm_term=chatgpt&utm_content=191102245624&utm_ad=771607822706&utm_match=e&gad_source=1&gad_campaignid=22930008418&gbraid=0AAAAA-IW-UWAzYFYbvKwdMQLwbg3VnisE&gclid=Cj0KCQjw8eTFBhCXARIsAIkiuOyxbkwJiCOQKxpSSzB-kp7p6en3-H07Ss4Uk-I8CeJ_VKjab4_zd4MaAty6EALw_wcB


- **Frontend**:
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [React Router](https://reactrouter.com/)
  - [Headless UI](https://headlessui.com/)
  - [Heroicons](https://heroicons.com/)

- **Backend**:
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/)
  - [Mongoose](https://mongoosejs.com/)
  - [CORS](https://www.npmjs.com/package/cors)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (or yarn/pnpm)
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally or a connection string to a cloud instance.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd my-react-app
    ```

2.  **Install dependencies:**
    This project contains both frontend and backend dependencies in a single `package.json`.
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add your MongoDB connection string and a port for the server.
    ```env
    # .env
    MONGO_URI=mongodb://localhost:27017/book-bank
    PORT=8000
    ```

4.  **Run the backend server:**
    The backend server uses `nodemon` for automatic restarts on file changes.
    *(Note: You will need a server entry file, e.g., `server.js`, and a corresponding script in `package.json`)*.

    ```bash
    npm run server
    ```
    The server will start on the port specified in your `.env` file (e.g., `http://localhost:8000`).

5.  **Run the frontend development server:**
    In a separate terminal, run the Vite development server:
    ```bash
    npm run dev
    ```
    Open http://localhost:5173 (or the port shown in your terminal) to view the app in your browser.

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the Vite dev server for the React app.
- `npm run server`: Runs the Express backend server with `nodemon`.
- `npm run build`: Builds the React app for production.
- `npm run lint`: Lints the source code using ESLint.
- `npm run preview`: Serves the production build locally.

## 📁 Project Structure

```
my-react-app/
├── public/
├── src/
│   ├── components/      # React components (Navbar, Sidebar, Cards, etc.)
│   ├── App.tsx          # Main App component with routing
│   └── main.tsx         # Application entry point
├── .env                 # Environment variables (you need to create this)
├── package.json         # Project dependencies and scripts
└── server.js            # (Example) Express server entry point
```