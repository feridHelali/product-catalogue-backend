webpackJsonp([1,4],{

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 144;


/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(166);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Summer Grocery List';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(230),
        styles: [__webpack_require__(220)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__productlist_productlist_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__productform_productform_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__file_upload_file_upload_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_uploader__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_pagination__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_product_pipe__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__jumbutron_jumbutron_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__catalogue_catalogue_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__promotion_promotion_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */] },
    { path: 'promotion', component: __WEBPACK_IMPORTED_MODULE_16__promotion_promotion_component__["a" /* PromotionComponent */] },
    { path: 'catalogue', component: __WEBPACK_IMPORTED_MODULE_15__catalogue_catalogue_component__["a" /* CatalogueComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__productlist_productlist_component__["a" /* ProductlistComponent */],
            __WEBPACK_IMPORTED_MODULE_8__productform_productform_component__["a" /* ProductformComponent */],
            __WEBPACK_IMPORTED_MODULE_9__file_upload_file_upload_component__["a" /* FileUploadComponent */],
            __WEBPACK_IMPORTED_MODULE_12__search_product_pipe__["a" /* SearchProductPipe */],
            __WEBPACK_IMPORTED_MODULE_13__jumbutron_jumbutron_component__["a" /* JumbutronComponent */],
            __WEBPACK_IMPORTED_MODULE_15__catalogue_catalogue_component__["a" /* CatalogueComponent */],
            __WEBPACK_IMPORTED_MODULE_16__promotion_promotion_component__["a" /* PromotionComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_uploader__["a" /* NgUploaderModule */],
            __WEBPACK_IMPORTED_MODULE_11_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* ProductService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_gsap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogueComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var image_url = 'http://localhost:3000/upload/';
var CatalogueComponent = (function () {
    function CatalogueComponent(_productService) {
        this._productService = _productService;
        this.malist = new Array();
        this.produit = new __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* Product */]('', '', 0, '', 'default_product.png');
    }
    CatalogueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getAllProducts().subscribe(function (data) {
            _this.malist = data;
            _this.malist.map(function (product) {
                console.log('product:', product);
                if (product.photo_url) {
                    product.photo_url = image_url + product.photo_url;
                }
            });
            console.log(data);
        });
    };
    CatalogueComponent.prototype.animateProduit = function () {
        __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenMax"].from('img', 1, { alfa: 0, x: -50, y: +50, height: 0, width: 0, ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut });
        __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenMax"].to('img', 1, { alfa: 1, x: +50, y: -50, height: 100, width: 100, ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut });
    };
    return CatalogueComponent;
}());
CatalogueComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-catalogue',
        template: __webpack_require__(231),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], CatalogueComponent);

var _a;
//# sourceMappingURL=catalogue.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FileUploadComponent = (function () {
    function FileUploadComponent(zone) {
        this.zone = zone;
        this.currentProduct = {};
        this.sizeLimit = 5000000; // 1MB
        this.options = new __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__["b" /* NgUploaderOptions */]({
            url: 'http://localhost:3000/upload',
            filterExtensions: true,
            allowedExtensions: ['jpg', 'png', 'jpeg'],
            maxSize: 2097152,
            data: { productId: this.currentProduct._id },
            autoUpload: false,
            fieldName: 'photo',
            fieldReset: true,
            maxUploads: 2,
            method: 'POST',
            previewUrl: true,
            withCredentials: false
        });
        this.inputUploadEvents = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    FileUploadComponent.prototype.startUpload = function () {
        this.inputUploadEvents.emit('startUpload');
    };
    FileUploadComponent.prototype.beforeUpload = function (uploadingFile) {
        if (uploadingFile.size > this.sizeLimit) {
            uploadingFile.setAbort();
            this.errorMessage = 'File is too large!';
        }
    };
    FileUploadComponent.prototype.handleUpload = function (data) {
        var _this = this;
        setTimeout(function () {
            _this.zone.run(function () {
                _this.response = data;
                if (data && data.response) {
                    _this.response = JSON.parse(data.response);
                    _this.errorMessage = _this.response.err_desc;
                }
            });
        });
    };
    FileUploadComponent.prototype.handlePreviewData = function (data) {
        this.previewData = data;
    };
    FileUploadComponent.prototype.ngOnInit = function () {
        this.options.data = { produitId: this.currentProduct._id };
    };
    return FileUploadComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], FileUploadComponent.prototype, "currentProduct", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__["b" /* NgUploaderOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__["b" /* NgUploaderOptions */]) === "function" && _a || Object)
], FileUploadComponent.prototype, "options", void 0);
FileUploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-file-upload',
        template: __webpack_require__(232),
        styles: [__webpack_require__(222)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* NgZone */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* NgZone */]) === "function" && _b || Object])
], FileUploadComponent);

