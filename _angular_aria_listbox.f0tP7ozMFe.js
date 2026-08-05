import { a as c, b as g } from "@nf-internal/chunk-PZNONLPT";
import * as f from "@angular/core";
import { InjectionToken as U, input as h, inject as m, ElementRef as E, booleanAttribute as v, model as W, computed as I, signal as X, afterNextRender as J, afterRenderEffect as k, untracked as C } from "@angular/core";
import { Directionality as Q } from "@angular/cdk/bidi";
import { _IdGenerator as T } from "@angular/cdk/a11y";
import { createComputed as P, SIGNAL as F, createSignal as H, createLinkedSignal as Z, linkedSignalUpdateFn as ee, linkedSignalSetFn as te } from "@angular/core/primitives/signals";
import { signal as N, computed as V } from "@angular/core";
var a = (function (n) { return n[n.None = 0] = "None", n[n.Ctrl = 1] = "Ctrl", n[n.Shift = 2] = "Shift", n[n.Alt = 4] = "Alt", n[n.Meta = 8] = "Meta", n.Any = "Any", n; })(a || {}), b = class {
    configs = [];
    handle(e) { for (let t of this.configs)
        t.matcher(e) && (t.handler(e), t.preventDefault && e.preventDefault(), t.stopPropagation && e.stopPropagation()); }
};
function j(n) { return (+n.ctrlKey && a.Ctrl) | (+n.shiftKey && a.Shift) | (+n.altKey && a.Alt) | (+n.metaKey && a.Meta); }
function O(n, e) { let t = j(n), i = Array.isArray(e) ? e : [e]; return i.includes(a.Any) ? !0 : i.some(s => t === s); }
var x = class extends b {
    options = { ignoreRepeat: !0, preventDefault: !0, stopPropagation: !0 };
    on(...e) { let { modifiers: t, key: i, handler: s, options: o } = this._normalizeInputs(...e); return this.configs.push(c(c({ handler: s, matcher: r => this._isMatch(r, i, t, o) }, this.options), o)), this; }
    _normalizeInputs(...e) { let t = Array.isArray(e[0]) || a.hasOwnProperty(e[0]), i = t ? e[0] : a.None, s = t ? e[1] : e[0], o = t ? e[2] : e[1], r = t ? e[3] : e[2]; return { key: s, handler: o, modifiers: i, options: r ?? {} }; }
    _isMatch(e, t, i, s) { return e.key == null || !O(e, i) || e.repeat && s?.ignoreRepeat !== !1 ? !1 : t instanceof RegExp ? t.test(e.key) : (typeof t == "string" ? t : t()).toLowerCase() === e.key.toLowerCase(); }
};
function l(n) { let e = P(n); return e[F].debugName = "", e; }
function u(n) { let [e, t, i] = H(n); return e[F].debugName = "", Object.assign(e, { set: t, update: i, asReadonly: () => e }); }
function q(n, e) { return (n.element.compareDocumentPosition(e.element) & Node.DOCUMENT_POSITION_PRECEDING) > 0 ? 1 : -1; }
var _ = class {
    _items = N(new Set);
    _version = N(0);
    _observer;
    orderedItems = V(() => (this._version(), Array.from(this._items()).sort(q)));
    register(e) { this._items.update(t => { let i = new Set(t); return i.add(e), i; }); }
    unregister(e) { this._items.update(t => { let i = new Set(t); return i.delete(e), i; }); }
    startObserving(e) { this._observer && this._observer.disconnect(), this._observer = new MutationObserver(t => { t.some(s => s.addedNodes.length || s.removedNodes.length) && this._version.update(s => s + 1); }), this._observer.observe(e, { childList: !0, subtree: !0 }); }
    stopObserving() { this._observer?.disconnect(), this._observer = void 0; }
};
var y = class {
    inputs;
    prevActiveItem = u(void 0);
    prevActiveIndex = l(() => this.prevActiveItem() ? this.inputs.items().indexOf(this.prevActiveItem()) : -1);
    activeIndex = l(() => this.inputs.activeItem() ? this.inputs.items().indexOf(this.inputs.activeItem()) : -1);
    constructor(e) { this.inputs = e; }
    isListDisabled() { return this.inputs.disabled() || this.inputs.items().every(e => e.disabled()); }
    getActiveDescendant() { if (!this.isListDisabled() && this.inputs.focusMode() !== "roving")
        return this.inputs.activeItem()?.id() ?? void 0; }
    getListTabIndex() { return this.isListDisabled() || this.inputs.focusMode() === "activedescendant" ? 0 : -1; }
    getItemTabIndex(e) { return this.isListDisabled() || this.inputs.focusMode() === "activedescendant" ? -1 : this.inputs.activeItem() === e ? 0 : -1; }
    focus(e, t) { return this.isListDisabled() || !this.isFocusable(e) ? !1 : (this.prevActiveItem.set(this.inputs.activeItem()), this.inputs.activeItem.set(e), (t?.focusElement || t?.focusElement === void 0) && this.inputs.focusMode() === "roving" && e.element()?.focus(), !0); }
    isFocusable(e) { return !e.disabled() || this.inputs.softDisabled(); }
}, B = class {
    inputs;
    constructor(e) { this.inputs = e; }
    goto(e, t) { return e ? this.inputs.focusManager.focus(e, t) : !1; }
    next(e) { return this._advance(1, e); }
    peekNext(e) { return this._peek(1, e); }
    prev(e) { return this._advance(-1, e); }
    peekPrev(e) { return this._peek(-1, e); }
    first(e) { let t = this.peekFirst(e); return t ? this.goto(t, e) : !1; }
    last(e) { let t = this.peekLast(e); return t ? this.goto(t, e) : !1; }
    peekFirst(e) { return (e?.items ?? this.inputs.items()).find(i => this.inputs.focusManager.isFocusable(i)); }
    peekLast(e) { let t = e?.items ?? this.inputs.items(); for (let i = t.length - 1; i >= 0; i--)
        if (this.inputs.focusManager.isFocusable(t[i]))
            return t[i]; }
    _advance(e, t) { let i = this._peek(e, t); return i ? this.goto(i, t) : !1; }
    _peek(e, t) { let i = t?.items ?? this.inputs.items(), s = i.length, o = this.inputs.focusManager.inputs.activeItem(), r = t?.items && o ? i.indexOf(o) : this.inputs.focusManager.activeIndex(), p = d => this.inputs.wrap() ? (d + e + s) % s : d + e; for (let d = p(r); d !== r && d < s && d >= 0; d = p(d))
        if (this.inputs.focusManager.isFocusable(i[d]))
            return i[d]; }
};
var M = class {
    inputs;
    rangeStartIndex = u(0);
    rangeEndIndex = u(0);
    selectedItems = l(() => this.inputs.items().filter(e => this.inputs.value().includes(e.value())));
    constructor(e) { this.inputs = e; }
    select(e, t = { anchor: !0 }) { if (e = e ?? this.inputs.focusManager.inputs.activeItem(), !e || e.disabled() || !e.selectable() || !this.inputs.focusManager.isFocusable(e) || this.inputs.value().includes(e.value()))
        return; this.inputs.multi() || this.deselectAll(); let i = this.inputs.items().findIndex(s => s === e); t.anchor && this.beginRangeSelection(i), this.inputs.value.update(s => s.concat(e.value())); }
    deselect(e) { e = e ?? this.inputs.focusManager.inputs.activeItem(), e && !e.disabled() && e.selectable() && this.inputs.value.update(t => t.filter(i => i !== e.value())); }
    toggle(e) { e = e ?? this.inputs.focusManager.inputs.activeItem(), e && (this.inputs.value().includes(e.value()) ? this.deselect(e) : this.select(e)); }
    toggleOne() { let e = this.inputs.focusManager.inputs.activeItem(); e && (this.inputs.value().includes(e.value()) ? this.deselect() : this.selectOne()); }
    selectAll() { if (this.inputs.multi()) {
        for (let e of this.inputs.items())
            this.select(e, { anchor: !1 });
        this.beginRangeSelection();
    } }
    deselectAll() { for (let e of this.inputs.value()) {
        let t = this.inputs.items().find(i => i.value() === e);
        t ? this.deselect(t) : this.inputs.value.update(i => i.filter(s => s !== e));
    } }
    toggleAll() { this.inputs.items().filter(t => !t.disabled() && t.selectable() && this.inputs.focusManager.isFocusable(t)).map(t => t.value()).every(t => this.inputs.value().includes(t)) ? this.deselectAll() : this.selectAll(); }
    selectOne() { let e = this.inputs.focusManager.inputs.activeItem(); e && (e.disabled() || !e.selectable()) || (this.deselectAll(), !(this.inputs.value().length > 0 && !this.inputs.multi()) && this.select()); }
    selectRange(e = { anchor: !0 }) { this.inputs.focusManager.prevActiveIndex() === this.rangeStartIndex() && e.anchor && this.beginRangeSelection(this.inputs.focusManager.prevActiveIndex()); let i = this._getItemsFromIndex(this.rangeStartIndex()), s = this._getItemsFromIndex(this.rangeEndIndex()).filter(o => !i.includes(o)); for (let o of s)
        this.deselect(o); for (let o of i)
        this.select(o, { anchor: !1 }); if (i.length) {
        let o = i.pop(), r = this.inputs.items().findIndex(p => p === o);
        this.rangeEndIndex.set(r);
    } }
    beginRangeSelection(e = this.inputs.focusManager.activeIndex()) { this.rangeStartIndex.set(e), this.rangeEndIndex.set(e); }
    _getItemsFromIndex(e) { if (e === -1)
        return []; let t = Math.max(this.inputs.focusManager.activeIndex(), e), i = Math.min(this.inputs.focusManager.activeIndex(), e), s = []; for (let o = i; o <= t; o++)
        s.push(this.inputs.items()[o]); return this.inputs.focusManager.activeIndex() < e ? s.reverse() : s; }
}, D = class {
    inputs;
    timeout;
    focusManager;
    isTyping = l(() => this._query().length > 0);
    _query = u("");
    _startIndex = u(void 0);
    constructor(e) { this.inputs = e, this.focusManager = e.focusManager; }
    search(e) { if (e.length !== 1 || !this.isTyping() && e === " ")
        return !1; this._startIndex() === void 0 && this._startIndex.set(this.focusManager.activeIndex()), clearTimeout(this.timeout), this._query.update(i => i + e.toLowerCase()); let t = this._getItem(); return t && this.focusManager.focus(t), this.timeout = setTimeout(() => { this._query.set(""), this._startIndex.set(void 0); }, this.inputs.typeaheadDelay()), !0; }
    _getItem() { let e = this.focusManager.inputs.items(), t = e.length, i = this._startIndex(); for (let s = 0; s < t; s++) {
        let o = (i + 1 + s) % t, r = e[o];
        if (this.focusManager.isFocusable(r) && r.searchTerm().toLowerCase().startsWith(this._query()))
            return r;
    } }
};
var w = class {
    inputs;
    navigationBehavior;
    selectionBehavior;
    typeaheadBehavior;
    focusBehavior;
    disabled = l(() => this.focusBehavior.isListDisabled());
    activeDescendant = l(() => this.focusBehavior.getActiveDescendant());
    tabIndex = l(() => this.focusBehavior.getListTabIndex());
    activeIndex = l(() => this.focusBehavior.activeIndex());
    _anchorIndex = u(0);
    _wrap = u(!0);
    constructor(e) { this.inputs = e, this.focusBehavior = new y(e), this.selectionBehavior = new M(g(c({}, e), { focusManager: this.focusBehavior })), this.typeaheadBehavior = new D(g(c({}, e), { focusManager: this.focusBehavior })), this.navigationBehavior = new B(g(c({}, e), { focusManager: this.focusBehavior, wrap: l(() => this._wrap() && this.inputs.wrap()) })); }
    getItemTabindex(e) { return this.focusBehavior.getItemTabIndex(e); }
    first(e) { this._navigate(e, () => this.navigationBehavior.first(e)); }
    last(e) { this._navigate(e, () => this.navigationBehavior.last(e)); }
    next(e) { this._navigate(e, () => this.navigationBehavior.next(e)); }
    prev(e) { this._navigate(e, () => this.navigationBehavior.prev(e)); }
    goto(e, t) { this._navigate(t, () => this.navigationBehavior.goto(e, t)); }
    unfocus() { this.inputs.activeItem.set(void 0); }
    anchor(e) { this._anchorIndex.set(e); }
    search(e, t) { this._navigate(t, () => this.typeaheadBehavior.search(e)); }
    isTyping() { return this.typeaheadBehavior.isTyping(); }
    select(e) { this.selectionBehavior.select(e); }
    selectOne() { this.selectionBehavior.selectOne(); }
    deselect(e) { this.selectionBehavior.deselect(e); }
    deselectAll() { this.selectionBehavior.deselectAll(); }
    toggle(e) { this.selectionBehavior.toggle(e); }
    toggleOne() { this.selectionBehavior.toggleOne(); }
    toggleAll() { this.selectionBehavior.toggleAll(); }
    isFocusable(e) { return this.focusBehavior.isFocusable(e); }
    updateSelection(e = { anchor: !0 }) { e.toggle && this.selectionBehavior.toggle(), e.select && this.selectionBehavior.select(), e.selectOne && this.selectionBehavior.selectOne(), e.selectRange && this.selectionBehavior.selectRange(), e.anchor || this.anchor(this.selectionBehavior.rangeStartIndex()); }
    _navigate(e = {}, t) { e?.selectRange && (this._wrap.set(!1), this.selectionBehavior.rangeStartIndex.set(this._anchorIndex())), t() && (this.updateSelection(e), e?.selectRange || this.anchor(this.activeIndex())), this._wrap.set(!0); }
};
function $(n) { return n.detail === 0 || !n.pointerType; }
function z(n) { return !n.isTrusted; }
var S = class extends b {
    options = { preventDefault: !1, stopPropagation: !1 };
    on(...e) { let { handler: t, modifiers: i } = this._normalizeInputs(...e); return this.configs.push(c({ handler: t, matcher: s => this._isMatch(s, i) }, this.options)), this; }
    _normalizeInputs(...e) { return e.length === 2 ? { modifiers: e[0], handler: e[1] } : { modifiers: a.None, handler: e[0] }; }
    _isMatch(e, t) { return (z(e) || !$(e)) && O(e, t); }
};
var A = class {
    inputs;
    listBehavior;
    hasBeenInteracted = u(!1);
    orientation;
    disabled = l(() => this.listBehavior.disabled());
    readonly;
    tabIndex = l(() => this.listBehavior.tabIndex());
    activeDescendant = l(() => this.listBehavior.activeDescendant());
    multi;
    setsize = l(() => this.inputs.items().length);
    followFocus = l(() => this.inputs.selectionMode() === "follow");
    wrap = u(!0);
    prevKey = l(() => this.inputs.orientation() === "vertical" ? "ArrowUp" : this.inputs.textDirection() === "rtl" ? "ArrowRight" : "ArrowLeft");
    nextKey = l(() => this.inputs.orientation() === "vertical" ? "ArrowDown" : this.inputs.textDirection() === "rtl" ? "ArrowLeft" : "ArrowRight");
    dynamicSpaceKey = l(() => this.listBehavior.isTyping() ? "" : " ");
    typeaheadRegexp = /^.$/;
    keydown = l(() => { let e = new x; return this.readonly() ? e.on(this.prevKey, () => this.listBehavior.prev(), { ignoreRepeat: !1 }).on(this.nextKey, () => this.listBehavior.next(), { ignoreRepeat: !1 }).on("Home", () => this.listBehavior.first()).on("End", () => this.listBehavior.last()).on(this.typeaheadRegexp, t => this.listBehavior.search(t.key)) : (this.followFocus() || e.on(this.prevKey, () => this.listBehavior.prev(), { ignoreRepeat: !1 }).on(this.nextKey, () => this.listBehavior.next(), { ignoreRepeat: !1 }).on("Home", () => this.listBehavior.first()).on("End", () => this.listBehavior.last()).on(this.typeaheadRegexp, t => this.listBehavior.search(t.key)), this.followFocus() && e.on(this.prevKey, () => this.listBehavior.prev({ selectOne: !0 }), { ignoreRepeat: !1 }).on(this.nextKey, () => this.listBehavior.next({ selectOne: !0 }), { ignoreRepeat: !1 }).on("Home", () => this.listBehavior.first({ selectOne: !0 })).on("End", () => this.listBehavior.last({ selectOne: !0 })).on(this.typeaheadRegexp, t => this.listBehavior.search(t.key, { selectOne: !0 })), this.inputs.multi() && e.on(a.Any, "Shift", () => this.listBehavior.anchor(this.listBehavior.activeIndex())).on(a.Shift, this.prevKey, () => this.listBehavior.prev({ selectRange: !0 }), { ignoreRepeat: !1 }).on(a.Shift, this.nextKey, () => this.listBehavior.next({ selectRange: !0 }), { ignoreRepeat: !1 }).on([a.Ctrl | a.Shift, a.Meta | a.Shift], "Home", () => this.listBehavior.first({ selectRange: !0, anchor: !1 })).on([a.Ctrl | a.Shift, a.Meta | a.Shift], "End", () => this.listBehavior.last({ selectRange: !0, anchor: !1 })).on(a.Shift, "Enter", () => this.listBehavior.updateSelection({ selectRange: !0, anchor: !1 })).on(a.Shift, this.dynamicSpaceKey, () => this.listBehavior.updateSelection({ selectRange: !0, anchor: !1 })), !this.followFocus() && this.inputs.multi() && e.on(this.dynamicSpaceKey, () => this.listBehavior.toggle()).on("Enter", () => this.listBehavior.toggle()).on([a.Ctrl, a.Meta], "A", () => this.listBehavior.toggleAll()), !this.followFocus() && !this.inputs.multi() && (e.on(this.dynamicSpaceKey, () => this.listBehavior.toggleOne()), e.on("Enter", () => this.listBehavior.toggleOne())), this.inputs.multi() && this.followFocus() && e.on([a.Ctrl, a.Meta], this.prevKey, () => this.listBehavior.prev(), { ignoreRepeat: !1 }).on([a.Ctrl, a.Meta], this.nextKey, () => this.listBehavior.next(), { ignoreRepeat: !1 }).on([a.Ctrl, a.Meta], " ", () => this.listBehavior.toggle()).on([a.Ctrl, a.Meta], "Enter", () => this.listBehavior.toggle()).on([a.Ctrl, a.Meta], "Home", () => this.listBehavior.first()).on([a.Ctrl, a.Meta], "End", () => this.listBehavior.last()).on([a.Ctrl, a.Meta], "A", () => { this.listBehavior.toggleAll(), this.listBehavior.select(); }), e); });
    clickManager = l(() => { let e = new S; return this.readonly() ? e.on(t => this.listBehavior.goto(this._getItem(t))) : (this.multi() && e.on(a.Shift, t => this.listBehavior.goto(this._getItem(t), { selectRange: !0 })), !this.multi() && this.followFocus() ? e.on(t => this.listBehavior.goto(this._getItem(t), { selectOne: !0 })) : !this.multi() && !this.followFocus() ? e.on(t => this.listBehavior.goto(this._getItem(t), { toggle: !0 })) : this.multi() && this.followFocus() ? e.on(t => this.listBehavior.goto(this._getItem(t), { selectOne: !0 })).on(a.Ctrl, t => this.listBehavior.goto(this._getItem(t), { toggle: !0 })) : this.multi() && !this.followFocus() ? e.on(t => this.listBehavior.goto(this._getItem(t), { toggle: !0 })) : e); });
    constructor(e) { this.inputs = e, this.readonly = e.readonly, this.orientation = e.orientation, this.multi = e.multi, this.listBehavior = new w(e); }
    validate() { let e = []; !this.inputs.multi() && this.inputs.value().length > 1 && e.push(`A single-select listbox should not have multiple selected options. Selected options: ${this.inputs.value().join(", ")}`); let t = this.inputs.items().map(r => r.value()), i = t.filter((r, p) => t.indexOf(r) !== p); i.length > 0 && e.push(`Duplicate option value '${i[0]}' detected inside ngListbox.`); let s = this.inputs.items().map(r => r.id()), o = s.filter((r, p) => s.indexOf(r) !== p); return o.length > 0 && e.push(`Duplicate option ID '${o[0]}' detected inside ngListbox.`), e; }
    onKeydown(e) { this.disabled() || (this.hasBeenInteracted.set(!0), this.keydown().handle(e)); }
    onClick(e) { this.disabled() || (this.hasBeenInteracted.set(!0), this.clickManager().handle(e)); }
    onFocusIn() { this.hasBeenInteracted.set(!0); }
    setDefaultState() { let e = null; for (let t of this.inputs.items())
        if (this.listBehavior.isFocusable(t) && (e || (e = t), t.selected())) {
            this.inputs.activeItem.set(t);
            return;
        } e && (this.inputs.activeItem.set(e), this.followFocus() && this.listBehavior.select()); }
    setDefaultStateEffect() { this.hasBeenInteracted() || this.setDefaultState(); }
    _getItem(e) { if (!e.target)
        return; let t = e.target.closest('[role="option"]'); return this.inputs.items().find(i => i.element() === t); }
}, R = class {
    id;
    value;
    index = l(() => this.listbox()?.inputs.items().indexOf(this) ?? -1);
    active = l(() => this.listbox()?.inputs.activeItem() === this);
    selected = l(() => this.listbox()?.inputs.value().includes(this.value()));
    selectable = () => !0;
    disabled;
    searchTerm;
    listbox;
    tabIndex = l(() => this.listbox()?.listBehavior.getItemTabindex(this));
    element;
    constructor(e) { this.id = e.id, this.value = e.value, this.listbox = e.listbox, this.element = e.element, this.disabled = e.disabled, this.searchTerm = e.searchTerm; }
};
import { numberAttribute as G } from "@angular/core";
function L(n) { return n === void 0 ? void 0 : G(n); }
import "@angular/core/primitives/signals";
var K = new U("LISTBOX"), Ne = (() => { class n {
    id = h(m(T).getId("ng-listbox-", !0));
    _elementRef = m(E);
    element = this._elementRef.nativeElement;
    _collection = new _;
    textDirection = m(Q).valueSignal.asReadonly();
    orientation = h("vertical");
    multi = h(!1, { transform: v });
    wrap = h(!0, { transform: v });
    softDisabled = h(!0, { transform: v });
    focusMode = h("roving");
    selectionMode = h("follow");
    typeaheadDelay = h(500);
    disabled = h(!1, { transform: v });
    readonly = h(!1, { transform: v });
    tabIndex = h(void 0, { alias: "tabindex", transform: L });
    value = W([]);
    _pattern;
    activeDescendant;
    _orderedItemPatterns = I(() => this._collection.orderedItems().map(t => t._pattern));
    constructor() { let t = g(c({}, this), { id: this.id, items: this._orderedItemPatterns, activeItem: X(void 0), textDirection: this.textDirection, element: () => this._elementRef.nativeElement }); this._pattern = new A(t), this.activeDescendant = I(() => this._pattern.activeDescendant()), J(() => { this._collection.startObserving(this.element); }), k({ write: () => this._pattern.setDefaultStateEffect() }), k({ write: () => { let i = t.items(), s = C(() => t.activeItem()); s && !i.some(o => o === s) && (this._pattern.listBehavior.unfocus(), this._pattern.setDefaultState()); } }), k({ write: () => { let i = t.items(), s = C(() => this.value()); i && s.some(o => !i.some(r => r.value() === o)) && this.value.set(s.filter(o => i.some(r => r.value() === o))); } }); }
    ngOnDestroy() { this._collection.stopObserving(); }
    scrollActiveItemIntoView(t = { block: "nearest" }) { this._pattern.inputs.activeItem()?.element()?.scrollIntoView(t); }
    gotoFirst() { this._pattern.listBehavior.first(); }
    gotoIndex(t) { let i = this._orderedItemPatterns(), s = i[Math.min(Math.max(t, 0), i.length - 1)]; s && this._pattern.listBehavior.goto(s); }
    static \u0275fac = function (i) { return new (i || n); };
    static \u0275dir = f.\u0275\u0275defineDirective({ type: n, selectors: [["", "ngListbox", ""]], hostAttrs: ["role", "listbox"], hostVars: 7, hostBindings: function (i, s) { i & 1 && f.\u0275\u0275listener("keydown", function (r) { return s._pattern.onKeydown(r); })("click", function (r) { return s._pattern.onClick(r); })("focusin", function () { return s._pattern.onFocusIn(); }), i & 2 && f.\u0275\u0275attribute("id", s.id())("tabindex", s.tabIndex() !== void 0 ? s.tabIndex() : s._pattern.tabIndex())("aria-readonly", s._pattern.readonly())("aria-disabled", s._pattern.disabled())("aria-orientation", s._pattern.orientation())("aria-multiselectable", s._pattern.multi())("aria-activedescendant", s._pattern.activeDescendant()); }, inputs: { id: [1, "id"], orientation: [1, "orientation"], multi: [1, "multi"], wrap: [1, "wrap"], softDisabled: [1, "softDisabled"], focusMode: [1, "focusMode"], selectionMode: [1, "selectionMode"], typeaheadDelay: [1, "typeaheadDelay"], disabled: [1, "disabled"], readonly: [1, "readonly"], tabIndex: [1, "tabindex", "tabIndex"], value: [1, "value"] }, outputs: { value: "valueChange" }, exportAs: ["ngListbox"], features: [f.\u0275\u0275ProvidersFeature([{ provide: K, useExisting: n }])] });
} return n; })(), Fe = (() => { class n {
    element = m(E).nativeElement;
    active = I(() => this._pattern.active());
    _listbox = m(K);
    id = h(m(T).getId("ng-option-", !0));
    _listboxPattern = I(() => this._listbox._pattern);
    value = h.required();
    disabled = h(!1, { transform: v });
    label = h();
    selected = I(() => this._pattern.selected());
    _pattern = new R(g(c({}, this), { id: this.id, value: this.value, listbox: this._listboxPattern, element: () => this.element, searchTerm: () => this.label() ?? "" }));
    ngOnInit() { this._listbox._collection.register(this); }
    ngOnDestroy() { this._listbox._collection.unregister(this); }
    static \u0275fac = function (i) { return new (i || n); };
    static \u0275dir = f.\u0275\u0275defineDirective({ type: n, selectors: [["", "ngOption", ""]], hostAttrs: ["role", "option"], hostVars: 5, hostBindings: function (i, s) { i & 2 && f.\u0275\u0275attribute("data-active", s.active())("id", s._pattern.id())("tabindex", s._pattern.tabIndex())("aria-selected", s._pattern.selected())("aria-disabled", s._pattern.disabled()); }, inputs: { id: [1, "id"], value: [1, "value"], disabled: [1, "disabled"], label: [1, "label"] }, exportAs: ["ngOption"] });
} return n; })();
export { Ne as Listbox, Fe as Option };
