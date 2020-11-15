(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/ads/ads.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/ads/ads.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <vg-player>\n        <video #myMedia\n               [vgMedia]=\"myMedia\"\n               id=\"my-video\"\n               src=\"http://familymedia.orione.cf/api/img/videos/12345.mp4\"\n               type=\"video/mp4\">\n        </video>\n    </vg-player> -->\n    <vg-player (onPlayerReady)=\"onPlayerReady($event)\">              \n        \n            <vg-controls>             \n        \n                <vg-fullscreen></vg-fullscreen>\n            </vg-controls>\n        \n            <video #media [vgMedia]=\"media\" id=\"singleVideo\" preload=\"auto\" crossorigin autoplay=\"true\">\n                <source [src]=\"src\" type=\"video/mp4\">             \n            </video>\n        </vg-player>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/account/account.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/dashboard/pages/account/account.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2\">\n    <app-navbar></app-navbar>\n  </div>\n  <div class=\"col-sm-10\">\n    <section>\n      <div class=\"container\">\n        <div class=\"d-flex flex-row\">\n          <!-- <app-navbar [menu]=\"menu\"></app-navbar> -->\n          <div class=\"container\">\n            <div class=\"row mt-3\">\n              <div class=\"col-6\">\n                <h3 class=\"h3 white-text\">Perfil de Usuario</h3>\n              </div>\n              <div class=\"col-6\">\n                <img src=\"assets/img/logo.png\" alt=\"\" width=\"300px;\">\n              </div>\n            </div>\n            <div class=\"row mt-5\">\n              <div class=\"col-md-12\">\n                <!-- Extended default form grid -->\n                <form (ngSubmit)=\"actualizar()\" ngNativeValidate>\n                  <!-- Grid row -->\n                  <div class=\"form-row\">\n                    <!-- Default input -->\n                    <div class=\"form-group col-md-4\">\n                      <label class=\"white-text h5\">Nombre</label>\n                      <input tabindex=\"0\" mdbInput type=\"text\" class=\"form-control\" placeholder=\"nombre\"\n                        [(ngModel)]=\"usuario.name\" name=\"name\">\n\n                    </div>\n                    <!-- Default input -->\n                    <div class=\"form-group col-md-4\">\n                      <label class=\"white-text h5\">Apellido</label>\n                      <input tabindex=\"0\" mdbInput type=\"text\" class=\"form-control\" placeholder=\"apellido\"\n                        [(ngModel)]=\"usuario.surname\" name=\"surname\">\n\n                    </div>\n                    <div class=\"form-group col-md-4\">\n                      <label class=\"white-text h5\">Email</label>\n                      <input tabindex=\"0\" mdbInput type=\"text\" class=\"form-control\" placeholder=\"email\"\n                        [(ngModel)]=\"usuario.email\" name=\"email\">\n                    </div>\n                  </div>\n                  <!-- Grid row -->\n                  <!-- Grid row -->\n                  <div class=\"form-row\">\n                    <!-- Default input -->\n                    <div class=\"form-group col-md-4\">\n                      <label class=\"white-text h5\">Telefono</label>\n                      <input tabindex=\"0\" mdbInput type=\"text\" class=\"form-control\" placeholder=\"Telefono\"\n                        [(ngModel)]=\"usuario.telefono\" name=\"telefono\">\n                    </div>\n                    <!-- Default input -->\n                    <div class=\"form-group col-md-4\">\n                      <label class=\"white-text h5\">Fecha de nacimiento</label>\n                      <input tabindex=\"0\" mdbInput type=\"date\" class=\"form-control\" placeholder=\"fecha\"\n                        [(ngModel)]=\"usuario.fecha\" name=\"fecha\">\n                    </div>\n                    <!-- Default input -->\n                    <div class=\"form-group col-md-4\">\n                      <label class=\"white-text h5\">Telefono 2 Opcional</label>\n                      <input tabindex=\"0\" mdbInput type=\"text\" class=\"form-control\" placeholder=\"Telefono\"\n                        [(ngModel)]=\"usuario.telefono2\" name=\"telefono2\">\n                    </div>\n                  </div>\n                  <!-- Grid row -->\n                  <!-- Grid row -->\n                  <div class=\"form-row\">\n                    <!-- Default input -->\n                    <div class=\"form-group col-md-4\">\n                      <label class=\"white-text h5\">Direccion</label>\n                      <input tabindex=\"0\" mdbInput type=\"text\" class=\"form-control\" placeholder=\"Direccion\"\n                        [(ngModel)]=\"usuario.direccion\" name=\"direccion\">\n\n                    </div>\n                    <!-- Default input -->\n                    <div class=\"form-group col-md-4\">\n                      <label class=\"white-text h5\">Direccion 2 (Opcional)</label>\n                      <input tabindex=\"0\" mdbInput type=\"text\" class=\"form-control\" id=\"inputAddress2\"\n                        placeholder=\"Direccion Opcional\" [(ngModel)]=\"usuario.direccion2\" name=\"direccion2\">\n                    </div>\n                    <!-- Default input -->\n                    <div class=\"form-group col-md-4\">\n                      <label class=\"white-text h5\">Pais</label>\n                      <input tabindex=\"0\" mdbInput type=\"text\" class=\"form-control\" id=\"inputCity\" placeholder=\"Pais\"\n                        [(ngModel)]=\"usuario.pais\" name=\"pais\">\n                    </div>\n                  </div>\n                  <!-- Grid row -->\n\n\n                  <!-- Grid row -->\n                  <div class=\"form-row\">\n\n                    <!-- Default input -->\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"white-text h5\">Ciudad</label>\n                      <input tabindex=\"0\" mdbInput type=\"text\" class=\"form-control\" id=\"inputZip\" placeholder=\"Ciudad\"\n                        [(ngModel)]=\"usuario.ciudad\" name=\"ciudad\">\n                    </div>\n                      <!-- Default input -->\n                      <div class=\"form-group col-md-6\">\n                          <label class=\"white-text h5\">Codigo Postal</label>\n                          <input tabindex=\"0\" mdbInput type=\"text\" class=\"form-control\" id=\"inputCity\"\n                            placeholder=\"Codigo Postal\" [(ngModel)]=\"usuario.zip\" name=\"zip\">\n                      </div>\n                        <!-- Default input -->\n                  </div>\n                  <!-- Grid row -->\n                 \n                  <button tabindex=\"0\" type=\"submit\" block=\"true\" mdbBtn color=\"success\" mdbWavesEffect>Success</button>\n                </form>\n                <!-- Extended default form grid -->\n\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n    </section>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/alquileres/alquileres.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/dashboard/pages/alquileres/alquileres.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-5\" *ngIf=\"items.length > 0\">\n    <h3 class=\"white-text\">{{categoria.categoria}}</h3>\n    <div class=\"d-flex flex-row\">\n      <div class=\"d-flex flex-row flex-wrap\">\n          <div class=\"card\" style=\"width: 15vw;margin-right: 30px;\" *ngFor=\"let v of items\" (click)=\"openload(v.id_producto)\" tabindex=\"0\">\n              <img [src]=\"v.imagen | imagen:'videos'\"  class=\"img-fluid\" height=\"150\" alt=\"...\">      \n              <div class=\"card-body\">\n                <h5 class=\"h5-responsive text-center\">\n                  {{v.name}}\n                </h5>            \n              </div>\n            </div>    \n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/carrito/carrito.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/dashboard/pages/carrito/carrito.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mdbModal #basicmodal=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm modal-info modal-notify\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Preparando tu compra</h4>\n      </div>\n      <div class=\"modal-body text-center\">\n        <div class=\"spinner-border text-success\" style=\"width: 3rem; height: 3rem;\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-2\">\n    <app-navbar></app-navbar>\n  </div>\n  <div class=\"col-sm-10\">\n    <section>\n      <div class=\"container-fluid\">\n\n        <div class=\"columna-2 ml-2\" *ngIf=\"!compra_preparada\">\n          <div class=\"d-flex flex-column flex-wrap\">\n            <div class=\"container\">\n              <table id=\"cart\" class=\"table table-hover table-condensed\">\n                <thead>\n                  <tr class=\"white-text\">\n                    <th style=\"width:50%\">Product</th>\n                    <th style=\"width:10%\">Price</th>\n                    <th style=\"width:10%\">Quantity</th>\n                    <th style=\"width:20%\" class=\"text-center\">Subtotal</th>\n                    <th style=\"width:10%\"></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let p of productos\">\n                    <td data-th=\"Product\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-2\" *ngIf=\"p.tipo == 1\">\n                          <img [src]=\"p.imagen | imagen:'videos' \" alt=\"...\" height=\"100\" width=\"100\" />\n                        </div>\n                        <div class=\"col-sm-2\" *ngIf=\"p.tipo == 2\">\n                          <img [src]=\"p.imagen | imagen:'tienda' \" alt=\"...\" height=\"100\" width=\"100\" />\n                        </div>\n                        <div class=\"col-sm-10\">\n                          <h4 class=\"ml-3 h4 white-text\">{{p.name}}</h4>\n                        </div>\n                      </div>\n                    </td>\n                    <td data-th=\"Price\" class=\"white-text\">{{p.precio | currency:'COP'}}</td>\n                    <td data-th=\"Quantity\">\n                      <select class=\"browser-default custom-select\" (change)='cambiar($event,p.id,p.precio,p.name)'\n                        [(ngModel)]=\"p.cantidad\" tabindex=\"0\">\n                        <option value=\"0\">0</option>\n                        <option value=\"1\">1</option>\n                        <option value=\"2\">2</option>\n                        <option value=\"3\">3</option>\n                        <option value=\"4\">4</option>\n                        <option value=\"5\">5</option>\n                        <option value=\"6\">6</option>\n                      </select>\n\n                    </td>\n                    <td data-th=\"Subtotal\" class=\"text-center white-text\">{{p.cantidad*p.precio | currency:'COP'}}</td>\n                    <td class=\"actions\" data-th=\"\">\n                      <button mdbBtn type=\"button\" color=\"danger\" (click)=\"eliminarproducto(p.id)\"\n                        mdbWavesEffect>eliminar</button>\n                    </td>\n                  </tr>\n                </tbody>\n                <tfoot>\n                  <tr>\n                    <td colspan=\"3\" class=\"hidden-xs\"></td>\n                    <td class=\"hidden-xs text-center white-text\"><strong>\n                        {{total | currency}}\n                        <!-- <input type=\"number\" [(ngModel)]=\"total\" class=\"form-control text-center\" > -->\n                      </strong></td>\n                  </tr>\n                  <tr>\n                    <button *ngIf=\"!total==0\" type=\"button\" class=\"btn btn-default\"\n                      (click)=\"confirmPayment()\">Confirm</button>\n                  </tr>\n                  <!-- <tr> \n                              <td colspan=\"5\">                   \n                                    <form ngNoForm action=\"https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu\" name=\"payuform\" method=\"POST\" target=\"payment_popup\"  onsubmit=\"window.open('about:blank','payment_popup','width=900,height=800');\">\n                                      <input name=\"merchantId\"    type=\"hidden\"  value=\"508029\"   >\n                                      <input name=\"accountId\"     type=\"hidden\"  value=\"512321\" >\n                                      <input name=\"description\"   type=\"hidden\"  value=\"Test PAYU\"  >\n                                      <input name=\"referenceCode\" type=\"hidden\"  value=\"TestPayU\" >\n                                      <input name=\"amount\"        type=\"hidden\"  value=\"20000\"   >\n                                      <input name=\"tax\"           type=\"hidden\"  value=\"3193\"  >\n                                      <input name=\"taxReturnBase\" type=\"hidden\"  value=\"16806\" >\n                                      <input name=\"currency\"      type=\"hidden\"  value=\"COP\" >\n                                      <input name=\"signature\"     type=\"hidden\"  value=\"7ee7cf808ce6a39b17481c54f2c57acc\"  >\n                                      <input name=\"test\"          type=\"hidden\"  value=\"1\" >\n                                      <input name=\"buyerEmail\"    type=\"hidden\"  value=\"test@test.com\" >\n                                      <input name=\"responseUrl\"    type=\"hidden\" value=\"https://familytvbox.herokuapp.com/#/confirmation\" >\n                                      <input name=\"confirmationUrl\"    type=\"hidden\"  value=\"https://familytvbox.herokuapp.com/api/pagos\" >\n                                      <input name=\"Submit\"  mdbBtn type=\"submit\" block=\"true\" color=\"success\" mdbWavesEffect   value=\"Pagar\" >\n                                    </form>\n                                  </td>     \n                            </tr> -->\n                </tfoot>\n              </table>\n            </div>\n\n          </div>\n        </div>\n\n\n        <div class=\"container\" *ngIf=\"compra_preparada\">\n\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"text-center\">\n                <h3 class=\"h3 white-text\">Datos del Comprador</h3>\n              </div>\n              <div class=\"white-text\">\n                <h4>Nombre: {{usuario.name}}</h4>\n                <h4>Apellido: {{usuario.surname}}</h4>\n                <h4>Email: {{usuario.email}}</h4>\n                <h4>Telefono: {{usuario.telefono}}</h4>\n                <h4>Pais: {{usuario.pais}}</h4>\n                <h4>Ciudad: {{usuario.ciudad}}</h4>\n                <h4>Direccion: {{usuario.direccion}}</h4>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"text-center\">\n                <h3 class=\"h3 white-text\">Resumen del Pedido</h3>\n              </div>\n              <div class=\"white-text\">\n                <table mdbTable small=\"true\">\n                  <thead>\n                    <tr class=\"white-text text-center\">\n                      <th scope=\"col\">Producto</th>\n                      <th>Cantidad</th>\n                      <th>Subtotal</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr mdbTableCol *ngFor=\"let p of datos_compra.productos\" class=\"white-text text-center\">\n                      <th scope=\"row\">{{p.name}}</th>\n                      <td>{{p.cantidad}}</td>\n                      <td>{{p.subtotal}}</td>\n                    </tr>\n                  </tbody>\n                  <tfoot class=\"mt-3\">\n                    <tr class=\"white-text\">\n                      <td colspan=\"2\" class=\"text-right\">Total</td>\n                      <td class=\"text-center\">{{datos_compra.amount}}</td>\n                    </tr>\n                  </tfoot>\n                </table>\n\n              </div>\n\n\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <form ngNoForm action=\"https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu\" #payment name=\"payment\"\n              method=\"POST\" target=\"payment_popup\">\n              <input type=\"text\" name=\"merchantId\" #merchantId=\"ngModel\" [(ngModel)]=\"paymentPayload['merchantId']\"\n                hidden>\n              <input type=\"text\" name=\"accountId\" #accountId=\"ngModel\" [(ngModel)]=\"paymentPayload['accountId']\" hidden>\n              <input type=\"text\" name=\"referenceCode\" #referenceCode=\"ngModel\"\n                [(ngModel)]=\"paymentPayload['referenceCode']\" hidden>\n              <input type=\"text\" name=\"signature\" #signature=\"ngModel\" [(ngModel)]=\"paymentPayload['signature']\" hidden>\n              <input type=\"text\" name=\"tax\" #tax=\"ngModel\" [(ngModel)]=\"paymentPayload['tax']\" hidden>\n              <input type=\"text\" name=\"taxReturnBase\" #taxReturnBase=\"ngModel\"\n                [(ngModel)]=\"paymentPayload['taxReturnBase']\" hidden>\n              <input type=\"text\" name=\"amount\" #amount=\"ngModel\" [(ngModel)]=\"paymentPayload['amount']\" hidden>\n              <input type=\"text\" name=\"buyerEmail\" #buyerEmail=\"ngModel\" [(ngModel)]=\"paymentPayload['buyerEmail']\"\n                hidden>\n              <input type=\"text\" name=\"currency\" #currency=\"ngModel\" [(ngModel)]=\"paymentPayload['currency']\" hidden>\n              <input type=\"text\" name=\"confirmationUrl\" #confirmationUrl=\"ngModel\"\n                [(ngModel)]=\"paymentPayload['confirmationUrl']\" hidden>\n              <input type=\"text\" name=\"responseUrl\" #responseUrl=\"ngModel\" [(ngModel)]=\"paymentPayload['responseUrl']\"\n                hidden>\n              <input type=\"text\" name=\"description\" #description=\"ngModel\" [(ngModel)]=\"paymentPayload['description']\"\n                hidden>\n              <input type=\"text\" name=\"test\" #test=\"ngModel\" [(ngModel)]=\"paymentPayload['test']\" hidden>\n              <button type=\"submit\" class=\"btn btn-danger\" (click)=\"direccionar(); payment.submit()\">Pagar</button>\n            </form>\n\n\n          </div>\n\n\n        </div>\n\n\n      </div>\n\n    </section>\n\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/dash/dashboard.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/dashboard/pages/dash/dashboard.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fondo\">\n        <mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark\">\n\n                <!-- Navbar brand -->\n                <mdb-navbar-brand><a class=\"navbar-brand\">\n                        <img [src]=\"logo | imagen:'app'\" class=\"logo\" alt=\"\">\n                </a></mdb-navbar-brand>\n            \n                <!-- Collapsible content -->\n                <links>\n            \n                    <!-- Links -->\n                    <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                    <a class=\"nav-link waves-light\" [routerLink]=\"[ '/principal/home' ]\" routerLinkActive=\"active\" mdbWavesEffect>\n                                        <mdb-icon fas icon=\"home\"  class=\"text-white pr-1\" aria-hidden=\"true\" size=\"2x\"></mdb-icon>             \n                                    </a>                  \n                            </li>\n                \n                        <li class=\"nav-item\">\n                                <a class=\"nav-link mr-4\" [routerLink]=\"[ '/principal/carro' ]\" routerLinkActive=\"active\">\n                                    <mdb-icon fas icon=\"shopping-cart\" class=\"text-white pr-1\" aria-hidden=\"true\" size=\"2x\"></mdb-icon>          \n                                    <span class=\"badge badge-light\">{{contador}}</span>\n                                   <span class=\"sr-only\">unread messages</span>\n                                </a>\n                        </li>\n                        <li class=\"nav-item\">\n                                <a class=\"nav-link\" [routerLink]=\"[ '/principal/account' ]\" routerLinkActive=\"active\">\n                                    <mdb-icon fas icon=\"user-alt\" class=\"text-white pr-1\" aria-hidden=\"true\" size=\"2x\"></mdb-icon>\n                                     <span class=\"badge badge-light\">9</span>\n                                    <span class=\"sr-only\">unread messages</span>\n                                </a>\n                        </li>\n                        <li class=\"nav-item\">\n                                <a class=\"nav-link\" >\n                                        <mdb-icon fas icon=\"bell\" class=\"text-white pr-1\" aria-hidden=\"true\" size=\"2x\"></mdb-icon>          \n                                        <span class=\"badge badge-light\">9</span>\n                                       <span class=\"sr-only\">unread messages</span>\n                                    </a>\n                        </li>\n                       \n                      \n            \n                    </ul>\n                    <!-- Links -->\n            \n           \n                </links>\n                <!-- Collapsible content -->\n            \n            </mdb-navbar>\n\n</div>\n\n<div class=\"container-fluid m-0 p-0 fondo\">\n        <div class=\"row m-0 p-0\">\n            <div class=\"col-sm-12 m-0 p-0\">\n                    <app-publicidad></app-publicidad>\n            </div>\n        </div>\n        <div class=\"row m-0 p-0\">\n            <div class=\"col-sm-12\">\n                    <router-outlet></router-outlet>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-2\">\n                   \n                \n            </div>\n            <div class=\"col-sm-10\"></div>\n        </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/home/home.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/dashboard/pages/home/home.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-2\">\r\n        <app-navbar></app-navbar>\r\n    </div>\r\n    <div class=\"col-sm-10\">\r\n        <section class=\"container\">\r\n            <div class=\"text-center\">\r\n                <h3 class=\"display-4 white-text\">Bienvenido {{usuario.name}} {{usuario.surname}}</h3>\r\n                <div class=\"container\">\r\n                    <p class=\"white-text\" style=\"font-size: 1.5rem\">FamilyBoxTV es una plataforma de entrenamiento la cual\r\n                        tiene el proposito de llevarte contenido de\r\n                        calidad</p>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"d-flex flex-column align-items-center\">\r\n                        <div class=\"text-center\">\r\n                            <img src=\"assets/img/thumbnail_tv-vivo.png\" class=\"icon\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"box\">\r\n                            <div class=\" container mt-5 text-center\">\r\n                                <p>Mira la mejor programación en Tv streaming</p>\r\n                                <p><strong>Más de 200 canales en distintos idiomas..</strong></p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"d-flex flex-column\">\r\n                        <div class=\"text-center\">\r\n                            <img src=\"assets/img/thumbnail_radio-vivo.png\" class=\"icon\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"box\">\r\n                            <div class=\" container mt-5 text-center\">\r\n                                <p>Mira la mejor programación en Tv streaming</p>\r\n                                <p><strong>Más de 200 canales en distintos idiomas..</strong></p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"d-flex flex-column\">\r\n                        <div class=\"text-center\">\r\n                            <img src=\"assets/img/thumbnail_family-flix.png\" class=\"icon\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"box\">\r\n                            <div class=\" container mt-5 text-center\">\r\n\r\n                                <p>Mira la mejor programación en Tv streaming</p>\r\n                                <p><strong>Más de 200 canales en distintos idiomas..</strong></p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"d-flex flex-column\">\r\n                        <div class=\"text-center\">\r\n                            <img src=\"assets/img/thumbnail_Tienda.png\" class=\"icon\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"box\">\r\n                            <div class=\" container mt-5 text-center\">\r\n                                <p>Mira la mejor programación en Tv streaming</p>\r\n                                <p><strong>Más de 200 canales en distintos idiomas..</strong></p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/loadmovie/loadmovie.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/dashboard/pages/loadmovie/loadmovie.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container \">\n    <div class=\"embed-responsive embed-responsive-4by3\">\n        <iframe class=\"embed-responsive-item\" [src]=\"url_video | safe\" allow=\"autoplay\" height=\"768\" width=\"1366\"\n            allowfullscreen></iframe>\n    </div>\n\n</div> -->\n\n<div class=\"text-center mt-2\">\n        <iframe class=\"embed-responsive-item\" [src]=\"url_video | safe\" allow=\"autoplay\" height=\"450\" width=\"1066\"\n        allowfullscreen></iframe>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/miscompras/miscompras.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/dashboard/pages/miscompras/miscompras.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mdbModal #basicModal=\"mdbModal\" class=\"modal fade right focus\" tabindex=\"-1\" role=\"dialog\"\n  aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-fluid\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <table mdbTable>\n            <thead>\n              <tr>\n                <th scope=\"row\">Orden</th>\n                <th>imagen</th>\n                <th>producto</th>\n                <th>descripcion</th>\n                <th>Tipo</th>\n                <th>precio</th>\n                <th>cantidad</th>\n                <th>subtotal</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr mdbTableCol *ngFor=\"let i of productos\">\n                <th scope=\"row\">{{i.Orden}}</th>\n                <td *ngIf=\"i.tipo==1\"><img [src]=\"i.imagen | imagen:'videos'\" alt=\"\" class=\"icono\"></td>\n                <td *ngIf=\"i.tipo==2\"><img [src]=\"i.imagen | imagen:'tienda'\" alt=\"\" class=\"icono\"></td>\n                <td>{{i.name}}</td>\n                <td>{{i.descripcion}}</td>\n                <td *ngIf=\"i.tipo==1\">Video</td>\n                <td *ngIf=\"i.tipo==2\">Tienda</td>\n                <td>{{i.precio}}</td>\n                <td>{{i.cantidad}}</td>\n                <td>{{i.precio * i.cantidad | currency}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <button type=\"button\" mdbBtn color=\"secondary\" block=\"true\" class=\"waves-light\" mdbWavesEffect\n          (click)=\"basicModal.hide()\" data-dismiss=\"modal\">Cerrar</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-2\">\n    <app-navbar></app-navbar>\n  </div>\n  <div class=\"col-sm-10\">\n    <section>\n      <div class=\"container\">\n        <div class=\"container\">\n          <table mdbTable class=\"z-depth-1\">\n            <thead>\n              <tr class=\"white-text\">\n                <th scope=\"col\">Orden No</th>\n                <th>Email Usuario</th>\n                <th>Fecha</th>\n                <th>Total</th>\n                <th>Estado de la Orden</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let el of ordenes; let i = index\" class=\"white-text\">\n                <th scope=\"row\">{{el.orden}}</th>\n                <td>{{el.email_usuario}}</td>\n                <td>{{el.date | date}}</td>\n                <td>{{el.amount | currency}}</td>\n                <td *ngIf=\"el.status==4\" class=\"text-success\">Pagada</td>\n                <td *ngIf=\"el.status==0\" class=\".text-warning\">No Completada</td>\n                <td *ngIf=\"el.status!=4\" class=\"text-warning\">Cancelada</td>\n                <td><button type=\"button\" mdbBtn color=\"light\" size=\"sm\" (click)=\"vermas(el.orden)\" mdbWavesEffect>Ver\n                    Detalles</button></td>\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n\n    </section>\n\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/multimedia/multimedia.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/dashboard/pages/multimedia/multimedia.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid mt-5\" *ngIf=\"items.length > 0\">\n    <h3 class=\"white-text\">{{categoria.categoria}}</h3>\n    <div class=\"d-flex flex-row\">\n      <div class=\"d-flex flex-row flex-wrap\">\n          <div class=\"card\" style=\"width: 15vw;margin-right: 30px;\" *ngFor=\"let v of items\" (click)=\"OpenModal(v.id)\" tabindex=\"0\">\n              <img [src]=\"v.imagen | imagen:'tienda'\"  class=\"img-fluid\" height=\"150\" alt=\"...\">      \n              <div class=\"card-body\">\n                <h5 class=\"h5-responsive text-center\">\n                  {{v.name}}\n                </h5>            \n              </div>\n            </div>    \n      </div>\n    </div>\n  </div>\n\n<!--   \n  <div mdbModal #basicModal=\"mdbModal\" class=\"modal fade right focus\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\"  >\n    <div class=\"modal-dialog modal-fluid\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-5\">\n              <img [src]=\"item.imagen | imagen:'tienda'\" alt=\"\" class=\"img-fluid\">\n            </div>\n            <div class=\"col-lg-7\">\n              <h2 class=\"h2-responsive product-name\">\n                <strong>{{item.name}}</strong>\n              </h2>\n              <span class=\"amber-text\"> <i class=\"fas fa-star\"></i></span>\n              <span class=\"amber-text\"> <i class=\"fas fa-star\"></i></span>\n              <span class=\"amber-text\"> <i class=\"fas fa-star\"></i></span>\n              <span class=\"amber-text\"> <i class=\"fas fa-star\"></i></span>\n              <span class=\"amber-text\"> <i class=\"fas fa-star\"></i></span>  \n              <mdb-card-text>{{item.descripcion}}\n                </mdb-card-text> \n                  \n              <h4 class=\"h4-responsive\">\n                <span class=\"green-text\">\n                  <strong>{{item.precio | currency:'COP'}}</strong>\n                </span>\n                <span class=\"grey-text\">\n                  <small>\n                    <s>{{item.precio + item.precio*0.2 | currency:'COP'}}</s>\n                  </small>\n                </span>\n              </h4>\n  \n              <small class=\"text-muted\">Puedes pagarlo con el metodo que mas te guste</small>\n  \n  \n  \n              <div class=\"text-center\">\n  \n                <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" mdbWavesEffect (click)=\"basicModal.hide()\"\n                  data-dismiss=\"modal\">Close</button>\n                <button mdbBtn color=\"primary\" class=\"waves-light\" (click)=\"agregar(item.id)\" mdbWavesEffect>Add to cart\n                  <i class=\"fas fa-cart-plus ml-2\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </div>\n        \n          </div>\n        </div>\n      </div> \n    </div>\n  \n  </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/player/player.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/dashboard/pages/player/player.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12 mt-3\">\n        <vg-player *ngIf=\"audio\" #vgplayer (onPlayerReady)=\"onPlayerReady($event)\">\n            <div class=\"container\">\n                <div class=\"text-center mt-2\">\n                    <img [src]=\"source.imagen | imagen:'contenido'\" height=\"200\" alt=\"\" style=\"border-radius: 10px;\">\n                </div>\n                <div class=\"text-center\">\n                    <img src=\"assets/img/radio.gif\" class=\"img-fluid\" alt=\"\" *ngIf=\"active\">\n                </div>\n                <div class=\"text-center\">\n                        <img src=\"assets/img/linea.png\" class=\"img-fluid\" alt=\"\" *ngIf=\"!active\">\n                    </div>\n            </div>\n            <vg-controls>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <vg-play-pause tabindex=\"0\" style=\"height: 40px;\n                            width: 200px;\n                            background-image: linear-gradient(to bottom, #141445, #171d54, #192764, #183174, #143c84);\n                            color: white;\n                            border-radius: 10px;\n                            position: absolute;\n                            top: 1vh;\n                            left: 30vw;\" *ngIf=\"fulls\">\n                        </vg-play-pause>\n                        <vg-fullscreen tabindex=\"0\" style=\"height: 40px;\n                            width: 200px;\n                            background-image: linear-gradient(to bottom, #141445, #171d54, #192764, #183174, #143c84);\n                            color: white;\n                            border-radius: 10px;\n                            position: absolute;\n                            top: 1vh;\n                            left: 60vw;\" *ngIf=\"fulls\"></vg-fullscreen>\n\n                 \n\n                    </div>\n                </div>\n            </vg-controls>\n            <audio #reproductor #vgHls=\"vgHls\" [vgMedia]=\"reproductor\" id=\"myAudio\" [vgHls]=\"source.url\" crossorigin\n                preload=\"auto\">\n            </audio>\n        </vg-player>\n\n        <vg-player *ngIf=\"video\"  (onPlayerReady)=\"onPlayerReady($event)\">\n\n            <video #media #vgHls=\"vgHls\" vg-native-fullscreen=\"true\" autoplay=\"true\" [vgMedia]=\"media\" [vgHls]=\"source.url\"\n                id=\"singleVideo\" (error)=\"errorVideo($event)\" crossorigin>\n            </video>\n            \n            <div class=\"mt-5\">\n                <vg-play-pause tabindex=\"0\" style=\"height: 40px;\n                width: 200px;\n                background-image: linear-gradient(to bottom, #141445, #171d54, #192764, #183174, #143c84);\n                color: white;\n                border-radius: 10px;\n                position: absolute;\n                top: 55vh;\n                left: 30vw;\" *ngIf=\"fulls\">\n                </vg-play-pause>\n                <vg-fullscreen tabindex=\"0\" style=\"height: 40px;\n                width: 200px;\n                background-image: linear-gradient(to bottom, #141445, #171d54, #192764, #183174, #143c84);\n                color: white;\n                border-radius: 10px;\n                position: absolute;\n                top: 55vh;\n                left: 60vw;\" *ngIf=\"fulls\"></vg-fullscreen>\n            </div>\n        </vg-player>  \n        \n        \n        <vg-player (onPlayerReady)=\"onPlayerReady($event)\" vg-responsive=\"false\" *ngIf=\"ads\" style=\"height: 645px;\" >              \n            <vg-controls>           \n                <vg-fullscreen></vg-fullscreen>\n            </vg-controls>        \n            <video #media [vgMedia]=\"media\" id=\"singleVideo\" preload=\"auto\" crossorigin autoplay=\"true\">\n                <source [src]=\"src\" type=\"video/mp4\">             \n            </video>\n        </vg-player>\n        \n\n<!-- \n        <div class=\"container\" *ngIf=\"loading\">\n            <div class=\"ring\">\n                Loading\n                <span></span>\n            </div>\n        </div> -->\n\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/products/products.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/dashboard/pages/products/products.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-5\" *ngIf=\"items.length > 0\">\n  <h3 class=\"white-text\">{{categoria.categoria}}</h3>\n  <div class=\"d-flex flex-row\">\n    <div class=\"d-flex flex-row flex-wrap\">\n        <div class=\"card\" style=\"width: 15vw;margin-right: 30px;\" *ngFor=\"let v of items\" (click)=\"OpenModal(v.id)\" tabindex=\"0\">\n            <img [src]=\"v.imagen | imagen:'videos'\"  class=\"card-img-top\" height=\"150\" alt=\"...\">            \n            <div class=\"card-body\">\n              <h5 class=\"h5-responsive text-center\">\n                {{v.name}}\n              </h5>            \n            </div>\n          </div>    \n    </div>\n  </div>\n</div>\n\n<div mdbModal #basicModal=\"mdbModal\" class=\"modal fade right\" tabindex=\"-1\" role=\"dialog\"\n  aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-fluid\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-5\">\n            <img [src]=\"item.imagen | imagen:'videos'\" alt=\"\" class=\"img-fluid\">\n          </div>\n          <div class=\"col-lg-7\">\n            <h2 class=\"h2-responsive product-name\">\n              <strong>{{item.name}}</strong>\n            </h2>\n            <span class=\"amber-text\"> <i class=\"fas fa-star\"></i></span>\n            <span class=\"amber-text\"> <i class=\"fas fa-star\"></i></span>\n            <span class=\"amber-text\"> <i class=\"fas fa-star\"></i></span>\n            <span class=\"amber-text\"> <i class=\"fas fa-star\"></i></span>\n            <span class=\"amber-text\"> <i class=\"fas fa-star\"></i></span>\n            <mdb-card-text>{{item.descripcion}}\n            </mdb-card-text>\n            <h4 class=\"h4-responsive mb-2\">\n              <span class=\"blue-text\">\n                Tiempo de Alquiler {{item.time}} dias\n              </span>\n            </h4>\n            <h4 class=\"h4-responsive\">\n              <span class=\"green-text\">\n                <strong>{{item.precio | currency:'COP'}}</strong>\n              </span>\n              <span class=\"grey-text\">\n                <small>\n                  <s>{{item.precio + item.precio*0.2 | currency:'COP'}}</s>\n                </small>\n              </span>\n            </h4>\n\n            <small class=\"text-muted\">Puedes pagarlo con el metodo que mas te guste</small>\n\n\n\n\n\n            <div class=\"text-center\">\n\n              <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" mdbWavesEffect\n                (click)=\"basicModal.hide()\" data-dismiss=\"modal\">Close</button>\n              <button mdbBtn color=\"primary\" class=\"waves-light\" (click)=\"agregar(item.id)\" mdbWavesEffect>Add to cart\n                <i class=\"fas fa-cart-plus ml-2\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/radio/radio.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/dashboard/pages/radio/radio.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-2\">\n        <app-navbar></app-navbar>\n    </div>\n    <div class=\"col-sm-10\">\n        <section>\n            <div class=\"d-flex flex-row\">\n                <div class=\"columna-2 ml-5\">\n                    <app-topnavbar (IdiomaSeleccionado)=\"filtrar($event)\"></app-topnavbar>\n                    <div class=\"d-flex flex-row flex-wrap\">\n                        <!-- Card -->\n                        <mdb-card *ngFor=\"let radio of radios; let i=index\" tabindex=\"0\"\n                            style=\"width: 10vw;margin-right: 2vw;margin-bottom: 2vw;\" (click)=\"openMedios(radio)\">\n                            <div class=\"view overlay waves-light\" mdbWavesEffect>\n                                <!-- Card img -->\n                                <mdb-card-img [src]=\"radio.imagen | imagen:'contenido'\" alt=\"Card image cap\">\n                                </mdb-card-img>\n                            </div>\n                            <!--Card content-->\n                        </mdb-card>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/review/review.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/dashboard/pages/review/review.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 ml-5\">\n    <div class=\"row\">\n        <div class=\"col-lg-5\" *ngIf=\"item.tipo==1\">\n          <img [src]=\"item.imagen | imagen:'videos'\" alt=\"\" class=\"img-fluid\">\n        </div>\n        <div class=\"col-lg-5\" *ngIf=\"item.tipo==2\">\n            <img [src]=\"item.imagen | imagen:'tienda'\" alt=\"\" class=\"img-fluid\">\n          </div>\n        <div class=\"col-lg-7\">\n          <h2 class=\"h2-responsive product-name text-white\">\n            <strong>{{item.name}}</strong>\n          </h2>\n          <span class=\"amber-text\"> <i class=\"fas fa-star\"></i></span>\n          <span class=\"amber-text\"> <i class=\"fas fa-star\"></i></span>\n          <span class=\"amber-text\"> <i class=\"fas fa-star\"></i></span>\n          <span class=\"amber-text\"> <i class=\"fas fa-star\"></i></span>\n          <span class=\"amber-text\"> <i class=\"fas fa-star\"></i></span>\n\n          <p class=\"text-white text-justify\">\n              {{item.descripcion}}\n          </p>\n        \n          <h4 class=\"h4-responsive mb-2\" *ngIf=\"item.tipo==1\">\n            <span class=\"blue-text\">\n              Tiempo de Alquiler {{item.time}} dias\n            </span>\n          </h4>\n        \n          <h4 class=\"h4-responsive\">\n            <span class=\"green-text\">\n              <strong>{{item.precio | currency:'COP'}}</strong>\n            </span>\n            <span class=\"grey-text\">\n              <small>\n                <s>{{item.precio + item.precio*0.2 | currency:'COP'}}</s>\n              </small>\n            </span>\n          </h4>\n    \n          <small class=\"text-muted\">Puedes pagarlo con el metodo que mas te guste</small>    \n          <div class=\"text-center\">\n    \n            <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" mdbWavesEffect\n              (click)=\"basicModal.hide()\" data-dismiss=\"modal\">Close</button>\n            <button mdbBtn color=\"primary\" class=\"waves-light\" (click)=\"agregar(item.id)\" mdbWavesEffect>Add to cart\n              <i class=\"fas fa-cart-plus ml-2\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n        </div>\n    \n      </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/store/store.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/dashboard/pages/store/store.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-2\">\n        <app-navbar></app-navbar>\n    </div>\n    <div class=\"col-sm-10\">\n        <section>\n            <div class=\"container-fluid\">\n                <div class=\"d-flex flex-row justify-content-around\">\n\n                    <div class=\"text-center\" (click)=\"visualizar(1)\" tabindex=\"0\">\n                        <img src=\"assets/img/oferta.svg\" alt=\"\" class=\"icon\">\n                        <h3 class=\"h3 white-text\">Catalogo</h3>\n\n                    </div>\n                    <div class=\"text-center\" (click)=\"visualizar(2)\" tabindex=\"0\">\n                        <img src=\"assets/img/alquileres.svg\" alt=\"\" class=\"icon\">\n                        <h3 class=\"h3 white-text\">Mis Alquileres</h3>\n\n                    </div>\n\n                </div>\n                <div class=\"d-flex flex-row\" *ngIf=\"!alquiler\">\n                    <div class=\"columna-2\">\n                        <div class=\"d-flex flex-row flex-wrap\">\n                            <div class=\"container-fluid\" *ngFor=\"let categoria of categorias\">\n                                <app-products [categoria]=\"categoria\"></app-products>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"d-flex flex-row\" *ngIf=\"alquiler\">\n                    <div class=\"columna-2\">\n                        <div class=\"d-flex flex-row flex-wrap\">\n                            <div class=\"container-fluid\" *ngFor=\"let categoria of categorias\">\n                                <app-alquileres [categoria]=\"categoria\"></app-alquileres>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </section>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/tv/tv.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/dashboard/pages/tv/tv.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-2\">\n        <app-navbar></app-navbar>\n    </div>\n    <div class=\"col-sm-10\">\n        <section>\n            <div class=\"d-flex flex-row\">\n                <div class=\"columna-2 ml-5\">\n                    <app-topnavbar (IdiomaSeleccionado)=\"filtrar($event)\"></app-topnavbar>\n                    <div class=\"d-flex flex-row flex-wrap\">\n                        <mdb-card *ngFor=\"let tv of tvs\" tabindex=\"0\"\n                            style=\"width: 10vw;margin-right: 2vw;margin-bottom: 3vw;\" (click)=\"openTv(tv)\">\n                            <div class=\"view overlay waves-light\" mdbWavesEffect>\n                                <mdb-card-img [src]=\"tv.imagen | imagen:'contenido'\" alt=\"Card image cap\">\n                                </mdb-card-img>\n                            </div>\n                        </mdb-card>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/videos/videos.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/dashboard/pages/videos/videos.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-2\">\n        <app-navbar></app-navbar>\n    </div>\n    <div class=\"col-sm-10\">\n        <section>\n            <div class=\"container-fluid\">\n                <div class=\"d-flex flex-row\">\n                    <div class=\"columna-2\">\n                        <div class=\"d-flex flex-row flex-wrap\">\n                            <div class=\"container-fluid\" *ngFor=\"let categoria of categorias\">\n                                <app-multimedia [categoria]=\"categoria\"></app-multimedia>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </section>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/navegacion/navbar/navbar.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/navegacion/navbar/navbar.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid m-0 p-0\">\n    <div class=\"row\">\n        <div class=\"col-12 p-0 m-0\">\n            <div class=\"container mt-5 side\">\n                <h4 class=\"h4 text-white text-center\">Navega</h4>\n                <ul class=\"nav flex-column  text-center \">\n                    <li class=\"nav-item mt-2 text-left ml-3\">\n                        <a class=\"nav-link text-white \" [routerLink]=\"[ '/principal/home' ]\" routerLinkActive=\"active\">\n                            <h5 class=\"h5 p-2\"><mdb-icon fas icon=\"home\"></mdb-icon> Inicio</h5>\n                        </a>\n                    </li>\n                    <li class=\"nav-item mt-2 text-left ml-3\">\n                        <a class=\"nav-link text-white \" [routerLink]=\"[ '/principal/tv' ]\" routerLinkActive=\"active\">\n                            <h5 class=\"h5 p-2\"><mdb-icon fas icon=\"tv\"></mdb-icon> Tv en vivo</h5>\n                        </a>\n                    </li>\n                    <li class=\"nav-item mt-2 text-left ml-3\">\n                        <a class=\"nav-link text-white \" [routerLink]=\"[ '/principal/radio' ]\" routerLinkActive=\"active\">\n                            <h5 class=\"h5 p-2\"><mdb-icon fas icon=\"volume-up\"></mdb-icon> Radio</h5>\n                        </a>\n                    </li>\n                    <li class=\"nav-item mt-2 text-left ml-3\">\n                        <a class=\"nav-link text-white \" [routerLink]=\"[ '/principal/videos' ]\"\n                            routerLinkActive=\"active\">\n                            <h5 class=\"h5 p-2\"><mdb-icon fas icon=\"star\"></mdb-icon> FamilyFlix</h5>\n                        </a>\n                    </li>\n                    <li class=\"nav-item mt-2 text-left ml-3\">\n                        <a class=\"nav-link text-white \" [routerLink]=\"[ '/principal/store' ]\" routerLinkActive=\"active\">\n                            <h5 class=\"h5 p-2\"> <mdb-icon fas icon=\"store\"></mdb-icon> Tienda</h5>\n                        </a>\n                    </li>\n                    <li class=\"nav-item mt-2 text-left ml-3\">\n                        <a class=\"nav-link text-white \" [routerLink]=\"[ '/principal/carro' ]\" routerLinkActive=\"active\">\n                            <h5 class=\"h5 p-2\"> <mdb-icon fas icon=\"shopping-cart\"></mdb-icon>Carrito de Compras</h5>\n                        </a>\n                    </li>\n                    <li class=\"nav-item mt-2 text-left ml-3\">\n                        <a class=\"nav-link text-white \" [routerLink]=\"[ '/principal/compras' ]\"\n                            routerLinkActive=\"active\">\n                            <h5 class=\"h5 p-2\"><mdb-icon fas icon=\"shopping-bag\"></mdb-icon> Mis Compras</h5>\n                        </a>\n                    </li>\n                    <li class=\"nav-item mt-2 text-left ml-3\">\n                        <a class=\"nav-link text-white\" [routerLink]=\"[ '/principal/account' ]\"\n                            routerLinkActive=\"active\">\n                            <h5 class=\"h5 p-2\"><mdb-icon fas icon=\"user\"></mdb-icon> Cuenta</h5>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n\n        </div>  \n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/navegacion/topnavbar/topnavbar.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/navegacion/topnavbar/topnavbar.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center mb-2\">\n    <ul class=\"nav justify-content-center box-menu grey lighten-4 nav-pills nav-fill py-2\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" tabindex=\"0\" (click)=\"cambiarIdioma(0)\">Todos</a>\n        </li>\n        <li class=\"nav-item\" *ngFor=\"let idioma of idiomas\">\n            <a class=\"nav-link\" tabindex=\"0\" (click)=\"cambiarIdioma(idioma.id)\">{{idioma.idioma}}</a>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/publicidad/publicidad.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/publicidad/publicidad.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container publicity\">\n  <ngb-carousel id=\"carrousel\" class=\"carousel-multi-item multi-animation\">\n    <ng-template ngbSlide *ngFor=\"let image of images\">\n      <img [src]=\"image.archivo | imagen:'publicidad'\" alt=\"Random slide\" class=\"img-fluid\">\n    </ng-template>\n  </ngb-carousel>\n</div> -->\n<!-- <div class=\"container\">\n  <div class=\"publicidad\">\n      <mdb-carousel [animation]=\"'slide'\">\n          <mdb-carousel-item>\n            <img class=\"d-block w-100\" src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg\" alt=\"First slide\">\n          </mdb-carousel-item>\n          <mdb-carousel-item>\n            <img class=\"d-block w-100\" src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg\" alt=\"Second slide\">\n          </mdb-carousel-item>\n          <mdb-carousel-item>\n            <img class=\"d-block w-100\" src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg\" alt=\"Third slide\">\n          </mdb-carousel-item>\n      </mdb-carousel>\n\n  </div>\n \n\n</div> -->\n<div class=\"col-12 m-0 p-0\">\n  <div class=\"d-flex flex-row justify-content-center\">\n      <div class=\"pbseccion \">\n\n          <swiper [config]=\"config\" [(index)]=\"index\" >\n            <div *ngFor=\"let image of images\" [ngStyle]=\"{ 'background-image': 'url('+image.image+')'} \" style=\"height: 20vh;width: 90vw;\" >\n             \n            </div>\n        \n          </swiper>\n      \n      \n        </div>\n\n\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/start/login/login.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/start/login/login.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid m-0 p-0\">\n  <div class=\"d-flex flex-row justify-content-center align-items-center fondo\">\n\n    <div class=\"box\">\n      <div class=\"text-center\">\n        <img [src]=\"logo | imagen:'app'\" alt=\"\" class=\"img-fluid\">\n      </div>\n      <div class=\"formulario\">\n        <!-- Default form login -->\n        <form class=\"text-center p-5\" [formGroup]=\"login\" (ngSubmit)=\"Login()\" ngNativeValidate>\n\n          <p class=\"h4 mb-4 white-text\">Ingrese su direccion de correo</p>\n\n          <!-- Email -->\n          <input type=\"email\"  class=\"form-control mb-4\" placeholder=\"E-mail\" formControlName=\"email\" name=\"email\" required>\n\n          <div *ngIf=\"login.get('email').status === 'PENDING'\">\n            <h3 class=\"h3 white-text\">Comprobando Usuario</h3>\n              <div class=\"spinner-grow text-info\" role=\"status\">\n                  <span class=\"sr-only\">Loading...</span>\n                </div>\n            </div>        \n          \n            <div *ngIf=\"login.get('email').invalid && login.get('email').errors.emailTaken\" class=\"mt-2\">\n              <h3 class=\"h3 white-text\">Usuario No encontrado Registrate!!</h3>\n              \n            </div>\n\n\n          <!-- Password -->\n          <div *ngIf=\"login.get('email').status === 'VALID'\">\n              <input type=\"password\"  class=\"form-control mb-4\" placeholder=\"password\" formControlName=\"password\" name=\"password\" required>\n          </div>\n         \n\n          <div class=\"d-flex justify-content-around\">            \n            <div>\n              <!-- Forgot password -->\n              <a href=\"\" class=\"white-text\">Olvide la Contraseña?</a>\n            </div>\n          </div>\n\n          <!-- Sign in button -->\n          <button mdbBtn color=\"info\" *ngIf=\"login.controls['email'].valid\"  block=\"true\" class=\"my-4\" type=\"submit\">Entrar</button>\n\n          <!-- Register -->\n          <div class=\"mt-5\">\n              <p class=\"h4 white-text\">Aun no te has registrado?\n                  <button mdbBtn color=\"indigo\" class=\"my-4\" type=\"button\"  [routerLink]=\"[ '/register']\">Registrarse</button>\n              </p>\n    \n\n          </div>\n          \n     \n\n        </form>\n        <!-- Default form login -->\n      </div>\n\n    </div>\n\n\n  </div>\n\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/start/register/register.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/start/register/register.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid m-0 p-0\">\n  <div class=\"d-flex flex-row justify-content-center align-items-center fondo\">\n\n    <div class=\"box mt-2\">\n      <div class=\"text-center\">\n        <img [src]=\"logo | imagen:'app'\" alt=\"\" class=\"img-fluid\">\n      </div>\n      <div class=\"formulario\">\n        <!-- Default form register -->\n        <form class=\"text-center  p-5\"  [formGroup]=\"register\" (ngSubmit)=\"registrarse()\" ngNativeValidate>\n\n          <p class=\"h4 mb-4 white-text\">Registrarse</p>\n\n          <div class=\"form-row mb-4\">\n            <div class=\"col\">\n              <!-- First name -->\n              <input type=\"text\"  class=\"form-control\" placeholder=\"Nombres\" formControlName=\"name\" name=\"name\" required tabindex=\"0\">\n            </div>\n            <div class=\"col\">\n              <!-- Last name -->\n              <input tabindex=\"0\" type=\"text\" id=\"defaultRegisterFormLastName\" class=\"form-control\" placeholder=\"Apellidos\" formControlName=\"surname\" name=\"surname\" required>\n            </div>\n          </div>\n\n          <!-- E-mail -->\n          <input tabindex=\"0\" type=\"email\" id=\"defaultRegisterFormEmail\" class=\"form-control mb-4\" placeholder=\"E-mail\" formControlName=\"email\" name=\"email\" required>\n\n          <!-- Password -->\n          <input tabindex=\"0\" type=\"password\" id=\"defaultRegisterFormPassword\" class=\"form-control\" placeholder=\"Password\"\n            aria-describedby=\"defaultRegisterFormPasswordHelpBlock\" formControlName=\"password\" name=\"password\" required>\n          <small   class=\"form-text white-text text-muted mb-4\">\n            At least 8 characters and 1 digit\n          </small>\n          <!-- Phone number -->\n          <input tabindex=\"0\" type=\"text\" id=\"defaultRegisterPhonePassword\" class=\"form-control\" placeholder=\"Numero Telefonico\"\n            aria-describedby=\"defaultRegisterFormPhoneHelpBlock\" formControlName=\"telefono\" name=\"telefono\" required>\n          <!-- Sign up button -->\n          <button tabindex=\"1\" mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\">Registrarse</button>\n          <hr>\n\n          <!-- Terms of service -->\n          <p class=\"white-text\">By clicking\n            <em>Sign up</em> you agree to our\n            <a  class=\"white-text\">terms of service</a> and\n            <a  class=\"white-text\">terms of service</a>. </p>\n\n        </form>\n        <!-- Default form register -->\n\n      </div>\n\n    </div>\n\n\n  </div>\n\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/secciones/start/start/start.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secciones/start/start/start.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid m-0 p-0\">\n  <div class=\"d-flex flex-row justify-content-center align-items-center fondo\">\n    <div class=\"box\">\n      <div class=\"text-center\">\n        <img [src]=\"logo | imagen:'app'\" alt=\"\" class=\"img-fluid\">\n      </div>\n      <div class=\"text-center mt-2\">\n        <h3 class=\"h3 white-text\">Welcome User Select Language</h3>\n      </div>\n      <div class=\"d-flex flex-row justify-content-around mt-5\">\n        <div>\n            <img [src]=\"spain | imagen:'app' \" alt=\"\" class=\"img-fluid\" tabindex=\"0\" (click)=\"selectIdioma(0)\">   \n            <h5 class=\"h5-responsive white-text mt-4\">Español</h5> \n        </div>  \n        <div>\n            <img [src]=\"english | imagen:'app'\" alt=\"\" class=\"img-fluid\" tabindex=\"0\" (click)=\"selectIdioma(1)\"> \n            <h5 class=\"h5-responsive white-text mt-4\">English</h5>    \n        </div>      \n                \n             \n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _secciones_start_start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secciones/start/start/start.component */ "./src/app/secciones/start/start/start.component.ts");
/* harmony import */ var _secciones_start_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./secciones/start/login/login.component */ "./src/app/secciones/start/login/login.component.ts");
/* harmony import */ var _secciones_start_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./secciones/start/register/register.component */ "./src/app/secciones/start/register/register.component.ts");
/* harmony import */ var _secciones_dashboard_pages_dash_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./secciones/dashboard/pages/dash/dashboard.component */ "./src/app/secciones/dashboard/pages/dash/dashboard.component.ts");
/* harmony import */ var _secciones_dashboard_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./secciones/dashboard/pages/home/home.component */ "./src/app/secciones/dashboard/pages/home/home.component.ts");
/* harmony import */ var _secciones_dashboard_pages_tv_tv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./secciones/dashboard/pages/tv/tv.component */ "./src/app/secciones/dashboard/pages/tv/tv.component.ts");
/* harmony import */ var _secciones_dashboard_pages_radio_radio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./secciones/dashboard/pages/radio/radio.component */ "./src/app/secciones/dashboard/pages/radio/radio.component.ts");
/* harmony import */ var _secciones_dashboard_pages_account_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./secciones/dashboard/pages/account/account.component */ "./src/app/secciones/dashboard/pages/account/account.component.ts");
/* harmony import */ var _secciones_dashboard_pages_miscompras_miscompras_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./secciones/dashboard/pages/miscompras/miscompras.component */ "./src/app/secciones/dashboard/pages/miscompras/miscompras.component.ts");
/* harmony import */ var _secciones_dashboard_pages_player_player_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./secciones/dashboard/pages/player/player.component */ "./src/app/secciones/dashboard/pages/player/player.component.ts");
/* harmony import */ var _secciones_ads_ads_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./secciones/ads/ads.component */ "./src/app/secciones/ads/ads.component.ts");
/* harmony import */ var _secciones_dashboard_pages_store_store_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./secciones/dashboard/pages/store/store.component */ "./src/app/secciones/dashboard/pages/store/store.component.ts");
/* harmony import */ var _secciones_dashboard_pages_review_review_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./secciones/dashboard/pages/review/review.component */ "./src/app/secciones/dashboard/pages/review/review.component.ts");
/* harmony import */ var _secciones_dashboard_pages_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./secciones/dashboard/pages/carrito/carrito.component */ "./src/app/secciones/dashboard/pages/carrito/carrito.component.ts");
/* harmony import */ var _secciones_dashboard_pages_loadmovie_loadmovie_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./secciones/dashboard/pages/loadmovie/loadmovie.component */ "./src/app/secciones/dashboard/pages/loadmovie/loadmovie.component.ts");


















