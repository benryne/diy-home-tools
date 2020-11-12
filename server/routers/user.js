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

module.exports = router;