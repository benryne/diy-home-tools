const express = require('express');
const router = express.Router();
const Tool = require('../schemas/tool');

router.get('/', (req,res) => {
    Tool.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

router.get('/add-tool', (req,res) => {
    let name = req.query.name;
    let category = req.query.category;
    let price = req.query.price;
    let affiliateLink = req.query.affiliateLink
    const tool = new Tool({
        name: name,
        category: category,
        price: price,
        affiliateLink: affiliateLink
    });

    tool.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
    })
})

router.get('/tool-by-id', (req,res) => {
    console.log(req.query.toolid)
    Tool.findById(req.query.toolid)
        .then((result) => {
            console.log(result)
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

router.get('/tools-by-id', (req,res) => {
    console.log(req.query.toolids)
    var ids = req.query.toolids;
    var idsArray = ids.split(',')
    console.log(idsArray)
    Tool.find({'_id': {$in: idsArray}})
        .then((result) => {
            console.log(result)
            res.send(result)
        })
})

router.get('/tools-not-by-id', (req,res) => {
    console.log(req.query.toolids)
    var ids = req.query.toolids;
    var idsArray = ids.split(',')
    console.log(idsArray)
    Tool.find({'_id': {$nin: idsArray}})
        .then((result) => {
            console.log(result)
            res.send(result)
        })
})

router.get('/tools-by-category', (req,res) => {
    var toolCategory = req.query.toolcategory
    Tool.find().where('category').equals(toolCategory)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router;