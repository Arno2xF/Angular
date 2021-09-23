console.log("Start Server");

const express = require("Express");
const serveIndex = require("serve-index");

const app = express();
const port = 3000;
const dir = "../front/dist/front";

app.use((req, res, next) => {
  console.log("url:", req.url);
  next();
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(express.static(dir));
app.use(serveIndex(".", { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
