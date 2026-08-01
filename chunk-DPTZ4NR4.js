import * as r from "@angular/core";
import { SecurityContext as d } from "@angular/core";
var y = (() => {
    class e {
        static \u0275fac = function (t) { return new (t || e); };
        static \u0275cmp = r.\u0275\u0275defineComponent({ type: e, selectors: [["ng-component"]], exportAs: ["cdkVisuallyHidden"], decls: 0, vars: 0, template: function (t, c) { }, styles: [`.cdk-visually-hidden {
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
    return e;
})(), o;
function a() { if (o === void 0 && (o = null, typeof window < "u")) {
    let e = window;
    if (e.trustedTypes !== void 0)
        try {
            o = e.trustedTypes.createPolicy("angular#components", { createHTML: n => n });
        }
        catch (n) {
            console.error(n);
        }
} return o; }
function l(e) { return a()?.createHTML(e) || e; }
function m(e, n, i) { let t = i.sanitize(d.HTML, n); e.innerHTML = l(t || ""); }
export { y as a, l as b, m as c };
