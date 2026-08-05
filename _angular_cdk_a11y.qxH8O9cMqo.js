import { a as R } from "@nf-internal/chunk-PZNONLPT";
import * as d from "@angular/core";
import { inject as c, ElementRef as Le, booleanAttribute as ke, afterNextRender as Vt, NgZone as Z, DOCUMENT as G, Injector as Zt, InjectionToken as Se } from "@angular/core";
import * as E from "@angular/core";
import { InjectionToken as ce, inject as u, NgZone as de, DOCUMENT as ue, RendererFactory2 as ct, ElementRef as dt, EventEmitter as ut } from "@angular/core";
import { BehaviorSubject as ht, Subject as ae, of as lt } from "rxjs";
import { skip as _t, distinctUntilChanged as mt, takeUntil as ft } from "rxjs/operators";
function x(i) { return i.buttons === 0 || i.detail === 0; }
function P(i) { let s = i.touches && i.touches[0] || i.changedTouches && i.changedTouches[0]; return !!s && s.identifier === -1 && (s.radiusX == null || s.radiusX === 1) && (s.radiusY == null || s.radiusY === 1); }
var B;
function it() { if (B == null) {
    let i = typeof document < "u" ? document.head : null;
    B = !!(i && (i.createShadowRoot || i.attachShadow));
} return B; }
function se(i) { if (it()) {
    let s = i.getRootNode ? i.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && s instanceof ShadowRoot)
        return s;
} return null; }
function ne() { let i = typeof document < "u" && document ? document.activeElement : null; for (; i && i.shadowRoot;) {
    let s = i.shadowRoot.activeElement;
    if (s === i)
        break;
    i = s;
} return i; }
function g(i) { if (i.composedPath)
    try {
        return i.composedPath()[0];
    }
    catch { } return i.target; }
import * as re from "@angular/core";
import { inject as st, PLATFORM_ID as nt } from "@angular/core";
import { isPlatformBrowser as rt } from "@angular/common";
var U;
try {
    U = typeof Intl < "u" && Intl.v8BreakIterator;
}
catch {
    U = !1;
}
var h = (() => { class i {
    _platformId = st(nt);
    isBrowser = this._platformId ? rt(this._platformId) : typeof document == "object" && !!document;
    EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    BLINK = this.isBrowser && !!(window.chrome || U) && typeof CSS < "u" && !this.EDGE && !this.TRIDENT;
    WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = re.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
} return i; })();
var y;
function ot() { if (y == null && typeof window < "u")
    try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", { get: () => y = !0 }));
    }
    finally {
        y = y || !1;
    } return y; }
