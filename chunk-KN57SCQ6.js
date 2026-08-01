import { a as u } from "@nf-internal/chunk-XID2BBVI";
import { a as h } from "@nf-internal/chunk-DQ6Z6NC4";
import * as p from "@angular/core";
import { inject as d, CSP_NONCE as _, NgZone as y } from "@angular/core";
import { Subject as M, combineLatest as w, concat as S, Observable as g } from "rxjs";
import { take as k, skip as j, debounceTime as L, map as l, startWith as O, takeUntil as Q } from "rxjs/operators";
var f = new Set, a, D = (() => { class e {
    _platform = d(h);
    _nonce = d(_, { optional: !0 });
    _matchMedia;
    constructor() { this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : N; }
    matchMedia(t) { return (this._platform.WEBKIT || this._platform.BLINK) && E(t, this._nonce), this._matchMedia(t); }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = p.\u0275\u0275defineService({ token: e, factory: e.\u0275fac });
} return e; })();
function E(e, i) { if (!f.has(e))
    try {
        a || (a = document.createElement("style"), i && a.setAttribute("nonce", i), a.setAttribute("type", "text/css"), document.head.appendChild(a)), a.sheet && (a.sheet.insertRule(`@media ${e.replace(/[{}]/g, "")} {body{ }}`, 0), f.add(e));
    }
    catch (t) {
        console.error(t);
    } }
function N(e) { return { matches: e === "all" || e === "", media: e, addListener: () => { }, removeListener: () => { } }; }
var W = (() => { class e {
    _mediaMatcher = d(D);
    _zone = d(y);
    _queries = new Map;
    _destroySubject = new M;
    ngOnDestroy() { this._destroySubject.next(), this._destroySubject.complete(); }
    isMatched(t) { return b(u(t)).some(c => this._registerQuery(c).mql.matches); }
    observe(t) { let c = b(u(t)).map(o => this._registerQuery(o).observable), s = w(c); return s = S(s.pipe(k(1)), s.pipe(j(1), L(0))), s.pipe(l(o => { let n = { matches: !1, breakpoints: {} }; return o.forEach(({ matches: m, query: v }) => { n.matches = n.matches || m, n.breakpoints[v] = m; }), n; })); }
    _registerQuery(t) { if (this._queries.has(t))
        return this._queries.get(t); let r = this._mediaMatcher.matchMedia(t), s = { observable: new g(o => { let n = m => this._zone.run(() => o.next(m)); return r.addListener(n), () => { r.removeListener(n); }; }).pipe(O(r), l(({ matches: o }) => ({ query: t, matches: o })), Q(this._destroySubject)), mql: r }; return this._queries.set(t, s), s; }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = p.\u0275\u0275defineService({ token: e, factory: e.\u0275fac });
} return e; })();
function b(e) { return e.map(i => i.split(",")).reduce((i, t) => i.concat(t)).map(i => i.trim()); }
export { D as a, W as b };
