const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Tool = require('./tool');
const Project = require('./project');
const User = require('./user')

const app = express()


//connect to mongodb
const dbURI = 'mongodb+srv://test_user:a2154310@cluster0.2mckp.mongodb.net/node-tuts?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(5000))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(cors())



app.get('/create-user', (req,res) => {
    const info = req.query;
    console.log(req.query)
    const user = new User({
        name: info.name,
        password: info.password,
    })
    user.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/user', (req,res) => {
    User.find({name: req.query.name, password: req.query.password})
        .then((result) => {
            console.log(result)
            res.send(result)
        })
        .catch((error) => {
            console.log(error)
        })
})

app.get('/add-tool', (req,res) => {
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

app.get('/tools', (req,res) => {
    Tool.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/tool-by-id', (req,res) => {
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

app.get('/tools-by-id', (req,res) => {
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

app.get('/tools-not-by-id', (req,res) => {
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

app.get('/tools-by-category', (req,res) => {
    Tool.find().where('category').equals('tool-category')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/create-project', (req,res) => {
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

app.get('/projects', (req,res) => {
    Project.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        }) 
})

app.get('/project-by-id', (req,res) => {
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

app.get('/project-update', (req,res) => {
    console.log(req.query.projectid)
    const id = req.query.projectid
    const toolIds = req.query.toolids
    if(toolIds.length === 0) {
        Project.update({ _id: id },{
            tools: []
        })
            .then((result) => {
                console.log(result)
                res.send(result);
            })
            .catch((err) => {
                console.log(err);
            })
    } else {
        Project.update({ _id: id },{
            tools: toolIds
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