const routes = [
    { path: '', component: _secciones_start_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"] },
    { path: 'login', component: _secciones_start_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _secciones_start_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'principal', component: _secciones_dashboard_pages_dash_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], children: [
            { path: '', component: _secciones_dashboard_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
            { path: 'home', component: _secciones_dashboard_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
            { path: 'tv', component: _secciones_dashboard_pages_tv_tv_component__WEBPACK_IMPORTED_MODULE_8__["TvComponent"] },
            { path: 'radio', component: _secciones_dashboard_pages_radio_radio_component__WEBPACK_IMPORTED_MODULE_9__["RadioComponent"] },
            { path: 'account', component: _secciones_dashboard_pages_account_account_component__WEBPACK_IMPORTED_MODULE_10__["AccountComponent"] },
            { path: 'compras', component: _secciones_dashboard_pages_miscompras_miscompras_component__WEBPACK_IMPORTED_MODULE_11__["MiscomprasComponent"] },
            { path: 'store', component: _secciones_dashboard_pages_store_store_component__WEBPACK_IMPORTED_MODULE_14__["StoreComponent"] },
            { path: 'review/:source', component: _secciones_dashboard_pages_review_review_component__WEBPACK_IMPORTED_MODULE_15__["ReviewComponent"] },
            { path: 'carro', component: _secciones_dashboard_pages_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_16__["CarritoComponent"] },
            { path: 'load/:source', component: _secciones_dashboard_pages_loadmovie_loadmovie_component__WEBPACK_IMPORTED_MODULE_17__["LoadmovieComponent"] },
            { path: 'player/:source', pathMatch: 'full', component: _secciones_dashboard_pages_player_player_component__WEBPACK_IMPORTED_MODULE_12__["PlayerComponent"] }
        ] },
    { path: 'ads/:tipo', component: _secciones_ads_ads_component__WEBPACK_IMPORTED_MODULE_13__["AdsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Familyflix';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! videogular2/compiled/core */ "./node_modules/videogular2/compiled/core.js");
/* harmony import */ var videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! videogular2/compiled/controls */ "./node_modules/videogular2/compiled/controls.js");
/* harmony import */ var videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! videogular2/compiled/overlay-play */ "./node_modules/videogular2/compiled/overlay-play.js");
/* harmony import */ var videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! videogular2/compiled/buffering */ "./node_modules/videogular2/compiled/buffering.js");
/* harmony import */ var videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var videogular2_compiled_streaming__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! videogular2/compiled/streaming */ "./node_modules/videogular2/compiled/streaming.js");
/* harmony import */ var videogular2_compiled_streaming__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_streaming__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _secciones_dashboard_pages_account_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./secciones/dashboard/pages/account/account.component */ "./src/app/secciones/dashboard/pages/account/account.component.ts");
/* harmony import */ var _secciones_dashboard_pages_alquileres_alquileres_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./secciones/dashboard/pages/alquileres/alquileres.component */ "./src/app/secciones/dashboard/pages/alquileres/alquileres.component.ts");
/* harmony import */ var _secciones_dashboard_pages_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./secciones/dashboard/pages/carrito/carrito.component */ "./src/app/secciones/dashboard/pages/carrito/carrito.component.ts");
/* harmony import */ var _secciones_dashboard_pages_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./secciones/dashboard/pages/home/home.component */ "./src/app/secciones/dashboard/pages/home/home.component.ts");
/* harmony import */ var _secciones_dashboard_pages_loadmovie_loadmovie_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./secciones/dashboard/pages/loadmovie/loadmovie.component */ "./src/app/secciones/dashboard/pages/loadmovie/loadmovie.component.ts");
/* harmony import */ var _secciones_dashboard_pages_miscompras_miscompras_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./secciones/dashboard/pages/miscompras/miscompras.component */ "./src/app/secciones/dashboard/pages/miscompras/miscompras.component.ts");
/* harmony import */ var _secciones_dashboard_pages_player_player_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./secciones/dashboard/pages/player/player.component */ "./src/app/secciones/dashboard/pages/player/player.component.ts");
/* harmony import */ var _secciones_dashboard_pages_radio_radio_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./secciones/dashboard/pages/radio/radio.component */ "./src/app/secciones/dashboard/pages/radio/radio.component.ts");
/* harmony import */ var _secciones_dashboard_pages_review_review_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./secciones/dashboard/pages/review/review.component */ "./src/app/secciones/dashboard/pages/review/review.component.ts");
/* harmony import */ var _secciones_dashboard_pages_tv_tv_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./secciones/dashboard/pages/tv/tv.component */ "./src/app/secciones/dashboard/pages/tv/tv.component.ts");
/* harmony import */ var _secciones_navegacion_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./secciones/navegacion/navbar/navbar.component */ "./src/app/secciones/navegacion/navbar/navbar.component.ts");
/* harmony import */ var _secciones_navegacion_topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./secciones/navegacion/topnavbar/topnavbar.component */ "./src/app/secciones/navegacion/topnavbar/topnavbar.component.ts");
/* harmony import */ var _secciones_start_start_start_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./secciones/start/start/start.component */ "./src/app/secciones/start/start/start.component.ts");
/* harmony import */ var _secciones_start_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./secciones/start/login/login.component */ "./src/app/secciones/start/login/login.component.ts");
/* harmony import */ var _secciones_start_register_register_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./secciones/start/register/register.component */ "./src/app/secciones/start/register/register.component.ts");
/* harmony import */ var _secciones_dashboard_pages_dash_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./secciones/dashboard/pages/dash/dashboard.component */ "./src/app/secciones/dashboard/pages/dash/dashboard.component.ts");
/* harmony import */ var _secciones_publicidad_publicidad_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./secciones/publicidad/publicidad.component */ "./src/app/secciones/publicidad/publicidad.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _secciones_ads_ads_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./secciones/ads/ads.component */ "./src/app/secciones/ads/ads.component.ts");
/* harmony import */ var _secciones_dashboard_pages_store_store_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./secciones/dashboard/pages/store/store.component */ "./src/app/secciones/dashboard/pages/store/store.component.ts");
/* harmony import */ var _secciones_dashboard_pages_products_products_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./secciones/dashboard/pages/products/products.component */ "./src/app/secciones/dashboard/pages/products/products.component.ts");
/* harmony import */ var _secciones_dashboard_pages_videos_videos_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./secciones/dashboard/pages/videos/videos.component */ "./src/app/secciones/dashboard/pages/videos/videos.component.ts");
/* harmony import */ var _secciones_dashboard_pages_multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./secciones/dashboard/pages/multimedia/multimedia.component */ "./src/app/secciones/dashboard/pages/multimedia/multimedia.component.ts");







