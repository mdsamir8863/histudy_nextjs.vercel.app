"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9658], {
        13367: function(e, t, i) {
            var n = i(85893),
                s = i(41664),
                r = i.n(s);
            t.Z = e => {
                let {
                    title: t,
                    text: i
                } = e;
                return (0, n.jsx)("div", {
                    className: "rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1",
                    children: (0, n.jsx)("div", {
                        className: "container",
                        children: (0, n.jsx)("div", {
                            className: "row",
                            children: (0, n.jsx)("div", {
                                className: "col-lg-12",
                                children: (0, n.jsxs)("div", {
                                    className: "breadcrumb-inner text-center",
                                    children: [(0, n.jsx)("h2", {
                                        className: "title",
                                        children: t
                                    }), (0, n.jsxs)("ul", {
                                        className: "page-list",
                                        children: [(0, n.jsx)("li", {
                                            className: "rbt-breadcrumb-item",
                                            children: (0, n.jsx)(r(), {
                                                href: "/",
                                                children: "Home"
                                            })
                                        }), (0, n.jsx)("li", {
                                            children: (0, n.jsx)("div", {
                                                className: "icon-right",
                                                children: (0, n.jsx)("i", {
                                                    className: "feather-chevron-right"
                                                })
                                            })
                                        }), (0, n.jsx)("li", {
                                            className: "rbt-breadcrumb-item active",
                                            children: i
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        },
        56364: function(e, t, i) {
            var n = i(85893),
                s = i(41664),
                r = i.n(s),
                a = i(70840);
            t.Z = () => (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(a.Z, {}), (0, n.jsx)("div", {
                    className: "copyright-area copyright-style-1 ptb--20",
                    children: (0, n.jsx)("div", {
                        className: "container",
                        children: (0, n.jsxs)("div", {
                            className: "row align-items-center",
                            children: [(0, n.jsx)("div", {
                                className: "col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12",
                                children: (0, n.jsxs)("p", {
                                    className: "rbt-link-hover text-center text-lg-start",
                                    children: ["Copyright \xa9 2024", " ", (0, n.jsx)(r(), {
                                        href: "https://themeforest.net/user/rbt-themes",
                                        children: "Rainbow-Themes."
                                    }), " ", "All Rights Reserved"]
                                })
                            }), (0, n.jsx)("div", {
                                className: "col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12",
                                children: (0, n.jsxs)("ul", {
                                    className: "copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10",
                                    children: [(0, n.jsx)("li", {
                                        children: (0, n.jsx)(r(), {
                                            href: "#",
                                            children: "Terms of service"
                                        })
                                    }), (0, n.jsx)("li", {
                                        children: (0, n.jsx)(r(), {
                                            href: "/pages/privacy-policy",
                                            children: "Privacy policy"
                                        })
                                    }), (0, n.jsx)("li", {
                                        children: (0, n.jsx)(r(), {
                                            href: "#",
                                            children: "Subscription"
                                        })
                                    }), (0, n.jsx)("li", {
                                        children: (0, n.jsx)(r(), {
                                            href: "#",
                                            children: "Login & Register"
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                })]
            })
        },
        57610: function(e, t, i) {
            var n = i(85893),
                s = i(41664),
                r = i.n(s);
            t.Z = e => {
                let {
                    classOne: t,
                    title: i,
                    footerType: s
                } = e;
                return (0, n.jsx)("div", {
                    className: t,
                    children: (0, n.jsxs)("div", {
                        className: "footer-widget",
                        children: [(0, n.jsx)("h5", {
                            className: "ft-title",
                            children: i
                        }), (0, n.jsx)("ul", {
                            className: "ft-link",
                            children: s.map((e, t) => (0, n.jsx)("li", {
                                children: (0, n.jsx)(r(), {
                                    href: e.link,
                                    children: e.text
                                })
                            }, t))
                        })]
                    })
                })
            }
        },
        11532: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return c
                }
            });
            var n = i(85893),
                s = i(41664),
                r = i.n(s),
                a = JSON.parse('{"categoryItemOne":[{"text":"Web Design","link":"#"},{"text":"Art","link":"#"},{"text":"Figma","link":"#"},{"text":"Adobe","link":"#"},{"text":"Math","link":"#"}],"categoryItemTwo":[{"text":"Photo","link":"#"},{"text":"English","link":"#"},{"text":"Figma","link":"#"},{"text":"Web Development","link":"#"},{"text":"Read","link":"#"}],"categoryItemThree":[{"text":"Child List 01","link":"#"},{"text":"Child List 09","link":"#"},{"text":"Child List 02","link":"#"},{"text":"Child List 10","link":"#"},{"text":"Child List 03","link":"#"},{"text":"Child List 11","link":"#"},{"text":"Child List 04","link":"#"},{"text":"Child List 12","link":"#"},{"text":"Child List 05","link":"#"},{"text":"Child List 13","link":"#"},{"text":"Child List 06","link":"#"},{"text":"Child List 14","link":"#"},{"text":"Child List 07","link":"#"},{"text":"Child List 15","link":"#"},{"text":"Child List 08","link":"#"}]}'),
                l = e => {
                    let {
                        title: t,
                        CategoryData: i,
                        CategoryNum: s,
                        isActive: a
                    } = e;
                    return (0, n.jsxs)("li", {
                        className: "dropdown-parent-list ".concat(a ? "active" : ""),
                        children: [(0, n.jsx)(r(), {
                            href: "#",
                            children: t
                        }), (0, n.jsx)("div", {
                            className: "dropdown-child-wrapper",
                            children: (0, n.jsx)("div", {
                                className: "child-inner",
                                children: i && s.map((e, t) => (0, n.jsx)("div", {
                                    className: "dropdown-child-list",
                                    children: (0, n.jsx)(r(), {
                                        href: e.link,
                                        children: e.text
                                    })
                                }, t))
                            })
                        })]
                    })
                },
                c = () => (0, n.jsxs)("div", {
                    className: "rbt-category-menu-wrapper rbt-category-update",
                    children: [(0, n.jsxs)("div", {
                        className: "rbt-category-btn",
                        children: [(0, n.jsxs)("div", {
                            className: "rbt-offcanvas-trigger md-size icon",
                            children: [(0, n.jsx)("span", {
                                className: "d-none d-xl-block",
                                children: (0, n.jsx)("i", {
                                    className: "feather-grid"
                                })
                            }), (0, n.jsx)("i", {
                                title: "Category",
                                className: "feather-grid d-block d-xl-none"
                            })]
                        }), (0, n.jsx)("span", {
                            className: "category-text d-none d-xl-block",
                            children: "Category"
                        })]
                    }), (0, n.jsx)("div", {
                        className: "update-category-dropdown",
                        children: (0, n.jsx)("div", {
                            className: "inner",
                            children: (0, n.jsxs)("ul", {
                                className: "dropdown-parent-wrapper",
                                children: [(0, n.jsx)(l, {
                                    title: "Course School",
                                    isActive: !1,
                                    CategoryData: a,
                                    CategoryNum: a.categoryItemOne
                                }), (0, n.jsx)(l, {
                                    title: "Online School",
                                    isActive: !1,
                                    CategoryData: a,
                                    CategoryNum: a.categoryItemTwo
                                }), (0, n.jsx)(l, {
                                    title: "kindergarten",
                                    isActive: !1,
                                    CategoryData: a,
                                    CategoryNum: a.categoryItemThree
                                }), (0, n.jsx)("li", {
                                    className: "dropdown-parent-list",
                                    children: (0, n.jsx)(r(), {
                                        href: "#",
                                        children: "Classic LMS"
                                    })
                                })]
                            })
                        })
                    })]
                })
        },
        18886: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return u
                }
            });
            var n = i(85893),
                s = i(11163),
                r = i(8367),
                a = i(83981),
                l = i(67294),
                c = i(41664),
                o = i.n(c),
                d = i(25675),
                h = i.n(d),
                x = i(27984),
                m = i(53417),
                j = i(11532),
                g = i(96948),
                p = i(73914),
                k = e => {
                    let {
                        headerType: t,
                        gapSpaceBetween: i,
                        sticky: s,
                        headerSticky: r,
                        navigationEnd: a,
                        container: c
                    } = e, [d, k] = (0, l.useState)(!1);
                    return (0, l.useEffect)(() => {
                        let e = () => {
                            window.scrollY > 0 ? k(!0) : k(!1)
                        };
                        return window.addEventListener("scroll", e), () => {
                            window.removeEventListener("scroll", e)
                        }
                    }, []), (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("div", {
                            className: "rbt-header-wrapper ".concat(i, " ").concat(s, "  ").concat(!t && d ? "".concat(r) : ""),
                            children: [(0, n.jsx)("div", {
                                className: "".concat(c),
                                children: (0, n.jsxs)("div", {
                                    className: "mainbar-row ".concat(a, " align-items-center"),
                                    children: [(0, n.jsxs)("div", {
                                        className: "header-left rbt-header-content",
                                        children: [(0, n.jsx)("div", {
                                            className: "header-info",
                                            children: (0, n.jsx)("div", {
                                                className: "logo",
                                                children: (0, n.jsx)(o(), {
                                                    href: "/",
                                                    children: (0, n.jsx)(h(), {
                                                        src: p.Z,
                                                        width: 152,
                                                        height: 50,
                                                        priority: !0,
                                                        alt: "Education Logo Images"
                                                    })
                                                })
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "header-info d-none d-lg-block",
                                            children: (0, n.jsx)(j.Z, {})
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: "rbt-main-navigation d-none d-xl-block",
                                        children: (0, n.jsx)(g.Z, {})
                                    }), (0, n.jsx)(x.Z, {
                                        userType: "Admin",
                                        btnText: "Enroll Now",
                                        btnClass: "rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
                                    })]
                                })
                            }), (0, n.jsx)(m.Z, {})]
                        })
                    })
                },
                b = i(17192),
                u = e => {
                    let {
                        headerSticky: t
                    } = e, i = (0, s.useRouter)();
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(b.Z, {}), (0, n.jsxs)("header", {
                            className: "rbt-header rbt-header-10",
                            children: ["/01-main-demo" === i.pathname ? (0, n.jsx)(a.Z, {}) : (0, n.jsx)(r.Z, {
                                bgColor: "bg-not-transparent bg-color-darker",
                                gapSpaceBetween: "header-space-betwween",
                                container: "container-fluid",
                                flexDirection: "",
                                btnClass: "rbt-switch-btn btn-gradient btn-xs",
                                btnText: "Call us now"
                            }), (0, n.jsx)(k, {
                                headerSticky: t,
                                sticky: "header-sticky",
                                container: "container-fluid",
                                gapSpaceBetween: "header-space-betwween",
                                navigationEnd: "rbt-navigation-start"
                            })]
                        })]
                    })
                }
        },
        83981: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return d
                }
            });
            var n = i(85893),
                s = i(25675),
                r = i.n(s),
                a = i(41664),
                l = i.n(a),
                c = {
                    src: "/_next/static/media/hand-emojji.82c4e269.svg",
                    height: 36,
                    width: 36,
                    blurWidth: 0,
                    blurHeight: 0
                },
                o = i(87177),
                d = () => {
                    let {
                        toggle: e,
                        setToggle: t
                    } = (0, o.bp)();
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("div", {
                            className: "rbt-header-campaign rbt-header-campaign-1 rbt-header-top-news bg-image1 ".concat(e ? "" : "deactive"),
                            children: [(0, n.jsx)("div", {
                                className: "wrapper",
                                children: (0, n.jsx)("div", {
                                    className: "container",
                                    children: (0, n.jsx)("div", {
                                        className: "row",
                                        children: (0, n.jsx)("div", {
                                            className: "col-lg-12",
                                            children: (0, n.jsxs)("div", {
                                                className: "inner justify-content-center",
                                                children: [(0, n.jsxs)("div", {
                                                    className: "content",
                                                    children: [(0, n.jsx)("span", {
                                                        className: "rbt-badge variation-02 bg-color-primary color-white radius-round",
                                                        children: "Limited Time Offer"
                                                    }), (0, n.jsxs)("span", {
                                                        className: "news-text color-white-off",
                                                        children: [(0, n.jsx)(r(), {
                                                            src: c,
                                                            alt: "Hand Emojji Images"
                                                        }), " Intro price. Get Histudy for Big Sale -95% off."]
                                                    })]
                                                }), (0, n.jsx)("div", {
                                                    className: "right-button",
                                                    children: (0, n.jsx)(l(), {
                                                        className: "rbt-btn-link color-white",
                                                        href: "https://themeforest.net/checkout/from_item/42846507?license=regular",
                                                        children: (0, n.jsxs)("span", {
                                                            children: ["Purchase Now ", (0, n.jsx)("i", {
                                                                className: "feather-arrow-right"
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                })
                            }), (0, n.jsx)("div", {
                                className: "icon-close position-right",
                                children: (0, n.jsx)("button", {
                                    className: "rbt-round-btn btn-white-off bgsection-activation",
                                    onClick: () => t(!e),
                                    children: (0, n.jsx)("i", {
                                        className: "feather-x"
                                    })
                                })
                            })]
                        })
                    })
                }
        },
        93709: function(e, t, i) {
            i.r(t);
            var n = i(85893),
                s = i(9008),
                r = i.n(s);
            t.default = e => {
                let {
                    title: t
                } = e;
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(r(), {
                        children: [(0, n.jsx)("title", {
                            children: t
                        }), (0, n.jsx)("meta", {
                            name: "description",
                            content: "Page Description"
                        }), (0, n.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }), (0, n.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })]
                    })
                })
            }
        },
        98478: function(e) {
            e.exports = JSON.parse('{"footerOne":[{"description":" We’re always in search for talented and motivated people.Don’t be shy introduce yourself!","phone":"(406) 555-0120","mail":"rainbow@example.com","address":"North America, USA","usefulLinks":[{"text":"Marketplace","link":"/12-marketplace"},{"text":"kindergarten","link":"/04-kindergarten"},{"text":"University","link":"/13-university-classic"},{"text":"Classic Lms","link":"/05-classic-lms"},{"text":"FAQ","link":"/pages/faqs"}],"ourCompany":[{"text":"Contact Us","link":"/contact"},{"text":"Become Teacher","link":"/become-a-teacher"},{"text":"Blog","link":"/blog-list"},{"text":"Instructor","link":"/elements/team"},{"text":"Events","link":"/pages/event-list"}],"socialLink":[{"icon":"feather-facebook","link":"https://www.facebook.com/"},{"icon":"feather-twitter","link":"https://www.twitter.com"},{"icon":"feather-instagram","link":"https://www.instagram.com/"},{"icon":"feather-linkedin","link":"https://www.linkdin.com/"}]}],"footerTwo":[{"description":"We’re always in search for talented and motivated people.Don’t be shy introduce yourself!","descriptionTwo":"2000+ Our students are subscribe Around the World.Don’t be shy introduce yourself!","phone":"(406) 555-0120","mail":"admin@example.com","address":"North America, USA","usefulLinks":[{"text":"Marketplace","link":"/12-marketplace"},{"text":"kindergarten","link":"/04-kindergarten"},{"text":"University","link":"/13-university-classic"},{"text":"Classic Lms","link":"/05-classic-lms"},{"text":"FAQ","link":"/pages/faqs"}],"ourCompany":[{"text":"Contact Us","link":"/contact"},{"text":"Become Teacher","link":"/become-a-teacher"},{"text":"Blog","link":"/blog-list"},{"text":"Instructor","link":"/elements/team"},{"text":"Events","link":"/pages/event-list"}],"socialLink":[{"icon":"feather-facebook","link":"https://www.facebook.com/"},{"icon":"feather-twitter","link":"https://www.twitter.com"},{"icon":"feather-instagram","link":"https://www.instagram.com/"},{"icon":"feather-linkedin","link":"https://www.linkdin.com/"}]}]}')
        }
    }
]);
//# sourceMappingURL=9658-20dc0f58d1673e99.js.map