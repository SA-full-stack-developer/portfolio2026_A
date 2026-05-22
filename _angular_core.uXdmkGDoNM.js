import { $ as To, $a as So, $b as M, $c as gT, A as Jr, Aa as q, Ab as ue, Ac as se, B as Xr, Ba as ce, Bb as Xa, Bc as Ct, C as Ua, Ca as le, Cb as li, Cc as De, D as gt, Da as ie, Db as lp, Dc as vc, E as xt, Ea as Lt, Eb as Ro, Ec, F as yn, Fa as H, Fb as ui, Fc as Ic, G as ei, Ga as k, Gb as di, Gc as Dc, H as W, Ha as Ue, Hb as fi, Hc as xo, I as Me, Ia as T, Ib as ec, Ic as He, J as Be, Ja as vt, Jb as Bt, Jc as fT, K as Do, Ka as No, Kb as up, Kc as Dp, L as N, La as _o, Lb as dp, Lc as Ce, M as Ne, Ma as K, Mb as fp, Mc as Ut, N as Qf, Na as Et, Nb as pp, Nc as Po, O as $a, Oa as En, Ob as hp, Oc as Cp, P as Pt, Pa as $e, Pb as tc, Pc as Tp, Q as Yf, Qa as we, Qb as pi, Qc as $t, R as Pe, Ra as Ya, Rb as ko, Rc as pT, S as ti, Sa as Za, Sb as nc, Sc as Mp, T as I, Ta as ci, Tb as oc, Tc as Np, U as za, Ua as wo, Ub as gp, Uc as Cc, V as vn, Va as Se, Vb as rc, Vc as U, W as ni, Wa as Ft, Wb as ic, Wc as Tc, X as Zf, Xa as ze, Xb as g, Xc as Mc, Y as Le, Ya as E, Yb as _, Yc as zt, Z as Ga, Za as Ie, Zb as sc, Zc as Nc, _ as Co, _a as Fe, _b as ac, _c as hT, a as tT, aa as Wa, ab as Ht, ac as mp, ad as _c, b as nT, ba as Kf, bb as V, bc as Dn, bd as _p, c as Ha, ca as Mo, cb as ne, cc as We, cd as mT, d as qr, da as oi, db as X, dc as cc, dd as vi, e as w, ea as ri, eb as Ka, ec as lc, ed as Tt, f as Gf, fa as _e, fb as ge, fc as uc, fd as Cn, g as Ee, ga as F, gb as In, gc as dc, gd as yT, h as Va, ha as mt, hb as be, hc as fc, hd as Ei, i as Wf, ia as cT, ib as Ge, ic as de, id as wc, j as Qr, ja as tt, jb as Ja, jc as qe, jd as Sc, k as Yr, ka as lT, kb as np, kc as pc, kd as vT, l as oT, la as uT, lb as It, lc as pe, ld as bc, m as ja, ma as qa, mb as op, mc as Qe, md as ET, n as G, na as ii, nb as rp, nc as yp, nd as IT, o as Zr, oa as Jf, ob as O, oc as hc, od as Gt, p as qf, pa as Xf, pb as bo, pc as vp, pd as DT, q as B, qa as si, qb as Vt, qc as Ep, qd as CT, r as Io, ra as yt, rb as oe, rc as gc, rd as TT, s as rT, sa as Qa, sb as ip, sc as hi, sd as MT, t as iT, ta as ep, tb as jt, tc as gi, td as wp, u as Kr, ua as ai, ub as Dt, uc as Oo, v as Ba, va as tp, vb as Ao, vc as mc, w as S, wa as dT, wb as fe, wc as mi, x as sT, xa as j, xb as sp, xc as yc, y as aT, ya as m, yb as ap, yc as yi, z as mn, za as A, zb as cp, zc as Ip } from "@nf-internal/chunk-WKINJFHW";
import { b as eT } from "@nf-internal/chunk-CIXSH7WF";
import { a as NT } from "@nf-internal/chunk-DX5Y2OEN";
import { B as La, E as Fa, a as et, b as P, c as Uf, f as Pa, g as zr, n as vo, p as Gr, r as Wr, s as Eo, w as $f, x as zf } from "@nf-internal/chunk-SDH3IO4S";
import { a as Z, b as Xe, d as ht } from "@nf-internal/chunk-4CLCTAJ7";
import { setActiveConsumer as Nn } from "@angular/core/primitives/signals";
import { Subject as $h, Subscription as _T } from "rxjs";
import { map as wT } from "rxjs/operators";
var Tn = { JSACTION: "jsaction" };
function Ze(e) { return { toString: e }.toString(); }
var _n = "__annotations__", wn = "__parameters__", Sn = "__prop__metadata__";
function yr(e, t, n, o, r) { return Ze(() => { let i = nu(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(_n) ? u[_n] : Object.defineProperty(u, _n, { value: [] })[_n]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function nu(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function Yn(e, t, n) { return Ze(() => { let o = nu(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(wn) ? c[wn] : Object.defineProperty(c, wn, { value: [] })[wn]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function at(e, t, n, o) { return Ze(() => { let r = nu(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(Sn) ? d[Sn] : Object.defineProperty(d, Sn, { value: {} })[Sn]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var zh = vn(Yn("Inject", e => ({ token: e })), -1), Gh = vn(Yn("Optional"), 8), Wh = vn(Yn("Self"), 2), qh = vn(Yn("SkipSelf"), 4), Qh = vn(Yn("Host"), 1);
function te(e) { let t = Ee.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var Sp = { \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: Io, \u0275\u0275inject: Pe, \u0275\u0275invalidFactoryDep: ti, resolveForwardRef: G }, Yh = Function;
function Ho(e) { return typeof e == "function"; }
var ST = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, bT = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, AT = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, RT = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function kT(e) { return ST.test(e) || RT.test(e) || bT.test(e) && !AT.test(e); }
var Bi = class {
    _reflect;
    constructor(t) { this._reflect = t || Ee.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = To(n.length) : o = To(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (kT(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && Ac(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(wn) && t[wn], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : To(t.length); }
    parameters(t) { if (!Ho(t))
        return []; let n = Ii(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? Ac(t.decorators) : t.hasOwnProperty(_n) ? t[_n] : null; }
    annotations(t) { if (!Ho(t))
        return []; let n = Ii(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = Ac(o[i]); }), r;
    } return t.hasOwnProperty(Sn) ? t[Sn] : null; }
    propMetadata(t) { if (!Ho(t))
        return {}; let n = Ii(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return Ho(t) ? this._ownPropMetadata(t, Ii(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof Yh && n in t.prototype; }
};
function Ac(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function Ii(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
function Zh(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var Ui = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
}, Kh = (() => { let e = () => Jh; return e.ngInherit = !0, e; })();
function Jh(e) { return e.type.prototype.ngOnChanges && (e.setInput = xT), OT; }
function OT() { let e = eg(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === _e)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function xT(e, t, n, o, r) { let i = this.declaredInputs[o], s = eg(e) || PT(e, { previous: _e, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new Ui(l && l.currentValue, n, c === _e), Zh(e, t, r, n); }
var Xh = "__ngSimpleChanges__";
function eg(e) { return e[Xh] || null; }
function PT(e, t) { return e[Xh] = t; }
var bp = [];
var x = function (e, t = null, n) { for (let o = 0; o < bp.length; o++) {
    let r = bp[o];
    r(e, t, n);
} }, R = (function (e) { return e[e.TemplateCreateStart = 0] = "TemplateCreateStart", e[e.TemplateCreateEnd = 1] = "TemplateCreateEnd", e[e.TemplateUpdateStart = 2] = "TemplateUpdateStart", e[e.TemplateUpdateEnd = 3] = "TemplateUpdateEnd", e[e.LifecycleHookStart = 4] = "LifecycleHookStart", e[e.LifecycleHookEnd = 5] = "LifecycleHookEnd", e[e.OutputStart = 6] = "OutputStart", e[e.OutputEnd = 7] = "OutputEnd", e[e.BootstrapApplicationStart = 8] = "BootstrapApplicationStart", e[e.BootstrapApplicationEnd = 9] = "BootstrapApplicationEnd", e[e.BootstrapComponentStart = 10] = "BootstrapComponentStart", e[e.BootstrapComponentEnd = 11] = "BootstrapComponentEnd", e[e.ChangeDetectionStart = 12] = "ChangeDetectionStart", e[e.ChangeDetectionEnd = 13] = "ChangeDetectionEnd", e[e.ChangeDetectionSyncStart = 14] = "ChangeDetectionSyncStart", e[e.ChangeDetectionSyncEnd = 15] = "ChangeDetectionSyncEnd", e[e.AfterRenderHooksStart = 16] = "AfterRenderHooksStart", e[e.AfterRenderHooksEnd = 17] = "AfterRenderHooksEnd", e[e.ComponentStart = 18] = "ComponentStart", e[e.ComponentEnd = 19] = "ComponentEnd", e[e.DeferBlockStateStart = 20] = "DeferBlockStateStart", e[e.DeferBlockStateEnd = 21] = "DeferBlockStateEnd", e[e.DynamicComponentStart = 22] = "DynamicComponentStart", e[e.DynamicComponentEnd = 23] = "DynamicComponentEnd", e[e.HostBindingsUpdateStart = 24] = "HostBindingsUpdateStart", e[e.HostBindingsUpdateEnd = 25] = "HostBindingsUpdateEnd", e; })(R || {});
function LT(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = Jh(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function tg(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function Ri(e, t, n) { ng(e, t, 3, n); }
function ki(e, t, n, o) { (e[A] & 3) === n && ng(e, t, n, o); }
function Rc(e, t) { let n = e[A]; (n & 3) === t && (n &= 16383, n += 1, e[A] = n); }
function ng(e, t, n, o) { let r = o !== void 0 ? e[En] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[En] += 65536), (a < i || i == -1) && (FT(e, n, t, c), e[En] = (e[En] & 4294901760) + c + 2), c++; }
function Ap(e, t) { x(R.LifecycleHookStart, e, t); let n = P(null); try {
    t.call(e);
}
finally {
    P(n), x(R.LifecycleHookEnd, e, t);
} }
function FT(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[A] >> 14 < e[En] >> 16 && (e[A] & 3) === t && (e[A] += 16384, Ap(a, i)) : Ap(a, i); }
var kn = -1, Jt = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, o, r) { this.factory = t, this.name = r, this.canSeeViewProviders = n, this.injectImpl = o; }
};
function ms(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function og(e) { return !!(e.type & 128); }
function HT(e) { return (e.flags & 8) !== 0; }
function VT(e) { return (e.flags & 16) !== 0; }
function jT(e, t, n) { let o = 0; for (; o < n.length;) {
    let r = n[o];
    if (typeof r == "number") {
        if (r !== 0)
            break;
        o++;
        let i = n[o++], s = n[o++], a = n[o++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = r, s = n[++o];
        BT(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function rg(e) { return e === 3 || e === 4 || e === 6; }
function BT(e) { return e.charCodeAt(0) === 64; }
function Hn(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? Rp(e, n, r, null, t[++o]) : Rp(e, n, r, null, null));
        }
    } return e; }
function Rp(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        r !== null && (e[i + 1] = r);
        return;
    }
    i++, r !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r); }
function ig(e) { return e !== kn; }
function $i(e) { return e & 32767; }
function UT(e) { return e >> 16; }
function zi(e, t) { let n = UT(e), o = t; for (; n > 0;)
    o = o[_o], n--; return o; }
var el = !0;
function Gi(e) { let t = el; return el = e, t; }
var $T = 256, sg = $T - 1, ag = 5, zT = 0, Ye = {};
function GT(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(xt) && (o = n[xt]), o == null && (o = n[xt] = zT++); let r = o & sg, i = 1 << r; t.data[e + (r >> ag)] |= i; }
function Wi(e, t) { let n = cg(e, t); if (n !== -1)
    return n; let o = t[m]; o.firstCreatePass && (e.injectorIndex = t.length, kc(o.data, e), kc(t, null), kc(o.blueprint, null)); let r = ou(e, t), i = e.injectorIndex; if (ig(r)) {
    let s = $i(r), a = zi(r, t), c = a[m].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function kc(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function cg(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function ou(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = hg(r), o === null)
        return kn;
    if (n++, r = r[_o], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return kn; }
function tl(e, t, n) { GT(e, t, n); }
function WT(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (rg(i))
            break;
        if (i === 0)
            r = r + 2;
        else if (typeof i == "number")
            for (r++; r < o && typeof n[r] == "string";)
                r++;
        else {
            if (i === t)
                return n[r + 1];
            r = r + 2;
        }
    }
} return null; }
function lg(e, t, n) { if (n & 8 || e !== void 0)
    return e; $a(t, "NodeInjector"); }
function ug(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[k], i = Pt(void 0);
    try {
        return r ? r.get(t, o, n & 8) : Yf(t, o, n & 8);
    }
    finally {
        Pt(i);
    }
} return lg(o, t, n); }
function dg(e, t, n, o = 0, r) { if (e !== null) {
    if (t[A] & 2048 && !(o & 2)) {
        let s = ZT(e, t, n, o, Ye);
        if (s !== Ye)
            return s;
    }
    let i = fg(e, t, n, o, Ye);
    if (i !== Ye)
        return i;
} return ug(t, n, o, r); }
function fg(e, t, n, o, r) { let i = QT(n); if (typeof i == "function") {
    if (!mc(t, e, o))
        return o & 1 ? lg(r, n, o) : ug(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            $a(n);
        else
            return s;
    }
    finally {
        yc();
    }
}
else if (typeof i == "number") {
    let s = null, a = cg(e, t), c = kn, l = o & 1 ? t[K][le] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? ou(e, t) : t[a + 8], c === kn || !Op(o, !1) ? a = -1 : (s = t[m], a = $i(c), t = zi(c, t))); a !== -1;) {
        let u = t[m];
        if (kp(i, a, u.data)) {
            let d = qT(a, t, n, s, o, l);
            if (d !== Ye)
                return d;
        }
        c = t[a + 8], c !== kn && Op(o, t[m].data[a + 8] === l) && kp(i, a, t) ? (s = u, a = $i(c), t = zi(c, t)) : a = -1;
    }
} return r; }
function qT(e, t, n, o, r, i) { let s = t[m], a = s.data[e + 8], c = o == null ? ge(a) && el : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = Oi(a, s, n, c, l); return u !== null ? Ko(t, s, u, a, r) : Ye; }
function Oi(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && be(p) && p.type === n)
        return c;
} return null; }
function Ko(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof Jt) {
    let a = i;
    if (a.resolving)
        throw Qf("");
    let c = Gi(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? Pt(a.injectImpl) : null, f = mc(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && LT(n, s[n], t);
    }
    finally {
        d !== null && Pt(d), Gi(c), a.resolving = !1, yc();
    }
} return i; }
function QT(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(xt) ? e[xt] : void 0; return typeof t == "number" ? t >= 0 ? t & sg : YT : t; }
function kp(e, t, n) { let o = 1 << e; return !!(n[t + (e >> ag)] & o); }
function Op(e, t) { return !(e & 2) && !(e & 1 && t); }
var _t = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return dg(this._tNode, this._lView, t, za(o), n); }
};
function YT() { return new _t(M(), g()); }
function pg(e) { return Ze(() => { let t = e.prototype.constructor, n = t[gt] || nl(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[gt] || nl(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function nl(e) { return Zr(e) ? () => { let t = nl(G(e)); return t && t(); } : ni(e); }
function ZT(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[A] & 2048 && !Ge(s);) {
    let a = fg(i, s, n, o | 2, Ye);
    if (a !== Ye)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[Ya];
        if (l) {
            let u = l.get(n, Ye, o & -5);
            if (u !== Ye)
                return u;
        }
        c = hg(s), s = s[_o];
    }
    i = c;
} return r; }
function hg(e) { let t = e[m], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[le] : null; }
function ys(e) { return WT(M(), e); }
var gg = Yn("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => ys(e) })), xp = null;
function ru() { return xp = xp || new Bi; }
function vs(e) { return mg(ru().parameters(e)); }
function mg(e) { return e.map(t => KT(t)); }
function KT(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof Gh || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof qh || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof Wh || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof Qh || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof zh)
            t.token = o.token;
        else if (o instanceof gg) {
            if (o.attributeName === void 0)
                throw new w(-204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function JT(e, t) { let n = null, o = null; e.hasOwnProperty(Kr) || Object.defineProperty(e, Kr, { get: () => (n === null && (n = te({ usage: 0, kind: "injectable", type: e }).compileInjectable(Sp, `ng:///${e.name}/\u0275prov.js`, nM(e, t))), n) }), e.hasOwnProperty(gt) || Object.defineProperty(e, gt, { get: () => { if (o === null) {
        let r = te({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(Sp, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: vs(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var XT = Va({ provide: String, useValue: Va });
function Pp(e) { return e.useClass !== void 0; }
function eM(e) { return XT in e; }
function Lp(e) { return e.useFactory !== void 0; }
function tM(e) { return e.useExisting !== void 0; }
function nM(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (Pp(n) || Lp(n)) && n.deps !== void 0 && (o.deps = mg(n.deps)), Pp(n) ? o.useClass = n.useClass : eM(n) ? o.useValue = n.useValue : Lp(n) ? o.useFactory = n.useFactory : tM(n) && (o.useExisting = n.useExisting), o; }
var oM = yr("Injectable", void 0, void 0, void 0, (e, t) => JT(e, t));
function rM() { return Zn(M(), g()); }
function Zn(e, t) { return new vr(oe(e, t)); }
var vr = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = rM;
} return e; })();
function yg(e) { return e instanceof vr ? e.nativeElement : e; }
function iM() { return this._results[Symbol.iterator](); }
var qi = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new $h; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let o = Le(t); (this._changesDetected = !Zf(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = iM;
}, ln = "ngSkipHydration", sM = "ngskiphydration";
function iu(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === sM)
        return !0;
} return !1; }
function vg(e) { return e.hasAttribute(ln); }
function Jo(e) { return (e.flags & 128) === 128; }
function Kn(e) { if (Jo(e))
    return !0; let t = e.parent; for (; t;) {
    if (Jo(e) || iu(t))
        return !0;
    t = t.parent;
} return !1; }
function Eg(e) { return Jo(e) || iu(e) || Kn(e); }
var Es = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Eager = 1] = "Eager", e[e.Default = 1] = "Default", e; })(Es || {}), Is = new Map, aM = 0;
function cM() { return aM++; }
function lM(e) { Is.set(e[we], e); }
function Ig(e) { return Is.get(e) || null; }
function ol(e) { Is.delete(e[we]); }
function uM() { return Is; }
var Qi = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return Ig(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function ve(e) { let t = xi(e); if (t) {
    if (ne(t)) {
        let n = t, o, r, i;
        if (Dg(e)) {
            if (o = hM(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (fM(e)) {
            if (o = gM(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = Cg(o, n);
        }
        else if (o = Hp(n, e), o == -1)
            return null;
        let s = O(n[o]), a = xi(s), c = a && !Array.isArray(a) ? a : Fp(n, o, s);
        if (r && c.component === void 0 && (c.component = r, Ae(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                Ae(i[l], c);
        }
        Ae(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = xi(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = Hp(i, n);
            if (s >= 0) {
                let a = O(i[s]), c = Fp(i, s, a);
                Ae(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function Fp(e, t, n) { return new Qi(e[we], t, n); }
var rl = "__ngContext__";
function Ae(e, t) { ne(t) ? (e[rl] = t[we], lM(t)) : e[rl] = t; }
function xi(e) { let t = e[rl]; return typeof t == "number" ? Ig(t) : t || null; }
function dM(e) { let t = xi(e); return t ? ne(t) ? t : t.lView : null; }
function Dg(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function fM(e) { return e && e.constructor && e.constructor.\u0275dir; }
function Hp(e, t) { let n = e[m]; for (let o = E; o < n.bindingStartIndex; o++)
    if (O(e[o]) === t)
        return o; return -1; }
function pM(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function hM(e, t) { let n = e[m].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (fe(r, e)[H] === t)
            return r;
    }
else if (fe(E, e)[H] === t)
    return E; return -1; }
function gM(e, t) { let n = e[m].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = pM(n);
} return -1; }
function Cg(e, t) { let n = t[m].data[e]; if (n.directiveStart === 0)
    return F; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    Dg(i) || o.push(i);
} return o; }
function mM(e, t) { let n = t[m].data[e]; return ge(n) ? t[n.directiveStart + n.componentOffset] : null; }
function yM(e, t) { let n = e[m].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function Tg(e) { return Ng(e[vt]); }
function Mg(e) { return Ng(e[ce]); }
function Ng(e) { for (; e !== null && !X(e);)
    e = e[ce]; return e; }
function Vp(e) { let t = ve(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = mM(t.nodeIndex, n);
} return t.component; }
function vM(e) { SM(e); let t = ve(e), n = t ? t.lView : null; return n === null ? null : n[H]; }
function EM(e) { let t = ve(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[m].type === 2 && (o = Bt(n));)
    n = o; return Ge(n) ? null : n[H]; }
function IM(e) { let t = ve(e), n = t ? t.lView : null; if (n === null)
    return Ce.NULL; let o = n[m].data[t.nodeIndex]; return new _t(o, n); }
function DM(e) { let t = ve(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    wM(l) && (l = l.type), i.push(l);
} return i; }
function CM(e) { if (e instanceof Text)
    return []; let t = ve(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = Cg(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var _g = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(_g || {}), wg = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(wg || {});
function TM(e) { let t = ve(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = yM(n, t.nodeIndex);
} return t.localRefs || {}; }
function MM(e) { return ve(e).native; }
function NM(e) { let t = ve(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[m], r = n[Lt], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = O(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", y = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: y, type: h });
        }
    } return s.sort(_M), s; }
function _M(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function wM(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function SM(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var il;
function bM(e) { il = e; }
function Ds() { if (il !== void 0)
    return il; if (typeof document < "u")
    return document; throw new w(210, !1); }
var ct = new S("", { factory: () => AM }), AM = "ng";
var su = new S(""), RM = new S("", { providedIn: "platform", factory: () => "unknown" }), kM = new S(""), OM = new S("", { factory: () => I(Ut).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), Sg = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, xM = new S("", { factory: () => Sg });
function PM(e) { return e; }
var Jn = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => { let n = new e; return (typeof ngServerMode > "u" || !ngServerMode) && (n.store = bg(I(Ut), I(ct))), n; } });
    store = {};
    onSerializeCallbacks = {};
    get(n, o) { return this.store[n] !== void 0 ? this.store[n] : o; }
    set(n, o) { this.store[n] = o; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, o) { this.onSerializeCallbacks[n] = o; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (o) {
                console.warn("Exception in onSerialize callback: ", o);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C").replace(/\//g, "\\u002F"); }
} return e; })();
function bg(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var au = "h", cu = "b", Ag = "f", Rg = "n", Er = "e", Cs = "t", Xn = "c", Ir = "x", it = "r", Ts = "i", Dr = "n", eo = "d", Ms = "l", Ns = "di", Cr = "s", lu = "p", Tr = "t", un = new S(""), kg = !1, uu = new S("", { factory: () => kg }), du = new S(""), _s = new S(""), fu = !1, Og = new S("", { factory: () => [] }), pu = new S(""), Mr = new S("", { factory: () => new Map }), LM = new S(""), Yi = { passive: !0, capture: !0 }, Oc = new WeakMap, xc = new WeakMap, Nt = new WeakMap, Zi = ["click", "keydown"], Ki = ["mouseenter", "mouseover", "focusin"], Di = new Map, Xo = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function xg(e, t) { let n = xc.get(e); if (!n) {
    n = new Xo, xc.set(e, n);
    for (let o of Zi)
        e.addEventListener(o, n.listener, Yi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    xc.delete(e);
    for (let i of Zi)
        e.removeEventListener(i, r, Yi);
} }; }
function Pg(e, t) { let n = Oc.get(e); if (!n) {
    n = new Xo, Oc.set(e, n);
    for (let o of Ki)
        e.addEventListener(o, n.listener, Yi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of Ki)
        e.removeEventListener(i, r, Yi);
    Oc.delete(e);
} }; }
function FM(e) { let t = Lg(e); return new IntersectionObserver(n => { for (let o of n)
    o.isIntersecting && Nt.has(o.target) && Nt.get(o.target)?.get(t)?.listener(); }, e); }
function HM(e, t, n, o) { let r = Lg(o), i = Nt.get(e)?.get(r); Di.has(r) || Di.set(r, { observer: n(o), count: 0 }); let s = Di.get(r); if (!i) {
    i = new Xo, s.observer.observe(e);
    let a = Nt.get(e);
    a ? a.set(r, i) : (a = new Map, Nt.set(e, a)), a.set(r, i), s.count++;
} return i.callbacks.add(t), () => { if (Nt.get(e)?.has(r)) {
    if (i.callbacks.delete(t), i.callbacks.size === 0) {
        s.observer.unobserve(e), s.count--;
        let a = Nt.get(e);
        a && (a.delete(r), a.size === 0 && Nt.delete(e));
    }
    s.count === 0 && (s.observer.disconnect(), Di.delete(r));
} }; }
function Lg(e) {
    return e ? `${e.rootMargin}/${typeof e.threshold == "number" ? e.threshold : e.threshold?.join(`
`)}` : "";
}
var to = "ngb";
function hu(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(Tn.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(Tn.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(to, i); }
var Fg = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, gu = (e, t) => { let n = e, o = n.getAttribute(to) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function VM(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(mu);
} }
var mu = e => { e.removeAttribute(Tn.JSACTION), e.removeAttribute(to), e.__jsaction_fns = void 0; }, yu = new S("", { factory: () => ({}) }), sl = new WeakMap;
function jM(e, t) { if (e == null || typeof e != "object")
    return; let n = sl.get(e); n || (n = new WeakSet, sl.set(e, n)), n.add(t); }
function vu(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected) && !(t && sl.get(e)?.has(t)))
    for (let o of n)
        o(e); }
var al = new Map;
function Hg(e, t) { return al.set(e, t), () => al.delete(e); }
var jp = !1, Vg = (e, t, n, o) => { };
function BM(e, t, n, o) { Vg(e, t, n, o); }
function jg() { jp || (Vg = (e, t, n, o) => { let r = e[k].get(ct); al.get(r)?.(t, n, o); }, jp = !0); }
var lt = new S(""), Bg = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = I(Mr);
    contract = I(yu);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { VM(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = B({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function no(e) { return (e.flags & 32) === 32; }
var Ug = "__nghData__", ws = Ug, $g = "__nghDeferData__", Ss = $g;
function UM(e) { return e === Ug || e === $g; }
var On = "ngh", zg = "nghm", Gg = () => null;
function $M(e, t, n = !1) { let o = e.getAttribute(On); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(Jn, null, { optional: !0 });
    u !== null && (c = u.get(ws, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, bs(l, 0, e.nextSibling)), a ? e.setAttribute(On, a) : e.removeAttribute(On), l; }
function Wg() { Gg = $M; }
function qg(e, t, n = !1) { return Gg(e, t, n); }
function Eu(e) { let t = e._lView; return t[m].type === 2 ? null : (Ge(t) && (t = t[E]), t); }
function zM(e) { return e.textContent?.replace(/\s/gm, ""); }
function GM(e) { let t = Ds(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = zM(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var Qg = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(Qg || {}), WM = "__ngDebugHydrationInfo__";
function qM(e) { return e[WM] ?? null; }
function bs(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function cl(e, t) { return e.segmentHeads?.[t] ?? null; }
function Nr(e) { return e.get(pu, !1, { optional: !0 }); }
var QM = !1;
function YM() { QM = !1; }
function Yg(e, t) { let n = e.data, o = n[Er]?.[t] ?? null; return o === null && n[Xn]?.[t] && (o = Iu(e, t)), o; }
function ZM(e, t) { return e.data[Er]?.[t] !== void 0; }
function Zg(e, t) { return e.data[Xn]?.[t] ?? null; }
function Iu(e, t) { let n = Zg(e, t) ?? [], o = 0; for (let r of n)
    o += r[it] * (r[Ir] ?? 1); return o; }
function Kg(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[eo];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function As(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[eo];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!Kg(e)?.has(t); }
function Rs(e, t) { let n = e[ie]; return n !== null && !ko() && !no(t) && !As(n, t.index - E); }
function Du(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function Jg(e) { let t = []; return e !== null && (e.has(4) && t.push(...Ki), e.has(3) && t.push(...Zi)), t; }
function KM(e, t) { let n = t.get(lt), r = t.get(Jn).get(Ss, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][lu];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function JM(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [Ki.join(":;"), Zi.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function Xg(e, t) { let n = JM(e), o = t.get(Mr); for (let r of n)
    gu(r, o); }
var em = () => ({});
function XM(e) { let t = e.get(Jn, null, { optional: !0 }); return t !== null ? t.get(Ss, {}) : {}; }
function tm() { em = XM; }
function eN(e) { return em(e); }
function tN(e) { return typeof e == "object" && e.trigger === 5; }
function nN(e) { return e[Tr]?.find(n => tN(n))?.delay ?? null; }
function oN(e) { let t = e[Tr]; if (t)
    for (let n of t) {
        if (n === 2)
            return !0;
        if (typeof n == "object" && n.trigger === 2)
            return n.intersectionObserverOptions || !0;
    } return null; }
function Bp(e, t) { return e[Tr]?.includes(t) ?? !1; }
function rN(e) { return { data: e, hydrate: { idle: Bp(e, 0), immediate: Bp(e, 1), timer: nN(e), viewport: oN(e) } }; }
function nm(e) { let t = eN(e), n = new Map; for (let o in t)
    n.set(o, rN(t[o])); return n; }
function Pc(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === zg; }
function Up(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function om(e) { for (let o of e.body.childNodes)
    if (Pc(o))
        return; let t = Up(e.body.previousSibling); if (Pc(t))
    return; let n = Up(e.head.lastChild); if (!Pc(n))
    throw new w(-507, !1); }
function rm(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = P(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                Oo(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        P(o);
    }
} }
function ll(e, t, n) { Oo(0); let o = P(null); try {
    t(e, n);
}
finally {
    P(o);
} }
function Cu(e, t, n) { if (Ka(t)) {
    let o = P(null);
    try {
        let r = t.directiveStart, i = t.directiveEnd;
        for (let s = r; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        P(o);
    }
} }
var Re = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e[e.ExperimentalIsolatedShadowDom = 4] = "ExperimentalIsolatedShadowDom", e; })(Re || {}), iN = { name: "custom-elements" }, sN = { name: "no-errors-schema" }, im = !1;
function aN(e) { im = e; }
function cN() { return im; }
var sm = !1;
function lN(e) { sm = e; }
function uN() { return sm; }
var Ci;
function am() { if (Ci === void 0 && (Ci = null, Ee.trustedTypes))
    try {
        Ci = Ee.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return Ci; }
function oo(e) { return am()?.createHTML(e) || e; }
function dN(e) { return am()?.createScriptURL(e) || e; }
var Ti;
function Tu() { if (Ti === void 0 && (Ti = null, Ee.trustedTypes))
    try {
        Ti = Ee.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return Ti; }
function $p(e) { return Tu()?.createHTML(e) || e; }
function zp(e) { return Tu()?.createScript(e) || e; }
function Gp(e) { return Tu()?.createScriptURL(e) || e; }
var st = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${qr})`; }
}, ul = class extends st {
    getTypeName() { return "HTML"; }
}, dl = class extends st {
    getTypeName() { return "Style"; }
}, fl = class extends st {
    getTypeName() { return "Script"; }
}, pl = class extends st {
    getTypeName() { return "URL"; }
}, hl = class extends st {
    getTypeName() { return "ResourceURL"; }
};
function ut(e) { return e instanceof st ? e.changingThisBreaksApplicationSecurity : e; }
function ro(e, t) { let n = cm(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${qr})`);
} return n === t; }
function cm(e) { return e instanceof st && e.getTypeName() || null; }
function fN(e) { return new ul(e); }
function pN(e) { return new dl(e); }
function hN(e) { return new fl(e); }
function gN(e) { return new pl(e); }
function mN(e) { return new hl(e); }
function lm(e) { let t = new ml(e); return yN() ? new gl(t) : t; }
var gl = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(oo(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, ml = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = oo(t), n; }
};
function yN() { try {
    return !!new window.DOMParser().parseFromString(oo(""), "text/html");
}
catch {
    return !1;
} }
var vN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function ks(e) { return e = String(e), e.match(vN) ? e : "unsafe:" + e; }
function Ke(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function io(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var um = Ke("area,br,col,hr,img,wbr"), dm = Ke("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), fm = Ke("rp,rt"), EN = io(fm, dm), IN = io(dm, Ke("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), DN = io(fm, Ke("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), yl = io(um, IN, DN, EN), Mu = Ke("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), CN = Ke("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), TN = Ke("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), vl = io(Mu, CN, TN), MN = Ke("script,style,template"), pm = io(Mu, Ke("action,formaction,data,codebase")), El = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = wN(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = _N(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = Wp(t).toLowerCase(); if (!yl.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !MN.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!vl.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        Mu[a] && (c = ks(c)), this.buf.push(" ", s, '="', qp(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = Wp(t).toLowerCase(); yl.hasOwnProperty(n) && !um.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(qp(t)); }
};
function NN(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function _N(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw hm(t); return t; }
function wN(e) { let t = e.firstChild; if (t && NN(e, t))
    throw hm(t); return t; }
function Wp(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function hm(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var SN = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, bN = /([^\#-~ |!])/g;
function qp(e) { return e.replace(/&/g, "&amp;").replace(SN, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(bN, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var Mi;
function gm(e, t) { let n = null; try {
    Mi = Mi || lm(e);
    let o = t ? String(t) : "";
    n = Mi.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = Mi.getInertBodyElement(o);
    } while (o !== i);
    let a = new El().sanitizeChildren(Il(n) || n);
    return oo(a);
}
finally {
    if (n) {
        let o = Il(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function Il(e) { return "content" in e && AN(e) ? e.content : null; }
function AN(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var RN = /^>|^->|<!--|-->|--!>|<!-$/g, kN = /(<|>)/g, ON = "\u200B$1\u200B";
function xN(e) { return e.replace(RN, t => t.replace(kN, ON)); }
function Nu(e, t) { return e.createText(t); }
function mm(e, t, n) { e.setValue(t, n); }
function _u(e, t) { return e.createComment(xN(t)); }
function Os(e, t, n) { return e.createElement(t, n); }
function Xt(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function ym(e, t, n) { e.appendChild(t, n); }
function Qp(e, t, n, o, r) { o !== null ? Xt(e, t, n, o, r) : ym(e, t, n); }
function _r(e, t, n, o) { e.removeChild(null, t, n, o); }
function vm(e) { e.textContent = ""; }
function PN(e, t, n) { e.setAttribute(t, "style", n); }
function LN(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function Em(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && jT(e, t, o), r !== null && LN(e, t, r), i !== null && PN(e, t, i); }
function FN(e) { let t = g(); e.src = "", e.srcdoc = oo(""), _r(t[T], e); }
var dn = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(dn || {});
function Im(e) { let t = wr(); return t ? $p(t.sanitize(dn.HTML, e) || "") : ro(e, "HTML") ? $p(ut(e)) : gm(Ds(), N(e)); }
function Dm(e) { let t = wr(); return t ? t.sanitize(dn.STYLE, e) || "" : ro(e, "Style") ? ut(e) : N(e); }
function wu(e) { let t = wr(); return t ? t.sanitize(dn.URL, e) || "" : ro(e, "URL") ? ut(e) : ks(N(e)); }
function Su(e) { let t = wr(); if (t)
    return Gp(t.sanitize(dn.RESOURCE_URL, e) || ""); if (ro(e, "ResourceURL"))
    return Gp(ut(e)); throw new w(904, !1); }
function Cm(e) { let t = wr(); if (t)
    return zp(t.sanitize(dn.SCRIPT, e) || ""); if (ro(e, "Script"))
    return zp(ut(e)); throw new w(905, !1); }
function Tm(e) { return oo(e[0]); }
function Mm(e) { return dN(e[0]); }
var HN = { embed: { src: !0 }, frame: { src: !0 }, iframe: { src: !0 }, media: { src: !0 }, script: { src: !0, href: !0, "xlink:href": !0 }, base: { href: !0 }, link: { href: !0 }, object: { data: !0, codebase: !0 } };
function VN(e, t) { return HN[e]?.[t] === !0 ? Su : wu; }
function Nm(e, t, n) { return VN(t, n)(e); }
function wr() { let e = g(); return e && e[Ue].sanitizer; }
var Ni = new Set(["href", "xlink:href"]), _m = { iframe: { sandbox: !0, allow: !0, allowfullscreen: !0, referrerpolicy: !0, csp: !0, fetchpriority: !0 }, animate: { attributename: !0, to: Ni, values: Ni, from: Ni }, set: { attributename: !0, to: Ni }, animatemotion: { attributename: !0 }, animatetransform: { attributename: !0 } };
function bu(e, t, n) { let o = t.toLowerCase(), r = n.toLowerCase(), i = _m[o]?.[r]; if (!i)
    return e; let s = De(); if (s.type !== 2)
    return e; let a = g(); if (o === "iframe") {
    let l = oe(s, a);
    FN(l);
} if (typeof i != "boolean") {
    let u = oe(s, a).getAttribute("attributeName");
    if (u && i.has(u.toLowerCase()))
        throw new w(-910, !1);
    return e;
} let c = !1; throw new w(-910, c); }
function jN() { return tt([]); }
function wm(e) { return e.ownerDocument.defaultView; }
function Sm(e) { return e.ownerDocument; }
function Au(e) { return e.ownerDocument.body; }
var BN = "\uFFFD";
function bn(e) { return e instanceof Function ? e() : e; }
function UN(e, t, n) { let o = e.length; for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1)
        return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
        let i = t.length;
        if (r + i === o || e.charCodeAt(r + i) <= 32)
            return r;
    }
    n = r + 1;
} }
var bm = "ng-template";
function $N(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && UN(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (Ru(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function Ru(e) { return e.type === 4 && e.value !== bm; }
function zN(e, t, n) { let o = e.type === 4 && !n ? bm : e.value; return t === o; }
function GN(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? QN(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !Ve(o) && !Ve(c))
            return !1;
        if (s && Ve(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !zN(e, c, n) || c === "" && t.length === 1) {
                if (Ve(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !$N(e, r, c, n)) {
                if (Ve(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = WN(c, r, Ru(e), n);
            if (u === -1) {
                if (Ve(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (Ve(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return Ve(o) || s; }
function Ve(e) { return (e & 1) === 0; }
function WN(e, t, n, o) { if (t === null)
    return -1; let r = 0; if (o || !n) {
    let i = !1;
    for (; r < t.length;) {
        let s = t[r];
        if (s === e)
            return r;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++r];
            for (; typeof a == "string";)
                a = t[++r];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                r += 4;
                continue;
            }
        }
        r += i ? 1 : 2;
    }
    return -1;
}
else
    return YN(t, e); }
function Am(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (GN(e, t[o], n))
        return !0; return !1; }
function qN(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function QN(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (rg(n))
        return t;
} return e.length; }
function YN(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function ZN(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function Yp(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function KN(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !Ve(s) && (t += Yp(i, r), r = ""), o = s, i = i || !Ve(o);
    n++;
} return r !== "" && (t += Yp(i, r)), t; }
function JN(e) { return e.map(KN).join(","); }
function XN(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!Ve(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var L = {};
function ku(e, t, n, o, r, i, s, a, c, l, u) { let d = E + o, f = d + r, p = e_(d, f), h = typeof l == "function" ? l() : l; return p[m] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function e_(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : L); return n; }
function Rm(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = ku(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function xs(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[j] = r, d[A] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[A] & 2048) && (d[A] |= 2048), Xa(d), d[q] = d[_o] = e, d[H] = n, d[Ue] = s || e && e[Ue], d[T] = a || e && e[T], d[k] = c || e && e[k] || null, d[le] = i, d[we] = cM(), d[ie] = u, d[Ya] = l, d[K] = t.type == 2 ? e[K] : d, d; }
function t_(e, t, n) { let o = oe(t, e), r = Rm(n), i = e[Ue].rendererFactory, s = xu(e, xs(e, r, null, Ou(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function Ou(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function Sr(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function xu(e, t) { return e[vt] ? e[No][ce] = t : e[vt] = t, e[No] = t, t; }
function km(e = 1) { Om(_(), g(), se() + e, !1); }
function Om(e, t, n, o) { if (!o)
    if ((t[A] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && Ri(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && ki(t, i, 0, n);
    } Ct(n); }
var Ps = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(Ps || {});
function wt(e, t, n, o) { let r = P(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & Ps.SignalBased) !== 0 && (c = t[i][et]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : Zh(t, c, i, o);
}
finally {
    P(r);
} }
var Ji = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(Ji || {}), Dl;
function Pu(e, t) { return Dl(e, t); }
function n_(e) { Dl === void 0 && (Dl = e()); }
var xm = new S("", { factory: () => !1 }), Pm = new S("", { factory: () => o_ }), o_ = 4e3, r_ = !1, fn = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function Ls(e) { return e[k].get(xm, r_); }
function i_(e, t, n) { let o = Vn.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    Vn.set(e, { classList: t, cleanupFns: n }); }
function Lu(e) { let t = Vn.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    Vn.delete(e);
} Kt.delete(e); }
var s_ = () => { }, Vn = new WeakMap, Kt = new WeakMap, er = new WeakMap, Vo = new WeakSet;
function Cl(e, t) { let n = er.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && er.delete(e); }
function a_(e, t) { let n = er.get(e); if (!n || n.length === 0)
    return; let o = t.parentNode, r = t.previousSibling; for (let i = n.length - 1; i >= 0; i--) {
    let s = n[i], a = s.parentNode;
    s === t ? (n.splice(i, 1), Vo.add(s), s.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }))) : (r && s === r || a && o && a !== o) && (n.splice(i, 1), s.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } })), s.parentNode?.removeChild(s));
} }
function Fu(e, t) { let n = er.get(e); n ? n.includes(t) || n.push(t) : er.set(e, [t]); }
function Xi(e) { let t = e[ze] ??= {}; return t.enter ??= new Map; }
function en(e) { let t = e[ze] ??= {}; return t.leave ??= new Map; }
function Lm(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function c_(e, t) { if (!fn)
    return; let n = Vn.get(e); if (n && n.classList.length > 0 && l_(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); Lu(e); }
function l_(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function tr(e) { return e.composedPath ? e.composedPath()[0] : e.target; }
function Hu(e, t) { let n = Kt.get(t); return n === void 0 ? !0 : t === tr(e) && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && (n.propertyName === "all" || e.propertyName === n.propertyName)); }
function Fs(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function Tl(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function Ml(e, t) { let n = en(e).get(t.index); n && (n.resolvers = void 0); }
function _i(e, t, n, o, r) { Cl(t, n), Tl(o, r), Ml(e, t); }
function es(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function Yt(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function u_(e) { let t = Yt(e, "transition-property"), n = Yt(e, "transition-duration"), o = Yt(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = es(o[i]) + es(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function d_(e) { let t = Yt(e, "animation-name"), n = Yt(e, "animation-delay"), o = Yt(e, "animation-duration"), r = Yt(e, "animation-iteration-count"), i = { animationName: "", propertyName: void 0, duration: 0 }; for (let s = 0; s < t.length; s++) {
    let a = es(n[s]) + es(o[s]), c = r[s];
    a > i.duration && c !== "infinite" && (i.animationName = t[s], i.duration = a);
} return i; }
function Fm(e, t) { return e !== void 0 && e.duration > t.duration; }
function Hm(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function f_(e, t) { let n = getComputedStyle(e), o = d_(n), r = u_(n), i = o.duration > r.duration ? o : r; Fm(t.get(e), i) || Hm(i) && t.set(e, i); }
function Vm(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? f_(e, t) : p_(e, t, o); }
function p_(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming();
    if (i?.iterations === 1 / 0)
        continue;
    let s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c = r.playbackRate;
    c !== void 0 && c !== 0 && c !== 1 && (a /= Math.abs(c));
    let l, u;
    r.animationName ? u = r.animationName : l = r.transitionProperty, a >= o.duration && (o = { animationName: u, propertyName: l, duration: a });
} Fm(t.get(e), o) || Hm(o) && t.set(e, o); }
var tn = new Set, Hs = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(Hs || {}), pn = new S(""), Zp = new Set;
function Q(e) { Zp.has(e) || (Zp.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var Vs = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Vu = [0, 1, 2, 3], ju = (() => { class e {
    ngZone = I(U);
    scheduler = I(Tt);
    errorHandler = I(Mc, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { I(pn, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && x(R.AfterRenderHooksStart), this.executing = !0; for (let o of Vu)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && x(R.AfterRenderHooksEnd); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[Ft] ??= []).push(n), di(o), o[A] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(Hs.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), nr = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, o, r, i, s = null) { this.impl = t, this.hooks = n, this.view = o, this.once = r, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[Ft]; t && (this.view[Ft] = t.filter(n => n !== this)); }
};
function jm(e, t) { let n = t?.injector ?? I(Ce); return typeof ngServerMode < "u" && ngServerMode ? js : (Q("NgAfterRender"), Bm(e, n, t, !1)); }
function Bu(e, t) { let n = t?.injector ?? I(Ce); return typeof ngServerMode < "u" && ngServerMode ? js : (Q("NgAfterNextRender"), Bm(e, n, t, !0)); }
function h_(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function Bm(e, t, n, o) { let r = t.get(Vs); r.impl ??= t.get(ju); let i = t.get(pn, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(Po) : null, a = t.get(vi, null, { optional: !0 }), c = new nr(r.impl, h_(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var js = { destroy() { } }, Bs = new S("", { factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null, injector: I(yt) }) });
function Um(e, t, n) { let o = e.get(Bs); if (Array.isArray(t))
    for (let r of t)
        o.queue.add(r), n?.detachedLeaveAnimationFns?.push(r);
else
    o.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); o.scheduler && o.scheduler(e); }
function g_(e, t) { let n = e.get(Bs); if (t.detachedLeaveAnimationFns) {
    for (let o of t.detachedLeaveAnimationFns)
        n.queue.delete(o);
    t.detachedLeaveAnimationFns = void 0;
} }
function m_(e) { let t = e.get(Bs); t.isScheduled || (Bu(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: t.injector }), t.isScheduled = !0); }
function Us(e) { let t = e.get(Bs); t.scheduler = m_, t.scheduler(e); }
function Uu(e, t) { for (let [n, o] of t)
    Um(e, o.animateFns); }
function Kp(e, t, n, o) { let r = e?.[ze]?.enter; t !== null && r && r.has(n.index) && Uu(o, r); }
function An(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    X(r) ? c = r : ne(r) && (l = !0, r = r[j]);
    let u = O(r);
    e === 0 && o !== null ? (Kp(a, o, i, n), s == null ? ym(t, o, u) : Xt(t, o, u, s || null, !0)) : e === 1 && o !== null ? (Kp(a, o, i, n), Xt(t, o, u, s || null, !0), a_(i, u)) : e === 2 ? (a?.[ze]?.leave?.has(i.index) && Fu(i, u), Vo.delete(u), Jp(a, i, n, d => { if (Vo.has(u)) {
        Vo.delete(u);
        return;
    } _r(t, u, l, d); })) : e === 3 && (Vo.delete(u), Jp(a, i, n, () => { t.destroyNode(u); })), c != null && T_(t, e, n, c, i, o, s);
} }
function $m(e, t) { zm(e, t), t[j] = null, t[le] = null; }
function y_(e, t, n, o, r, i) { o[j] = r, o[le] = t, $s(e, o, n, 1, r, i); }
function zm(e, t) { t[Ue].changeDetectionScheduler?.notify(9), $s(e, t, t[T], 2, null, null); }
function v_(e) { let t = e[vt]; if (!t)
    return Lc(e[m], e); for (; t;) {
    let n = null;
    if (ne(t))
        n = t[vt];
    else {
        let o = t[V];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[ce] && t !== e;)
            ne(t) && Lc(t[m], t), t = t[q];
        t === null && (t = e), ne(t) && Lc(t[m], t), n = t && t[ce];
    }
    t = n;
} }
function $u(e, t) { let n = e[Ht], o = n.indexOf(t); n.splice(o, 1); }
function br(e, t) { if (It(t))
    return; let n = t[T]; n.destroyNode && $s(e, t, n, 3, null, null), v_(t); }
function Lc(e, t) { if (It(t))
    return; let n = P(null); try {
    t[A] &= -129, t[A] |= 256, t[Se] && Eo(t[Se]), D_(e, t), I_(e, t), t[m].type === 1 && t[T].destroy();
    let o = t[Et];
    if (o !== null && X(t[q])) {
        o !== t[q] && $u(o, t);
        let r = t[$e];
        r !== null && r.detachView(e);
    }
    ol(t);
}
finally {
    P(n);
} }
function Jp(e, t, n, o) { let r = e?.[ze]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); e && tn.add(e[we]), Um(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        r.detachedLeaveAnimationFns = void 0;
    }
    r.running = Promise.allSettled(a), E_(e, o);
}
else
    e && tn.delete(e[we]), o(!1); }, r); }
function E_(e, t) { let n = e[ze]?.running; if (n) {
    n.then(() => { e[ze].running = void 0, tn.delete(e[we]), t(!0); });
    return;
} t(!1); }
function I_(e, t) { let n = e.cleanup, o = t[Lt]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[Lt] = null); let r = t[Za]; if (r !== null) {
    t[Za] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[wo]; if (i !== null) {
    t[wo] = null;
    for (let s of i)
        s.destroy();
} }
function D_(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof Jt)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    x(R.LifecycleHookStart, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        x(R.LifecycleHookEnd, a, c);
                    }
                }
            else {
                x(R.LifecycleHookStart, r, i);
                try {
                    i.call(r);
                }
                finally {
                    x(R.LifecycleHookEnd, r, i);
                }
            }
        }
    } }
function zu(e, t, n) { return Gm(e, t.parent, n); }
function Gm(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[j]; if (ge(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === Re.None || r === Re.Emulated)
        return null;
} return oe(o, n); }
function Wm(e, t, n) { return Qm(e, t, n); }
function qm(e, t, n) { return e.type & 40 ? oe(e, n) : null; }
var Qm = qm, Nl;
function Ym(e, t) { Qm = e, Nl = t; }
function Gu(e, t, n, o) { let r = zu(e, o, t), i = t[T], s = o.parent || t[le], a = Wm(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            Qp(i, r, n[c], a, !1);
    else
        Qp(i, r, n, a, !1); Nl !== void 0 && Nl(i, o, t, n, r); }
function Zt(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return oe(t, e);
    if (n & 4)
        return _l(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return Zt(e, o);
        {
            let r = e[t.index];
            return X(r) ? _l(-1, r) : O(r);
        }
    }
    else {
        if (n & 128)
            return Zt(e, t.next);
        if (n & 32)
            return Pu(t, e)() || O(e[t.index]);
        {
            let o = Zm(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = Bt(e[K]);
                return Zt(r, o);
            }
            else
                return Zt(e, t.next);
        }
    }
} return null; }
function Zm(e, t) { if (t !== null) {
    let o = e[K][le], r = t.projection;
    return o.projection[r];
} return null; }
function _l(e, t) { let n = V + e + 1; if (n < t.length) {
    let o = t[n], r = o[m].firstChild;
    if (r !== null)
        return Zt(o, r);
} return t[Fe]; }
function Wu(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[k];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && Ae(O(c), o), n.flags |= 2), !no(n))
        if (l & 8)
            Wu(e, t, n.child, o, r, i, !1), An(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = Pu(n, o), d;
            for (; d = u();)
                An(t, e, a, r, d, n, i, o);
            An(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? Km(e, t, o, n, r, i) : An(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function $s(e, t, n, o, r, i) { Wu(n, o, e.firstChild, t, r, i, !1); }
function C_(e, t, n) { let o = t[T], r = zu(e, n, t), i = n.parent || t[le], s = Wm(i, n, t); Km(o, 0, t, n, r, s); }
function Km(e, t, n, o, r, i) { let s = n[K], c = s[le].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        An(t, e, n[k], r, u, o, i, n);
    }
else {
    let l = c, u = s[q];
    Jo(o) && (l.flags |= 128), Wu(e, t, l, u, r, i, !0);
} }
function T_(e, t, n, o, r, i, s) { let a = o[Fe], c = O(o); a !== c && An(t, e, n, i, a, r, s); for (let l = V; l < o.length; l++) {
    let u = o[l];
    $s(u[m], u, e, t, i, a);
} }
function M_(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : Ji.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= Ji.Important), e.setStyle(n, o, r, i));
} }
function Jm(e, t, n, o, r) { let i = se(), s = o & 2; try {
    Ct(-1), s && t.length > E && Om(e, t, E, !1);
    let a = s ? R.TemplateUpdateStart : R.TemplateCreateStart;
    x(a, r, n), n(o, r);
}
finally {
    Ct(i);
    let a = s ? R.TemplateUpdateEnd : R.TemplateCreateEnd;
    x(a, r, n);
} }
function zs(e, t, n) { b_(e, t, n), (n.flags & 64) === 64 && A_(e, t, n); }
function so(e, t, n = oe) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function N_(e, t, n, o) { let i = o.get(uu, kg) || n === Re.ShadowDom || n === Re.ExperimentalIsolatedShadowDom, s = e.selectRootElement(t, i); return __(s), s; }
function __(e) { Xm(e); }
var Xm = () => null;
function w_(e) { vg(e) ? vm(e) : GM(e); }
function ey() { Xm = w_; }
function S_(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function qu(e, t, n, o, r, i) { let s = t[m]; if (Qs(e, s, t, n, o)) {
    ge(e) && ty(t, e.index);
    return;
} e.type & 3 && (n = S_(n)), Qu(e, t, n, o, r, i); }
function Qu(e, t, n, o, r, i) { if (e.type & 3) {
    let s = oe(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function ty(e, t) { let n = fe(t, e); n[A] & 16 || (n[A] |= 64); }
function b_(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; ge(n) && t_(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || Wi(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = Ko(t, e, s, n);
    if (Ae(c, t), i !== null && O_(t, s - o, c, a, n, i), be(a)) {
        let l = fe(n.index, t);
        l[H] = Ko(t, e, s, n);
    }
} }
function A_(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = Ep(); try {
    Ct(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        gc(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && R_(c, l);
    }
}
finally {
    Ct(-1), gc(s);
} }
function R_(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function Yu(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        Am(t, i.selectors, !1) && (o ??= [], be(i) ? o.unshift(i) : o.push(i));
    } return o; }
function k_(e, t, n, o, r, i) { let s = oe(e, t); Gs(t[T], s, i, e.value, n, o, r); }
function Gs(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? N(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function O_(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        wt(o, n, c, l);
    } }
function Ws(e, t, n, o, r) { let i = E + n, s = t[m], a = r(s, t, e, o, n); t[i] = a, We(e, !0); let c = e.type === 2; return c ? (Em(t[T], a, e), (pp() === 0 || In(e)) && Ae(a, t), hp()) : Ae(a, t), xo() && (!c || !no(e)) && Gu(s, t, a, e), e; }
function qs(e) { let t = e; return cc() ? lc() : (t = t.parent, We(t, !1)), t; }
function ny(e, t, n) { return (e === null || be(e)) && (n = bo(n[t.index])), n[T]; }
function Zu(e, t) { let n = e[k]; if (!n)
    return; let o; try {
    o = n.get(zt, null);
}
catch {
    o = null;
} o?.(t); }
function Qs(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        wt(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        wt(u, l, o, r), a = !0;
    } return a; }
function x_(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], y = d[f + 1];
            wt(h, n[p], y, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (wt(o, n[s], r, i), l = !0), l; }
function P_(e, t) { let n = fe(t, e), o = n[m]; L_(o, n); let r = n[j]; r !== null && n[ie] === null && (n[ie] = qg(r, n[k])), x(R.ComponentStart); try {
    Ys(o, n, n[H]);
}
finally {
    x(R.ComponentEnd, n[H]);
} }
function L_(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function Ys(e, t, n) { mi(t); try {
    let o = e.viewQuery;
    o !== null && ll(1, o, n);
    let r = e.template;
    r !== null && Jm(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[$e]?.finishViewCreation(e), e.staticContentQueries && rm(e, t), e.staticViewQueries && ll(2, e.viewQuery, n);
    let i = e.components;
    i !== null && F_(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[A] &= -5, yi();
} }
function F_(e, t) { for (let n = 0; n < t.length; n++)
    P_(e, t[n]); }
function ao(e, t, n, o) { let r = P(null); try {
    let i = t.tView, a = e[A] & 4096 ? 4096 : 16, c = xs(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[Et] = l;
    let u = e[$e];
    return u !== null && (c[$e] = u.createEmbeddedView(i)), Ys(i, c, n), c;
}
finally {
    P(r);
} }
function nn(e, t) { return !t || t.firstChild === null || Jo(e); }
function jn(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(O(i)), X(i) && Zs(i, o);
    let s = n.type;
    if (s & 8)
        jn(e, t, n.child, o);
    else if (s & 32) {
        let a = Pu(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = Zm(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = Bt(t[K]);
            jn(c[m], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function Zs(e, t) { for (let n = V; n < e.length; n++) {
    let o = e[n], r = o[m].firstChild;
    r !== null && jn(o[m], o, r, t);
} e[Fe] !== e[j] && t.push(e[Fe]); }
function oy(e) { if (e[Ft] !== null) {
    for (let t of e[Ft])
        t.impl.addSequence(t);
    e[Ft].length = 0;
} }
var ry = [];
function H_(e) { return e[Se] ?? V_(e); }
function V_(e) { let t = ry.pop() ?? Object.create(B_); return t.lView = e, t; }
function j_(e) { e.lView[Se] !== e && (e.lView = null, ry.push(e)); }
var B_ = Xe(Z({}, Pa), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { di(e.lView); }, consumerOnSignalRead() { this.lView[Se] = this; } });
function U_(e) { let t = e[Se] ?? Object.create($_); return t.lView = e, t; }
var $_ = Xe(Z({}, Pa), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = Bt(e.lView); for (; t && !iy(t[m]);)
        t = Bt(t); t && li(t); }, consumerOnSignalRead() { this.lView[Se] = this; } });
function iy(e) { return e.type !== 2; }
function sy(e) { if (e[wo] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[wo])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[A] & 8192);
} }
var z_ = 100;
function ay(e, t = 0) { let o = e[Ue].rendererFactory, r = !1; r || o.begin?.(); try {
    G_(e, t);
}
finally {
    r || o.end?.();
} }
function G_(e, t) { let n = dc(); try {
    fc(!0), wl(e, t);
    let o = 0;
    for (; Ro(e);) {
        if (o === z_)
            throw new w(103, !1);
        o++, wl(e, 1);
    }
}
finally {
    fc(n);
} }
function cy(e, t, n, o) { if (It(t))
    return; let r = t[A], i = !1, s = !1; mi(t); let a = !0, c = null, l = null; i || (iy(e) ? (l = H_(t), c = vo(l)) : Uf() === null ? (a = !1, l = U_(t), c = vo(l)) : t[Se] && (Eo(t[Se]), t[Se] = null)); try {
    Xa(t), pc(e.bindingStartIndex), n !== null && Jm(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && Ri(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && ki(t, p, 0, null), Rc(t, 0);
        }
    if (s || W_(t), sy(t), ly(t, 0), e.contentQueries !== null && rm(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && Ri(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && ki(t, p, 1), Rc(t, 1);
        }
    Q_(e, t);
    let d = e.components;
    d !== null && dy(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && ll(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && Ri(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && ki(t, p, 2), Rc(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[ci]) {
        for (let p of t[ci])
            p();
        t[ci] = null;
    }
    i || (oy(t), t[A] &= -73);
}
catch (u) {
    throw i || di(t), u;
}
finally {
    l !== null && (Gr(l, c), a && j_(l)), yi();
} }
function ly(e, t) { for (let n = Tg(e); n !== null; n = Mg(n))
    for (let o = V; o < n.length; o++) {
        let r = n[o];
        uy(r, t);
    } }
function W_(e) { for (let t = Tg(e); t !== null; t = Mg(t)) {
    if (!(t[A] & 2))
        continue;
    let n = t[Ht];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        li(r);
    }
} }
function q_(e, t, n) { x(R.ComponentStart); let o = fe(t, e); try {
    uy(o, n);
}
finally {
    x(R.ComponentEnd, o[H]);
} }
function uy(e, t) { ap(e) && wl(e, t); }
function wl(e, t) { let o = e[m], r = e[A], i = e[Se], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && Wr(i)), s ||= !1, i && (i.dirty = !1), e[A] &= -9217, s)
    cy(o, e, o.template, e[H]);
else if (r & 8192) {
    let a = P(null);
    try {
        sy(e), ly(e, 1);
        let c = o.components;
        c !== null && dy(e, c, 1), oy(e);
    }
    finally {
        P(a);
    }
} }
function dy(e, t, n) { for (let o = 0; o < t.length; o++)
    q_(e, t[o], n); }
function Q_(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                Ct(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                vp(s, i);
                let c = t[i];
                x(R.HostBindingsUpdateStart, c);
                try {
                    a(2, c);
                }
                finally {
                    x(R.HostBindingsUpdateEnd, c);
                }
            }
        }
    }
    finally {
        Ct(-1);
    } }
function Ar(e, t) { let n = dc() ? 64 : 1088; for (e[Ue].changeDetectionScheduler?.notify(t); e;) {
    e[A] |= n;
    let o = Bt(e);
    if (Ge(e) && !o)
        return e;
    e = o;
} return null; }
function fy(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function py(e, t) { let n = V + t; if (n < e.length)
    return e[n]; }
function co(e, t, n, o = !0) { let r = t[m]; if (Y_(r, t, e, n), o) {
    let s = _l(n, e), a = t[T], c = a.parentNode(e[Fe]);
    c !== null && y_(r, e[le], a, t, c, s);
} let i = t[ie]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function Ku(e, t) { let n = or(e, t); return n !== void 0 && br(n[m], n), n; }
function or(e, t) { if (e.length <= V)
    return; let n = V + t, o = e[n]; if (o) {
    let r = o[Et];
    r !== null && r !== e && $u(r, o), t > 0 && (e[n - 1][ce] = o[ce]);
    let i = Co(e, V + t);
    $m(o[m], o);
    let s = i[$e];
    s !== null && s.detachView(i[m]), o[q] = null, o[ce] = null, o[A] &= -129;
} return o; }
function Y_(e, t, n, o) { let r = V + o, i = n.length; o > 0 && (n[r - 1][ce] = t), o < i - V ? (t[ce] = n[r], Ga(n, V + o, t)) : (n.push(t), t[ce] = null), t[q] = n; let s = t[Et]; s !== null && n !== s && hy(s, t); let a = t[$e]; a !== null && a.insertView(e), ui(t), t[A] |= 128; }
function hy(e, t) { let n = e[Ht], o = t[q]; if (ne(o))
    e[A] |= 2;
else {
    let r = o[q][K];
    t[K] !== r && (e[A] |= 2);
} n === null ? e[Ht] = [t] : n.push(t); }
var bt = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[m]; return jn(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[H]; }
    set context(t) { this._lView[H] = t; }
    get destroyed() { return It(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[q];
        if (X(t)) {
            let n = t[So], o = n ? n.indexOf(this) : -1;
            o > -1 && (or(t, o), Co(n, o));
        }
        this._attachedToViewContainer = !1;
    } br(this._lView[m], this._lView); }
    onDestroy(t) { fi(this._lView, t); }
    markForCheck() { Ar(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[A] &= -129; }
    reattach() { ui(this._lView), this._lView[A] |= 128; }
    detectChanges() { this._lView[A] |= 1024, ay(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new w(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = Ge(this._lView), n = this._lView[Et]; n !== null && !t && $u(n, this._lView), zm(this._lView[m], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new w(902, !1); this._appRef = t; let n = Ge(this._lView), o = this._lView[Et]; o !== null && !n && hy(o, this._lView), ui(this._lView); }
};
function Z_(e) { return Ro(e._lView) || !!(e._lView[A] & 64); }
function K_(e) { li(e._lView); }
var rr = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = J_;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = ao(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new bt(i); }
} return e; })();
function J_() { return Ks(M(), g()); }
function Ks(e, t) { return e.type & 4 ? new rr(t, e, Zn(e, t)) : null; }
var Sl = "<-- AT THIS LOCATION", X_ = "/guide/hydration#third-party-scripts-with-dom-manipulation";
function ew(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function tw(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${iw(e, t, !1)}

`, r = aw();
    throw new w(-502, n + o + r);
}
function gy(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${sw(e)}

`, o = t + n + cw();
    return new w(-503, o);
}
function nw(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${ts(r)}"`);
    } return t.join(" "); }
var ow = new Set(["ngh", "ng-version", "ng-server-context"]);
function rw(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    ow.has(o.name) || t.push(`${o.name}="${ts(o.value)}"`);
} return t.join(" "); }
function Fc(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = nw(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${ew(e.type)})`;
} }
function Pi(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = rw(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? ts(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${ts(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function iw(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + Fc(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + Fc(t) + `
`, r += `  <!-- container -->  ${Sl}
`) : r += "  " + Fc(t) + `  ${Sl}
`, r += `  \u2026
`;
    let i = t.type ? zu(e[m], t, e) : null;
    return i && (r = Pi(i, `
` + r)), r;
}
function sw(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + Pi(o.previousSibling) + `
`), n += "  " + Pi(o) + `  ${Sl}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = Pi(o.parentNode, `
` + n)), n;
}
function aw(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * check if there are any third-party scripts that manipulate the DOM. More info: ${Ha}${X_}
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function cw() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function lw(e) { return e.replace(/\s+/gm, ""); }
function ts(e, t = 50) { return e ? (e = lw(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function my(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? qm(e, t, n) : O(n[r]); }
function yy(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            Xt(e, s, l, a, !1);
        }
} }
function hn(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = Ju(e, t, n, o, r), yp() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = Dn();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return We(i, !0), i; }
function Ju(e, t, n, o, r) { let i = mp(), s = cc(), a = s ? i : i && i.parent, c = e.data[t] = dw(e, a, n, t, o, r); return uw(e, c, i, s), c; }
function uw(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function dw(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return ko() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, controlDirectiveIndex: -1, customControlIndex: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function vy(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        Ey(o) || fw(o, t) && pw(o) === null && hw(o, t.index);
    } }
function Ey(e) { return !(e.type & 64); }
function fw(e, t) { return Ey(t) || e.index > t.index; }
function pw(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function hw(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (Ym(my, yy), e.insertBeforeIndex = t); }
function Bo(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function gw(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function mw(e, t) { let n = e.insertBeforeIndex; n === null ? (Ym(my, yy), n = e.insertBeforeIndex = [null, t]) : (qf(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function yw(e, t, n) { let o = Ju(e, n, 64, null, null); return vy(t, o), o; }
function Js(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function vw(e) { return e >>> 17; }
function Ew(e) { return (e & 131070) >>> 1; }
function Iw(e, t, n) { return e | t << 17 | n << 1; }
function Iy(e) { return e === -1; }
function Xu(e, t, n) { e.index = 0; let o = Js(t, n); o !== null ? e.removes = t.remove[o] : e.removes = F; }
function ns(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[m].data[n];
        return Xu(e, o, e.lView), ns(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), ns(e)); }
function Dw() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return Xu(e, n.value, o), ns.bind(null, e); } return t; }
function Cw(e, t) { let n = { stack: [], index: -1, lView: t }; return Xu(n, e, t), ns.bind(null, n); }
var Tw = new RegExp(`^(\\d+)*(${cu}|${au})*(.*)`);
function Mw(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function Nw(e) { let t = e.match(Tw), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function _w(e) { return !e.prev && e.parent?.type === 8; }
function Hc(e) { return e.index - E; }
function lo(e, t) { return !(e.type & 144) && !!t[e.index] && Dy(O(t[e.index])); }
function Dy(e) { return !!e && !e.isConnected; }
function Cy(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function ww(e, t, n) { let r = e.data[Dr]?.[n]; return r ? Ty(r, t) : null; }
function Rr(e, t, n, o) { let r = Hc(o), i = Cy(e, r); if (i === void 0) {
    let s = e.data[Dr];
    if (s?.[r])
        i = Ty(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (_w(o)) {
            let l = Hc(o.parent);
            i = cl(e, l);
        }
        else {
            let l = oe(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = Hc(c), d = cl(e, u);
                if (c.type === 2 && d) {
                    let p = Iu(e, u) + 1;
                    i = Xs(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function Xs(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function Sw(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case Ag:
                n = n.firstChild;
                break;
            case Rg:
                n = n.nextSibling;
                break;
        }
} return n; }
function Ty(e, t) { let [n, ...o] = Nw(e), r; if (n === au)
    r = t[K][j];
else if (n === cu)
    r = Au(t[K][j]);
else {
    let i = Number(n);
    r = O(t[i + E]);
} return Sw(r, o); }
function bl(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return bw(e, t); {
    let n = t.parentElement, o = bl(e, n), r = bl(n.firstChild, t);
    return !o || !r ? null : [...o, Ag, ...r];
} }
function bw(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(Rg); return o == null ? null : n; }
function Xp(e, t, n) { let o = bl(e, t); return o === null ? null : Mw(n, o); }
function My(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (lo(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = au, i = t[K][j]) : (r = o.index, i = O(t[r]), s = N(r - E)); let a = O(t[e.index]); if (e.type & 44) {
    let l = Zt(t, e);
    l && (a = l);
} let c = Xp(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = Xp(l, a, cu), c === null)
        throw tw(t, e);
} return c; }
function Ny(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: Aw }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function Aw(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var _y = !1, wy = () => { };
function ed(e) { _y = e; }
function ea() { return _y; }
function Rw(e, t, n, o) { wy(e, t, n, o); }
function Sy() { wy = Lw; }
function by(e) { return e = e ?? I(Ce), e.get(du, !1); }
function Ay(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = kw(e), t.i18nChildren.set(e, n)), n; }
function kw(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
    case 1:
    case 2: {
        for (let r of o.children)
            n(r);
        break;
    }
    case 3: {
        for (let r of o.cases)
            for (let i of r)
                n(i);
        break;
    }
} } for (let o = E; o < e.bindingStartIndex; o++) {
    let r = e.data[o];
    if (!(!r || !r.ast))
        for (let i of r.ast)
            n(i);
} return t.size === 0 ? null : t; }
function Ry(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[m], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && Eg(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return Al(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function Al(e, t, n, o) { let r = null; for (let i of o) {
    let s = xw(e, t, n, i);
    s && (Ow(r, s) && t.disjointNodes.add(i.index - E), r = s);
} return r; }
function Ow(e, t) { return e && e.nextSibling !== t; }
function xw(e, t, n, o) { let r = O(e[o.index]); if (!r || Dy(r))
    return t.disconnectedNodes.add(o.index - E), null; let i = r; switch (o.kind) {
    case 0: {
        Du(n, i);
        break;
    }
    case 1:
    case 2: {
        Al(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), Al(e, t, n, o.cases[a]);
        }
        break;
    }
} return Pw(e, o); }
function Pw(e, t) { let o = e[m].data[t.index]; return ms(o) ? Zt(e, o) : t.kind === 3 ? Cw(o, e)() ?? O(e[t.index]) : O(e[t.index]) ?? null; }
function Wt(e, t) { e.currentNode = t; }
function Lo(e, t, n) { let o = n.index - E, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function Vc(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function jc(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function Lw(e, t, n, o) { let r = e[ie]; if (!r || !ea() || n && (Eg(n) || As(r, n.index - E)))
    return; let i = e[m], s = i.data[t]; function a() { if (Iy(o)) {
    let p = Rr(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = Kg(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[Ms]?.[t - E] ?? [], f = r.dehydratedIcuData ??= new Map; Mn({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function Mn(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = ww(e.hydrationInfo, e.lView, r.index - E);
        i && (o = jc(t, i)), Mn(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - E))
        return;
    switch (n.kind) {
        case 0: {
            let o = Lo(e, t, n);
            Wt(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            Mn(e, jc(t, t.currentNode?.firstChild ?? null), n.children);
            let o = Lo(e, t, n);
            Wt(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - E, { hydrationInfo: r } = e, i = Yg(r, o);
            switch (n.type) {
                case 0: {
                    let s = Lo(e, t, n);
                    if (ZM(r, o)) {
                        Mn(e, t, n.children);
                        let a = Vc(t, 1);
                        Wt(t, a);
                    }
                    else if (Mn(e, jc(t, t.currentNode?.firstChild ?? null), n.children), Wt(t, s?.nextSibling ?? null), i !== null) {
                        let a = Vc(t, i + 1);
                        Wt(t, a);
                    }
                    break;
                }
                case 1: {
                    Lo(e, t, n);
                    let s = Vc(t, i + 1);
                    Wt(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                Mn(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = Lo(e, t, n);
            Wt(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var ky = () => { };
function Fw(e, t, n) { ky(e, t, n); }
function Oy() { ky = Hw; }
function Hw(e, t, n) { let o = e[ie]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function Vw(e) { let t = e[ie]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[T];
        for (let i of o.values())
            jw(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function jw(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - E);
    r && _r(e, r, !1);
} }
function ta(e) { let t = e[Ie] ?? [], o = e[q][T], r = []; for (let i of t)
    i.data[Ns] !== void 0 ? r.push(i) : xy(i, o); e[Ie] = r; }
function Bw(e) { let { lContainer: t } = e, n = t[Ie]; if (n === null)
    return; let r = t[q][T]; for (let i of n)
    xy(i, r); }
function xy(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[it];
    for (; n < r;) {
        let i = o.nextSibling;
        _r(t, o, !1), o = i, n++;
    }
} }
function na(e) { ta(e); let t = e[j]; ne(t) && ir(t); for (let n = V; n < e.length; n++)
    ir(e[n]); }
function ir(e) { Vw(e); let t = e[m]; for (let n = E; n < t.bindingStartIndex; n++)
    if (X(e[n])) {
        let o = e[n];
        na(o);
    }
    else
        ne(e[n]) && ir(e[n]); }
function td(e) { let t = e._views; for (let n of t) {
    let o = Eu(n);
    o !== null && o[j] !== null && (ne(o) ? ir(o) : na(o));
} }
function Uw(e, t, n, o) { e !== null && (n.cleanup(t), na(e.lContainer), td(o)); }
function $w(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[Ir] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[it] > 0 && (i.firstChild = e, e = Xs(o[it], e)), n.push(i);
    } return [e, n]; }
var Py = () => null, Ly = () => null;
function Fy() { Py = zw, Ly = Gw; }
function zw(e, t) { return Vy(e, t) ? e[Ie].shift() : (ta(e), null); }
function sr(e, t) { return Py(e, t); }
function Gw(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = sr(e, t.tView.ssrId); return n[m].firstUpdatePass && o === null && Ww(n, t), o; }
function Hy(e, t, n) { return Ly(e, t, n); }
function Ww(e, t) { let n = t; for (; n;) {
    if (eh(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (eh(e, n))
        return;
    n = n.next;
} }
function Vy(e, t) { let n = e[Ie]; return !t || n === null || n.length === 0 ? !1 : n[0].data[Ts] === t; }
function eh(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return X(o) && Vy(o, n) ? (ta(o), !0) : !1; }
var jy = class {
}, oa = class {
}, Rl = class {
    resolveComponentFactory(t) { throw new w(917, !1); }
}, kr = class {
    static NULL = new Rl;
}, ar = class {
}, qw = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => Qw();
} return e; })();
function Qw() { let e = g(), t = M(), n = fe(t.index, e); return (ne(n) ? n : e)[T]; }
var By = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function nd(e) { return e.ngModule !== void 0; }
function qt(e) { return !!yn(e); }
function wi(e) { return !!Be(e); }
function th(e) { return !!Me(e); }
function Uo(e) { return !!W(e); }
function Yw(e) { return W(e) ? "component" : Me(e) ? "directive" : Be(e) ? "pipe" : "type"; }
function Zw(e, t) { if (Zr(e) && (e = G(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Ne(t)}", to return a standalone entity or NgModule but got "${Ne(e) || e}".`); if (yn(e) == null) {
    let n = W(e) || Me(e) || Be(e);
    if (n != null) {
        if (!n.standalone) {
            let o = Yw(e);
            throw new Error(`The "${Ne(e)}" ${o}, imported from "${Ne(t)}", is not standalone. Does the ${o} have the standalone: false flag?`);
        }
    }
    else
        throw nd(e) ? new Error(`A module with providers was imported from "${Ne(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Ne(e)}" type, imported from "${Ne(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var kl = class {
    ownerNgModule = new WeakMap;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new WeakMap;
    standaloneComponentsScopeCache = new WeakMap;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = yn(t);
            if (n?.declarations)
                for (let o of bn(n.declarations))
                    Uo(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = W(t); if (o === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (o.standalone) {
        let r = this.getStandaloneComponentScope(t, n);
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let r = this.getNgModuleScope(this.ownerNgModule.get(t));
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!qt(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = ei(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of bn(n.imports))
        if (qt(r)) {
            let i = this.getNgModuleScope(r);
            Mt(i.exported.directives, o.compilation.directives), Mt(i.exported.pipes, o.compilation.pipes);
        }
        else if (Do(r))
            if (th(r) || Uo(r))
                o.compilation.directives.add(r);
            else if (wi(r))
                o.compilation.pipes.add(r);
            else
                throw new w(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of bn(n.declarations)) {
            if (qt(r) || Do(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            wi(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of bn(n.exports))
        if (qt(r)) {
            let i = this.getNgModuleScope(r);
            Mt(i.exported.directives, o.exported.directives), Mt(i.exported.pipes, o.exported.pipes), Mt(i.exported.directives, o.compilation.directives), Mt(i.exported.pipes, o.compilation.pipes);
        }
        else
            wi(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Le(n ?? [])) {
        let i = G(r);
        try {
            Zw(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (qt(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            Mt(s.exported.directives, o.compilation.directives), Mt(s.exported.pipes, o.compilation.pipes);
        }
        else if (wi(i))
            o.compilation.pipes.add(i);
        else if (th(i) || Uo(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = W(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function Mt(e, t) { for (let n of e)
    t.add(n); }
var Bn = new kl, Li = {}, xn = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, Li, o); return r !== Li || n === Li ? r : this.parentInjector.get(t, n, o); }
};
function os(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = Yr(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = Yr(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function uo(e, t = 0) { let n = g(); if (n === null)
    return Pe(e, t); let o = M(); return dg(o, n, G(e), t); }
function Uy() { let e = "invalid"; throw new Error(e); }
function $y(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    Xw(e, t, n, a, i, c, l);
} i !== null && o !== null && Kw(n, o, i); }
function Kw(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new w(-301, !1);
    o.push(t[r], i);
} }
function Jw(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function Xw(e, t, n, o, r, i, s) { let a = o.length, c = null; for (let f = 0; f < a; f++) {
    let p = o[f];
    c === null && be(p) && (c = p, Jw(e, n, f)), tl(Wi(n, t), e, p.type);
} iS(n, e.data.length, a), c?.viewProvidersResolver && c.viewProvidersResolver(c); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = Sr(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = Hn(n.mergedAttrs, p.hostAttrs), tS(e, n, t, d, p), rS(d, p, r), s !== null && s.has(p)) {
        let [y, v] = s.get(p);
        n.directiveToIndex.set(p.type, [d, y + n.directiveStart, v + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} eS(e, n, i); }
function eS(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        nh(0, t, r, o), nh(1, t, r, o), rh(t, o, !1);
    else {
        let i = n.get(r);
        oh(0, t, i, o), oh(1, t, i, o), rh(t, o, !0);
    }
} }
function nh(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), zy(t, i);
    } }
function oh(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), zy(t, s);
    } }
function zy(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function rh(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || Ru(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < o.length;) {
    let c = o[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && r.hasOwnProperty(c)) {
        let l = r[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, o[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], o[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function tS(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = ni(r.type, !0)), s = new Jt(i, be(r), uo, null); e.blueprint[o] = s, n[o] = s, nS(e, t, o, Sr(e, n, r.hostVars, L), r); }
function nS(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    oS(s) != a && s.push(a), s.push(n, o, i);
} }
function oS(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function rS(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    be(t) && (n[""] = e);
} }
function iS(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function od(e, t, n, o, r, i, s, a) { let c = t[m], l = c.consts, u = ue(l, s), d = hn(c, e, n, o, u); return i && $y(c, t, d, ue(l, a), r), d.mergedAttrs = Hn(d.mergedAttrs, d.attrs), d.attrs !== null && os(d, d.attrs, !1), d.mergedAttrs !== null && os(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function rd(e, t) { tg(e, t), Ka(t) && e.queries.elementEnd(t); }
function Gy(e, t, n, o, r, i) { let s = t.consts, a = ue(s, r), c = hn(t, e, n, o, a); if (c.mergedAttrs = Hn(c.mergedAttrs, c.attrs), i != null) {
    let l = ue(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && os(c, c.attrs, !1), c.mergedAttrs !== null && os(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function cr(e) { return ra(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function sS(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function Wy(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function ra(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function qy(e, t) { let n = cr(e), o = cr(t); return n && o ? sS(e, t, qy) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function je(e, t, n) { return e[t] = n; }
function fo(e, t) { return e[t]; }
function z(e, t, n) { if (n === L)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function on(e, t, n, o) { let r = z(e, t, n); return z(e, t + 1, o) || r; }
function ia(e, t, n, o, r) { let i = on(e, t, n, o); return z(e, t + 2, r) || i; }
function ke(e, t, n, o, r, i) { let s = on(e, t, n, o); return on(e, t + 2, r, i) || s; }
function St(e, t, n) { return function o(r) { let i = o.__ngNativeEl__; i !== void 0 && jM(r, i); let s = ge(e) ? fe(e.index, t) : t; Ar(s, 5); let a = t[H], c = ih(t, a, n, r), l = o.__ngNextListenerFn__; for (; l;)
    c = ih(t, a, l, r) && c, l = l.__ngNextListenerFn__; return c; }; }
function ih(e, t, n, o) { let r = Nn(null); try {
    return x(R.OutputStart, t, n), n(o) !== !1;
}
catch (i) {
    return Zu(e, i), !1;
}
finally {
    x(R.OutputEnd, t, n), Nn(r);
} }
function id(e, t, n, o, r, i, s, a) { let c = In(e), l = !1, u = null; if (!o && c && (u = cS(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = oe(e, n), f = o ? o(d) : d;
    BM(n, f, i, a), o || (a.__ngNativeEl__ = d);
    let p = r.listen(f, i, a);
    if (!aS(i)) {
        let h = o ? y => o(O(y[e.index])) : e.index;
        Qy(h, t, n, i, a, p, !1);
    }
} return l; }
function aS(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function cS(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[Lt], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function Qy(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? dp(t) : null, c = up(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function lS(e, t, n, o, r) { let i = St(e, t, n), s = uS(e, t, o, r, i); }
function uS(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, Un(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, Un(e, t, i, o, o, r)), c; }
function Un(e, t, n, o, r, i) { let s = t[n], a = t[m], l = a.data[n].outputs[o], d = s[l].subscribe(i); Qy(e.index, a, t, r, i, d, !0); }
function Yy() { Zy(); }
function Zy() { let e = g(), t = _(), n = M(); if (t.firstCreatePass && dS(t, n), n.controlDirectiveIndex === -1)
    return; Q("NgSignalForms"); let o = e[n.controlDirectiveIndex]; t.data[n.controlDirectiveIndex].controlDef.create(o, new rs(e, t, n)); }
function Ky() { Jy(); }
function Jy() { let e = g(), t = _(), n = De(); if (n.controlDirectiveIndex === -1)
    return; let o = t.data[n.controlDirectiveIndex].controlDef, r = e[n.controlDirectiveIndex]; o.update(r, new rs(e, t, n)); }
var rs = class {
    lView;
    tView;
    tNode;
    hasPassThrough;
    constructor(t, n, o) { this.lView = t, this.tView = n, this.tNode = o, this.hasPassThrough = !!(o.flags & 4096); }
    get customControl() { return this.tNode.customControlIndex !== -1 ? this.lView[this.tNode.customControlIndex] : void 0; }
    get descriptor() { return `<${this.tNode.value}>`; }
    listenToCustomControlOutput(t, n) { Xy(this.tView.data[this.tNode.customControlIndex], t) && Un(this.tNode, this.lView, this.tNode.customControlIndex, t, t, St(this.tNode, this.lView, n)); }
    listenToCustomControlModel(t) { let n = this.tNode.flags & 1024 ? "valueChange" : "checkedChange"; Un(this.tNode, this.lView, this.tNode.customControlIndex, n, n, St(this.tNode, this.lView, t)); }
    listenToDom(t, n) { id(this.tNode, this.tView, this.lView, void 0, this.lView[T], t, n, St(this.tNode, this.lView, n)); }
    setInputOnDirectives(t, n) { let o = this.tNode.inputs?.[t], r = this.tNode.hostDirectiveInputs?.[t]; if (!o && !r)
        return !1; if (o)
        for (let i of o) {
            let s = this.tView.data[i], a = this.lView[i];
            wt(s, a, t, n);
        } if (r)
        for (let i = 0; i < r.length; i += 2) {
            let s = r[i], a = r[i + 1], c = this.tView.data[s], l = this.lView[s];
            wt(c, l, a, n);
        } return !0; }
    setCustomControlModelInput(t) { let n = this.lView[this.tNode.customControlIndex], o = this.tView.data[this.tNode.customControlIndex], r = this.tNode.flags & 1024 ? "value" : "checked"; wt(o, n, r, t); }
    customControlHasInput(t) { return this.tNode.customControlIndex === -1 ? !1 : this.tView.data[this.tNode.customControlIndex].inputs[t] != null; }
};
function dS(e, t, n) { for (let r = t.directiveStart; r < t.directiveEnd; r++)
    if (e.data[r].controlDef) {
        t.controlDirectiveIndex = r;
        break;
    } if (t.controlDirectiveIndex === -1)
    return; let o = e.data[t.controlDirectiveIndex].controlDef; if (o.passThroughInput && (t.inputs?.[o.passThroughInput]?.length ?? 0) > 1) {
    t.flags |= 4096;
    return;
} fS(e, t); }
function fS(e, t) { for (let n = t.directiveStart; n < t.directiveEnd; n++) {
    let o = e.data[n];
    if (sh(o, "value")) {
        t.flags |= 1024, t.customControlIndex = n;
        return;
    }
    if (sh(o, "checked")) {
        t.flags |= 2048, t.customControlIndex = n;
        return;
    }
} }
function sh(e, t) { return pS(e, t) && Xy(e, t + "Change"); }
function pS(e, t) { return t in e.inputs; }
function Xy(e, t) { return t in e.outputs; }
var rt = Symbol("BINDING"), ah = { kind: "input", requiredVars: 1 }, hS = { kind: "output", requiredVars: 0 };
function ch(e, t, n) { let o = g(), r = pe(); if (z(o, r, n)) {
    let i = o[m], s = De(), a = fe(s.index, o);
    Ar(a, 1);
    let c = i.directiveRegistry[e], l = x_(s, i, o, c, t, n);
} }
function ev(e, t) { if (e === "formField") {
    let o = { [rt]: ah, create: () => { Zy(); }, update: () => { ch(o.targetIdx, e, t()), Jy(); } };
    return o;
} let n = { [rt]: ah, update: () => ch(n.targetIdx, e, t()) }; return n; }
function tv(e, t) { let n = { [rt]: hS, create: () => { let o = g(), r = M(), s = o[m].directiveRegistry[n.targetIdx]; lS(r, o, t, s, e); } }; return n; }
function gS(e, t) { let n = ev(e, t), o = tv(e + "Change", i => t.set(i)); return { [rt]: { kind: "twoWay", requiredVars: n[rt].requiredVars + o[rt].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
function mS(e) { let t = e; for (; t;) {
    let n = dM(t);
    if (n !== null)
        for (let o = E; o < n.length; o++) {
            let r = n[o];
            if (!ne(r) && !X(r) || r[j] !== t)
                continue;
            let i = n[m], s = jt(i, o);
            if (ge(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = sd(a);
                if (c !== null)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function sd(e) { return e.debugInfo?.className || e.type.name || null; }
var is = class extends kr {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = W(t); return new At(n, this.ngModule); }
};
function yS(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & Ps.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function vS(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function ES(e, t, n) { let o = t instanceof yt ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new xn(n, o) : n; }
function IS(e) { let t = e.get(ar, null); if (t === null)
    throw new w(407, !1); let n = e.get(By, null), o = e.get(Tt, null), r = e.get(pn, null, { optional: !0 }); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1, tracingService: r }; }
function DS(e, t) { let n = nv(e); return Os(t, n, n === "svg" ? op : n === "math" ? rp : null); }
function nv(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var At = class extends oa {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= yS(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= vS(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = JN(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { x(R.DynamicComponentStart); let a = P(null); try {
        let c = this.componentDef, l = ES(c, r || this.ngModule, t), u = IS(l), d = u.tracingService;
        return d && d.componentCreate ? d.componentCreate(sd(c), () => this.createComponentRef(u, l, n, o, i, s)) : this.createComponentRef(u, l, n, o, i, s);
    }
    finally {
        P(a);
    } }
    createComponentRef(t, n, o, r, i, s) { let a = this.componentDef, c = CS(r, a, s, i), l = t.rendererFactory.createRenderer(null, a), u = r ? N_(l, r, a.encapsulation, n) : DS(a, l), d = s?.some(lh) || i?.some(h => typeof h != "function" && h.bindings.some(lh)), f = xs(null, c, null, 512 | Ou(a), null, null, t, l, n, null, qg(u, n, !0)); f[E] = u, mi(f); let p = null; try {
        let h = od(E, f, 2, "#host", () => c.directiveRegistry, !0, 0);
        Em(l, u, h), Ae(u, f), zs(c, f, h), Cu(c, h, f), rd(c, h), o !== void 0 && MS(h, this.ngContentSelectors, o), p = fe(h.index, f), f[H] = p[H], Ys(c, f, null);
    }
    catch (h) {
        throw p !== null && ol(p), ol(f), h;
    }
    finally {
        x(R.DynamicComponentEnd), yi();
    } return new ss(this.componentType, f, !!d); }
};
function CS(e, t, n, o) { let r = e ? ["ng-version", "21.2.13"] : XN(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[rt].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[rt].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = Me(d);
        c.push(f);
    } return ku(0, null, TS(i, s), 1, a, c, null, null, null, [r], null); }
function TS(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function lh(e) { let t = e[rt].kind; return t === "input" || t === "twoWay"; }
var ss = class extends jy {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = jt(n[m], E), this.location = Zn(this._tNode, n), this.instance = fe(this._tNode.index, n)[H], this.hostView = this.changeDetectorRef = new bt(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = Qs(o, r[m], r, t, n); this.previousInputValues.set(t, n); let s = fe(o.index, r); Ar(s, 1); }
    get injector() { return new _t(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function MS(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var sa = (() => { class e {
    static __NG_ELEMENT_ID__ = NS;
} return e; })();
function NS() { let e = M(); return ov(e, g()); }
var Ol = class e extends sa {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return Zn(this._hostTNode, this._hostLView); }
    get injector() { return new _t(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = ou(this._hostTNode, this._hostLView); if (ig(t)) {
        let n = zi(t, this._hostLView), o = $i(t), r = n[m].data[o + 8];
        return new _t(r, n);
    }
    else
        return new _t(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = uh(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - V; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = sr(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, nn(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !Ho(t), l; if (c)
        l = n;
    else {
        let v = n || {};
        l = v.index, o = v.injector, r = v.projectableNodes, i = v.environmentInjector || v.ngModuleRef, s = v.directives, a = v.bindings;
    } let u = c ? t : new At(W(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let D = (c ? d : this.parentInjector).get(yt, null);
        D && (i = D);
    } let f = W(u.componentType ?? {}), p = sr(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, y = u.create(d, r, h, i, s, a); return this.insertImpl(y.hostView, l, nn(this._hostTNode, p)), y; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (cp(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[q], l = new e(c, c[le], c[q]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return co(s, r, i, o), t.attachToViewContainerRef(), Ga(Bc(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = uh(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = or(this._lContainer, n); o && (Co(Bc(this._lContainer), n), br(o[m], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = or(this._lContainer, n); return o && Co(Bc(this._lContainer), n) != null ? new bt(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function uh(e) { return e[So]; }
function Bc(e) { return e[So] || (e[So] = []); }
function ov(e, t) { let n, o = t[e.index]; return X(o) ? n = o : (n = fy(o, t, null, e), t[e.index] = n, xu(t, n)), rv(n, t, e, o), new Ol(n, e, t); }
function _S(e, t) { let n = e[T], o = n.createComment(""), r = oe(t, e), i = n.parentNode(r); return Xt(n, i, o, n.nextSibling(r), !1), o; }
var rv = sv, ad = () => !1;
function iv(e, t, n) { return ad(e, t, n); }
function sv(e, t, n, o) { if (e[Fe])
    return; let r; n.type & 8 ? r = O(o) : r = _S(t, n), e[Fe] = r; }
function wS(e, t, n) { if (e[Fe] && e[Ie])
    return !0; let o = n[ie], r = t.index - E; if (!o || Kn(t) || As(o, r))
    return !1; let s = cl(o, r), a = o.data[Xn]?.[r]; if (a === void 0)
    return !1; let [c, l] = $w(s, a); return e[Fe] = c, e[Ie] = l, !0; }
function SS(e, t, n, o) { ad(e, n, t) || sv(e, t, n, o); }
function av() { rv = SS, ad = wS; }
var xl = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, Pl = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length, r = [];
        for (let i = 0; i < o; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            r.push(a.clone());
        }
        return new e(r);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        ld(t, n).matches !== null && this.queries[n].setDirty(); }
}, as = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = OS(t) : this.predicate = t; }
}, Ll = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0, i = this.getByIndex(o).embeddedTView(t, r);
        i && (i.indexInDeclarationView = o, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, Fl = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n;)
            o = o.parent;
        return n === (o !== null ? o.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let o = this.metadata.predicate; if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
            let i = o[r];
            this.matchTNodeWithReadOption(t, n, bS(n, i)), this.matchTNodeWithReadOption(t, n, Oi(n, t, i, !1, !1));
        }
    else
        o === rr ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, Oi(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === vr || r === sa || r === rr && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = Oi(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function bS(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function AS(e, t) { return e.type & 11 ? Zn(e, t) : e.type & 4 ? Ks(e, t) : null; }
function RS(e, t, n, o) { return n === -1 ? AS(t, e) : n === -2 ? kS(e, t, o) : Ko(e, e[m], n, t); }
function kS(e, t, n) { if (n === vr)
    return Zn(t, e); if (n === rr)
    return Ks(t, e); if (n === sa)
    return ov(t, e); }
function cv(e, t, n, o) { let r = t[$e].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(RS(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function Hl(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = cv(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = V; d < u.length; d++) {
                let f = u[d];
                f[Et] === f[q] && Hl(f[m], f, l, o);
            }
            if (u[Ht] !== null) {
                let d = u[Ht];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    Hl(p[m], p, l, o);
                }
            }
        }
    }
} return o; }
function cd(e, t) { return e[$e].queries[t].queryList; }
function lv(e, t, n) { let o = new qi((n & 4) === 4); return fp(e, t, o, o.destroy), (t[$e] ??= new Pl).queries.push(new xl(o)) - 1; }
function uv(e, t, n) { let o = _(); return o.firstCreatePass && (fv(o, new as(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), lv(o, g(), t); }
function dv(e, t, n, o) { let r = _(); if (r.firstCreatePass) {
    let i = M();
    fv(r, new as(t, n, o), i.index), xS(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return lv(r, g(), n); }
function OS(e) { return e.split(",").map(t => t.trim()); }
function fv(e, t, n) { e.queries === null && (e.queries = new Ll), e.queries.track(new Fl(t, n)); }
function xS(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function ld(e, t) { return e.queries.getByIndex(t); }
function pv(e, t) { let n = e[m], o = ld(n, t); return o.crossesNgTemplate ? Hl(n, e, t, []) : cv(n, e, o, t); }
function ud(e, t, n) { let o, r = $f(() => { o._dirtyCounter(); let i = PS(o, e); if (t && i === void 0)
    throw new w(-951, !1); return i; }); return o = r[et], o._dirtyCounter = _c(0), o._flatValue = void 0, r; }
function dd(e) { return ud(!0, !1, e); }
function fd(e) { return ud(!0, !0, e); }
function pd(e) { return ud(!1, !1, e); }
function hv(e, t) { let n = e[et]; n._lView = g(), n._queryIndex = t, n._queryList = cd(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function PS(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[A] & 4)
    return t ? void 0 : F; let r = cd(n, o), i = pv(n, o); return r.reset(i, yg), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
var rn = new Map, lr = new Set;
function gv(e) { return ht(this, null, function* () { let t = rn; rn = new Map; let n = new Map; function o(i) { let s = n.get(i); if (s)
    return s; let a = e(i).then(c => jS(i, c)); return n.set(i, a), a; } let r = Array.from(t).map(a => ht(null, [a], function* ([i, s]) { if (s.styleUrl && s.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); let c = []; s.templateUrl && c.push(o(s.templateUrl).then(f => { s.template = f; })); let l = typeof s.styles == "string" ? [s.styles] : s.styles ?? []; s.styles = l; let { styleUrl: u, styleUrls: d } = s; if (u && (d = [u], s.styleUrl = void 0), d?.length) {
    let f = Promise.all(d.map(p => o(p))).then(p => { l.push(...p), s.styleUrls = void 0; });
    c.push(f);
} yield Promise.all(c), lr.delete(i); })); yield Promise.all(r); }); }
function LS(e, t) { mv(t) && (rn.set(e, t), lr.add(e)); }
function FS(e) { return lr.has(e); }
function mv(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls?.length || e.styleUrl); }
function HS() { let e = rn; return rn = new Map, e; }
function VS(e) { lr.clear(); for (let t of e.keys())
    lr.add(t); rn = e; }
function yv() { return rn.size === 0; }
function jS(e, t) { return ht(this, null, function* () { if (typeof t == "string")
    return t; if (t.status !== void 0 && t.status !== 200)
    throw new w(918, !1); return t.text(); }); }
var Vl = new Map, vv = !0;
function BS(e, t, n) { if (t && t !== n && vv)
    throw new w(921, !1); }
function hd(e, t) { let n = Vl.get(t) || null; BS(t, n, e), Vl.set(t, e); }
function gd(e) { return Vl.get(e); }
function US(e) { vv = !e; }
var $n = class {
}, Ev = class {
};
function Iv(e, t) { return new zn(e, t ?? null, []); }
var $S = Iv, zn = class extends $n {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new is(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = yn(t); this._bootstrapComponents = bn(i.bootstrap), this._r3Injector = Dp(t, n, [{ provide: $n, useValue: this }, { provide: kr, useValue: this.componentFactoryResolver }, ...o], Qr(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, Gn = class extends Ev {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new zn(this.moduleType, t, []); }
};
function Dv(e, t, n) { return new zn(e, t, n, !1); }
var ur = class extends $n {
    injector;
    componentFactoryResolver = new is(this);
    instance = null;
    constructor(t) { super(); let n = new Qa([...t.providers, { provide: $n, useValue: this }, { provide: kr, useValue: this.componentFactoryResolver }], t.parent || si(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function md(e, t, n = null) { return new ur({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var zS = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = qa(!1, n.type), r = o.length > 0 ? md([o], this._injector, "") : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e(Pe(yt)) });
} return e; })();
function Cv(e) { return Ze(() => { let t = _v(e), n = Xe(Z({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === Es.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(zS).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || Re.Emulated, styles: e.styles || F, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && Q("NgStandalone"), wv(n); let o = e.dependencies; return n.directiveDefs = cs(o, Tv), n.pipeDefs = cs(o, Be), n.id = QS(n), n; }); }
function Tv(e) { return W(e) || Me(e); }
function yd(e) { return Ze(() => ({ type: e.type, bootstrap: e.bootstrap || F, declarations: e.declarations || F, imports: e.imports || F, exports: e.exports || F, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function GS(e, t) { if (e == null)
    return _e; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = Ps.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function WS(e) { if (e == null)
    return _e; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function Mv(e) { return Ze(() => { let t = _v(e); return wv(t), t; }); }
function Nv(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function _v(e) { let t = {}; return { type: e.type, providersResolver: null, viewProvidersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || _e, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || F, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, controlDef: null, inputs: GS(e.inputs, t), outputs: WS(e.outputs), debugInfo: null }; }
function wv(e) { e.features?.forEach(t => t(e)); }
function cs(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var qS = new Map;
function QS(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function Sv(e) { return t => { t.controlDef = { create: (n, o) => { n?.\u0275ngControlCreate(o); }, update: (n, o) => { n?.\u0275ngControlUpdate?.(o); }, passThroughInput: e }; }; }
function bv(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = YS, n.hostDirectives = o ? e.map(jl) : [e]) : o ? n.hostDirectives.unshift(...e.map(jl)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function YS(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, Av(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && be(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function Av(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                dh(jl(i), t, n);
        }
        else
            dh(o, t, n); }
function dh(e, t, n) { let o = Me(e.directive); ZS(o.declaredInputs, e.inputs), Av(o, t, n), n.set(o, e), t.push(o); }
function jl(e) { return typeof e == "function" ? { directive: G(e), inputs: _e, outputs: _e } : { directive: G(e.directive), inputs: fh(e.inputs), outputs: fh(e.outputs) }; }
function fh(e) { if (e === void 0 || e.length === 0)
    return _e; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function ZS(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function KS(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function vd(e) { let t = KS(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (be(e))
        r = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new w(903, !1);
        r = t.\u0275dir;
    }
    if (r) {
        if (n) {
            o.push(r);
            let s = e;
            s.inputs = Uc(e.inputs), s.declaredInputs = Uc(e.declaredInputs), s.outputs = Uc(e.outputs);
            let a = r.hostBindings;
            a && nb(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && eb(e, c), l && tb(e, l), JS(e, r), Wf(e.outputs, r.outputs), be(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === vd && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} XS(o); }
function JS(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function XS(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = Hn(r.hostAttrs, n = Hn(n, r.hostAttrs));
} }
function Uc(e) { return e === _e ? {} : e === F ? [] : e; }
function eb(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function tb(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function nb(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
function Rv(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = Hn(e.mergedAttrs, e.attrs);
    let u = e.tView = ku(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), We(e, !1); let c = kv(n, t, e, o); xo() && Gu(n, t, c, e), Ae(c, t); let l = fy(c, t, c, e); t[o + E] = l, xu(t, l), iv(l, e, t); }
function ob(e, t, n, o, r, i, s, a, c, l, u) { let d = n + E, f; return t.firstCreatePass ? (f = hn(t, d, 4, s || null, a || null), pi() && $y(t, e, f, ue(t.consts, l), Yu), tg(t, f)) : f = t.data[d], Rv(f, e, t, n, o, r, i, c), In(f) && zs(t, e, f), l != null && so(e, f, u), f; }
function sn(e, t, n, o, r, i, s, a, c, l, u) { let d = n + E, f; if (t.firstCreatePass) {
    if (f = hn(t, d, 4, s || null, a || null), l != null) {
        let p = ue(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return Rv(f, e, t, n, o, r, i, c), l != null && so(e, f, u), f; }
function Ed(e, t, n, o, r, i, s, a) { let c = g(), l = _(), u = ue(l.consts, i); return ob(c, l, e, t, n, o, r, u, void 0, s, a), Ed; }
function Id(e, t, n, o, r, i, s, a) { let c = g(), l = _(), u = ue(l.consts, i); return sn(c, l, e, t, n, o, r, u, void 0, s, a), Id; }
var kv = Ov;
function Ov(e, t, n, o) { return He(!0), t[T].createComment(""); }
function rb(e, t, n, o) { let r = !Rs(t, n); He(r); let i = t[ie]?.data[Cs]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return Ov(e, t); let s = t[ie], a = Rr(s, e, t, n); bs(s, o, a); let c = Iu(s, o); return Xs(c, a); }
function xv() { kv = rb; }
var ee = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(ee || {}), ph = 0, ib = 1, $ = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })($ || {}), dr = (function (e) { return e[e.Initial = -1] = "Initial", e; })(dr || {}), Pn = 0, dt = 1, jo = 2, Si = 3, sb = 4, ab = 5, aa = 6, cb = 7, Ln = 8, lb = 9, Dd = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(Dd || {});
function Or(e, t, n) { let o = Lv(e); t[o] === null && (t[o] = []), t[o].push(n); }
function Fi(e, t) { let n = Lv(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function Pv(e) { Fi(1, e), Fi(0, e), Fi(2, e); }
function Lv(e) { let t = sb; return e === 1 ? t = ab : e === 2 && (t = lb), t; }
function xr(e) { return e + 1; }
function me(e, t) { let n = e[m], o = xr(t.index); return e[o]; }
function ub(e, t, n) { let o = e[m], r = xr(t); e[r] = n; }
function ae(e, t) { let n = xr(t.index); return e.data[n]; }
function db(e, t, n) { let o = xr(t); e.data[o] = n; }
function fb(e, t, n) { let o = t[m], r = ae(o, n); switch (e) {
    case $.Complete: return r.primaryTmplIndex;
    case $.Loading: return r.loadingTmplIndex;
    case $.Error: return r.errorTmplIndex;
    case $.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function Bl(e, t) { return t === $.Placeholder ? e.placeholderBlockConfig?.[ph] ?? null : t === $.Loading ? e.loadingBlockConfig?.[ph] ?? null : null; }
function Fv(e) { return e.loadingBlockConfig?.[ib] ?? null; }
function hh(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function pb(e, t) { let n = t.primaryTmplIndex + E; return jt(e, n); }
function Hv(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function Vv(e, t) { let n = null, o = xr(t.index); return E < o && o < e.bindingStartIndex && (n = ae(e, t)), !!n && Hv(n); }
function Cd(e, t, n, o) { let r = n.get(U); return HM(e, () => r.run(t), i => r.runOutsideAngular(() => FM(i)), o); }
function hb(e, t, n) { return n == null ? e : n >= 0 ? lp(n, e) : e[t.index][V] ?? null; }
function gb(e, t) { return Vt(E + t, e); }
function po(e, t, n, o, r, i, s, a) { let c = e[k], l = c.get(U), u; function d() { if (It(e)) {
    u.destroy();
    return;
} let f = me(e, t), p = f[dt]; if (p !== dr.Initial && p !== $.Placeholder) {
    u.destroy();
    return;
} let h = hb(e, t, o); if (!h || (u.destroy(), It(h)))
    return; let y = gb(h, n), v = r(y, () => { l.run(() => { e !== h && ec(h, v), i(); }); }, c, a); e !== h && fi(h, v), Or(s, f, v); } u = jm({ read: d }, { injector: c }); }
function ca(e, t) { let n = t.get(vb), o = () => n.remove(e); return n.add(e), o; }
var mb = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, yb = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, vb = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = I(U);
    requestIdleCallbackFn = mb().bind(globalThis);
    cancelIdleCallbackFn = yb().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: o, deferred: r } = this; o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let o of this.current)
        o(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let o of this.deferred)
            this.current.add(o);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function la(e) { return (t, n) => jv(e, t, n); }
function jv(e, t, n) { let o = n.get(Bv), r = n.get(U), i = () => o.remove(t); return o.add(e, t, r), i; }
var Bv = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, o, r) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, o), this.scheduleTimer(r); }
    remove(n) { let { current: o, deferred: r } = this; this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout(); }
    addToQueue(n, o, r) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > o) {
            i = s;
            break;
        } Kf(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && Wa(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && Wa(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(o), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Eb = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? md(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), Ib = new S("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), Uv = new S("");
function $c(e, t, n) { return e.get(Eb).getOrCreateInjector(t, e, n, ""); }
function Db(e, t, n) { if (e instanceof xn) {
    let r = e.injector, i = e.parentInjector, s = $c(i, t, n);
    return new xn(r, s);
} let o = e.get(yt); if (o !== e) {
    let r = $c(o, t, n);
    return new xn(e, r);
} return $c(e, t, n); }
function ot(e, t, n, o = !1) { let r = n[q], i = r[m]; if (It(r))
    return; let s = me(r, t), a = s[dt], c = s[cb]; if (!(c !== null && e < c) && mh(a, e) && mh(s[Pn] ?? -1, e)) {
    let l = ae(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (Fv(l) !== null || Bl(l, $.Loading) !== null || Bl(l, $.Placeholder)) ? Ul : $v;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        Zu(r, f);
    }
} }
function Cb(e, t) { let n = e[Ie]?.findIndex(r => r.data[Cr] === t[dt]) ?? -1; return { dehydratedView: n > -1 ? e[Ie][n] : null, dehydratedViewIx: n }; }
function $v(e, t, n, o, r) { x(R.DeferBlockStateStart); let i = fb(e, r, o); if (i !== null) {
    t[dt] = e;
    let s = r[m], a = i + E, c = jt(s, a), l = 0;
    Ku(n, l);
    let u;
    if (e === $.Complete) {
        let h = ae(s, o), y = h.providers;
        y && y.length > 0 && (u = Db(r[k], h, y));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = Cb(n, t), p = ao(r, c, null, { injector: u, dehydratedView: d });
    if (co(n, p, l, nn(c, d)), Ar(p, 2), f > -1 && n[Ie]?.splice(f, 1), (e === $.Complete || e === $.Error) && Array.isArray(t[Ln])) {
        for (let h of t[Ln])
            h();
        t[Ln] = null;
    }
} x(R.DeferBlockStateEnd); }
function Tb(e, t, n, o, r) { let i = Date.now(), s = r[m], a = ae(s, o); if (t[jo] === null || t[jo] <= i) {
    t[jo] = null;
    let c = Fv(a), l = t[Si] !== null;
    if (e === $.Loading && c !== null && !l) {
        t[Pn] = e;
        let u = gh(c, t, o, n, r);
        t[Si] = u;
    }
    else {
        e > $.Loading && l && (t[Si](), t[Si] = null, t[Pn] = null), $v(e, t, n, o, r);
        let u = Bl(a, e);
        u !== null && (t[jo] = i + u, gh(u, t, o, n, r));
    }
}
else
    t[Pn] = e; }
function gh(e, t, n, o, r) { return jv(e, () => { let s = t[Pn]; t[jo] = null, t[Pn] = null, s !== null && ot(s, n, o); }, r[k]); }
function mh(e, t) { return e < t; }
function ho(e, t) { let n = e[t.index]; ot($.Placeholder, t, n); }
function yh(e, t, n) { e.loadingPromise.then(() => { e.loadingState === ee.COMPLETE ? ot($.Complete, t, n) : e.loadingState === ee.FAILED && ot($.Error, t, n); }); }
var Ul = null;
function zv(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = ue(r, n)), o != null && (t.loadingBlockConfig = ue(r, o)), Ul === null && (Ul = Tb); }
var Hi = "__ngAsyncComponentMetadataFn__";
function Mb(e) { return e[Hi] ?? null; }
function Gv(e, t, n) { let o = e; return o[Hi] = () => Promise.all(t()).then(r => (n(...r), o[Hi] = null, r)), o[Hi]; }
function Td(e, t, n, o) { return Ze(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = Z(Z({}, r.propDecorators), o) : r.propDecorators = o); }); }
var Nb = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Md(e) { return typeof e == "function" && e[et] !== void 0; }
function Nd(e) { return Md(e) && typeof e.set == "function"; }
function Vi(e, t) { let n = e[m]; for (let o = E; o < n.bindingStartIndex; o++)
    if (X(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = ae(n, s);
            if (Hv(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        ne(r[j]) && Vi(r[j], t);
        for (let s = V; s < r.length; s++)
            Vi(r[s], t);
    }
    else
        ne(e[o]) && Vi(e[o], t); }
function _b() { return Q("Chrome DevTools profiling"), () => { }; }
function wb(e) { let t = e.get(Ut), n = e.get(ct), o = bg(t, n), r = {}; for (let [i, s] of Object.entries(o))
    UM(i) || (r[i] = s); return r; }
var vh = "ng";
function Sb(e, t) { bb(e, t); }
function bb(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = Ee;
    n[vh] ??= {}, n[vh][e] = t;
} }
var Wv = new S(""), qv = new S(""), Ab = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, tp() && (this._destroyRef = I(Po, { optional: !0 }) ?? void 0), _d || (Yv(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { U.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, o, r) { let i = -1; o && o > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, o)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r }); }
    whenStable(n, o, r) { if (r && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, o, r), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, o, r) { return []; }
    static \u0275fac = function (o) { return new (o || e)(Pe(U), Pe(Qv), Pe(qv)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac });
} return e; })(), Qv = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return _d?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Yv(e) { _d = e; }
var _d;
function wd(e) { return !!e && typeof e.then == "function"; }
function Zv(e) { return !!e && typeof e.subscribe == "function"; }
var Sd = new S("");
function Kv(e) { return tt([{ provide: Sd, multi: !0, useValue: e }]); }
var bd = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = I(Sd, { optional: !0 }) ?? [];
    injector = I(Ce);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = ai(this.injector, r);
        if (wd(i))
            n.push(i);
        else if (Zv(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), Pr = new S("");
function Ad() { zf(() => { let e = ""; throw new w(600, e); }); }
function Jv(e) { return e.isBoundToModule; }
var Rb = 10;
function Rd(e, t) { return Array.isArray(t) ? t.reduce(Rd, e) : Z(Z({}, e), t); }
var Oe = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = I(zt);
    afterRenderManager = I(Vs);
    zonelessEnabled = I(Cn);
    rootEffectScheduler = I(Sc);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new $h;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = I($t);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(wT(n => !n)); }
    constructor() { I(pn, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = I(yt);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = Ce.NULL) { return this._injector.get(U).run(() => { x(R.BootstrapComponentStart); let s = n instanceof oa; if (!this._injector.get(bd).done) {
        let h = "";
        throw new w(405, h);
    } let c; s ? c = n : c = this._injector.get(kr).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = Jv(c) ? void 0 : this._injector.get($n), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(Wv, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), $o(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), x(R.BootstrapComponentEnd, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { x(R.ChangeDetectionStart), this.tracingSnapshot !== null ? this.tracingSnapshot.run(Hs.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw x(R.ChangeDetectionEnd), new w(101, !1); let n = P(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, P(n), this.afterTick.next(), x(R.ChangeDetectionEnd);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(ar, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < Rb;) {
        x(R.ChangeDetectionSyncStart);
        try {
            this.synchronizeOnce();
        }
        finally {
            x(R.ChangeDetectionSyncEnd);
        }
    } }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !Ro(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            ay(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => Ro(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; $o(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(Pr, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => $o(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new w(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function $o(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function ua() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function Xv(e) { let t = g(), n = M(); if (ho(t, n), !nE(0, t))
    return; let o = t[k], r = me(t, n), i = e(() => ye(0, t, n), o); Or(0, r, i); }
function eE(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = g(), n = t[k], o = M(), r = t[m], i = ae(r, o); if (i.loadingState === ee.NOT_STARTED) {
    let s = me(t, o), c = e(() => Lr(i, t, o), n);
    Or(1, s, c);
} }
function tE(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[k], r = me(t, n), i = r[aa], s = e(() => ft(o, i), o); Or(2, r, s); }
function Lr(e, t, n) { da(e, t, n); }
function da(e, t, n) { let o = t[k], r = t[m]; if (e.loadingState !== ee.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = me(t, n), s = pb(r, e); e.loadingState = ee.IN_PROGRESS, Fi(1, i); let a = e.dependencyResolverFn, c = o.get(wc).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = null, f = [], p = []; for (let h = 0; h < l.length; h++) {
    let y = l[h];
    if (y.status === "fulfilled") {
        let v = y.value, D = W(v) || Me(v);
        if (D)
            f.push(D);
        else {
            let b = Be(v);
            b && p.push(b);
        }
    }
    else {
        u = !0, d = y.reason instanceof Error ? y.reason : new Error(String(y.reason));
        break;
    }
} if (u) {
    if (e.loadingState = ee.FAILED, e.errorTmplIndex === null) {
        let y = "", v = new w(-750, y);
        Zu(t, v);
    }
}
else {
    e.loadingState = ee.COMPLETE;
    let h = s.tView;
    if (f.length > 0) {
        h.directiveRegistry = hh(h.directiveRegistry, f);
        let y = f.map(D => D.type), v = qa(!1, ...y);
        e.providers = v;
    }
    p.length > 0 && (h.pipeRegistry = hh(h.pipeRegistry, p));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = ee.COMPLETE, c(); }), e.loadingPromise); }
function nE(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[k].get(Uv, null, { optional: !0 })?.behavior === Dd.Manual); }
function ye(e, t, n) { let o = t[m], r = t[n.index]; if (!nE(e, t))
    return; let i = me(t, n), s = ae(o, n); switch (Pv(i), s.loadingState) {
    case ee.NOT_STARTED:
        ot($.Loading, n, r), da(s, t, n), s.loadingState === ee.IN_PROGRESS && yh(s, n, r);
        break;
    case ee.IN_PROGRESS:
        ot($.Loading, n, r), yh(s, n, r);
        break;
    case ee.COMPLETE:
        ot($.Complete, n, r);
        break;
    case ee.FAILED:
        ot($.Error, n, r);
        break;
    default:
} }
function ft(e, t, n) { return ht(this, null, function* () { let o = e.get(lt); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = KM(t, e); if (s.length === 0)
    return; i !== null && s.shift(), xb(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield Eh(e, s, n) : o.awaitParentBlock(a, () => ht(null, null, function* () { return yield Eh(e, s, n); })); }); }
function Eh(e, t, n) { return ht(this, null, function* () { let o = e.get(lt), r = o.hydrating, i = e.get($t), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield Lb(u), yield Pb(e), kb(u)) {
            Bw(u), Ih(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        Ob(c, t, o), Ih(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), Uw(o.get(a), t, o, e.get(Oe)); }); }
function kb(e) { return me(e.lView, e.tNode)[dt] === $.Error; }
function Ob(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && na(r.lContainer); }
function Ih(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function xb(e, t) { for (let n of t)
    e.hydrating.set(n, ua()); }
function Pb(e) { return new Promise(t => Bu(t, { injector: e })); }
function Lb(e) { return ht(this, null, function* () { let { tNode: t, lView: n } = e, o = me(n, t); return new Promise(r => { Fb(o, r), ye(2, n, t); }); }); }
function Fb(e, t) { Array.isArray(e[Ln]) || (e[Ln] = []), e[Ln].push(t); }
function Y(e, t, n) { return e === 0 ? Dh(t, n) : e === 2 ? !Dh(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function Hb(e) { return e != null && (e & 1) === 1; }
function Dh(e, t) { let n = e[k], o = ae(e[m], t), r = Nr(n), i = Hb(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = me(e, t)[aa] !== null; return !(i && a && r); }
function Rt(e, t) { let n = ae(e, t); return n.hydrateTriggers ??= new Map; }
function oE(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[it], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && (typeof c.hydrate.viewport != "boolean" && (p.intersectionObserverOptions = c.hydrate.viewport), i.push(p));
        }
    }
} Vb(e, o), Ub(e, s), jb(e, i), Bb(e, r); }
function Vb(e, t) { for (let n of t) {
    let o = e.get(lt), i = ca(() => ft(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function jb(e, t) { if (t.length > 0) {
    let n = e.get(lt);
    for (let o of t) {
        let r = Cd(o.el, () => ft(e, o.blockName), e, o.intersectionObserverOptions);
        n.addCleanupFn(o.blockName, r);
    }
} }
function Bb(e, t) { for (let n of t) {
    let o = e.get(lt), r = () => ft(e, n.blockName), s = la(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function Ub(e, t) { for (let n of t)
    ft(e, n.blockName); }
function rE(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = _(), f = e + E, p = sn(u, d, e, null, 0, 0), h = u[k], y = Nr(h); if (d.firstCreatePass) {
    Q("NgDefer");
    let Je = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: ee.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, Je, a, s), db(d, f, Je);
} let v = u[f]; iv(v, p, u); let D = null, b = null; if (v[Ie]?.length > 0) {
    let Je = v[Ie][0].data;
    b = Je[Ns] ?? null, D = Je[Cr];
} let J = [null, dr.Initial, null, null, null, null, b, D, null, null]; ub(u, f, J); let xe = null; b !== null && y && (xe = h.get(lt), xe.add(b, { lView: u, tNode: p, lContainer: v })); let Te = () => { Pv(J), b !== null && xe?.cleanup([b]); }; Or(0, J, () => ec(u, Te)), fi(u, Te); }
function iE(e) { let t = g(), n = De(); if (!Y(0, t, n))
    return; let o = pe(); if (z(t, o, e)) {
    let r = P(null);
    try {
        let i = !!e, a = me(t, n)[dt];
        i === !1 && a === dr.Initial ? ho(t, n) : i === !0 && (a === dr.Initial || a === $.Placeholder) && ye(0, t, n);
    }
    finally {
        P(r);
    }
} }
function sE(e) { let t = g(), n = De(); if (!Y(1, t, n))
    return; let o = pe(); if (z(t, o, e)) {
    let r = P(null);
    try {
        let i = !!e, s = t[m], a = ae(s, n);
        i === !0 && a.loadingState === ee.NOT_STARTED && Lr(a, t, n);
    }
    finally {
        P(r);
    }
} }
function aE(e) { let t = g(), n = De(); if (!Y(2, t, n))
    return; let o = pe(), r = _(); if (Rt(r, n).set(6, null), z(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        ye(2, t, n);
    else {
        let s = t[k], a = P(null);
        try {
            if (!!e === !0) {
                let u = me(t, n)[aa];
                ft(s, u);
            }
        }
        finally {
            P(a);
        }
    } }
function cE() { let e = g(), t = M(); if (!Y(2, e, t))
    return; Rt(_(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && ye(2, e, t); }
function lE() { let e = g(), t = M(); Y(0, e, t) && Xv(ca); }
function uE() { let e = g(), t = M(); Y(1, e, t) && eE(ca); }
function dE() { let e = g(), t = M(); if (!Y(2, e, t))
    return; Rt(_(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? ye(2, e, t) : tE(ca, e, t); }
function fE() { let e = g(), t = M(); if (!Y(0, e, t))
    return; ae(e[m], t).loadingTmplIndex === null && ho(e, t), ye(0, e, t); }
function pE() { let e = g(), t = M(); if (!Y(1, e, t))
    return; let n = e[m], o = ae(n, t); o.loadingState === ee.NOT_STARTED && da(o, e, t); }
function hE() { let e = g(), t = M(); if (!Y(2, e, t))
    return; if (Rt(_(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    ye(2, e, t);
else {
    let o = e[k], i = me(e, t)[aa];
    ft(o, i);
} }
function gE(e) { let t = g(), n = M(); Y(0, t, n) && Xv(la(e)); }
function mE(e) { let t = g(), n = M(); Y(1, t, n) && eE(la(e)); }
function yE(e) { let t = g(), n = M(); if (!Y(2, t, n))
    return; Rt(_(), n).set(5, { type: 5, delay: e }), typeof ngServerMode < "u" && ngServerMode ? ye(2, t, n) : tE(la(e), t, n); }
function vE(e, t) { let n = g(), o = M(); Y(0, n, o) && (ho(n, o), typeof ngServerMode < "u" && ngServerMode || po(n, o, e, t, Pg, () => ye(0, n, o), 0)); }
function EE(e, t) { let n = g(), o = M(); if (!Y(1, n, o))
    return; let r = n[m], i = ae(r, o); i.loadingState === ee.NOT_STARTED && po(n, o, e, t, Pg, () => Lr(i, n, o), 1); }
function IE() { let e = g(), t = M(); if (!Y(2, e, t))
    return; Rt(_(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && ye(2, e, t); }
function DE(e, t) { let n = g(), o = M(); Y(0, n, o) && (ho(n, o), typeof ngServerMode < "u" && ngServerMode || po(n, o, e, t, xg, () => ye(0, n, o), 0)); }
function CE(e, t) { let n = g(), o = M(); if (!Y(1, n, o))
    return; let r = n[m], i = ae(r, o); i.loadingState === ee.NOT_STARTED && po(n, o, e, t, xg, () => Lr(i, n, o), 1); }
function TE() { let e = g(), t = M(); if (!Y(2, e, t))
    return; Rt(_(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && ye(2, e, t); }
function ME(e, t, n) { let o = g(), r = M(); Y(0, o, r) && (ho(o, r), typeof ngServerMode < "u" && ngServerMode || po(o, r, e, t, Cd, () => ye(0, o, r), 0, n)); }
function NE(e, t, n) { let o = g(), r = M(); if (!Y(1, o, r))
    return; let i = o[m], s = ae(i, r); s.loadingState === ee.NOT_STARTED && po(o, r, e, t, Cd, () => Lr(s, o, r), 1, n); }
function _E(e) { let t = g(), n = M(); if (!Y(2, t, n))
    return; Rt(_(), n).set(2, e ? { type: 2, intersectionObserverOptions: e } : null), typeof ngServerMode < "u" && ngServerMode && ye(2, t, n); }
function kd(e, t) { let n = g(), o = pe(); if (z(n, o, t)) {
    let r = _(), i = De();
    if (Qs(i, r, n, e, t))
        ge(i) && ty(n, i.index);
    else {
        let a = oe(i, n);
        Gs(n[T], a, null, i.value, e, t, null);
    }
} return kd; }
function Od(e, t, n, o) { let r = g(), i = pe(); if (z(r, i, t)) {
    let s = _(), a = De();
    k_(a, r, e, t, n, o);
} return Od; }
function zo(e) { if (Q("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !fn)
    return zo; let t = g(); if (Ls(t))
    return zo; let n = M(), o = t[k].get(U); return Fs(Xi(t), n, () => $b(t, n, e, o)), Us(t[k]), Uu(t[k], Xi(t)), zo; }
function $b(e, t, n, o) { let r = oe(t, e), i = e[T], s = Lm(n), a = [], c = !1, l = d => { if (tr(d) !== r)
    return; let f = d instanceof AnimationEvent ? "animationend" : "transitionend"; o.runOutsideAngular(() => { i.listen(r, f, u); }); }, u = d => { tr(d) === r && (Hu(d, r) && (c = !0), zb(d, r, i)); }; if (s && s.length > 0) {
    o.runOutsideAngular(() => { a.push(i.listen(r, "animationstart", l)), a.push(i.listen(r, "transitionstart", l)); }), i_(r, s, a);
    for (let d of s)
        i.addClass(r, d);
    o.runOutsideAngular(() => { requestAnimationFrame(() => { if (!c && (Vm(r, Kt, fn), !Kt.has(r))) {
        for (let d of s)
            i.removeClass(r, d);
        Lu(r);
    } }); });
} }
function zb(e, t, n) { let o = Vn.get(t); if (!(tr(e) !== t || !o) && Hu(e, t)) {
    e.stopPropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    Lu(t);
} }
function Go(e) { if (Q("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !fn)
    return Go; let t = g(); if (Ls(t))
    return Go; let n = M(); return Fs(Xi(t), n, () => Gb(t, n, e)), Us(t[k]), Uu(t[k], Xi(t)), Go; }
function Gb(e, t, n) { let o = oe(t, e); n.call(e[H], { target: o, animationComplete: s_ }); }
function Wo(e) { if (Q("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !fn)
    return Wo; let t = g(); if (Ls(t))
    return Wo; let o = M(), r = t[k].get(U); return Fs(en(t), o, () => Wb(t, o, e, r)), Us(t[k]), Wo; }
function Wb(e, t, n, o) { let { promise: r, resolve: i } = ua(), s = oe(t, e), a = e[T]; tn.add(e[we]), (en(e).get(t.index).resolvers ??= []).push(i); let c = Lm(n); return c && c.length > 0 ? qb(s, t, e, c, a, o) : i(), { promise: r, resolve: i }; }
function qb(e, t, n, o, r, i) { c_(e, r); let s = [], a = en(n).get(t.index)?.resolvers, c, l = !1, u = d => { if (!(tr(d) !== e && d.type !== "animation-fallback") && (d.type === "animation-fallback" || Hu(d, e))) {
    if (l = !0, c && clearTimeout(c), d.type !== "animation-fallback" && d.stopPropagation(), Kt.delete(e), Cl(t, e), Array.isArray(t.projection))
        for (let p of o)
            r.removeClass(e, p);
    Tl(a, s), Ml(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", u)), s.push(r.listen(e, "transitionend", u)); }), Fu(t, e); for (let d of o)
    r.addClass(e, d); i.runOutsideAngular(() => { requestAnimationFrame(() => { if (l)
    return; Vm(e, Kt, fn); let d = Kt.get(e); d ? (c = setTimeout(() => { u(new CustomEvent("animation-fallback")); }, d.duration + 50), s.push(() => clearTimeout(c))) : (Cl(t, e), Tl(a, s), Ml(n, t)); }); }); }
function ls(e) { if (Q("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !fn)
    return ls; let t = g(), n = M(); tn.add(t[we]); let o = t[k].get(U), r = t[k].get(Pm); return Fs(en(t), n, () => Qb(t, n, e, o, r)), Us(t[k]), ls; }
function Qb(e, t, n, o, r) { let { promise: i, resolve: s } = ua(), a = oe(t, e), c = [], l = e[T], u = Ls(e); (en(e).get(t.index).resolvers ??= []).push(s); let d = en(e).get(t.index)?.resolvers; if (u)
    _i(e, t, a, d, c);
else {
    let f = setTimeout(() => _i(e, t, a, d, c), r), p = { target: a, animationComplete: () => { _i(e, t, a, d, c), clearTimeout(f); } };
    Fu(t, a), o.runOutsideAngular(() => { c.push(l.listen(a, "animationend", () => { _i(e, t, a, d, c), clearTimeout(f); }, { once: !0 })); }), n.call(e[H], p);
} return { promise: i, resolve: s }; }
function wE() { return g()[K][H]; }
var $l = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let o = Math.min(t, n), r = Math.max(t, n), i = this.detach(r); if (r - o > 1) {
        let s = this.detach(o);
        this.attach(o, i), this.attach(r, s);
    }
    else
        this.attach(o, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function zc(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function Yb(e, t, n, o) { let r, i, s = 0, a = e.length - 1, c = void 0; if (Array.isArray(t)) {
    Nn(o);
    let l = t.length - 1;
    for (Nn(null); s <= a && s <= l;) {
        let u = e.at(s), d = t[s], f = zc(s, u, s, d, n);
        if (f !== 0) {
            f < 0 && e.updateValue(s, d), s++;
            continue;
        }
        let p = e.at(a), h = t[l], y = zc(a, p, l, h, n);
        if (y !== 0) {
            y < 0 && e.updateValue(a, h), a--, l--;
            continue;
        }
        let v = n(s, u), D = n(a, p), b = n(s, d);
        if (Object.is(b, D)) {
            let J = n(l, h);
            Object.is(J, v) ? (e.swap(s, a), e.updateValue(a, h), l--, a--) : e.move(a, s), e.updateValue(s, d), s++;
            continue;
        }
        if (r ??= new us, i ??= Th(e, s, a, n), zl(e, r, s, b))
            e.updateValue(s, d), s++, a++;
        else if (i.has(b))
            r.set(v, e.detach(s)), a--;
        else {
            let J = e.create(s, t[s]);
            e.attach(s, J), s++, a++;
        }
    }
    for (; s <= l;)
        Ch(e, r, n, s, t[s]), s++;
}
else if (t != null) {
    Nn(o);
    let l = t[Symbol.iterator]();
    Nn(null);
    let u = l.next();
    for (; !u.done && s <= a;) {
        let d = e.at(s), f = u.value, p = zc(s, d, s, f, n);
        if (p !== 0)
            p < 0 && e.updateValue(s, f), s++, u = l.next();
        else {
            r ??= new us, i ??= Th(e, s, a, n);
            let h = n(s, f);
            if (zl(e, r, s, h))
                e.updateValue(s, f), s++, a++, u = l.next();
            else if (!i.has(h))
                e.attach(s, e.create(s, f)), s++, a++, u = l.next();
            else {
                let y = n(s, d);
                r.set(y, e.detach(s)), a--;
            }
        }
    }
    for (; !u.done;)
        Ch(e, r, n, e.length, u.value), u = l.next();
} for (; s <= a;)
    e.destroy(e.detach(a--)); r?.forEach(l => { e.destroy(l); }); }
function zl(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function Ch(e, t, n, o, r) { if (zl(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function Th(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var us = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let o = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let r = this._vMap;
        for (; r.has(o);)
            o = r.get(o);
        r.set(o, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, o] of this.kvMap)
        if (t(o, n), this._vMap !== void 0) {
            let r = this._vMap;
            for (; r.has(o);)
                o = r.get(o), t(o, n);
        } }
};
function SE(e, t, n, o, r, i, s, a) { Q("NgControlFlow"); let c = g(), l = _(), u = ue(l.consts, i); return sn(c, l, e, t, n, o, r, u, 256, s, a), fa; }
function fa(e, t, n, o, r, i, s, a) { Q("NgControlFlow"); let c = g(), l = _(), u = ue(l.consts, i); return sn(c, l, e, t, n, o, r, u, 512, s, a), fa; }
function bE(e, t) { Q("NgControlFlow"); let n = g(), o = pe(), r = n[o] !== L ? n[o] : -1, i = r !== -1 ? ds(n, E + r) : void 0, s = 0; if (z(n, o, e)) {
    let a = P(null);
    try {
        if (i !== void 0 && Ku(i, s), e !== -1) {
            let c = E + e, l = ds(n, c), u = Ql(n[m], c), d = Hy(l, u, n), f = ao(n, u, t, { dehydratedView: d });
            co(l, f, s, nn(u, d));
        }
    }
    finally {
        P(a);
    }
}
else if (i !== void 0) {
    let a = py(i, s);
    a !== void 0 && (a[H] = t);
} }
var Gl = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - V; }
};
function AE(e) { return e; }
function RE(e, t) { return t; }
var Wl = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function kE(e, t, n, o, r, i, s, a, c, l, u, d, f) { Q("NgControlFlow"); let p = g(), h = _(), y = c !== void 0, v = g(), D = a ? s.bind(v[K][H]) : s, b = new Wl(y, D); v[E + e] = b, sn(p, h, e + 1, t, n, o, r, ue(h.consts, i), 256), y && sn(p, h, e + 2, c, l, u, d, ue(h.consts, f), 512); }
var ql = class extends $l {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - V; }
    at(t) { return this.getLView(t)[H].$implicit; }
    attach(t, n) { let o = n[ie]; this.needsIndexUpdate ||= t !== this.length, co(this.lContainer, n, t, nn(this.templateTNode, o)), Zb(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, Kb(this.lContainer, t), Jb(this.lContainer, t); }
    create(t, n) { let o = sr(this.lContainer, this.templateTNode.tView.ssrId); return ao(this.hostLView, this.templateTNode, new Gl(this.lContainer, n, t), { dehydratedView: o }); }
    destroy(t) { br(t[m], t); }
    updateValue(t, n) { this.getLView(t)[H].$implicit = n; }
    reset() { this.needsIndexUpdate = !1; }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[H].$index = t; }
    getLView(t) { return Xb(this.lContainer, t); }
};
function OE(e) { let t = P(null), n = se(); try {
    let o = g(), r = o[m], i = o[n], s = n + 1, a = ds(o, s);
    if (i.liveCollection === void 0) {
        let l = Ql(r, s);
        i.liveCollection = new ql(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (Yb(c, e, i.trackByFn, t), c.updateIndexes(), i.hasEmptyBlock) {
        let l = pe(), u = c.length === 0;
        if (z(o, l, u)) {
            let d = n + 2, f = ds(o, d);
            if (u) {
                let p = Ql(r, d), h = Hy(f, p, o), y = ao(o, p, void 0, { dehydratedView: h });
                co(f, y, 0, nn(p, h));
            }
            else
                r.firstUpdatePass && ta(f), Ku(f, 0);
        }
    }
}
finally {
    P(t);
} }
function ds(e, t) { return e[t]; }
function Zb(e, t) { if (e.length <= V)
    return; let n = V + t, o = e[n], r = o ? o[ze] : void 0; if (o && r && r.detachedLeaveAnimationFns && r.detachedLeaveAnimationFns.length > 0) {
    let i = o[k];
    g_(i, r), tn.delete(o[we]), r.detachedLeaveAnimationFns = void 0;
} }
function Kb(e, t) { if (e.length <= V)
    return; let n = V + t, o = e[n], r = o ? o[ze] : void 0; r && r.leave && r.leave.size > 0 && (r.detachedLeaveAnimationFns = []); }
function Jb(e, t) { return or(e, t); }
function Xb(e, t) { return py(e, t); }
function Ql(e, t) { return jt(e, t); }
function xd(e, t, n) { let o = g(), r = pe(); if (z(o, r, t)) {
    let i = _(), s = De();
    qu(s, o, e, t, o[T], n);
} return xd; }
function Yl(e, t, n, o, r) { Qs(t, e, n, r ? "class" : "style", o); }
function fr(e, t, n, o) { let r = g(), i = r[m], s = e + E, a = i.firstCreatePass ? od(s, r, 2, t, Yu, pi(), n, o) : i.data[s]; if (ge(a)) {
    let c = r[Ue].tracingService;
    if (c && c.componentCreate) {
        let l = i.data[a.directiveStart + a.componentOffset];
        return c.componentCreate(sd(l), () => (Mh(e, t, r, a, o), fr));
    }
} return Mh(e, t, r, a, o), fr; }
function Mh(e, t, n, o, r) { if (Ws(o, n, e, t, Fd), In(o)) {
    let i = n[m];
    zs(i, n, o), Cu(i, o, n);
} r != null && so(n, o); }
function pa() { let e = _(), t = M(), n = qs(t); return e.firstCreatePass && rd(e, n), nc(n) && ic(), tc(), n.classesWithoutHost != null && HT(n) && Yl(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && VT(n) && Yl(e, n, g(), n.stylesWithoutHost, !1), pa; }
function Pd(e, t, n, o) { return fr(e, t, n, o), pa(), Pd; }
function ha(e, t, n, o) { let r = g(), i = r[m], s = e + E, a = i.firstCreatePass ? Gy(s, i, 2, t, n, o) : i.data[s]; return Ws(a, r, e, t, Fd), o != null && so(r, a), ha; }
function ga() { let e = M(), t = qs(e); return nc(t) && ic(), tc(), ga; }
function Ld(e, t, n, o) { return ha(e, t, n, o), ga(), Ld; }
var Fd = (e, t, n, o, r) => (He(!0), Os(t[T], o, Dc()));
function eA(e, t, n, o, r) { let i = !Rs(t, n); if (He(i), i)
    return Os(t[T], o, Dc()); let s = t[ie], a = Rr(s, e, t, n); return Zg(s, r) && bs(s, r, a.nextSibling), s && (iu(n) || vg(a)) && ge(n) && (gp(n), vm(a)), a; }
function xE() { Fd = eA; }
function ma(e, t, n) { let o = g(), r = o[m], i = e + E, s = r.firstCreatePass ? od(i, o, 8, "ng-container", Yu, pi(), t, n) : r.data[i]; if (Ws(s, o, e, "ng-container", Bd), In(s)) {
    let a = o[m];
    zs(a, o, s), Cu(a, s, o);
} return n != null && so(o, s), ma; }
function Fr() { let e = _(), t = M(), n = qs(t); return e.firstCreatePass && rd(e, n), Fr; }
function Hd(e, t, n) { return ma(e, t, n), Fr(), Hd; }
function ya(e, t, n) { let o = g(), r = o[m], i = e + E, s = r.firstCreatePass ? Gy(i, r, 8, "ng-container", t, n) : r.data[i]; return Ws(s, o, e, "ng-container", Bd), n != null && so(o, s), ya; }
function Vd() { let e = M(), t = qs(e); return Fr; }
function jd(e, t, n) { return ya(e, t, n), Vd(), jd; }
var Bd = (e, t, n, o, r) => (He(!0), _u(t[T], ""));
function tA(e, t, n, o, r) { let i, s = !Rs(t, n); if (He(s), s)
    return _u(t[T], ""); let a = t[ie], c = Rr(a, e, t, n), l = Yg(a, r); return bs(a, r, c), i = Xs(l, c), i; }
function PE() { Bd = tA; }
function LE() { return g(); }
function Ud(e, t, n) { let o = g(), r = pe(); if (z(o, r, t)) {
    let i = _(), s = De();
    Qu(s, o, e, t, o[T], n);
} return Ud; }
function $d(e, t, n) { let o = g(), r = pe(); if (z(o, r, t)) {
    let i = _(), s = De(), a = hi(i.data), c = ny(a, s, o);
    Qu(s, o, e, t, c, n);
} return $d; }
var Fo = void 0;
function nA(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var oA = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Fo, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Fo, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm\u202Fa", "h:mm:ss\u202Fa", "h:mm:ss\u202Fa z", "h:mm:ss\u202Fa zzzz"], ["{1}, {0}", Fo, Fo, Fo], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", nA], Fn = {};
function rA(e, t, n) { typeof t != "string" && (n = t, t = e[Wn.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), Fn[t] = e, n && (Fn[t][Wn.ExtraData] = n); }
function zd(e) { let t = aA(e), n = Nh(t); if (n)
    return n; let o = t.split("-")[0]; if (n = Nh(o), n)
    return n; if (o === "en")
    return oA; throw new w(701, !1); }
function iA(e) { return zd(e)[Wn.CurrencyCode] || null; }
function FE(e) { return zd(e)[Wn.PluralCase]; }
function Nh(e) { return e in Fn || (Fn[e] = Ee.ng && Ee.ng.common && Ee.ng.common.locales && Ee.ng.common.locales[e]), Fn[e]; }
function sA() { Fn = {}; }
var Wn = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(Wn || {});
function aA(e) { return e.toLowerCase().replace(/_/g, "-"); }
var cA = ["zero", "one", "two", "few", "many"];
function lA(e, t) { let n = FE(t)(parseInt(e, 10)), o = cA[n]; return o !== void 0 ? o : "other"; }
var Hr = "en-US", uA = "USD", HE = { marker: "element" }, VE = { marker: "ICU" }, nt = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(nt || {}), jE = Hr;
function BE(e) { typeof e == "string" && (jE = e.toLowerCase().replace(/_/g, "-")); }
function dA() { return jE; }
var pr = 0, qo = 0;
function fA(e) { e && (pr = pr | 1 << Math.min(qo, 31)), qo++; }
function pA(e, t, n) { try {
    if (qo > 0) {
        let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = qe() - qo - 1;
        GE(e, t, r, i, pr);
    }
}
finally {
    pr = 0, qo = 0;
} }
function UE(e, t, n) { let o = e[T]; switch (n) {
    case Node.COMMENT_NODE: return _u(o, t);
    case Node.TEXT_NODE: return Nu(o, t);
    case Node.ELEMENT_NODE: return Os(o, t, null);
} }
var Qo = (e, t, n, o) => (He(!0), UE(e, n, o));
function hA(e, t, n, o) { let r = e[ie], i = t - E, s = !ea() || !r || ko() || As(r, i); return He(s), s ? UE(e, n, o) : Cy(r, i); }
function $E() { Qo = hA; }
function gA(e, t, n, o) { let r = e[T]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & nt.COMMENT) === nt.COMMENT, l = (s & nt.APPEND_EAGERLY) === nt.APPEND_EAGERLY, u = s >>> nt.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = Qo(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = xo()), l && n !== null && f && Xt(r, n, d, o, !1);
} }
function zE(e, t, n, o) { let r = n[T], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = Qo(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = vw(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = O(n[l])), d !== null) {
                    let y = Ew(c), v = n[y];
                    Xt(r, d, v, u, !1);
                    let D = Bo(e, y);
                    if (D !== null && typeof D == "object") {
                        let b = Js(D, n);
                        b !== null && zE(e, D.create[b], n, n[D.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                Gs(r, Vt(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case VE:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = Qo(n, u, l, Node.COMMENT_NODE);
                    Ae(p, n);
                }
                break;
            case HE:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = Qo(n, f, d, Node.ELEMENT_NODE);
                    Ae(p, n);
                }
                break;
            default:
        }
} }
function GE(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += N(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            typeof h == "string" ? Gs(t[T], t[d], null, h, f, c, p) : qu(h, t, f, c, t[T], p);
                            break;
                        case 0:
                            let y = t[d];
                            y !== null && mm(t[T], y, c);
                            break;
                        case 2:
                            mA(e, Bo(e, d), t, c);
                            break;
                        case 3:
                            _h(e, Bo(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = Bo(e, l);
            t[u.currentCaseLViewIndex] < 0 && _h(e, u, o, t);
        }
    }
    i += a;
} }
function _h(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = pr;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), GE(e, o, t.update[r], n, i);
} }
function mA(e, t, n, o) { let r = yA(t, o); if (Js(t, n) !== r && (WE(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && zE(e, t.create[r], n, s), Fw(n, t.anchorIdx, r);
} }
function WE(e, t, n) { let o = Js(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = Vt(s, n);
            a !== null && _r(n[T], a);
        }
        else
            WE(e, Bo(e, ~s), n);
    }
} }
function yA(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = lA(t, dA());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var fs = /�(\d+):?\d*�/gi, vA = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, EA = /�(\d+)�/, qE = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Yo = "\uFFFD", IA = /�\/?\*(\d+:\d+)�/gi, DA = /�(\/?[#*]\d+):?\d*�/gi, CA = /\uE500/g;
function TA(e) { return e.replace(CA, " "); }
function MA(e, t, n, o, r, i) { let s = Dn(), a = [], c = [], l = [[]], u = [[]]; r = SA(r, i); let d = TA(r).split(DA); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = Zl(p);
        for (let y = 0; y < h.length; y++) {
            let v = h[y];
            if ((y & 1) === 0) {
                let D = v;
                D !== "" && NA(u[0], e, s, l[0], a, c, n, D);
            }
            else {
                let D = v;
                if (typeof D != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let J = QE(e, s, l[0], n, a, "", !0).index;
                ZE(u[0], e, n, c, t, D, J);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, y = p.charCodeAt(h ? 1 : 0), v = E + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), We(Dn(), !1);
        else {
            let D = yw(e, l[0], v);
            l.unshift([]), We(D, !0);
            let b = { kind: 2, index: v, children: [], type: y === 35 ? 0 : 1 };
            u[0].push(b), u.unshift(b.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function QE(e, t, n, o, r, i, s) { let a = Sr(e, o, 1, null), c = a << nt.SHIFT, l = Dn(); t === l && (l = null), l === null && (c |= nt.APPEND_EAGERLY), s && (c |= nt.COMMENT, n_(Dw)), r.push(c, i === null ? "" : i); let u = Ju(e, a, s ? 32 : 1, i === null ? "" : i, null); vy(n, u); let d = u.index; return We(u, !1), l !== null && t !== l && mw(l, d), u; }
function NA(e, t, n, o, r, i, s, a) { let c = a.match(fs), u = QE(t, n, o, s, r, c ? null : a, !1).index; c && ps(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function _A(e, t, n) { let r = M().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (vA.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            ps(i, c, r, a, wA(i), JE(a));
        }
    }
    e.data[t] = i;
} }
function ps(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(fs), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | YE(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function wA(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function YE(e) { return 1 << Math.min(e, 31); }
function wh(e) { let t, n = "", o = 0, r = !1, i; for (; (t = IA.exec(e)) !== null;)
    r ? t[0] === `${Yo}/*${i}${Yo}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function SA(e, t) { if (Iy(t))
    return wh(e); {
    let n = e.indexOf(`:${t}${Yo}`) + 2 + t.toString().length, o = e.search(new RegExp(`${Yo}\\/\\*\\d+:${t}${Yo}`));
    return wh(e.substring(n, o));
} }
function ZE(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: Sr(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; kA(o, i, s), gw(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let y = 0; y < f.length; y++) {
        let v = f[y];
        if (typeof v != "string") {
            let D = p.push(v) - 1;
            f[y] = `<!--\uFFFD${D}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = AA(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && OA(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function bA(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(qE, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = Zl(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = Zl(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function Zl(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            qE.test(c) ? o.push(bA(c)) : o.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return o.push(s), o; }
function AA(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = lm(Ds()).getInertBodyElement(a), h = Il(p) || p; return h ? KE(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function KE(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = Sr(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let y = p, v = y.tagName.toLowerCase();
            if (yl.hasOwnProperty(v)) {
                Gc(i, HE, v, l, h), t.data[h] = v;
                let xe = y.attributes;
                for (let Je = 0; Je < xe.length; Je++) {
                    let Ot = xe.item(Je), $r = Ot.name.toLowerCase();
                    !!Ot.value.match(fs) ? vl.hasOwnProperty($r) && ps(a, Ot.value, h, Ot.name, 0, JE($r)) : vl[$r] && (pm[$r] ? bh(i, h, Ot.name, "unsafe:blocked") : bh(i, h, Ot.name, Ot.value));
                }
                let Te = { kind: 1, index: h, children: [] };
                e.push(Te), f = KE(Te.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, Sh(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let D = p.textContent || "", b = D.match(fs);
            Gc(i, null, b ? "" : D, l, h), Sh(s, h, d), b && (f = ps(a, D, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let J = EA.exec(p.textContent || "");
            if (J) {
                let xe = parseInt(J[1], 10), Te = u[xe];
                Gc(i, VE, "", l, h), ZE(e, t, o, r, l, Te, h), RA(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function Sh(e, t, n) { n === 0 && e.push(t); }
function RA(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function kA(e, t, n) { e.push(YE(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function OA(e, t, n) { e.push(t, 1, n << 2 | 3); }
function Gc(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, Iw(0, o, r)); }
function bh(e, t, n, o) { e.push(t << 1 | 1, n, o); }
var xA = new Set(Object.values(_m).flatMap(e => e ? Object.keys(e) : []));
function JE(e) { let t = e.toLowerCase(); return pm[t] ? ks : xA.has(t) ? bu : null; }
var Ah = 0, PA = /\[(�.+?�?)\]/, LA = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, FA = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, HA = /{([A-Z0-9_]+)}/g, VA = /�I18N_EXP_(ICU(_\d+)?)�/g, jA = /\/\*/, BA = /\d+\:(\d+)/;
function UA(e, t = {}) { let n = e; if (PA.test(e)) {
    let o = {}, r = [Ah];
    n = n.replace(LA, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(y => { let v = y.match(BA), D = v ? parseInt(v[1], 10) : Ah, b = jA.test(y); l.push([D, b, y]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let y = 0; y < l.length; y++)
        if (l[y][0] === u) {
            d = y;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(FA, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(HA, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(VA, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function Gd(e, t, n = -1) { let o = _(), r = g(), i = E + e, s = ue(o.consts, t), a = Dn(); if (o.firstCreatePass && MA(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[K];
    f[A] |= 32;
}
else
    r[A] |= 32; let c = o.data[i], l = a === r[le] ? null : a, u = Gm(o, l, r), d = a && a.type & 8 ? r[a.index] : null; Rw(r, i, a, n), gA(r, c.create, u, d), hc(!0); }
function Wd() { hc(!1); }
function XE(e, t, n) { Gd(e, t, n), Wd(); }
function eI(e, t) { let n = _(), o = ue(n.consts, t); _A(n, e + E, o); }
function qd(e) { let t = g(); return fA(z(t, pe(), e)), qd; }
function tI(e) { pA(_(), g(), e + E); }
function nI(e, t = {}) { return UA(e, t); }
function Qd(e, t, n) { let o = g(), r = _(), i = M(); return Kd(r, o, o[T], i, e, t, n), Qd; }
function Yd(e, t) { let n = M(), o = g(), r = _(), i = hi(r.data), s = ny(i, n, o); return Kd(r, o, s, n, e, t), Yd; }
function Zd(e, t, n) { let o = g(), r = _(), i = M(); return (i.type & 3 || n) && id(i, r, o, n, o[T], e, t, St(i, o, t)), Zd; }
function Kd(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= St(o, t, i), id(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= St(o, t, i), Un(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= St(o, t, i), Un(o, t, d, r, r, c);
} }
function oI(e = 1) { return Ip(e); }
function $A(e, t) { let n = null, o = qN(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? Am(e, i, !0) : ZN(o, i))
        return r;
} return n; }
function rI(e) { let t = g()[K][le]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = To(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? $A(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function iI(e, t = 0, n, o, r, i) { let s = g(), a = _(), c = o ? e + 1 : null; c !== null && sn(s, a, c, o, r, i, null, n); let l = hn(a, E + e, 16, null, n || null); l.projection === null && (l.projection = t), lc(); let d = !s[ie] || ko(); s[K][le].projection[l.projection] === null && c !== null ? zA(s, a, c) : d && !no(l) && C_(a, s, l); }
function zA(e, t, n) { let o = E + n, r = t.data[o], i = e[o], s = sr(i, r.tView.ssrId), a = ao(e, r, void 0, { dehydratedView: s }); co(i, a, 0, nn(r, s)); }
function Jd(e, t, n, o) { return dv(e, t, n, o), Jd; }
function Xd(e, t, n) { return uv(e, t, n), Xd; }
function sI(e) { let t = g(), n = _(), o = gi(); Oo(o + 1); let r = ld(n, o); if (e.dirty && sp(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = pv(t, o);
        e.reset(i, yg), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function aI() { return cd(g(), gi()); }
function ef(e, t, n, o, r) { return hv(t, dv(e, n, o, r)), ef; }
function tf(e, t, n, o) { return hv(e, uv(t, n, o)), tf; }
function cI(e = 1) { Oo(gi() + e); }
function lI(e) { let t = uc(); return Dt(t, E + e); }
function bi(e, t) { return e << 17 | t << 2; }
function an(e) { return e >> 17 & 32767; }
function GA(e) { return (e & 2) == 2; }
function WA(e, t) { return e & 131071 | t << 17; }
function Kl(e) { return e | 2; }
function qn(e) { return (e & 131068) >> 2; }
function Wc(e, t) { return e & -131069 | t << 2; }
function qA(e) { return (e & 1) === 1; }
function Jl(e) { return e | 1; }
function QA(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = an(s), c = qn(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || ri(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = an(e[a + 1]);
        e[o + 1] = bi(f, a), f !== 0 && (e[f + 1] = Wc(e[f + 1], o)), e[a + 1] = WA(e[a + 1], o);
    }
    else
        e[o + 1] = bi(a, 0), a !== 0 && (e[a + 1] = Wc(e[a + 1], o)), a = o;
else
    e[o + 1] = bi(c, 0), a === 0 ? a = o : e[c + 1] = Wc(e[c + 1], o), c = o; l && (e[o + 1] = Kl(e[o + 1])), Rh(e, u, o, !0), Rh(e, u, o, !1), YA(t, u, e, o, i), s = bi(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function YA(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && ri(i, t) >= 0 && (n[o + 1] = Jl(n[o + 1])); }
function Rh(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? an(r) : qn(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    ZA(c, t) && (a = !0, e[s + 1] = o ? Jl(l) : Kl(l)), s = o ? an(l) : qn(l);
} a && (e[n + 1] = o ? Kl(r) : Jl(r)); }
function ZA(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? ri(e, t) >= 0 : !1; }
var re = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function uI(e) { return e.substring(re.key, re.keyEnd); }
function KA(e) { return e.substring(re.value, re.valueEnd); }
function JA(e) { return pI(e), dI(e, Qn(e, 0, re.textEnd)); }
function dI(e, t) { let n = re.textEnd; return n === t ? -1 : (t = re.keyEnd = eR(e, re.key = t, n), Qn(e, t, n)); }
function XA(e) { return pI(e), fI(e, Qn(e, 0, re.textEnd)); }
function fI(e, t) { let n = re.textEnd, o = re.key = Qn(e, t, n); return n === o ? -1 : (o = re.keyEnd = tR(e, o, n), o = kh(e, o, n, 58), o = re.value = Qn(e, o, n), o = re.valueEnd = nR(e, o, n), kh(e, o, n, 59)); }
function pI(e) { re.key = 0, re.keyEnd = 0, re.value = 0, re.valueEnd = 0, re.textEnd = e.length; }
function Qn(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function eR(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function tR(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function kh(e, t, n, o) { return t = Qn(e, t, n), t < n && t++, t; }
function nR(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = Oh(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = Oh(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function Oh(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function nf(e, t, n) { return mI(e, t, n, !1), nf; }
function of(e, t) { return mI(e, t, null, !0), of; }
function hI(e) { yI(II, oR, e, !1); }
function oR(e, t) { for (let n = XA(t); n >= 0; n = fI(t, n))
    II(e, uI(t), KA(t)); }
function gI(e) { yI(uR, rR, e, !0); }
function rR(e, t) { for (let n = JA(t); n >= 0; n = dI(t, n))
    Mo(e, uI(t), !0); }
function mI(e, t, n, o) { let r = g(), i = _(), s = Qe(2); if (i.firstUpdatePass && EI(i, e, s, o), t !== L && z(r, s, t)) {
    let a = i.data[se()];
    DI(i, a, r, r[T], e, r[s + 1] = fR(t, n), o, s);
} }
function yI(e, t, n, o) { let r = _(), i = Qe(2); r.firstUpdatePass && EI(r, null, i, o); let s = g(); if (n !== L && z(s, i, n)) {
    let a = r.data[se()];
    if (CI(a, o) && !vI(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = Yr(c, n || "")), Yl(r, a, s, n, o);
    }
    else
        dR(r, a, s, s[T], s[i + 1], s[i + 1] = lR(e, t, n), o, i);
} }
function vI(e, t) { return t >= e.expandoStartIndex; }
function EI(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[se()], s = vI(e, n);
    CI(i, o) && t === null && !s && (t = !1), t = iR(r, i, t, o), QA(r, i, t, n, s, o);
} }
function iR(e, t, n, o) { let r = hi(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = qc(null, e, t, n, o), n = hr(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = qc(r, e, t, n, o), i === null) {
            let c = sR(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = qc(null, e, t, c[1], o), c = hr(c, t.attrs, o), aR(e, t, o, c));
        }
        else
            i = cR(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function sR(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (qn(o) !== 0)
    return e[an(o)]; }
function aR(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[an(r)] = o; }
function cR(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = hr(o, s, n);
} return hr(o, t.attrs, n); }
function qc(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = hr(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function hr(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), Mo(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function lR(e, t, n) { if (n == null || n === "")
    return F; let o = [], r = ut(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (r instanceof Set)
    for (let i of r)
        e(o, i, !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function II(e, t, n) { Mo(e, t, ut(n)); }
function uR(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && Mo(e, o, n); }
function dR(e, t, n, o, r, i, s, a) { r === L && (r = F); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, y;
    u === d ? (c += 2, l += 2, f !== p && (h = d, y = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, y = p), h !== null && DI(e, t, n, o, h, y, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function DI(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = qA(l) ? xh(c, t, n, r, qn(l), s) : void 0; if (!hs(u)) {
    hs(i) || GA(l) && (i = xh(c, null, n, r, a, s));
    let d = Vt(se(), n);
    M_(o, s, d, r, i);
} }
function xh(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === L && (f = d ? F : void 0);
    let p = d ? oi(f, o) : u === o ? f : void 0;
    if (l && !hs(p) && (p = oi(c, o)), hs(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? an(h) : qn(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = oi(c, o));
} return a; }
function hs(e) { return e !== void 0; }
function fR(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = Qr(ut(e)))), e; }
function CI(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function TI(e, t = "") { let n = g(), o = _(), r = e + E, i = o.firstCreatePass ? hn(o, r, 1, t, null) : o.data[r], s = MI(o, n, i, t); n[r] = s, xo() && Gu(o, n, s, i), We(i, !1); }
var MI = (e, t, n, o) => (He(!0), Nu(t[T], o));
function pR(e, t, n, o) { let r = !Rs(t, n); if (He(r), r)
    return Nu(t[T], o); let i = t[ie]; return Rr(i, e, t, n); }
function NI() { MI = pR; }
function _I(e, t) { let n = !1, o = qe(); for (let i = 1; i < t.length; i += 2)
    n = z(e, o++, t[i]) || n; if (pc(o), !n)
    return L; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += N(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function wI(e, t, n, o = "") { return z(e, pe(), n) ? t + N(n) + o : L; }
function SI(e, t, n, o, r, i = "") { let s = qe(), a = on(e, s, n, r); return Qe(2), a ? t + N(n) + o + N(r) + i : L; }
function bI(e, t, n, o, r, i, s, a = "") { let c = qe(), l = ia(e, c, n, r, s); return Qe(3), l ? t + N(n) + o + N(r) + i + N(s) + a : L; }
function AI(e, t, n, o, r, i, s, a, c, l = "") { let u = qe(), d = ke(e, u, n, r, s, c); return Qe(4), d ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l : L; }
function RI(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = qe(), p = ke(e, f, n, r, s, c); return p = z(e, f + 4, u) || p, Qe(5), p ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d : L; }
function kI(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = qe(), y = ke(e, h, n, r, s, c); return y = on(e, h + 4, u, f) || y, Qe(6), y ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d + N(f) + p : L; }
function OI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y = "") { let v = qe(), D = ke(e, v, n, r, s, c); return D = ia(e, v + 4, u, f, h) || D, Qe(7), D ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d + N(f) + p + N(h) + y : L; }
function xI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, v, D = "") { let b = qe(), J = ke(e, b, n, r, s, c); return J = ke(e, b + 4, u, f, h, v) || J, Qe(8), J ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d + N(f) + p + N(h) + y + N(v) + D : L; }
function rf(e) { return va("", e), rf; }
function va(e, t, n) { let o = g(), r = wI(o, e, t, n); return r !== L && pt(o, se(), r), va; }
function sf(e, t, n, o, r) { let i = g(), s = SI(i, e, t, n, o, r); return s !== L && pt(i, se(), s), sf; }
function af(e, t, n, o, r, i, s) { let a = g(), c = bI(a, e, t, n, o, r, i, s); return c !== L && pt(a, se(), c), af; }
function cf(e, t, n, o, r, i, s, a, c) { let l = g(), u = AI(l, e, t, n, o, r, i, s, a, c); return u !== L && pt(l, se(), u), cf; }
function lf(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = RI(d, e, t, n, o, r, i, s, a, c, l, u); return f !== L && pt(d, se(), f), lf; }
function uf(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = kI(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== L && pt(p, se(), h), uf; }
function df(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let y = g(), v = OI(y, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return v !== L && pt(y, se(), v), df; }
function ff(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, v) { let D = g(), b = xI(D, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, v); return b !== L && pt(D, se(), b), ff; }
function pf(e) { let t = g(), n = _I(t, e); return n !== L && pt(t, se(), n), pf; }
function pt(e, t, n) { let o = Vt(t, e); mm(e[T], o, n); }
function hf(e, t, n) { Nd(t) && (t = t()); let o = g(), r = pe(); if (z(o, r, t)) {
    let i = _(), s = De();
    qu(s, o, e, t, o[T], n);
} return hf; }
function PI(e, t) { let n = Nd(e); return n && e.set(t), n; }
function gf(e, t) { let n = g(), o = _(), r = M(); return Kd(o, n, n[T], r, e, t), gf; }
var LI = {};
function mf(e) { Q("NgLet"); let t = _(), n = g(), o = e + E, r = hn(t, o, 128, null, null); return We(r, !1), Ao(t, n, o, LI), mf; }
function FI(e) { let t = _(), n = g(), o = se(); return Ao(t, n, o, e), e; }
function HI(e) { let t = uc(), n = Dt(t, E + e); if (n === LI)
    throw new w(314, !1); return n; }
function VI(e, t) { let n = _(), o = g(), r = o[T], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = jt(n, s + E), d = Vt(s + E, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function jI(e) { return z(g(), pe(), e) ? N(e) : L; }
function BI(e, t, n = "") { return wI(g(), e, t, n); }
function UI(e, t, n, o, r = "") { return SI(g(), e, t, n, o, r); }
function $I(e, t, n, o, r, i, s = "") { return bI(g(), e, t, n, o, r, i, s); }
function zI(e, t, n, o, r, i, s, a, c = "") { return AI(g(), e, t, n, o, r, i, s, a, c); }
function GI(e, t, n, o, r, i, s, a, c, l, u = "") { return RI(g(), e, t, n, o, r, i, s, a, c, l, u); }
function WI(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return kI(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function qI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return OI(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function QI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, v = "") { return xI(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, v); }
function YI(e) { return _I(g(), e); }
function ZI(e, t, n) { let o = de() + e, r = g(); return r[o] === L ? je(r, o, t(n, r)) : fo(r, o); }
function Ph(e, t, n) { let o = _(); o.firstCreatePass && KI(t, o.data, o.blueprint, be(e), n); }
function KI(e, t, n, o, r) { if (e = G(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        KI(e[i], t, n, o, r);
else {
    let i = _(), s = g(), a = M(), c = ii(e) ? e : G(e.provide), l = ep(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (ii(e) || !e.multi) {
        let p = new Jt(l, r, uo, null), h = Yc(c, t, r ? u : u + f, d);
        h === -1 ? (tl(Wi(a, s), i, c), Qc(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = Yc(c, t, u + f, d), h = Yc(c, t, u, u + f), y = p >= 0 && n[p], v = h >= 0 && n[h];
        if (r && !v || !r && !y) {
            tl(Wi(a, s), i, c);
            let D = mR(r ? gR : hR, n.length, r, o, l, e);
            !r && v && (n[h].providerFactory = D), Qc(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(D), s.push(D);
        }
        else {
            let D = JI(n[r ? h : p], l, !r && o);
            Qc(i, e, p > -1 ? p : h, D);
        }
        !r && o && v && n[h].componentProviders++;
    }
} }
function Qc(e, t, n, o) { let r = ii(t), i = Jf(t); if (r || i) {
    let c = (i ? G(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
        }
        else
            l.push(n, c);
    }
} }
function JI(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function Yc(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function hR(e, t, n, o, r) { return Xl(this.multi, []); }
function gR(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = Ko(o, o[m], this.providerFactory.index, r);
    s = c.slice(0, a), Xl(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], Xl(i, s); return s; }
function Xl(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function mR(e, t, n, o, r, i) { let s = new Jt(e, n, uo, null); return s.multi = [], s.index = t, s.componentProviders = 0, JI(s, r, o && !n), s; }
function XI(e, t) { return n => { n.providersResolver = (o, r) => Ph(o, r ? r(e) : e, !1), t && (n.viewProvidersResolver = (o, r) => Ph(o, r ? r(t) : t, !0)); }; }
function eD(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function tD(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = cs(t, Tv), o.pipeDefs = cs(n, Be); }
function nD(e, t) { return Ze(() => { let n = ei(e); n.declarations = Ai(t.declarations || F), n.imports = Ai(t.imports || F), n.exports = Ai(t.exports || F), t.bootstrap && (n.bootstrap = Ai(t.bootstrap)), Bn.registerNgModule(e, t); }); }
function Ai(e) { if (typeof e == "function")
    return e; let t = Le(e); return t.some(Zr) ? () => t.map(G).map(Lh) : t.map(Lh); }
function Lh(e) { return nd(e) ? e.ngModule : e; }
function oD(e, t) { let n = de() + e, o = g(); return o[n] === L ? je(o, n, t()) : fo(o, n); }
function rD(e, t, n) { return pD(g(), de(), e, t, n); }
function iD(e, t, n, o) { return hD(g(), de(), e, t, n, o); }
function sD(e, t, n, o, r) { return gD(g(), de(), e, t, n, o, r); }
function aD(e, t, n, o, r, i, s) { return mD(g(), de(), e, t, n, o, r, i); }
function cD(e, t, n, o, r, i, s) { let a = de() + e, c = g(), l = ke(c, a, n, o, r, i); return z(c, a + 4, s) || l ? je(c, a + 5, t(n, o, r, i, s)) : fo(c, a + 5); }
function lD(e, t, n, o, r, i, s, a) { let c = de() + e, l = g(), u = ke(l, c, n, o, r, i); return on(l, c + 4, s, a) || u ? je(l, c + 6, t(n, o, r, i, s, a)) : fo(l, c + 6); }
function uD(e, t, n, o, r, i, s, a, c) { let l = de() + e, u = g(), d = ke(u, l, n, o, r, i); return ia(u, l + 4, s, a, c) || d ? je(u, l + 7, t(n, o, r, i, s, a, c)) : fo(u, l + 7); }
function dD(e, t, n, o, r, i, s, a, c, l) { let u = de() + e, d = g(), f = ke(d, u, n, o, r, i); return ke(d, u + 4, s, a, c, l) || f ? je(d, u + 8, t(n, o, r, i, s, a, c, l)) : fo(d, u + 8); }
function fD(e, t, n) { return yD(g(), de(), e, t, n); }
function Vr(e, t) { let n = e[t]; return n === L ? void 0 : n; }
function pD(e, t, n, o, r, i) { let s = t + n; return z(e, s, r) ? je(e, s + 1, i ? o.call(i, r) : o(r)) : Vr(e, s + 1); }
function hD(e, t, n, o, r, i, s) { let a = t + n; return on(e, a, r, i) ? je(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : Vr(e, a + 2); }
function gD(e, t, n, o, r, i, s, a) { let c = t + n; return ia(e, c, r, i, s) ? je(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : Vr(e, c + 3); }
function mD(e, t, n, o, r, i, s, a, c) { let l = t + n; return ke(e, l, r, i, s, a) ? je(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : Vr(e, l + 4); }
function yD(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    z(e, s++, r[c]) && (a = !0); return a ? je(e, s, o.apply(i, r)) : Vr(e, s); }
function vD(e, t) { let n = _(), o, r = e + E; n.firstCreatePass ? (o = yR(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = ni(o.type, !0)), s, a = Pt(uo); try {
    let c = Gi(!1), l = i();
    return Gi(c), Ao(n, g(), r, l), l;
}
finally {
    Pt(a);
} }
function yR(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function ED(e, t, n) { let o = e + E, r = g(), i = Dt(r, o); return jr(r, o) ? pD(r, de(), t, i.transform, n, i) : i.transform(n); }
function ID(e, t, n, o) { let r = e + E, i = g(), s = Dt(i, r); return jr(i, r) ? hD(i, de(), t, s.transform, n, o, s) : s.transform(n, o); }
function DD(e, t, n, o, r) { let i = e + E, s = g(), a = Dt(s, i); return jr(s, i) ? gD(s, de(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function CD(e, t, n, o, r, i) { let s = e + E, a = g(), c = Dt(a, s); return jr(a, s) ? mD(a, de(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function TD(e, t, n) { let o = e + E, r = g(), i = Dt(r, o); return jr(r, o) ? yD(r, de(), t, i.transform, n, i) : i.transform.apply(i, n); }
function jr(e, t) { return e[m].data[t].pure; }
function MD(e, t) { return Ks(e, t); }
function ND(e, t) { return () => { try {
    return Bn.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function _D(e, t) { let n = W(e); n !== null && (n.debugInfo = t); }
function wD(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function SD(e, t, n, o, r = null, i = null) { let s = W(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = vR(s, W(e)); if (e[mn] = a, c.tView) {
    let l = uM().values();
    for (let u of l)
        Ge(u) && u[q] === null && ji(r, i, a, c, u);
} }
function vR(e, t) { let n = Z({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function ji(e, t, n, o, r) { let i = r[m]; if (i === o.tView) {
    IR(e, t, n, o, r);
    return;
} for (let s = E; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (X(a)) {
        ne(a[j]) && ji(e, t, n, o, a[j]);
        for (let c = V; c < a.length; c++)
            ji(e, t, n, o, a[c]);
    }
    else
        ne(a) && ji(e, t, n, o, a);
} }
function ER(e, t) { e.componentReplaced?.(t.id); }
function IR(e, t, n, o, r) { let i = r[H], s = r[j], a = r[q], c = r[le], l = r[k].get(U, null), u = () => { if (o.encapsulation === Re.ShadowDom || o.encapsulation === Re.ExperimentalIsolatedShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = Rm(n), f = xs(a, d, i, Ou(n), s, c, null, null, null, null, null); DR(a, r, f, c.index), br(r[m], r), ir(r); let p = r[Ue].rendererFactory; ER(p, o), f[T] = p.createRenderer(s, n), $m(r[m], r), CR(c), Ys(d, f, i), cy(d, f, d.template, i); }; l === null ? Fh(e, t, u) : l.run(() => Fh(e, t, u)); }
function Fh(e, t, n) {
    try {
        n();
    }
    catch (o) {
        let r = o;
        if (t !== null && r.message) {
            let i = r.message + (r.stack ? `
` + r.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw o;
    }
}
function DR(e, t, n, o) { for (let r = E; r < e[m].bindingStartIndex; r++) {
    let i = e[r];
    if ((ne(i) || X(i)) && i[ce] === t) {
        i[ce] = n;
        break;
    }
} e[vt] === t && (e[vt] = n), e[No] === t && (e[No] = n), n[ce] = t[ce], t[ce] = null, e[o] = n; }
function CR(e) { if (e.projection !== null) {
    for (let t of e.projection)
        ms(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var he = { \u0275\u0275animateEnter: zo, \u0275\u0275animateEnterListener: Go, \u0275\u0275animateLeave: Wo, \u0275\u0275animateLeaveListener: ls, \u0275\u0275attribute: Od, \u0275\u0275defineComponent: Cv, \u0275\u0275defineDirective: Mv, \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: Io, \u0275\u0275defineNgModule: yd, \u0275\u0275definePipe: Nv, \u0275\u0275directiveInject: uo, \u0275\u0275getInheritedFactory: pg, \u0275\u0275inject: Pe, \u0275\u0275injectAttribute: ys, \u0275\u0275invalidFactory: Uy, \u0275\u0275invalidFactoryDep: ti, \u0275\u0275templateRefExtractor: MD, \u0275\u0275resetView: ac, \u0275\u0275HostDirectivesFeature: bv, \u0275\u0275NgOnChangesFeature: Kh, \u0275\u0275ControlFeature: Sv, \u0275\u0275ProvidersFeature: XI, \u0275\u0275InheritDefinitionFeature: vd, \u0275\u0275ExternalStylesFeature: eD, \u0275\u0275nextContext: oI, \u0275\u0275namespaceHTML: Ic, \u0275\u0275namespaceMathML: Ec, \u0275\u0275namespaceSVG: vc, \u0275\u0275enableBindings: oc, \u0275\u0275disableBindings: rc, \u0275\u0275elementStart: fr, \u0275\u0275elementEnd: pa, \u0275\u0275element: Pd, \u0275\u0275elementContainerStart: ma, \u0275\u0275elementContainerEnd: Fr, \u0275\u0275domElement: Ld, \u0275\u0275domElementStart: ha, \u0275\u0275domElementEnd: ga, \u0275\u0275domElementContainer: jd, \u0275\u0275domElementContainerStart: ya, \u0275\u0275domElementContainerEnd: Vd, \u0275\u0275domTemplate: Id, \u0275\u0275domListener: Zd, \u0275\u0275elementContainer: Hd, \u0275\u0275pureFunction0: oD, \u0275\u0275pureFunction1: rD, \u0275\u0275pureFunction2: iD, \u0275\u0275pureFunction3: sD, \u0275\u0275pureFunction4: aD, \u0275\u0275pureFunction5: cD, \u0275\u0275pureFunction6: lD, \u0275\u0275pureFunction7: uD, \u0275\u0275pureFunction8: dD, \u0275\u0275pureFunctionV: fD, \u0275\u0275getCurrentView: LE, \u0275\u0275restoreView: sc, \u0275\u0275listener: Qd, \u0275\u0275projection: iI, \u0275\u0275syntheticHostProperty: $d, \u0275\u0275syntheticHostListener: Yd, \u0275\u0275pipeBind1: ED, \u0275\u0275pipeBind2: ID, \u0275\u0275pipeBind3: DD, \u0275\u0275pipeBind4: CD, \u0275\u0275pipeBindV: TD, \u0275\u0275projectionDef: rI, \u0275\u0275domProperty: Ud, \u0275\u0275ariaProperty: kd, \u0275\u0275property: xd, \u0275\u0275control: Ky, \u0275\u0275controlCreate: Yy, \u0275\u0275pipe: vD, \u0275\u0275queryRefresh: sI, \u0275\u0275queryAdvance: cI, \u0275\u0275viewQuery: Xd, \u0275\u0275viewQuerySignal: tf, \u0275\u0275loadQuery: aI, \u0275\u0275contentQuery: Jd, \u0275\u0275contentQuerySignal: ef, \u0275\u0275reference: lI, \u0275\u0275classMap: gI, \u0275\u0275styleMap: hI, \u0275\u0275styleProp: nf, \u0275\u0275classProp: of, \u0275\u0275advance: km, \u0275\u0275template: Ed, \u0275\u0275conditional: bE, \u0275\u0275conditionalCreate: SE, \u0275\u0275conditionalBranchCreate: fa, \u0275\u0275defer: rE, \u0275\u0275deferWhen: iE, \u0275\u0275deferOnIdle: lE, \u0275\u0275deferOnImmediate: fE, \u0275\u0275deferOnTimer: gE, \u0275\u0275deferOnHover: vE, \u0275\u0275deferOnInteraction: DE, \u0275\u0275deferOnViewport: ME, \u0275\u0275deferPrefetchWhen: sE, \u0275\u0275deferPrefetchOnIdle: uE, \u0275\u0275deferPrefetchOnImmediate: pE, \u0275\u0275deferPrefetchOnTimer: mE, \u0275\u0275deferPrefetchOnHover: EE, \u0275\u0275deferPrefetchOnInteraction: CE, \u0275\u0275deferPrefetchOnViewport: NE, \u0275\u0275deferHydrateWhen: aE, \u0275\u0275deferHydrateNever: cE, \u0275\u0275deferHydrateOnIdle: dE, \u0275\u0275deferHydrateOnImmediate: hE, \u0275\u0275deferHydrateOnTimer: yE, \u0275\u0275deferHydrateOnHover: IE, \u0275\u0275deferHydrateOnInteraction: TE, \u0275\u0275deferHydrateOnViewport: _E, \u0275\u0275deferEnableTimerScheduling: zv, \u0275\u0275repeater: OE, \u0275\u0275repeaterCreate: kE, \u0275\u0275repeaterTrackByIndex: AE, \u0275\u0275repeaterTrackByIdentity: RE, \u0275\u0275componentInstance: wE, \u0275\u0275text: TI, \u0275\u0275textInterpolate: rf, \u0275\u0275textInterpolate1: va, \u0275\u0275textInterpolate2: sf, \u0275\u0275textInterpolate3: af, \u0275\u0275textInterpolate4: cf, \u0275\u0275textInterpolate5: lf, \u0275\u0275textInterpolate6: uf, \u0275\u0275textInterpolate7: df, \u0275\u0275textInterpolate8: ff, \u0275\u0275textInterpolateV: pf, \u0275\u0275i18n: XE, \u0275\u0275i18nAttributes: eI, \u0275\u0275i18nExp: qd, \u0275\u0275i18nStart: Gd, \u0275\u0275i18nEnd: Wd, \u0275\u0275i18nApply: tI, \u0275\u0275i18nPostprocess: nI, \u0275\u0275resolveWindow: wm, \u0275\u0275resolveDocument: Sm, \u0275\u0275resolveBody: Au, \u0275\u0275setComponentScope: tD, \u0275\u0275setNgModuleScope: nD, \u0275\u0275registerNgModuleType: hd, \u0275\u0275getComponentDepsFactory: ND, \u0275setClassDebugInfo: _D, \u0275\u0275declareLet: mf, \u0275\u0275storeLet: FI, \u0275\u0275arrowFunction: ZI, \u0275\u0275readContextLet: HI, \u0275\u0275attachSourceLocations: VI, \u0275\u0275interpolate: jI, \u0275\u0275interpolate1: BI, \u0275\u0275interpolate2: UI, \u0275\u0275interpolate3: $I, \u0275\u0275interpolate4: zI, \u0275\u0275interpolate5: GI, \u0275\u0275interpolate6: WI, \u0275\u0275interpolate7: qI, \u0275\u0275interpolate8: QI, \u0275\u0275interpolateV: YI, \u0275\u0275sanitizeHtml: Im, \u0275\u0275sanitizeStyle: Dm, \u0275\u0275sanitizeResourceUrl: Su, \u0275\u0275sanitizeScript: Cm, \u0275\u0275validateAttribute: bu, \u0275\u0275sanitizeUrl: wu, \u0275\u0275sanitizeUrlOrResourceUrl: Nm, \u0275\u0275trustConstantHtml: Tm, \u0275\u0275trustConstantResourceUrl: Mm, forwardRef: ja, resolveForwardRef: G, \u0275\u0275twoWayProperty: hf, \u0275\u0275twoWayBindingSet: PI, \u0275\u0275twoWayListener: gf, \u0275\u0275replaceMetadata: SD, \u0275\u0275getReplaceMetadataURL: wD }, Rn = null;
function bD(e) { Rn !== null && (e.defaultEncapsulation !== Rn.defaultEncapsulation || e.preserveWhitespaces !== Rn.preserveWhitespaces) || (Rn = e); }
function TR() { return Rn; }
function MR() { Rn = null; }
var Zo = [];
function NR(e, t) { Zo.push({ moduleType: e, ngModule: t }); }
var Zc = !1;
function AD() { if (!Zc) {
    Zc = !0;
    try {
        for (let e = Zo.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = Zo[e];
            n.declarations && n.declarations.every(RD) && (Zo.splice(e, 1), AR(t, n));
        }
    }
    finally {
        Zc = !1;
    }
} }
function RD(e) { return Array.isArray(e) ? e.every(RD) : !!G(e); }
function kD(e, t = {}) { OD(e, t), t.id !== void 0 && hd(e, t.id), NR(e, t); }
function OD(e, t, n = !1) { let o = Le(t.declarations || F), r = null; Object.defineProperty(e, Ua, { configurable: !0, get: () => (r === null && (r = te({ usage: 0, kind: "NgModule", type: e }).compileNgModule(he, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Le(t.bootstrap || F).map(G), declarations: o.map(G), imports: Le(t.imports || F).map(G).map(Hh), exports: Le(t.exports || F).map(G).map(Hh), schemas: t.schemas ? Le(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, gt, { get: () => { if (i === null) {
        let a = te({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(he, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: vs(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, Ba, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || F, imports: [(t.imports || F).map(G), (t.exports || F).map(G)] };
        s = te({ usage: 0, kind: "NgModule", type: e }).compileInjector(he, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function _R(e, t) { let n = `Unexpected "${Ne(e)}" found in the "declarations" array of the`, o = `"${Ne(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var wR = new WeakMap, SR = new WeakMap;
function bR() { wR = new WeakMap, SR = new WeakMap, Zo.length = 0, qS.clear(); }
function AR(e, t) { let n = Le(t.declarations || F), o = vf(e); n.forEach(r => { if (r = G(r), r.hasOwnProperty(mn)) {
    let s = W(r);
    yf(s, o);
}
else
    !r.hasOwnProperty(Jr) && !r.hasOwnProperty(Xr) && (r.ngSelectorScope = e); }); }
function yf(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(mn) ? W(n) : Me(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => Be(n)), e.schemas = t.schemas, e.tView = null; }
function vf(e) { if (qt(e)) {
    let t = Bn.getNgModuleScope(e), n = ei(e);
    return Z({ schemas: n.schemas || null }, t);
}
else if (Do(e)) {
    if ((W(e) || Me(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (Be(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function Hh(e) { return nd(e) ? e.ngModule : e; }
var Kc = 0;
function xD(e, t) {
    let n = null;
    LS(e, t), LD(e, t), Object.defineProperty(e, mn, { get: () => {
            if (n === null) {
                let o = te({ usage: 0, kind: "component", type: e });
                if (mv(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = TR(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = Re.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = FD(e, t), l = Xe(Z({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || F, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                Kc++;
                try {
                    if (l.usesInheritance && HD(e), n = o.compileComponent(he, a, l), l.isStandalone) {
                        let u = Le(t.imports || F), { directiveDefs: d, pipeDefs: f } = RR(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(G);
                    }
                }
                finally {
                    Kc--;
                }
                if (Kc === 0 && AD(), kR(e)) {
                    let u = vf(e.ngSelectorScope);
                    yf(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Ne(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function RR(e, t) { return { directiveDefs: () => Uo(e) ? [...Bn.getStandaloneComponentScope(e, t).compilation.directives].map(i => W(i) || Me(i)).filter(i => i !== null) : [], pipeDefs: () => Uo(e) ? [...Bn.getStandaloneComponentScope(e, t).compilation.pipes].map(i => Be(i)).filter(i => i !== null) : [] }; }
function kR(e) { return e.ngSelectorScope !== void 0; }
function Ef(e, t) { let n = null; LD(e, t || {}), Object.defineProperty(e, Jr, { get: () => { if (n === null) {
        let o = PD(e, t || {});
        n = te({ usage: 0, kind: "directive", type: e }).compileDirective(he, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function PD(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = te({ usage: 0, kind: "directive", type: e }), i = FD(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && HD(e), { metadata: i, sourceMapUrl: o }; }
function LD(e, t) { let n = null; Object.defineProperty(e, gt, { get: () => { if (n === null) {
        let o = PD(e, t), r = te({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(he, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: vs(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function OR(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function FD(e, t) { let n = ru(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || _e, propMetadata: o, inputs: t.inputs || F, outputs: t.outputs || F, queries: Vh(e, o, VD), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, controlCreate: null, typeSourceSpan: null, usesInheritance: !OR(e), exportAs: LR(t.exportAs), providers: t.providers || null, viewQueries: Vh(e, o, jD), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function HD(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Me(n) && !W(n) && HR(n) && Ef(n, null), n = Object.getPrototypeOf(n); }
function xR(e) { return typeof e == "string" ? UD(e) : G(e); }
function PR(e, t) { return { propertyName: e, predicate: xR(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function Vh(e, t, n) { let o = [], r = []; for (let i in t)
    if (t.hasOwnProperty(i)) {
        let s = t[i];
        s.forEach(a => { if (n(a)) {
            if (!a.selector)
                throw new Error(`Can't construct a query for the property "${i}" of "${Ne(e)}" since the query selector wasn't defined.`);
            if (s.some(BD))
                throw new Error("Cannot combine @Input decorators with query decorators");
            let c = PR(i, a);
            c.isSignal ? o.push(c) : r.push(c);
        } });
    } return [...o, ...r]; }
function LR(e) { return e === void 0 ? null : UD(e); }
function VD(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function jD(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function BD(e) { return e.ngMetadataName === "Input"; }
function UD(e) { return e.split(",").map(t => t.trim()); }
var FR = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function HR(e) { let t = ru(); if (FR.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (BD(s) || VD(s) || jD(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function $D(e, t) { let n = null, o = null; Object.defineProperty(e, gt, { get: () => { if (o === null) {
        let r = jh(e, t), i = te({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(he, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: vs(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, Xr, { get: () => { if (n === null) {
        let r = jh(e, t);
        n = te({ usage: 0, kind: "pipe", type: r.type }).compilePipe(he, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function jh(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var zD = yr("Directive", (e = {}) => e, void 0, void 0, (e, t) => Ef(e, t)), VR = yr("Component", (e = {}) => Z({ changeDetection: Es.Eager }, e), zD, void 0, (e, t) => xD(e, t)), jR = yr("Pipe", e => Z({ pure: !0 }, e), void 0, void 0, (e, t) => $D(e, t)), BR = at("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), UR = at("Output", e => ({ alias: e })), $R = at("HostBinding", e => ({ hostPropertyName: e })), zR = at("HostListener", (e, t) => ({ eventName: e, args: t })), GR = yr("NgModule", e => e, void 0, void 0, (e, t) => kD(e, t)), gs = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, WR = (() => { class e {
    compileModuleSync(n) { return new Gn(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = yn(n), i = bn(r.declarations).reduce((s, a) => { let c = W(a); return c && s.push(new At(c)), s; }, []); return new gs(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), GD = new S(""), eu = class {
};
var WD = (() => { class e {
    applicationErrorHandler = I(zt);
    appRef = I(Oe);
    taskService = I($t);
    ngZone = I(U);
    zonelessEnabled = I(Cn);
    tracing = I(pn, { optional: !0 });
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new _T;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Cc) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (I(Ei, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { let n = this.taskService.add(); if (!this.runningTick && (this.cleanup(), !this.zonelessEnabled || this.appRef.includeAllTestViews)) {
        this.taskService.remove(n);
        return;
    } this.switchToMicrotaskScheduler(), this.taskService.remove(n); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })); }
    switchToMicrotaskScheduler() { this.ngZone.runOutsideAngular(() => { let n = this.taskService.add(); this.useMicrotaskScheduler = !0, queueMicrotask(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 11: break;
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick())
        return; let o = this.useMicrotaskScheduler ? Np : Mp; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick())); }
    shouldScheduleTick() { return !(this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(Cc + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (o) {
        this.applicationErrorHandler(o);
    }
    finally {
        this.taskService.remove(n), this.cleanup();
    } }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function qR() { return Q("NgZoneless"), tt([...Ea(), []]); }
function Ea() { return [{ provide: Tt, useExisting: WD }, { provide: U, useClass: Tc }, { provide: Cn, useValue: !0 }]; }
function QR() { return typeof $localize < "u" && $localize.locale || Hr; }
var If = new S("", { factory: () => I(If, { optional: !0, skipSelf: !0 }) || QR() }), YR = new S("", { factory: () => uA }), ZR = new S(""), KR = new S(""), qD = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(qD || {}), tu = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function JR(e) { return e.map(t => t.nativeElement); }
var gr = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new cn(t) : null; }
    get injector() { return IM(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (Vp(t) || EM(t)); }
    get context() { return Vp(this.nativeNode) || vM(this.nativeNode); }
    get listeners() { return NM(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return TM(this.nativeNode); }
    get providerTokens() { return DM(this.nativeNode); }
}, cn = class extends gr {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = ve(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[m].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = ve(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[m].data, r = o[t.nodeIndex], i = {}; return XR(this.nativeElement, i), tk(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = ve(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[m].data[o.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, o = this.nativeElement.className; return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let o = 0; o < t.length; o++) {
        let r = t[o];
        n.push(mr(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(mr(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return Bh(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return Bh(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function XR(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                ek(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function ek(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function Bh(e, t, n, o) { let r = ve(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[m].data[r.nodeIndex];
    Qt(s, i, t, n, o, e.nativeNode);
}
else
    Df(e.nativeNode, t, n, o); }
function Qt(e, t, n, o, r, i) { let s = ip(e, t); if (e.type & 11) {
    if (Jc(s, n, o, r, i), ge(e)) {
        let c = fe(e.index, t);
        c && c[m].firstChild && Qt(c[m].firstChild, c, n, o, r, i);
    }
    else
        e.child && Qt(e.child, t, n, o, r, i), s && Df(s, n, o, r);
    let a = t[e.index];
    X(a) && Uh(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    Jc(a[Fe], n, o, r, i), Uh(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[K], l = a[le].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            Jc(u, n, o, r, i);
    else if (l) {
        let u = a[q], d = u[m].data[l.index];
        Qt(d, u, n, o, r, i);
    }
}
else
    e.child && Qt(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && Qt(a, t, n, o, r, i);
} }
function Uh(e, t, n, o, r) { for (let i = V; i < e.length; i++) {
    let s = e[i], a = s[m].firstChild;
    a && Qt(a, s, t, n, o, r);
} }
function Jc(e, t, n, o, r) { if (r !== e) {
    let i = mr(e);
    if (!i)
        return;
    (o && i instanceof cn && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function Df(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = mr(a);
    c && ((o && c instanceof cn && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), Df(a, t, n, o));
} }
function tk(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(BN), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += N(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var Xc = "__ng_debug__";
function mr(e) { return e instanceof Node ? (e.hasOwnProperty(Xc) || (e[Xc] = e.nodeType == Node.ELEMENT_NODE ? new cn(e) : new gr(e)), e[Xc]) : null; }
import { Subscription as Pk } from "rxjs";
var _f = { JSACTION: "__jsaction", OWNER: "__owner" }, KD = {};
function nk(e) { return e[_f.JSACTION]; }
function QD(e, t) { e[_f.JSACTION] = t; }
function ok(e) { return KD[e]; }
function rk(e, t) { KD[e] = t; }
var C = { CLICK: "click", CLICKMOD: "clickmod", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", ERROR: "error", LOAD: "load", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", TOGGLE: "toggle" }, ik = [C.MOUSEENTER, C.MOUSELEAVE, "pointerenter", "pointerleave"], sk = [C.CLICK, C.DBLCLICK, C.FOCUSIN, C.FOCUSOUT, C.KEYDOWN, C.KEYUP, C.KEYPRESS, C.MOUSEOVER, C.MOUSEOUT, C.SUBMIT, C.TOUCHSTART, C.TOUCHEND, C.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], JD = [C.FOCUS, C.BLUR, C.ERROR, C.LOAD, C.TOGGLE], Na = e => JD.indexOf(e) >= 0, ak = sk.concat(JD), XD = e => ak.indexOf(e) >= 0;
function ck(e) { return e === C.MOUSEENTER ? C.MOUSEOVER : e === C.MOUSELEAVE ? C.MOUSEOUT : e === C.POINTERENTER ? C.POINTEROVER : e === C.POINTERLEAVE ? C.POINTEROUT : e; }
function lk(e, t, n, o) { let r = !1; Na(t) && (r = !0); let i = typeof o == "boolean" ? { capture: r, passive: o } : r; return e.addEventListener(t, n, i), { eventType: t, handler: n, capture: r, passive: o }; }
function uk(e, t) { if (e.removeEventListener) {
    let n = typeof t.passive == "boolean" ? { capture: t.capture } : t.capture;
    e.removeEventListener(t.eventType, t.handler, n);
}
else
    e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler); }
function dk(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1; }
var YD = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function fk(e) { return e.which === 2 || e.which == null && e.button === 4; }
function pk(e) { return YD && e.metaKey || !YD && e.ctrlKey || fk(e) || e.shiftKey; }
function hk(e, t, n) { let o = e.relatedTarget; return (e.type === C.MOUSEOVER && t === C.MOUSEENTER || e.type === C.MOUSEOUT && t === C.MOUSELEAVE || e.type === C.POINTEROVER && t === C.POINTERENTER || e.type === C.POINTEROUT && t === C.POINTERLEAVE) && (!o || o !== n && !n.contains(o)); }
function gk(e, t) { let n = {}; for (let o in e) {
    if (o === "srcElement" || o === "target")
        continue;
    let r = o, i = e[r];
    typeof i != "function" && (n[r] = i);
} return e.type === C.MOUSEOVER ? n.type = C.MOUSEENTER : e.type === C.MOUSEOUT ? n.type = C.MOUSELEAVE : e.type === C.POINTEROVER ? n.type = C.POINTERENTER : n.type = C.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n._originalEvent = e, n; }
var Ta = class {
    element;
    handlerInfos = [];
    constructor(t) { this.element = t; }
    addEventListener(t, n, o) { this.handlerInfos.push(lk(this.element, t, n(this.element), o)); }
    cleanUp() { for (let t = 0; t < this.handlerInfos.length; t++)
        uk(this.element, this.handlerInfos[t]); this.handlerInfos = []; }
}, mk = { EVENT_ACTION_SEPARATOR: ":" };
function kt(e) { return e.eventType; }
function wf(e, t) { e.eventType = t; }
function Da(e) { return e.event; }
function eC(e, t) { e.event = t; }
function tC(e) { return e.targetElement; }
function nC(e, t) { e.targetElement = t; }
function oC(e) { return e.eic; }
function yk(e, t) { e.eic = t; }
function vk(e) { return e.timeStamp; }
function Ek(e, t) { e.timeStamp = t; }
function Ca(e) { return e.eia; }
function rC(e, t, n) { e.eia = [t, n]; }
function Cf(e) { e.eia = void 0; }
function Ia(e) { return e[1]; }
function Ik(e) { return e.eirp; }
function iC(e, t) { e.eirp = t; }
function sC(e) { return e.eir; }
function aC(e, t) { e.eir = t; }
function cC(e) { return { eventType: e.eventType, event: e.event, targetElement: e.targetElement, eic: e.eic, eia: e.eia, timeStamp: e.timeStamp, eirp: e.eirp, eiack: e.eiack, eir: e.eir }; }
function Dk(e, t, n, o, r, i, s, a) { return { eventType: e, event: t, targetElement: n, eic: o, timeStamp: r, eia: i, eirp: s, eiack: a }; }
var Tf = class e {
    eventInfo;
    constructor(t) { this.eventInfo = t; }
    getEventType() { return kt(this.eventInfo); }
    setEventType(t) { wf(this.eventInfo, t); }
    getEvent() { return Da(this.eventInfo); }
    setEvent(t) { eC(this.eventInfo, t); }
    getTargetElement() { return tC(this.eventInfo); }
    setTargetElement(t) { nC(this.eventInfo, t); }
    getContainer() { return oC(this.eventInfo); }
    setContainer(t) { yk(this.eventInfo, t); }
    getTimestamp() { return vk(this.eventInfo); }
    setTimestamp(t) { Ek(this.eventInfo, t); }
    getAction() { let t = Ca(this.eventInfo); if (t)
        return { name: t[0], element: t[1] }; }
    setAction(t) { if (!t) {
        Cf(this.eventInfo);
        return;
    } rC(this.eventInfo, t.name, t.element); }
    getIsReplay() { return Ik(this.eventInfo); }
    setIsReplay(t) { iC(this.eventInfo, t); }
    getResolved() { return sC(this.eventInfo); }
    setResolved(t) { aC(this.eventInfo, t); }
    clone() { return new e(cC(this.eventInfo)); }
}, Ck = {}, Tk = /\s*;\s*/, Mk = C.CLICK, Mf = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: t = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = t, this.clickModSupport = n; }
    resolveEventType(t) { this.clickModSupport && kt(t) === C.CLICK && pk(Da(t)) ? wf(t, C.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t); }
    resolveAction(t) { sC(t) || (this.populateAction(t, tC(t)), aC(t, !0)); }
    resolveParentAction(t) { let n = Ca(t), o = n && Ia(n); Cf(t); let r = o && this.getParentNode(o); r && this.populateAction(t, r); }
    populateAction(t, n) { let o = n; for (; o && o !== oC(t) && (o.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(o, t), !Ca(t));)
        o = this.getParentNode(o); let r = Ca(t); if (r && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (kt(t) === C.MOUSEENTER || kt(t) === C.MOUSELEAVE || kt(t) === C.POINTERENTER || kt(t) === C.POINTERLEAVE)))
        if (hk(Da(t), kt(t), Ia(r))) {
            let i = gk(Da(t), Ia(r));
            eC(t, i), nC(t, Ia(r));
        }
        else
            Cf(t); }
    getParentNode(t) { let n = t[_f.OWNER]; if (n)
        return n; let o = t.parentNode; return o?.nodeName === "#document-fragment" ? o?.host ?? null : o; }
    populateActionOnElement(t, n) { let o = this.parseActions(t), r = o[kt(n)]; r !== void 0 && rC(n, r, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, o); }
    parseActions(t) { let n = nk(t); if (!n) {
        let o = t.getAttribute(Tn.JSACTION);
        if (!o)
            n = Ck, QD(t, n);
        else {
            if (n = ok(o), !n) {
                n = {};
                let r = o.split(Tk);
                for (let i = 0; i < r.length; i++) {
                    let s = r[i];
                    if (!s)
                        continue;
                    let a = s.indexOf(mk.EVENT_ACTION_SEPARATOR), c = a !== -1, l = c ? s.substr(0, a).trim() : Mk, u = c ? s.substr(a + 1).trim() : s;
                    n[l] = u;
                }
                rk(o, n);
            }
            QD(t, n);
        }
    } return n; }
    addA11yClickSupport(t, n, o) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = o; }
}, lC = (function (e) { return e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", e; })(lC || {}), Nf = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(t, { actionResolver: n, eventReplayer: o } = {}) { this.dispatchDelegate = t, this.actionResolver = n, this.eventReplayer = o; }
    dispatch(t) { let n = new Tf(t); this.actionResolver?.resolveEventType(t), this.actionResolver?.resolveAction(t); let o = n.getAction(); if (o && Nk(o.element, n) && dk(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(t) { this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function Nk(e, t) { return e.tagName === "A" && (t.getEventType() === C.CLICK || t.getEventType() === C.CLICKMOD); }
var uC = Symbol.for("propagationStopped"), Sf = { REPLAY: 101 };
var _k = "`preventDefault` called during event replay.";
var wk = "`composedPath` called during event replay.", Ma = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(t, n = !0) { this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new Mf({ clickModSupport: n }), this.dispatcher = new Nf(o => { this.dispatchToDelegate(o); }, { actionResolver: this.actionResolver }); }
    dispatch(t) { this.dispatcher.dispatch(t); }
    dispatchToDelegate(t) { for (t.getIsReplay() && Ak(t), Sk(t); t.getAction();) {
        if (Rk(t), Na(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), bk(t)))
            return;
        this.actionResolver.resolveParentAction(t.eventInfo);
    } }
};
function Sk(e) { let t = e.getEvent(), n = e.getEvent().stopPropagation.bind(t), o = () => { t[uC] = !0, n(); }; gn(t, "stopPropagation", o), gn(t, "stopImmediatePropagation", o); }
function bk(e) { return !!e.getEvent()[uC]; }
function Ak(e) { let t = e.getEvent(), n = e.getTargetElement(), o = t.preventDefault.bind(t); gn(t, "target", n), gn(t, "eventPhase", Sf.REPLAY), gn(t, "preventDefault", () => { throw o(), new Error(_k + ""); }), gn(t, "composedPath", () => { throw new Error(wk + ""); }); }
function Rk(e) { let t = e.getEvent(), n = e.getAction()?.element; n && gn(t, "currentTarget", n, { configurable: !0 }); }
function gn(e, t, n, { configurable: o = !1 } = {}) { Object.defineProperty(e, t, { value: n, configurable: o }); }
function dC(e, t) { e.ecrd(n => { t.dispatch(n); }, lC.I_AM_THE_JSACTION_FRAMEWORK); }
function kk(e) { return e?.q ?? []; }
function Ok(e) { e && (ZD(e.c, e.et, e.h), ZD(e.c, e.etc, e.h, !0)); }
function ZD(e, t, n, o) { for (let r = 0; r < t.length; r++)
    e.removeEventListener(t[r], n, o); }
var xk = !1, fC = (() => { class e {
    static MOUSE_SPECIAL_SUPPORT = xk;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, o, r) { let i = Dk(n, o, o.target, r, Date.now()); this.handleEventInfo(i); }
    handleEventInfo(n) { if (!this.dispatcher) {
        iC(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, o, r) { if (n in this.eventHandlers || !this.containerManager || !e.MOUSE_SPECIAL_SUPPORT && ik.indexOf(n) >= 0)
        return; let i = (a, c, l) => { this.handleEvent(a, c, l); }; this.eventHandlers[n] = i; let s = ck(o || n); if (s !== n) {
        let a = this.browserEventTypeToExtraEventTypes[s] || [];
        a.push(n), this.browserEventTypeToExtraEventTypes[s] = a;
    } this.containerManager.addEventListener(s, a => c => { i(n, c, a); }, r); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), Ok(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let o = 0; o < n.length; o++) {
        let r = n[o], i = this.getEventTypesForBrowserEventType(r.eventType);
        for (let s = 0; s < i.length; s++) {
            let a = cC(r);
            wf(a, i[s]), this.handleEventInfo(a);
        }
    } }
    getEventTypesForBrowserEventType(n) { let o = []; return this.eventHandlers[n] && o.push(n), this.browserEventTypeToExtraEventTypes[n] && o.push(...this.browserEventTypeToExtraEventTypes[n]), o; }
    handler(n) { return this.eventHandlers[n]; }
    cleanUp() { this.containerManager?.cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = []; }
    registerDispatcher(n, o) { this.ecrd(n, o); }
    ecrd(n, o) { if (this.dispatcher = n, this.queuedEventInfos?.length) {
        for (let r = 0; r < this.queuedEventInfos.length; r++)
            this.handleEventInfo(this.queuedEventInfos[r]);
        this.queuedEventInfos = null;
    } }
} return e; })();
function pC(e, t = window) { return kk(t._ejsas?.[e]); }
function bf(e, t = window) { t._ejsas && (t._ejsas[e] = void 0); }
import "@angular/core/primitives/signals";
import "rxjs/operators";
import "@angular/core/primitives/di";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var ka = Symbol("InputSignalNode#UNSET"), xC = Xe(Z({}, Fa), { transformFn: void 0, applyValueToInputSignal(e, t) { La(e, t); } }), EP = Symbol();
function PC(e, t) { let n = Object.create(xC); n.value = e, n.transformFn = t?.transform; function o() { if (zr(n), n.value === ka) {
    let r = null;
    throw new w(-950, r);
} return n.value; } return o[et] = n, o; }
var go = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })(go || {});
var Lk = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(Lk || {}), hC = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => ys(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, IP = (() => { let e = new S(""); return e.__NG_ELEMENT_ID__ = t => { let n = M(); if (n === null)
    throw new w(-204, !1); if (n.type & 2)
    return n.value; if (t & 8)
    return null; throw new w(-204, !1); }, e; })();
function DP(e) { return new bc; }
function gC(e, t) { return PC(e, t); }
function Fk(e) { return PC(ka, e); }
var CP = (gC.required = Fk, gC);
function mC(e, t) { return dd(t); }
function Hk(e, t) { return fd(t); }
var TP = (mC.required = Hk, mC);
function MP(e, t) { return pd(t); }
function yC(e, t) { return dd(t); }
function Vk(e, t) { return fd(t); }
var NP = (yC.required = Vk, yC);
function _P(e, t) { return pd(t); }
function LC(e, t) { let n = Object.create(xC), o = new bc; n.value = e; function r() { return zr(n), vC(n.value), n.value; } return r[et] = n, r.asReadonly = _p.bind(r), r.set = i => { n.equal(n.value, i) || (La(n, i), o.emit(i)); }, r.update = i => { vC(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function vC(e) { if (e === ka)
    throw new w(952, !1); }
function EC(e, t) { return LC(e, t); }
function jk(e) { return LC(ka, e); }
var wP = (EC.required = jk, EC), FC = !0, yo = class {
}, SP = at("ContentChildren", (e, t = {}) => Z({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: FC }, t), yo), bP = at("ContentChild", (e, t = {}) => Z({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), yo), AP = at("ViewChildren", (e, t = {}) => Z({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: FC }, t), yo), RP = at("ViewChild", (e, t) => Z({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), yo);
function Bk(e, t, n) { let o = new Gn(n); return Promise.resolve(o); }
function IC(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var Uk = (() => { class e {
    zone = I(U);
    changeDetectionScheduler = I(Tt);
    applicationRef = I(Oe);
    applicationErrorHandler = I(zt);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), $k = new S("", { factory: () => !1 });
function zk({ ngZoneFactory: e, scheduleInRootZone: t }) { return e ??= () => new U(Xe(Z({}, HC()), { scheduleInRootZone: t })), [{ provide: Cn, useValue: !1 }, { provide: U, useFactory: e }, { provide: mt, multi: !0, useFactory: () => { let n = I(Uk, { optional: !0 }); return () => n.initialize(); } }, { provide: mt, multi: !0, useFactory: () => { let n = I(Gk); return () => { n.initialize(); }; } }, { provide: Ei, useValue: t ?? Cp }]; }
function kP(e) { let t = e?.scheduleInRootZone, n = zk({ ngZoneFactory: () => { let o = HC(e); return o.scheduleInRootZone = t, o.shouldCoalesceEventChangeDetection && Q("NgZone_CoalesceEvent"), new U(o); }, scheduleInRootZone: t }); return tt([{ provide: $k, useValue: !0 }, n]); }
function HC(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var Gk = (() => { class e {
    subscription = new Pk;
    initialized = !1;
    zone = I(U);
    pendingTasks = I($t);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { U.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { U.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var wa = new S(""), Wk = new S("");
function Br(e) { return !e.moduleRef; }
function VC(e) { let t = Br(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(U); return n.run(() => { Br(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(zt), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), Br(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(wa);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(wa);
    s.add(i), e.moduleRef.onDestroy(() => { $o(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return Qk(o, n, () => { let i = t.get($t), s = i.add(), a = t.get(bd); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(If, Hr); if (BE(c || Hr), !t.get(Wk, !0))
    return Br(e) ? t.get(Oe) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (Br(e)) {
    let u = t.get(Oe);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return jC?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => { i.remove(s); }); }); }); }
var jC;
function DC() { jC = qk; }
function qk(e, t) { let n = e.injector.get(Oe); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new w(-403, !1); t.push(e); }
function Qk(e, t, n) { try {
    let o = n();
    return wd(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var BC = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = [Ea(), ...o?.applicationProviders ?? [], Nc], i = Dv(n.moduleType, this.injector, r); return DC(), VC({ moduleRef: i, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = Rd({}, o); return DC(), Bk(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new w(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(wa, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(Pe(Ce)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), mo = null;
function Yk(e) { if (Oa())
    throw new w(400, !1); Ad(), mo = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(BC); return $C(e), t; }
function Zk(e, t, n = []) { let o = `Platform: ${t}`, r = new S(o); return (i = []) => { let s = Oa(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? Yk(UC(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : Kk(r); }; }
function UC(e = [], t) { return Ce.create({ name: t, providers: [{ provide: Xf, useValue: "platform" }, { provide: wa, useValue: new Set([() => mo = null]) }, ...e] }); }
function Kk(e) { let t = Oa(); if (!t)
    throw new w(-401, !1); return t; }
function Oa() { return typeof ngServerMode < "u" && ngServerMode ? null : mo?.get(BC) ?? null; }
function OP() { Oa()?.destroy(); }
function Jk(e = []) { if (mo)
    return mo; let t = UC(e); return (typeof ngServerMode > "u" || !ngServerMode) && (mo = t), Ad(), $C(t), t; }
function xP(e) { return { provide: su, useValue: e, multi: !0 }; }
function $C(e) { let t = e.get(su, null); ai(e, () => { t?.forEach(n => n()); }); }
function PP(e) { return tt([]); }
function LP() { return !1; }
function FP() { }
var _a = new WeakSet, CC = "";
function TC(e) { return e.get(_s, fu); }
function Xk() { let e = [{ provide: _s, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = I(ct);
            t = !!window._ejsas?.[n];
        } return t && Q("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: mt, useValue: () => { let t = I(Oe), { injector: n } = t; if (!_a.has(t)) {
        let o = I(Mr);
        if (TC(n)) {
            jg();
            let r = n.get(ct), i = Hg(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (Fg(s, a, c), gu(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: Pr, useFactory: () => { let t = I(Oe), { injector: n } = t; return () => { if (!TC(n) || _a.has(t))
        return; _a.add(t); let o = n.get(ct); t.onDestroy(() => { _a.delete(t), typeof ngServerMode < "u" && !ngServerMode && bf(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(yu); eO(r, n); let i = n.get(Mr); i.get(CC)?.forEach(mu), i.delete(CC); let s = r.instance; Nr(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var eO = (e, t) => { let n = t.get(ct), o = window._ejsas[n], r = e.instance = new fC(new Ta(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = pC(n); r.replayEarlyEventInfos(i), bf(n); let s = new Ma(a => { nO(t, a, a.currentTarget); }); dC(r, s); };
function tO(e, t, n) { let o = new Map, r = t[Lt], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!XD(l))
        continue;
    Na(l) ? n.capture.add(l) : n.regular.add(l);
    let u = O(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function nO(e, t, n) { let o = (n && n.getAttribute(to)) ?? ""; /d\d+/.test(o) ? oO(o, e, t, n) : t.eventPhase === Sf.REPLAY && vu(t, n); }
function oO(e, t, n, o) { let r = t.get(Og); r.push({ event: n, currentTarget: o }), ft(t, e, rO(r)); }
function rO(e) { return t => { let n = new Set(t), o = []; for (let { event: r, currentTarget: i } of e) {
    let s = i.getAttribute(to);
    n.has(s) ? vu(r, i) : o.push({ event: r, currentTarget: i });
} e.length = 0, e.push(...o); }; }
var MC = !1, NC = !1, _C = !1, iO = 1e4;
function sO() { MC || (MC = !0, Wg(), xE(), NI(), PE(), xv(), av(), Fy(), ey()); }
function aO() { NC || (NC = !0, $E(), Sy(), Oy()); }
function cO() { _C || (_C = !0, tm()); }
function lO(e) { return e.whenStable(); }
var HP = "ngcm";
function VP() { let e = [{ provide: un, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!I(Jn, { optional: !0 })?.get(ws, null)), t && Q("NgHydration"), t; } }, { provide: mt, useValue: () => { if (ed(!1), typeof ngServerMode < "u" && ngServerMode)
            return; let t = I(Ut); I(un) && (om(t), sO()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: uu, useFactory: () => I(un) }, { provide: Pr, useFactory: () => { let t = I(Tt); if (I(un)) {
        let n = I(Oe);
        return () => { lO(n).then(() => { n.destroyed || (td(n), t.notify(7)); }); };
    } return () => { }; }, multi: !0 }), tt(e); }
function jP() { return [{ provide: du, useFactory: () => I(un) }, { provide: mt, useValue: () => { I(un) && (aO(), ed(!0), Q("NgI18nHydration")); }, multi: !0 }]; }
function BP() { let e = [Xk(), { provide: pu, useValue: !0 }, { provide: lt, useClass: Bg }, { provide: mt, useValue: () => { cO(), Q("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Pr, useFactory: () => { let t = I(Ce), n = I(Ut); return () => { let o = nm(t), r = Ny(n, n.body); oE(t, o, r), Xg(n, t); }; }, multi: !0 }), e; }
var wC = iO - 1e3, kf = class {
    openTasks = new Map;
    add(t) { this.openTasks.set(t, new Error("Task stack tracking error")); }
    remove(t) { this.openTasks.delete(t); }
};
function UP() { let e = new kf, { openTasks: t } = e; return tt([{ provide: Tp, useValue: e }, Kv(() => { console.warn("Stability debugging utility was provided in production mode. This will cause debug code to be included in production bundles. If this is intentional because you are debugging stability issues in a production environment, you can ignore this warning."); let n = I(U), o = I(Oe), r = null; typeof Zone < "u" && n.run(() => { r = Zone.current.get("TaskTrackingZone"); }), n.runOutsideAngular(() => { let i = setTimeout(() => { if (console.debug(`---- Application did not stabilize within ${wC / 1e3} seconds ----`), typeof Zone < "u" && !r && console.info('Zone.js is present but no TaskTrackingZone found. To enable better debugging of tasks in the Angular Zone, import "zone.js/plugins/task-tracking" in your application.'), r?.macroTasks?.length) {
        console.group("Macrotasks keeping Angular Zone unstable:");
        for (let s of r?.macroTasks ?? [])
            console.debug(s.creationLocation.stack);
        console.groupEnd();
    } console.group("PendingTasks keeping application unstable:"); for (let s of t.values())
        console.debug(s.stack); console.groupEnd(); }, wC); o.whenStable().then(() => { clearTimeout(i); }); }); })]); }
function $P(e) { let t = gd(e); if (!t)
    throw zC(e); return new Gn(t); }
function zP(e) { let t = gd(e); if (!t)
    throw zC(e); return t; }
function zC(e) { return new w(920, !1); }
var uO = (() => { class e {
    static __NG_ELEMENT_ID__ = dO;
} return e; })();
function dO(e) { return fO(M(), g(), (e & 16) === 16); }
function fO(e, t, n) { if (ge(e) && !n) {
    let o = fe(e.index, t);
    return new bt(o, o);
}
else if (e.type & 175) {
    let o = t[K];
    return new bt(o, t);
} return null; }
var Of = class extends uO {
}, SC = class extends Of {
}, Sa = class {
    supports(t) { return cr(t); }
    create(t) { return new xf(t); }
}, pO = (e, t) => t, xf = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || pO; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < bC(o, r, i) ? n : o, a = bC(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !cr(t))
        throw new w(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, Wy(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new Pf(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new ba), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new ba), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, Pf = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, Lf = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, ba = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new Lf, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function bC(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var Aa = class {
    supports(t) { return t instanceof Map || ra(t); }
    create() { return new Ff; }
}, Ff = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || ra(t)))
        throw new w(900, !1); return this.check(t) ? this : null; }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (o, r) => { if (n && n.key === r)
        this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(r, o);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let o = n; o !== null; o = o._nextRemoved)
            o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let o = t._prev;
        return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev, s = r._next;
        return i && (i._next = s), s && (s._prev = i), r._next = null, r._prev = null, r;
    } let o = new Hf(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o)); }
}, Hf = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function AC() { return new GC([new Sa]); }
var GC = (() => { class e {
    factories;
    static \u0275prov = B({ token: e, providedIn: "root", factory: AC });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = I(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || AC()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new w(901, !1); }
} return e; })();
function RC() { return new WC([new Aa]); }
var WC = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: RC });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = I(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || RC()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new w(901, !1); }
} return e; })(), hO = [new Aa], gO = [new Sa], GP = new GC(gO), WP = new WC(hO), qP = Zk(null, "core", []), QP = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(Pe(Oe)); };
    static \u0275mod = yd({ type: e });
    static \u0275inj = Io({});
} return e; })();
function YP(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (x(R.BootstrapApplicationStart), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new w(-401, !1); try {
    let i = r?.injector ?? Jk(o), s = [Ea(), Nc, ...n || []], a = new ur({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return VC({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    x(R.BootstrapApplicationEnd);
} }
var Vf = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, mO = 0;
function qC(e) { return e.ssrId || (e.ssrId = `t${mO++}`), e.ssrId; }
function QC(e, t, n) { let o = []; return jn(e, t, n, o), o.length; }
function yO(e) { let t = []; return Zs(e, t), t.length; }
function YC(e, t) { let n = e[j]; return n && !n.hasAttribute(ln) ? Ra(n, e, null, t) : null; }
function ZC(e, t) { let n = bo(e[j]), o = YC(n, t); if (o === null)
    return; let r = O(n[j]), i = e[q], s = Ra(r, i, null, t), a = n[T], c = `${o}|${s}`; a.setAttribute(r, On, c); }
function ZP(e, t) { let n = e.injector, o = by(n), r = Nr(n), i = new Vf, s = new Map, a = e._views, c = n.get(_s, fu), l = { regular: new Set, capture: new Set }, u = new Map; e.injector.get(ct); for (let p of a) {
    let h = Eu(p);
    if (h !== null) {
        let y = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, deferBlocks: u };
        X(h) ? ZC(h, y) : YC(h, y), CO(s, t);
    }
} let d = i.getAll(), f = n.get(Jn); if (f.set(ws, d), u.size > 0) {
    let p = {};
    for (let [h, y] of u.entries())
        p[h] = y;
    f.set(Ss, p);
} return l; }
function vO(e, t, n, o, r) { let i = [], s = ""; for (let a = V; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (Ge(c) && (c = c[E], X(c))) {
        u = yO(c) + 1, ZC(c, r);
        let p = bo(c[j]);
        d = { [Ts]: p[m].ssrId, [it]: u };
    }
    if (!d) {
        let p = c[m];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = qC(p), u = QC(p, c, p.firstChild)), d = { [Ts]: l, [it]: u };
        let h = !1;
        if (Vv(n[m], t)) {
            let y = me(n, t), v = ae(n[m], t);
            if (r.isIncrementalHydrationEnabled && v.hydrateTriggers !== null) {
                let D = `d${r.deferBlocks.size}`;
                v.hydrateTriggers.has(7) && (h = !0);
                let b = [];
                Zs(e, b);
                let J = { [it]: b.length, [Cr]: y[dt] }, xe = EO(v.hydrateTriggers);
                xe.length > 0 && (J[Tr] = xe), o !== null && (J[lu] = o), r.deferBlocks.set(D, J);
                let Te = O(e);
                Te !== void 0 ? Te.nodeType === Node.COMMENT_NODE && kC(Te, D) : kC(Te, D), h || MO(v, b, D, r), o = D, d[Ns] = D;
            }
            d[Cr] = y[dt];
        }
        if (!h) {
            let y = O(c[j]);
            (c[m].type !== 1 || y === null || !y.hasAttribute(ln)) && Object.assign(d, KC(e[a], o, r));
        }
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[Ir] ??= 1, p[Ir]++;
    }
    else
        s = f, i.push(d);
} return i; }
function EO(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : r.type === 5 ? n.push({ trigger: o, delay: r.delay }) : n.push({ trigger: o, intersectionObserverOptions: r.intersectionObserverOptions })); return n; }
function Ur(e, t, n, o) { let r = t.index - E; e[Dr] ??= {}, e[Dr][r] ??= My(t, n, o); }
function Af(e, t) { let n = typeof t == "number" ? t : t.index - E; e[eo] ??= [], e[eo].includes(n) || e[eo].push(n); }
function KC(e, t = null, n) { let o = {}, r = e[m], i = Ay(r, n), s = n.shouldReplayEvents ? tO(r, e, n.eventTypesToReplay) : null; for (let a = E; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - E, u = Ry(e, a, n);
    if (u) {
        o[Ms] ??= {}, o[Ms][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            Af(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + E];
            Ur(o, f, e, i);
        }
        continue;
    }
    if (ms(c) && !no(c)) {
        if (X(e[a]) && c.tView && (o[Cs] ??= {}, o[Cs][l] = qC(c.tView)), lo(c, e) && TO(c)) {
            Af(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !Ja(d) && !Kn(d) && (lo(d, e) ? Af(o, d) : Ur(o, d, e, i));
                    else
                        throw gy(O(e[a]));
        }
        if (IO(o, c, e, i), X(e[a])) {
            let d = e[a][j];
            if (Array.isArray(d)) {
                let f = O(d);
                f.hasAttribute(ln) || Ra(f, d, t, n);
            }
            o[Xn] ??= {}, o[Xn][l] = vO(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !og(c)) {
            let d = O(e[a][j]);
            d.hasAttribute(ln) || Ra(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[Er] ??= {}, o[Er][l] = QC(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !Kn(d) && Ur(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = O(e[a]);
            Du(n, d);
        }
        if (s && c.type & 2) {
            let d = O(e[a]);
            s.has(d) && hu(d, s.get(d), t);
        }
    }
} return o; }
function IO(e, t, n, o) { Ja(t) || (t.projectionNext && t.projectionNext !== t.next && !Kn(t.projectionNext) && Ur(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && lo(t.parent, n) && !lo(t, n) && Ur(e, t, n, o)); }
function DO(e) { let t = e[H]; if (!t?.constructor)
    return !1; let n = W(t.constructor); return n?.encapsulation === Re.ShadowDom || n?.encapsulation === Re.ExperimentalIsolatedShadowDom; }
function Ra(e, t, n, o) { let r = t[T]; if (np(t) && !ea() || DO(t))
    return r.setAttribute(e, ln, ""), null; {
    let i = KC(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, On, s.toString()), s;
} }
function kC(e, t) { e.textContent = `ngh=${t}`; }
function CO(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function TO(e) { let t = e; for (; t != null;) {
    if (ge(t))
        return !0;
    t = t.parent;
} return !1; }
function MO(e, t, n, o) { let r = Jg(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        hu(s, r, n);
} }
function KP(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function JP(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var NO = "\u{1F170}\uFE0F", xa = !1;
function XP(e) { if (!xa)
    return; let { startLabel: t } = JC(e); performance.mark(t); }
function eL(e) { if (!xa)
    return; let { startLabel: t, labelName: n, endLabel: o } = JC(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function JC(e) { let t = `${NO}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var OC = !1;
function tL() { if (!OC && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    OC = !0, console.warn("Performance API is not supported on this platform");
    return;
} xa = !0; }
function nL() { xa = !1; }
function oL(e) { }
function rL(e) { return te({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(he, `ng:///${e.type.name}/\u0275fac.js`, e); }
function iL(e) { Td(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function sL(e) { Gv(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); Td(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function aL(e) { return te({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(he, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function cL(e) { return te({ usage: 1, kind: _O(e.target), type: e.type }).compileFactoryDeclaration(he, `ng:///${e.type.name}/\u0275fac.js`, e); }
function _O(e) { switch (e) {
    case go.Directive: return "directive";
    case go.Component: return "component";
    case go.Injectable: return "injectable";
    case go.Pipe: return "pipe";
    case go.NgModule: return "NgModule";
} }
function lL(e) { return te({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(he, `ng:///${e.type.name}/\u0275prov.js`, e); }
function uL(e) { return te({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(he, `ng:///${e.type.name}/\u0275inj.js`, e); }
function dL(e) { return te({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(he, `ng:///${e.type.name}/\u0275mod.js`, e); }
function fL(e) { return te({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(he, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var Rf = Symbol("NOT_SET"), XC = new Set, wO = Xe(Z({}, Fa), { kind: "afterRenderEffectPhase", consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: Rf, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== Rf && !Wr(this))
        return this.signal; try {
        for (let r of this.cleanup ?? XC)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = vo(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        Gr(this, n);
    } return (this.value === Rf || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), jf = class extends nr {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    onDestroyFns = null;
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get(Po), s), this.scheduler = r; for (let a of Vu) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(wO);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (zr(l), l.value), l.signal[et] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { if (this.onDestroyFns !== null)
        for (let t of this.onDestroyFns)
            t(); super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? XC)
                    n();
            }
            finally {
                Eo(t);
            } }
};
function pL(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return js; let n = t?.injector ?? I(Ce), o = n.get(Tt), r = n.get(Vs), i = n.get(pn, null, { optional: !0 }); r.impl ??= n.get(ju); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(vi, null, { optional: !0 }), c = new jf(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function hL(e) { return new Bf(Md(e) ? e : Gt(e)); }
var Bf = class {
    snapshot;
    constructor(t) { this.snapshot = t; }
    get state() { return this.snapshot(); }
    value = Gt(() => { if (this.state.status === "error")
        throw new wp(this.state.error); return this.state.value; });
    status = Gt(() => this.state.status);
    error = Gt(() => this.state.status === "error" ? this.state.error : void 0);
    isLoading = Gt(() => this.state.status === "loading" || this.state.status === "reloading");
    isValueDefined = Gt(() => this.state.status !== "error" && this.state.value !== void 0);
    hasValue() { return this.isValueDefined(); }
};
function gL(e, t) { let n = W(e), o = t.elementInjector || si(); return new At(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function mL(e) { let t = W(e); if (!t)
    return null; let n = new At(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function yL(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var vL = new S("", { providedIn: "platform", factory: () => null }), EL = new S("", { providedIn: "platform", factory: () => null }), IL = new S("", { providedIn: "platform", factory: () => null });
export { kM as ANIMATION_MODULE_TYPE, Pr as APP_BOOTSTRAP_LISTENER, ct as APP_ID, Sd as APP_INITIALIZER, bd as ApplicationInitStatus, QP as ApplicationModule, Oe as ApplicationRef, gg as Attribute, GD as COMPILER_OPTIONS, OM as CSP_NONCE, iN as CUSTOM_ELEMENTS_SCHEMA, Es as ChangeDetectionStrategy, uO as ChangeDetectorRef, WR as Compiler, eu as CompilerFactory, VR as Component, oa as ComponentFactory, kr as ComponentFactoryResolver, jy as ComponentRef, bP as ContentChild, SP as ContentChildren, YR as DEFAULT_CURRENCY_CODE, Ut as DOCUMENT, cn as DebugElement, tu as DebugEventListener, gr as DebugNode, xf as DefaultIterableDiffer, Po as DestroyRef, zD as Directive, mt as ENVIRONMENT_INITIALIZER, vr as ElementRef, SC as EmbeddedViewRef, yt as EnvironmentInjector, Mc as ErrorHandler, pT as EventEmitter, IP as HOST_TAG_NAME, Qh as Host, hC as HostAttributeToken, $R as HostBinding, zR as HostListener, cT as INJECTOR, zh as Inject, oM as Injectable, S as InjectionToken, Ce as Injector, BR as Input, GC as IterableDiffers, WC as KeyValueDiffers, If as LOCALE_ID, Pm as MAX_ANIMATION_TIMEOUT, qD as MissingTranslationStrategy, gs as ModuleWithComponentFactories, sN as NO_ERRORS_SCHEMA, GR as NgModule, Ev as NgModuleFactory, $n as NgModuleRef, U as NgZone, Gh as Optional, UR as Output, bc as OutputEmitterRef, RM as PLATFORM_ID, su as PLATFORM_INITIALIZER, wc as PendingTasks, jR as Pipe, BC as PlatformRef, yo as Query, qi as QueryList, vL as REQUEST, IL as REQUEST_CONTEXT, EL as RESPONSE_INIT, qw as Renderer2, ar as RendererFactory2, Ji as RendererStyleFlags2, By as Sanitizer, dn as SecurityContext, Wh as Self, Ui as SimpleChange, qh as SkipSelf, ZR as TRANSLATIONS, KR as TRANSLATIONS_FORMAT, rr as TemplateRef, Ab as Testability, Qv as TestabilityRegistry, Jn as TransferState, Yh as Type, nT as VERSION, tT as Version, RP as ViewChild, AP as ViewChildren, sa as ViewContainerRef, Re as ViewEncapsulation, Of as ViewRef, jm as afterEveryRender, Bu as afterNextRender, pL as afterRenderEffect, JR as asNativeElements, dT as assertInInjectionContext, mT as assertNotInReactiveContext, Kk as assertPlatform, KP as booleanAttribute, Gt as computed, NP as contentChild, _P as contentChildren, gL as createComponent, md as createEnvironmentInjector, Iv as createNgModule, $S as createNgModuleRef, Yk as createPlatform, Zk as createPlatformFactory, OP as destroyPlatform, vT as effect, FP as enableProdMode, _b as enableProfiling, ja as forwardRef, mr as getDebugNode, $P as getModuleFactory, zP as getNgModuleById, Oa as getPlatform, uT as importProvidersFrom, I as inject, CP as input, ev as inputBinding, LP as isDevMode, Md as isSignal, Do as isStandalone, Nd as isWritableSignal, DT as linkedSignal, tt as makeEnvironmentProviders, PM as makeStateKey, yL as mergeApplicationConfig, wP as model, JP as numberAttribute, DP as output, tv as outputBinding, qP as platformCore, Kv as provideAppInitializer, hT as provideBrowserGlobalErrorListeners, PP as provideCheckNoChangesConfig, lT as provideEnvironmentInitializer, jN as provideNgReflectAttributes, xP as providePlatformInitializer, UP as provideStabilityDebugging, kP as provideZoneChangeDetection, qR as provideZonelessChangeDetection, mL as reflectComponentType, G as resolveForwardRef, CT as resource, hL as resourceFromSnapshots, ai as runInInjectionContext, Yv as setTestabilityGetter, _c as signal, gS as twoWayBinding, IT as untracked, TP as viewChild, MP as viewChildren, xm as \u0275ANIMATIONS_DISABLED, _g as \u0275AcxChangeDetectionStrategy, wg as \u0275AcxViewEncapsulation, Vs as \u0275AfterRenderManager, HP as \u0275CLIENT_RENDER_MODE_FLAG, V as \u0275CONTAINER_HEADER_OFFSET, Tt as \u0275ChangeDetectionScheduler, oa as \u0275ComponentFactory, Nb as \u0275Console, Hr as \u0275DEFAULT_LOCALE_ID, Uv as \u0275DEFER_BLOCK_CONFIG, Ib as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, lt as \u0275DEHYDRATED_BLOCK_REGISTRY, Dd as \u0275DeferBlockBehavior, $ as \u0275DeferBlockState, Wk as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, Og as \u0275EVENT_REPLAY_QUEUE, Sc as \u0275EffectScheduler, Lk as \u0275Framework, Qg as \u0275HydrationStatus, xM as \u0275IMAGE_CONFIG, Sg as \u0275IMAGE_CONFIG_DEFAULTS, Xf as \u0275INJECTOR_SCOPE, EP as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, zt as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, LM as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, un as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, pu as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, Mr as \u0275JSACTION_BLOCK_ELEMENT_MAP, yu as \u0275JSACTION_EVENT_CONTRACT, Qi as \u0275LContext, Wn as \u0275LocaleDataIndex, mn as \u0275NG_COMP_DEF, Jr as \u0275NG_DIR_DEF, xt as \u0275NG_ELEMENT_ID, Ba as \u0275NG_INJ_DEF, Ua as \u0275NG_MOD_DEF, Xr as \u0275NG_PIPE_DEF, Kr as \u0275NG_PROV_DEF, Li as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, L as \u0275NO_CHANGE, Gn as \u0275NgModuleFactory, Tc as \u0275NoopNgZone, NO as \u0275PERFORMANCE_MARK_PREFIX, $k as \u0275PROVIDED_NG_ZONE, yT as \u0275PROVIDED_ZONELESS, $t as \u0275PendingTasksInternal, R as \u0275ProfilerEvent, Qa as \u0275R3Injector, Bi as \u0275ReflectionCapabilities, At as \u0275Render3ComponentFactory, ss as \u0275Render3ComponentRef, zn as \u0275Render3NgModuleRef, TT as \u0275ResourceImpl, w as \u0275RuntimeError, et as \u0275SIGNAL, zg as \u0275SSR_CONTENT_INTEGRITY_MARKER, Wv as \u0275TESTABILITY, qv as \u0275TESTABILITY_GETTER, Bv as \u0275TimerScheduler, Hs as \u0275TracingAction, pn as \u0275TracingService, bt as \u0275ViewRef, qr as \u0275XSS_SECURITY_URL, Cn as \u0275ZONELESS_ENABLED, gm as \u0275_sanitizeHtml, ks as \u0275_sanitizeUrl, tn as \u0275allLeavingAnimations, ro as \u0275allowSanitizationBypassAndThrow, ZP as \u0275annotateForHydration, oL as \u0275assertType, fN as \u0275bypassSanitizationTrustHtml, mN as \u0275bypassSanitizationTrustResourceUrl, hN as \u0275bypassSanitizationTrustScript, pN as \u0275bypassSanitizationTrustStyle, gN as \u0275bypassSanitizationTrustUrl, HS as \u0275clearResolutionOfComponentResourcesQueue, xD as \u0275compileComponent, Ef as \u0275compileDirective, kD as \u0275compileNgModule, OD as \u0275compileNgModuleDefs, Bk as \u0275compileNgModuleFactory, $D as \u0275compilePipe, za as \u0275convertToBitFlags, fT as \u0275createInjector, Jk as \u0275createOrReusePlatformInjector, GP as \u0275defaultIterableDiffers, WP as \u0275defaultKeyValueDiffers, Bn as \u0275depsTracker, qy as \u0275devModeEqual, nL as \u0275disableProfiling, tL as \u0275enableProfiling, MT as \u0275encapsulateResourceError, zd as \u0275findLocaleData, AD as \u0275flushModuleScopingQueueAsMuchAsPossible, Gf as \u0275formatRuntimeError, _R as \u0275generateStandaloneInDeclarationsError, Mb as \u0275getAsyncClassMetadataFn, mS as \u0275getClosestComponentName, W as \u0275getComponentDef, Vi as \u0275getDeferBlocks, CM as \u0275getDirectives, Ds as \u0275getDocument, MM as \u0275getHostElement, rT as \u0275getInjectableDef, ve as \u0275getLContext, iA as \u0275getLocaleCurrencyCode, FE as \u0275getLocalePluralCase, ET as \u0275getOutputDestroyRef, cm as \u0275getSanitizationBypassType, wb as \u0275getTransferState, cN as \u0275getUnknownElementStrictMode, uN as \u0275getUnknownPropertyStrictMode, Ee as \u0275global, nv as \u0275inferTagNameFromDefinition, dO as \u0275injectChangeDetectorRef, YP as \u0275internalCreateApplication, zk as \u0275internalProvideZoneChangeDetection, Jv as \u0275isBoundToModule, FS as \u0275isComponentDefPendingResolution, aT as \u0275isEnvironmentProviders, iT as \u0275isInjectable, qt as \u0275isNgModule, wd as \u0275isPromise, Zv as \u0275isSubscribable, Z_ as \u0275isViewDirty, K_ as \u0275markForRefresh, Ze as \u0275noSideEffects, yf as \u0275patchComponentDefWithScope, Q as \u0275performanceMarkFeature, ua as \u0275promiseWithResolvers, Ea as \u0275provideZonelessChangeDetectionInternal, Sb as \u0275publishExternalGlobalUtil, qM as \u0275readHydrationInfo, rA as \u0275registerLocaleData, ot as \u0275renderDeferBlockState, bR as \u0275resetCompiledComponents, YM as \u0275resetIncrementalHydrationEnabledWarnedForTests, MR as \u0275resetJitOptions, gv as \u0275resolveComponentResources, VS as \u0275restoreComponentResolutionQueue, US as \u0275setAllowDuplicateNgModuleIdsForTest, NT as \u0275setAlternateWeakRefImpl, _D as \u0275setClassDebugInfo, Td as \u0275setClassMetadata, Gv as \u0275setClassMetadataAsync, eT as \u0275setCurrentInjector, bM as \u0275setDocument, sT as \u0275setInjectorProfilerContext, BE as \u0275setLocaleId, aN as \u0275setUnknownElementStrictMode, lN as \u0275setUnknownPropertyStrictMode, XP as \u0275startMeasuring, eL as \u0275stopMeasuring, Ao as \u0275store, Qr as \u0275stringify, vf as \u0275transitiveScopesFor, da as \u0275triggerResourceLoading, oT as \u0275truncateMiddle, sA as \u0275unregisterLocaleData, ut as \u0275unwrapSafeValue, gT as \u0275unwrapWritableSignal, VP as \u0275withDomHydration, Xk as \u0275withEventReplay, jP as \u0275withI18nSupport, BP as \u0275withIncrementalHydration, Sv as \u0275\u0275ControlFeature, eD as \u0275\u0275ExternalStylesFeature, go as \u0275\u0275FactoryTarget, bv as \u0275\u0275HostDirectivesFeature, vd as \u0275\u0275InheritDefinitionFeature, Kh as \u0275\u0275NgOnChangesFeature, XI as \u0275\u0275ProvidersFeature, km as \u0275\u0275advance, zo as \u0275\u0275animateEnter, Go as \u0275\u0275animateEnterListener, Wo as \u0275\u0275animateLeave, ls as \u0275\u0275animateLeaveListener, kd as \u0275\u0275ariaProperty, ZI as \u0275\u0275arrowFunction, VI as \u0275\u0275attachSourceLocations, Od as \u0275\u0275attribute, gI as \u0275\u0275classMap, of as \u0275\u0275classProp, wE as \u0275\u0275componentInstance, bE as \u0275\u0275conditional, fa as \u0275\u0275conditionalBranchCreate, SE as \u0275\u0275conditionalCreate, Jd as \u0275\u0275contentQuery, ef as \u0275\u0275contentQuerySignal, Ky as \u0275\u0275control, Yy as \u0275\u0275controlCreate, mf as \u0275\u0275declareLet, rE as \u0275\u0275defer, zv as \u0275\u0275deferEnableTimerScheduling, cE as \u0275\u0275deferHydrateNever, IE as \u0275\u0275deferHydrateOnHover, dE as \u0275\u0275deferHydrateOnIdle, hE as \u0275\u0275deferHydrateOnImmediate, TE as \u0275\u0275deferHydrateOnInteraction, yE as \u0275\u0275deferHydrateOnTimer, _E as \u0275\u0275deferHydrateOnViewport, aE as \u0275\u0275deferHydrateWhen, vE as \u0275\u0275deferOnHover, lE as \u0275\u0275deferOnIdle, fE as \u0275\u0275deferOnImmediate, DE as \u0275\u0275deferOnInteraction, gE as \u0275\u0275deferOnTimer, ME as \u0275\u0275deferOnViewport, EE as \u0275\u0275deferPrefetchOnHover, uE as \u0275\u0275deferPrefetchOnIdle, pE as \u0275\u0275deferPrefetchOnImmediate, CE as \u0275\u0275deferPrefetchOnInteraction, mE as \u0275\u0275deferPrefetchOnTimer, NE as \u0275\u0275deferPrefetchOnViewport, sE as \u0275\u0275deferPrefetchWhen, iE as \u0275\u0275deferWhen, Cv as \u0275\u0275defineComponent, Mv as \u0275\u0275defineDirective, B as \u0275\u0275defineInjectable, Io as \u0275\u0275defineInjector, yd as \u0275\u0275defineNgModule, Nv as \u0275\u0275definePipe, uo as \u0275\u0275directiveInject, rc as \u0275\u0275disableBindings, Ld as \u0275\u0275domElement, jd as \u0275\u0275domElementContainer, Vd as \u0275\u0275domElementContainerEnd, ya as \u0275\u0275domElementContainerStart, ga as \u0275\u0275domElementEnd, ha as \u0275\u0275domElementStart, Zd as \u0275\u0275domListener, Ud as \u0275\u0275domProperty, Id as \u0275\u0275domTemplate, Pd as \u0275\u0275element, Hd as \u0275\u0275elementContainer, Fr as \u0275\u0275elementContainerEnd, ma as \u0275\u0275elementContainerStart, pa as \u0275\u0275elementEnd, fr as \u0275\u0275elementStart, oc as \u0275\u0275enableBindings, ND as \u0275\u0275getComponentDepsFactory, LE as \u0275\u0275getCurrentView, pg as \u0275\u0275getInheritedFactory, wD as \u0275\u0275getReplaceMetadataURL, XE as \u0275\u0275i18n, tI as \u0275\u0275i18nApply, eI as \u0275\u0275i18nAttributes, Wd as \u0275\u0275i18nEnd, qd as \u0275\u0275i18nExp, nI as \u0275\u0275i18nPostprocess, Gd as \u0275\u0275i18nStart, Pe as \u0275\u0275inject, ys as \u0275\u0275injectAttribute, jI as \u0275\u0275interpolate, BI as \u0275\u0275interpolate1, UI as \u0275\u0275interpolate2, $I as \u0275\u0275interpolate3, zI as \u0275\u0275interpolate4, GI as \u0275\u0275interpolate5, WI as \u0275\u0275interpolate6, qI as \u0275\u0275interpolate7, QI as \u0275\u0275interpolate8, YI as \u0275\u0275interpolateV, Uy as \u0275\u0275invalidFactory, ti as \u0275\u0275invalidFactoryDep, Qd as \u0275\u0275listener, aI as \u0275\u0275loadQuery, Ic as \u0275\u0275namespaceHTML, Ec as \u0275\u0275namespaceMathML, vc as \u0275\u0275namespaceSVG, oI as \u0275\u0275nextContext, iL as \u0275\u0275ngDeclareClassMetadata, sL as \u0275\u0275ngDeclareClassMetadataAsync, aL as \u0275\u0275ngDeclareComponent, rL as \u0275\u0275ngDeclareDirective, cL as \u0275\u0275ngDeclareFactory, lL as \u0275\u0275ngDeclareInjectable, uL as \u0275\u0275ngDeclareInjector, dL as \u0275\u0275ngDeclareNgModule, fL as \u0275\u0275ngDeclarePipe, vD as \u0275\u0275pipe, ED as \u0275\u0275pipeBind1, ID as \u0275\u0275pipeBind2, DD as \u0275\u0275pipeBind3, CD as \u0275\u0275pipeBind4, TD as \u0275\u0275pipeBindV, iI as \u0275\u0275projection, rI as \u0275\u0275projectionDef, xd as \u0275\u0275property, oD as \u0275\u0275pureFunction0, rD as \u0275\u0275pureFunction1, iD as \u0275\u0275pureFunction2, sD as \u0275\u0275pureFunction3, aD as \u0275\u0275pureFunction4, cD as \u0275\u0275pureFunction5, lD as \u0275\u0275pureFunction6, uD as \u0275\u0275pureFunction7, dD as \u0275\u0275pureFunction8, fD as \u0275\u0275pureFunctionV, cI as \u0275\u0275queryAdvance, sI as \u0275\u0275queryRefresh, HI as \u0275\u0275readContextLet, lI as \u0275\u0275reference, hd as \u0275\u0275registerNgModuleType, OE as \u0275\u0275repeater, kE as \u0275\u0275repeaterCreate, RE as \u0275\u0275repeaterTrackByIdentity, AE as \u0275\u0275repeaterTrackByIndex, SD as \u0275\u0275replaceMetadata, ac as \u0275\u0275resetView, Au as \u0275\u0275resolveBody, Sm as \u0275\u0275resolveDocument, wm as \u0275\u0275resolveWindow, sc as \u0275\u0275restoreView, Im as \u0275\u0275sanitizeHtml, Su as \u0275\u0275sanitizeResourceUrl, Cm as \u0275\u0275sanitizeScript, Dm as \u0275\u0275sanitizeStyle, wu as \u0275\u0275sanitizeUrl, Nm as \u0275\u0275sanitizeUrlOrResourceUrl, tD as \u0275\u0275setComponentScope, nD as \u0275\u0275setNgModuleScope, FI as \u0275\u0275storeLet, hI as \u0275\u0275styleMap, nf as \u0275\u0275styleProp, Yd as \u0275\u0275syntheticHostListener, $d as \u0275\u0275syntheticHostProperty, Ed as \u0275\u0275template, MD as \u0275\u0275templateRefExtractor, TI as \u0275\u0275text, rf as \u0275\u0275textInterpolate, va as \u0275\u0275textInterpolate1, sf as \u0275\u0275textInterpolate2, af as \u0275\u0275textInterpolate3, cf as \u0275\u0275textInterpolate4, lf as \u0275\u0275textInterpolate5, uf as \u0275\u0275textInterpolate6, df as \u0275\u0275textInterpolate7, ff as \u0275\u0275textInterpolate8, pf as \u0275\u0275textInterpolateV, Tm as \u0275\u0275trustConstantHtml, Mm as \u0275\u0275trustConstantResourceUrl, PI as \u0275\u0275twoWayBindingSet, gf as \u0275\u0275twoWayListener, hf as \u0275\u0275twoWayProperty, bu as \u0275\u0275validateAttribute, Xd as \u0275\u0275viewQuery, tf as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/_attribute-chunk.mjs:
@angular/core/fesm2022/_debug_node-chunk.mjs:
@angular/core/fesm2022/primitives-event-dispatch.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v21.2.13
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
