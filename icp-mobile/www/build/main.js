webpackJsonp([7],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListingService = /** @class */ (function () {
    function ListingService(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    ListingService.prototype.listFlights = function (Year, Month, DayOfMonth, Origin, Dest) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            })
        });
        var link = this.provider.apiUrl.listFlights;
        var bodyObject = {
            Year: Year,
            Month: Month,
            DayOfMonth: DayOfMonth,
            origin: Origin,
            dest: Dest
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    ListingService.prototype.listAllFlights = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            })
        });
        var link = this.provider.apiUrl.listAllFlights;
        return this.http.post(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    ListingService.prototype.listFlightsByID = function (ID) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            })
        });
        var link = this.provider.apiUrl.listFlightsByID + '/' + String(ID);
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    ListingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], ListingService);
    return ListingService;
}());

//# sourceMappingURL=listing.component.service.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmailService = /** @class */ (function () {
    function EmailService(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    EmailService.prototype.postEmail = function (toemail, src, dest) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            })
        });
        var link = this.provider.apiUrl.email;
        var bodyObject = {
            toemail: toemail,
            src: src,
            dest: dest,
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) {
            "success";
        })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw({ "error": "you have a error" });
        });
    };
    EmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], EmailService);
    return EmailService;
}());

//# sourceMappingURL=email.component.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service_chat_component_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_listing_schedule_service_listing_component_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__booking_booking__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, chatService, alertCtrl, loadingCtrl, listingService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatService = chatService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.listingService = listingService;
        this.sessionid = null;
        this.message = [];
        this.watsontype = false;
        this.type = false;
        if (!this.sessionid) {
            this.chatService.getsessionid().subscribe(function (data) {
                _this.sessionid = data["session_id"];
            }, function (error) {
                _this.sessionid = null;
            });
        }
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ChatPage");
        this.message.push({
            user: "watson",
            message: "Hi, I am watson, what can I help you with?"
        });
    };
    ChatPage.prototype.doSend = function () {
        var _this = this;
        this.type = false;
        this.message.push({
            user: "human",
            message: this.input
        });
        console.log(this.message);
        this.temp = this.input;
        this.input = "";
        if (this.sessionid) {
            this.watsontype = true;
            this.chatService.call(this.temp, this.sessionid).subscribe(function (data) {
                _this.watsontype = false;
                if ((data["response"]["output"]["generic"][0]["text"].charAt(0) !== '_')) {
                    _this.message.push({
                        user: "watson",
                        message: data["response"]["output"]["generic"][0]["text"]
                    });
                }
                else {
                    _this.chatService.getsessionid().subscribe(function (data) {
                        _this.sessionid = data["session_id"];
                    }, function (error) {
                        _this.sessionid = null;
                    });
                    _this.bookinginfo = data["response"]["output"]["generic"][0]["text"].split(',');
                    console.log(_this.bookinginfo);
                    _this.Year = Number(_this.bookinginfo[3].split("-")[0]);
                    _this.Year = String(_this.Year);
                    _this.Month = Number(_this.bookinginfo[3].split("-")[1]);
                    _this.Month = String(_this.Month);
                    _this.DayOfMonth = Number(_this.bookinginfo[3].split("-")[2]);
                    _this.DayOfMonth = String(_this.DayOfMonth);
                    console.log(_this.Year, _this.Month, _this.DayOfMonth);
                    var loading_1 = _this.loadingCtrl.create({
                        content: "Please wait..."
                    });
                    loading_1.present();
                    _this.listingService
                        .listFlights(_this.Year, _this.Month, _this.DayOfMonth, _this.bookinginfo[1], _this.bookinginfo[2])
                        .subscribe(function (data) {
                        if (data.length) {
                            console.log("data", data);
                            loading_1.dismiss();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__booking_booking__["a" /* BookingPage */], {
                                item: data
                            });
                        }
                        else {
                            var alert_1 = _this.alertCtrl.create({
                                title: "Alert!",
                                subTitle: "OOOOPS... No flights found!",
                                buttons: ["Dismiss"]
                            });
                            loading_1.dismiss();
                            alert_1.present();
                        }
                    }, function (error) {
                        var alert = _this.alertCtrl.create({
                            title: "Alert!",
                            subTitle: "OOOOPS... Something Went Wrong",
                            buttons: ["Dismiss"]
                        });
                        loading_1.dismiss();
                        alert.present();
                        console.log(error);
                    });
                }
            }, function (error) {
                _this.watsontype = false;
                _this.sessionid = null;
                _this.chatService.getsessionid().subscribe(function (data) {
                    _this.sessionid = data["session_id"];
                }, function (error) {
                    _this.sessionid = null;
                });
            });
        }
    };
    ChatPage.prototype.typing = function () {
        console.log(this.input);
        if (this.input != "") {
            this.type = true;
        }
        else {
            this.type = false;
        }
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-chat",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">Help</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="message-wrap" *ngFor="let show of message">\n    \n\n    <div class="sender" *ngIf="show.user===\'watson\'">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-2 text-left>\n            <img class="friend-img" src="../assets/watson_logo.gif" alt="">\n          </ion-col>\n          <ion-col col-10>\n            <p>{{show.message}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class="me" *ngIf="show.user===\'human\'">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-10>\n            <p>{{show.message}}</p>\n          </ion-col>\n          <ion-col col-2>\n            <img class="friend-img" src="../assets/avatar.png" alt="">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n  <div class="me" *ngIf="type">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-10>\n            <p>Typing ...</p>\n          </ion-col>\n          <ion-col col-2>\n            <img class="friend-img" src="../assets/typing.gif" alt="">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class="sender" *ngIf="watsontype">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-2 text-left>\n              <img class="friend-img" src="../assets/typing.gif" alt="">\n            </ion-col>\n            <ion-col col-10>\n              <p>Watson is typing...</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n</ion-content>\n\n\n<ion-footer no-border>\n  <ion-toolbar color="facebook">\n    <ion-textarea (keyup.enter)="doSend()" [(ngModel)]="input" placeholder="Enter your message" name="message" (ngModelChange)="typing($event)"></ion-textarea>\n    <ion-buttons end>\n      <button (click)="doSend()" ion-button icon-only>\n        <ion-icon name="send" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n</footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/chat/chat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_chat_service_chat_component_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__services_listing_schedule_service_listing_component_service__["a" /* ListingService */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_booking_service_booking_component_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_email_service_email_component_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_provider__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OffersPage = /** @class */ (function () {
    function OffersPage(navCtrl, navParams, bookingService, alertCtrl, loadingCtrl, emailService, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookingService = bookingService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.emailService = emailService;
        this.provider = provider;
        this.values = navParams.get("item");
        console.log(this.values);
    }
    OffersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OffersPage');
    };
    OffersPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    OffersPage.prototype.confirm = function () {
        var _this = this;
        if (this.pricing) {
            this.OfferTypePricing = 'Pricing';
            this.OfferNamePricing = this.pricing.split(',')[0];
            this.CostPricing = this.pricing.split(',')[1];
        }
        else {
            this.OfferNamePricing = '';
            this.OfferTypePricing = '';
            this.CostPricing = '';
        }
        if (this.upgrades) {
            this.OfferNameUpgrade = this.upgrades.split(',')[0];
            this.CostUpgrade = this.upgrades.split(',')[1];
            this.OfferTypeUpgrade = 'Upgrade';
        }
        else {
            this.OfferNameUpgrade = '';
            this.OfferTypeUpgrade = '';
            this.CostUpgrade = '';
        }
        console.log(this.OfferNamePricing, this.OfferTypePricing, this.CostPricing, this.OfferNameUpgrade, this.OfferTypeUpgrade, this.CostUpgrade);
        var alert = this.alertCtrl.create({
            title: "Confirm Booking",
            message: "Are you sure, you want to book this flight?",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Book",
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: "Please wait..."
                        });
                        loading.present();
                        _this.bookingService
                            .booking(_this.values.userid, _this.values.id, _this.OfferNamePricing, _this.OfferTypePricing, _this.CostPricing, _this.OfferNameUpgrade, _this.OfferTypeUpgrade, _this.CostUpgrade)
                            .subscribe(function (data) {
                            console.log("booked flight", data);
                            var alert2 = _this.alertCtrl.create({
                                title: "Success!",
                                subTitle: "You Have Successfully Booked Your Flight",
                                buttons: ["Dismiss"]
                            });
                            _this.emailService
                                .postEmail(_this.provider.userData.data.EMAIL, _this.values.src, _this.values.dest)
                                .subscribe(function (data) { }, function (error) { });
                            loading.dismiss();
                            alert2.present();
                            _this.navCtrl.pop();
                        }, function (error) {
                            var alert3 = _this.alertCtrl.create({
                                title: "Alert!",
                                subTitle: "OOOPS... Something Went Wrong While Booking",
                                buttons: ["Dismiss"]
                            });
                            loading.dismiss();
                            alert3.present();
                            _this.navCtrl.pop();
                            console.log(error);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    OffersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offers',template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/offers/offers.html"*/'<!--\n  Generated template for the OffersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">Offers</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="danger" (click)="cancel()">\n        CANCEL\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item-divider color="light">Select Pricing</ion-item-divider>\n  <ion-list radio-group [(ngModel)]="pricing">\n    <ng-container *ngIf="values">\n      <ng-container *ngFor="let listshow of values.data">\n    <ion-item *ngIf="listshow.offerType === \'Pricing\' ">\n      <ion-label>\n        <h3>\n          <ion-icon name="information-circle" item-start></ion-icon>\n          {{listshow.offerName}}\n        </h3>\n        <h3>\n          <ion-icon name="cash" item-start></ion-icon>\n          {{listshow.cost}} DHS\n        </h3>\n      </ion-label>\n      <ion-radio value= "{{listshow.offerName}},{{listshow.cost}}"></ion-radio>\n    </ion-item>\n    </ng-container>\n    </ng-container>\n  </ion-list>\n  <ion-item-divider color="light">Select Upgrades</ion-item-divider>\n  <ion-list radio-group [(ngModel)]="upgrades">\n      <ng-container *ngIf="values">\n          <ng-container *ngFor="let listshow of values.data">\n        <ion-item *ngIf="listshow.offerType === \'Upgrade\' ">\n          <ion-label>\n            <h3>\n              <ion-icon name="home" item-start *ngIf="listshow.offerName === \'Hotel\' "></ion-icon>\n              <ion-icon name="plane" item-start *ngIf="listshow.offerName === \'Air transporation\' "></ion-icon>\n              <ion-icon name="star" item-start *ngIf="listshow.offerName === \'Business Class\' "></ion-icon>\n              {{listshow.offerName}}\n            </h3>\n            <h3>\n              <ion-icon name="cash" item-start></ion-icon>\n              {{listshow.cost}} DHS\n            </h3>\n          </ion-label>\n          <ion-radio value= "{{listshow.offerName}},{{listshow.cost}}"></ion-radio>\n        </ion-item>\n        </ng-container>\n        </ng-container>\n    <!-- <ion-item>\n      <ion-label>\n        <h3>\n          <ion-icon name="home" item-start></ion-icon>\n          Hotel\n        </h3>\n        <h3>\n          <ion-icon name="cash" item-start></ion-icon>\n          1000 DHS\n        </h3>\n      </ion-label>\n      <ion-radio value="friends" checked></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-icon name="plane" item-start></ion-icon>\n          Air Transportation\n        </h3>\n        <h3>\n          <ion-icon name="cash" item-start></ion-icon>\n          900 DHS\n        </h3>\n      </ion-label>\n      <ion-radio value="3"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-icon name="star" item-start></ion-icon>\n          Buisness Class\n        </h3>\n        <h3>\n          <ion-icon name="cash" item-start></ion-icon>\n          900 DHS\n        </h3>\n      </ion-label>\n      <ion-radio value="6"></ion-radio>\n    </ion-item> -->\n  </ion-list>\n        \n  <ion-item>\n      <button ion-button block outline color="tab" (click)="confirm()">BOOK</button>\n  </ion-item>\n</ion-content>\n\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n</footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/offers/offers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_booking_service_booking_component_service__["a" /* BookingService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__services_email_service_email_component_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_4__provider_provider__["a" /* Provider */]])
    ], OffersPage);
    return OffersPage;
}());

//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_service__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, dashboardService, geolocation, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dashboardService = dashboardService;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.show = null;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Map is loading..."
        });
        loading.present();
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log('abe to get cooord', resp);
            console.log("ionViewDidLoad DashboardPage");
            _this.dashboardService.list(resp.coords.latitude.toString(), resp.coords.longitude.toString()).subscribe(function (data) {
                loading.dismiss();
                console.log(data["Response"]["View"][0]["Result"]);
                _this.show = data["Response"]["View"][0]["Result"];
            }, function (error) {
                loading.dismiss();
                console.log('errorrrrr', error);
            });
        }).catch(function (error) {
            loading.dismiss();
            console.log('Error getting location', error);
        });
        setTimeout(function () {
            console.log("Async operation has ended");
            loading.dismiss();
        }, 7000);
    };
    DashboardPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log("Begin async operation", refresher);
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log("ionViewDidLoad DashboardPage");
            _this.dashboardService.list(resp.coords.latitude, resp.coords.longitude).subscribe(function (data) {
                console.log(data["Response"]["View"][0]["Result"]);
                _this.show = data["Response"]["View"][0]["Result"];
                refresher.complete();
            }, function (error) {
                refresher.complete();
                console.log(error);
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        setTimeout(function () {
            console.log("Async operation has ended");
            refresher.complete();
        }, 7000);
    };
    DashboardPage.prototype.go = function (lat, long) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */], {
            item: {
                lat: lat,
                long: long
            }
        });
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-dashboard",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">Travel</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ng-container *ngIf="show">\n      <ion-item *ngFor="let listshow of show">\n        <h2>{{listshow.Location.Name}}</h2>\n        <p>{{listshow.Location.Address.County}} • {{listshow.Location.LocationType}}</p>\n        <button ion-button clear item-end (click)="go(listshow.Location.DisplayPosition.Latitude,listshow.Location.DisplayPosition.Longitude)">View</button>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n</ion-content>\n\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright"> Made by © IBM 2019 </p>\n</footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/dashboard/dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_routing_machine__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_routing_machine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet_routing_machine__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.values = navParams.get("item");
        console.log(this.values);
    }
    MapPage.prototype.ionViewDidEnter = function () {
    };
    MapPage.prototype.loadmap = function () {
        var _this = this;
        this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map").fitWorld();
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a
            .tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        })
            .addTo(this.map);
        this.map
            .locate({
            setView: true,
            maxZoom: 13
        })
            .on("locationfound", function (e) {
            var latlngs = [[e.latitude, e.longitude], [_this.values.lat, _this.values.long]];
            var polyline = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.polyline(latlngs, { color: "blue" }).addTo(_this.map);
            _this.map.fitBounds(polyline.getBounds());
            __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.Routing.control({
                waypoints: [
                    __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.latLng(e.latitude, e.longitude),
                    __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.latLng(_this.values.lat, _this.values.long)
                ],
                routeWhileDragging: true
            }).addTo(_this.map);
        })
            .on("locationerror", function (err) {
            alert(err.message);
        });
    };
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadmap();
        console.log("ionViewDidLoad MapPage");
        var tabs = document.querySelectorAll(".show-tabbar");
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = "none";
            });
        }
    };
    MapPage.prototype.ionViewWillLeave = function () {
        var tabs = document.querySelectorAll(".show-tabbar");
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = "flex";
            });
        }
    };
    MapPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapContainer", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-map",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/map/map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hide-tabs>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">Map</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="danger" (click)="cancel()">\n        CANCEL\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id="map" style="width:100%; height:100%;"></div>\n</ion-content>\n\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n  </footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service_login_component_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provider_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, loginService, alertCtrl, loadingCtrl, provider, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginService = loginService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.provider = provider;
        this.statusBar = statusBar;
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        var tabs = document.querySelectorAll(".show-tabbar");
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = "flex";
            });
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.loginService.login(this.username, this.password).subscribe(function (data) {
            // this.statusBar.backgroundColorByHexString("#25312C")
            _this.provider.token = data['token'];
            localStorage.setItem('token', _this.provider.token);
            _this.provider.userData = __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(data['token']);
            console.log(_this.provider.userData);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            loading.dismiss();
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: "Alert!",
                subTitle: "OOOOPS... Something Went Wrong",
                buttons: ["Dismiss"]
            });
            loading.dismiss();
            alert.present();
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LoginPage");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/login/login.html"*/'<ion-content class="background">\n	<ion-card>\n		<ion-card-content>\n			<ion-list no-line>\n				<ion-item>\n					<ion-input type="text" placeholder="Username" [(ngModel)]="username"></ion-input>\n				</ion-item>\n				<ion-item>\n					<ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n				</ion-item>\n				<button ion-button block outline color="light" (click)="login()">Log in</button>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n	<button class="bottom" ion-button clear full color="light" (click)="signup()">Don\'t have an account? Sign up</button>\n</ion-content>\n\n<ion-footer no-border>\n\n	<footer>\n	  <p class="copyright">© IBM 2019 </p>\n  </footer>\n  \n  </ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_login_service_login_component_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__provider_provider__["a" /* Provider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signup_service_signup_component_service__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, signupService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signupService = signupService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalData = ["GOLD", "SILVER", "BRONZE"];
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SignupPage");
    };
    SignupPage.prototype.signin = function () {
        this.navCtrl.pop();
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.signupService
            .signup(this.firstName, this.lastName, this.age, this.email, this.password, this.location, this.tier)
            .subscribe(function (data) {
            console.log(data);
            var alert = _this.alertCtrl.create({
                title: "Alert!",
                subTitle: "Hi There! You have Sucessfully Signed Up!",
                buttons: ["Dismiss"]
            });
            loading.dismiss();
            alert.present();
            _this.navCtrl.pop();
        }, function (error) {
            var alert = _this.alertCtrl.create({
                title: "Alert!",
                subTitle: "OOOOPS... Something Went Wrong",
                buttons: ["Dismiss"]
            });
            loading.dismiss();
            alert.present();
            _this.navCtrl.pop();
            console.log(error);
        });
        console.log(this.firstName, this.lastName, this.location, this.age, this.email, this.password, this.tier);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-signup",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/signup/signup.html"*/'<ion-content class="background">\n  <ion-card>\n    <ion-card-content>\n      <ion-list no-line>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="person" color="tab"></ion-icon>\n          </ion-label>\n          <ion-input type="text" placeholder="First Name" [(ngModel)]="firstName"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="person" color="tab"></ion-icon>\n          </ion-label>\n          <ion-input type="text" placeholder="Last Name" [(ngModel)]="lastName"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="body" color="tab"></ion-icon>\n          </ion-label>\n          <ion-input type="number" placeholder="Age" [(ngModel)]="age"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="locate" color="tab"></ion-icon>\n          </ion-label>\n          <ion-input type="text" placeholder="Location" [(ngModel)]="location"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="at" color="tab"></ion-icon>\n          </ion-label>\n          <ion-input type="email" placeholder="Email" [(ngModel)]="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="medical" color="tab"></ion-icon>\n          </ion-label>\n          <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n        <ion-grid >\n        <ion-row>\n          <ng-container *ngIf="modalData">\n            <ion-col width-10 *ngFor="let data of modalData; let i = index">\n              <ion-item>\n                <div class="cc-selector-2">\n                  <input name={{i}} [value]=\'data\' type="radio" [(ngModel)]="tier" id={{i}} />\n                  <label class="drinkcard-cc {{data}}" for={{i}}></label>\n                </div>\n              </ion-item>\n            </ion-col>\n          </ng-container>\n        </ion-row>\n        </ion-grid>\n        <button ion-button block outline color="light" (click)="signup()">Signup</button>\n      </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n  <button class="bottom" ion-button clear full color="light" (click)="signin()">Already have an account? Sign in</button>\n</ion-content>\n\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n</footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_signup_service_signup_component_service__["a" /* SignupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Provider = /** @class */ (function () {
    function Provider() {
        this.userData = null;
        this.token = null;
        this.rawData = null;
        this.url = "10.150.20.151:31380";
        this.apiUrl = {
            login: "http://" + this.url + "/loginsvc/login",
            signup: "http://" + this.url + "/loginsvc/createUser",
            book: "http://" + this.url + "/bookingsvc/book",
            listBookingByUser: "http://" + this.url + "/bookingsvc/listBookingByUser",
            checkin: "http://" + this.url + "/bookingsvc/checkin",
            listFlightsByID: "http://" + this.url + "/listingsvc/listFlights",
            listFlights: "http://" + this.url + "/listingsvc/searchFlights",
            listAllFlights: "http://" + this.url + "/listingsvc/listFlights",
            map: "http://" + this.url + "/mapsvc/getMap",
            email: 'http://' + this.url + "/celerysvc/postEmail",
            odm: 'http://' + this.url + "/odmsvc/odm",
            watsoncall: 'http://' + this.url + "/aisvc/watson",
            getsessionid: 'http://' + this.url + "/aisvc/session"
        };
    }
    Provider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Provider);
    return Provider;
}());

