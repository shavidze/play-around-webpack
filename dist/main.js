(() => {
  var r = {
      73: (r, o) => {
        o.i8 = (r) => `color:${r}`;
      },
      582: (r) => {
        r.exports = (r) => `Button: ${r}`;
      },
    },
    o = {};
  function e(t) {
    var n = o[t];
    if (void 0 !== n) return n.exports;
    var a = (o[t] = { exports: {} });
    return r[t](a, a.exports, e), a.exports;
  }
  (e.n = (r) => {
    var o = r && r.__esModule ? () => r.default : () => r;
    return e.d(o, { a: o }), o;
  }),
    (e.d = (r, o) => {
      for (var t in o)
        e.o(o, t) &&
          !e.o(r, t) &&
          Object.defineProperty(r, t, { enumerable: !0, get: o[t] });
    }),
    (e.o = (r, o) => Object.prototype.hasOwnProperty.call(r, o)),
    (() => {
      "use strict";
      var r = e(582),
        o = e.n(r),
        t = e(73);
      console.log("nav", "Top", "Bottom", o()("My BTN"), t.i8);
    })();
})();
