import { a as M, b as x, e as I } from "@nf-internal/chunk-XTCCDCJT";
import * as b from "@angular/core";
import { InjectionToken as wt, debounced as mr, computed as K, \u0275chain as gr, resource as yr, \u0275isPromise as pt, linkedSignal as St, inject as N, \u0275RuntimeError as Le, untracked as T, signal as Rt, CSP_NONCE as pr, input as Tt, Renderer2 as br, DestroyRef as vr, Injector as Dt, ElementRef as Nr, afterRenderEffect as Mr, effect as Ct, makeEnvironmentProviders as Er, declareExperimentalWebMcpTool as wr } from "@angular/core";
import { \u0275FORM_CONTROL_INTEGRATION as At, Validators as It, \u0275setNativeDomProperty as Ze, NG_VALIDATORS as Sr, \u0275isNativeFormElement as Rr, \u0275isTextualFormElement as Tr, NG_VALUE_ACCESSOR as Dr, \u0275selectValueAccessor as Cr, \u0275elementAcceptsMinMax as Ar, NgControl as Ir } from "@angular/forms";
import { untracked as c, \u0275RuntimeError as E, computed as u, \u0275isInParamsFunction as Kt, \u0275setInParamsFunction as et, runInInjectionContext as z, Injector as at, linkedSignal as X, signal as W, APP_ID as jt, effect as xt, InjectionToken as Bt, inject as tt } from "@angular/core";
import { AbstractControl as Ut, FormGroup as hn, FormArray as fn } from "@angular/forms";
import { SIGNAL as rt } from "@angular/core/primitives/signals";
var Re = Symbol("FIELD_TREE"), ce = 0;
function Ht() { return ce; }
function C(t, e) { return (...r) => { try {
    return ce = e, t(...r);
}
finally {
    ce = 0;
} }; }
function Gt(t) { return !t; }
function nt(t) { return t; }
function R(t) { return Array.isArray(t); }
function Z(t) { return (typeof t == "object" || typeof t == "function") && t != null; }
var A = Symbol(), ie = Symbol(), U = class {
    predicates;
    fns = [];
    constructor(e) { this.predicates = e; }
    push(e) { this.fns.push(it(this.predicates, e)); }
    mergeIn(e) { let r = this.predicates ? e.fns.map(n => it(this.predicates, n)) : e.fns; this.fns.push(...r); }
    hasRules() { return this.fns.length > 0; }
}, Q = class extends U {
    get defaultValue() { return !1; }
    compute(e) { return this.fns.some(r => { let n = r(e); return n && n !== ie; }); }
}, _ = class t extends U {
    ignore;
    static ignoreNull(e) { return new t(e, r => r === null); }
    constructor(e, r) { super(e), this.ignore = r; }
    get defaultValue() { return []; }
    compute(e) { return this.fns.reduce((r, n) => { let i = n(e); return i === void 0 || i === ie ? r : R(i) ? [...r, ...this.ignore ? i.filter(s => !this.ignore(s)) : i] : this.ignore && this.ignore(i) ? r : [...r, i]; }, []); }
}, he = class extends _ {
    constructor(e) { super(e, void 0); }
}, fe = class extends U {
    key;
    get defaultValue() { return this.key.reducer.getInitial(); }
    constructor(e, r) { super(e), this.key = r; }
    compute(e) { if (this.fns.length === 0)
        return this.key.reducer.getInitial(); let r = this.key.reducer.getInitial(); for (let n = 0; n < this.fns.length; n++) {
        let i = this.fns[n](e);
        i !== ie && (r = this.key.reducer.reduce(r, i));
    } return r; }
};
function it(t, e) { return t.length === 0 ? e : r => { for (let n of t) {
    let i = r.stateOf(n.path), s = c(i.structure.pathKeys).length - n.depth;
    for (let o = 0; o < s; o++)
        i = i.structure.parent;
    if (!n.fn(i.context))
        return ie;
} return e(r); }; }
var V = class {
    predicates;
    hidden;
    disabledReasons;
    readonly;
    syncErrors;
    syncTreeErrors;
    asyncErrors;
    metadata = new Map;
    constructor(e) { this.predicates = e, this.hidden = new Q(e), this.disabledReasons = new he(e), this.readonly = new Q(e), this.syncErrors = _.ignoreNull(e), this.syncTreeErrors = _.ignoreNull(e), this.asyncErrors = _.ignoreNull(e); }
    hasAnyLogic() { return this.hidden.hasRules() || this.disabledReasons.hasRules() || this.readonly.hasRules() || this.syncErrors.hasRules() || this.syncTreeErrors.hasRules() || this.asyncErrors.hasRules() || this.metadata.size > 0; }
    hasMetadata(e) { return this.metadata.has(e); }
    hasMetadataKeys() { return this.metadata.size > 0; }
    getMetadataKeys() { return this.metadata.keys(); }
    getMetadata(e) { return this.metadata.has(e) || this.metadata.set(e, new fe(this.predicates, e)), this.metadata.get(e); }
    mergeIn(e) { this.hidden.mergeIn(e.hidden), this.disabledReasons.mergeIn(e.disabledReasons), this.readonly.mergeIn(e.readonly), this.syncErrors.mergeIn(e.syncErrors), this.syncTreeErrors.mergeIn(e.syncTreeErrors), this.asyncErrors.mergeIn(e.asyncErrors); for (let r of e.getMetadataKeys()) {
        let n = e.metadata.get(r);
        this.getMetadata(r).mergeIn(n);
    } }
}, J = class {
    depth;
    constructor(e) { this.depth = e; }
    build() { return new ee(this, [], 0); }
}, L = class t extends J {
    constructor(e) { super(e); }
    current;
    all = [];
    addHiddenRule(e) { this.getCurrent().addHiddenRule(e); }
    addDisabledReasonRule(e) { this.getCurrent().addDisabledReasonRule(e); }
    addReadonlyRule(e) { this.getCurrent().addReadonlyRule(e); }
    addSyncErrorRule(e) { this.getCurrent().addSyncErrorRule(e); }
    addSyncTreeErrorRule(e) { this.getCurrent().addSyncTreeErrorRule(e); }
    addAsyncErrorRule(e) { this.getCurrent().addAsyncErrorRule(e); }
    addMetadataRule(e, r) { this.getCurrent().addMetadataRule(e, r); }
    getChild(e) { if (e === A) {
        let r = this.getCurrent().children;
        r.size > (r.has(A) ? 1 : 0) && (this.current = void 0);
    } return this.getCurrent().getChild(e); }
    hasLogic(e) { return this === e ? !0 : this.all.some(({ builder: r }) => r.hasLogic(e)); }
    hasRules() { return this.all.length > 0; }
    anyChildHasLogic() { return this.all.some(({ builder: e }) => e.anyChildHasLogic()); }
    mergeIn(e, r) { r ? this.all.push({ builder: e, predicate: { fn: C(r.fn, this.depth), path: r.path } }) : this.all.push({ builder: e }), this.current = void 0; }
    getCurrent() { return this.current === void 0 && (this.current = new H(this.depth), this.all.push({ builder: this.current })), this.current; }
    static newRoot() { return new t(0); }
}, H = class extends J {
    logic = new V([]);
    children = new Map;
    constructor(e) { super(e); }
    addHiddenRule(e) { this.logic.hidden.push(C(e, this.depth)); }
    addDisabledReasonRule(e) { this.logic.disabledReasons.push(C(e, this.depth)); }
    addReadonlyRule(e) { this.logic.readonly.push(C(e, this.depth)); }
    addSyncErrorRule(e) { this.logic.syncErrors.push(C(e, this.depth)); }
    addSyncTreeErrorRule(e) { this.logic.syncTreeErrors.push(C(e, this.depth)); }
    addAsyncErrorRule(e) { this.logic.asyncErrors.push(C(e, this.depth)); }
    addMetadataRule(e, r) { this.logic.getMetadata(e).push(C(r, this.depth)); }
    getChild(e) { return this.children.has(e) || this.children.set(e, new L(this.depth + 1)), this.children.get(e); }
    hasLogic(e) { return this === e; }
    hasRules() { return this.logic.hasAnyLogic() || this.children.size > 0; }
    anyChildHasLogic() { for (let e of this.children.values())
        if (e.hasRules())
            return !0; return !1; }
}, ee = class t {
    builder;
    predicates;
    depth;
    logic;
    constructor(e, r, n) { this.builder = e, this.predicates = r, this.depth = n, this.logic = e ? $t(e, r, n) : new V([]); }
    getChild(e) { let r = this.builder ? dt(this.builder, e) : []; if (r.length === 0)
        return new t(void 0, [], this.depth + 1); if (r.length === 1) {
        let { builder: n, predicates: i } = r[0];
        return new t(n, [...this.predicates, ...i.map(s => ge(s, this.depth))], this.depth + 1);
    }
    else {
        let n = r.map(({ builder: i, predicates: s }) => new t(i, [...this.predicates, ...s.map(o => ge(o, this.depth))], this.depth + 1));
        return new me(n);
    } }
    hasLogic(e) { return this.builder ? this.builder.hasLogic(e) : !1; }
    hasRules() { return this.builder ? this.builder.hasRules() : !1; }
    anyChildHasLogic() { return this.builder ? this.builder.anyChildHasLogic() : !1; }
}, me = class t {
    all;
    logic;
    constructor(e) { this.all = e, this.logic = new V([]); for (let r of e)
        this.logic.mergeIn(r.logic); }
    getChild(e) { return new t(this.all.flatMap(r => r.getChild(e))); }
    hasLogic(e) { return this.all.some(r => r.hasLogic(e)); }
    hasRules() { return this.all.some(e => e.hasRules()); }
    anyChildHasLogic() { return this.all.some(e => e.anyChildHasLogic()); }
};
function dt(t, e) { if (t instanceof L)
    return t.all.flatMap(({ builder: r, predicate: n }) => { let i = dt(r, e); return n ? i.map(({ builder: s, predicates: o }) => ({ builder: s, predicates: [...o, n] })) : i; }); if (t instanceof H)
    return [...e !== A && t.children.has(A) ? [{ builder: t.getChild(A), predicates: [] }] : [], ...t.children.has(e) ? [{ builder: t.getChild(e), predicates: [] }] : []]; throw new E(1909, !1); }
