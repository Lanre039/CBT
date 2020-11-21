require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { seedDatabaseWithRoles } = require("./seeders/roleSeeder");
const { seedDatabaseWithUsers } = require("./seeders/userSeeder");
const AuthRoute = require("./routes/AuthRoute");
const CourseRoute = require("./routes/CourseRoute");
const QuestionRoute = require("./routes/QuestionRoute");
const UserRoute = require("./routes/UserRoute");
const RoleRoute = require("./routes/RoleRoute");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Accept, X-Requested-With, Authorization, Content-Type, x-custom-header"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,PUT,POST,PATCH,DELETE,OPTIONS",
  })
);

//ROUTES
app.use(AuthRoute);
app.use(CourseRoute);
app.use(QuestionRoute);
app.use(UserRoute);
app.use(RoleRoute);

const PORT = process.env.port || 8000;
app.listen(PORT, () => {
  mongoose.connect(
    process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    (err, success) => {
      console.log(`Server listening on port ${PORT}`);
      if (err) {
        console.log("An error occurred while connecting to the database");
        return;
      }
      // seedDatabaseWithRoles();
      // seedDatabaseWithUsers();
      console.log("Successfully connected to the database");
    }
  );
});
