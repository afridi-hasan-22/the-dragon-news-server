const express = require('express');
const app = express();
const cors = require('cors')
const categories = require('./data/categories.json')
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req,res)=> {
  res.send('dragon is coming')
})

app.get('/categories', (req,res)=> {
  res.send(categories)
})

app.listen(port, () =>  {
   console.log(`Dragon api is running on ${port}`);
})