//# sourceMappingURL=provider.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/booking/booking.module": [
		732,
		6
	],
	"../pages/chat/chat.module": [
		731,
		5
	],
	"../pages/dashboard/dashboard.module": [
		733,
		4
	],
	"../pages/login/login.module": [
		735,
		3
	],
	"../pages/map/map.module": [
		736,
		2
	],
	"../pages/offers/offers.module": [
		734,
		1
	],
	"../pages/signup/signup.module": [
		737,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatService = /** @class */ (function () {
    function ChatService(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    ChatService.prototype.call = function (text, session_id) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        });
        var link = this.provider.apiUrl.watsoncall;
        var bodyObject = {
            text: text,
            session_id: session_id
        };
        return this.http
            .post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    ChatService.prototype.getsessionid = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        });
        var link = this.provider.apiUrl.getsessionid;
        console.log('log of url', link);
        return this.http
            .get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=chat.component.service.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OdmService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OdmService = /** @class */ (function () {
    function OdmService(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    OdmService.prototype.getODM = function (srcAirport, dstAirport, customerTier, milesBalance) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': this.provider.token
            })
        });
        var link = this.provider.apiUrl.odm;
        var bodyObject = {
            srcAirport: srcAirport,
            dstAirport: dstAirport,
            customerTier: customerTier,
            milesBalance: milesBalance,
            offers: [],
            messages: []
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    OdmService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], OdmService);
    return OdmService;
}());

