var express = require('express');
var router = express.Router();
var userModel=require('../schemas/users-schemas');

router.post('/users', (req, res) => {
    var item = {
        user_name: req.body.user_name,
        password: req.body.password,
        avatar_url: req.body.avatar_url,
        gender:req.body.gender,
        region:req.body.region
    };
    userModel.collection.insertOne(item, function (err, result) {
        console.log("1 record inserted");
        res.send(item);
    })
})

router.get('/users', (req, res) => {
    userModel.find(function (err, users) {
        if (err) res.send(err);
        res.send(users);

    })
})

router.delete('/users/:userId', function (req, res) {
    //console.log('user deleted : ' + req.params.productId);
    userModel.findByIdAndRemove(req.params.userId, (err, docs) => {
        if (err) return console.log(err);
        res.send('User removed Successufully :' + req.params)
    })
})

router.put('/users/:userId', (req, res) => {
    var userId = req.params.userId;
    var user = req.body;
    console.log(user);
    userModel.findOneAndUpdate({
        _id: req.params.userId
    }, req.body, function (err, user) {
        res.send('user successfully updated');
    });
})

module.exports = router;