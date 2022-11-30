const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

let connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "Butique",
  password: "root",
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



app.post("/register", (req, res) => {
  const body =req.body;
  return connection.query(
    `insert into register (first_name,last_name,email,password) values(?,?,?,?)`,
    [body.first_name, body.last_name, body.email,body.password],
    (err, result) => {
      console.log(err);
      if (err) {
        return res.status(500).json({ message: "somthing error" });
      }
      return res.json({ result, message: "okkk" });
    }
  );
});

app.post("/checkOut", (req, res) => {
  const body =req.body;
  return connection.query(
    `insert into checkOut (name,img,price) values(?,?,?)`,
    [body.shoes_name, body.shoes_img, 1587],
    (err, result) => {
      console.log(err);
      if (err) {
        return res.status(500).json({ message: "somthing error" });
      }
      return res.json({ result, message: "okkk" });
    }
  );
});


app.get("/checkOut", (req, res) => {
  return connection.query(`select * from checkOut`, [], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "error" });
    }
    return res.json({ message: "success", result });

  });
});


app.get("/collection", (req, res) => {
  return connection.query(`select * from collection`, [], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "error" });
    }
    return res.json({ message: "success" });

  });
});

app.get("/register", (req, res) => {
  return connection.query(`select * from register`, [], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "error" });
    }
    return res.json({ message: "success" , result });

  });
});
app.get("/history", (req, res) => {
  return connection.query(`select * from history`, [], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "error" });
    }
    return res.json({ message: "success" , result });

  });
});

app.get("/shoes", (req, res) => {
  return connection.query(`select s.id as id, shoes_name, name as brand_name, shoes_img from shoes s join brand b where s.shoes_id_brand = b.id`, [], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "error" });
    }
    return res.json({ message: "success", result });

  });
});

app.listen(4000, () => console.log("listening on port"));







