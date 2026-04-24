const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Endpoint opzionale per calcolo (se vuoi farlo dal server)
app.listen(3000, () => console.log("UI disponibile su http://localhost:3000"));