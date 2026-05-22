import { c as Tt, f as At, i as Ft } from "@nf-internal/chunk-LKNH3DM4";
import { a as Vt, b as Bt } from "@nf-internal/chunk-WUMUGF6A";
import { a as st } from "@nf-internal/chunk-ZVGPI6ZI";
import { b as T, c as pe, d as A } from "@nf-internal/chunk-KQD4JEVW";
import { a as g } from "@nf-internal/chunk-JE6VEUSL";
import { a as nt } from "@nf-internal/chunk-XID2BBVI";
import { a as B, c as Mt } from "@nf-internal/chunk-MQ6KVUBG";
import { a as rt, b as R, c as X, d as x } from "@nf-internal/chunk-7C4FY2MM";
import { d as Y } from "@nf-internal/chunk-ZGWTKG5Z";
import { a as S } from "@nf-internal/chunk-7RHXFCZM";
import { a as W, b as Pt } from "@nf-internal/chunk-4CLCTAJ7";
import * as _ from "@angular/core";
import { DOCUMENT as I, NgZone as V, inject as p, Injector as N, RendererFactory2 as St, afterNextRender as Gt, ElementRef as $, InjectionToken as Ct, ApplicationRef as Ke, Renderer2 as qe, ANIMATION_MODULE_TYPE as Qe, EnvironmentInjector as Je, EventEmitter as E, TemplateRef as ti, ViewContainerRef as ei, booleanAttribute as k } from "@angular/core";
import { Location as ii } from "@angular/common";
import { Subject as D, Subscription as P } from "rxjs";
import * as h from "@angular/core";
import { InjectionToken as dt, forwardRef as ve, inject as u, NgZone as G, RendererFactory2 as It, ElementRef as ft, Renderer2 as ye, DOCUMENT as Nt, ChangeDetectorRef as be, signal as lt, Injector as we, effect as Se, ApplicationRef as Ce, DestroyRef as ke, untracked as Oe, afterNextRender as Re, booleanAttribute as xe, ViewContainerRef as Ee, TemplateRef as De, IterableDiffers as Pe } from "@angular/core";
import { Subject as b, of as Wt, Observable as Yt, Subscription as Me, animationFrameScheduler as Ve, asapScheduler as Be, isObservable as Te } from "rxjs";
import { distinctUntilChanged as Xt, auditTime as ut, filter as Ht, startWith as jt, takeUntil as at, pairwise as Ae, switchMap as Fe, shareReplay as Le } from "rxjs/operators";
import { isObservable as ge, of as me } from "rxjs";
import { ConnectableObservable as _e } from "rxjs";
var H = class {
};
function Lt(o) { return o && typeof o.connect == "function" && !(o instanceof _e); }
var j = class extends H {
    _data;
    constructor(i) { super(), this._data = i; }
    connect() { return ge(this._data) ? this._data : me(this._data); }
    disconnect() { }
}, F = (function (o) { return o[o.REPLACED = 0] = "REPLACED", o[o.INSERTED = 1] = "INSERTED", o[o.MOVED = 2] = "MOVED", o[o.REMOVED = 3] = "REMOVED", o; })(F || {}), Z = class {
    viewCacheSize = 20;
    _viewCache = [];
    applyChanges(i, t, e, s, n) { i.forEachOperation((r, l, a) => { let c, d; if (r.previousIndex == null) {
        let f = () => e(r, l, a);
        c = this._insertView(f, a, t, s(r)), d = c ? F.INSERTED : F.REPLACED;
    }
    else
        a == null ? (this._detachAndCacheView(l, t), d = F.REMOVED) : (c = this._moveView(l, a, t, s(r)), d = F.MOVED); n && n({ context: c?.context, operation: d, record: r }); }); }
    detach() { for (let i of this._viewCache)
        i.destroy(); this._viewCache = []; }
    _insertView(i, t, e, s) { let n = this._insertViewFromCache(t, e); if (n) {
        n.context.$implicit = s;
        return;
    } let r = i(); return e.createEmbeddedView(r.templateRef, r.context, r.index); }
    _detachAndCacheView(i, t) { let e = t.detach(i); this._maybeCacheView(e, t); }
    _moveView(i, t, e, s) { let n = e.get(i); return e.move(n, t), n.context.$implicit = s, n; }
    _maybeCacheView(i, t) { if (this._viewCache.length < this.viewCacheSize)
        this._viewCache.push(i);
    else {
        let e = t.indexOf(i);
        e === -1 ? i.destroy() : t.remove(e);
    } }
    _insertViewFromCache(i, t) { let e = this._viewCache.pop(); return e && t.insert(e, i), e || null; }
};
import "@angular/common";
var ze = ["contentWrapper"], Ie = ["*"], Zt = new dt("VIRTUAL_SCROLL_STRATEGY"), ht = class {
    _scrolledIndexChange = new b;
    scrolledIndexChange = this._scrolledIndexChange.pipe(Xt());
    _viewport = null;
    _itemSize;
    _minBufferPx;
    _maxBufferPx;
    constructor(i, t, e) { this._itemSize = i, this._minBufferPx = t, this._maxBufferPx = e; }
    attach(i) { this._viewport = i, this._updateTotalContentSize(), this._updateRenderedRange(); }
    detach() { this._scrolledIndexChange.complete(), this._viewport = null; }
    updateItemAndBufferSize(i, t, e) { e < t, this._itemSize = i, this._minBufferPx = t, this._maxBufferPx = e, this._updateTotalContentSize(), this._updateRenderedRange(); }
    onContentScrolled() { this._updateRenderedRange(); }
    onDataLengthChanged() { this._updateTotalContentSize(), this._updateRenderedRange(); }
    onContentRendered() { }
    onRenderedOffsetChanged() { }
    scrollToIndex(i, t) { this._viewport && this._viewport.scrollToOffset(i * this._itemSize, t); }
    _updateTotalContentSize() { this._viewport && this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize); }
    _updateRenderedRange() { if (!this._viewport)
        return; let i = this._viewport.getRenderedRange(), t = { start: i.start, end: i.end }, e = this._viewport.getViewportSize(), s = this._viewport.getDataLength(), n = this._viewport.measureScrollOffset(), r = this._itemSize > 0 ? n / this._itemSize : 0; if (t.end > s) {
        let a = Math.ceil(e / this._itemSize), c = Math.max(0, Math.min(r, s - a));
        r != c && (r = c, n = c * this._itemSize, t.start = Math.floor(r)), t.end = Math.max(0, Math.min(s, t.start + a));
    } let l = n - t.start * this._itemSize; if (l < this._minBufferPx && t.start != 0) {
        let a = Math.ceil((this._maxBufferPx - l) / this._itemSize);
        t.start = Math.max(0, t.start - a), t.end = Math.min(s, Math.ceil(r + (e + this._minBufferPx) / this._itemSize));
    }
    else {
        let a = t.end * this._itemSize - (n + e);
        if (a < this._minBufferPx && t.end != s) {
            let c = Math.ceil((this._maxBufferPx - a) / this._itemSize);
            c > 0 && (t.end = Math.min(s, t.end + c), t.start = Math.max(0, Math.floor(r - this._minBufferPx / this._itemSize)));
        }
    } this._viewport.setRenderedRange(t), this._viewport.setRenderedContentOffset(Math.round(this._itemSize * t.start)), this._scrolledIndexChange.next(Math.floor(r)); }
};
function Ne(o) { return o._scrollStrategy; }
var We = (() => { class o {
    get itemSize() { return this._itemSize; }
    set itemSize(t) { this._itemSize = B(t); }
    _itemSize = 20;
    get minBufferPx() { return this._minBufferPx; }
    set minBufferPx(t) { this._minBufferPx = B(t); }
    _minBufferPx = 100;
    get maxBufferPx() { return this._maxBufferPx; }
    set maxBufferPx(t) { this._maxBufferPx = B(t); }
    _maxBufferPx = 200;
    _scrollStrategy = new ht(this.itemSize, this.minBufferPx, this.maxBufferPx);
    ngOnChanges() { this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx); }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275dir = h.\u0275\u0275defineDirective({ type: o, selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]], inputs: { itemSize: "itemSize", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, features: [h.\u0275\u0275ProvidersFeature([{ provide: Zt, useFactory: Ne, deps: [ve(() => o)] }]), h.\u0275\u0275NgOnChangesFeature] });
} return o; })(), Ye = 20, L = (() => { class o {
    _ngZone = u(G);
    _platform = u(S);
    _renderer = u(It).createRenderer(null, null);
    _cleanupGlobalListener;
    constructor() { }
    _scrolled = new b;
    _scrolledCount = 0;
    scrollContainers = new Map;
    register(t) { this.scrollContainers.has(t) || this.scrollContainers.set(t, t.elementScrolled().subscribe(() => this._scrolled.next(t))); }
    deregister(t) { let e = this.scrollContainers.get(t); e && (e.unsubscribe(), this.scrollContainers.delete(t)); }
    scrolled(t = Ye) { return this._platform.isBrowser ? new Yt(e => { this._cleanupGlobalListener || (this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()))); let s = t > 0 ? this._scrolled.pipe(ut(t)).subscribe(e) : this._scrolled.subscribe(e); return this._scrolledCount++, () => { s.unsubscribe(), this._scrolledCount--, this._scrolledCount || (this._cleanupGlobalListener?.(), this._cleanupGlobalListener = void 0); }; }) : Wt(); }
    ngOnDestroy() { this._cleanupGlobalListener?.(), this._cleanupGlobalListener = void 0, this.scrollContainers.forEach((t, e) => this.deregister(e)), this._scrolled.complete(); }
    ancestorScrolled(t, e) { let s = this.getAncestorScrollContainers(t); return this.scrolled(e).pipe(Ht(n => !n || s.indexOf(n) > -1)); }
    getAncestorScrollContainers(t) { let e = []; return this.scrollContainers.forEach((s, n) => { this._scrollableContainsElement(n, t) && e.push(n); }), e; }
    _scrollableContainsElement(t, e) { let s = Mt(e), n = t.getElementRef().nativeElement; do
        if (s == n)
            return !0;
    while (s = s.parentElement); return !1; }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" });
} return o; })(), pt = (() => { class o {
    elementRef = u(ft);
    scrollDispatcher = u(L);
    ngZone = u(G);
    dir = u(T, { optional: !0 });
    _scrollElement = this.elementRef.nativeElement;
    _destroyed = new b;
    _renderer = u(ye);
    _cleanupScroll;
    _elementScrolled = new b;
    constructor() { }
    ngOnInit() { this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", t => this._elementScrolled.next(t))), this.scrollDispatcher.register(this); }
    ngOnDestroy() { this._cleanupScroll?.(), this._elementScrolled.complete(), this.scrollDispatcher.deregister(this), this._destroyed.next(), this._destroyed.complete(); }
    elementScrolled() { return this._elementScrolled; }
    getElementRef() { return this.elementRef; }
    scrollTo(t) { let e = this.elementRef.nativeElement, s = this.dir && this.dir.value == "rtl"; t.left == null && (t.left = s ? t.end : t.start), t.right == null && (t.right = s ? t.start : t.end), t.bottom != null && (t.top = e.scrollHeight - e.clientHeight - t.bottom), s && x() != R.NORMAL ? (t.left != null && (t.right = e.scrollWidth - e.clientWidth - t.left), x() == R.INVERTED ? t.left = t.right : x() == R.NEGATED && (t.left = t.right ? -t.right : t.right)) : t.right != null && (t.left = e.scrollWidth - e.clientWidth - t.right), this._applyScrollToOptions(t); }
    _applyScrollToOptions(t) { let e = this.elementRef.nativeElement; X() ? e.scrollTo(t) : (t.top != null && (e.scrollTop = t.top), t.left != null && (e.scrollLeft = t.left)); }
    measureScrollOffset(t) { let e = "left", s = "right", n = this.elementRef.nativeElement; if (t == "top")
        return n.scrollTop; if (t == "bottom")
        return n.scrollHeight - n.clientHeight - n.scrollTop; let r = this.dir && this.dir.value == "rtl"; return t == "start" ? t = r ? s : e : t == "end" && (t = r ? e : s), r && x() == R.INVERTED ? t == e ? n.scrollWidth - n.clientWidth - n.scrollLeft : n.scrollLeft : r && x() == R.NEGATED ? t == e ? n.scrollLeft + n.scrollWidth - n.clientWidth : -n.scrollLeft : t == e ? n.scrollLeft : n.scrollWidth - n.clientWidth - n.scrollLeft; }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275dir = h.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]] });
} return o; })(), Xe = 20, C = (() => { class o {
    _platform = u(S);
    _listeners;
    _viewportSize = null;
    _change = new b;
    _document = u(Nt);
    constructor() { let t = u(G), e = u(It).createRenderer(null, null); t.runOutsideAngular(() => { if (this._platform.isBrowser) {
        let s = n => this._change.next(n);
        this._listeners = [e.listen("window", "resize", s), e.listen("window", "orientationchange", s)];
    } this.change().subscribe(() => this._viewportSize = null); }); }
    ngOnDestroy() { this._listeners?.forEach(t => t()), this._change.complete(); }
    getViewportSize() { this._viewportSize || this._updateViewportSize(); let t = { width: this._viewportSize.width, height: this._viewportSize.height }; return this._platform.isBrowser || (this._viewportSize = null), t; }
    getViewportRect() { let t = this.getViewportScrollPosition(), { width: e, height: s } = this.getViewportSize(); return { top: t.top, left: t.left, bottom: t.top + s, right: t.left + e, height: s, width: e }; }
    getViewportScrollPosition() { if (!this._platform.isBrowser)
        return { top: 0, left: 0 }; let t = this._document, e = this._getWindow(), s = t.documentElement, n = s.getBoundingClientRect(), r = -n.top || t.body?.scrollTop || e.scrollY || s.scrollTop || 0, l = -n.left || t.body?.scrollLeft || e.scrollX || s.scrollLeft || 0; return { top: r, left: l }; }
    change(t = Xe) { return t > 0 ? this._change.pipe(ut(t)) : this._change; }
    _getWindow() { return this._document.defaultView || window; }
    _updateViewportSize() { let t = this._getWindow(); this._viewportSize = this._platform.isBrowser ? { width: t.innerWidth, height: t.innerHeight } : { width: 0, height: 0 }; }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" });
} return o; })(), U = new dt("VIRTUAL_SCROLLABLE"), _t = (() => { class o extends pt {
    constructor() { super(); }
    measureViewportSize(t) { let e = this.elementRef.nativeElement; return t === "horizontal" ? e.clientWidth : e.clientHeight; }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275dir = h.\u0275\u0275defineDirective({ type: o, features: [h.\u0275\u0275InheritDefinitionFeature] });
} return o; })();
function He(o, i) { return o.start == i.start && o.end == i.end; }
var je = typeof requestAnimationFrame < "u" ? Ve : Be, Ut = new dt("CDK_VIRTUAL_SCROLL_VIEWPORT"), Ze = (() => {
    class o extends _t {
        elementRef = u(ft);
        _changeDetectorRef = u(be);
        _scrollStrategy = u(Zt, { optional: !0 });
        scrollable = u(U, { optional: !0 });
        _platform = u(S);
        _detachedSubject = new b;
        _renderedRangeSubject = new b;
        _renderedContentOffsetSubject = new b;
        get orientation() { return this._orientation; }
        set orientation(t) { this._orientation !== t && (this._orientation = t, this._calculateSpacerSize()); }
        _orientation = "vertical";
        appendOnly = !1;
        scrolledIndexChange = new Yt(t => this._scrollStrategy.scrolledIndexChange.subscribe(e => Promise.resolve().then(() => this.ngZone.run(() => t.next(e)))));
        _contentWrapper;
        renderedRangeStream = this._renderedRangeSubject;
        renderedContentOffset = this._renderedContentOffsetSubject.pipe(Ht(t => t !== null), Xt());
        _totalContentSize = 0;
        _totalContentWidth = lt("");
        _totalContentHeight = lt("");
        _renderedContentTransform;
        _renderedRange = { start: 0, end: 0 };
        _dataLength = 0;
        _viewportSize = 0;
        _forOf = null;
        _renderedContentOffset = 0;
        _renderedContentOffsetNeedsRewrite = !1;
        _changeDetectionNeeded = lt(!1);
        _runAfterChangeDetection = [];
        _viewportChanges = Me.EMPTY;
        _injector = u(we);
        _isDestroyed = !1;
        constructor() { super(); let t = u(C); this._scrollStrategy, this._viewportChanges = t.change().subscribe(() => { this.checkViewportSize(); }), this.scrollable || (this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"), this.scrollable = this); let e = Se(() => { this._changeDetectionNeeded() && this._doChangeDetection(); }, { injector: u(Ce).injector }); u(ke).onDestroy(() => { e.destroy(); }); }
        ngOnInit() { this._platform.isBrowser && (this.scrollable === this && super.ngOnInit(), this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => { this._measureViewportSize(), this._scrollStrategy.attach(this), this.scrollable.elementScrolled().pipe(jt(null), ut(0, je), at(this._destroyed)).subscribe(() => this._scrollStrategy.onContentScrolled()), this._markChangeDetectionNeeded(); }))); }
        ngOnDestroy() { this.detach(), this._scrollStrategy.detach(), this._renderedRangeSubject.complete(), this._detachedSubject.complete(), this._viewportChanges.unsubscribe(), this._isDestroyed = !0, super.ngOnDestroy(); }
        attach(t) { this._forOf, this.ngZone.runOutsideAngular(() => { this._forOf = t, this._forOf.dataStream.pipe(at(this._detachedSubject)).subscribe(e => { let s = e.length; s !== this._dataLength && (this._dataLength = s, this._scrollStrategy.onDataLengthChanged()), this._doChangeDetection(); }); }); }
        detach() { this._forOf = null, this._detachedSubject.next(); }
        getDataLength() { return this._dataLength; }
        getViewportSize() { return this._viewportSize; }
        getRenderedRange() { return this._renderedRange; }
        measureBoundingClientRectWithScrollOffset(t) { return this.getElementRef().nativeElement.getBoundingClientRect()[t]; }
        setTotalContentSize(t) { this._totalContentSize !== t && (this._totalContentSize = t, this._calculateSpacerSize(), this._markChangeDetectionNeeded()); }
        setRenderedRange(t) { He(this._renderedRange, t) || (this.appendOnly && (t = { start: 0, end: Math.max(this._renderedRange.end, t.end) }), this._renderedRangeSubject.next(this._renderedRange = t), this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered())); }
        getOffsetToRenderedContentStart() { return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset; }
        setRenderedContentOffset(t, e = "to-start") { t = this.appendOnly && e === "to-start" ? 0 : t; let s = this.dir && this.dir.value == "rtl", n = this.orientation == "horizontal", r = n ? "X" : "Y", a = `translate${r}(${Number((n && s ? -1 : 1) * t)}px)`; this._renderedContentOffset = t, e === "to-end" && (a += ` translate${r}(-100%)`, this._renderedContentOffsetNeedsRewrite = !0), this._renderedContentTransform != a && (this._renderedContentTransform = a, this._markChangeDetectionNeeded(() => { this._renderedContentOffsetNeedsRewrite ? (this._renderedContentOffset -= this.measureRenderedContentSize(), this._renderedContentOffsetNeedsRewrite = !1, this.setRenderedContentOffset(this._renderedContentOffset)) : this._scrollStrategy.onRenderedOffsetChanged(); })); }
        scrollToOffset(t, e = "auto") { let s = { behavior: e }; this.orientation === "horizontal" ? s.start = t : s.top = t, this.scrollable.scrollTo(s); }
        scrollToIndex(t, e = "auto") { this._scrollStrategy.scrollToIndex(t, e); }
        measureScrollOffset(t) { let e; return this.scrollable == this ? e = s => super.measureScrollOffset(s) : e = s => this.scrollable.measureScrollOffset(s), Math.max(0, e(t ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset()); }
        measureViewportOffset(t) { let e, s = "left", n = "right", r = this.dir?.value == "rtl"; t == "start" ? e = r ? n : s : t == "end" ? e = r ? s : n : t ? e = t : e = this.orientation === "horizontal" ? "left" : "top"; let l = this.scrollable.measureBoundingClientRectWithScrollOffset(e); return this.elementRef.nativeElement.getBoundingClientRect()[e] - l; }
        measureRenderedContentSize() { let t = this._contentWrapper.nativeElement; return this.orientation === "horizontal" ? t.offsetWidth : t.offsetHeight; }
        measureRangeSize(t) { return this._forOf ? this._forOf.measureRangeSize(t, this.orientation) : 0; }
        checkViewportSize() { this._measureViewportSize(), this._scrollStrategy.onDataLengthChanged(); }
        _measureViewportSize() { this._viewportSize = this.scrollable.measureViewportSize(this.orientation); }
        _markChangeDetectionNeeded(t) { t && this._runAfterChangeDetection.push(t), !Oe(this._changeDetectionNeeded) && this.ngZone.runOutsideAngular(() => { Promise.resolve().then(() => { this.ngZone.run(() => { this._changeDetectionNeeded.set(!0); }); }); }); }
        _doChangeDetection() { this._isDestroyed || this.ngZone.run(() => { this._changeDetectorRef.markForCheck(), this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform, this._renderedContentOffsetSubject.next(this.getOffsetToRenderedContentStart()), Re(() => { this._changeDetectionNeeded.set(!1); let t = this._runAfterChangeDetection; this._runAfterChangeDetection = []; for (let e of t)
            e(); }, { injector: this._injector }); }); }
        _calculateSpacerSize() { this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`), this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : ""); }
        static \u0275fac = function (e) { return new (e || o); };
        static \u0275cmp = h.\u0275\u0275defineComponent({ type: o, selectors: [["cdk-virtual-scroll-viewport"]], viewQuery: function (e, s) { if (e & 1 && h.\u0275\u0275viewQuery(ze, 7), e & 2) {
                let n;
                h.\u0275\u0275queryRefresh(n = h.\u0275\u0275loadQuery()) && (s._contentWrapper = n.first);
            } }, hostAttrs: [1, "cdk-virtual-scroll-viewport"], hostVars: 4, hostBindings: function (e, s) { e & 2 && h.\u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal", s.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", s.orientation !== "horizontal"); }, inputs: { orientation: "orientation", appendOnly: [2, "appendOnly", "appendOnly", xe] }, outputs: { scrolledIndexChange: "scrolledIndexChange" }, features: [h.\u0275\u0275ProvidersFeature([{ provide: pt, useFactory: () => u(U, { optional: !0 }) || u(o) }, { provide: Ut, useExisting: o }]), h.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: Ie, decls: 4, vars: 4, consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]], template: function (e, s) { e & 1 && (h.\u0275\u0275projectionDef(), h.\u0275\u0275domElementStart(0, "div", 1, 0), h.\u0275\u0275projection(2), h.\u0275\u0275domElementEnd(), h.\u0275\u0275domElement(3, "div", 2)), e & 2 && (h.\u0275\u0275advance(3), h.\u0275\u0275styleProp("width", s._totalContentWidth())("height", s._totalContentHeight())); }, styles: [`cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}
`], encapsulation: 2, changeDetection: 0 });
    }
    return o;
})();
function zt(o, i, t) { let e = t; if (!e.getBoundingClientRect)
    return 0; let s = e.getBoundingClientRect(); return o === "horizontal" ? i === "start" ? s.left : s.right : i === "start" ? s.top : s.bottom; }
var Ue = (() => { class o {
    _viewContainerRef = u(Ee);
    _template = u(De);
    _differs = u(Pe);
    _viewRepeater = new Z;
    _viewport = u(Ut, { skipSelf: !0 });
    viewChange = new b;
    _dataSourceChanges = new b;
    get cdkVirtualForOf() { return this._cdkVirtualForOf; }
    set cdkVirtualForOf(t) { this._cdkVirtualForOf = t, Lt(t) ? this._dataSourceChanges.next(t) : this._dataSourceChanges.next(new j(Te(t) ? t : Array.from(t || []))); }
    _cdkVirtualForOf;
    get cdkVirtualForTrackBy() { return this._cdkVirtualForTrackBy; }
    set cdkVirtualForTrackBy(t) { this._needsUpdate = !0, this._cdkVirtualForTrackBy = t ? (e, s) => t(e + (this._renderedRange ? this._renderedRange.start : 0), s) : void 0; }
    _cdkVirtualForTrackBy;
    set cdkVirtualForTemplate(t) { t && (this._needsUpdate = !0, this._template = t); }
    get cdkVirtualForTemplateCacheSize() { return this._viewRepeater.viewCacheSize; }
    set cdkVirtualForTemplateCacheSize(t) { this._viewRepeater.viewCacheSize = B(t); }
    dataStream = this._dataSourceChanges.pipe(jt(null), Ae(), Fe(([t, e]) => this._changeDataSource(t, e)), Le(1));
    _differ = null;
    _data = [];
    _renderedItems = [];
    _renderedRange = { start: 0, end: 0 };
    _needsUpdate = !1;
    _destroyed = new b;
    constructor() { let t = u(G); this.dataStream.subscribe(e => { this._data = e, this._onRenderedDataChange(); }), this._viewport.renderedRangeStream.pipe(at(this._destroyed)).subscribe(e => { this._renderedRange = e, this.viewChange.observers.length && t.run(() => this.viewChange.next(this._renderedRange)), this._onRenderedDataChange(); }), this._viewport.attach(this); }
    measureRangeSize(t, e) { if (t.start >= t.end)
        return 0; t.start < this._renderedRange.start || t.end > this._renderedRange.end; let s = t.start - this._renderedRange.start, n = t.end - t.start, r, l; for (let a = 0; a < n; a++) {
        let c = this._viewContainerRef.get(a + s);
        if (c && c.rootNodes.length) {
            r = l = c.rootNodes[0];
            break;
        }
    } for (let a = n - 1; a > -1; a--) {
        let c = this._viewContainerRef.get(a + s);
        if (c && c.rootNodes.length) {
            l = c.rootNodes[c.rootNodes.length - 1];
            break;
        }
    } return r && l ? zt(e, "end", l) - zt(e, "start", r) : 0; }
    ngDoCheck() { if (this._differ && this._needsUpdate) {
        let t = this._differ.diff(this._renderedItems);
        t ? this._applyChanges(t) : this._updateContext(), this._needsUpdate = !1;
    } }
    ngOnDestroy() { this._viewport.detach(), this._dataSourceChanges.next(void 0), this._dataSourceChanges.complete(), this.viewChange.complete(), this._destroyed.next(), this._destroyed.complete(), this._viewRepeater.detach(); }
    _onRenderedDataChange() { this._renderedRange && (this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end), this._differ || (this._differ = this._differs.find(this._renderedItems).create((t, e) => this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(t, e) : e)), this._needsUpdate = !0); }
    _changeDataSource(t, e) { return t && t.disconnect(this), this._needsUpdate = !0, e ? e.connect(this) : Wt(); }
    _updateContext() { let t = this._data.length, e = this._viewContainerRef.length; for (; e--;) {
        let s = this._viewContainerRef.get(e);
        s.context.index = this._renderedRange.start + e, s.context.count = t, this._updateComputedContextProperties(s.context), s.detectChanges();
    } }
    _applyChanges(t) { this._viewRepeater.applyChanges(t, this._viewContainerRef, (n, r, l) => this._getEmbeddedViewArgs(n, l), n => n.item), t.forEachIdentityChange(n => { let r = this._viewContainerRef.get(n.currentIndex); r.context.$implicit = n.item; }); let e = this._data.length, s = this._viewContainerRef.length; for (; s--;) {
        let n = this._viewContainerRef.get(s);
        n.context.index = this._renderedRange.start + s, n.context.count = e, this._updateComputedContextProperties(n.context);
    } }
    _updateComputedContextProperties(t) { t.first = t.index === 0, t.last = t.index === t.count - 1, t.even = t.index % 2 === 0, t.odd = !t.even; }
    _getEmbeddedViewArgs(t, e) { return { templateRef: this._template, context: { $implicit: t.item, cdkVirtualForOf: this._cdkVirtualForOf, index: -1, count: -1, first: !1, last: !1, odd: !1, even: !1 }, index: e }; }
    static ngTemplateContextGuard(t, e) { return !0; }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275dir = h.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]], inputs: { cdkVirtualForOf: "cdkVirtualForOf", cdkVirtualForTrackBy: "cdkVirtualForTrackBy", cdkVirtualForTemplate: "cdkVirtualForTemplate", cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize" } });
} return o; })(), Ge = (() => { class o extends _t {
    constructor() { super(); }
    measureBoundingClientRectWithScrollOffset(t) { return this.getElementRef().nativeElement.getBoundingClientRect()[t] - this.measureScrollOffset(t); }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275dir = h.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkVirtualScrollingElement", ""]], hostAttrs: [1, "cdk-virtual-scrollable"], features: [h.\u0275\u0275ProvidersFeature([{ provide: U, useExisting: o }]), h.\u0275\u0275InheritDefinitionFeature] });
} return o; })(), $e = (() => { class o extends _t {
    constructor() { super(); let t = u(Nt); this.elementRef = new ft(t.documentElement), this._scrollElement = t; }
    measureBoundingClientRectWithScrollOffset(t) { return this.getElementRef().nativeElement.getBoundingClientRect()[t]; }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275dir = h.\u0275\u0275defineDirective({ type: o, selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]], features: [h.\u0275\u0275ProvidersFeature([{ provide: U, useExisting: o }]), h.\u0275\u0275InheritDefinitionFeature] });
} return o; })(), ct = (() => { class o {
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: o });
    static \u0275inj = h.\u0275\u0275defineInjector({});
} return o; })(), gt = (() => { class o {
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: o });
    static \u0275inj = h.\u0275\u0275defineInjector({ imports: [A, ct, A, ct] });
} return o; })();
import { filter as oi, takeWhile as si } from "rxjs/operators";
var $t = X();
function ie(o) { return new K(o.get(C), o.get(I)); }
var K = class {
    _viewportRuler;
    _previousHTMLStyles = { top: "", left: "" };
    _previousScrollPosition;
    _isEnabled = !1;
    _document;
    constructor(i, t) { this._viewportRuler = i, this._document = t; }
    attach() { }
    enable() { if (this._canBeEnabled()) {
        let i = this._document.documentElement;
        this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(), this._previousHTMLStyles.left = i.style.left || "", this._previousHTMLStyles.top = i.style.top || "", i.style.left = g(-this._previousScrollPosition.left), i.style.top = g(-this._previousScrollPosition.top), i.classList.add("cdk-global-scrollblock"), this._isEnabled = !0;
    } }
    disable() { if (this._isEnabled) {
        let i = this._document.documentElement, t = this._document.body, e = i.style, s = t.style, n = e.scrollBehavior || "", r = s.scrollBehavior || "";
        this._isEnabled = !1, e.left = this._previousHTMLStyles.left, e.top = this._previousHTMLStyles.top, i.classList.remove("cdk-global-scrollblock"), $t && (e.scrollBehavior = s.scrollBehavior = "auto"), window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top), $t && (e.scrollBehavior = n, s.scrollBehavior = r);
    } }
    _canBeEnabled() { if (this._document.documentElement.classList.contains("cdk-global-scrollblock") || this._isEnabled)
        return !1; let t = this._document.documentElement, e = this._viewportRuler.getViewportSize(); return t.scrollHeight > e.height || t.scrollWidth > e.width; }
};
function oe(o, i) { return new q(o.get(L), o.get(V), o.get(C), i); }
var q = class {
    _scrollDispatcher;
    _ngZone;
    _viewportRuler;
    _config;
    _scrollSubscription = null;
    _overlayRef;
    _initialScrollPosition;
    constructor(i, t, e, s) { this._scrollDispatcher = i, this._ngZone = t, this._viewportRuler = e, this._config = s; }
    attach(i) { this._overlayRef, this._overlayRef = i; }
    enable() { if (this._scrollSubscription)
        return; let i = this._scrollDispatcher.scrolled(0).pipe(oi(t => !t || !this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement))); this._config && this._config.threshold && this._config.threshold > 1 ? (this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top, this._scrollSubscription = i.subscribe(() => { let t = this._viewportRuler.getViewportScrollPosition().top; Math.abs(t - this._initialScrollPosition) > this._config.threshold ? this._detach() : this._overlayRef.updatePosition(); })) : this._scrollSubscription = i.subscribe(this._detach); }
    disable() { this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null); }
    detach() { this.disable(), this._overlayRef = null; }
    _detach = () => { this.disable(), this._overlayRef.hasAttached() && this._ngZone.run(() => this._overlayRef.detach()); };
};
function ni() { return new M; }
var M = class {
    enable() { }
    disable() { }
    attach() { }
};
function mt(o, i) { return i.some(t => { let e = o.bottom < t.top, s = o.top > t.bottom, n = o.right < t.left, r = o.left > t.right; return e || s || n || r; }); }
function Kt(o, i) { return i.some(t => { let e = o.top < t.top, s = o.bottom > t.bottom, n = o.left < t.left, r = o.right > t.right; return e || s || n || r; }); }
function kt(o, i) { return new Q(o.get(L), o.get(C), o.get(V), i); }
var Q = class {
    _scrollDispatcher;
    _viewportRuler;
    _ngZone;
    _config;
    _scrollSubscription = null;
    _overlayRef;
    constructor(i, t, e, s) { this._scrollDispatcher = i, this._viewportRuler = t, this._ngZone = e, this._config = s; }
    attach(i) { this._overlayRef, this._overlayRef = i; }
    enable() { if (!this._scrollSubscription) {
        let i = this._config ? this._config.scrollThrottle : 0;
        this._scrollSubscription = this._scrollDispatcher.scrolled(i).subscribe(() => { if (this._overlayRef.updatePosition(), this._config && this._config.autoClose) {
            let t = this._overlayRef.overlayElement.getBoundingClientRect(), { width: e, height: s } = this._viewportRuler.getViewportSize();
            mt(t, [{ width: e, height: s, bottom: s, right: e, top: 0, left: 0 }]) && (this.disable(), this._ngZone.run(() => this._overlayRef.detach()));
        } });
    } }
    disable() { this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null); }
    detach() { this.disable(), this._overlayRef = null; }
}, se = (() => { class o {
    _injector = p(N);
    constructor() { }
    noop = () => new M;
    close = t => oe(this._injector, t);
    block = () => ie(this._injector);
    reposition = t => kt(this._injector, t);
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" });
} return o; })(), z = class {
    positionStrategy;
    scrollStrategy = new M;
    panelClass = "";
    hasBackdrop = !1;
    backdropClass = "cdk-overlay-dark-backdrop";
    disableAnimations;
    width;
    height;
    minWidth;
    minHeight;
    maxWidth;
    maxHeight;
    direction;
    disposeOnNavigation = !1;
    usePopover;
    eventPredicate;
    constructor(i) { if (i) {
        let t = Object.keys(i);
        for (let e of t)
            i[e] !== void 0 && (this[e] = i[e]);
    } }
}, vt = class {
    offsetX;
    offsetY;
    panelClass;
    originX;
    originY;
    overlayX;
    overlayY;
    constructor(i, t, e, s, n) { this.offsetX = e, this.offsetY = s, this.panelClass = n, this.originX = i.originX, this.originY = i.originY, this.overlayX = t.overlayX, this.overlayY = t.overlayY; }
}, yt = class {
    isOriginClipped = !1;
    isOriginOutsideView = !1;
    isOverlayClipped = !1;
    isOverlayOutsideView = !1;
}, J = class {
    connectionPair;
    scrollableViewProperties;
    constructor(i, t) { this.connectionPair = i, this.scrollableViewProperties = t; }
};
function ri(o, i) { if (i !== "top" && i !== "bottom" && i !== "center")
    throw Error(`ConnectedPosition: Invalid ${o} "${i}". Expected "top", "bottom" or "center".`); }
function li(o, i) { if (i !== "start" && i !== "end" && i !== "center")
    throw Error(`ConnectedPosition: Invalid ${o} "${i}". Expected "start", "end" or "center".`); }
var ne = (() => { class o {
    _attachedOverlays = [];
    _document = p(I);
    _isAttached = !1;
    constructor() { }
    ngOnDestroy() { this.detach(); }
    add(t) { this.remove(t), this._attachedOverlays.push(t); }
    remove(t) { let e = this._attachedOverlays.indexOf(t); e > -1 && this._attachedOverlays.splice(e, 1), this._attachedOverlays.length === 0 && this.detach(); }
    canReceiveEvent(t, e, s) { return s.observers.length < 1 ? !1 : t.eventPredicate ? t.eventPredicate(e) : !0; }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" });
} return o; })(), re = (() => { class o extends ne {
    _ngZone = p(V);
    _renderer = p(St).createRenderer(null, null);
    _cleanupKeydown;
    add(t) { super.add(t), this._isAttached || (this._ngZone.runOutsideAngular(() => { this._cleanupKeydown = this._renderer.listen("body", "keydown", this._keydownListener); }), this._isAttached = !0); }
    detach() { this._isAttached && (this._cleanupKeydown?.(), this._isAttached = !1); }
    _keydownListener = t => { let e = this._attachedOverlays; for (let s = e.length - 1; s > -1; s--) {
        let n = e[s];
        if (this.canReceiveEvent(n, t, n._keydownEvents)) {
            this._ngZone.run(() => n._keydownEvents.next(t));
            break;
        }
    } };
    static \u0275fac = (() => { let t; return function (s) { return (t || (t = _.\u0275\u0275getInheritedFactory(o)))(s || o); }; })();
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" });
} return o; })(), le = (() => { class o extends ne {
    _platform = p(S);
    _ngZone = p(V);
    _renderer = p(St).createRenderer(null, null);
    _cursorOriginalValue;
    _cursorStyleIsSet = !1;
    _pointerDownEventTarget = null;
    _cleanups;
    add(t) { if (super.add(t), !this._isAttached) {
        let e = this._document.body, s = { capture: !0 }, n = this._renderer;
        this._cleanups = this._ngZone.runOutsideAngular(() => [n.listen(e, "pointerdown", this._pointerDownListener, s), n.listen(e, "click", this._clickListener, s), n.listen(e, "auxclick", this._clickListener, s), n.listen(e, "contextmenu", this._clickListener, s)]), this._platform.IOS && !this._cursorStyleIsSet && (this._cursorOriginalValue = e.style.cursor, e.style.cursor = "pointer", this._cursorStyleIsSet = !0), this._isAttached = !0;
    } }
    detach() { this._isAttached && (this._cleanups?.forEach(t => t()), this._cleanups = void 0, this._platform.IOS && this._cursorStyleIsSet && (this._document.body.style.cursor = this._cursorOriginalValue, this._cursorStyleIsSet = !1), this._isAttached = !1); }
    _pointerDownListener = t => { this._pointerDownEventTarget = Y(t); };
    _clickListener = t => { let e = Y(t), s = t.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : e; this._pointerDownEventTarget = null; let n = this._attachedOverlays.slice(); for (let r = n.length - 1; r > -1; r--) {
        let l = n[r], a = l._outsidePointerEvents;
        if (!(!l.hasAttached() || !this.canReceiveEvent(l, t, a))) {
            if (qt(l.overlayElement, e) || qt(l.overlayElement, s))
                break;
            this._ngZone ? this._ngZone.run(() => a.next(t)) : a.next(t);
        }
    } };
    static \u0275fac = (() => { let t; return function (s) { return (t || (t = _.\u0275\u0275getInheritedFactory(o)))(s || o); }; })();
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" });
} return o; })();
function qt(o, i) { let t = typeof ShadowRoot < "u" && ShadowRoot, e = i; for (; e;) {
    if (e === o)
        return !0;
    e = t && e instanceof ShadowRoot ? e.host : e.parentNode;
} return !1; }
var ae = (() => {
    class o {
        static \u0275fac = function (e) { return new (e || o); };
        static \u0275cmp = _.\u0275\u0275defineComponent({ type: o, selectors: [["ng-component"]], hostAttrs: ["cdk-overlay-style-loader", ""], decls: 0, vars: 0, template: function (e, s) { }, styles: [`.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;touch-action:manipulation}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}@media(prefers-reduced-motion){.cdk-overlay-backdrop{transition-duration:1ms}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.cdk-overlay-popover{background:none;border:none;padding:0;outline:0;overflow:visible;position:fixed;pointer-events:none;white-space:normal;color:inherit;text-decoration:none;width:100%;height:100%;inset:auto;top:0;left:0}.cdk-overlay-popover::backdrop{display:none}.cdk-overlay-popover .cdk-overlay-backdrop{position:fixed;z-index:auto}
`], encapsulation: 2, changeDetection: 0 });
    }
    return o;
})(), ot = (() => { class o {
    _platform = p(S);
    _containerElement;
    _document = p(I);
    _styleLoader = p(st);
    constructor() { }
    ngOnDestroy() { this._containerElement?.remove(); }
    getContainerElement() { return this._loadStyles(), this._containerElement || this._createContainer(), this._containerElement; }
    _createContainer() { let t = "cdk-overlay-container"; if (this._platform.isBrowser || rt()) {
        let s = this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);
        for (let n = 0; n < s.length; n++)
            s[n].remove();
    } let e = this._document.createElement("div"); e.classList.add(t), rt() ? e.setAttribute("platform", "test") : this._platform.isBrowser || e.setAttribute("platform", "server"), this._document.body.appendChild(e), this._containerElement = e; }
    _loadStyles() { this._styleLoader.load(ae); }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" });
} return o; })(), bt = class {
    _renderer;
    _ngZone;
    element;
    _cleanupClick;
    _cleanupTransitionEnd;
    _fallbackTimeout;
    constructor(i, t, e, s) { this._renderer = t, this._ngZone = e, this.element = i.createElement("div"), this.element.classList.add("cdk-overlay-backdrop"), this._cleanupClick = t.listen(this.element, "click", s); }
    detach() { this._ngZone.runOutsideAngular(() => { let i = this.element; clearTimeout(this._fallbackTimeout), this._cleanupTransitionEnd?.(), this._cleanupTransitionEnd = this._renderer.listen(i, "transitionend", this.dispose), this._fallbackTimeout = setTimeout(this.dispose, 500), i.style.pointerEvents = "none", i.classList.remove("cdk-overlay-backdrop-showing"); }); }
    dispose = () => { clearTimeout(this._fallbackTimeout), this._cleanupClick?.(), this._cleanupTransitionEnd?.(), this._cleanupClick = this._cleanupTransitionEnd = this._fallbackTimeout = void 0, this.element.remove(); };
};
function Ot(o) { return o && o.nodeType === 1; }
var tt = class {
    _portalOutlet;
    _host;
    _pane;
    _config;
    _ngZone;
    _keyboardDispatcher;
    _document;
    _location;
    _outsideClickDispatcher;
    _animationsDisabled;
    _injector;
    _renderer;
    _backdropClick = new D;
    _attachments = new D;
    _detachments = new D;
    _positionStrategy;
    _scrollStrategy;
    _locationChanges = P.EMPTY;
    _backdropRef = null;
    _detachContentMutationObserver;
    _detachContentAfterRenderRef;
    _disposed = !1;
    _previousHostParent;
    _keydownEvents = new D;
    _outsidePointerEvents = new D;
    _afterNextRenderRef;
    constructor(i, t, e, s, n, r, l, a, c, d = !1, f, m) { this._portalOutlet = i, this._host = t, this._pane = e, this._config = s, this._ngZone = n, this._keyboardDispatcher = r, this._document = l, this._location = a, this._outsideClickDispatcher = c, this._animationsDisabled = d, this._injector = f, this._renderer = m, s.scrollStrategy && (this._scrollStrategy = s.scrollStrategy, this._scrollStrategy.attach(this)), this._positionStrategy = s.positionStrategy; }
    get overlayElement() { return this._pane; }
    get backdropElement() { return this._backdropRef?.element || null; }
    get hostElement() { return this._host; }
    get eventPredicate() { return this._config?.eventPredicate || null; }
    attach(i) { if (this._disposed)
        return null; this._attachHost(); let t = this._portalOutlet.attach(i); return this._positionStrategy?.attach(this), this._updateStackingOrder(), this._updateElementSize(), this._updateElementDirection(), this._scrollStrategy && this._scrollStrategy.enable(), this._afterNextRenderRef?.destroy(), this._afterNextRenderRef = Gt(() => { this.hasAttached() && this.updatePosition(); }, { injector: this._injector }), this._togglePointerEvents(!0), this._config.hasBackdrop && this._attachBackdrop(), this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !0), this._attachments.next(), this._completeDetachContent(), this._keyboardDispatcher.add(this), this._config.disposeOnNavigation && (this._locationChanges = this._location.subscribe(() => this.dispose())), this._outsideClickDispatcher.add(this), typeof t?.onDestroy == "function" && t.onDestroy(() => { this.hasAttached() && this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach())); }), t; }
    detach() { if (!this.hasAttached())
        return; this.detachBackdrop(), this._togglePointerEvents(!1), this._positionStrategy && this._positionStrategy.detach && this._positionStrategy.detach(), this._scrollStrategy && this._scrollStrategy.disable(); let i = this._portalOutlet.detach(); return this._detachments.next(), this._completeDetachContent(), this._keyboardDispatcher.remove(this), this._detachContentWhenEmpty(), this._locationChanges.unsubscribe(), this._outsideClickDispatcher.remove(this), i; }
    dispose() { if (this._disposed)
        return; let i = this.hasAttached(); this._positionStrategy && this._positionStrategy.dispose(), this._disposeScrollStrategy(), this._backdropRef?.dispose(), this._locationChanges.unsubscribe(), this._keyboardDispatcher.remove(this), this._portalOutlet.dispose(), this._attachments.complete(), this._backdropClick.complete(), this._keydownEvents.complete(), this._outsidePointerEvents.complete(), this._outsideClickDispatcher.remove(this), this._host?.remove(), this._afterNextRenderRef?.destroy(), this._previousHostParent = this._pane = this._host = this._backdropRef = null, i && this._detachments.next(), this._detachments.complete(), this._completeDetachContent(), this._disposed = !0; }
    hasAttached() { return this._portalOutlet.hasAttached(); }
    backdropClick() { return this._backdropClick; }
    attachments() { return this._attachments; }
    detachments() { return this._detachments; }
    keydownEvents() { return this._keydownEvents; }
    outsidePointerEvents() { return this._outsidePointerEvents; }
    getConfig() { return this._config; }
    updatePosition() { this._positionStrategy && this._positionStrategy.apply(); }
    updatePositionStrategy(i) { i !== this._positionStrategy && (this._positionStrategy && this._positionStrategy.dispose(), this._positionStrategy = i, this.hasAttached() && (i.attach(this), this.updatePosition())); }
    updateSize(i) { this._config = W(W({}, this._config), i), this._updateElementSize(); }
    setDirection(i) { this._config = Pt(W({}, this._config), { direction: i }), this._updateElementDirection(); }
    addPanelClass(i) { this._pane && this._toggleClasses(this._pane, i, !0); }
    removePanelClass(i) { this._pane && this._toggleClasses(this._pane, i, !1); }
    getDirection() { let i = this._config.direction; return i ? typeof i == "string" ? i : i.value : "ltr"; }
    updateScrollStrategy(i) { i !== this._scrollStrategy && (this._disposeScrollStrategy(), this._scrollStrategy = i, this.hasAttached() && (i.attach(this), i.enable())); }
    _updateElementDirection() { this._host.setAttribute("dir", this.getDirection()); }
    _updateElementSize() { if (!this._pane)
        return; let i = this._pane.style; i.width = g(this._config.width), i.height = g(this._config.height), i.minWidth = g(this._config.minWidth), i.minHeight = g(this._config.minHeight), i.maxWidth = g(this._config.maxWidth), i.maxHeight = g(this._config.maxHeight); }
    _togglePointerEvents(i) { this._pane.style.pointerEvents = i ? "" : "none"; }
    _attachHost() { if (!this._host.parentElement) {
        let i = this._config.usePopover ? this._positionStrategy?.getPopoverInsertionPoint?.() : null;
        Ot(i) ? i.after(this._host) : i?.type === "parent" ? i.element.appendChild(this._host) : this._previousHostParent?.appendChild(this._host);
    } if (this._config.usePopover)
        try {
            this._host.showPopover();
        }
        catch { } }
    _attachBackdrop() { let i = "cdk-overlay-backdrop-showing"; this._backdropRef?.dispose(), this._backdropRef = new bt(this._document, this._renderer, this._ngZone, t => { this._backdropClick.next(t); }), this._animationsDisabled && this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"), this._config.backdropClass && this._toggleClasses(this._backdropRef.element, this._config.backdropClass, !0), this._config.usePopover ? this._host.prepend(this._backdropRef.element) : this._host.parentElement.insertBefore(this._backdropRef.element, this._host), !this._animationsDisabled && typeof requestAnimationFrame < "u" ? this._ngZone.runOutsideAngular(() => { requestAnimationFrame(() => this._backdropRef?.element.classList.add(i)); }) : this._backdropRef.element.classList.add(i); }
    _updateStackingOrder() { !this._config.usePopover && this._host.nextSibling && this._host.parentNode.appendChild(this._host); }
    detachBackdrop() { this._animationsDisabled ? (this._backdropRef?.dispose(), this._backdropRef = null) : this._backdropRef?.detach(); }
    _toggleClasses(i, t, e) { let s = nt(t || []).filter(n => !!n); s.length && (e ? i.classList.add(...s) : i.classList.remove(...s)); }
    _detachContentWhenEmpty() { let i = !1; try {
        this._detachContentAfterRenderRef = Gt(() => { i = !0, this._detachContent(); }, { injector: this._injector });
    }
    catch (t) {
        if (i)
            throw t;
        this._detachContent();
    } globalThis.MutationObserver && this._pane && (this._detachContentMutationObserver ||= new globalThis.MutationObserver(() => { this._detachContent(); }), this._detachContentMutationObserver.observe(this._pane, { childList: !0 })); }
    _detachContent() { (!this._pane || !this._host || this._pane.children.length === 0) && (this._pane && this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !1), this._host && this._host.parentElement && (this._previousHostParent = this._host.parentElement, this._host.remove()), this._completeDetachContent()); }
    _completeDetachContent() { this._detachContentAfterRenderRef?.destroy(), this._detachContentAfterRenderRef = void 0, this._detachContentMutationObserver?.disconnect(); }
    _disposeScrollStrategy() { let i = this._scrollStrategy; i?.disable(), i?.detach?.(); }
}, Qt = "cdk-overlay-connected-position-bounding-box", ai = /([A-Za-z%]+)$/;
function Rt(o, i) { return new et(i, o.get(C), o.get(I), o.get(S), o.get(ot)); }
var et = class {
    _viewportRuler;
    _document;
    _platform;
    _overlayContainer;
    _overlayRef;
    _isInitialRender = !1;
    _lastBoundingBoxSize = { width: 0, height: 0 };
    _isPushed = !1;
    _canPush = !0;
    _growAfterOpen = !1;
    _hasFlexibleDimensions = !0;
    _positionLocked = !1;
    _originRect;
    _overlayRect;
    _viewportRect;
    _containerRect;
    _viewportMargin = 0;
    _scrollables = [];
    _preferredPositions = [];
    _origin;
    _pane;
    _isDisposed = !1;
    _boundingBox = null;
    _lastPosition = null;
    _lastScrollVisibility = null;
    _positionChanges = new D;
    _resizeSubscription = P.EMPTY;
    _offsetX = 0;
    _offsetY = 0;
    _transformOriginSelector;
    _appliedPanelClasses = [];
    _previousPushAmount = null;
    _popoverLocation = "global";
    positionChanges = this._positionChanges;
    get positions() { return this._preferredPositions; }
    constructor(i, t, e, s, n) { this._viewportRuler = t, this._document = e, this._platform = s, this._overlayContainer = n, this.setOrigin(i); }
    attach(i) { this._overlayRef && this._overlayRef, this._validatePositions(), i.hostElement.classList.add(Qt), this._overlayRef = i, this._boundingBox = i.hostElement, this._pane = i.overlayElement, this._isDisposed = !1, this._isInitialRender = !0, this._lastPosition = null, this._resizeSubscription.unsubscribe(), this._resizeSubscription = this._viewportRuler.change().subscribe(() => { this._isInitialRender = !0, this.apply(); }); }
    apply() { if (this._isDisposed || !this._platform.isBrowser)
        return; if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
        this.reapplyLastPosition();
        return;
    } this._clearPanelClasses(), this._resetOverlayElementStyles(), this._resetBoundingBoxStyles(), this._viewportRect = this._getNarrowedViewportRect(), this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._containerRect = this._getContainerRect(); let i = this._originRect, t = this._overlayRect, e = this._viewportRect, s = this._containerRect, n = [], r; for (let l of this._preferredPositions) {
        let a = this._getOriginPoint(i, s, l), c = this._getOverlayPoint(a, t, l), d = this._getOverlayFit(c, t, e, l);
        if (d.isCompletelyWithinViewport) {
            this._isPushed = !1, this._applyPosition(l, a);
            return;
        }
        if (this._canFitWithFlexibleDimensions(d, c, e)) {
            n.push({ position: l, origin: a, overlayRect: t, boundingBoxRect: this._calculateBoundingBoxRect(a, l) });
            continue;
        }
        (!r || r.overlayFit.visibleArea < d.visibleArea) && (r = { overlayFit: d, overlayPoint: c, originPoint: a, position: l, overlayRect: t });
    } if (n.length) {
        let l = null, a = -1;
        for (let c of n) {
            let d = c.boundingBoxRect.width * c.boundingBoxRect.height * (c.position.weight || 1);
            d > a && (a = d, l = c);
        }
        this._isPushed = !1, this._applyPosition(l.position, l.origin);
        return;
    } if (this._canPush) {
        this._isPushed = !0, this._applyPosition(r.position, r.originPoint);
        return;
    } this._applyPosition(r.position, r.originPoint); }
    detach() { this._clearPanelClasses(), this._lastPosition = null, this._previousPushAmount = null, this._resizeSubscription.unsubscribe(); }
    dispose() { this._isDisposed || (this._boundingBox && O(this._boundingBox.style, { top: "", left: "", right: "", bottom: "", height: "", width: "", alignItems: "", justifyContent: "" }), this._pane && this._resetOverlayElementStyles(), this._overlayRef && this._overlayRef.hostElement.classList.remove(Qt), this.detach(), this._positionChanges.complete(), this._overlayRef = this._boundingBox = null, this._isDisposed = !0); }
    reapplyLastPosition() { if (this._isDisposed || !this._platform.isBrowser)
        return; let i = this._lastPosition; i ? (this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._viewportRect = this._getNarrowedViewportRect(), this._containerRect = this._getContainerRect(), this._applyPosition(i, this._getOriginPoint(this._originRect, this._containerRect, i))) : this.apply(); }
    withScrollableContainers(i) { return this._scrollables = i, this; }
    withPositions(i) { return this._preferredPositions = i, i.indexOf(this._lastPosition) === -1 && (this._lastPosition = null), this._validatePositions(), this; }
    withViewportMargin(i) { return this._viewportMargin = i, this; }
    withFlexibleDimensions(i = !0) { return this._hasFlexibleDimensions = i, this; }
    withGrowAfterOpen(i = !0) { return this._growAfterOpen = i, this; }
    withPush(i = !0) { return this._canPush = i, this; }
    withLockedPosition(i = !0) { return this._positionLocked = i, this; }
    setOrigin(i) { return this._origin = i, this; }
    withDefaultOffsetX(i) { return this._offsetX = i, this; }
    withDefaultOffsetY(i) { return this._offsetY = i, this; }
    withTransformOriginOn(i) { return this._transformOriginSelector = i, this; }
    withPopoverLocation(i) { return this._popoverLocation = i, this; }
    getPopoverInsertionPoint() { return this._popoverLocation === "global" ? null : this._popoverLocation !== "inline" ? this._popoverLocation : this._origin instanceof $ ? this._origin.nativeElement : Ot(this._origin) ? this._origin : null; }
    _getOriginPoint(i, t, e) { let s; if (e.originX == "center")
        s = i.left + i.width / 2;
    else {
        let r = this._isRtl() ? i.right : i.left, l = this._isRtl() ? i.left : i.right;
        s = e.originX == "start" ? r : l;
    } t.left < 0 && (s -= t.left); let n; return e.originY == "center" ? n = i.top + i.height / 2 : n = e.originY == "top" ? i.top : i.bottom, t.top < 0 && (n -= t.top), { x: s, y: n }; }
    _getOverlayPoint(i, t, e) { let s; e.overlayX == "center" ? s = -t.width / 2 : e.overlayX === "start" ? s = this._isRtl() ? -t.width : 0 : s = this._isRtl() ? 0 : -t.width; let n; return e.overlayY == "center" ? n = -t.height / 2 : n = e.overlayY == "top" ? 0 : -t.height, { x: i.x + s, y: i.y + n }; }
    _getOverlayFit(i, t, e, s) { let n = te(t), { x: r, y: l } = i, a = this._getOffset(s, "x"), c = this._getOffset(s, "y"); a && (r += a), c && (l += c); let d = 0 - r, f = r + n.width - e.width, m = 0 - l, y = l + n.height - e.height, v = this._subtractOverflows(n.width, d, f), w = this._subtractOverflows(n.height, m, y), Dt = v * w; return { visibleArea: Dt, isCompletelyWithinViewport: n.width * n.height === Dt, fitsInViewportVertically: w === n.height, fitsInViewportHorizontally: v == n.width }; }
    _canFitWithFlexibleDimensions(i, t, e) { if (this._hasFlexibleDimensions) {
        let s = e.bottom - t.y, n = e.right - t.x, r = Jt(this._overlayRef.getConfig().minHeight), l = Jt(this._overlayRef.getConfig().minWidth), a = i.fitsInViewportVertically || r != null && r <= s, c = i.fitsInViewportHorizontally || l != null && l <= n;
        return a && c;
    } return !1; }
    _pushOverlayOnScreen(i, t, e) { if (this._previousPushAmount && this._positionLocked)
        return { x: i.x + this._previousPushAmount.x, y: i.y + this._previousPushAmount.y }; let s = te(t), n = this._viewportRect, r = Math.max(i.x + s.width - n.width, 0), l = Math.max(i.y + s.height - n.height, 0), a = Math.max(n.top - e.top - i.y, 0), c = Math.max(n.left - e.left - i.x, 0), d = 0, f = 0; return s.width <= n.width ? d = c || -r : d = i.x < this._getViewportMarginStart() ? n.left - e.left - i.x : 0, s.height <= n.height ? f = a || -l : f = i.y < this._getViewportMarginTop() ? n.top - e.top - i.y : 0, this._previousPushAmount = { x: d, y: f }, { x: i.x + d, y: i.y + f }; }
    _applyPosition(i, t) { if (this._setTransformOrigin(i), this._setOverlayElementStyles(t, i), this._setBoundingBoxStyles(t, i), i.panelClass && this._addPanelClasses(i.panelClass), this._positionChanges.observers.length) {
        let e = this._getScrollVisibility();
        if (i !== this._lastPosition || !this._lastScrollVisibility || !hi(this._lastScrollVisibility, e)) {
            let s = new J(i, e);
            this._positionChanges.next(s);
        }
        this._lastScrollVisibility = e;
    } this._lastPosition = i, this._isInitialRender = !1; }
    _setTransformOrigin(i) { if (!this._transformOriginSelector)
        return; let t = this._boundingBox.querySelectorAll(this._transformOriginSelector), e, s = i.overlayY; i.overlayX === "center" ? e = "center" : this._isRtl() ? e = i.overlayX === "start" ? "right" : "left" : e = i.overlayX === "start" ? "left" : "right"; for (let n = 0; n < t.length; n++)
        t[n].style.transformOrigin = `${e} ${s}`; }
    _calculateBoundingBoxRect(i, t) { let e = this._viewportRect, s = this._isRtl(), n, r, l; if (t.overlayY === "top")
        r = i.y, n = e.height - r + this._getViewportMarginBottom();
    else if (t.overlayY === "bottom")
        l = e.height - i.y + this._getViewportMarginTop() + this._getViewportMarginBottom(), n = e.height - l + this._getViewportMarginTop();
    else {
        let y = Math.min(e.bottom - i.y + e.top, i.y), v = this._lastBoundingBoxSize.height;
        n = y * 2, r = i.y - y, n > v && !this._isInitialRender && !this._growAfterOpen && (r = i.y - v / 2);
    } let a = t.overlayX === "start" && !s || t.overlayX === "end" && s, c = t.overlayX === "end" && !s || t.overlayX === "start" && s, d, f, m; if (c)
        m = e.width - i.x + this._getViewportMarginStart() + this._getViewportMarginEnd(), d = i.x - this._getViewportMarginStart();
    else if (a)
        f = i.x, d = e.right - i.x - this._getViewportMarginEnd();
    else {
        let y = Math.min(e.right - i.x + e.left, i.x), v = this._lastBoundingBoxSize.width;
        d = y * 2, f = i.x - y, d > v && !this._isInitialRender && !this._growAfterOpen && (f = i.x - v / 2);
    } return { top: r, left: f, bottom: l, right: m, width: d, height: n }; }
    _setBoundingBoxStyles(i, t) { let e = this._calculateBoundingBoxRect(i, t); !this._isInitialRender && !this._growAfterOpen && (e.height = Math.min(e.height, this._lastBoundingBoxSize.height), e.width = Math.min(e.width, this._lastBoundingBoxSize.width)); let s = {}; if (this._hasExactPosition())
        s.top = s.left = "0", s.bottom = s.right = "auto", s.maxHeight = s.maxWidth = "", s.width = s.height = "100%";
    else {
        let n = this._overlayRef.getConfig().maxHeight, r = this._overlayRef.getConfig().maxWidth;
        s.width = g(e.width), s.height = g(e.height), s.top = g(e.top) || "auto", s.bottom = g(e.bottom) || "auto", s.left = g(e.left) || "auto", s.right = g(e.right) || "auto", t.overlayX === "center" ? s.alignItems = "center" : s.alignItems = t.overlayX === "end" ? "flex-end" : "flex-start", t.overlayY === "center" ? s.justifyContent = "center" : s.justifyContent = t.overlayY === "bottom" ? "flex-end" : "flex-start", n && (s.maxHeight = g(n)), r && (s.maxWidth = g(r));
    } this._lastBoundingBoxSize = e, O(this._boundingBox.style, s); }
    _resetBoundingBoxStyles() { O(this._boundingBox.style, { top: "0", left: "0", right: "0", bottom: "0", height: "", width: "", alignItems: "", justifyContent: "" }); }
    _resetOverlayElementStyles() { O(this._pane.style, { top: "", left: "", bottom: "", right: "", position: "", transform: "" }); }
    _setOverlayElementStyles(i, t) { let e = {}, s = this._hasExactPosition(), n = this._hasFlexibleDimensions, r = this._overlayRef.getConfig(); if (s) {
        let d = this._viewportRuler.getViewportScrollPosition();
        O(e, this._getExactOverlayY(t, i, d)), O(e, this._getExactOverlayX(t, i, d));
    }
    else
        e.position = "static"; let l = "", a = this._getOffset(t, "x"), c = this._getOffset(t, "y"); a && (l += `translateX(${a}px) `), c && (l += `translateY(${c}px)`), e.transform = l.trim(), r.maxHeight && (s ? e.maxHeight = g(r.maxHeight) : n && (e.maxHeight = "")), r.maxWidth && (s ? e.maxWidth = g(r.maxWidth) : n && (e.maxWidth = "")), O(this._pane.style, e); }
    _getExactOverlayY(i, t, e) { let s = { top: "", bottom: "" }, n = this._getOverlayPoint(t, this._overlayRect, i); if (this._isPushed && (n = this._pushOverlayOnScreen(n, this._overlayRect, e)), i.overlayY === "bottom") {
        let r = this._document.documentElement.clientHeight;
        s.bottom = `${r - (n.y + this._overlayRect.height)}px`;
    }
    else
        s.top = g(n.y); return s; }
    _getExactOverlayX(i, t, e) { let s = { left: "", right: "" }, n = this._getOverlayPoint(t, this._overlayRect, i); this._isPushed && (n = this._pushOverlayOnScreen(n, this._overlayRect, e)); let r; if (this._isRtl() ? r = i.overlayX === "end" ? "left" : "right" : r = i.overlayX === "end" ? "right" : "left", r === "right") {
        let l = this._document.documentElement.clientWidth;
        s.right = `${l - (n.x + this._overlayRect.width)}px`;
    }
    else
        s.left = g(n.x); return s; }
    _getScrollVisibility() { let i = this._getOriginRect(), t = this._pane.getBoundingClientRect(), e = this._scrollables.map(s => s.getElementRef().nativeElement.getBoundingClientRect()); return { isOriginClipped: Kt(i, e), isOriginOutsideView: mt(i, e), isOverlayClipped: Kt(t, e), isOverlayOutsideView: mt(t, e) }; }
    _subtractOverflows(i, ...t) { return t.reduce((e, s) => e - Math.max(s, 0), i); }
    _getNarrowedViewportRect() { let i = this._document.documentElement.clientWidth, t = this._document.documentElement.clientHeight, e = this._viewportRuler.getViewportScrollPosition(); return { top: e.top + this._getViewportMarginTop(), left: e.left + this._getViewportMarginStart(), right: e.left + i - this._getViewportMarginEnd(), bottom: e.top + t - this._getViewportMarginBottom(), width: i - this._getViewportMarginStart() - this._getViewportMarginEnd(), height: t - this._getViewportMarginTop() - this._getViewportMarginBottom() }; }
    _isRtl() { return this._overlayRef.getDirection() === "rtl"; }
    _hasExactPosition() { return !this._hasFlexibleDimensions || this._isPushed; }
    _getOffset(i, t) { return t === "x" ? i.offsetX == null ? this._offsetX : i.offsetX : i.offsetY == null ? this._offsetY : i.offsetY; }
    _validatePositions() { }
    _addPanelClasses(i) { this._pane && nt(i).forEach(t => { t !== "" && this._appliedPanelClasses.indexOf(t) === -1 && (this._appliedPanelClasses.push(t), this._pane.classList.add(t)); }); }
    _clearPanelClasses() { this._pane && (this._appliedPanelClasses.forEach(i => { this._pane.classList.remove(i); }), this._appliedPanelClasses = []); }
    _getViewportMarginStart() { return typeof this._viewportMargin == "number" ? this._viewportMargin : this._viewportMargin?.start ?? 0; }
    _getViewportMarginEnd() { return typeof this._viewportMargin == "number" ? this._viewportMargin : this._viewportMargin?.end ?? 0; }
    _getViewportMarginTop() { return typeof this._viewportMargin == "number" ? this._viewportMargin : this._viewportMargin?.top ?? 0; }
    _getViewportMarginBottom() { return typeof this._viewportMargin == "number" ? this._viewportMargin : this._viewportMargin?.bottom ?? 0; }
    _getOriginRect() { let i = this._origin; if (i instanceof $)
        return i.nativeElement.getBoundingClientRect(); if (i instanceof Element)
        return i.getBoundingClientRect(); let t = i.width || 0, e = i.height || 0; return { top: i.y, bottom: i.y + e, left: i.x, right: i.x + t, height: e, width: t }; }
    _getContainerRect() { let i = this._overlayRef.getConfig().usePopover && this._popoverLocation !== "global", t = this._overlayContainer.getContainerElement(); i && (t.style.display = "block"); let e = t.getBoundingClientRect(); return i && (t.style.display = ""), e; }
};
function O(o, i) { for (let t in i)
    i.hasOwnProperty(t) && (o[t] = i[t]); return o; }
function Jt(o) { if (typeof o != "number" && o != null) {
    let [i, t] = o.split(ai);
    return !t || t === "px" ? parseFloat(i) : null;
} return o || null; }
function te(o) { return { top: Math.floor(o.top), right: Math.floor(o.right), bottom: Math.floor(o.bottom), left: Math.floor(o.left), width: Math.floor(o.width), height: Math.floor(o.height) }; }
function hi(o, i) { return o === i ? !0 : o.isOriginClipped === i.isOriginClipped && o.isOriginOutsideView === i.isOriginOutsideView && o.isOverlayClipped === i.isOverlayClipped && o.isOverlayOutsideView === i.isOverlayOutsideView; }
var ci = [{ originX: "start", originY: "bottom", overlayX: "start", overlayY: "top" }, { originX: "start", originY: "top", overlayX: "start", overlayY: "bottom" }, { originX: "end", originY: "bottom", overlayX: "end", overlayY: "top" }, { originX: "end", originY: "top", overlayX: "end", overlayY: "bottom" }], di = [{ originX: "end", originY: "top", overlayX: "start", overlayY: "top" }, { originX: "end", originY: "bottom", overlayX: "start", overlayY: "bottom" }, { originX: "start", originY: "top", overlayX: "end", overlayY: "top" }, { originX: "start", originY: "bottom", overlayX: "end", overlayY: "bottom" }], ee = "cdk-global-overlay-wrapper";
function he(o) { return new it; }
var it = class {
    _overlayRef;
    _cssPosition = "static";
    _topOffset = "";
    _bottomOffset = "";
    _alignItems = "";
    _xPosition = "";
    _xOffset = "";
    _width = "";
    _height = "";
    _isDisposed = !1;
    attach(i) { let t = i.getConfig(); this._overlayRef = i, this._width && !t.width && i.updateSize({ width: this._width }), this._height && !t.height && i.updateSize({ height: this._height }), i.hostElement.classList.add(ee), this._isDisposed = !1; }
    top(i = "") { return this._bottomOffset = "", this._topOffset = i, this._alignItems = "flex-start", this; }
    left(i = "") { return this._xOffset = i, this._xPosition = "left", this; }
    bottom(i = "") { return this._topOffset = "", this._bottomOffset = i, this._alignItems = "flex-end", this; }
    right(i = "") { return this._xOffset = i, this._xPosition = "right", this; }
    start(i = "") { return this._xOffset = i, this._xPosition = "start", this; }
    end(i = "") { return this._xOffset = i, this._xPosition = "end", this; }
    width(i = "") { return this._overlayRef ? this._overlayRef.updateSize({ width: i }) : this._width = i, this; }
    height(i = "") { return this._overlayRef ? this._overlayRef.updateSize({ height: i }) : this._height = i, this; }
    centerHorizontally(i = "") { return this.left(i), this._xPosition = "center", this; }
    centerVertically(i = "") { return this.top(i), this._alignItems = "center", this; }
    apply() { if (!this._overlayRef || !this._overlayRef.hasAttached())
        return; let i = this._overlayRef.overlayElement.style, t = this._overlayRef.hostElement.style, e = this._overlayRef.getConfig(), { width: s, height: n, maxWidth: r, maxHeight: l } = e, a = (s === "100%" || s === "100vw") && (!r || r === "100%" || r === "100vw"), c = (n === "100%" || n === "100vh") && (!l || l === "100%" || l === "100vh"), d = this._xPosition, f = this._xOffset, m = this._overlayRef.getConfig().direction === "rtl", y = "", v = "", w = ""; a ? w = "flex-start" : d === "center" ? (w = "center", m ? v = f : y = f) : m ? d === "left" || d === "end" ? (w = "flex-end", y = f) : (d === "right" || d === "start") && (w = "flex-start", v = f) : d === "left" || d === "start" ? (w = "flex-start", y = f) : (d === "right" || d === "end") && (w = "flex-end", v = f), i.position = this._cssPosition, i.marginLeft = a ? "0" : y, i.marginTop = c ? "0" : this._topOffset, i.marginBottom = this._bottomOffset, i.marginRight = a ? "0" : v, t.justifyContent = w, t.alignItems = c ? "flex-start" : this._alignItems; }
    dispose() { if (this._isDisposed || !this._overlayRef)
        return; let i = this._overlayRef.overlayElement.style, t = this._overlayRef.hostElement, e = t.style; t.classList.remove(ee), e.justifyContent = e.alignItems = i.marginTop = i.marginBottom = i.marginLeft = i.marginRight = i.position = "", this._overlayRef = null, this._isDisposed = !0; }
}, ce = (() => { class o {
    _injector = p(N);
    constructor() { }
    global() { return he(); }
    flexibleConnectedTo(t) { return Rt(this._injector, t); }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" });
} return o; })(), xt = new Ct("OVERLAY_DEFAULT_CONFIG");
function Et(o, i) { o.get(st).load(ae); let t = o.get(ot), e = o.get(I), s = o.get(Vt), n = o.get(Ke), r = o.get(T), l = o.get(qe, null, { optional: !0 }) || o.get(St).createRenderer(null, null), a = new z(i), c = o.get(xt, null, { optional: !0 })?.usePopover ?? !0; a.direction = a.direction || r.value, "showPopover" in e.body ? a.usePopover = i?.usePopover ?? c : a.usePopover = !1; let d = e.createElement("div"), f = e.createElement("div"); d.id = s.getId("cdk-overlay-"), d.classList.add("cdk-overlay-pane"), f.appendChild(d), a.usePopover && (f.setAttribute("popover", "manual"), f.classList.add("cdk-overlay-popover")); let m = a.usePopover ? a.positionStrategy?.getPopoverInsertionPoint?.() : null; return Ot(m) ? m.after(f) : m?.type === "parent" ? m.element.appendChild(f) : t.getContainerElement().appendChild(f), new tt(new At(d, n, o), f, d, a, o.get(V), o.get(re), e, o.get(ii), o.get(le), i?.disableAnimations ?? o.get(Qe, null, { optional: !0 }) === "NoopAnimations", o.get(Je), l); }
var de = (() => { class o {
    scrollStrategies = p(se);
    _positionBuilder = p(ce);
    _injector = p(N);
    constructor() { }
    create(t) { return Et(this._injector, t); }
    position() { return this._positionBuilder; }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" });
} return o; })(), fi = [{ originX: "start", originY: "bottom", overlayX: "start", overlayY: "top" }, { originX: "start", originY: "top", overlayX: "start", overlayY: "bottom" }, { originX: "end", originY: "top", overlayX: "end", overlayY: "bottom" }, { originX: "end", originY: "bottom", overlayX: "end", overlayY: "top" }], ui = new Ct("cdk-connected-overlay-scroll-strategy", { providedIn: "root", factory: () => { let o = p(N); return () => kt(o); } }), wt = (() => { class o {
    elementRef = p($);
    constructor() { }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275dir = _.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]], exportAs: ["cdkOverlayOrigin"] });
} return o; })(), fe = new Ct("cdk-connected-overlay-default-config"), pi = (() => { class o {
    _dir = p(T, { optional: !0 });
    _injector = p(N);
    _overlayRef;
    _templatePortal;
    _backdropSubscription = P.EMPTY;
    _attachSubscription = P.EMPTY;
    _detachSubscription = P.EMPTY;
    _positionSubscription = P.EMPTY;
    _offsetX;
    _offsetY;
    _position;
    _scrollStrategyFactory = p(ui);
    _ngZone = p(V);
    origin;
    positions;
    positionStrategy;
    get offsetX() { return this._offsetX; }
    set offsetX(t) { this._offsetX = t, this._position && this._updatePositionStrategy(this._position); }
    get offsetY() { return this._offsetY; }
    set offsetY(t) { this._offsetY = t, this._position && this._updatePositionStrategy(this._position); }
    width;
    height;
    minWidth;
    minHeight;
    backdropClass;
    panelClass;
    viewportMargin = 0;
    scrollStrategy;
    open = !1;
    disableClose = !1;
    transformOriginSelector;
    hasBackdrop = !1;
    lockPosition = !1;
    flexibleDimensions = !1;
    growAfterOpen = !1;
    push = !1;
    disposeOnNavigation = !1;
    usePopover;
    matchWidth = !1;
    set _config(t) { typeof t != "string" && this._assignConfig(t); }
    backdropClick = new E;
    positionChange = new E;
    attach = new E;
    detach = new E;
    overlayKeydown = new E;
    overlayOutsideClick = new E;
    constructor() { let t = p(ti), e = p(ei), s = p(fe, { optional: !0 }), n = p(xt, { optional: !0 }); this.usePopover = n?.usePopover === !1 ? null : "global", this._templatePortal = new Tt(t, e), this.scrollStrategy = this._scrollStrategyFactory(), s && this._assignConfig(s); }
    get overlayRef() { return this._overlayRef; }
    get dir() { return this._dir ? this._dir.value : "ltr"; }
    ngOnDestroy() { this._attachSubscription.unsubscribe(), this._detachSubscription.unsubscribe(), this._backdropSubscription.unsubscribe(), this._positionSubscription.unsubscribe(), this._overlayRef?.dispose(); }
    ngOnChanges(t) { this._position && (this._updatePositionStrategy(this._position), this._overlayRef?.updateSize({ width: this._getWidth(), minWidth: this.minWidth, height: this.height, minHeight: this.minHeight }), t.origin && this.open && this._position.apply()), t.open && (this.open ? this.attachOverlay() : this.detachOverlay()); }
    _createOverlay() { (!this.positions || !this.positions.length) && (this.positions = fi); let t = this._overlayRef = Et(this._injector, this._buildConfig()); this._attachSubscription = t.attachments().subscribe(() => this.attach.emit()), this._detachSubscription = t.detachments().subscribe(() => this.detach.emit()), t.keydownEvents().subscribe(e => { this.overlayKeydown.next(e), e.keyCode === 27 && !this.disableClose && !Bt(e) && (e.preventDefault(), this.detachOverlay()); }), this._overlayRef.outsidePointerEvents().subscribe(e => { let s = this._getOriginElement(), n = Y(e); (!s || s !== n && !s.contains(n)) && this.overlayOutsideClick.next(e); }); }
    _buildConfig() { let t = this._position = this.positionStrategy || this._createPositionStrategy(), e = new z({ direction: this._dir || "ltr", positionStrategy: t, scrollStrategy: this.scrollStrategy, hasBackdrop: this.hasBackdrop, disposeOnNavigation: this.disposeOnNavigation, usePopover: !!this.usePopover }); return (this.height || this.height === 0) && (e.height = this.height), (this.minWidth || this.minWidth === 0) && (e.minWidth = this.minWidth), (this.minHeight || this.minHeight === 0) && (e.minHeight = this.minHeight), this.backdropClass && (e.backdropClass = this.backdropClass), this.panelClass && (e.panelClass = this.panelClass), e; }
    _updatePositionStrategy(t) { let e = this.positions.map(s => ({ originX: s.originX, originY: s.originY, overlayX: s.overlayX, overlayY: s.overlayY, offsetX: s.offsetX || this.offsetX, offsetY: s.offsetY || this.offsetY, panelClass: s.panelClass || void 0 })); return t.setOrigin(this._getOrigin()).withPositions(e).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover === null ? "global" : this.usePopover); }
    _createPositionStrategy() { let t = Rt(this._injector, this._getOrigin()); return this._updatePositionStrategy(t), t; }
    _getOrigin() { return this.origin instanceof wt ? this.origin.elementRef : this.origin; }
    _getOriginElement() { return this.origin instanceof wt ? this.origin.elementRef.nativeElement : this.origin instanceof $ ? this.origin.nativeElement : typeof Element < "u" && this.origin instanceof Element ? this.origin : null; }
    _getWidth() { return this.width ? this.width : this.matchWidth ? this._getOriginElement()?.getBoundingClientRect?.().width : void 0; }
    attachOverlay() { this._overlayRef || this._createOverlay(); let t = this._overlayRef; t.getConfig().hasBackdrop = this.hasBackdrop, t.updateSize({ width: this._getWidth() }), t.hasAttached() || t.attach(this._templatePortal), this.hasBackdrop ? this._backdropSubscription = t.backdropClick().subscribe(e => this.backdropClick.emit(e)) : this._backdropSubscription.unsubscribe(), this._positionSubscription.unsubscribe(), this.positionChange.observers.length > 0 && (this._positionSubscription = this._position.positionChanges.pipe(si(() => this.positionChange.observers.length > 0)).subscribe(e => { this._ngZone.run(() => this.positionChange.emit(e)), this.positionChange.observers.length === 0 && this._positionSubscription.unsubscribe(); })), this.open = !0; }
    detachOverlay() { this._overlayRef?.detach(), this._backdropSubscription.unsubscribe(), this._positionSubscription.unsubscribe(), this.open = !1; }
    _assignConfig(t) { this.origin = t.origin ?? this.origin, this.positions = t.positions ?? this.positions, this.positionStrategy = t.positionStrategy ?? this.positionStrategy, this.offsetX = t.offsetX ?? this.offsetX, this.offsetY = t.offsetY ?? this.offsetY, this.width = t.width ?? this.width, this.height = t.height ?? this.height, this.minWidth = t.minWidth ?? this.minWidth, this.minHeight = t.minHeight ?? this.minHeight, this.backdropClass = t.backdropClass ?? this.backdropClass, this.panelClass = t.panelClass ?? this.panelClass, this.viewportMargin = t.viewportMargin ?? this.viewportMargin, this.scrollStrategy = t.scrollStrategy ?? this.scrollStrategy, this.disableClose = t.disableClose ?? this.disableClose, this.transformOriginSelector = t.transformOriginSelector ?? this.transformOriginSelector, this.hasBackdrop = t.hasBackdrop ?? this.hasBackdrop, this.lockPosition = t.lockPosition ?? this.lockPosition, this.flexibleDimensions = t.flexibleDimensions ?? this.flexibleDimensions, this.growAfterOpen = t.growAfterOpen ?? this.growAfterOpen, this.push = t.push ?? this.push, this.disposeOnNavigation = t.disposeOnNavigation ?? this.disposeOnNavigation, this.usePopover = t.usePopover ?? this.usePopover, this.matchWidth = t.matchWidth ?? this.matchWidth; }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275dir = _.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]], inputs: { origin: [0, "cdkConnectedOverlayOrigin", "origin"], positions: [0, "cdkConnectedOverlayPositions", "positions"], positionStrategy: [0, "cdkConnectedOverlayPositionStrategy", "positionStrategy"], offsetX: [0, "cdkConnectedOverlayOffsetX", "offsetX"], offsetY: [0, "cdkConnectedOverlayOffsetY", "offsetY"], width: [0, "cdkConnectedOverlayWidth", "width"], height: [0, "cdkConnectedOverlayHeight", "height"], minWidth: [0, "cdkConnectedOverlayMinWidth", "minWidth"], minHeight: [0, "cdkConnectedOverlayMinHeight", "minHeight"], backdropClass: [0, "cdkConnectedOverlayBackdropClass", "backdropClass"], panelClass: [0, "cdkConnectedOverlayPanelClass", "panelClass"], viewportMargin: [0, "cdkConnectedOverlayViewportMargin", "viewportMargin"], scrollStrategy: [0, "cdkConnectedOverlayScrollStrategy", "scrollStrategy"], open: [0, "cdkConnectedOverlayOpen", "open"], disableClose: [0, "cdkConnectedOverlayDisableClose", "disableClose"], transformOriginSelector: [0, "cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"], hasBackdrop: [2, "cdkConnectedOverlayHasBackdrop", "hasBackdrop", k], lockPosition: [2, "cdkConnectedOverlayLockPosition", "lockPosition", k], flexibleDimensions: [2, "cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions", k], growAfterOpen: [2, "cdkConnectedOverlayGrowAfterOpen", "growAfterOpen", k], push: [2, "cdkConnectedOverlayPush", "push", k], disposeOnNavigation: [2, "cdkConnectedOverlayDisposeOnNavigation", "disposeOnNavigation", k], usePopover: [0, "cdkConnectedOverlayUsePopover", "usePopover"], matchWidth: [2, "cdkConnectedOverlayMatchWidth", "matchWidth", k], _config: [0, "cdkConnectedOverlay", "_config"] }, outputs: { backdropClick: "backdropClick", positionChange: "positionChange", attach: "attach", detach: "detach", overlayKeydown: "overlayKeydown", overlayOutsideClick: "overlayOutsideClick" }, exportAs: ["cdkConnectedOverlay"], features: [_.\u0275\u0275NgOnChangesFeature] });
} return o; })(), _i = (() => { class o {
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275mod = _.\u0275\u0275defineNgModule({ type: o });
    static \u0275inj = _.\u0275\u0275defineInjector({ providers: [de], imports: [A, Ft, gt, gt] });
} return o; })();
import * as ue from "@angular/core";
import { inject as gi, RendererFactory2 as mi } from "@angular/core";
import "@angular/common";
import "rxjs";
import "rxjs/operators";
var Oo = (() => { class o extends ot {
    _renderer = gi(mi).createRenderer(null, null);
    _fullScreenEventName;
    _cleanupFullScreenListener;
    constructor() { super(); }
    ngOnDestroy() { super.ngOnDestroy(), this._cleanupFullScreenListener?.(); }
    _createContainer() { let t = this._getEventName(); super._createContainer(), this._adjustParentForFullscreenChange(), t && (this._cleanupFullScreenListener?.(), this._cleanupFullScreenListener = this._renderer.listen("document", t, () => { this._adjustParentForFullscreenChange(); })); }
    _adjustParentForFullscreenChange() { this._containerElement && (this.getFullscreenElement() || this._document.body).appendChild(this._containerElement); }
    _getEventName() { if (!this._fullScreenEventName) {
        let t = this._document;
        t.fullscreenEnabled ? this._fullScreenEventName = "fullscreenchange" : t.webkitFullscreenEnabled ? this._fullScreenEventName = "webkitfullscreenchange" : t.mozFullScreenEnabled ? this._fullScreenEventName = "mozfullscreenchange" : t.msFullscreenEnabled && (this._fullScreenEventName = "MSFullscreenChange");
    } return this._fullScreenEventName; }
    getFullscreenElement() { let t = this._document; return t.fullscreenElement || t.webkitFullscreenElement || t.mozFullScreenElement || t.msFullscreenElement || null; }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275prov = ue.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" });
} return o; })();
export { K as BlockScrollStrategy, fe as CDK_CONNECTED_OVERLAY_DEFAULT_CONFIG, pi as CdkConnectedOverlay, wt as CdkOverlayOrigin, pt as CdkScrollable, q as CloseScrollStrategy, J as ConnectedOverlayPositionChange, vt as ConnectionPositionPair, et as FlexibleConnectedPositionStrategy, Oo as FullscreenOverlayContainer, it as GlobalPositionStrategy, M as NoopScrollStrategy, xt as OVERLAY_DEFAULT_CONFIG, de as Overlay, z as OverlayConfig, ot as OverlayContainer, re as OverlayKeyboardDispatcher, _i as OverlayModule, le as OverlayOutsideClickDispatcher, ce as OverlayPositionBuilder, tt as OverlayRef, Q as RepositionScrollStrategy, di as STANDARD_DROPDOWN_ADJACENT_POSITIONS, ci as STANDARD_DROPDOWN_BELOW_POSITIONS, L as ScrollDispatcher, se as ScrollStrategyOptions, yt as ScrollingVisibility, C as ViewportRuler, ie as createBlockScrollStrategy, oe as createCloseScrollStrategy, Rt as createFlexibleConnectedPositionStrategy, he as createGlobalPositionStrategy, ni as createNoopScrollStrategy, Et as createOverlayRef, kt as createRepositionScrollStrategy, li as validateHorizontalPosition, ri as validateVerticalPosition, We as \u0275\u0275CdkFixedSizeVirtualScroll, ct as \u0275\u0275CdkScrollableModule, Ue as \u0275\u0275CdkVirtualForOf, Ze as \u0275\u0275CdkVirtualScrollViewport, Ge as \u0275\u0275CdkVirtualScrollableElement, $e as \u0275\u0275CdkVirtualScrollableWindow, pe as \u0275\u0275Dir };
