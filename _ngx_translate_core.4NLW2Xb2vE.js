import { a as p, b as R, c as U, d as H } from "@nf-internal/chunk-XTCCDCJT";
import * as l from "@angular/core";
import { signal as d, computed as $, inject as o, DestroyRef as x, InjectionToken as it, untracked as ot, TemplateRef as lt, ViewContainerRef as ct, ElementRef as ut, ChangeDetectorRef as ht, Injector as ft, effect as gt } from "@angular/core";
import { takeUntilDestroyed as g } from "@angular/core/rxjs-interop";
import { of as b, Subject as j, isObservable as S, merge as I, EMPTY as B, tap as dt, finalize as pt, forkJoin as Lt, concat as J, defer as z } from "rxjs";
import { filter as G, map as A, take as Y, shareReplay as bt, concatMap as Tt, switchMap as W } from "rxjs/operators";
function At(n) { return n; }
function Z(n, s) { let t = {}; for (let e of Object.keys(n))
    e !== s && (t[e] = n[e]); return t; }
var P = class {
    state = d({});
    hasAny = $(() => Object.keys(this.state()).length > 0);
    isLoading(s) { return this.state()[s] !== void 0; }
    get(s) { return this.state()[s]; }
    set(s, t) { this.state.update(e => R(p({}, e), { [s]: t })); }
    clear(s) { this.state.update(t => Z(t, s)); }
    clearIfOwner(s, t) { this.state.update(e => e[s] === t ? Z(e, s) : e); }
}, O = class {
}, mt = (() => { class n {
    handle(t) { return t.key; }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), T = class {
}, Ct = (() => { class n extends T {
    compile(t, e) { return t; }
    compileTranslations(t, e) { return t; }
    static \u0275fac = (() => { let t; return function (r) { return (t || (t = l.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), m = class {
}, wt = (() => { class n extends m {
    getTranslation(t) { return b({}); }
    static \u0275fac = (() => { let t; return function (r) { return (t || (t = l.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })();
function _(n, s) { if (n === s)
    return !0; if (n === null || s === null)
    return !1; if (n !== n && s !== s)
    return !0; let t = typeof n, e = typeof s, r; if (t == e && t == "object")
    if (Array.isArray(n)) {
        if (!Array.isArray(s))
            return !1;
        if ((r = n.length) == s.length) {
            for (let a = 0; a < r; a++)
                if (!_(n[a], s[a]))
                    return !1;
            return !0;
        }
    }
    else {
        if (Array.isArray(s))
            return !1;
        if (f(n) && f(s)) {
            let a = Object.create(null);
            for (let i in n) {
                if (!_(n[i], s[i]))
                    return !1;
                a[i] = !0;
            }
            for (let i in s)
                if (!(i in a) && typeof s[i] < "u")
                    return !1;
            return !0;
        }
    } return !1; }
function c(n) { return typeof n < "u" && n !== null; }
function q(n) { return n !== void 0; }
function f(n) { return F(n) && !L(n) && n !== null; }
function F(n) { return typeof n == "object" && n !== null; }
function L(n) { return Array.isArray(n); }
function C(n) { return typeof n == "string"; }
function yt(n) { return typeof n == "function"; }
function k(n) { if (L(n))
    return n.map(s => k(s)); if (f(n)) {
    let s = {};
    return Object.keys(n).forEach(t => { s[t] = k(n[t]); }), s;
}
else
    return n; }
function K(n, s) { if (!F(n))
    return k(s); let t = k(n); return F(t) && F(s) && Object.keys(s).forEach(e => { f(s[e]) ? e in n ? t[e] = K(n[e], s[e]) : Object.assign(t, { [e]: s[e] }) : Object.assign(t, { [e]: s[e] }); }), t; }
function X(n, s) { let t = s.split("."); s = ""; do {
    s += t.shift();
    let e = !t.length;
    if (c(n)) {
        if (f(n) && q(n[s]) && (f(n[s]) || L(n[s]) || e)) {
            n = n[s], s = "";
            continue;
        }
        if (L(n)) {
            if (s === "length" && e) {
                n = n.length, s = "";
                continue;
            }
            if (/^\d+$/.test(s)) {
                let r = parseInt(s, 10);
                if (q(n[r]) && (f(n[r]) || L(n[r]) || e)) {
                    n = n[r], s = "";
                    continue;
                }
            }
        }
    }
    if (e) {
        n = void 0;
        continue;
    }
    s += ".";
} while (t.length); return n; }
function vt(n, s, t) { return K(n, Rt(s, t)); }
function Rt(n, s) { return n.split(".").reduceRight((t, e) => ({ [e]: t }), s); }
var w = class {
}, Dt = (() => { class n extends w {
    templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    interpolate(t, e) { if (C(t))
        return this.interpolateString(t, e); if (yt(t))
        return this.interpolateFunction(t, e); }
    interpolateFunction(t, e) { return t(e); }
    interpolateString(t, e) { return e ? t.replace(this.templateMatcher, (r, a) => { let i = this.getInterpolationReplacement(e, a); return i !== void 0 ? i : r; }) : t; }
    getInterpolationReplacement(t, e) { return this.formatValue(X(t, e)); }
    formatValue(t) { if (C(t))
        return t; if (typeof t == "number" || typeof t == "boolean")
        return t.toString(); if (t === null)
        return "null"; if (L(t))
        return t.join(", "); if (F(t))
        return typeof t.toString == "function" && t.toString !== Object.prototype.toString ? t.toString() : JSON.stringify(t); }
    static \u0275fac = (() => { let t; return function (r) { return (t || (t = l.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), tt = (() => { class n {
    _translations = d({});
    translations = this._translations.asReadonly();
    _languages = d([]);
    languages = this._languages.asReadonly();
    _lastTranslationChange = d(null);
    lastTranslationChange = this._lastTranslationChange.asReadonly();
    _translationChange$ = new j;
    translationChange$ = this._translationChange$.asObservable();
    constructor() { o(x).onDestroy(() => { this._translationChange$.complete(); }); }
    getTranslations(t) { return this.translations()[t]; }
    setTranslations(t, e, r) { this._translations.update(i => R(p({}, i), { [t]: r && this.hasTranslationFor(t) ? K(i[t], e) : e })), this.addLanguages([t]); let a = { lang: t, translations: this.getTranslations(t) }; this._lastTranslationChange.set(a), this._translationChange$.next(a); }
    getLanguages() { return this.languages(); }
    addLanguages(t) { this._languages.update(e => Array.from(new Set([...e, ...t]))); }
    hasTranslationFor(t) { return typeof this.translations()[t] < "u"; }
    deleteTranslations(t) { this._translations.update(e => { let i = e, { [t]: r } = i; return H(i, [U(t)]); }); }
    getTranslationValue(t, e) { return X(this.getTranslations(t), e); }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), et = new it("TRANSLATE_CONFIG"), D = n => S(n) ? n : b(n), y = (() => { class n {
    loadingTranslations = new P;
    lastUseLanguage = null;
    currentLoader = o(m);
    compiler = o(T);
    parser = o(w);
    missingTranslationHandler = o(O);
    store = o(tt);
    destroyRef = o(x);
    parent;
    get isRoot() { return this.parent === null; }
    _onLangChange = new j;
    _onFallbackLangChange = new j;
    _currentLang = d(null);
    _fallbackLang = d(null);
    _onTranslationRefresh = null;
    _isLoading = $(() => this.loadingTranslations.hasAny() || (this.parent?.isLoading() ?? !1));
    getRoot() { let t = this; for (; t.parent;)
        t = t.parent; return t; }
    getParent() { return this.parent; }
    getActiveRequestedLang() { return this.getRoot().lastUseLanguage; }
    hasTranslationInChain(t) { for (let e = this; e; e = e.parent)
        if (e.store.hasTranslationFor(t))
            return !0; return !1; }
    chainTranslationChange$() { let t = []; for (let e = this; e; e = e.parent)
        t.push(e.store.translationChange$); return t.length === 1 ? t[0] : I(...t); }
    get onTranslationChange() { return this.store.translationChange$; }
    get onLangChange() { return this.isRoot ? this._onLangChange.asObservable() : this.parent ? this.parent.onLangChange : B; }
    get onFallbackLangChange() { return this.isRoot ? this._onFallbackLangChange.asObservable() : this.parent ? this.parent.onFallbackLangChange : B; }
    get onTranslationRefresh() { if (!this._onTranslationRefresh) {
        let t = I(this.onTranslationChange.pipe(G(e => e.lang === this.getCurrentLang() || e.lang === this.getFallbackLang())), this.onLangChange, this.onFallbackLangChange).pipe(A(() => { }));
        this.isRoot ? this._onTranslationRefresh = t : this._onTranslationRefresh = this.parent ? I(t, this.parent.onTranslationRefresh) : t;
    } return this._onTranslationRefresh; }
    constructor() { let t = p({ isRoot: !0, fallbackLang: null }, o(et, { optional: !0 })); this.parent = t.isRoot ? null : o(n, { optional: !0, skipSelf: !0 }); let e = o(x); if (this.isRoot)
        t.lang && this.use(t.lang), t.fallbackLang && this.setFallbackLang(t.fallbackLang);
    else {
        let r = this.getCurrentLang();
        r && this.loadOrExtendLanguage(r)?.pipe(g(e)).subscribe({ error: i => { console.warn(`@ngx-translate/core: child failed to load "${r}". Cause:`, i); } });
        let a = this.getFallbackLang();
        a && a !== r && this.loadOrExtendLanguage(a)?.pipe(g(e)).subscribe({ error: i => { console.warn(`@ngx-translate/core: child failed to load "${a}". Cause:`, i); } });
    } this.onLangChange.pipe(g(e)).subscribe(r => { this.isRoot || this.loadOrExtendLanguage(r.lang)?.pipe(g(e)).subscribe({ error: a => { console.warn(`@ngx-translate/core: child failed to load "${r.lang}". Cause:`, a); } }); }), this.onFallbackLangChange.pipe(g(e)).subscribe(r => { this.isRoot || this.loadOrExtendLanguage(r.lang)?.pipe(g(e)).subscribe({ error: a => { console.warn(`@ngx-translate/core: child failed to load "${r.lang}". Cause:`, a); } }); }), e.onDestroy(() => { this._onLangChange.complete(), this._onFallbackLangChange.complete(); }); }
    setFallbackLang(t) { if (!this.isRoot)
        return this.parent.setFallbackLang(t); this._fallbackLang() || this._fallbackLang.set(t); let e = this.loadOrExtendLanguage(t); return S(e) ? (e.pipe(Y(1)).subscribe({ next: () => { this._fallbackLang.set(t), this._onFallbackLangChange.next({ lang: t, translations: this.store.getTranslations(t) }); }, error: r => { console.warn(`@ngx-translate/core: failed to load fallback "${t}". Cause:`, r); } }), e) : (this._fallbackLang.set(t), this._onFallbackLangChange.next({ lang: t, translations: this.store.getTranslations(t) }), b(this.store.getTranslations(t))); }
    get isLoading() { return this._isLoading; }
    use(t) { if (!this.isRoot)
        return this.parent.use(t); let e = this._currentLang(), r = this.lastUseLanguage; this.lastUseLanguage = t, this._currentLang() || this._currentLang.set(t); let a = this.loadOrExtendLanguage(t); return S(a) ? (a.pipe(Y(1)).subscribe({ next: () => { this.changeLang(t); }, error: i => { this.lastUseLanguage === t && (this._currentLang.set(e), this.lastUseLanguage = r), console.warn(`@ngx-translate/core: failed to load "${t}". currentLang was NOT changed; remains "${e ?? "null"}". Cause:`, i); } }), a) : (this.changeLang(t), b(this.store.getTranslations(t))); }
    loadOrExtendLanguage(t) { return this.store.hasTranslationFor(t) ? b(this.store.getTranslations(t)) : this.loadAndCompileTranslations(t); }
    getTranslations(t) { return this.store.getTranslations(t); }
    changeLang(t) { t === this.lastUseLanguage && (this._currentLang.set(t), this._onLangChange.next({ lang: t, translations: this.store.getTranslations(t) })); }
    getCurrentLang() { return this.isRoot ? this._currentLang() : this.parent?.getCurrentLang() ?? null; }
    loadAndCompileTranslations(t) { let e = this.loadingTranslations.get(t); if (e)
        return e; let r = this.currentLoader.getTranslation(t).pipe(A(a => this.compiler.compileTranslations(a, t)), dt(a => { this.store.setTranslations(t, a, !1), this.loadingTranslations.clearIfOwner(t, r); }), pt(() => this.loadingTranslations.clearIfOwner(t, r)), bt({ bufferSize: 1, refCount: !0 })); return this.loadingTranslations.set(t, r), r.pipe(g(this.destroyRef)).subscribe({ error: () => { } }), r; }
    setTranslation(t, e, r = !1) { let a = this.compiler.compileTranslations(e, t); this.store.setTranslations(t, a, r); }
    setCompiledTranslation(t, e, r = !1) { this.store.setTranslations(t, e, r); }
    getLangs() { return this.store.getLanguages(); }
    addLangs(t) { this.store.addLanguages(t); }
    getParsedResultForKey(t, e, r) { let a = this.getTextToInterpolate(t, r); if (c(a))
        return this.runInterpolation(a, e); let u = this.getMissingTranslationHandler().handle(p({ key: t, translateService: this }, e !== void 0 && { interpolateParams: e })); return u !== void 0 ? u : t; }
    getMissingTranslationHandler() { return this.missingTranslationHandler; }
    getFallbackLang() { return this.isRoot ? this._fallbackLang() : this.parent?.getFallbackLang() ?? null; }
    getTextToInterpolate(t, e) { if (e) {
        let u = this.store.getTranslationValue(e, t);
        return u !== void 0 ? u : this.parent?.getTextToInterpolate(t, e);
    } let r = this.getCurrentLang(), a = this.getFallbackLang(), i; return r && (i = this.store.getTranslationValue(r, t)), !c(i) && a && a !== r && (i = this.store.getTranslationValue(a, t)), i !== void 0 ? i : this.parent?.getTextToInterpolate(t); }
    runInterpolation(t, e) { if (c(t))
        return L(t) ? this.runInterpolationOnArray(t, e) : f(t) ? this.runInterpolationOnDict(t, e) : this.parser.interpolate(t, e); }
    runInterpolationOnArray(t, e) { return t.map(r => this.runInterpolation(r, e)); }
    runInterpolationOnDict(t, e) { let r = {}; for (let a in t) {
        let i = this.runInterpolation(t[a], e);
        i !== void 0 && (r[a] = i);
    } return r; }
    getParsedResult(t, e, r) { return t instanceof Array ? this.getParsedResultForArray(t, e, r) : this.getParsedResultForKey(t, e, r); }
    getParsedResultForArray(t, e, r) { let a = {}, i = !1; for (let h of t)
        a[h] = this.getParsedResultForKey(h, e, r), i = i || S(a[h]); if (!i)
        return a; let u = t.map(h => D(a[h])); return Lt(u).pipe(A(h => { let V = {}; return h.forEach((st, at) => { V[t[at]] = st; }), V; })); }
    get(t, e, r) { if (!c(t) || !t.length)
        return b(""); let a = r ?? this.getActiveRequestedLang() ?? this.getCurrentLang(), i = a ? this.loadingTranslations.get(a) : void 0; return i ? i.pipe(Tt(() => D(this.getParsedResult(t, e, r)))) : D(this.getParsedResult(t, e, r)); }
    getStreamOnTranslationChange(t, e, r) { if (!c(t) || !t.length)
        throw new Error('Parameter "key" is required and cannot be empty'); return J(z(() => this.get(t, e, r)), this.onTranslationChange.pipe(W(() => { let a = this.getParsedResult(t, e, r); return D(a); }))); }
    stream(t, e, r) { if (!c(t) || !t.length)
        throw new Error('Parameter "key" required'); let a = r ? I(this.onLangChange, this.chainTranslationChange$().pipe(G(i => i.lang === r))) : this.onLangChange; return J(z(() => this.get(t, e, r)), a.pipe(W(() => { let i = this.getParsedResult(t, e, r); return D(i); }))); }
    instant(t, e, r) { if (!c(t) || t.length === 0)
        return ""; r && !this.hasTranslationInChain(r) && this.warnUnloadedInstantLang(r); let a = this.getParsedResult(t, e, r); return S(a) ? this.keyToObject(t) : a; }
    warnedUnloadedInstantLangs = new Set;
    warnUnloadedInstantLang(t) { let e = this.getRoot(); if (e !== this) {
        e.warnUnloadedInstantLang(t);
        return;
    } this.warnedUnloadedInstantLangs.has(t) || ot(() => { this.warnedUnloadedInstantLangs.add(t), console.warn(`@ngx-translate/core: instant() called with lang="${t}" but no translations are loaded for that language. Returning the key as fallback. Load with use("${t}") or setTranslation("${t}", ...) first.`); }); }
    translate(t, e, r) { return $(() => { let a = typeof t == "function" ? t() : t, i = typeof e == "function" ? e() : e, u = typeof r == "function" ? r() : r; return this.instant(a, i, u); }); }
    keyToObject(t) { return Array.isArray(t) ? t.reduce((e, r) => (e[r] = r, e), {}) : t; }
    set(t, e, r = this.getCurrentLang()) { this.store.setTranslations(r, vt(this.store.getTranslations(r), t, C(e) ? this.compiler.compile(e, r) : this.compiler.compileTranslations(e, r)), !1); }
    reloadLang(t) { return this.resetLang(t), this.loadAndCompileTranslations(t); }
    resetLang(t) { this.loadingTranslations.clear(t), this.store.deleteTranslations(t); }
    static getBrowserLang() { if (typeof window > "u" || !window.navigator)
        return; let t = this.getBrowserCultureLang(); return t ? t.split(/[-_]/)[0] : void 0; }
    static getBrowserCultureLang() { if (!(typeof window > "u" || typeof window.navigator > "u"))
        return window.navigator.languages ? window.navigator.languages[0] : window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage; }
    getBrowserLang() { return n.getBrowserLang(); }
    getBrowserCultureLang() { return n.getBrowserCultureLang(); }
    get currentLang() { return this.isRoot ? this._currentLang.asReadonly() : this.parent.currentLang; }
    get fallbackLang() { return this.isRoot ? this._fallbackLang.asReadonly() : this.parent.fallbackLang; }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })();
function $t(n, s, t) { return o(y).translate(n, s, t); }
var E = class {
    $implicit;
    constructor(s) { this.$implicit = s; }
}, jt = (() => { class n {
    templateRef = o(lt);
    viewContainer = o(ct);
    translateService = o(y);
    ngOnInit() { let t = (e, r) => this.translateService.instant(e, r); this.viewContainer.createEmbeddedView(this.templateRef, new E(t)); }
    static ngTemplateContextGuard(t, e) { return !0; }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275dir = l.\u0275\u0275defineDirective({ type: n, selectors: [["", "translateBlock", ""]] });
} return n; })(), N = class {
    element;
    changeDetectorRef;
    translateService;
    lastParams;
    constructor(s, t, e) { this.element = s, this.changeDetectorRef = t, this.translateService = e, console.warn(`@ngx-translate/core: Using element content as a translation key is deprecated and will be removed in v19. Use [translate]="'KEY'" or *translateBlock="let t" instead.`, this.element?.nativeElement); }
    checkNodes(s, t = !1) { let e = this.element.nativeElement.childNodes; e.length && e.forEach(r => { let a = r; if (a.nodeType === 3) {
        let i;
        if (t && (a.lastKey = null), c(a.lookupKey))
            i = a.lookupKey;
        else {
            let u = this.getContent(a), h = u.trim();
            h.length && (a.lookupKey = h, u !== a.currentValue ? (i = h, a.originalContent = u || a.originalContent) : a.originalContent && (i = a.originalContent.trim()));
        }
        this.updateValue(i, a, s);
    } }); }
    updateValue(s, t, e) { if (!s || t.lastKey === s && this.lastParams === e)
        return; this.lastParams = e; let r = this.translateService.instant(s, e); (r !== s || !t.lastKey) && (t.lastKey = s), t.originalContent || (t.originalContent = this.getContent(t)), C(r) ? t.currentValue = r : c(r) ? t.currentValue = JSON.stringify(r) : t.currentValue = t.originalContent || s, this.setContent(t, t.originalContent.replace(s, t.currentValue)), this.changeDetectorRef.markForCheck(); }
    getContent(s) { return c(s.textContent) ? s.textContent : s.data; }
    setContent(s, t) { c(s.textContent) ? s.textContent = t : s.data = t; }
}, Pt = (() => { class n {
    translateService = o(y);
    element = o(ut);
    destroyRef = o(x);
    changeDetectorRef = o(ht);
    injector = o(ft);
    key;
    currentParams;
    keySignal = null;
    paramsSignal = null;
    translationSignal = null;
    effectCreated = !1;
    contentKeyHandler = null;
    set translate(t) { t && (this.key = t, this.keySignal ? this.keySignal.set(t) : (this.keySignal = d(t), this.paramsSignal = d(this.currentParams), this.translationSignal = this.translateService.translate(this.keySignal, this.paramsSignal), this.setupEffect())); }
    set translateParams(t) { _(this.currentParams, t) || (this.currentParams = t, this.paramsSignal ? this.paramsSignal.set(t) : this.contentKeyHandler && this.contentKeyHandler.checkNodes(t, !0)); }
    constructor() { this.translateService.onTranslationRefresh.pipe(g(this.destroyRef)).subscribe(() => { this.translationSignal ? this.writeTranslationToDOM() : this.contentKeyHandler && this.contentKeyHandler.checkNodes(this.currentParams, !0); }); }
    ngAfterViewChecked() { !this.keySignal && !this.contentKeyHandler && (this.contentKeyHandler = new N(this.element, this.changeDetectorRef, this.translateService)), this.contentKeyHandler && this.contentKeyHandler.checkNodes(this.currentParams); }
    setupEffect() { this.effectCreated || (this.effectCreated = !0, gt(() => { let t = this.translationSignal(); this.writeToDOM(t); }, { injector: this.injector })); }
    writeTranslationToDOM() { if (this.translationSignal) {
        let t = this.translationSignal();
        this.writeToDOM(t);
    } }
    writeToDOM(t) { let e = this.element.nativeElement, r; C(t) ? r = t : c(t) ? r = JSON.stringify(t) : r = this.key, e.textContent = r, this.changeDetectorRef.markForCheck(); }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275dir = l.\u0275\u0275defineDirective({ type: n, selectors: [["", "translate", ""], ["", "ngx-translate", ""]], inputs: { translate: "translate", translateParams: "translateParams" } });
} return n; })(), Et = (() => { class n {
    translateService = o(y);
    cachedSignal = null;
    lastKey = null;
    lastParams;
    transform(t, ...e) { if (!t || !t.length)
        return t; let r = this.parseArgs(e); return (t !== this.lastKey || !_(r, this.lastParams)) && (this.cachedSignal = this.translateService.translate(t, r), this.lastKey = t, this.lastParams = r), this.cachedSignal(); }
    parseArgs(t) { if (!(!c(t[0]) || !t.length)) {
        if (C(t[0]) && t[0].length) {
            let e = t[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g, '"$2":').replace(/:(\s)?(')(.*?)(')/g, ':"$3"');
            try {
                return JSON.parse(e);
            }
            catch (r) {
                throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${t[0]}`);
            }
        }
        if (f(t[0]))
            return t[0];
    } }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275pipe = l.\u0275\u0275definePipe({ name: "translate", type: n, pure: !1 });
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })();
function nt(n) { return /^class\s/.test(Function.prototype.toString.call(n)); }
function v(n, s) { return nt(s) ? { provide: n, useClass: s } : { provide: n, useFactory: s }; }
function Nt(n) { return v(m, n); }
function Kt(n) { return v(T, n); }
function Vt(n) { return v(w, n); }
function Ut(n) { return v(O, n); }
function Ht(n = {}) { return rt(R(p({}, n), { isRoot: !0 })); }
function Bt(n = {}) { return rt(R(p({}, n), { isRoot: !1 })); }
function M(n, s, t, e, r) { if (s === void 0)
    return v(n, t); if (typeof s == "function") {
    if (nt(s)) {
        let a = s.name || "YourClass";
        console.warn(`@ngx-translate/core: "${e}" received a bare class (${a}); auto-wrapping with ${r}(). For clarity, prefer ${e}: ${r}(${a}).`);
    }
    return v(n, s);
} return s; }
function rt(n) { let s = [], t = M(m, n.loader, wt, "loader", "provideTranslateLoader"), e = M(T, n.compiler, Ct, "compiler", "provideTranslateCompiler"), r = M(w, n.parser, Dt, "parser", "provideTranslateParser"), a = M(O, n.missingTranslationHandler, mt, "missingTranslationHandler", "provideMissingTranslationHandler"); s.push(t, e, r, a), s.push(tt); let i = { fallbackLang: n.fallbackLang ?? null, lang: n.lang, isRoot: n.isRoot }; return s.push({ provide: et, useValue: i }), s.push({ provide: y, useClass: y }), s; }
var Q = class {
};
export { mt as DefaultMissingTranslationHandler, Q as ITranslateService, O as MissingTranslationHandler, et as TRANSLATE_SERVICE_CONFIG, E as TranslateBlockContext, jt as TranslateBlockDirective, T as TranslateCompiler, Dt as TranslateDefaultParser, Pt as TranslateDirective, m as TranslateLoader, Ct as TranslateNoOpCompiler, wt as TranslateNoOpLoader, w as TranslateParser, Et as TranslatePipe, y as TranslateService, tt as TranslateStore, At as _, _ as equals, X as getValue, vt as insertValue, L as isArray, q as isDefined, c as isDefinedAndNotNull, f as isDict, yt as isFunction, F as isObject, C as isString, K as mergeDeep, Bt as provideChildTranslateService, Ut as provideMissingTranslationHandler, Kt as provideTranslateCompiler, Nt as provideTranslateLoader, Vt as provideTranslateParser, Ht as provideTranslateService, $t as translate };
