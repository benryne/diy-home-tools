const express = require('express');
const router = express.Router();
const Project = require('../schemas/project');

router.get('/', (req,res) => {
    Project.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        }) 
})

router.get('/project-by-id', (req,res) => {
    console.log(req.query.projectid)

    Project.findById(req.query.projectid)
        .then((result) => {
            console.log(result)
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

router.get('/project-update', (req,res) => {
    const id = req.query.projectid
    const toolIds = req.query.toolids
    var idsArray = toolIds.split(',')

    console.log(req.query.projectid)
    console.log(toolIds)
    console.log(idsArray)
    
        Project.update({ _id: id },{
            tools: []
        })
            .then((result) => {
                console.log(result)
                if(toolIds.length === 0)
                    res.send(result);
                else {
                    Project.update({ _id: id },{
                        $push: { 
                            tools: {$each: idsArray}
                        }
                    })
                        .then((result) => {
                            console.log(result)
                            res.send(result);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    
})

router.get('/create-project', (req,res) => {
    const info = req.query;
    console.log(req.query.tools)
    const project = new Project({
        name: info.name,
        tools: info.tools,
        cost: 0
    })
    project.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router;