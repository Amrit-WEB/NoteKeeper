import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
<<<<<<< HEAD
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Allow your frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"],
=======

// CORS Configuration
const allowedOrigins = ['https://note-keeper-ui.vercel.app']; // Add more origins if needed
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
>>>>>>> 772392232c35fecaf980a52f144bdeff9b6d7c2a
    credentials: true, // Allow cookies and credentials
  })
);

// Handle preflight CORS requests
app.options("*", cors());

// Debug incoming requests
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Import and use routes
import authRouter from "./routes/auth.route.js";
import noteRouter from "./routes/note.route.js";

app.use("/api/auth", authRouter);
app.use("/api/note", noteRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  console.error(`Error ${statusCode}: ${message}`);
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});














// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";

// dotenv.config();

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.log("MongoDB connection error:", err);
//   });

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({
//   origin: 'https://note-keeper-ui.vercel.app', // Allow your frontend origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true, // Allow cookies and credentials
// }));

// // Handle preflight CORS requests
// app.options('*', cors({
//   origin: 'https://note-keeper-ui.vercel.app',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true,
// }));

// // Debug incoming requests
// // app.use((req, res, next) => {
// //   console.log(`Incoming request: ${req.method} ${req.url}`);
// //   next();
// // });

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", 'https://note-keeper-ui.vercel.app');
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// // Import and use routes
// import authRouter from "./routes/auth.route.js";
// import noteRouter from "./routes/note.route.js";

// app.use("/api/auth", authRouter);
// app.use("/api/note", noteRouter);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error";
//   console.error(`Error ${statusCode}: ${message}`);
//   return res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