function oe(i) { return ot() ? i : !!i.capture; }
import { ElementRef as at } from "@angular/core";
function v(i) { return i instanceof at ? i.nativeElement : i; }
var he = new ce("cdk-input-modality-detector-options"), le = { ignoreKeys: [18, 17, 224, 91, 16] }, _e = 650, K = { passive: !0, capture: !0 }, me = (() => { class i {
    _platform = u(h);
    _listenerCleanups;
    modalityDetected;
    modalityChanged;
    get mostRecentModality() { return this._modality.value; }
    _mostRecentTarget = null;
    _modality = new ht(null);
    _options;
    _lastTouchMs = 0;
    _onKeydown = e => { this._options?.ignoreKeys?.some(t => t === e.keyCode) || (this._modality.next("keyboard"), this._mostRecentTarget = g(e)); };
    _onMousedown = e => { Date.now() - this._lastTouchMs < _e || (this._modality.next(x(e) ? "keyboard" : "mouse"), this._mostRecentTarget = g(e)); };
    _onTouchstart = e => { if (P(e)) {
        this._modality.next("keyboard");
        return;
    } this._lastTouchMs = Date.now(), this._modality.next("touch"), this._mostRecentTarget = g(e); };
    constructor() { let e = u(de), t = u(ue), n = u(he, { optional: !0 }); if (this._options = R(R({}, le), n), this.modalityDetected = this._modality.pipe(_t(1)), this.modalityChanged = this.modalityDetected.pipe(mt()), this._platform.isBrowser) {
        let r = u(ct).createRenderer(null, null);
        this._listenerCleanups = e.runOutsideAngular(() => [r.listen(t, "keydown", this._onKeydown, K), r.listen(t, "mousedown", this._onMousedown, K), r.listen(t, "touchstart", this._onTouchstart, K)]);
    } }
    ngOnDestroy() { this._modality.complete(), this._listenerCleanups?.forEach(e => e()); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = E.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
} return i; })(), A = (function (i) { return i[i.IMMEDIATE = 0] = "IMMEDIATE", i[i.EVENTUAL = 1] = "EVENTUAL", i; })(A || {}), fe = new ce("cdk-focus-monitor-default-options"), w = oe({ passive: !0, capture: !0 }), pe = (() => { class i {
    _ngZone = u(de);
    _platform = u(h);
    _inputModalityDetector = u(me);
    _origin = null;
    _lastFocusOrigin = null;
    _windowFocused = !1;
    _windowFocusTimeoutId;
    _originTimeoutId;
    _originFromTouchInteraction = !1;
    _elementInfo = new Map;
    _monitoredElementCount = 0;
    _rootNodeFocusListenerCount = new Map;
    _detectionMode;
    _windowFocusListener = () => { this._windowFocused = !0, this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = !1); };
    _document = u(ue);
    _stopInputModalityDetector = new ae;
    constructor() { let e = u(fe, { optional: !0 }); this._detectionMode = e?.detectionMode || A.IMMEDIATE; }
    _rootNodeFocusAndBlurListener = e => { let t = g(e); for (let n = t; n; n = n.parentElement)
        e.type === "focus" ? this._onFocus(e, n) : this._onBlur(e, n); };
    monitor(e, t = !1) { let n = v(e); if (!this._platform.isBrowser || n.nodeType !== 1)
        return lt(); let r = se(n) || this._document, o = this._elementInfo.get(n); if (o)
        return t && (o.checkChildren = !0), o.subject; let a = { checkChildren: t, subject: new ae, rootNode: r }; return this._elementInfo.set(n, a), this._registerGlobalListeners(a), a.subject; }
    stopMonitoring(e) { let t = v(e), n = this._elementInfo.get(t); n && (n.subject.complete(), this._setClasses(t), this._elementInfo.delete(t), this._removeGlobalListeners(n)); }
    focusVia(e, t, n) { let r = v(e), o = this._document.activeElement; r === o ? this._getClosestElementsInfo(r).forEach(([a, l]) => this._originChanged(a, t, l)) : (this._setOrigin(t), typeof r.focus == "function" && r.focus(n)); }
    ngOnDestroy() { this._elementInfo.forEach((e, t) => this.stopMonitoring(t)); }
    _getWindow() { return this._document.defaultView || window; }
    _getFocusOrigin(e) { return this._origin ? this._originFromTouchInteraction ? this._shouldBeAttributedToTouch(e) ? "touch" : "program" : this._origin : this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : e && this._isLastInteractionFromInputLabel(e) ? "mouse" : "program"; }
    _shouldBeAttributedToTouch(e) { return this._detectionMode === A.EVENTUAL || !!e?.contains(this._inputModalityDetector._mostRecentTarget); }
    _setClasses(e, t) { e.classList.toggle("cdk-focused", !!t), e.classList.toggle("cdk-touch-focused", t === "touch"), e.classList.toggle("cdk-keyboard-focused", t === "keyboard"), e.classList.toggle("cdk-mouse-focused", t === "mouse"), e.classList.toggle("cdk-program-focused", t === "program"); }
    _setOrigin(e, t = !1) { this._ngZone.runOutsideAngular(() => { if (this._origin = e, this._originFromTouchInteraction = e === "touch" && t, this._detectionMode === A.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        let n = this._originFromTouchInteraction ? _e : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, n);
    } }); }
    _onFocus(e, t) { let n = this._elementInfo.get(t), r = g(e); !n || !n.checkChildren && t !== r || this._originChanged(t, this._getFocusOrigin(r), n); }
    _onBlur(e, t) { let n = this._elementInfo.get(t); !n || n.checkChildren && e.relatedTarget instanceof Node && t.contains(e.relatedTarget) || (this._setClasses(t), this._emitOrigin(n, null)); }
    _emitOrigin(e, t) { e.subject.observers.length && this._ngZone.run(() => e.subject.next(t)); }
    _registerGlobalListeners(e) { if (!this._platform.isBrowser)
        return; let t = e.rootNode, n = this._rootNodeFocusListenerCount.get(t) || 0; n || this._ngZone.runOutsideAngular(() => { t.addEventListener("focus", this._rootNodeFocusAndBlurListener, w), t.addEventListener("blur", this._rootNodeFocusAndBlurListener, w); }), this._rootNodeFocusListenerCount.set(t, n + 1), ++this._monitoredElementCount === 1 && (this._ngZone.runOutsideAngular(() => { this._getWindow().addEventListener("focus", this._windowFocusListener); }), this._inputModalityDetector.modalityDetected.pipe(ft(this._stopInputModalityDetector)).subscribe(r => { this._setOrigin(r, !0); })); }
    _removeGlobalListeners(e) { let t = e.rootNode; if (this._rootNodeFocusListenerCount.has(t)) {
        let n = this._rootNodeFocusListenerCount.get(t);
        n > 1 ? this._rootNodeFocusListenerCount.set(t, n - 1) : (t.removeEventListener("focus", this._rootNodeFocusAndBlurListener, w), t.removeEventListener("blur", this._rootNodeFocusAndBlurListener, w), this._rootNodeFocusListenerCount.delete(t));
    } --this._monitoredElementCount || (this._getWindow().removeEventListener("focus", this._windowFocusListener), this._stopInputModalityDetector.next(), clearTimeout(this._windowFocusTimeoutId), clearTimeout(this._originTimeoutId)); }
    _originChanged(e, t, n) { this._setClasses(e, t), this._emitOrigin(n, t), this._lastFocusOrigin = t; }
    _getClosestElementsInfo(e) { let t = []; return this._elementInfo.forEach((n, r) => { (r === e || n.checkChildren && r.contains(e)) && t.push([r, n]); }), t; }
    _isLastInteractionFromInputLabel(e) { let { _mostRecentTarget: t, mostRecentModality: n } = this._inputModalityDetector; if (n !== "mouse" || !t || t === e || e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA" || e.disabled)
        return !1; let r = e.labels; if (r) {
        for (let o = 0; o < r.length; o++)
            if (r[o].contains(t))
                return !0;
    } return !1; }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = E.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
} return i; })(), pt = (() => { class i {
    _elementRef = u(dt);
    _focusMonitor = u(pe);
    _monitorSubscription;
    _focusOrigin = null;
    cdkFocusChange = new ut;
    get focusOrigin() { return this._focusOrigin; }
    ngAfterViewInit() { let e = this._elementRef.nativeElement; this._monitorSubscription = this._focusMonitor.monitor(e, e.nodeType === 1 && e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t => { this._focusOrigin = t, this.cdkFocusChange.emit(t); }); }
    ngOnDestroy() { this._focusMonitor.stopMonitoring(this._elementRef), this._monitorSubscription?.unsubscribe(); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = E.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]], outputs: { cdkFocusChange: "cdkFocusChange" }, exportAs: ["cdkMonitorFocus"] });
} return i; })();
import * as ge from "@angular/core";
import { inject as be, Injector as bt, EnvironmentInjector as gt, ApplicationRef as vt, createComponent as It } from "@angular/core";
var F = new WeakMap, T = (() => { class i {
    _appRef;
    _injector = be(bt);
    _environmentInjector = be(gt);
    load(e) { let t = this._appRef = this._appRef || this._injector.get(vt), n = F.get(t); n || (n = { loaders: new Set, refs: [] }, F.set(t, n), t.onDestroy(() => { F.get(t)?.refs.forEach(r => r.destroy()), F.delete(t); })), n.loaders.has(e) || (n.loaders.add(e), n.refs.push(It(e, { environmentInjector: this._environmentInjector }))); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = ge.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
} return i; })();
import * as ve from "@angular/core";
import { SecurityContext as yt } from "@angular/core";
var M = (() => {
    class i {
        static \u0275fac = function (t) { return new (t || i); };
        static \u0275cmp = ve.\u0275\u0275defineComponent({ type: i, selectors: [["ng-component"]], exportAs: ["cdkVisuallyHidden"], decls: 0, vars: 0, template: function (t, n) { }, styles: [`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`], encapsulation: 2 });
    }
    return i;
})(), k;
function At() { if (k === void 0 && (k = null, typeof window < "u")) {
    let i = window;
    if (i.trustedTypes !== void 0)
        try {
            k = i.trustedTypes.createPolicy("angular#components", { createHTML: s => s });
        }
        catch (s) {
            console.error(s);
        }
} return k; }
function Et(i) { return At()?.createHTML(i) || i; }
function Ie(i, s, e) { let t = e.sanitize(yt.HTML, s); i.innerHTML = Et(t || ""); }
import * as j from "@angular/core";
import { inject as O, CSP_NONCE as Tt, NgZone as Mt } from "@angular/core";
import { Subject as Ct, combineLatest as wt, concat as Ft, Observable as kt } from "rxjs";
import { take as Ot, skip as Dt, debounceTime as Nt, map as ye, startWith as Lt, takeUntil as St } from "rxjs/operators";
function H(i) { return Array.isArray(i) ? i : [i]; }
var Ae = new Set, p, Rt = (() => { class i {
    _platform = O(h);
    _nonce = O(Tt, { optional: !0 });
    _matchMedia;
    constructor() { this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : Pt; }
    matchMedia(e) { return (this._platform.WEBKIT || this._platform.BLINK) && xt(e, this._nonce), this._matchMedia(e); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = j.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
} return i; })();
function xt(i, s) { if (!Ae.has(i))
    try {
        p || (p = document.createElement("style"), s && p.setAttribute("nonce", s), p.setAttribute("type", "text/css"), document.head.appendChild(p)), p.sheet && (p.sheet.insertRule(`@media ${i.replace(/[{}]/g, "")} {body{ }}`, 0), Ae.add(i));
    }
    catch (e) {
        console.error(e);
    } }
function Pt(i) { return { matches: i === "all" || i === "", media: i, addListener: () => { }, removeListener: () => { } }; }
var Te = (() => { class i {
    _mediaMatcher = O(Rt);
    _zone = O(Mt);
    _queries = new Map;
    _destroySubject = new Ct;
    ngOnDestroy() { this._destroySubject.next(), this._destroySubject.complete(); }
    isMatched(e) { return Ee(H(e)).some(n => this._registerQuery(n).mql.matches); }
    observe(e) { let n = Ee(H(e)).map(o => this._registerQuery(o).observable), r = wt(n); return r = Ft(r.pipe(Ot(1)), r.pipe(Dt(1), Nt(0))), r.pipe(ye(o => { let a = { matches: !1, breakpoints: {} }; return o.forEach(({ matches: l, query: tt }) => { a.matches = a.matches || l, a.breakpoints[tt] = l; }), a; })); }
    _registerQuery(e) { if (this._queries.has(e))
        return this._queries.get(e); let t = this._mediaMatcher.matchMedia(e), r = { observable: new kt(o => { let a = l => this._zone.run(() => o.next(l)); return t.addListener(a), () => { t.removeListener(a); }; }).pipe(Lt(t), ye(({ matches: o }) => ({ query: e, matches: o })), St(this._destroySubject)), mql: t }; return this._queries.set(e, r), r; }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = j.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
} return i; })();
function Ee(i) { return i.map(s => s.split(",")).reduce((s, e) => s.concat(e)).map(s => s.trim()); }
import { DomSanitizer as Gt } from "@angular/platform-browser";
import * as m from "@angular/core";
import { inject as Me, ElementRef as Es, EventEmitter as Ts, booleanAttribute as Ms, NgZone as Bt } from "@angular/core";
import { Observable as Ut, Subject as Kt } from "rxjs";
import { debounceTime as Ls, map as Ht, filter as jt } from "rxjs/operators";
function Wt(i) { if (i.type === "characterData" && i.target instanceof Comment)
    return !0; if (i.type === "childList") {
    for (let s = 0; s < i.addedNodes.length; s++)
        if (!(i.addedNodes[s] instanceof Comment))
            return !1;
    for (let s = 0; s < i.removedNodes.length; s++)
        if (!(i.removedNodes[s] instanceof Comment))
            return !1;
    return !0;
} return !1; }
var Ce = (() => { class i {
    create(e) { return typeof MutationObserver > "u" ? null : new MutationObserver(e); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = m.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
} return i; })(), we = (() => { class i {
    _mutationObserverFactory = Me(Ce);
    _observedElements = new Map;
    _ngZone = Me(Bt);
    ngOnDestroy() { this._observedElements.forEach((e, t) => this._cleanupObserver(t)); }
    observe(e) { let t = v(e); return new Ut(n => { let o = this._observeElement(t).pipe(Ht(a => a.filter(l => !Wt(l))), jt(a => !!a.length)).subscribe(a => { this._ngZone.run(() => { n.next(a); }); }); return () => { o.unsubscribe(), this._unobserveElement(t); }; }); }
    _observeElement(e) { return this._ngZone.runOutsideAngular(() => { if (this._observedElements.has(e))
        this._observedElements.get(e).count++;
    else {
        let t = new Kt, n = this._mutationObserverFactory.create(r => t.next(r));
        n && n.observe(e, { characterData: !0, childList: !0, subtree: !0 }), this._observedElements.set(e, { observer: n, stream: t, count: 1 });
    } return this._observedElements.get(e).stream; }); }
    _unobserveElement(e) { this._observedElements.has(e) && (this._observedElements.get(e).count--, this._observedElements.get(e).count || this._cleanupObserver(e)); }
    _cleanupObserver(e) { if (this._observedElements.has(e)) {
        let { observer: t, stream: n } = this._observedElements.get(e);
        t && t.disconnect(), n.complete(), this._observedElements.delete(e);
    } }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = m.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
} return i; })();
var Fe = (() => { class i {
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275mod = m.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = m.\u0275\u0275defineInjector({ providers: [Ce] });
} return i; })();
var V = class {
    ignoreVisibility = !1;
}, z = (() => { class i {
    _platform = c(h);
    isDisabled(e) { return e.hasAttribute("disabled"); }
    isVisible(e) { return $t(e) && getComputedStyle(e).visibility === "visible"; }
    isTabbable(e) { if (!this._platform.isBrowser)
        return !1; let t = zt(ii(e)); if (t && (Oe(t) === -1 || !this.isVisible(t)))
        return !1; let n = e.nodeName.toLowerCase(), r = Oe(e); return e.hasAttribute("contenteditable") ? r !== -1 : n === "iframe" || n === "object" || this._platform.WEBKIT && this._platform.IOS && !ei(e) ? !1 : n === "audio" ? e.hasAttribute("controls") ? r !== -1 : !1 : n === "video" ? r === -1 ? !1 : r !== null ? !0 : this._platform.FIREFOX || e.hasAttribute("controls") : e.tabIndex >= 0; }
    isFocusable(e, t) { return ti(e) && !this.isDisabled(e) && (t?.ignoreVisibility || this.isVisible(e)); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = d.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
} return i; })();
function zt(i) { try {
    return i.frameElement;
}
catch {
    return null;
} }
function $t(i) { return !!(i.offsetWidth || i.offsetHeight || typeof i.getClientRects == "function" && i.getClientRects().length); }
function Yt(i) { let s = i.nodeName.toLowerCase(); return s === "input" || s === "select" || s === "button" || s === "textarea"; }
function Qt(i) { return qt(i) && i.type == "hidden"; }
function Xt(i) { return Jt(i) && i.hasAttribute("href"); }
function qt(i) { return i.nodeName.toLowerCase() == "input"; }
function Jt(i) { return i.nodeName.toLowerCase() == "a"; }
function Re(i) { if (!i.hasAttribute("tabindex") || i.tabIndex === void 0)
    return !1; let s = i.getAttribute("tabindex"); return !!(s && !isNaN(parseInt(s, 10))); }
function Oe(i) { if (!Re(i))
    return null; let s = parseInt(i.getAttribute("tabindex") || "", 10); return isNaN(s) ? -1 : s; }
function ei(i) { let s = i.nodeName.toLowerCase(), e = s === "input" && i.type; return e === "text" || e === "password" || s === "select" || s === "textarea"; }
function ti(i) { return Qt(i) ? !1 : Yt(i) || Xt(i) || i.hasAttribute("contenteditable") || Re(i); }
function ii(i) { return i.ownerDocument && i.ownerDocument.defaultView || window; }
var C = class {
    _element;
    _checker;
    _ngZone;
    _document;
    _injector;
    _startAnchor = null;
    _endAnchor = null;
    _hasAttached = !1;
    startAnchorListener = () => this.focusLastTabbableElement();
    endAnchorListener = () => this.focusFirstTabbableElement();
    get enabled() { return this._enabled; }
    set enabled(s) { this._enabled = s, this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(s, this._startAnchor), this._toggleAnchorTabIndex(s, this._endAnchor)); }
    _enabled = !0;
    constructor(s, e, t, n, r = !1, o) { this._element = s, this._checker = e, this._ngZone = t, this._document = n, this._injector = o, r || this.attachAnchors(); }
    destroy() { let s = this._startAnchor, e = this._endAnchor; s && (s.removeEventListener("focus", this.startAnchorListener), s.remove()), e && (e.removeEventListener("focus", this.endAnchorListener), e.remove()), this._startAnchor = this._endAnchor = null, this._hasAttached = !1; }
    attachAnchors() { return this._hasAttached ? !0 : (this._ngZone.runOutsideAngular(() => { this._startAnchor || (this._startAnchor = this._createAnchor(), this._startAnchor.addEventListener("focus", this.startAnchorListener)), this._endAnchor || (this._endAnchor = this._createAnchor(), this._endAnchor.addEventListener("focus", this.endAnchorListener)); }), this._element.parentNode && (this._element.parentNode.insertBefore(this._startAnchor, this._element), this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling), this._hasAttached = !0), this._hasAttached); }
    focusInitialElementWhenReady(s) { return new Promise(e => { this._executeOnStable(() => e(this.focusInitialElement(s))); }); }
    focusFirstTabbableElementWhenReady(s) { return new Promise(e => { this._executeOnStable(() => e(this.focusFirstTabbableElement(s))); }); }
    focusLastTabbableElementWhenReady(s) { return new Promise(e => { this._executeOnStable(() => e(this.focusLastTabbableElement(s))); }); }
    _getRegionBoundary(s) { let e = this._element.querySelectorAll(`[cdk-focus-region-${s}], [cdkFocusRegion${s}], [cdk-focus-${s}]`); return s == "start" ? e.length ? e[0] : this._getFirstTabbableElement(this._element) : e.length ? e[e.length - 1] : this._getLastTabbableElement(this._element); }
    focusInitialElement(s) { let e = this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]"); if (e) {
        if (!this._checker.isFocusable(e)) {
            let t = this._getFirstTabbableElement(e);
            return t?.focus(s), !!t;
        }
        return e.focus(s), !0;
    } return this.focusFirstTabbableElement(s); }
    focusFirstTabbableElement(s) { let e = this._getRegionBoundary("start"); return e && e.focus(s), !!e; }
    focusLastTabbableElement(s) { let e = this._getRegionBoundary("end"); return e && e.focus(s), !!e; }
    hasAttached() { return this._hasAttached; }
    _getFirstTabbableElement(s) { if (this._checker.isFocusable(s) && this._checker.isTabbable(s))
        return s; let e = s.children; for (let t = 0; t < e.length; t++) {
        let n = e[t].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(e[t]) : null;
        if (n)
            return n;
    } return null; }
    _getLastTabbableElement(s) { if (this._checker.isFocusable(s) && this._checker.isTabbable(s))
        return s; let e = s.children; for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(e[t]) : null;
        if (n)
            return n;
    } return null; }
    _createAnchor() { let s = this._document.createElement("div"); return this._toggleAnchorTabIndex(this._enabled, s), s.classList.add("cdk-visually-hidden"), s.classList.add("cdk-focus-trap-anchor"), s.setAttribute("aria-hidden", "true"), s; }
    _toggleAnchorTabIndex(s, e) { s ? e.setAttribute("tabindex", "0") : e.removeAttribute("tabindex"); }
    toggleAnchors(s) { this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(s, this._startAnchor), this._toggleAnchorTabIndex(s, this._endAnchor)); }
    _executeOnStable(s) { Vt(s, { injector: this._injector }); }
}, xe = (() => { class i {
    _checker = c(z);
    _ngZone = c(Z);
    _document = c(G);
    _injector = c(Zt);
    constructor() { c(T).load(M); }
    create(e, t = !1) { return new C(e, this._checker, this._ngZone, this._document, t, this._injector); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = d.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
} return i; })(), si = (() => { class i {
    _elementRef = c(Le);
    _focusTrapFactory = c(xe);
    focusTrap = void 0;
    _previouslyFocusedElement = null;
    get enabled() { return this.focusTrap?.enabled || !1; }
    set enabled(e) { this.focusTrap && (this.focusTrap.enabled = e); }
    autoCapture = !1;
    constructor() { c(h).isBrowser && (this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, !0)); }
    ngOnDestroy() { this.focusTrap?.destroy(), this._previouslyFocusedElement && (this._previouslyFocusedElement.focus(), this._previouslyFocusedElement = null); }
    ngAfterContentInit() { this.focusTrap?.attachAnchors(), this.autoCapture && this._captureFocus(); }
    ngDoCheck() { this.focusTrap && !this.focusTrap.hasAttached() && this.focusTrap.attachAnchors(); }
    ngOnChanges(e) { let t = e.autoCapture; t && !t.firstChange && this.autoCapture && this.focusTrap?.hasAttached() && this._captureFocus(); }
    _captureFocus() { this._previouslyFocusedElement = ne(), this.focusTrap?.focusInitialElementWhenReady(); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = d.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdkTrapFocus", ""]], inputs: { enabled: [2, "cdkTrapFocus", "enabled", ke], autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", ke] }, exportAs: ["cdkTrapFocus"], features: [d.\u0275\u0275NgOnChangesFeature] });
} return i; })(), Pe = new Se("liveAnnouncerElement", { providedIn: "root", factory: () => null }), Be = new Se("LIVE_ANNOUNCER_DEFAULT_OPTIONS"), ni = 0, Ue = (() => { class i {
    _ngZone = c(Z);
    _defaultOptions = c(Be, { optional: !0 });
    _liveElement;
    _document = c(G);
    _sanitizer = c(Gt);
    _previousTimeout;
    _currentPromise;
    _currentResolve;
    constructor() { let e = c(Pe, { optional: !0 }); this._liveElement = e || this._createLiveElement(); }
    announce(e, ...t) { let n = this._defaultOptions, r, o; return t.length === 1 && typeof t[0] == "number" ? o = t[0] : [r, o] = t, this.clear(), clearTimeout(this._previousTimeout), r || (r = n && n.politeness ? n.politeness : "polite"), o == null && n && (o = n.duration), this._liveElement.setAttribute("aria-live", r), this._liveElement.id && this._exposeAnnouncerToModals(this._liveElement.id), this._ngZone.runOutsideAngular(() => (this._currentPromise || (this._currentPromise = new Promise(a => this._currentResolve = a)), clearTimeout(this._previousTimeout), this._previousTimeout = setTimeout(() => { !e || typeof e == "string" ? this._liveElement.textContent = e : Ie(this._liveElement, e, this._sanitizer), typeof o == "number" && (this._previousTimeout = setTimeout(() => this.clear(), o)), this._currentResolve?.(), this._currentPromise = this._currentResolve = void 0; }, 100), this._currentPromise)); }
    clear() { this._liveElement && (this._liveElement.textContent = ""); }
    ngOnDestroy() { clearTimeout(this._previousTimeout), this._liveElement?.remove(), this._liveElement = null, this._currentResolve?.(), this._currentPromise = this._currentResolve = void 0; }
    _createLiveElement() { let e = "cdk-live-announcer-element", t = this._document.getElementsByClassName(e), n = this._document.createElement("div"); for (let r = 0; r < t.length; r++)
        t[r].remove(); return n.classList.add(e), n.classList.add("cdk-visually-hidden"), n.setAttribute("aria-atomic", "true"), n.setAttribute("aria-live", "polite"), n.id = `cdk-live-announcer-${ni++}`, this._document.body.appendChild(n), n; }
    _exposeAnnouncerToModals(e) { let t = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]'); for (let n = 0; n < t.length; n++) {
        let r = t[n], o = r.getAttribute("aria-owns");
        o ? o.indexOf(e) === -1 && r.setAttribute("aria-owns", o + " " + e) : r.setAttribute("aria-owns", e);
    } }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = d.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
} return i; })(), ri = (() => { class i {
    _elementRef = c(Le);
    _liveAnnouncer = c(Ue);
    _contentObserver = c(we);
    _ngZone = c(Z);
    get politeness() { return this._politeness; }
    set politeness(e) { this._politeness = e === "off" || e === "assertive" ? e : "polite", this._politeness === "off" ? this._subscription && (this._subscription.unsubscribe(), this._subscription = void 0) : this._subscription || (this._subscription = this._ngZone.runOutsideAngular(() => this._contentObserver.observe(this._elementRef).subscribe(() => { let t = this._elementRef.nativeElement.textContent; t !== this._previousAnnouncedText && (this._liveAnnouncer.announce(t, this._politeness, this.duration), this._previousAnnouncedText = t); }))); }
    _politeness = "polite";
    duration;
    _previousAnnouncedText;
    _subscription;
    constructor() { c(T).load(M); }
    ngOnDestroy() { this._subscription?.unsubscribe(); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = d.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdkAriaLive", ""]], inputs: { politeness: [0, "cdkAriaLive", "politeness"], duration: [0, "cdkAriaLiveDuration", "duration"] }, exportAs: ["cdkAriaLive"] });
} return i; })(), f = (function (i) { return i[i.NONE = 0] = "NONE", i[i.BLACK_ON_WHITE = 1] = "BLACK_ON_WHITE", i[i.WHITE_ON_BLACK = 2] = "WHITE_ON_BLACK", i; })(f || {}), De = "cdk-high-contrast-black-on-white", Ne = "cdk-high-contrast-white-on-black", W = "cdk-high-contrast-active", Ke = (() => { class i {
    _platform = c(h);
    _hasCheckedHighContrastMode = !1;
    _document = c(G);
    _breakpointSubscription;
    constructor() { this._breakpointSubscription = c(Te).observe("(forced-colors: active)").subscribe(() => { this._hasCheckedHighContrastMode && (this._hasCheckedHighContrastMode = !1, this._applyBodyHighContrastModeCssClasses()); }); }
    getHighContrastMode() { if (!this._platform.isBrowser)
        return f.NONE; let e = this._document.createElement("div"); e.style.backgroundColor = "rgb(1,2,3)", e.style.position = "absolute", this._document.body.appendChild(e); let t = this._document.defaultView || window, n = t && t.getComputedStyle ? t.getComputedStyle(e) : null, r = (n && n.backgroundColor || "").replace(/ /g, ""); switch (e.remove(), r) {
        case "rgb(0,0,0)":
        case "rgb(45,50,54)":
        case "rgb(32,32,32)": return f.WHITE_ON_BLACK;
        case "rgb(255,255,255)":
        case "rgb(255,250,239)": return f.BLACK_ON_WHITE;
    } return f.NONE; }
    ngOnDestroy() { this._breakpointSubscription.unsubscribe(); }
    _applyBodyHighContrastModeCssClasses() { if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
        let e = this._document.body.classList;
        e.remove(W, De, Ne), this._hasCheckedHighContrastMode = !0;
        let t = this.getHighContrastMode();
        t === f.BLACK_ON_WHITE ? e.add(W, De) : t === f.WHITE_ON_BLACK && e.add(W, Ne);
    } }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = d.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
} return i; })(), oi = (() => { class i {
    constructor() { c(Ke)._applyBodyHighContrastModeCssClasses(); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275mod = d.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = d.\u0275\u0275defineInjector({ imports: [Fe] });
} return i; })();
import { signal as We, QueryList as Ve, isSignal as Ze, effect as li } from "@angular/core";
import { Subscription as _i, Subject as Ge } from "rxjs";
import { Subject as He } from "rxjs";
import { tap as ai, debounceTime as ci, filter as di, map as ui } from "rxjs/operators";
var hi = 200, I = class {
    _letterKeyStream = new He;
    _items = [];
    _selectedItemIndex = -1;
    _pressedLetters = [];
    _skipPredicateFn;
    _selectedItem = new He;
    selectedItem = this._selectedItem;
    constructor(s, e) { let t = typeof e?.debounceInterval == "number" ? e.debounceInterval : hi; e?.skipPredicate && (this._skipPredicateFn = e.skipPredicate), this.setItems(s), this._setupKeyHandler(t); }
    destroy() { this._pressedLetters = [], this._letterKeyStream.complete(), this._selectedItem.complete(); }
    setCurrentSelectedItemIndex(s) { this._selectedItemIndex = s; }
    setItems(s) { this._items = s; }
    handleKey(s) { let e = s.keyCode; s.key && s.key.length === 1 ? this._letterKeyStream.next(s.key.toLocaleUpperCase()) : (e >= 65 && e <= 90 || e >= 48 && e <= 57) && this._letterKeyStream.next(String.fromCharCode(e)); }
    isTyping() { return this._pressedLetters.length > 0; }
    reset() { this._pressedLetters = []; }
    _setupKeyHandler(s) { this._letterKeyStream.pipe(ai(e => this._pressedLetters.push(e)), ci(s), di(() => this._pressedLetters.length > 0), ui(() => this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e => { for (let t = 1; t < this._items.length + 1; t++) {
        let n = (this._selectedItemIndex + t) % this._items.length, r = this._items[n];
        if (!this._skipPredicateFn?.(r) && r.getLabel?.().toLocaleUpperCase().trim().indexOf(e) === 0) {
            this._selectedItem.next(r);
            break;
        }
    } this._pressedLetters = []; }); }
};
function je(i, ...s) { return s.length ? s.some(e => i[e]) : i.altKey || i.shiftKey || i.ctrlKey || i.metaKey; }
var b = class {
    _items;
    _activeItemIndex = We(-1);
    _activeItem = We(null);
    _wrap = !1;
    _typeaheadSubscription = _i.EMPTY;
    _itemChangesSubscription;
    _vertical = !0;
    _horizontal = null;
    _allowedModifierKeys = [];
    _homeAndEnd = !1;
    _pageUpAndDown = { enabled: !1, delta: 10 };
    _effectRef;
    _typeahead;
    _skipPredicateFn = s => s.disabled;
    constructor(s, e) { this._items = s, s instanceof Ve ? this._itemChangesSubscription = s.changes.subscribe(t => this._itemsChanged(t.toArray())) : Ze(s) && (this._effectRef = li(() => this._itemsChanged(s()), { injector: e })); }
    tabOut = new Ge;
    change = new Ge;
    skipPredicate(s) { return this._skipPredicateFn = s, this; }
    withWrap(s = !0) { return this._wrap = s, this; }
    withVerticalOrientation(s = !0) { return this._vertical = s, this; }
    withHorizontalOrientation(s) { return this._horizontal = s, this; }
    withAllowedModifierKeys(s) { return this._allowedModifierKeys = s, this; }
    withTypeAhead(s = 200) { this._typeaheadSubscription.unsubscribe(); let e = this._getItemsArray(); return this._typeahead = new I(e, { debounceInterval: typeof s == "number" ? s : void 0, skipPredicate: t => this._skipPredicateFn(t) }), this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(t => { this.setActiveItem(t); }), this; }
    cancelTypeahead() { return this._typeahead?.reset(), this; }
    withHomeAndEnd(s = !0) { return this._homeAndEnd = s, this; }
    withPageUpDown(s = !0, e = 10) { return this._pageUpAndDown = { enabled: s, delta: e }, this; }
    setActiveItem(s) { let e = this._activeItem(); this.updateActiveItem(s), this._activeItem() !== e && this.change.next(this._activeItemIndex()); }
    onKeydown(s) { let e = s.keyCode, n = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(r => !s[r] || this._allowedModifierKeys.indexOf(r) > -1); switch (e) {
        case 9:
            this.tabOut.next();
            return;
        case 40: if (this._vertical && n) {
            this.setNextItemActive();
            break;
        }
        else
            return;
        case 38: if (this._vertical && n) {
            this.setPreviousItemActive();
            break;
        }
        else
            return;
        case 39: if (this._horizontal && n) {
            this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
            break;
        }
        else
            return;
        case 37: if (this._horizontal && n) {
            this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
            break;
        }
        else
            return;
        case 36: if (this._homeAndEnd && n) {
            this.setFirstItemActive();
            break;
        }
        else
            return;
        case 35: if (this._homeAndEnd && n) {
            this.setLastItemActive();
            break;
        }
        else
            return;
        case 33: if (this._pageUpAndDown.enabled && n) {
            let r = this._activeItemIndex() - this._pageUpAndDown.delta;
            this._setActiveItemByIndex(r > 0 ? r : 0, 1);
            break;
        }
        else
            return;
        case 34: if (this._pageUpAndDown.enabled && n) {
            let r = this._activeItemIndex() + this._pageUpAndDown.delta, o = this._getItemsArray().length;
            this._setActiveItemByIndex(r < o ? r : o - 1, -1);
            break;
        }
        else
            return;
        default:
            (n || je(s, "shiftKey")) && this._typeahead?.handleKey(s);
            return;
    } this._typeahead?.reset(), s.preventDefault(); }
    get activeItemIndex() { return this._activeItemIndex(); }
    get activeItem() { return this._activeItem(); }
    isTyping() { return !!this._typeahead && this._typeahead.isTyping(); }
    setFirstItemActive() { this._setActiveItemByIndex(0, 1); }
    setLastItemActive() { this._setActiveItemByIndex(this._getItemsArray().length - 1, -1); }
    setNextItemActive() { this._activeItemIndex() < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1); }
    setPreviousItemActive() { this._activeItemIndex() < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1); }
    updateActiveItem(s) { let e = this._getItemsArray(), t = typeof s == "number" ? s : e.indexOf(s), n = e[t]; this._activeItem.set(n ?? null), this._activeItemIndex.set(t), this._typeahead?.setCurrentSelectedItemIndex(t); }
    destroy() { this._typeaheadSubscription.unsubscribe(), this._itemChangesSubscription?.unsubscribe(), this._effectRef?.destroy(), this._typeahead?.destroy(), this.tabOut.complete(), this.change.complete(); }
    _setActiveItemByDelta(s) { this._wrap ? this._setActiveInWrapMode(s) : this._setActiveInDefaultMode(s); }
    _setActiveInWrapMode(s) { let e = this._getItemsArray(); for (let t = 1; t <= e.length; t++) {
        let n = (this._activeItemIndex() + s * t + e.length) % e.length, r = e[n];
        if (!this._skipPredicateFn(r)) {
            this.setActiveItem(n);
            return;
        }
    } }
    _setActiveInDefaultMode(s) { this._setActiveItemByIndex(this._activeItemIndex() + s, s); }
    _setActiveItemByIndex(s, e) { let t = this._getItemsArray(); if (t[s]) {
        for (; this._skipPredicateFn(t[s]);)
            if (s += e, !t[s])
                return;
        this.setActiveItem(s);
    } }
    _getItemsArray() { return Ze(this._items) ? this._items() : this._items instanceof Ve ? this._items.toArray() : this._items; }
    _itemsChanged(s) { this._typeahead?.setItems(s); let e = this._activeItem(); if (e) {
        let t = s.indexOf(e);
        t > -1 && t !== this._activeItemIndex() && (this._activeItemIndex.set(t), this._typeahead?.setCurrentSelectedItemIndex(t));
    } }
};
var $ = class extends b {
    setActiveItem(s) { this.activeItem && this.activeItem.setInactiveStyles(), super.setActiveItem(s), this.activeItem && this.activeItem.setActiveStyles(); }
};
import * as S from "@angular/core";
import { inject as _, DOCUMENT as qe, APP_ID as Ti, InjectionToken as Mi, NgZone as Ci, Injector as wi } from "@angular/core";
var Y = class extends b {
    _origin = "program";
    setFocusOrigin(s) { return this._origin = s, this; }
    setActiveItem(s) { super.setActiveItem(s), this.activeItem && this.activeItem.focus(this._origin); }
};
import { Subject as Fi } from "rxjs";
import { InjectionToken as pi, QueryList as bi } from "@angular/core";
import { Subscription as gi, isObservable as vi, Subject as Ii, of as yi } from "rxjs";
import { take as ze } from "rxjs/operators";
import { isObservable as mi, of as fi } from "rxjs";
function Q(i) { return mi(i) ? i : fi(i); }
var D = class {
    _activeItemIndex = -1;
    _activeItem = null;
    _shouldActivationFollowFocus = !1;
    _horizontalOrientation = "ltr";
    _skipPredicateFn = s => !1;
    _trackByFn = s => s;
    _items = [];
    _typeahead;
    _typeaheadSubscription = gi.EMPTY;
    _hasInitialFocused = !1;
    _initializeFocus() { if (this._hasInitialFocused || this._items.length === 0)
        return; let s = 0; for (let t = 0; t < this._items.length; t++)
        if (!this._skipPredicateFn(this._items[t]) && !this._isItemDisabled(this._items[t])) {
            s = t;
            break;
        } let e = this._items[s]; e.makeFocusable ? (this._activeItem?.unfocus(), this._activeItemIndex = s, this._activeItem = e, this._typeahead?.setCurrentSelectedItemIndex(s), e.makeFocusable()) : this.focusItem(s), this._hasInitialFocused = !0; }
    constructor(s, e) { s instanceof bi ? (this._items = s.toArray(), s.changes.subscribe(t => this._itemsChanged(t.toArray()))) : vi(s) ? s.subscribe(t => this._itemsChanged(t)) : (this._items = s, this._initializeFocus()), typeof e.shouldActivationFollowFocus == "boolean" && (this._shouldActivationFollowFocus = e.shouldActivationFollowFocus), e.horizontalOrientation && (this._horizontalOrientation = e.horizontalOrientation), e.skipPredicate && (this._skipPredicateFn = e.skipPredicate), e.trackBy && (this._trackByFn = e.trackBy), typeof e.typeAheadDebounceInterval < "u" && this._setTypeAhead(e.typeAheadDebounceInterval); }
    change = new Ii;
    destroy() { this._typeaheadSubscription.unsubscribe(), this._typeahead?.destroy(), this.change.complete(); }
    onKeydown(s) { switch (s.key) {
        case "Tab": return;
        case "ArrowDown":
            this._focusNextItem();
            break;
        case "ArrowUp":
            this._focusPreviousItem();
            break;
        case "ArrowRight":
            this._horizontalOrientation === "rtl" ? this._collapseCurrentItem() : this._expandCurrentItem();
            break;
        case "ArrowLeft":
            this._horizontalOrientation === "rtl" ? this._expandCurrentItem() : this._collapseCurrentItem();
            break;
        case "Home":
            this._focusFirstItem();
            break;
        case "End":
            this._focusLastItem();
            break;
        case "Enter":
        case " ":
            this._activateCurrentItem();
            break;
        default:
            if (s.key === "*") {
                this._expandAllItemsAtCurrentItemLevel();
                break;
            }
            this._typeahead?.handleKey(s);
            return;
    } this._typeahead?.reset(), s.preventDefault(); }
    getActiveItemIndex() { return this._activeItemIndex; }
    getActiveItem() { return this._activeItem; }
    _itemsChanged(s) { this._hasInitialFocused && this._activeItem && !s.includes(this._activeItem) && (this._activeItem = null, this._hasInitialFocused = !1), this._items = s, this._typeahead?.setItems(this._items), this._updateActiveItemIndex(this._items), this._initializeFocus(); }
    _focusFirstItem() { this.focusItem(this._findNextAvailableItemIndex(-1)); }
    _focusLastItem() { this.focusItem(this._findPreviousAvailableItemIndex(this._items.length)); }
    _focusNextItem() { this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex)); }
    _focusPreviousItem() { this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex)); }
    focusItem(s, e = {}) { e.emitChangeEvent ??= !0; let t = typeof s == "number" ? s : this._items.findIndex(o => this._trackByFn(o) === this._trackByFn(s)); if (t < 0 || t >= this._items.length)
        return; let n = this._items[t]; if (this._activeItem !== null && this._trackByFn(n) === this._trackByFn(this._activeItem))
        return; let r = this._activeItem; this._activeItem = n ?? null, this._activeItemIndex = t, this._typeahead?.setCurrentSelectedItemIndex(t), this._activeItem?.focus(), r?.unfocus(), e.emitChangeEvent && this.change.next(this._activeItem), this._shouldActivationFollowFocus && this._activateCurrentItem(); }
    _updateActiveItemIndex(s) { let e = this._activeItem; if (!e)
        return; let t = s.findIndex(n => this._trackByFn(n) === this._trackByFn(e)); t > -1 && t !== this._activeItemIndex && (this._activeItemIndex = t, this._typeahead?.setCurrentSelectedItemIndex(t)); }
    _setTypeAhead(s) { this._typeahead = new I(this._items, { debounceInterval: typeof s == "number" ? s : void 0, skipPredicate: e => this._skipPredicateFn(e) }), this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(e => { this.focusItem(e); }); }
    _findNextAvailableItemIndex(s) { for (let e = s + 1; e < this._items.length; e++)
        if (!this._skipPredicateFn(this._items[e]))
            return e; return s; }
    _findPreviousAvailableItemIndex(s) { for (let e = s - 1; e >= 0; e--)
        if (!this._skipPredicateFn(this._items[e]))
            return e; return s; }
    _collapseCurrentItem() { if (this._activeItem)
        if (this._isCurrentItemExpanded())
            this._activeItem.collapse();
        else {
            let s = this._activeItem.getParent();
            if (!s || this._skipPredicateFn(s))
                return;
            this.focusItem(s);
        } }
    _expandCurrentItem() { this._activeItem && (this._isCurrentItemExpanded() ? Q(this._activeItem.getChildren()).pipe(ze(1)).subscribe(s => { let e = s.find(t => !this._skipPredicateFn(t)); e && this.focusItem(e); }) : this._activeItem.expand()); }
    _isCurrentItemExpanded() { return this._activeItem ? typeof this._activeItem.isExpanded == "boolean" ? this._activeItem.isExpanded : this._activeItem.isExpanded() : !1; }
    _isItemDisabled(s) { return typeof s.isDisabled == "boolean" ? s.isDisabled : s.isDisabled?.(); }
    _expandAllItemsAtCurrentItemLevel() { if (!this._activeItem)
        return; let s = this._activeItem.getParent(), e; s ? e = Q(s.getChildren()) : e = yi(this._items.filter(t => t.getParent() === null)), e.pipe(ze(1)).subscribe(t => { for (let n of t)
        n.expand(); }); }
    _activateCurrentItem() { this._activeItem?.activate(); }
}, $e = new pi("tree-key-manager", { providedIn: "root", factory: () => (i, s) => new D(i, s) });
import * as Qe from "@angular/core";
import { inject as Ai, APP_ID as Ei } from "@angular/core";
var Ye = new Map, X = class i {
    _appId = Ai(Ei);
    static _infix = `a${Math.floor(Math.random() * 1e5).toString()}`;
    getId(s, e = !1) { this._appId !== "ng" && (s += this._appId); let t = Ye.get(s); return t === void 0 ? t = 0 : t++, Ye.set(s, t), `${s}${e ? i._infix + "-" : ""}${t}`; }
    static \u0275fac = function (e) { return new (e || i); };
    static \u0275prov = Qe.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
};
import "rxjs/operators";
import "@angular/platform-browser";
import "@angular/common";
var Je = " ";
function ki(i, s, e) { let t = L(i, s); e = e.trim(), !t.some(n => n.trim() === e) && (t.push(e), i.setAttribute(s, t.join(Je))); }
function Oi(i, s, e) { let t = L(i, s); e = e.trim(); let n = t.filter(r => r !== e); n.length ? i.setAttribute(s, n.join(Je)) : i.removeAttribute(s); }
function L(i, s) { return i.getAttribute(s)?.match(/\S+/g) ?? []; }
var et = "cdk-describedby-message", N = "cdk-describedby-host", J = 0, Vn = (() => { class i {
    _platform = _(h);
    _document = _(qe);
    _messageRegistry = new Map;
    _messagesContainer = null;
    _id = `${J++}`;
    constructor() { _(T).load(M), this._id = _(Ti) + "-" + J++; }
    describe(e, t, n) { if (!this._canBeDescribed(e, t))
        return; let r = q(t, n); typeof t != "string" ? (Xe(t, this._id), this._messageRegistry.set(r, { messageElement: t, referenceCount: 0 })) : this._messageRegistry.has(r) || this._createMessageElement(t, n), this._isElementDescribedByMessage(e, r) || this._addMessageReference(e, r); }
    removeDescription(e, t, n) { if (!t || !this._isElementNode(e))
        return; let r = q(t, n); if (this._isElementDescribedByMessage(e, r) && this._removeMessageReference(e, r), typeof t == "string") {
        let o = this._messageRegistry.get(r);
        o && o.referenceCount === 0 && this._deleteMessageElement(r);
    } this._messagesContainer?.childNodes.length === 0 && (this._messagesContainer.remove(), this._messagesContainer = null); }
    ngOnDestroy() { let e = this._document.querySelectorAll(`[${N}="${this._id}"]`); for (let t = 0; t < e.length; t++)
        this._removeCdkDescribedByReferenceIds(e[t]), e[t].removeAttribute(N); this._messagesContainer?.remove(), this._messagesContainer = null, this._messageRegistry.clear(); }
    _createMessageElement(e, t) { let n = this._document.createElement("div"); Xe(n, this._id), n.textContent = e, t && n.setAttribute("role", t), this._createMessagesContainer(), this._messagesContainer.appendChild(n), this._messageRegistry.set(q(e, t), { messageElement: n, referenceCount: 0 }); }
    _deleteMessageElement(e) { this._messageRegistry.get(e)?.messageElement?.remove(), this._messageRegistry.delete(e); }
    _createMessagesContainer() { if (this._messagesContainer)
        return; let e = "cdk-describedby-message-container", t = this._document.querySelectorAll(`.${e}[platform="server"]`); for (let r = 0; r < t.length; r++)
        t[r].remove(); let n = this._document.createElement("div"); n.style.visibility = "hidden", n.classList.add(e), n.classList.add("cdk-visually-hidden"), this._platform.isBrowser || n.setAttribute("platform", "server"), this._document.body.appendChild(n), this._messagesContainer = n; }
    _removeCdkDescribedByReferenceIds(e) { let t = L(e, "aria-describedby").filter(n => n.indexOf(et) != 0); e.setAttribute("aria-describedby", t.join(" ")); }
    _addMessageReference(e, t) { let n = this._messageRegistry.get(t); ki(e, "aria-describedby", n.messageElement.id), e.setAttribute(N, this._id), n.referenceCount++; }
    _removeMessageReference(e, t) { let n = this._messageRegistry.get(t); n.referenceCount--, Oi(e, "aria-describedby", n.messageElement.id), e.removeAttribute(N); }
    _isElementDescribedByMessage(e, t) { let n = L(e, "aria-describedby"), r = this._messageRegistry.get(t), o = r && r.messageElement.id; return !!o && n.indexOf(o) != -1; }
    _canBeDescribed(e, t) { if (!this._isElementNode(e))
        return !1; if (t && typeof t == "object")
        return !0; let n = t == null ? "" : `${t}`.trim(), r = e.getAttribute("aria-label"); return n ? !r || r.trim() !== n : !1; }
    _isElementNode(e) { return e.nodeType === this._document.ELEMENT_NODE; }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = S.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
} return i; })();
function q(i, s) { return typeof i == "string" ? `${s || ""}/${i}` : i; }
function Xe(i, s) { i.id || (i.id = `${et}-${s}-${J++}`); }
var ee = class {
    _isNoopTreeKeyManager = !0;
    change = new Fi;
    destroy() { this.change.complete(); }
    onKeydown() { }
    getActiveItemIndex() { return null; }
    getActiveItem() { return null; }
    focusItem() { }
}, Zn = { provide: $e, useFactory: () => () => new ee }, te = class extends C {
    _focusTrapManager;
    _inertStrategy;
    get enabled() { return this._enabled; }
    set enabled(s) { this._enabled = s, this._enabled ? this._focusTrapManager.register(this) : this._focusTrapManager.deregister(this); }
    constructor(s, e, t, n, r, o, a, l) { super(s, e, t, n, a.defer, l), this._focusTrapManager = r, this._inertStrategy = o, this._focusTrapManager.register(this); }
    destroy() { this._focusTrapManager.deregister(this), super.destroy(); }
    _enable() { this._inertStrategy.preventFocus(this), this.toggleAnchors(!0); }
    _disable() { this._inertStrategy.allowFocus(this), this.toggleAnchors(!1); }
}, ie = class {
    _listener = null;
    preventFocus(s) { this._listener && s._document.removeEventListener("focus", this._listener, !0), this._listener = e => this._trapFocus(s, e), s._ngZone.runOutsideAngular(() => { s._document.addEventListener("focus", this._listener, !0); }); }
    allowFocus(s) { this._listener && (s._document.removeEventListener("focus", this._listener, !0), this._listener = null); }
    _trapFocus(s, e) { let t = e.target, n = s._element; t && !n.contains(t) && !t.closest?.("div.cdk-overlay-pane") && setTimeout(() => { s.enabled && !n.contains(s._document.activeElement) && s.focusFirstTabbableElement(); }); }
}, Di = new Mi("FOCUS_TRAP_INERT_STRATEGY"), Ni = (() => { class i {
    _focusTrapStack = [];
    register(e) { this._focusTrapStack = this._focusTrapStack.filter(n => n !== e); let t = this._focusTrapStack; t.length && t[t.length - 1]._disable(), t.push(e), e._enable(); }
    deregister(e) { e._disable(); let t = this._focusTrapStack, n = t.indexOf(e); n !== -1 && (t.splice(n, 1), t.length && t[t.length - 1]._enable()); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = S.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
} return i; })(), Gn = (() => { class i {
    _checker = _(z);
    _ngZone = _(Ci);
    _focusTrapManager = _(Ni);
    _document = _(qe);
    _inertStrategy;
    _injector = _(wi);
    constructor() { let e = _(Di, { optional: !0 }); this._inertStrategy = e || new ie; }
    create(e, t = { defer: !1 }) { return new te(e, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, t, this._injector); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = S.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
} return i; })();
export { oi as A11yModule, $ as ActiveDescendantKeyManager, Vn as AriaDescriber, ri as CdkAriaLive, pt as CdkMonitorFocus, si as CdkTrapFocus, te as ConfigurableFocusTrap, Gn as ConfigurableFocusTrapFactory, ie as EventListenerFocusTrapInertStrategy, fe as FOCUS_MONITOR_DEFAULT_OPTIONS, Di as FOCUS_TRAP_INERT_STRATEGY, Y as FocusKeyManager, pe as FocusMonitor, A as FocusMonitorDetectionMode, C as FocusTrap, xe as FocusTrapFactory, f as HighContrastMode, Ke as HighContrastModeDetector, le as INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS, he as INPUT_MODALITY_DETECTOR_OPTIONS, me as InputModalityDetector, z as InteractivityChecker, V as IsFocusableConfig, Be as LIVE_ANNOUNCER_DEFAULT_OPTIONS, Pe as LIVE_ANNOUNCER_ELEMENT_TOKEN, b as ListKeyManager, Ue as LiveAnnouncer, Zn as NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER, ee as NoopTreeKeyManager, $e as TREE_KEY_MANAGER, D as TreeKeyManager, X as _IdGenerator, ki as addAriaReferencedId, L as getAriaReferenceIds, x as isFakeMousedownFromScreenReader, P as isFakeTouchstartFromScreenReader, Oi as removeAriaReferencedId };
