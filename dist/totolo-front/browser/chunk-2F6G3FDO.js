import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-2FOQJYGK.js";

// src/app/service/order.service.ts
var OrderService = class _OrderService {
  http;
  baseUrl = "http://localhost:8080/totolo/v1/orders";
  constructor(http) {
    this.http = http;
  }
  // Obtener todos los pedidos (para admin)
  // getAllOrders(): Observable<Order[]> {
  //   return this.http.get<Order[]>(`${this.baseUrl}/all`);
  // }
  getAllOrders() {
    return this.http.get(`${this.baseUrl}/all`, {
      withCredentials: true
    });
  }
  // Obtener pedidos del usuario (puedes mantener si quieres)
  getOrders() {
    return this.http.get(this.baseUrl, {
      withCredentials: true
    });
  }
  updateOrderStatus(id, status) {
    return this.http.put(`${this.baseUrl}/${id}/status?status=${status}`, {}, {
      withCredentials: true
    });
  }
  // Crear un nuevo pedido
  createOrder(address, items) {
    const orderPayload = {
      address,
      items: items.map((item) => ({
        productId: item.productId,
        quantity: item.quantity
      }))
    };
    return this.http.post(this.baseUrl, orderPayload, {
      withCredentials: true
    });
  }
  static \u0275fac = function OrderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  OrderService
};
//# sourceMappingURL=chunk-2F6G3FDO.js.map
