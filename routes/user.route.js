var express = require('express');
var router = express.Router();
var produitModel=require('../schemas/users-schemas');

router.post('/users', (req, res) => {
    //13/07/2017
    var item = {
        designation: req.body.designation,
        price: req.body.price,
        category: req.body.category
    };
    produitModel.collection.insertOne(item, function (err, result) {
        console.log("1 record inserted");
    })
})

router.get('/users', (req, res) => {
    produitModel.find(function (err, produits) {
        if (err) res.send(err);
        res.send(produits);

    })
})

router.delete('/users/:userId', function (req, res) {
    //console.log('product deleted : ' + req.params.productId);
    produitModel.findByIdAndRemove(req.params.productId, (err, docs) => {
        if (err) return console.log(err);
        res.send('Product removed Successufully :' + req.params)
    })
})

router.put('/users/:userId', (req, res) => {
    var produitId = req.params.productId;
    var produit = req.body;
    console.log(produit);
    produitModel.findOneAndUpdate({
        _id: req.params.productId
    }, req.body, function (err, produit) {
        res.send('produit successfully updated');
    });
})

module.exports = router;