function $t(t, e, r) { let n = new V(e); if (t instanceof L) {
    let i = t.all.map(({ builder: s, predicate: o }) => new ee(s, o ? [...e, ge(o, r)] : e, r));
    for (let s of i)
        n.mergeIn(s.logic);
}
else if (t instanceof H)
    n.mergeIn(t.logic);
else
    throw new E(1909, !1); return n; }
function ge(t, e) { return x(M({}, t), { depth: e }); }
var ut = Symbol("PATH"), g = class t {
    keys;
    parent;
    keyInParent;
    root;
    children = new Map;
    fieldPathProxy = new Proxy(this, qt);
    logicBuilder;
    constructor(e, r, n, i) { this.keys = e, this.parent = n, this.keyInParent = i, this.root = r ?? this, n || (this.logicBuilder = L.newRoot()); }
    get builder() { return this.logicBuilder ? this.logicBuilder : this.parent.builder.getChild(this.keyInParent); }
    getChild(e) { return this.children.has(e) || this.children.set(e, new t([...this.keys, e], this.root, this, e)), this.children.get(e); }
    mergeIn(e, r) { let n = e.compile(); this.builder.mergeIn(n.builder, r); }
    static unwrapFieldPath(e) { return e[ut]; }
    static newRoot() { return new t([], void 0, void 0, void 0); }
}, qt = { get(t, e) { return e === ut ? t : t.getChild(e).fieldPathProxy; } }, Y, B = new Map, P = class t {
    schemaFn;
    constructor(e) { this.schemaFn = e; }
    compile() { if (B.has(this))
        return B.get(this); let e = g.newRoot(); B.set(this, e); let r = Y; try {
        Y = e, this.schemaFn(e.fieldPathProxy);
    }
    finally {
        Y = r;
    } return e; }
    static create(e) { return e instanceof t ? e : new t(e); }
    static rootCompile(e) { try {
        return B.clear(), e === void 0 ? g.newRoot() : e instanceof t ? e.compile() : new t(e).compile();
    }
    finally {
        B.clear();
    } }
};
function zt(t) { return t instanceof P || typeof t == "function"; }
function w(t) { if (Y !== g.unwrapFieldPath(t).root)
    throw new E(1908, !1); }
function h(t, e, r) { return w(t), g.unwrapFieldPath(t).builder.addMetadataRule(e, r), e; }
var S = { list() { return { reduce: (t, e) => e === void 0 ? t : [...t, e], getInitial: () => [] }; }, min() { return { reduce: (t, e) => t === void 0 || e === void 0 ? t ?? e : e < t ? e : t, getInitial: () => { } }; }, max() { return { reduce: (t, e) => t === void 0 || e === void 0 ? t ?? e : e > t ? e : t, getInitial: () => { } }; }, or() { return { reduce: (t, e) => t || e, getInitial: () => !1 }; }, and() { return { reduce: (t, e) => t && e, getInitial: () => !0 }; }, override: Wt };
function Wt(t) { return { reduce: (e, r) => r, getInitial: () => t?.() }; }
var se = Symbol("IS_ASYNC_VALIDATION_RESOURCE"), G = class {
    reducer;
    create;
    brand;
    [se];
    constructor(e, r) { this.reducer = e, this.create = r; }
};
function f(t) { return new G(t ?? S.override()); }
function lt(t, e) { return new G(e ?? S.override(), t); }
function Te() { return f(); }
var De = f(S.or()), oe = Te(), Ce = f(S.max()), Ae = f(S.max()), ae = Te(), Ie = f(S.min()), Pe = f(S.min()), ke = f(S.max()), Fe = f(S.min()), Oe = f(S.list());
function v(t, e) { if (t === e)
    return !0; if (!t || !e || t.length !== e.length)
    return !1; for (let r = 0; r < t.length; r++)
    if (!Object.is(t[r], e[r]))
        return !1; return !0; }
function Yt(t) { return t.errors().length > 0 ? "invalid" : t.pending() ? "unknown" : "valid"; }
var ye = class {
    node;
    constructor(e) { this.node = e; }
    rawSyncTreeErrors = u(() => this.shouldSkipValidation() ? [] : [...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context), ...this.node.structure.parent?.validationState.rawSyncTreeErrors() ?? []], { equal: v });
    syncErrors = u(() => this.shouldSkipValidation() ? [] : [...this.node.logicNode.logic.syncErrors.compute(this.node.context), ...this.syncTreeErrors(), ...Xt(this.node.submitState.submissionErrors())], { equal: v });
    syncValid = u(() => this.shouldSkipValidation() ? !0 : this.node.structure.reduceChildren(this.syncErrors().length === 0, (e, r) => r && e.validationState.syncValid(), Gt));
    syncTreeErrors = u(() => this.rawSyncTreeErrors().filter(e => e.fieldTree === this.node.fieldTree), { equal: v });
    rawAsyncErrors = u(() => this.shouldSkipValidation() ? [] : [...this.node.logicNode.logic.asyncErrors.compute(this.node.context), ...this.node.structure.parent?.validationState.rawAsyncErrors() ?? []], { equal: v });
    asyncErrors = u(() => this.shouldSkipValidation() ? [] : this.rawAsyncErrors().filter(e => e === "pending" || e.fieldTree === this.node.fieldTree), { equal: v });
    parseErrors = u(() => this.node.formFieldBindings().flatMap(e => e.parseErrors()), { equal: v });
    errors = u(() => [...this.parseErrors(), ...this.syncErrors(), ...this.asyncErrors().filter(e => e !== "pending")], { equal: v });
    errorSummary = u(() => { let e = this.node.structure.reduceChildren(this.errors(), (r, n) => [...n, ...r.errorSummary()]); return (typeof ngServerMode > "u" || !ngServerMode) && c(() => e.sort(Zt)), e; }, { equal: v });
    pending = u(() => this.node.structure.reduceChildren(this.asyncErrors().includes("pending"), (e, r) => r || e.validationState.pending()));
    status = u(() => { if (this.shouldSkipValidation())
        return "valid"; let e = Yt(this); return this.node.structure.reduceChildren(e, (r, n) => n === "invalid" || r.validationState.status() === "invalid" ? "invalid" : n === "unknown" || r.validationState.status() === "unknown" ? "unknown" : "valid", r => r === "invalid"); });
    valid = u(() => this.status() === "valid");
    invalid = u(() => this.status() === "invalid");
    shouldSkipValidation = u(() => this.node.hidden() || this.node.disabled() || this.node.readonly() || this.node.structure.isOrphaned());
};
function Xt(t) { return t === void 0 ? [] : R(t) ? t : [t]; }
function k(t, e) { if (R(t))
    for (let r of t)
        r.fieldTree ??= e;
else
    t && (t.fieldTree ??= e); return t; }
