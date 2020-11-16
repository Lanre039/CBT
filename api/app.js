require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { seedDatabaseWithRoles } = require("./seeders/roleSeeder");
const { seedDatabaseWithUsers } = require("./seeders/userSeeder");
const TestRoute = require("./routes/TestRoute");
const AuthRoute = require("./routes/AuthRoute");
const CourseRoute = require("./routes/CourseRoute");
const QuestionRoute = require("./routes/QuestionRoute");
const UserRoute = require("./routes/UserRoute");

const app = express();
app.use(express.json());

//ROUTES
app.use(TestRoute);
app.use(AuthRoute);
app.use(CourseRoute);
app.use(QuestionRoute);
app.use(UserRoute);

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