//==========VIDEOGULAR==============





//==========Componentes============



























const DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto',
    speed: 400,
    centeredSlides: true,
    autoplay: true
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _secciones_dashboard_pages_account_account_component__WEBPACK_IMPORTED_MODULE_12__["AccountComponent"],
            _secciones_dashboard_pages_alquileres_alquileres_component__WEBPACK_IMPORTED_MODULE_13__["AlquileresComponent"],
            _secciones_dashboard_pages_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_14__["CarritoComponent"],
            _secciones_dashboard_pages_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
            _secciones_dashboard_pages_loadmovie_loadmovie_component__WEBPACK_IMPORTED_MODULE_16__["LoadmovieComponent"],
            _secciones_dashboard_pages_miscompras_miscompras_component__WEBPACK_IMPORTED_MODULE_17__["MiscomprasComponent"],
            _secciones_dashboard_pages_player_player_component__WEBPACK_IMPORTED_MODULE_18__["PlayerComponent"],
            _secciones_dashboard_pages_radio_radio_component__WEBPACK_IMPORTED_MODULE_19__["RadioComponent"],
            _secciones_dashboard_pages_review_review_component__WEBPACK_IMPORTED_MODULE_20__["ReviewComponent"],
            _secciones_dashboard_pages_tv_tv_component__WEBPACK_IMPORTED_MODULE_21__["TvComponent"],
            _secciones_navegacion_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_22__["NavbarComponent"],
            _secciones_navegacion_topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_23__["TopnavbarComponent"],
            _secciones_start_start_start_component__WEBPACK_IMPORTED_MODULE_24__["StartComponent"],
            _secciones_start_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
            _secciones_start_register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"],
            _secciones_dashboard_pages_dash_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["DashboardComponent"],
            _secciones_publicidad_publicidad_component__WEBPACK_IMPORTED_MODULE_28__["PublicidadComponent"],
            _secciones_ads_ads_component__WEBPACK_IMPORTED_MODULE_33__["AdsComponent"],
            _secciones_dashboard_pages_store_store_component__WEBPACK_IMPORTED_MODULE_34__["StoreComponent"],
            _secciones_dashboard_pages_products_products_component__WEBPACK_IMPORTED_MODULE_35__["ProductsComponent"],
            _secciones_dashboard_pages_videos_videos_component__WEBPACK_IMPORTED_MODULE_36__["VideosComponent"],
            _secciones_dashboard_pages_multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_37__["MultimediaComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
            videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_7__["VgCoreModule"],
            videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_8__["VgControlsModule"],
            videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_9__["VgOverlayPlayModule"],
            videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_10__["VgBufferingModule"],
            videogular2_compiled_streaming__WEBPACK_IMPORTED_MODULE_11__["VgStreamingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_32__["SwiperModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_31__["IonicStorageModule"].forRoot(),
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot()
        ],
        providers: [
            {
                provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_32__["SWIPER_CONFIG"],
                useValue: DEFAULT_SWIPER_CONFIG
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/pipes/images.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/images.pipe.ts ***!
  \**************************************/
/*! exports provided: ImagenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenPipe", function() { return ImagenPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");



let ImagenPipe = class ImagenPipe {
    transform(img, tipo = 'usuario') {
        let url = _services_global_service__WEBPACK_IMPORTED_MODULE_2__["Global"].url + 'img';
        if (!img) {
            return url + '/usuarios/xxx';
        }
        if (img.indexOf('https') >= 0) {
            return img;
        }
        switch (tipo) {
            case 'contenido':
                url += '/contenido/' + img;
                break;
            case 'app':
                url += '/app/' + img;
                break;
            case 'publicidad':
                url += '/publicidad/' + img;
                break;
            case 'tienda':
                url += '/tienda/' + img;
                break;
            case 'videos':
                url += '/videos/' + img;
                break;
            default:
                console.log('tipo de imagen no existe, usuario, medicos, hospitales');
                url += '/usurios/xxx';
        }
        return url;
    }
};
ImagenPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'imagen'
    })
], ImagenPipe);



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _images_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images.pipe */ "./src/app/pipes/images.pipe.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/pipes/safe.pipe.ts");




let PipesModule = class PipesModule {
};
PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [],
        declarations: [
            _images_pipe__WEBPACK_IMPORTED_MODULE_2__["ImagenPipe"],
            _safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]
        ],
        exports: [
            _images_pipe__WEBPACK_IMPORTED_MODULE_2__["ImagenPipe"],
            _safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]
        ]
    })
], PipesModule);