function st(t) { return t.formField ? t.formField.element : t.fieldTree().formFieldBindings().reduce((e, r) => !e || !r.element ? e ?? r.element : e.compareDocumentPosition(r.element) & Node.DOCUMENT_POSITION_PRECEDING ? r.element : e, void 0); }
function Zt(t, e) { let r = st(t), n = st(e); return r === n ? 0 : r === void 0 || n === void 0 ? r === void 0 ? 1 : -1 : r.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1; }
var te = f(), pe = class {
    node;
    cache = new WeakMap;
    constructor(e) { this.node = e, this.fieldTreeOf = this.fieldTreeOf.bind(this), this.stateOf = this.stateOf.bind(this); }
    resolve(e) { if (!this.cache.has(e)) {
        let r = u(() => { let n = g.unwrapFieldPath(e), i = this.node, s = Ht(); for (; s > 0 || !i.structure.logic.hasLogic(n.root.builder);)
            if (s--, i = i.structure.parent, i === void 0)
                throw new E(1900, !1); for (let o of n.keys)
            if (i = i.structure.getChild(o), i === void 0)
                throw new E(1901, !1); return i.fieldTree; });
        this.cache.set(e, r);
    } return this.cache.get(e)(); }
    get fieldTree() { return this.node.fieldProxy; }
    get state() { return this.node; }
    get value() { return this.node.structure.value; }
    get key() { return this.node.structure.keyInParent; }
    get pathKeys() { return this.node.structure.pathKeys; }
    index = u(() => { let e = this.key(); if (!R(c(this.node.structure.parent.value)))
        throw new E(1906, !1); return Number(e); });
    fieldTreeOf(e) { return this.resolve(e); }
    stateOf(e) { return this.resolve(e)(); }
    valueOf = e => { let r = this.resolve(e)().value(); if (r instanceof Ut)
        throw new E(1907, !1); return r; };
}, be = class {
    node;
    metadata = new Map;
    constructor(e) { this.node = e; }
    runMetadataCreateLifecycle() { if (!this.node.logicNode.logic.hasMetadataKeys())
        return; let e = Kt(); e && et(!1); try {
        c(() => z(this.node.structure.injector, () => { for (let r of this.node.logicNode.logic.getMetadataKeys())
            if (r.create) {
                let n = this.node.logicNode.logic.getMetadata(r), i = r.create(this.node, u(() => n.compute(this.node.context)));
                this.metadata.set(r, i);
            } }));
    }
    finally {
        e && et(!0);
    } }
    get(e) { if (this.has(e) && !this.metadata.has(e)) {
        if (e.create)
            throw new E(1912, !1);
        let r = this.node.logicNode.logic.getMetadata(e);
        this.metadata.set(e, u(() => r.compute(this.node.context)));
    } return this.metadata.get(e); }
    has(e) { return this.node.logicNode.logic.hasMetadata(e); }
}, Qt = { get(t, e, r) { if (e === Re)
        return !0; let n = t(), i = n.structure.getChild(e); if (i !== void 0)
        return i.fieldTree; let s = c(n.value); if (R(s)) {
        if (e === "length")
            return n.value().length;
        if (e === Symbol.iterator)
            return () => (n.value(), Array.prototype[Symbol.iterator].apply(n.fieldTree));
    } if (Z(s) && e === Symbol.iterator)
        return function* () { for (let o in r)
            yield [o, r[o]]; }; }, getOwnPropertyDescriptor(t, e) { let r = c(t().value), n = Reflect.getOwnPropertyDescriptor(r, e); return n && !n.configurable && (n.configurable = !0), n; }, ownKeys(t) { let e = c(t().value); return typeof e == "object" && e !== null ? Reflect.ownKeys(e) : []; } };
function Jt(t, e) { let r = u(() => t()[e()]); return r[rt] = t[rt], r.set = n => { Object.is(c(r), n) || t.update(i => er(i, n, e())); }, r.update = n => { r.set(n(c(r))); }, r.asReadonly = () => r, r; }
function er(t, e, r) { if (R(t)) {
    let n = [...t];
    return n[r] = e, n;
}
else
    return x(M({}, t), { [r]: e }); }
var O = Symbol(""), ct = u(() => !1), re = class {
    logic;
    node;
    createChildNode;
    identitySymbol = Symbol();
    _injector = void 0;
    _anyChildHasLogic;
    get injector() { return this._injector ??= at.create({ providers: [], parent: this.fieldManager.injector }), this._injector; }
    constructor(e, r, n) { this.logic = e, this.node = r, this.createChildNode = n; }
    children() { this.ensureChildrenMap(); let e = this.childrenMap(); return e === void 0 ? [] : Array.from(e.byPropertyKey.values()).map(r => c(r.reader)); }
    materializedChildren() { let e = this.childrenMap(); return e === void 0 ? [] : Array.from(e.byPropertyKey.values()).map(r => r.node); }
    _areChildrenMaterialized() { return c(this.childrenMap) !== void 0; }
    ensureChildrenMap() { this._areChildrenMaterialized() || c(() => { this.childrenMap.update(e => this.computeChildrenMap(this.value(), e, !0)); }); }
    getChild(e) { this.ensureChildrenMap(); let r = e.toString(), n = c(this.childrenMap)?.byPropertyKey.get(r)?.reader; return n || (n = this.createReader(r)), n(); }
    reduceChildren(e, r, n) { let i = this.childrenMap(); if (!i)
        return e; let s = e; for (let o of i.byPropertyKey.values()) {
        if (n?.(s))
            break;
        s = r(c(o.reader), s);
    } return s; }
    destroy() { this.injector.destroy(); }
    createKeyOrOrphanSignals(e, r, n) { if (e === "root")
        return { keyInParent: ht, isOrphaned: ct }; let i = this.parent, s = n, o = u(() => { if (i.structure.isOrphaned())
        return O; let l = i.structure.childrenMap(); if (!l)
        return O; let m = l.byPropertyKey.get(s); if (m && m.node === this.node)
        return s; if (r === void 0)
        return O; for (let [j, le] of l.byPropertyKey)
        if (le.node === this.node)
            return s = j; return O; }), a = u(() => o() === O); return { keyInParent: u(() => { let l = o(); if (l === O)
            throw r === void 0 ? new E(-1902, !1) : new E(1904, !1); return l; }), isOrphaned: a }; }
    createChildrenMap() { return X({ source: this.value, computation: (e, r) => this.computeChildrenMap(e, r?.value, !1) }); }
    computeChildrenMap(e, r, n) { if (!Z(e) || !n && r === void 0 && !(this._anyChildHasLogic ??= this.logic.anyChildHasLogic()))
        return; r ??= { byPropertyKey: new Map }; let i, s = R(e); r !== void 0 && (s ? i = rr(r, e, this.identitySymbol) : i = nr(r, e)); for (let o of Object.keys(e)) {
        let a, d = e[o];
        if (d === void 0) {
            r.byPropertyKey.has(o) && (i ??= M({}, r), i.byPropertyKey.delete(o));
            continue;
        }
        s && Z(d) && !R(d) && (a = d[this.identitySymbol] ??= Symbol(""));
        let l;
        a && (r.byTrackingKey?.has(a) || (i ??= M({}, r), i.byTrackingKey ??= new Map, i.byTrackingKey.set(a, this.createChildNode(o, a, s))), l = (i ?? r).byTrackingKey.get(a));
        let m = r.byPropertyKey.get(o);
        m === void 0 ? (i ??= M({}, r), i.byPropertyKey.set(o, { reader: this.createReader(o), node: l ?? this.createChildNode(o, a, s) })) : l && l !== m.node && (i ??= M({}, r), m.node = l);
    } return i ?? r; }
    createReader(e) { return u(() => this.childrenMap()?.byPropertyKey.get(e)?.node); }
}, ve = class extends re {
    fieldManager;
    value;
    get parent() { }
    get root() { return this.node; }
    get pathKeys() { return tr; }
    get keyInParent() { return ht; }
    isOrphaned = ct;
    childrenMap;
    constructor(e, r, n, i, s) { super(r, e, s), this.fieldManager = n, this.value = i, this.childrenMap = this.createChildrenMap(); }
}, Ne = class extends re {
    logic;
    parent;
    root;
    pathKeys;
    keyInParent;
    value;
    childrenMap;
    isOrphaned;
    get fieldManager() { return this.root.structure.fieldManager; }
    constructor(e, r, n, i, s, o) { super(r, e, o), this.logic = r, this.parent = n, this.root = this.parent.structure.root; let a = this.createKeyOrOrphanSignals("child", i, s); this.isOrphaned = a.isOrphaned, this.keyInParent = a.keyInParent, this.pathKeys = u(() => [...n.structure.pathKeys(), this.keyInParent()]), this.value = Jt(this.parent.structure.value, this.keyInParent), this.childrenMap = this.createChildrenMap(), this.fieldManager.structures.add(this); }
};
var tr = u(() => []), ht = u(() => { throw new E(1905, !1); });
function rr(t, e, r) { let n, i = new Set(t.byPropertyKey.keys()), s = t.byTrackingKey && new Set(t.byTrackingKey.keys()); for (let o = 0; o < e.length; o++) {
    let a = e[o];
    i.delete(o.toString()), s && Z(a) && Object.hasOwn(a, r) && s.delete(a[r]);
} if (i.size > 0) {
    n ??= M({}, t);
    for (let o of i)
        n.byPropertyKey.delete(o);
} if (s && s.size > 0) {
    n ??= M({}, t);
    for (let o of s)
        n.byTrackingKey.delete(o);
} return n; }
function nr(t, e) { let r; for (let n of t.byPropertyKey.keys())
    e.hasOwnProperty(n) || (r ??= M({}, t), r.byPropertyKey.delete(n)); return r; }
