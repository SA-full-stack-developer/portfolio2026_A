function T(E, ..._) { return _.length ? _.some(A => E[A]) : E.altKey || E.shiftKey || E.ctrlKey || E.metaKey; }
import * as O from "@angular/core";
import { inject as S, APP_ID as P } from "@angular/core";
var N = new Map, U = class E {
    _appId = S(P);
    static _infix = `a${Math.floor(Math.random() * 1e5).toString()}`;
    getId(_, A = !1) { this._appId !== "ng" && (_ += this._appId); let M = N.get(_); return M === void 0 ? M = 0 : M++, N.set(_, M), `${_}${A ? E._infix + "-" : ""}${M}`; }
    static \u0275fac = function (A) { return new (A || E); };
    static \u0275prov = O.\u0275\u0275defineService({ token: E, factory: E.\u0275fac });
};
export { T as a, U as b };
