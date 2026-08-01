import * as a from "@angular/core";
import { inject as i, Injector as c, EnvironmentInjector as f, ApplicationRef as p, createComponent as d } from "@angular/core";
var r = new WeakMap, h = (() => { class n {
    _appRef;
    _injector = i(c);
    _environmentInjector = i(f);
    load(o) { let e = this._appRef = this._appRef || this._injector.get(p), t = r.get(e); t || (t = { loaders: new Set, refs: [] }, r.set(e, t), e.onDestroy(() => { r.get(e)?.refs.forEach(s => s.destroy()), r.delete(e); })), t.loaders.has(o) || (t.loaders.add(o), t.refs.push(d(o, { environmentInjector: this._environmentInjector }))); }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = a.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })();
export { h as a };
