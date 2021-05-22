(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alinma\Desktop\charity\resala\src\main.ts */"zUnb");


/***/ }),

/***/ "00il":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/profilepage/profilepage.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> World Charity </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> World Charity </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <img class=\"dots\" src=\"assets/img/dots.png\" />\n\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <div class=\"container align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6\">\n          <h1 class=\"profile-title text-left\">Mike Scheinder</h1>\n          <h5 class=\"text-on-back\">01</h5>\n          <p class=\"profile-description\">\n            Offices parties lasting outward nothing age few resolve. Impression\n            to discretion understood to we interested he excellence. Him\n            remarkably use projection collecting. Going about eat forty world\n            has round miles.\n          </p>\n          <div class=\"btn-wrapper profile pt-3\">\n            <a\n              class=\"btn btn-icon btn-twitter btn-round mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-facebook btn-round mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-dribbble btn-round\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img\n                class=\"img-center img-fluid rounded-circle\"\n                src=\"assets/img/mike.jpg\"\n              />\n\n              <h4 class=\"title\">Transactions</h4>\n            </div>\n            <div class=\"card-body\">\n              <tabset\n                class=\"nav-tabs-danger justify-content-center tab-subcategories\"\n              >\n                <tab heading=\"Wallet\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table tablesorter\" id=\"plain-table\">\n                      <thead class=\"text-danger\">\n                        <tr>\n                          <th class=\"header\">COIN</th>\n                          <th class=\"header\">AMOUNT</th>\n                          <th class=\"header\">VALUE</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>BTC</td>\n                          <td>7.342</td>\n                          <td>48,870.75 USD</td>\n                        </tr>\n                        <tr>\n                          <td>ETH</td>\n                          <td>30.737</td>\n                          <td>64,53.30 USD</td>\n                        </tr>\n                        <tr>\n                          <td>XRP</td>\n                          <td>19.242</td>\n                          <td>18,354.96 USD</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </tab>\n                <tab heading=\"Send\">\n                  <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\"> Pay to </label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"form-group\">\n                        <input\n                          class=\"form-control\"\n                          placeholder=\"e.g. 1Nasd92348hU984353hfid\"\n                          type=\"text\"\n                        />\n\n                        <span class=\"form-text\">\n                          Please enter a valid address.\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\"> Amount </label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"form-group\">\n                        <input\n                          class=\"form-control\"\n                          placeholder=\"1.587\"\n                          type=\"text\"\n                        />\n                      </div>\n                    </div>\n                  </div>\n                  <button\n                    class=\"btn btn-simple btn-danger btn-icon btn-round float-right\"\n                    type=\"submit\"\n                  >\n                    <i class=\"tim-icons icon-send\"> </i>\n                  </button>\n                </tab>\n                <tab heading=\"News\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table tablesorter\" id=\"plain-table\">\n                      <thead class=\"text-danger\">\n                        <tr>\n                          <th class=\"header\">Latest Crypto News</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>The Daily: Nexo to Pay on Stable...</td>\n                        </tr>\n                        <tr>\n                          <td>Venezuela Begins Public of Nation...</td>\n                        </tr>\n                        <tr>\n                          <td>PR: BitCanna â Dutch Blockchain...</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </tab>\n              </tabset>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section\">\n    <div class=\"container\">\n      <div class=\"row justify-content-between\">\n        <div class=\"col-md-6\">\n          <div class=\"row justify-content-between align-items-center\">\n            <carousel [showIndicators]=\"true\">\n              <slide>\n                <img\n                  alt=\"First slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/denys.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Big City Life, United States</h5>\n                </div>\n              </slide>\n              <slide>\n                <img\n                  alt=\"Second slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/fabien-bazanegue.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Somewhere Beyond, United States</h5>\n                </div>\n              </slide>\n              <slide>\n                <img\n                  alt=\"Third slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/mark-finn.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Stocks, United States</h5>\n                </div>\n              </slide>\n            </carousel>\n          </div>\n        </div>\n        <div class=\"col-md-5\">\n          <h1 class=\"profile-title text-left\">Projects</h1>\n          <h5 class=\"text-on-back\">02</h5>\n          <p class=\"profile-description text-left\">\n            An artist of considerable range, Ryan â the name taken by\n            Melbourne-raised, Brooklyn-based Nick Murphy â writes, performs and\n            records all of his own music, giving it a warm, intimate feel with a\n            solid groove structure. An artist of considerable range.\n          </p>\n          <div class=\"btn-wrapper pt-3\">\n            <button\n              class=\"btn btn-simple btn-danger mr-1\"\n              href=\"javascript:void(0)\"\n            >\n              <i class=\"tim-icons icon-book-bookmark\"> </i> Bookmark\n            </button>\n            <button class=\"btn btn-simple btn-info\" href=\"javascript:void(0)\">\n              <i class=\"tim-icons icon-bulb-63\"> </i> Check it!\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <section class=\"section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"card card-plain\">\n            <div class=\"card-header\">\n              <h1 class=\"profile-title text-left\">Contact</h1>\n              <h5 class=\"text-on-back\">03</h5>\n            </div>\n            <div class=\"card-body\">\n              <form>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Your Name </label>\n                      <input class=\"form-control\" type=\"text\" value=\"Mike\" />\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Email address </label>\n                      <input\n                        class=\"form-control\"\n                        placeholder=\"mike@email.com\"\n                        type=\"email\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Phone </label>\n                      <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        value=\"001-12321345\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Company </label>\n                      <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        value=\"CreativeTim\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label> Message </label>\n                      <input\n                        class=\"form-control\"\n                        placeholder=\"Hello there!\"\n                        type=\"text\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <button\n                  class=\"btn btn-danger btn-round float-right\"\n                  placement=\"right\"\n                  type=\"submit\"\n                >\n                  Send text\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4 ml-auto\">\n          <div class=\"info info-horizontal\">\n            <div class=\"icon icon-danger\">\n              <i class=\"tim-icons icon-square-pin\"> </i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">Find us at the office</h4>\n              <p>\n                Bld Mihail Kogalniceanu, nr. 8, <br />\n\n                7652 Bucharest, <br />\n\n                Romania\n              </p>\n            </div>\n          </div>\n          <div class=\"info info-horizontal\">\n            <div class=\"icon icon-danger\">\n              <i class=\"tim-icons icon-mobile\"> </i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">Give us a ring</h4>\n              <p>\n                Michael Jordan <br />\n\n                +40 762 321 762 <br />\n\n                Mon - Fri, 8:00-22:00\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">World Charity</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "4NCn":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/pay/pay-donate.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXktZG9uYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "6lJF":
/*!***************************************************!*\
  !*** ./src/app/shared/utils/countries-contant.ts ***!
  \***************************************************/
/*! exports provided: Countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countries", function() { return Countries; });
/* harmony import */ var fuzzball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fuzzball */ "TiYw");
/* harmony import */ var fuzzball__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fuzzball__WEBPACK_IMPORTED_MODULE_0__);