//# sourceMappingURL=odm.component.service.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardService = /** @class */ (function () {
    function DashboardService(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    DashboardService.prototype.list = function (lat, long) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
            })
        });
        var link = this.provider.apiUrl.map;
        console.log('linkkk', link);
        var bodyObject = {
            lat: lat,
            long: long
        };
        console.log('bodyyyy', bodyObject);
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], DashboardService);
    return DashboardService;
}());

//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(statusBar) {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */];
        statusBar.backgroundColorByHexString('#000000');
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/tabs/tabs.html"*/'<ion-tabs color="tab">\n  <ion-tab [root]="tab1Root" tabTitle="Book" tabIcon="book"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Checkin" tabIcon="checkbox"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Travel" tabIcon="globe"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Chat" tabIcon="chatbubbles"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Me" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_checkin_service_checkin_component_service__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_booking_service_booking_component_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, provider, checkinService, bookingService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.checkinService = checkinService;
        this.bookingService = bookingService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.show = null;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("onview loaded");
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.bookingService
            .listBookingByUser(this.provider.userData.data.USERID)
            .subscribe(function (data) {
            var temp = JSON.parse(JSON.stringify(data));
            console.log("data", data);
            var url = _this.provider.apiUrl.listFlightsByID + "/";
            console.log("urlss", url);
            if (data.length === 0) {
                loading.dismiss();
            }
            var getData = function (url, iter) { return __awaiter(_this, void 0, void 0, function () {
                var response, dataa, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5_axios___default.a.get(url)];
                        case 1:
                            response = _a.sent();
                            dataa = response.data;
                            console.log(dataa);
                            Object.assign(temp[iter], {
                                flight: dataa
                            });
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            loading.dismiss();
                            console.log(error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            for (var iter = 0; iter < data.length; iter++) {
                getData(url + data[iter]["FlightID"], iter);
                if (iter === data.length - 1) {
                    _this.show = temp;
                    loading.dismiss();
                }
            }
        }, function (error) {
            loading.dismiss();
            console.log(error);
        });
    };
    AboutPage.prototype.checkin = function (bookingid, userid) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Confirm Checkin",
            message: "Do you want to checkin?",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Checkin",
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: "Please wait..."
                        });
                        loading.present();
                        _this.checkinService.checkin(bookingid, userid).subscribe(function (data1) {
                            _this.bookingService
                                .listBookingByUser(_this.provider.userData.data.USERID)
                                .subscribe(function (data2) {
                                var alert = _this.alertCtrl.create({
                                    title: "Success",
                                    subTitle: "Congrats You Have Successfully Checkedin",
                                    buttons: ["Dismiss"]
                                });
                                alert.present();
                                loading.dismiss();
                            }, function (error) {
                                var alert = _this.alertCtrl.create({
                                    title: "OOOPS... Something Went Wrong",
                                    subTitle: "Please try again later",
                                    buttons: ["Dismiss"]
                                });
                                alert.present();
                                loading.dismiss();
                                console.log(error);
                            });
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    AboutPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.bookingService
            .listBookingByUser(this.provider.userData.data.USERID)
            .subscribe(function (data) {
            var temp = JSON.parse(JSON.stringify(data));
            console.log("data", data);
            var url = _this.provider.apiUrl.listFlightsByID + "/";
            console.log("urlss", url);
            var getData = function (url, iter) { return __awaiter(_this, void 0, void 0, function () {
                var response, dataa, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5_axios___default.a.get(url)];
                        case 1:
                            response = _a.sent();
                            dataa = response.data;
                            console.log(dataa);
                            Object.assign(temp[iter], {
                                flight: dataa
                            });
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            refresher.complete();
                            console.log(error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            for (var iter = 0; iter < data.length; iter++) {
                getData(url + data[iter]["FlightID"], iter);
                if (iter === data.length - 1) {
                    _this.show = temp;
                    loading.dismiss();
                    refresher.complete();
                }
            }
        }, function (error) {
            loading.dismiss();
            console.log(error);
        });
        setTimeout(function () {
            console.log("Async operation has ended");
            refresher.complete();
        }, 7000);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-about",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/about/about.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">Checkin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="masters">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngFor="let listshow of show">\n    <ng-container *ngIf="listshow.flight">\n        <ion-fab right top >\n            <button ion-fab>\n              <ion-icon name="ios-checkmark-circle"></ion-icon>\n            </button>\n          </ion-fab>\n      <ion-card class="card-5">\n\n        <ion-item>\n          <ion-icon name="logo-buffer" item-start large color="tab"></ion-icon>\n          <h2>Flight Number</h2>\n          <p>#{{listshow.flight._id}}</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="plane" item-start large color="tab"></ion-icon>\n          <h2>From</h2>\n          <p>{{listshow.flight.Origin | isoToCountryName }}</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="plane" item-start large color="tab"></ion-icon>\n          <h2>To</h2>\n          <p>{{listshow.flight.Dest | isoToCountryName }}</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="time" item-start large color="tab"></ion-icon>\n          <h2>Arrival Time</h2>\n          <p>{{listshow.flight.ArrTime | timeRefactor}}</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="time" item-start large color="tab"></ion-icon>\n          <h2>Departure Time</h2>\n          <p>{{listshow.flight.DepTime | timeRefactor}}</p>\n        </ion-item>\n        <ion-item *ngIf="listshow.Checkin === \'0\'">\n          <button ion-button block outline color="tab" (click)="checkin(listshow.BookingID,provider.userData.data.USERID)">CHECKIN</button>\n        </ion-item>\n      </ion-card>\n    </ng-container>\n  </ng-container>\n</ion-content>\n\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n</footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__provider_provider__["a" /* Provider */],
            __WEBPACK_IMPORTED_MODULE_3__services_checkin_service_checkin_component_service__["a" /* CheckinService */],
            __WEBPACK_IMPORTED_MODULE_4__services_booking_service_booking_component_service__["a" /* BookingService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckinService = /** @class */ (function () {
    function CheckinService(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    CheckinService.prototype.checkin = function (BookingID, UserID) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': this.provider.token
            })
        });
        var link = this.provider.apiUrl.checkin + '/' + String(BookingID) + '/' + String(UserID);
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    CheckinService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], CheckinService);
    return CheckinService;
}());

//# sourceMappingURL=checkin.component.service.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_provider__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, provider) {
        this.navCtrl = navCtrl;
        this.provider = provider;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- Profile picture -->\n  <div text-center>\n    <img src="../assets/avatar.png" class="edit-avatar" alt="">\n  </div>\n\n  <!-- Form -->\n\n  <ion-list>\n    <ion-item>\n      <ion-icon name="person" item-start color="tab"></ion-icon>\n      {{provider.userData.data.FIRSTNAME + \' \'}} {{provider.userData.data.LASTNAME + \' \'}} \n    </ion-item>\n    <ion-item>\n      <ion-icon name="body" item-start color="tab"></ion-icon>\n      {{provider.userData.data.AGE}}  years\n    </ion-item>\n    <ion-item>\n      <ion-icon name="at" item-start color="tab"></ion-icon>\n      {{provider.userData.data.EMAIL}} \n    </ion-item>\n    <ion-item>\n      <ion-icon name="medal" item-start color="tab"></ion-icon>\n      {{provider.userData.data.TIER}}  class\n    </ion-item>\n  </ion-list>\n\n\n  <!-- Private information form -->\n\n</ion-content>\n\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n</footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__provider_provider__["a" /* Provider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_booking__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_listing_schedule_service_listing_component_service__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, listingService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.listingService = listingService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.like_btn = {
            color: "black",
            icon_name: "heart-outline"
        };
        this.tap = 0;
    }
    HomePage.prototype.search = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        if ((this.origin, this.dest, this.date)) {
            this.Year = Number(this.date.split("-")[0]);
            this.Year = String(this.Year);
            this.Month = Number(this.date.split("-")[1]);
            this.Month = String(this.Month);
            this.DayOfMonth = Number(this.date.split("-")[2]);
            this.DayOfMonth = String(this.DayOfMonth);
            this.listingService
                .listFlights(this.Year, this.Month, this.DayOfMonth, this.origin, this.dest)
                .subscribe(function (data) {
                if (data.length) {
                    console.log("data", data);
                    loading.dismiss();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_booking__["a" /* BookingPage */], {
                        item: data
                    });
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: "Alert!",
                        subTitle: "OOOOPS... No flights found!",
                        buttons: ["Dismiss"]
                    });
                    loading.dismiss();
                    alert_1.present();
                }
            }, function (error) {
                var alert = _this.alertCtrl.create({
                    title: "Alert!",
                    subTitle: "OOOOPS... Something Went Wrong",
                    buttons: ["Dismiss"]
                });
                loading.dismiss();
                alert.present();
                console.log(error);
            });
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: "Alert!",
                subTitle: "Please enter all information",
                buttons: ["Dismiss"]
            });
            loading.dismiss();
            alert_2.present();
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/home/home.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-buttons start>\n        <button ion-button icon-only>\n          <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n        </button>\n      </ion-buttons>\n      <ion-title color="primary">Booking</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class="masters">\n    <ion-list no-line>\n      <ion-item>\n        <ion-label>Select Source</ion-label>\n        <ion-select [(ngModel)]="origin">\n          <ion-option value="DXB">Dubai</ion-option>\n          <ion-option value="CAI">Cairo</ion-option>\n          <ion-option value="IND">India</ion-option>\n          <ion-option value="BWI">Washington</ion-option>\n          <ion-option value="MAD">Madrid</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Select Destination </ion-label>\n        <ion-select [(ngModel)]="dest">\n          <ion-option value="DXB">Dubai</ion-option>\n          <ion-option value="CAI">Cairo</ion-option>\n          <ion-option value="IND">India</ion-option>\n          <ion-option value="BWI">Washington</ion-option>\n          <ion-option value="MAD">Madrid</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Travel Date</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="date"></ion-datetime>\n      </ion-item>\n    </ion-list>\n    <button ion-button block outline color="tab" (click)="search()">Search</button>\n  \n  </ion-content>\n  \n\n  <ion-footer no-border>\n\n    <footer>\n      <p class="copyright">© IBM 2019 </p>\n  </footer>\n  \n  </ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_listing_schedule_service_listing_component_service__["a" /* ListingService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupService = /** @class */ (function () {
    function SignupService(http, provider) {
        this.http = http;
        this.provider = provider;
        this.parameters = {};
        this.params = {};
    }
    SignupService.prototype.signup = function (firstName, lastName, age, email, password, location, tier) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            })
        });
        var link = this.provider.apiUrl.signup;
        var bodyObject = {
            'firstName': firstName,
            'lastName': lastName,
            'age': Number(age),
            'email': email,
            'password': password,
            'location': location,
            'tier': tier
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    SignupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], SignupService);
    return SignupService;
}());