/***/ }),

/***/ "./src/app/pipes/safe.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    })
], SafePipe);



/***/ }),

/***/ "./src/app/secciones/ads/ads.component.scss":
/*!**************************************************!*\
  !*** ./src/app/secciones/ads/ads.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY2Npb25lcy9hZHMvYWRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/secciones/ads/ads.component.ts":
/*!************************************************!*\
  !*** ./src/app/secciones/ads/ads.component.ts ***!
  \************************************************/
/*! exports provided: AdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsComponent", function() { return AdsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! videogular2/compiled/core */ "./node_modules/videogular2/compiled/core.js");
/* harmony import */ var videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_3__);




let AdsComponent = class AdsComponent {
    constructor(route, router, fsApi) {
        this.route = route;
        this.router = router;
        this.fsApi = fsApi;
        this.src = "http://familymedia.orione.cf/api/img/videos/12345.mp4";
        this.snapshotParam = "initial value";
        this.subscribedParam = "initial value";
    }
    ngOnInit() {
        this.snapshotParam = this.route.snapshot.paramMap.get("tipo");
        // Subscribed
        this.route.paramMap.subscribe(params => {
            this.subscribedParam = params.get("tipo");
        });
        console.log(this.subscribedParam);
    }
    onPlayerReady(player) {
        this.api = player;
        this.api.getDefaultMedia().subscriptions.loadStart.subscribe((a) => {
        });
        let subscriptions = this.api.getDefaultMedia();
        this.api.getDefaultMedia().subscriptions.play.subscribe(a => {
            console.log("Esta PLay");
            this.active = true;
        });
        subscriptions.subscriptions.ended.subscribe(a => {
            // http://localhost:4200/principal/player/55
            this.router.navigate(['/principal/player', this.subscribedParam]);
        });
        subscriptions.subscriptions.emptied.subscribe(a => {
            console.log("Esta vacio");
        });
        // this.api.fsAPI.onChangeFullscreen.subscribe((a:any)=>{
        //   if(this.api.fsAPI.isFullscreen){
        //     this.fulls=false;
        //   }else{
        //     this.fulls=true;      }
        // });
    }
};
AdsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_3__["VgFullscreenAPI"] }
];
AdsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ads',
        template: __webpack_require__(/*! raw-loader!./ads.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/ads/ads.component.html"),
        styles: [__webpack_require__(/*! ./ads.component.scss */ "./src/app/secciones/ads/ads.component.scss")]
    })
], AdsComponent);