var Countries = /** @class */ (function () {
    function Countries() {
        this.countries = [
            {
                "name": "Afghanistan",
                "alpha2": "AF",
                "alpha3": "AFG",
                "numeric": "004",
                "locales": [
                    "ps_AF",
                    "fa_AF",
                    "uz_Arab_AF"
                ],
                "default_locale": "ps_AF",
                "currency": "AFN",
                "languages": [
                    "ps",
                    "uz",
                    "tk"
                ],
                "capital": "Kabul",
                "emoji": "🇦🇫",
                "emojiU": "U+1F1E6 U+1F1EB",
                "fips": "AF",
                "internet": "AF",
                "continent": "Asia",
                "region": "South Asia"
            },
            {
                "name": "Albania",
                "alpha2": "AL",
                "alpha3": "ALB",
                "numeric": "008",
                "locales": [
                    "sq_AL"
                ],
                "default_locale": "sq_AL",
                "currency": "ALL",
                "languages": [
                    "sq"
                ],
                "capital": "Tirana",
                "emoji": "🇦🇱",
                "emojiU": "U+1F1E6 U+1F1F1",
                "fips": "AL",
                "internet": "AL",
                "continent": "Europe",
                "region": "South East Europe"
            },
            {
                "name": "Algeria",
                "alpha2": "DZ",
                "alpha3": "DZA",
                "numeric": "012",
                "locales": [
                    "ar_DZ",
                    "kab_DZ"
                ],
                "default_locale": "ar_DZ",
                "currency": "DZD",
                "languages": [
                    "ar"
                ],
                "capital": "Algiers",
                "emoji": "🇩🇿",
                "emojiU": "U+1F1E9 U+1F1FF",
                "fips": "AG",
                "internet": "DZ",
                "continent": "Africa",
                "region": "Northern Africa"
            },
            {
                "name": "American Samoa",
                "alpha2": "AS",
                "alpha3": "ASM",
                "numeric": "016",
                "locales": [
                    "en_AS"
                ],
                "default_locale": "en_AS",
                "currency": "USD",
                "languages": [
                    "en",
                    "sm"
                ],
                "capital": "Pago Pago",
                "emoji": "🇦🇸",
                "emojiU": "U+1F1E6 U+1F1F8",
                "fips": "AQ",
                "internet": "AS",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Andorra",
                "alpha2": "AD",
                "alpha3": "AND",
                "numeric": "020",
                "locales": [
                    "ca"
                ],
                "default_locale": "ca",
                "currency": "EUR",
                "languages": [
                    "ca"
                ],
                "capital": "Andorra la Vella",
                "emoji": "🇦🇩",
                "emojiU": "U+1F1E6 U+1F1E9",
                "fips": "AN",
                "internet": "AD",
                "continent": "Europe",
                "region": "South West Europe"
            },
            {
                "name": "Angola",
                "alpha2": "AO",
                "alpha3": "AGO",
                "numeric": "024",
                "locales": [
                    "pt"
                ],
                "default_locale": "pt",
                "currency": "AOA",
                "languages": [
                    "pt"
                ],
                "capital": "Luanda",
                "emoji": "🇦🇴",
                "emojiU": "U+1F1E6 U+1F1F4",
                "fips": "AO",
                "internet": "AO",
                "continent": "Africa",
                "region": "Southern Africa"
            },
            {
                "name": "Anguilla",
                "alpha2": "AI",
                "alpha3": "AIA",
                "numeric": "660",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "XCD",
                "languages": [
                    "en"
                ],
                "capital": "The Valley",
                "emoji": "🇦🇮",
                "emojiU": "U+1F1E6 U+1F1EE",
                "fips": "AV",
                "internet": "AI",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Antarctica",
                "alpha2": "AQ",
                "alpha3": "ATA",
                "numeric": "010",
                "locales": [
                    "en_US"
                ],
                "default_locale": "en_US",
                "currency": "USD",
                "languages": [],
                "capital": "",
                "emoji": "🇦🇶",
                "emojiU": "U+1F1E6 U+1F1F6",
                "fips": "AY",
                "internet": "AQ",
                "continent": "Antarctica",
                "region": "Antarctica"
            },
            {
                "name": "Antigua and Barbuda",
                "alpha2": "AG",
                "alpha3": "ATG",
                "numeric": "028",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "XCD",
                "languages": [
                    "en"
                ],
                "capital": "Saint John's",
                "emoji": "🇦🇬",
                "emojiU": "U+1F1E6 U+1F1EC",
                "fips": "AC",
                "internet": "AG",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Argentina",
                "alpha2": "AR",
                "alpha3": "ARG",
                "numeric": "032",
                "locales": [
                    "es_AR"
                ],
                "default_locale": "es_AR",
                "currency": "ARS",
                "languages": [
                    "es",
                    "gn"
                ],
                "capital": "Buenos Aires",
                "emoji": "🇦🇷",
                "emojiU": "U+1F1E6 U+1F1F7",
                "fips": "AR",
                "internet": "AR",
                "continent": "Americas",
                "region": "South America"
            },
            {
                "name": "Armenia",
                "alpha2": "AM",
                "alpha3": "ARM",
                "numeric": "051",
                "locales": [
                    "hy_AM"
                ],
                "default_locale": "hy_AM",
                "currency": "AMD",
                "languages": [
                    "hy",
                    "ru"
                ],
                "capital": "Yerevan",
                "emoji": "🇦🇲",
                "emojiU": "U+1F1E6 U+1F1F2",
                "fips": "AM",
                "internet": "AM",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "Aruba",
                "alpha2": "AW",
                "alpha3": "ABW",
                "numeric": "533",
                "locales": [
                    "nl"
                ],
                "default_locale": "nl",
                "currency": "AWG",
                "languages": [
                    "nl",
                    "pa"
                ],
                "capital": "Oranjestad",
                "emoji": "🇦🇼",
                "emojiU": "U+1F1E6 U+1F1FC",
                "fips": "AA",
                "internet": "AW",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Australia",
                "alpha2": "AU",
                "alpha3": "AUS",
                "numeric": "036",
                "locales": [
                    "en_AU"
                ],
                "default_locale": "en_AU",
                "currency": "AUD",
                "languages": [
                    "en"
                ],
                "capital": "Canberra",
                "emoji": "🇦🇺",
                "emojiU": "U+1F1E6 U+1F1FA",
                "fips": "AS",
                "internet": "AU",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Austria",
                "alpha2": "AT",
                "alpha3": "AUT",
                "numeric": "040",
                "locales": [
                    "de_AT"
                ],
                "default_locale": "de_AT",
                "currency": "EUR",
                "languages": [
                    "de"
                ],
                "capital": "Vienna",
                "emoji": "🇦🇹",
                "emojiU": "U+1F1E6 U+1F1F9",
                "fips": "AU",
                "internet": "AT",
                "continent": "Europe",
                "region": "Central Europe"
            },
            {
                "name": "Azerbaijan",
                "alpha2": "AZ",
                "alpha3": "AZE",
                "numeric": "031",
                "locales": [
                    "az_Cyrl_AZ",
                    "az_Latn_AZ"
                ],
                "default_locale": "az_Cyrl_AZ",
                "currency": "AZN",
                "languages": [
                    "az"
                ],
                "capital": "Baku",
                "emoji": "🇦🇿",
                "emojiU": "U+1F1E6 U+1F1FF",
                "fips": "AJ",
                "internet": "AZ",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "Bahamas",
                "alpha2": "BS",
                "alpha3": "BHS",
                "numeric": "044",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "BSD",
                "languages": [
                    "en"
                ],
                "capital": "Nassau",
                "emoji": "🇧🇸",
                "emojiU": "U+1F1E7 U+1F1F8",
                "fips": "BF",
                "internet": "BS",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Bahrain",
                "alpha2": "BH",
                "alpha3": "BHR",
                "numeric": "048",
                "locales": [
                    "ar_BH"
                ],
                "default_locale": "ar_BH",
                "currency": "BHD",
                "languages": [
                    "ar"
                ],
                "capital": "Manama",
                "emoji": "🇧🇭",
                "emojiU": "U+1F1E7 U+1F1ED",
                "fips": "BA",
                "internet": "BH",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "Bangladesh",
                "alpha2": "BD",
                "alpha3": "BGD",
                "numeric": "050",
                "locales": [
                    "bn_BD"
                ],
                "default_locale": "bn_BD",
                "currency": "BDT",
                "languages": [
                    "bn"
                ],
                "capital": "Dhaka",
                "emoji": "🇧🇩",
                "emojiU": "U+1F1E7 U+1F1E9",
                "fips": "BG",
                "internet": "BD",
                "continent": "Asia",
                "region": "South Asia"
            },
            {
                "name": "Barbados",
                "alpha2": "BB",
                "alpha3": "BRB",
                "numeric": "052",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "BBD",
                "languages": [
                    "en"
                ],
                "capital": "Bridgetown",
                "emoji": "🇧🇧",
                "emojiU": "U+1F1E7 U+1F1E7",
                "fips": "BB",
                "internet": "BB",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Belarus",
                "alpha2": "BY",
                "alpha3": "BLR",
                "numeric": "112",
                "locales": [
                    "be_BY"
                ],
                "default_locale": "be_BY",
                "currency": "BYN",
                "languages": [
                    "be",
                    "ru"
                ],
                "capital": "Minsk",
                "emoji": "🇧🇾",
                "emojiU": "U+1F1E7 U+1F1FE",
                "fips": "BO",
                "internet": "BY",
                "continent": "Europe",
                "region": "Eastern Europe"
            },
            {
                "name": "Belgium",
                "alpha2": "BE",
                "alpha3": "BEL",
                "numeric": "056",
                "locales": [
                    "nl_BE",
                    "en_BE",
                    "fr_BE",
                    "de_BE"
                ],
                "default_locale": "nl_BE",
                "currency": "EUR",
                "languages": [
                    "nl",
                    "fr",
                    "de"
                ],
                "capital": "Brussels",
                "emoji": "🇧🇪",
                "emojiU": "U+1F1E7 U+1F1EA",
                "fips": "BE",
                "internet": "BE",
                "continent": "Europe",
                "region": "Western Europe"
            },
            {
                "name": "Belize",
                "alpha2": "BZ",
                "alpha3": "BLZ",
                "numeric": "084",
                "locales": [
                    "en_BZ"
                ],
                "default_locale": "en_BZ",
                "currency": "BZD",
                "languages": [
                    "en",
                    "es"
                ],
                "capital": "Belmopan",
                "emoji": "🇧🇿",
                "emojiU": "U+1F1E7 U+1F1FF",
                "fips": "BH",
                "internet": "BZ",
                "continent": "Americas",
                "region": "Central America"
            },
            {
                "name": "Benin",
                "alpha2": "BJ",
                "alpha3": "BEN",
                "numeric": "204",
                "locales": [
                    "fr_BJ"
                ],
                "default_locale": "fr_BJ",
                "currency": "XOF",
                "languages": [
                    "fr"
                ],
                "capital": "Porto-Novo",
                "emoji": "🇧🇯",
                "emojiU": "U+1F1E7 U+1F1EF",
                "fips": "BN",
                "internet": "BJ",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Bermuda",
                "alpha2": "BM",
                "alpha3": "BMU",
                "numeric": "060",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "BMD",
                "languages": [
                    "en"
                ],
                "capital": "Hamilton",
                "emoji": "🇧🇲",
                "emojiU": "U+1F1E7 U+1F1F2",
                "fips": "BD",
                "internet": "BM",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Bhutan",
                "alpha2": "BT",
                "alpha3": "BTN",
                "numeric": "064",
                "locales": [
                    "dz"
                ],
                "default_locale": "dz",
                "currency": "BTN",
                "languages": [
                    "dz"
                ],
                "capital": "Thimphu",
                "emoji": "🇧🇹",
                "emojiU": "U+1F1E7 U+1F1F9",
                "fips": "BT",
                "internet": "BT",
                "continent": "Asia",
                "region": "South Asia"
            },
            {
                "name": "Bolivia",
                "alpha2": "BO",
                "alpha3": "BOL",
                "numeric": "068",
                "locales": [
                    "es_BO"
                ],
                "default_locale": "es_BO",
                "currency": "BTN",
                "languages": [
                    "es",
                    "ay",
                    "qu"
                ],
                "capital": "Sucre",
                "emoji": "🇧🇴",
                "emojiU": "U+1F1E7 U+1F1F4",
                "fips": "BL",
                "internet": "BO",
                "continent": "Americas",
                "region": "South America",
                "alternate_names": [
                    "Plurinational State of Bolivia"
                ]
            },
            {
                "name": "Bonaire",
                "alpha2": "BQ",
                "alpha3": "BES",
                "numeric": "535",
                "locales": [
                    "nl"
                ],
                "default_locale": "nl",
                "currency": "USD",
                "languages": [
                    "nl"
                ],
                "capital": "Kralendijk",
                "emoji": "🇧🇶",
                "emojiU": "U+1F1E7 U+1F1F6",
                "fips": "BQ",
                "internet": "BQ",
                "continent": "Americas",
                "region": "West Indies",
                "alternate_names": [
                    "Bonaire, Sint Eustatius and Saba"
                ]
            },
            {
                "name": "Bosnia and Herzegovina",
                "alpha2": "BA",
                "alpha3": "BIH",
                "numeric": "070",
                "locales": [
                    "bs_BA",
                    "sr_Cyrl_BA",
                    "sr_Latn_BA"
                ],
                "default_locale": "bs_BA",
                "currency": "BAM",
                "languages": [
                    "bs",
                    "hr",
                    "sr"
                ],
                "capital": "Sarajevo",
                "emoji": "🇧🇦",
                "emojiU": "U+1F1E7 U+1F1E6",
                "fips": "BK",
                "internet": "BA",
                "continent": "Europe",
                "region": "South East Europe"
            },
            {
                "name": "Botswana",
                "alpha2": "BW",
                "alpha3": "BWA",
                "numeric": "072",
                "locales": [
                    "en_BW"
                ],
                "default_locale": "en_BW",
                "currency": "BWP",
                "languages": [
                    "en",
                    "tn"
                ],
                "capital": "Gaborone",
                "emoji": "🇧🇼",
                "emojiU": "U+1F1E7 U+1F1FC",
                "fips": "BC",
                "internet": "BW",
                "continent": "Africa",
                "region": "Southern Africa"
            },
            {
                "name": "Bouvet Island",
                "alpha2": "BV",
                "alpha3": "BVT",
                "numeric": "074",
                "locales": [
                    "no"
                ],
                "default_locale": "no",
                "currency": "NOK",
                "languages": [
                    "no",
                    "nb",
                    "nn"
                ],
                "capital": "",
                "emoji": "🇧🇻",
                "emojiU": "U+1F1E7 U+1F1FB",
                "fips": "BV",
                "internet": "BV",
                "continent": "Atlantic Ocean",
                "region": "South Atlantic Ocean"
            },
            {
                "name": "Brazil",
                "alpha2": "BR",
                "alpha3": "BRA",
                "numeric": "076",
                "locales": [
                    "pt_BR"
                ],
                "default_locale": "pt_BR",
                "currency": "BRL",
                "languages": [
                    "pt"
                ],
                "capital": "Brasília",
                "emoji": "🇧🇷",
                "emojiU": "U+1F1E7 U+1F1F7",
                "fips": "BR",
                "internet": "BR",
                "continent": "Americas",
                "region": "South America"
            },
            {
                "name": "British Indian Ocean Territory",
                "alpha2": "IO",
                "alpha3": "IOT",
                "numeric": "086",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "USD",
                "languages": [
                    "en"
                ],
                "capital": "Diego Garcia",
                "emoji": "🇮🇴",
                "emojiU": "U+1F1EE U+1F1F4",
                "fips": "IO",
                "internet": "IO",
                "continent": "Asia",
                "region": "South Asia"
            },
            {
                "name": "Brunei Darussalam",
                "alpha2": "BN",
                "alpha3": "BRN",
                "numeric": "096",
                "locales": [
                    "ms_BN"
                ],
                "default_locale": "ms_BN",
                "currency": "BND",
                "languages": [
                    "ms"
                ],
                "capital": "Bandar Seri Begawan",
                "emoji": "🇧🇳",
                "emojiU": "U+1F1E7 U+1F1F3",
                "fips": "BX",
                "internet": "BN",
                "continent": "Asia",
                "region": "South East Asia"
            },
            {
                "name": "Bulgaria",
                "alpha2": "BG",
                "alpha3": "BGR",
                "numeric": "100",
                "locales": [
                    "bg_BG"
                ],
                "default_locale": "bg_BG",
                "currency": "BGN",
                "languages": [
                    "bg"
                ],
                "capital": "Sofia",
                "emoji": "🇧🇬",
                "emojiU": "U+1F1E7 U+1F1EC",
                "fips": "BU",
                "internet": "BG",
                "continent": "Europe",
                "region": "South East Europe"
            },
            {
                "name": "Burkina Faso",
                "alpha2": "BF",
                "alpha3": "BFA",
                "numeric": "854",
                "locales": [
                    "fr_BF"
                ],
                "default_locale": "fr_BF",
                "currency": "XOF",
                "languages": [
                    "fr",
                    "ff"
                ],
                "capital": "Ouagadougou",
                "emoji": "🇧🇫",
                "emojiU": "U+1F1E7 U+1F1EB",
                "fips": "UV",
                "internet": "BF",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Burundi",
                "alpha2": "BI",
                "alpha3": "BDI",
                "numeric": "108",
                "locales": [
                    "fr_BI"
                ],
                "default_locale": "fr_BI",
                "currency": "BIF",
                "languages": [
                    "fr",
                    "rn"
                ],
                "capital": "Bujumbura",
                "emoji": "🇧🇮",
                "emojiU": "U+1F1E7 U+1F1EE",
                "fips": "BY",
                "internet": "BI",
                "continent": "Africa",
                "region": "Central Africa"
            },
            {
                "name": "Cabo Verde",
                "alpha2": "CV",
                "alpha3": "CPV",
                "numeric": "132",
                "locales": [
                    "kea_CV"
                ],
                "default_locale": "kea_CV",
                "currency": "CVE",
                "languages": [
                    "pt"
                ],
                "capital": "Praia",
                "emoji": "🇨🇻",
                "emojiU": "U+1F1E8 U+1F1FB",
                "fips": "CV",
                "internet": "CV",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Cambodia",
                "alpha2": "KH",
                "alpha3": "KHM",
                "numeric": "116",
                "locales": [
                    "km_KH"
                ],
                "default_locale": "km_KH",
                "currency": "KHR",
                "languages": [
                    "km"
                ],
                "capital": "Phnom Penh",
                "emoji": "🇰🇭",
                "emojiU": "U+1F1F0 U+1F1ED",
                "fips": "CB",
                "internet": "KH",
                "continent": "Asia",
                "region": "South East Asia"
            },
            {
                "name": "Cameroon",
                "alpha2": "CM",
                "alpha3": "CMR",
                "numeric": "120",
                "locales": [
                    "fr_CM"
                ],
                "default_locale": "fr_CM",
                "currency": "XAF",
                "languages": [
                    "en",
                    "fr"
                ],
                "capital": "Yaoundé",
                "emoji": "🇨🇲",
                "emojiU": "U+1F1E8 U+1F1F2",
                "fips": "CM",
                "internet": "CM",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Canada",
                "alpha2": "CA",
                "alpha3": "CAN",
                "numeric": "124",
                "locales": [
                    "en_CA",
                    "fr_CA"
                ],
                "default_locale": "en_CA",
                "currency": "CAD",
                "languages": [
                    "en",
                    "fr"
                ],
                "capital": "Ottawa",
                "emoji": "🇨🇦",
                "emojiU": "U+1F1E8 U+1F1E6",
                "fips": "CA",
                "internet": "CA",
                "continent": "Americas",
                "region": "North America"
            },
            {
                "name": "Cayman Islands",
                "alpha2": "KY",
                "alpha3": "CYM",
                "numeric": "136",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "KYD",
                "languages": [
                    "en"
                ],
                "capital": "George Town",
                "emoji": "🇰🇾",
                "emojiU": "U+1F1F0 U+1F1FE",
                "fips": "CJ",
                "internet": "KY",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Central African Republic",
                "alpha2": "CF",
                "alpha3": "CAF",
                "numeric": "140",
                "locales": [
                    "fr_CF",
                    "sg_CF"
                ],
                "default_locale": "fr_CF",
                "currency": "XAF",
                "languages": [
                    "fr",
                    "sg"
                ],
                "capital": "Bangui",
                "emoji": "🇨🇫",
                "emojiU": "U+1F1E8 U+1F1EB",
                "fips": "CT",
                "internet": "CF",
                "continent": "Africa",
                "region": "Central Africa"
            },
            {
                "name": "Chad",
                "alpha2": "TD",
                "alpha3": "TCD",
                "numeric": "148",
                "locales": [
                    "fr_TD"
                ],
                "default_locale": "fr_TD",
                "currency": "XAF",
                "languages": [
                    "fr",
                    "ar"
                ],
                "capital": "N'Djamena",
                "emoji": "🇹🇩",
                "emojiU": "U+1F1F9 U+1F1E9",
                "fips": "CD",
                "internet": "TD",
                "continent": "Africa",
                "region": "Central Africa"
            },
            {
                "name": "Chile",
                "alpha2": "CL",
                "alpha3": "CHL",
                "numeric": "152",
                "locales": [
                    "es_CL"
                ],
                "default_locale": "es_CL",
                "currency": "CLF",
                "languages": [
                    "es"
                ],
                "capital": "Santiago",
                "emoji": "🇨🇱",
                "emojiU": "U+1F1E8 U+1F1F1",
                "fips": "CI",
                "internet": "CL",
                "continent": "Americas",
                "region": "South America"
            },
            {
                "name": "China",
                "alpha2": "CN",
                "alpha3": "CHN",
                "numeric": "156",
                "locales": [
                    "zh_CN",
                    "zh_Hans_CN",
                    "ii_CN",
                    "bo_CN"
                ],
                "default_locale": "zh_CN",
                "currency": "CNY",
                "languages": [
                    "zh"
                ],
                "capital": "Beijing",
                "emoji": "🇨🇳",
                "emojiU": "U+1F1E8 U+1F1F3",
                "fips": "CH",
                "internet": "CN",
                "continent": "Asia",
                "region": "East Asia"
            },
            {
                "name": "Christmas Island",
                "alpha2": "CX",
                "alpha3": "CXR",
                "numeric": "162",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "AUD",
                "languages": [
                    "en"
                ],
                "capital": "Flying Fish Cove",
                "emoji": "🇨🇽",
                "emojiU": "U+1F1E8 U+1F1FD",
                "fips": "KT",
                "internet": "CX",
                "continent": "Asia",
                "region": "South East Asia"
            },
            {
                "name": "Cocos Islands",
                "alpha2": "CC",
                "alpha3": "CCK",
                "numeric": "166",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "AUD",
                "languages": [
                    "en"
                ],
                "capital": "West Island",
                "emoji": "🇨🇨",
                "emojiU": "U+1F1E8 U+1F1E8",
                "fips": "CK",
                "internet": "CC",
                "continent": "Asia",
                "region": "South East Asia",
                "alternate_names": [
                    "Cocos Keeling Islands"
                ]
            },
            {
                "name": "Colombia",
                "alpha2": "CO",
                "alpha3": "COL",
                "numeric": "170",
                "locales": [
                    "es_CO"
                ],
                "default_locale": "es_CO",
                "currency": "COU",
                "languages": [
                    "es"
                ],
                "capital": "Bogotá",
                "emoji": "🇨🇴",
                "emojiU": "U+1F1E8 U+1F1F4",
                "fips": "CO",
                "internet": "CO",
                "continent": "Americas",
                "region": "South America"
            },
            {
                "name": "Comoros",
                "alpha2": "KM",
                "alpha3": "COM",
                "numeric": "174",
                "locales": [
                    "fr_KM"
                ],
                "default_locale": "fr_KM",
                "currency": "KMF",
                "languages": [
                    "ar",
                    "fr"
                ],
                "capital": "Moroni",
                "emoji": "🇰🇲",
                "emojiU": "U+1F1F0 U+1F1F2",
                "fips": "CN",
                "internet": "KM",
                "continent": "Africa",
                "region": "Indian Ocean"
            },
            {
                "name": "Democratic Republic of the Congo",
                "alpha2": "CD",
                "alpha3": "COD",
                "numeric": "180",
                "locales": [
                    "fr_CD"
                ],
                "default_locale": "fr_CD",
                "currency": "CDF",
                "languages": [
                    "fr",
                    "ln",
                    "kg",
                    "sw",
                    "lu"
                ],
                "capital": "Kinshasa",
                "emoji": "🇨🇩",
                "emojiU": "U+1F1E8 U+1F1E9",
                "fips": "CG",
                "internet": "ZR",
                "continent": "Africa",
                "region": "Central Africa"
            },
            {
                "name": "Congo",
                "alpha2": "CG",
                "alpha3": "COG",
                "numeric": "178",
                "locales": [
                    "fr_CG"
                ],
                "default_locale": "fr_CG",
                "currency": "XAF",
                "languages": [
                    "fr",
                    "ln"
                ],
                "capital": "Brazzaville",
                "emoji": "🇨🇬",
                "emojiU": "U+1F1E8 U+1F1EC",
                "fips": "CF",
                "internet": "CG",
                "continent": "Africa",
                "region": "Central Africa"
            },
            {
                "name": "Cook Islands",
                "alpha2": "CK",
                "alpha3": "COK",
                "numeric": "184",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "NZD",
                "languages": [
                    "en"
                ],
                "capital": "Avarua",
                "emoji": "🇨🇰",
                "emojiU": "U+1F1E8 U+1F1F0",
                "fips": "CW",
                "internet": "CK",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Costa Rica",
                "alpha2": "CR",
                "alpha3": "CRI",
                "numeric": "188",
                "locales": [
                    "es_CR"
                ],
                "default_locale": "es_CR",
                "currency": "CRC",
                "languages": [
                    "es"
                ],
                "capital": "San José",
                "emoji": "🇨🇷",
                "emojiU": "U+1F1E8 U+1F1F7",
                "fips": "CS",
                "internet": "CR",
                "continent": "Americas",
                "region": "Central America"
            },
            {
                "name": "Croatia",
                "alpha2": "HR",
                "alpha3": "HRV",
                "numeric": "191",
                "locales": [
                    "hr_HR"
                ],
                "default_locale": "hr_HR",
                "currency": "HRK",
                "languages": [
                    "hr"
                ],
                "capital": "Zagreb",
                "emoji": "🇭🇷",
                "emojiU": "U+1F1ED U+1F1F7",
                "fips": "HR",
                "internet": "HR",
                "continent": "Europe",
                "region": "South East Europe"
            },
            {
                "name": "Cuba",
                "alpha2": "CU",
                "alpha3": "CUB",
                "numeric": "192",
                "locales": [
                    "es"
                ],
                "default_locale": "es",
                "currency": "CUC",
                "languages": [
                    "es"
                ],
                "capital": "Havana",
                "emoji": "🇨🇺",
                "emojiU": "U+1F1E8 U+1F1FA",
                "fips": "CU",
                "internet": "CU",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Curaçao",
                "alpha2": "CW",
                "alpha3": "CUW",
                "numeric": "531",
                "locales": [
                    "nl"
                ],
                "default_locale": "nl",
                "currency": "ANG",
                "languages": [
                    "nl",
                    "pa",
                    "en"
                ],
                "capital": "Willemstad",
                "emoji": "🇨🇼",
                "emojiU": "U+1F1E8 U+1F1FC",
                "fips": "UC",
                "internet": "CW",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Cyprus",
                "alpha2": "CY",
                "alpha3": "CYP",
                "numeric": "196",
                "locales": [
                    "el_CY"
                ],
                "default_locale": "el_CY",
                "currency": "EUR",
                "languages": [
                    "el",
                    "tr",
                    "hy"
                ],
                "capital": "Nicosia",
                "emoji": "🇨🇾",
                "emojiU": "U+1F1E8 U+1F1FE",
                "fips": "CY",
                "internet": "CY",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "Czechia",
                "alpha2": "CZ",
                "alpha3": "CZE",
                "numeric": "203",
                "locales": [
                    "cs_CZ"
                ],
                "default_locale": "cs_CZ",
                "currency": "CZK",
                "languages": [
                    "cs",
                    "sk"
                ],
                "capital": "Prague",
                "emoji": "🇨🇿",
                "emojiU": "U+1F1E8 U+1F1FF",
                "fips": "EZ",
                "internet": "CZ",
                "continent": "Europe",
                "region": "Central Europe"
            },
            {
                "name": "Côte d'Ivoire",
                "alpha2": "CI",
                "alpha3": "CIV",
                "numeric": "384",
                "locales": [
                    "fr_CI"
                ],
                "default_locale": "fr_CI",
                "currency": "CZK",
                "languages": [
                    "fr"
                ],
                "capital": "Yamoussoukro",
                "emoji": "🇨🇮",
                "emojiU": "U+1F1E8 U+1F1EE",
                "fips": "IV",
                "internet": "CI",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Denmark",
                "alpha2": "DK",
                "alpha3": "DNK",
                "numeric": "208",
                "locales": [
                    "da_DK"
                ],
                "default_locale": "da_DK",
                "currency": "DKK",
                "languages": [
                    "da"
                ],
                "capital": "Copenhagen",
                "emoji": "🇩🇰",
                "emojiU": "U+1F1E9 U+1F1F0",
                "fips": "DA",
                "internet": "DK",
                "continent": "Europe",
                "region": "Northern Europe"
            },
            {
                "name": "Djibouti",
                "alpha2": "DJ",
                "alpha3": "DJI",
                "numeric": "262",
                "locales": [
                    "fr_DJ",
                    "so_DJ"
                ],
                "default_locale": "fr_DJ",
                "currency": "DJF",
                "languages": [
                    "fr",
                    "ar"
                ],
                "capital": "Djibouti",
                "emoji": "🇩🇯",
                "emojiU": "U+1F1E9 U+1F1EF",
                "fips": "DJ",
                "internet": "DJ",
                "continent": "Africa",
                "region": "Eastern Africa"
            },
            {
                "name": "Dominica",
                "alpha2": "DM",
                "alpha3": "DMA",
                "numeric": "212",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "XCD",
                "languages": [
                    "en"
                ],
                "capital": "Roseau",
                "emoji": "🇩🇲",
                "emojiU": "U+1F1E9 U+1F1F2",
                "fips": "DO",
                "internet": "DM",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Dominican Republic",
                "alpha2": "DO",
                "alpha3": "DOM",
                "numeric": "214",
                "locales": [
                    "es_DO"
                ],
                "default_locale": "es_DO",
                "currency": "DOP",
                "languages": [
                    "es"
                ],
                "capital": "Santo Domingo",
                "emoji": "🇩🇴",
                "emojiU": "U+1F1E9 U+1F1F4",
                "fips": "DR",
                "internet": "DO",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Ecuador",
                "alpha2": "EC",
                "alpha3": "ECU",
                "numeric": "218",
                "locales": [
                    "es_EC"
                ],
                "default_locale": "es_EC",
                "currency": "USD",
                "languages": [
                    "es"
                ],
                "capital": "Quito",
                "emoji": "🇪🇨",
                "emojiU": "U+1F1EA U+1F1E8",
                "fips": "EC",
                "internet": "EC",
                "continent": "Americas",
                "region": "South America"
            },
            {
                "name": "Egypt",
                "alpha2": "EG",
                "alpha3": "EGY",
                "numeric": "818",
                "locales": [
                    "ar_EG"
                ],
                "default_locale": "ar_EG",
                "currency": "EGP",
                "languages": [
                    "ar"
                ],
                "capital": "Cairo",
                "emoji": "🇪🇬",
                "emojiU": "U+1F1EA U+1F1EC",
                "fips": "EG",
                "internet": "EG",
                "continent": "Africa",
                "region": "Northern Africa"
            },
            {
                "name": "El Salvador",
                "alpha2": "SV",
                "alpha3": "SLV",
                "numeric": "222",
                "locales": [
                    "es_SV"
                ],
                "default_locale": "es_SV",
                "currency": "USD",
                "languages": [
                    "es"
                ],
                "capital": "San Salvador",
                "emoji": "🇸🇻",
                "emojiU": "U+1F1F8 U+1F1FB",
                "fips": "ES",
                "internet": "SV",
                "continent": "Americas",
                "region": "Central America"
            },
            {
                "name": "Equatorial Guinea",
                "alpha2": "GQ",
                "alpha3": "GNQ",
                "numeric": "226",
                "locales": [
                    "fr_GQ",
                    "es_GQ"
                ],
                "default_locale": "fr_GQ",
                "currency": "XAF",
                "languages": [
                    "es",
                    "fr"
                ],
                "capital": "Malabo",
                "emoji": "🇬🇶",
                "emojiU": "U+1F1EC U+1F1F6",
                "fips": "EK",
                "internet": "GQ",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Eritrea",
                "alpha2": "ER",
                "alpha3": "ERI",
                "numeric": "232",
                "locales": [
                    "ti_ER"
                ],
                "default_locale": "ti_ER",
                "currency": "ERN",
                "languages": [
                    "ti",
                    "ar",
                    "en"
                ],
                "capital": "Asmara",
                "emoji": "🇪🇷",
                "emojiU": "U+1F1EA U+1F1F7",
                "fips": "ER",
                "internet": "ER",
                "continent": "Africa",
                "region": "Eastern Africa"
            },
            {
                "name": "Estonia",
                "alpha2": "EE",
                "alpha3": "EST",
                "numeric": "233",
                "locales": [
                    "et_EE"
                ],
                "default_locale": "et_EE",
                "currency": "EUR",
                "languages": [
                    "et"
                ],
                "capital": "Tallinn",
                "emoji": "🇪🇪",
                "emojiU": "U+1F1EA U+1F1EA",
                "fips": "EN",
                "internet": "EE",
                "continent": "Europe",
                "region": "Eastern Europe"
            },
            {
                "name": "Eswatini",
                "alpha2": "SZ",
                "alpha3": "SWZ",
                "numeric": "748",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "EUR",
                "languages": [
                    "en",
                    "ss"
                ],
                "capital": "Lobamba",
                "emoji": "🇸🇿",
                "emojiU": "U+1F1F8 U+1F1FF",
                "fips": "WZ",
                "internet": "SZ",
                "continent": "Africa",
                "region": "Southern Africa"
            },
            {
                "name": "Ethiopia",
                "alpha2": "ET",
                "alpha3": "ETH",
                "numeric": "231",
                "locales": [
                    "am_ET",
                    "om_ET",
                    "so_ET",
                    "ti_ET"
                ],
                "default_locale": "am_ET",
                "currency": "ETB",
                "languages": [
                    "am"
                ],
                "capital": "Addis Ababa",
                "emoji": "🇪🇹",
                "emojiU": "U+1F1EA U+1F1F9",
                "fips": "ET",
                "internet": "ET",
                "continent": "Africa",
                "region": "Eastern Africa"
            },
            {
                "name": "Falkland Islands",
                "alpha2": "FK",
                "alpha3": "FLK",
                "numeric": "238",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "DKK",
                "languages": [
                    "en"
                ],
                "capital": "Stanley",
                "emoji": "🇫🇰",
                "emojiU": "U+1F1EB U+1F1F0",
                "fips": "FA",
                "internet": "FK",
                "continent": "Americas",
                "region": "South America",
                "alternate_names": [
                    "Malvinas Falkland Islands"
                ]
            },
            {
                "name": "Faroe Islands",
                "alpha2": "FO",
                "alpha3": "FRO",
                "numeric": "234",
                "locales": [
                    "fo_FO"
                ],
                "default_locale": "fo_FO",
                "currency": "DKK",
                "languages": [
                    "fo"
                ],
                "capital": "Tórshavn",
                "emoji": "🇫🇴",
                "emojiU": "U+1F1EB U+1F1F4",
                "fips": "FO",
                "internet": "FO",
                "continent": "Europe",
                "region": "Northern Europe"
            },
            {
                "name": "Fiji",
                "alpha2": "FJ",
                "alpha3": "FJI",
                "numeric": "242",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "FJD",
                "languages": [
                    "en",
                    "fj",
                    "hi",
                    "ur"
                ],
                "capital": "Suva",
                "emoji": "🇫🇯",
                "emojiU": "U+1F1EB U+1F1EF",
                "fips": "FJ",
                "internet": "FJ",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Finland",
                "alpha2": "FI",
                "alpha3": "FIN",
                "numeric": "246",
                "locales": [
                    "fi_FI",
                    "sv_FI"
                ],
                "default_locale": "fi_FI",
                "currency": "EUR",
                "languages": [
                    "fi",
                    "sv"
                ],
                "capital": "Helsinki",
                "emoji": "🇫🇮",
                "emojiU": "U+1F1EB U+1F1EE",
                "fips": "FI",
                "internet": "FI",
                "continent": "Europe",
                "region": "Northern Europe"
            },
            {
                "name": "France",
                "alpha2": "FR",
                "alpha3": "FRA",
                "numeric": "250",
                "locales": [
                    "fr_FR"
                ],
                "default_locale": "fr_FR",
                "currency": "EUR",
                "languages": [
                    "fr"
                ],
                "capital": "Paris",
                "emoji": "🇫🇷",
                "emojiU": "U+1F1EB U+1F1F7",
                "fips": "FR",
                "internet": "FR",
                "continent": "Europe",
                "region": "Western Europe"
            },
            {
                "name": "French Guiana",
                "alpha2": "GF",
                "alpha3": "GUF",
                "numeric": "254",
                "locales": [
                    "fr"
                ],
                "default_locale": "fr",
                "currency": "EUR",
                "languages": [
                    "fr"
                ],
                "capital": "Cayenne",
                "emoji": "🇬🇫",
                "emojiU": "U+1F1EC U+1F1EB",
                "fips": "FG",
                "internet": "GF",
                "continent": "Americas",
                "region": "South America"
            },
            {
                "name": "French Polynesia",
                "alpha2": "PF",
                "alpha3": "PYF",
                "numeric": "258",
                "locales": [
                    "fr"
                ],
                "default_locale": "fr",
                "currency": "XPF",
                "languages": [
                    "fr"
                ],
                "capital": "Papeetē",
                "emoji": "🇵🇫",
                "emojiU": "U+1F1F5 U+1F1EB",
                "fips": "FP",
                "internet": "PF",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "French Southern Territories",
                "alpha2": "TF",
                "alpha3": "ATF",
                "numeric": "260",
                "locales": [
                    "fr"
                ],
                "default_locale": "fr",
                "currency": "EUR",
                "languages": [
                    "fr"
                ],
                "capital": "Port-aux-Français",
                "emoji": "🇹🇫",
                "emojiU": "U+1F1F9 U+1F1EB",
                "fips": "FS",
                "internet": "--",
                "continent": "Indian Ocean",
                "region": "Southern Indian Ocean"
            },
            {
                "name": "Gabon",
                "alpha2": "GA",
                "alpha3": "GAB",
                "numeric": "266",
                "locales": [
                    "fr_GA"
                ],
                "default_locale": "fr_GA",
                "currency": "XAF",
                "languages": [
                    "fr"
                ],
                "capital": "Libreville",
                "emoji": "🇬🇦",
                "emojiU": "U+1F1EC U+1F1E6",
                "fips": "GB",
                "internet": "GA",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Gambia",
                "alpha2": "GM",
                "alpha3": "GMB",
                "numeric": "270",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "GMD",
                "languages": [
                    "en"
                ],
                "capital": "Banjul",
                "emoji": "🇬🇲",
                "emojiU": "U+1F1EC U+1F1F2",
                "fips": "GA",
                "internet": "GM",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Georgia",
                "alpha2": "GE",
                "alpha3": "GEO",
                "numeric": "268",
                "locales": [
                    "ka_GE"
                ],
                "default_locale": "ka_GE",
                "currency": "GEL",
                "languages": [
                    "ka"
                ],
                "capital": "Tbilisi",
                "emoji": "🇬🇪",
                "emojiU": "U+1F1EC U+1F1EA",
                "fips": "GG",
                "internet": "GE",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "Germany",
                "alpha2": "DE",
                "alpha3": "DEU",
                "numeric": "276",
                "locales": [
                    "de_DE"
                ],
                "default_locale": "de_DE",
                "currency": "EUR",
                "languages": [
                    "de"
                ],
                "capital": "Berlin",
                "emoji": "🇩🇪",
                "emojiU": "U+1F1E9 U+1F1EA",
                "fips": "GM",
                "internet": "DE",
                "continent": "Europe",
                "region": "Western Europe"
            },
            {
                "name": "Ghana",
                "alpha2": "GH",
                "alpha3": "GHA",
                "numeric": "288",
                "locales": [
                    "ak_GH",
                    "ee_GH",
                    "ha_Latn_GH"
                ],
                "default_locale": "ak_GH",
                "currency": "GHS",
                "languages": [
                    "en"
                ],
                "capital": "Accra",
                "emoji": "🇬🇭",
                "emojiU": "U+1F1EC U+1F1ED",
                "fips": "GH",
                "internet": "GH",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Gibraltar",
                "alpha2": "GI",
                "alpha3": "GIB",
                "numeric": "292",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "GIP",
                "languages": [
                    "en"
                ],
                "capital": "Gibraltar",
                "emoji": "🇬🇮",
                "emojiU": "U+1F1EC U+1F1EE",
                "fips": "GI",
                "internet": "GI",
                "continent": "Europe",
                "region": "South West Europe"
            },
            {
                "name": "Greece",
                "alpha2": "GR",
                "alpha3": "GRC",
                "numeric": "300",
                "locales": [
                    "el_GR"
                ],
                "default_locale": "el_GR",
                "currency": "EUR",
                "languages": [
                    "el"
                ],
                "capital": "Athens",
                "emoji": "🇬🇷",
                "emojiU": "U+1F1EC U+1F1F7",
                "fips": "GR",
                "internet": "GR",
                "continent": "Europe",
                "region": "South East Europe"
            },
            {
                "name": "Greenland",
                "alpha2": "GL",
                "alpha3": "GRL",
                "numeric": "304",
                "locales": [
                    "kl_GL"
                ],
                "default_locale": "kl_GL",
                "currency": "DKK",
                "languages": [
                    "kl"
                ],
                "capital": "Nuuk",
                "emoji": "🇬🇱",
                "emojiU": "U+1F1EC U+1F1F1",
                "fips": "GL",
                "internet": "GL",
                "continent": "Americas",
                "region": "North America"
            },
            {
                "name": "Grenada",
                "alpha2": "GD",
                "alpha3": "GRD",
                "numeric": "308",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "XCD",
                "languages": [
                    "en"
                ],
                "capital": "St. George's",
                "emoji": "🇬🇩",
                "emojiU": "U+1F1EC U+1F1E9",
                "fips": "GJ",
                "internet": "GD",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Guadeloupe",
                "alpha2": "GP",
                "alpha3": "GLP",
                "numeric": "312",
                "locales": [
                    "fr_GP"
                ],
                "default_locale": "fr_GP",
                "currency": "EUR",
                "languages": [
                    "fr"
                ],
                "capital": "Basse-Terre",
                "emoji": "🇬🇵",
                "emojiU": "U+1F1EC U+1F1F5",
                "fips": "GP",
                "internet": "GP",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Guam",
                "alpha2": "GU",
                "alpha3": "GUM",
                "numeric": "316",
                "locales": [
                    "en_GU"
                ],
                "default_locale": "en_GU",
                "currency": "USD",
                "languages": [
                    "en",
                    "ch",
                    "es"
                ],
                "capital": "Hagåtña",
                "emoji": "🇬🇺",
                "emojiU": "U+1F1EC U+1F1FA",
                "fips": "GQ",
                "internet": "GU",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Guatemala",
                "alpha2": "GT",
                "alpha3": "GTM",
                "numeric": "320",
                "locales": [
                    "es_GT"
                ],
                "default_locale": "es_GT",
                "currency": "GTQ",
                "languages": [
                    "es"
                ],
                "capital": "Guatemala City",
                "emoji": "🇬🇹",
                "emojiU": "U+1F1EC U+1F1F9",
                "fips": "GT",
                "internet": "GT",
                "continent": "Americas",
                "region": "Central America"
            },
            {
                "name": "Guernsey",
                "alpha2": "GG",
                "alpha3": "GGY",
                "numeric": "831",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "GBP",
                "languages": [
                    "en",
                    "fr"
                ],
                "capital": "St. Peter Port",
                "emoji": "🇬🇬",
                "emojiU": "U+1F1EC U+1F1EC",
                "fips": "GK",
                "internet": "GG",
                "continent": "Europe",
                "region": "Western Europe"
            },
            {
                "name": "Guinea",
                "alpha2": "GN",
                "alpha3": "GIN",
                "numeric": "324",
                "locales": [
                    "fr_GN"
                ],
                "default_locale": "fr_GN",
                "currency": "GNF",
                "languages": [
                    "fr",
                    "ff"
                ],
                "capital": "Conakry",
                "emoji": "🇬🇳",
                "emojiU": "U+1F1EC U+1F1F3",
                "fips": "GV",
                "internet": "GN",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Guinea-Bissau",
                "alpha2": "GW",
                "alpha3": "GNB",
                "numeric": "624",
                "locales": [
                    "pt_GW"
                ],
                "default_locale": "pt_GW",
                "currency": "XOF",
                "languages": [
                    "pt"
                ],
                "capital": "Bissau",
                "emoji": "🇬🇼",
                "emojiU": "U+1F1EC U+1F1FC",
                "fips": "PU",
                "internet": "GW",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Guyana",
                "alpha2": "GY",
                "alpha3": "GUY",
                "numeric": "328",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "GYD",
                "languages": [
                    "en"
                ],
                "capital": "Georgetown",
                "emoji": "🇬🇾",
                "emojiU": "U+1F1EC U+1F1FE",
                "fips": "GY",
                "internet": "GY",
                "continent": "Americas",
                "region": "South America"
            },
            {
                "name": "Haiti",
                "alpha2": "HT",
                "alpha3": "HTI",
                "numeric": "332",
                "locales": [
                    "fr"
                ],
                "default_locale": "fr",
                "currency": "USD",
                "languages": [
                    "fr",
                    "ht"
                ],
                "capital": "Port-au-Prince",
                "emoji": "🇭🇹",
                "emojiU": "U+1F1ED U+1F1F9",
                "fips": "HA",
                "internet": "HT",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Heard Island and McDonald Islands",
                "alpha2": "HM",
                "alpha3": "HMD",
                "numeric": "334",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "AUD",
                "languages": [
                    "en"
                ],
                "capital": "",
                "emoji": "🇭🇲",
                "emojiU": "U+1F1ED U+1F1F2",
                "fips": "HM",
                "internet": "HM",
                "continent": "Indian Ocean",
                "region": "Southern Indian Ocean"
            },
            {
                "name": "Holy See",
                "alpha2": "VA",
                "alpha3": "VAT",
                "numeric": "336",
                "locales": [
                    "it"
                ],
                "default_locale": "it",
                "currency": "EUR",
                "languages": [
                    "it",
                    "la"
                ],
                "capital": "Vatican City",
                "emoji": "🇻🇦",
                "emojiU": "U+1F1FB U+1F1E6",
                "fips": "VT",
                "internet": "VA",
                "continent": "Europe",
                "region": "Southern Europe"
            },
            {
                "name": "Honduras",
                "alpha2": "HN",
                "alpha3": "HND",
                "numeric": "340",
                "locales": [
                    "es_HN"
                ],
                "default_locale": "es_HN",
                "currency": "HNL",
                "languages": [
                    "es"
                ],
                "capital": "Tegucigalpa",
                "emoji": "🇭🇳",
                "emojiU": "U+1F1ED U+1F1F3",
                "fips": "HO",
                "internet": "HN",
                "continent": "Americas",
                "region": "Central America"
            },
            {
                "name": "Hong Kong",
                "alpha2": "HK",
                "alpha3": "HKG",
                "numeric": "344",
                "locales": [
                    "yue_Hant_HK",
                    "zh_Hans_HK",
                    "zh_Hant_HK",
                    "en_HK"
                ],
                "default_locale": "en_HK",
                "currency": "HKD",
                "languages": [
                    "zh",
                    "en"
                ],
                "capital": "City of Victoria",
                "emoji": "🇭🇰",
                "emojiU": "U+1F1ED U+1F1F0",
                "fips": "HK",
                "internet": "HK",
                "continent": "Asia",
                "region": "East Asia"
            },
            {
                "name": "Hungary",
                "alpha2": "HU",
                "alpha3": "HUN",
                "numeric": "348",
                "locales": [
                    "hu_HU"
                ],
                "default_locale": "hu_HU",
                "currency": "HUF",
                "languages": [
                    "hu"
                ],
                "capital": "Budapest",
                "emoji": "🇭🇺",
                "emojiU": "U+1F1ED U+1F1FA",
                "fips": "HU",
                "internet": "HU",
                "continent": "Europe",
                "region": "Central Europe"
            },
            {
                "name": "Iceland",
                "alpha2": "IS",
                "alpha3": "ISL",
                "numeric": "352",
                "locales": [
                    "is_IS"
                ],
                "default_locale": "is_IS",
                "currency": "ISK",
                "languages": [
                    "is"
                ],
                "capital": "Reykjavik",
                "emoji": "🇮🇸",
                "emojiU": "U+1F1EE U+1F1F8",
                "fips": "IC",
                "internet": "IS",
                "continent": "Europe",
                "region": "Northern Europe"
            },
            {
                "name": "India",
                "alpha2": "IN",
                "alpha3": "IND",
                "numeric": "356",
                "locales": [
                    "as_IN",
                    "bn_IN",
                    "en_IN",
                    "gu_IN",
                    "hi_IN",
                    "kn_IN",
                    "kok_IN",
                    "ml_IN",
                    "mr_IN",
                    "ne_IN",
                    "or_IN",
                    "pa_Guru_IN",
                    "ta_IN",
                    "te_IN",
                    "bo_IN",
                    "ur_IN"
                ],
                "default_locale": "en_IN",
                "currency": "INR",
                "languages": [
                    "hi",
                    "en"
                ],
                "capital": "New Delhi",
                "emoji": "🇮🇳",
                "emojiU": "U+1F1EE U+1F1F3",
                "fips": "IN",
                "internet": "IN",
                "continent": "Asia",
                "region": "South Asia"
            },
            {
                "name": "Indonesia",
                "alpha2": "ID",
                "alpha3": "IDN",
                "numeric": "360",
                "locales": [
                    "id-ID"
                ],
                "default_locale": "id-ID",
                "currency": "IDR",
                "languages": [
                    "id"
                ],
                "capital": "Jakarta",
                "emoji": "🇮🇩",
                "emojiU": "U+1F1EE U+1F1E9",
                "fips": "ID",
                "internet": "ID",
                "continent": "Asia",
                "region": "South East Asia"
            },
            {
                "name": "Iran",
                "alpha2": "IR",
                "alpha3": "IRN",
                "numeric": "364",
                "locales": [
                    "fa_IR"
                ],
                "default_locale": "fa_IR",
                "currency": "XDR",
                "languages": [
                    "fa"
                ],
                "capital": "Tehran",
                "emoji": "🇮🇷",
                "emojiU": "U+1F1EE U+1F1F7",
                "fips": "IR",
                "internet": "IR",
                "continent": "Asia",
                "region": "South West Asia",
                "alternate_names": [
                    "Islamic Republic of Iran"
                ]
            },
            {
                "name": "Iraq",
                "alpha2": "IQ",
                "alpha3": "IRQ",
                "numeric": "368",
                "locales": [
                    "ar_IQ"
                ],
                "default_locale": "ar_IQ",
                "currency": "IQD",
                "languages": [
                    "ar",
                    "ku"
                ],
                "capital": "Baghdad",
                "emoji": "🇮🇶",
                "emojiU": "U+1F1EE U+1F1F6",
                "fips": "IZ",
                "internet": "IQ",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "Ireland",
                "alpha2": "IE",
                "alpha3": "IRL",
                "numeric": "372",
                "locales": [
                    "en_IE",
                    "ga_IE"
                ],
                "default_locale": "en_IE",
                "currency": "EUR",
                "languages": [
                    "ga",
                    "en"
                ],
                "capital": "Dublin",
                "emoji": "🇮🇪",
                "emojiU": "U+1F1EE U+1F1EA",
                "fips": "EI",
                "internet": "IE",
                "continent": "Europe",
                "region": "Western Europe"
            },
            {
                "name": "Isle of Man",
                "alpha2": "IM",
                "alpha3": "IMN",
                "numeric": "833",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "GBP",
                "languages": [
                    "en",
                    "gv"
                ],
                "capital": "Douglas",
                "emoji": "🇮🇲",
                "emojiU": "U+1F1EE U+1F1F2",
                "fips": "IM",
                "internet": "IM",
                "continent": "Europe",
                "region": "Western Europe"
            },
            {
                "name": "Israel",
                "alpha2": "IL",
                "alpha3": "ISR",
                "numeric": "376",
                "locales": [
                    "en_IL",
                    "he_IL"
                ],
                "default_locale": "he_IL",
                "currency": "ILS",
                "languages": [
                    "he",
                    "ar"
                ],
                "capital": "Jerusalem",
                "emoji": "🇮🇱",
                "emojiU": "U+1F1EE U+1F1F1",
                "fips": "IS",
                "internet": "IL",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "Italy",
                "alpha2": "IT",
                "alpha3": "ITA",
                "numeric": "380",
                "locales": [
                    "it_IT"
                ],
                "default_locale": "it_IT",
                "currency": "EUR",
                "languages": [
                    "it"
                ],
                "capital": "Rome",
                "emoji": "🇮🇹",
                "emojiU": "U+1F1EE U+1F1F9",
                "fips": "IT",
                "internet": "IT",
                "continent": "Europe",
                "region": "Southern Europe"
            },
            {
                "name": "Jamaica",
                "alpha2": "JM",
                "alpha3": "JAM",
                "numeric": "388",
                "locales": [
                    "en_JM"
                ],
                "default_locale": "en_JM",
                "currency": "JMD",
                "languages": [
                    "en"
                ],
                "capital": "Kingston",
                "emoji": "🇯🇲",
                "emojiU": "U+1F1EF U+1F1F2",
                "fips": "JM",
                "internet": "JM",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Japan",
                "alpha2": "JP",
                "alpha3": "JPN",
                "numeric": "392",
                "locales": [
                    "ja_JP"
                ],
                "default_locale": "ja_JP",
                "currency": "JPY",
                "languages": [
                    "ja"
                ],
                "capital": "Tokyo",
                "emoji": "🇯🇵",
                "emojiU": "U+1F1EF U+1F1F5",
                "fips": "JA",
                "internet": "JP",
                "continent": "Asia",
                "region": "East Asia"
            },
            {
                "name": "Jersey",
                "alpha2": "JE",
                "alpha3": "JEY",
                "numeric": "832",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "GBP",
                "languages": [
                    "en",
                    "fr"
                ],
                "capital": "Saint Helier",
                "emoji": "🇯🇪",
                "emojiU": "U+1F1EF U+1F1EA",
                "fips": "JE",
                "internet": "JE",
                "continent": "Europe",
                "region": "Western Europe"
            },
            {
                "name": "Jordan",
                "alpha2": "JO",
                "alpha3": "JOR",
                "numeric": "400",
                "locales": [
                    "ar_JO"
                ],
                "default_locale": "ar_JO",
                "currency": "JOD",
                "languages": [
                    "ar"
                ],
                "capital": "Amman",
                "emoji": "🇯🇴",
                "emojiU": "U+1F1EF U+1F1F4",
                "fips": "JO",
                "internet": "JO",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "Kazakhstan",
                "alpha2": "KZ",
                "alpha3": "KAZ",
                "numeric": "398",
                "locales": [
                    "kk_Cyrl_KZ"
                ],
                "default_locale": "kk_Cyrl_KZ",
                "currency": "KZT",
                "languages": [
                    "kk",
                    "ru"
                ],
                "capital": "Astana",
                "emoji": "🇰🇿",
                "emojiU": "U+1F1F0 U+1F1FF",
                "fips": "KZ",
                "internet": "KZ",
                "continent": "Asia",
                "region": "Central Asia"
            },
            {
                "name": "Kenya",
                "alpha2": "KE",
                "alpha3": "KEN",
                "numeric": "404",
                "locales": [
                    "ebu_KE",
                    "guz_KE",
                    "kln_KE",
                    "kam_KE",
                    "ki_KE",
                    "luo_KE",
                    "luy_KE",
                    "mas_KE",
                    "mer_KE",
                    "om_KE",
                    "saq_KE",
                    "so_KE",
                    "sw_KE",
                    "dav_KE",
                    "teo_KE"
                ],
                "default_locale": "ebu_KE",
                "currency": "KES",
                "languages": [
                    "en",
                    "sw"
                ],
                "capital": "Nairobi",
                "emoji": "🇰🇪",
                "emojiU": "U+1F1F0 U+1F1EA",
                "fips": "KE",
                "internet": "KE",
                "continent": "Africa",
                "region": "Eastern Africa"
            },
            {
                "name": "Kiribati",
                "alpha2": "KI",
                "alpha3": "KIR",
                "numeric": "296",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "AUD",
                "languages": [
                    "en"
                ],
                "capital": "South Tarawa",
                "emoji": "🇰🇮",
                "emojiU": "U+1F1F0 U+1F1EE",
                "fips": "KR",
                "internet": "KI",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "North Korea",
                "alpha2": "KP",
                "alpha3": "PRK",
                "numeric": "408",
                "locales": [
                    "ko"
                ],
                "default_locale": "ko",
                "currency": "KPW",
                "languages": [
                    "ko"
                ],
                "capital": "Pyongyang",
                "emoji": "🇰🇵",
                "emojiU": "U+1F1F0 U+1F1F5",
                "fips": "KN",
                "internet": "KP",
                "continent": "Asia",
                "region": "East Asia",
                "alternate_names": [
                    "Democratic People's Republic of Korea"
                ]
            },
            {
                "name": "South Korea",
                "alpha2": "KR",
                "alpha3": "KOR",
                "numeric": "410",
                "locales": [
                    "ko_KR"
                ],
                "default_locale": "ko_KR",
                "currency": "KRW",
                "languages": [
                    "ko"
                ],
                "capital": "Seoul",
                "emoji": "🇰🇷",
                "emojiU": "U+1F1F0 U+1F1F7",
                "fips": "KS",
                "internet": "KR",
                "continent": "Asia",
                "region": "East Asia",
                "alternate_names": [
                    "Republic of Korea"
                ]
            },
            {
                "name": "Kuwait",
                "alpha2": "KW",
                "alpha3": "KWT",
                "numeric": "414",
                "locales": [
                    "ar_KW"
                ],
                "default_locale": "ar_KW",
                "currency": "KWD",
                "languages": [
                    "ar"
                ],
                "capital": "Kuwait City",
                "emoji": "🇰🇼",
                "emojiU": "U+1F1F0 U+1F1FC",
                "fips": "KU",
                "internet": "KW",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "Kyrgyzstan",
                "alpha2": "KG",
                "alpha3": "KGZ",
                "numeric": "417",
                "locales": [
                    "ky"
                ],
                "default_locale": "ky",
                "currency": "KGS",
                "languages": [
                    "ky",
                    "ru"
                ],
                "capital": "Bishkek",
                "emoji": "🇰🇬",
                "emojiU": "U+1F1F0 U+1F1EC",
                "fips": "KG",
                "internet": "KG",
                "continent": "Asia",
                "region": "Central Asia"
            },
            {
                "name": "Lao People's Democratic Republic",
                "alpha2": "LA",
                "alpha3": "LAO",
                "numeric": "418",
                "locales": [
                    "lo"
                ],
                "default_locale": "lo",
                "currency": "LAK",
                "languages": [
                    "lo"
                ],
                "capital": "Vientiane",
                "emoji": "🇱🇦",
                "emojiU": "U+1F1F1 U+1F1E6",
                "fips": "LA",
                "internet": "LA",
                "continent": "Asia",
                "region": "South East Asia"
            },
            {
                "name": "Latvia",
                "alpha2": "LV",
                "alpha3": "LVA",
                "numeric": "428",
                "locales": [
                    "lv_LV"
                ],
                "default_locale": "lv_LV",
                "currency": "EUR",
                "languages": [
                    "lv"
                ],
                "capital": "Riga",
                "emoji": "🇱🇻",
                "emojiU": "U+1F1F1 U+1F1FB",
                "fips": "LG",
                "internet": "LV",
                "continent": "Europe",
                "region": "Eastern Europe"
            },
            {
                "name": "Lebanon",
                "alpha2": "LB",
                "alpha3": "LBN",
                "numeric": "422",
                "locales": [
                    "ar_LB"
                ],
                "default_locale": "ar_LB",
                "currency": "LBP",
                "languages": [
                    "ar",
                    "fr"
                ],
                "capital": "Beirut",
                "emoji": "🇱🇧",
                "emojiU": "U+1F1F1 U+1F1E7",
                "fips": "LE",
                "internet": "LB",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "Lesotho",
                "alpha2": "LS",
                "alpha3": "LSO",
                "numeric": "426",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "ZAR",
                "languages": [
                    "en",
                    "st"
                ],
                "capital": "Maseru",
                "emoji": "🇱🇸",
                "emojiU": "U+1F1F1 U+1F1F8",
                "fips": "LT",
                "internet": "LS",
                "continent": "Africa",
                "region": "Southern Africa"
            },
            {
                "name": "Liberia",
                "alpha2": "LR",
                "alpha3": "LBR",
                "numeric": "430",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "LRD",
                "languages": [
                    "en"
                ],
                "capital": "Monrovia",
                "emoji": "🇱🇷",
                "emojiU": "U+1F1F1 U+1F1F7",
                "fips": "LI",
                "internet": "LR",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Libya",
                "alpha2": "LY",
                "alpha3": "LBY",
                "numeric": "434",
                "locales": [
                    "ar_LY"
                ],
                "default_locale": "ar_LY",
                "currency": "LYD",
                "languages": [
                    "ar"
                ],
                "capital": "Tripoli",
                "emoji": "🇱🇾",
                "emojiU": "U+1F1F1 U+1F1FE",
                "fips": "LY",
                "internet": "LY",
                "continent": "Africa",
                "region": "Northern Africa"
            },
            {
                "name": "Liechtenstein",
                "alpha2": "LI",
                "alpha3": "LIE",
                "numeric": "438",
                "locales": [
                    "de_LI"
                ],
                "default_locale": "de_LI",
                "currency": "CHF",
                "languages": [
                    "de"
                ],
                "capital": "Vaduz",
                "emoji": "🇱🇮",
                "emojiU": "U+1F1F1 U+1F1EE",
                "fips": "LS",
                "internet": "LI",
                "continent": "Europe",
                "region": "Central Europe"
            },
            {
                "name": "Lithuania",
                "alpha2": "LT",
                "alpha3": "LTU",
                "numeric": "440",
                "locales": [
                    "lt_LT"
                ],
                "default_locale": "lt_LT",
                "currency": "EUR",
                "languages": [
                    "lt"
                ],
                "capital": "Vilnius",
                "emoji": "🇱🇹",
                "emojiU": "U+1F1F1 U+1F1F9",
                "fips": "LH",
                "internet": "LT",
                "continent": "Europe",
                "region": "Eastern Europe"
            },
            {
                "name": "Luxembourg",
                "alpha2": "LU",
                "alpha3": "LUX",
                "numeric": "442",
                "locales": [
                    "fr_LU",
                    "de_LU"
                ],
                "default_locale": "fr_LU",
                "currency": "EUR",
                "languages": [
                    "fr",
                    "de",
                    "lb"
                ],
                "capital": "Luxembourg",
                "emoji": "🇱🇺",
                "emojiU": "U+1F1F1 U+1F1FA",
                "fips": "LU",
                "internet": "LU",
                "continent": "Europe",
                "region": "Western Europe"
            },
            {
                "name": "Macao",
                "alpha2": "MO",
                "alpha3": "MAC",
                "numeric": "446",
                "locales": [
                    "zh_Hans_MO",
                    "zh_Hant_MO"
                ],
                "default_locale": "zh_Hans_MO",
                "currency": "MOP",
                "languages": [
                    "zh",
                    "pt"
                ],
                "capital": "",
                "emoji": "🇲🇴",
                "emojiU": "U+1F1F2 U+1F1F4",
                "fips": "MC",
                "internet": "MO",
                "continent": "Asia",
                "region": "East Asia"
            },
            {
                "name": "Madagascar",
                "alpha2": "MG",
                "alpha3": "MDG",
                "numeric": "450",
                "locales": [
                    "fr_MG",
                    "mg_MG"
                ],
                "default_locale": "fr_MG",
                "currency": "MGA",
                "languages": [
                    "fr",
                    "mg"
                ],
                "capital": "Antananarivo",
                "emoji": "🇲🇬",
                "emojiU": "U+1F1F2 U+1F1EC",
                "fips": "MA",
                "internet": "MG",
                "continent": "Africa",
                "region": "Indian Ocean"
            },
            {
                "name": "Malawi",
                "alpha2": "MW",
                "alpha3": "MWI",
                "numeric": "454",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "MWK",
                "languages": [
                    "en",
                    "ny"
                ],
                "capital": "Lilongwe",
                "emoji": "🇲🇼",
                "emojiU": "U+1F1F2 U+1F1FC",
                "fips": "MI",
                "internet": "MW",
                "continent": "Africa",
                "region": "Southern Africa"
            },
            {
                "name": "Malaysia",
                "alpha2": "MY",
                "alpha3": "MYS",
                "numeric": "458",
                "locales": [
                    "ms_MY"
                ],
                "default_locale": "ms_MY",
                "currency": "MYR",
                "languages": [
                    "ms"
                ],
                "capital": "Kuala Lumpur",
                "emoji": "🇲🇾",
                "emojiU": "U+1F1F2 U+1F1FE",
                "fips": "MY",
                "internet": "MY",
                "continent": "Asia",
                "region": "South East Asia"
            },
            {
                "name": "Maldives",
                "alpha2": "MV",
                "alpha3": "MDV",
                "numeric": "462",
                "locales": [
                    "dv"
                ],
                "default_locale": "dv",
                "currency": "MVR",
                "languages": [
                    "dv"
                ],
                "capital": "Malé",
                "emoji": "🇲🇻",
                "emojiU": "U+1F1F2 U+1F1FB",
                "fips": "MV",
                "internet": "MV",
                "continent": "Asia",
                "region": "South Asia"
            },
            {
                "name": "Mali",
                "alpha2": "ML",
                "alpha3": "MLI",
                "numeric": "466",
                "locales": [
                    "bm_ML",
                    "fr_ML",
                    "khq_ML",
                    "ses_ML"
                ],
                "default_locale": "fr_ML",
                "currency": "XOF",
                "languages": [
                    "fr"
                ],
                "capital": "Bamako",
                "emoji": "🇲🇱",
                "emojiU": "U+1F1F2 U+1F1F1",
                "fips": "ML",
                "internet": "ML",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Malta",
                "alpha2": "MT",
                "alpha3": "MLT",
                "numeric": "470",
                "locales": [
                    "en_MT",
                    "mt_MT"
                ],
                "default_locale": "en_MT",
                "currency": "EUR",
                "languages": [
                    "mt",
                    "en"
                ],
                "capital": "Valletta",
                "emoji": "🇲🇹",
                "emojiU": "U+1F1F2 U+1F1F9",
                "fips": "MT",
                "internet": "MT",
                "continent": "Europe",
                "region": "Southern Europe"
            },
            {
                "name": "Marshall Islands",
                "alpha2": "MH",
                "alpha3": "MHL",
                "numeric": "584",
                "locales": [
                    "en_MH"
                ],
                "default_locale": "en_MH",
                "currency": "USD",
                "languages": [
                    "en",
                    "mh"
                ],
                "capital": "Majuro",
                "emoji": "🇲🇭",
                "emojiU": "U+1F1F2 U+1F1ED",
                "fips": "RM",
                "internet": "MH",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Martinique",
                "alpha2": "MQ",
                "alpha3": "MTQ",
                "numeric": "474",
                "locales": [
                    "fr_MQ"
                ],
                "default_locale": "fr_MQ",
                "currency": "EUR",
                "languages": [
                    "fr"
                ],
                "capital": "Fort-de-France",
                "emoji": "🇲🇶",
                "emojiU": "U+1F1F2 U+1F1F6",
                "fips": "MB",
                "internet": "MQ",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Mauritania",
                "alpha2": "MR",
                "alpha3": "MRT",
                "numeric": "478",
                "locales": [
                    "ar"
                ],
                "default_locale": "ar",
                "currency": "MRU",
                "languages": [
                    "ar"
                ],
                "capital": "Nouakchott",
                "emoji": "🇲🇷",
                "emojiU": "U+1F1F2 U+1F1F7",
                "fips": "MR",
                "internet": "MR",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Mauritius",
                "alpha2": "MU",
                "alpha3": "MUS",
                "numeric": "480",
                "locales": [
                    "en_MU",
                    "mfe_MU"
                ],
                "default_locale": "en_MU",
                "currency": "MUR",
                "languages": [
                    "en"
                ],
                "capital": "Port Louis",
                "emoji": "🇲🇺",
                "emojiU": "U+1F1F2 U+1F1FA",
                "fips": "MP",
                "internet": "MU",
                "continent": "Africa",
                "region": "Indian Ocean"
            },
            {
                "name": "Mayotte",
                "alpha2": "YT",
                "alpha3": "MYT",
                "numeric": "175",
                "locales": [
                    "fr"
                ],
                "default_locale": "fr",
                "currency": "EUR",
                "languages": [
                    "fr"
                ],
                "capital": "Mamoudzou",
                "emoji": "🇾🇹",
                "emojiU": "U+1F1FE U+1F1F9",
                "fips": "MF",
                "internet": "YT",
                "continent": "Africa",
                "region": "Indian Ocean"
            },
            {
                "name": "Mexico",
                "alpha2": "MX",
                "alpha3": "MEX",
                "numeric": "484",
                "locales": [
                    "es_MX"
                ],
                "default_locale": "es_MX",
                "currency": "MXV",
                "languages": [
                    "es"
                ],
                "capital": "Mexico City",
                "emoji": "🇲🇽",
                "emojiU": "U+1F1F2 U+1F1FD",
                "fips": "MX",
                "internet": "MX",
                "continent": "Americas",
                "region": "Central America"
            },
            {
                "name": "Micronesia",
                "alpha2": "FM",
                "alpha3": "FSM",
                "numeric": "583",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "USD",
                "languages": [
                    "en"
                ],
                "capital": "Palikir",
                "emoji": "🇫🇲",
                "emojiU": "U+1F1EB U+1F1F2",
                "fips": "",
                "internet": "FM",
                "continent": "Oceania",
                "region": "Pacific",
                "alternate_names": [
                    "Federated States of Micronesia"
                ]
            },
            {
                "name": "Moldova",
                "alpha2": "MD",
                "alpha3": "MDA",
                "numeric": "498",
                "locales": [
                    "ro_MD",
                    "ru_MD"
                ],
                "default_locale": "ro_MD",
                "currency": "MDL",
                "languages": [
                    "ro"
                ],
                "capital": "Chișinău",
                "emoji": "🇲🇩",
                "emojiU": "U+1F1F2 U+1F1E9",
                "fips": "MD",
                "internet": "MD",
                "continent": "Europe",
                "region": "Eastern Europe",
                "alternate_names": [
                    "Republic of Moldova"
                ]
            },
            {
                "name": "Monaco",
                "alpha2": "MC",
                "alpha3": "MCO",
                "numeric": "492",
                "locales": [
                    "fr_MC"
                ],
                "default_locale": "fr_MC",
                "currency": "EUR",
                "languages": [
                    "fr"
                ],
                "capital": "Monaco",
                "emoji": "🇲🇨",
                "emojiU": "U+1F1F2 U+1F1E8",
                "fips": "MN",
                "internet": "MC",
                "continent": "Europe",
                "region": "Western Europe"
            },
            {
                "name": "Mongolia",
                "alpha2": "MN",
                "alpha3": "MNG",
                "numeric": "496",
                "locales": [
                    "mn"
                ],
                "default_locale": "mn",
                "currency": "MNT",
                "languages": [
                    "mn"
                ],
                "capital": "Ulan Bator",
                "emoji": "🇲🇳",
                "emojiU": "U+1F1F2 U+1F1F3",
                "fips": "MG",
                "internet": "MN",
                "continent": "Asia",
                "region": "Northern Asia"
            },
            {
                "name": "Montenegro",
                "alpha2": "ME",
                "alpha3": "MNE",
                "numeric": "499",
                "locales": [
                    "sr_Cyrl_ME",
                    "sr_Latn_ME"
                ],
                "default_locale": "sr_Cyrl_ME",
                "currency": "EUR",
                "languages": [
                    "sr",
                    "bs",
                    "sq",
                    "hr"
                ],
                "capital": "Podgorica",
                "emoji": "🇲🇪",
                "emojiU": "U+1F1F2 U+1F1EA",
                "fips": "MJ",
                "internet": "ME",
                "continent": "Europe",
                "region": "South East Europe"
            },
            {
                "name": "Montserrat",
                "alpha2": "MS",
                "alpha3": "MSR",
                "numeric": "500",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "XCD",
                "languages": [
                    "en"
                ],
                "capital": "Plymouth",
                "emoji": "🇲🇸",
                "emojiU": "U+1F1F2 U+1F1F8",
                "fips": "MH",
                "internet": "MS",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Morocco",
                "alpha2": "MA",
                "alpha3": "MAR",
                "numeric": "504",
                "locales": [
                    "ar_MA",
                    "tzm_Latn_MA",
                    "shi_Latn_MA",
                    "shi_Tfng_MA"
                ],
                "default_locale": "ar_MA",
                "currency": "MAD",
                "languages": [
                    "ar"
                ],
                "capital": "Rabat",
                "emoji": "🇲🇦",
                "emojiU": "U+1F1F2 U+1F1E6",
                "fips": "MO",
                "internet": "MA",
                "continent": "Africa",
                "region": "Northern Africa"
            },
            {
                "name": "Mozambique",
                "alpha2": "MZ",
                "alpha3": "MOZ",
                "numeric": "508",
                "locales": [
                    "pt_MZ",
                    "seh_MZ"
                ],
                "default_locale": "pt_MZ",
                "currency": "MZN",
                "languages": [
                    "pt"
                ],
                "capital": "Maputo",
                "emoji": "🇲🇿",
                "emojiU": "U+1F1F2 U+1F1FF",
                "fips": "MZ",
                "internet": "MZ",
                "continent": "Africa",
                "region": "Southern Africa"
            },
            {
                "name": "Myanmar",
                "alpha2": "MM",
                "alpha3": "MMR",
                "numeric": "104",
                "locales": [
                    "my_MM"
                ],
                "default_locale": "my_MM",
                "currency": "MMK",
                "languages": [
                    "my"
                ],
                "capital": "Naypyidaw",
                "emoji": "🇲🇲",
                "emojiU": "U+1F1F2 U+1F1F2",
                "fips": "BM",
                "internet": "MM",
                "continent": "Asia",
                "region": "South East Asia"
            },
            {
                "name": "Namibia",
                "alpha2": "NA",
                "alpha3": "NAM",
                "numeric": "516",
                "locales": [
                    "af_NA",
                    "en_NA",
                    "naq_NA"
                ],
                "default_locale": "en_NA",
                "currency": "ZAR",
                "languages": [
                    "en",
                    "af"
                ],
                "capital": "Windhoek",
                "emoji": "🇳🇦",
                "emojiU": "U+1F1F3 U+1F1E6",
                "fips": "WA",
                "internet": "NA",
                "continent": "Africa",
                "region": "Southern Africa"
            },
            {
                "name": "Nauru",
                "alpha2": "NR",
                "alpha3": "NRU",
                "numeric": "520",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "AUD",
                "languages": [
                    "en",
                    "na"
                ],
                "capital": "Yaren",
                "emoji": "🇳🇷",
                "emojiU": "U+1F1F3 U+1F1F7",
                "fips": "NR",
                "internet": "NR",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Nepal",
                "alpha2": "NP",
                "alpha3": "NPL",
                "numeric": "524",
                "locales": [
                    "ne_NP"
                ],
                "default_locale": "ne_NP",
                "currency": "NPR",
                "languages": [
                    "ne"
                ],
                "capital": "Kathmandu",
                "emoji": "🇳🇵",
                "emojiU": "U+1F1F3 U+1F1F5",
                "fips": "NP",
                "internet": "NP",
                "continent": "Asia",
                "region": "South Asia"
            },
            {
                "name": "Netherlands",
                "alpha2": "NL",
                "alpha3": "NLD",
                "numeric": "528",
                "locales": [
                    "nl_NL"
                ],
                "default_locale": "nl_NL",
                "currency": "EUR",
                "languages": [
                    "nl"
                ],
                "capital": "Amsterdam",
                "emoji": "🇳🇱",
                "emojiU": "U+1F1F3 U+1F1F1",
                "fips": "NL",
                "internet": "NL",
                "continent": "Europe",
                "region": "Western Europe"
            },
            {
                "name": "New Caledonia",
                "alpha2": "NC",
                "alpha3": "NCL",
                "numeric": "540",
                "locales": [
                    "fr"
                ],
                "default_locale": "fr",
                "currency": "XPF",
                "languages": [
                    "fr"
                ],
                "capital": "Nouméa",
                "emoji": "🇳🇨",
                "emojiU": "U+1F1F3 U+1F1E8",
                "fips": "NC",
                "internet": "NC",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "New Zealand",
                "alpha2": "NZ",
                "alpha3": "NZL",
                "numeric": "554",
                "locales": [
                    "en_NZ"
                ],
                "default_locale": "en_NZ",
                "currency": "NZD",
                "languages": [
                    "en",
                    "mi"
                ],
                "capital": "Wellington",
                "emoji": "🇳🇿",
                "emojiU": "U+1F1F3 U+1F1FF",
                "fips": "NZ",
                "internet": "NZ",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Nicaragua",
                "alpha2": "NI",
                "alpha3": "NIC",
                "numeric": "558",
                "locales": [
                    "es_NI"
                ],
                "default_locale": "es_NI",
                "currency": "NIO",
                "languages": [
                    "es"
                ],
                "capital": "Managua",
                "emoji": "🇳🇮",
                "emojiU": "U+1F1F3 U+1F1EE",
                "fips": "NU",
                "internet": "NI",
                "continent": "Americas",
                "region": "Central America"
            },
            {
                "name": "Niger",
                "alpha2": "NE",
                "alpha3": "NER",
                "numeric": "562",
                "locales": [
                    "fr_NE",
                    "ha_Latn_NE"
                ],
                "default_locale": "fr_NE",
                "currency": "XOF",
                "languages": [
                    "fr"
                ],
                "capital": "Niamey",
                "emoji": "🇳🇪",
                "emojiU": "U+1F1F3 U+1F1EA",
                "fips": "NG",
                "internet": "NE",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Nigeria",
                "alpha2": "NG",
                "alpha3": "NGA",
                "numeric": "566",
                "locales": [
                    "ha_Latn_NG",
                    "ig_NG",
                    "yo_NG"
                ],
                "default_locale": "ha_Latn_NG",
                "currency": "NGN",
                "languages": [
                    "en"
                ],
                "capital": "Abuja",
                "emoji": "🇳🇬",
                "emojiU": "U+1F1F3 U+1F1EC",
                "fips": "NI",
                "internet": "NG",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Niue",
                "alpha2": "NU",
                "alpha3": "NIU",
                "numeric": "570",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "NZD",
                "languages": [
                    "en"
                ],
                "capital": "Alofi",
                "emoji": "🇳🇺",
                "emojiU": "U+1F1F3 U+1F1FA",
                "fips": "NE",
                "internet": "NU",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Norfolk Island",
                "alpha2": "NF",
                "alpha3": "NFK",
                "numeric": "574",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "AUD",
                "languages": [
                    "en"
                ],
                "capital": "Kingston",
                "emoji": "🇳🇫",
                "emojiU": "U+1F1F3 U+1F1EB",
                "fips": "NF",
                "internet": "NF",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "North Macedonia",
                "alpha2": "MK",
                "alpha3": "MKD",
                "numeric": "807",
                "locales": [
                    "mk_MK"
                ],
                "default_locale": "mk_MK",
                "currency": "AUD",
                "languages": [
                    "mk"
                ],
                "capital": "Skopje",
                "emoji": "🇲🇰",
                "emojiU": "U+1F1F2 U+1F1F0",
                "fips": "MK",
                "internet": "MK",
                "continent": "Europe",
                "region": "South East Europe"
            },
            {
                "name": "Northern Mariana Islands",
                "alpha2": "MP",
                "alpha3": "MNP",
                "numeric": "580",
                "locales": [
                    "en_MP"
                ],
                "default_locale": "en_MP",
                "currency": "USD",
                "languages": [
                    "en",
                    "ch"
                ],
                "capital": "Saipan",
                "emoji": "🇲🇵",
                "emojiU": "U+1F1F2 U+1F1F5",
                "fips": "CQ",
                "internet": "MP",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Norway",
                "alpha2": "NO",
                "alpha3": "NOR",
                "numeric": "578",
                "locales": [
                    "nb_NO",
                    "nn_NO"
                ],
                "default_locale": "nb_NO",
                "currency": "NOK",
                "languages": [
                    "no",
                    "nb",
                    "nn"
                ],
                "capital": "Oslo",
                "emoji": "🇳🇴",
                "emojiU": "U+1F1F3 U+1F1F4",
                "fips": "NO",
                "internet": "NO",
                "continent": "Europe",
                "region": "Northern Europe"
            },
            {
                "name": "Oman",
                "alpha2": "OM",
                "alpha3": "OMN",
                "numeric": "512",
                "locales": [
                    "ar_OM"
                ],
                "default_locale": "ar_OM",
                "currency": "OMR",
                "languages": [
                    "ar"
                ],
                "capital": "Muscat",
                "emoji": "🇴🇲",
                "emojiU": "U+1F1F4 U+1F1F2",
                "fips": "MU",
                "internet": "OM",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "Pakistan",
                "alpha2": "PK",
                "alpha3": "PAK",
                "numeric": "586",
                "locales": [
                    "en_PK",
                    "pa_Arab_PK",
                    "ur_PK"
                ],
                "default_locale": "en_PK",
                "currency": "PKR",
                "languages": [
                    "en",
                    "ur"
                ],
                "capital": "Islamabad",
                "emoji": "🇵🇰",
                "emojiU": "U+1F1F5 U+1F1F0",
                "fips": "PK",
                "internet": "PK",
                "continent": "Asia",
                "region": "South Asia"
            },
            {
                "name": "Palau",
                "alpha2": "PW",
                "alpha3": "PLW",
                "numeric": "585",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "USD",
                "languages": [
                    "en"
                ],
                "capital": "Ngerulmud",
                "emoji": "🇵🇼",
                "emojiU": "U+1F1F5 U+1F1FC",
                "fips": "PS",
                "internet": "PW",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Palestine",
                "alpha2": "PS",
                "alpha3": "PSE",
                "numeric": "275",
                "locales": [
                    "ar"
                ],
                "default_locale": "ar",
                "currency": "USD",
                "languages": [
                    "ar"
                ],
                "capital": "Ramallah",
                "emoji": "🇵🇸",
                "emojiU": "U+1F1F5 U+1F1F8",
                "fips": "WE",
                "internet": "PS",
                "continent": "Asia",
                "region": "South West Asia",
                "alternate_names": [
                    "State of Palestine"
                ]
            },
            {
                "name": "Panama",
                "alpha2": "PA",
                "alpha3": "PAN",
                "numeric": "591",
                "locales": [
                    "es_PA"
                ],
                "default_locale": "es_PA",
                "currency": "USD",
                "languages": [
                    "es"
                ],
                "capital": "Panama City",
                "emoji": "🇵🇦",
                "emojiU": "U+1F1F5 U+1F1E6",
                "fips": "PM",
                "internet": "PA",
                "continent": "Americas",
                "region": "Central America"
            },
            {
                "name": "Papua New Guinea",
                "alpha2": "PG",
                "alpha3": "PNG",
                "numeric": "598",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "PGK",
                "languages": [
                    "en"
                ],
                "capital": "Port Moresby",
                "emoji": "🇵🇬",
                "emojiU": "U+1F1F5 U+1F1EC",
                "fips": "PP",
                "internet": "PG",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Paraguay",
                "alpha2": "PY",
                "alpha3": "PRY",
                "numeric": "600",
                "locales": [
                    "es_PY"
                ],
                "default_locale": "es_PY",
                "currency": "PYG",
                "languages": [
                    "es",
                    "gn"
                ],
                "capital": "Asunción",
                "emoji": "🇵🇾",
                "emojiU": "U+1F1F5 U+1F1FE",
                "fips": "PA",
                "internet": "PY",
                "continent": "Americas",
                "region": "South America"
            },
            {
                "name": "Peru",
                "alpha2": "PE",
                "alpha3": "PER",
                "numeric": "604",
                "locales": [
                    "es_PE"
                ],
                "default_locale": "es_PE",
                "currency": "PEN",
                "languages": [
                    "es"
                ],
                "capital": "Lima",
                "emoji": "🇵🇪",
                "emojiU": "U+1F1F5 U+1F1EA",
                "fips": "PE",
                "internet": "PE",
                "continent": "Americas",
                "region": "South America"
            },
            {
                "name": "Philippines",
                "alpha2": "PH",
                "alpha3": "PHL",
                "numeric": "608",
                "locales": [
                    "en_PH",
                    "fil_PH"
                ],
                "default_locale": "en_PH",
                "currency": "PHP",
                "languages": [
                    "en"
                ],
                "capital": "Manila",
                "emoji": "🇵🇭",
                "emojiU": "U+1F1F5 U+1F1ED",
                "fips": "RP",
                "internet": "PH",
                "continent": "Asia",
                "region": "South East Asia"
            },
            {
                "name": "Pitcairn",
                "alpha2": "PN",
                "alpha3": "PCN",
                "numeric": "612",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "NZD",
                "languages": [
                    "en"
                ],
                "capital": "Adamstown",
                "emoji": "🇵🇳",
                "emojiU": "U+1F1F5 U+1F1F3",
                "fips": "PC",
                "internet": "PN",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Poland",
                "alpha2": "PL",
                "alpha3": "POL",
                "numeric": "616",
                "locales": [
                    "pl_PL"
                ],
                "default_locale": "pl_PL",
                "currency": "PLN",
                "languages": [
                    "pl"
                ],
                "capital": "Warsaw",
                "emoji": "🇵🇱",
                "emojiU": "U+1F1F5 U+1F1F1",
                "fips": "PL",
                "internet": "PL",
                "continent": "Europe",
                "region": "Eastern Europe"
            },
            {
                "name": "Portugal",
                "alpha2": "PT",
                "alpha3": "PRT",
                "numeric": "620",
                "locales": [
                    "pt_PT"
                ],
                "default_locale": "pt_PT",
                "currency": "EUR",
                "languages": [
                    "pt"
                ],
                "capital": "Lisbon",
                "emoji": "🇵🇹",
                "emojiU": "U+1F1F5 U+1F1F9",
                "fips": "PO",
                "internet": "PT",
                "continent": "Europe",
                "region": "South West Europe"
            },
            {
                "name": "Puerto Rico",
                "alpha2": "PR",
                "alpha3": "PRI",
                "numeric": "630",
                "locales": [
                    "es_PR"
                ],
                "default_locale": "es_PR",
                "currency": "USD",
                "languages": [
                    "es",
                    "en"
                ],
                "capital": "San Juan",
                "emoji": "🇵🇷",
                "emojiU": "U+1F1F5 U+1F1F7",
                "fips": "RQ",
                "internet": "PR",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Qatar",
                "alpha2": "QA",
                "alpha3": "QAT",
                "numeric": "634",
                "locales": [
                    "ar_QA"
                ],
                "default_locale": "ar_QA",
                "currency": "QAR",
                "languages": [
                    "ar"
                ],
                "capital": "Doha",
                "emoji": "🇶🇦",
                "emojiU": "U+1F1F6 U+1F1E6",
                "fips": "QA",
                "internet": "QA",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "Romania",
                "alpha2": "RO",
                "alpha3": "ROU",
                "numeric": "642",
                "locales": [
                    "ro_RO"
                ],
                "default_locale": "ro_RO",
                "currency": "RUB",
                "languages": [
                    "ro"
                ],
                "capital": "Bucharest",
                "emoji": "🇷🇴",
                "emojiU": "U+1F1F7 U+1F1F4",
                "fips": "RO",
                "internet": "RO",
                "continent": "Europe",
                "region": "South East Europe"
            },
            {
                "name": "Russia",
                "alpha2": "RU",
                "alpha3": "RUS",
                "numeric": "643",
                "locales": [
                    "ru_RU"
                ],
                "default_locale": "ru_RU",
                "currency": "RUB",
                "languages": [
                    "ru"
                ],
                "capital": "Moscow",
                "emoji": "🇷🇺",
                "emojiU": "U+1F1F7 U+1F1FA",
                "fips": "RS",
                "internet": "RU",
                "continent": "Asia",
                "region": "Northern Asia",
                "alternate_names": [
                    "Russian Federation"
                ]
            },
            {
                "name": "Rwanda",
                "alpha2": "RW",
                "alpha3": "RWA",
                "numeric": "646",
                "locales": [
                    "fr_RW",
                    "rw_RW"
                ],
                "default_locale": "fr_RW",
                "currency": "RWF",
                "languages": [
                    "rw",
                    "en",
                    "fr"
                ],
                "capital": "Kigali",
                "emoji": "🇷🇼",
                "emojiU": "U+1F1F7 U+1F1FC",
                "fips": "RW",
                "internet": "RW",
                "continent": "Africa",
                "region": "Central Africa"
            },
            {
                "name": "Réunion",
                "alpha2": "RE",
                "alpha3": "REU",
                "numeric": "638",
                "locales": [
                    "fr_RE"
                ],
                "default_locale": "fr_RE",
                "currency": "RWF",
                "languages": [
                    "fr"
                ],
                "capital": "Saint-Denis",
                "emoji": "🇷🇪",
                "emojiU": "U+1F1F7 U+1F1EA",
                "fips": "RE",
                "internet": "RE",
                "continent": "Africa",
                "region": "Indian Ocean"
            },
            {
                "name": "Saint Barthélemy",
                "alpha2": "BL",
                "alpha3": "BLM",
                "numeric": "652",
                "locales": [
                    "fr_BL"
                ],
                "default_locale": "fr_BL",
                "currency": "EUR",
                "languages": [
                    "fr"
                ],
                "capital": "Gustavia",
                "emoji": "🇧🇱",
                "emojiU": "U+1F1E7 U+1F1F1",
                "fips": "TB",
                "internet": "BL",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Saint Helena",
                "alpha2": "SH",
                "alpha3": "SHN",
                "numeric": "654",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "SHP",
                "languages": [
                    "en"
                ],
                "capital": "Jamestown",
                "emoji": "🇸🇭",
                "emojiU": "U+1F1F8 U+1F1ED",
                "fips": "SH",
                "internet": "SH",
                "continent": "Atlantic Ocean",
                "region": "South Atlantic Ocean",
                "alternate_names": [
                    "Saint Helena, Ascension and Tristan da Cunha"
                ]
            },
            {
                "name": "Saint Kitts and Nevis",
                "alpha2": "KN",
                "alpha3": "KNA",
                "numeric": "659",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "XCD",
                "languages": [
                    "en"
                ],
                "capital": "Basseterre",
                "emoji": "🇰🇳",
                "emojiU": "U+1F1F0 U+1F1F3",
                "fips": "SC",
                "internet": "KN",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Saint Lucia",
                "alpha2": "LC",
                "alpha3": "LCA",
                "numeric": "662",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "XCD",
                "languages": [
                    "en"
                ],
                "capital": "Castries",
                "emoji": "🇱🇨",
                "emojiU": "U+1F1F1 U+1F1E8",
                "fips": "ST",
                "internet": "LC",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Saint Martin",
                "alpha2": "MF",
                "alpha3": "MAF",
                "numeric": "663",
                "locales": [
                    "fr_MF"
                ],
                "default_locale": "fr_MF",
                "currency": "EUR",
                "languages": [
                    "en",
                    "fr",
                    "nl"
                ],
                "capital": "Marigot",
                "emoji": "🇲🇫",
                "emojiU": "U+1F1F2 U+1F1EB",
                "fips": "RN",
                "internet": "MF",
                "continent": "Americas",
                "region": "West Indies",
                "alternate_names": [
                    "Saint Martin French part"
                ]
            },
            {
                "name": "Saint Pierre and Miquelon",
                "alpha2": "PM",
                "alpha3": "SPM",
                "numeric": "666",
                "locales": [
                    "fr"
                ],
                "default_locale": "fr",
                "currency": "EUR",
                "languages": [
                    "fr"
                ],
                "capital": "Saint-Pierre",
                "emoji": "🇵🇲",
                "emojiU": "U+1F1F5 U+1F1F2",
                "fips": "SB",
                "internet": "PM",
                "continent": "Americas",
                "region": "North America"
            },
            {
                "name": "Saint Vincent and the Grenadines",
                "alpha2": "VC",
                "alpha3": "VCT",
                "numeric": "670",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "XCD",
                "languages": [
                    "en"
                ],
                "capital": "Kingstown",
                "emoji": "🇻🇨",
                "emojiU": "U+1F1FB U+1F1E8",
                "fips": "VC",
                "internet": "VC",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Samoa",
                "alpha2": "WS",
                "alpha3": "WSM",
                "numeric": "882",
                "locales": [
                    "sm"
                ],
                "default_locale": "sm",
                "currency": "WST",
                "languages": [
                    "sm",
                    "en"
                ],
                "capital": "Apia",
                "emoji": "🇼🇸",
                "emojiU": "U+1F1FC U+1F1F8",
                "fips": "WS",
                "internet": "WS",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "San Marino",
                "alpha2": "SM",
                "alpha3": "SMR",
                "numeric": "674",
                "locales": [
                    "it"
                ],
                "default_locale": "it",
                "currency": "EUR",
                "languages": [
                    "it"
                ],
                "capital": "City of San Marino",
                "emoji": "🇸🇲",
                "emojiU": "U+1F1F8 U+1F1F2",
                "fips": "SM",
                "internet": "SM",
                "continent": "Europe",
                "region": "Southern Europe"
            },
            {
                "name": "Sao Tome and Principe",
                "alpha2": "ST",
                "alpha3": "STP",
                "numeric": "678",
                "locales": [
                    "pt"
                ],
                "default_locale": "pt",
                "currency": "STN",
                "languages": [
                    "pt"
                ],
                "capital": "São Tomé",
                "emoji": "🇸🇹",
                "emojiU": "U+1F1F8 U+1F1F9",
                "fips": "TP",
                "internet": "ST",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Saudi Arabia",
                "alpha2": "SA",
                "alpha3": "SAU",
                "numeric": "682",
                "locales": [
                    "ar_SA"
                ],
                "default_locale": "ar_SA",
                "currency": "SAR",
                "languages": [
                    "ar"
                ],
                "capital": "Riyadh",
                "emoji": "🇸🇦",
                "emojiU": "U+1F1F8 U+1F1E6",
                "fips": "SA",
                "internet": "SA",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "Senegal",
                "alpha2": "SN",
                "alpha3": "SEN",
                "numeric": "686",
                "locales": [
                    "fr_SN",
                    "ff_SN"
                ],
                "default_locale": "fr_SN",
                "currency": "XOF",
                "languages": [
                    "fr"
                ],
                "capital": "Dakar",
                "emoji": "🇸🇳",
                "emojiU": "U+1F1F8 U+1F1F3",
                "fips": "SG",
                "internet": "SN",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Serbia",
                "alpha2": "RS",
                "alpha3": "SRB",
                "numeric": "688",
                "locales": [
                    "sr_Cyrl_RS",
                    "sr_Latn_RS"
                ],
                "default_locale": "sr_Cyrl_RS",
                "currency": "RSD",
                "languages": [
                    "sr"
                ],
                "capital": "Belgrade",
                "emoji": "🇷🇸",
                "emojiU": "U+1F1F7 U+1F1F8",
                "fips": "RI",
                "internet": "RS",
                "continent": "Europe",
                "region": "South East Europe"
            },
            {
                "name": "Seychelles",
                "alpha2": "SC",
                "alpha3": "SYC",
                "numeric": "690",
                "locales": [
                    "fr"
                ],
                "default_locale": "fr",
                "currency": "SCR",
                "languages": [
                    "fr",
                    "en"
                ],
                "capital": "Victoria",
                "emoji": "🇸🇨",
                "emojiU": "U+1F1F8 U+1F1E8",
                "fips": "SE",
                "internet": "SC",
                "continent": "Africa",
                "region": "Indian Ocean"
            },
            {
                "name": "Sierra Leone",
                "alpha2": "SL",
                "alpha3": "SLE",
                "numeric": "694",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "SLL",
                "languages": [
                    "en"
                ],
                "capital": "Freetown",
                "emoji": "🇸🇱",
                "emojiU": "U+1F1F8 U+1F1F1",
                "fips": "SL",
                "internet": "SL",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Singapore",
                "alpha2": "SG",
                "alpha3": "SGP",
                "numeric": "702",
                "locales": [
                    "zh_Hans_SG",
                    "en_SG"
                ],
                "default_locale": "en_SG",
                "currency": "SGD",
                "languages": [
                    "en",
                    "ms",
                    "ta",
                    "zh"
                ],
                "capital": "Singapore",
                "emoji": "🇸🇬",
                "emojiU": "U+1F1F8 U+1F1EC",
                "fips": "SN",
                "internet": "SG",
                "continent": "Asia",
                "region": "South East Asia"
            },
            {
                "name": "Sint Maarten",
                "alpha2": "SX",
                "alpha3": "SXM",
                "numeric": "534",
                "locales": [
                    "nl"
                ],
                "default_locale": "nl",
                "currency": "ANG",
                "languages": [
                    "nl",
                    "en"
                ],
                "capital": "Philipsburg",
                "emoji": "🇸🇽",
                "emojiU": "U+1F1F8 U+1F1FD",
                "fips": "NN",
                "internet": "SX",
                "continent": "Americas",
                "region": "West Indies",
                "alternate_names": [
                    "Sint Maarten Dutch part"
                ]
            },
            {
                "name": "Slovakia",
                "alpha2": "SK",
                "alpha3": "SVK",
                "numeric": "703",
                "locales": [
                    "sk_SK"
                ],
                "default_locale": "sk_SK",
                "currency": "EUR",
                "languages": [
                    "sk"
                ],
                "capital": "Bratislava",
                "emoji": "🇸🇰",
                "emojiU": "U+1F1F8 U+1F1F0",
                "fips": "LO",
                "internet": "SK",
                "continent": "Europe",
                "region": "Central Europe"
            },
            {
                "name": "Slovenia",
                "alpha2": "SI",
                "alpha3": "SVN",
                "numeric": "705",
                "locales": [
                    "sl_SI"
                ],
                "default_locale": "sl_SI",
                "currency": "EUR",
                "languages": [
                    "sl"
                ],
                "capital": "Ljubljana",
                "emoji": "🇸🇮",
                "emojiU": "U+1F1F8 U+1F1EE",
                "fips": "SI",
                "internet": "SI",
                "continent": "Europe",
                "region": "South East Europe"
            },
            {
                "name": "Solomon Islands",
                "alpha2": "SB",
                "alpha3": "SLB",
                "numeric": "090",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "SBD",
                "languages": [
                    "en"
                ],
                "capital": "Honiara",
                "emoji": "🇸🇧",
                "emojiU": "U+1F1F8 U+1F1E7",
                "fips": "BP",
                "internet": "SB",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Somalia",
                "alpha2": "SO",
                "alpha3": "SOM",
                "numeric": "706",
                "locales": [
                    "so_SO"
                ],
                "default_locale": "so_SO",
                "currency": "SOS",
                "languages": [
                    "so",
                    "ar"
                ],
                "capital": "Mogadishu",
                "emoji": "🇸🇴",
                "emojiU": "U+1F1F8 U+1F1F4",
                "fips": "SO",
                "internet": "SO",
                "continent": "Africa",
                "region": "Eastern Africa"
            },
            {
                "name": "South Africa",
                "alpha2": "ZA",
                "alpha3": "ZAF",
                "numeric": "710",
                "locales": [
                    "af_ZA",
                    "en_ZA",
                    "zu_ZA"
                ],
                "default_locale": "af_ZA",
                "currency": "ZAR",
                "languages": [
                    "af",
                    "en",
                    "nr",
                    "st",
                    "ss",
                    "tn",
                    "ts",
                    "ve",
                    "xh",
                    "zu"
                ],
                "capital": "Pretoria",
                "emoji": "🇿🇦",
                "emojiU": "U+1F1FF U+1F1E6",
                "fips": "SF",
                "internet": "ZA",
                "continent": "Africa",
                "region": "Southern Africa"
            },
            {
                "name": "South Georgia and the South Sandwich Islands",
                "alpha2": "GS",
                "alpha3": "SGS",
                "numeric": "239",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "USD",
                "languages": [
                    "en"
                ],
                "capital": "King Edward Point",
                "emoji": "🇬🇸",
                "emojiU": "U+1F1EC U+1F1F8",
                "fips": "SX",
                "internet": "GS",
                "continent": "Atlantic Ocean",
                "region": "South Atlantic Ocean"
            },
            {
                "name": "South Sudan",
                "alpha2": "SS",
                "alpha3": "SSD",
                "numeric": "728",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "SSP",
                "languages": [
                    "en"
                ],
                "capital": "Juba",
                "emoji": "🇸🇸",
                "emojiU": "U+1F1F8 U+1F1F8",
                "fips": "OD",
                "internet": "SS",
                "continent": "Africa",
                "region": "Northern Africa"
            },
            {
                "name": "Spain",
                "alpha2": "ES",
                "alpha3": "ESP",
                "numeric": "724",
                "locales": [
                    "eu_ES",
                    "ca_ES",
                    "gl_ES",
                    "es_ES"
                ],
                "default_locale": "es_ES",
                "currency": "EUR",
                "languages": [
                    "es",
                    "eu",
                    "ca",
                    "gl",
                    "oc"
                ],
                "capital": "Madrid",
                "emoji": "🇪🇸",
                "emojiU": "U+1F1EA U+1F1F8",
                "fips": "SP",
                "internet": "ES",
                "continent": "Europe",
                "region": "South West Europe"
            },
            {
                "name": "Sri Lanka",
                "alpha2": "LK",
                "alpha3": "LKA",
                "numeric": "144",
                "locales": [
                    "si_LK",
                    "ta_LK"
                ],
                "default_locale": "si_LK",
                "currency": "LKR",
                "languages": [
                    "si",
                    "ta"
                ],
                "capital": "Colombo",
                "emoji": "🇱🇰",
                "emojiU": "U+1F1F1 U+1F1F0",
                "fips": "CE",
                "internet": "LK",
                "continent": "Asia",
                "region": "South Asia"
            },
            {
                "name": "Sudan",
                "alpha2": "SD",
                "alpha3": "SDN",
                "numeric": "729",
                "locales": [
                    "ar_SD"
                ],
                "default_locale": "ar_SD",
                "currency": "SDG",
                "languages": [
                    "ar",
                    "en"
                ],
                "capital": "Khartoum",
                "emoji": "🇸🇩",
                "emojiU": "U+1F1F8 U+1F1E9",
                "fips": "SU",
                "internet": "SD",
                "continent": "Africa",
                "region": "Northern Africa"
            },
            {
                "name": "Suriname",
                "alpha2": "SR",
                "alpha3": "SUR",
                "numeric": "740",
                "locales": [
                    "nl"
                ],
                "default_locale": "nl",
                "currency": "SRD",
                "languages": [
                    "nl"
                ],
                "capital": "Paramaribo",
                "emoji": "🇸🇷",
                "emojiU": "U+1F1F8 U+1F1F7",
                "fips": "NS",
                "internet": "SR",
                "continent": "Americas",
                "region": "South America"
            },
            {
                "name": "Svalbard and Jan Mayen",
                "alpha2": "SJ",
                "alpha3": "SJM",
                "numeric": "744",
                "locales": [
                    "no"
                ],
                "default_locale": "no",
                "currency": "NOK",
                "languages": [
                    "no"
                ],
                "capital": "Longyearbyen",
                "emoji": "🇸🇯",
                "emojiU": "U+1F1F8 U+1F1EF",
                "fips": "SV",
                "internet": "SJ",
                "continent": "Europe",
                "region": "Northern Europe"
            },
            {
                "name": "Sweden",
                "alpha2": "SE",
                "alpha3": "SWE",
                "numeric": "752",
                "locales": [
                    "sv_SE"
                ],
                "default_locale": "sv_SE",
                "currency": "SEK",
                "languages": [
                    "sv"
                ],
                "capital": "Stockholm",
                "emoji": "🇸🇪",
                "emojiU": "U+1F1F8 U+1F1EA",
                "fips": "SW",
                "internet": "SE",
                "continent": "Europe",
                "region": "Northern Europe"
            },
            {
                "name": "Switzerland",
                "alpha2": "CH",
                "alpha3": "CHE",
                "numeric": "756",
                "locales": [
                    "fr_CH",
                    "de_CH",
                    "it_CH",
                    "rm_CH",
                    "gsw_CH"
                ],
                "default_locale": "fr_CH",
                "currency": "CHW",
                "languages": [
                    "de",
                    "fr",
                    "it"
                ],
                "capital": "Bern",
                "emoji": "🇨🇭",
                "emojiU": "U+1F1E8 U+1F1ED",
                "fips": "SZ",
                "internet": "CH",
                "continent": "Europe",
                "region": "Central Europe"
            },
            {
                "name": "Syrian Arab Republic",
                "alpha2": "SY",
                "alpha3": "SYR",
                "numeric": "760",
                "locales": [
                    "ar_SY"
                ],
                "default_locale": "ar_SY",
                "currency": "SYP",
                "languages": [
                    "ar"
                ],
                "capital": "Damascus",
                "emoji": "🇸🇾",
                "emojiU": "U+1F1F8 U+1F1FE",
                "fips": "SY",
                "internet": "SY",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "Taiwan",
                "alpha2": "TW",
                "alpha3": "TWN",
                "numeric": "158",
                "locales": [
                    "zh_Hant_TW"
                ],
                "default_locale": "zh_Hant_TW",
                "currency": "SYP",
                "languages": [
                    "zh"
                ],
                "capital": "Taipei",
                "emoji": "🇹🇼",
                "emojiU": "U+1F1F9 U+1F1FC",
                "fips": "TW",
                "internet": "TW",
                "continent": "Asia",
                "region": "East Asia",
                "alternate_names": [
                    "Province of China Taiwan"
                ]
            },
            {
                "name": "Tajikistan",
                "alpha2": "TJ",
                "alpha3": "TJK",
                "numeric": "762",
                "locales": [
                    "tg"
                ],
                "default_locale": "tg",
                "currency": "TJS",
                "languages": [
                    "tg",
                    "ru"
                ],
                "capital": "Dushanbe",
                "emoji": "🇹🇯",
                "emojiU": "U+1F1F9 U+1F1EF",
                "fips": "TI",
                "internet": "TJ",
                "continent": "Asia",
                "region": "Central Asia"
            },
            {
                "name": "Tanzania",
                "alpha2": "TZ",
                "alpha3": "TZA",
                "numeric": "834",
                "locales": [
                    "asa_TZ",
                    "bez_TZ",
                    "lag_TZ",
                    "jmc_TZ",
                    "kde_TZ",
                    "mas_TZ",
                    "rof_TZ",
                    "rwk_TZ",
                    "sw_TZ",
                    "vun_TZ"
                ],
                "default_locale": "asa_TZ",
                "currency": "TZS",
                "languages": [
                    "sw",
                    "en"
                ],
                "capital": "Dodoma",
                "emoji": "🇹🇿",
                "emojiU": "U+1F1F9 U+1F1FF",
                "fips": "TZ",
                "internet": "TZ",
                "continent": "Africa",
                "region": "Eastern Africa",
                "alternate_names": [
                    "United Republic of Tanzania"
                ]
            },
            {
                "name": "Thailand",
                "alpha2": "TH",
                "alpha3": "THA",
                "numeric": "764",
                "locales": [
                    "th_TH"
                ],
                "default_locale": "th_TH",
                "currency": "THB",
                "languages": [
                    "th"
                ],
                "capital": "Bangkok",
                "emoji": "🇹🇭",
                "emojiU": "U+1F1F9 U+1F1ED",
                "fips": "TH",
                "internet": "TH",
                "continent": "Asia",
                "region": "South East Asia"
            },
            {
                "name": "Timor-Leste",
                "alpha2": "TL",
                "alpha3": "TLS",
                "numeric": "626",
                "locales": [
                    "pt"
                ],
                "default_locale": "pt",
                "currency": "USD",
                "languages": [
                    "pt"
                ],
                "capital": "Dili",
                "emoji": "🇹🇱",
                "emojiU": "U+1F1F9 U+1F1F1",
                "fips": "TT",
                "internet": "TL",
                "continent": "Asia",
                "region": "South East Asia"
            },
            {
                "name": "Togo",
                "alpha2": "TG",
                "alpha3": "TGO",
                "numeric": "768",
                "locales": [
                    "ee_TG",
                    "fr_TG"
                ],
                "default_locale": "fr_TG",
                "currency": "XOF",
                "languages": [
                    "fr"
                ],
                "capital": "Lomé",
                "emoji": "🇹🇬",
                "emojiU": "U+1F1F9 U+1F1EC",
                "fips": "TO",
                "internet": "TG",
                "continent": "Africa",
                "region": "Western Africa"
            },
            {
                "name": "Tokelau",
                "alpha2": "TK",
                "alpha3": "TKL",
                "numeric": "772",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "NZD",
                "languages": [
                    "en"
                ],
                "capital": "Fakaofo",
                "emoji": "🇹🇰",
                "emojiU": "U+1F1F9 U+1F1F0",
                "fips": "TL",
                "internet": "TK",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Tonga",
                "alpha2": "TO",
                "alpha3": "TON",
                "numeric": "776",
                "locales": [
                    "to_TO"
                ],
                "default_locale": "to_TO",
                "currency": "TOP",
                "languages": [
                    "en",
                    "to"
                ],
                "capital": "Nuku'alofa",
                "emoji": "🇹🇴",
                "emojiU": "U+1F1F9 U+1F1F4",
                "fips": "TN",
                "internet": "TO",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Trinidad and Tobago",
                "alpha2": "TT",
                "alpha3": "TTO",
                "numeric": "780",
                "locales": [
                    "en_TT"
                ],
                "default_locale": "en_TT",
                "currency": "TTD",
                "languages": [
                    "en"
                ],
                "capital": "Port of Spain",
                "emoji": "🇹🇹",
                "emojiU": "U+1F1F9 U+1F1F9",
                "fips": "TD",
                "internet": "TT",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Tunisia",
                "alpha2": "TN",
                "alpha3": "TUN",
                "numeric": "788",
                "locales": [
                    "ar_TN"
                ],
                "default_locale": "ar_TN",
                "currency": "TND",
                "languages": [
                    "ar"
                ],
                "capital": "Tunis",
                "emoji": "🇹🇳",
                "emojiU": "U+1F1F9 U+1F1F3",
                "fips": "TS",
                "internet": "TN",
                "continent": "Africa",
                "region": "Northern Africa"
            },
            {
                "name": "Turkey",
                "alpha2": "TR",
                "alpha3": "TUR",
                "numeric": "792",
                "locales": [
                    "tr_TR"
                ],
                "default_locale": "tr_TR",
                "currency": "TRY",
                "languages": [
                    "tr"
                ],
                "capital": "Ankara",
                "emoji": "🇹🇷",
                "emojiU": "U+1F1F9 U+1F1F7",
                "fips": "TU",
                "internet": "TR",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "Turkmenistan",
                "alpha2": "TM",
                "alpha3": "TKM",
                "numeric": "795",
                "locales": [
                    "tk"
                ],
                "default_locale": "tk",
                "currency": "TMT",
                "languages": [
                    "tk",
                    "ru"
                ],
                "capital": "Ashgabat",
                "emoji": "🇹🇲",
                "emojiU": "U+1F1F9 U+1F1F2",
                "fips": "TX",
                "internet": "TM",
                "continent": "Asia",
                "region": "Central Asia"
            },
            {
                "name": "Turks and Caicos Islands",
                "alpha2": "TC",
                "alpha3": "TCA",
                "numeric": "796",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "USD",
                "languages": [
                    "en"
                ],
                "capital": "Cockburn Town",
                "emoji": "🇹🇨",
                "emojiU": "U+1F1F9 U+1F1E8",
                "fips": "TK",
                "internet": "TC",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Tuvalu",
                "alpha2": "TV",
                "alpha3": "TUV",
                "numeric": "798",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "AUD",
                "languages": [
                    "en"
                ],
                "capital": "Funafuti",
                "emoji": "🇹🇻",
                "emojiU": "U+1F1F9 U+1F1FB",
                "fips": "TV",
                "internet": "TV",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Uganda",
                "alpha2": "UG",
                "alpha3": "UGA",
                "numeric": "800",
                "locales": [
                    "cgg_UG",
                    "lg_UG",
                    "nyn_UG",
                    "xog_UG",
                    "teo_UG"
                ],
                "default_locale": "cgg_UG",
                "currency": "UGX",
                "languages": [
                    "en",
                    "sw"
                ],
                "capital": "Kampala",
                "emoji": "🇺🇬",
                "emojiU": "U+1F1FA U+1F1EC",
                "fips": "UG",
                "internet": "UG",
                "continent": "Africa",
                "region": "Eastern Africa"
            },
            {
                "name": "Ukraine",
                "alpha2": "UA",
                "alpha3": "UKR",
                "numeric": "804",
                "locales": [
                    "ru_UA",
                    "uk_UA"
                ],
                "default_locale": "uk_UA",
                "currency": "UAH",
                "languages": [
                    "uk"
                ],
                "capital": "Kyiv",
                "emoji": "🇺🇦",
                "emojiU": "U+1F1FA U+1F1E6",
                "fips": "UP",
                "internet": "UA",
                "continent": "Europe",
                "region": "Eastern Europe"
            },
            {
                "name": "United Arab Emirates",
                "alpha2": "AE",
                "alpha3": "ARE",
                "numeric": "784",
                "locales": [
                    "ar_AE"
                ],
                "default_locale": "ar_AE",
                "currency": "AED",
                "languages": [
                    "ar"
                ],
                "capital": "Abu Dhabi",
                "emoji": "🇦🇪",
                "emojiU": "U+1F1E6 U+1F1EA",
                "fips": "TC",
                "internet": "AE",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "United Kingdom",
                "alpha2": "GB",
                "alpha3": "GBR",
                "numeric": "826",
                "locales": [
                    "kw_GB",
                    "en_GB",
                    "gv_GB",
                    "cy_GB"
                ],
                "default_locale": "en_GB",
                "currency": "GBP",
                "languages": [
                    "en"
                ],
                "capital": "London",
                "emoji": "🇬🇧",
                "emojiU": "U+1F1EC U+1F1E7",
                "fips": "UK",
                "internet": "UK",
                "continent": "Europe",
                "region": "Western Europe",
                "alternate_names": [
                    "United Kingdom of Great Britain and Northern Ireland"
                ]
            },
            {
                "name": "United States Minor Outlying Islands",
                "alpha2": "UM",
                "alpha3": "UMI",
                "numeric": "581",
                "locales": [
                    "en_UM"
                ],
                "default_locale": "en_UM",
                "currency": "USD",
                "languages": [
                    "en"
                ],
                "capital": "",
                "emoji": "🇺🇲",
                "emojiU": "U+1F1FA U+1F1F2",
                "fips": "",
                "internet": "US",
                "continent": "Americas",
                "region": "North America"
            },
            {
                "name": "United States",
                "alpha2": "US",
                "alpha3": "USA",
                "numeric": "840",
                "locales": [
                    "chr_US",
                    "en_US",
                    "haw_US",
                    "es_US"
                ],
                "default_locale": "en_US",
                "currency": "USD",
                "languages": [
                    "en"
                ],
                "capital": "Washington D.C.",
                "emoji": "🇺🇸",
                "emojiU": "U+1F1FA U+1F1F8",
                "fips": "US",
                "internet": "US",
                "continent": "Americas",
                "region": "North America",
                "alternate_names": [
                    "United States of America"
                ]
            },
            {
                "name": "Uruguay",
                "alpha2": "UY",
                "alpha3": "URY",
                "numeric": "858",
                "locales": [
                    "es_UY"
                ],
                "default_locale": "es_UY",
                "currency": "UYW",
                "languages": [
                    "es"
                ],
                "capital": "Montevideo",
                "emoji": "🇺🇾",
                "emojiU": "U+1F1FA U+1F1FE",
                "fips": "UY",
                "internet": "UY",
                "continent": "Americas",
                "region": "South America"
            },
            {
                "name": "Uzbekistan",
                "alpha2": "UZ",
                "alpha3": "UZB",
                "numeric": "860",
                "locales": [
                    "uz_Cyrl_UZ",
                    "uz_Latn_UZ"
                ],
                "default_locale": "uz_Cyrl_UZ",
                "currency": "UZS",
                "languages": [
                    "uz",
                    "ru"
                ],
                "capital": "Tashkent",
                "emoji": "🇺🇿",
                "emojiU": "U+1F1FA U+1F1FF",
                "fips": "UZ",
                "internet": "UZ",
                "continent": "Asia",
                "region": "Central Asia"
            },
            {
                "name": "Vanuatu",
                "alpha2": "VU",
                "alpha3": "VUT",
                "numeric": "548",
                "locales": [
                    "bi"
                ],
                "default_locale": "bi",
                "currency": "VUV",
                "languages": [
                    "bi",
                    "en",
                    "fr"
                ],
                "capital": "Port Vila",
                "emoji": "🇻🇺",
                "emojiU": "U+1F1FB U+1F1FA",
                "fips": "NH",
                "internet": "VU",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Venezuela",
                "alpha2": "VE",
                "alpha3": "VEN",
                "numeric": "862",
                "locales": [
                    "es_VE"
                ],
                "default_locale": "es_VE",
                "currency": "VUV",
                "languages": [
                    "es"
                ],
                "capital": "Caracas",
                "emoji": "🇻🇪",
                "emojiU": "U+1F1FB U+1F1EA",
                "fips": "VE",
                "internet": "UE",
                "continent": "Americas",
                "region": "South America",
                "alternate_names": [
                    "Bolivarian Republic of Venezuela"
                ]
            },
            {
                "name": "Viet Nam",
                "alpha2": "VN",
                "alpha3": "VNM",
                "numeric": "704",
                "locales": [
                    "vi_VN"
                ],
                "default_locale": "vi_VN",
                "currency": "VND",
                "languages": [
                    "vi"
                ],
                "capital": "Hanoi",
                "emoji": "🇻🇳",
                "emojiU": "U+1F1FB U+1F1F3",
                "fips": "VN",
                "internet": "VN",
                "continent": "Asia",
                "region": "South East Asia"
            },
            {
                "name": "Virgin Islands (British)",
                "alpha2": "VG",
                "alpha3": "VGB",
                "numeric": "092",
                "locales": [
                    "en"
                ],
                "default_locale": "en",
                "currency": "USD",
                "languages": [
                    "en"
                ],
                "capital": "Road Town",
                "emoji": "🇻🇬",
                "emojiU": "U+1F1FB U+1F1EC",
                "fips": "VI",
                "internet": "VG",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Virgin Islands (U.S.)",
                "alpha2": "VI",
                "alpha3": "VIR",
                "numeric": "850",
                "locales": [
                    "en_VI"
                ],
                "default_locale": "en_VI",
                "currency": "USD",
                "languages": [
                    "en"
                ],
                "capital": "Charlotte Amalie",
                "emoji": "🇻🇮",
                "emojiU": "U+1F1FB U+1F1EE",
                "fips": "VQ",
                "internet": "VI",
                "continent": "Americas",
                "region": "West Indies"
            },
            {
                "name": "Wallis and Futuna",
                "alpha2": "WF",
                "alpha3": "WLF",
                "numeric": "876",
                "locales": [
                    "fr"
                ],
                "default_locale": "fr",
                "currency": "XPF",
                "languages": [
                    "fr"
                ],
                "capital": "Mata-Utu",
                "emoji": "🇼🇫",
                "emojiU": "U+1F1FC U+1F1EB",
                "fips": "WF",
                "internet": "WF",
                "continent": "Oceania",
                "region": "Pacific"
            },
            {
                "name": "Western Sahara",
                "alpha2": "EH",
                "alpha3": "ESH",
                "numeric": "732",
                "locales": [
                    "es"
                ],
                "default_locale": "es",
                "currency": "MAD",
                "languages": [
                    "es"
                ],
                "capital": "El Aaiún",
                "emoji": "🇪🇭",
                "emojiU": "U+1F1EA U+1F1ED",
                "fips": "WI",
                "internet": "EH",
                "continent": "Africa",
                "region": "Northern Africa"
            },
            {
                "name": "Yemen",
                "alpha2": "YE",
                "alpha3": "YEM",
                "numeric": "887",
                "locales": [
                    "ar_YE"
                ],
                "default_locale": "ar_YE",
                "currency": "YER",
                "languages": [
                    "ar"
                ],
                "capital": "Sana'a",
                "emoji": "🇾🇪",
                "emojiU": "U+1F1FE U+1F1EA",
                "fips": "YM",
                "internet": "YE",
                "continent": "Asia",
                "region": "South West Asia"
            },
            {
                "name": "Zambia",
                "alpha2": "ZM",
                "alpha3": "ZMB",
                "numeric": "894",
                "locales": [
                    "bem_ZM"
                ],
                "default_locale": "bem_ZM",
                "currency": "ZMW",
                "languages": [
                    "en"
                ],
                "capital": "Lusaka",
                "emoji": "🇿🇲",
                "emojiU": "U+1F1FF U+1F1F2",
                "fips": "ZA",
                "internet": "ZM",
                "continent": "Africa",
                "region": "Southern Africa"
            },
            {
                "name": "Zimbabwe",
                "alpha2": "ZW",
                "alpha3": "ZWE",
                "numeric": "716",
                "locales": [
                    "en_ZW",
                    "nd_ZW",
                    "sn_ZW"
                ],
                "default_locale": "en_ZW",
                "currency": "ZWL",
                "languages": [
                    "en",
                    "sn",
                    "nd"
                ],
                "capital": "Harare",
                "emoji": "🇿🇼",
                "emojiU": "U+1F1FF U+1F1FC",
                "fips": "ZI",
                "internet": "ZW",
                "continent": "Africa",
                "region": "Southern Africa"
            },
            {
                "name": "Åland Islands",
                "alpha2": "AX",
                "alpha3": "ALA",
                "numeric": "248",
                "locales": [
                    "sv"
                ],
                "default_locale": "sv",
                "currency": "EUR",
                "languages": [
                    "sv"
                ],
                "capital": "Mariehamn",
                "emoji": "🇦🇽",
                "emojiU": "U+1F1E6 U+1F1FD",
                "fips": "AX",
                "internet": "AX",
                "continent": "Europe",
                "region": "Northern Europe"
            }
        ];
        this.countryByAlpha2Code = {};
        this.countryByAlpha3Code = {};
        this.countryByNumericCode = {};
        this.countryByName = {};
        this.countryNames = [];
        this.init();
    }
    Countries.prototype.init = function () {
        for (var i = 0; i < this.countries.length; ++i) {
            this.countryByAlpha2Code[this.countries[i]['alpha2']] = this.countries[i];
            this.countryByAlpha3Code[this.countries[i]['alpha3']] = this.countries[i];
            this.countryByNumericCode[this.countries[i]['numeric']] = this.countries[i];
            this.countryByName[this.countries[i]['name']] = this.countries[i];
            this.countryNames.push(this.countries[i]['name']);
            if (this.countries[i]['alternate_names']) {
                for (var j = 0; j < this.countries[i]['alternate_names'].length; ++j) {
                    this.countryByName[this.countries[i]['alternate_names'][j]] = this.countries[i];
                    this.countryNames.push(this.countries[i]['alternate_names'][j]);
                }
            }
        }
    };
    Countries.prototype.getAllCountries = function () {
        return this.countries;
    };
    Countries.prototype.getAlpha3ByAlpha2 = function (alpha2) {
        if (this.countryByAlpha2Code[alpha2])
            return this.countryByAlpha2Code[alpha2].alpha3;
        else
            return undefined;
    };
    Countries.prototype.getLocaleByAlpha2 = function (alpha2) {
        if (this.countryByAlpha2Code[alpha2])
            return this.countryByAlpha2Code[alpha2].default_locale;
        else
            return undefined;
    };
    ;
    Countries.prototype.getCountryNameByAlpha2 = function (alpha2) {
        if (this.countryByAlpha2Code[alpha2])
            return this.countryByAlpha2Code[alpha2].name;
        else
            return undefined;
    };
    ;
    Countries.prototype.getNumericByAlpha2 = function (alpha2) {
        if (this.countryByAlpha2Code[alpha2])
            return this.countryByAlpha2Code[alpha2].numeric;
        else
            return undefined;
    };
    ;
    Countries.prototype.getCurrencyByAlpha2 = function (alpha2) {
        if (this.countryByAlpha2Code[alpha2])
            return this.countryByAlpha2Code[alpha2].currency;
        else
            return undefined;
    };
    ;
    Countries.prototype.getCountryByAlpha2 = function (alpha2) {
        return this.countryByAlpha2Code[alpha2];
    };
    /* get values by alpha3 */
    Countries.prototype.getAlpha2ByAlpha3 = function (alpha3) {
        if (this.countryByAlpha3Code[alpha3])
            return this.countryByAlpha3Code[alpha3].alpha2;
        else
            return undefined;
    };
    ;
    Countries.prototype.getLocaleByAlpha3 = function (alpha3) {
        if (this.countryByAlpha3Code[alpha3])
            return this.countryByAlpha3Code[alpha3].default_locale;
        else
            return undefined;
    };
    ;
    Countries.prototype.getCountryNameByAlpha3 = function (alpha3) {
        if (this.countryByAlpha3Code[alpha3])
            return this.countryByAlpha3Code[alpha3].name;
        else
            return undefined;
    };
    ;
    Countries.prototype.getNumericByAlpha3 = function (alpha3) {
        if (this.countryByAlpha3Code[alpha3])
            return this.countryByAlpha3Code[alpha3].numeric;
        else
            return undefined;
    };
    ;
    Countries.prototype.getCurrencyByAlpha3 = function (alpha3) {
        if (this.countryByAlpha3Code[alpha3])
            return this.countryByAlpha3Code[alpha3].currency;
        else
            return undefined;
    };
    ;
    Countries.prototype.getCountryByAlpha3 = function (alpha3) {
        return this.countryByAlpha3Code[alpha3];
    };
    /* get values by numeric */
    Countries.prototype.getAlpha2ByNumeric = function (numeric) {
        if (this.countryByNumericCode[numeric])
            return this.countryByNumericCode[numeric].alpha2;
        else
            return undefined;
    };
    ;
    Countries.prototype.getAlpha3ByNumeric = function (numeric) {
        if (this.countryByNumericCode[numeric])
            return this.countryByNumericCode[numeric].alpha3;
        else
            return undefined;
    };
    ;
    Countries.prototype.getLocaleByNumeric = function (numeric) {
        if (this.countryByNumericCode[numeric])
            return this.countryByNumericCode[numeric].default_locale;
        else
            return undefined;
    };
    ;
    Countries.prototype.getCountryNameByNumeric = function (numeric) {
        if (this.countryByNumericCode[numeric])
            return this.countryByNumericCode[numeric].name;
        else
            return undefined;
    };
    ;
    Countries.prototype.getCurrencyByNumeric = function (numeric) {
        if (this.countryByNumericCode[numeric])
            return this.countryByNumericCode[numeric].currency;
        else
            return undefined;
    };
    ;
    Countries.prototype.getCountryByNumeric = function (numeric) {
        return this.countryByNumericCode[numeric];
    };
    ;
    /* get values by country name */
    Countries.prototype.getAlpha2ByName = function (name, fuzzy) {
        if (this.countryByName[name]) {
            return this.countryByName[name].alpha2;
        }
        else if (fuzzy) {
            var match = this.getClosestMatch(name);
            if (match) {
                return this.countryByName[match].alpha2;
            }
        }
        return undefined;
    };
    ;
    Countries.prototype.getAlpha3ByName = function (name, fuzzy) {
        if (this.countryByName[name]) {
            return this.countryByName[name].alpha3;
        }
        else if (fuzzy) {
            var match = this.getClosestMatch(name);
            if (match) {
                return this.countryByName[match].alpha3;
            }
        }
        return undefined;
    };
    ;
    Countries.prototype.getLocaleByName = function (name, fuzzy) {
        if (this.countryByName[name]) {
            return this.countryByName[name].default_locale;
        }
        else if (fuzzy) {
            var match = this.getClosestMatch(name);
            if (match) {
                return this.countryByName[match].default_locale;
            }
        }
        return undefined;
    };
    ;
    Countries.prototype.getNumericByName = function (name, fuzzy) {
        if (this.countryByName[name]) {
            return this.countryByName[name].numeric;
        }
        else if (fuzzy) {
            var match = this.getClosestMatch(name);
            if (match) {
                return this.countryByName[match].numeric;
            }
        }
        return undefined;
    };
    ;
    Countries.prototype.getCurrencyByName = function (name, fuzzy) {
        if (this.countryByName[name]) {
            return this.countryByName[name].currency;
        }
        else if (fuzzy) {
            var match = this.getClosestMatch(name);
            if (match) {
                return this.countryByName[match].currency;
            }
        }
        return undefined;
    };
    ;
    Countries.prototype.getCountryByName = function (name, fuzzy) {
        if (this.countryByName[name]) {
            return this.countryByName[name];
        }
        else if (fuzzy) {
            var match = this.getClosestMatch(name);
            if (match) {
                return this.countryByName[match];
            }
        }
        return undefined;
    };
    ;
    Countries.prototype.getClosestMatch = function (name) {
        var result = fuzzball__WEBPACK_IMPORTED_MODULE_0__["extract"](name, this.countryNames);
        if (result[0][1] >= 60) {
            return result[0][0];
        }
        return undefined;
    };
    return Countries;
}());



