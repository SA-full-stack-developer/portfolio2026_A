import { a } from "@nf-internal/chunk-XTCCDCJT";
import { HttpClient as p, HttpBackend as m } from "@angular/common/http";
import * as l from "@angular/core";
import { InjectionToken as T, inject as f } from "@angular/core";
import { mergeDeep as L, TranslateLoader as H } from "@ngx-translate/core";
import { catchError as $, of as u, forkJoin as k, map as v } from "rxjs";
var g = new T("TRANSLATE_HTTP_LOADER_CONFIG"), x = (() => { class e {
    http;
    config;
    constructor() { this.config = a({ resources: [], enforceLoading: !1, useHttpBackend: !1 }, f(g)), this.http = this.config.useHttpBackend ? new p(f(m)) : f(p); }
    getTranslation(t) { let s = this.config.enforceLoading ? `?enforceLoading=${Date.now()}` : "", c = this.config.resources.map(r => { let i = typeof r == "string" ? `${r}${t}.json` : `${r.prefix}${t}${r.suffix ?? ".json"}`, o = this.http.get(`${i}${s}`); return this.config.failOnError ? o : o.pipe($(h => (console.warn(`@ngx-translate/http-loader: error loading translation for ${t}:`, h), u({})))); }); return c.length === 0 ? u({}) : k(c).pipe(v(r => r.reduce((i, o) => L(i, o), {}))); }
    static \u0275fac = function (s) { return new (s || e); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })();
function C(e = {}) { if ("resources" in e && e.resources)
    return d(e); let n = e, t = { enforceLoading: n.enforceLoading ?? !1, useHttpBackend: n.useHttpBackend ?? !1, failOnError: n.failOnError ?? !1, resources: [{ prefix: n.prefix ?? "/assets/i18n/", suffix: n.suffix ?? ".json" }] }; return d(t); }
function d(e = {}) { return [{ provide: g, useValue: a({ resources: ["/assets/i18n/"] }, e) }, { provide: H, useClass: x }]; }
export { g as TRANSLATE_HTTP_LOADER_CONFIG, x as TranslateHttpLoader, C as provideTranslateHttpLoader, d as provideTranslateMultiHttpLoader };
