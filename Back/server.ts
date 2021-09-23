console.log("Start Server");

import express from "Express";
import serveIndex from "serve-index";
import cors from "cors";
import { Article } from "../Front/src/app/interfaces/article";

const app = express();
const port = 3000;
const dir = "../front/dist/front";
const articles: Article[] = [
  {
    name: "Tournevis",
    price: 2.99,
    qty: 120,
  },
  {
    name: "Marteau",
    price: 7.9,
    qty: 45,
  },
  {
    name: "Perceuse",
    price: 25.99,
    qty: 180,
  },
  {
    name: "Pelle",
    price: 15.0,
    qty: 7,
  },
];

app.use(cors());

app.use((req, res, next) => {
  console.log("url:", req.url);
  next();
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(express.static(dir));
app.use(serveIndex(".", { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