/***/ }),

/***/ "8jZd":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/landingpage/landingpage.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> World Charity </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> World Charity </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <img class=\"path\" src=\"assets/img/blob.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\n\n    <img class=\"shapes triangle\" src=\"assets/img/triunghiuri.png\" />\n\n    <img class=\"shapes wave\" src=\"assets/img/waves.png\" />\n\n    <img class=\"shapes squares\" src=\"assets/img/patrat.png\" />\n\n    <img class=\"shapes circle\" src=\"assets/img/cercuri.png\" />\n\n    <div class=\"content-center\">\n      <div\n        class=\"\n          row row-grid\n          justify-content-between\n          align-items-center\n          text-left\n        \"\n      >\n        <div class=\"col-lg-6 col-md-6\">\n          <h1 class=\"text-white\">\n            We keep your coin <br />\n\n            <span class=\"text-white\"> secured </span>\n          </h1>\n          <p class=\"text-white mb-3\">\n            A wonderful serenity has taken possession of my entire soul, like\n            these sweet mornings of spring which I enjoy with my whole heart. I\n            am alone, and feel...\n          </p>\n\n          <h2 class=\"mt-4\">Price</h2>\n\n          <div class=\"btn-wrapper\">\n            <div class=\"button-container\">\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-twitter\"> </i>\n              </button>\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-dribbble\"> </i>\n              </button>\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-facebook\"> </i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-5 col-sm-6\">\n          <app-pay-donate></app-pay-donate>\n        </div>\n      </div>\n    </div>\n  </div>\n  <section class=\"section section-lg\">\n    <section class=\"section\">\n      <img class=\"path\" src=\"assets/img/path4.png\" />\n\n      <div class=\"container\">\n        <div class=\"row row-grid justify-content-between\">\n          <div class=\"col-md-5 mt-lg-5\">\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-trophy text-warning\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">3,237</p>\n                          <p></p>\n                          <p class=\"card-category\">Awards</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats upper bg-default\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-coins text-white\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">3,653</p>\n                          <p></p>\n                          <p class=\"card-category\">Commits</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-gift-2 text-info\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">593</p>\n                          <p></p>\n                          <p class=\"card-category\">Presents</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-credit-card text-success\">\n                          </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">10,783</p>\n                          <p></p>\n                          <p class=\"card-category\">Forks</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"pl-md-5\">\n              <h1>\n                Large <br />\n\n                Achivements\n              </h1>\n              <p>\n                I should be capable of drawing a single stroke at the present\n                moment; and yet I feel that I never was a greater artist than\n                now.\n              </p>\n              <br />\n\n              <p>\n                When, while the lovely valley teems with vapour around me, and\n                the meridian sun strikes the upper surface of the impenetrable\n                foliage of my trees, and but a few stray.\n              </p>\n              <br />\n\n              <a\n                class=\"font-weight-bold text-info mt-5\"\n                href=\"javascript:void(0)\"\n              >\n                Show all <i class=\"tim-icons icon-minimal-right text-info\"> </i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </section>\n  <section class=\"section section-lg\">\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path5.png\" />\n\n    <img class=\"path3\" src=\"assets/img/path2.png\" />\n\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <h1 class=\"text-center\">Your best benefit</h1>\n          <div class=\"row row-grid justify-content-center\">\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-primary\">\n                  <i class=\"tim-icons icon-money-coins\"> </i>\n                </div>\n                <h4 class=\"info-title\">Low Commission</h4>\n                <hr class=\"line-primary\" />\n\n                <p>\n                  Divide details about your work into parts. Write a few lines\n                  about each one. A paragraph describing a feature will.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-warning\">\n                  <i class=\"tim-icons icon-chart-pie-36\"> </i>\n                </div>\n                <h4 class=\"info-title\">High Incomes</h4>\n                <hr class=\"line-warning\" />\n\n                <p>\n                  Divide details about your product or agency work into parts.\n                  Write a few lines about each one. A paragraph describing\n                  feature will be a feature.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-success\">\n                  <i class=\"tim-icons icon-single-02\"> </i>\n                </div>\n                <h4 class=\"info-title\">Verified People</h4>\n                <hr class=\"line-success\" />\n\n                <p>\n                  Divide details about your product or agency work into parts.\n                  Write a few lines about each one. A paragraph describing be\n                  enough.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg section-safe\">\n    <img class=\"path\" src=\"assets/img/path5.png\" />\n\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-between\">\n        <div class=\"col-md-5\">\n          <img class=\"img-fluid floating\" src=\"assets/img/chester-wade.jpg\" />\n\n          <div class=\"card card-stats bg-danger\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">100%</p>\n                  <p class=\"card-category text-white\">Safe</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-info\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">573 K</p>\n                  <p class=\"card-category text-white\">Satisfied customers</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-default\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">10 425</p>\n                  <p class=\"card-category text-white\">Business</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"px-md-5\">\n            <hr class=\"line-success\" />\n\n            <h3>Awesome features</h3>\n            <p>\n              The design system comes with three pre-built pages to help you get\n              started faster. You can change the text and images and you're good\n              to go.\n            </p>\n            <ul class=\"list-unstyled mt-5\">\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-vector\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Carefully crafted components</h6></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-tap-02\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Amazing page examples</h6></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-single-02\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Super friendly support team</h6></div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg\">\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\n\n    <div class=\"col-md-12\">\n      <div class=\"card card-chart card-plain\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 text-left\">\n              <hr class=\"line-primary\" />\n\n              <h5 class=\"card-category\">Total Investments</h5>\n              <h2 class=\"card-title\">Performance</h2>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\"><canvas id=\"chartBig\"> </canvas></div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg section-coins\">\n    <img class=\"path\" src=\"assets/img/path3.png\" />\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <hr class=\"line-info\" />\n\n          <h1>\n            Choose the coin\n            <span class=\"text-info\"> that fits your needs </span>\n          </h1>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div *ngFor=\"let type of donateTypes\" class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"{{ type.image }}\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">{{ type.title }}</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-primary\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\" *ngFor=\"let item of type.list\">\n                    {{ item }}\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-primary btn-simple\">Donate</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">World Charity</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a\n                class=\"nav-link\"\n                href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\"\n              >\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a\n                class=\"nav-link\"\n                href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\"\n              >\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a\n                class=\"nav-link\"\n                href=\"https://creative-tim.com/blog?ref=blkdsa-footer\"\n              >\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "AY4b":
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage-service.ts ***!
  \****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.setDefaultPrice = function (value) {
        localStorage.setItem('defaultPrice', value);
    };
    StorageService.prototype.getDefaultPrice = function () {
        return localStorage.getItem('defaultPrice');
    };
    StorageService.prototype.setLocal = function (value) {
        localStorage.setItem('local', value);
    };
    StorageService.prototype.getLocal = function () {
        return localStorage.getItem('local');
    };
    /**
   * generate groups of 4 random characters
   * @example getUniqueId(1) : 607f
   * @example getUniqueId(2) : 95ca-361a-f8a1-1e73
   */
    StorageService.prototype.getUniqueId = function (parts) {
        var stringArr = [];
        for (var i = 0; i < parts; i++) {
            // tslint:disable-next-line:no-bitwise
            var S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            stringArr.push(S4);
        }
        return stringArr.join('-');
    };
    StorageService.ctorParameters = function () { return []; };
    StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CB8Y":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/paypal/services/script.service.ts ***!
  \*********************************************************************/
