"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8367], {
        8367: function(e, s, a) {
            a.d(s, {
                Z: function() {
                    return o
                }
            });
            var n = a(85893),
                i = a(25675),
                r = a.n(i),
                l = a(41664),
                c = a.n(l),
                d = JSON.parse('{"headerTopOne":[{"insFollowers":100,"fbFollowers":500,"type":"Followers","phone":"+1-202-555-0174","introPrice":"Intro price. Get Histudy for Big Sale -95% off.","badgeText":"Hot","limit":"Limited Time Offer","img":"/images/icons/hand-emojji.svg","language":[{"defaultTitle":"English","img":"/images/icons/en-us.png","link":"#","subLng":[{"name":"Fran\xe7ais","img":"/images/icons/fr.png","link":"#"},{"name":"Deutsch","img":"/images/icons/de.png","link":"#"}]}],"currency":[{"defaultCurrency":"USD","link":"#","subCurr":[{"currency":"EUR","link":"#"},{"currency":"GBP","link":"#"}]}]}]}'),
                t = a(87177),
                h = a(11163),
                o = e => {
                    let {
                        bgColor: s,
                        gapSpaceBetween: a,
                        container: i,
                        flexDirection: l
                    } = e, o = (0, h.useRouter)(), {
                        toggle: m,
                        setToggle: x
                    } = (0, t.bp)();
                    return (0, n.jsx)("div", {
                        className: "rbt-header-top rbt-header-top-1 ".concat(a, " ").concat(s, " top-expended-activation ").concat(m ? "" : "d-none"),
                        children: (0, n.jsx)("div", {
                            className: "".concat(i),
                            children: (0, n.jsxs)("div", {
                                className: "top-expended-wrapper",
                                children: [d && d.headerTopOne.map((e, s) => (0, n.jsxs)("div", {
                                    className: "top-expended-inner rbt-header-sec align-items-center ".concat(l),
                                    children: [(0, n.jsx)("div", {
                                        className: "rbt-header-sec-col rbt-header-left d-none d-xl-block",
                                        children: (0, n.jsx)("div", {
                                            className: "rbt-header-content",
                                            children: (0, n.jsx)("div", {
                                                className: "header-info",
                                                children: (0, n.jsxs)("ul", {
                                                    className: "rbt-information-list",
                                                    children: [(0, n.jsx)("li", {
                                                        children: (0, n.jsxs)(c(), {
                                                            href: "#",
                                                            children: [(0, n.jsx)("i", {
                                                                className: "fab fa-instagram"
                                                            }), e.insFollowers, "k", (0, n.jsx)("span", {
                                                                className: "d-none d-xxl-block",
                                                                children: e.type
                                                            })]
                                                        })
                                                    }), (0, n.jsx)("li", {
                                                        children: (0, n.jsxs)(c(), {
                                                            href: "#",
                                                            children: [(0, n.jsx)("i", {
                                                                className: "fab fa-facebook-square"
                                                            }), e.fbFollowers, "k", (0, n.jsx)("span", {
                                                                className: "d-none d-xxl-block",
                                                                children: e.type
                                                            })]
                                                        })
                                                    }), "/10-online-course" === o.pathname ? "" : (0, n.jsx)("li", {
                                                        children: (0, n.jsxs)(c(), {
                                                            href: "#",
                                                            children: [(0, n.jsx)("i", {
                                                                className: "feather-phone"
                                                            }), e.phone]
                                                        })
                                                    })]
                                                })
                                            })
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "rbt-header-sec-col rbt-header-center",
                                        children: (0, n.jsx)("div", {
                                            className: "rbt-header-content justify-content-start justify-content-xl-center",
                                            children: (0, n.jsx)("div", {
                                                className: "header-info",
                                                children: (0, n.jsx)("div", {
                                                    className: "rbt-header-top-news",
                                                    children: (0, n.jsx)("div", {
                                                        className: "inner",
                                                        children: (0, n.jsxs)("div", {
                                                            className: "content",
                                                            children: [(0, n.jsx)("span", {
                                                                className: "rbt-badge variation-02 bg-color-primary color-white radius-round",
                                                                children: e.badgeText
                                                            }), (0, n.jsxs)("span", {
                                                                className: "news-text",
                                                                children: [(0, n.jsx)(r(), {
                                                                    src: e.img,
                                                                    width: 22,
                                                                    height: 22,
                                                                    alt: "Hand Emojji Images"
                                                                }), e.introPrice]
                                                            })]
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "rbt-header-sec-col rbt-header-right mt_md--10 mt_sm--10",
                                        children: (0, n.jsxs)("div", {
                                            className: "rbt-header-content justify-content-start justify-content-lg-end",
                                            children: ["/10-online-course" === o.pathname ? "" : (0, n.jsx)("div", {
                                                className: "header-info d-none d-xl-block",
                                                children: (0, n.jsxs)("ul", {
                                                    className: "social-share-transparent",
                                                    children: [(0, n.jsx)("li", {
                                                        children: (0, n.jsx)(c(), {
                                                            href: "#",
                                                            children: (0, n.jsx)("i", {
                                                                className: "fab fa-facebook-f"
                                                            })
                                                        })
                                                    }), (0, n.jsx)("li", {
                                                        children: (0, n.jsx)(c(), {
                                                            href: "#",
                                                            children: (0, n.jsx)("i", {
                                                                className: "fab fa-twitter"
                                                            })
                                                        })
                                                    }), (0, n.jsx)("li", {
                                                        children: (0, n.jsx)(c(), {
                                                            href: "#",
                                                            children: (0, n.jsx)("i", {
                                                                className: "fab fa-linkedin-in"
                                                            })
                                                        })
                                                    }), (0, n.jsx)("li", {
                                                        children: (0, n.jsx)(c(), {
                                                            href: "#",
                                                            children: (0, n.jsx)("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    })]
                                                })
                                            }), "/10-online-course" === o.pathname ? "" : (0, n.jsx)("div", {
                                                className: "rbt-separator d-none d-xl-block"
                                            }), (0, n.jsx)("div", {
                                                className: "header-info",
                                                children: (0, n.jsx)("ul", {
                                                    className: "rbt-dropdown-menu switcher-language",
                                                    children: e.language.map((e, s) => (0, n.jsxs)("li", {
                                                        className: "has-child-menu",
                                                        children: [(0, n.jsxs)(c(), {
                                                            href: e.link,
                                                            children: [(0, n.jsx)(r(), {
                                                                className: "left-image",
                                                                src: e.img,
                                                                width: 20,
                                                                height: 13,
                                                                alt: "".concat(e.name, " Images")
                                                            }), (0, n.jsx)("span", {
                                                                className: "menu-item",
                                                                children: e.defaultTitle
                                                            }), (0, n.jsx)("i", {
                                                                className: "right-icon feather-chevron-down"
                                                            })]
                                                        }), (0, n.jsx)("ul", {
                                                            className: "sub-menu",
                                                            children: e.subLng.map((e, s) => (0, n.jsx)("li", {
                                                                children: (0, n.jsxs)(c(), {
                                                                    href: e.link,
                                                                    children: [(0, n.jsx)(r(), {
                                                                        className: "left-image",
                                                                        src: e.img,
                                                                        width: 20,
                                                                        height: 13,
                                                                        alt: "".concat(e.name, " Images")
                                                                    }), (0, n.jsx)("span", {
                                                                        className: "menu-item",
                                                                        children: e.name
                                                                    })]
                                                                })
                                                            }, s))
                                                        })]
                                                    }, s))
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "header-info",
                                                children: (0, n.jsx)("ul", {
                                                    className: "rbt-dropdown-menu currency-menu",
                                                    children: e.currency.map((e, s) => (0, n.jsxs)("li", {
                                                        className: "has-child-menu",
                                                        children: [(0, n.jsxs)(c(), {
                                                            href: e.link,
                                                            children: [(0, n.jsx)("span", {
                                                                className: "menu-item",
                                                                children: e.defaultCurrency
                                                            }), (0, n.jsx)("i", {
                                                                className: "right-icon feather-chevron-down"
                                                            })]
                                                        }), (0, n.jsx)("ul", {
                                                            className: "sub-menu hover-reverse",
                                                            children: e.subCurr.map((e, s) => (0, n.jsx)("li", {
                                                                children: (0, n.jsx)(c(), {
                                                                    href: e.link,
                                                                    children: (0, n.jsx)("span", {
                                                                        className: "menu-item",
                                                                        children: e.currency
                                                                    })
                                                                })
                                                            }, s))
                                                        })]
                                                    }, s))
                                                })
                                            })]
                                        })
                                    })]
                                }, s)), (0, n.jsx)("div", {
                                    className: "header-info",
                                    children: (0, n.jsx)("div", {
                                        className: "top-bar-expended d-block d-lg-none",
                                        children: (0, n.jsx)("button", {
                                            className: "topbar-expend-button rbt-round-btn",
                                            onClick: () => x(!m),
                                            children: (0, n.jsx)("i", {
                                                className: "feather-plus"
                                            })
                                        })
                                    })
                                })]
                            })
                        })
                    })
                }
        }
    }
]);
//# sourceMappingURL=8367-6afbc66a2e8ea2df.js.map