const express = require('express');
const router = express.Router();
const User = require('../schemas/user');
const { generateSalt, hash, compare } = require('../utils/userHashing');


router.get('/create-user', async (req,res) => {
    const info = req.query;
    console.log(req.query)
    let salt = generateSalt(10);
    try {
        const user = new User({
            name: info.name,
            password: await hash(info.password, salt),
        })
        console.log(user)
        let response = await user.save();
        res.send(response)
    } catch (err) {
        console.log(err)
    }
})

router.get('/login', async (req,res) => {
    let name = req.query.name
    let password = req.query.password
    let user = await User.findOne({
        name: name
    })
    let match = await compare(password, user.password);
    if(match) {
        console.log("Hash Success")
        res.send(user)
    }
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