var Me = class {
    node;
    selfSubmitting = W(!1);
    submissionErrors;
    constructor(e) { this.node = e, this.submissionErrors = X({ source: this.node.structure.value, computation: () => [] }); }
    submitting = u(() => this.selfSubmitting() || (this.node.structure.parent?.submitting() ?? !1));
}, $ = class {
    structure;
    validationState;
    metadataState;
    nodeState;
    submitState;
    fieldAdapter;
    controlValue;
    _context = void 0;
    get context() { return this._context ??= new pe(this); }
    fieldProxy = new Proxy(() => this, Qt);
    pathNode;
    constructor(e) { this.pathNode = e.pathNode, this.fieldAdapter = e.fieldAdapter, this.structure = this.fieldAdapter.createStructure(this, e), this.validationState = this.fieldAdapter.createValidationState(this, e), this.nodeState = this.fieldAdapter.createNodeState(this, e), this.metadataState = new be(this), this.submitState = new Me(this), this.controlValue = this.controlValueSignal(), this.metadataState.runMetadataCreateLifecycle(); }
    focusBoundControl(e) { this.getBindingForFocus()?.focus(e); }
    getBindingForFocus() { let e = this.formFieldBindings().filter(r => r.focus !== void 0).reduce(ot, void 0); return e || this.structure.children().map(r => r.getBindingForFocus()).reduce(ot, void 0); }
    pendingSync = X({ source: () => this.value(), computation: (e, r) => { r?.value?.abort(); } });
    get fieldTree() { return this.fieldProxy; }
    get logicNode() { return this.structure.logic; }
    get value() { return this.structure.value; }
    get keyInParent() { return this.structure.keyInParent; }
    get errors() { return this.validationState.errors; }
    get parseErrors() { return this.validationState.parseErrors; }
    get errorSummary() { return this.validationState.errorSummary; }
    get pending() { return this.validationState.pending; }
    get valid() { return this.validationState.valid; }
    get invalid() { return this.validationState.invalid; }
    get dirty() { return this.nodeState.dirty; }
    get touched() { return this.nodeState.touched; }
    get disabled() { return this.nodeState.disabled; }
    get disabledReasons() { return this.nodeState.disabledReasons; }
    get hidden() { return this.nodeState.hidden; }
    get readonly() { return this.nodeState.readonly; }
    get formFieldBindings() { return this.nodeState.formFieldBindings; }
    get submitting() { return this.submitState.submitting; }
    get name() { return this.nodeState.name; }
    get max() { let e = this.metadata(ae)?.(); return e ? this.metadata(e) : void 0; }
    get maxLength() { return this.metadata(Fe); }
    get min() { let e = this.metadata(oe)?.(); return e ? this.metadata(e) : void 0; }
    get minLength() { return this.metadata(ke); }
    get pattern() { return this.metadata(Oe) ?? ir; }
    get required() { return this.metadata(De) ?? sr; }
    metadata(e) { return this.metadataState.get(e); }
    getError(e) { return this.errors().find(r => r.kind === e); }
    hasMetadata(e) { return this.metadataState.has(e); }
    markAsTouched(e) { this.structure.isOrphaned() || c(() => { this.markAsTouchedInternal(e), this.flushSync(); }); }
    markAsTouchedInternal(e) { if (!this.structure.isOrphaned() && !this.validationState.shouldSkipValidation() && (this.nodeState.markAsTouched(), !e?.skipDescendants))
        for (let r of this.structure.children())
            r.markAsTouchedInternal(); }
    markAsDirty() { this.nodeState.markAsDirty(); }
    markAsPristine() { this.nodeState.markAsPristine(); }
    markAsUntouched() { this.nodeState.markAsUntouched(); }
    reset(e) { c(() => this._reset(e)); }
    _reset(e) { this.pendingSync()?.abort(), e !== void 0 && this.value.set(e), this.controlValue.rawSet(this.value()), this.nodeState.markAsUntouched(), this.nodeState.markAsPristine(); for (let r of this.formFieldBindings())
        r.reset(); for (let r of this.structure.materializedChildren())
        r._reset(); }
    reloadValidation() { c(() => this._reloadValidation()); }
    _reloadValidation() { let e = this.logicNode.logic.getMetadataKeys(); for (let r of e)
        r[se] && this.metadata(r).reload?.(); for (let r of this.structure.children())
        r._reloadValidation(); }
    controlValueSignal() { let e = X(this.value); e.rawSet = e.set, e.set = n => { e.rawSet(n), this.markAsDirty(), this.debounceSync(); }; let r = e.update; return e.update = n => { r(n), this.markAsDirty(), this.debounceSync(); }, e; }
    sync() { this.value.set(this.controlValue()); }
    flushSync() { let e = this.pendingSync(); e && !e.signal.aborted && (e.abort(), this.sync()); }
    debounceSync() { return I(this, null, function* () { let e = c(() => (this.pendingSync()?.abort(), this.nodeState.debouncer())); if (e) {
        let r = new AbortController, n = e(r.signal);
        if (n && (this.pendingSync.set(r), yield n, r.signal.aborted))
            return;
    } this.structure.isOrphaned() || this.sync(); }); }
    static newRoot(e, r, n, i) { return i.newRoot(e, r, n, i); }
    createStructure(e) { return e.kind === "root" ? new ve(this, e.logic, e.fieldManager, e.value, this.newChild.bind(this)) : new Ne(this, e.logic, e.parent, e.identityInParent, e.initialKeyInParent, this.newChild.bind(this)); }
    newChild(e, r, n) { let i, s; return n ? (i = this.pathNode.getChild(A), s = this.structure.logic.getChild(A)) : (i = this.pathNode.getChild(e), s = this.structure.logic.getChild(e)), this.fieldAdapter.newChild({ kind: "child", parent: this, pathNode: i, logic: s, initialKeyInParent: e, identityInParent: r, fieldAdapter: this.fieldAdapter }); }
}, ir = u(() => []), sr = u(() => !1);
function ot(t, e) { return t ? e && t.element.compareDocumentPosition(e.element) & Node.DOCUMENT_POSITION_PRECEDING ? e : t : e; }
var Ee = class {
    node;
    selfTouched = W(!1);
    selfDirty = W(!1);
    markAsTouched() { this.selfTouched.set(!0); }
    markAsDirty() { this.selfDirty.set(!0); }
    markAsPristine() { this.selfDirty.set(!1); }
    markAsUntouched() { this.selfTouched.set(!1); }
    formFieldBindings = W([]);
    constructor(e) { this.node = e; }
    dirty = u(() => { let e = this.selfDirty() && !this.isNonInteractive(); return this.node.structure.reduceChildren(e, (r, n) => n || r.nodeState.dirty(), nt); });
    touched = u(() => { let e = this.selfTouched() && !this.isNonInteractive(); return this.node.structure.reduceChildren(e, (r, n) => n || r.nodeState.touched(), nt); });
    disabledReasons = u(() => [...this.node.structure.parent?.nodeState.disabledReasons() ?? [], ...this.node.logicNode.logic.disabledReasons.compute(this.node.context)], { equal: v });
    disabled = u(() => !!this.disabledReasons().length);
    readonly = u(() => (this.node.structure.parent?.nodeState.readonly() || this.node.logicNode.logic.readonly.compute(this.node.context)) ?? !1);
    hidden = u(() => (this.node.structure.parent?.nodeState.hidden() || this.node.logicNode.logic.hidden.compute(this.node.context)) ?? !1);
    name = u(() => { let e = this.node.structure.parent; return e ? `${e.name()}.${this.node.structure.keyInParent()}` : this.node.structure.fieldManager.rootName; });
    debouncer = u(() => { if (this.node.logicNode.logic.hasMetadata(te)) {
        let r = this.node.logicNode.logic.getMetadata(te).compute(this.node.context);
        if (r)
            return n => r(this.node.context, n);
    } return this.node.structure.parent?.nodeState.debouncer?.(); });
    isNonInteractive = u(() => this.hidden() || this.disabled() || this.readonly());
}, we = class {
    newRoot(e, r, n, i) { return new $({ kind: "root", fieldManager: e, value: r, pathNode: n, logic: n.builder.build(), fieldAdapter: i }); }
    newChild(e) { return new $(e); }
    createNodeState(e) { return new Ee(e); }
    createValidationState(e) { return new ye(e); }
    createStructure(e, r) { return e.createStructure(r); }
}, Se = class {
    injector;
    rootName;
    submitOptions;
    constructor(e, r, n) { this.injector = e, this.rootName = r ?? `${this.injector.get(jt)}.form${or++}`, this.submitOptions = n; }
    structures = new Set;
    createFieldManagementEffect(e) { xt(() => { let r = new Set; this.markStructuresLive(e, r); for (let n of this.structures)
        r.has(n) || (this.structures.delete(n), c(() => n.destroy())); }, { injector: this.injector }); }
    markStructuresLive(e, r) { r.add(e); for (let n of e.children())
        this.markStructuresLive(n.structure, r); }
}, or = 0, _e = new Bt("");
function ar(t) { let e, r, n; return t.length === 3 ? [e, r, n] = t : t.length === 2 ? zt(t[1]) ? [e, r] = t : [e, n] = t : [e] = t, [e, r, n]; }
function dr(...t) { let [e, r, n] = ar(t), i = n?.injector ?? tt(at), s = z(i, () => P.rootCompile(r)), o = new Se(i, n?.name, n?.submission), a = n?.adapter ?? new we, d = $.newRoot(o, e, s, a); o.createFieldManagementEffect(d.structure); let { experimentalWebMcpTool: l } = n ?? {}; if (l) {
    let m = z(i, () => tt(_e, { optional: !0 }));
    m && z(i, () => m(d.fieldTree, { name: l.name, description: l.description }));
} return d.fieldTree; }
function ur(t, e) { w(t); let r = g.unwrapFieldPath(t).getChild(A).fieldPathProxy; ft(r, e); }
function ft(t, e) { w(t), g.unwrapFieldPath(t).mergeIn(P.create(e)); }
function mt(t, e, r) { w(t), g.unwrapFieldPath(t).mergeIn(P.create(r), { fn: e, path: t }); }
function lr(t, e, r) { mt(t, ({ value: n }) => e(n()), r); }
function Ve(t, e) { return I(this, null, function* () { let r = c(t); if (c(r.submitState.submitting))
    return !1; let n = e === void 0 ? r.structure.root.fieldProxy : t, i = { root: r.structure.root.fieldProxy, submitted: t }; e = typeof e == "function" ? { action: e } : e ?? r.structure.fieldManager.submitOptions; let s = e?.action; if (!s)
    throw new E(1915, !1); r.markAsTouched(); let o = e?.onInvalid, a = hr(r, e?.ignoreValidators); try {
    if (a) {
        r.submitState.selfSubmitting.set(!0);
        let d = yield c(() => s?.(n, i));
        return d && fr(r, d), !d || R(d) && d.length === 0;
    }
    else
        c(() => o?.(n, i));
    return !1;
}
finally {
    r.submitState.selfSubmitting.set(!1);
} }); }
function cr(t) { return P.create(t); }
function hr(t, e) { switch (e) {
    case "all": return !0;
    case "none": return c(t.valid);
    default: return !c(t.invalid);
} }
function fr(t, e) { R(e) || (e = [e]); let r = new Map; for (let n of e) {
    let i = k(n, t.fieldTree), s = i.fieldTree(), o = r.get(s);
    o || (o = [], r.set(s, o)), o.push(i);
} for (let [n, i] of r)
    n.submitState.submissionErrors.set(i); }