/***/ }),

/***/ "./src/app/secciones/dashboard/pages/account/account.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/account/account.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*:focus {\n  box-shadow: 1px 5px 15px 3px #143c84;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy9hY2NvdW50L0M6XFxDcmlzZmxleFxcRmFtaWx5ZmxpeC9zcmNcXGFwcFxcc2VjY2lvbmVzXFxkYXNoYm9hcmRcXHBhZ2VzXFxhY2NvdW50XFxhY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWNjaW9uZXMvZGFzaGJvYXJkL3BhZ2VzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG9DQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zZWNjaW9uZXMvZGFzaGJvYXJkL3BhZ2VzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qOmZvY3VzeyAgICBcclxuICAgIGJveC1zaGFkb3c6IDFweCA1cHggMTVweCAzcHggIzE0M2M4NDtcclxufSAgIiwiKjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDFweCA1cHggMTVweCAzcHggIzE0M2M4NDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/secciones/dashboard/pages/account/account.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/account/account.component.ts ***!
  \************************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let AccountComponent = class AccountComponent {
    constructor(local) {
        this.local = local;
        this.usuario = [];
        this.getUsuario();
        this.profile = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.usuario.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.usuario.surname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.usuario.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.usuario.telefono, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            direccion2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            pais: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            telefono2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    }
    ngOnInit() {
    }
    getUsuario() {
        this.local.cargarStorage('usuario').then((data) => {
            this.usuario = data;
        }).catch(err => {
            throw err;
        });
    }
    actualizar() {
    }
};
AccountComponent.ctorParameters = () => [
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }
];
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/account/account.component.html"),
        providers: [src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]],
        styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/secciones/dashboard/pages/account/account.component.scss")]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/secciones/dashboard/pages/alquileres/alquileres.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/alquileres/alquileres.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY2Npb25lcy9kYXNoYm9hcmQvcGFnZXMvYWxxdWlsZXJlcy9hbHF1aWxlcmVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/secciones/dashboard/pages/alquileres/alquileres.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/alquileres/alquileres.component.ts ***!
  \******************************************************************************/
/*! exports provided: AlquileresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlquileresComponent", function() { return AlquileresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AlquileresComponent = class AlquileresComponent {
    constructor(api, local, router) {
        this.api = api;
        this.local = local;
        this.router = router;
        this.categoria = {
            id: "",
            categoria: ""
        };
        this.usuario = [];
        this.items = [];
        this.url = "";
        this.getUser();
    }
    ngOnInit() {
    }
    getUser() {
        this.local.cargarStorage('usuario').then((data) => {
            this.usuario = data;
            this.Alquileres(this.usuario.id, this.categoria.id);
        });
    }
    Alquileres(id, cat) {
        this.api.getAlquileres(id, cat).subscribe((resp) => {
            this.items = resp;
        });
    }
    openload(id) {
        this.router.navigate(['/principal/load', id]);
    }
};
AlquileresComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlquileresComponent.prototype, "categoria", void 0);
AlquileresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alquileres',
        template: __webpack_require__(/*! raw-loader!./alquileres.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/alquileres/alquileres.component.html"),
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],],
        styles: [__webpack_require__(/*! ./alquileres.component.scss */ "./src/app/secciones/dashboard/pages/alquileres/alquileres.component.scss")]
    })
], AlquileresComponent);



/***/ }),

/***/ "./src/app/secciones/dashboard/pages/carrito/carrito.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/carrito/carrito.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table > tbody > tr > td, .table > tfoot > tr > td {\n  vertical-align: middle;\n}\n\n*:focus {\n  box-shadow: 0px 0px 11px 15px #143c84;\n}\n\nsection {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy9jYXJyaXRvL0M6XFxDcmlzZmxleFxcRmFtaWx5ZmxpeC9zcmNcXGFwcFxcc2VjY2lvbmVzXFxkYXNoYm9hcmRcXHBhZ2VzXFxjYXJyaXRvXFxjYXJyaXRvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWNjaW9uZXMvZGFzaGJvYXJkL3BhZ2VzL2NhcnJpdG8vY2Fycml0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQ0FBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3NlY2Npb25lcy9kYXNoYm9hcmQvcGFnZXMvY2Fycml0by9jYXJyaXRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlPnRib2R5PnRyPnRkLCAudGFibGU+dGZvb3Q+dHI+dGR7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbio6Zm9jdXN7ICAgIFxyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMXB4IDE1cHggIzE0M2M4NDsgXHJcbn1cclxuXHJcbnNlY3Rpb257XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufSIsIi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCwgLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuKjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAxNXB4ICMxNDNjODQ7XG59XG5cbnNlY3Rpb24ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/secciones/dashboard/pages/carrito/carrito.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/carrito/carrito.component.ts ***!
  \************************************************************************/
/*! exports provided: CarritoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoComponent", function() { return CarritoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CarritoComponent = class CarritoComponent {
    constructor(local, http, api, router) {
        this.local = local;
        this.http = http;
        this.api = api;
        this.router = router;
        this.productos = [];
        this.total1 = 0;
        this.total = 0;
        this.productos_detalle = [];
        this.payuform = {};
        this.disablePaymentButton = true;
        this.data = [];
        this.cantidad = 0;
        this.precio = 0;
        this.usuario = [];
        this.datos_compra = [];
        this.compra_preparada = false;
        this.paymentPayload = {
            merchantId: "",
            accountId: "",
            referenceCode: "",
            signature: "",
            responseUrl: "",
            confirmationUrl: "",
            description: "",
            tax: 0,
            taxReturnBase: 0,
            currency: "",
            test: 1,
            amount: "",
            buyerEmail: "",
        };
        this.getCarrito();
        this.getUser();
    }
    ngOnInit() {
    }
    getCarrito() {
        this.local.cargarStorage('carrito').then((data) => {
            this.productos = data;
        });
    }
    getUser() {
        this.local.cargarStorage('usuario').then((data) => {
            this.usuario = data;
        });
    }
    cambiar(event, id, precio, name) {
        let data = {
            id: id,
            precio: precio,
            name: name,
            cantidad: event.target.value
        };
        let existe = this.productos_detalle.findIndex(e => e.id == data.id);
        if (existe != -1) {
            this.productos_detalle[existe] = {
                id: data.id,
                precio: data.precio,
                name: data.name,
                cantidad: data.cantidad,
                subtotal: (data.cantidad) * data.precio
            };
        }
        else {
            this.productos_detalle.push({
                id: data.id,
                precio: data.precio,
                name: data.name,
                cantidad: data.cantidad,
                subtotal: (data.cantidad) * data.precio
            });
        }
        this.total1 = 0;
        this.productos_detalle.forEach(a => {
            this.total1 += a.subtotal;
        });
        this.total = this.total1;
    }
    eliminarproducto(id) {
        let eliminar = this.productos_detalle.find(e => e.id == id);
        if (!eliminar) {
            this.cantidad = 0;
            this.precio = 0;
        }
        else {
            this.cantidad = eliminar.cantidad;
            this.precio = eliminar.precio;
        }
        this.total1 = this.precio * this.cantidad;
        let nuevo = this.productos_detalle.filter(productos_detalle => productos_detalle.id !== id);
        this.productos_detalle = nuevo;
        this.total1 = 0;
        this.productos_detalle.forEach(a => {
            this.total1 += a.subtotal;
        });
        this.total = this.total1;
        this.local.eliminarStorage('carrito');
        let newStorage = this.productos.filter(productos => productos.id !== id);
        this.productos = newStorage;
        this.local.eliminarStorage('carrito');
        this.local.SaveStorage('carrito', this.productos);
    }
    confirmPayment() {
        this.basicmodal.show();
        this.datos_compra = {
            productos: this.productos_detalle,
            email_usuario: this.usuario.email,
            amount: this.total
        };
        this.api.crearOrdenes(this.datos_compra).subscribe((resp) => {
            if (resp.ok == true) {
                this.basicmodal.hide();
                this.compra_preparada = true;
                this.paymentPayload = {
                    merchantId: resp.merchantId,
                    accountId: resp.accountId,
                    referenceCode: resp.referenceCode,
                    signature: resp.signature,
                    responseUrl: resp.responseUrl,
                    confirmationUrl: resp.confirmationUrl,
                    description: resp.description,
                    tax: 0,
                    taxReturnBase: 0,
                    currency: resp.currency,
                    test: 1,
                    amount: resp.amount,
                    buyerEmail: this.usuario.email //0        
                };
                console.log(this.paymentPayload);
            }
        });
    }
    direccionar() {
        this.local.eliminarStorage('carrito');
        this.router.navigate(['/principal/home']);
    }
};
CarritoComponent.ctorParameters = () => [
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicmodal', { static: false })
], CarritoComponent.prototype, "basicmodal", void 0);
CarritoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carrito',
        template: __webpack_require__(/*! raw-loader!./carrito.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/carrito/carrito.component.html"),
        providers: [src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [__webpack_require__(/*! ./carrito.component.scss */ "./src/app/secciones/dashboard/pages/carrito/carrito.component.scss")]
    })
], CarritoComponent);



/***/ }),

/***/ "./src/app/secciones/dashboard/pages/dash/dashboard.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/dash/dashboard.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*:focus {\n  box-shadow: 2px 2px 10px 8px #2ea1db;\n}\n\n.logo {\n  height: 3vw;\n  margin-left: 3vw;\n  margin-top: 1vw;\n  margin-bottom: 1vw;\n}\n\n.fondo {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#141445), color-stop(#171d54), color-stop(#192764), color-stop(#183174), to(#143c84)) !important;\n  background-image: linear-gradient(to bottom, #141445, #171d54, #192764, #183174, #143c84) !important;\n}\n\n.publicidad {\n  margin-top: 3vh;\n  position: fixed;\n  z-index: 1030;\n  width: 100%;\n}\n\n.atras {\n  z-index: 1000;\n}\n\n.box {\n  width: 5vw;\n  height: 97vh;\n  margin-top: 35vh;\n}\n\n.titulo {\n  margin-top: 25px;\n  margin-left: 25px;\n  margin-bottom: 20px;\n}\n\n.fuente {\n  font-size: 2.5vw;\n}\n\n.bottom {\n  justify-self: bottom;\n}\n\nbody {\n  min-height: 110vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy9kYXNoL0M6XFxDcmlzZmxleFxcRmFtaWx5ZmxpeC9zcmNcXGFwcFxcc2VjY2lvbmVzXFxkYXNoYm9hcmRcXHBhZ2VzXFxkYXNoXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlY2Npb25lcy9kYXNoYm9hcmQvcGFnZXMvZGFzaC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDRSx1S0FBQTtFQUFBLG9HQUFBO0FDRUY7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNJRjs7QUREQTtFQUNFLGdCQUFBO0FDSUY7O0FEREU7RUFDRSxvQkFBQTtBQ0lKOztBRERBO0VBQ0UsaUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3NlY2Npb25lcy9kYXNoYm9hcmQvcGFnZXMvZGFzaC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqOmZvY3VzeyAgICBcclxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggOHB4ICMyZWExZGI7XHJcbn0gICBcclxuXHJcbi5sb2dve1xyXG4gICAgaGVpZ2h0OiAzdnc7XHJcbiAgICBtYXJnaW4tbGVmdDogM3Z3O1xyXG4gICAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXZ3O1xyXG59XHJcbi5mb25kb3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTQxNDQ1LCAjMTcxZDU0LCAjMTkyNzY0LCAjMTgzMTc0LCAjMTQzYzg0KSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLnB1YmxpY2lkYWR7XHJcbiAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDMwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hdHJhc3tcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcbi5ib3h7XHJcbiAgICB3aWR0aDogNXZ3O1xyXG4gICAgaGVpZ2h0OiA5N3ZoO1xyXG4gICAgbWFyZ2luLXRvcDogMzV2aDtcclxufVxyXG4udGl0dWxve1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbn1cclxuLmZ1ZW50ZXtcclxuICBmb250LXNpemU6IDIuNXZ3O1xyXG59XHJcblxyXG4gIC5ib3R0b20ge1xyXG4gICAganVzdGlmeS1zZWxmOiBib3R0b207XHJcbiAgfVxyXG5cclxuYm9keXtcclxuICBtaW4taGVpZ2h0OiAxMTB2aDtcclxufSAgXHJcbiAgXHJcbiIsIio6Zm9jdXMge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggOHB4ICMyZWExZGI7XG59XG5cbi5sb2dvIHtcbiAgaGVpZ2h0OiAzdnc7XG4gIG1hcmdpbi1sZWZ0OiAzdnc7XG4gIG1hcmdpbi10b3A6IDF2dztcbiAgbWFyZ2luLWJvdHRvbTogMXZ3O1xufVxuXG4uZm9uZG8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTQxNDQ1LCAjMTcxZDU0LCAjMTkyNzY0LCAjMTgzMTc0LCAjMTQzYzg0KSAhaW1wb3J0YW50O1xufVxuXG4ucHVibGljaWRhZCB7XG4gIG1hcmdpbi10b3A6IDN2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDMwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmF0cmFzIHtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmJveCB7XG4gIHdpZHRoOiA1dnc7XG4gIGhlaWdodDogOTd2aDtcbiAgbWFyZ2luLXRvcDogMzV2aDtcbn1cblxuLnRpdHVsbyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZnVlbnRlIHtcbiAgZm9udC1zaXplOiAyLjV2dztcbn1cblxuLmJvdHRvbSB7XG4gIGp1c3RpZnktc2VsZjogYm90dG9tO1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTEwdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/secciones/dashboard/pages/dash/dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/dash/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");





let DashboardComponent = class DashboardComponent {
    constructor(router, store, local) {
        this.router = router;
        this.store = store;
        this.local = local;
        this.contador = 0;
        this.productos = [];
        this.logo = "logo.png";
        this.flag = true;
        // this.router.navigate(['/principal/home']);
        this.local.cargarStorage('carrito').then((data) => {
            this.productos = data;
            this.contador = this.productos.length;
        });
    }
    ngOnInit() {
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/dash/dashboard.component.html"),
        providers: [src_app_services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]],
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/secciones/dashboard/pages/dash/dashboard.component.scss")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/secciones/dashboard/pages/home/home.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/home/home.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*:focus {\n  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.7), 0 20px 20px rgba(0, 0, 0, 0.7);\n}\n\n.icon {\n  height: 20vh;\n}\n\n.box {\n  border-radius: 100px 0px 100px 0px;\n  -moz-border-radius: 100px 0px 100px 0px;\n  -webkit-border-radius: 100px 0px 100px 0px;\n  border: 0px solid #000000;\n  background-color: white;\n  height: 35vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy9ob21lL0M6XFxDcmlzZmxleFxcRmFtaWx5ZmxpeC9zcmNcXGFwcFxcc2VjY2lvbmVzXFxkYXNoYm9hcmRcXHBhZ2VzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWNjaW9uZXMvZGFzaGJvYXJkL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBFQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FERUE7RUFDQSxrQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0NBIiwiZmlsZSI6InNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqOmZvY3VzeyAgICBcclxuICBib3gtc2hhZG93OiAwIDMwcHggMzBweCByZ2JhKDAsMCwwLDAuNzApLCAwIDIwcHggMjBweCByZ2JhKDAsMCwwLDAuNzApO1xyXG59XHJcblxyXG5cclxuLmljb257XHJcbiAgaGVpZ2h0OiAyMHZoO1xyXG59XHJcbi5ib3h7XHJcbmJvcmRlci1yYWRpdXM6IDEwMHB4IDBweCAxMDBweCAwcHg7XHJcbi1tb3otYm9yZGVyLXJhZGl1czogMTAwcHggMHB4IDEwMHB4IDBweDtcclxuLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDBweCAwcHggMTAwcHggMHB4O1xyXG5ib3JkZXI6IDBweCBzb2xpZCAjMDAwMDAwO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuaGVpZ2h0OiAzNXZoO1xyXG59XHJcblxyXG4iLCIqOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjcpLCAwIDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5pY29uIHtcbiAgaGVpZ2h0OiAyMHZoO1xufVxuXG4uYm94IHtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHggMHB4IDEwMHB4IDBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDBweCAwcHggMTAwcHggMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwMHB4IDBweCAxMDBweCAwcHg7XG4gIGJvcmRlcjogMHB4IHNvbGlkICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDM1dmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/secciones/dashboard/pages/home/home.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/home/home.component.ts ***!
  \******************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");



let HomeComponent = class HomeComponent {
    constructor(local) {
        this.local = local;
        this.usuario = [];
        this.getUsuario();
    }
    ngOnInit() {
    }
    getUsuario() {
        this.local.cargarStorage('usuario').then((data) => {
            this.usuario = data;
        }).catch(err => {
            throw err;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/home/home.component.html"),
        providers: [src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]],
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/secciones/dashboard/pages/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/secciones/dashboard/pages/loadmovie/loadmovie.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/loadmovie/loadmovie.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY2Npb25lcy9kYXNoYm9hcmQvcGFnZXMvbG9hZG1vdmllL2xvYWRtb3ZpZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/secciones/dashboard/pages/loadmovie/loadmovie.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/loadmovie/loadmovie.component.ts ***!
  \****************************************************************************/
/*! exports provided: LoadmovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadmovieComponent", function() { return LoadmovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");




let LoadmovieComponent = class LoadmovieComponent {
    constructor(route, api) {
        this.route = route;
        this.api = api;
        this.snapshotParam = "initial value";
        this.subscribedParam = "initial value";
        this.item = [];
        this.url_video = "";
    }
    ngOnInit() {
        this.snapshotParam = this.route.snapshot.paramMap.get("source");
        // Subscribed
        this.route.paramMap.subscribe(params => {
            this.subscribedParam = params.get("source");
        });
        this.getProducto(this.subscribedParam);
    }
    getProducto(id) {
        this.api.getProducto(id).subscribe((resp) => {
            this.item = resp[0];
            this.url_video = `https://player.vimeo.com/video/${this.item.url}?autoplay=1&title=0&byline=0&portrait=0`;
            console.log(this.item);
        });
    }
};
LoadmovieComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
LoadmovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loadmovie',
        template: __webpack_require__(/*! raw-loader!./loadmovie.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/loadmovie/loadmovie.component.html"),
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]],
        styles: [__webpack_require__(/*! ./loadmovie.component.scss */ "./src/app/secciones/dashboard/pages/loadmovie/loadmovie.component.scss")]
    })
], LoadmovieComponent);