var _a, _b;
//# sourceMappingURL=file-upload.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(233),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JumbutronComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var image_url = 'http://localhost:3000/upload/';
var JumbutronComponent = (function () {
    function JumbutronComponent(_productService) {
        this._productService = _productService;
        this.malist = new Array();
    }
    JumbutronComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getAllProducts().subscribe(function (data) {
            _this.malist = data;
            _this.malist.map(function (product) {
                console.log('product:', product);
                if (product.photo_url) {
                    product.photo_url = image_url + product.photo_url;
                }
            });
            console.log(data);
        });
    };
    return JumbutronComponent;
}());
JumbutronComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-jumbutron',
        template: __webpack_require__(234),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], JumbutronComponent);

var _a;
//# sourceMappingURL=jumbutron.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(235),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductformComponent = (function () {
    function ProductformComponent(_productService) {
        this._productService = _productService;
        this.context = 'ADD';
        this.errorMessage = '';
        this.Btn_SaveAdd_label = 'Add Product';
    }
    ProductformComponent.prototype.ngOnInit = function () {
        this.currentProduct = { _id: '', designation: '', price: 0, category: '' };
    };
    ProductformComponent.prototype.onChangeDesignation = function () {
        if (this.currentProduct._id === '') {
            this.context = 'ADD';
            this.Btn_SaveAdd_label = 'Add Product';
        }
        else {
            this.context = 'UPDATE';
            this.Btn_SaveAdd_label = 'Update Product';
        }
    };
    ProductformComponent.prototype.addOrEdit = function (context, product) {
        switch (context) {
            case 'ADD':
                this.addCurrentProduct(product);
                break;
            case 'UPDATE':
                this.updateCurrentProduct(product);
                break;
        }
    };
    ProductformComponent.prototype.updateCurrentProduct = function (theProduct) {
        var _this = this;
        var body = { designation: '', price: 0, category: '' };
        body.designation = theProduct.designation;
        body.price = theProduct.price;
        body.category = theProduct.category;
        this._productService
            .updateProduct('http://localhost:3000/products/' + theProduct._id, body)
            .subscribe(function (result) { return console.log(result); }, function (error) { return _this.errorMessage = error; });
        this.currentProduct = { _id: '', designation: '', price: 0, category: '' };
    };
    ProductformComponent.prototype.addCurrentProduct = function (theProduct) {
        var _this = this;
        var body = { designation: '', price: 0, category: '' };
        body.designation = theProduct.designation;
        body.price = theProduct.price;
        body.category = theProduct.category;
        this._productService
            .addProduct(body)
            .subscribe(function (result) { return console.log(result); }, function (error) { return _this.errorMessage = error; });
        this.currentProduct = { _id: '', designation: '', price: 0, category: '' };
    };
    return ProductformComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ProductformComponent.prototype, "currentProduct", void 0);
ProductformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-productform',
        template: __webpack_require__(236),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], ProductformComponent);