var ne = class {
    kind = "compat";
    control;
    fieldTree;
    context;
    message;
    constructor({ context: e, kind: r, control: n }) { this.context = e, this.kind = r, this.control = n; }
};
function gt(t) { if (t.length === 0)
    return null; let e = {}; for (let r of t)
    e[r.kind] = r instanceof ne ? r.context : r; return e; }
function yt(t, e) { return t === null ? [] : Object.entries(t).map(([r, n]) => new ne({ context: n, kind: r, control: e })); }
import { DOCUMENT as Pr } from "@angular/common";
import { httpResource as kr } from "@angular/common/http";
import "@angular/core/primitives/signals";
function Dn(t) { return typeof t == "function" && t[Re] === !0; }
var Pt = new wt("");
function Cn(t) { return [{ provide: Pt, useValue: t }]; }
function An(t, e) { w(t); let r = g.unwrapFieldPath(t), n; typeof e == "function" || typeof e == "string" ? n = e : n = e?.when, r.builder.addDisabledReasonRule(i => { let s = !0; return typeof n == "string" ? s = n : n && (s = n(i)), typeof s == "string" ? { fieldTree: i.fieldTree, message: s } : s ? { fieldTree: i.fieldTree } : void 0; }); }
function In(t, e) { w(t); let r = g.unwrapFieldPath(t), n = typeof e == "function" ? e : e.when; r.builder.addHiddenRule(n); }
function Pn(t, e) { w(t); let r = g.unwrapFieldPath(t), n; typeof e == "object" && e !== null && "when" in e ? n = e.when ?? (() => !0) : typeof e == "function" ? n = e : n = () => !0, r.builder.addReadonlyRule(n); }
function kt(t) { let e = t; return typeof e.length == "number" ? e.length : e.size; }
function y(t, e) { return t instanceof Function ? t(e) : t; }
function q(t) { return typeof t == "number" ? isNaN(t) : t === "" || t === !1 || t == null; }
function bt(t) { return t === void 0 ? [] : Array.isArray(t) ? t : [t]; }
function D(t, e) { w(t), g.unwrapFieldPath(t).builder.addSyncErrorRule(n => k(e(n), n.fieldTree)); }
function Fr(t) { return new Ke(t); }
function Or(t, e) { return new je(t, e); }
function _r(t, e) { return new xe(t, e); }
function Vr(t, e) { return new Be(t, e); }
function Lr(t, e) { return new Ue(t, e); }
function Kr(t, e) { return new He(t, e); }
function jr(t, e) { return new Ge(t, e); }
function xr(t, e) { return new $e(t, e); }
function Br(t) { return new qe(t); }
var p = class {
    __brand = void 0;
    kind = "";
    fieldTree;
    message;
    constructor(e) { e && Object.assign(this, e); }
}, Ke = class extends p {
    kind = "required";
}, je = class extends p {
    min;
    kind = "min";
    constructor(e, r) { super(r), this.min = e; }
}, xe = class extends p {
    minDate;
    kind = "minDate";
    constructor(e, r) { super(r), this.minDate = e; }
}, Be = class extends p {
    max;
    kind = "max";
    constructor(e, r) { super(r), this.max = e; }
}, Ue = class extends p {
    maxDate;
    kind = "maxDate";
    constructor(e, r) { super(r), this.maxDate = e; }
}, He = class extends p {
    minLength;
    kind = "minLength";
    constructor(e, r) { super(r), this.minLength = e; }
}, Ge = class extends p {
    maxLength;
    kind = "maxLength";
    constructor(e, r) { super(r), this.maxLength = e; }
}, $e = class extends p {
    pattern;
    kind = "pattern";
    constructor(e, r) { super(r), this.pattern = e; }
}, qe = class extends p {
    kind = "email";
}, de = class extends p {
    kind = "parse";
}, kn = p, Ur = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function Fn(t, e) { D(t, r => { if (!(e?.when && !e.when(r)) && !q(r.value()) && !Ur.test(r.value()))
    return e?.error ? y(e.error, r) : Br({ message: y(e?.message, r) }); }); }
function On(t, e, r) { let n = f(); h(t, n, i => { if (!(r?.when && !r.when(i)))
    return typeof e == "function" ? e(i) : e; }), h(t, Pe, ({ state: i }) => i.metadata(n)()), h(t, ae, () => Pe), D(t, i => { let s = i.value(); if (s === null || Number.isNaN(s))
    return; let o = i.state.metadata(n)(); if (!(o === void 0 || Number.isNaN(o)) && s > o)
    return r?.error ? y(r.error, i) : Vr(o, { message: y(r?.message, i) }); }); }
