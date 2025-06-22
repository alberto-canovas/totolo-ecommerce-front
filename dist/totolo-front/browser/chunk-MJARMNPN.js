import {
  OrderService
} from "./chunk-2F6G3FDO.js";
import {
  AsyncPipe,
  AuthService,
  CommonModule,
  Component,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  Observable,
  Router,
  RouterLink,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2FOQJYGK.js";

// src/app/components/my-orders/my-orders.component.ts
var _c0 = (a0, a1, a2) => ({ "badge-warning": a0, "badge-success": a1, "badge-error": a2 });
function MyOrdersComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 12);
    \u0275\u0275element(3, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function MyOrdersComponent_div_10_div_1_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div")(2, "p", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 33);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((item_r3.product == null ? null : item_r3.product.name) || "Producto");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Cantidad: ", item_r3.quantity, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 3, item_r3.price * item_r3.quantity, "1.2-2"), " \u20AC");
  }
}
function MyOrdersComponent_div_10_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "div")(4, "h2", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 21);
    \u0275\u0275text(7, " Direcci\xF3n de env\xEDo: ");
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 24);
    \u0275\u0275elementStart(13, "div", 25)(14, "h3", 26);
    \u0275\u0275text(15, "Resumen de productos");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, MyOrdersComponent_div_10_div_1_div_1_div_16_Template, 9, 6, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 28)(18, "span", 29);
    \u0275\u0275text(19, "Total del Pedido:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 30);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Pedido #", order_r4.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(order_r4.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(9, _c0, order_r4.status === "IN_PROCESS", order_r4.status === "SENT", order_r4.status === "CANCELLED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r4.status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", order_r4.orderItems);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 6, ctx_r1.getOrderTotal(order_r4), "1.2-2"), " \u20AC");
  }
}
function MyOrdersComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, MyOrdersComponent_div_10_div_1_div_1_Template, 23, 13, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const orders_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", orders_r5);
  }
}
function MyOrdersComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyOrdersComponent_div_10_div_1_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const orders_r5 = ctx.ngIf;
    \u0275\u0275nextContext();
    const noOrders_r6 = \u0275\u0275reference(15);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", orders_r5.length > 0)("ngIfElse", noOrders_r6);
  }
}
function MyOrdersComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "span", 35);
    \u0275\u0275elementStart(2, "p", 36);
    \u0275\u0275text(3, "Cargando tus pedidos...");
    \u0275\u0275elementEnd()();
  }
}
function MyOrdersComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 38);
    \u0275\u0275element(2, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 40);
    \u0275\u0275text(4, "A\xFAn no tienes pedidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 41);
    \u0275\u0275text(6, "Parece que no has realizado ninguna compra todav\xEDa.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 42);
    \u0275\u0275text(8, "Explorar productos");
    \u0275\u0275elementEnd()();
  }
}
var MyOrdersComponent = class _MyOrdersComponent {
  orderService;
  authService;
  router;
  orders$;
  errorMessage = "";
  constructor(orderService, authService, router) {
    this.orderService = orderService;
    this.authService = authService;
    this.router = router;
    this.orders$ = new Observable();
  }
  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(["/login"]);
      return;
    }
    this.loadOrders();
  }
  loadOrders() {
    this.orders$ = this.orderService.getOrders();
    this.orders$.subscribe({
      error: (err) => {
        this.errorMessage = "Error al cargar los pedidos. Por favor, intenta nuevamente.";
        console.error("Error fetching orders:", err);
      }
    });
  }
  getOrderTotal(order) {
    if (!order.orderItems || order.orderItems.length === 0) {
      return 0;
    }
    return order.orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  goBack() {
    this.router.navigate(["/"]);
  }
  static \u0275fac = function MyOrdersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyOrdersComponent)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyOrdersComponent, selectors: [["app-my-orders"]], decls: 16, vars: 5, consts: [["loading", ""], ["noOrders", ""], [1, "container", "mx-auto", "p-6", "min-h-screen", "bg-gray-50"], [1, "bg-white", "p-6", "sm:p-8", "rounded-lg", "shadow-lg"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-center", "mb-6", "border-b", "pb-4"], [1, "text-3xl", "font-bold", "text-gray-800"], [1, "btn", "btn-outline", "btn-primary", "mt-4", "sm:mt-0", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], ["class", "alert alert-error shadow-lg", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "alert", "alert-error", "shadow-lg"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "stroke-current", "flex-shrink-0", "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"], ["class", "space-y-6", 4, "ngIf", "ngIfElse"], [1, "space-y-6"], ["class", "card bg-base-100 border border-gray-200 shadow-md transition-shadow hover:shadow-xl", 4, "ngFor", "ngForOf"], [1, "card", "bg-base-100", "border", "border-gray-200", "shadow-md", "transition-shadow", "hover:shadow-xl"], [1, "card-body"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start"], [1, "card-title", "text-xl", "text-primary"], [1, "text-sm", "text-gray-500"], [1, "font-medium"], [1, "badge", "mt-2", "sm:mt-0", 3, "ngClass"], [1, "divider", "my-4"], [1, "space-y-3"], [1, "font-semibold", "text-lg", "mb-2"], ["class", "flex justify-between items-center p-3 bg-gray-50 rounded-md", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end", "items-center", "mt-4", "pt-4", "border-t", "border-gray-200"], [1, "text-lg", "font-bold", "mr-4"], [1, "text-2xl", "font-bold", "text-primary"], [1, "flex", "justify-between", "items-center", "p-3", "bg-gray-50", "rounded-md"], [1, "text-sm", "text-gray-600"], [1, "font-semibold", "text-gray-800"], [1, "text-center", "py-16"], [1, "loading", "loading-lg", "loading-spinner", "text-primary"], [1, "mt-4", "text-gray-600"], [1, "text-center", "py-16", "bg-gray-50", "rounded-lg"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-16", "h-16", "mx-auto", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"], [1, "mt-4", "text-2xl", "font-semibold", "text-gray-700"], [1, "mt-2", "text-gray-600"], ["routerLink", "/", 1, "btn", "btn-primary", "mt-6"]], template: function MyOrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h1", 5);
      \u0275\u0275text(4, "Mis Pedidos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 6);
      \u0275\u0275listener("click", function MyOrdersComponent_Template_button_click_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 7);
      \u0275\u0275element(7, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " Volver al inicio ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, MyOrdersComponent_div_9_Template, 6, 1, "div", 9)(10, MyOrdersComponent_div_10_Template, 2, 2, "div", 10);
      \u0275\u0275pipe(11, "async");
      \u0275\u0275template(12, MyOrdersComponent_ng_template_12_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(14, MyOrdersComponent_ng_template_14_Template, 9, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const loading_r7 = \u0275\u0275reference(13);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(11, 3, ctx.orders$))("ngIfElse", loading_r7);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, AsyncPipe, DecimalPipe, RouterModule, RouterLink], styles: ["\n\n/*# sourceMappingURL=my-orders.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyOrdersComponent, [{
    type: Component,
    args: [{ selector: "app-my-orders", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="container mx-auto p-6 min-h-screen bg-gray-50">\r
  <div class="bg-white p-6 sm:p-8 rounded-lg shadow-lg">\r
    <div class="flex flex-col sm:flex-row justify-between items-center mb-6 border-b pb-4">\r
      <h1 class="text-3xl font-bold text-gray-800">Mis Pedidos</h1>\r
      <button class="btn btn-outline btn-primary mt-4 sm:mt-0" (click)="goBack()">\r
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>\r
        Volver al inicio\r
      </button>\r
    </div>\r
\r
    <div *ngIf="errorMessage" class="alert alert-error shadow-lg">\r
      <div>\r
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>\r
        <span>{{ errorMessage }}</span>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="orders$ | async as orders; else loading">\r
      <div *ngIf="orders.length > 0; else noOrders" class="space-y-6">\r
        <div *ngFor="let order of orders" class="card bg-base-100 border border-gray-200 shadow-md transition-shadow hover:shadow-xl">\r
          <div class="card-body">\r
            <div class="flex flex-col sm:flex-row justify-between items-start">\r
              <div>\r
                <h2 class="card-title text-xl text-primary">Pedido #{{ order.id }}</h2>\r
                <p class="text-sm text-gray-500">\r
                  Direcci\xF3n de env\xEDo: <span class="font-medium">{{ order.address }}</span>\r
                </p>\r
              </div>\r
              <div class="badge mt-2 sm:mt-0"\r
                   [ngClass]="{\r
                     'badge-warning': order.status === 'IN_PROCESS',\r
                     'badge-success': order.status === 'SENT',\r
                     'badge-error': order.status === 'CANCELLED'\r
                   }">\r
                {{ order.status }}\r
              </div>\r
            </div>\r
\r
            <div class="divider my-4"></div>\r
\r
            <!-- Items del pedido -->\r
            <div class="space-y-3">\r
              <h3 class="font-semibold text-lg mb-2">Resumen de productos</h3>\r
              <div *ngFor="let item of order.orderItems" class="flex justify-between items-center p-3 bg-gray-50 rounded-md">\r
                <div>\r
                  <p class="font-medium">{{ item.product?.name || 'Producto' }}</p>\r
                  <p class="text-sm text-gray-600">Cantidad: {{ item.quantity }}</p>\r
                </div>\r
                <p class="font-semibold text-gray-800">{{ (item.price * item.quantity) | number:'1.2-2' }} \u20AC</p>\r
              </div>\r
            </div>\r
\r
            <!-- Total -->\r
            <div class="flex justify-end items-center mt-4 pt-4 border-t border-gray-200">\r
              <span class="text-lg font-bold mr-4">Total del Pedido:</span>\r
              <span class="text-2xl font-bold text-primary">{{ getOrderTotal(order) | number:'1.2-2' }} \u20AC</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <ng-template #loading>\r
      <div class="text-center py-16">\r
        <span class="loading loading-lg loading-spinner text-primary"></span>\r
        <p class="mt-4 text-gray-600">Cargando tus pedidos...</p>\r
      </div>\r
    </ng-template>\r
\r
    <ng-template #noOrders>\r
      <div class="text-center py-16 bg-gray-50 rounded-lg">\r
        <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>\r
        <h3 class="mt-4 text-2xl font-semibold text-gray-700">A\xFAn no tienes pedidos</h3>\r
        <p class="mt-2 text-gray-600">Parece que no has realizado ninguna compra todav\xEDa.</p>\r
        <button class="btn btn-primary mt-6" routerLink="/">Explorar productos</button>\r
      </div>\r
    </ng-template>\r
  </div>\r
</div> `, styles: ["/* src/app/components/my-orders/my-orders.component.css */\n/*# sourceMappingURL=my-orders.component.css.map */\n"] }]
  }], () => [{ type: OrderService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyOrdersComponent, { className: "MyOrdersComponent", filePath: "src/app/components/my-orders/my-orders.component.ts", lineNumber: 16 });
})();
export {
  MyOrdersComponent
};
//# sourceMappingURL=chunk-MJARMNPN.js.map