/*! exports provided: ScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ScriptService = /** @class */ (function () {
    function ScriptService(zone) {
        this.zone = zone;
    }
    ScriptService.prototype.registerScript = function (url, globalVar, onReady) {
        var _this = this;
        var existingGlobalVar = window[globalVar];
        if (existingGlobalVar) {
            // global variable is present = script was already loaded
            this.zone.run(function () {
                onReady(existingGlobalVar);
            });
            return;
        }
        // prepare script elem
        var scriptElem = document.createElement('script');
        scriptElem.id = this.getElemId(globalVar);
        scriptElem.innerHTML = '';
        scriptElem.onload = function () {
            _this.zone.run(function () {
                onReady(window[globalVar]);
            });
        };
        scriptElem.src = url;
        scriptElem.async = true;
        scriptElem.defer = true;
        // add script to header
        document.getElementsByTagName('head')[0].appendChild(scriptElem);
    };
    ScriptService.prototype.cleanup = function (globalVar) {
        // remove script from DOM
        var scriptElem = document.getElementById(this.getElemId(globalVar));
        if (scriptElem) {
            scriptElem.remove();
        }
    };
    ScriptService.prototype.getElemId = function (globalVar) {
        return "ngx-paypal-script-elem-" + globalVar;
    };
    ScriptService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    ScriptService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], ScriptService);
    return ScriptService;
}());