function _n(t, e, r) { let n = f(); h(t, n, i => { if (!(r?.when && !r.when(i)))
    return typeof e == "function" ? e(i) : e; }), h(t, Ie, ({ state: i }) => i.metadata(n)()), h(t, ae, () => Ie), D(t, i => { let s = i.value(); if (s === null || Number.isNaN(s.getTime()))
    return; let o = i.state.metadata(n)(); if (!(o === void 0 || Number.isNaN(o.getTime())) && s > o)
    return r?.error ? y(r.error, i) : Lr(o, { message: y(r?.message, i) }); }); }
function Vn(t, e, r) { let n = h(t, f(), i => { if (!(r?.when && !r.when(i)))
    return typeof e == "number" ? e : e(i); }); h(t, Fe, ({ state: i }) => i.metadata(n)()), D(t, i => { if (q(i.value()))
    return; let s = i.state.metadata(n)(); if (s !== void 0 && kt(i.value()) > s)
    return r?.error ? y(r.error, i) : jr(s, { message: y(r?.message, i) }); }); }
function Ln(t, e, r) { let n = f(); h(t, n, i => { if (!(r?.when && !r.when(i)))
    return typeof e == "function" ? e(i) : e; }), h(t, Ae, ({ state: i }) => i.metadata(n)()), h(t, oe, () => Ae), D(t, i => { let s = i.value(); if (s === null || Number.isNaN(s))
    return; let o = i.state.metadata(n)(); if (!(o === void 0 || Number.isNaN(o)) && s < o)
    return r?.error ? y(r.error, i) : Or(o, { message: y(r?.message, i) }); }); }
function Kn(t, e, r) { let n = f(); h(t, n, i => { if (!(r?.when && !r.when(i)))
    return typeof e == "function" ? e(i) : e; }), h(t, Ce, ({ state: i }) => i.metadata(n)()), h(t, oe, () => Ce), D(t, i => { let s = i.value(); if (s === null || Number.isNaN(s.getTime()))
    return; let o = i.state.metadata(n)(); if (!(o === void 0 || Number.isNaN(o.getTime())) && s < o)
    return r?.error ? y(r.error, i) : _r(o, { message: y(r?.message, i) }); }); }
function jn(t, e, r) { let n = h(t, f(), i => { if (!(r?.when && !r.when(i)))
    return typeof e == "number" ? e : e(i); }); h(t, ke, ({ state: i }) => i.metadata(n)()), D(t, i => { if (q(i.value()))
    return; let s = i.state.metadata(n)(); if (s !== void 0 && kt(i.value()) < s)
    return r?.error ? y(r.error, i) : Kr(s, { message: y(r?.message, i) }); }); }
function xn(t, e, r) { let n = h(t, f(), i => { if (!(r?.when && !r.when(i)))
    return e instanceof RegExp ? e : e(i); }); h(t, Oe, ({ state: i }) => i.metadata(n)()), D(t, i => { if (q(i.value()))
    return; let s = i.state.metadata(n)(); if (s !== void 0 && !s.test(i.value()))
    return r?.error ? y(r.error, i) : xr(s, { message: y(r?.message, i) }); }); }
function Bn(t, e) { let r = h(t, f(), n => e?.when ? e.when(n) : !0); h(t, De, ({ state: n }) => n.metadata(r)()), D(t, n => { if (n.state.metadata(r)() && q(n.value()))
    return e?.error ? y(e.error, n) : Fr({ message: y(e?.message, n) }); }); }
function Ft(t, e) { w(t); let r = g.unwrapFieldPath(t), n = lt((i, s) => { if (e.debounce !== void 0) {
    let o = mr(() => s(), e.debounce), a = K(() => gr(o));
    return e.factory(a);
} return e.factory(s); }); n[se] = !0, h(t, n, i => { let o = i.stateOf(t).validationState; if (!(o.shouldSkipValidation() || !o.syncValid()) && !(e.when && !e.when(i)))
    return e.params(i); }), r.builder.addAsyncErrorRule(i => { let s = i.state.metadata(n), o; switch (s.status()) {
    case "idle": return;
    case "loading":
    case "reloading": return "pending";
    case "resolved":
    case "local": return s.hasValue() ? (o = e.onSuccess(s.value(), i), k(o, i.fieldTree)) : void 0;
    case "error": return o = e.onError(s.error(), i), k(o, i.fieldTree);
} }); }
function Hr(t, e) { w(t), g.unwrapFieldPath(t).builder.addSyncTreeErrorRule(n => k(e(n), n.fieldTree)); }
function Un(t, e) { let r = h(t, f(), n => { let i = typeof e == "function" ? e(n) : e; return i ? i["~standard"].validate(n.value()) : void 0; }); Hr(t, ({ state: n, fieldTreeOf: i }) => { let s = n.metadata(r)(); return !s || pt(s) ? [] : s?.issues?.map(o => vt(i(t), o)) ?? []; }), Ft(t, { params: ({ state: n }) => { let i = n.metadata(r)(); return i && pt(i) ? i : void 0; }, factory: n => yr({ params: n, loader: s => I(null, [s], function* ({ params: i }) { return (yield i)?.issues ?? []; }) }), onSuccess: (n, { fieldTreeOf: i }) => n.map(s => vt(i(t), s)), onError: () => { } }); }
function Gr(t, e) { return new ze(t, e); }
function vt(t, e) { let r = t; for (let n of e.path ?? []) {
    let i = typeof n == "object" ? n.key : n;
    r = r[i];
} return k(Gr(e, { message: e.message }), r); }
var ze = class extends p {
    issue;
    kind = "standardSchema";
    constructor(e, r) { super(r), this.issue = e; }
};
function Hn(t, e) { Ft(t, { params: e.request, debounce: e.debounce, factory: r => kr(r, e.options), onSuccess: e.onSuccess, onError: e.onError, when: e.when }); }
function Gn(t, e) { w(t); let r = g.unwrapFieldPath(t), n = $r(e); r.builder.addMetadataRule(te, () => n); }
function $r(t) { return typeof t == "function" ? t : t === "blur" ? zr() : t > 0 ? qr(t) : Wr; }
function qr(t) { return (e, r) => new Promise(n => { let i, s = () => { clearTimeout(i), n(); }; i = setTimeout(() => { r.removeEventListener("abort", s), n(); }, t), r.addEventListener("abort", s, { once: !0 }); }); }
function zr() { return (t, e) => new Promise(r => { e.addEventListener("abort", () => r(), { once: !0 }); }); }
function Wr() { }
function Ot(t, e, r) { let n = St({ source: t, computation: () => [], equal: v }), i = o => { let a = r(o); n.set(bt(a.error)), a.value !== void 0 && e(a.value), n.set(bt(a.error)); }, s = () => { n.set([]); }; return { errors: n.asReadonly(), setRawValue: i, reset: s }; }
function $n(t, e) { let { parse: r, format: n } = e, i = Ot(t, t.set, r), s = St(() => n(t())), o = s; o.parseErrors = i.errors; let a = o.set.bind(o), d = N(At, { self: !0, optional: !0 }); return d && (d.setParseErrors(i.errors), d.onReset = l => { i.reset(); let m = l !== void 0 ? l : t(); a(n(m)); }), o.set = l => { i.setRawValue(l), a(l); }, o.update = l => { o.set(l(s())); }, o; }
var We = class {
    field;
    constructor(e) { this.field = e; }
    control = this;
    get value() { return this.field().controlValue(); }
    get valid() { return this.field().valid(); }
    get invalid() { return this.field().invalid(); }
    get pending() { return this.field().pending(); }
    get disabled() { return this.field().disabled(); }
    get enabled() { return !this.field().disabled(); }
    get errors() { return gt(this.field().errors()); }
    get pristine() { return !this.field().dirty(); }
    get dirty() { return this.field().dirty(); }
    get touched() { return this.field().touched(); }
    get untouched() { return !this.field().touched(); }
    get status() { if (this.field().disabled())
        return "DISABLED"; if (this.field().valid())
        return "VALID"; if (this.field().invalid())
        return "INVALID"; if (this.field().pending())
        return "PENDING"; throw new Le(1910, !1); }
    valueAccessor = null;
    hasValidator(e) { return e === It.required ? this.field().required() : !1; }
    updateValueAndValidity() { }
}, Ye = { disabled: "disabled", disabledReasons: "disabledReasons", dirty: "dirty", errors: "errors", hidden: "hidden", invalid: "invalid", max: "max", maxLength: "maxLength", min: "min", minLength: "minLength", name: "name", pattern: "pattern", pending: "pending", readonly: "readonly", required: "required", touched: "touched" }, Yr = (() => { let t = {}; for (let e of Object.keys(Ye))
    t[Ye[e]] = e; return t; })();
