import { a as b, c as S, d as I, f as C, h as M, i as p, m as f, o as E, p as u } from "@nf-internal/chunk-TJUMSZGW";
import "@nf-internal/chunk-U6VGVGKT";
import "@nf-internal/chunk-PZNONLPT";
import { coerceBooleanProperty as h } from "@angular/cdk/coercion";
import { Platform as T, getSupportedInputTypes as v } from "@angular/cdk/platform";
import { AutofillMonitor as N, TextFieldModule as V } from "@angular/cdk/text-field";
import * as s from "@angular/core";
import { InjectionToken as R, inject as n, ElementRef as B, NgZone as D, Renderer2 as k, isSignal as P, effect as w, booleanAttribute as O } from "@angular/core";
import { _IdGenerator as x } from "@angular/cdk/a11y";
import { NgControl as q, Validators as L, NgForm as U, FormGroupDirective as G } from "@angular/forms";
import { FORM_FIELD as H } from "@angular/forms/signals";
import { Subject as j } from "rxjs";
import { InjectionToken as F } from "@angular/core";
var m = new F("MAT_INPUT_VALUE_ACCESSOR");
import * as _ from "@angular/core";
import "@angular/core";
var g = (() => { class r {
    isErrorState(e, t) { return !!(e && e.invalid && (e.touched || t && t.submitted)); }
    isSignalErrorState(e) { if (!e)
        return !1; let t = e().invalid(), i = e().touched(); return t && i; }
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275prov = _.\u0275\u0275defineService({ token: r, factory: r.\u0275fac });
} return r; })();
import { isSignal as A } from "@angular/core";
var d = class {
    _defaultMatcher;
    _parentFormGroup;
    _parentForm;
    _stateChanges;
    errorState = !1;
    matcher;
    ngControl;
    formField;
    constructor(o, e, t, i, a) { this._defaultMatcher = o, this._parentFormGroup = t, this._parentForm = i, this._stateChanges = a, e ? A(e.field) && !e.updateValueAndValidity ? (this.formField = e, this.ngControl = null) : (this.formField = null, this.ngControl = e) : this.ngControl = this.formField = null; }
    updateErrorState() { let o = this.errorState, e = this._getCurrentErrorState(this.matcher || this._defaultMatcher); e !== o && (this.errorState = e, this._stateChanges.next()); }
    _getCurrentErrorState(o) { if (this.formField && o?.isSignalErrorState)
        return o.isSignalErrorState(this.formField.field()) ?? !1; let e = this._parentFormGroup || this._parentForm, t = this.ngControl ? this.ngControl.control : null; return o?.isErrorState(t, e) ?? !1; }
};
import { BidiModule as K } from "@angular/cdk/bidi";
import "@angular/common";
import "rxjs/operators";
import "@angular/cdk/observers/private";
import "@angular/cdk/layout";
import "@angular/cdk/observers";
function Ce(r) { return Error(`Input type "${r}" isn't supported by matInput.`); }
var W = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"], Z = new R("MAT_INPUT_CONFIG"), Me = (() => { class r {
    _elementRef = n(B);
    _platform = n(T);
    ngControl = n(q, { optional: !0, self: !0 });
    _autofillMonitor = n(N);
    _ngZone = n(D);
    _formField = n(f, { optional: !0 });
    _renderer = n(k);
    _uid = n(x).getId("mat-input-");
    _previousNativeValue;
    _inputValueAccessor;
    _signalBasedValueAccessor;
    _previousPlaceholder = null;
    _errorStateTracker;
    _config = n(Z, { optional: !0 });
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
    set disabled(e) { this._disabled = h(e), this.focused && (this.focused = !1, this.stateChanges.next()); }
    _disabled = !1;
    get id() { return this._id; }
    set id(e) { this._id = e || this._uid; }
    _id;
    placeholder;
    name;
    get required() { return this._required ?? this.ngControl?.control?.hasValidator(L.required) ?? !1; }
    set required(e) { this._required = h(e); }
    _required;
    get type() { return this._type; }
    set type(e) { this._type = e || "text", this._validateType(), !this._isTextarea && v().has(this._type) && (this._elementRef.nativeElement.type = this._type); }
    _type = "text";
    get errorStateMatcher() { return this._errorStateTracker.matcher; }
    set errorStateMatcher(e) { this._errorStateTracker.matcher = e; }
    userAriaDescribedBy;
    get value() { return this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value() : this._inputValueAccessor.value; }
    set value(e) { e !== this.value && (this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value.set(e) : this._inputValueAccessor.value = e, this.stateChanges.next()); }
    get readonly() { return this._readonly; }
    set readonly(e) { this._readonly = h(e); }
    _readonly = !1;
    disabledInteractive;
    get errorState() { return this._errorStateTracker.errorState; }
    set errorState(e) { this._errorStateTracker.errorState = e; }
    _neverEmptyInputTypes = ["date", "datetime", "datetime-local", "month", "time", "week"].filter(e => v().has(e));
    constructor() { let e = n(U, { optional: !0 }), t = n(G, { optional: !0 }), i = n(g), a = n(m, { optional: !0, self: !0 }), y = n(H, { optional: !0, self: !0 }), l = this._elementRef.nativeElement, c = l.nodeName.toLowerCase(); a ? P(a.value) ? this._signalBasedValueAccessor = a : this._inputValueAccessor = a : this._inputValueAccessor = l, this._previousNativeValue = this.value, this.id = this.id, this._platform.IOS && this._ngZone.runOutsideAngular(() => { this._cleanupIosKeyup = this._renderer.listen(l, "keyup", this._iOSKeyupListener); }), this._errorStateTracker = new d(i, y || this.ngControl, t, e, this.stateChanges), this._isServer = !this._platform.isBrowser, this._isNativeSelect = c === "select", this._isTextarea = c === "textarea", this._isInFormField = !!this._formField, this.disabledInteractive = this._config?.disabledInteractive || !1, this._isNativeSelect && (this.controlType = l.multiple ? "mat-native-select-multiple" : "mat-native-select"), this._signalBasedValueAccessor && w(() => { this._signalBasedValueAccessor.value(), this.stateChanges.next(); }); }
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
    _validateType() { W.indexOf(this._type) > -1; }
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
    static \u0275dir = s.\u0275\u0275defineDirective({ type: r, selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]], hostAttrs: [1, "mat-mdc-input-element"], hostVars: 21, hostBindings: function (t, i) { t & 1 && s.\u0275\u0275listener("focus", function () { return i._focusChanged(!0); })("blur", function () { return i._focusChanged(!1); })("input", function () { return i._onInput(); }), t & 2 && (s.\u0275\u0275domProperty("id", i.id)("disabled", i.disabled && !i.disabledInteractive)("required", i.required), s.\u0275\u0275attribute("name", i.name || null)("readonly", i._getReadonlyAttribute())("aria-disabled", i.disabled && i.disabledInteractive ? "true" : null)("aria-invalid", i.empty && i.required ? null : i.errorState)("aria-required", i.required)("id", i.id), s.\u0275\u0275classProp("mat-input-server", i._isServer)("mat-mdc-form-field-textarea-control", i._isInFormField && i._isTextarea)("mat-mdc-form-field-input-control", i._isInFormField)("mat-mdc-input-disabled-interactive", i.disabledInteractive)("mdc-text-field__input", i._isInFormField)("mat-mdc-native-select-inline", i._isInlineSelect())); }, inputs: { disabled: "disabled", id: "id", placeholder: "placeholder", name: "name", required: "required", type: "type", errorStateMatcher: "errorStateMatcher", userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"], value: "value", readonly: "readonly", disabledInteractive: [2, "disabledInteractive", "disabledInteractive", O] }, exportAs: ["matInput"], features: [s.\u0275\u0275ProvidersFeature([{ provide: p, useExisting: r }]), s.\u0275\u0275NgOnChangesFeature] });
} return r; })(), Ee = (() => { class r {
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275mod = s.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = s.\u0275\u0275defineInjector({ imports: [u, u, V, K] });
} return r; })();
export { Z as MAT_INPUT_CONFIG, m as MAT_INPUT_VALUE_ACCESSOR, S as MatError, E as MatFormField, I as MatHint, Me as MatInput, Ee as MatInputModule, b as MatLabel, C as MatPrefix, M as MatSuffix, Ce as getMatInputUnsupportedTypeError };