var _a;
//# sourceMappingURL=productform.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var image_url = 'http://localhost:3000/upload/';
var ProductlistComponent = (function () {
    function ProductlistComponent(_productService) {
        this._productService = _productService;
        this.malist = new Array();
        this.produit = new __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */]('', '', 0, '', 'default_product.png');
        this.showform = false;
        this.loading = false;
        this.p = 1;
        this.total = 0;
        this.searchString = '';
    }
    ProductlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getAllProducts().subscribe(function (data) {
            _this.malist = data;
            _this.malist.map(function (product) {
                console.log('product:', product);
                if (product.photo_url) {
                    product.photo_url = image_url + product.photo_url;
                }
            });
            console.log(data);
        });
        this.total = this.malist.length;
    };
    ProductlistComponent.prototype.edit = function (id) {
        this.produit = this.malist.filter(function (p) { return p._id === id; })[0];
        console.log('Product in Edit Mode', this.produit);
    };
    ProductlistComponent.prototype.delete = function (id) {
        var _this = this;
        var p = this.malist.filter(function (p) { return p._id === id; })[0];
        console.log('Product in Delete Mode', this.produit);
        this._productService.deleteProduct(p._id).subscribe(function (response) { return console.log('Delete Product', response); });
        this._productService.getAllProducts().subscribe(function (data) {
            _this.malist = data;
            console.log(data);
        });
    };
    ProductlistComponent.prototype.displayForm = function () {
        console.log('before:', this.showform);
        this.showform = !this.showform;
        console.log('after:', this.showform);
    };
    return ProductlistComponent;
}());
ProductlistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-productlist',
        template: __webpack_require__(237),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], ProductlistComponent);

var _a;
//# sourceMappingURL=productlist.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_gsap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var image_url = 'http://localhost:3000/upload/';
var PromotionComponent = (function () {
    function PromotionComponent(_productService) {
        this._productService = _productService;
        this.malist = new Array();
        this.produit = new __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* Product */]('', '', 0, '', 'default_product.png');
    }
    PromotionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getAllProducts().subscribe(function (data) {
            _this.malist = data;
            _this.malist.map(function (product) {
                console.log('product:', product);
                if (product.photo_url) {
                    product.photo_url = image_url + product.photo_url;
                }
            });
            console.log(data);
        });
    };
    PromotionComponent.prototype.animateProduit = function () {
        __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenMax"].to('img', .5, { y: -50, x: +50, ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut });
        __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenMax"].to('img', .5, { y: +100, x: -100, ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut });
    };
    return PromotionComponent;
}());
PromotionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-promotion',
        template: __webpack_require__(238),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], PromotionComponent);

var _a;
//# sourceMappingURL=promotion.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProductPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchProductPipe = (function () {
    function SearchProductPipe() {
    }
    SearchProductPipe.prototype.transform = function (products, input) {
        if (input) {
            input = input.toLowerCase();
            return products.filter(function (product) {
                return product.designation.toLowerCase().indexOf(input) > -1;
            });
        }
        return products;
    };
    return SearchProductPipe;
}());
SearchProductPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'searchProductPipe'
    })
], SearchProductPipe);

