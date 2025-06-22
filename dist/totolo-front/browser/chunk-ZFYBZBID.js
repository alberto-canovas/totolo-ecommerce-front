import {
  AuthService,
  CommonModule,
  Component,
  Router,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-2FOQJYGK.js";

// src/app/components/admin-dashboard/admin-dashboard.component.ts
var AdminDashboardComponent = class _AdminDashboardComponent {
  router;
  authService;
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  irAProductos() {
    this.router.navigate(["/admin/products"]);
  }
  irAPedidos() {
    this.router.navigate(["/admin/order-list"]);
  }
  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["admin-dashboard"]], decls: 13, vars: 0, consts: [[1, "p-6", "text-center"], [1, "text-3xl", "font-bold", "mb-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-center", "gap-4"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "mt-8"], [1, "btn", "btn-error", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Panel de Administraci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_4_listener() {
        return ctx.irAProductos();
      });
      \u0275\u0275text(5, "Ver productos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_6_listener() {
        return ctx.irAPedidos();
      });
      \u0275\u0275text(7, "Ver pedidos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_9_listener() {
        return ctx.cerrarSesion();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 7);
      \u0275\u0275element(11, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Cerrar Sesi\xF3n ");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "admin-dashboard", standalone: true, imports: [CommonModule, RouterModule], template: '<div class="p-6 text-center">\r\n  <h1 class="text-3xl font-bold mb-6">Panel de Administraci\xF3n</h1>\r\n\r\n  <div class="flex flex-col sm:flex-row justify-center gap-4">\r\n    <button class="btn btn-primary" (click)="irAProductos()">Ver productos</button>\r\n    <button class="btn btn-secondary" (click)="irAPedidos()">Ver pedidos</button>\r\n  </div>\r\n\r\n  <!-- Bot\xF3n de cerrar sesi\xF3n -->\r\n  <div class="mt-8">\r\n    <button class="btn btn-error" (click)="cerrarSesion()">\r\n      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />\r\n      </svg>\r\n      Cerrar Sesi\xF3n\r\n    </button>\r\n  </div>\r\n</div>\r\n' }]
  }], () => [{ type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/components/admin-dashboard/admin-dashboard.component.ts", lineNumber: 13 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-ZFYBZBID.js.map
