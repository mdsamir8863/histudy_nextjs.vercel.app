(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2685], {
        58384: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var i in t) Object.defineProperty(e, i, {
                        enumerable: !0,
                        get: t[i]
                    })
                }(t, {
                    noSSR: function() {
                        return l
                    },
                    default: function() {
                        return n
                    }
                });
            let s = i(38754),
                r = (i(67294), s._(i(91229)));

            function a(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function l(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }

            function n(e, t) {
                let i = r.default,
                    s = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: i,
                                pastDelay: s
                            } = e;
                            return null
                        }
                    };
                e instanceof Promise ? s.loader = () => e : "function" == typeof e ? s.loader = e : "object" == typeof e && (s = { ...s,
                    ...e
                });
                let n = (s = { ...s,
                    ...t
                }).loader;
                return (s.loadableGenerated && (s = { ...s,
                    ...s.loadableGenerated
                }, delete s.loadableGenerated), "boolean" != typeof s.ssr || s.ssr) ? i({ ...s,
                    loader: () => null != n ? n().then(a) : Promise.resolve(a(() => null))
                }) : (delete s.webpack, delete s.modules, l(i, s))
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        29184: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "LoadableContext", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let s = i(38754)._(i(67294)).default.createContext(null)
        },
        91229: function(e, t, i) {
            "use strict";
            /**
            @copyright (c) 2017-present James Kyle <me@thejameskyle.com>
             MIT License
             Permission is hereby granted, free of charge, to any person obtaining
            a copy of this software and associated documentation files (the
            "Software"), to deal in the Software without restriction, including
            without limitation the rights to use, copy, modify, merge, publish,
            distribute, sublicense, and/or sell copies of the Software, and to
            permit persons to whom the Software is furnished to do so, subject to
            the following conditions:
             The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
            LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
            OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
            WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
            */
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return p
                }
            });
            let s = i(38754)._(i(67294)),
                r = i(29184),
                a = [],
                l = [],
                n = !1;

            function o(e) {
                let t = e(),
                    i = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return i.promise = t.then(e => (i.loading = !1, i.loaded = e, e)).catch(e => {
                    throw i.loading = !1, i.error = e, e
                }), i
            }
            class d {
                promise() {
                    return this._res.promise
                }
                retry() {
                    this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    let {
                        _res: e,
                        _opts: t
                    } = this;
                    e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                        this._update({
                            pastDelay: !0
                        })
                    }, t.delay)), "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                        this._update({
                            timedOut: !0
                        })
                    }, t.timeout))), this._res.promise.then(() => {
                        this._update({}), this._clearTimeouts()
                    }).catch(e => {
                        this._update({}), this._clearTimeouts()
                    }), this._update({})
                }
                _update(e) {
                    this._state = { ...this._state,
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading,
                        ...e
                    }, this._callbacks.forEach(e => e())
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout)
                }
                getCurrentValue() {
                    return this._state
                }
                subscribe(e) {
                    return this._callbacks.add(e), () => {
                        this._callbacks.delete(e)
                    }
                }
                constructor(e, t) {
                    this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
            }

            function c(e) {
                return function(e, t) {
                    let i = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null
                        }, t),
                        a = null;

                    function o() {
                        if (!a) {
                            let t = new d(e, i);
                            a = {
                                getCurrentValue: t.getCurrentValue.bind(t),
                                subscribe: t.subscribe.bind(t),
                                retry: t.retry.bind(t),
                                promise: t.promise.bind(t)
                            }
                        }
                        return a.promise()
                    }
                    if (!n) {
                        let e = i.webpack ? i.webpack() : i.modules;
                        e && l.push(t => {
                            for (let i of e)
                                if (t.includes(i)) return o()
                        })
                    }

                    function c(e, t) {
                        ! function() {
                            o();
                            let e = s.default.useContext(r.LoadableContext);
                            e && Array.isArray(i.modules) && i.modules.forEach(t => {
                                e(t)
                            })
                        }();
                        let l = s.default.useSyncExternalStore(a.subscribe, a.getCurrentValue, a.getCurrentValue);
                        return s.default.useImperativeHandle(t, () => ({
                            retry: a.retry
                        }), []), s.default.useMemo(() => {
                            var t;
                            return l.loading || l.error ? s.default.createElement(i.loading, {
                                isLoading: l.loading,
                                pastDelay: l.pastDelay,
                                timedOut: l.timedOut,
                                error: l.error,
                                retry: a.retry
                            }) : l.loaded ? s.default.createElement((t = l.loaded) && t.default ? t.default : t, e) : null
                        }, [e, l])
                    }
                    return c.preload = () => o(), c.displayName = "LoadableComponent", s.default.forwardRef(c)
                }(o, e)
            }

            function u(e, t) {
                let i = [];
                for (; e.length;) {
                    let s = e.pop();
                    i.push(s(t))
                }
                return Promise.all(i).then(() => {
                    if (e.length) return u(e, t)
                })
            }
            c.preloadAll = () => new Promise((e, t) => {
                u(a).then(e, t)
            }), c.preloadReady = e => (void 0 === e && (e = []), new Promise(t => {
                let i = () => (n = !0, t());
                u(l, e).then(i, i)
            })), window.__NEXT_PRELOADREADY = c.preloadReady;
            let p = c
        },
        5152: function(e, t, i) {
            e.exports = i(58384)
        },
        9008: function(e, t, i) {
            e.exports = i(14764)
        },
        94135: function(e, t, i) {
            "use strict";
            i.d(t, {
                c4: function() {
                    return d
                },
                Rv: function() {
                    return o
                },
                W_: function() {
                    return a
                },
                tl: function() {
                    return n
                }
            }), i(13433);
            var s = i(7185);

            function r(e, t, i, r) {
                return e.params.createElements && Object.keys(r).forEach(a => {
                    if (!i[a] && !0 === i.auto) {
                        let l = (0, s.e)(e.el, `.${r[a]}`)[0];
                        l || ((l = (0, s.c)("div", r[a])).className = r[a], e.el.append(l)), i[a] = l, t[a] = l
                    }
                }), i
            }

            function a(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: s,
                    emit: a
                } = e;
                i({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), t.navigation = {
                    nextEl: null,
                    prevEl: null
                };
                let l = e => (Array.isArray(e) ? e : [e]).filter(e => !!e);

                function n(e) {
                    let i;
                    return e && "string" == typeof e && t.isElement && (i = t.el.querySelector(e)) ? i : (e && ("string" == typeof e && (i = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && i.length > 1 && 1 === t.el.querySelectorAll(e).length && (i = t.el.querySelector(e))), e && !i) ? e : i
                }

                function o(e, i) {
                    let s = t.params.navigation;
                    (e = l(e)).forEach(e => {
                        e && (e.classList[i ? "add" : "remove"](...s.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = i), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass))
                    })
                }

                function d() {
                    let {
                        nextEl: e,
                        prevEl: i
                    } = t.navigation;
                    if (t.params.loop) {
                        o(i, !1), o(e, !1);
                        return
                    }
                    o(i, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind)
                }

                function c(e) {
                    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), a("navigationPrev"))
                }

                function u(e) {
                    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), a("navigationNext"))
                }

                function p() {
                    let e = t.params.navigation;
                    if (t.params.navigation = r(t, t.originalParams.navigation, t.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !(e.nextEl || e.prevEl)) return;
                    let i = n(e.nextEl),
                        s = n(e.prevEl);
                    Object.assign(t.navigation, {
                        nextEl: i,
                        prevEl: s
                    }), i = l(i), s = l(s);
                    let a = (i, s) => {
                        i && i.addEventListener("click", "next" === s ? u : c), !t.enabled && i && i.classList.add(...e.lockClass.split(" "))
                    };
                    i.forEach(e => a(e, "next")), s.forEach(e => a(e, "prev"))
                }

                function h() {
                    let {
                        nextEl: e,
                        prevEl: i
                    } = t.navigation;
                    e = l(e), i = l(i);
                    let s = (e, i) => {
                        e.removeEventListener("click", "next" === i ? u : c), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
                    };
                    e.forEach(e => s(e, "next")), i.forEach(e => s(e, "prev"))
                }
                s("init", () => {
                    !1 === t.params.navigation.enabled ? f() : (p(), d())
                }), s("toEdge fromEdge lock unlock", () => {
                    d()
                }), s("destroy", () => {
                    h()
                }), s("enable disable", () => {
                    let {
                        nextEl: e,
                        prevEl: i
                    } = t.navigation;
                    if (e = l(e), i = l(i), t.enabled) {
                        d();
                        return
                    }[...e, ...i].filter(e => !!e).forEach(e => e.classList.add(t.params.navigation.lockClass))
                }), s("click", (e, i) => {
                    let {
                        nextEl: s,
                        prevEl: r
                    } = t.navigation;
                    s = l(s), r = l(r);
                    let n = i.target;
                    if (t.params.navigation.hideOnClick && !r.includes(n) && !s.includes(n)) {
                        let e;
                        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
                        s.length ? e = s[0].classList.contains(t.params.navigation.hiddenClass) : r.length && (e = r[0].classList.contains(t.params.navigation.hiddenClass)), !0 === e ? a("navigationShow") : a("navigationHide"), [...s, ...r].filter(e => !!e).forEach(e => e.classList.toggle(t.params.navigation.hiddenClass))
                    }
                });
                let f = () => {
                    t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), h()
                };
                Object.assign(t.navigation, {
                    enable: () => {
                        t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), p(), d()
                    },
                    disable: f,
                    update: d,
                    init: p,
                    destroy: h
                })
            }

            function l(e) {
                return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function n(e) {
                let t, {
                        swiper: i,
                        extendParams: a,
                        on: n,
                        emit: o
                    } = e,
                    d = "swiper-pagination";
                a({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${d}-bullet`,
                        bulletActiveClass: `${d}-bullet-active`,
                        modifierClass: `${d}-`,
                        currentClass: `${d}-current`,
                        totalClass: `${d}-total`,
                        hiddenClass: `${d}-hidden`,
                        progressbarFillClass: `${d}-progressbar-fill`,
                        progressbarOppositeClass: `${d}-progressbar-opposite`,
                        clickableClass: `${d}-clickable`,
                        lockClass: `${d}-lock`,
                        horizontalClass: `${d}-horizontal`,
                        verticalClass: `${d}-vertical`,
                        paginationDisabledClass: `${d}-disabled`
                    }
                }), i.pagination = {
                    el: null,
                    bullets: []
                };
                let c = 0,
                    u = e => (Array.isArray(e) ? e : [e]).filter(e => !!e);

                function p() {
                    return !i.params.pagination.el || !i.pagination.el || Array.isArray(i.pagination.el) && 0 === i.pagination.el.length
                }

                function h(e, t) {
                    let {
                        bulletActiveClass: s
                    } = i.params.pagination;
                    e && (e = e[`${"prev"===t?"previous":"next"}ElementSibling`]) && (e.classList.add(`${s}-${t}`), (e = e[`${"prev"===t?"previous":"next"}ElementSibling`]) && e.classList.add(`${s}-${t}-${t}`))
                }

                function f(e) {
                    let t = e.target.closest(l(i.params.pagination.bulletClass));
                    if (!t) return;
                    e.preventDefault();
                    let r = (0, s.g)(t) * i.params.slidesPerGroup;
                    if (i.params.loop) {
                        if (i.realIndex === r) return;
                        i.slideToLoop(r)
                    } else i.slideTo(r)
                }

                function m() {
                    let e, r;
                    let a = i.rtl,
                        n = i.params.pagination;
                    if (p()) return;
                    let d = i.pagination.el;
                    d = u(d);
                    let f = i.virtual && i.params.virtual.enabled ? i.virtual.slides.length : i.slides.length,
                        m = i.params.loop ? Math.ceil(f / i.params.slidesPerGroup) : i.snapGrid.length;
                    if (i.params.loop ? (r = i.previousRealIndex || 0, e = i.params.slidesPerGroup > 1 ? Math.floor(i.realIndex / i.params.slidesPerGroup) : i.realIndex) : void 0 !== i.snapIndex ? (e = i.snapIndex, r = i.previousSnapIndex) : (r = i.previousIndex || 0, e = i.activeIndex || 0), "bullets" === n.type && i.pagination.bullets && i.pagination.bullets.length > 0) {
                        let l, o, u;
                        let p = i.pagination.bullets;
                        if (n.dynamicBullets && (t = (0, s.f)(p[0], i.isHorizontal() ? "width" : "height", !0), d.forEach(e => {
                                e.style[i.isHorizontal() ? "width" : "height"] = `${t*(n.dynamicMainBullets+4)}px`
                            }), n.dynamicMainBullets > 1 && void 0 !== r && ((c += e - (r || 0)) > n.dynamicMainBullets - 1 ? c = n.dynamicMainBullets - 1 : c < 0 && (c = 0)), u = ((o = (l = Math.max(e - c, 0)) + (Math.min(p.length, n.dynamicMainBullets) - 1)) + l) / 2), p.forEach(e => {
                                let t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${n.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                                e.classList.remove(...t)
                            }), d.length > 1) p.forEach(t => {
                            let r = (0, s.g)(t);
                            r === e ? t.classList.add(...n.bulletActiveClass.split(" ")) : i.isElement && t.setAttribute("part", "bullet"), n.dynamicBullets && (r >= l && r <= o && t.classList.add(...`${n.bulletActiveClass}-main`.split(" ")), r === l && h(t, "prev"), r === o && h(t, "next"))
                        });
                        else {
                            let t = p[e];
                            if (t && t.classList.add(...n.bulletActiveClass.split(" ")), i.isElement && p.forEach((t, i) => {
                                    t.setAttribute("part", i === e ? "bullet-active" : "bullet")
                                }), n.dynamicBullets) {
                                let e = p[l],
                                    t = p[o];
                                for (let e = l; e <= o; e += 1) p[e] && p[e].classList.add(...`${n.bulletActiveClass}-main`.split(" "));
                                h(e, "prev"), h(t, "next")
                            }
                        }
                        if (n.dynamicBullets) {
                            let e = Math.min(p.length, n.dynamicMainBullets + 4),
                                s = (t * e - t) / 2 - u * t,
                                r = a ? "right" : "left";
                            p.forEach(e => {
                                e.style[i.isHorizontal() ? r : "top"] = `${s}px`
                            })
                        }
                    }
                    d.forEach((t, s) => {
                        if ("fraction" === n.type && (t.querySelectorAll(l(n.currentClass)).forEach(t => {
                                t.textContent = n.formatFractionCurrent(e + 1)
                            }), t.querySelectorAll(l(n.totalClass)).forEach(e => {
                                e.textContent = n.formatFractionTotal(m)
                            })), "progressbar" === n.type) {
                            let s;
                            s = n.progressbarOpposite ? i.isHorizontal() ? "vertical" : "horizontal" : i.isHorizontal() ? "horizontal" : "vertical";
                            let r = (e + 1) / m,
                                a = 1,
                                o = 1;
                            "horizontal" === s ? a = r : o = r, t.querySelectorAll(l(n.progressbarFillClass)).forEach(e => {
                                e.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`, e.style.transitionDuration = `${i.params.speed}ms`
                            })
                        }
                        "custom" === n.type && n.renderCustom ? (t.innerHTML = n.renderCustom(i, e + 1, m), 0 === s && o("paginationRender", t)) : (0 === s && o("paginationRender", t), o("paginationUpdate", t)), i.params.watchOverflow && i.enabled && t.classList[i.isLocked ? "add" : "remove"](n.lockClass)
                    })
                }

                function g() {
                    let e = i.params.pagination;
                    if (p()) return;
                    let t = i.virtual && i.params.virtual.enabled ? i.virtual.slides.length : i.grid && i.params.grid.rows > 1 ? i.slides.length / Math.ceil(i.params.grid.rows) : i.slides.length,
                        s = i.pagination.el;
                    s = u(s);
                    let r = "";
                    if ("bullets" === e.type) {
                        let s = i.params.loop ? Math.ceil(t / i.params.slidesPerGroup) : i.snapGrid.length;
                        i.params.freeMode && i.params.freeMode.enabled && s > t && (s = t);
                        for (let t = 0; t < s; t += 1) e.renderBullet ? r += e.renderBullet.call(i, t, e.bulletClass) : r += `<${e.bulletElement} ${i.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
                    }
                    "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(i, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(i, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), i.pagination.bullets = [], s.forEach(t => {
                        "custom" !== e.type && (t.innerHTML = r || ""), "bullets" === e.type && i.pagination.bullets.push(...t.querySelectorAll(l(e.bulletClass)))
                    }), "custom" !== e.type && o("paginationRender", s[0])
                }

                function v() {
                    let e;
                    i.params.pagination = r(i, i.originalParams.pagination, i.params.pagination, {
                        el: "swiper-pagination"
                    });
                    let t = i.params.pagination;
                    t.el && ("string" == typeof t.el && i.isElement && (e = i.el.querySelector(t.el)), e || "string" != typeof t.el || (e = [...document.querySelectorAll(t.el)]), e || (e = t.el), e && 0 !== e.length && (i.params.uniqueNavElements && "string" == typeof t.el && Array.isArray(e) && e.length > 1 && (e = [...i.el.querySelectorAll(t.el)]).length > 1 && (e = e.filter(e => (0, s.a)(e, ".swiper")[0] === i.el)[0]), Array.isArray(e) && 1 === e.length && (e = e[0]), Object.assign(i.pagination, {
                        el: e
                    }), (e = u(e)).forEach(e => {
                        "bullets" === t.type && t.clickable && e.classList.add(...(t.clickableClass || "").split(" ")), e.classList.add(t.modifierClass + t.type), e.classList.add(i.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (e.classList.add(`${t.modifierClass}${t.type}-dynamic`), c = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && e.classList.add(t.progressbarOppositeClass), t.clickable && e.addEventListener("click", f), i.enabled || e.classList.add(t.lockClass)
                    })))
                }

                function w() {
                    let e = i.params.pagination;
                    if (p()) return;
                    let t = i.pagination.el;
                    t && (t = u(t)).forEach(t => {
                        t.classList.remove(e.hiddenClass), t.classList.remove(e.modifierClass + e.type), t.classList.remove(i.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (t.classList.remove(...(e.clickableClass || "").split(" ")), t.removeEventListener("click", f))
                    }), i.pagination.bullets && i.pagination.bullets.forEach(t => t.classList.remove(...e.bulletActiveClass.split(" ")))
                }
                n("changeDirection", () => {
                    if (!i.pagination || !i.pagination.el) return;
                    let e = i.params.pagination,
                        {
                            el: t
                        } = i.pagination;
                    (t = u(t)).forEach(t => {
                        t.classList.remove(e.horizontalClass, e.verticalClass), t.classList.add(i.isHorizontal() ? e.horizontalClass : e.verticalClass)
                    })
                }), n("init", () => {
                    !1 === i.params.pagination.enabled ? b() : (v(), g(), m())
                }), n("activeIndexChange", () => {
                    void 0 === i.snapIndex && m()
                }), n("snapIndexChange", () => {
                    m()
                }), n("snapGridLengthChange", () => {
                    g(), m()
                }), n("destroy", () => {
                    w()
                }), n("enable disable", () => {
                    let {
                        el: e
                    } = i.pagination;
                    e && (e = u(e)).forEach(e => e.classList[i.enabled ? "remove" : "add"](i.params.pagination.lockClass))
                }), n("lock unlock", () => {
                    m()
                }), n("click", (e, t) => {
                    let s = t.target,
                        r = u(i.pagination.el);
                    if (i.params.pagination.el && i.params.pagination.hideOnClick && r && r.length > 0 && !s.classList.contains(i.params.pagination.bulletClass)) {
                        if (i.navigation && (i.navigation.nextEl && s === i.navigation.nextEl || i.navigation.prevEl && s === i.navigation.prevEl)) return;
                        !0 === r[0].classList.contains(i.params.pagination.hiddenClass) ? o("paginationShow") : o("paginationHide"), r.forEach(e => e.classList.toggle(i.params.pagination.hiddenClass))
                    }
                });
                let b = () => {
                    i.el.classList.add(i.params.pagination.paginationDisabledClass);
                    let {
                        el: e
                    } = i.pagination;
                    e && (e = u(e)).forEach(e => e.classList.add(i.params.pagination.paginationDisabledClass)), w()
                };
                Object.assign(i.pagination, {
                    enable: () => {
                        i.el.classList.remove(i.params.pagination.paginationDisabledClass);
                        let {
                            el: e
                        } = i.pagination;
                        e && (e = u(e)).forEach(e => e.classList.remove(i.params.pagination.paginationDisabledClass)), v(), g(), m()
                    },
                    disable: b,
                    render: g,
                    update: m,
                    init: v,
                    destroy: w
                })
            }

            function o(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    emit: r,
                    once: a
                } = e;
                i({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: .02
                    }
                }), Object.assign(t, {
                    freeMode: {
                        onTouchStart: function() {
                            if (t.params.cssMode) return;
                            let e = t.getTranslate();
                            t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                                currentPos: t.rtl ? t.translate : -t.translate
                            })
                        },
                        onTouchMove: function() {
                            if (t.params.cssMode) return;
                            let {
                                touchEventsData: e,
                                touches: i
                            } = t;
                            0 === e.velocities.length && e.velocities.push({
                                position: i[t.isHorizontal() ? "startX" : "startY"],
                                time: e.touchStartTime
                            }), e.velocities.push({
                                position: i[t.isHorizontal() ? "currentX" : "currentY"],
                                time: (0, s.d)()
                            })
                        },
                        onTouchEnd: function(e) {
                            let {
                                currentPos: i
                            } = e;
                            if (t.params.cssMode) return;
                            let {
                                params: l,
                                wrapperEl: n,
                                rtlTranslate: o,
                                snapGrid: d,
                                touchEventsData: c
                            } = t, u = (0, s.d)() - c.touchStartTime;
                            if (i < -t.minTranslate()) {
                                t.slideTo(t.activeIndex);
                                return
                            }
                            if (i > -t.maxTranslate()) {
                                t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);
                                return
                            }
                            if (l.freeMode.momentum) {
                                let e, i;
                                if (c.velocities.length > 1) {
                                    let e = c.velocities.pop(),
                                        i = c.velocities.pop(),
                                        r = e.position - i.position,
                                        a = e.time - i.time;
                                    t.velocity = r / a, t.velocity /= 2, Math.abs(t.velocity) < l.freeMode.minimumVelocity && (t.velocity = 0), (a > 150 || (0, s.d)() - e.time > 300) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= l.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                                let u = 1e3 * l.freeMode.momentumRatio,
                                    p = t.velocity * u,
                                    h = t.translate + p;
                                o && (h = -h);
                                let f = !1,
                                    m = 20 * Math.abs(t.velocity) * l.freeMode.momentumBounceRatio;
                                if (h < t.maxTranslate()) l.freeMode.momentumBounce ? (h + t.maxTranslate() < -m && (h = t.maxTranslate() - m), e = t.maxTranslate(), f = !0, c.allowMomentumBounce = !0) : h = t.maxTranslate(), l.loop && l.centeredSlides && (i = !0);
                                else if (h > t.minTranslate()) l.freeMode.momentumBounce ? (h - t.minTranslate() > m && (h = t.minTranslate() + m), e = t.minTranslate(), f = !0, c.allowMomentumBounce = !0) : h = t.minTranslate(), l.loop && l.centeredSlides && (i = !0);
                                else if (l.freeMode.sticky) {
                                    let e;
                                    for (let t = 0; t < d.length; t += 1)
                                        if (d[t] > -h) {
                                            e = t;
                                            break
                                        }
                                    h = -(h = Math.abs(d[e] - h) < Math.abs(d[e - 1] - h) || "next" === t.swipeDirection ? d[e] : d[e - 1])
                                }
                                if (i && a("transitionEnd", () => {
                                        t.loopFix()
                                    }), 0 !== t.velocity) {
                                    if (u = o ? Math.abs((-h - t.translate) / t.velocity) : Math.abs((h - t.translate) / t.velocity), l.freeMode.sticky) {
                                        let e = Math.abs((o ? -h : h) - t.translate),
                                            i = t.slidesSizesGrid[t.activeIndex];
                                        u = e < i ? l.speed : e < 2 * i ? 1.5 * l.speed : 2.5 * l.speed
                                    }
                                } else if (l.freeMode.sticky) {
                                    t.slideToClosest();
                                    return
                                }
                                l.freeMode.momentumBounce && f ? (t.updateProgress(e), t.setTransition(u), t.setTranslate(h), t.transitionStart(!0, t.swipeDirection), t.animating = !0, (0, s.j)(n, () => {
                                    t && !t.destroyed && c.allowMomentumBounce && (r("momentumBounce"), t.setTransition(l.speed), setTimeout(() => {
                                        t.setTranslate(e), (0, s.j)(n, () => {
                                            t && !t.destroyed && t.transitionEnd()
                                        })
                                    }, 0))
                                })) : t.velocity ? (r("_freeModeNoMomentumRelease"), t.updateProgress(h), t.setTransition(u), t.setTranslate(h), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, (0, s.j)(n, () => {
                                    t && !t.destroyed && t.transitionEnd()
                                }))) : t.updateProgress(h), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else if (l.freeMode.sticky) {
                                t.slideToClosest();
                                return
                            } else l.freeMode && r("_freeModeNoMomentumRelease");
                            (!l.freeMode.momentum || u >= l.longSwipesMs) && (r("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        }
                    }
                })
            }

            function d(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: r
                } = e;
                i({
                        cardsEffect: {
                            slideShadows: !0,
                            rotate: !0,
                            perSlideRotate: 2,
                            perSlideOffset: 8
                        }
                    }),
                    function(e) {
                        let t;
                        let {
                            effect: i,
                            swiper: s,
                            on: r,
                            setTranslate: a,
                            setTransition: l,
                            overwriteParams: n,
                            perspective: o,
                            recreateShadows: d,
                            getEffectParams: c
                        } = e;
                        r("beforeInit", () => {
                            if (s.params.effect !== i) return;
                            s.classNames.push(`${s.params.containerModifierClass}${i}`), o && o() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                            let e = n ? n() : {};
                            Object.assign(s.params, e), Object.assign(s.originalParams, e)
                        }), r("setTranslate", () => {
                            s.params.effect === i && a()
                        }), r("setTransition", (e, t) => {
                            s.params.effect === i && l(t)
                        }), r("transitionEnd", () => {
                            s.params.effect === i && d && c && c().slideShadows && (s.slides.forEach(e => {
                                e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e => e.remove())
                            }), d())
                        }), r("virtualUpdate", () => {
                            s.params.effect === i && (s.slides.length || (t = !0), requestAnimationFrame(() => {
                                t && s.slides && s.slides.length && (a(), t = !1)
                            }))
                        })
                    }({
                        effect: "cards",
                        swiper: t,
                        on: r,
                        setTranslate: () => {
                            let {
                                slides: e,
                                activeIndex: i,
                                rtlTranslate: r
                            } = t, a = t.params.cardsEffect, {
                                startTranslate: l,
                                isTouched: n
                            } = t.touchEventsData, o = r ? -t.translate : t.translate;
                            for (let d = 0; d < e.length; d += 1) {
                                let c = e[d],
                                    u = c.progress,
                                    p = Math.min(Math.max(u, -4), 4),
                                    h = c.swiperSlideOffset;
                                t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (h -= e[0].swiperSlideOffset);
                                let f = t.params.cssMode ? -h - t.translate : -h,
                                    m = 0,
                                    g = -100 * Math.abs(p),
                                    v = 1,
                                    w = -a.perSlideRotate * p,
                                    b = a.perSlideOffset - .75 * Math.abs(p),
                                    y = t.virtual && t.params.virtual.enabled ? t.virtual.from + d : d,
                                    S = (y === i || y === i - 1) && p > 0 && p < 1 && (n || t.params.cssMode) && o < l,
                                    T = (y === i || y === i + 1) && p < 0 && p > -1 && (n || t.params.cssMode) && o > l;
                                if (S || T) {
                                    let e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
                                    w += -28 * p * e, v += -.5 * e, b += 96 * e, m = `${-25*e*Math.abs(p)}%`
                                }
                                if (f = p < 0 ? `calc(${f}px ${r?"-":"+"} (${b*Math.abs(p)}%))` : p > 0 ? `calc(${f}px ${r?"-":"+"} (-${b*Math.abs(p)}%))` : `${f}px`, !t.isHorizontal()) {
                                    let e = m;
                                    m = f, f = e
                                }
                                let E = p < 0 ? `${1+(1-v)*p}` : `${1-(1-v)*p}`,
                                    x = `
        translate3d(${f}, ${m}, ${g}px)
        rotateZ(${a.rotate?r?-w:w:0}deg)
        scale(${E})
      `;
                                if (a.slideShadows) {
                                    let e = c.querySelector(".swiper-slide-shadow");
                                    e || (e = function(e, t, i) {
                                        let r = `swiper-slide-shadow${i?`-${i}`:""}${e?` swiper-slide-shadow-${e}`:""}`,
                                            a = (0, s.l)(t),
                                            l = a.querySelector(`.${r.split(" ").join(".")}`);
                                        return l || (l = (0, s.c)("div", r.split(" ")), a.append(l)), l
                                    }("cards", c)), e && (e.style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1))
                                }
                                c.style.zIndex = -Math.abs(Math.round(u)) + e.length,
                                    function(e, t) {
                                        let i = (0, s.l)(t);
                                        return i !== t && (i.style.backfaceVisibility = "hidden", i.style["-webkit-backface-visibility"] = "hidden"), i
                                    }(0, c).style.transform = x
                            }
                        },
                        setTransition: e => {
                            let i = t.slides.map(e => (0, s.l)(e));
                            i.forEach(t => {
                                    t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach(t => {
                                        t.style.transitionDuration = `${e}ms`
                                    })
                                }),
                                function(e) {
                                    let {
                                        swiper: t,
                                        duration: i,
                                        transformElements: r,
                                        allSlides: a
                                    } = e, {
                                        activeIndex: l
                                    } = t, n = e => e.parentElement ? e.parentElement : t.slides.filter(t => t.shadowRoot && t.shadowRoot === e.parentNode)[0];
                                    if (t.params.virtualTranslate && 0 !== i) {
                                        let e = !1;
                                        (a ? r : r.filter(e => {
                                            let i = e.classList.contains("swiper-slide-transform") ? n(e) : e;
                                            return t.getSlideIndex(i) === l
                                        })).forEach(i => {
                                            (0, s.j)(i, () => {
                                                if (e || !t || t.destroyed) return;
                                                e = !0, t.animating = !1;
                                                let i = new window.CustomEvent("transitionend", {
                                                    bubbles: !0,
                                                    cancelable: !0
                                                });
                                                t.wrapperEl.dispatchEvent(i)
                                            })
                                        })
                                    }
                                }({
                                    swiper: t,
                                    duration: e,
                                    transformElements: i
                                })
                        },
                        perspective: () => !0,
                        overwriteParams: () => ({
                            watchSlidesProgress: !0,
                            virtualTranslate: !t.params.cssMode
                        })
                    })
            }
        },
        13433: function(e, t, i) {
            "use strict";

            function s(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function r(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : s(t[i]) && s(e[i]) && Object.keys(t[i]).length > 0 && r(e[i], t[i])
                })
            }
            i.d(t, {
                a: function() {
                    return o
                },
                g: function() {
                    return l
                }
            });
            let a = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function l() {
                let e = "undefined" != typeof document ? document : {};
                return r(e, a), e
            }
            let n = {
                document: a,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function o() {
                let e = "undefined" != typeof window ? window : {};
                return r(e, n), e
            }
        },
        7185: function(e, t, i) {
            "use strict";
            i.d(t, {
                a: function() {
                    return b
                },
                c: function() {
                    return f
                },
                d: function() {
                    return l
                },
                e: function() {
                    return p
                },
                f: function() {
                    return S
                },
                g: function() {
                    return w
                },
                i: function() {
                    return n
                },
                j: function() {
                    return y
                },
                l: function() {
                    return u
                },
                m: function() {
                    return v
                },
                n: function() {
                    return a
                },
                o: function() {
                    return g
                },
                p: function() {
                    return m
                },
                q: function() {
                    return c
                },
                r: function() {
                    return h
                },
                s: function() {
                    return d
                },
                t: function() {
                    return function e() {
                        let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                            i = ["__proto__", "constructor", "prototype"];
                        for (let s = 1; s < arguments.length; s += 1) {
                            let r = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                            if (null != r && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(r instanceof HTMLElement) : !r || 1 !== r.nodeType && 11 !== r.nodeType)) {
                                let s = Object.keys(Object(r)).filter(e => 0 > i.indexOf(e));
                                for (let i = 0, a = s.length; i < a; i += 1) {
                                    let a = s[i],
                                        l = Object.getOwnPropertyDescriptor(r, a);
                                    void 0 !== l && l.enumerable && (o(t[a]) && o(r[a]) ? r[a].__swiper__ ? t[a] = r[a] : e(t[a], r[a]) : !o(t[a]) && o(r[a]) ? (t[a] = {}, r[a].__swiper__ ? t[a] = r[a] : e(t[a], r[a])) : t[a] = r[a])
                                }
                            }
                        }
                        return t
                    }
                },
                u: function() {
                    return r
                }
            });
            var s = i(13433);

            function r(e) {
                Object.keys(e).forEach(t => {
                    try {
                        e[t] = null
                    } catch (e) {}
                    try {
                        delete e[t]
                    } catch (e) {}
                })
            }

            function a(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function l() {
                return Date.now()
            }

            function n(e, t) {
                let i, r, a;
                void 0 === t && (t = "x");
                let l = (0, s.a)(),
                    n = function(e) {
                        let t;
                        let i = (0, s.a)();
                        return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                    }(e);
                return l.WebKitCSSMatrix ? ((r = n.transform || n.webkitTransform).split(",").length > 6 && (r = r.split(", ").map(e => e.replace(",", ".")).join(", ")), a = new l.WebKitCSSMatrix("none" === r ? "" : r)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (r = l.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = l.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
            }

            function o(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function d(e, t, i) {
                e.style.setProperty(t, i)
            }

            function c(e) {
                let t, {
                        swiper: i,
                        targetPosition: r,
                        side: a
                    } = e,
                    l = (0, s.a)(),
                    n = -i.translate,
                    o = null,
                    d = i.params.speed;
                i.wrapperEl.style.scrollSnapType = "none", l.cancelAnimationFrame(i.cssModeFrameID);
                let c = r > n ? "next" : "prev",
                    u = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                    p = () => {
                        t = new Date().getTime(), null === o && (o = t);
                        let e = n + (.5 - Math.cos(Math.max(Math.min((t - o) / d, 1), 0) * Math.PI) / 2) * (r - n);
                        if (u(e, r) && (e = r), i.wrapperEl.scrollTo({
                                [a]: e
                            }), u(e, r)) {
                            i.wrapperEl.style.overflow = "hidden", i.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                i.wrapperEl.style.overflow = "", i.wrapperEl.scrollTo({
                                    [a]: e
                                })
                            }), l.cancelAnimationFrame(i.cssModeFrameID);
                            return
                        }
                        i.cssModeFrameID = l.requestAnimationFrame(p)
                    };
                p()
            }

            function u(e) {
                return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
            }

            function p(e, t) {
                return void 0 === t && (t = ""), [...e.children].filter(e => e.matches(t))
            }

            function h(e) {
                try {
                    console.warn(e);
                    return
                } catch (e) {}
            }

            function f(e, t) {
                var i;
                void 0 === t && (t = []);
                let s = document.createElement(e);
                return s.classList.add(...Array.isArray(t) ? t : (void 0 === (i = t) && (i = ""), i.trim().split(" ").filter(e => !!e.trim()))), s
            }

            function m(e, t) {
                let i = [];
                for (; e.previousElementSibling;) {
                    let s = e.previousElementSibling;
                    t ? s.matches(t) && i.push(s) : i.push(s), e = s
                }
                return i
            }

            function g(e, t) {
                let i = [];
                for (; e.nextElementSibling;) {
                    let s = e.nextElementSibling;
                    t ? s.matches(t) && i.push(s) : i.push(s), e = s
                }
                return i
            }

            function v(e, t) {
                return (0, s.a)().getComputedStyle(e, null).getPropertyValue(t)
            }

            function w(e) {
                let t, i = e;
                if (i) {
                    for (t = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (t += 1);
                    return t
                }
            }

            function b(e, t) {
                let i = [],
                    s = e.parentElement;
                for (; s;) t ? s.matches(t) && i.push(s) : i.push(s), s = s.parentElement;
                return i
            }

            function y(e, t) {
                t && e.addEventListener("transitionend", function i(s) {
                    s.target === e && (t.call(e, s), e.removeEventListener("transitionend", i))
                })
            }

            function S(e, t, i) {
                let r = (0, s.a)();
                return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }
        },
        2261: function(e, t, i) {
            "use strict";
            let s, r, a;
            i.d(t, {
                tq: function() {
                    return R
                },
                o5: function() {
                    return F
                }
            });
            var l = i(67294),
                n = i(13433),
                o = i(7185);

            function d() {
                return s || (s = function() {
                    let e = (0, n.a)(),
                        t = (0, n.g)();
                    return {
                        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), s
            }
            let c = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    let i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                    if (i) {
                        let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
                        !t && e.isElement && (i.shadowRoot ? t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                            i.shadowRoot && (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)) && t.remove()
                        })), t && t.remove()
                    }
                },
                u = (e, t) => {
                    if (!e.slides[t]) return;
                    let i = e.slides[t].querySelector('[loading="lazy"]');
                    i && i.removeAttribute("loading")
                },
                p = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext,
                        i = e.slides.length;
                    if (!i || !t || t < 0) return;
                    t = Math.min(t, i);
                    let s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        r = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        let i = [r - t];
                        i.push(...Array.from({
                            length: t
                        }).map((e, t) => r + s + t)), e.slides.forEach((t, s) => {
                            i.includes(t.column) && u(e, s)
                        });
                        return
                    }
                    let a = r + s - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let s = r - t; s <= a + t; s += 1) {
                            let t = (s % i + i) % i;
                            (t < r || t > a) && u(e, t)
                        } else
                            for (let s = Math.max(r - t, 0); s <= Math.min(a + t, i - 1); s += 1) s !== r && (s > a || s < r) && u(e, s)
                };

            function h(e) {
                let {
                    swiper: t,
                    runCallbacks: i,
                    direction: s,
                    step: r
                } = e, {
                    activeIndex: a,
                    previousIndex: l
                } = t, n = s;
                if (n || (n = a > l ? "next" : a < l ? "prev" : "reset"), t.emit(`transition${r}`), i && a !== l) {
                    if ("reset" === n) {
                        t.emit(`slideResetTransition${r}`);
                        return
                    }
                    t.emit(`slideChangeTransition${r}`), "next" === n ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`)
                }
            }

            function f(e, t, i) {
                let s = (0, n.a)(),
                    {
                        params: r
                    } = e,
                    a = r.edgeSwipeDetection,
                    l = r.edgeSwipeThreshold;
                return !a || !(i <= l) && !(i >= s.innerWidth - l) || "prevent" === a && (t.preventDefault(), !0)
            }

            function m(e) {
                let t = (0, n.g)(),
                    i = e;
                i.originalEvent && (i = i.originalEvent);
                let s = this.touchEventsData;
                if ("pointerdown" === i.type) {
                    if (null !== s.pointerId && s.pointerId !== i.pointerId) return;
                    s.pointerId = i.pointerId
                } else "touchstart" === i.type && 1 === i.targetTouches.length && (s.touchId = i.targetTouches[0].identifier);
                if ("touchstart" === i.type) {
                    f(this, i, i.targetTouches[0].pageX);
                    return
                }
                let {
                    params: r,
                    touches: a,
                    enabled: l
                } = this;
                if (!l || !r.simulateTouch && "mouse" === i.pointerType || this.animating && r.preventInteractionOnTransition) return;
                !this.animating && r.cssMode && r.loop && this.loopFix();
                let d = i.target;
                if ("wrapper" === r.touchEventsTarget && !this.wrapperEl.contains(d) || "which" in i && 3 === i.which || "button" in i && i.button > 0 || s.isTouched && s.isMoved) return;
                let c = !!r.noSwipingClass && "" !== r.noSwipingClass,
                    u = i.composedPath ? i.composedPath() : i.path;
                c && i.target && i.target.shadowRoot && u && (d = u[0]);
                let p = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
                    h = !!(i.target && i.target.shadowRoot);
                if (r.noSwiping && (h ? function(e, t) {
                        return void 0 === t && (t = this),
                            function t(i) {
                                if (!i || i === (0, n.g)() || i === (0, n.a)()) return null;
                                i.assignedSlot && (i = i.assignedSlot);
                                let s = i.closest(e);
                                return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                            }(t)
                    }(p, d) : d.closest(p))) {
                    this.allowClick = !0;
                    return
                }
                if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
                a.currentX = i.pageX, a.currentY = i.pageY;
                let m = a.currentX,
                    g = a.currentY;
                if (!f(this, i, m)) return;
                Object.assign(s, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), a.startX = m, a.startY = g, s.touchStartTime = (0, o.d)(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1);
                let v = !0;
                d.matches(s.focusableElements) && (v = !1, "SELECT" === d.nodeName && (s.isTouched = !1)), t.activeElement && t.activeElement.matches(s.focusableElements) && t.activeElement !== d && t.activeElement.blur();
                let w = v && this.allowTouchMove && r.touchStartPreventDefault;
                (r.touchStartForcePreventDefault || w) && !d.isContentEditable && i.preventDefault(), r.freeMode && r.freeMode.enabled && this.freeMode && this.animating && !r.cssMode && this.freeMode.onTouchStart(), this.emit("touchStart", i)
            }

            function g(e) {
                let t, i;
                let s = (0, n.g)(),
                    r = this.touchEventsData,
                    {
                        params: a,
                        touches: l,
                        rtlTranslate: d,
                        enabled: c
                    } = this;
                if (!c || !a.simulateTouch && "mouse" === e.pointerType) return;
                let u = e;
                if (u.originalEvent && (u = u.originalEvent), "pointermove" === u.type && (null !== r.touchId || u.pointerId !== r.pointerId)) return;
                if ("touchmove" === u.type) {
                    if (!(t = [...u.changedTouches].filter(e => e.identifier === r.touchId)[0]) || t.identifier !== r.touchId) return
                } else t = u;
                if (!r.isTouched) {
                    r.startMoving && r.isScrolling && this.emit("touchMoveOpposite", u);
                    return
                }
                let p = t.pageX,
                    h = t.pageY;
                if (u.preventedByNestedSwiper) {
                    l.startX = p, l.startY = h;
                    return
                }
                if (!this.allowTouchMove) {
                    u.target.matches(r.focusableElements) || (this.allowClick = !1), r.isTouched && (Object.assign(l, {
                        startX: p,
                        startY: h,
                        currentX: p,
                        currentY: h
                    }), r.touchStartTime = (0, o.d)());
                    return
                }
                if (a.touchReleaseOnEdges && !a.loop) {
                    if (this.isVertical()) {
                        if (h < l.startY && this.translate <= this.maxTranslate() || h > l.startY && this.translate >= this.minTranslate()) {
                            r.isTouched = !1, r.isMoved = !1;
                            return
                        }
                    } else if (p < l.startX && this.translate <= this.maxTranslate() || p > l.startX && this.translate >= this.minTranslate()) return
                }
                if (s.activeElement && u.target === s.activeElement && u.target.matches(r.focusableElements)) {
                    r.isMoved = !0, this.allowClick = !1;
                    return
                }
                r.allowTouchCallbacks && this.emit("touchMove", u), l.previousX = l.currentX, l.previousY = l.currentY, l.currentX = p, l.currentY = h;
                let f = l.currentX - l.startX,
                    m = l.currentY - l.startY;
                if (this.params.threshold && Math.sqrt(f ** 2 + m ** 2) < this.params.threshold) return;
                if (void 0 === r.isScrolling) {
                    let e;
                    this.isHorizontal() && l.currentY === l.startY || this.isVertical() && l.currentX === l.startX ? r.isScrolling = !1 : f * f + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(f)) / Math.PI, r.isScrolling = this.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
                }
                if (r.isScrolling && this.emit("touchMoveOpposite", u), void 0 === r.startMoving && (l.currentX !== l.startX || l.currentY !== l.startY) && (r.startMoving = !0), r.isScrolling) {
                    r.isTouched = !1;
                    return
                }
                if (!r.startMoving) return;
                this.allowClick = !1, !a.cssMode && u.cancelable && u.preventDefault(), a.touchMoveStopPropagation && !a.nested && u.stopPropagation();
                let g = this.isHorizontal() ? f : m,
                    v = this.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
                a.oneWayMovement && (g = Math.abs(g) * (d ? 1 : -1), v = Math.abs(v) * (d ? 1 : -1)), l.diff = g, g *= a.touchRatio, d && (g = -g, v = -v);
                let w = this.touchesDirection;
                this.swipeDirection = g > 0 ? "prev" : "next", this.touchesDirection = v > 0 ? "prev" : "next";
                let b = this.params.loop && !a.cssMode,
                    y = "next" === this.touchesDirection && this.allowSlideNext || "prev" === this.touchesDirection && this.allowSlidePrev;
                if (!r.isMoved) {
                    if (b && y && this.loopFix({
                            direction: this.swipeDirection
                        }), r.startTranslate = this.getTranslate(), this.setTransition(0), this.animating) {
                        let e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        this.wrapperEl.dispatchEvent(e)
                    }
                    r.allowMomentumBounce = !1, a.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0), this.emit("sliderFirstMove", u)
                }
                if (new Date().getTime(), r.isMoved && r.allowThresholdMove && w !== this.touchesDirection && b && y && Math.abs(g) >= 1) {
                    Object.assign(l, {
                        startX: p,
                        startY: h,
                        currentX: p,
                        currentY: h,
                        startTranslate: r.currentTranslate
                    }), r.loopSwapReset = !0, r.startTranslate = r.currentTranslate;
                    return
                }
                this.emit("sliderMove", u), r.isMoved = !0, r.currentTranslate = g + r.startTranslate;
                let S = !0,
                    T = a.resistanceRatio;
                if (a.touchReleaseOnEdges && (T = 0), g > 0 ? (b && y && !i && r.allowThresholdMove && r.currentTranslate > (a.centeredSlides ? this.minTranslate() - this.slidesSizesGrid[this.activeIndex + 1] : this.minTranslate()) && this.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), r.currentTranslate > this.minTranslate() && (S = !1, a.resistance && (r.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + r.startTranslate + g) ** T))) : g < 0 && (b && y && !i && r.allowThresholdMove && r.currentTranslate < (a.centeredSlides ? this.maxTranslate() + this.slidesSizesGrid[this.slidesSizesGrid.length - 1] : this.maxTranslate()) && this.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: this.slides.length - ("auto" === a.slidesPerView ? this.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
                    }), r.currentTranslate < this.maxTranslate() && (S = !1, a.resistance && (r.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - r.startTranslate - g) ** T))), S && (u.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), this.allowSlidePrev || this.allowSlideNext || (r.currentTranslate = r.startTranslate), a.threshold > 0) {
                    if (Math.abs(g) > a.threshold || r.allowThresholdMove) {
                        if (!r.allowThresholdMove) {
                            r.allowThresholdMove = !0, l.startX = l.currentX, l.startY = l.currentY, r.currentTranslate = r.startTranslate, l.diff = this.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY;
                            return
                        }
                    } else {
                        r.currentTranslate = r.startTranslate;
                        return
                    }
                }
                a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && this.freeMode || a.watchSlidesProgress) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(), this.updateProgress(r.currentTranslate), this.setTranslate(r.currentTranslate))
            }

            function v(e) {
                let t, i;
                let s = this,
                    r = s.touchEventsData,
                    a = e;
                if (a.originalEvent && (a = a.originalEvent), "touchend" === a.type || "touchcancel" === a.type) {
                    if (!(t = [...a.changedTouches].filter(e => e.identifier === r.touchId)[0]) || t.identifier !== r.touchId) return
                } else {
                    if (null !== r.touchId || a.pointerId !== r.pointerId) return;
                    t = a
                }
                if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type) && !(["pointercancel", "contextmenu"].includes(a.type) && (s.browser.isSafari || s.browser.isWebView))) return;
                r.pointerId = null, r.touchId = null;
                let {
                    params: l,
                    touches: n,
                    rtlTranslate: d,
                    slidesGrid: c,
                    enabled: u
                } = s;
                if (!u || !l.simulateTouch && "mouse" === a.pointerType) return;
                if (r.allowTouchCallbacks && s.emit("touchEnd", a), r.allowTouchCallbacks = !1, !r.isTouched) {
                    r.isMoved && l.grabCursor && s.setGrabCursor(!1), r.isMoved = !1, r.startMoving = !1;
                    return
                }
                l.grabCursor && r.isMoved && r.isTouched && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!1);
                let p = (0, o.d)(),
                    h = p - r.touchStartTime;
                if (s.allowClick) {
                    let e = a.path || a.composedPath && a.composedPath();
                    s.updateClickedSlide(e && e[0] || a.target, e), s.emit("tap click", a), h < 300 && p - r.lastClickTime < 300 && s.emit("doubleTap doubleClick", a)
                }
                if (r.lastClickTime = (0, o.d)(), (0, o.n)(() => {
                        s.destroyed || (s.allowClick = !0)
                    }), !r.isTouched || !r.isMoved || !s.swipeDirection || 0 === n.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) {
                    r.isTouched = !1, r.isMoved = !1, r.startMoving = !1;
                    return
                }
                if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, i = l.followFinger ? d ? s.translate : -s.translate : -r.currentTranslate, l.cssMode) return;
                if (l.freeMode && l.freeMode.enabled) {
                    s.freeMode.onTouchEnd({
                        currentPos: i
                    });
                    return
                }
                let f = i >= -s.maxTranslate() && !s.params.loop,
                    m = 0,
                    g = s.slidesSizesGrid[0];
                for (let e = 0; e < c.length; e += e < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
                    let t = e < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
                    void 0 !== c[e + t] ? (f || i >= c[e] && i < c[e + t]) && (m = e, g = c[e + t] - c[e]) : (f || i >= c[e]) && (m = e, g = c[c.length - 1] - c[c.length - 2])
                }
                let v = null,
                    w = null;
                l.rewind && (s.isBeginning ? w = l.virtual && l.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1 : s.isEnd && (v = 0));
                let b = (i - c[m]) / g,
                    y = m < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
                if (h > l.longSwipesMs) {
                    if (!l.longSwipes) {
                        s.slideTo(s.activeIndex);
                        return
                    }
                    "next" === s.swipeDirection && (b >= l.longSwipesRatio ? s.slideTo(l.rewind && s.isEnd ? v : m + y) : s.slideTo(m)), "prev" === s.swipeDirection && (b > 1 - l.longSwipesRatio ? s.slideTo(m + y) : null !== w && b < 0 && Math.abs(b) > l.longSwipesRatio ? s.slideTo(w) : s.slideTo(m))
                } else {
                    if (!l.shortSwipes) {
                        s.slideTo(s.activeIndex);
                        return
                    }
                    s.navigation && (a.target === s.navigation.nextEl || a.target === s.navigation.prevEl) ? a.target === s.navigation.nextEl ? s.slideTo(m + y) : s.slideTo(m) : ("next" === s.swipeDirection && s.slideTo(null !== v ? v : m + y), "prev" === s.swipeDirection && s.slideTo(null !== w ? w : m))
                }
            }

            function w() {
                let e = this,
                    {
                        params: t,
                        el: i
                    } = e;
                if (i && 0 === i.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: s,
                    allowSlidePrev: r,
                    snapGrid: a
                } = e, l = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                let n = l && t.loop;
                "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || n ? e.params.loop && !l ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }, 500)), e.allowSlidePrev = r, e.allowSlideNext = s, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
            }

            function b(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function y() {
                let {
                    wrapperEl: e,
                    rtlTranslate: t,
                    enabled: i
                } = this;
                if (!i) return;
                this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop, 0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                let s = this.maxTranslate() - this.minTranslate();
                (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
            }

            function S(e) {
                c(this, e.target), !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update()
            }

            function T() {
                !this.documentTouchHandlerProceeded && (this.documentTouchHandlerProceeded = !0, this.params.touchReleaseOnEdges && (this.el.style.touchAction = "auto"))
            }
            let E = (e, t) => {
                    let i = (0, n.g)(),
                        {
                            params: s,
                            el: r,
                            wrapperEl: a,
                            device: l
                        } = e,
                        o = !!s.nested,
                        d = "on" === t ? "addEventListener" : "removeEventListener";
                    i[d]("touchstart", e.onDocumentTouchStart, {
                        passive: !1,
                        capture: o
                    }), r[d]("touchstart", e.onTouchStart, {
                        passive: !1
                    }), r[d]("pointerdown", e.onTouchStart, {
                        passive: !1
                    }), i[d]("touchmove", e.onTouchMove, {
                        passive: !1,
                        capture: o
                    }), i[d]("pointermove", e.onTouchMove, {
                        passive: !1,
                        capture: o
                    }), i[d]("touchend", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerup", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointercancel", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("touchcancel", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerout", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerleave", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("contextmenu", e.onTouchEnd, {
                        passive: !0
                    }), (s.preventClicks || s.preventClicksPropagation) && r[d]("click", e.onClick, !0), s.cssMode && a[d]("scroll", e.onScroll), s.updateOnWindowResize ? e[t](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", w, !0) : e[t]("observerUpdate", w, !0), r[d]("load", e.onLoad, {
                        capture: !0
                    })
                },
                x = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var C = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                eventsPrefix: "swiper",
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopAddBlankSlides: !0,
                loopAdditionalSlides: 0,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-blank",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideFullyVisibleClass: "swiper-slide-fully-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let M = {
                    eventsEmitter: {
                        on(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
                            let r = i ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t)
                            }), s
                        },
                        once(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;

                            function r() {
                                s.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                                for (var i = arguments.length, a = Array(i), l = 0; l < i; l++) a[l] = arguments[l];
                                t.apply(s, a)
                            }
                            return r.__emitterProxy = t, s.on(e, r, i)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let i = this;
                            return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s, r) => {
                                    (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                                })
                            }), i
                        },
                        emit() {
                            let e, t, i;
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
                            for (var r = arguments.length, a = Array(r), l = 0; l < r; l++) a[l] = arguments[l];
                            return "string" == typeof a[0] || Array.isArray(a[0]) ? (e = a[0], t = a.slice(1, a.length), i = s) : (e = a[0].events, t = a[0].data, i = a[0].context || s), t.unshift(i), (Array.isArray(e) ? e : e.split(" ")).forEach(e => {
                                s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(s => {
                                    s.apply(i, [e, ...t])
                                }), s.eventsListeners && s.eventsListeners[e] && s.eventsListeners[e].forEach(e => {
                                    e.apply(i, t)
                                })
                            }), s
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t;
                            let i = this.el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i.clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i.clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt((0, o.m)(i, "padding-left") || 0, 10) - parseInt((0, o.m)(i, "padding-right") || 0, 10), t = t - parseInt((0, o.m)(i, "padding-top") || 0, 10) - parseInt((0, o.m)(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e;
                            let t = this;

                            function i(e, i) {
                                return parseFloat(e.getPropertyValue(t.getDirectionLabel(i)) || 0)
                            }
                            let s = t.params,
                                {
                                    wrapperEl: r,
                                    slidesEl: a,
                                    size: l,
                                    rtlTranslate: n,
                                    wrongRTL: d
                                } = t,
                                c = t.virtual && s.virtual.enabled,
                                u = c ? t.virtual.slides.length : t.slides.length,
                                p = (0, o.e)(a, `.${t.params.slideClass}, swiper-slide`),
                                h = c ? t.virtual.slides.length : p.length,
                                f = [],
                                m = [],
                                g = [],
                                v = s.slidesOffsetBefore;
                            "function" == typeof v && (v = s.slidesOffsetBefore.call(t));
                            let w = s.slidesOffsetAfter;
                            "function" == typeof w && (w = s.slidesOffsetAfter.call(t));
                            let b = t.snapGrid.length,
                                y = t.slidesGrid.length,
                                S = s.spaceBetween,
                                T = -v,
                                E = 0,
                                x = 0;
                            if (void 0 === l) return;
                            "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * l : "string" == typeof S && (S = parseFloat(S)), t.virtualSize = -S, p.forEach(e => {
                                n ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                            }), s.centeredSlides && s.cssMode && ((0, o.s)(r, "--swiper-centered-offset-before", ""), (0, o.s)(r, "--swiper-centered-offset-after", ""));
                            let C = s.grid && s.grid.rows > 1 && t.grid;
                            C ? t.grid.initSlides(p) : t.grid && t.grid.unsetSlides();
                            let M = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter(e => void 0 !== s.breakpoints[e].slidesPerView).length > 0;
                            for (let r = 0; r < h; r += 1) {
                                let a;
                                if (e = 0, p[r] && (a = p[r]), C && t.grid.updateSlide(r, a, p), !p[r] || "none" !== (0, o.m)(a, "display")) {
                                    if ("auto" === s.slidesPerView) {
                                        M && (p[r].style[t.getDirectionLabel("width")] = "");
                                        let l = getComputedStyle(a),
                                            n = a.style.transform,
                                            d = a.style.webkitTransform;
                                        if (n && (a.style.transform = "none"), d && (a.style.webkitTransform = "none"), s.roundLengths) e = t.isHorizontal() ? (0, o.f)(a, "width", !0) : (0, o.f)(a, "height", !0);
                                        else {
                                            let t = i(l, "width"),
                                                s = i(l, "padding-left"),
                                                r = i(l, "padding-right"),
                                                n = i(l, "margin-left"),
                                                o = i(l, "margin-right"),
                                                d = l.getPropertyValue("box-sizing");
                                            if (d && "border-box" === d) e = t + n + o;
                                            else {
                                                let {
                                                    clientWidth: i,
                                                    offsetWidth: l
                                                } = a;
                                                e = t + s + r + n + o + (l - i)
                                            }
                                        }
                                        n && (a.style.transform = n), d && (a.style.webkitTransform = d), s.roundLengths && (e = Math.floor(e))
                                    } else e = (l - (s.slidesPerView - 1) * S) / s.slidesPerView, s.roundLengths && (e = Math.floor(e)), p[r] && (p[r].style[t.getDirectionLabel("width")] = `${e}px`);
                                    p[r] && (p[r].swiperSlideSize = e), g.push(e), s.centeredSlides ? (T = T + e / 2 + E / 2 + S, 0 === E && 0 !== r && (T = T - l / 2 - S), 0 === r && (T = T - l / 2 - S), .001 > Math.abs(T) && (T = 0), s.roundLengths && (T = Math.floor(T)), x % s.slidesPerGroup == 0 && f.push(T), m.push(T)) : (s.roundLengths && (T = Math.floor(T)), (x - Math.min(t.params.slidesPerGroupSkip, x)) % t.params.slidesPerGroup == 0 && f.push(T), m.push(T), T = T + e + S), t.virtualSize += e + S, E = e, x += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, l) + w, n && d && ("slide" === s.effect || "coverflow" === s.effect) && (r.style.width = `${t.virtualSize+S}px`), s.setWrapperSize && (r.style[t.getDirectionLabel("width")] = `${t.virtualSize+S}px`), C && t.grid.updateWrapperSize(e, f), !s.centeredSlides) {
                                let e = [];
                                for (let i = 0; i < f.length; i += 1) {
                                    let r = f[i];
                                    s.roundLengths && (r = Math.floor(r)), f[i] <= t.virtualSize - l && e.push(r)
                                }
                                f = e, Math.floor(t.virtualSize - l) - Math.floor(f[f.length - 1]) > 1 && f.push(t.virtualSize - l)
                            }
                            if (c && s.loop) {
                                let e = g[0] + S;
                                if (s.slidesPerGroup > 1) {
                                    let i = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup),
                                        r = e * s.slidesPerGroup;
                                    for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + r)
                                }
                                for (let i = 0; i < t.virtual.slidesBefore + t.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && f.push(f[f.length - 1] + e), m.push(m[m.length - 1] + e), t.virtualSize += e
                            }
                            if (0 === f.length && (f = [0]), 0 !== S) {
                                let e = t.isHorizontal() && n ? "marginLeft" : t.getDirectionLabel("marginRight");
                                p.filter((e, t) => !s.cssMode || !!s.loop || t !== p.length - 1).forEach(t => {
                                    t.style[e] = `${S}px`
                                })
                            }
                            if (s.centeredSlides && s.centeredSlidesBounds) {
                                let e = 0;
                                g.forEach(t => {
                                    e += t + (S || 0)
                                });
                                let t = (e -= S) - l;
                                f = f.map(e => e <= 0 ? -v : e > t ? t + w : e)
                            }
                            if (s.centerInsufficientSlides) {
                                let e = 0;
                                if (g.forEach(t => {
                                        e += t + (S || 0)
                                    }), (e -= S) < l) {
                                    let t = (l - e) / 2;
                                    f.forEach((e, i) => {
                                        f[i] = e - t
                                    }), m.forEach((e, i) => {
                                        m[i] = e + t
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: p,
                                    snapGrid: f,
                                    slidesGrid: m,
                                    slidesSizesGrid: g
                                }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                                (0, o.s)(r, "--swiper-centered-offset-before", `${-f[0]}px`), (0, o.s)(r, "--swiper-centered-offset-after", `${t.size/2-g[g.length-1]/2}px`);
                                let e = -t.snapGrid[0],
                                    i = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + i)
                            }
                            if (h !== u && t.emit("slidesLengthChange"), f.length !== b && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), m.length !== y && t.emit("slidesGridLengthChange"), s.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !c && !s.cssMode && ("slide" === s.effect || "fade" === s.effect)) {
                                let e = `${s.containerModifierClass}backface-hidden`,
                                    i = t.el.classList.contains(e);
                                h <= s.maxBackfaceHiddenSlides ? i || t.el.classList.add(e) : i && t.el.classList.remove(e)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t;
                            let i = this,
                                s = [],
                                r = i.virtual && i.params.virtual.enabled,
                                a = 0;
                            "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                            let l = e => r ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
                            if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                                if (i.params.centeredSlides)(i.visibleSlides || []).forEach(e => {
                                    s.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                        let e = i.activeIndex + t;
                                        if (e > i.slides.length && !r) break;
                                        s.push(l(e))
                                    }
                            } else s.push(l(i.activeIndex));
                            for (t = 0; t < s.length; t += 1)
                                if (void 0 !== s[t]) {
                                    let e = s[t].offsetHeight;
                                    a = e > a ? e : a
                                }(a || 0 === a) && (i.wrapperEl.style.height = `${a}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides,
                                t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                            for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - this.cssOverflowAdjustment()
                        },
                        updateSlidesProgress: function(e) {
                            void 0 === e && (e = this && this.translate || 0);
                            let t = this.params,
                                {
                                    slides: i,
                                    rtlTranslate: s,
                                    snapGrid: r
                                } = this;
                            if (0 === i.length) return;
                            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                            let a = -e;
                            s && (a = e), i.forEach(e => {
                                e.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass)
                            }), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                            let l = t.spaceBetween;
                            "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * this.size : "string" == typeof l && (l = parseFloat(l));
                            for (let e = 0; e < i.length; e += 1) {
                                let n = i[e],
                                    o = n.swiperSlideOffset;
                                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                                let d = (a + (t.centeredSlides ? this.minTranslate() : 0) - o) / (n.swiperSlideSize + l),
                                    c = (a - r[0] + (t.centeredSlides ? this.minTranslate() : 0) - o) / (n.swiperSlideSize + l),
                                    u = -(a - o),
                                    p = u + this.slidesSizesGrid[e],
                                    h = u >= 0 && u <= this.size - this.slidesSizesGrid[e];
                                (u >= 0 && u < this.size - 1 || p > 1 && p <= this.size || u <= 0 && p >= this.size) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(e), i[e].classList.add(t.slideVisibleClass)), h && i[e].classList.add(t.slideFullyVisibleClass), n.progress = s ? -d : d, n.originalProgress = s ? -c : c
                            }
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let t = this.params,
                                i = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: s,
                                    isBeginning: r,
                                    isEnd: a,
                                    progressLoop: l
                                } = this,
                                n = r,
                                o = a;
                            if (0 === i) s = 0, r = !0, a = !0;
                            else {
                                s = (e - this.minTranslate()) / i;
                                let t = 1 > Math.abs(e - this.minTranslate()),
                                    l = 1 > Math.abs(e - this.maxTranslate());
                                r = t || s <= 0, a = l || s >= 1, t && (s = 0), l && (s = 1)
                            }
                            if (t.loop) {
                                let t = this.getSlideIndexByData(0),
                                    i = this.getSlideIndexByData(this.slides.length - 1),
                                    s = this.slidesGrid[t],
                                    r = this.slidesGrid[i],
                                    a = this.slidesGrid[this.slidesGrid.length - 1],
                                    n = Math.abs(e);
                                (l = n >= s ? (n - s) / a : (n + a - r) / a) > 1 && (l -= 1)
                            }
                            Object.assign(this, {
                                progress: s,
                                progressLoop: l,
                                isBeginning: r,
                                isEnd: a
                            }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), r && !n && this.emit("reachBeginning toEdge"), a && !o && this.emit("reachEnd toEdge"), (n && !r || o && !a) && this.emit("fromEdge"), this.emit("progress", s)
                        },
                        updateSlidesClasses: function() {
                            let e, t, i;
                            let {
                                slides: s,
                                params: r,
                                slidesEl: a,
                                activeIndex: l
                            } = this, n = this.virtual && r.virtual.enabled, d = this.grid && r.grid && r.grid.rows > 1, c = e => (0, o.e)(a, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
                            if (s.forEach(e => {
                                    e.classList.remove(r.slideActiveClass, r.slideNextClass, r.slidePrevClass)
                                }), n) {
                                if (r.loop) {
                                    let t = l - this.virtual.slidesBefore;
                                    t < 0 && (t = this.virtual.slides.length + t), t >= this.virtual.slides.length && (t -= this.virtual.slides.length), e = c(`[data-swiper-slide-index="${t}"]`)
                                } else e = c(`[data-swiper-slide-index="${l}"]`)
                            } else d ? (e = s.filter(e => e.column === l)[0], i = s.filter(e => e.column === l + 1)[0], t = s.filter(e => e.column === l - 1)[0]) : e = s[l];
                            e && (e.classList.add(r.slideActiveClass), d ? i && i.classList.add(r.slideNextClass) : (i = (0, o.o)(e, `.${r.slideClass}, swiper-slide`)[0], r.loop && !i && (i = s[0]), i && i.classList.add(r.slideNextClass), t = (0, o.p)(e, `.${r.slideClass}, swiper-slide`)[0], r.loop), t && t.classList.add(r.slidePrevClass)), this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t, i;
                            let s = this,
                                r = s.rtlTranslate ? s.translate : -s.translate,
                                {
                                    snapGrid: a,
                                    params: l,
                                    activeIndex: n,
                                    realIndex: o,
                                    snapIndex: d
                                } = s,
                                c = e,
                                u = e => {
                                    let t = e - s.virtual.slidesBefore;
                                    return t < 0 && (t = s.virtual.slides.length + t), t >= s.virtual.slides.length && (t -= s.virtual.slides.length), t
                                };
                            if (void 0 === c && (c = function(e) {
                                    let t;
                                    let {
                                        slidesGrid: i,
                                        params: s
                                    } = e, r = e.rtlTranslate ? e.translate : -e.translate;
                                    for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2 ? t = e : r >= i[e] && r < i[e + 1] && (t = e + 1) : r >= i[e] && (t = e);
                                    return s.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                                }(s)), a.indexOf(r) >= 0) t = a.indexOf(r);
                            else {
                                let e = Math.min(l.slidesPerGroupSkip, c);
                                t = e + Math.floor((c - e) / l.slidesPerGroup)
                            }
                            if (t >= a.length && (t = a.length - 1), c === n && !s.params.loop) {
                                t !== d && (s.snapIndex = t, s.emit("snapIndexChange"));
                                return
                            }
                            if (c === n && s.params.loop && s.virtual && s.params.virtual.enabled) {
                                s.realIndex = u(c);
                                return
                            }
                            let h = s.grid && l.grid && l.grid.rows > 1;
                            if (s.virtual && l.virtual.enabled && l.loop) i = u(c);
                            else if (h) {
                                let e = s.slides.filter(e => e.column === c)[0],
                                    t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                                Number.isNaN(t) && (t = Math.max(s.slides.indexOf(e), 0)), i = Math.floor(t / l.grid.rows)
                            } else if (s.slides[c]) {
                                let e = s.slides[c].getAttribute("data-swiper-slide-index");
                                i = e ? parseInt(e, 10) : c
                            } else i = c;
                            Object.assign(s, {
                                previousSnapIndex: d,
                                snapIndex: t,
                                previousRealIndex: o,
                                realIndex: i,
                                previousIndex: n,
                                activeIndex: c
                            }), s.initialized && p(s), s.emit("activeIndexChange"), s.emit("snapIndexChange"), (s.initialized || s.params.runCallbacksOnInit) && (o !== i && s.emit("realIndexChange"), s.emit("slideChange"))
                        },
                        updateClickedSlide: function(e, t) {
                            let i;
                            let s = this.params,
                                r = e.closest(`.${s.slideClass}, swiper-slide`);
                            !r && this.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
                                !r && e.matches && e.matches(`.${s.slideClass}, swiper-slide`) && (r = e)
                            });
                            let a = !1;
                            if (r) {
                                for (let e = 0; e < this.slides.length; e += 1)
                                    if (this.slides[e] === r) {
                                        a = !0, i = e;
                                        break
                                    }
                            }
                            if (r && a) this.clickedSlide = r, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : this.clickedIndex = i;
                            else {
                                this.clickedSlide = void 0, this.clickedIndex = void 0;
                                return
                            }
                            s.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e) {
                            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                            let {
                                params: t,
                                rtlTranslate: i,
                                translate: s,
                                wrapperEl: r
                            } = this;
                            if (t.virtualTranslate) return i ? -s : s;
                            if (t.cssMode) return s;
                            let a = (0, o.i)(r, e);
                            return a += this.cssOverflowAdjustment(), i && (a = -a), a || 0
                        },
                        setTranslate: function(e, t) {
                            let {
                                rtlTranslate: i,
                                params: s,
                                wrapperEl: r,
                                progress: a
                            } = this, l = 0, n = 0;
                            this.isHorizontal() ? l = i ? -e : e : n = e, s.roundLengths && (l = Math.floor(l), n = Math.floor(n)), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : n, s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -n : s.virtualTranslate || (this.isHorizontal() ? l -= this.cssOverflowAdjustment() : n -= this.cssOverflowAdjustment(), r.style.transform = `translate3d(${l}px, ${n}px, 0px)`);
                            let o = this.maxTranslate() - this.minTranslate();
                            (0 === o ? 0 : (e - this.minTranslate()) / o) !== a && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e, t, i, s, r) {
                            let a;
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                            let l = this,
                                {
                                    params: n,
                                    wrapperEl: d
                                } = l;
                            if (l.animating && n.preventInteractionOnTransition) return !1;
                            let c = l.minTranslate(),
                                u = l.maxTranslate();
                            if (a = s && e > c ? c : s && e < u ? u : e, l.updateProgress(a), n.cssMode) {
                                let e = l.isHorizontal();
                                if (0 === t) d[e ? "scrollLeft" : "scrollTop"] = -a;
                                else {
                                    if (!l.support.smoothScroll) return (0, o.q)({
                                        swiper: l,
                                        targetPosition: -a,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    d.scrollTo({
                                        [e ? "left" : "top"]: -a,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (l.setTransition(0), l.setTranslate(a), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionEnd"))) : (l.setTransition(t), l.setTranslate(a), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionStart")), l.animating || (l.animating = !0, l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.onTranslateToWrapperTransitionEnd = null, delete l.onTranslateToWrapperTransitionEnd, i && l.emit("transitionEnd"))
                            }), l.wrapperEl.addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.params.cssMode || (this.wrapperEl.style.transitionDuration = `${e}ms`, this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: i
                            } = this;
                            i.cssMode || (i.autoHeight && this.updateAutoHeight(), h({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: i
                            } = this;
                            this.animating = !1, i.cssMode || (this.setTransition(0), h({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e, t, i, s, r) {
                            let a;
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
                            let l = this,
                                n = e;
                            n < 0 && (n = 0);
                            let {
                                params: d,
                                snapGrid: c,
                                slidesGrid: u,
                                previousIndex: p,
                                activeIndex: h,
                                rtlTranslate: f,
                                wrapperEl: m,
                                enabled: g
                            } = l;
                            if (l.animating && d.preventInteractionOnTransition || !g && !s && !r) return !1;
                            let v = Math.min(l.params.slidesPerGroupSkip, n),
                                w = v + Math.floor((n - v) / l.params.slidesPerGroup);
                            w >= c.length && (w = c.length - 1);
                            let b = -c[w];
                            if (d.normalizeSlideIndex)
                                for (let e = 0; e < u.length; e += 1) {
                                    let t = -Math.floor(100 * b),
                                        i = Math.floor(100 * u[e]),
                                        s = Math.floor(100 * u[e + 1]);
                                    void 0 !== u[e + 1] ? t >= i && t < s - (s - i) / 2 ? n = e : t >= i && t < s && (n = e + 1) : t >= i && (n = e)
                                }
                            if (l.initialized && n !== h && (!l.allowSlideNext && (f ? b > l.translate && b > l.minTranslate() : b < l.translate && b < l.minTranslate()) || !l.allowSlidePrev && b > l.translate && b > l.maxTranslate() && (h || 0) !== n)) return !1;
                            if (n !== (p || 0) && i && l.emit("beforeSlideChangeStart"), l.updateProgress(b), a = n > h ? "next" : n < h ? "prev" : "reset", f && -b === l.translate || !f && b === l.translate) return l.updateActiveIndex(n), d.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== d.effect && l.setTranslate(b), "reset" !== a && (l.transitionStart(i, a), l.transitionEnd(i, a)), !1;
                            if (d.cssMode) {
                                let e = l.isHorizontal(),
                                    i = f ? b : -b;
                                if (0 === t) {
                                    let t = l.virtual && l.params.virtual.enabled;
                                    t && (l.wrapperEl.style.scrollSnapType = "none", l._immediateVirtual = !0), t && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0 ? (l._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                                        m[e ? "scrollLeft" : "scrollTop"] = i
                                    })) : m[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame(() => {
                                        l.wrapperEl.style.scrollSnapType = "", l._immediateVirtual = !1
                                    })
                                } else {
                                    if (!l.support.smoothScroll) return (0, o.q)({
                                        swiper: l,
                                        targetPosition: i,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    m.scrollTo({
                                        [e ? "left" : "top"]: i,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return l.setTransition(t), l.setTranslate(b), l.updateActiveIndex(n), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, s), l.transitionStart(i, a), 0 === t ? l.transitionEnd(i, a) : l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(i, a))
                            }), l.wrapperEl.addEventListener("transitionend", l.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e, t, i, s) {
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
                            let r = this,
                                a = r.grid && r.params.grid && r.params.grid.rows > 1,
                                l = e;
                            if (r.params.loop) {
                                if (r.virtual && r.params.virtual.enabled) l += r.virtual.slidesBefore;
                                else {
                                    let e;
                                    if (a) {
                                        let t = l * r.params.grid.rows;
                                        e = r.slides.filter(e => 1 * e.getAttribute("data-swiper-slide-index") === t)[0].column
                                    } else e = r.getSlideIndexByData(l);
                                    let t = a ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
                                        {
                                            centeredSlides: i
                                        } = r.params,
                                        s = r.params.slidesPerView;
                                    "auto" === s ? s = r.slidesPerViewDynamic() : (s = Math.ceil(parseFloat(r.params.slidesPerView, 10)), i && s % 2 == 0 && (s += 1));
                                    let n = t - e < s;
                                    if (i && (n = n || e < Math.ceil(s / 2)), n) {
                                        let s = i ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                                        r.loopFix({
                                            direction: s,
                                            slideTo: !0,
                                            activeSlideIndex: "next" === s ? e + 1 : e - t + 1,
                                            slideRealIndex: "next" === s ? r.realIndex : void 0
                                        })
                                    }
                                    if (a) {
                                        let e = l * r.params.grid.rows;
                                        l = r.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0].column
                                    } else l = r.getSlideIndexByData(l)
                                }
                            }
                            return requestAnimationFrame(() => {
                                r.slideTo(l, t, i, s)
                            }), r
                        },
                        slideNext: function(e, t, i) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                            let s = this,
                                {
                                    enabled: r,
                                    params: a,
                                    animating: l
                                } = s;
                            if (!r) return s;
                            let n = a.slidesPerGroup;
                            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (n = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                            let o = s.activeIndex < a.slidesPerGroupSkip ? 1 : n,
                                d = s.virtual && a.virtual.enabled;
                            if (a.loop) {
                                if (l && !d && a.loopPreventsSliding) return !1;
                                if (s.loopFix({
                                        direction: "next"
                                    }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && a.cssMode) return requestAnimationFrame(() => {
                                    s.slideTo(s.activeIndex + o, e, t, i)
                                }), !0
                            }
                            return a.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
                        },
                        slidePrev: function(e, t, i) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                            let s = this,
                                {
                                    params: r,
                                    snapGrid: a,
                                    slidesGrid: l,
                                    rtlTranslate: n,
                                    enabled: o,
                                    animating: d
                                } = s;
                            if (!o) return s;
                            let c = s.virtual && r.virtual.enabled;
                            if (r.loop) {
                                if (d && !c && r.loopPreventsSliding) return !1;
                                s.loopFix({
                                    direction: "prev"
                                }), s._clientLeft = s.wrapperEl.clientLeft
                            }

                            function u(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let p = u(n ? s.translate : -s.translate),
                                h = a.map(e => u(e)),
                                f = a[h.indexOf(p) - 1];
                            if (void 0 === f && r.cssMode) {
                                let e;
                                a.forEach((t, i) => {
                                    p >= t && (e = i)
                                }), void 0 !== e && (f = a[e > 0 ? e - 1 : e])
                            }
                            let m = 0;
                            if (void 0 !== f && ((m = l.indexOf(f)) < 0 && (m = s.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (m = Math.max(m = m - s.slidesPerViewDynamic("previous", !0) + 1, 0))), r.rewind && s.isBeginning) {
                                let r = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                                return s.slideTo(r, e, t, i)
                            }
                            return r.loop && 0 === s.activeIndex && r.cssMode ? (requestAnimationFrame(() => {
                                s.slideTo(m, e, t, i)
                            }), !0) : s.slideTo(m, e, t, i)
                        },
                        slideReset: function(e, t, i) {
                            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
                        },
                        slideToClosest: function(e, t, i, s) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
                            let r = this.activeIndex,
                                a = Math.min(this.params.slidesPerGroupSkip, r),
                                l = a + Math.floor((r - a) / this.params.slidesPerGroup),
                                n = this.rtlTranslate ? this.translate : -this.translate;
                            if (n >= this.snapGrid[l]) {
                                let e = this.snapGrid[l];
                                n - e > (this.snapGrid[l + 1] - e) * s && (r += this.params.slidesPerGroup)
                            } else {
                                let e = this.snapGrid[l - 1];
                                n - e <= (this.snapGrid[l] - e) * s && (r -= this.params.slidesPerGroup)
                            }
                            return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1), this.slideTo(r, e, t, i)
                        },
                        slideToClickedSlide: function() {
                            let e;
                            let t = this,
                                {
                                    params: i,
                                    slidesEl: s
                                } = t,
                                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                                a = t.clickedIndex,
                                l = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
                            if (i.loop) {
                                if (t.animating) return;
                                e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), i.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), a = t.getSlideIndex((0, o.e)(s, `${l}[data-swiper-slide-index="${e}"]`)[0]), (0, o.n)(() => {
                                    t.slideTo(a)
                                })) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(), a = t.getSlideIndex((0, o.e)(s, `${l}[data-swiper-slide-index="${e}"]`)[0]), (0, o.n)(() => {
                                    t.slideTo(a)
                                })) : t.slideTo(a)
                            } else t.slideTo(a)
                        }
                    },
                    loop: {
                        loopCreate: function(e) {
                            let t = this,
                                {
                                    params: i,
                                    slidesEl: s
                                } = t;
                            if (!i.loop || t.virtual && t.params.virtual.enabled) return;
                            let r = t.grid && i.grid && i.grid.rows > 1,
                                a = i.slidesPerGroup * (r ? i.grid.rows : 1),
                                l = t.slides.length % a != 0,
                                n = r && t.slides.length % i.grid.rows != 0,
                                d = e => {
                                    for (let s = 0; s < e; s += 1) {
                                        let e = t.isElement ? (0, o.c)("swiper-slide", [i.slideBlankClass]) : (0, o.c)("div", [i.slideClass, i.slideBlankClass]);
                                        t.slidesEl.append(e)
                                    }
                                };
                            l ? i.loopAddBlankSlides ? (d(a - t.slides.length % a), t.recalcSlides(), t.updateSlides()) : (0, o.r)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)") : n && (i.loopAddBlankSlides ? (d(i.grid.rows - t.slides.length % i.grid.rows), t.recalcSlides(), t.updateSlides()) : (0, o.r)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)")), (0, o.e)(s, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
                                e.setAttribute("data-swiper-slide-index", t)
                            }), t.loopFix({
                                slideRealIndex: e,
                                direction: i.centeredSlides ? void 0 : "next"
                            })
                        },
                        loopFix: function(e) {
                            let {
                                slideRealIndex: t,
                                slideTo: i = !0,
                                direction: s,
                                setTranslate: r,
                                activeSlideIndex: a,
                                byController: l,
                                byMousewheel: n
                            } = void 0 === e ? {} : e, d = this;
                            if (!d.params.loop) return;
                            d.emit("beforeLoopFix");
                            let {
                                slides: c,
                                allowSlidePrev: u,
                                allowSlideNext: p,
                                slidesEl: h,
                                params: f
                            } = d, {
                                centeredSlides: m
                            } = f;
                            if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && f.virtual.enabled) {
                                i && (f.centeredSlides || 0 !== d.snapIndex ? f.centeredSlides && d.snapIndex < f.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = u, d.allowSlideNext = p, d.emit("loopFix");
                                return
                            }
                            let g = f.slidesPerView;
                            "auto" === g ? g = d.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(f.slidesPerView, 10)), m && g % 2 == 0 && (g += 1));
                            let v = f.slidesPerGroupAuto ? g : f.slidesPerGroup,
                                w = v;
                            w % v != 0 && (w += v - w % v), w += f.loopAdditionalSlides, d.loopedSlides = w;
                            let b = d.grid && f.grid && f.grid.rows > 1;
                            c.length < g + w ? (0, o.r)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === f.grid.fill && (0, o.r)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                            let y = [],
                                S = [],
                                T = d.activeIndex;
                            void 0 === a ? a = d.getSlideIndex(c.filter(e => e.classList.contains(f.slideActiveClass))[0]) : T = a;
                            let E = "next" === s || !s,
                                x = "prev" === s || !s,
                                C = 0,
                                M = 0,
                                P = b ? Math.ceil(c.length / f.grid.rows) : c.length,
                                _ = (b ? c[a].column : a) + (m && void 0 === r ? -g / 2 + .5 : 0);
                            if (_ < w) {
                                C = Math.max(w - _, v);
                                for (let e = 0; e < w - _; e += 1) {
                                    let t = e - Math.floor(e / P) * P;
                                    if (b) {
                                        let e = P - t - 1;
                                        for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && y.push(t)
                                    } else y.push(P - t - 1)
                                }
                            } else if (_ + g > P - w) {
                                M = Math.max(_ - (P - 2 * w), v);
                                for (let e = 0; e < M; e += 1) {
                                    let t = e - Math.floor(e / P) * P;
                                    b ? c.forEach((e, i) => {
                                        e.column === t && S.push(i)
                                    }) : S.push(t)
                                }
                            }
                            if (d.__preventObserver__ = !0, requestAnimationFrame(() => {
                                    d.__preventObserver__ = !1
                                }), x && y.forEach(e => {
                                    c[e].swiperLoopMoveDOM = !0, h.prepend(c[e]), c[e].swiperLoopMoveDOM = !1
                                }), E && S.forEach(e => {
                                    c[e].swiperLoopMoveDOM = !0, h.append(c[e]), c[e].swiperLoopMoveDOM = !1
                                }), d.recalcSlides(), "auto" === f.slidesPerView ? d.updateSlides() : b && (y.length > 0 && x || S.length > 0 && E) && d.slides.forEach((e, t) => {
                                    d.grid.updateSlide(t, e, d.slides)
                                }), f.watchSlidesProgress && d.updateSlidesOffset(), i) {
                                if (y.length > 0 && x) {
                                    if (void 0 === t) {
                                        let e = d.slidesGrid[T],
                                            t = d.slidesGrid[T + C] - e;
                                        n ? d.setTranslate(d.translate - t) : (d.slideTo(T + C, 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                                    } else if (r) {
                                        let e = b ? y.length / f.grid.rows : y.length;
                                        d.slideTo(d.activeIndex + e, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate
                                    }
                                } else if (S.length > 0 && E) {
                                    if (void 0 === t) {
                                        let e = d.slidesGrid[T],
                                            t = d.slidesGrid[T - M] - e;
                                        n ? d.setTranslate(d.translate - t) : (d.slideTo(T - M, 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                                    } else {
                                        let e = b ? S.length / f.grid.rows : S.length;
                                        d.slideTo(d.activeIndex - e, 0, !1, !0)
                                    }
                                }
                            }
                            if (d.allowSlidePrev = u, d.allowSlideNext = p, d.controller && d.controller.control && !l) {
                                let e = {
                                    slideRealIndex: t,
                                    direction: s,
                                    setTranslate: r,
                                    activeSlideIndex: a,
                                    byController: !0
                                };
                                Array.isArray(d.controller.control) ? d.controller.control.forEach(t => {
                                    !t.destroyed && t.params.loop && t.loopFix({ ...e,
                                        slideTo: t.params.slidesPerView === f.slidesPerView && i
                                    })
                                }) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({ ...e,
                                    slideTo: d.controller.control.params.slidesPerView === f.slidesPerView && i
                                })
                            }
                            d.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                params: e,
                                slidesEl: t
                            } = this;
                            if (!e.loop || this.virtual && this.params.virtual.enabled) return;
                            this.recalcSlides();
                            let i = [];
                            this.slides.forEach(e => {
                                i[void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex] = e
                            }), this.slides.forEach(e => {
                                e.removeAttribute("data-swiper-slide-index")
                            }), i.forEach(e => {
                                t.append(e)
                            }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            let t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            let i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                                t.__preventObserver__ = !1
                            })
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                                e.__preventObserver__ = !1
                            }))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let {
                                params: e
                            } = this;
                            this.onTouchStart = m.bind(this), this.onTouchMove = g.bind(this), this.onTouchEnd = v.bind(this), this.onDocumentTouchStart = T.bind(this), e.cssMode && (this.onScroll = y.bind(this)), this.onClick = b.bind(this), this.onLoad = S.bind(this), E(this, "on")
                        },
                        detachEvents: function() {
                            E(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    realIndex: t,
                                    initialized: i,
                                    params: s,
                                    el: r
                                } = e,
                                a = s.breakpoints;
                            if (!a || a && 0 === Object.keys(a).length) return;
                            let l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                            if (!l || e.currentBreakpoint === l) return;
                            let n = (l in a ? a[l] : void 0) || e.originalParams,
                                d = x(e, s),
                                c = x(e, n),
                                u = s.enabled;
                            d && !c ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.classList.add(`${s.containerModifierClass}grid`), (n.grid.fill && "column" === n.grid.fill || !n.grid.fill && "column" === s.grid.fill) && r.classList.add(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                if (void 0 === n[t]) return;
                                let i = s[t] && s[t].enabled,
                                    r = n[t] && n[t].enabled;
                                i && !r && e[t].disable(), !i && r && e[t].enable()
                            });
                            let p = n.direction && n.direction !== s.direction,
                                h = s.loop && (n.slidesPerView !== s.slidesPerView || p),
                                f = s.loop;
                            p && i && e.changeDirection(), (0, o.t)(e.params, n);
                            let m = e.params.enabled,
                                g = e.params.loop;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), u && !m ? e.disable() : !u && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", n), i && (h ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !f && g ? (e.loopCreate(t), e.updateSlides()) : f && !g && e.loopDestroy()), e.emit("breakpoint", n)
                        },
                        getBreakpoint: function(e, t, i) {
                            if (void 0 === t && (t = "window"), !e || "container" === t && !i) return;
                            let s = !1,
                                r = (0, n.a)(),
                                a = "window" === t ? r.innerHeight : i.clientHeight,
                                l = Object.keys(e).map(e => "string" == typeof e && 0 === e.indexOf("@") ? {
                                    value: a * parseFloat(e.substr(1)),
                                    point: e
                                } : {
                                    value: e,
                                    point: e
                                });
                            l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < l.length; e += 1) {
                                let {
                                    point: a,
                                    value: n
                                } = l[e];
                                "window" === t ? r.matchMedia(`(min-width: ${n}px)`).matches && (s = a) : n <= i.clientWidth && (s = a)
                            }
                            return s || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let {
                                isLocked: e,
                                params: t
                            } = this, {
                                slidesOffsetBefore: i
                            } = t;
                            if (i) {
                                let e = this.slides.length - 1,
                                    t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                                this.isLocked = this.size > t
                            } else this.isLocked = 1 === this.snapGrid.length;
                            !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked), !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked), e && e !== this.isLocked && (this.isEnd = !1), e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: i,
                                el: s,
                                device: r
                            } = this, a = function(e, t) {
                                let i = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(s => {
                                        e[s] && i.push(t + s)
                                    }) : "string" == typeof e && i.push(t + e)
                                }), i
                            }(["initialized", t.direction, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: r.android
                            }, {
                                ios: r.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...a), s.classList.add(...e), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                el: e,
                                classNames: t
                            } = this;
                            e.classList.remove(...t), this.emitContainerClasses()
                        }
                    }
                },
                P = {};
            class _ {
                constructor() {
                    let e, t;
                    for (var i, s = arguments.length, l = Array(s), c = 0; c < s; c++) l[c] = arguments[c];
                    1 === l.length && l[0].constructor && "Object" === Object.prototype.toString.call(l[0]).slice(8, -1) ? t = l[0] : [e, t] = l, t || (t = {}), t = (0, o.t)({}, t), e && !t.el && (t.el = e);
                    let u = (0, n.g)();
                    if (t.el && "string" == typeof t.el && u.querySelectorAll(t.el).length > 1) {
                        let e = [];
                        return u.querySelectorAll(t.el).forEach(i => {
                            let s = (0, o.t)({}, t, {
                                el: i
                            });
                            e.push(new _(s))
                        }), e
                    }
                    let p = this;
                    p.__swiper__ = !0, p.support = d(), p.device = (i = {
                        userAgent: t.userAgent
                    }, r || (r = function(e) {
                        let {
                            userAgent: t
                        } = void 0 === e ? {} : e, i = d(), s = (0, n.a)(), r = s.navigator.platform, a = t || s.navigator.userAgent, l = {
                            ios: !1,
                            android: !1
                        }, o = s.screen.width, c = s.screen.height, u = a.match(/(Android);?[\s\/]+([\d.]+)?/), p = a.match(/(iPad).*OS\s([\d_]+)/), h = a.match(/(iPod)(.*OS\s([\d_]+))?/), f = !p && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m = "MacIntel" === r;
                        return !p && m && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${c}`) >= 0 && ((p = a.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), m = !1), u && "Win32" !== r && (l.os = "android", l.android = !0), (p || f || h) && (l.os = "ios", l.ios = !0), l
                    }(i)), r), p.browser = (a || (a = function() {
                        let e = (0, n.a)(),
                            t = !1;

                        function i() {
                            let t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                        }
                        if (i()) {
                            let i = String(e.navigator.userAgent);
                            if (i.includes("Version/")) {
                                let [e, s] = i.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                                t = e < 16 || 16 === e && s < 2
                            }
                        }
                        return {
                            isSafari: t || i(),
                            needPerspectiveFix: t,
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                        }
                    }()), a), p.eventsListeners = {}, p.eventsAnyListeners = [], p.modules = [...p.__modules__], t.modules && Array.isArray(t.modules) && p.modules.push(...t.modules);
                    let h = {};
                    p.modules.forEach(e => {
                        var i;
                        e({
                            params: t,
                            swiper: p,
                            extendParams: (i = t, function(e) {
                                void 0 === e && (e = {});
                                let t = Object.keys(e)[0],
                                    s = e[t];
                                if ("object" != typeof s || null === s || (!0 === i[t] && (i[t] = {
                                        enabled: !0
                                    }), "navigation" === t && i[t] && i[t].enabled && !i[t].prevEl && !i[t].nextEl && (i[t].auto = !0), ["pagination", "scrollbar"].indexOf(t) >= 0 && i[t] && i[t].enabled && !i[t].el && (i[t].auto = !0), !(t in i && "enabled" in s))) {
                                    (0, o.t)(h, e);
                                    return
                                }
                                "object" != typeof i[t] || "enabled" in i[t] || (i[t].enabled = !0), i[t] || (i[t] = {
                                    enabled: !1
                                }), (0, o.t)(h, e)
                            }),
                            on: p.on.bind(p),
                            once: p.once.bind(p),
                            off: p.off.bind(p),
                            emit: p.emit.bind(p)
                        })
                    });
                    let f = (0, o.t)({}, C, h);
                    return p.params = (0, o.t)({}, f, P, t), p.originalParams = (0, o.t)({}, p.params), p.passedParams = (0, o.t)({}, t), p.params && p.params.on && Object.keys(p.params.on).forEach(e => {
                        p.on(e, p.params.on[e])
                    }), p.params && p.params.onAny && p.onAny(p.params.onAny), Object.assign(p, {
                        enabled: p.params.enabled,
                        el: e,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === p.params.direction,
                        isVertical: () => "vertical" === p.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return 8388608 * Math.trunc(this.translate / 8388608)
                        },
                        allowSlideNext: p.params.allowSlideNext,
                        allowSlidePrev: p.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: p.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            pointerId: null,
                            touchId: null
                        },
                        allowClick: !0,
                        allowTouchMove: p.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), p.emit("_swiper"), p.params.init && p.init(), p
                }
                getDirectionLabel(e) {
                    return this.isHorizontal() ? e : ({
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    })[e]
                }
                getSlideIndex(e) {
                    let {
                        slidesEl: t,
                        params: i
                    } = this, s = (0, o.e)(t, `.${i.slideClass}, swiper-slide`), r = (0, o.g)(s[0]);
                    return (0, o.g)(e) - r
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0])
                }
                recalcSlides() {
                    let {
                        slidesEl: e,
                        params: t
                    } = this;
                    this.slides = (0, o.e)(e, `.${t.slideClass}, swiper-slide`)
                }
                enable() {
                    this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
                }
                disable() {
                    this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let i = this.minTranslate(),
                        s = (this.maxTranslate() - i) * e + i;
                    this.translateTo(s, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.forEach(i => {
                        let s = e.getSlideClasses(i);
                        t.push({
                            slideEl: i,
                            classNames: s
                        }), e.emit("_slideClass", i, s)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    let {
                        params: i,
                        slides: s,
                        slidesGrid: r,
                        slidesSizesGrid: a,
                        size: l,
                        activeIndex: n
                    } = this, o = 1;
                    if ("number" == typeof i.slidesPerView) return i.slidesPerView;
                    if (i.centeredSlides) {
                        let e, t = s[n] ? s[n].swiperSlideSize : 0;
                        for (let i = n + 1; i < s.length; i += 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > l && (e = !0));
                        for (let i = n - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > l && (e = !0))
                    } else if ("current" === e)
                        for (let e = n + 1; e < s.length; e += 1)(t ? r[e] + a[e] - r[n] < l : r[e] - r[n] < l) && (o += 1);
                    else
                        for (let e = n - 1; e >= 0; e -= 1) r[n] - r[e] < l && (o += 1);
                    return o
                }
                update() {
                    let e;
                    let t = this;
                    if (!t || t.destroyed) return;
                    let {
                        snapGrid: i,
                        params: s
                    } = t;

                    function r() {
                        let e = Math.min(Math.max(t.rtlTranslate ? -1 * t.translate : t.translate, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    if (s.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                            e.complete && c(t, e)
                        }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) r(), s.autoHeight && t.updateAutoHeight();
                    else {
                        if (("auto" === s.slidesPerView || s.slidesPerView > 1) && t.isEnd && !s.centeredSlides) {
                            let i = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
                            e = t.slideTo(i.length - 1, 0, !1, !0)
                        } else e = t.slideTo(t.activeIndex, 0, !1, !0);
                        e || r()
                    }
                    s.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    let i = this.params.direction;
                    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.el.classList.remove(`${this.params.containerModifierClass}${i}`), this.el.classList.add(`${this.params.containerModifierClass}${e}`), this.emitContainerClasses(), this.params.direction = e, this.slides.forEach(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), this.emit("changeDirection"), t && this.update()), this
                }
                changeLanguageDirection(e) {
                    (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e, this.rtlTranslate = "horizontal" === this.params.direction && this.rtl, this.rtl ? (this.el.classList.add(`${this.params.containerModifierClass}rtl`), this.el.dir = "rtl") : (this.el.classList.remove(`${this.params.containerModifierClass}rtl`), this.el.dir = "ltr"), this.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let i = e || t.params.el;
                    if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
                    i.swiper = t, i.parentNode && i.parentNode.host && "SWIPER-CONTAINER" === i.parentNode.host.nodeName && (t.isElement = !0);
                    let s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        r = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : (0, o.e)(i, s())[0];
                    return !r && t.params.createElements && (r = (0, o.c)("div", t.params.wrapperClass), i.append(r), (0, o.e)(i, `.${t.params.slideClass}`).forEach(e => {
                        r.append(e)
                    })), Object.assign(t, {
                        el: i,
                        wrapperEl: r,
                        slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : r,
                        hostEl: t.isElement ? i.parentNode.host : i,
                        mounted: !0,
                        rtl: "rtl" === i.dir.toLowerCase() || "rtl" === (0, o.m)(i, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === (0, o.m)(i, "direction")),
                        wrongRTL: "-webkit-box" === (0, o.m)(r, "display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized || !1 === t.mount(e)) return t;
                    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                    let i = [...t.el.querySelectorAll('[loading="lazy"]')];
                    return t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach(e => {
                        e.complete ? c(t, e) : e.addEventListener("load", e => {
                            c(t, e.target)
                        })
                    }), p(t), t.initialized = !0, p(t), t.emit("init"), t.emit("afterInit"), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    let i = this,
                        {
                            params: s,
                            el: r,
                            wrapperEl: a,
                            slides: l
                        } = i;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttribute("style"), a.removeAttribute("style"), l && l.length && l.forEach(e => {
                        e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                        i.off(e)
                    }), !1 !== e && (i.el.swiper = null, (0, o.u)(i)), i.destroyed = !0), null
                }
                static extendDefaults(e) {
                    (0, o.t)(P, e)
                }
                static get extendedDefaults() {
                    return P
                }
                static get defaults() {
                    return C
                }
                static installModule(e) {
                    _.prototype.__modules__ || (_.prototype.__modules__ = []);
                    let t = _.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? e.forEach(e => _.installModule(e)) : _.installModule(e), _
                }
            }
            Object.keys(M).forEach(e => {
                Object.keys(M[e]).forEach(t => {
                    _.prototype[t] = M[e][t]
                })
            }), _.use([function(e) {
                let {
                    swiper: t,
                    on: i,
                    emit: s
                } = e, r = (0, n.a)(), a = null, l = null, o = () => {
                    t && !t.destroyed && t.initialized && (s("beforeResize"), s("resize"))
                }, d = () => {
                    t && !t.destroyed && t.initialized && (a = new ResizeObserver(e => {
                        l = r.requestAnimationFrame(() => {
                            let {
                                width: i,
                                height: s
                            } = t, r = i, a = s;
                            e.forEach(e => {
                                let {
                                    contentBoxSize: i,
                                    contentRect: s,
                                    target: l
                                } = e;
                                l && l !== t.el || (r = s ? s.width : (i[0] || i).inlineSize, a = s ? s.height : (i[0] || i).blockSize)
                            }), (r !== i || a !== s) && o()
                        })
                    })).observe(t.el)
                }, c = () => {
                    l && r.cancelAnimationFrame(l), a && a.unobserve && t.el && (a.unobserve(t.el), a = null)
                }, u = () => {
                    t && !t.destroyed && t.initialized && s("orientationchange")
                };
                i("init", () => {
                    if (t.params.resizeObserver && void 0 !== r.ResizeObserver) {
                        d();
                        return
                    }
                    r.addEventListener("resize", o), r.addEventListener("orientationchange", u)
                }), i("destroy", () => {
                    c(), r.removeEventListener("resize", o), r.removeEventListener("orientationchange", u)
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: s,
                    emit: r
                } = e, a = [], l = (0, n.a)(), d = function(e, i) {
                    void 0 === i && (i = {});
                    let s = new(l.MutationObserver || l.WebkitMutationObserver)(e => {
                        if (t.__preventObserver__) return;
                        if (1 === e.length) {
                            r("observerUpdate", e[0]);
                            return
                        }
                        let i = function() {
                            r("observerUpdate", e[0])
                        };
                        l.requestAnimationFrame ? l.requestAnimationFrame(i) : l.setTimeout(i, 0)
                    });
                    s.observe(e, {
                        attributes: void 0 === i.attributes || i.attributes,
                        childList: void 0 === i.childList || i.childList,
                        characterData: void 0 === i.characterData || i.characterData
                    }), a.push(s)
                };
                i({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), s("init", () => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            let e = (0, o.a)(t.hostEl);
                            for (let t = 0; t < e.length; t += 1) d(e[t])
                        }
                        d(t.hostEl, {
                            childList: t.params.observeSlideChildren
                        }), d(t.wrapperEl, {
                            attributes: !1
                        })
                    }
                }), s("destroy", () => {
                    a.forEach(e => {
                        e.disconnect()
                    }), a.splice(0, a.length)
                })
            }]);
            let k = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function L(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
            }

            function O(e, t) {
                let i = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : L(t[i]) && L(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : O(e[i], t[i]) : e[i] = t[i]
                })
            }

            function A(e) {
                return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function I(e) {
                return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
            }

            function z(e) {
                return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
            }

            function $(e) {
                void 0 === e && (e = "");
                let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
                    i = [];
                return t.forEach(e => {
                    0 > i.indexOf(e) && i.push(e)
                }), i.join(" ")
            }
            let D = e => {
                e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            };

            function G() {
                return (G = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function N(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function B(e, t) {
                return "undefined" == typeof window ? (0, l.useEffect)(e, t) : (0, l.useLayoutEffect)(e, t)
            }
            let j = (0, l.createContext)(null),
                V = (0, l.createContext)(null),
                R = (0, l.forwardRef)(function(e, t) {
                    var i;
                    let {
                        className: s,
                        tag: r = "div",
                        wrapperTag: a = "div",
                        children: n,
                        onSwiper: o,
                        ...d
                    } = void 0 === e ? {} : e, c = !1, [u, p] = (0, l.useState)("swiper"), [h, f] = (0, l.useState)(null), [m, g] = (0, l.useState)(!1), v = (0, l.useRef)(!1), w = (0, l.useRef)(null), b = (0, l.useRef)(null), y = (0, l.useRef)(null), S = (0, l.useRef)(null), T = (0, l.useRef)(null), E = (0, l.useRef)(null), x = (0, l.useRef)(null), M = (0, l.useRef)(null), {
                        params: P,
                        passedParams: j,
                        rest: R,
                        events: F
                    } = function(e, t) {
                        void 0 === e && (e = {}), void 0 === t && (t = !0);
                        let i = {
                                on: {}
                            },
                            s = {},
                            r = {};
                        O(i, C), i._emitClasses = !0, i.init = !1;
                        let a = {},
                            l = k.map(e => e.replace(/_/, ""));
                        return Object.keys(Object.assign({}, e)).forEach(n => {
                            void 0 !== e[n] && (l.indexOf(n) >= 0 ? L(e[n]) ? (i[n] = {}, r[n] = {}, O(i[n], e[n]), O(r[n], e[n])) : (i[n] = e[n], r[n] = e[n]) : 0 === n.search(/on[A-Z]/) && "function" == typeof e[n] ? t ? s[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n] : i.on[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n] : a[n] = e[n])
                        }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                            !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
                        }), {
                            params: i,
                            passedParams: r,
                            rest: a,
                            events: s
                        }
                    }(d), {
                        slides: H,
                        slots: q
                    } = function(e) {
                        let t = [],
                            i = {
                                "container-start": [],
                                "container-end": [],
                                "wrapper-start": [],
                                "wrapper-end": []
                            };
                        return l.Children.toArray(e).forEach(e => {
                            if (N(e)) t.push(e);
                            else if (e.props && e.props.slot && i[e.props.slot]) i[e.props.slot].push(e);
                            else if (e.props && e.props.children) {
                                let s = function e(t) {
                                    let i = [];
                                    return l.Children.toArray(t).forEach(t => {
                                        N(t) ? i.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => i.push(e))
                                    }), i
                                }(e.props.children);
                                s.length > 0 ? s.forEach(e => t.push(e)) : i["container-end"].push(e)
                            } else i["container-end"].push(e)
                        }), {
                            slides: t,
                            slots: i
                        }
                    }(n), W = () => {
                        g(!m)
                    };
                    Object.assign(P.on, {
                        _containerClasses(e, t) {
                            p(t)
                        }
                    });
                    let Y = () => {
                        Object.assign(P.on, F), c = !0;
                        let e = { ...P
                        };
                        if (delete e.wrapperClass, b.current = new _(e), b.current.virtual && b.current.params.virtual.enabled) {
                            b.current.virtual.slides = H;
                            let e = {
                                cache: !1,
                                slides: H,
                                renderExternal: f,
                                renderExternalUpdate: !1
                            };
                            O(b.current.params.virtual, e), O(b.current.originalParams.virtual, e)
                        }
                    };
                    w.current || Y(), b.current && b.current.on("_beforeBreakpoint", W);
                    let X = () => {
                            !c && F && b.current && Object.keys(F).forEach(e => {
                                b.current.on(e, F[e])
                            })
                        },
                        U = () => {
                            F && b.current && Object.keys(F).forEach(e => {
                                b.current.off(e, F[e])
                            })
                        };
                    return (0, l.useEffect)(() => () => {
                        b.current && b.current.off("_beforeBreakpoint", W)
                    }), (0, l.useEffect)(() => {
                        !v.current && b.current && (b.current.emitSlidesClasses(), v.current = !0)
                    }), B(() => {
                        if (t && (t.current = w.current), w.current) return b.current.destroyed && Y(),
                            function(e, t) {
                                let {
                                    el: i,
                                    nextEl: s,
                                    prevEl: r,
                                    paginationEl: a,
                                    scrollbarEl: l,
                                    swiper: n
                                } = e;
                                A(t) && s && r && (n.params.navigation.nextEl = s, n.originalParams.navigation.nextEl = s, n.params.navigation.prevEl = r, n.originalParams.navigation.prevEl = r), I(t) && a && (n.params.pagination.el = a, n.originalParams.pagination.el = a), z(t) && l && (n.params.scrollbar.el = l, n.originalParams.scrollbar.el = l), n.init(i)
                            }({
                                el: w.current,
                                nextEl: T.current,
                                prevEl: E.current,
                                paginationEl: x.current,
                                scrollbarEl: M.current,
                                swiper: b.current
                            }, P), o && o(b.current), () => {
                                b.current && !b.current.destroyed && b.current.destroy(!0, !1)
                            }
                    }, []), B(() => {
                        X();
                        let e = function(e, t, i, s, r) {
                            let a = [];
                            if (!t) return a;
                            let l = e => {
                                0 > a.indexOf(e) && a.push(e)
                            };
                            if (i && s) {
                                let e = s.map(r),
                                    t = i.map(r);
                                e.join("") !== t.join("") && l("children"), s.length !== i.length && l("children")
                            }
                            return k.filter(e => "_" === e[0]).map(e => e.replace(/_/, "")).forEach(i => {
                                if (i in e && i in t) {
                                    if (L(e[i]) && L(t[i])) {
                                        let s = Object.keys(e[i]),
                                            r = Object.keys(t[i]);
                                        s.length !== r.length ? l(i) : (s.forEach(s => {
                                            e[i][s] !== t[i][s] && l(i)
                                        }), r.forEach(s => {
                                            e[i][s] !== t[i][s] && l(i)
                                        }))
                                    } else e[i] !== t[i] && l(i)
                                }
                            }), a
                        }(j, y.current, H, S.current, e => e.key);
                        return y.current = j, S.current = H, e.length && b.current && !b.current.destroyed && function(e) {
                            let t, i, s, r, a, l, n, o, {
                                    swiper: d,
                                    slides: c,
                                    passedParams: u,
                                    changedParams: p,
                                    nextEl: h,
                                    prevEl: f,
                                    scrollbarEl: m,
                                    paginationEl: g
                                } = e,
                                v = p.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e),
                                {
                                    params: w,
                                    pagination: b,
                                    navigation: y,
                                    scrollbar: S,
                                    virtual: T,
                                    thumbs: E
                                } = d;
                            p.includes("thumbs") && u.thumbs && u.thumbs.swiper && w.thumbs && !w.thumbs.swiper && (t = !0), p.includes("controller") && u.controller && u.controller.control && w.controller && !w.controller.control && (i = !0), p.includes("pagination") && u.pagination && (u.pagination.el || g) && (w.pagination || !1 === w.pagination) && b && !b.el && (s = !0), p.includes("scrollbar") && u.scrollbar && (u.scrollbar.el || m) && (w.scrollbar || !1 === w.scrollbar) && S && !S.el && (r = !0), p.includes("navigation") && u.navigation && (u.navigation.prevEl || f) && (u.navigation.nextEl || h) && (w.navigation || !1 === w.navigation) && y && !y.prevEl && !y.nextEl && (a = !0);
                            let x = e => {
                                d[e] && (d[e].destroy(), "navigation" === e ? (d.isElement && (d[e].prevEl.remove(), d[e].nextEl.remove()), w[e].prevEl = void 0, w[e].nextEl = void 0, d[e].prevEl = void 0, d[e].nextEl = void 0) : (d.isElement && d[e].el.remove(), w[e].el = void 0, d[e].el = void 0))
                            };
                            p.includes("loop") && d.isElement && (w.loop && !u.loop ? l = !0 : !w.loop && u.loop ? n = !0 : o = !0), v.forEach(e => {
                                if (L(w[e]) && L(u[e])) Object.assign(w[e], u[e]), ("navigation" === e || "pagination" === e || "scrollbar" === e) && "enabled" in u[e] && !u[e].enabled && x(e);
                                else {
                                    let t = u[e];
                                    (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && x(e): w[e] = u[e]
                                }
                            }), v.includes("controller") && !i && d.controller && d.controller.control && w.controller && w.controller.control && (d.controller.control = w.controller.control), p.includes("children") && c && T && w.virtual.enabled ? (T.slides = c, T.update(!0)) : p.includes("virtual") && T && w.virtual.enabled && (c && (T.slides = c), T.update(!0)), p.includes("children") && c && w.loop && (o = !0), t && E.init() && E.update(!0), i && (d.controller.control = w.controller.control), s && (d.isElement && (!g || "string" == typeof g) && ((g = document.createElement("div")).classList.add("swiper-pagination"), g.part.add("pagination"), d.el.appendChild(g)), g && (w.pagination.el = g), b.init(), b.render(), b.update()), r && (d.isElement && (!m || "string" == typeof m) && ((m = document.createElement("div")).classList.add("swiper-scrollbar"), m.part.add("scrollbar"), d.el.appendChild(m)), m && (w.scrollbar.el = m), S.init(), S.updateSize(), S.setTranslate()), a && (d.isElement && (h && "string" != typeof h || ((h = document.createElement("div")).classList.add("swiper-button-next"), h.innerHTML = d.hostEl.constructor.nextButtonSvg, h.part.add("button-next"), d.el.appendChild(h)), f && "string" != typeof f || ((f = document.createElement("div")).classList.add("swiper-button-prev"), f.innerHTML = d.hostEl.constructor.prevButtonSvg, f.part.add("button-prev"), d.el.appendChild(f))), h && (w.navigation.nextEl = h), f && (w.navigation.prevEl = f), y.init(), y.update()), p.includes("allowSlideNext") && (d.allowSlideNext = u.allowSlideNext), p.includes("allowSlidePrev") && (d.allowSlidePrev = u.allowSlidePrev), p.includes("direction") && d.changeDirection(u.direction, !1), (l || o) && d.loopDestroy(), (n || o) && d.loopCreate(), d.update()
                        }({
                            swiper: b.current,
                            slides: H,
                            passedParams: j,
                            changedParams: e,
                            nextEl: T.current,
                            prevEl: E.current,
                            scrollbarEl: M.current,
                            paginationEl: x.current
                        }), () => {
                            U()
                        }
                    }), B(() => {
                        D(b.current)
                    }, [h]), l.createElement(r, G({
                        ref: w,
                        className: $(`${u}${s?` ${s}`:""}`)
                    }, R), l.createElement(V.Provider, {
                        value: b.current
                    }, q["container-start"], l.createElement(a, {
                        className: (void 0 === (i = P.wrapperClass) && (i = ""), i) ? i.includes("swiper-wrapper") ? i : `swiper-wrapper ${i}` : "swiper-wrapper"
                    }, q["wrapper-start"], P.virtual ? function(e, t, i) {
                        if (!i) return null;
                        let s = e => {
                                let i = e;
                                return e < 0 ? i = t.length + e : i >= t.length && (i -= t.length), i
                            },
                            r = e.isHorizontal() ? {
                                [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                            } : {
                                top: `${i.offset}px`
                            },
                            {
                                from: a,
                                to: n
                            } = i,
                            o = e.params.loop ? -t.length : 0,
                            d = e.params.loop ? 2 * t.length : t.length,
                            c = [];
                        for (let e = o; e < d; e += 1) e >= a && e <= n && c.push(t[s(e)]);
                        return c.map((t, i) => l.cloneElement(t, {
                            swiper: e,
                            style: r,
                            key: `slide-${i}`
                        }))
                    }(b.current, H, h) : H.map((e, t) => l.cloneElement(e, {
                        swiper: b.current,
                        swiperSlideIndex: t
                    })), q["wrapper-end"]), A(P) && l.createElement(l.Fragment, null, l.createElement("div", {
                        ref: E,
                        className: "swiper-button-prev"
                    }), l.createElement("div", {
                        ref: T,
                        className: "swiper-button-next"
                    })), z(P) && l.createElement("div", {
                        ref: M,
                        className: "swiper-scrollbar"
                    }), I(P) && l.createElement("div", {
                        ref: x,
                        className: "swiper-pagination"
                    }), q["container-end"]))
                });
            R.displayName = "Swiper";
            let F = (0, l.forwardRef)(function(e, t) {
                let {
                    tag: i = "div",
                    children: s,
                    className: r = "",
                    swiper: a,
                    zoom: n,
                    lazy: o,
                    virtualIndex: d,
                    swiperSlideIndex: c,
                    ...u
                } = void 0 === e ? {} : e, p = (0, l.useRef)(null), [h, f] = (0, l.useState)("swiper-slide"), [m, g] = (0, l.useState)(!1);

                function v(e, t, i) {
                    t === p.current && f(i)
                }
                B(() => {
                    if (void 0 !== c && (p.current.swiperSlideIndex = c), t && (t.current = p.current), p.current && a) {
                        if (a.destroyed) {
                            "swiper-slide" !== h && f("swiper-slide");
                            return
                        }
                        return a.on("_slideClass", v), () => {
                            a && a.off("_slideClass", v)
                        }
                    }
                }), B(() => {
                    a && p.current && !a.destroyed && f(a.getSlideClasses(p.current))
                }, [a]);
                let w = {
                        isActive: h.indexOf("swiper-slide-active") >= 0,
                        isVisible: h.indexOf("swiper-slide-visible") >= 0,
                        isPrev: h.indexOf("swiper-slide-prev") >= 0,
                        isNext: h.indexOf("swiper-slide-next") >= 0
                    },
                    b = () => "function" == typeof s ? s(w) : s;
                return l.createElement(i, G({
                    ref: p,
                    className: $(`${h}${r?` ${r}`:""}`),
                    "data-swiper-slide-index": d,
                    onLoad: () => {
                        g(!0)
                    }
                }, u), n && l.createElement(j.Provider, {
                    value: w
                }, l.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof n ? n : void 0
                }, b(), o && !m && l.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !n && l.createElement(j.Provider, {
                    value: w
                }, b(), o && !m && l.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            });
            F.displayName = "SwiperSlide"
        }
    }
]);
//# sourceMappingURL=2685-5d93fd7d06fe4581.js.map