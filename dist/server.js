const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
app.use("/", express.static(path.join(__dirname, "./")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});