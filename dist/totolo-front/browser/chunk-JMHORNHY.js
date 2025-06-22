import {
  OrderService
} from "./chunk-2F6G3FDO.js";
import {
  AsyncPipe,
  AuthService,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  Observable,
  Router,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2FOQJYGK.js";

// src/app/components/order-list-admin/order-list-admin.component.ts
function OrderListAdminComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function OrderListAdminComponent_div_1_div_4_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 28)(7, "span", 26);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.productName || (item_r4.product == null ? null : item_r4.product.name) || "Producto");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("x", item_r4.quantity, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 3, item_r4.price, "1.2-2"), " \u20AC");
  }
}
function OrderListAdminComponent_div_1_div_4_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h4", 19);
    \u0275\u0275text(2, "Productos:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275template(4, OrderListAdminComponent_div_1_div_4_div_17_div_4_Template, 10, 6, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22)(6, "div", 23)(7, "span");
    \u0275\u0275text(8, "Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pedido_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", pedido_r5.orderItems);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 2, ctx_r0.getOrderTotal(pedido_r5), "1.2-2"), " \u20AC");
  }
}
function OrderListAdminComponent_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "h3", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p")(5, "strong");
    \u0275\u0275text(6, "Cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10, "Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "strong");
    \u0275\u0275text(15, "Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, OrderListAdminComponent_div_1_div_4_div_17_Template, 12, 5, "div", 13);
    \u0275\u0275elementStart(18, "div", 14)(19, "button", 15);
    \u0275\u0275listener("click", function OrderListAdminComponent_div_1_div_4_Template_button_click_19_listener() {
      const pedido_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cambiarEstado(pedido_r5.id, "IN_PROCESS"));
    });
    \u0275\u0275text(20, "En proceso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 16);
    \u0275\u0275listener("click", function OrderListAdminComponent_div_1_div_4_Template_button_click_21_listener() {
      const pedido_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cambiarEstado(pedido_r5.id, "SENT"));
    });
    \u0275\u0275text(22, "Enviado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 17);
    \u0275\u0275listener("click", function OrderListAdminComponent_div_1_div_4_Template_button_click_23_listener() {
      const pedido_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cambiarEstado(pedido_r5.id, "CANCELLED"));
    });
    \u0275\u0275text(24, "Cancelado");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pedido_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Pedido #", pedido_r5.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", pedido_r5.customerName || "No disponible", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 5, pedido_r5.date, "dd/MM/yyyy HH:mm"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", pedido_r5.status, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pedido_r5.orderItems && pedido_r5.orderItems.length > 0);
  }
}
function OrderListAdminComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "h2", 5);
    \u0275\u0275text(2, "Lista de pedidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275template(4, OrderListAdminComponent_div_1_div_4_Template, 25, 8, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8)(6, "button", 9);
    \u0275\u0275listener("click", function OrderListAdminComponent_div_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.volverAlDashboard());
    });
    \u0275\u0275text(7, "Volver al Dashboard");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pedidos_r6 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", pedidos_r6);
  }
}
function OrderListAdminComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "span", 30);
    \u0275\u0275elementStart(2, "p", 18);
    \u0275\u0275text(3, "Cargando pedidos...");
    \u0275\u0275elementEnd()();
  }
}
var OrderListAdminComponent = class _OrderListAdminComponent {
  orderService;
  router;
  authService;
  pedidos$ = new Observable();
  errorMessage = "";
  constructor(orderService, router, authService) {
    this.orderService = orderService;
    this.router = router;
    this.authService = authService;
    this.checkAuthStatus();
  }
  checkAuthStatus() {
    if (!this.authService.isLoggedIn() || !this.authService.isAdmin()) {
      this.router.navigate(["/login"]);
      return;
    }
    this.authService.checkSession().subscribe({
      next: () => this.loadOrders(),
      error: (err) => {
        console.error("Sesi\xF3n inv\xE1lida:", err);
        this.authService.logout();
        this.router.navigate(["/login"]);
      }
    });
  }
  loadOrders() {
    this.pedidos$ = this.orderService.getAllOrders();
  }
  cambiarEstado(orderId, nuevoEstado) {
    this.orderService.updateOrderStatus(orderId, nuevoEstado).subscribe({
      next: () => {
        alert(`Estado cambiado a ${nuevoEstado}`);
        this.pedidos$ = this.orderService.getAllOrders();
      },
      error: (err) => {
        console.error("Error al cambiar estado:", err);
        alert("Error al cambiar estado: " + (err.error?.message || err.message || "Error desconocido"));
      }
    });
  }
  volverAlDashboard() {
    this.router.navigate(["/admin/dashboard"]);
  }
  // Calcular el total de un pedido
  getOrderTotal(pedido) {
    if (!pedido.orderItems || pedido.orderItems.length === 0) {
      return 0;
    }
    return pedido.orderItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
  static \u0275fac = function OrderListAdminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderListAdminComponent)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderListAdminComponent, selectors: [["order-list-admin"]], decls: 5, vars: 5, consts: [["loadingTemplate", ""], ["class", "alert alert-error mb-4", 4, "ngIf"], ["class", "p-6", 4, "ngIf", "ngIfElse"], [1, "alert", "alert-error", "mb-4"], [1, "p-6"], [1, "text-2xl", "font-bold", "mb-4"], [1, "grid", "grid-cols-1", "gap-4"], ["class", "card bg-base-100 shadow-xl p-4", 4, "ngFor", "ngForOf"], [1, "mt-6"], [1, "btn", "btn-secondary", 3, "click"], [1, "card", "bg-base-100", "shadow-xl", "p-4"], [1, "card-body"], [1, "card-title"], ["class", "mt-4", 4, "ngIf"], [1, "card-actions", "mt-4", "space-x-2"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-info", 3, "click"], [1, "btn", "btn-error", 3, "click"], [1, "mt-4"], [1, "font-semibold", "mb-2"], [1, "space-y-2"], ["class", "flex justify-between items-center p-2 bg-gray-50 rounded", 4, "ngFor", "ngForOf"], [1, "mt-3", "pt-2", "border-t", "border-gray-200"], [1, "flex", "justify-between", "items-center", "font-bold"], [1, "flex", "justify-between", "items-center", "p-2", "bg-gray-50", "rounded"], [1, "flex-1"], [1, "font-medium"], [1, "text-gray-600", "ml-2"], [1, "text-right"], [1, "text-center", "p-8"], [1, "loading", "loading-spinner", "loading-lg"]], template: function OrderListAdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OrderListAdminComponent_div_0_Template, 3, 1, "div", 1)(1, OrderListAdminComponent_div_1_Template, 8, 1, "div", 2);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275template(3, OrderListAdminComponent_ng_template_3_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const loadingTemplate_r7 = \u0275\u0275reference(4);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 3, ctx.pedidos$))("ngIfElse", loadingTemplate_r7);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, DecimalPipe, DatePipe, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderListAdminComponent, [{
    type: Component,
    args: [{ selector: "order-list-admin", standalone: true, imports: [CommonModule, RouterModule], template: `<!-- Mensaje de error de autenticaci\xF3n -->\r
<div *ngIf="errorMessage" class="alert alert-error mb-4">\r
  <span>{{ errorMessage }}</span>\r
</div>\r
\r
<div *ngIf="pedidos$ | async as pedidos; else loadingTemplate" class="p-6">\r
  <h2 class="text-2xl font-bold mb-4">Lista de pedidos</h2>\r
\r
  <div class="grid grid-cols-1 gap-4">\r
    <div *ngFor="let pedido of pedidos" class="card bg-base-100 shadow-xl p-4">\r
      <div class="card-body">\r
        <h3 class="card-title">Pedido #{{ pedido.id }}</h3>\r
        \r
        <!-- Cliente -->\r
        <p><strong>Cliente:</strong> {{ pedido.customerName || 'No disponible' }}</p>\r
        \r
        <!-- Fecha -->\r
        <p><strong>Fecha:</strong> {{ pedido.date | date:'dd/MM/yyyy HH:mm' }}</p>\r
        <p><strong>Estado:</strong> {{ pedido.status }}</p>\r
\r
        <!-- Items del pedido -->\r
        <div *ngIf="pedido.orderItems && pedido.orderItems.length > 0" class="mt-4">\r
          <h4 class="font-semibold mb-2">Productos:</h4>\r
          <div class="space-y-2">\r
            <div *ngFor="let item of pedido.orderItems" class="flex justify-between items-center p-2 bg-gray-50 rounded">\r
              <div class="flex-1">\r
                <span class="font-medium">{{ item.productName || item.product?.name || 'Producto' }}</span>\r
                <span class="text-gray-600 ml-2">x{{ item.quantity }}</span>\r
              </div>\r
              <div class="text-right">\r
                <span class="font-medium">{{ item.price | number:'1.2-2' }} \u20AC</span>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <!-- Total del pedido -->\r
          <div class="mt-3 pt-2 border-t border-gray-200">\r
            <div class="flex justify-between items-center font-bold">\r
              <span>Total:</span>\r
              <span>{{ getOrderTotal(pedido) | number:'1.2-2' }} \u20AC</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="card-actions mt-4 space-x-2">\r
          <button class="btn btn-warning" (click)="cambiarEstado(pedido.id, 'IN_PROCESS')">En proceso</button>\r
          <button class="btn btn-info" (click)="cambiarEstado(pedido.id, 'SENT')">Enviado</button>\r
          <button class="btn btn-error" (click)="cambiarEstado(pedido.id, 'CANCELLED')">Cancelado</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="mt-6">\r
    <button class="btn btn-secondary" (click)="volverAlDashboard()">Volver al Dashboard</button>\r
  </div>\r
</div>\r
\r
<ng-template #loadingTemplate>\r
  <div class="text-center p-8">\r
    <span class="loading loading-spinner loading-lg"></span>\r
    <p class="mt-4">Cargando pedidos...</p>\r
  </div>\r
</ng-template>\r
` }]
  }], () => [{ type: OrderService }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderListAdminComponent, { className: "OrderListAdminComponent", filePath: "src/app/components/order-list-admin/order-list-admin.component.ts", lineNumber: 15 });
})();
export {
  OrderListAdminComponent
};
//# sourceMappingURL=chunk-JMHORNHY.js.map