function Qe(t, e) { let r = Yr[e]; return t[r]?.(); }
var Je = Object.values(Ye);
function ue() { return {}; }
function F(t, e, r) { return t[e] !== r ? (t[e] = r, !0) : !1; }
function Xr(t, e, r) { let n; if (_t(t) && r.isBadInput(t))
    return { error: new de }; switch (t.type) {
    case "checkbox": return { value: t.checked };
    case "number":
    case "range":
    case "datetime-local":
        if (n = T(e), typeof n == "number" || n === null)
            return { value: t.value === "" ? null : t.valueAsNumber };
        break;
    case "date":
    case "month":
    case "time":
    case "week":
        if (n = T(e), n === null || n instanceof Date)
            return { value: t.valueAsDate };
        if (typeof n == "number")
            return { value: t.valueAsNumber };
        break;
} if (t.tagName === "INPUT" && t.type === "text" && (n ??= T(e), typeof n == "number" || n === null)) {
    if (t.value === "")
        return { value: null };
    let i = Number(t.value);
    return Number.isNaN(i) ? { error: new de } : { value: i };
} return { value: t.value }; }
function Nt(t, e) { switch (t.type) {
    case "checkbox":
        t.checked = e;
        return;
    case "radio":
        t.checked = e === t.value;
        return;
    case "number":
    case "range":
    case "datetime-local":
        if (typeof e == "number") {
            Mt(t, e);
            return;
        }
        else if (e === null) {
            t.value = "";
            return;
        }
        break;
    case "date":
    case "month":
    case "time":
    case "week": if (e === null || e instanceof Date) {
        t.valueAsDate = e;
        return;
    }
    else if (typeof e == "number") {
        Mt(t, e);
        return;
    }
} if (t.tagName === "INPUT" && t.type === "text") {
    if (typeof e == "number") {
        t.value = isNaN(e) ? "" : String(e);
        return;
    }
    if (e === null) {
        t.value = "";
        return;
    }
} t.value = e; }
function Mt(t, e) { isNaN(e) ? t.value = "" : t.valueAsNumber = e; }
function _t(t) { return t.tagName === "INPUT"; }
function Zr(t) { return t.type === "date" || t.type === "datetime-local" || t.type === "month" || t.type === "time" || t.type === "week"; }
function Qr(t, e) { let r = t.getUTCFullYear(), n = String(t.getUTCMonth() + 1).padStart(2, "0"); if (e === "month")
    return `${r}-${n}`; let i = String(t.getUTCDate()).padStart(2, "0"); return `${r}-${n}-${i}`; }
function Vt(t, e, r) { return e instanceof Date && (t === "min" || t === "max") && (r === "date" || r === "month") ? Qr(e, r) : e; }
function Jr(t, e) { t.listenToCustomControlModel(n => e.state().controlValue.set(n)), t.listenToCustomControlOutput("touch", () => e.state().markAsTouched()), e.registerAsBinding(t.customControl); let r = ue(); return () => { let n = e.state(), i = n.controlValue(); F(r, "controlValue", i) && t.setCustomControlModelInput(i); for (let s of Je) {
    let o;
    if (s === "errors" ? o = e.errors() : o = Qe(n, s), F(r, s, o) && (t.setInputOnDirectives(s, o), e.elementAcceptsNativeProperty(s) && !t.customControlHasInput(s))) {
        let a = Vt(s, o, e.nativeFormElement.type);
        Ze(e.renderer, e.nativeFormElement, s, a);
    }
} }; }
function en(t) { return typeof t == "object" && t !== null; }
function tn(t, e) { let r = ue(); e.controlValueAccessor.registerOnChange(i => { r.controlValue = i, e.state().controlValue.set(i); }), e.controlValueAccessor.registerOnTouched(() => e.state().markAsTouched()); let n = e.injector.get(Sr, null, { optional: !0, self: !0 }); if (n) {
    let i;
    for (let d of n)
        en(d) && d.registerOnValidatorChange && (i ??= Rt(0), d.registerOnValidatorChange(() => { i.update(l => l + 1); }));
    let s = n.map(d => typeof d == "function" ? d : d.validate.bind(d)), o = It.compose(s), a = K(() => { i?.(); let d = o ? o(e.interopNgControl.control) : null; return yt(d, e.interopNgControl.control); });
    e.parseErrorsSource.set(a);
} return e.registerAsBinding({ reset: () => { let i = e.state().value(); r.controlValue = i, T(() => e.controlValueAccessor.writeValue(i)); } }), () => { let i = e.state(), s = i.controlValue(); F(r, "controlValue", s) && T(() => e.controlValueAccessor.writeValue(s)); for (let o of Je) {
    let a = Qe(i, o);
    if (F(r, o, a)) {
        let d = t.setInputOnDirectives(o, a);
        o === "disabled" && e.controlValueAccessor.setDisabledState ? T(() => e.controlValueAccessor.setDisabledState(a)) : !d && e.elementAcceptsNativeProperty(o) && Ze(e.renderer, e.nativeFormElement, o, a);
    }
} }; }
function rn(t, e, r) { if (typeof MutationObserver != "function")
    return; let n = new MutationObserver(i => { i.some(s => nn(s)) && e(); }); n.observe(t, { attributes: !0, attributeFilter: ["value"], characterData: !0, childList: !0, subtree: !0 }), r.onDestroy(() => n.disconnect()); }
