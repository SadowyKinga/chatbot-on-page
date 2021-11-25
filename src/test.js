var urlFragments = document.getElementById("chatbot-script");
const primaryValue = urlFragments.dataset.valueprimary;
const secondaryValue = urlFragments.dataset.valuesecondary;
function ideta_load_bot(t) {
    ideta_bot_action("load", t);
}
function ideta_bot_action(t, e) {
    var i,
        a = "block",
        n = "display",
        o = "style",
        c = "none",
        s = "innerHTML",
        r = "onclick",
        l = "localStorage",
        u = window,
        f = document,
        m = document.body,
        p = document.title,
        h = "ideta_";
    function b(t) {
        return document.getElementById(t);
    }
    function _(t) {
        document.body.removeChild(t);
    }
    function k() {
        var t = i ? ["auid=" + i] : [],
            e = document.cookie
                ? document.cookie.split("; ").map(function (t) {
                      return { k: (t = t.split("="))[0], v: t[1] };
                  })
                : [];
        return (
            [].forEach(function (i) {
                switch (i.st) {
                    case "c":
                        var a = e.find(function (t) {
                                return t.k === i.s;
                            }),
                            n = a && a.v;
                        break;
                    case "v":
                        n = window[i.s];
                        break;
                    case "l":
                        n = (function (t) {
                            try {
                                return window[l].getItem(t);
                            } catch (t) {}
                        })(i.s);
                }
                null != n && t.push(i.t + "=" + n);
            }),
            `https://chatbot.premiumhotel.pl/` + t.join("&")
        );
    }
    var g = b("ideta_" + "i"),
        v = b("ideta_" + "f"),
        y = b("ideta_" + "c");
    switch (t) {
        case "remove":
            g && _(g), v && _(v), y && _(y), (ideta_bll = ideta_oss = 0);
            break;
        case "show":
            g && (g[o][n] = "block"), v && (v[o][n] = a);
            break;
        case "hide":
            g && (g[o][n] = c), v && (v[o][n] = c), y && (y[o][n] = c);
            break;
        case "refresh":
            (B = b( + "ff")) && (B.src = k());
            break;
        case "load":
            if (ideta_oss) break;
            function w() {
                L || ideta_bll || 1 !== M || ((z.src = k()), (ideta_bll = !(L = !1)));
            }
            function C(t, e) {
                e.appendChild(t);
            }
            function E(t) {
                return document.createElement(t || "div");
            }
            function T() {
                1 === M ? ((Q[n] = "block"), (O[n] = "flex"), (K[n] = Y[n] = c), N()) : ((Q[n] = O[n] = c), (K[n] = a), z.url && z.contentWindow && z.contentWindow.postMessage("v2bnpga", d));
            }
            function I() {
                C(W, S),
                    C(F, S),
                    C(S, m),
                    C(z, H),
                    C(G, H),
                    L
                        ? ((V[n] = a),
                          (q[r] = function () {
                              (X[n] = a), (V[n] = a), (L = !1), w();
                          }),
                          C(j, P),
                          C(R, P),
                          C(U, P),
                          C(q, P),
                          C(P, H))
                        : w(),
                    C(H, m),
                    C(D, A),
                    C(J, A),
                    setTimeout(function () {
                        ideta_oss && C(A, m);
                    }, 2e3),
                    (ideta_lss = ideta_oss = !0);
            }
            function N() {
                (S.className = ""), clearInterval(x), (x = null), (document.title = document.title);
            }
            var x,
                B,
                L = !0,
                M = (B = "open" === e || !0 === e) ? 1 : -1,
                W = E("img"),
                j = E("img"),
                z = E("iframe"),
                S = E(),
                H = E(),
                P = E(),
                R = E(),
                U = E(),
                q = E(),
                A = E(),
                D = E(),
                F = E(),
                G = E(),
                J = E(),
                K = W[o],
                O = F[o],
                Q = H[o],
                V = z[o],
                X = P[o],
                Y = A[o];
            (z.frameBorder = "0"),
                (z.src = `https://chatbot.premiumhotel.pl/?primary=${primaryValue}&secondary=${secondaryValue}`),
                (S.id = h + "i"),
                (W.id = h + "ii"),
                (F.id = h + "ic"),
                (H.id = h + "f"),
                (z.id = h + "ff"),
                (G.id = h + "fc"),
                (P.id = h + "fm"),
                (j.id = h + "fi"),
                (R.id = h + "ft"),
                (U.id = h + "fx"),
                (q.id = h + "fb"),
                (A.id = h + "c"),
                (D.id = h + "ct"),
                (J.id = h + "cc"),
                (W.src = "https://marionnaud.sourdline.com/img/ClearTchat.png"),
                (F[s] = G[s] = J[s] = "✕"),
                (j.src = "https://marionnaud.sourdline.com/img/ClearTchat.png"),
                (R[s] = ""),
                (U[s] = ""),
                (D[s] = "W czym możemy Ci pomóc?"),
                (S[r] = G[r] = D[r] = function () {
                    (M *= -1), w(), T();
                }),
                (J[r] = function () {
                    Y[n] = c;
                }),
                T(),
                ideta_lss ? I() : (((B = E("link")).rel = "stylesheet"), (B.type = "text/css"), (B.href = "https://cdn.premiumhotel.pl/chatbot/styles.css"), C(B, f.getElementsByTagName("head")[0]), (B.onload = I)),
                u.addEventListener(
                    "message",
                    function (t) {
                        if ("string" == typeof t.data) {
                            var e,
                                i = t.data.split(";"),
                                a = ((t = i[0]), i[1]);
                            switch (t) {
                                case "z64tefu":
                                    (S.className = "pending"),
                                        (x =
                                            x ||
                                            setInterval(function () {
                                                (f.title = e ? p : "Nouveau Message !"), (e = !e);
                                            }, 2e3));
                                    break;
                                case "dj9y4b8":
                                    N();
                                    break;
                                case "k120eks":
                                    u.location = a;
                            }
                        }
                    },
                    (q[s] = "https://chatbot.premiumhotel.pl/")
                );
    }
}
var ideta_oss, ideta_lss, ideta_bll;
ideta_bot_action("load");
