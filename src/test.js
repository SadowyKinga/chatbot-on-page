var urlFragments = document.getElementById("chatbot-script");
const primaryValue = urlFragments.dataset.valueprimary;
const secondaryValue = urlFragments.dataset.valuesecondary;
function chatbot_load(t) {
    chatbot_action("load", t);
}
function chatbot_action(t, e) {
    var i,
        a = "block",
        c = "none",
        m = document.body;
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
                                return t.k === i["innerHTML"];
                            }),
                            n = a && a.v;
                        break;
                    case "v":
                        n = window[i["innerHTML"]];
                        break;
                    case "l":
                        n = (function (t) {
                            try {
                                return window["localStorage"].getItem(t);
                            } catch (t) {}
                        })(i["innerHTML"]);
                }
                null != n && t.push(i.t + "=" + n);
            }),
            `https://chatbot.premiumhotel.pl/` + t.join("&")
        );
    }
    var g = b("chatbot_" + "i"),
        v = b("chatbot_" + "f"),
        y = b("chatbot_" + "c");
    switch (t) {
        case "remove":
            g && _(g), v && _(v), y && _(y), (chatbot_bll = chatbot_oss = 0);
            break;
        case "show":
            g && (g["style"]["display"] = "block"), v && (v["style"]["display"] = a);
            break;
        case "hide":
            g && (g["style"]["display"] = c), v && (v["style"]["display"] = c), y && (y["style"]["display"] = c);
            break;
        case "refresh":
            (B = b( + "ff")) && (B.src = k());
            break;
        case "load":
            if (chatbot_oss) break;
            function w() {
                L || chatbot_bll || 1 !== M || ((z.src = k()), (chatbot_bll = !(L = !1)));
            }
            function C(t, e) {
                e.appendChild(t);
            }
            function E(t) {
                return document.createElement(t || "div");
            }
            function T() {
                1 === M ? ((Q["display"] = "block"), (O["display"] = "flex"), (K["display"] = Y["display"] = "none"), N()) : ((Q["display"] = O["display"] = "none"), (K["display"] = "block"), z.url && z.contentWindow && z.contentWindow.postMessage("v2bnpga", d));
            }
            function I() {
                C(W, S),
                    C(F, S),
                    C(S, m),
                    C(z, H),
                    C(G, H),
                    L
                        ? ((V["display"] = a),
                          (q["onclick"] = function () {
                              (X["display"] = a), (V["display"] = a), (L = !1), w();
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
                        chatbot_oss && C(A, m);
                    }, 2e3),
                    (chatbot_lss = chatbot_oss = !0);
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
                K = W["style"],
                O = F["style"],
                Q = H["style"],
                V = z["style"],
                X = P["style"],
                Y = A["style"];
            (z.frameBorder = "0"),
                (z.src = `https://chatbot.premiumhotel.pl/?primary=${primaryValue}&secondary=${secondaryValue}`),
                (S.id = "chatbot_" + "i"),
                (W.id = "chatbot_" + "ii"),
                (F.id = "chatbot_" + "ic"),
                (H.id = "chatbot_" + "f"),
                (z.id = "chatbot_" + "ff"),
                (G.id = "chatbot_" + "fc"),
                (P.id = "chatbot_" + "fm"),
                (j.id = "chatbot_" + "fi"),
                (R.id = "chatbot_" + "ft"),
                (U.id = "chatbot_" + "fx"),
                (q.id = "chatbot_" + "fb"),
                (A.id = "chatbot_" + "c"),
                (D.id = "chatbot_" + "ct"),
                (J.id = "chatbot_" + "cc"),
                (W.src = "https://marionnaud.sourdline.com/img/ClearTchat.png"),
                (F["innerHTML"] = G["innerHTML"] = J["innerHTML"] = "✕"),
                (j.src = "https://marionnaud.sourdline.com/img/ClearTchat.png"),
                (R["innerHTML"] = ""),
                (U["innerHTML"] = ""),
                (D["innerHTML"] = "W czym możemy Ci pomóc?"),
                (S["onclick"] = G["onclick"] = D["onclick"] = function () {
                    (M *= -1), w(), T();
                }),
                (J["onclick"] = function () {
                    Y["display"] = c;
                }),
                T(),
                chatbot_lss ? I() : (((B = E("link")).rel = "stylesheet"), (B.type = "text/css"), (B.href = "https://cdn.premiumhotel.pl/chatbot/styles.css"), C(B, document.getElementsByTagName("head")[0]), (B.onload = I)),
                window.addEventListener(
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
                                                (document.title = e ? document.title : "Nouveau Message !"), (e = !e);
                                            }, 2e3));
                                    break;
                                case "dj9y4b8":
                                    N();
                                    break;
                                case "k120eks":
                                    window.location = a;
                            }
                        }
                    },
                    (q["innerHTML"] = "https://chatbot.premiumhotel.pl/")
                );
    }
}
var chatbot_oss, chatbot_lss, chatbot_bll;
chatbot_action("load");
