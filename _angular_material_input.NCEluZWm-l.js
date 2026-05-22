import { a as y, c as b, d as I, f as S, h as M, i as p, m, o as C, p as u } from "@nf-internal/chunk-YN4CBYVJ";
import "@nf-internal/chunk-U6VGVGKT";
import "@nf-internal/chunk-4CLCTAJ7";
import { coerceBooleanProperty as c } from "@angular/cdk/coercion";
import { Platform as E, getSupportedInputTypes as g } from "@angular/cdk/platform";
import { AutofillMonitor as F, TextFieldModule as T } from "@angular/cdk/text-field";
import * as s from "@angular/core";
import { InjectionToken as N, inject as n, ElementRef as V, NgZone as B, Renderer2 as R, isSignal as D, effect as k, booleanAttribute as P } from "@angular/core";
import { _IdGenerator as w } from "@angular/cdk/a11y";
import { NgControl as O, Validators as x, NgForm as q, FormGroupDirective as U } from "@angular/forms";
import { Subject as j } from "rxjs";
import { InjectionToken as A } from "@angular/core";
var f = new A("MAT_INPUT_VALUE_ACCESSOR");
import * as _ from "@angular/core";
import "@angular/core";
var v = (() => { class r {
    isErrorState(e, t) { return !!(e && e.invalid && (e.touched || t && t.submitted)); }
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })();
var l = class {
    _defaultMatcher;
    ngControl;
    _parentFormGroup;
    _parentForm;
    _stateChanges;
    errorState = !1;
    matcher;
    constructor(d, e, t, i, a) { this._defaultMatcher = d, this.ngControl = e, this._parentFormGroup = t, this._parentForm = i, this._stateChanges = a; }
    updateErrorState() { let d = this.errorState, e = this._parentFormGroup || this._parentForm, t = this.matcher || this._defaultMatcher, i = this.ngControl ? this.ngControl.control : null, a = t?.isErrorState(i, e) ?? !1; a !== d && (this.errorState = a, this._stateChanges.next()); }
};
import { BidiModule as L } from "@angular/cdk/bidi";
import "@angular/common";
import "rxjs/operators";
import "@angular/cdk/observers/private";
import "@angular/cdk/layout";
import "@angular/cdk/observers";
function ge(r) { return Error(`Input type "${r}" isn't supported by matInput.`); }
var G = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"], H = new N("MAT_INPUT_CONFIG"), ye = (() => { class r {
    _elementRef = n(V);
    _platform = n(E);
    ngControl = n(O, { optional: !0, self: !0 });
    _autofillMonitor = n(F);
    _ngZone = n(B);
    _formField = n(m, { optional: !0 });
    _renderer = n(R);
    _uid = n(w).getId("mat-input-");
    _previousNativeValue;
    _inputValueAccessor;
    _signalBasedValueAccessor;
    _previousPlaceholder = null;
    _errorStateTracker;
    _config = n(H, { optional: !0 });
    _cleanupIosKeyup;
    _cleanupWebkitWheel;
    _isServer = !1;
    _isNativeSelect = !1;
    _isTextarea = !1;
    _isInFormField = !1;
    focused = !1;
    stateChanges = new j;
    controlType = "mat-input";
    autofilled = !1;
    get disabled() { return this._disabled; }
    set disabled(e) { this._disabled = c(e), this.focused && (this.focused = !1, this.stateChanges.next()); }
    _disabled = !1;
    get id() { return this._id; }
    set id(e) { this._id = e || this._uid; }
    _id;
    placeholder;
    name;
    get required() { return this._required ?? this.ngControl?.control?.hasValidator(x.required) ?? !1; }
    set required(e) { this._required = c(e); }
    _required;
    get type() { return this._type; }
    set type(e) { this._type = e || "text", this._validateType(), !this._isTextarea && g().has(this._type) && (this._elementRef.nativeElement.type = this._type); }
    _type = "text";
    get errorStateMatcher() { return this._errorStateTracker.matcher; }
    set errorStateMatcher(e) { this._errorStateTracker.matcher = e; }
    userAriaDescribedBy;
    get value() { return this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value() : this._inputValueAccessor.value; }
    set value(e) { e !== this.value && (this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value.set(e) : this._inputValueAccessor.value = e, this.stateChanges.next()); }
    get readonly() { return this._readonly; }
    set readonly(e) { this._readonly = c(e); }
    _readonly = !1;
    disabledInteractive;
    get errorState() { return this._errorStateTracker.errorState; }
    set errorState(e) { this._errorStateTracker.errorState = e; }
    _neverEmptyInputTypes = ["date", "datetime", "datetime-local", "month", "time", "week"].filter(e => g().has(e));
    constructor() { let e = n(q, { optional: !0 }), t = n(U, { optional: !0 }), i = n(v), a = n(f, { optional: !0, self: !0 }), o = this._elementRef.nativeElement, h = o.nodeName.toLowerCase(); a ? D(a.value) ? this._signalBasedValueAccessor = a : this._inputValueAccessor = a : this._inputValueAccessor = o, this._previousNativeValue = this.value, this.id = this.id, this._platform.IOS && this._ngZone.runOutsideAngular(() => { this._cleanupIosKeyup = this._renderer.listen(o, "keyup", this._iOSKeyupListener); }), this._errorStateTracker = new l(i, this.ngControl, t, e, this.stateChanges), this._isServer = !this._platform.isBrowser, this._isNativeSelect = h === "select", this._isTextarea = h === "textarea", this._isInFormField = !!this._formField, this.disabledInteractive = this._config?.disabledInteractive || !1, this._isNativeSelect && (this.controlType = o.multiple ? "mat-native-select-multiple" : "mat-native-select"), this._signalBasedValueAccessor && k(() => { this._signalBasedValueAccessor.value(), this.stateChanges.next(); }); }
    ngAfterViewInit() { this._platform.isBrowser && this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e => { this.autofilled = e.isAutofilled, this.stateChanges.next(); }); }
    ngOnChanges() { this.stateChanges.next(); }
    ngOnDestroy() { this.stateChanges.complete(), this._platform.isBrowser && this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement), this._cleanupIosKeyup?.(), this._cleanupWebkitWheel?.(); }
    ngDoCheck() { this.ngControl && (this.updateErrorState(), this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled && (this.disabled = this.ngControl.disabled, this.stateChanges.next())), this._dirtyCheckNativeValue(), this._dirtyCheckPlaceholder(); }
    focus(e) { this._elementRef.nativeElement.focus(e); }
    updateErrorState() { this._errorStateTracker.updateErrorState(); }
    _focusChanged(e) { if (e !== this.focused) {
        if (!this._isNativeSelect && e && this.disabled && this.disabledInteractive) {
            let t = this._elementRef.nativeElement;
            t.type === "number" ? (t.type = "text", t.setSelectionRange(0, 0), t.type = "number") : t.setSelectionRange(0, 0);
        }
        this.focused = e, this.stateChanges.next();
    } }
    _onInput() { }
    _dirtyCheckNativeValue() { let e = this._elementRef.nativeElement.value; this._previousNativeValue !== e && (this._previousNativeValue = e, this.stateChanges.next()); }
    _dirtyCheckPlaceholder() { let e = this._getPlaceholder(); if (e !== this._previousPlaceholder) {
        let t = this._elementRef.nativeElement;
        this._previousPlaceholder = e, e ? t.setAttribute("placeholder", e) : t.removeAttribute("placeholder");
    } }
    _getPlaceholder() { return this.placeholder || null; }
    _validateType() { G.indexOf(this._type) > -1; }
    _isNeverEmpty() { return this._neverEmptyInputTypes.indexOf(this._type) > -1; }
    _isBadInput() { let e = this._elementRef.nativeElement.validity; return e && e.badInput; }
    get empty() { return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled; }
    get shouldLabelFloat() { if (this._isNativeSelect) {
        let e = this._elementRef.nativeElement, t = e.options[0];
        return this.focused || e.multiple || !this.empty || !!(e.selectedIndex > -1 && t && t.label);
    }
    else
        return this.focused && !this.disabled || !this.empty; }
    get describedByIds() { return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ") || []; }
    setDescribedByIds(e) { let t = this._elementRef.nativeElement; e.length ? t.setAttribute("aria-describedby", e.join(" ")) : t.removeAttribute("aria-describedby"); }
    onContainerClick() { this.focused || this.focus(); }
    _isInlineSelect() { let e = this._elementRef.nativeElement; return this._isNativeSelect && (e.multiple || e.size > 1); }
    _iOSKeyupListener = e => { let t = e.target; !t.value && t.selectionStart === 0 && t.selectionEnd === 0 && (t.setSelectionRange(1, 1), t.setSelectionRange(0, 0)); };
    _getReadonlyAttribute() { return this._isNativeSelect ? null : this.readonly || this.disabled && this.disabledInteractive ? "true" : null; }
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: r, selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]], hostAttrs: [1, "mat-mdc-input-element"], hostVars: 21, hostBindings: function (t, i) { t & 1 && s.\u0275\u0275listener("focus", function () { return i._focusChanged(!0); })("blur", function () { return i._focusChanged(!1); })("input", function () { return i._onInput(); }), t & 2 && (s.\u0275\u0275domProperty("id", i.id)("disabled", i.disabled && !i.disabledInteractive)("required", i.required), s.\u0275\u0275attribute("name", i.name || null)("readonly", i._getReadonlyAttribute())("aria-disabled", i.disabled && i.disabledInteractive ? "true" : null)("aria-invalid", i.empty && i.required ? null : i.errorState)("aria-required", i.required)("id", i.id), s.\u0275\u0275classProp("mat-input-server", i._isServer)("mat-mdc-form-field-textarea-control", i._isInFormField && i._isTextarea)("mat-mdc-form-field-input-control", i._isInFormField)("mat-mdc-input-disabled-interactive", i.disabledInteractive)("mdc-text-field__input", i._isInFormField)("mat-mdc-native-select-inline", i._isInlineSelect())); }, inputs: { disabled: "disabled", id: "id", placeholder: "placeholder", name: "name", required: "required", type: "type", errorStateMatcher: "errorStateMatcher", userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"], value: "value", readonly: "readonly", disabledInteractive: [2, "disabledInteractive", "disabledInteractive", P] }, exportAs: ["matInput"], features: [s.\u0275\u0275ProvidersFeature([{ provide: p, useExisting: r }]), s.\u0275\u0275NgOnChangesFeature] });
} return r; })(), be = (() => { class r {
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275mod = s.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = s.\u0275\u0275defineInjector({ imports: [u, u, T, L] });
} return r; })();
export { H as MAT_INPUT_CONFIG, f as MAT_INPUT_VALUE_ACCESSOR, b as MatError, C as MatFormField, I as MatHint, ye as MatInput, be as MatInputModule, y as MatLabel, S as MatPrefix, M as MatSuffix, ge as getMatInputUnsupportedTypeError };