/***/ }),

/***/ "F149":
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/profilepage/profilepage.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfilepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepageComponent", function() { return ProfilepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profilepage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profilepage.component.html */ "00il");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var ProfilepageComponent = /** @class */ (function () {
    function ProfilepageComponent() {
        this.isCollapsed = true;
    }
    ProfilepageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("profile-page");
    };
    ProfilepageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("profile-page");
    };
    ProfilepageComponent.ctorParameters = function () { return []; };
    ProfilepageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-profilepage",
            template: _raw_loader_profilepage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProfilepageComponent);
    return ProfilepageComponent;
}());



/***/ }),

/***/ "IfWR":
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/landingpage/landingpage.component.ts ***!
  \*********************************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_landingpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./landingpage.component.html */ "8jZd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/storage-service */ "AY4b");





var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent(storageSevrice) {
        this.storageSevrice = storageSevrice;
        this.isCollapsed = true;
        this.donateTypes = [
            {
                image: 'assets/img/bitcoin.png',
                title: "Poor Children",
                list: ['happpy', 'sa']
            },
            {
                image: 'assets/img/etherum.png',
                title: "Poor Families",
                list: ['Feed them', 'buy cloths', 'find work']
            },
            {
                image: 'assets/img/ripp.png',
                title: "Womens",
                list: ['Marriage', 'buy cloths', 'find work']
            }
        ];
    }
    LandingpageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("landing-page");
        var canvas = document.getElementById("chartBig");
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
        gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
        gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
        var chartBig = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, {
            type: "line",
            responsive: true,
            data: {
                labels: [
                    "JUN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC"
                ],
                datasets: [
                    {
                        label: "Data",
                        fill: true,
                        backgroundColor: gradientFill,
                        borderColor: "#e44cc4",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#e44cc4",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#be55ed",
                        //pointHoverBorderColor:'rgba(35,46,55,1)',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320]
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    backgroundColor: "#fff",
                    titleFontColor: "#ccc",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest"
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0.0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                display: false,
                                suggestedMin: 0,
                                suggestedMax: 350,
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }
                    ],
                    xAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }
                    ]
                }
            }
        });
    };
    LandingpageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("landing-page");
    };
    LandingpageComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
    ]; };
    LandingpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-landingpage",
            template: _raw_loader_landingpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