/***/ }),

/***/ "./src/app/secciones/dashboard/pages/miscompras/miscompras.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/miscompras/miscompras.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*:focus {\n  box-shadow: 0px 0px 11px 15px #143c84;\n}\n\nsection {\n  min-height: 100vh;\n}\n\n.icono {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy9taXNjb21wcmFzL0M6XFxDcmlzZmxleFxcRmFtaWx5ZmxpeC9zcmNcXGFwcFxcc2VjY2lvbmVzXFxkYXNoYm9hcmRcXHBhZ2VzXFxtaXNjb21wcmFzXFxtaXNjb21wcmFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWNjaW9uZXMvZGFzaGJvYXJkL3BhZ2VzL21pc2NvbXByYXMvbWlzY29tcHJhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy9taXNjb21wcmFzL21pc2NvbXByYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqOmZvY3VzeyAgICBcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAxNXB4ICMxNDNjODQ7IFxyXG59XHJcblxyXG5zZWN0aW9ue1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuLmljb25ve1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIFxyXG59IiwiKjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAxNXB4ICMxNDNjODQ7XG59XG5cbnNlY3Rpb24ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmljb25vIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/secciones/dashboard/pages/miscompras/miscompras.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/miscompras/miscompras.component.ts ***!
  \******************************************************************************/
/*! exports provided: MiscomprasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscomprasComponent", function() { return MiscomprasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");




let MiscomprasComponent = class MiscomprasComponent {
    constructor(api, local) {
        this.api = api;
        this.local = local;
        this.usuario = [];
        this.ordenes = [];
        this.productos = [];
        this.getUser();
    }
    ngOnInit() {
    }
    getOrdenes() {
        this.api.getOrdenes(this.usuario.email).subscribe((resp) => {
            this.ordenes = resp;
        });
    }
    getUser() {
        this.local.cargarStorage('usuario').then((data) => {
            this.usuario = data;
            this.getOrdenes();
        });
    }
    vermas(id) {
        this.api.getProductosOrdenes(id).subscribe((resp) => {
            this.productos = resp;
            this.basicModal.show();
            console.log(this.productos);
        });
    }
};
MiscomprasComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicModal', { static: false })
], MiscomprasComponent.prototype, "basicModal", void 0);
MiscomprasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-miscompras',
        template: __webpack_require__(/*! raw-loader!./miscompras.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/miscompras/miscompras.component.html"),
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]],
        styles: [__webpack_require__(/*! ./miscompras.component.scss */ "./src/app/secciones/dashboard/pages/miscompras/miscompras.component.scss")]
    })
], MiscomprasComponent);



/***/ }),

/***/ "./src/app/secciones/dashboard/pages/multimedia/multimedia.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/multimedia/multimedia.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*:focus {\n  box-shadow: 0px 0px 11px 15px #143c84;\n}\n\n.focus:focus {\n  box-shadow: 0px 0px 11px 15px #143c84;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy9tdWx0aW1lZGlhL0M6XFxDcmlzZmxleFxcRmFtaWx5ZmxpeC9zcmNcXGFwcFxcc2VjY2lvbmVzXFxkYXNoYm9hcmRcXHBhZ2VzXFxtdWx0aW1lZGlhXFxtdWx0aW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWNjaW9uZXMvZGFzaGJvYXJkL3BhZ2VzL211bHRpbWVkaWEvbXVsdGltZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0FDQ0o7O0FERUE7RUFDSSxxQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy9tdWx0aW1lZGlhL211bHRpbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqOmZvY3VzeyAgICBcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAxNXB4ICMxNDNjODQ7IFxyXG59XHJcblxyXG4uZm9jdXM6Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggMTVweCAjMTQzYzg0OyBcclxufSIsIio6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggMTVweCAjMTQzYzg0O1xufVxuXG4uZm9jdXM6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggMTVweCAjMTQzYzg0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/secciones/dashboard/pages/multimedia/multimedia.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/multimedia/multimedia.component.ts ***!
  \******************************************************************************/
/*! exports provided: MultimediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaComponent", function() { return MultimediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let MultimediaComponent = class MultimediaComponent {
    constructor(store, api, router) {
        this.store = store;
        this.api = api;
        this.router = router;
        this.categoria = {
            id: "",
            categoria: ""
        };
        this.item = [];
        this.slides = [[]];
        this.items = [];
    }
    ngOnInit() {
        this.GetProductos(this.categoria.id);
    }
    OpenModal(id) {
        this.router.navigate(['/principal/review', id]);
    }
    GetProductos(id) {
        this.api.getProductos(id).subscribe(resp => {
            this.items = resp;
        });
    }
    agregar(id) {
        this.store.addproducto(id).subscribe((resp) => {
        });
    }
};
MultimediaComponent.ctorParameters = () => [
    { type: src_app_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicModal', { static: false })
], MultimediaComponent.prototype, "basicModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MultimediaComponent.prototype, "categoria", void 0);
MultimediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-multimedia',
        template: __webpack_require__(/*! raw-loader!./multimedia.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/multimedia/multimedia.component.html"),
        providers: [src_app_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]],
        styles: [__webpack_require__(/*! ./multimedia.component.scss */ "./src/app/secciones/dashboard/pages/multimedia/multimedia.component.scss")]
    })
], MultimediaComponent);



/***/ }),

/***/ "./src/app/secciones/dashboard/pages/player/player.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/player/player.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ring {\n  position: absolute;\n  top: 200px;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 150px;\n  height: 150px;\n  background: transparent;\n  border: 3px solid #3c3c3c;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 150px;\n  font-family: sans-serif;\n  font-size: 20px;\n  color: #fff000;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  text-shadow: 0 0 10px #fff000;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n}\n\n.ring:before {\n  content: \"\";\n  position: absolute;\n  top: -3px;\n  left: -3px;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top: 3px solid #fff000;\n  border-right: 3px solid #fff000;\n  border-radius: 50%;\n  -webkit-animation: animateCircle 2s linear infinite;\n          animation: animateCircle 2s linear infinite;\n}\n\nspan {\n  display: block;\n  position: absolute;\n  top: calc(50% - 2px);\n  left: 50%;\n  width: 50%;\n  height: 4px;\n  background: transparent;\n  -webkit-transform-origin: left;\n          transform-origin: left;\n  -webkit-animation: animate 2s linear infinite;\n          animation: animate 2s linear infinite;\n}\n\nspan:before {\n  content: \"\";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: #fff000;\n  top: -6px;\n  right: -8px;\n  box-shadow: 0 0 20px #fff000;\n}\n\n@-webkit-keyframes animateCircle {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes animateCircle {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes animate {\n  0% {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  100% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n}\n\n@keyframes animate {\n  0% {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  100% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy9wbGF5ZXIvQzpcXENyaXNmbGV4XFxGYW1pbHlmbGl4L3NyY1xcYXBwXFxzZWNjaW9uZXNcXGRhc2hib2FyZFxccGFnZXNcXHBsYXllclxccGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWNjaW9uZXMvZGFzaGJvYXJkL3BhZ2VzL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtBQ0NEOztBRENBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtBQ0VEOztBREFBO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSw2Q0FBQTtVQUFBLHFDQUFBO0FDR0Q7O0FEREE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDSUQ7O0FEREM7RUFFQTtJQUVDLCtCQUFBO1lBQUEsdUJBQUE7RUNFQTtFREFEO0lBRUMsaUNBQUE7WUFBQSx5QkFBQTtFQ0NBO0FBQ0Y7O0FEVkM7RUFFQTtJQUVDLCtCQUFBO1lBQUEsdUJBQUE7RUNFQTtFREFEO0lBRUMsaUNBQUE7WUFBQSx5QkFBQTtFQ0NBO0FBQ0Y7O0FEQ0E7RUFFQztJQUVDLGdDQUFBO1lBQUEsd0JBQUE7RUNEQTtFREdEO0lBRUMsaUNBQUE7WUFBQSx5QkFBQTtFQ0ZBO0FBQ0Y7O0FEUEE7RUFFQztJQUVDLGdDQUFBO1lBQUEsd0JBQUE7RUNEQTtFREdEO0lBRUMsaUNBQUE7WUFBQSx5QkFBQTtFQ0ZBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zZWNjaW9uZXMvZGFzaGJvYXJkL3BhZ2VzL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmluZyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMjAwcHg7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7IFxyXG5cdHdpZHRoOiAxNTBweDtcclxuXHRoZWlnaHQ6IDE1MHB4O1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlcjogM3B4IHNvbGlkICMzYzNjM2M7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRsaW5lLWhlaWdodDogMTUwcHg7XHJcblx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGNvbG9yOiAjZmZmMDAwO1xyXG5cdGxldHRlci1zcGFjaW5nOjRweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdHRleHQtc2hhZG93OjAgMCAxMHB4ICNmZmYwMDA7XHJcblx0Ym94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLDAsMCwuNSk7XHJcbn1cclxuLnJpbmc6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtM3B4O1xyXG5cdGxlZnQ6IC0zcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci10b3A6IDNweCBzb2xpZCAjZmZmMDAwO1xyXG5cdGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmZmYwMDA7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGFuaW1hdGlvbjogYW5pbWF0ZUNpcmNsZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuc3BhbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogY2FsYyg1MCUgLSAycHgpO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR3aWR0aDogNTAlO1xyXG5cdGhlaWdodDogNHB4O1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdHRyYW5zZm9ybS1vcmlnaW46bGVmdDtcclxuXHRhbmltYXRpb246IGFuaW1hdGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbnNwYW46YmVmb3JlIHtcclxuXHRjb250ZW50OicnO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTZweDtcclxuXHRoZWlnaHQ6IDE2cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmYwMDA7XHJcblx0dG9wOiAtNnB4O1xyXG5cdHJpZ2h0OiAtOHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgMCAyMHB4ICNmZmYwMDA7XHJcbn1cclxuXHJcbiBAa2V5ZnJhbWVzIGFuaW1hdGVDaXJjbGVcclxue1xyXG5cdDAlXHJcblx0e1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDEwMCVcclxuXHR7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdH1cclxufVxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVcclxue1xyXG5cdDAlXHJcblx0e1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdH1cclxuXHQxMDAlXHJcblx0e1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKTtcclxuXHR9XHJcbn0iLCIucmluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMDBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzNjM2MzYztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNTBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmYwMDA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmMDAwO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5yaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtM3B4O1xuICBsZWZ0OiAtM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmZmYwMDA7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmZmYwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBhbmltYXRlQ2lyY2xlIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAycHgpO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuc3BhbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjAwMDtcbiAgdG9wOiAtNnB4O1xuICByaWdodDogLThweDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggI2ZmZjAwMDtcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlQ2lyY2xlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/secciones/dashboard/pages/player/player.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/player/player.component.ts ***!
  \**********************************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! videogular2/compiled/core */ "./node_modules/videogular2/compiled/core.js");
/* harmony import */ var videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let PlayerComponent = class PlayerComponent {
    constructor(fsApi, route, contenido) {
        this.fsApi = fsApi;
        this.route = route;
        this.contenido = contenido;
        this.src = "http://familymedia.orione.cf/api/img/videos/12345.mp4";
        this.loading = true;
        this.video = false;
        this.audio = false;
        this.fulls = true;
        this.active = false;
        this.ads = true;
        this.snapshotParam = "initial value";
        this.subscribedParam = "initial value";
        this.source = {
            url: "",
            imagen: ""
        };
    }
    ngOnInit() {
        this.snapshotParam = this.route.snapshot.paramMap.get("source");
        // Subscribed
        this.route.paramMap.subscribe(params => {
            this.subscribedParam = params.get("source");
        });
    }
    getSource(id) {
        this.contenido.getContenido(id).subscribe((resp) => {
            console.log(resp);
            if (resp.ok == true) {
                let tipo = resp.results[0].tipo;
                this.source = {
                    url: resp.results[0].url,
                    imagen: resp.results[0].imagen
                };
                if (tipo == 1) {
                    this.setAudio();
                }
                else if (tipo == 2) {
                    this.setVideo();
                }
            }
        });
    }
    onPlayerReady(player) {
        this.api = player;
        this.api.getDefaultMedia().subscriptions.loadStart.subscribe((a) => {
            this.playAudio();
        });
        let subscriptions = this.api.getDefaultMedia();
        // this.api.getDefaultMedia().subscriptions.play.subscribe( a=>{
        //   console.log("Esta PLay");
        //   this.active=true;
        // }); 
        // subscriptions.subscriptions.pause.subscribe(a=>{
        //   this.active=false;
        // });
        subscriptions.subscriptions.emptied.subscribe(a => {
            console.log("Esta vacio");
        });
        subscriptions.subscriptions.ended.subscribe(a => {
            this.ads = false;
            this.getSource(this.subscribedParam);
        });
        this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe((a) => {
            this.playAudio();
        }, error => {
            console.log(error);
        });
        this.api.fsAPI.onChangeFullscreen.subscribe((a) => {
            if (this.api.fsAPI.isFullscreen) {
                this.fulls = false;
            }
            else {
                this.fulls = true;
            }
        });
    }
    playAudio() {
        this.api.play();
    }
    errorAudio(event) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Radio Error Prueba otra emisora');
    }
    stopAudio() {
        this.api.pause();
        this.stado = false;
    }
    setAudio() {
        this.loading = false;
        this.audio = true;
    }
    setVideo() {
        this.loading = false;
        this.video = true;
    }
};
PlayerComponent.ctorParameters = () => [
    { type: videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_2__["VgFullscreenAPI"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player',
        template: __webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/player/player.component.html"),
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/secciones/dashboard/pages/player/player.component.scss")]
    })
], PlayerComponent);



/***/ }),

/***/ "./src/app/secciones/dashboard/pages/products/products.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/products/products.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*:focus {\n  box-shadow: 0px 0px 20px 25px #143c84;\n}\n\n.slide {\n  height: 100px;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy9wcm9kdWN0cy9DOlxcQ3Jpc2ZsZXhcXEZhbWlseWZsaXgvc3JjXFxhcHBcXHNlY2Npb25lc1xcZGFzaGJvYXJkXFxwYWdlc1xccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWNjaW9uZXMvZGFzaGJvYXJkL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zZWNjaW9uZXMvZGFzaGJvYXJkL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKjpmb2N1c3sgICAgXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMjVweCAjMTQzYzg0OyBcclxufVxyXG4uc2xpZGV7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59IiwiKjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAyNXB4ICMxNDNjODQ7XG59XG5cbi5zbGlkZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/secciones/dashboard/pages/products/products.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/products/products.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ProductsComponent = class ProductsComponent {
    constructor(store, api, router) {
        this.store = store;
        this.api = api;
        this.router = router;
        this.categoria = {
            id: "",
            categoria: ""
        };
        this.items = [];
        this.item = [];
    }
    ngOnInit() {
        this.GetProductos(this.categoria.id);
    }
    OpenModal(id) {
        this.router.navigate(['/principal/review', id]);
    }
    GetProductos(id) {
        this.api.getVideos(id).subscribe(resp => {
            this.items = resp;
        });
    }
    agregar(id) {
        this.store.addproducto(id).subscribe(resp => {
        }, error => {
            console.log(error);
        });
    }
};
ProductsComponent.ctorParameters = () => [
    { type: src_app_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicModal', { static: false })
], ProductsComponent.prototype, "basicModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductsComponent.prototype, "categoria", void 0);
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/products/products.component.html"),
        providers: [src_app_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]],
        styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/secciones/dashboard/pages/products/products.component.scss")]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/secciones/dashboard/pages/radio/radio.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/radio/radio.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*:focus {\n  box-shadow: 0px 0px 11px 15px #143c84;\n}\n\n.view {\n  -webkit-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\nsection {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy9yYWRpby9DOlxcQ3Jpc2ZsZXhcXEZhbWlseWZsaXgvc3JjXFxhcHBcXHNlY2Npb25lc1xcZGFzaGJvYXJkXFxwYWdlc1xccmFkaW9cXHJhZGlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWNjaW9uZXMvZGFzaGJvYXJkL3BhZ2VzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUNBQUE7QUNBSjs7QURFQTtFQUNJLDZEQUFBO0VBQUEscURBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zZWNjaW9uZXMvZGFzaGJvYXJkL3BhZ2VzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbio6Zm9jdXN7ICAgIFxyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMXB4IDE1cHggIzE0M2M4NDsgXHJcbn1cclxuLnZpZXd7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcclxufVxyXG5zZWN0aW9ue1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn0iLCIqOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMXB4IDE1cHggIzE0M2M4NDtcbn1cblxuLnZpZXcge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbn1cblxuc2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/secciones/dashboard/pages/radio/radio.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/radio/radio.component.ts ***!
  \********************************************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RadioComponent = class RadioComponent {
    constructor(contenido, router) {
        this.contenido = contenido;
        this.router = router;
        this.radios = [];
        this.idiomas = [];
        this.data = 0;
        this.source = "";
        this.getRadios(0);
    }
    ngOnInit() {
    }
    getRadios(id) {
        this.contenido.getEmisoras(id).subscribe((resp) => {
            this.radios = resp;
        });
    }
    filtrar(event) {
        this.data = event;
        this.getRadios(this.data);
    }
    openMedios(radio) {
        this.source = radio.id;
        this.router.navigate(['/principal/player', this.source]);
    }
};
RadioComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RadioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-radio',
        template: __webpack_require__(/*! raw-loader!./radio.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/radio/radio.component.html"),
        providers: [],
        styles: [__webpack_require__(/*! ./radio.component.scss */ "./src/app/secciones/dashboard/pages/radio/radio.component.scss")]
    })
], RadioComponent);



