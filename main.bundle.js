webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n  <div class=\"logo cursor-pointer\">\n    <img src=\"assets/media/logo.png\" routerLink=\"/\" alt=\"hexo-logo\" />\n  </div>\n  <div class=\"nav-list\">\n    <ul>\n      <li class=\"hover-up\">\n        <a class=\"hover-up\" routerLink=\"/\" href=\"\">HOME</a>\n      </li>\n      <li>\n        <a href=\"\">SHOP</a>\n      </li>\n      <li>\n        <a href=\"\">JOURNAL</a>\n      </li>\n      <li>\n        <a href=\"\">MORE</a>\n      </li>\n    </ul>\n  </div>\n  <a routerLink=\"/shoppingcart\" class=\"cart\" *ngIf=\"cartNum===0\">\n    MY CART\n  </a>\n  <a routerLink=\"/shoppingcart\" class=\"cart\" *ngIf=\"cartNum>0\">\n    MY CART ({{cartNum}}) <span class=\"small\" >▼</span>\n  </a>\n\n<div class=\"shoppingCart-hover p-1\">\n  <div class=\"shoppingItems-wrap\">\n   <div class=\"shoppingItems row p-1 mt-2\" *ngFor=\"let item of checkoutItems;let i = index\">\n      <div class=\"img col-2 offset-1\" [ngStyle]=\"{'background-image': 'url(assets/media/' + item.image + ')'}\"></div>\n      <div class=\"detail col-8\">\n        <p class=\"m-1\" ><span class=\"title\" >{{item.title | uppercase}}</span> <span class=\"number\">✕ {{item.num}}</span></p>\n        <p class=\"brand m-1\">{{item.brand}}</p>\n        <p class=\"price m-1\">$ {{item.price*item.num |number:'1.2'}}</p>\n      </div>\n      <div class=\"col-1 closeBox cursor-pointer\" (click)=\"addNum(item.id,-1*item.num)\">\n        <div class=\"close\"></div>\n      </div>\n    </div>\n    </div>\n    <div class=\"totalPrice-wrap p-2 mt-2 clearfix\">\n      <p class=\"float-left\" >TOTAL</p>\n      <p class=\"float-right\" >${{sum|number:'1.2'}}</p>\n    </div>\n    <div class=\"button-wrap row pl-5 pr-5 pt-2 pb-4\" >\n      <div class=\"col-6 m-0\">\n        <div class=\"button cursor-pointer\" routerLink=\"/shoppingcart\" >VIEW CART</div>\n      </div>\n      <div class=\"col-6 m-0\" >\n        <div class=\"button cursor-pointer checkout\">CHECKOUT</div>\n      </div>\n    </div>\n</div>\n</nav>\n<router-outlet></router-outlet>\n<!-- <app-product-list></app-product-list> -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav {\n  display: -ms-flexbox;\n  display: flex;\n  z-index: 30;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-grid-column-align: center;\n      justify-items: center;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 100%;\n  height: 80px;\n  border-bottom: 1px solid #ddd;\n  font-size: 1rem;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-weight: 700;\n  background-color: #fff; }\n\n.logo {\n  margin-left: 10px; }\n\na {\n  text-decoration: none;\n  color: #000; }\n\nul {\n  margin: 0;\n  padding: 0; }\n\nul li {\n  margin: 10px;\n  list-style: none;\n  display: inline;\n  text-align: center; }\n\n.cart {\n  margin-right: 30px;\n  line-height: 80px; }\n\n.banner {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  background-color: #fff;\n  height: 500px; }\n\n.left-image, .right-image {\n  width: 24.5%;\n  height: 100%;\n  background-image: url(\"/./media/plates-header.jpg\"); }\n\n.left-image {\n  background-position: left center; }\n\n.right-image {\n  background-position: right center; }\n\n.banner-demo {\n  position: relative;\n  z-index: 0;\n  margin: 0 auto;\n  width: 50%;\n  height: 100%;\n  text-align: center;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.7); }\n\n.banner-demo h1 {\n  display: inline-block;\n  margin-top: 15%;\n  padding: 15px;\n  font-family: 'Times New Roman', Times, serif;\n  font-weight: 500;\n  font-size: 3rem;\n  border-bottom: 1px solid #fff; }\n\n.banner-demo p {\n  display: inline-block;\n  margin: 0 auto;\n  width: 90%;\n  text-align: left;\n  font-size: 1.2rem; }\n\n.cart:hover + .shoppingCart-hover {\n  opacity: 1;\n  z-index: 20; }\n\n.shoppingCart-hover:hover {\n  opacity: 1;\n  z-index: 1; }\n\n.shoppingCart-hover {\n  opacity: 0;\n  position: absolute;\n  z-index: -1;\n  top: 80px;\n  right: 5px;\n  width: 500px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  background-color: #fff;\n  box-shadow: 2px 2px 8px 2px rgba(5, 5, 5, 0.5);\n  transition: all 0.2s;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  -ms-transition: all 0.2s;\n  -o-transition: all 0.2s; }\n\n.img {\n  width: 100px;\n  height: 80px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center; }\n\n.title {\n  font-size: 1rem;\n  font-weight: 700; }\n\n.number {\n  display: inline-block;\n  font-size: 0.8rem;\n  word-wrap: break-word; }\n\n.close {\n  display: inline-block;\n  margin-top: 10px;\n  width: 15px;\n  height: 1px;\n  background: #666;\n  line-height: 0;\n  font-size: 0;\n  vertical-align: middle;\n  -webkit-transform: rotate(45deg); }\n\n.close:after {\n  content: '/';\n  display: block;\n  width: 15px;\n  height: 1px;\n  background: #666;\n  -webkit-transform: rotate(-90deg); }\n\n.totalPrice-wrap {\n  width: 90%;\n  margin-left: 35px;\n  border-top: 1px solid #aaa; }\n\n.button-wrap {\n  text-align: center; }\n\n.button {\n  height: 50px;\n  line-height: 50px;\n  vertical-align: middle;\n  border: 1px solid #000; }\n\n.button:hover {\n  color: #fff;\n  background-color: #000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_shopping_service__ = __webpack_require__("./src/app/service/shopping.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(shoppingItems) {
        this.shoppingItems = shoppingItems;
        this.itemAmount = [];
        this.cartNum = 0;
    }
    AppComponent.prototype.ngDoCheck = function (changes) {
        var _this = this;
        var count = 0;
        this.shoppingItems.shoppingItems.forEach(function (ele) {
            count += ele.num;
            _this.cartNum = count;
        });
        this.checkoutItems = this.shoppingItems.shoppingItems.filter(function (val) { return val.num > 0; });
        this.sum = 0;
        this.shoppingItems.shoppingItems.forEach(function (val, idx) {
            _this.sum += val.price * val.num;
            _this.itemAmount[idx] = val.num;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "app-root",
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_shopping_service__["a" /* ShoppingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_shopping_service__["a" /* ShoppingService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_list_product_list_component__ = __webpack_require__("./src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_detail_product_detail_component__ = __webpack_require__("./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shopping_cart_shopping_cart_component__ = __webpack_require__("./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_get_product_service__ = __webpack_require__("./src/app/service/get-product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_shopping_service__ = __webpack_require__("./src/app/service/shopping.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_8__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__service_get_product_service__["a" /* GetProductService */], __WEBPACK_IMPORTED_MODULE_11__service_shopping_service__["a" /* ShoppingService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list_product_list_component__ = __webpack_require__("./src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_detail_product_detail_component__ = __webpack_require__("./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shopping_cart_shopping_cart_component__ = __webpack_require__("./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__product_list_product_list_component__["a" /* ProductListComponent */] },
                { path: 'shoppingcart', component: __WEBPACK_IMPORTED_MODULE_4__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
                { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_3__product_detail_product_detail_component__["a" /* ProductDetailComponent */] }
            ])]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-wrap\">\n  <div class=\"path\">\n    <div class=\"m-4\">\n      <div class=\"strong\">HOME / PLATES /</div> {{product.title}}</div>\n  </div>\n  <div class=\"detail p-4 row\">\n    <div class=\"col-5 img\" [ngStyle]=\"{'background-image': 'url(assets/media/' + product.image + ')'}\"></div>\n    <div class=\"col-7 p-4\">\n      <div class=\"descr pb-4\">\n        <p>{{product.brand}}</p>\n        <h2>{{product.title}}</h2>\n        <p class=\"mt-5\">${{product.price}}</p>\n        <p>{{product.description}}</p>\n      </div>\n      <div class=\"addToCart-wrap p-4 row\">\n        <div class=\"quantity col-3 offset-3 row\">\n          <div class=\"numberBox\">\n            {{this.productNumber}}</div>\n          <div class=\"numberButtons\">\n            <div class=\"numberButton cursor-pointer\" (click)=\"addNum(1)\">+</div>\n            <div class=\"numberButton cursor-pointer\" (click)=\"addNum(-1)\">-</div>\n          </div>\n        </div>\n        <div class=\"col-4 addToCart-button\" (click)=\"addProductToCart(product.id)\">\n          ADD TO CART\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".detail-wrap {\n  text-align: center; }\n\n.detail {\n  width: 70%;\n  min-width: 1000px;\n  margin: 0 auto; }\n\n.path {\n  color: #555; }\n  .path .strong {\n    display: inline;\n    color: #000;\n    font-weight: 700; }\n\n.img {\n  height: 400px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover; }\n\n.descr {\n  border-bottom: 1px solid #999; }\n\n.quantity {\n  min-width: 140px;\n  height: 100%; }\n  .quantity .numberBox {\n    vertical-align: middle;\n    line-height: 60px;\n    width: 60px;\n    height: 60px;\n    background-color: rgba(0, 0, 0, 0.15); }\n  .quantity .numberButton {\n    width: 28px;\n    height: 28px;\n    margin-bottom: 4px;\n    margin-left: 4px;\n    vertical-align: middle;\n    line-height: 28px;\n    font-size: 1.2rem;\n    background-color: rgba(0, 0, 0, 0.3); }\n\n.addToCart-button {\n  display: inline-block;\n  color: #fff;\n  height: 60px;\n  line-height: 60px;\n  vertical-align: middle;\n  background-color: #000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_get_product_service__ = __webpack_require__("./src/app/service/get-product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_shopping_service__ = __webpack_require__("./src/app/service/shopping.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = (function () {
    function ProductDetailComponent(routeInfo, getProduct, shoppingItems) {
        this.routeInfo = routeInfo;
        this.getProduct = getProduct;
        this.shoppingItems = shoppingItems;
        this.productNumber = 1;
    }
    ProductDetailComponent.prototype.ngOnInit = function () { };
    ProductDetailComponent.prototype.ngDoCheck = function () {
        var _this = this;
        this.routeInfo.params.subscribe(function (params) { return (_this.productId = params["id"]); });
        this.productId = this.routeInfo.snapshot.params["id"];
        this.products = this.getProduct.products;
        this.product = this.products[this.productId];
    };
    //get json data from .json file
    // getHomeInfo() {
    //   this.getProduct.getProduct().subscribe(
    //     res => {
    //       this.products = res.json();
    //       this.dataArr = this.products;
    //       console.log(this.products);
    //       this.products.forEach((val, idx) => {
    //         this.products[idx] = val;
    //         console.log(val.id);
    //         console.log(val.title);
    //       });
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
    // }
    //change the number in the box
    ProductDetailComponent.prototype.addNum = function (num) {
        this.productNumber =
            this.productNumber <= 0 ? 0 : (this.productNumber += num);
    };
    //add products to shopping cart
    ProductDetailComponent.prototype.addProductToCart = function (id) {
        this.shoppingItems.shoppingItems[id].num += this.productNumber;
        console.log(this.shoppingItems.shoppingItems[id].num);
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "app-product-detail",
        template: __webpack_require__("./src/app/product-detail/product-detail.component.html"),
        styles: [__webpack_require__("./src/app/product-detail/product-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_get_product_service__["a" /* GetProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_get_product_service__["a" /* GetProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_shopping_service__["a" /* ShoppingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_shopping_service__["a" /* ShoppingService */]) === "function" && _c || Object])
], ProductDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\n  <div class=\"left-image\"></div>\n  <div class=\"banner-demo\">\n    <h1>Plates</h1>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus.\n      In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl sit.</p>\n  </div>\n  <div class=\"right-image\"></div>\n</div>\n<section class=\"main row\">\n  <div class=\"product-list col-4 p-4\" *ngFor=\"let product of products;let i=index\">\n    <div class=\"img\" [ngStyle]=\"{'background-image': 'url(assets/media/' + product.image + ')'}\">\n      <a [routerLink]=\"['/detail',product.id]\" href=\"\">\n        <div class=\"view p-2\">VIEW DETAILS</div>\n      </a>\n        <div class=\"addCart p-2\" (click)=\"addProductToCart(i)\">ADD TO CART</div>\n    </div>\n\n    <p class=\"mt-3\">{{product.brand}}</p>\n    <h2>{{product.title | uppercase }}</h2>\n    <p>${{product.price}}</p>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/product-list/product-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".banner {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  background-color: #fff;\n  height: 500px; }\n\n.left-image,\n.right-image {\n  width: 24.5%;\n  height: 100%;\n  background-image: url(" + escape(__webpack_require__("./src/assets/media/plates-header.jpg")) + "); }\n\n.left-image {\n  background-position: left center; }\n\n.right-image {\n  background-position: right center; }\n\n.banner-demo {\n  position: relative;\n  z-index: 0;\n  margin: 0 auto;\n  width: 50%;\n  height: 100%;\n  text-align: center;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.7); }\n  .banner-demo h1 {\n    display: inline-block;\n    margin-top: 15%;\n    padding: 15px;\n    font-family: 'Times New Roman', Times, serif;\n    font-weight: 500;\n    font-size: 3rem;\n    border-bottom: 1px solid #fff; }\n  .banner-demo p {\n    display: inline-block;\n    margin: 0 auto;\n    width: 90%;\n    text-align: left;\n    font-size: 1.2rem; }\n\n.main {\n  width: 80%;\n  min-width: 1000px;\n  margin: 0 auto;\n  padding: 20px; }\n\n.product-list {\n  text-align: center;\n  cursor: default; }\n  .product-list .img {\n    position: relative;\n    margin: 0 auto;\n    width: 80%;\n    height: 240px;\n    background-size: cover;\n    background-position: center center; }\n  .product-list h2 {\n    font-size: 1.2rem; }\n  .product-list a {\n    text-decoration: none; }\n\n.view, .addCart {\n  display: inline-block;\n  z-index: 2;\n  position: absolute;\n  left: 50%;\n  opacity: 0;\n  color: #fff;\n  background-color: #000;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  -ms-transition: all 0.5s;\n  -o-transition: all 0.5s; }\n\n.img::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  opacity: 0;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  -ms-transition: all 0.5s;\n  -o-transition: all 0.5s; }\n\n.img:hover::after {\n  opacity: .5; }\n\n.img:hover .view,\n.img:hover .addCart {\n  opacity: 0.9;\n  cursor: pointer; }\n\n.view {\n  top: 40%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%); }\n\n.addCart {\n  top: 65%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_get_product_service__ = __webpack_require__("./src/app/service/get-product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shopping_service__ = __webpack_require__("./src/app/service/shopping.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = (function () {
    function ProductListComponent(getProductService, shoppingItems) {
        this.getProductService = getProductService;
        this.shoppingItems = shoppingItems;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        // this.getHomeInfo();
        this.products = this.getProductService.products;
    };
    // getHomeInfo() {
    //   this.getProductService.getProduct().subscribe(
    //     res => {
    //       this.products = res.json();
    //       this.products.forEach((val, idx) => {
    //         val.id = idx;
    //       });
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
    // }
    ProductListComponent.prototype.addProductToCart = function (idx) {
        this.shoppingItems.shoppingItems[idx].num++;
        console.log(this.shoppingItems.shoppingItems[idx].num);
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "app-product-list",
        template: __webpack_require__("./src/app/product-list/product-list.component.html"),
        styles: [__webpack_require__("./src/app/product-list/product-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_get_product_service__["a" /* GetProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_get_product_service__["a" /* GetProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_shopping_service__["a" /* ShoppingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_shopping_service__["a" /* ShoppingService */]) === "function" && _b || Object])
], ProductListComponent);

var _a, _b;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "./src/app/service/get-product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetProductService; });
/* unused harmony export Product */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetProductService = (function () {
    function GetProductService(httpService) {
        this.httpService = httpService;
        // getHomeInfo() {
        //   this.getProduct().subscribe(
        //     res => {
        //       this.products = res.json();
        //       console.log("res is " + this.products);
        //       this.products.forEach((val, idx) => {
        //         val.id = idx;
        //         console.log(val.id);
        //         console.log(val.title);
        //       });
        //     },
        //     error => {
        //       console.log(error);
        //     }
        //   );
        // }
        this.products = [
            {
                "id": 0,
                "title": "Blue Stripe Stoneware Plate",
                "brand": "Kiriko",
                "price": 40,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                "image": "blue-stripe-stoneware-plate.jpg"
            },
            {
                "id": 1,
                "title": "Hand Painted Blue Flat Dish",
                "brand": "Kiriko",
                "price": 28,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
                "image": "hand-painted-blue-flat-dish.jpg"
            },
            {
                "id": 2,
                "title": "Heme",
                "brand": "Dust & Form",
                "price": 52,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
                "image": "heme.jpg"
            },
            {
                "id": 3,
                "title": "Mashiko-Yaki Green Small Plate",
                "brand": "Kiriko",
                "price": 28,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                "image": "mashiko-yaki-green-small-plate.jpg"
            },
            {
                "id": 4,
                "title": "Mashiko-Yaki Indigo Small Plate",
                "brand": "Kiriko",
                "price": 28,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                "image": "mashiko-yaki-indigo-small-plate.jpg"
            },
            {
                "id": 5,
                "title": "Mashiko-Yaki Saucer",
                "brand": "Kiriko",
                "price": 18,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                "image": "mashiko-yaki-saucer.jpg"
            }
        ];
    }
    GetProductService.prototype.getProduct = function () {
        return this.httpService.get("assets/products.json");
    };
    return GetProductService;
}());
GetProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_http__["b" /* Http */]) === "function" && _a || Object])
], GetProductService);

