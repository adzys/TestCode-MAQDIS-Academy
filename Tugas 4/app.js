const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;

// GET - hello
app.get("/hello", (req, res) => {
  res.json({
    status: "success",
    message: "welcome to Maqdis Academy"
  });
});

// POST - /data
app.post("/data", (req, res) => {
  res.json({
    data: 100,
    status: "berhasil"
  });
});

// POST - /delete
app.post("/delete", (req, res) => {
  res.json({
    data: 0,
    status: "berhasil hapus"
  });
});

// GET - /delete-data
app.get("/delete-data", (req, res) => {
  res.json({
    message: "berhasil",
    id_setoran: 58,
    id_user: 3441,
    id_juz: 30
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});