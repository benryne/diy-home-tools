const express = require('express');
const router = express.Router();
const User = require('../schemas/user');


router.get('/create-user', (req,res) => {
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

router.get('/', (req,res) => {
    User.find({name: req.query.name, password: req.query.password})
        .then((result) => {
            console.log(result)
            res.send(result)
        })
        .catch((error) => {
            console.log(error)
        })
})

router.get('/add-project', (req,res) => {
    const userId = req.query.userid;
    const projectId = req.query.projectid;
    console.log(req.query);

    User.updateOne({ _id: userId },
        { $push: { projects: projectId }
    }) .then((result) => {
        console.log(result);
        res.send(result);
    })
})

router.get('/delete-project', (req,res) => {
    const userId = req.query.userid;
    const projectId = req.query.projectid;
    console.log("1" + userId + " " + projectId);

    User.updateOne({ _id: userId },
        { $pull: { projects: projectId }
    }) .then((result) => {
        console.log("2" + result)
        res.send(result)
    })  
})

module.exports = router;