/***/ }),

/***/ "LOzy":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/pay/dialogs/success-pay-dialog.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWNjZXNzLXBheS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_services_ip_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/ip-info.service */ "vKDV");
/* harmony import */ var _shared_utils_countries_contant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/utils/countries-contant */ "6lJF");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/storage-service */ "AY4b");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










var AppComponent = /** @class */ (function () {
    function AppComponent(ipInfoService, storageSevrice, renderer, location, document) {
        this.ipInfoService = ipInfoService;
        this.storageSevrice = storageSevrice;
        this.renderer = renderer;
        this.location = location;
        this.clm = new _shared_utils_countries_contant__WEBPACK_IMPORTED_MODULE_6__["Countries"]();
    }
    AppComponent.prototype.onWindowScroll = function (e) {
        if (window.pageYOffset > 100) {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.remove("navbar-transparent");
                element.classList.add("bg-danger");
            }
        }
        else {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.add("navbar-transparent");
                element.classList.remove("bg-danger");
            }
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onWindowScroll(event);
        this.storageSevrice.setDefaultPrice('1');
        this.ipInfoService.getIpInfo().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
            if (_this.storageSevrice.getLocal() == undefined || _this.storageSevrice.getLocal() == null) {
                console.log("Set default local en_US");
                _this.storageSevrice.setLocal("en_US");
            }
        })).subscribe(function (data) {
            console.log(data);
            _this.storageSevrice.setLocal(_this.clm.getLocaleByAlpha2(data.country));
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _shared_services_ip_info_service__WEBPACK_IMPORTED_MODULE_5__["IpInfoService"] },
        { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    AppComponent.propDecorators = {
        onWindowScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["window:scroll", ["$event"],] }]
    };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-root",
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_ip_info_service__WEBPACK_IMPORTED_MODULE_5__["IpInfoService"],
            _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "V/Tm":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        placement=\"bottom\"\n        [routerLink]=\"['/home']\"\n        target=\"_blank\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> World Charity </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> World Charity </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"dropdown nav-item\" dropdown>\n          <a\n            class=\"dropdown-toggle nav-link dropdown-toggle\"\n            data-toggle=\"dropdown\"\n            dropdownToggle\n            href=\"javascript:void(0)\"\n          >\n            <i class=\"fa fa-cogs d-lg-none d-xl-none\"> </i> Getting started\n          </a>\n          <div class=\"dropdown-menu dropdown-with-icons\" *dropdownMenu>\n            <a\n              class=\"dropdown-item\"\n              href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/overview\"\n            >\n              <i class=\"tim-icons icon-paper\"> </i> Documentation\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/register']\">\n              <i class=\"tim-icons icon-bullet-list-67\"> </i> Register Page\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/landing']\">\n              <i class=\"tim-icons icon-image-02\"> </i> Landing Page\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">\n              <i class=\"tim-icons icon-single-02\"> </i> Profile Page\n            </a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link btn btn-default d-none d-lg-block\"\n            href=\"javascript:void(0)\"\n            (click)=\"scrollToDownload(target)\"\n          >\n            <i class=\"tim-icons icon-cloud-download-93\"> </i> Download\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header header-filter\">\n    <div class=\"squares square1\"></div>\n    <div class=\"squares square2\"></div>\n    <div class=\"squares square3\"></div>\n    <div class=\"squares square4\"></div>\n    <div class=\"squares square5\"></div>\n    <div class=\"squares square6\"></div>\n    <div class=\"squares square7\"></div>\n    <div class=\"container\">\n      <div class=\"content-center brand\">\n        <h1 class=\"h1-seo\">World Charity</h1>\n        <h3>\n          A beautiful Design System for Bootstrap 4 and Angular. It's Free and\n          Open Source.\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"main\">\n    <div class=\"section section-basic\" id=\"basic-elements\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"container\">\n        <h2 class=\"title\">Basic Elements</h2>\n        <h3>Buttons</h3>\n        <p class=\"category\">Pick your style</p>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            <button class=\"btn btn-primary mr-1\" type=\"button\">Default</button>\n            <button class=\"btn btn-primary btn-round mr-1\" type=\"button\">\n              Round\n            </button>\n            <button class=\"btn btn-primary btn-round mr-1\" type=\"button\">\n              <i class=\"tim-icons icon-heart-2\"> </i> With Icon\n            </button>\n            <button\n              class=\"btn btn-primary btn-icon btn-round mr-1\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-heart-2\"> </i>\n            </button>\n            <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">\n              Simple\n            </button>\n          </div>\n        </div>\n        <p class=\"category\">Pick your size</p>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            <button class=\"btn btn-primary btn-sm mr-1\">Small</button>\n            <button class=\"btn btn-primary mr-1\">Regular</button>\n            <button class=\"btn btn-primary btn-lg\">Large</button>\n          </div>\n        </div>\n        <p class=\"category\">Pick your color</p>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <button class=\"btn mr-1\">Default</button>\n            <button class=\"btn btn-primary mr-1\">Primary</button>\n            <button class=\"btn btn-info mr-1\">Info</button>\n            <button class=\"btn btn-success mr-1\">Success</button>\n            <button class=\"btn btn-warning mr-1\">Warning</button>\n            <button class=\"btn btn-danger mr-1\">Danger</button>\n            <button class=\"btn btn-neutral\">Neutral</button>\n          </div>\n        </div>\n        <br />\n\n        <h3>Links</h3>\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <button class=\"btn btn-link mr-1\">Default</button>\n            <button class=\"btn btn-link btn-primary mr-1\">Primary</button>\n            <button class=\"btn btn-link btn-info mr-1\">Info</button>\n            <button class=\"btn btn-link btn-success mr-1\">Success</button>\n            <button class=\"btn btn-link btn-warning mr-1\">Warning</button>\n            <button class=\"btn btn-link btn-danger\">Danger</button>\n          </div>\n        </div>\n        <div class=\"space-70\"></div>\n        <div id=\"inputs\">\n          <h3>Inputs</h3>\n          <p class=\"category\">Form Controls</p>\n          <div class=\"row\">\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"form-group\">\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Regular\"\n                  type=\"text\"\n                  value=\"\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"form-group has-success\">\n                <input\n                  class=\"form-control form-control-success\"\n                  type=\"text\"\n                  value=\"Success\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"form-group has-danger\">\n                <input\n                  class=\"form-control form-control-danger\"\n                  type=\"email\"\n                  value=\"Error Input\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div\n                class=\"input-group\"\n                [ngClass]=\"{ 'input-group-focus': focus === true }\"\n              >\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <i class=\"fa fa-user\"> </i>\n                  </span>\n                </div>\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Left Font Awesome Icon\"\n                  type=\"text\"\n                  (focus)=\"focus = true\"\n                  (blur)=\"focus = false\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"input-group\">\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Right Nucleo Icon\"\n                  type=\"text\"\n                />\n\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">\n                    <i class=\"tim-icons icon-lock-circle\"> </i>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"space-70\"></div>\n        <div class=\"row\" id=\"checkRadios\">\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Checkboxes</p>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\" />\n\n                <span class=\"form-check-sign\"> </span> Unchecked\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  type=\"checkbox\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Checked\n              </label>\n            </div>\n            <div class=\"form-check disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  type=\"checkbox\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled Unchecked\n              </label>\n            </div>\n            <div class=\"form-check disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  type=\"checkbox\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled Checked\n              </label>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Radios</p>\n            <div class=\"form-check form-check-radio\">\n              <label class=\"form-check-label\">\n                <input\n                  class=\"form-check-input\"\n                  id=\"exampleRadios1\"\n                  name=\"exampleRadios\"\n                  type=\"radio\"\n                  value=\"option1\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Radio is off\n              </label>\n            </div>\n            <div class=\"form-check form-check-radio\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  id=\"exampleRadios1\"\n                  name=\"exampleRadios\"\n                  type=\"radio\"\n                  value=\"option2\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Radio is on\n              </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  id=\"exampleRadios2\"\n                  name=\"exampleRadios1\"\n                  type=\"radio\"\n                  value=\"option3\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled radio is off\n              </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  id=\"exampleRadios2\"\n                  name=\"exampleRadios1\"\n                  type=\"radio\"\n                  value=\"option4\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled radio is on\n              </label>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Toggle Buttons</p>\n            <bSwitch\n              [switch-on-color]=\"'danger'\"\n              [switch-off-color]=\"'danger'\"\n              [switch-off-text]=\"' '\"\n              [switch-on-text]=\"' '\"\n            >\n            </bSwitch>\n            <br />\n            <bSwitch [switch-on-color]=\"'danger'\" [switch-off-color]=\"'danger'\">\n            </bSwitch>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Sliders</p>\n            <div class=\"slider\" id=\"sliderRegular\"></div>\n            <br />\n\n            <div class=\"slider slider-danger\" id=\"sliderDouble\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-navbars\">\n      <img class=\"path\" src=\"assets/img/path3.png\" />\n\n      <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4>Menu</h4>\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n              <div class=\"container\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\"> Menu </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n                <div\n                  class=\"navbar-collapse\"\n                  [isAnimated]=\"true\"\n                  [collapse]=\"isCollapsed\"\n                  id=\"example-navbar\"\n                >\n                  <ul class=\"navbar-nav\">\n                    <li class=\"nav-item active\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <p>Link</p>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <p>Link</p>\n                      </a>\n                    </li>\n                    <li class=\"nav-item dropdown\" dropdown>\n                      <a\n                        aria-expanded=\"false\"\n                        aria-haspopup=\"true\"\n                        class=\"nav-link dropdown-toggle dropdown-toggle\"\n                        data-toggle=\"dropdown\"\n                        dropdownToggle\n                        href=\"javascript:void(0)\"\n                        id=\"navbarDropdownMenuLink\"\n                      >\n                        <p>Dropdown</p>\n                      </a>\n                      <div\n                        aria-labelledby=\"navbarDropdownMenuLink\"\n                        class=\"dropdown-menu\"\n                        *dropdownMenu\n                      >\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Another action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Something else here\n                        </a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </div>\n          <div class=\"col-md-6\">\n            <h4>Menu with Icons</h4>\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n              <div class=\"container\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\"> Icons </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-icons\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n                <div\n                  class=\"navbar-collapse\"\n                  [isAnimated]=\"true\"\n                  [collapse]=\"isCollapsed\"\n                  id=\"example-navbar-icons\"\n                >\n                  <ul class=\"navbar-nav ml-auto\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i aria-hidden=\"true\" class=\"tim-icons icon-send\"> </i>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i aria-hidden=\"true\" class=\"tim-icons icon-single-02\">\n                        </i>\n                      </a>\n                    </li>\n                    <li class=\"nav-item dropdown\" dropdown>\n                      <a\n                        class=\"nav-link dropdown-toggle dropdown-toggle\"\n                        data-toggle=\"dropdown\"\n                        dropdownToggle\n                        href=\"javascript:void(0)\"\n                        id=\"navbarDropdownMenuLink\"\n                      >\n                        <i\n                          aria-hidden=\"true\"\n                          class=\"tim-icons icon-settings-gear-63\"\n                        >\n                        </i>\n                      </a>\n                      <div\n                        aria-labelledby=\"navbarDropdownMenuLink\"\n                        class=\"dropdown-menu dropdown-menu-right\"\n                        *dropdownMenu\n                      >\n                        <a class=\"dropdown-header\"> Dropdown header </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Another action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Something else here\n                        </a>\n                        <div class=\"divider\"></div>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Separated link\n                        </a>\n                        <div class=\"divider\"></div>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          One more separated link\n                        </a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </div>\n        </div>\n        <h3 class=\"title mb-3\">Navigation</h3>\n      </div>\n      <div id=\"navbar\">\n        <div class=\"navigation-example\">\n          <nav class=\"navbar navbar-expand-lg bg-primary\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Primary color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-primary\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-primary\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-world\"> </i> Discover\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-single-02\"> </i> Profile\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-info\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Info Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-info\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-info\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Discover </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Profile </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Settings </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-success\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Success Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-success\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-success\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-world\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-single-02\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-warning\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Warning Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-warning\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-warning\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-facebook-square\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-twitter\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-google-plus\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-instagram\"> </i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-danger\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Danger Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-danger\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-danger\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-facebook-square\"> </i> Share\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-twitter\"> </i> Tweet\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-pinterest\"> </i> Pin\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Transparent\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-transparent\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-transparent\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-facebook-square\"> </i> Facebook\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-twitter\"> </i> Twitter\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-instagram\"> </i> Instagram\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-tabs\">\n      <div class=\"container\">\n        <div class=\"title\"><h3 class=\"mb-3\">Navigation Tabs</h3></div>\n        <div class=\"row\">\n          <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\">\n                With icons\n              </small>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <tabset class=\"nav-tabs-danger\">\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-spaceship\"> </i> Profile\n                    </ng-template>\n                    <p>\n                      Collaboratively administrate empowered markets via\n                      plug-and-play networks. Dynamically procrastinate B2C\n                      users after installed base benefits. <br />\n\n                      <br />\n\n                      Dramatically visualize customer directed convergence\n                      without revolutionary ROI.\n                    </p>\n                  </tab>\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\n                    </ng-template>\n                    <p>\n                      Completely synergize resource taxing relationships via\n                      premier niche markets. Professionally cultivate one-to-one\n                      customer service with robust ideas. <br />\n\n                      <br />\n\n                      Dynamically innovate resource-leveling customer service\n                      for state of the art customer service.\n                    </p>\n                  </tab>\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-bag-16\"> </i> Options\n                    </ng-template>\n                    <p>\n                      Efficiently unleash cross-media information without\n                      cross-media value. Quickly maximize timely deliverables\n                      for real-time schemas. <br />\n\n                      <br />\n\n                      Dramatically maintain clicks-and-mortar solutions without\n                      functional solutions.\n                    </p>\n                  </tab>\n                </tabset>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\"> With text </small>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <tabset class=\"nav-tabs-danger\">\n                  <tab heading=\"Profile\">\n                    <p>\n                      These cases are perfectly simple and easy to distinguish.\n                      In a free hour, when our power of choice is untrammelled\n                      and when nothing prevents our being able to do what we\n                      like best, every pleasure is to be welcomed and every pain\n                      avoided. <br />\n\n                      But in certain circumstances and owing to the claims of\n                      duty or the obligations of business it will frequently\n                      occur that pleasures\n                    </p>\n                  </tab>\n                  <tab heading=\"Settings\">\n                    <p>\n                      I will be the leader of a company that ends up being worth\n                      billions of dollars, because I got the answers. I\n                      understand culture. I am the nucleus. I think thatâs a\n                      responsibility that I have, to push possibilities, to show\n                      people, this is the level that things could be at. I think\n                      thatâs a responsibility that I have, to push\n                      possibilities, to show people, this is the level that\n                      things could be at.\n                    </p>\n                  </tab>\n                  <tab heading=\"Options\">\n                    <p>\n                      I think thatâs a responsibility that I have, to push\n                      possibilities, to show people, this is the level that\n                      things could be at. So when you get something that has the\n                      name Kanye West on it, itâs supposed to be pushing the\n                      furthest possibilities. I will be the leader of a company\n                      that ends up being worth billions of dollars, because I\n                      got the answers. I understand culture. I am the nucleus.\n                    </p>\n                  </tab>\n                </tabset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-pagination\">\n      <img class=\"path\" src=\"assets/img/path4.png\" />\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h3 class=\"mb-4\">Progress Bars</h3>\n            <div class=\"progress-container\">\n              <span class=\"progress-badge\"> Default </span>\n              <progressbar [value]=\"25\">\n                <span class=\"progress-value\"> 25% </span>\n              </progressbar>\n            </div>\n            <div class=\"progress-container progress-danger\">\n              <span class=\"progress-badge\"> Danger </span>\n              <progressbar class=\"progress-bar-danger\" [value]=\"60\">\n                <span class=\"progress-value\"> 60% </span>\n              </progressbar>\n            </div>\n            <br />\n\n            <h3 class=\"mb-5\">Navigation Pills</h3>\n            <tabset type=\"pills\" class=\"nav-pills-danger nav-pills-icons\">\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-atom\"> </i> Home\n                </ng-template>\n              </tab>\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-chat-33\"> </i> Messages\n                </ng-template>\n              </tab>\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\n                </ng-template>\n              </tab>\n            </tabset>\n          </div>\n          <div class=\"col-md-6\">\n            <h3 class=\"mb-5\">Pagination</h3>\n            <pagination\n              class=\"pagination-danger\"\n              [(ngModel)]=\"pagination1\"\n              [totalItems]=\"30\"\n            >\n            </pagination>\n            <pagination\n              class=\"pagination-danger\"\n              [boundaryLinks]=\"true\"\n              [totalItems]=\"45\"\n              [ngModel]=\"pagination\"\n              previousText=\"&lsaquo;\"\n              nextText=\"&rsaquo;\"\n              firstText=\"&laquo;\"\n              lastText=\"&raquo;\"\n            >\n            </pagination>\n            <br />\n\n            <h3 class=\"mb-5\">Labels</h3>\n            <span class=\"badge badge-default mr-1\"> Default </span>\n            <span class=\"badge badge-primary mr-1\"> Primary </span>\n            <span class=\"badge badge-success mr-1\"> Success </span>\n            <span class=\"badge badge-info mr-1\"> Info </span>\n            <span class=\"badge badge-warning mr-1\"> Warning </span>\n            <span class=\"badge badge-danger mr-1\"> Danger </span>\n            <span class=\"badge badge-neutral\"> Neutral </span>\n          </div>\n        </div>\n        <br />\n      </div>\n    </div>\n    <div class=\"section section-notifications\" id=\"notifications\">\n      <div class=\"container\">\n        <div class=\"space\"></div>\n        <h3>Notifications</h3>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'primary alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-coins\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Congrats! - </b> This is a regular notification made with\n            \".alert-primary\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'info alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-trophy\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Heads up! - </b> This is a regular notification made with\n            \".alert-info\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'success alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-bell-55\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Well done! - </b> This is a regular notification made with\n            \".alert-success\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'warning alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-bulb-63\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Warning! - </b> This is a regular notification made with\n            \".alert-warning\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'danger alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-support-17\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Oh snap! - </b> This is a regular notification made with\n            \".alert-danger\"\n          </span>\n        </alert>\n      </div>\n    </div>\n    <div class=\"section section-typo\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <img class=\"path path1\" src=\"assets/img/path3.png\" />\n\n      <div class=\"container\">\n        <h3 class=\"title\">Typography</h3>\n        <div id=\"typography\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"typography-line\">\n                <h1><span> Header 1 </span> The Life of World Charity Design System</h1>\n              </div>\n              <div class=\"typography-line\">\n                <h2><span> Header 2 </span> The Life of World Charity Design System</h2>\n              </div>\n              <div class=\"typography-line\">\n                <h3><span> Header 3 </span> The Life of World Charity Design System</h3>\n              </div>\n              <div class=\"typography-line\">\n                <h4><span> Header 4 </span> The Life of World Charity Design System</h4>\n              </div>\n              <div class=\"typography-line\">\n                <h5><span> Header 5 </span> The Life of World Charity Design System</h5>\n              </div>\n              <div class=\"typography-line\">\n                <h6><span> Header 6 </span> The Life of World Charity Design System</h6>\n              </div>\n              <div class=\"typography-line\">\n                <p>\n                  <span> Paragraph </span> I will be the leader of a company\n                  that ends up being worth billions of dollars, because I got\n                  the answers. I understand culture. I am the nucleus. I think\n                  thatâs a responsibility that I have, to push possibilities, to\n                  show people, this is the level that things could be at.\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Quote </span>\n                <blockquote>\n                  <p class=\"blockquote blockquote-danger\">\n                    \"I will be the leader of a company that ends up being worth\n                    billions of dollars, because I got the answers. I understand\n                    culture. I am the nucleus. I think thatâs a responsibility\n                    that I have, to push possibilities, to show people, this is\n                    the level that things could be at.\" <br />\n\n                    <br />\n\n                    <small> - Noaa </small>\n                  </p>\n                </blockquote>\n              </div>\n              <div class=\"typography-line\">\n                <span> Muted Text </span>\n                <p class=\"text-muted\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Primary Text </span>\n                <p class=\"text-primary\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Info Text </span>\n                <p class=\"text-info\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Success Text </span>\n                <p class=\"text-success\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Warning Text </span>\n                <p class=\"text-warning\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Danger Text </span>\n                <p class=\"text-danger\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <h2>\n                  <span> Small Tag </span> Header with small subtitle <br />\n\n                  <small> Use \"small\" tag for the headers </small>\n                </h2>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"space-50\"></div>\n        <div id=\"images\">\n          <h3 class=\"mb-5\">Images</h3>\n          <div class=\"row\">\n            <div class=\"col-sm-3 col-6\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Image\n              </small>\n              <img\n                alt=\"Rounded image\"\n                class=\"img-fluid rounded shadow\"\n                src=\"assets/img/ryan.jpg\"\n                style=\"width: 150px;\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Circle Image\n              </small>\n              <img\n                alt=\"Circle image\"\n                class=\"img-fluid rounded-circle shadow\"\n                src=\"assets/img/james.jpg\"\n                style=\"width: 150px;\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Raised\n              </small>\n              <img\n                alt=\"Raised image\"\n                class=\"img-fluid rounded shadow-lg\"\n                src=\"assets/img/lora.jpg\"\n                style=\"width: 150px;\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Circle Raised\n              </small>\n              <img\n                alt=\"Raised circle image\"\n                class=\"img-fluid rounded-circle shadow-lg\"\n                src=\"assets/img/mike.jpg\"\n                style=\"width: 150px;\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-javascript\" id=\"javascriptComponents\">\n      <img class=\"path\" src=\"assets/img/path5.png\" />\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n\n      <div class=\"container\">\n        <h3 class=\"title mb-5\">Javascript components</h3>\n        <h4 class=\"mb-5\">Modal</h4>\n        <div class=\"row\" id=\"modals\">\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-danger\"\n              data-target=\"#myModal\"\n              (click)=\"myModal.show()\"\n            >\n              Launch Modal\n            </button>\n          </div>\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-warning\"\n              data-target=\"#myModal1\"\n              (click)=\"myModal1.show()\"\n            >\n              Launch Modal Mini\n            </button>\n          </div>\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-success\"\n              data-target=\"#myModal2\"\n              (click)=\"myModal2.show()\"\n            >\n              Launch Modal Form\n            </button>\n          </div>\n        </div>\n        <br />\n\n        <br />\n\n        <h4 class=\"mb-5 mt-3\">Datepicker</h4>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"datepicker-container\">\n              <div class=\"form-group\">\n                <input\n                  bsDatepicker\n                  class=\"form-control\"\n                  data-datepicker-color=\"danger\"\n                  [bsConfig]=\"{ isAnimated: true, containerClass: 'theme-red' }\"\n                  [bsValue]=\"date\"\n                  id=\"datepicker\"\n                  type=\"text\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4 class=\"mb-5 mt-3\">Popovers</h4>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"top\"\n              popoverTitle=\"Popover on top\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On top\n            </button>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"right\"\n              popoverTitle=\"Popover on right\"\n              popover=\"Here will be some very useful information about his popover.<br>\n              Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On right\n            </button>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"bottom\"\n              popoverTitle=\"Popover on bottom\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On bottom\n            </button>\n            <button\n              class=\"btn btn-default btn-sm\"\n              container=\"body\"\n              placement=\"left\"\n              popoverTitle=\"Popover on left\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On left\n            </button>\n          </div>\n          <div class=\"col-md-6\">\n            <h4 class=\"mb-5 mt-3\">Tooltips</h4>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              data-delay=\"100\"\n              placement=\"left\"\n              tooltip=\"Tooltip on left\"\n              type=\"button\"\n            >\n              On left\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"top\"\n              tooltip=\"Tooltip on top\"\n              type=\"button\"\n            >\n              On top\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"bottom\"\n              tooltip=\"Tooltip on bottom\"\n              type=\"button\"\n            >\n              On bottom\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"right\"\n              tooltip=\"Tooltip on right\"\n              type=\"button\"\n            >\n              On right\n            </button>\n            <div class=\"clearfix\"></div>\n            <br />\n\n            <br />\n          </div>\n        </div>\n      </div>\n      <div class=\"section\">\n        <div class=\"container\">\n          <div class=\"title\"><h3>Carousel</h3></div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-5 mb-5 mb-lg-0\">\n              <h1 class=\"text-white font-weight-light\">Bootstrap carousel</h1>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a\n                class=\"btn btn-warning mt-4\"\n                href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/alerts\"\n              >\n                See all components\n              </a>\n            </div>\n            <div class=\"col-lg-6\">\n              <carousel [showIndicators]=\"false\">\n                <slide>\n                  <img\n                    alt=\"First slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/denys.jpg\"\n                  />\n                </slide>\n                <slide>\n                  <img\n                    alt=\"Second slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/fabien-bazanegue.jpg\"\n                  />\n                </slide>\n                <slide>\n                  <img\n                    alt=\"Third slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/mark-finn.jpg\"\n                  />\n                </slide>\n              </carousel>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-nucleo-icons\">\n      <img class=\"path\" src=\"assets/img/path3.png\" />\n\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-8 col-md-12\">\n            <h2 class=\"title\">Nucleo Icons</h2>\n            <h4 class=\"description\">\n              World Charity Design System PRO comes with 100 custom icons made by our\n              friends from NucleoApp. The official package contains over 2.100\n              thin icons which are looking great in combination with World Charity Design\n              System PRO Make sure you check all of them and use those that you\n              like the most.\n            </h4>\n            <div class=\"btn-wrapper\">\n              <a\n                class=\"btn btn-danger btn-round mr-1\"\n                href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons\"\n                target=\"_blank\"\n              >\n                View Demo Icons\n              </a>\n              <a\n                class=\"btn btn-danger btn-simple btn-round btn-lg\"\n                href=\"https://nucleoapp.com/?ref=1712\"\n                target=\"_blank\"\n              >\n                View All Icons\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"blur-hover\">\n          <a\n            href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons\"\n            class=\"text-danger\"\n          >\n            <div class=\"icons-container blur-item on-screen mt-5\">\n              <i class=\"icon tim-icons icon-coins\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-spaceship\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-money-coins\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-link-72\"> </i>\n              <i class=\"icon tim-icons icon-send\"> </i>\n              <i class=\"icon tim-icons icon-mobile\"> </i>\n              <i class=\"icon tim-icons icon-wifi\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-key-25\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-atom\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-satisfied\"> </i>\n              <i class=\"icon tim-icons icon-gift-2\"> </i>\n              <i class=\"icon tim-icons icon-tap-02\"> </i>\n              <i class=\"icon tim-icons icon-wallet-43\"> </i>\n            </div>\n            <span class=\"blur-hidden h5 text-danger\">\n              Eplore all the 21.000+ Nucleo Icons\n            </span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-signup\">\n      <div class=\"container\">\n        <div class=\"squares square-1\"></div>\n        <div class=\"squares square-2\"></div>\n        <div class=\"squares square-3\"></div>\n        <div class=\"squares square-4\"></div>\n        <div class=\"row row-grid justify-content-between align-items-center\">\n          <div class=\"col-lg-6\">\n            <h3 class=\"display-3 text-white\">\n              A beautiful Black Design\n              <span class=\"text-white\"> completed with examples </span>\n            </h3>\n            <p class=\"text-white mb-3\">\n              The Design System comes with four pre-built pages to help you get\n              started faster. You can change the text and images and you're good\n              to go. More importantly, looking at them will give you a picture\n              of what you can built with this powerful Bootstrap 4 Design\n              System.\n            </p>\n            <div class=\"btn-wrapper\">\n              <a class=\"btn btn-danger\" [routerLink]=\"['/register']\">\n                Register Page\n              </a>\n            </div>\n          </div>\n          <div class=\"col-lg-6 mb-lg-auto\">\n            <div class=\"card card-register\">\n              <div class=\"card-header\">\n                <img\n                  alt=\"Card image\"\n                  class=\"card-img\"\n                  src=\"assets/img/square1-red.png\"\n                />\n\n                <h4 class=\"card-title\">Register</h4>\n              </div>\n              <div class=\"card-body\">\n                <form class=\"form\">\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-single-02\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Full Name\"\n                      type=\"text\"\n                    />\n                  </div>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-email-85\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Email\"\n                      type=\"text\"\n                    />\n                  </div>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-lock-circle\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Password\"\n                      type=\"text\"\n                    />\n                  </div>\n                  <div class=\"form-check text-left\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" />\n\n                      <span class=\"form-check-sign\"> </span> I agree to the\n                      <a href=\"javascript:void(0)\"> terms and conditions </a> .\n                    </label>\n                  </div>\n                </form>\n              </div>\n              <div class=\"card-footer\">\n                <a\n                  class=\"btn btn-danger btn-round btn-lg\"\n                  href=\"javascript:void(0)\"\n                >\n                  Get Started\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-examples\" data-background-color=\"black\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"space-50\"></div>\n      <div class=\"container text-center\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <a [routerLink]=\"['/landing']\">\n              <img\n                alt=\"Image\"\n                class=\"img-raised\"\n                src=\"assets/img/landing-page.png\"\n              />\n            </a>\n            <a\n              class=\"btn btn-simple btn-danger btn-round\"\n              [routerLink]=\"['/landing']\"\n            >\n              View Landing Page\n            </a>\n          </div>\n          <div class=\"col-sm-6\">\n            <a [routerLink]=\"['/profile']\">\n              <img\n                alt=\"Image\"\n                class=\"img-raised\"\n                src=\"assets/img/profile-page.png\"\n              />\n            </a>\n            <a\n              class=\"btn btn-simple btn-danger btn-round\"\n              [routerLink]=\"['/profile']\"\n            >\n              View Profile Page\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-download\" data-background-color=\"black\" #target>\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"container\">\n        <div class=\"row justify-content-md-center\">\n          <div class=\"text-center col-md-12 col-lg-8\">\n            <h2 class=\"title\">\n              Do you love this Bootstrap 4 Angular Design System?\n            </h2>\n            <h4 class=\"description\">\n              Cause if you do, it can be yours for FREE. Hit the button below to\n              navigate to Creative Tim where you can find the design system in\n              HTML format. Start a new project or give an old Bootstrap project\n              a new look!\n            </h4>\n          </div>\n          <div class=\"text-center col-md-12 col-lg-8\">\n            <a\n              class=\"btn btn-danger btn-round btn-lg\"\n              href=\"https://www.creative-tim.com/product/blk-design-system-angular\"\n              role=\"button\"\n            >\n              Download Angular\n            </a>\n          </div>\n        </div>\n        <br />\n\n        <br />\n\n        <br />\n\n        <br />\n\n        <br />\n\n        <div class=\"row row-grid align-items-center my-md\">\n          <div class=\"col-lg-6\">\n            <h3 class=\"text-danger font-weight-light mb-2\">\n              Thank you for supporting us!\n            </h3>\n            <h4 class=\"mb-0 font-weight-light\">\n              Let's get in touch on any of these platforms.\n            </h4>\n          </div>\n          <div class=\"col-lg-6 text-lg-center btn-wrapper\">\n            <a\n              class=\"btn btn-icon btn-twitter btn-round btn-lg mr-1\"\n              id=\"twitter\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-facebook btn-round btn-lg mr-1\"\n              id=\"facebook\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-github btn-round btn-lg\"\n              href=\"https://github.com/creativetimofficial\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-github\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade\"\n      #myModal=\"bs-modal\"\n      id=\"myModal\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal.hide()\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n            <h4 class=\"title title-up\">Modal title</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>\n              Far far away, behind the word mountains, far from the countries\n              Vokalia and Consonantia, there live the blind texts. Separated\n              they live in Bookmarksgrove right at the coast of the Semantics, a\n              large language ocean. A small river named Duden flows by their\n              place and supplies it with the necessary regelialia. It is a\n              paradisematic country, in which roasted parts of sentences fly\n              into your mouth.\n            </p>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-default\" type=\"button\">Nice Button</button>\n            <button\n              class=\"btn btn-danger\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal.hide()\"\n            >\n              Close\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade modal-mini modal-danger modal-mini\"\n      #myModal1=\"bs-modal\"\n      id=\"myModal1\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              (click)=\"myModal1.hide()\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n            </button>\n            <div class=\"modal-profile\">\n              <i class=\"tim-icons icon-single-02\"> </i>\n            </div>\n          </div>\n          <div class=\"modal-body\">\n            <p>Always have an access to your profile</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-link btn-neutral\" type=\"button\">Back</button>\n            <button\n              class=\"btn btn-link btn-neutral\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal1.hide()\"\n            >\n              Close\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade modal-black\"\n      #myModal2=\"bs-modal\"\n      id=\"myModal2\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              (click)=\"myModal2.hide()\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n            </button>\n            <div class=\"text-muted text-center ml-auto mr-auto\">\n              <h3 class=\"mb-0\">Sign in with</h3>\n            </div>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"btn-wrapper text-center\">\n              <a\n                class=\"btn btn-neutral btn-icon mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <img src=\"assets/img/github.svg\" />\n              </a>\n              <a class=\"btn btn-neutral btn-icon\" href=\"javascript:void(0)\">\n                <img src=\"assets/img/google.svg\" />\n              </a>\n            </div>\n            <div class=\"text-center text-muted mb-4 mt-3\">\n              <small> Or sign in with credentials </small>\n            </div>\n            <form role=\"form\">\n              <div class=\"form-group mb-3\">\n                <div\n                  class=\"input-group input-group-alternative\"\n                  [ngClass]=\"{ 'input-group-focus': focus1 === true }\"\n                >\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"tim-icons icon-email-85\"> </i>\n                    </span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Email\"\n                    type=\"email\"\n                    (focus)=\"focus1 = true\"\n                    (blur)=\"focus1 = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div\n                  class=\"input-group input-group-alternative\"\n                  [ngClass]=\"{ 'input-group-focus': focus2 === true }\"\n                >\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"tim-icons icon-key-25\"> </i>\n                    </span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Password\"\n                    type=\"password\"\n                    (focus)=\"focus2 = true\"\n                    (blur)=\"focus2 = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-check mt-3\">\n                <label class=\"form-check-label\">\n                  <input\n                    checked=\"checked\"\n                    class=\"form-check-input\"\n                    type=\"checkbox\"\n                  />\n\n                  <span class=\"form-check-sign\"> </span> Remember me!\n                </label>\n              </div>\n              <div class=\"text-center\">\n                <button class=\"btn btn-primary my-4\" type=\"button\">\n                  Sign in\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">World Charity</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "VT4h":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/pay/pay-donate.component.ts ***!
  \***************************************************************/