var Product = (function () {
    function Product(id, num, brand, title, price, description, image) {
        this.id = id;
        this.num = num;
        this.brand = brand;
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }
    return Product;
}());

var _a;
//# sourceMappingURL=get-product.service.js.map

/***/ }),

/***/ "./src/app/service/shopping.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_product_service__ = __webpack_require__("./src/app/service/get-product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingService; });
/* unused harmony export ShoppingItem */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingService = (function () {
    function ShoppingService(getProduct) {
        var _this = this;
        this.getProduct = getProduct;
        this.productData = [
            {
                "id": 0,
                "title": "Blue Stripe Stoneware Plate",
                "brand": "Kiriko",
                "price": 40,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                "image": "blue-stripe-stoneware-plate.jpg"
            },
            {
                "id": 1,
                "title": "Hand Painted Blue Flat Dish",
                "brand": "Kiriko",
                "price": 28,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
                "image": "hand-painted-blue-flat-dish.jpg"
            },
            {
                "id": 2,
                "title": "Heme",
                "brand": "Dust & Form",
                "price": 52,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
                "image": "heme.jpg"
            },
            {
                "id": 3,
                "title": "Mashiko-Yaki Green Small Plate",
                "brand": "Kiriko",
                "price": 28,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                "image": "mashiko-yaki-green-small-plate.jpg"
            },
            {
                "id": 4,
                "title": "Mashiko-Yaki Indigo Small Plate",
                "brand": "Kiriko",
                "price": 28,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                "image": "mashiko-yaki-indigo-small-plate.jpg"
            },
            {
                "id": 5,
                "title": "Mashiko-Yaki Saucer",
                "brand": "Kiriko",
                "price": 18,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                "image": "mashiko-yaki-saucer.jpg"
            }
        ];
        this.shoppingItems = this.productData;
        this.productData.forEach(function (ele, idx) {
            _this.shoppingItems[idx].num = 0;
        });
    }
    return ShoppingService;
}());
ShoppingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__get_product_service__["a" /* GetProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__get_product_service__["a" /* GetProductService */]) === "function" && _a || Object])
], ShoppingService);

