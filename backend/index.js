const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/employee");
require('dotenv').config();

const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle registration
// app.post("/register", (req, res) => {
//   const { firstName, lastName, email, password } = req.body;

//   // Basic validation
//   if (!firstName || !lastName || !email || !password) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   // Create employee record without confirmPassword
//   EmployeeModel.create({ firstName, lastName, email, password })
//     .then((employee) => {
//       res
//         .status(201)
//         .json({ message: "Employee registered successfully", employee });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(400).json({ message: "Error: " + err.message });
//     });

//   console.log(req.body); // Log request body
// });
app.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Basic validation
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create employee record with hashed password
    const employee = await EmployeeModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "Employee registered successfully", employee });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Error: " + err.message });
  }

  console.log(req.body); // Log request body
});


// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
