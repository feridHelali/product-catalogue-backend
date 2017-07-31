var express = require('express');
var _ = require('lodash');
var bodyparser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var cors = require('cors');
var multer = require('multer');
var Q = require('q');
var path = require('path');

var mongoose = require('mongoose');
var schema = require('mongoose').Schema;
var ObjectID = require('mongodb').ObjectID;
var BSON = mongoClient.BSONPure;


mongoose.connect('mongodb://localhost/product_db');

var productSchema = schema({
    designation: {
        type: String,
        required: true
    },
    price: Number,
    category: {
        type: String,
        default: 'Divers'
    },
    photo_url:String
});

var produitModel = mongoose.model('products', productSchema);

var app = express();

app.use(cors());

app.use(function (req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});


app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.use("/upload", express.static(path.join(__dirname, 'upload')));
app.use(express.static('public'));



app.post('/products', (req, res) => {
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

app.get('/products', (req, res) => {
    produitModel.find(function (err, produits) {
        if (err) res.send(err);
        res.send(produits);

    })
})

app.delete('/products/:productId', function (req, res) {
    //console.log('product deleted : ' + req.params.productId);
    produitModel.findByIdAndRemove(req.params.productId, (err, docs) => {
        if (err) return console.log(err);
        res.send('Product removed Successufully :' + req.params)
    })
})

app.put('/products/:productId', (req, res) => {
    var produitId = req.params.productId;
    var produit = req.body;
    console.log(produit);
    produitModel.findOneAndUpdate({
        _id: req.params.productId
    }, req.body, function (err, produit) {
        res.send('produit successfully updated');
    });
})

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './upload');
    },
    filename: function (req, file, cb) {
        var produitId=req.body.produitId;
        console.log(produitId);
        var path = file.fieldname + '_' +produitId+'.'+file.originalname.split('.')[file.originalname.split('.').length - 1];
        cb(null, path);
        updatePhoto(produitId, path)
            .then(function () {
                res.sendStatus(200);
            })
            .catch(function (err) {
                res.status(400).send(err);
            });
            

    }
});

var upload = multer({storage: storage}).single('photo');

app.post('/upload', upload, function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            res.json({
                error_code: 1,
                err_desc: err
            });
            return;
        }
        res.json({
            error_code: 0,
            err_desc: 'Product Photo successfully uploded'
        });
    });
});

function updatePhoto(_id, path) {
    var deferred = Q.defer();
    produitModel.findByIdAndUpdate(_id, { $set: { photo_url: path } },
        function(err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);
            deferred.resolve();
        });
    return deferred.promise;
}

// Server Listening on http://localhost:3000
app.listen(3000, () => {
    console.log('Server listening on 3000');
})