//# sourceMappingURL=signup.component.service.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    function LoginService(http, provider) {
        var _this = this;
        this.http = http;
        this.provider = provider;
        this._url = "../assets/airports.json";
        this.parameters = {};
        this.params = {};
        this.getJSON().subscribe(function (data) {
            _this.provider.rawData = data;
        });
    }
    LoginService.prototype.getJSON = function () {
        return this.http
            .get(this._url)
            .map(function (response) { return response.json(); });
    };
    LoginService.prototype.login = function (email, password) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            })
        });
        var link = this.provider.apiUrl.login;
        var bodyObject = {
            email: email,
            password: password
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.component.service.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(379);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_offers_offers__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_booking_booking__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_map_map__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_login_service_login_component_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_signup_service_signup_component_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard_service__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__provider_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_listing_schedule_service_listing_component_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_shared_module__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_booking_service_booking_component_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_chat_service_chat_component_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_email_service_email_component_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_checkin_service_checkin_component_service__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ionic_native_http_angular_wrapper__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_odm_service_odm_component_service__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_chat_chat__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_leaflet_routing_machine__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_leaflet_routing_machine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_leaflet_routing_machine__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_booking_booking__["a" /* BookingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_chat_chat__["a" /* ChatPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_27_ionic_native_http_angular_wrapper__["a" /* NativeHttpWrapper */],
                __WEBPACK_IMPORTED_MODULE_22__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booking/booking.module#BookingPageModule', name: 'BookingPage', segment: 'booking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offers/offers.module#OffersPageModule', name: 'OffersPage', segment: 'offers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_booking_booking__["a" /* BookingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_chat_chat__["a" /* ChatPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_14__services_login_service_login_component_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_15__services_signup_service_signup_component_service__["a" /* SignupService */],
                __WEBPACK_IMPORTED_MODULE_20__provider_provider__["a" /* Provider */],
                __WEBPACK_IMPORTED_MODULE_21__services_listing_schedule_service_listing_component_service__["a" /* ListingService */],
                __WEBPACK_IMPORTED_MODULE_23__services_booking_service_booking_component_service__["a" /* BookingService */],
                __WEBPACK_IMPORTED_MODULE_26__services_checkin_service_checkin_component_service__["a" /* CheckinService */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_25__services_email_service_email_component_service__["a" /* EmailService */],
                __WEBPACK_IMPORTED_MODULE_29__services_odm_service_odm_component_service__["a" /* OdmService */],
                __WEBPACK_IMPORTED_MODULE_24__services_chat_service_chat_component_service__["a" /* ChatService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        var _this = this;
        this.keyboard = keyboard;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.showSplash = true;
        platform.ready().then(function () {
            console.log = function () { };
            statusBar.styleDefault();
            splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__["timer"])(1000).subscribe(function () { return _this.showSplash = false; }); // <-- hide animation after 3s
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/app/app.html"*/'<div *ngIf="showSplash" class="splash">\n        <img src="../assets/watson_logo.gif" alt="ibm">\n</div>      \n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Keyboard */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_country_pipe__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_time_pipe__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__pipes_time_pipe__["a" /* TimeRefactorPipe */], __WEBPACK_IMPORTED_MODULE_0__pipes_country_pipe__["a" /* CountryRefactorPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pipes_time_pipe__["a" /* TimeRefactorPipe */], __WEBPACK_IMPORTED_MODULE_0__pipes_country_pipe__["a" /* CountryRefactorPipe */]]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryRefactorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_provider__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryRefactorPipe = /** @class */ (function () {
    function CountryRefactorPipe(http, provider) {
        var _this = this;
        this.http = http;
        this.provider = provider;
        this._url = "../assets/airports.json";
        this.fullCountryName = "airport not found";
        this.getJSON().subscribe(function (data) {
            _this.provider.rawData = data;
        });
    }
    CountryRefactorPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.provider.rawData) {
            console.log('lengtgg', this.provider.rawData.length);
            for (var i = 0; i < this.provider.rawData.length; i++) {
                var obj = this.provider.rawData[i];
                if (obj.iata === value) {
                    this.fullCountryName = obj.name;
                    break;
                }
            }
            return this.fullCountryName;
        }
    };
    CountryRefactorPipe.prototype.getJSON = function () {
        return this.http
            .get(this._url)
            .map(function (response) { return response.json(); });
    };
    CountryRefactorPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: "isoToCountryName"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__provider_provider__["a" /* Provider */]])
    ], CountryRefactorPipe);
    return CountryRefactorPipe;
}());