var ShoppingItem = (function () {
    function ShoppingItem(id, num, brand, title, price, description, image) {
        this.id = id;
        this.num = num;
        this.brand = brand;
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }
    return ShoppingItem;
}());

var _a;
//# sourceMappingURL=shopping.service.js.map

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"shoppingCart\">\n  <h1>Shopping Cart</h1>\n  <div class=\"main p-5\">\n    <div class=\"tableHead row pb-3\">\n      <span class=\"col-8\">\n        PRODUCT\n      </span>\n      <span class=\"col-2\">\n        QUANTITY\n      </span>\n      <span class=\"col-1\">\n        TOTAL\n      </span>\n      <span class=\"col-1\">\n        ACTION\n      </span>\n    </div>\n    <div class=\"shoppingItems row pt-4 pb-5\" *ngFor=\"let item of checkoutItems;let i = index\">\n      <div class=\"img col-3\" [ngStyle]=\"{'background-image': 'url(assets/media/' + item.image + ')'}\"></div>\n      <div class=\"detail ml-4 col-5\">\n        <p>{{item.brand}}</p>\n        <h2>{{item.title | uppercase}}</h2>\n      </div>\n      <div class=\"quantity col-2 row\">\n        <div class=\"numberBox\">\n          {{item.num}}\n        </div>\n        <div class=\"numberButtons\">\n          <div class=\"numberButton cursor-pointer\" (click)=\"addNum(item.id,1)\">+</div>\n          <div class=\"numberButton cursor-pointer\" (click)=\"addNum(item.id,-1)\">-</div>\n        </div>\n      </div>\n      <div class=\"priceEach col-1\">\n        <p>$ {{item.price*item.num |number:'1.2'}}</p>\n      </div>\n      <div class=\"col-1 closeBox cursor-pointer\" (click)=\"addNum(item.id,-1*item.num)\">\n        <div class=\"close\"></div>\n      </div>\n    </div>\n    <div class=\"checkoutInfo pt-4 pb-4 row\">\n      <div class=\"offset-6 col-6\">\n        <p class=\"inline\">CART OVERVIEW</p>\n        <div>\n          <p class=\"d-inline-block\">SUBTOTAL</p>\n          <p class=\"d-inline-block float-right subTotal\">${{sum|number:'1.2'}}</p>\n        </div>\n        <div>\n          <p class=\"d-inline-block\">TOTAL</p>\n          <p class=\"d-inline-block float-right totalPrice\">${{sum|number:'1.2'}} CAD</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"checkout text-left pt-4 pb-4 clearfix\">\n      <a href=\"\" routerLink=\"/\">CONTINUE SHOPPING</a>\n    </div>\n    <div class=\"checkoutBox float-right p-3 mb-4 cursor-pointer\">\n      CHECKOUT (${{sum|number:'1.2'}})\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shoppingCart {\n  text-align: center; }\n\n.main {\n  width: 70%;\n  min-width: 1000px;\n  margin: 0 auto; }\n\n.img {\n  width: 100px;\n  height: 150px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center; }\n\n.tableHead {\n  text-align: left;\n  border-bottom: 1px solid #aaa; }\n\n.shoppingItems {\n  border-bottom: 1px solid #aaa; }\n\nspan {\n  text-align: left;\n  color: #999; }\n\np {\n  color: #999;\n  text-align: left; }\n\nh2 {\n  text-align: left;\n  font-size: 1.5rem; }\n\n.quantity .numberBox {\n  vertical-align: middle;\n  line-height: 80px;\n  width: 80px;\n  height: 80px;\n  background-color: rgba(0, 0, 0, 0.15); }\n\n.quantity .numberButton {\n  width: 38px;\n  height: 38px;\n  margin-bottom: 4px;\n  margin-left: 4px;\n  vertical-align: middle;\n  line-height: 38px;\n  font-size: 1.2rem;\n  background-color: rgba(0, 0, 0, 0.3); }\n\n.priceEach p {\n  text-align: center; }\n\n.closeBox {\n  height: 45px; }\n\n.close {\n  display: inline-block;\n  margin-top: 24px;\n  width: 40px;\n  height: 2px;\n  background: #666;\n  line-height: 0;\n  font-size: 0;\n  vertical-align: middle;\n  -webkit-transform: rotate(45deg); }\n\n.close:after {\n  content: '/';\n  display: block;\n  width: 40px;\n  height: 2px;\n  background: #666;\n  -webkit-transform: rotate(-90deg); }\n\n.checkoutInfo {\n  text-align: left;\n  border-bottom: 1px solid #aaa; }\n\n.inline {\n  display: inline-block; }\n\n.subTotal, .totalPrice {\n  text-align: right; }\n\n.totalPrice {\n  font-weight: 700;\n  color: #000; }\n\n.checkout a {\n  color: #000;\n  font-weight: 700;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -moz-text-decoration-line: underline; }\n\n.checkoutBox {\n  color: #fff;\n  background-color: #000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_shopping_service__ = __webpack_require__("./src/app/service/shopping.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(shoppingItems) {
        this.shoppingItems = shoppingItems;
        this.sum = 0;
        this.itemAmount = [];
    }
    ShoppingCartComponent.prototype.ngOnInit = function () { };
    ShoppingCartComponent.prototype.ngDoCheck = function (changes) {
        var _this = this;
        this.checkoutItems = this.shoppingItems.shoppingItems.filter(function (val) { return val.num > 0; });
        this.sum = 0;
        this.shoppingItems.shoppingItems.forEach(function (val, idx) {
            _this.sum += val.price * val.num;
            _this.itemAmount[idx] = val.num;
        });
    };
    ShoppingCartComponent.prototype.addNum = function (idx, num) {
        this.shoppingItems.shoppingItems[idx].num += num;
    };
    return ShoppingCartComponent;
}());
ShoppingCartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "app-shopping-cart",
        template: __webpack_require__("./src/app/shopping-cart/shopping-cart.component.html"),
        styles: [__webpack_require__("./src/app/shopping-cart/shopping-cart.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_shopping_service__["a" /* ShoppingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_shopping_service__["a" /* ShoppingService */]) === "function" && _a || Object])
], ShoppingCartComponent);

var _a;
//# sourceMappingURL=shopping-cart.component.js.map

/***/ }),

/***/ "./src/assets/media/plates-header.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "plates-header.e83ce5cdbc04ebc89686.jpg";

/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map