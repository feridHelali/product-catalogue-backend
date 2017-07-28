 var getProduct = () => {
     var settings = {
         "async": true,
         "crossDomain": true,
         "url": "http://localhost:3000/products",
         "method": "GET",
         "headers": {
             "content-type": "application/x-www-form-urlencoded",
             "cache-control": "no-cache",
             "postman-token": "2377ed34-e826-a5b6-fa3f-49d28ba8e9f4"
         },
         "data": {
             "designation": "Spaguetti",
             "price": "2.800",
             "category": "Patte"
         }
     }

     $.ajax(settings).done(function (response) {
         console.log('response :', response);
         $('#output').append('<ul class="list-group">');
         let html = '';
         $.each(response, (index) => {
             html = '';
             html += '<li class="list-group-item">' + response[index]._id;
             html += ' | ' + response[index].designation;
             html += ' | ' + response[index].price;
             html += ' | ' + response[index].category;
             html += ' | ' + '<a href="#" onclick="deleteproduct('+response[index]._id+')">Delete Product</a>';
             html += ' | ' + '<a href="#" onclick="updateproduct('+response[index]._id+')">Update Product</a>';
             html += '</li>';
             $('#output').append(html);
         });
         $('#output').append('</ul>');
     });
 }

 var btnGetProduct = document.getElementById('btnGetProduct');
 btnGetProduct.addEventListener('click', getProduct);

 var myProduct = {};
 currentProduct = () => {
     let designation = document.getElementById('designation').value;
     let price = document.getElementById('price').value;
     let category = document.getElementById('category').value;
     myProduct.designation = designation;
     myProduct.price = price;
     myProduct.category = category;
     console.warn(myProduct);
 }


 document.getElementById('designation').addEventListener('change', currentProduct, false);
 document.getElementById('price').addEventListener('change', currentProduct, false);
 document.getElementById('category').addEventListener('change', currentProduct, false);


 var AddProduct = (p) => {
     console.log('fired my Product');
     let produit = p;
     var settings = {
         "async": true,
         "crossDomain": true,
         "url": "http://localhost:3000/products",
         "method": "POST",
         "headers": {
             "content-type": "application/x-www-form-urlencoded",
             "cache-control": "no-cache",
             "postman-token": "cf572d28-d7e0-5aba-dbe7-6b8342f222a2"
         }
     }

     settings.data = {
         designation: produit.designation,
         price: produit.price,
         category: produit.category
     }
        console.log(settings.data);


     $.ajax(settings).done(function (response) {
         console.log("produit inserer!");
         console.log(response);

     });
 }


 var myProduct = {};
 currentProduct = () => {
     let designation = document.getElementById('designation').value;
     let price = document.getElementById('price').value;
     let category = document.getElementById('category').value;
     myProduct.designation = designation;
     myProduct.price = price;
     myProduct.category = category;
     console.warn(myProduct);
 }


 document.getElementById('designation').addEventListener('change', currentProduct, false);
 document.getElementById('price').addEventListener('change', currentProduct, false);
 document.getElementById('category').addEventListener('change', currentProduct, false);


 var AddProduct = (p) => {
     console.log('fired my Product');
     let produit = p;
     var settings = {
         "async": true,
         "crossDomain": true,
         "url": "http://localhost:3000/products",
         "method": "POST",
         "headers": {
             "content-type": "application/x-www-form-urlencoded",
             "cache-control": "no-cache",
             "postman-token": "cf572d28-d7e0-5aba-dbe7-6b8342f222a2"
         }
     }

     settings.data = {
         designation: produit.designation,
         price: produit.price,
         category: produit.category
     }
        console.log(settings.data);


     $.ajax(settings).done(function (response) {
         console.log("produit inserer!");
         console.log(response);

     });
 }


var deleteproduct = function(productid){
    url ="http://localhost:3000/products/"
    url += productid;
    $.ajax({
        method : "DELETE",
        url: url,
        success : function(data, textStatus, xhr){
            console.log("done : " + data);
        },
        error: function(xhr, textStatus, errorThrown){
            console.log("fail : " + errorThrown);
        }
    });
};