//# sourceMappingURL=country.pipe.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeRefactorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeRefactorPipe = /** @class */ (function () {
    function TimeRefactorPipe() {
        this.character = ':';
        this.position = 2;
    }
    TimeRefactorPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value.length !== 4) {
            value = '0' + value;
        }
        return [value.slice(0, this.position), this.character, value.slice(this.position)].join('');
    };
    TimeRefactorPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'timeRefactor'
        })
    ], TimeRefactorPipe);
    return TimeRefactorPipe;
}());

//# sourceMappingURL=time.pipe.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookingService = /** @class */ (function () {
    function BookingService(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    BookingService.prototype.booking = function (UserID, FlightID, OfferNamePricing, OfferTypePricing, CostPricing, OfferNameUpgrade, OfferTypeUpgrade, CostUpgrade) {
        console.log(UserID, FlightID, OfferNamePricing, OfferTypePricing, CostPricing, OfferNameUpgrade, OfferTypeUpgrade, CostUpgrade);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                Authorization: this.provider.token
            })
        });
        var link = this.provider.apiUrl.book;
        var bodyObject = {
            UserID: UserID,
            FlightID: FlightID,
            OfferNamePricing: OfferNamePricing,
            OfferTypePricing: OfferTypePricing,
            CostPricing: CostPricing,
            OfferNameUpgrade: OfferNameUpgrade,
            OfferTypeUpgrade: OfferTypeUpgrade,
            CostUpgrade: CostUpgrade
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    BookingService.prototype.listBookingByUser = function (ID) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                Authorization: this.provider.token
            })
        });
        var link = this.provider.apiUrl.listBookingByUser + "/" + String(ID);
        return this.http
            .get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    BookingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], BookingService);
    return BookingService;
}());