/*! exports provided: PayDonateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayDonateComponent", function() { return PayDonateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pay_donate_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pay-donate.component.html */ "hpoG");
/* harmony import */ var _pay_donate_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pay-donate.component.scss */ "4NCn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage-service */ "AY4b");
/* harmony import */ var _dialogs_success_pay_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogs/success-pay-dialog.component */ "uxmW");







var PayDonateComponent = /** @class */ (function () {
    function PayDonateComponent(storageSevrice, modalService) {
        this.storageSevrice = storageSevrice;
        this.modalService = modalService;
        this.showSuccess = false;
        this.showCancel = false;
        this.showError = false;
    }
    PayDonateComponent.prototype.ngOnInit = function () {
        this.defaultPrice = this.storageSevrice.getDefaultPrice();
        this.payPalConfig = this.initPayPalConfig(this.storageSevrice.getDefaultPrice());
    };
    PayDonateComponent.prototype.changePrice = function () {
        // this.resetStatus();
        console.log('>>>>>>>>>');
        if (this.priceElem) {
            this.payPalConfig = this.initPayPalConfig(this.defaultPrice);
        }
    };
    //PROD 
    //AaFVrgASF8iOOgVccacn5-bmeUmedPj_G2LCPvhRkuHBiWSIqdPLvmJ5y4Rccrk_4WuGeeLsLAyagypF
    PayDonateComponent.prototype.initPayPalConfig = function (price) {
        var _this = this;
        var config = {
            local: this.storageSevrice.getLocal(),
            intent: 'CAPTURE',
            currency: 'USD',
            clientId: 'AQ-coUWjorcLHWsXToyV4ZMsV2Ui7iwfWereajpmtImFKsREcR0eQB2pq-lxv1xmQK3okJiXwhOw96xZ',
            createOrderOnClient: function (data) { return ({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        // reference_id: this.getUniqueId(2),
                        amount: {
                            currency_code: 'USD',
                            value: price,
                            breakdown: {
                                item_total: {
                                    currency_code: 'USD',
                                    value: price
                                }
                            }
                        },
                        items: [
                            {
                                name: 'Charity Donation',
                                quantity: '1',
                                category: 'DIGITAL_GOODS',
                                unit_amount: {
                                    currency_code: 'USD',
                                    value: price,
                                },
                            }
                        ]
                    }
                ],
                application_context: {
                    shipping_preference: 'NO_SHIPPING'
                }
            }); },
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            onApprove: function (data, actions) {
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                // actions.order.get().then((details: any) => {
                //   console.log('onApprove - you can get full order details inside onApprove: ', details);
                // });
                return actions.order.capture().then(function (details) {
                    // alert('Transaction completed by ' + details.payer.name.given_name + '!');
                    // this.modalRef = this.modalService.show(SuccessPayDialogComponent);
                    // this.showSuccess = true;
                });
            },
            onClientAuthorization: function (data) {
                // this.showSuccess = true;
                _this.modalService.show(_dialogs_success_pay_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SuccessPayDialogComponent"]);
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            },
            onCancel: function (data, actions) {
                _this.showCancel = true;
                console.log('OnCancel', data, actions);
            },
            onError: function (err) {
                _this.showError = true;
            },
            onClick: function (data, actions) {
                _this.resetStatus();
            },
            onInit: function (data, actions) {
                console.log('onInit', data, actions);
                actions.enable();
            }
        };
        return config;
    };
    PayDonateComponent.prototype.resetStatus = function () {
        this.showCancel = false;
        this.showError = false;
        this.showSuccess = false;
    };
    PayDonateComponent.ctorParameters = function () { return [
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] }
    ]; };
    PayDonateComponent.propDecorators = {
        priceElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['priceElem',] }]
    };
    PayDonateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-pay-donate',
            template: _raw_loader_pay_donate_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_pay_donate_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], PayDonateComponent);
    return PayDonateComponent;
}());



