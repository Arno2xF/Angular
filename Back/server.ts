console.log("Start Server");

import express from "Express";
import serveIndex from "serve-index";
import cors from "cors";
import { Article } from "../Front/src/app/interfaces/article";
import { timeStamp } from "console";

const app = express();
const port = 3000;
const dir = "../front/dist/front";
const articles: Article[] = [
  {
    id: "A1",
    name: "xTournevis",
    price: 2.99,
    qty: 120,
  },
  {
    id: "A2",
    name: "xMarteau",
    price: 7.9,
    qty: 45,
  },
  {
    id: "A5",
    name: "xPerceuse",
    price: 25.99,
    qty: 180,
  },
  {
    id: "A9",
    name: "xPelle",
    price: 15.0,
    qty: 7,
  },
];

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("url:", req.url);
  next();
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.post("/api/articles", (req, res) => {
  const article = req.body as Article;
  article.id = generateId();
  articles.push(article);
  res.status(201).json(article);
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(express.static(dir));
app.use(serveIndex(".", { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

function generateId(): string {
  return Date.now() + "_" + Math.floor(Math.random() * 1e9);
}
