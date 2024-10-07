# NoteKeeper

NoteKeeper is a modern, full-stack note management application designed for users to create, edit, and organize their notes effortlessly. This project implements a complete user authentication system, secure RESTful APIs, and a responsive frontend UI.

## 🚀 Live Demo

[NoteKeeper Live Demo](https://note-keeper-ui.vercel.app)

## 📂 Project Structure

The project is divided into two main parts:

### Backend

The backend is built using **Node.js** and **Express**, with **MongoDB** as the database. It handles user authentication, note management, and API endpoints.

**Backend Directory Structure:**

```
/backend
├── index.js           # Main entry point
├── .env               # Environment variables
├── models/            # Mongoose models for User and Note
├── routes/            # API routes for authentication and notes
├── controllers/       # Controllers for handling business logic
└── middleware/        # Custom middleware for authentication
```

### Frontend

The frontend is developed using **React.js** along with **Redux** for state management and **Tailwind CSS** for styling.

**Frontend Directory Structure:**

```
/frontend
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable components (Navbar, Cards, Inputs, etc.)
│   ├── pages/         # Pages (Home, Login, Signup, AddEditNotes)
│   ├── redux/         # Redux slices and store configuration
│   ├── utils/         # Utility functions
│   └── assets/        # Images and other assets
```

## 📦 Installation and Setup

### Prerequisites

- Node.js and npm
- MongoDB (local or cloud-based using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- A `.env` file for the backend configuration

### Backend Setup

1. Clone the repository and navigate to the `backend` folder:

   ```bash
   git clone https://github.com/your-username/NoteKeeper.git
   cd NoteKeeper/backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following variables:

   ```plaintext
   PORT=5000
   MONGO_URI=<Your MongoDB URI>
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

   The backend will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the `frontend` folder:

   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

### Running the Project Locally

Make sure both the frontend and backend servers are running simultaneously:

- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000`

## 🛠️ Technologies Used

### Backend

- **Node.js**: JavaScript runtime for the server.
- **Express**: Web framework for building the server and APIs.
- **MongoDB**: NoSQL database for storing users and notes.
- **Mongoose**: ODM for MongoDB to define schema and models.
- **JWT**: Secure token-based authentication.

### Frontend

- **React.js**: JavaScript library for building the user interface.
- **Redux**: State management library for predictable state updates.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Axios**: HTTP client for making API requests.
  
### Deployment

- **Frontend**: Deployed on [Vercel](https://vercel.com).
- **Backend**: (Optionally) Deployed on [Render](https://render.com) or [Heroku](https://www.heroku.com).

## 🔗 API Endpoints

### Authentication

- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Login user and get a token.
- **POST** `/api/auth/logout`: Logout user.

### Notes

- **GET** `/api/note`: Retrieve all notes for the logged-in user.
- **POST** `/api/note/add`: Create a new note.
- **PUT** `/api/note/edit/:id`: Update a specific note.
- **DELETE** `/api/note/delete/:id`: Delete a specific note.

## 📝 Features

- **User Authentication**: Register, login, and manage user sessions.
- **CRUD Operations for Notes**: Create, edit, view, and delete notes.
- **Responsive Design**: Optimized UI for different screen sizes.
- **Redux Integration**: Manages application state for a seamless user experience.
- **Error Handling**: Global error handlers to catch and manage errors.

## 📈 Future Improvements

- Add rich text support for note content.
- Enhance user profile settings and theme customization.
- Add collaboration features for shared note-taking.
- Integrate notifications for shared notes.
- Enhance security with more robust validation and error handling.

---

