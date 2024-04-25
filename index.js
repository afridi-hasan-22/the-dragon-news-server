const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const categories = require('./data/categories.json');
const news = require('./data/news.json');

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('dragon is coming');
});

app.get('/categories', (req, res) => {
  res.send(categories);
});

app.get('/news', (req, res) => {
  res.json(news);
});

app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.json(selectedNews);
  console.log(id);
});

app.get('/categories/:id', (req, res) => {
  const id = req.params.id;
  if (id == 0) {
    res.json(news);
  } else {
    const categoryNews = news.filter((n) => n.category_id === id);
    res.json(categoryNews);
  }
});

app.listen(port, () => {
  console.log(`Dragon api is running on ${port}`);
});
