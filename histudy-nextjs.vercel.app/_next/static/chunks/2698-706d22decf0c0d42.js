"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2698], {
        54363: function(e, s, t) {
            var a = t(85893),
                c = t(25675),
                r = t.n(c),
                n = t(41664),
                i = t.n(n),
                l = t(73914),
                d = t(96948),
                o = t(87177);
            s.Z = () => {
                let {
                    mobile: e,
                    setMobile: s
                } = (0, o.bp)();
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: "popup-mobile-menu ".concat(e ? "" : "active"),
                        children: (0, a.jsxs)("div", {
                            className: "inner-wrapper",
                            children: [(0, a.jsxs)("div", {
                                className: "inner-top",
                                children: [(0, a.jsxs)("div", {
                                    className: "content",
                                    children: [(0, a.jsx)("div", {
                                        className: "logo",
                                        children: (0, a.jsx)(i(), {
                                            href: "/",
                                            children: (0, a.jsx)(r(), {
                                                src: l.Z,
                                                width: 137,
                                                height: 45,
                                                alt: "Education Logo Images"
                                            })
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "rbt-btn-close",
                                        children: (0, a.jsx)("button", {
                                            className: "close-button rbt-round-btn",
                                            onClick: () => s(!e),
                                            children: (0, a.jsx)("i", {
                                                className: "feather-x"
                                            })
                                        })
                                    })]
                                }), (0, a.jsx)("p", {
                                    className: "description",
                                    children: "Histudy is a education website template. You can customize all."
                                }), (0, a.jsxs)("ul", {
                                    className: "navbar-top-left rbt-information-list justify-content-start",
                                    children: [(0, a.jsx)("li", {
                                        children: (0, a.jsxs)(i(), {
                                            href: "mailto:hello@example.com",
                                            children: [(0, a.jsx)("i", {
                                                className: "feather-mail"
                                            }), "example@gmail.com"]
                                        })
                                    }), (0, a.jsx)("li", {
                                        children: (0, a.jsxs)(i(), {
                                            href: "#",
                                            children: [(0, a.jsx)("i", {
                                                className: "feather-phone"
                                            }), "(302) 555-0107"]
                                        })
                                    })]
                                })]
                            }), (0, a.jsx)(d.Z, {}), (0, a.jsxs)("div", {
                                className: "mobile-menu-bottom",
                                children: [(0, a.jsx)("div", {
                                    className: "rbt-btn-wrapper mb--20",
                                    children: (0, a.jsx)(i(), {
                                        className: "rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center",
                                        href: "#",
                                        children: (0, a.jsx)("span", {
                                            children: "Enroll Now"
                                        })
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "social-share-wrapper",
                                    children: [(0, a.jsx)("span", {
                                        className: "rbt-short-title d-block",
                                        children: "Find With Us"
                                    }), (0, a.jsxs)("ul", {
                                        className: "social-icon social-default transparent-with-border justify-content-start mt--20",
                                        children: [(0, a.jsx)("li", {
                                            children: (0, a.jsx)(i(), {
                                                href: "https://www.facebook.com/",
                                                children: (0, a.jsx)("i", {
                                                    className: "feather-facebook"
                                                })
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(i(), {
                                                href: "https://www.twitter.com",
                                                children: (0, a.jsx)("i", {
                                                    className: "feather-twitter"
                                                })
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(i(), {
                                                href: "https://www.instagram.com/",
                                                children: (0, a.jsx)("i", {
                                                    className: "feather-instagram"
                                                })
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(i(), {
                                                href: "https://www.linkdin.com/",
                                                children: (0, a.jsx)("i", {
                                                    className: "feather-linkedin"
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
        },
        71658: function(e, s, t) {
            var a = t(85893),
                c = t(67294),
                r = t(11163),
                n = t(25675),
                i = t.n(n),
                l = t(41664),
                d = t.n(l),
                o = t(5152),
                h = t.n(o),
                m = t(9473),
                x = t(87177),
                j = t(49247);
            let p = () => {
                (0, r.useRouter)();
                let e = window.location.pathname,
                    s = (0, m.I0)(),
                    {
                        cart: t,
                        total_amount: n
                    } = (0, m.v9)(e => e.CartReducer),
                    {
                        cartToggle: l,
                        setCart: o
                    } = (0, x.bp)();
                return (0, c.useEffect)(() => {
                    s({
                        type: "COUNT_CART_TOTALS"
                    }), localStorage.setItem("hiStudy", JSON.stringify(t)), "/cart" === e && o(!0)
                }, [t, e]), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: "".concat(l ? "" : "cart-sidenav-menu-active"),
                        children: [(0, a.jsx)("div", {
                            className: "rbt-cart-side-menu ".concat(l ? "" : "side-menu-active"),
                            children: (0, a.jsxs)("div", {
                                className: "inner-wrapper",
                                children: [(0, a.jsx)("div", {
                                    className: "inner-top",
                                    children: (0, a.jsxs)("div", {
                                        className: "content",
                                        children: [(0, a.jsx)("div", {
                                            className: "title",
                                            children: (0, a.jsx)("h4", {
                                                className: "title mb--0",
                                                children: "Your shopping cart"
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "rbt-btn-close",
                                            id: "btn_sideNavClose",
                                            children: (0, a.jsx)("button", {
                                                className: "minicart-close-button rbt-round-btn",
                                                onClick: () => o(!l),
                                                children: (0, a.jsx)("i", {
                                                    className: "feather-x"
                                                })
                                            })
                                        })]
                                    })
                                }), (0, a.jsx)("nav", {
                                    className: "side-nav w-100",
                                    children: (0, a.jsx)("div", {
                                        className: "rbt-minicart-wrapper",
                                        children: t && t.map((e, t) => (0, a.jsxs)("li", {
                                            className: "minicart-item",
                                            children: [(0, a.jsx)("div", {
                                                className: "thumbnail",
                                                children: (0, a.jsx)(d(), {
                                                    href: e.product.title ? "/event-details/".concat(e.id) : "/course-details/".concat(e.id),
                                                    children: (0, a.jsx)(i(), {
                                                        src: e.product.courseImg || e.product.eventImg,
                                                        width: 80,
                                                        height: 64,
                                                        alt: "Product Images"
                                                    })
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "product-content",
                                                children: [(0, a.jsx)("h6", {
                                                    className: "title",
                                                    children: (0, a.jsx)(d(), {
                                                        href: e.product.title ? "/event-details/".concat(e.id) : "/course-details/".concat(e.id),
                                                        children: e.product.courseTitle || e.product.title
                                                    })
                                                }), (0, a.jsxs)("span", {
                                                    className: "quantity",
                                                    children: [e.amount, " *", (0, a.jsxs)("span", {
                                                        className: "price",
                                                        children: ["$", e.product.price]
                                                    })]
                                                })]
                                            }), (0, a.jsx)("div", {
                                                className: "close-btn",
                                                children: (0, a.jsx)("button", {
                                                    className: "rbt-round-btn",
                                                    onClick: () => s((0, j.Ir)(e.id)),
                                                    children: (0, a.jsx)("i", {
                                                        className: "feather-x"
                                                    })
                                                })
                                            })]
                                        }, t))
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "rbt-minicart-footer",
                                    children: [(0, a.jsx)("hr", {
                                        className: "mb--0"
                                    }), (0, a.jsxs)("div", {
                                        className: "rbt-cart-subttotal",
                                        children: [(0, a.jsx)("p", {
                                            className: "subtotal",
                                            children: (0, a.jsx)("strong", {
                                                children: "Subtotal:"
                                            })
                                        }), (0, a.jsxs)("p", {
                                            className: "price",
                                            children: ["$", n]
                                        })]
                                    }), (0, a.jsx)("hr", {
                                        className: "mb--0"
                                    }), (0, a.jsxs)("div", {
                                        className: "rbt-minicart-bottom mt--20",
                                        children: [(0, a.jsx)("div", {
                                            className: "view-cart-btn",
                                            children: (0, a.jsxs)(d(), {
                                                className: "rbt-btn btn-border icon-hover w-100 text-center",
                                                href: "/cart",
                                                children: [(0, a.jsx)("span", {
                                                    className: "btn-text",
                                                    children: "View Cart"
                                                }), (0, a.jsx)("span", {
                                                    className: "btn-icon",
                                                    children: (0, a.jsx)("i", {
                                                        className: "feather-arrow-right"
                                                    })
                                                })]
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "checkout-btn mt--20",
                                            children: (0, a.jsxs)(d(), {
                                                className: "rbt-btn btn-gradient icon-hover w-100 text-center",
                                                href: "/checkout",
                                                children: [(0, a.jsx)("span", {
                                                    className: "btn-text",
                                                    children: "Checkout"
                                                }), (0, a.jsx)("span", {
                                                    className: "btn-icon",
                                                    children: (0, a.jsx)("i", {
                                                        className: "feather-arrow-right"
                                                    })
                                                })]
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }), (0, a.jsx)(d(), {
                            className: "close_side_menu",
                            href: "#",
                            onClick: () => o(!l)
                        })]
                    })
                })
            };
            s.Z = h()(() => Promise.resolve(p), {
                ssr: !1
            })
        },
        49247: function(e, s, t) {
            t.d(s, {
                Ir: function() {
                    return r
                },
                Vn: function() {
                    return a
                },
                Yg: function() {
                    return c
                }
            });
            let a = (e, s, t) => async a => {
                    try {
                        a({
                            type: "CART_REQ"
                        }), a({
                            type: "ADD_TO_CART",
                            payload: {
                                id: e,
                                amount: s,
                                product: t
                            }
                        }), a({
                            type: "CART_REQ_OUT"
                        })
                    } catch (e) {
                        console.log(e.response), a({
                            type: "SET_CART_ERROR"
                        })
                    }
                },
                c = (e, s) => async t => {
                    try {
                        t({
                            type: "CART_REQ"
                        }), t({
                            type: "TOGGLE_CART_AMOUNT",
                            payload: {
                                id: e,
                                value: s
                            }
                        }), t({
                            type: "CART_REQ_OUT"
                        })
                    } catch (e) {
                        t({
                            type: "SET_CART_ERROR"
                        })
                    }
                },
                r = e => async s => {
                    try {
                        s({
                            type: "CART_REQ"
                        }), s({
                            type: "DELETE_CART_ITEM",
                            payload: e
                        }), s({
                            type: "CART_REQ_OUT"
                        })
                    } catch (e) {
                        s({
                            type: "SET_CART_ERROR"
                        })
                    }
                }
        }
    }
]);
//# sourceMappingURL=2698-706d22decf0c0d42.js.map