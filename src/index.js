const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Welcome to API");
});

const userController = require("./user/user.controller");

app.use("/users", userController);

app.listen(PORT, () => {
  console.log("API running in port :" + PORT);
});

// app.post("/user", async (req, res) => {
//   try {
//     const userData = {
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     };
//     const user = await prisma.user.create({
//       data: userData,
//     });
//     res.send(user);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.get("/article", async (req, res) => {
//   const article = await prisma.article.findMany();
//   res.send(article);
// });
