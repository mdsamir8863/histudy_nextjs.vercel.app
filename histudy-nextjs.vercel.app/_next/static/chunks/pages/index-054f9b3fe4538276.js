(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        75557: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(84081)
            }])
        },
        21226: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(85893),
                s = n(67294);
            t.default = () => {
                let e = (0, s.useRef)(null);
                return (0, s.useEffect)(() => {
                    var t, n;
                    let r = null === (t = e.current) || void 0 === t ? void 0 : t.querySelector("path");
                    if (!r) return;
                    let s = r.getTotalLength();
                    r.style.transition = "none", r.style.strokeDasharray = "".concat(s, " ").concat(s), r.style.strokeDashoffset = s, r.getBoundingClientRect(), r.style.transition = "stroke-dashoffset 10ms linear";
                    let o = () => {
                        let t = window.pageYOffset || document.documentElement.scrollTop,
                            n = s - t * s / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
                        r.style.strokeDashoffset = n;
                        let o = e.current;
                        o && (t > 50 ? o.classList.add("rbt-backto-top-active") : o.classList.remove("rbt-backto-top-active"))
                    };
                    return o(), window.addEventListener("scroll", o), null === (n = e.current) || void 0 === n || n.addEventListener("click", e => {
                        e.preventDefault(), window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }), () => {
                        window.removeEventListener("scroll", o)
                    }
                }, []), (0, r.jsx)("div", {
                    className: "rbt-progress-parent",
                    ref: e,
                    children: (0, r.jsx)("svg", {
                        className: "rbt-back-circle svg-inner",
                        width: "100%",
                        height: "100%",
                        viewBox: "-1 -1 102 102",
                        children: (0, r.jsx)("path", {
                            d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        })
                    })
                })
            }
        },
        84081: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n(85893),
                s = n(4671),
                o = n(21226);

            function l() {
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("main", {
                        className: "",
                        children: [(0, r.jsx)(s.default, {}), (0, r.jsx)(o.default, {})]
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [3424, 5675, 8920, 2685, 2141, 1598, 6559, 2698, 7243, 8367, 6657, 7128, 1986, 4671, 9774, 2888, 179], function() {
            return e(e.s = 75557)
        }), _N_E = e.O()
    }
]);
//# sourceMappingURL=index-054f9b3fe4538276.js.map