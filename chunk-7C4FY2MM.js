function l() { return typeof __karma__ < "u" && !!__karma__ || typeof jasmine < "u" && !!jasmine || typeof jest < "u" && !!jest || typeof Mocha < "u" && !!Mocha; }
var o = (function (e) { return e[e.NORMAL = 0] = "NORMAL", e[e.NEGATED = 1] = "NEGATED", e[e.INVERTED = 2] = "INVERTED", e; })(o || {}), i, t;
function d() { if (t == null) {
    if (typeof document != "object" || !document || typeof Element != "function" || !Element)
        return t = !1, t;
    if (document.documentElement?.style && "scrollBehavior" in document.documentElement.style)
        t = !0;
    else {
        let e = Element.prototype.scrollTo;
        e ? t = !/\{\s*\[native code\]\s*\}/.test(e.toString()) : t = !1;
    }
} return t; }
function s() { if (typeof document != "object" || !document)
    return o.NORMAL; if (i == null) {
    let e = document.createElement("div"), n = e.style;
    e.dir = "rtl", n.width = "1px", n.overflow = "auto", n.visibility = "hidden", n.pointerEvents = "none", n.position = "absolute";
    let r = document.createElement("div"), c = r.style;
    c.width = "2px", c.height = "1px", e.appendChild(r), document.body.appendChild(e), i = o.NORMAL, e.scrollLeft === 0 && (e.scrollLeft = 1, i = e.scrollLeft === 0 ? o.NEGATED : o.INVERTED), e.remove();
} return i; }
export { l as a, o as b, d as c, s as d };