function nn(t) { if (t.type === "childList" || t.type === "characterData") {
    if (t.target instanceof Comment)
        return !1;
    for (let e of t.addedNodes)
        if (!(e instanceof Comment))
            return !0;
    for (let e of t.removedNodes)
        if (!(e instanceof Comment))
            return !0;
    return !1;
} return t.type === "attributes" && t.target instanceof HTMLOptionElement; }
function sn(t, e, r, n) { let i = !1, s = e.nativeFormElement, o = Ot(() => e.state().value(), d => e.state().controlValue.set(d), d => Xr(s, e.state().value, n)); r.set(o.errors), e.onReset = () => { o.reset(); let d = e.state().value(); a.controlValue = d, Nt(s, d); }, t.listenToDom("input", () => o.setRawValue(void 0)), t.listenToDom("blur", () => e.state().markAsTouched()), _t(s) && Zr(s) && n.watchValidity(e.destroyRef, s, () => o.setRawValue(void 0)), e.registerAsBinding(), s.tagName === "SELECT" && rn(s, () => { i && (s.value = e.state().controlValue()); }, e.destroyRef); let a = ue(); return () => { let d = e.state(); for (let m of Je) {
    let j = Qe(d, m);
    if (F(a, m, j) && (t.setInputOnDirectives(m, j), e.elementAcceptsNativeProperty(m))) {
        let le = Vt(m, j, s.type);
        Ze(e.renderer, s, m, le);
    }
} let l = d.controlValue(); F(a, "controlValue", l) && Nt(s, l), i = !0; }; }
var Lt = (() => { class t {
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = b.\u0275\u0275defineInjectable({ token: t, factory: r => on.\u0275fac(r), providedIn: "root" });
} return t; })(), on = (() => {
    class t extends Lt {
        document = N(Pr);
        cspNonce = N(pr, { optional: !0 });
        injectedStyles = new WeakMap;
        watchValidity(r, n, i) { if (typeof ngServerMode < "u" && ngServerMode)
            return; let s = n.getRootNode(); this.injectedStyles.has(s) || this.injectedStyles.set(s, this.createTransitionStyle(s)); let o = a => { let d = a; (d.animationName === "ng-valid" || d.animationName === "ng-invalid") && i(); }; n.addEventListener("animationstart", o), r.onDestroy(() => { n.removeEventListener("animationstart", o); }); }
        isBadInput(r) { return r.validity?.badInput ?? !1; }
        createTransitionStyle(r) {
            let n = this.document.createElement("style");
            return this.cspNonce && (n.nonce = this.cspNonce), n.textContent = `
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `, r.nodeType === 9 ? r.head?.appendChild(n) : r.appendChild(n), n;
        }
        ngOnDestroy() { this.injectedStyles.get(this.document)?.remove(); }
        static \u0275fac = (() => { let r; return function (i) { return (r || (r = b.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
        static \u0275prov = b.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
    }
    return t;
})(), an = Symbol(), Et = new wt(""), qn = (() => { class t {
    field = Tt.required({ alias: "formField" });
    state = K(() => this.field()());
    renderer = N(br);
    destroyRef = N(vr);
    injector = N(Dt);
    element = N(Nr).nativeElement;
    elementIsNativeFormElement = Rr(this.element);
    elementAcceptsTextualValues = Tr(this.element);
    _elementAcceptsMinMax;
    nativeFormElement = this.elementIsNativeFormElement ? this.element : void 0;
    focuser = r => this.element.focus(r);
    controlValueAccessors = N(Dr, { optional: !0, self: !0 });
    config = N(Pt, { optional: !0 });
    validityMonitor = N(Lt);
    parseErrorsSource = Rt(void 0);
    _interopNgControl;
    get interopNgControl() { return this._interopNgControl ??= new We(this.state); }
    parseErrors = K(() => this.parseErrorsSource()?.().map(r => x(M({}, r), { fieldTree: T(this.state).fieldTree, formField: this })) ?? [], { equal: v });
    errors = K(() => this.state().errors().filter(r => !r.formField || r.formField === this), { equal: v });
    isFieldBinding = !1;
    resetter = () => { };
    parseErrorsResetCallback;
    setParseErrors(r) { this.parseErrorsSource.set(r); }
    set onReset(r) { this.parseErrorsResetCallback = r; }
    get onReset() { return this.parseErrorsResetCallback; }
    get controlValueAccessor() { return !this.controlValueAccessors || this.controlValueAccessors.length === 0 ? this.interopNgControl?.valueAccessor ?? void 0 : Cr(this.interopNgControl, this.controlValueAccessors) ?? void 0; }
    installClassBindingEffect() { let r = Object.entries(this.config?.classes ?? {}).map(([i, s]) => [i, K(() => s(this))]); if (r.length === 0)
        return; let n = ue(); Mr({ write: () => { for (let [i, s] of r) {
            let o = s();
            F(n, i, o) && (o ? this.renderer.addClass(this.element, i) : this.renderer.removeClass(this.element, i));
        } } }, { injector: this.injector }); }
    focus(r) { this.focuser(r); }
    reset() { this.resetter(), this.parseErrorsResetCallback?.(this.state().value()); }
    registerAsBinding(r) { if (this.isFieldBinding)
        throw new Le(1913, !1); this.isFieldBinding = !0, this.installClassBindingEffect(), r?.focus && (this.focuser = n => r.focus(n)), r?.reset && (this.resetter = () => r.reset()), Ct(n => { let i = this.state(); i.nodeState.formFieldBindings.update(s => [...s, this]), n(() => { i.nodeState.formFieldBindings.update(s => s.filter(o => o !== this)); }); }, { injector: this.injector }); }
    [an];
    \u0275ngControlCreate(r) { if (!r.hasPassThrough)
        if (this.controlValueAccessor)
            this.\u0275ngControlUpdate = tn(r, this);
        else if (r.customControl)
            this.\u0275ngControlUpdate = Jr(r, this);
        else if (this.elementIsNativeFormElement)
            this.\u0275ngControlUpdate = sn(r, this, this.parseErrorsSource, this.validityMonitor);
        else
            throw new Le(1914, !1); }
    \u0275ngControlUpdate;
    elementAcceptsNativeProperty(r) { if (!this.elementIsNativeFormElement)
        return !1; switch (r) {
        case "min":
        case "max": return this._elementAcceptsMinMax ??= Ar(this.element);
        case "minLength":
        case "maxLength": return this.elementAcceptsTextualValues;
        case "disabled":
        case "required":
        case "readonly":
        case "name": return !0;
        default: return !1;
    } }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275dir = b.\u0275\u0275defineDirective({ type: t, selectors: [["", "formField", ""]], inputs: { field: [1, "formField", "field"] }, exportAs: ["formField"], features: [b.\u0275\u0275ProvidersFeature([{ provide: Et, useExisting: t }, { provide: Ir, useFactory: () => N(t).interopNgControl }, { provide: At, useFactory: () => N(Et, { self: !0 }) }]), b.\u0275\u0275ControlFeature("formField")] });
} return t; })(), zn = (() => { class t {
    fieldTree = Tt.required({ alias: "formRoot" });
    onSubmit(r) { r.preventDefault(), T(() => { let n = this.fieldTree(); n().structure.fieldManager.submitOptions && Ve(n); }); }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275dir = b.\u0275\u0275defineDirective({ type: t, selectors: [["form", "formRoot", ""]], hostAttrs: ["novalidate", ""], hostBindings: function (n, i) { n & 1 && b.\u0275\u0275listener("submit", function (o) { return i.onSubmit(o); }); }, inputs: { fieldTree: [1, "formRoot", "fieldTree"] } });
} return t; })(), dn = (t, e) => { let r = N(Dt); return new Promise((n, i) => { Ct(() => { T(() => { un(t, e, r).then(n, i); }); }); }); };
function un(t, e, r) {
    return I(this, null, function* () {
        let n = t(), i = Xe(n);
        if (!i)
            throw new Error(`Could not accurately infer WebMCP schema for form "${e.name}". Ensure that the form model does not contain null, undefined, empty arrays, or unsupported types.`);
        yield wr({ name: e.name, description: e.description, inputSchema: i, execute: s => I(null, null, function* () {
                return n.value.set(s), (yield Ve(t)) ? { content: [{ type: "text", text: "Form submitted successfully." }] } : { content: [{ type: "text", text: `Form submission failed:
${n.errorSummary().map(d => { let l = d.fieldTree().structure.pathKeys().join("."); return `${l ? `${l}: ` : ""}${d.message || d.kind}`; }).join(`
`)}` }] };
            }) }, r);
    });
}
function Xe(t) { let e = t.value(); if (typeof e == "string")
    return { type: "string" }; if (typeof e == "number")
    return { type: "number" }; if (typeof e == "boolean")
    return { type: "boolean" }; if (e != null) {
    if (Array.isArray(e)) {
        if (e.length === 0)
            return;
        let r = t.structure.getChild("0");
        if (!r)
            return;
        let n = Xe(r);
        return n ? { type: "array", items: n } : void 0;
    }
    if (typeof e == "object") {
        let r = {}, n = [], i = t.structure.children();
        for (let s of i) {
            let o = s.keyInParent(), a = Xe(s);
            if (!a)
                return;
            r[o] = a, s.required() && n.push(o.toString());
        }
        return { type: "object", properties: r, required: n, additionalProperties: !1 };
    }
} }
function Wn() { return Er([{ provide: _e, useValue: dn }]); }
export { p as BaseNgValidationError, qe as EmailValidationError, Et as FORM_FIELD, qn as FormField, zn as FormRoot, se as IS_ASYNC_VALIDATION_RESOURCE, ae as MAX, Ie as MAX_DATE, Fe as MAX_LENGTH, Pe as MAX_NUMBER, oe as MIN, Ce as MIN_DATE, ke as MIN_LENGTH, Ae as MIN_NUMBER, Ue as MaxDateValidationError, Ge as MaxLengthValidationError, Be as MaxValidationError, G as MetadataKey, S as MetadataReducer, xe as MinDateValidationError, He as MinLengthValidationError, je as MinValidationError, de as NativeInputParseError, kn as NgValidationError, Oe as PATTERN, $e as PatternValidationError, De as REQUIRED, Ke as RequiredValidationError, ze as StandardSchemaValidationError, ft as apply, ur as applyEach, mt as applyWhen, lr as applyWhenValue, Te as createLimitSelectionKey, lt as createManagedMetadataKey, f as createMetadataKey, Gn as debounce, An as disabled, Fn as email, Br as emailError, dr as form, In as hidden, Dn as isFieldTree, On as max, _n as maxDate, Lr as maxDateError, Vr as maxError, Vn as maxLength, jr as maxLengthError, h as metadata, Ln as min, Kn as minDate, _r as minDateError, Or as minError, jn as minLength, Kr as minLengthError, xn as pattern, xr as patternError, Wn as provideExperimentalWebMcpForms, Cn as provideSignalFormsConfig, Pn as readonly, Bn as required, Fr as requiredError, cr as schema, Gr as standardSchemaError, Ve as submit, $n as transformedValue, D as validate, Ft as validateAsync, Hn as validateHttp, Un as validateStandardSchema, Hr as validateTree, an as \u0275NgFieldDirective };
/*! Bundled license information:

@angular/forms/fesm2022/_validation_errors-chunk.mjs:
@angular/forms/fesm2022/signals.mjs:
  (**
   * @license Angular v22.1.0
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