//# sourceMappingURL=booking.component.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_booking_service_booking_component_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_email_service_email_component_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_odm_service_odm_component_service__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offers_offers__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookingPage = /** @class */ (function () {
    function BookingPage(navCtrl, navParams, alertCtrl, bookingService, provider, loadingCtrl, emailService, actionSheetCtrl, odmService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.bookingService = bookingService;
        this.provider = provider;
        this.loadingCtrl = loadingCtrl;
        this.emailService = emailService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.odmService = odmService;
        this.data = navParams.get("item");
        console.log("this is data", this.data);
    }
    BookingPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MapPage");
        var tabs = document.querySelectorAll(".show-tabbar");
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = "none";
            });
        }
    };
    BookingPage.prototype.ionViewWillLeave = function () {
        var tabs = document.querySelectorAll(".show-tabbar");
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = "flex";
            });
        }
    };
    BookingPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    BookingPage.prototype.confirm = function (id, src, dest) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: "Do You Want To Select Any Offers?",
            buttons: [
                {
                    text: "Show Offers",
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: "Please wait..."
                        });
                        loading.present();
                        _this.odmService
                            .getODM(src, dest, _this.provider.userData.data.TIER, 30000)
                            .subscribe(function (data) {
                            if (data["code"] != 404) {
                                console.log(data);
                                loading.dismiss();
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__offers_offers__["a" /* OffersPage */], {
                                    item: {
                                        userid: _this.provider.userData.data.USERID,
                                        id: id,
                                        data: data["flightBooking"]["offers"],
                                        src: src,
                                        dest: dest
                                    }
                                });
                            }
                            else {
                                var alert3 = _this.alertCtrl.create({
                                    title: "Alert!",
                                    subTitle: "OOOPS... Something Went Wrong While Choosing Offers",
                                    buttons: ["Dismiss"]
                                });
                                loading.dismiss();
                                alert3.present();
                            }
                        }, function (error) {
                            loading.dismiss();
                        });
                    }
                },
                {
                    text: "No Offers",
                    handler: function () {
                        var alert = _this.alertCtrl.create({
                            title: "Confirm Booking",
                            message: "Are you sure, you want to book this flight?",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function () {
                                        console.log("Cancel clicked");
                                    }
                                },
                                {
                                    text: "Book",
                                    handler: function () {
                                        var loading = _this.loadingCtrl.create({
                                            content: "Please wait..."
                                        });
                                        loading.present();
                                        _this.bookingService
                                            .booking(_this.provider.userData.data.USERID, id, "", "", "", "", "", "")
                                            .subscribe(function (data) {
                                            console.log("booked flight", data);
                                            var alert2 = _this.alertCtrl.create({
                                                title: "Success!",
                                                subTitle: "You Have Successfully Booked Your Flight",
                                                buttons: ["Dismiss"]
                                            });
                                            _this.emailService
                                                .postEmail(_this.provider.userData.data.EMAIL, src, dest)
                                                .subscribe(function (data) { }, function (error) { });
                                            loading.dismiss();
                                            alert2.present();
                                            _this.navCtrl.pop();
                                        }, function (error) {
                                            var alert3 = _this.alertCtrl.create({
                                                title: "Alert!",
                                                subTitle: "OOOPS... Something Went Wrong While Booking",
                                                buttons: ["Dismiss"]
                                            });
                                            loading.dismiss();
                                            alert3.present();
                                            _this.navCtrl.pop();
                                            console.log(error);
                                        });
                                    }
                                }
                            ]
                        });
                        alert.present();
                        console.log("Archive clicked");
                    }
                },
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    }
                }
            ]
        });
        actionSheet.present();
    };
    BookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-booking",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/booking/booking.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-buttons start>\n        <button ion-button icon-only>\n          <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n        </button>\n      </ion-buttons>\n      <ion-title color="primary">Booking</ion-title>\n      <ion-buttons end>\n          <button ion-button icon-only color="danger" (click)="cancel()">\n            CANCEL\n          </button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ng-container *ngIf="data">\n      <ion-card class="card-5" *ngFor="let data of data">\n  \n          <ion-item>\n            <ion-icon name="logo-buffer" item-start large color="tab"></ion-icon>\n            <h2>Flight Number</h2>\n            <p>#{{data._id}}</p>\n          </ion-item>\n      \n          <ion-item>\n            <ion-icon name="plane" item-start large color="tab"></ion-icon>\n            <h2>From</h2>\n            <p>{{data.Origin | isoToCountryName}}</p>\n          </ion-item>\n      \n          <ion-item>\n            <ion-icon name="plane" item-start large color="tab"></ion-icon>\n            <h2>To</h2>\n            <p>{{data.Dest | isoToCountryName}}</p>\n          </ion-item>\n      \n          <ion-item>\n            <ion-icon name="time" item-start large color="tab"></ion-icon>\n            <h2>Arrival Time</h2>\n            <p>{{data.ArrTime | timeRefactor}}</p>\n          </ion-item>\n      \n          <ion-item>\n            <ion-icon name="time" item-start large color="tab"></ion-icon>\n            <h2>Departure Time</h2>\n            <p>{{data.DepTime | timeRefactor}}</p>\n          </ion-item>\n      \n          <ion-item>\n              <button ion-button block outline color="tab" (click)="confirm(data._id,data.Origin ,data.Dest )">BOOK</button>\n          </ion-item>\n      \n        </ion-card>\n  </ng-container>\n  \n  </ion-content>\n  <ion-footer no-border>\n\n    <footer>\n      <p class="copyright">© IBM 2019 </p>\n  </footer>\n  \n  </ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/booking/booking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__services_booking_service_booking_component_service__["a" /* BookingService */],
            __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__services_email_service_email_component_service__["a" /* EmailService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__services_odm_service_odm_component_service__["a" /* OdmService */]])
    ], BookingPage);
    return BookingPage;
}());

//# sourceMappingURL=booking.js.map

/***/ })

},[374]);
//# sourceMappingURL=main.js.map