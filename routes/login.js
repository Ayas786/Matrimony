var express = require('express');
const { MongoClient } = require('mongodb');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('hbh');
  res.render('login');
});
router.post('/k', async function(req, res) {
    console.log(req.body);
    var name2=req.body
    const client = new MongoClient('mongodb+srv://achurehman786:OPPiFJO5sstZm3XI@cluster2.pmmthue.mongodb.net/ayas?retryWrites=true&w=majority&appName=Cluster2');
  
    const database = client.db("achu_learn"); 
    const collection = database.collection('login')
    await collection.insertOne(name2);
  
    });
module.exports = router;
