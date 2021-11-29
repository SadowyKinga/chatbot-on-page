var urlFragments = document.getElementById("chatbot-script");
document.documentElement.style.setProperty("--primary", "#" + urlFragments.dataset.primary);
const primaryValue = urlFragments.dataset.primary;
const secondaryValue = urlFragments.dataset.secondary;

function chatbot_load(t) {
    chatbot_action("load", t);
}
function chatbot_action(t, event) {
    var i;
    function style_chatbot(t) {
        return document.getElementById(t);
    }
    function change_style_chatbot(t) {
        document.body.removeChild(t);
    }
    function k() {
        var t = i ? ["auid=" + i] : [],
            event = document.cookie //usuwa listę ciasteczke powiązanych z dokumentem
                ? document.cookie.split("; ").map(function (t) {
                      return { k: (t = t.split("="))[0], v: t[1] };
                  })
                : [];
        return (
            [].forEach(function (i) {
                switch (i.st) {
                    case "c":
                        var a = event.find(function (t) {
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
                                return window["localStorage"].getItem(t);
                            } catch (t) {}
                        })(i.s);
                }
                null != n && t.push(i.t + "=" + n);
            }),
            `https://chatbot.premiumhotel.pl/` + t.join("&"));
    }
    var icon = style_chatbot("ideta_" + "i"), //g
        iframe = style_chatbot("ideta_" + "f"), //v
        question = style_chatbot("ideta_" + "c"); //y
    switch (t) {
        case "remove":
            icon && change_style_chatbot(icon), iframe && change_style_chatbot(iframe), question && change_style_chatbot(question), (ideta_bll = ideta_oss = 0);
            break;
        case "show":
            icon && (icon["style"]["display"] = "block"), iframe && (iframe["style"]["display"] = "block");
            break;
        case "hide":
            icon && (icon["style"]["display"] = "none"), iframe && (iframe["style"]["display"] = "none"), question && (question["style"]["display"] = "none");
            break;
        case "refresh":
            (B = style_chatbot("ideta_" + "ff")) && (B.src = k());
            break;
        case "load":
            if (ideta_oss) break;
            function w() {
                L || ideta_bll || 1 !== M || ((z.src = k()), (ideta_bll = !(L = !1)));
            }
            function C(t, event) {
                event.appendChild(t);
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
                    C(S, document.body),
                    C(z, H),
                    C(G, H),
                    L
                        ? ((V["display"] = "block"),
                          (q["onclick"] = function () {
                              (X["display"] = "block"), (V["display"] = "block"), (L = !1), w();
                          }),
                          C(j, P),
                          C(q, P),
                          C(P, H))
                        : w(),
                    C(H, document.body),
                    C(D, A),
                    C(J, A),
                    setTimeout(function () {
                        ideta_oss && C(A, document.body);
                    }, 2e3),
                    (ideta_lss = ideta_oss = !0);
            }
            function N() {
                (S.className = ""), clearInterval(x), (x = null), (document.title = document.title);
            }
            var x,
                B,
                L = !0,
                M = (B = "open" === event || !0 === event) ? 1 : -1,
                W = E("img"),
                j = E("img"),
                z = E("iframe"),
                S = E(),
                H = E(),
                P = E(),
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
                (S.id = "ideta_" + "i"),
                (W.id = "ideta_" + "ii"),
                (F.id = "ideta_" + "ic"),
                (H.id = "ideta_" + "f"),
                (z.id = "ideta_" + "ff"),
                (G.id = "ideta_" + "fc"),
                (P.id = "ideta_" + "fm"),
                (j.id = "ideta_" + "fi"),
                (q.id = "ideta_" + "fb"),
                (A.id = "ideta_" + "c"),
                (D.id = "ideta_" + "ct"),
                (J.id = "ideta_" + "cc"),
                (W.src = "https://marionnaud.sourdline.com/img/ClearTchat.png"),
                (F["innerHTML"] = G["innerHTML"] = J["innerHTML"] = "✕"),
                (j.src = "https://marionnaud.sourdline.com/img/ClearTchat.png"),
                (D["innerHTML"] = "W czym możemy Ci pomóc?"),
                (S["onclick"] = G["onclick"] = D["onclick"] = function () {
                    (M *= -1), w(), T();
                }),
                (J['onclick'] = function () {
                    Y["display"] = "none";
                }),
                T(),
                ideta_lss ? I() : (((B = E("link")).rel = "stylesheet"), (B.type = "text/css"), (B.href = "https://cdn.premiumhotel.pl/chatbot/styles.css"), C(B, document.getElementsByTagName("head")[0]), (B.onload = I)),
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
var ideta_oss, ideta_lss, ideta_bll;
chatbot_action("load");
