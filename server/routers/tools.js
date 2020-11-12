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
    const tool = new Tool({
        name: 'tool1',
        category: 'tool-category',
        price: 5.50
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
    Tool.find().where('category').equals('tool-category')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router;