//# sourceMappingURL=search-product.pipe.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".product_photo{\r\n    padding:20px;\r\n    width: 500px;\r\n    height: 200px;\r\n}\r\n\r\n#myCarousel{\r\n    height: 500px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".product{\r\n    list-style-type: none !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = " \n<app-navbar></app-navbar>\n<div class=\"container\">\n  <h1>{{title}}</h1>\n  <router-outlet></router-outlet>\n  <br>\n  <div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    Alfa Computers\n  </div>\n  <div class=\"panel-footer\">\n    Grocery List\n  </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-6 col-md-3\" *ngFor=\"let produit of malist\" >\n    <a href=\"#\" class=\"thumbnail\" (mouseover)=\"animateProduit()\">\n      <img [src]=\"produit.photo_url\" alt=\"produit.designation\" style=\"width:250px !important\">\n    </a>\n    {{produit.designation}}  |  {{produit.price | currency:'TND':false}}\n  </div>\n</div>"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<div class=\"button-container\">\r\n  <label class=\"upload-button is-pulled-left\">\r\n    <input type=\"file\"\r\n           class=\"hidden\"\r\n           name=\"photo\"\r\n           ngFileSelect\r\n           [options]=\"options\"\r\n           [events]=\"inputUploadEvents\"\r\n           (onUpload)=\"handleUpload($event)\"\r\n           (onPreviewData)=\"handlePreviewData($event)\"\r\n           (beforeUpload)=\"beforeUpload($event)\">\r\n    <span class=\"glyphicon glyphicon-folder-open\"></span>\r\n  </label>\r\n</div>\r\n<span>\r\n    Allowed extensions: <code><b>.jpg</b>, ,<b>.jpeg</b> </code>\r\n</span>\r\n<div>\r\n  <button type=\"button\" class=\"start-upload-button\" (click)=\"startUpload()\">\r\n      <span class=\"glyphicon glyphicon-upload\"></span></button>\r\n</div>\r\n<!--<div *ngIf=\"response \">\r\n  <pre><code>{{ response | json }}</code></pre>\r\n</div>-->\r\n<div>\r\n  <pre><code>{{ category | json }}</code></pre>\r\n</div>\r\n<div *ngIf=\"errorMessage\">\r\n  <code>{{ errorMessage }}</code>\r\n</div>\r\n<div *ngIf=\"previewData && !response\">\r\n  <img [src]=\"previewData\">\r\n</div>\r\n"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<app-jumbutron></app-jumbutron>\n<app-productlist></app-productlist>"

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"5\"></li>\n    </ol>\n\n\n    <!-- Wrapper for slides -->\n\n    <div class=\"carousel-inner\">\n\n      <div class=\"item active\">\n        <img class=\"product_photo\" src=\"http://localhost:3000/upload/default_product.png\" alt=\"Shopping\">\n        <span class=\"badge \" style=\"font-size:5em; display:block;float:right\">Shopping</span>\n      </div>\n\n      <div class=\"item\">\n        <img class=\"product_photo\" src=\"http://localhost:3000/upload/photo_597da0a8fa36b429dc1dbb47.png\" alt=\"Datte (Deglet Ennour Tunisienne)\">\n        <span class=\"badge\" style=\"font-size:5em; float:right\">Deglet Ennour Tunisienne</span>\n      </div>\n\n      <div class=\"item\">\n        <img class=\"product_photo\" src=\"http://localhost:3000/upload/photo_597da0e4fa36b429dc1dbb48.png\" alt=\"Fraise\">\n        <span class=\"badge\" style=\"font-size:5em; float:right\">Fraise</span>\n      </div>\n\n      <div class=\"item\">\n        <img class=\"product_photo\" src=\"http://localhost:3000/upload/photo_597daa0fc789db079c093770.png\" alt=\"Carrotte\">\n        <span class=\"badge\" style=\"font-size:5em; float:right\">Carrotte</span>\n      </div>\n\n      <div class=\"item\">\n        <img class=\"product_photo\" src=\"http://localhost:3000/upload/photo_597da9f8c789db079c09376f.png\" alt=\"Danette\">\n        <span class=\"badge\" style=\"font-size:5em; float:right\">Vitalait Dolce</span>\n      </div>\n      <div class=\"item\">\n        <img class=\"product_photo\" src=\"http://localhost:3000/upload/photo_597daac7c789db079c093772.png\" alt=\"Banane\">\n        <span class=\"badge\" style=\"font-size:5em; float:right\">Banane Bresilien</span>\n      </div>\n    </div>\n\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>   <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n  </div>\n</div>\n"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-inverse\" role=\"navigation\">\n  <a class=\"navbar-brand\" href=\"#\">Grocery List</a>\n  <ul class=\"nav navbar-nav\">\n    <li class=\"active\">\n      <a  [routerLink]=\"['/']\">Home</a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/promotion']\">Promotions</a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/catalogue']\">Catalogue</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<form role=\"form\" #form=\"ngForm\">\n  <legend>Product Details</legend>\n  <div class=\"form-group\">\n    <label for=\"\">Designation:</label>\n    <input type=\"text\" class=\"form-control\" id=\"designation\" \n           name=\"designation\" [(ngModel)]=\"currentProduct.designation\" \n           placeholder=\"designation\"\n           (input)=\"onChangeDesignation()\">\n\n    <label for=\"\">Price:</label>\n    <input type=\"text\" class=\"form-control\" id=\"price\" name=\"price\" [(ngModel)]=\"currentProduct.price\" placeholder=\"price\">\n    <label for=\"\">Category:</label>\n    <input type=\"text\" class=\"form-control\" id=\"category\" name=\"category\" [(ngModel)]=\"currentProduct.category\" placeholder=\"category\">\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addOrEdit(context,currentProduct)\">{{Btn_SaveAdd_label}}</button>\n\n</form>\n"

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"showform\">\n  <div class=\"col-md-4\">\n    <app-productform [currentProduct]='produit'></app-productform>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div style=\"padding:30px !important\">\n    <div class=\"col-md-4\">\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"queryString\" placeholder=\"Search\">\n    </div>\n  </div>\n</div>\n<div class=\"row\" style=\"padding:20px !important;\">\n  <button class=\"btn-primary\" (click)=\"displayForm()\"> Show Detail form </button>\n  <div class=\"col-md-8\">\n    <table class=\"table table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Code</th>\n          <th>Designation</th>\n          <th>Price</th>\n          <th>Category</th>\n          <th>Edit</th>\n          <th>Remove</th>\n          <th>Upload</th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let produit of malist \n      | searchProductPipe : queryString \n      | paginate: { itemsPerPage: 7, currentPage: p , totalItems: this.total };\n      let i=index\">\n        <tr>\n           <td class=\"row\">{{ (p- 1) * 7 + i +1 }}</td>\n          <td><code>{{produit._id}}</code></td>\n          <td>{{produit.designation}}</td>\n          <td>{{produit.price | currency:'TND':false}}</td>\n          <td>{{produit.category}}</td>\n          <td><button class=\"btn-primary\" (click)=\"edit(produit._id)\"><span class=\"glyphicon glyphicon-pencil\"></span> </button></td>\n          <td><button class=\"btn-danger\" (click)=\"delete(produit._id)\"><span class=\"glyphicon glyphicon-remove\"></span></button></td>\n          <td>\n            <img [src]=\"produit.photo_url || 'http://localhost:3000/upload/default_product.png'\" style=\"border:1 solid gray;float:left;margin:5px;padding:2px;width:120px;display:block;float:left\">\n            <app-file-upload [currentProduct]='produit'></app-file-upload>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n     <pagination-controls (pageChange)=\"p = $event\" class=\"my-pagination\"></pagination-controls>\n  </div>\n</div>\n"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<div class=\"row list-group\" *ngFor=\"let produit of malist;let i=index;\">\n  <li class=\"product\">\n    <button class=\"thumbnail\" (click)=\"animateProduit()\">\n      <img [src]=\"produit.photo_url\" alt=\"produit.designation\" style=\"width:250px !important\">\n    </button> {{produit.designation}} | {{produit.price | currency:'TND':false}}\n</li>\n</div>\n\n"

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getAllProducts = function () {
        return this.http.get('http://localhost:3000/products', {})
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.updateProduct = function (url, param) {
        return this.http.put(url, param, this.options);
    };
    ProductService.prototype.deleteProduct = function (_id) {
        return this.http.delete('http://localhost:3000/products/' + _id, this.options);
    };
    ProductService.prototype.addProduct = function (product) {
        return this.http.post('http://localhost:3000/products', product, this.options);
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(145);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(_id, designation, price, category, photo_url) {
        this._id = _id;
        this.designation = designation;
        this.price = price;
        this.category = category;
        this.photo_url = photo_url;
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ })

},[506]);
//# sourceMappingURL=main.bundle.js.map