/***/ }),

/***/ "./src/app/secciones/dashboard/pages/review/review.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/review/review.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY2Npb25lcy9kYXNoYm9hcmQvcGFnZXMvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/secciones/dashboard/pages/review/review.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/review/review.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ReviewComponent = class ReviewComponent {
    constructor(store, api, route) {
        this.store = store;
        this.api = api;
        this.route = route;
        this.snapshotParam = "initial value";
        this.subscribedParam = "initial value";
        this.item = [];
    }
    ngOnInit() {
        this.snapshotParam = this.route.snapshot.paramMap.get("source");
        // Subscribed
        this.route.paramMap.subscribe(params => {
            this.subscribedParam = params.get("source");
        });
        this.getProducto(this.subscribedParam);
    }
    getProducto(id) {
        this.api.getProducto(id).subscribe((resp) => {
            this.item = resp[0];
        });
    }
    agregar(id) {
        this.store.addproducto(id).subscribe(resp => {
        }, error => {
            console.log(error);
        });
    }
};
ReviewComponent.ctorParameters = () => [
    { type: src_app_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review',
        template: __webpack_require__(/*! raw-loader!./review.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/review/review.component.html"),
        providers: [src_app_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]],
        styles: [__webpack_require__(/*! ./review.component.scss */ "./src/app/secciones/dashboard/pages/review/review.component.scss")]
    })
], ReviewComponent);



/***/ }),

/***/ "./src/app/secciones/dashboard/pages/store/store.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/store/store.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy9zdG9yZS9DOlxcQ3Jpc2ZsZXhcXEZhbWlseWZsaXgvc3JjXFxhcHBcXHNlY2Npb25lc1xcZGFzaGJvYXJkXFxwYWdlc1xcc3RvcmVcXHN0b3JlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWNjaW9uZXMvZGFzaGJvYXJkL3BhZ2VzL3N0b3JlL3N0b3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy9zdG9yZS9zdG9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaWNvbntcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn0iLCIuaWNvbiB7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/secciones/dashboard/pages/store/store.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/store/store.component.ts ***!
  \********************************************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");




let StoreComponent = class StoreComponent {
    constructor(api, local) {
        this.api = api;
        this.local = local;
        this.categorias = [];
        this.alquiler = false;
        this.oferta = false;
        this.usuario = [];
        this.items_alquilados = [];
        this.getCategorias();
    }
    ngOnInit() {
    }
    getCategorias() {
        this.api.getCategorias().subscribe((resp) => {
            this.categorias = resp;
            console.log(this.categorias);
        });
    }
    visualizar(id) {
        if (id == 1) {
            this.oferta = true;
            this.alquiler = false;
        }
        else {
            this.oferta = false;
            this.alquiler = true;
        }
    }
};
StoreComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }
];
StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-store',
        template: __webpack_require__(/*! raw-loader!./store.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/store/store.component.html"),
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]],
        styles: [__webpack_require__(/*! ./store.component.scss */ "./src/app/secciones/dashboard/pages/store/store.component.scss")]
    })
], StoreComponent);



/***/ }),

/***/ "./src/app/secciones/dashboard/pages/tv/tv.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/tv/tv.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*:focus {\n  box-shadow: 2px 2px 10px 8px #2ea1db;\n}\n\nsection {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy90di9DOlxcQ3Jpc2ZsZXhcXEZhbWlseWZsaXgvc3JjXFxhcHBcXHNlY2Npb25lc1xcZGFzaGJvYXJkXFxwYWdlc1xcdHZcXHR2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWNjaW9uZXMvZGFzaGJvYXJkL3BhZ2VzL3R2L3R2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZWNjaW9uZXMvZGFzaGJvYXJkL3BhZ2VzL3R2L3R2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKjpmb2N1c3sgICAgXHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggOHB4ICMyZWExZGI7XHJcbiAgfSAgIFxyXG5cclxuc2VjdGlvbntcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4iLCIqOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDhweCAjMmVhMWRiO1xufVxuXG5zZWN0aW9uIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/secciones/dashboard/pages/tv/tv.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/tv/tv.component.ts ***!
  \**************************************************************/
/*! exports provided: TvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvComponent", function() { return TvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let TvComponent = class TvComponent {
    constructor(contenido, router) {
        this.contenido = contenido;
        this.router = router;
        this.tvs = [];
        this.data = 0;
        this.source = [];
        this.getTv(this.data);
    }
    ngOnInit() {
    }
    getTv(data) {
        this.contenido.getTv(data).subscribe((resp) => {
            this.tvs = resp;
        });
    }
    filtrar(event) {
        this.data = event;
        this.getTv(this.data);
    }
    // OpenPublicidad() {
    //   let v = this.publicidad.length;
    //   let number = Math.floor(Math.random() * (v - 0) + 0);
    //   let videoP = this.publicidad[number];
    //   this.url_video = `https://player.vimeo.com/video/${videoP.url}?autoplay=1&title=0&byline=0&portrait=0`;
    //   this.basicModal.show();
    //   setTimeout(() => {
    //     this.url_video = null;
    //     this.basicModal.hide();
    //   }, 30000);
    // }
    openTv(tv) {
        this.source = tv.id;
        this.router.navigate(['/principal/player', this.source]);
    }
};
TvComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tv',
        template: __webpack_require__(/*! raw-loader!./tv.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/tv/tv.component.html"),
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]],
        styles: [__webpack_require__(/*! ./tv.component.scss */ "./src/app/secciones/dashboard/pages/tv/tv.component.scss")]
    })
], TvComponent);



/***/ }),

/***/ "./src/app/secciones/dashboard/pages/videos/videos.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/videos/videos.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy92aWRlb3MvQzpcXENyaXNmbGV4XFxGYW1pbHlmbGl4L3NyY1xcYXBwXFxzZWNjaW9uZXNcXGRhc2hib2FyZFxccGFnZXNcXHZpZGVvc1xcdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWNjaW9uZXMvZGFzaGJvYXJkL3BhZ2VzL3ZpZGVvcy92aWRlb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2VjY2lvbmVzL2Rhc2hib2FyZC9wYWdlcy92aWRlb3MvdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59Iiwic2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/secciones/dashboard/pages/videos/videos.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/secciones/dashboard/pages/videos/videos.component.ts ***!
  \**********************************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");



let VideosComponent = class VideosComponent {
    constructor(api) {
        this.api = api;
        this.categorias = [];
        this.getCategorias();
    }
    ngOnInit() {
    }
    getCategorias() {
        this.api.getPCategorias().subscribe((resp) => {
            this.categorias = resp;
            console.log(this.categorias);
        });
    }
};
VideosComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
VideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-videos',
        template: __webpack_require__(/*! raw-loader!./videos.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/dashboard/pages/videos/videos.component.html"),
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]],
        styles: [__webpack_require__(/*! ./videos.component.scss */ "./src/app/secciones/dashboard/pages/videos/videos.component.scss")]
    })
], VideosComponent);



/***/ }),

/***/ "./src/app/secciones/navegacion/navbar/navbar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/secciones/navegacion/navbar/navbar.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-menu {\n  height: 75%;\n  width: 10vw;\n  border-radius: 0px 15px 15px 0px;\n}\n\n.user-logo {\n  width: 7vw;\n}\n\n.sidemenu {\n  height: 75%;\n  width: 95%;\n  margin-top: 1rem;\n}\n\n.gradiente {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#00b3e0), color-stop(#00bae1), color-stop(#00c0e1), color-stop(#00c7e1), to(#00cde0));\n  background-image: linear-gradient(to bottom, #00b3e0, #00bae1, #00c0e1, #00c7e1, #00cde0);\n}\n\n.profile {\n  height: 14vh;\n  width: 14vh;\n  border-radius: 50%;\n  margin-top: 5vh;\n  margin-left: 23%;\n}\n\n.abierto {\n  display: block;\n  -webkit-transition: 10ms;\n  transition: 10ms;\n}\n\n.cerrado {\n  display: none;\n  -webkit-transition: 10ms;\n  transition: 10ms;\n}\n\n.toggle {\n  width: 1vw;\n  height: 5vw;\n}\n\n.toogle {\n  margin-top: 15vh;\n}\n\n.arrow {\n  margin-top: 23vh;\n}\n\n.sidebar {\n  width: 20vw;\n  height: 70vh;\n  min-height: 200px;\n  overflow: auto;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 30vh;\n  background-color: #141445;\n  border-radius: 0px 10px 10px 0px;\n}\n\n.side {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#141445), color-stop(#171d54), color-stop(#192764), color-stop(#183174), to(#143c84));\n  background-image: linear-gradient(to bottom, #141445, #171d54, #192764, #183174, #143c84);\n  border-radius: 0px 10px 10px 0px;\n}\n\n*:focus {\n  box-shadow: 2px 2px 10px 8px #2ea1db;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL25hdmVnYWNpb24vbmF2YmFyL0M6XFxDcmlzZmxleFxcRmFtaWx5ZmxpeC9zcmNcXGFwcFxcc2VjY2lvbmVzXFxuYXZlZ2FjaW9uXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VjY2lvbmVzL25hdmVnYWNpb24vbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUNBSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDQTtFQUNJLDRKQUFBO0VBQUEseUZBQUE7QUNFSjs7QURBQTtFQUNRLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHUjs7QURBQTtFQUNJLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNLSjs7QURGQTtFQUNJLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxnQkFBQTtBQ01KOztBREhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUNNSjs7QURIQTtFQUNJLDRKQUFBO0VBQUEseUZBQUE7RUFDQSxnQ0FBQTtBQ01KOztBREhBO0VBQ0ksb0NBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL3NlY2Npb25lcy9uYXZlZ2FjaW9uL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJveC1tZW51e1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICB3aWR0aDogMTB2dzsgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4OyBcclxufVxyXG4udXNlci1sb2dve1xyXG4gICAgd2lkdGg6IDd2dztcclxufVxyXG4uc2lkZW1lbnV7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgXHJcbn1cclxuLmdyYWRpZW50ZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMGIzZTAsICMwMGJhZTEsICMwMGMwZTEsICMwMGM3ZTEsICMwMGNkZTApO1xyXG59XHJcbi5wcm9maWxle1xyXG4gICAgICAgIGhlaWdodDogMTR2aDtcclxuICAgICAgICB3aWR0aDogMTR2aDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMyU7XHJcbn0gICBcclxuXHJcbi5hYmllcnRve1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAxMG1zO1xyXG59XHJcbi5jZXJyYWRve1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IDEwbXM7XHJcbn1cclxuLnRvZ2dsZXsgXHJcbiAgICB3aWR0aDogMXZ3O1xyXG4gICAgaGVpZ2h0OiA1dnc7XHJcbiAgIFxyXG59XHJcbi50b29nbGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xyXG59XHJcbi5hcnJvd3tcclxuICAgIG1hcmdpbi10b3A6IDIzdmg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgaGVpZ2h0OiA3MHZoOyAvLyBleHBlcmltZW50IHdpdGggdGhpcyB2YWx1ZSwgdHJ5IGNoYW5naW5nIHRvIDExMHZoXHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMzB2aDsgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQ0NTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xyXG4gIH0gIFxyXG5cclxuLnNpZGV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTQxNDQ1LCAjMTcxZDU0LCAjMTkyNzY0LCAjMTgzMTc0LCAjMTQzYzg0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xyXG59ICBcclxuXHJcbio6Zm9jdXN7ICAgIFxyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDhweCAjMmVhMWRiO1xyXG4gIH0gICBcclxuXHJcbiIsIi5ib3gtbWVudSB7XG4gIGhlaWdodDogNzUlO1xuICB3aWR0aDogMTB2dztcbiAgYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMTVweCAwcHg7XG59XG5cbi51c2VyLWxvZ28ge1xuICB3aWR0aDogN3Z3O1xufVxuXG4uc2lkZW1lbnUge1xuICBoZWlnaHQ6IDc1JTtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmdyYWRpZW50ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMGIzZTAsICMwMGJhZTEsICMwMGMwZTEsICMwMGM3ZTEsICMwMGNkZTApO1xufVxuXG4ucHJvZmlsZSB7XG4gIGhlaWdodDogMTR2aDtcbiAgd2lkdGg6IDE0dmg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBtYXJnaW4tbGVmdDogMjMlO1xufVxuXG4uYWJpZXJ0byB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAxMG1zO1xufVxuXG4uY2VycmFkbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRyYW5zaXRpb246IDEwbXM7XG59XG5cbi50b2dnbGUge1xuICB3aWR0aDogMXZ3O1xuICBoZWlnaHQ6IDV2dztcbn1cblxuLnRvb2dsZSB7XG4gIG1hcmdpbi10b3A6IDE1dmg7XG59XG5cbi5hcnJvdyB7XG4gIG1hcmdpbi10b3A6IDIzdmg7XG59XG5cbi5zaWRlYmFyIHtcbiAgd2lkdGg6IDIwdnc7XG4gIGhlaWdodDogNzB2aDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMzB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQ0NTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG59XG5cbi5zaWRlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE0MTQ0NSwgIzE3MWQ1NCwgIzE5Mjc2NCwgIzE4MzE3NCwgIzE0M2M4NCk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xufVxuXG4qOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDhweCAjMmVhMWRiO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/secciones/navegacion/navbar/navbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/secciones/navegacion/navbar/navbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() {
        this.menu = false;
        this.menu = true;
    }
    ngOnInit() {
    }
    ocultarmenu() {
        console.log("entro");
        if (this.menu == false) {
            this.menu = true;
        }
        else {
            this.menu = false;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavbarComponent.prototype, "menu", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/navegacion/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/secciones/navegacion/navbar/navbar.component.scss")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/secciones/navegacion/topnavbar/topnavbar.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/secciones/navegacion/topnavbar/topnavbar.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*:focus {\n  box-shadow: 1px 5px 15px 3px #143c84;\n}\n\n.box-menu {\n  border-radius: 0px 0px 15px 15px;\n}\n\n.nav {\n  width: 60vw;\n}\n\n.logo {\n  height: 3vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL25hdmVnYWNpb24vdG9wbmF2YmFyL0M6XFxDcmlzZmxleFxcRmFtaWx5ZmxpeC9zcmNcXGFwcFxcc2VjY2lvbmVzXFxuYXZlZ2FjaW9uXFx0b3BuYXZiYXJcXHRvcG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VjY2lvbmVzL25hdmVnYWNpb24vdG9wbmF2YmFyL3RvcG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQ0FBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtBQ0dKOztBREFBO0VBQ0ksV0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvc2VjY2lvbmVzL25hdmVnYWNpb24vdG9wbmF2YmFyL3RvcG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIio6Zm9jdXN7ICAgIFxyXG4gICAgYm94LXNoYWRvdzogMXB4IDVweCAxNXB4IDNweCAjMTQzYzg0O1xyXG59XHJcbi5ib3gtbWVudXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCAxNXB4O1xyXG59XHJcbi5uYXZ7XHJcbiAgICB3aWR0aDogNjB2dztcclxufVxyXG5cclxuLmxvZ297XHJcbiAgICBoZWlnaHQ6IDN2aDtcclxufVxyXG4iLCIqOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMXB4IDVweCAxNXB4IDNweCAjMTQzYzg0O1xufVxuXG4uYm94LW1lbnUge1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweDtcbn1cblxuLm5hdiB7XG4gIHdpZHRoOiA2MHZ3O1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogM3ZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/secciones/navegacion/topnavbar/topnavbar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/secciones/navegacion/topnavbar/topnavbar.component.ts ***!
  \***********************************************************************/
/*! exports provided: TopnavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavbarComponent", function() { return TopnavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");



let TopnavbarComponent = class TopnavbarComponent {
    constructor(contenido) {
        this.contenido = contenido;
        this.IdiomaSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.idiomas = [];
        this.cargarIdiomas();
    }
    ngOnInit() {
    }
    cargarIdiomas() {
        this.contenido.getIdiomas().subscribe(resp => {
            this.idiomas = resp;
        });
    }
    cambiarIdioma(data) {
        this.IdiomaSeleccionado.emit(data);
    }
};
TopnavbarComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TopnavbarComponent.prototype, "IdiomaSeleccionado", void 0);
TopnavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topnavbar',
        template: __webpack_require__(/*! raw-loader!./topnavbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/navegacion/topnavbar/topnavbar.component.html"),
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]],
        styles: [__webpack_require__(/*! ./topnavbar.component.scss */ "./src/app/secciones/navegacion/topnavbar/topnavbar.component.scss")]
    })
], TopnavbarComponent);



