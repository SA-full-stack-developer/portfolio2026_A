import * as O from "@angular/core";
import { inject as U, APP_ID as I } from "@angular/core";
var M = {}, N = class E {
    _appId = U(I);
    static _infix = `a${Math.floor(Math.random() * 1e5).toString()}`;
    getId(_, A = !1) { return this._appId !== "ng" && (_ += this._appId), M.hasOwnProperty(_) || (M[_] = 0), `${_}${A ? E._infix + "-" : ""}${M[_]++}`; }
    static \u0275fac = function (A) { return new (A || E); };
    static \u0275prov = O.\u0275\u0275defineInjectable({ token: E, factory: E.\u0275fac, providedIn: "root" });
};
function t(E, ..._) { return _.length ? _.some(A => E[A]) : E.altKey || E.shiftKey || E.ctrlKey || E.metaKey; }
export { N as a, t as b };
