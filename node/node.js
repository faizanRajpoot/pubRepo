const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

let connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "Butique",
  password: "rootroot",
  port: 3306,
});

const app = express();
app.use(bodyParser({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/collection", (req, res) => {
  const body = req.body;
  return connection.query(
    `insert into collection (name) values("subahn")`,
    [],
    (err, result) => {
      console.log(err);
      if (err) {
        return res.status(500).json({ message: "somthing error" });
      }
      return res.json({ result, message: "okkk" });
    }
  );
});

app.get("/collection", (req, res) => {
  return connection.query(`select * from collection`, [], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "error" });
    }
    return res.json({ message: "success" });

  });
});
app.listen(4000, () => console.log("listening on port"));

// app.post("/category", (req, res) => {
//   const body = req.body;
//   return connection.query(
//     `insert into category (name,category_id) values("subahn",1)`,
//     [],
//     (err, result) => {
//       console.log(err);
//       if (err) {
//         return res.status(500).json({ message: "somthing error" });
//       }
//       return res.json({ result, message: "okkk" });
//     }
//   );
// });

// app.get("/category", (req, res) => {
//   return connection.query(`select * from category `, [], (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: "error" });
//     }
//     return res.json({ result, message: "ok" });
//   });
// });

// app.listen(4000, () => console.log("app is working on port"));