/***/ }),

/***/ "Vs9a":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/registerpage/registerpage.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> World Charity </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> World Charity </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <div class=\"page-header-image\"></div>\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-md-6 offset-lg-0 offset-md-3\">\n            <div class=\"square square-7\" id=\"square7\"></div>\n            <div class=\"square square-8\" id=\"square8\"></div>\n            <div class=\"card card-register\">\n              <div class=\"card-header\">\n                <img\n                  alt=\"Card image\"\n                  class=\"card-img\"\n                  src=\"assets/img/square1-red.png\"\n                />\n\n                <h4 class=\"card-title\">Register</h4>\n              </div>\n              <div class=\"card-body\">\n                <form class=\"form\">\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-single-02\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Full Name\"\n                      type=\"text\"\n                      (focus)=\"focus = true\"\n                      (blur)=\"focus = false\"\n                    />\n                  </div>\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus1 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-email-85\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Email\"\n                      type=\"text\"\n                      (focus)=\"focus1 = true\"\n                      (blur)=\"focus1 = false\"\n                    />\n                  </div>\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus2 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-lock-circle\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Password\"\n                      type=\"text\"\n                      (focus)=\"focus2 = true\"\n                      (blur)=\"focus2 = false\"\n                    />\n                  </div>\n                  <div class=\"form-check text-left\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" />\n\n                      <span class=\"form-check-sign\"> </span> I agree to the\n                      <a href=\"javascript:void(0)\"> terms and conditions </a> .\n                    </label>\n                  </div>\n                </form>\n              </div>\n              <div class=\"card-footer\">\n                <a\n                  class=\"btn btn-danger btn-round btn-lg\"\n                  href=\"javascript:void(0)\"\n                >\n                  Get Started\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"register-bg\"></div>\n        <div class=\"square square-1\" id=\"square1\"></div>\n        <div class=\"square square-2\" id=\"square2\"></div>\n        <div class=\"square square-3\" id=\"square3\"></div>\n        <div class=\"square square-4\" id=\"square4\"></div>\n        <div class=\"square square-5\" id=\"square5\"></div>\n        <div class=\"square square-6\" id=\"square6\"></div>\n      </div>\n    </div>\n  </div>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">World Charity</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                // BsDropdownModule.forRoot(),
                // ProgressbarModule.forRoot(),
                // TooltipModule.forRoot(),
                // CollapseModule.forRoot(),
                // TabsModule.forRoot(),
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__["PagesModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/alert */ "psEu");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "yyhP");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var _shared_components_pay_pay_donate_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/components/pay/pay-donate.module */ "wF3H");
/* harmony import */ var _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/landingpage/landingpage.component */ "IfWR");
/* harmony import */ var _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./examples/profilepage/profilepage.component */ "F149");
/* harmony import */ var _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./examples/registerpage/registerpage.component */ "r5Xs");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./index/index.component */ "sqmE");























var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_14__["PopoverModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__["AlertModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(),
                _shared_components_pay_pay_donate_module__WEBPACK_IMPORTED_MODULE_18__["PayDonateModule"]
            ],
            declarations: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_22__["IndexComponent"],
                _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_20__["ProfilepageComponent"],
                _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_21__["RegisterpageComponent"],
                _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_19__["LandingpageComponent"]
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_22__["IndexComponent"],
                _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_20__["ProfilepageComponent"],
                _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_21__["RegisterpageComponent"],
                _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_19__["LandingpageComponent"]
            ],
            providers: []
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "f0F0":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/paypal/components/paypal.component.ts ***!
  \*************************************************************************/
/*! exports provided: NgxPaypalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaypalComponent", function() { return NgxPaypalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_paypal_script_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/paypal-script.service */ "ha/q");




var NgxPaypalComponent = /** @class */ (function () {
    function NgxPaypalComponent(paypalScriptService, cdr, ngZone) {
        this.paypalScriptService = paypalScriptService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        /**
         * If enabled, paypal SDK script will be loaded. Useful if you want to have multiple PayPal components on the same page
         * sharing base configuration. In such a case only a single component may register script.
         */
        this.registerScript = true;
        /**
         * Emitted when paypal script is loaded
         */
        this.scriptLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Flag that indicates if paypal should be initialized (required for handling script load events and availability of DOM element)
         */
        this.initializePayPal = true;
    }
    Object.defineProperty(NgxPaypalComponent.prototype, "payPalButtonContainer", {
        set: function (content) {
            this.payPalButtonContainerElem = content;
        },
        enumerable: false,
        configurable: true
    });
    NgxPaypalComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!this.payPalButtonContainerId) {
            this.payPalButtonContainerId = this.generateElementId();
        }
        // first time config setup
        var config = this.config;
        if (changes.config.isFirstChange()) {
            if (config && this.registerScript) {
                this.initPayPalScript(config, function (payPal) {
                    // store reference to paypal global script
                    _this.payPal = payPal;
                    _this.doPayPalCheck();
                });
            }
        }
        // changes to config
        if (!changes.config.isFirstChange()) {
            this.reinitialize(config);
        }
    };
    NgxPaypalComponent.prototype.ngOnDestroy = function () {
        this.paypalScriptService.destroyPayPalScript();
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    NgxPaypalComponent.prototype.ngAfterViewInit = function () {
        this.doPayPalCheck();
    };
    NgxPaypalComponent.prototype.customInit = function (payPal) {
        this.payPal = payPal;
        this.doPayPalCheck();
    };
    NgxPaypalComponent.prototype.reinitialize = function (config) {
        var _this = this;
        this.config = config;
        this.payPal = undefined;
        this.paypalScriptService.destroyPayPalScript();
        this.payPalButtonContainerId = this.generateElementId();
        this.initializePayPal = true;
        this.cdr.detectChanges();
        if (this.config) {
            if (!this.payPal) {
                this.initPayPalScript(this.config, function (payPal) {
                    // store reference to paypal global script
                    _this.payPal = payPal;
                    _this.doPayPalCheck();
                });
            }
            else {
                this.doPayPalCheck();
            }
        }
        if (this.payPalButtonContainerElem &&
            this.payPalButtonContainerElem.nativeElement && this.payPalButtonContainerElem.nativeElement.firstChild &&
            this.payPalButtonContainerElem.nativeElement.contains(this.payPalButtonContainerElem.nativeElement.firstChild)
            && this.payPalButtonContainerElem.nativeElement.childElementCount == 2) {
            try {
                this.payPalButtonContainerElem.nativeElement.removeChild(this.payPalButtonContainerElem.nativeElement.firstChild);
            }
            catch (e) { }
        }
    };
    NgxPaypalComponent.prototype.doPayPalCheck = function () {
        if (this.initializePayPal && this.config && this.payPal && this.payPalButtonContainerElem) {
            // make sure that id is also set
            if (this.payPalButtonContainerElem.nativeElement.id) {
                this.initializePayPal = false;
                this.initPayPal(this.config, this.payPal);
            }
        }
    };
    NgxPaypalComponent.prototype.initPayPalScript = function (config, initPayPal) {
        var _this = this;
        this.paypalScriptService.registerPayPalScript({
            clientId: config.clientId,
            commit: config.advanced && config.advanced.commit ? config.advanced.commit : undefined,
            currency: config.currency,
            vault: config.vault,
            extraParams: config.advanced && config.advanced.extraQueryParams ? config.advanced.extraQueryParams : [],
            intent: config.intent,
            local: config.local,
        }, function (paypal) {
            _this.scriptLoaded.next(paypal);
            initPayPal(paypal);
        });
    };
    NgxPaypalComponent.prototype.generateElementId = function () {
        return "ngx-captcha-id-" + new Date().valueOf();
    };
    NgxPaypalComponent.prototype.initPayPal = function (config, paypal) {
        var _this = this;
        // Running outside angular zone prevents infinite ngDoCheck lifecycle calls
        this.ngZone.runOutsideAngular(function () {
            // https://developer.paypal.com/docs/checkout/integrate/#2-add-the-paypal-script-to-your-web-page
            var createOrder = function (data, actions) {
                return _this.ngZone.run(function () {
                    if (config.createOrderOnClient && config.createOrderOnServer) {
                        throw Error("Both 'createOrderOnClient' and 'createOrderOnServer' are defined.\n                    Please choose one or the other.");
                    }
                    if (!config.createOrderOnClient && !config.createOrderOnServer) {
                        throw Error("Neither 'createOrderOnClient' or 'createOrderOnServer' are defined.\n                    Please define one of these to create order.");
                    }
                    if (config.createOrderOnClient) {
                        return actions.order.create(config.createOrderOnClient(data));
                    }
                    if (config.createOrderOnServer) {
                        return config.createOrderOnServer(data);
                    }
                    throw Error("Invalid state for 'createOrder'.");
                });
            };
            var createSubscription = function (data, actions) {
                return _this.ngZone.run(function () {
                    if (config.createSubscription) {
                        return config.createSubscription(data, actions);
                    }
                });
            };
            var onShippingChange = function (data, actions) {
                return _this.ngZone.run(function () {
                    if (config.onShippingChange) {
                        return config.onShippingChange(data, actions);
                    }
                });
            };
            var buttonsConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ style: config.style, onApprove: function (data, actions) {
                    return _this.ngZone.run(function () {
                        if (config.onApprove) {
                            config.onApprove(data, actions);
                        }
                        // capture on server
                        if (config.authorizeOnServer) {
                            return config.authorizeOnServer(data, actions);
                        }
                        // capture on client
                        var onClientAuthorization = config.onClientAuthorization;
                        if (onClientAuthorization) {
                            actions.order.capture().then(function (details) {
                                _this.ngZone.run(function () {
                                    onClientAuthorization(details);
                                });
                            });
                            return;
                        }
                    });
                }, onError: function (error) {
                    _this.ngZone.run(function () {
                        if (config.onError) {
                            config.onError(error);
                        }
                    });
                }, onCancel: function (data, actions) {
                    _this.ngZone.run(function () {
                        if (config.onCancel) {
                            config.onCancel(data, actions);
                        }
                    });
                }, onClick: function (data, actions) {
                    _this.ngZone.run(function () {
                        if (config.onClick) {
                            config.onClick(data, actions);
                        }
                    });
                }, onInit: function (data, actions) {
                    _this.ngZone.run(function () {
                        if (config.onInit) {
                            config.onInit(data, actions);
                        }
                    });
                } }, ((config.createOrderOnClient || config.createOrderOnServer) && { createOrder: createOrder })), (config.createSubscription && { createSubscription: createSubscription })), (config.onShippingChange && { onShippingChange: onShippingChange }));
            paypal.Buttons(buttonsConfig).render("#" + _this.payPalButtonContainerId);
        });
    };
    NgxPaypalComponent.ctorParameters = function () { return [
        { type: _services_paypal_script_service__WEBPACK_IMPORTED_MODULE_3__["PayPalScriptService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    NgxPaypalComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        registerScript: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        scriptLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        payPalButtonContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['payPalButtonContainer', { static: false },] }]
    };
    NgxPaypalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            selector: 'ngx-paypal',
            template: "\n    <div #payPalButtonContainer [id]=\"payPalButtonContainerId\"></div>\n    "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_paypal_script_service__WEBPACK_IMPORTED_MODULE_3__["PayPalScriptService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], NgxPaypalComponent);
    return NgxPaypalComponent;
}());



/***/ }),

/***/ "fUep":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pay/dialogs/success-pay-dialog.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header justify-content-center\">\n  <button\n    aria-hidden=\"true\"\n    class=\"close\"\n    data-dismiss=\"modal\"\n    type=\"button\"\n  >\n    <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n  </button>\n  <div class=\"modal-profile\">\n    <i class=\"tim-icons icon-single-02\"> </i>\n  </div>\n</div>\n<div class=\"modal-body\">\n  <p>Always have an access to your profile</p>\n</div>\n<div class=\"modal-footer\">\n  <button class=\"btn btn-link btn-neutral\" type=\"button\">Back</button>\n  <button\n    class=\"btn btn-link btn-neutral\"\n    data-dismiss=\"modal\"\n    type=\"button\"\n  >\n    Close\n  </button>\n</div>\n");

/***/ }),

/***/ "ha/q":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/paypal/services/paypal-script.service.ts ***!
  \****************************************************************************/
/*! exports provided: PayPalScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalScriptService", function() { return PayPalScriptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _script_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script.service */ "CB8Y");



var PayPalScriptService = /** @class */ (function () {
    function PayPalScriptService(scriptService) {
        this.scriptService = scriptService;
        this.paypalWindowName = 'paypal';
    }
    PayPalScriptService.prototype.registerPayPalScript = function (config, onReady) {
        this.scriptService.registerScript(this.getUrlForConfig(config), this.paypalWindowName, onReady);
    };
    PayPalScriptService.prototype.destroyPayPalScript = function () {
        this.scriptService.cleanup(this.paypalWindowName);
    };
    PayPalScriptService.prototype.getUrlForConfig = function (config) {
        var params = [
            {
                name: 'client-id',
                value: config.clientId
            }
        ];
        // if (config.local) {
        //     params.push({
        //         name: 'local',
        //         value: config.local
        //     });
        // }
        if (config.currency) {
            params.push({
                name: 'currency',
                value: config.currency
            });
        }
        if (config.commit) {
            params.push({
                name: 'commit',
                value: config.commit
            });
        }
        if (config.vault) {
            params.push({
                name: 'vault',
                value: config.vault
            });
        }
        if (config.extraParams) {
            params.push.apply(params, config.extraParams);
        }
        return "https://www.paypal.com/sdk/js" + this.getQueryString(params) + "&locale=" + config.local;
    };
    PayPalScriptService.prototype.getQueryString = function (queryParams) {
        var queryString = '';
        for (var i = 0; i < queryParams.length; i++) {
            var queryParam = queryParams[i];
            if (i === 0) {
                queryString += '?';
            }
            else {
                queryString += '&';
            }
            queryString += queryParam.name + "=" + queryParam.value;
        }
        return queryString;
    };
    PayPalScriptService.ctorParameters = function () { return [
        { type: _script_service__WEBPACK_IMPORTED_MODULE_2__["ScriptService"] }
    ]; };
    PayPalScriptService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_script_service__WEBPACK_IMPORTED_MODULE_2__["ScriptService"]])
    ], PayPalScriptService);
    return PayPalScriptService;
}());



/***/ }),

/***/ "hpoG":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pay/pay-donate.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-register\">\n  <div class=\"card-header\">\n    <img alt=\"Card image\" class=\"card-img\" src=\"assets/img/square1-red.png\" />\n\n    <h4 class=\"card-title\">Donate</h4>\n  </div>\n  <div class=\"card-body\">\n\n    <div class=\"mt-2\" *ngIf=\"showSuccess\">\n      <div class=\"alert alert-success mt-2\">\n        Yeah! Your <em>sandbox</em> transaction was successful.\n      </div>\n    </div>\n    \n    <div class=\"mt-2\" *ngIf=\"showError\">\n      <div class=\"alert alert-danger mt-2\">\n        Oh no! Your <em>sandbox</em> transaction failed.\n      </div>\n    </div>\n    \n    <div class=\"mt-2\" *ngIf=\"showCancel\">\n      <div class=\"alert alert-info mt-2\">Your transaction was cancelled.</div>\n    </div>\n    \n    <form class=\"form\" name=\"form\" #f=\"ngForm\">\n      <div\n        class=\"input-group\"\n        [ngClass]=\"{ 'input-group-focus': focus === true }\"\n      >\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n            <i class=\"tim-icons icon-money-coins\"> </i>\n          </div>\n        </div>\n        <input\n          class=\"form-control\"\n          placeholder=\"Price\"\n          name=\"defaultPrice\"\n          [(ngModel)]=\"defaultPrice\"\n          (ngModelChange)=\"changePrice()\"\n          type=\"text\"\n          #priceElem\n          (focus)=\"focus = true\"\n          (blur)=\"focus = false\"\n        />\n        <button\n          class=\"btn btn-primary btn-sm input-group-prepend\"\n          (click)=\"changePrice()\"\n        >\n          amount\n        </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"card-footer\">\n    <ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>\n  </div>\n</div>\n");

/***/ }),

/***/ "r5Xs":
/*!***********************************************************************!*\
  !*** ./src/app/pages/examples/registerpage/registerpage.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterpageComponent", function() { return RegisterpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registerpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registerpage.component.html */ "Vs9a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var RegisterpageComponent = /** @class */ (function () {
    function RegisterpageComponent() {
        this.isCollapsed = true;
    }
    RegisterpageComponent.prototype.onMouseMove = function (e) {
        var squares1 = document.getElementById("square1");
        var squares2 = document.getElementById("square2");
        var squares3 = document.getElementById("square3");
        var squares4 = document.getElementById("square4");
        var squares5 = document.getElementById("square5");
        var squares6 = document.getElementById("square6");
        var squares7 = document.getElementById("square7");
        var squares8 = document.getElementById("square8");
        var posX = e.clientX - window.innerWidth / 2;
        var posY = e.clientY - window.innerWidth / 6;
        squares1.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares2.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares3.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares4.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares5.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares6.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares7.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
        squares8.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
    };
    RegisterpageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("register-page");
        this.onMouseMove(event);
    };
    RegisterpageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("register-page");
    };
    RegisterpageComponent.ctorParameters = function () { return []; };
    RegisterpageComponent.propDecorators = {
        onMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ["document:mousemove", ["$event"],] }]
    };
    RegisterpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-registerpage",
            template: _raw_loader_registerpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], RegisterpageComponent);
    return RegisterpageComponent;
}());



/***/ }),

/***/ "sqmE":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index.component.html */ "V/Tm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nouislider */ "6foH");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_3__);




var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        this.isCollapsed = true;
        this.date = new Date();
        this.pagination = 3;
        this.pagination1 = 1;
    }
    IndexComponent.prototype.scrollToDownload = function (element) {
        element.scrollIntoView({ behavior: "smooth" });
    };
    IndexComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("index-page");
        var slider = document.getElementById("sliderRegular");
        nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(slider, {
            start: 40,
            connect: false,
            range: {
                min: 0,
                max: 100
            }
        });
        var slider2 = document.getElementById("sliderDouble");
        nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
    };
    IndexComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("index-page");
    };
    IndexComponent.ctorParameters = function () { return []; };
    IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-index",
            template: _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "t9Ex":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/paypal/ngx-paypal.module.ts ***!
  \***************************************************************/
/*! exports provided: NgxPayPalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPayPalModule", function() { return NgxPayPalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_paypal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/paypal.component */ "f0F0");
/* harmony import */ var _services_script_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/script.service */ "CB8Y");
/* harmony import */ var _services_paypal_script_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/paypal-script.service */ "ha/q");






var NgxPayPalModule = /** @class */ (function () {
    function NgxPayPalModule() {
    }
    NgxPayPalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _components_paypal_component__WEBPACK_IMPORTED_MODULE_3__["NgxPaypalComponent"],
            ],
            exports: [
                _components_paypal_component__WEBPACK_IMPORTED_MODULE_3__["NgxPaypalComponent"],
            ],
            providers: [
                _services_script_service__WEBPACK_IMPORTED_MODULE_4__["ScriptService"],
                _services_paypal_script_service__WEBPACK_IMPORTED_MODULE_5__["PayPalScriptService"]
            ]
        })
    ], NgxPayPalModule);
    return NgxPayPalModule;
}());



/***/ }),

/***/ "uxmW":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/pay/dialogs/success-pay-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SuccessPayDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPayDialogComponent", function() { return SuccessPayDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_success_pay_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./success-pay-dialog.component.html */ "fUep");
/* harmony import */ var _success_pay_dialog_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success-pay-dialog.component.scss */ "LOzy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var SuccessPayDialogComponent = /** @class */ (function () {
    function SuccessPayDialogComponent() {
    }
    SuccessPayDialogComponent.prototype.ngOnInit = function () {
        console.log('SUUUUUUUUCSS');
    };
    SuccessPayDialogComponent.ctorParameters = function () { return []; };
    SuccessPayDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-success-pay-dialog',
            template: _raw_loader_success_pay_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_success_pay_dialog_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SuccessPayDialogComponent);
    return SuccessPayDialogComponent;
}());



/***/ }),

/***/ "vKDV":
/*!****************************************************!*\
  !*** ./src/app/shared/services/ip-info.service.ts ***!
  \****************************************************/
/*! exports provided: IpInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpInfoService", function() { return IpInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var IpInfoService = /** @class */ (function () {
    function IpInfoService(http) {
        this.http = http;
    }
    // Uses http.get() to load data from a single API endpoint
    IpInfoService.prototype.getIpInfo = function () {
        return this.http.get('https://ipinfo.io/json');
    };
    IpInfoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    IpInfoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IpInfoService);
    return IpInfoService;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index.component */ "sqmE");
/* harmony import */ var _pages_examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/examples/profilepage/profilepage.component */ "F149");
/* harmony import */ var _pages_examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/examples/registerpage/registerpage.component */ "r5Xs");
/* harmony import */ var _pages_examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/examples/landingpage/landingpage.component */ "IfWR");









var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"] },
    { path: "profile", component: _pages_examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_6__["ProfilepageComponent"] },
    { path: "register", component: _pages_examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_7__["RegisterpageComponent"] },
    { path: "landing", component: _pages_examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_8__["LandingpageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "wF3H":
/*!************************************************************!*\
  !*** ./src/app/shared/components/pay/pay-donate.module.ts ***!
  \************************************************************/
/*! exports provided: PayDonateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayDonateModule", function() { return PayDonateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pay_donate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pay-donate.component */ "VT4h");
/* harmony import */ var _paypal_ngx_paypal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../paypal/ngx-paypal.module */ "t9Ex");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _dialogs_success_pay_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogs/success-pay-dialog.component */ "uxmW");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");








var PayDonateModule = /** @class */ (function () {
    function PayDonateModule() {
    }
    PayDonateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pay_donate_component__WEBPACK_IMPORTED_MODULE_3__["PayDonateComponent"], _dialogs_success_pay_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SuccessPayDialogComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                _paypal_ngx_paypal_module__WEBPACK_IMPORTED_MODULE_4__["NgxPayPalModule"]
            ],
            exports: [
                _pay_donate_component__WEBPACK_IMPORTED_MODULE_3__["PayDonateComponent"], _dialogs_success_pay_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SuccessPayDialogComponent"]
            ]
        })
    ], PayDonateModule);
    return PayDonateModule;
}());



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*
=========================================================
* BLK Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map