/***/ }),

/***/ "./src/app/secciones/publicidad/publicidad.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/secciones/publicidad/publicidad.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pbseccion {\n  height: 15vh;\n  width: 85vw;\n}\n\n.banner-image {\n  max-width: 90vw;\n  height: 20vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL3B1YmxpY2lkYWQvQzpcXENyaXNmbGV4XFxGYW1pbHlmbGl4L3NyY1xcYXBwXFxzZWNjaW9uZXNcXHB1YmxpY2lkYWRcXHB1YmxpY2lkYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlY2Npb25lcy9wdWJsaWNpZGFkL3B1YmxpY2lkYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3NlY2Npb25lcy9wdWJsaWNpZGFkL3B1YmxpY2lkYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGJzZWNjaW9ue1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgd2lkdGg6IDg1dnc7XHJcbn1cclxuLmJhbm5lci1pbWFnZXsgIFxyXG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG59IiwiLnBic2VjY2lvbiB7XG4gIGhlaWdodDogMTV2aDtcbiAgd2lkdGg6IDg1dnc7XG59XG5cbi5iYW5uZXItaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDkwdnc7XG4gIGhlaWdodDogMjB2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/secciones/publicidad/publicidad.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/secciones/publicidad/publicidad.component.ts ***!
  \**************************************************************/
/*! exports provided: PublicidadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicidadComponent", function() { return PublicidadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");



let PublicidadComponent = class PublicidadComponent {
    constructor(api) {
        this.api = api;
        this.images = [];
        this.items = [];
        this.getBanners();
        // config.showNavigationArrows = true;    
        // config.interval = 2000;
        // config.wrap = true;
        // config.pauseOnHover = false;
    }
    ngOnInit() {
    }
    getBanners() {
        this.api.getBanners().subscribe((resp) => {
            this.items = resp;
            this.items.forEach(e => {
                this.images.push({
                    image: `http://familymedia.orione.cf/api/img/publicidad/${e.archivo}`
                });
            });
        });
    }
};
PublicidadComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carrousel', { static: false })
], PublicidadComponent.prototype, "carrousel", void 0);
PublicidadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publicidad',
        template: __webpack_require__(/*! raw-loader!./publicidad.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/publicidad/publicidad.component.html"),
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]],
        styles: [__webpack_require__(/*! ./publicidad.component.scss */ "./src/app/secciones/publicidad/publicidad.component.scss")]
    })
], PublicidadComponent);



/***/ }),

/***/ "./src/app/secciones/start/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/secciones/start/login/login.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fondo {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#141445), color-stop(#171d54), color-stop(#192764), color-stop(#183174), to(#143c84));\n  background-image: linear-gradient(to bottom, #141445, #171d54, #192764, #183174, #143c84);\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n.box {\n  width: 50vw;\n}\n\n*:focus {\n  box-shadow: 2px 2px 10px 8px #2ea1db;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL3N0YXJ0L2xvZ2luL0M6XFxDcmlzZmxleFxcRmFtaWx5ZmxpeC9zcmNcXGFwcFxcc2VjY2lvbmVzXFxzdGFydFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWNjaW9uZXMvc3RhcnQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0SkFBQTtFQUFBLHlGQUFBO0VBQ0EsaUJBQUE7RUFDRixnQkFBQTtBQ0NBOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBREFBO0VBQ0Usb0NBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3NlY2Npb25lcy9zdGFydC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kb3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTQxNDQ1LCAjMTcxZDU0LCAjMTkyNzY0LCAjMTgzMTc0LCAjMTQzYzg0KTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxubWluLXdpZHRoOiAxMDB2dztcclxufVxyXG4uYm94e1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG59XHJcbio6Zm9jdXN7ICAgIFxyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCA4cHggIzJlYTFkYjtcclxufSAgICIsIi5mb25kbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxNDE0NDUsICMxNzFkNTQsICMxOTI3NjQsICMxODMxNzQsICMxNDNjODQpO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWluLXdpZHRoOiAxMDB2dztcbn1cblxuLmJveCB7XG4gIHdpZHRoOiA1MHZ3O1xufVxuXG4qOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDhweCAjMmVhMWRiO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/secciones/start/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/secciones/start/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let LoginComponent = class LoginComponent {
    constructor(loginservice, router) {
        this.loginservice = loginservice;
        this.router = router;
        this.usuario = [];
        this.logo = "logo.png";
        this.login = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], this.Existeusuario.bind(this)),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)])
        });
    }
    ngOnInit() {
    }
    Existeusuario(control) {
        return this.loginservice.checkEmail(control.value).map((resp) => {
            return resp.email ? null : { emailTaken: true };
        });
    }
    Login() {
        this.loginservice.login(this.login.value).subscribe(resp => {
            this.usuario = resp;
            // this.storage.SaveStorage(this.usuario);
            this.router.navigate(['/principal/home']);
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Usuario ó Contraseña Incorrecta!'
            });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/start/login/login.component.html"),
        providers: [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]],
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/secciones/start/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/secciones/start/register/register.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/secciones/start/register/register.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fondo {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#141445), color-stop(#171d54), color-stop(#192764), color-stop(#183174), to(#143c84));\n  background-image: linear-gradient(to bottom, #141445, #171d54, #192764, #183174, #143c84);\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n.box {\n  width: 50vw;\n}\n\n*:focus {\n  box-shadow: 2px 2px 10px 8px #2ea1db;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL3N0YXJ0L3JlZ2lzdGVyL0M6XFxDcmlzZmxleFxcRmFtaWx5ZmxpeC9zcmNcXGFwcFxcc2VjY2lvbmVzXFxzdGFydFxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWNjaW9uZXMvc3RhcnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDTSw0SkFBQTtFQUFBLHlGQUFBO0VBQ0EsaUJBQUE7RUFDRixnQkFBQTtBQ0NKOztBRENBO0VBQ00sV0FBQTtBQ0VOOztBREFBO0VBQ00sb0NBQUE7QUNHTiIsImZpbGUiOiJzcmMvYXBwL3NlY2Npb25lcy9zdGFydC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kb3tcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE0MTQ0NSwgIzE3MWQ1NCwgIzE5Mjc2NCwgIzE4MzE3NCwgIzE0M2M4NCk7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxufVxyXG4uYm94e1xyXG4gICAgICB3aWR0aDogNTB2dztcclxufVxyXG4qOmZvY3VzeyAgICBcclxuICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDhweCAjMmVhMWRiO1xyXG4gIH0gICAiLCIuZm9uZG8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTQxNDQ1LCAjMTcxZDU0LCAjMTkyNzY0LCAjMTgzMTc0LCAjMTQzYzg0KTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1pbi13aWR0aDogMTAwdnc7XG59XG5cbi5ib3gge1xuICB3aWR0aDogNTB2dztcbn1cblxuKjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCA4cHggIzJlYTFkYjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/secciones/start/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/secciones/start/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let RegisterComponent = class RegisterComponent {
    constructor(login, router) {
        this.login = login;
        this.router = router;
        this.logo = "logo.png";
        this.register = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7)]),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])
        });
    }
    ngOnInit() {
    }
    registrarse() {
        this.login.register(this.register.value).subscribe((resp) => {
            if (resp.ok == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'success',
                    title: 'Usuario Creado ',
                    text: 'Has creado el usuario correctamente empieza a utilizar nuestros servicios !!'
                });
                this.router.navigate(['/']);
            }
        }, error => {
            let err = error.error.error;
            if (err == "ER_DUP_ENTRY") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'info',
                    title: 'Correo Existente !!',
                    text: 'El correo ingresado ya existe, intenta otro nuevo'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Error desconocido Contacta con soporte'
                });
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/start/register/register.component.html"),
        providers: [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]],
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/secciones/start/register/register.component.scss")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/secciones/start/start/start.component.scss":
/*!************************************************************!*\
  !*** ./src/app/secciones/start/start/start.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fondo {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#141445), color-stop(#171d54), color-stop(#192764), color-stop(#183174), to(#143c84));\n  background-image: linear-gradient(to bottom, #141445, #171d54, #192764, #183174, #143c84);\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n.box {\n  width: 50vw;\n}\n\n*:focus {\n  box-shadow: 2px 2px 10px 8px #2ea1db;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbmVzL3N0YXJ0L3N0YXJ0L0M6XFxDcmlzZmxleFxcRmFtaWx5ZmxpeC9zcmNcXGFwcFxcc2VjY2lvbmVzXFxzdGFydFxcc3RhcnRcXHN0YXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWNjaW9uZXMvc3RhcnQvc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0SkFBQTtFQUFBLHlGQUFBO0VBQ0ssaUJBQUE7RUFDSCxnQkFBQTtBQ0NKOztBRENJO0VBQ0UsV0FBQTtBQ0VOOztBRENJO0VBQ0Usb0NBQUE7QUNFTiIsImZpbGUiOiJzcmMvYXBwL3NlY2Npb25lcy9zdGFydC9zdGFydC9zdGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kb3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTQxNDQ1LCAjMTcxZDU0LCAjMTkyNzY0LCAjMTgzMTc0LCAjMTQzYzg0KTtcclxuICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIH1cclxuICAgIC5ib3h7XHJcbiAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgfVxyXG5cclxuICAgICo6Zm9jdXN7ICAgIFxyXG4gICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggOHB4ICMyZWExZGI7XHJcbiAgfSAgIFxyXG5cclxuICAvLyAjMmVhMWRiXHJcbiAgLy8gI2QxZDcyN1xyXG4gIC8vICNmN2MwMTRcclxuICAvLyAjYzBkNzJmIiwiLmZvbmRvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE0MTQ0NSwgIzE3MWQ1NCwgIzE5Mjc2NCwgIzE4MzE3NCwgIzE0M2M4NCk7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xufVxuXG4uYm94IHtcbiAgd2lkdGg6IDUwdnc7XG59XG5cbio6Zm9jdXMge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggOHB4ICMyZWExZGI7XG59Il19 */"

/***/ }),

/***/ "./src/app/secciones/start/start/start.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/secciones/start/start/start.component.ts ***!
  \**********************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let StartComponent = class StartComponent {
    constructor(router) {
        this.router = router;
        this.logo = "logo.png";
        this.spain = "spain.svg";
        this.english = "united-states.svg";
    }
    ngOnInit() {
    }
    selectIdioma(id) {
        this.router.navigate(['/login']);
        console.log(id);
    }
};
StartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: __webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/raw-loader/index.js!./src/app/secciones/start/start/start.component.html"),
        styles: [__webpack_require__(/*! ./start.component.scss */ "./src/app/secciones/start/start/start.component.scss")]
    })
], StartComponent);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");





// import { UploadService } from './upload.service';
// import Swal from 'sweetalert2';
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.url = _global_service__WEBPACK_IMPORTED_MODULE_3__["Global"].url;
    }
    //Canales TV y Emisoras
    getIdiomas() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.get(this.url + "idiomas", { headers: headers }).map((resp) => resp.results);
    }
    getEmisoras(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.get(this.url + "emisoras/" + id, { headers: headers }).map((resp) => resp.results);
    }
    getTv(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.get(this.url + "tv/" + id, { headers: headers }).map((resp) => resp.results);
    }
    getContenido(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.get(this.url + "multimedia/" + id, { headers: headers });
    }
    //publicidad
    getBanners() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.get(this.url + "banners", { headers: headers }).map((resp) => resp.results);
    }
    getVideoPublicidad() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.get(this.url + "videosp", { headers: headers }).map((resp) => resp.results);
    }
    //tienda
    getProductos(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.get(this.url + "productos/" + id, { headers: headers }).map((resp) => resp.results);
    }
    //videos a la carta 
    getVideos(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.get(this.url + "video/" + id, { headers: headers }).map((resp) => resp.results);
    }
    getCategorias() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.get(this.url + "categorias", { headers: headers }).map((resp) => resp.results);
    }
    getPCategorias() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.get(this.url + "pcategorias", { headers: headers }).map((resp) => resp.results);
    }
    crearOrdenes(data) {
        let params = JSON.stringify(data);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.post(this.url + "ordenes", params, { headers: headers });
    }
    getOrdenes(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.get(this.url + "ordenes/" + id, { headers: headers }).map((resp) => resp.results);
    }
    getProductosOrdenes(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.get(this.url + "compras/" + id, { headers: headers }).map((resp) => resp.results);
    }
    getAlquileres(id, categoria) {
        console.log(id + '-' + categoria);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.get(this.url + "alquileres/" + id + "/" + categoria, { headers: headers }).map((resp) => resp.results);
    }
    getProducto(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.get(this.url + "cartavideo/" + id, { headers: headers }).map((resp) => resp.results);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/services/global.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
var Global = {
    // url:'http://localhost:3000/api/'
    // url:'http://tvbox.orione.cf/api/'
    url: 'http://familymedia.orione.cf/api/'
};


/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");




let LocalStorageService = class LocalStorageService {
    constructor(platform, storage) {
        this.platform = platform;
        this.storage = storage;
        this.isDesktopDevice = null;
    }
    SaveStorage(key, value) {
        if (this.platform.isBrowser) {
            localStorage.setItem(key, JSON.stringify(value));
        }
        else {
            this.storage.set(key, value);
        }
    }
    cargarStorage(key) {
        return new Promise((resolve, reject) => {
            if (this.platform.isBrowser) {
                if (localStorage.getItem(key)) {
                    resolve(JSON.parse(localStorage.getItem(key)));
                }
                else {
                    reject('storage vacio');
                }
            }
            else {
                // dispositivo
                this.storage.ready()
                    .then(() => {
                    this.storage.get(key)
                        .then(items => {
                        if (items) {
                            resolve(items);
                        }
                        else {
                            reject('storage vacio');
                        }
                    });
                });
            }
        });
    }
    eliminarStorage(key) {
        if (this.platform.isBrowser) {
            localStorage.removeItem(key);
        }
        else {
            this.storage.remove(key);
        }
    }
};
LocalStorageService.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LocalStorageService);



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");







let LoginService = class LoginService {
    constructor(handler, platform, storage) {
        this.platform = platform;
        this.storage = storage;
        this.url = _global_service__WEBPACK_IMPORTED_MODULE_4__["Global"].url;
        this.http = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"](handler);
    }
    login(data) {
        let params = JSON.stringify(data);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.post(this.url + 'login', params, { headers: headers }).map((resp) => {
            console.log(resp);
            if (this.platform.isBrowser) {
                localStorage.setItem('token', resp.token);
                localStorage.setItem('usuario', JSON.stringify({
                    name: resp.name,
                    surname: resp.surname,
                    email: resp.email,
                    telefono: resp.telefono,
                    id: resp.id
                }));
                return true;
            }
            else {
                this.storage.set('token', resp.token);
                this.storage.set('usuario', JSON.stringify({
                    name: resp.name,
                    surname: resp.surname,
                    email: resp.email,
                    telefono: resp.telefono,
                    id: resp.id
                }));
                return true;
            }
        });
    }
    register(data) {
        let params = JSON.stringify(data);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.post(this.url + 'register', params, { headers: headers }).map((resp) => resp);
    }
    checkEmail(email) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.get(this.url + 'check/' + email, { headers: headers });
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpBackend"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/services/store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");








let StoreService = class StoreService {
    constructor(http, local) {
        this.http = http;
        this.local = local;
        this.productos = [];
        this.url = _global_service__WEBPACK_IMPORTED_MODULE_4__["Global"].url;
    }
    addproducto(id) {
        this.local.cargarStorage('carrito').then((data) => {
            this.productos = data;
        }).catch(error => {
            console.log(error);
        });
        let existe = this.productos.findIndex(e => e.id == id);
        if (existe === -1) {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
            return this.http.get(this.url + "cartavideo/" + id, { headers: headers }).map((resp) => {
                this.productos.push(resp.results[0]);
                this.local.SaveStorage('carrito', this.productos);
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    position: 'top-end',
                    type: 'success',
                    title: 'Producto agregado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                });
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                position: 'top-end',
                type: 'info',
                title: 'Este Producto ya esta en el carrito de compras',
                showConfirmButton: false,
                timer: 1500
            });
            return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                observer.next(true);
            });
        }
    }
};
StoreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }
];
StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StoreService);



/***/ }),

/***/ "./src/environments/environment.ts":
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
const environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Crisflex\Familyflix\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map