var express = require('express');
const { MongoClient } = require('mongodb');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.post('/submit', async function(req, res) {
  console.log(req.body);
  var name=req.body
  const client = new MongoClient('mongodb+srv://achurehman786:OPPiFJO5sstZm3XI@cluster2.pmmthue.mongodb.net/ayas?retryWrites=true&w=majority&appName=Cluster2');

  const database = client.db("achu_learn"); 
  const collection = database.collection('learn_matrimony')
  await collection.insertOne(name);

  });
;

module.exports = router;
