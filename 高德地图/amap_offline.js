(function (config) {
    var ca = navigator.userAgent.toLowerCase(), da = window, ga = document, ha = ga.documentElement;

    function ia(a) {
        return -1 !== ca.indexOf(a)
    }

    var oa = /([a-z0-9]*\d+[a-z0-9]*)/;

    function pa() {
        var a = qa;
        if (!a) return null;
        var a = a.toLowerCase(), b = null;
        if (b = a.match(/angle \((.*)\)/)) a = b[1], a = a.replace(/\s*direct3d.*$/, "");
        a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, "");
        if (0 <= a.indexOf("intel")) {
            b = ["Intel"];
            0 <= a.indexOf("mobile") && b.push("Mobile");
            (0 <= a.indexOf("gma") || 0 <= a.indexOf("graphics media accelerator")) && b.push("GMA");
            if (0 <= a.indexOf("haswell")) b.push("Haswell"); else if (0 <= a.indexOf("ivy")) b.push("HD 4000"); else if (0 <= a.indexOf("sandy")) b.push("HD 3000"); else if (0 <= a.indexOf("ironlake")) b.push("HD");
            else {
                0 <= a.indexOf("hd") && b.push("HD");
                var c = a.match(oa);
                c && b.push(c[1].toUpperCase())
            }
            return b = b.join(" ")
        }
        return 0 <= a.indexOf("nvidia") || 0 <= a.indexOf("quadro") || 0 <= a.indexOf("geforce") || 0 <= a.indexOf("nvs") ? (b = ["nVidia"], 0 <= a.indexOf("geforce") && b.push("geForce"), 0 <= a.indexOf("quadro") && b.push("Quadro"), 0 <= a.indexOf("nvs") && b.push("NVS"), a.match(/\bion\b/) && b.push("ION"), a.match(/gtx\b/) ? b.push("GTX") : a.match(/gts\b/) ? b.push("GTS") : a.match(/gt\b/) ? b.push("GT") : a.match(/gs\b/) ? b.push("GS") : a.match(/ge\b/) ?
            b.push("GE") : a.match(/fx\b/) && b.push("FX"), (c = a.match(oa)) && b.push(c[1].toUpperCase().replace("GS", "")), 0 <= a.indexOf("titan") ? b.push("TITAN") : 0 <= a.indexOf("ti") && b.push("Ti"), b = b.join(" ")) : 0 <= a.indexOf("amd") || 0 <= a.indexOf("ati") || 0 <= a.indexOf("radeon") || 0 <= a.indexOf("firegl") || 0 <= a.indexOf("firepro") ? (b = ["AMD"], 0 <= a.indexOf("mobil") && b.push("Mobility"), c = a.indexOf("radeon"), 0 <= c && b.push("Radeon"), 0 <= a.indexOf("firepro") ? b.push("FirePro") : 0 <= a.indexOf("firegl") && b.push("FireGL"), 0 <= a.indexOf("hd") &&
        b.push("HD"), 0 <= c && (a = a.substring(c)), (c = a.match(oa)) && b.push(c[1].toUpperCase().replace("HD", "")), b = b.join(" ")) : a.substring(0, 100)
    }

    var ra = "microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965".split(";"),
        ua = "ActiveXObject" in da,
        xa = "devicePixelRatio" in da && 1 < da.devicePixelRatio || ua && "matchMedia" in da && da.matchMedia("(min-resolution:144dpi)") && da.matchMedia("(min-resolution:144dpi)").matches,
        ya = ia("windows nt"), Aa = -1 !== ca.search(/windows nt [1-5]\./), Ba = -1 !== ca.search(/windows nt 5\.[12]/),
        Ca = Aa && !Ba;
    ia("windows nt 10");
    var Ea = ia("windows phone"), Fa = ia("macintosh"), Ga = ia("Mb2345Browser"), Ha = ia("ipad;") || ia("ipad "),
        Ia = Ha && xa, La = ia("ipod touch;"), Ma = ia("iphone;") || ia("iphone "), Na = Ma || Ha || La,
        Oa = Na && -1 !== ca.search(/ os [456]_/);
    Na && ca.search(/ os [4-8]_/);
    Na && ca.search(/ os [78]_/);
    Na && ia("os 8_");
    var Qa = Na && ia("os 10_"), Ra = ia("android"), Ta = -1 !== ca.search(/android [123]/);
    ia("android 4");
    Ra && -1 === ca.search(/android [1-4]/) || ca.search(/android 4.4/);
    var Ua = Ra ? "android" : Na ? "ios" : ya ? "windows" : Fa ? "mac" : "other", Va = ua && !da.XMLHttpRequest,
        Wa = ua && !ga.querySelector, Xa = ua && !ga.addEventListener, Ya = ua && ia("msie 9"),
        Za = ua && ia("msie 10"), $a = ua && ia("rv:11"), ab = Xa || Ya, bb = ia("edge"), cb = ia("qtweb"),
        db = ia("ucbrowser"), eb = ia("alipay") || Ra && db, fb = ia("miuibrowser"), gb = ia("micromessenger"),
        hb = ia("mqqbrowser"), ib = ia("baidubrowser"),
        chrome = (ia("chrome") || ia("crios")) && !gb && !ib && !hb && !bb && !fb, jb = chrome && ia("chromium"),
        kb = chrome && !jb && 30 < parseInt(ca.split("chrome/")[1]),
        lb = ia("firefox"), mb = lb && 27 < parseInt(ca.split("firefox/")[1]),
        nb = (Fa || Na) && ia("safari") && ia("version/"), ob = Fa && nb && 7 < parseInt(ca.split("version/")[1]),
        pb = Na && ia("aliapp"), qb = Na && (!hb && !db && !gb && !chrome && !lb && !nb || pb && !db),
        rb = Ra || Na || Ea || ia("mobile"), sb = "ontouchstart" in ga,
        tb = da.navigator && da.navigator.msPointerEnabled && !!da.navigator.msMaxTouchPoints,
        ub = da.navigator && !!da.navigator.maxTouchPoints, vb = !sb && (ub || tb), wb = sb || vb, xb = function () {
            if (!rb) return da.devicePixelRatio || 1;
            var a = document.getElementsByTagName("meta");
            if (window.parent && window.parent !== window) try {
                if (window.parent.location.origin === window.location.origin) a = window.parent.document.getElementsByTagName("meta"); else return 1
            } catch (b) {
                return 1
            }
            for (var c = a.length - 1; 0 <= c; c -= 1) if ("viewport" === a[c].name) {
                var c = a[c].content, d;
                -1 !== c.indexOf("initial-scale") && (d = parseFloat(c.split("initial-scale=")[1]));
                a = -1 !== c.indexOf("minimum-scale") ? parseFloat(c.split("minimum-scale=")[1]) : 0;
                c = -1 !== c.indexOf("maximum-scale") ? parseFloat(c.split("maximum-scale=")[1]) : Infinity;
                if (d) {
                    if (c >= a) return d > c ? c : d < a ? a : d
                } else if (c >= a) return 1 <= a ? 1 : Math.min(c, 1);
                console && console.log && console.log("viewport\u53c2\u6570\u4e0d\u5408\u6cd5");
                return null
            }
        }(), yb = xa && (!rb || !!xb && 1 <= xb), zb = ua && "transition" in ha.style,
        Ab = !!ga.createElementNS && !!ga.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        Bb = ga.createElement("canvas"), Cb = !(!Bb || !Bb.getContext), Db = window.URL || window.webkitURL,
        Eb = !ua && !bb && !(db && Ra) && window.Worker && Db && Db.createObjectURL && window.Blob, Fb = "", qa = "",
        Gb = 0,
        Hb = window.forceWebGL ? {alpha: !0, antialias: !0, depth: !0} : {
            alpha: !0,
            antialias: !0,
            depth: !0,
            failIfMajorPerformanceCaveat: !0,
            preserveDrawingBuffer: !0,
            stencil: !0
        }, Ib = function () {
            if (!window.forceWebGL && (!Cb || !Eb || qb && pb && !db)) return !1;
            for (var a = ["webgl", "experimental-webgl", "moz-webgl"], b = null, c = 0; c < a.length; c += 1) {
                try {
                    b = Bb.getContext(a[c], Hb)
                } catch (d) {
                }
                if (b) {
                    if (b.drawingBufferWidth !== Bb.width || b.drawingBufferHeight !== Bb.height) break;
                    if (window.forceWebGL) return Fb = a[c], Gb = Infinity, !0;
                    if (!b.getShaderPrecisionFormat ||
                        !b.getParameter || !b.getExtension) break;
                    Gb = b.getParameter(b.MAX_RENDERBUFFER_SIZE);
                    var e = b.getParameter(b.MAX_VIEWPORT_DIMS);
                    if (!e) break;
                    Gb = Math.min(Gb, e[0], e[1]);
                    nb && "mac" === Ua && (Gb = Math.min(Gb, 4096));
                    e = Math.max(screen.width, screen.height);
                    yb && (e *= Math.min(2, window.devicePixelRatio || 1));
                    if (e > Gb) break;
                    if (23 > b.getShaderPrecisionFormat(35632, 36338).precision || 23 > b.getShaderPrecisionFormat(35633, 36338).precision) break;
                    qa = b.getExtension("WEBGL_debug_renderer_info") ? b.getParameter(37446) : null;
                    if ((b = pa()) &&
                        -1 !== ra.indexOf(b)) break;
                    Fb = a[c];
                    return !0
                }
            }
            return !1
        }(), Jb = Ib && (kb || mb || ob) && ("mac" === Ua || "windows" === Ua) && !rb,
        Kb = !Cb || cb || Ea || rb && lb || Ya || Oa || Ia || La || Ta || ia("gt-n710") || Ca, Lb = !Kb && !Jb,
        Mb = Jb ? "vw" : Kb ? "d" : Lb ? "dv" : "v", Nb = ia("webkit"),
        Qb = "WebKitCSSMatrix" in da && "m11" in new window.WebKitCSSMatrix, Rb = "MozPerspective" in ha.style,
        Sb = "OTransition" in ha.style, Tb = zb || Qb || Rb || Sb, Ub = void 0 !== config[8] ? config[8] : !0,
        Vb = void 0 !== config[9] ? config[9] : !0, Wb = void 0 !== config[10] ? config[10] : !0,
        Xb = void 0 !== config[11] ? config[11] :
            !0, Yb = void 0 !== config[12] ? config[12] : null, Zb = !Ab && rb && Cb, $b = !0;
    try {
        if ("undefined" === typeof da.localStorage) $b = !1; else {
            var ac = (new Date).getTime() + "";
            da.localStorage.setItem("_test", ac);
            da.localStorage.getItem("_test") !== ac && ($b = !1);
            da.localStorage.removeItem("_test")
        }
    } catch (bc) {
        $b = !1
    }
    var cc = parseInt(ca.split("chrome/")[1]), dc = Ub && Cb;
    config.l = {
        cla: Ha,
        dla: Ma,
        size: Ma ? 100 : Ra ? 200 : 500,
        zx: Fa,
        Lsa: ya,
        cH: Na,
        uxa: Qa,
        ll: Ra,
        dga: Ta,
        p_: eb,
        Nx: Ua,
        EF: ib,
        Soa: hb,
        rC: nb,
        F5: gb,
        mr: ua,
        Wi: Va,
        Rt: Wa,
        B0: Ya,
        A0: Za,
        cf: Xa,
        D0: ab,
        gla: $a,
        Xia: bb,
        jla: ua && !$a,
        Oma: Ga,
        tr: $b,
        ni: dc && $b && Xb && !rb && chrome,
        vf: Yb,
        geolocation: rb || ua && !Xa || bb,
        bsa: db,
        OI: db && !chrome,
        chrome: chrome,
        VZ: !0,
        WN: lb,
        Y: rb,
        Zma: rb && Nb,
        U1: rb && Qb,
        Yma: rb && da.opera,
        bd: xa,
        XI: xb,
        ia: yb,
        sf: wb,
        W1: tb,
        rQ: ub,
        T2: vb,
        hha: chrome && 57 <= cc,
        iha: !rb && chrome && 64 <= cc,
        D5: Nb,
        hla: zb,
        E5: Qb,
        Gja: Rb,
        Pna: Sb,
        BF: Tb,
        Rn: Ab,
        Ak: Cb,
        wP: Eb,
        ty: Wb,
        mf: Jb,
        A5: Fb,
        B5: Hb,
        LO: qa,
        Mma: Gb,
        jta: !1,
        lt: Ub && !Kb,
        LY: Ub ? Mb : "d",
        fZ: Ub ? Ib : !1,
        zI: dc,
        Pp: Ub && Ib,
        Dxa: Ub && (!Kb || Ib),
        op: Vb && !!da.WebSocket && !ib,
        pya: Zb,
        Yna: Cb || Zb ? "c" : "d"
    };
    var ec = config;
    config = void 0;
    var fc = {
        overlay: ["style"],
        "AMap.IndoorMap": ["AMap.CustomLayer", "cvector"],
        "AMap.IndoorMap3D": ["Map3D"],
        "AMap.MarkerList": ["AMap.TplUtils"],
        Map3D: ["vectorlayer", "wgl", "AMap.CustomLayer"],
        "AMap.Heatmap": ["AMap.CustomLayer"],
        "AMap.DistrictLayer": ["MVT"],
        vectorForeign: ["gridmap", "MVT"],
        "AMap.GltfLoader": ["AMap.CustomLayer", "Map3D"]
    };
    window.AMap ? (window.AMap.version = "1552016226351", window.AMap.SI = {
        IJ: function (a) {
            a(ec)
        }
    }) : window.AMap = {
        version: "1552016226351", SI: {
            IJ: function (a) {
                a(ec)
            }
        }
    };
    ec.hj = "1552016226351";
    ec.ut = fc;
    ec.xH = "raster";
    for (var gc = document.head || document.getElementsByTagName("head")[0], hc = '.vml{behavior:url(#default#VML);display:inline-block;position:absolute}.amap-custom{top:0;left:0;position:absolute}.amap-container img{max-width:none!important;max-height:none!important}.amap-container{touch-action:none;position:relative;overflow:hidden;background:#fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);-ms-touch-action:none}.amap-drags,.amap-layers{width:100%;height:100%;position:absolute;overflow:hidden}.amap-layer img{pointer-events:none}.amap-e,.amap-maps{width:100%;height:100%}.amap-maps,.amap-e,.amap-layers,.amap-tile,.amap-tile-container{position:absolute;left:0;top:0;overflow:hidden}.amap-context{position:absolute;left:0;top:0}.amap-overlays,.amap-markers,.amap-marker{position:absolute;left:0;top:0}.amap-layers{z-index:0}.amap-overlays{z-index:110;cursor:default}.amap-markers{z-index:120}.amap-controls{z-index:150}.amap-copyright{position:absolute;display:block!important;left:77px;height:16px;bottom:0;padding-bottom:3px;font-size:11px;font-family:Arial,sans-serif;z-index:160}.amap-logo{position:absolute;bottom:1px;left:1px;z-index:160;height:20px}.amap-logo img{width:73px!important;height:20px!important;border:0;vertical-align:baseline!important}.amap-icon{position:relative;z-index:1}.amap-icon img{position:absolute;z-index:-1}.amap-marker-label{position:absolute;z-index:2;border:1px solid blue;background-color:white;white-space:nowrap;cursor:default;padding:3px;font-size:12px;line-height:14px}.amap-info{position:absolute;left:0;z-index:140;width:320px}.amap-menu{position:absolute;z-index:140;_width:100px}.amap-info-close{position:absolute;right:5px;_right:12px;+right:11px;top:5px;_top:2px;+top:2px;color:#c3c3c3;text-decoration:none;font:bold 16px/14px Tahoma,Verdana,sans-serif;width:14px;height:14px}.amap-info-outer,.amap-menu-outer{box-shadow:0 1px 2px rgba(0,0,0,0.1);background:none repeat scroll 0 0 white;border-radius:2px;padding:1px;text-align:left}.amap-menu-outer:hover{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-contentContainer:hover .amap-info-outer{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-content{position:relative;background:#fff;padding:10px 18px 10px 10px;line-height:1.4;overflow:auto}.amap-marker-content{position:relative}.amap-info{_width:320px}.amap-menu{_width:100px}.amap-info-sharp-old{height:23px;margin:0 auto;overflow:hidden;position:relative;top:-1px;width:30px;background-image:url(../../theme/v1.3/sharp.png);_background-image:url(../../theme/v1.3/sharp.gif)}.amap-info-sharp{position:absolute}.bottom-center .amap-info-sharp{bottom:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}.bottom-center .amap-info-sharp:after{position:absolute;content:"";margin-left:-8px;margin-top:-7px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid rgba(0,0,0,0.3);filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-center .amap-info-sharp:after{border-top:8px solid rgba(0,0,0,0.8)}.bottom-left .amap-info-sharp{border-color:transparent #fff;border-width:0 0 10px 10px;border-style:solid}.bottom-left .amap-info-sharp:after{position:absolute;content:"";margin-left:-10px;border-color:transparent rgba(0,0,0,0.3);border-width:0 0 10px 10px;border-style:solid;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-left .amap-info-sharp:after{border-color:transparent rgba(0,0,0,0.5)}.bottom-left .amap-info-content{border-radius:2px 2px 2px 0}.bottom-right .amap-info-sharp{right:0;border-top:10px solid #fff;border-left:10px solid transparent}.bottom-right .amap-info-sharp:after{position:absolute;margin-top:-9px;margin-left:-10px;content:"";border-top:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-right .amap-info-sharp:after{border-top:10px solid rgba(0,0,0,0.5)}.bottom-right .amap-info-content{border-radius:2px 2px 0 2px}.top-center .amap-info-sharp{top:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #fff}.top-center .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid rgba(0,0,0,0.3);filter:blur(1px);z-index:-1}.top-left .amap-info-sharp{left:0;top:0;border-bottom:10px solid #fff;border-right:10px solid transparent}.top-left .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:0;border-bottom:10px solid rgba(0,0,0,0.3);border-right:10px solid transparent;filter:blur(1px);z-index:-1}.top-right .amap-info-sharp{right:0;top:0;border-bottom:10px solid #fff;border-left:10px solid transparent}.top-right .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-10px;border-bottom:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.middle-right .amap-info-sharp{right:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-left:8px solid #fff;border-bottom:8px solid transparent}.middle-right .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:-8px;border-top:8px solid transparent;border-left:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-right .amap-info-sharp:after{border-left:8px solid rgba(0,0,0,0.5)}.middle-left .amap-info-sharp{left:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-right:8px solid #fff;border-bottom:8px solid transparent}.middle-left .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:0;border-top:8px solid transparent;border-right:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-left .amap-info-sharp:after{border-right:8px solid rgba(0,0,0,0.5)}.amap-info-contentContainer.top-left,.amap-info-contentContainer.top-center,.amap-info-contentContainer.top-right{padding-top:8px}.amap-info-contentContainer.bottom-left,.amap-info-contentContainer.bottom-center,.amap-info-contentContainer.bottom-right{padding-bottom:8px}.amap-info-contentContainer.middle-right{padding-right:8px}.amap-info-contentContainer.middle-left{padding-left:8px}.amap-menu-outer{margin:0;padding:0;list-style-type:none}ul.amap-menu-outer li{cursor:pointer;height:35px;line-height:35px;word-break:break-all;padding:0 10px;font-size:12px;white-space:nowrap}ul.amap-menu-outer li a{text-decoration:none;font-size:13px;margin:0 5px;color:#000;padding:5px 5px}ul.amap-menu-outer li:hover{background-color:#f3f3ee}.amap-overlay-text-container{display:block;width:auto;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fff;padding:2px 3px;border:1px solid #ccc;border-radius:3px}.amap-overlay-text-container.amap-overlay-text-empty{display:none}'.replace(/url\((['"]?)(?:\.\.\/)+/g, "url($1" +
        ec[2].split(",")[0] + "/"), ic = null, jc = 0, kc = gc.childNodes.length; jc < kc; jc++) if (1 === gc.childNodes[jc].nodeType) {
        ic = gc.childNodes[jc];
        break
    }
    if (hc) if (gc) {
        var lc = document.createElement("style");
        lc.setAttribute("type", "text/css");
        lc.setAttribute("class", "AMap.style");
        lc.styleSheet ? lc.styleSheet.cssText = hc : lc.innerHTML = hc;
        ic ? gc.insertBefore(lc, ic) : gc.appendChild(lc)
    } else document.write("<style type='text/css'>" + hc + "</style>");
    var g = g || {Aa: {qe: 0, Zp: [], ej: {}}}, C = {o: {}, control: {}, A: {}};
    g.gwa = function (a) {
        var b = Function;
        return function () {
            return (new b("return " + a))()
        }
    }();
    g.CLASS_NAME = "AMap";
    g.c = g.BuryPoint = {};
    g.c.add = g.BuryPoint.add = function (a, b, c) {
        a.O0 || a.B || !(a = a.CLASS_NAME) || (a = a.replace("AMap.", ""), g.My.ho(a, b, c))
    };
    var mc = {lang: 1, baseRender: 1, overlayRender: 1, viewMode: 1};
    g.c.xa = g.BuryPoint.addOptions = function (a, b) {
        if (!a.Rna) if (b && (b.innerLayer || b.innerOverlay)) a.O0 = !0; else {
            a.Rna = !0;
            var c = a.CLASS_NAME;
            if (c) {
                c = c.replace("AMap.", "");
                g.My.ho(c);
                b = b || {};
                for (var d in b) b.hasOwnProperty(d) && ("Map" === c && d in mc ? g.My.ho(c, d, b[d]) : g.My.ho(c, d))
            }
        }
    };
    g.Z = function () {
    };
    g.Z.extend = g.Z.extend = function (a) {
        function b() {
        }

        function c() {
            var a = this.initialize || this.r;
            a && a.apply(this, arguments);
            if (!d && this.ki) {
                a = document.createElement("style");
                a.setAttribute("type", "text/css");
                this.CLASS_NAME && a.setAttribute("class", this.CLASS_NAME);
                this.ki = this.ki.replace(/url\((['"]?)(?:\.\.\/)*/g, "url($1" + g.w.vb + "/");
                a.styleSheet ? a.styleSheet.cssText = this.ki : a.innerHTML = this.ki;
                for (var b = document.head || document.getElementsByTagName("head")[0], c = null, e = 0, f = b.childNodes.length; e < f; e++) if (1 ===
                    b.childNodes[e].nodeType) {
                    c = b.childNodes[e];
                    break
                }
                c ? b.insertBefore(a, c) : b.appendChild(a)
            }
            d = !0
        }

        var d = !1;
        b.prototype = this.prototype;
        var e = new b;
        e.constructor = c;
        c.prototype = e;
        c.prototype.li = c.prototype["super"] = function (a) {
            return a.callee.ma.apply(this, a)
        };
        for (var f in this) this.hasOwnProperty(f) && "prototype" !== f && (c[f] = this[f]);
        a.s4 && (g.extend(c, a.s4), a.s4 = null);
        a.ha && (g.extend.apply(null, [e].concat(a.ha)), a.ha = null);
        a.D && e.D && (a.D = g.extend({}, e.D, a.D));
        var h = e.constructor.Cla, k = {};
        if (void 0 !== h) for (f in h) h.hasOwnProperty(f) &&
        (k[h[f]] = f);
        for (f in a) if (Object.prototype.hasOwnProperty.call(a, f)) {
            var l = f, m = f;
            h && k[f] && (m = k[f]);
            "function" === typeof a[l] && "function" === typeof e[m] && (a[l].ma = e[m])
        }
        g.extend(e, a);
        a.toString && (e.toString = a.toString);
        c.Mc = this.prototype;
        return c
    };
    g.Z.wb = g.Z.include = function (a) {
        g.extend(this.prototype, a)
    };
    g.extend = function (a) {
        var b = Array.prototype.slice.call(arguments, 1), c, d, e, f;
        d = 0;
        for (e = b.length; d < e; d += 1) if (f = b[d] || {}, Object.assign) Object.assign(a, f); else for (c in f) Object.prototype.hasOwnProperty.call(f, c) && (a[c] = f[c]);
        return a
    };
    g.Z.hd = function (a) {
        for (var b in a) if (a.hasOwnProperty(b)) {
            var c = a[b];
            if ("string" === typeof c) this.prototype[b] && (this.prototype[c] = this.prototype[b]); else for (var d = 0, e = c.length; d < e; d++) this.prototype[b] && (this.prototype[c[d]] = this.prototype[b])
        }
    };
    g.My = {
        ej: {}, getKey: function (a, b) {
            a = a || "";
            return void 0 !== b && a ? a + "@" + b : a
        }, ho: function (a, b, c) {
            this.ej[a] || (this.ej[a] = {});
            b = this.getKey(b, c);
            void 0 == this.ej[a][b] && (this.ej[a][b] = 0)
        }, send: function () {
            var a = [], b;
            for (b in this.ej) if (this.ej.hasOwnProperty(b)) {
                var c = this.ej[b], d = [], e;
                for (e in c) c.hasOwnProperty(e) && 0 == c[e] && (d.push(e), c[e] = 1);
                d.length && a.push(b + "~" + d.join(","))
            }
            a.length && (a = ["type=nfl", "k=" + g.w.key, "m=" + (g.l.Y ? 1 : 0), "pf=" + g.l.Nx, "v=" + g.w.Bq, "branch=JSAPI", "log=" + a.join("!")], a = g.w.vc + "://webapi.amap.com/count?" +
                a.join("&"), new g.fb.sb(a))
        }
    };
    setInterval(function () {
        g.My.send()
    }, 1E4);
    g.ra = {
        h: function (a, b, c, d, e) {
            if (this.be(a, b, c || this)) return this;
            var f = this.Ue = this.Ue || {};
            f[a] = f[a] || [];
            e ? f[a].unshift({rb: b, Je: c || this, Ij: d}) : f[a].push({rb: b, Je: c || this, Ij: d});
            return this
        }, be: function (a, b, c) {
            var d = this.Ue;
            if (b && c) {
                if (d && a in d && d[a]) for (var e = 0; e < d[a].length; e += 1) if (d[a][e].rb === b && d[a][e].Je === c) return !0;
                return !1
            }
            return d && a in d && d[a] && 0 < d[a].length
        }, I: function (a, b, c) {
            if (!this.be(a)) return this;
            var d = this.Ue;
            if (d && d[a]) for (var e = 0; e < d[a].length; e += 1) if (!(d[a][e].rb !== b && "mv" !==
                b || c && d[a][e].Je !== c)) {
                d[a].splice(e, 1);
                d[a].length || (d[a] = null);
                break
            }
            return this
        }, DH: function (a, b) {
            if (!this.be(a)) return this;
            var c = this.Ue;
            if (c && c[a]) for (var d = 0; d < c[a].length; d += 1) if (!b || c[a][d].Je === b) {
                c[a].splice(d, 1);
                c[a].length || (c[a] = null);
                break
            }
            return this
        }, q: function (a, b) {
            if (!this.be(a)) return this;
            var c = {type: a};
            b || "string" !== typeof b && "number" !== typeof b && "boolean" !== typeof b ? g.a.gH(b) ? c.value = b : c = g.extend(c, b) : c.value = b;
            for (var d = [].concat(this.Ue[a]), e = 0; e < d.length; e += 1) d[e].rb && (d[e].rb.call(d[e].Je ||
                this, c), d[e] && d[e].Ij && this.Ue[a] && this.Ue[a].splice(e, 1));
            return this
        }, Wh: function (a) {
            a ? this.Ue && this.Ue[a] && (this.Ue[a] = null) : this.Ue = null;
            return this
        }
    };
    g.ra.on || (g.ra.on = g.ra.h);
    g.ra.off || (g.ra.off = g.ra.I);
    g.ra.emit || (g.ra.emit = g.ra.q);
    g.Ge = {
        set: function (a, b, c) {
            var d = this.Xk;
            if (d && d[a]) {
                var d = d[a], e = "set" + this.b0(a);
                if (d[e]) {
                    var f = !1;
                    !0 == d.B ? f = !0 : d.B = !0;
                    d[e](b, c);
                    f || (d.B = !1);
                    c || this.XH(a, b)
                } else d.set(a, b, c)
            } else (this.He = this.He || {})[a] = b, c || this.XH(a, b)
        }, b0: function () {
            var a = {};
            return function (b) {
                a[b] || (a[b] = b[0].toUpperCase() + b.substr(1));
                return a[b]
            }
        }(), get: function (a, b, c) {
            var d, e = this.Xk;
            d = "get" + this.b0(a);
            if (e && e[a]) return c = e[a], c[d] ? (a = !1, !0 == c.B ? a = !0 : c.B = !0, b = c[d](b), a || (c.B = !1), b) : c.get(a, b);
            if (!c && this[d]) return a = !1, !0 ==
            this.B ? a = !0 : this.B = !0, b = this[d](b), a || (this.B = !1), b;
            if (this.He && this.He.hasOwnProperty(a)) return this.He[a]
        }, W: function (a, b, c) {
            this.Xk || (this.Xk = {});
            this.Xk[a] !== b && (b.h(a, function (b) {
                this.XH(a, b)
            }, this), this.Xk[a] = b, c || this.XH(a))
        }, Ie: function (a, b, c) {
            for (var d = 0; d < a.length; d += 1) this.W(a[d], b, !c)
        }, Pk: function (a) {
            this.Xk && this.Xk[a] && (this.Xk[a].I(a, "mv", this), this.Xk[a] = void 0)
        }, Qk: function () {
            if (this.Xk) for (var a in this.Xk) this.Xk.hasOwnProperty(a) && this.Pk(a)
        }, XH: function (a, b) {
            var c = a + "Changed";
            if (this[c]) this[c](b);
            this.q(a, b)
        }, Hxa: function (a, b, c) {
            var d = new (g.Z.extend({ha: [g.ra, g.Ge]}));
            d.xva = function () {
                for (var b = !0, e = 0; e < a.length; e += 1) d.get(a[e]) || (b = !1);
                b && (d.Qk(), c())
            };
            for (var e = 0; e < a.length; e += 1) d.W(a[e], b)
        }, Sf: function (a, b) {
            var c, d;
            for (c in a) a.hasOwnProperty(c) && (d = a[c], this.set(c, d, b))
        }
    };
    g.w = {
        localStorage: !0,
        AF: 500,
        ge: !0,
        je: {
            dark: "#202020",
            blue_night: "#090d20",
            test: "#033447",
            mapv: "#000001",
            techblue: "#000b11",
            insight: "#19212a",
            "default": "#fcf9f2"
        },
        nya: "dark light blue darkblue fresh grey midblue".split(" "),
        key: "76ba25ab20604647577696d653a1ba50",
        vc: "http",
        Sd: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989],
        Od: "http://restapi.amap.com",
        vb: "http://webapi.amap.com",
        OH: "http://gaode.com",
        du: "http://m.amap.com",
        GB: "http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]",
        sH: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3",
        bR: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]",
        jI: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8",
        kI: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11",
        HC: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]",
        WI: "http://vector.amap.com",
        UI: "vdata.amap.com",
        Qsa: "ws"
    };

    function nc(a) {
        g.Z.ut = a.ut;
        g.l = a.l;
        g.xH = a.xH;
        g.Boa = a[7];
        a.l = null;
        g.w.vb = a[2].split(",")[0];
        g.w.hj = a.hj;
        g.w.FB = a.FB;
        var b = g.w.vc = g.w.vb.split(":")[0];
        "https" === b && (g.w.Qsa = "wss", g.w.Od = g.w.Od.replace("http", "https"), g.w.GB = g.w.GB.replace("http", "https"), g.w.sH = g.w.sH.replace("http", "https"), g.w.bR = g.w.bR.replace("http", "https"), g.w.jI = g.w.jI.replace("http", "https"), g.w.kI = g.w.kI.replace("http", "https"), g.w.HC = g.w.HC.replace("http", "https"), g.w.WI = g.w.WI.replace("http", "https"));
        var c = window.location.href;
        0 !== c.indexOf("http") && window.parent && window.parent !== window && (c = window.parent.location.href);
        g.w.jwa = c;
        c = encodeURIComponent(c);
        g.w.ct = c;
        g.w.fi = g.w.vb + "/theme/v1.3/markers/" + (g.l.bd ? "b" : "n");
        var d = document.createElement("style");
        d.type = "text/css";
        g.w.kia = "url(" + b + "://webapi.amap.com/theme/v1.3/openhand.cur),default";
        var e = ".amap-container{cursor:" + g.w.kia + ";}.amap-drag{cursor:url(" + b + "://webapi.amap.com/theme/v1.3/closedhand.cur),default;}";
        d.styleSheet ? (b = function () {
            try {
                d.styleSheet.cssText = e
            } catch (a) {
            }
        },
            d.styleSheet.disabled ? setTimeout(b, 10) : b()) : d.appendChild(document.createTextNode(e));
        (document.head || document.getElementsByTagName("head")[0]).appendChild(d);
        g.w.mode = Number(a[3]);
        g.w.Sd = a[1];
        g.w.key = a[0];
        g.w.Bq = a[4];
        g.w.zc = a[5];
        g.w.Qfa = a[6]
    }

    window.AMap && window.AMap.SI && window.AMap.SI.IJ && window.AMap.SI.IJ(nc);
    g.Tl = {st: Math.PI / 180, Voa: 180 / Math.PI, KN: 6378137};
    (function () {
        function a(a) {
            return "undefined" === typeof a ? "" : a
        }

        g.Fh = {
            xka: function (b) {
                b.name = a(b.name);
                var c = [b.y, b.x, b.name];
                if (g.l.Y) {
                    var d = [g.w.du + "/callAPP?", "src=jsapi_q"];
                    d.push("&ios=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
                    d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&q=" + c.join(",") + "&sourceApplication=jsapi_q"));
                    d.push("&wp=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" +
                        b.y + "&lon=" + b.x));
                    d.push("&mo=" + encodeURIComponent(g.w.du + "?q=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_q"));
                    return d.join("")
                }
                return g.w.OH + "?q=" + c.join(",") + "&src=jsapi_q"
            }, Q_: function (b) {
                b.name = a(b.name);
                b.address = a(b.address);
                b.x = a(b.x);
                b.y = a(b.y);
                var c = [b.id, b.y, b.x, b.name, b.address];
                if (g.l.Y) {
                    var d = [g.w.du + "/callAPP?", "src=jsapi_p"];
                    d.push("&ios=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
                    d.push("&android=" +
                        encodeURIComponent("androidamap?action=shorturl&p=" + c.join(",") + "&sourceApplication=jsapi_p"));
                    d.push("&wp=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
                    return d.join("")
                }
                return g.w.OH + "?p=" + c.join(",") + "&src=jsapi_p"
            }, O_: function (b) {
                if (g.l.Y) {
                    var c = [g.w.du + "/callAPP?", "src=jsapi_detail"];
                    c.push("&ios=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
                    b.name = a(b.name);
                    b.x = a(b.x);
                    b.y =
                        a(b.y);
                    c.push("&android=" + encodeURIComponent("androidamap?action=openFeature&featureName=PoiDetail&poiid=" + b.id + "&poiname=" + b.name + "&x=" + b.x + "&y=" + b.y + "&sourceApplication=jsapi_detail"));
                    c.push("&wp=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
                    c.push("&mo=" + encodeURIComponent(g.w.du + "/detail/index/poiid=" + b.id + "&sourceApplication=jsapi_detail"));
                    return c.join("")
                }
                return g.w.OH + "/detail/" + b.id + "?src=jsapi_detail"
            }, EO: function (b) {
                b.sname = a(b.sname);
                "" === b.sname &&
                (b.sname = "\u8d77\u70b9");
                b.dname = a(b.dname);
                "" === b.dname && (b.dname = "\u7ec8\u70b9");
                b.mcount = a(b.mcount);
                b.my = a(b.my);
                b.mx = a(b.mx);
                b.mname = a(b.mname);
                var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b.mname];
                if (g.l.Y) {
                    var d = [g.w.du + "/callAPP?", "src=jsapi_r_" + b.t];
                    d.push("&ios=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                    var e = b.t;
                    0 === b.t ? e = 2 : 2 === b.t && (e = 4);
                    d.push("&android=" + encodeURIComponent("androidamap://route?sourceApplication=jsapi_r_" + b.t + "&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&dev=0&" + b.m + "&t=" + e));
                    d.push("&wp=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                    d.push("&mo=" + encodeURIComponent(g.w.du +
                        "/?r=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_r_" + b.t));
                    return d.join("")
                }
                return g.w.OH + "?r=" + c.join(",") + "src=jsapi_r_" + b.t
            }, Tr: function (a) {
                g.l.Y ? window.location.href = a : window.open(a)
            }
        }
    })();
    "function" !== typeof Object.keys && (Object.keys = function (a) {
        var b = [], c;
        for (c in a) a.hasOwnProperty(c) && b.push(c);
        return b
    });
    g.a = {
        CLASS_NAME: "AMap.Util", AI: [], za: 268435456, Yn: [215440491, 106744817], w5: function () {
            var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
            return function (b, c) {
                var d = [], e;
                c = c || a.length;
                if (b) for (e = 0; e < b; e++) d[e] = a[0 | Math.random() * c]; else {
                    var f;
                    d[8] = d[13] = d[18] = d[23] = "-";
                    d[14] = "4";
                    for (e = 0; 36 > e; e++) d[e] || (f = 0 | 16 * Math.random(), d[e] = a[19 === e ? f & 3 | 8 : f])
                }
                return d.join("")
            }
        }(), fB: {
            start: function (a) {
                a.startTime = new Date;
                a.W4 = [];
                var b = (new Date).getTime();
                a.id = requestAnimationFrame(function d() {
                    var e =
                        (new Date).getTime();
                    a.W4.push(e - b);
                    b = e;
                    a.id = requestAnimationFrame(d)
                })
            }, cancel: function (a) {
                a.id && cancelAnimationFrame(a.id)
            }, stop: function (a) {
                a.Vha = new Date - a.startTime;
                this.cancel(a);
                a.fB = Math.round(1E3 / (a.Vha / (a.W4.length + 1)))
            }
        }, Z_: function (a, b, c) {
            var d = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : !1;
            if (a === b) return b;
            switch (3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "linear") {
                case "ease":
                    c = g.dv.hG(0.25, 0.1, 0.25, 1)(c);
                    break;
                case "ease-in":
                    c = g.dv.hG(0.42, 0, 1, 1)(c);
                    break;
                case "ease-out":
                    c =
                        g.dv.hG(0, 0, 0.58, 1)(c);
                    break;
                case "ease-in-out":
                    c = g.dv.hG(0.42, 0, 0.58, 1)(c)
            }
            var e = a + (b - a) * c;
            d && (e >>= 0);
            return e
        }, createObjectURL: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "text/javascript; charset=utf-8",
                c = null;
            try {
                c = (window.URL || window.webkitURL).createObjectURL(new Blob([a], {type: b}))
            } catch (d) {
                c = null
            }
            return c
        }, revokeObjectURL: function (a) {
            (window.URL || window.webkitURL).revokeObjectURL(a)
        }, jva: function (a) {
            for (var b = {}, c = 0, d = a.length; c < d; c++) b[a[c]] = c;
            return b
        }, jB: function (a) {
            var b =
                {};
            if (g.a.Fj(a, "object")) for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
            return b
        }, Mf: function (a, b) {
            for (var c = 0, d = b.length; c < d; c += 1) a.push(b[c])
        }, create: "function" === typeof Object.create ? Object.create : function (a, b) {
            function c() {
            }

            c.prototype = a;
            var d = new c, e;
            for (e in b) b.hasOwnProperty(e) && (d[e] = b[e]);
            return d
        }, ib: function (a) {
            if ("object" === typeof a && null !== a) {
                if (a.g2 || this.Fj(a, "Float32Array") || this.Fj(a, "Uint16Array")) return a;
                var b = this.isArray(a) ? [] : {}, c;
                for (c in a) a.hasOwnProperty(c) && (b[c] = g.a.ib(a[c]));
                return b
            }
            return a
        }, Z0: function (a) {
            return (a | 0) === a
        }, wqa: "function" === typeof Object.setPrototypeOf ? Object.setPrototypeOf : function (a, b) {
            for (var c in b) a[c] = b[c]
        }, bi: function (a) {
            return "function" === typeof a
        }, hga: function (a) {
            for (var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "webgl", c = [], d = 0, e = a.length; d < e; d += 2) {
                var f = parseInt(a.substr(d, 2), 16);
                if ("webgl" === b || "rgba" === b && 0 === d) f = this.Yc(f / 255, 3);
                c.push(f)
            }
            c.push(c.shift());
            return c
        }, Br: function () {
        }, keys: "function" === typeof Object.keys ? Object.keys :
            function (a) {
                var b = [], c;
                for (c in a) a.hasOwnProperty(c) && b.push(c);
                return b
            }, map: function (a, b) {
            var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = [];
            if (a && a.length) g.a.Nb(a, function () {
                for (var e = arguments.length, f = Array(e), h = 0; h < e; h++) f[h] = arguments[h];
                d[f[1]] = b.apply(c || a, f)
            }); else return a;
            return d
        }, forEach: function (a, b) {
            if (a && a.length) {
                var c = a.length;
                if (0 < c && (b(a[0], 0), 1 < c)) {
                    b(a[1], 1);
                    for (var d = 2; d < c; d++) b(a[d], d)
                }
            }
        }, Nb: function (a, b) {
            var c = 2 < arguments.length && void 0 !== arguments[2] ?
                arguments[2] : null;
            if (a && a.length) for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d, a); d++) ;
        }, find: function (a, b) {
            for (var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = 0, e = a.length; d < e; d++) if ("function" === typeof b) {
                if (b.call(c, a[d], d, a)) return a[d]
            } else if (a[d] === b) return a[d];
            return null
        }, gH: function (a) {
            return "object" === typeof HTMLElement ? a instanceof HTMLElement : a && "object" === typeof a && 1 === a.nodeType && "string" === typeof a.nodeName
        }, Ou: function (a, b) {
            var c = "ASDFGHJKLQWERTYUIO!sdfghjkleiu3~yr5-P&mq9`%zCN*b=8@^xpVM",
                d, e;
            "v5" < (b || "v5") ? (d = c.length, e = 512) : (d = 27, c = c.substr(0, 27), e = 333);
            var f, h, k, l, m;
            h = [];
            k = NaN;
            l = 0;
            for (m = a.length; l < m; l++) f = a[l], f = c.indexOf(f), isNaN(k) ? k = f * d : (h.push(k + f - e), k = NaN);
            return h
        }, fqa: function (a, b) {
            for (var c = 1, c = 512 < b.length ? Math.round(Math.pow(b.length, 0.5)) : b.length, d = Math.ceil(b.length / c), e = 0; e < d; e += 1) {
                var f = c * e, h = f + c;
                h > b.length && (h = b.length);
                for (; f < h; f += 1) a(b[f])
            }
        }, Fva: function (a) {
            if (/^rgba\(/.test(a)) return this.tu(a);
            var b = a = this.RF(a);
            "#" === a[0] && (a = a.substring(1), 3 === a.length && (a =
                a.replace(/./g, function (a) {
                    return a + a
                })), b = this.Dq(8 === a.length ? a : "ff" + a));
            return this.tu(b)
        }, RF: function (a) {
            var b = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgrey: "#d3d3d3",
                lightgreen: "#90ee90",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370d8",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#d87093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                rebeccapurple: "#663399",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            };
            return "string" === typeof a ? b[a.toLowerCase()] ? b[a.toLowerCase()] : a : a
        }, jG: function (a, b, c) {
            var d, e;
            d = Math.floor(c / 2);
            e = c - d;
            d = (1 << d) - 1 << e;
            e = (1 <<
                e) - 1;
            return [c, a & d | b & e, b & d | a & e]
        }, kG: function (a) {
            return a ? encodeURIComponent(a) : ""
        }, yd: function (a, b, c, d) {
            c = a[b].i[c];
            if ("undefined" === typeof c) return null;
            a = a[b].s;
            if ("number" === typeof c) return a[c];
            for (; "undefined" === typeof c[d.toString()] && !(d -= 1, 3 > d);) ;
            d = c[d.toString()];
            return "number" === typeof d ? a[d] : null
        }, tu: function (a) {
            a = a.split(",");
            a[0] = parseFloat(a[0].split("rgba(")[1]) / 255;
            a[1] = parseFloat(a[1]) / 255;
            a[2] = parseFloat(a[2]) / 255;
            a[3] = parseFloat(a[3]);
            return a
        }, Spa: function (a) {
            a = a.split(",");
            a[0] =
                parseFloat(a[0].split("rgb(")[1]) / 255;
            a[1] = parseFloat(a[1]) / 255;
            a[2] = parseFloat(a[2]) / 255;
            return a
        }, XQ: function (a) {
            return "rgba(" + 255 * a[0] + "," + 255 * a[1] + "," + 255 * a[2] + "," + a[3] + ")"
        }, Bha: function (a) {
            return this.XQ(this.Ro(a))
        }, Ro: function (a) {
            if (a instanceof Array) return 3 == a.length && a.push(1), a;
            a = this.RF(a);
            if (0 == a.indexOf("#")) {
                if (7 == a.length) return this.su(a.substr(1));
                if (9 == a.length) return a = a.substr(1), this.rk(a.substr(6) + a.substr(0, 6))
            } else {
                if (0 == a.indexOf("rgb(")) return a = this.Spa(a), a.push(1), a;
                if (0 == a.indexOf("rgba(")) return this.tu(a)
            }
        }, F3: function (a) {
            return g.a.Dq("ff" + a)
        }, Dq: function (a) {
            for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c, 2), 16));
            b.push((b.shift() / 255).toFixed(2));
            return "rgba(" + b.join(",") + ")"
        }, su: function (a) {
            return g.a.rk("ff" + a)
        }, rk: function (a) {
            for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c, 2), 16) / 255);
            b.push(b.shift());
            return b
        }, np: function (a) {
            for (var b in a) if (a.hasOwnProperty(b)) return !1;
            return !0
        }, Cn: function (a, b) {
            0 <= b && a.splice(b, 1);
            return a
        }, Tqa: function (a, b) {
            return a.startsWith ? a.startsWith(b) : a.substr(0, b.length) === b
        }, Lw: function (a, b) {
            var c = g.a.indexOf(a, b);
            return g.a.Cn(a, c)
        }, filter: function (a, b, c) {
            var d = [];
            g.a.Nb(a, function (a, f) {
                b.call(c, a, f) && d.push(a)
            });
            return d
        }, indexOf: function (a, b) {
            if (!a || !a.length) return -1;
            if (a.indexOf) return a.indexOf(b);
            for (var c = 0; c < a.length; c += 1) if (a[c] === b) return c;
            return -1
        }, bB: function (a, b) {
            return a.endsWith ? a.endsWith(b) : a.length < b.length ? !1 : a.substr(a.length - b.length) == b ? !0 : !1
        }, bind: function () {
            var a =
                !1;
            Function.prototype.bind && (a = !0);
            return function (b, c) {
                var d = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : null;
                return a ? d ? (d.unshift(c), b.bind.apply(b, d)) : b.bind(c) : function () {
                    return b.apply(c, d || arguments)
                }
            }
        }(), Gb: function (a, b) {
            b = b || {};
            a.D = g.extend({}, a.D, b);
            return a.D
        }, g_: function () {
            return !1
        }, join: function (a, b) {
            if (a.join) return a.join(b);
            var c = [], d;
            for (d in a) a.hasOwnProperty(d) && c.push(d + "=" + (a[d] || ""));
            return c.join(b)
        }, F_: function (a, b) {
            return (a || "") + Math.round(Math.random() * Math.pow(10,
                b || 6))
        }, Ab: function () {
            var a = 0;
            return function (b) {
                b._amap_id || (a += 1, b._amap_id = a);
                return b._amap_id
            }
        }(), aja: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", lf: Date.now ? function () {
            return Date.now()
        } : function () {
            return (new Date).getTime()
        }, lH: function (a, b, c, d) {
            var e;
            if (d) {
                var f = 0, h, k = this.lf;
                e = function () {
                    h = k();
                    if (h - f < b) return !1;
                    f = h;
                    a.apply(c, arguments)
                }
            } else {
                var l, m, n;
                n = function () {
                    l = !1;
                    m && (e.apply(c, m), m = !1)
                };
                e = function () {
                    l ? m = arguments : (l = !0, a.apply(c, arguments), setTimeout(n, b))
                }
            }
            return e
        },
        Yc: function (a, b) {
            return a === a << 0 ? a : +parseFloat(a).toFixed(b || 0)
        }, isArray: Array.isArray ? Array.isArray : function (a) {
            return this.Fj(a, "array")
        }, Fj: function (a, b) {
            return Object.prototype.toString.call(a).split(" ")[1].slice(0, -1).toLowerCase() === b.toLowerCase()
        }, ha: "function" === typeof Array.prototype.ha ? function (a, b) {
            return a.ha(b)
        } : function (a, b) {
            return -1 !== this.indexOf(a, b)
        }, w4: function (a) {
            var b = 0;
            if (0 === a.length) return b;
            for (var c, d = 0, e = a.length; d < e; d += 1) c = a.charCodeAt(d), b = (b << 5) - b + c, b &= b;
            return b
        },
        Qva: function (a, b) {
            b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1;
            for (var c = "", d = 0, e = a.length; d < e; d++) c += String.fromCharCode((a.charCodeAt(d) - 256 - b + 65535) % 65535);
            return c
        }, nia: function (a, b) {
            var c = (a + "").slice(-2), d = (b + "").slice(-2);
            a = a.slice(0, -2);
            b = b.slice(0, -2);
            var e = parseInt((d + c).slice(1)), f = Math.ceil(e / 250) % 2 ? 1 : -1, d = parseInt("1" + d) / 3E3;
            a -= parseInt("1" + c) / 3E3 * f;
            b -= d * (1 < e / 500 ? 1 : -1);
            return new g.T(parseFloat(a).toFixed(5), parseFloat(b).toFixed(5))
        }, i2: function (a) {
            return "undefined" !== typeof JSON && JSON.stringify ?
                g.a.w4(JSON.stringify(a)) : null
        }, Pza: function (a, b) {
            if (b || !a.hasOwnProperty("_amap_hash")) {
                var c = g.a.i2(a);
                c && (a._amap_hash = c)
            }
            return a._amap_hash
        }, iepngFix: function (a) {
            function b() {
                for (var a; c.length;) a = c.shift(), window.DD_belatedPNG.fixPng(a);
                d.uP = !0
            }

            this.R2 || (this.R2 = [], this.uP = !1);
            var c = this.R2, d = this;
            if ("img" === a.tagName.toLowerCase()) c.push(a); else {
                a = a.getElementsByTagName("*");
                for (var e = 0; e < a.length; e += 1) c.push(a[e])
            }
            window.DD_belatedPNG && this.uP ? setTimeout(function () {
                b()
            }, 100) : this.uP || g.pb.load("AMap.FixPng",
                b)
        }, Ha: function (a) {
            if (g.a.isArray(a)) if (g.a.isArray(a[0])) for (var b = 0; b < a.length; b += 1) a[b] = g.a.Ha(a[b]); else if (b = typeof a[0], "string" === b || "number" === b) return new g.T(a[0], a[1]);
            return a
        }, Ssa: function (a) {
            for (var b = [], c = 0, d = a.length; c < d; c += 1) b[c] = [a[c].x, a[c].y];
            return b
        }, Ap: function (a) {
            return g.a.isArray(a) ? new g.md(a[0], a[1]) : a
        }
    };
    (function () {
        function a(a) {
            window.clearTimeout(a)
        }

        function b(a) {
            var b, c, d = ["webkit", "moz", "o", "ms"];
            for (b = 0; b < d.length && !c; b += 1) c = window[d[b] + a];
            return c
        }

        function c(a) {
            var b = +new Date, c = Math.max(0, (g.l.ll ? 50 : 20) - (b - d));
            d = b + c;
            return window.setTimeout(a, c)
        }

        var d = 0, e = window.requestAnimationFrame || b("RequestAnimationFrame") || c,
            f = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || a;
        g.a.Kc = function (a, b, c, d) {
            if (c) b ? g.a.bind(a, b).call(b, d) : a(); else return e(function () {
                b ?
                    g.a.bind(a, b).call(b, d) : a()
            })
        };
        g.a.Vh = function (a) {
            a && f.call(window, a)
        }
    })();
    g.a.WQ = window.requestIdleCallback ? window.requestIdleCallback.bind(window) : function (a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, c = g.a.lf();
        return setTimeout(function () {
            a({
                didTimeout: !1, timeRemaining: function () {
                    return Math.max(0, 70 - (g.a.lf() - c))
                }
            })
        }, b.timeout || 0)
    };
    g.a.gZ = window.cancelIdleCallback ? window.cancelIdleCallback.bind(window) : function (a) {
        clearTimeout(a)
    };
    (function (a) {
        var b = 1, c = {};
        a.a.uqa = function (a, b) {
            if (c[a]) {
                var f = c[a];
                f.xC = 1;
                f.result = b;
                if (f.rm) {
                    for (var h = f.rm, k = 0, l = h.length; k < l; k++) h[k].call(null, b);
                    f.rm = null
                }
            }
        };
        a.a.qha = function (a) {
            c[a] = null
        };
        a.a.Csa = function (a, b) {
            if (c[a]) {
                var f = c[a];
                0 < f.xC ? b(null, f.result) : (f.rm || (f.rm = []), f.rm.push(b))
            } else b(null, a)
        };
        a.a.xO = function (d, e) {
            var f = navigator.geolocation;
            if (!a.l.cH || "https:" === document.location.protocol) return d(null, f);
            var h;
            e && e.Dsa && (h = "f" + b++, c[h] = {xC: 0});
            var k = null, l = !1;
            e && e.timeout && (k = setTimeout(function () {
                k =
                    void 0;
                d({code: 3, info: "TIME_OUT", message: "Get geolocation time out."});
                l = !0
            }, e.timeout));
            f.getCurrentPosition(function () {
                l || (clearTimeout(k), k = void 0, d(null, f))
            }, function (b) {
                l || (clearTimeout(k), k = void 0, 2 === b.code && 0 < b.message.indexOf("permission") ? a.pb.load("AMap.GeoRemoteLoc", function () {
                    d(null, a.o6, h)
                }) : d(null, f))
            }, {timeout: 1E3});
            return h
        }
    })(g);
    (function (a) {
        var b = a.Z.extend({
            ha: [a.ra], r: function () {
            }
        });
        a.jj = new b
    })(g);
    (function (a) {
        var b = a.Z.extend({
            ha: [a.ra], r: function () {
                this.waa()
            }, waa: function () {
                a.jj && a.jj.h("vecTileParsed.buildings", this.baa, this)
            }, X0: function (a) {
                return a.map.DV
            }, kka: function (a) {
                return this.X0(a) ? a.map.WK : null
            }, rqa: function (a, b) {
                if (b) {
                    var e = b.map;
                    e && (e.WK ? e.WK.toString() : "") !== (a ? a.toString() : "") && (e.WK = a || [], e.set("display", 0))
                }
            }, X3: function (a, b) {
                if (b) {
                    var e = b.map;
                    e && e.DV !== a && (e.DV = a, e.set("display", 0))
                }
            }, uua: function () {
            }, yV: function (a, b) {
                if (a) for (var e = 0, f = a.length; e < f; e++) a[e] && 0 > b.indexOf(a[e]) &&
                b.push(a[e])
            }, j_: function (b) {
                if (!b) return null;
                b = b.map.pa;
                for (var d = 0, e = b.length; d < e; d++) if (a.o.Kh && b[d] instanceof a.o.Kh && b[d].ga && b[d].ga.length && (-1 !== b[d].ga.indexOf("building") || -1 !== b[d].ga.indexOf("poilabel")) && b[d].La) {
                    var f = b[d].X.get("tiles", null, !0);
                    if (f && f.length) return b[d]
                }
                return null
            }, Lja: function (a) {
                if (a = this.j_(a)) {
                    if (a = a.X.get("tiles", null, !0)) a = a[0]; else return null;
                    if (!a || !a.length) return null;
                    for (var b = [], e = 0, f = a.length; e < f; e++) {
                        var h = a[e];
                        h.Yd && h.Yd.Ze && this.yV(h.Yd.Ze, b)
                    }
                    return b
                }
            },
            baa: function (a) {
                if (a.mo && a.mo.Yd) {
                    var b = a.mo.Yd.Ze;
                    if (b) {
                        var e = [];
                        this.yV(b, e);
                        this.q("vecTileParsed.builds.found", {dZ: e, mo: a.mo})
                    }
                }
            }
        });
        a.kj = new b
    })(g);
    (function (a) {
        function b() {
            return {
                checkup: function () {
                    var a = Array.prototype.slice.call(arguments, 0);
                    a.pop()(null, a)
                }
            }
        }

        function c(a) {
            return {
                injectCode: function (b, c) {
                    var d = null, e = null;
                    try {
                        d = (new Function("self", b))(a)
                    } catch (f) {
                        console.error("error", e), e = f.toString()
                    }
                    c(e, d)
                }
            }
        }

        function d(a) {
            function b(c, d) {
                function e(a, b, c) {
                    a = {jy: Date.now(), Xx: h, error: a, result: b, xp: !1, wk: !1};
                    if (c) for (var f in c) c.hasOwnProperty(f) && (a[f] = c[f]);
                    d(a)
                }

                var f = c.XO, h = c.Xx, l = c.lN, m = c.CA, n = c.iga || [], p = a._wkHandlers[f];
                p ? p[l] ? m ?
                    p[l].apply(p, n.concat(e)) : e(null, p[l].apply(p, n)) : e("Unknown cmd: " + l) : e("Can not find handler for: " + f)
            }

            var c = [], d = null, e = null;
            for (d in this._wkHandlers) -1 !== d.indexOf("_def_") && (e = this._wkHandlers.jya = d);
            "function" === typeof this._wkHandlers[e].r && this._wkHandlers[e].r.call(this._wkHandlers[e]);
            a.$s = function (a) {
                c.push.apply(c, a)
            };
            a.addEventListener("message", function (d) {
                function e(b) {
                    if (t) {
                        t.push(b);
                        var d = !!b.xp;
                        d || n++;
                        b = n >= h || b.wk;
                        if (d || b) {
                            d = 1 < t.length ? {Mpa: t} : t[0];
                            d.jy = Date.now();
                            d.wza = p;
                            if (c.length) {
                                try {
                                    a.postMessage(d,
                                        c)
                                } catch (f) {
                                    a.postMessage(d), console.error(f)
                                }
                                c.length = 0
                            } else a.postMessage(d);
                            t.length = 0;
                            b && (e = t = null)
                        }
                    } else console.error("Seemed callback already sent!!", b, b.result.hc)
                }

                var f = d.data;
                d = f.Jpa || [f];
                for (var h = d.length, n = 0, p = Date.now() - f.jy, t = [], f = 0; f < h; f++) b(d[f], e)
            }, !1)
        }

        function e(d, h) {
            this.D = a.extend({batchSend: !0, lazy: !1, libPolyfills: null}, h);
            this.Ko = [];
            this.hz = this.D.clientId || "w" + f++;
            this.D.onReady && this.ZP(this.D.onReady);
            this.bE = this.m$();
            if ("function" === typeof d) {
                var m = {};
                m[this.bE] = d;
                d = m
            }
            d[e.KO] =
                c;
            d[this.MU()] = b;
            this.pE = d;
            this.Yz(null);
            this.D.lazy || this.zw();
            a.Rka || !1 === this.D.hostWorker || (a.Rka = this);
            this.kn && this.kn.r && this.kn.r.call(this.kn)
        }

        var f = 1, h = 1;
        a.extend(e, {
            KO: "_g_", Gqa: function (a) {
                if (!a.Q7) {
                    var b = [];
                    a.addEventListener("message", function (a) {
                        a = a.data;
                        a = a.Mpa || [a];
                        for (var c = 0, d = a.length; c < d; c++) {
                            var e = a[c], f;
                            a:{
                                f = e.Xx;
                                for (var k = !e.wk, h = 0, v = b.length; h < v; h++) {
                                    var x = b[h];
                                    if (f === x.Xx) {
                                        k || b.splice(h, 1);
                                        f = x;
                                        break a
                                    }
                                }
                                f = void 0
                            }
                            f && f.CA(e.error, e.result, !0)
                        }
                    }, !1);
                    a.E7 = b;
                    a.Q7 = !0
                }
            }
        });
        a.extend(e.prototype,
            {
                m$: function () {
                    return "_def_" + this.hz
                }, MU: function () {
                    return "_cln_" + this.hz
                }, rea: function () {
                    var a = Array.prototype.slice.call(arguments, 0);
                    this.sX = a;
                    if (this.ew) {
                        for (var b = 0, c = this.ew.length; b < c; b++) this.ew[b].apply(null, a);
                        this.ew.length = 0
                    }
                }, $s: function (a) {
                    this.iea && this.Ko.push.apply(this.Ko, a)
                }, ZP: function (a) {
                    this.sX ? a.apply(null, this.sX) : (this.ew || (this.ew = []), this.ew.push(a))
                }, zw: function (b) {
                    var c = this;
                    if (!c.OT) {
                        c.OT = !0;
                        var d = function (d, e) {
                            d && a.l.wP && console.warn(d);
                            c.rea.call(c, d, e);
                            b && b(d, e)
                        };
                        a.l.wP ? this.gea(function (a, b) {
                            b ? this.Caa(b, function (a, c) {
                                a ? d(a) : (this.Yz(c), this.DM = c, this.Ko.length = 0, this.kn = null, d(null, {
                                    uga: b,
                                    Nsa: c
                                }))
                            }) : d("Worker start failed!")
                        }) : d("Worker not supported!")
                    }
                }, Jf: function (b, c) {
                    var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : a.a.Br, f = this;
                    b = b || f.bE;
                    var h = {};
                    if (a.a.Fj(c, "object")) {
                        var q = "return {", r;
                        for (r in c) if (c.hasOwnProperty(r)) var s = c[r],
                            q = "function" === typeof s ? q + ("\n\t" + r + ": " + s.toString() + ",") : "object" === typeof s ? q + ("\n\t" + r + ": " + JSON.stringify(s) +
                                ",") : q + ("\n\t" + r + ': "' + s + '",');
                        c = new Function(q + "\n}")
                    }
                    f.uT(b, c, h);
                    f.Yz(null, h);
                    f.ZP(function (a) {
                        a ? d(a) : f.DM ? (a = f.RU(c, f.JK(f.hz, b), !0), f.DM.sendMessage(e.KO + ":injectCode", a, function (a, b) {
                            a || f.Yz(f.DM, h);
                            d(a, b)
                        })) : d("Worker msger missing!!")
                    })
                }, JK: function (a, b) {
                    if (!a || !b) throw Error("clientId or ns missing!!");
                    return a + "_" + b
                }, G$: function (a, b, c) {
                    function d() {
                        var b = Array.prototype.slice.call(arguments, 0);
                        c.sendMessage.apply(c, [a].concat(b))
                    }

                    var e = this;
                    if (!c) return function () {
                        var a = b.apply(e.kn, arguments);
                        e.OT || "untilCall" === e.D.lazy && e.zw();
                        return a
                    };
                    d._proxy2Worker = !0;
                    return d
                }, E8: function (a) {
                    var b = {}, c;
                    for (c in a) a.hasOwnProperty(c) && this.uT(c, a[c], b);
                    return b
                }, uT: function (a, b, c) {
                    b = b.call(null, !1);
                    for (var d in b) b.hasOwnProperty(d) && (c[a + ":" + d] = b[d], a === this.bE && (c[d] = b[d]))
                }, Yz: function (a, b) {
                    if (!b) this.kn || (this.kn = this.E8(this.pE)), b = this.kn; else if (this.kn) for (var c in b) b.hasOwnProperty(c) && (this.kn[c] = b[c]);
                    for (c in b) if (b.hasOwnProperty(c)) {
                        var d = b[c];
                        "function" === typeof d && (this[c] = this.G$(c,
                            d, a))
                    }
                    this.iea = !!a
                }, RU: function (a, b) {
                    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1, d = a.toString(), e,
                        d = d.replace(/^function([^\(]*)\(/, function () {
                            e = "_prep_h" + h++;
                            return "function " + e + "("
                        });
                    return e ? "\n\t\t\t\t" + d + "\n\t\t\t\tif (self._wkHandlers['" + b + "'] && " + !c + ") {\n\t\t\t\t\tthrow new Error('" + b + " already exists!')\n\t\t\t\t} else {\n\t\t\t\t\tif (" + c + " && self._wkHandlers['" + b + "']) {\n\t\t\t\t\t\tvar handlerFunObj = " + e + ".call(null, self) || {}\n\n\t\t\t\t\t\tif (typeof Object.assign === 'function') {\n\t\t\t\t\t\t\tObject.assign(self._wkHandlers['" +
                        b + "'], handlerFunObj)\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tfor (var key in handlerFunObj) {\n\t\t\t\t\t\t\t\tif (handlerFunObj.hasOwnProperty(key)) {\n\t\t\t\t\t\t\t\t\tself._wkHandlers['" + b + "'][key] = handlerFunObj[key]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tself._wkHandlers['" + b + "'] = " + e + ".call(null, self) || {}\t\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t" + e + " = null;\n\t\t\t" : (console.error("No function match!!"), !1)
                }, gea: function (a) {
                    var b = this.hz, c = [], d;
                    for (d in this.pE) if (this.pE.hasOwnProperty(d)) {
                        var f = this.RU(this.pE[d], this.JK(b, d));
                        f && c.push(f)
                    }
                    b = this.D.libPolyfills || [];
                    d = 0;
                    for (f = b.length; d < f; d++) b[d] = "(" + b[d].toString() + ")(self);";
                    var h = b.join(";\n") + ";\n" + c.join(";\n"), c = this.D.hostWorker, r = this;
                    c && c !== r ? c.ZP(function (b, c) {
                        b ? a.call(r, b) : c.Nsa.sendMessage(e.KO + ":injectCode", h, function (b) {
                            b ? a.call(r, b) : a.call(r, null, c.uga)
                        })
                    }) : a.call(r, null, r.rfa(h))
                }, rfa: function (b) {
                    b = ["self._wkHandlers={};", b, "(" + d.toString() + ")(self)"].join("");
                    var c;
                    try {
                        var e =
                            a.a.createObjectURL(b);
                        c = new Worker(e);
                        setTimeout(function () {
                            a.a.revokeObjectURL(e);
                            e = null
                        }, 3E3)
                    } catch (f) {
                        return
                    }
                    return c
                }, r9: function (b) {
                    var c = 1, d = b.E7, e = this, f = !!e.D.batchSend;
                    return function (h) {
                        var r = Array.prototype.slice.call(arguments, 1),
                            s = "function" === typeof r[r.length - 1] ? r.pop() : null, u = e.hz, v = h.split(":"),
                            x = e.bE;
                        1 < v.length && (h = v[1], x = v[0]);
                        r = {jy: a.a.lf(), XO: e.JK(u, x), CA: !!s, Xx: u + "_" + c++, lN: h, iga: r};
                        s && d.push({lN: r.lN, XO: r.XO, jy: r.jy, Xx: r.Xx, CA: s});
                        f ? e.h8(b, r) : e.bw(b, r)
                    }
                }, bw: function (a, b) {
                    if (this.Ko.length) {
                        try {
                            a.postMessage(b,
                                this.Ko)
                        } catch (c) {
                            a.postMessage(b), console.error(c)
                        }
                        this.Ko.length = 0
                    } else a.postMessage(b)
                }, h8: function (b, c) {
                    b.AL || (b.AL = []);
                    b.AL.push(c);
                    if (!b.nX) {
                        var d = this;
                        b.nX = setTimeout(function () {
                            b.nX = null;
                            var c = b.AL;
                            c.length && (d.bw(b, 1 === c.length ? c[0] : {jy: a.a.lf(), Jpa: c}), c.length = 0)
                        }, 0)
                    }
                }, kfa: function (a) {
                    var b = this;
                    a.addEventListener("error", function (a) {
                        console.error(a);
                        b.Yz(null)
                    }, !1);
                    e.Gqa(a)
                }, Caa: function (a, b) {
                    var c = this;
                    c.kfa(a);
                    var d = this.r9(a);
                    if (e.b9) b.call(c, null, {sendMessage: d}); else {
                        e.b9 = !0;
                        var f =
                            [c.MU() + ":checkup", Math.random().toFixed(5) + "", Math.round(1E3 * Math.random()), !1, function (a, e) {
                                var k = !0;
                                if (a || !e || e.length !== f.length - 2) k = !1; else for (var h = 0, v = e.length; h < v; h++) if (e[h] !== f[h + 1]) {
                                    k = !1;
                                    break
                                }
                                k ? b.call(c, null, {sendMessage: d}) : (console.error(a), b.call(c, "Self checkup failed!!"))
                            }];
                        d.apply(c, f)
                    }
                }
            });
        a.Uy = e
    })(g);
    (function () {
        if (!g.ze) {
            g.ze = {Te: {}, uB: {}};
            var a = g.ze, b = g.ze.Te, c = g.a, d = g.w;
            b.start = function (b) {
                a.uB[b.id] = {
                    J: b.J, time: {M0: c.lf()}, Qga: function () {
                        return c.lf() - this.time.M0
                    }
                }
            };
            b.end = function (b) {
                var d = a.uB[b.id], e = d.time, d = c.bind(d.Qga, d), l = b.index, m = b.key;
                "function" !== typeof b.zc && (b.zc = function () {
                });
                if (void 0 === e[m]) void 0 === l ? e[m] = d() : (e[m] = [], e[m][l] = d()); else if (void 0 !== l && void 0 === e[m][l]) e[m][l] = d(); else return b.zc(Error("Duplicate Invoke"));
                b.zc(null)
            };
            b.push = function (b) {
                var c = a.uB[b.id].time,
                    d = b.key, e = b.gf;
                "function" !== typeof b.zc && (b.zc = function () {
                });
                if (void 0 === c[d]) c[d] = e; else return b.zc(Error("Duplicate Invoke"));
                b.zc(null)
            };
            b.send = function (b) {
                var c = d.vc + "://webapi.amap.com/count?", k = g.extend(e({J: a.uB[b.id].J}), b.params || {}), l = g.a;
                b.params && b.params.rs && !b.params.type && (b = a.uB[b.id].time, delete b.M0, k = g.extend(k, b));
                b = [];
                for (var m in k) l.isArray(k[m]) ? b.push([m, k[m].join("-")].join("=")) : b.push([m, k[m]].join("="));
                b.push("jl=" + (d.FB ? 1 : 0));
                if (l.Fj(window.performance, "performance") &&
                    l.Fj(window.performance.getEntriesByType, "function")) {
                    var n = 0, p = ["webapi.amap.com", "jsapi-test.amap.test", "localhost"], q = ["/maps", "/css"];
                    l.Nb(window.performance.getEntriesByType("resource"), function (a) {
                        var b = void 0, c = void 0;
                        a.name.match(/:\/\/([^:?#/]+)/) && (b = RegExp.$1);
                        a.name.match(/[^\/](\/[^/?#:]+)/) && (c = RegExp.$1);
                        b && c && l.ha(p, b) && l.ha(q, c) && (n += parseInt(a.responseEnd - a.startTime))
                    });
                    0 !== n && b.push("sd=" + n)
                }
                new g.fb.sb(c + b.join("&"))
            };
            var e = function (a) {
                var b = g.l;
                a = g.g.w_(a.J);
                return {
                    type: "q",
                    resolution: a.width + "*" + a.height,
                    k: d.key,
                    u: d.ct,
                    iw: b.mf ? 1 : 0,
                    cw: b.fZ ? 1 : 0,
                    gc: b.LO,
                    m: b.Y ? 1 : 0,
                    cv: b.lt ? 1 : 0,
                    pf: b.Nx,
                    dpr: window.devicePixelRatio,
                    screenwidth: screen.width,
                    scale: b.XI || 0,
                    detect: b.ia ? 1 : 0,
                    v: d.Bq
                }
            }
        }
    })();
    (function () {
        if (!g.dJ) {
            var a = g.a.jB({w: "Conf", extend: "extend", l: "Browser", Ou: "uncodeCoords"});
            g.dJ = function () {
                var b = new g.Uy(function () {
                    return {
                        r: function () {
                            this.Gv = {Gj: 0, mu: 0};
                            this.lk = {};
                            this.qn = [];
                            this.Jo = {};
                            this.rj = {};
                            this.vs = 0;
                            this.bW = 500
                        }, bh: function (a, b) {
                            var e = a.zd, f = a.pe, h = "building" === a.ga[0];
                            (f && e !== this.Gv.mu && this.Gv.mu || !f && !h && e !== this.Gv.Gj && this.Gv.Gj) && this.Ofa(!!f);
                            f ? this.Gv.mu = e : h || (this.Gv.Gj = e);
                            this.pma(a, b)
                        }, Ofa: function (a) {
                            if (a) this.qT(); else if (!a && Object.keys(this.lk).length) for (var b in this.lk) this.lk.hasOwnProperty(b) &&
                            (a = this.lk[b], a.os || a.abort())
                        }, Cra: function () {
                            this.vs > this.bW && this.LQ(Object.keys(this.rj).slice(0, Math.floor(this.bW / 2)))
                        }, LQ: function (a) {
                            for (var b = 0, e = a.length; b < e; b++) delete this.rj[a[b]];
                            this.vs -= a.length
                        }, sN: function (a) {
                            var b = a.ga;
                            a = a.pe;
                            var e = new XMLHttpRequest;
                            e.Cp = "";
                            e.pC = [(new Date).getTime(), a ? 1 : 0, b.join("|")].join("-");
                            return e
                        }, q0: function (a, b, e) {
                            var f = this, h = a.Bb, k = a.pe, l = [], m = h.filter(function (a) {
                                var b = f.rj[a.key];
                                if (b) {
                                    if (b.TV) return !0;
                                    l.push(a.key)
                                }
                                return !1
                            }), n = !1;
                            if (m.length && ((n =
                                m.length === h.length) || "function" !== typeof b || b(a, m), !k)) {
                                var p = [];
                                m.forEach(function (a) {
                                    a = a.key;
                                    p.push.apply(p, f.rj[a]);
                                    delete f.rj[a]
                                });
                                this.vs -= m.length;
                                this.Cr(this.extend({}, a, {VC: p, zd: a.zd, Ck: n}), e)
                            }
                            !k && l.length && this.LQ(l);
                            this.Cra();
                            return n
                        }, pma: function (a, b) {
                            function e(e, f) {
                                var m = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1;
                                if (p.lk[q.pC] || p.saa(q)) {
                                    var n = e.split("|");
                                    f && (n[0] = f + n[0]);
                                    var t = n, w = "";
                                    n[n.length - 1] && (w = n[n.length - 1], t = n.splice(0, n.length - 1));
                                    if (k) for (var n = 0, y = t.length; n <
                                    y; n++) {
                                        if (t[n]) {
                                            var z = JSON.parse(t[n]);
                                            if (z.length) {
                                                var D = z[0].split("-").slice(0, -1).join("/");
                                                p.rj[D] ? p.rj[D].push(z) : (p.rj[D] = [z], p.vs++);
                                                m && (p.rj[D].TV = !0)
                                            }
                                        }
                                    } else p.Cr(p.extend({}, a, {VC: t, zd: h, Ck: m, mP: !0}), b);
                                    return w
                                }
                                r || (p.al(l, b), r = !0)
                            }

                            var f = this, h = a.zd, k = a.pe, l = a.Bb, m = a.url;
                            if (!this.q0(a, function (a, b) {
                                var c = a.Bb, d = a.url, e = d.match(/&t=([^&]+)/)[1].split(";");
                                b.reverse().forEach(function (a) {
                                    a = c.indexOf(a);
                                    -1 !== a && e.splice(a, 1)
                                });
                                a.url = d.replace(/&t=[^&]+/, "&t=" + e.join(";"))
                            }, b)) {
                                if (this.iA() &&
                                    (this.qT(), k)) {
                                    this.al(l, b);
                                    return
                                }
                                var n = 0, p = this, q = this.sN(a);
                                k ? this.qn.push(q) : (this.lk[q.pC] = q, q.Bb = l, q.zc = b);
                                var r = !1;
                                q.onreadystatechange = function () {
                                    if (4 === q.readyState && 0 === q.status) q.os || (q.os = !0, f.al(l, b), q.onreadystatechange = null, k ? f.xX(q) : delete f.lk[q.pC]), q = null; else if (!q.os) if (3 === q.readyState) {
                                        var h = q.responseText.substring(n);
                                        q.Cp = e(h, q.Cp);
                                        n = q.responseText.length
                                    } else 4 === q.readyState && (h = q.responseText.substring(n), a.Ag && (h += "|"), e(h, q.Cp, !0), q.Cp = "", k ? f.xX(q) : delete f.lk[q.pC],
                                        q = null)
                                };
                                q.onerror = function () {
                                };
                                q.open("GET", m, !0);
                                q.send();
                                k && (q.T4 = l.map(function (a) {
                                    return a.key
                                }))
                            }
                        }, TB: function (a) {
                            function b(d, p, r) {
                                var s = [r, d, p].join("/");
                                d = e.filter(function (a) {
                                    return a.key === s
                                })[0];
                                18 < k && !n && (s += "/" + k);
                                if (d && "loaded" !== d.status && -1 !== m.indexOf(t)) if ("limg" === t) p = h[1], d.kd = p, "string" === typeof p.b && (p.b = x.mz(p.b)), r = "", (r = "object" === typeof p.u ? p.u.url : p.u) && (p.u = {
                                    url: r,
                                    Wj: "limg-" + d.key + "-" + f
                                }); else {
                                    p = {
                                        Sj: d.oa,
                                        oi: s,
                                        Oa: h,
                                        dd: t,
                                        xw: a.ht,
                                        xB: "building" === t,
                                        ci: "poilabel" === t || "roadlabel" ===
                                        t || "building" === t && q
                                    };
                                    if ("poilabel" === t || "roadlabel" === t) p.kd = d.kd;
                                    t === m[m.length - 1] && (d.status = "loaded");
                                    l.push(p)
                                }
                            }

                            var e = a.Bb, f = a.BP, h = a.MA, k = a.zd, l = a.Cc, m = a.ga, n = a.mf, p = a.NO,
                                q = a.ge, r = h[0].split("-"), s = parseInt(r[1]), u = parseInt(r[2]),
                                v = parseInt(r[0]), x = this, t = r[3], r = Math.pow(2, v);
                            10 > v && (s <= p && b(s + r, u, v), s >= r - p && b(s - r, u, v));
                            b(s, u, v)
                        }, xX: function (a) {
                            for (var b = this.qn.length - 1; 0 <= b; b--) this.qn[b] === a && this.qn.splice(b, 1)
                        }, saa: function (a) {
                            for (var b = 0, e = this.qn.length; b < e; b++) if (this.qn[b] === a) return !0;
                            return !1
                        }, iA: function () {
                            return Object.keys(this.lk).length ? !0 : !1
                        }, qT: function () {
                            if (this.qn.length) {
                                for (var a = this.qn.length - 1; 0 <= a; a--) {
                                    var b = this.qn[a];
                                    b.os || b.abort();
                                    b.T4 && this.LQ(b.T4)
                                }
                                this.qn.length = 0
                            }
                        }, al: function (a, b) {
                            b(null, {Bb: a, d1: !0, disabled: this.disabled}, {wk: !0})
                        }
                    }
                }, {batchSend: !1});
                b.Jf(null, new Function("\n     return {\n      " + a.Conf + ": " + JSON.stringify(g.w) + ",\n      " + a.extend + ": " + g.extend.toString() + ",\n      " + a.Browser + ": " + JSON.stringify(g.l) + ",\n      " + a.uncodeCoords + ": " +
                    g.a.Ou.toString() + "\n     }"));
                return b
            }
        }
    })();
    g.g = {
        CLASS_NAME: "DomUtil", get: function (a) {
            return "string" === typeof a ? document.getElementById(a) : a
        }, zB: function (a, b, c) {
            return a.parentNode == b ? !0 : a.parentNode && a.parentNode !== document.body && !g.g.Fm(a.parentNode, c) ? g.g.zB(a.parentNode, b) : !1
        }, fr: function (a) {
            if (!a) return [0, 0];
            var b = a.clientWidth, c = a.clientHeight;
            b && c || !a.childNodes[0] || (b = b || a.childNodes[0].clientWidth, c = c || a.childNodes[0].clientHeight);
            window.opera && (b = Math.max(b, a.childNodes[0].scrollWidth), c = Math.max(c, a.childNodes[0].scrollHeight));
            return [b, c]
        }, Uxa: function (a, b) {
            var c = document.head || document.getElementsByTagName("head")[0];
            if (c) {
                var d = document.createElement("link");
                d.setAttribute("rel", "stylesheet");
                d.setAttribute("type", "text/css");
                d.setAttribute("href", a);
                b ? c.appendChild(d) : c.insertBefore(d, c.firstChild)
            } else document.write("<link rel='stylesheet' href='" + a + "'/>")
        }, yd: function (a, b) {
            var c = a.style[b];
            !c && a.currentStyle && (c = a.currentStyle[b]);
            c && "auto" !== c || !document.defaultView || (c = (c = document.defaultView.getComputedStyle(a,
                null)) ? c[b] : null);
            c && "auto" !== c || "height" !== b || (c = a.clientHeight + "px");
            c && "auto" !== c || "width" !== b || (c = a.clientWidth + "px");
            return "auto" === c ? null : c
        }, NG: function (a) {
            if (a) return new g.md(a.clientWidth || document.body.clientWidth, a.clientHeight || (g.l.mr ? "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight : document.body.clientHeight), !0)
        }, w_: function (a) {
            return new g.md(a.clientWidth, a.clientHeight)
        }, JO: function (a) {
            var b = 0, c = 0, d = a, e = document.body, f = document.documentElement,
                h, k = g.l.Rt;
            do {
                b += d.offsetTop || 0;
                c += d.offsetLeft || 0;
                b += parseInt(g.g.yd(d, "borderTopWidth"), 10) || 0;
                c += parseInt(g.g.yd(d, "borderLeftWidth"), 10) || 0;
                h = g.g.yd(d, "position");
                if (d.offsetParent === e && "absolute" === h) break;
                if ("fixed" === h) {
                    b += e.scrollTop || f.scrollTop || 0;
                    c += e.scrollLeft || f.scrollLeft || 0;
                    break
                }
                d = d.offsetParent
            } while (d);
            d = a;
            do {
                if (d === e) break;
                b -= d.scrollTop || 0;
                c -= d.scrollLeft || 0;
                g.g.Dia() || !g.l.D5 && !k || (c += d.scrollWidth - d.clientWidth, k && "hidden" !== g.g.yd(d, "overflow-y") && "hidden" !== g.g.yd(d, "overflow") &&
                (c += 17));
                d = d.parentNode
            } while (d);
            return new g.G(c, b)
        }, Dia: function () {
            g.g.G9 || (g.g.G9 = !0, g.g.F9 = "ltr" === g.g.yd(document.body, "direction"));
            return g.g.F9
        }, create: function (a, b, c, d) {
            a = document.createElement(a);
            c && (a.className = c);
            b && (d && "before" === d ? b.insertBefore(a, b.firstChild) : b.appendChild(a));
            return a
        }, NZ: function () {
            document.selection && document.selection.empty && document.selection.empty();
            this.nda || (this.nda = document.onselectstart, document.onselectstart = g.a.g_)
        }, a_: function () {
        }, wra: function (a, b, c) {
            c ?
                this.Ra(a, b) : this.$a(a, b)
        }, Fm: function (a, b) {
            if (a && b) return 0 < a.className.length && RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
        }, Ra: function (a, b) {
            a && b && (a.classList && a.classList.add ? a.classList.add(b) : g.g.Fm(a, b) || (a.className += (a.className ? " " : "") + b))
        }, kqa: function (a, b) {
            a && (a.className = b || "")
        }, $a: function (a, b) {
            function c(a, c) {
                return c === b ? "" : a
            }

            a && b && (a.classList && a.classList.remove ? a.classList.remove(b) : a.className = a.className.replace(/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, ""))
        }, L_: function (a, b) {
            return 1 ===
            b ? "" : "opacity" in a.style ? "opacity:" + b : 8 <= document.documentMode ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) + ")'" : "filter:alpha(opacity=" + Math.ceil(100 * b) + ")"
        }, Kp: function (a, b) {
            if (a.style) if ("opacity" in a.style) a.style.opacity = b; else if ("filter" in a.style) {
                var c = Math.round(100 * b);
                a.style.filter = "";
                100 !== c && (a.style.filter = " progid:DXImageTransform.Microsoft.Alpha(opacity=" + c + ")")
            }
        }, zR: function (a) {
            for (var b = document.documentElement.style, c = 0; c < a.length; c += 1) if (a[c] in
                b) return a[c];
            return !1
        }, $_: function (a) {
            var b = g.l.E5;
            return "translate" + (b ? "3d" : "") + "(" + a.x + "px," + a.y + "px" + ((b ? ",0" : "") + ")")
        }, Xwa: function (a, b) {
            return g.g.$_(b.add(b.Nd(-1 * a))) + (" scale(" + a + ") ")
        }, b4: function (a, b, c) {
            a.Bi = b;
            !c && g.l.BF ? (b = g.g.$_(b), c = a.style[g.g.Xf].split("rotate"), 1 < c.length ? (c[0] = b, a.style[g.g.Xf] = c.join("rotate")) : a.style[g.g.Xf] = b, g.l.U1 && (a.style.WebkitBackfaceVisibility = "hidden")) : (a.style.left = b.x + "px", a.style.top = b.y + "px")
        }, ne: function (a) {
            a.Bi || (a.Bi = a.style.left ? new g.G(parseInt(a.style.left),
                parseInt(a.style.top)) : new g.G(0, 0));
            return a.Bi
        }, Fza: function (a, b) {
            a = a instanceof Array ? a : [a];
            for (var c = 0; c < a.length; c += 1) a[c].style.cssText = b
        }, U3: function (a, b) {
            ";" !== b[b.length - 1] && (b += ";");
            return b.toLowerCase() !== a.style.cssText.replace(/ /g, "").toLowerCase() ? (a.style.cssText = b, !0) : !1
        }, Ua: function (a, b) {
            a = a instanceof Array ? a : [a];
            for (var c = 0; c < a.length; c += 1) for (var d in b) b.hasOwnProperty(d) && (a[c].style[d] = b[d]);
            return this
        }, kC: function (a) {
            for (; a.childNodes.length;) a.removeChild(a.childNodes[0])
        },
        remove: function (a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        }, rotate: function (a, b, c) {
            var d = g.g.Xf;
            c = c || {x: a.clientWidth / 2, y: a.clientHeight / 2};
            d ? (a.style[d] = "" + (" rotate(" + b + "deg)"), a.style[g.g.Ur[d] + "-origin"] = c.x + "px " + c.y + "px") : (d = Math.cos(b * Math.PI / 180), b = Math.sin(b * Math.PI / 180), a.style.filter = "progid:DXImageTransform.Microsoft.Matrix()", 0 < a.filters.length && (a = a.filters.item(0), a.Dx = -c.x * d + c.y * b + c.x, a.Dy = -c.x * b - c.y * d + c.y, a.M11 = a.M22 = d, a.M12 = -(a.M21 = b)))
        }, W_: function (a, b, c) {
            var d = g.g.Xf;
            c = c ||
                {x: a.clientWidth / 2, y: a.clientHeight / 2};
            return d ? g.g.Ur[d] + ":" + ("" + (" rotate(" + b + "deg)")) + ";" + (g.g.Ur[d] + "-origin:" + c.x + "px " + c.y + "px") : ""
        }, ko: function (a, b, c) {
            a.width = b;
            a.height = c
        }, getElementsByClassName: function (a, b, c) {
            b = b || "*";
            c = c || document;
            if (c.getElementsByClassName) return c.getElementsByClassName(a);
            b = c.getElementsByTagName(b);
            a = RegExp("(^|\\s)" + a + "(\\s|$)");
            c = [];
            for (var d = 0, e; d < b.length; d++) e = b[d], a.test(e.className) && c.push(e);
            return c
        }, fillText: function (a, b) {
            if (a) return void 0 !== a.textContent ?
                a.textContent = b : void 0 !== a.innerText ? a.innerText = b : a.innerHTML = b, a
        }
    };
    (function () {
        var a = g.g.zR(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), b;
        g.extend(g.g, {
            NZ: function () {
                g.F.h(window, "selectstart", g.F.preventDefault);
                if (a) {
                    var c = document.documentElement.style;
                    "none" !== c[a] && (b = c[a], c[a] = "none")
                }
            }, a_: function () {
                g.F.I(window, "selectstart", g.F.preventDefault);
                a && "none" !== b && (document.documentElement.style[a] = b, b = "none")
            }, via: function () {
                g.F.h(window, "dragstart", g.F.preventDefault)
            }, cja: function () {
                g.F.I(window, "dragstart", g.F.preventDefault)
            }
        })
    })();
    g.g.Xf = g.g.zR(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]);
    g.g.Ur = {
        transform: "transform",
        WebkitTransform: "-webkit-transform",
        OTransform: "-o-transform",
        MozTransform: "-moz-transform",
        msTransform: "-ms-transform"
    };
    g.g.xD = g.g.zR(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
    g.g.Jta = "webkitTransition" === g.g.xD || "OTransition" === g.g.xD ? g.g.xD + "End" : "transitionend";
    g.F = {
        h: function (a, b, c, d) {
            function e(b) {
                b = b || window.event;
                b.target = b.target || b.srcElement;
                return c.call(d || a, b, k)
            }

            var f = g.a.Ab(a) + "_" + g.a.Ab(c) + "_" + g.a.Ab(d || a), h = b + f;
            if (a[h]) return this;
            var k = b;
            g.l.WN && "mousewheel" === b && (b = "DOMMouseScroll");
            if (g.l.mr && ("mouseover" === b || "mouseout" === b)) {
                var l = e;
                b = "mouseover" === b ? "mouseenter" : "mouseleave";
                e = function (a) {
                    l(a)
                }
            }
            if (g.l.T2 && 0 === b.indexOf("touch")) return a[h] = e, this.Wfa(a, b, e, f);
            g.l.sf && "dblclick" === b && this.Ufa && this.Ufa(a, e, f);
            "addEventListener" in a ? a.addEventListener(b,
                e, !1) : "attachEvent" in a ? a.attachEvent("on" + b, e) : a["on" + b] = e;
            a[h] = e;
            return this
        }, Ij: function (a, b, c, d) {
            var e = this;
            this.h(a, b, function h(k) {
                e.I(a, b, h, d);
                return c.call(d || a, k || window.event, b)
            }, d)
        }, I: function (a, b, c, d) {
            c = g.a.Ab(a) + "_" + g.a.Ab(c) + "_" + g.a.Ab(d || a);
            d = b + c;
            var e = a[d];
            g.l.WN && "mousewheel" === b && (b = "DOMMouseScroll");
            !g.l.mr || "mouseover" !== b && "mouseout" !== b || (b = "mouseover" === b ? "mouseenter" : "mouseleave");
            g.l.T2 && -1 < b.indexOf("touch") ? this.mpa(a, b, c) : g.l.sf && "dblclick" === b && this.ipa ? this.ipa(a, c) :
                "removeEventListener" in a ? a.removeEventListener(b, e, !1) : "detachEvent" in a && -1 === b.indexOf("touch") ? e && a.detachEvent("on" + b, e) : a["on" + b] = null;
            a[d] = void 0;
            return this
        }, Mza: function (a, b) {
            var c = document.createEvent("MouseEvents");
            c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
            b.target.dispatchEvent(c)
        }, stopPropagation: function (a) {
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            return this
        }, Uqa: function (a) {
            var b = g.F.stopPropagation;
            g.l.sf && (g.F.h(a,
                "touchstart", b, this), g.F.h(a, "touchmove", b, this), g.F.h(a, "touchend", b, this));
            g.l.Y || (g.F.h(a, "mousedown", b, this), g.F.h(a, "mouseup", b, this), g.F.h(a, "mousemove", b, this));
            g.l.rQ && (g.F.h(a, "pointerdown", b, this), g.F.h(a, "pointerup", b, this), g.F.h(a, "pointermove", b, this));
            g.l.W1 && (g.F.h(a, "MSPointerDown", b, this), g.F.h(a, "MSPointerUp", b, this), g.F.h(a, "MSPointerMove", b, this))
        }, preventDefault: function (a) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            return this
        }, stop: function (a) {
            return g.F.preventDefault(a).stopPropagation(a)
        },
        jqa: function (a) {
            return a && a.getBoundingClientRect ? (a.EJ = a.getBoundingClientRect(), a.dT = [a.clientLeft, a.clientTop], !0) : !1
        }, gsa: function (a) {
            a.EJ && (a.EJ = null, a.dT = null)
        }, mja: function (a, b) {
            var c = b.EJ || b.getBoundingClientRect(), d = b.dT || [b.clientLeft, b.clientTop];
            return new g.G(a.clientX - c.left - d[0], a.clientY - c.top - d[1])
        }, wl: function (a, b) {
            if (b && b.getBoundingClientRect) return this.mja(a, b);
            var c = document.body, d = document.documentElement,
                c = new g.G(g.l.sf ? a.pageX : a.clientX + (c.scrollLeft || d.scrollLeft), g.l.sf ?
                    a.pageY : a.clientY + (c.scrollTop || d.scrollTop));
            return b ? c.Ya(g.g.JO(b)) : c
        }, b1: function (a) {
            return 1 === a.which || 0 === a.button || 1 === a.button
        }
    };
    g.extend(g.F, {
        zL: [], eW: !1, Wfa: function (a, b, c, d) {
            switch (b) {
                case "touchstart":
                    return this.Zfa(a, b, c, d);
                case "touchend":
                    return this.Xfa(a, b, c, d);
                case "touchmove":
                    return this.Yfa(a, b, c, d)
            }
        }, Gn: function (a) {
            if (g.l.rQ) return a;
            switch (a) {
                case "pointerdown":
                    return "MSPointerDown";
                case "pointerup":
                    return "MSPointerUp";
                case "pointercancel":
                    return "MSPointerCancel";
                case "pointermove":
                    return "MSPointerMove"
            }
        }, Zfa: function (a, b, c, d) {
            function e(a) {
                for (var b = !1, d = 0; d < f.length; d += 1) if (f[d].pointerId === a.pointerId) {
                    b = !0;
                    break
                }
                b || f.push(a);
                a.touches = f.slice();
                a.changedTouches = [a];
                c(a)
            }

            var f = this.zL;
            a["_amap_touchstart" + d] = e;
            a.addEventListener(this.Gn("pointerdown"), e, !1);
            this.eW || (a = function (a) {
                for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) {
                    f.splice(b, 1);
                    break
                }
            }, document.documentElement.addEventListener(this.Gn("pointerup"), a, !1), document.documentElement.addEventListener(this.Gn("pointercancel"), a, !1), this.eW = !0);
            return this
        }, Yfa: function (a, b, c, d) {
            function e(a) {
                if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE ||
                    0 !== a.buttons) {
                    for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) {
                        f[b] = a;
                        break
                    }
                    a.touches = f.slice();
                    a.changedTouches = [a];
                    c(a)
                }
            }

            var f = this.zL;
            a["_amap_touchmove" + d] = e;
            a.addEventListener(this.Gn("pointermove"), e, !1);
            return this
        }, Xfa: function (a, b, c, d) {
            function e(a) {
                for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) {
                    f.splice(b, 1);
                    break
                }
                a.touches = f.slice();
                a.changedTouches = [a];
                c(a)
            }

            var f = this.zL;
            a["_amap_touchend" + d] = e;
            a.addEventListener(this.Gn("pointerup"), e, !1);
            a.addEventListener(this.Gn("pointercancel"),
                e, !1);
            return this
        }, mpa: function (a, b, c) {
            c = a["_amap_" + b + c];
            switch (b) {
                case "touchstart":
                    a.removeEventListener(this.Gn("pointerdown"), c, !1);
                    break;
                case "touchmove":
                    a.removeEventListener(this.Gn("pointermove"), c, !1);
                    break;
                case "touchend":
                    a.removeEventListener(this.Gn("pointerup"), c, !1), a.removeEventListener(this.Gn("pointercancel"), c, !1)
            }
            return this
        }
    });
    (function () {
        function a(a) {
            var b = a.target || a.srcElement;
            b.mT && f(b.mT);
            b.mT = e(function () {
                var c = b.vo;
                if (c && c.uo) for (var d = 0; d < c.uo.length; d += 1) c.uo[d].call(c, a)
            })
        }

        function b() {
            var b = this.contentDocument.defaultView;
            b.vo = this.O7;
            b.addEventListener("resize", a);
            a.call(b, {target: b})
        }

        var c = document.attachEvent, d = navigator.userAgent.match(/(Trident|Edge)/), e = g.a.Kc, f = g.a.Vh;
        g.extend(g.F, {
            $fa: function (e, f) {
                if (!e.uo) if (e.uo = [], c) e.vo = e, e.attachEvent("onresize", a); else {
                    "static" === window.getComputedStyle(e).position &&
                    (e.style.position = "relative");
                    var l = e.vo = document.createElement("object");
                    l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
                    l.O7 = e;
                    l.onload = b;
                    l.type = "text/html";
                    d && e.appendChild(l);
                    l.data = "about:blank";
                    d || e.appendChild(l)
                }
                e.uo.push(f)
            }, aza: function (b, d) {
                b.uo.splice(b.uo.indexOf(d), 1);
                b.uo.length || (c ? b.detachEvent("onresize", a) : (b.vo.contentDocument.defaultView.removeEventListener("resize",
                    a), b.vo = !b.removeChild(b.vo)))
            }, rha: function (a) {
                a.uo = null;
                if (a.vo) {
                    var b = a.vo;
                    b.parentNode === a && b.parentNode.removeChild(b);
                    a.vo = null
                }
            }
        })
    })();
    g.pb = {
        $ma: g.w.vb + "/maps", ut: g.Z.ut, LP: 0, Mx: [], pt: {}, dh: function (a, b) {
            function c() {
                d += 1;
                d === e.length && b && b()
            }

            a.length || b();
            for (var d = 0, e = [], f = 0; f < a.length; f += 1) {
                var h = this.ut[a[f]];
                if (h) for (var k = 0; k < h.length; k += 1) e.push(h[k]);
                e.push(a[f])
            }
            for (f = 0; f < e.length; f += 1) this.SN(e[f], c)
        }, AB: function (a) {
            for (var b = 0; b < a.length; b += 1) if (1 !== this.NA(a[b]).status) return !1;
            return !0
        }, SN: function (a, b) {
            var c = this.NA(a);
            if (1 === c.status) b && b(); else {
                b && c.Aw.push(b);
                try {
                    if (g.l.tr && window.localStorage) {
                        var d = window.localStorage["_AMap_" +
                        a];
                        d && (d = JSON.parse(d), d.version === g.w.hj ? (window._jsload_(a, d.script, !0), d.css && window._cssload_(a, d.css, !0)) : window.localStorage.removeItem("_AMap_" + a))
                    }
                } catch (e) {
                }
                if (0 === c.status) {
                    this.Qoa(a);
                    var f = this;
                    f.LP || (f.LP = 1, window.setTimeout(function () {
                        f.LP = 0;
                        var a = f.$ma + "/modules?v=" + g.w.Bq + "&key=" + g.w.key + "&m=" + f.Mx.join(",") + "&vrs=" + g.w.hj;
                        g.pb.ss(f.Mx.join(","));
                        f.Mx = [];
                        c.pI = f.wma(a)
                    }, 1));
                    c.status = -1
                }
            }
        }, ss: function (a) {
            a = g.w.Od + "/v3/log/init?" + ["s=rsv3&product=JsModule&key=" + g.w.key, "m=" + a].join("&");
            new g.fb.sb(a, {callback: "callback"})
        }, load: function (a, b) {
            var c = this.ut[a];
            if (c) {
                for (var d = [], e = 0; e < c.length; e += 1) d.push(c[e]);
                d.push(a);
                for (var f = 0, c = function () {
                    f += 1;
                    f === d.length && b && b()
                }, e = 0; e < d.length; e += 1) this.SN(d[e], c)
            } else this.SN(a, b)
        }, Qoa: function (a) {
            for (var b = 0; b < this.Mx.length; b += 1) if (this.Mx[b] === a) return;
            this.Mx.push(a)
        }, Rm: function (a, b) {
            var c = this.NA(a);
            try {
                eval(b)
            } catch (d) {
                return
            }
            c.status = 1;
            for (var e = 0, f = c.Aw.length; e < f; e += 1) c.Aw[e]();
            c.Aw = []
        }, vd: function (a, b) {
            var c = this;
            c.timeout = setTimeout(function () {
                1 !==
                c.pt[a].status ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
            }, 5E3)
        }, NA: function (a) {
            this.pt[a] || (this.pt[a] = {}, this.pt[a].status = 0, this.pt[a].Aw = []);
            return this.pt[a]
        }, remove: function (a) {
            this.pt[a] = null
        }, wma: function (a) {
            g.w.mode && (a += "&mode=" + g.w.mode);
            var b = document.createElement("script");
            b.charset = "utf-8";
            a && 0 === a.indexOf(g.w.vb) && (b.crossOrigin = "Anonymous");
            b.src = a;
            document.body.appendChild(b);
            return b
        }
    };
    window._jsload_ = function (a, b, c) {
        var d = g.pb.NA(a);
        d.pI && 0 <= g.a.indexOf(document.body.childNodes, d.pI) && document.body.removeChild(d.pI);
        d.pI = null;
        try {
            if (!c && window.localStorage && b && "" !== b && g.l.tr) {
                var e = window.localStorage["_AMap_" + a], e = e || "{}", e = JSON.parse(e);
                e.version !== g.w.hj || e.script ? window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                    version: g.w.hj,
                    script: b
                })) : window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                    version: g.w.hj,
                    script: b,
                    css: e.css
                }))
            }
        } catch (f) {
        }
        g.pb.Rm(a, b)
    };
    window._cssload_ = function (a, b, c) {
        try {
            !c && window.localStorage && b && "" !== b && g.l.tr && window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                css: b,
                version: g.w.hj
            }))
        } catch (d) {
        }
        var e = document.createElement("style");
        e.type = "text/css";
        -1 === g.w.vb.indexOf("webapi.amap.com") && (b = b.replace(/webapi.amap.com/gi, g.w.vb.split("://")[1]));
        "https" === g.w.vc && (b = b.replace(/http:/gi, "https:"));
        e.styleSheet ? (a = function () {
            try {
                e.styleSheet.cssText = b
            } catch (a) {
            }
        }, e.styleSheet.disabled ? setTimeout(a, 10) : a()) : e.appendChild(document.createTextNode(b));
        a = document.head || document.getElementsByTagName("head")[0];
        2 > a.childNodes.length ? a.appendChild(e) : a.insertBefore(e, a.childNodes[1])
    };
    (function (a) {
        var b = g.l;
        if (!g.indexedDB && b.ni) {
            var c = a.indexedDB || a.webkitIndexedDB || a.msIndexedDB || a.mozIndexedDB,
                d = a.IDBKeyRange || a.uAa || a.hya || a.gya;
            if (c) {
                var e = g.a, f = null;
                a = "amap-jsapi" + (a.lta ? "-debug" : "");
                var h = g.extend({}, g.ra), k;
                try {
                    k = c.open(a), k.onsuccess = function () {
                        f = this.result;
                        h.q("dbReady", {status: "success"})
                    }, k.onerror = function () {
                        h.q("dbReady", {status: "error"})
                    }, k.onblocked = function () {
                        h.q("dbReady", {status: "blocked"})
                    }, k.onupgradeneeded = function (a) {
                        a.currentTarget.result.createObjectStore("tile",
                            {keyPath: "tileKey"})
                    }
                } catch (l) {
                    b.ni = !1
                } finally {
                    if (!b.ni) return
                }
                var b = function (a) {
                    return function () {
                        try {
                            return a.apply(this, arguments)
                        } catch (b) {
                            var c = arguments[arguments.length - 1];
                            "function" === typeof c && setTimeout(function () {
                                c({code: 4, mG: b})
                            }, 1)
                        }
                    }
                }, m = b(function (a, b) {
                    return null === f ? (setTimeout(function () {
                        b && b({code: 3})
                    }, 1), null) : f.transaction("tile", a).objectStore("tile")
                });
                g.indexedDB = {
                    sA: function (a, b) {
                        f ? "function" === typeof a && a() : h.h("dbReady", function (c) {
                            "success" === c.status ? "function" === typeof a &&
                                a() : "function" === typeof b && b({code: 3, status: status})
                        })
                    }, count: b(function (a) {
                        var b = this, c = arguments;
                        this.sA(function () {
                            b.ss.apply(b, c)
                        }, a)
                    }), ss: b(function (a) {
                        var b = m("readonly", a).count();
                        b.onsuccess = function () {
                            a(null, b.result)
                        };
                        b.onerror = function () {
                            a({code: 7})
                        }
                    }), get: b(function (a, b, c) {
                        var d = this, e = setTimeout(function () {
                            e && (e = null, c && c({code: 7}))
                        }, b.timeout || 1E3);
                        this.sA(function () {
                            d.c$.call(d, a, function (a, b) {
                                e && (clearTimeout(e), e = null, c(a, b))
                            })
                        }, c)
                    }), c$: b(function (a, b) {
                        var c = m("readonly", b);
                        if (e.isArray(a)) {
                            var d,
                                f;
                            (function () {
                                function e(b) {
                                    var f = c.get(a[b]);
                                    f.onsuccess = function (a) {
                                        a.target.result && (d[b] = a.target.result);
                                        k()
                                    };
                                    f.onerror = k
                                }

                                function k() {
                                    f++;
                                    f === a.length && b(null, d)
                                }

                                d = [];
                                for (var h = f = 0, l = a.length; h < l; h++) e(h)
                            })()
                        } else {
                            var k = c.get(a);
                            k.onsuccess = function (a) {
                                b && b(null, a.target.result)
                            };
                            k.onerror = function () {
                                b && b({code: 1})
                            }
                        }
                    }), add: b(function (a, b) {
                        var c = this, d = arguments;
                        this.sA(function () {
                            c.S7.apply(c, d)
                        }, b)
                    }), S7: b(function (a, b) {
                        function c() {
                            0 === --f && b(null)
                        }

                        e.isArray(a) || (a = [a]);
                        var d = a.length, f = d,
                            k = 0, h = Math.ceil(d / 5), l = setInterval(function () {
                                if (k++ < h) {
                                    var e = 5 * k;
                                    e > d && (e = d);
                                    for (var f = m("readwrite", b), s = 5 * (k - 1); s < e; s++) {
                                        var z = f.put(a[s]);
                                        z.onsuccess = z.onerror = c
                                    }
                                } else clearInterval(l)
                            }, 32)
                    }), remove: b(function (a, b) {
                        var c = this, d = arguments;
                        this.sA(function () {
                            c.yea.apply(c, d)
                        }, b)
                    }), yea: b(function (a, b) {
                        var c = m("readwrite", b);
                        e.isArray(a) || (a = [a]);
                        a = a.sort();
                        c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function (c) {
                            if (c = c.target.result) {
                                if (e.ha(c.value.tileKey, a)) c["delete"]();
                                for (var d = -1, f =
                                    0, k = a.length; f < k; f++) if (a[f] > c.value.tileKey) {
                                    d = f;
                                    break
                                }
                                c["continue"](a[d])
                            } else b && b(null)
                        }
                    }), clear: b(function (a) {
                        var b = this, c = arguments;
                        this.sA(function () {
                            b.RD.apply(b, c)
                        }, a)
                    }), RD: b(function (a) {
                        var b = m("readwrite", a).clear();
                        b.onsuccess = function () {
                            a && a(null)
                        };
                        b.onerror = function () {
                            a && a({code: 2})
                        }
                    })
                }
            } else b.ni = !1
        }
    })(window);
    (function () {
        function a(a) {
            u.data.keys = u.data.keys.filter(function (b) {
                return !r.ha(a, b)
            }).concat(a)
        }

        function b(a) {
            var b = g.w.hj + "|" + a.oi.replace(/\//g, ",") + "|" + (a.mf ? "w" : "v") + "|", c;
            c = a.ia;
            var d = a.ge;
            c = [c ? 1 : 0, q.Y ? 1 : 0, d ? 1 : 0].join();
            return b + c + "|" + m(a.url)
        }

        function c() {
            u.data.keys.length >= u.mJ && d()
        }

        function d() {
            var a = u.data.keys.length, b = Math.floor(a / 2);
            a > u.mJ && (b = Math.floor(a - u.mJ / 2));
            a = u.data.keys.slice(0, b);
            u.data.keys = u.data.keys.slice(b + 1);
            s.remove(a, function (a) {
                a && 3 === a.code && (q.ni = !1)
            })
        }

        function e() {
            var a =
                0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r.Br;
            k();
            x.setItem(u.key, u.data, !0);
            f(a)
        }

        function f(a) {
            q.ni && s && s.clear(function (b) {
                b && 3 === b.code && (q.ni = !1);
                a()
            })
        }

        function h() {
            k();
            var a = x.getItem(u.key, !0);
            a && (a.VI === u.data.VI && a.HY === u.data.HY ? u.data = a : e())
        }

        function k() {
            u.data = {VI: q.vf, HY: g.w.hj, keys: [], hf: {}, Bm: {}};
            u.Vr = {}
        }

        function l(a) {
            a && (u.data.VI = a, q.vf = a)
        }

        function m(a) {
            var b = "limg";
            /flds=([^&]+)/.test(a) && (b = RegExp.$1);
            return b
        }

        function n(a) {
            if ("object" === typeof a && null !== a) {
                var b = [];
                if (r.isArray(a)) if (Object.keys(a).length == a.length) b = a.map(function (a) {
                    return n(a)
                }); else {
                    b.push("__arrayObject");
                    var c = {}, d;
                    for (d in a) (0 > parseInt(d) || isNaN(parseInt(d))) && a.hasOwnProperty(d) && (c[d] = n(a[d]));
                    b.push(c);
                    b.push(a.map(function (a) {
                        return n(a)
                    }))
                } else if (r.Fj(a, "Float32Array")) b.push("__Float32Array"), b.push(Array.prototype.slice.call(a)); else if (r.Fj(a, "Uint16Array")) b.push("__Uint16Array"), b.push(Array.prototype.slice.call(a)); else for (d in b = {}, a) a.hasOwnProperty(d) && (b[d] = n(a[d]));
                return b
            }
            return a
        }

        function p(a) {
            if ("object" === typeof a && null !== a) {
                var b = {};
                if (r.isArray(a)) if ("__Float32Array" === a[0]) b = new Float32Array(a[1]); else if ("__Uint16Array" === a[0]) b = new Uint16Array(a[1]); else if ("__arrayObject" === a[0]) {
                    b = p(a[2]);
                    a = a[1];
                    for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c])
                } else b = a.map(function (a) {
                    return p(a)
                }); else for (c in a) a.hasOwnProperty(c) && (b[c] = p(a[c]));
                return b
            }
            return a
        }

        var q = g.l, r = g.a;
        if (!g.mj && q.ni) {
            var s = g.indexedDB, u = {mJ: 1E3, key: "_AMap_data.tileKeys"}, v = [], x = {
                getItem: function (a,
                                   b) {
                    var c = localStorage.getItem(a);
                    if (c && b) {
                        var d;
                        try {
                            d = JSON.parse(c)
                        } catch (e) {
                            d = null
                        }
                        c = d
                    }
                    return c
                }, setItem: function (a, b, c) {
                    var d = b;
                    c && (d = JSON.stringify(b), 1.5 < d.length / 1024 / 1024 && Object.keys(b.Bm).length && (b.Bm = {}, d = JSON.stringify(b)));
                    try {
                        localStorage.setItem(a, d)
                    } catch (f) {
                        e()
                    }
                }
            };
            g.mj = {
                clear: e, get: function (c, d) {
                    function f(a) {
                        var b = {ZO: l, T1: H, cya: x, hf: u.data.hf};
                        a && A.length && (/\|limg/.test(A[0]) ? b.z1 = a.map(function (a) {
                            return JSON.parse(a.data)
                        }).filter(function (a) {
                            return a && a.key
                        }) : b.Cc = k(a));
                        d && d(null,
                            b);
                        x.length && (l = [], H = [])
                    }

                    function k(a) {
                        var b = [];
                        m(c.url).split(",").forEach(function (c) {
                            a.forEach(function (a) {
                                if (a = JSON.parse(a.data[c])) {
                                    var d = a.Sj;
                                    a.Sj = new g.dq(d.z, d.x, d.y);
                                    a.Sj.S = d.S;
                                    b.push(a)
                                }
                            })
                        });
                        return b
                    }

                    var h = "FS" === c.type;
                    if (!q.tr || !(h || q.ni && 0 !== u.data.keys.length)) return d({code: 1});
                    var l = [], x = [], A = [], H = [], G = [];
                    c.ora.forEach(function (a) {
                        var d = !1, e = b({oi: a.key, url: c.url, mf: c.mf, ia: c.o.ia, ge: c.ge});
                        h && (v.push(e), u.data.Bm[e] && (l.push(a), A.push(e), G.push({
                            data: p(u.data.Bm[e]),
                            tileKey: e
                        }),
                            d = !0));
                        d || (q.ni && r.ha(u.data.keys, e) ? (A.push(e), x.push(a)) : H.push(a))
                    });
                    if (h && 0 === x.length || 0 === A.length) return f(G);
                    h && G.length && G.forEach(function (a) {
                        a = r.indexOf(A, a.tileKey);
                        A.splice(a, 1)
                    });
                    s.get(A, {timeout: c.timeout || 1E3}, function (b, c) {
                        if (b || c.length !== A.length) b && 3 === b.code ? q.ni = !1 : e(), H = x, x = [], f(null); else {
                            if (h) for (var d = c.length - 1; 0 <= d; d--) {
                                var k = c[d];
                                k && k.data ? u.data.Bm[k.tileKey] = n(k.data) : H.push(x.splice(d, 1)[0])
                            }
                            l = x;
                            x = [];
                            f(c);
                            a(A)
                        }
                    });
                    (H.length || x.length) && f(G)
                }, Pu: function (a) {
                    a.Bb.forEach(function (c) {
                        c =
                            b({oi: c.key, url: a.url, mf: a.mf, ia: a.o.ia, ge: a.ge});
                        u.Vr[c] && delete u.Vr[c]
                    })
                }, set: function (a, c) {
                    a.vf && a.vf !== u.data.VI && (l(a.vf), e(), c && c({code: 2}));
                    !a.kd && a.Cc ? a.Cc.forEach(function (c) {
                        var d = b({oi: c.oi, url: a.url, mf: a.mf, ia: a.o.ia, ge: a.ge});
                        if (q.ni || r.ha(v, d)) {
                            var e = u.Vr[d] || {};
                            e[c.dd] = c.Oa;
                            u.Vr[d] = e
                        }
                    }) : a.data && a.data.forEach(function (c) {
                        var d = b({oi: c.key, url: a.url, mf: a.mf, ia: a.o.ia, ge: a.ge});
                        if (q.ni || r.ha(v, d)) u.Vr[d] = c.data
                    });
                    u.data.hf = {"x-vd-v": a["x-vd-v"], tv: a.tv, bgc: a.bgc}
                }, flush: function () {
                    var a =
                        !0;
                    return function () {
                        var b = this;
                        if (a) {
                            if (Object.keys(u.data.Bm).length) for (var c in u.data.Bm) u.data.Bm.hasOwnProperty(c) && !r.ha(v, c) && delete u.data.Bm[c];
                            q.ni ? s.count(function (a, c) {
                                a || (c !== u.data.keys.length ? (u.data.keys.length && (u.data.keys = []), f(function () {
                                    b.gE(!0)
                                })) : b.gE(!0))
                            }) : b.gE(!0);
                            a = !1
                        } else b.gE()
                    }
                }(), gE: function () {
                    var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1, b = {}, d = [],
                        f = Object.keys(u.Vr), k = [];
                    f.length ? (f.forEach(function (a) {
                        var c = u.Vr[a];
                        a.split("|").pop().split(",").every(function (a) {
                            return "limg" ===
                            a ? !0 : c && void 0 !== c[a]
                        }) ? (r.ha(u.data.keys, a) || (k.push(a), d.push({
                            tileKey: a,
                            data: c
                        })), r.ha(v, a) && void 0 === u.data.Bm[a] && (u.data.Bm[a] = c)) : b[a] = c
                    }), d.length && (q.ni ? s.add(d, function (a) {
                        a ? 3 !== a.code ? e() : q.ni = !1 : (u.data.keys = u.data.keys.concat(k), x.setItem(u.key, u.data, !0), c())
                    }) : x.setItem(u.key, u.data, !0)), u.Vr = b) : (a && x.setItem(u.key, u.data, !0), c())
                }
            };
            h()
        }
    })();
    g.T = g.Z.extend({
        r: function (a, b, c) {
            var d = parseFloat(b), e = parseFloat(a);
            if (isNaN(a) || isNaN(b)) throw"Invalid Object: LngLat(" + e + ", " + d + ")";
            !0 !== c && (d = Math.max(Math.min(d, 90), -90), e = (e + 180) % 360 + (-180 > e || 180 === e ? 180 : -180));
            this.P = d;
            this.R = e
        }, tO: function () {
            return g.a.Yc(this.R, 6)
        }, pO: function () {
            return g.a.Yc(this.P, 6)
        }, add: function (a, b) {
            return new g.T(this.R + a.R, this.P + a.P, b)
        }, Ya: function (a, b) {
            return new g.T(this.R - a.R, this.P - a.P, b)
        }, Wc: function (a, b) {
            return new g.T(this.R / a, this.P / a, b)
        }, Nd: function (a, b) {
            return new g.T(this.R *
                a, this.P * a, b)
        }, le: function (a) {
            return g.eq.distance(this, a)
        }, offset: function (a, b) {
            if (isNaN(a) || isNaN(b)) return !1;
            var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.P * Math.PI / 180)),
                c = this.R + 180 * c / Math.PI, d = 2 * Math.asin(Math.round(b) / 12756274);
            return new g.T(c, this.P + 180 * d / Math.PI)
        }, cb: function (a) {
            a = g.a.Ha(a);
            return a instanceof g.T ? 1E-9 >= Math.max(Math.abs(this.P - a.P), Math.abs(this.R - a.R)) : !1
        }, toString: function () {
            return g.a.Yc(this.R, 6) + "," + g.a.Yc(this.P, 6)
        }, Jl: function () {
            return [this.R,
                this.P]
        }, ib: function () {
            var a = this.controlPoints, b = new g.T(this.R, this.P);
            a && (b.controlPoints = [].concat(a));
            return b
        }
    });
    g.T.ika = function (a, b, c) {
        c = c + 1 || Math.round(Math.abs(a.R - b.R));
        if (!c || 0.001 > Math.abs(a.R - b.R)) return [];
        var d = [], e = Math.PI, f = g.Tl.st, h = g.Tl.Voa, k = Math.asin, l = Math.sqrt, m = Math.sin, n = Math.pow,
            p = Math.cos, q = Math.atan2, r = a.P * f;
        a = a.R * f;
        var s = b.P * f;
        b = b.R * f;
        for (var k = 2 * k(l(n(m((r - s) / 2), 2) + p(r) * p(s) * n(m((a - b) / 2), 2))), u, v, x, t, f = 1; f < c; f += 1) u = 1 / c * f, v = m((1 - u) * k) / m(k), x = m(u * k) / m(k), u = v * p(r) * p(a) + x * p(s) * p(b), t = v * p(r) * m(a) + x * p(s) * m(b), v = v * m(r) + x * m(s), v = q(v, l(n(u, 2) + n(t, 2))), u = q(t, u), b > a ? (u < a && (u += 2 * e), u > b && (u -= 2 * e)) :
            (u > a && (u -= 2 * e), u < b && (u += 2 * e)), d.push(new g.T(u * h, v * h, !0));
        return d
    };
    g.T.hd({
        tO: "getLng",
        pO: "getLat",
        add: "add",
        Ya: "subtract",
        Wc: "divideBy",
        Nd: "multiplyBy",
        le: "distance",
        offset: "offset",
        cb: "equals",
        toString: "toString"
    });
    g.we = g.Z.extend({
        r: function () {
            this.CLASS_NAME = "AMap.Bounds";
            var a = null, b = null;
            if (1 === arguments.length && arguments[0] instanceof Array) a = new g.T(arguments[0][0], arguments[0][1], !0), b = new g.T(arguments[0][2], arguments[0][3], !0); else if (2 === arguments.length) a = g.a.Ha(arguments[0]), b = g.a.Ha(arguments[1]); else if (4 === arguments.length) a = new g.T(arguments[0], arguments[1]), b = new g.T(arguments[2], arguments[3]); else if (0 === arguments.length) a = new g.T(-180, -90), b = new g.T(180, 90); else throw"Invalid Object: Bounds(" +
            arguments.join(",") + ")";
            this.qc = a;
            this.cc = b
        }, Lt: function () {
            return this.qc
        }, bx: function () {
            return this.cc
        }, zj: function () {
            return new g.T(this.qc.R, this.cc.P, !0)
        }, Jn: function () {
            return new g.T(this.cc.R, this.qc.P, !0)
        }, contains: function (a) {
            var b = this.qc, c = this.cc, d;
            if (a instanceof g.no) return this.DR().contains(a);
            a instanceof g.we ? (d = a.qc, a = a.cc) : d = a = g.a.Ha(a);
            var e = d.R, f = b.R, h = a.R, k = c.R;
            f > k && (k += 360, 0 > e && (e += 360), 0 > h && (h += 360));
            return d.P >= b.P && a.P <= c.P && e >= f && h <= k
        }, yg: function (a) {
            var b = this.qc, c = this.cc,
                d = a.qc;
            a = a.cc;
            var e = a.R >= b.R && d.R <= c.R;
            return a.P >= b.P && d.P <= c.P && e
        }, Yh: function () {
            return new g.T(this.qc.R > this.cc.R ? (this.qc.R + this.cc.R + 360) / 2 % 360 : (this.qc.R + this.cc.R) / 2, (this.qc.P + this.cc.P) / 2)
        }, extend: function (a) {
            this.qc.R = Math.min(this.qc.R, a.R);
            this.qc.P = Math.min(this.qc.P, a.P);
            this.cc.R = Math.max(this.cc.R, a.R);
            this.cc.P = Math.max(this.cc.P, a.P);
            return this
        }, fsa: function (a) {
            return this.extend(a.qc).extend(a.cc)
        }, toString: function () {
            return this.qc.toString() + ";" + this.cc.toString()
        }, ib: function () {
            return new g.we(this.qc.ib(),
                this.cc.ib())
        }, cb: function (a) {
            return a instanceof g.we ? this.qc.cb(a.qc) && this.cc.cb(a.cc) : !1
        }, Vi: function () {
            return Math.abs(this.cc.R - this.qc.R)
        }, Ui: function () {
            return Math.abs(this.qc.P - this.cc.P)
        }, DR: function (a) {
            var b = [this.Lt(), this.Jn(), this.bx(), this.zj()];
            a && b.push(this.Lt());
            return new g.no(b)
        }, sra: function (a) {
            return new g.yf(a.$b(this.zj(), 20), a.$b(this.Jn(), 20))
        }, lO: function (a, b) {
            return this.DR(b).lO(a)
        }, iO: function (a) {
            return this.sra(a).Yh()
        }
    });
    g.we.hd({
        Lt: "getSouthWest",
        bx: "getNorthEast",
        zj: "getNorthWest",
        Jn: "getSouthEast",
        contains: "contains",
        yg: "intersects",
        Yh: "getCenter",
        extend: "extend"
    });
    g.G = g.Z.extend({
        r: function (a, b, c) {
            if (isNaN(a) || isNaN(b)) throw"Invalid Object: Pixel(" + a + ", " + b + ")";
            this.x = c ? Math.round(a) : Number(a);
            this.y = c ? Math.round(b) : Number(b)
        }, bf: function () {
            return this.x
        }, ae: function () {
            return this.y
        }, add: function (a, b) {
            return new g.G(this.x + a.x, this.y + a.y, b)
        }, Ya: function (a, b) {
            return new g.G(this.x - a.x, this.y - a.y, b)
        }, Wc: function (a, b) {
            return new g.G(this.x / a, this.y / a, b)
        }, Nd: function (a, b) {
            return new g.G(this.x * a, this.y * a, b)
        }, le: function (a) {
            var b = a.x - this.x;
            a = a.y - this.y;
            return Math.sqrt(b *
                b + a * a)
        }, floor: function () {
            return new g.G(Math.floor(this.x), Math.floor(this.y))
        }, round: function () {
            return new g.G(this.x, this.y, !0)
        }, cb: function (a) {
            return a instanceof g.G && this.x === a.x && this.y === a.y
        }, ib: function (a) {
            return new g.G(this.x, this.y, a)
        }, toString: function () {
            return this.x + "," + this.y
        }, Jl: function () {
            return [this.x, this.y]
        }, length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }, direction: function () {
            var a = this.x, b = this.y;
            if (0 === a && 0 === b) return null;
            if (0 === a) return 0 < b ? 90 : 270;
            var c = 180 *
                Math.atan(b / a) / Math.PI;
            return 0 > a && 0 < b ? c + 180 : 0 > a && 0 > b ? c + 180 : 0 < a && 0 > b ? c + 360 : c
        }, ot: function (a) {
            var b = this.length(), c = a.length();
            return b && c ? 180 * Math.acos((this.x * a.x + this.y * a.y) / c / b) / Math.PI : null
        }, dia: function (a) {
            var b = this.length(), c = a.length();
            return b && c ? (this.x * a.x + this.y * a.y) / c / b : null
        }, toFixed: function (a) {
            this.x = g.a.Yc(this.x, a);
            this.y = g.a.Yc(this.y, a);
            return this
        }
    });
    g.G.hd({
        bf: "getX",
        ae: "getY",
        add: "add",
        Ya: "subtract",
        Wc: "divideBy",
        Nd: "multiplyBy",
        le: "distance",
        cb: "equals",
        toString: "toString"
    });
    g.md = g.Z.extend({
        r: function (a, b, c) {
            if (isNaN(a) || isNaN(b)) throw"Invalid Object: Size(" + a + ", " + b + ")";
            this.width = c ? Math.round(a) : Number(a);
            this.height = c ? Math.round(b) : Number(b)
        }, ib: function () {
            return new g.md(this.width, this.height)
        }, Vi: function () {
            return this.width
        }, Ui: function () {
            return this.height
        }, EC: function () {
            return new g.G(this.Vi(), this.Ui())
        }, contains: function (a) {
            return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height)
        }, cb: function (a) {
            return a instanceof g.md && this.width ===
                a.width && this.height === a.height
        }, toString: function () {
            return this.Vi() + "," + this.Ui()
        }
    });
    g.md.hd({Vi: "getWidth", Ui: "getHeight", toString: "toString"});
    g.no = g.Z.extend({
        r: function (a) {
            this.CLASS_NAME = "AMap.ArrayBounds";
            a = g.a.Ha(a);
            this.path = [];
            for (var b = 0; b < a.length; b += 1) this.path.push([a[b].R, a[b].P]);
            this.bounds = this.Sd = a
        }, contains: function (a, b) {
            if (a instanceof g.no) return g.eq.isRingInRing(a.path, this.path);
            a instanceof g.G ? a = [a.x, a.y] : a instanceof g.T && (a = [a.R, a.P]);
            return g.sd.Jd(a, this.path, b)
        }, toBounds: function () {
            for (var a = new g.we(180, 90, -180, -90), b = this.Sd.length - 1; 0 <= b; b -= 1) a.extend(this.Sd[b]);
            return a
        }, lO: function (a) {
            for (var b = [], c = 0; c <
            this.path.length; c += 1) b[c] = a.$b(this.path[c], 20);
            return b
        }, iO: function (a) {
            return this.toBounds().iO(a)
        }, Yh: function () {
            return this.toBounds().Yh()
        }
    });
    g.no.hd({contains: "contains", Yh: "getCenter"});
    g.e6 = g.no.extend({
        r: function (a) {
            this.CLASS_NAME = "AMap.CoordsBounds";
            this.path = a;
            if (a[0] instanceof g.G) {
                this.path = [];
                for (var b = 0; b < a.length; b += 1) this.path.push([a[b].x, a[b].y])
            }
            this.bounds = this.Sd = a
        }
    });
    g.yf = g.Z.extend({
        r: function () {
            if (2 === arguments.length) this.Zb = arguments[0], this.Md = arguments[1]; else if (1 === arguments.length && arguments[0] instanceof Array || 4 === arguments.length) {
                var a = arguments[0] instanceof Array ? arguments[0] : arguments;
                this.Zb = new g.G(a[0], a[1]);
                this.Md = new g.G(a[2], a[3])
            } else throw"Invalid Object: PixelBounds(" + arguments.join(",") + ")";
        }, Yh: function (a) {
            return new g.G((this.Zb.x + this.Md.x) / 2, (this.Zb.y + this.Md.y) / 2, a)
        }, contains: function (a) {
            var b;
            a instanceof g.yf ? (b = a.Zb, a = a.Md) : b =
                a;
            return b.x > this.Zb.x && a.x < this.Md.x && b.y > this.Zb.y && a.y < this.Md.y
        }, Vi: function () {
            return this.Md.x - this.Zb.x
        }, Ui: function () {
            return this.Md.y - this.Zb.y
        }, yg: function (a, b) {
            b || 0 === b || (b = 20);
            var c = this.Zb, d = this.Md, e = a.Zb, f = a.Md, h = f.y >= c.y - b && e.y <= d.y + b;
            return f.x >= c.x - b && e.x <= d.x + b && h
        }, toString: function () {
            return this.Zb + ";" + this.Md
        }, ib: function () {
            return new g.yf(this.Zb.ib(), this.Md.ib())
        }
    });
    g.H = {};
    g.H.RM = function (a) {
        for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1) g.H.nG(b, a[c]);
        return b
    };
    g.H.SY = function (a, b, c) {
        var d = Math.min.apply(null, a);
        a = Math.max.apply(null, a);
        var e = Math.min.apply(null, b);
        b = Math.max.apply(null, b);
        return g.H.aia(d, a, e, b, c)
    };
    g.H.buffer = function (a, b) {
        a[0] -= b;
        a[1] -= b;
        a[2] += b;
        a[3] += b
    };
    g.H.ib = function (a) {
        return a.slice()
    };
    g.H.Jd = function (a, b) {
        return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3]
    };
    g.H.AZ = function (a, b) {
        return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
    };
    g.H.Jva = function () {
        return [Infinity, Infinity, -Infinity, -Infinity]
    };
    g.H.aia = function (a, b, c, d, e) {
        return "undefined" !== typeof e ? (e[0] = a, e[2] = b, e[1] = c, e[3] = d, e) : [a, c, b, d]
    };
    g.H.empty = function (a) {
        a[0] = a[1] = Infinity;
        a[2] = a[3] = -Infinity;
        return a
    };
    g.H.cb = function (a, b) {
        return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3]
    };
    g.H.extend = function (a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[2] > a[2] && (a[2] = b[2]);
        b[1] < a[1] && (a[1] = b[1]);
        b[3] > a[3] && (a[3] = b[3])
    };
    g.H.nG = function (a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[0] > a[2] && (a[2] = b[0]);
        b[1] < a[1] && (a[1] = b[1]);
        b[1] > a[3] && (a[3] = b[1])
    };
    g.H.ywa = function (a) {
        return [a[0], a[1]]
    };
    g.H.zwa = function (a) {
        return [a[2], a[1]]
    };
    g.H.Yh = function (a) {
        return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
    };
    g.H.Lwa = function (a, b, c, d, e) {
        var f = b * d[0] / 2;
        d = b * d[1] / 2;
        b = Math.cos(c);
        c = Math.sin(c);
        f = [-f, -f, f, f];
        d = [-d, d, -d, d];
        var h, k, l;
        for (h = 0; 4 > h; h += 1) k = f[h], l = d[h], f[h] = a[0] + k * b - l * c, d[h] = a[1] + k * c + l * b;
        return g.H.SY(f, d, e)
    };
    g.H.Ui = function (a) {
        return a[3] - a[1]
    };
    g.H.Ywa = function (a) {
        return [a[2] - a[0], a[3] - a[1]]
    };
    g.H.bxa = function (a) {
        return [a[0], a[3]]
    };
    g.H.cxa = function (a) {
        return [a[2], a[3]]
    };
    g.H.Vi = function (a) {
        return a[2] - a[0]
    };
    g.H.yg = function (a, b) {
        return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
    };
    g.H.np = function (a) {
        return a[2] < a[0] || a[3] < a[1]
    };
    g.H.normalize = function (a, b) {
        return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])]
    };
    g.H.zza = function (a, b) {
        var c = (a[2] - a[0]) / 2 * (b - 1), d = (a[3] - a[1]) / 2 * (b - 1);
        a[0] -= c;
        a[2] += c;
        a[1] -= d;
        a[3] += d
    };
    g.H.touches = function (a, b) {
        return g.H.yg(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1])
    };
    g.H.transform = function (a, b, c) {
        a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
        b(a, a, 2);
        return g.H.SY([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
    };
    g.we.wb({
        r: function () {
            var a = g.we.prototype.r;
            return function () {
                a.apply(this, arguments);
                this.southwest = this.qc;
                this.northeast = this.cc
            }
        }(), extend: function () {
            var a = g.we.prototype.extend;
            return function () {
                a.apply(this, arguments);
                this.qc.lng = this.qc.R;
                this.qc.lat = this.qc.P;
                this.cc.lng = this.cc.R;
                this.cc.lat = this.cc.P;
                return this
            }
        }()
    });
    g.T.wb({
        r: function () {
            var a = g.T.prototype.r;
            return function () {
                a.apply(this, arguments);
                this.lng = parseFloat(this.R.toFixed(6));
                this.lat = parseFloat(this.P.toFixed(6))
            }
        }()
    });
    g.yD = g.Z.extend({
        r: function (a, b, c, d) {
            this.oT = a;
            this.CT = b;
            this.QT = c;
            this.jU = d
        }, transform: function (a, b) {
            return this.fY(a.ib(), b)
        }, fY: function (a, b) {
            b = b || 1;
            a.x = b * (this.oT * a.x + this.CT);
            a.y = b * (this.QT * a.y + this.jU);
            return a
        }, hsa: function (a, b) {
            b = b || 1;
            return new g.G((a.x / b - this.CT) / this.oT, (a.y / b - this.jU) / this.QT)
        }
    });
    g.so = g.Z.extend({
        r: function (a) {
            this.lJ = a.MAX_LATITUDE || 85.0511287798;
            a.project && a.unproject && (this.$b = a.project, this.Ch = a.unproject)
        }
    });
    g.so.JS = {
        $b: function (a) {
            return new g.G(a.R, a.P)
        }, Ch: function (a, b) {
            return new g.T(a.x, a.y, b)
        }
    };
    g.so.e7 = new g.so({
        MAX_LATITUDE: 85.0511287798, project: function (a) {
            var b = Math.PI / 180, c = this.lJ, c = Math.max(Math.min(c, a.P), -c);
            a = a.R * b;
            b = Math.log(Math.tan(Math.PI / 4 + c * b / 2));
            return new g.G(a, b, !1)
        }, unproject: function (a, b) {
            var c = 180 / Math.PI;
            return new g.T(a.x * c, (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c, b)
        }
    });
    g.so.MS = {
        lJ: 85.0840591556, uJ: 6356752.3142, tJ: 6378137, $b: function (a) {
            var b = Math.PI / 180, c = this.lJ, d = Math.max(Math.min(c, a.P), -c), e = this.tJ, c = this.uJ;
            a = a.R * b * e;
            b *= d;
            e = c / e;
            e = Math.sqrt(1 - e * e);
            d = e * Math.sin(b);
            d = Math.pow((1 - d) / (1 + d), 0.5 * e);
            b = Math.tan(0.5 * (0.5 * Math.PI - b)) / d;
            b = -c * Math.log(b);
            return new g.G(a, b)
        }, Ch: function (a, b) {
            for (var c = 180 / Math.PI, d = this.tJ, e = this.uJ, f = a.x * c / d, d = e / d, d = Math.sqrt(1 - d * d), e = Math.exp(-a.y / e), h = Math.PI / 2 - 2 * Math.atan(e), k = 15, l = 0.1; 1E-7 < Math.abs(l) && (k -= 1, 0 < k);) l = d * Math.sin(h),
                l = Math.PI / 2 - 2 * Math.atan(e * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h, h += l;
            return new g.T(f, h * c, b)
        }
    };
    g.Eh = {};
    g.Eh.fD = {
        EB: function (a, b) {
            var c = this.nf.$b(a), d = this.scale(b);
            return this.IC.fY(c, d)
        }, cC: function (a, b, c) {
            b = this.scale(b);
            a = this.IC.hsa(a, b);
            return this.nf.Ch(a, c)
        }, $b: function (a) {
            return this.nf.$b(a)
        }, scale: function (a) {
            return 256 << a
        }, gp: function (a) {
            return 12756274 * Math.PI / (256 * Math.pow(2, a))
        }
    };
    g.Eh.eJ = g.extend({}, g.Eh.fD, {
        code: "EPSG:3857",
        nf: g.so.e7,
        IC: new g.yD(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),
        $b: function (a) {
            return this.nf.$b(a).Nd(6378137)
        }
    });
    g.Eh.tS = g.extend({}, g.Eh.fD, {
        code: "EPSG:3395", nf: g.so.MS, IC: function () {
            var a = g.so.MS;
            return new g.yD(0.5 / (Math.PI * a.tJ), 0.5, -0.5 / (Math.PI * a.uJ), 0.5)
        }()
    });
    g.Eh.uS = g.extend({}, g.Eh.fD, {code: "EPSG:4326", nf: g.so.JS, IC: new g.yD(1 / 360, 0.5, -1 / 360, 0.25)});
    g.Eh.Fta = g.extend({}, g.Eh.fD, {nf: g.so.JS, IC: new g.yD(1, 0, 1, 0)});
    g.rH = {
        $b: function (a, b) {
            a = g.a.Ha(a);
            return this.Oi.EB(a, b || this.get("zoom"))
        }, Ch: function (a, b, c) {
            return this.Oi.cC(a, b || this.get("zoom"), c)
        }, Rxa: function (a, b) {
            return this.$b(a, b)
        }, vwa: function (a, b) {
            return this.Ch(a, b)
        }, So: function (a, b, c) {
            g.c.add(this, "containerToLngLat");
            var d = this.get("size").EC().Wc(2);
            if (a.cb(d) && !c) return this.get("center");
            a = this.dg(a, b, c);
            return this.Ee(a)
        }, sr: function (a, b) {
            g.c.add(this, "lngLatToContainer");
            var c = 0;
            b && (c = "string" === typeof b ? Math.round(parseFloat(b) / 0.14929107086948487) :
                b);
            var d = this.Vb(a);
            return this.te(d, null, c)
        }, Vb: function (a) {
            a = g.a.Ha(a);
            return this.$b(a, 20)
        }, Ee: function (a) {
            return a ? this.Ch(a, 20) : a
        }, nH: function (a) {
            a = g.a.Ha(a);
            return this.$b(a, 20).Ya(g.a.Xb)
        }, A1: function (a, b) {
            b || (a = g.a.Ha(a));
            var c = [], d = !1;
            void 0 === a[0].length && (d = !0);
            for (var c = [], e = 0, f = a.length; e < f; e += 1) if (d) {
                var h = this.$b(a[e], 20).Ya(g.a.Xb);
                c[e] = [h.x, h.y]
            } else c[e] = this.A1(a[e], !0);
            return c
        }, Hja: function (a) {
            return this.Ch(a.add(g.a.Xb), 20)
        }, wwa: function (a) {
            return this.te(a.add(g.a.Xb))
        }, Ewa: function (a) {
            return a ?
                this.$b(this.get("center"), a) : this.get("centerPixel")
        }, mua: function (a) {
            return (new g.G(a.x + 2.0037508342789244E7, 2.0037508342789244E7 - a.y)).Wc(0.14929107086948487)
        }, z2: function (a) {
            return new g.G(0.14929107086948487 * a.x - 2.0037508342789244E7, 2.0037508342789244E7 - 0.14929107086948487 * a.y)
        }
    };
    C.BD = g.Z.extend({
        ha: [g.ra, g.Ge],
        D: {center: new g.T(116.397128, 39.916527), zoom: 13, rotation: 0, crs: "EPSG3857"},
        r: function (a) {
            this.CLASS_NAME = "AMap.View2D";
            g.c.xa(this, a);
            a = a || {};
            a.center && (a.center = g.a.Ha(a.center));
            this.D = a
        }
    });
    C.Hb = g.Z.extend({
        ha: [g.ra, g.Ge, g.rH], D: {
            features: "all",
            showLabel: !0,
            dragEnable: !0,
            showIndoorMap: g.l.Y ? !1 : !0,
            lang: "zh_cn",
            keyboardEnable: !0,
            doubleClickZoom: !0,
            gridMapForeign: !1,
            scrollWheel: !0,
            zoomEnable: !0,
            jogEnable: !0,
            continuousZoomEnable: !0,
            resizeEnable: !1,
            animateEnable: !0,
            rotateEnable: !1,
            labelzIndex: 99,
            showFog: !0,
            touchZoom: !0,
            zooms: [3, g.l.Y ? g.l.bd ? 19 : 20 : 18],
            defaultCursor: "",
            limitBounds: null,
            logoUrl: g.w.vb + "/theme/v1.3/logo@1x.png",
            logoUrlRetina: g.w.vb + "/theme/v1.3/logo@2x.png",
            copyright: "\x3c!--v1.4.11--\x3e &copy " +
            (new Date).getFullYear() + " AutoNavi ",
            isHotspot: !g.l.Y,
            baseRender: g.l.LY,
            overlayRender: g.l.Yna,
            mapStyle: "normal",
            showBuildingBlock: g.l.mf,
            crs: "EPSG3857",
            rotation: 0,
            pitch: 0,
            yaw: 0,
            scale: 1,
            center: new g.T(116.397128, 39.916527),
            zoom: 13,
            detectRetina: !0,
            pitchEnable: !1,
            buildingAnimation: !1,
            maxPitch: 83,
            turboMode: !0,
            preloadMode: !0,
            workerMode: !0
        }, poiOnAMAP: function (a) {
            g.c.add(this, "poiOnAMAP");
            var b = {}, c = g.a.Ha(a.location);
            b.id = a.id;
            c && (b.y = c.P, b.x = c.R);
            b.name = a.name;
            b.address = a.address;
            g.Fh.Tr(g.Fh.Q_(b))
        },
        detailOnAMAP: function (a) {
            g.c.add(this, "detailOnAMAP");
            var b = {}, c = g.a.Ha(a.location);
            b.id = a.id;
            c && (b.y = c.P, b.x = c.R);
            b.name = a.name;
            g.Fh.Tr(g.Fh.O_(b))
        }, setLabelzIndex: function (a) {
            g.c.add(this, "setLabelzIndex");
            return this.set("labelzIndex", a)
        }, getLabelzIndex: function () {
            return this.get("labelzIndex", null, !0)
        }, setMapStyle: function (a) {
            g.c.add(this, "setMapStyle");
            -1 === a.indexOf("amap://styles/") ? (this.set("styleUrl", "", !0), this.set("mapStyle", a)) : this.set("styleUrl", a);
            this.MP()
        }, getMapStyle: function () {
            return this.get("styleUrl") ||
                this.get("mapStyle", null, !0)
        }, getFeatures: function () {
            return this.get("features", null, !0)
        }, setFeatures: function (a) {
            g.c.add(this, "setFeatures");
            this.set("features", a)
        }, setLang: function (a) {
            g.c.add(this, "setLang", a);
            "en" !== a && "zh_cn" !== a && "zh_en" !== a || a === this.get("lang", null, !0) || (this.set("lang", a), this.Dj && this.Dj.D3(this))
        }, getLang: function () {
            return this.get("lang", null, !0)
        }, setCity: function (a, b) {
            g.c.add(this, "setCity");
            var c = this;
            (new g.fb.sb(g.w.Od + "/v3/config/district?subdistrict=0&extensions=all&key=" +
                g.w.key + "&s=rsv3&output=json&keywords=" + a, {callback: "callback"})).h("complete", function (d) {
                var e = d.districts;
                if (e && e.length) {
                    d = e[0];
                    /[^\w]+/.test(a) && (e = g.a.find(e, function (b) {
                        return b.name === a
                    })) && e !== d && (d = e);
                    try {
                        var f = d.center.split(","), h;
                        switch (d.level) {
                            case "city":
                                h = 10;
                                break;
                            case "province":
                                h = 7;
                                break;
                            case "district":
                                h = 12;
                                break;
                            case "country":
                                h = 4;
                                break;
                            default:
                                h = 12
                        }
                        -1 !== d.name.indexOf("\u5e02") && (h = 10);
                        c.B = !0;
                        c.setZoomAndCenter(h, new g.T(f[0], f[1]), !0);
                        c.B = !1;
                        b && b.call(c, f, h)
                    } catch (k) {
                    }
                }
            }, this)
        },
        getScreenShot: function (a, b) {
            g.c.add(this, "getScreenShot");
            return this.map && g.l.Ak ? this.map.Y_(a, b) : ""
        }, getCity: function (a, b) {
            g.c.add(this, "getCity");
            var c = g.w.Od + "/v3/geocode/regeo?&extensions=&&key=" + g.w.key + "&s=rsv3&output=json&location=" + (b || this.get("center", null, !0));
            (new g.fb.sb(c, {callback: "callback", ww: !0, dd: "REGEO"})).h("complete", function (b) {
                b = b.regeocode.addressComponent;
                a({
                    province: b.province,
                    city: b.city instanceof Array ? "" : b.city,
                    citycode: b.citycode instanceof Array ? "" : b.citycode,
                    district: b.district instanceof
                    Array ? "" : b.district
                })
            }, this)
        }, r: function (a, b) {
            b = g.extend({}, b);
            this.id = g.a.Ab(this);
            this.CLASS_NAME = "AMap.Map";
            g.c.xa(this, b);
            this.B = !0;
            b = b || {};
            b.mapStyle && -1 !== b.mapStyle.indexOf("amap://styles/") ? (b.styleUrl = b.mapStyle, delete b.mapStyle) : b.styleUrl = "amap://styles/normal";
            b.bgColor && g.extend(g.w.je, b.bgColor);
            b.maxPitch && (b.maxPitch = Math.min(this.D.maxPitch, Math.max(b.maxPitch, 0)));
            b.pitch && (b.pitch = Math.min(b.maxPitch || this.D.maxPitch, Math.max(b.pitch, 0)));
            "3D" !== b.viewMode && (b.pitch = 0);
            g.w.Gq =
                b.buildingColor || null;
            b.mobile && (g.l.Y = !0);
            b.noPoi && (g.w.kna = !0);
            b.editEnable && (b.nolimg = !0, b.showIndoorMap = !1);
            void 0 !== b.nolimg && (b.nolimg_param = b.nolimg);
            "3D" === b.viewMode && g.l.Pp && void 0 === b.showBuildingBlock && !0 === b.showBuildingBlock;
            this.op = !!b.enableSocket;
            b.server && (g.w.Od = b.server);
            b.vdataUrl && (g.w.UI = b.vdataUrl);
            if ("string" === typeof a) {
                if (a = this.J = document.getElementById(a), !a) return
            } else "DIV" === a.tagName && (this.J = a);
            if (this.J.NJ) {
                var c = this.J.NJ;
                c.B = !0;
                c.destroy();
                c.B = !1
            }
            g.ze.Te.start({
                id: this.id,
                J: this.J
            });
            this.J.NJ = this;
            var c = this.D.zooms[1], d = this.D.zooms[0];
            b.zooms ? (b.zooms[0] = Math.max(d, b.zooms[0]), !0 === b.expandZoomRange && (c = g.l.Y ? g.l.bd ? 19 : 20 : 20), b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c];
            b.forceZooms && (b.zooms = b.forceZooms);
            b = this.Yga(b);
            c = this.getSize(!0);
            b.center && (b.center = g.a.Ha(b.center));
            this.Oi = this.bia(b.crs || this.D.crs, b.center || this.D.center);
            this.mga(c, b);
            d = b.lang;
            "en" !== d && "zh_cn" !== d && "zh_en" !== d && (b.lang = "zh_cn");
            g.g.Xf || (b.rotation = 0, b.pitch = 0, b.rotateEnable = !1);
            g.l.wP ? !1 !== b.workerMode && (C.Hb.ss ? (b.workerMode = !1, C.Hb.ss++) : C.Hb.ss = 1) : (b.workerMode = !1, b.preloadMode = !1);
            b.layers && (d = b.layers, delete b.layers, b.layers = d);
            b.baseRender = b.baseRender || g.l.LY;
            b.forceVector && (b.baseRender = g.l.mf ? "vw" : "v");
            b.disableVector && (b.baseRender = "d");
            "dom" === b.renderer && (b.baseRender = "d", b.overlayRender = "d");
            c = Math.max(c.width, c.height);
            g.l.ia && (c *= Math.min(2, window.devicePixelRatio || 1));
            "vw" === b.baseRender && c > g.l.Mma && (b.baseRender = "dv");
            "d" == b.baseRender && b.vectorMapForeign &&
            (b.vectorMapForeign = !1, b.gridMapForeign = !0);
            g.a.Gb(this, b);
            this.Sf(this.D);
            "rotateEnable" in b || "3D" !== b.viewMode || !g.l.Pp || this.set("rotateEnable", !0);
            "pitchEnable" in b || "3D" !== b.viewMode || !g.l.Pp || this.set("pitchEnable", !0);
            c = this.get("zoom", null, !0);
            d = this.get("zooms");
            c > d[1] ? c = d[1] : c < d[0] && (c = d[0]);
            this.set("zoom", c);
            this.D.zoom = c;
            this.cia(this.D);
            this.cN();
            var e = this;
            this.Sf({overlays: [], infos: {}, controls: {}});
            var f = [];
            (b.gridMapForeign || b.vectorMapForeign) && f.push("gridmap");
            b.vectorMapForeign &&
            g.l.lt && f.push("MVT", "vectorForeign");
            b.forceVector && (f.push("vectorlayer"), f.push("overlay"));
            "3D" === b.viewMode && g.l.Pp ? f.push("Map3D") : g.l.Ak && f.push("labelcanvas");
            b.editEnable && f.push("edit");
            g.l.Ak && (f.push("AMap.IndoorMap"), -1 !== f.indexOf("Map3D") && f.push("AMap.IndoorMap3D"));
            this.ia = g.l.ia && this.get("detectRetina");
            this.t5(b);
            this.B = !1;
            this.yma(function () {
                g.pb.dh(f, function () {
                    if (!e.get("destroy")) {
                        var b = new g.Hb(a, e);
                        if (g.Ce) {
                            var c = (g.Ce[0] || g.Ce).stylemaps["50001:1"].browserStyle[0].split("&");
                            b.KD = [c[0], c[4]]
                        }
                        b.Ie("zoom center centerCoords rotation yaw pitch resolution".split(" "), e.view, !0);
                        b.h("complete", function () {
                            this.q("complete")
                        }, e, !0);
                        b.Oi = e.Oi;
                        e.Ie(["zoomSlow", "panTo", "targetLevel", "render"], b);
                        b.Ie(["size", "bounds"], e);
                        e.loaded = !0;
                        e.q("coreMapCreated");
                        g.l.Ak && e.Sfa();
                        e.B = !0;
                        "3D" === e.view.type && (e.AmbientLight || (e.AmbientLight = new g.kv.lS([1, 1, 1], 0.9)), e.DirectionLight || (e.DirectionLight = new g.kv.sS([0, -1, 1], [1, 1, 1], 0.1)));
                        e.B = !1
                    }
                })
            })
        }, yma: function (a) {
            function b() {
                var a = AMap.anole,
                    b = {}, c = [], d = 0, e = void 0;
                if (a) {
                    for (var a = a.replace(/\?/g, ":").replace(/\//g, "&"), e = a.split(""), f = 0, q = e.length; f < q; f++) void 0 === b[e[f]] && (b[e[f]] = d++, c.push(e[f]));
                    c.reverse();
                    a = a.replace(/./g, function (a) {
                        return c[b[a]]
                    });
                    g.Ce = eval(a);
                    e = a = c = b = null;
                    delete AMap.anole
                }
            }

            if (g.l.cf || g.Ce) a(); else {
                var c = !0;
                try {
                    var d = JSON.parse(localStorage.getItem("_AMap_anole"));
                    d && d.version === g.l.vf && d.script ? eval(d.script) : c = !1
                } catch (e) {
                    c = !1
                }
                if (c) b(), a(); else {
                    var f = document.createElement("script");
                    f.Lva = "anonymous";
                    f.id =
                        "amap_anole_js";
                    f.src = g.w.vc + "://vdata.amap.com/style?v=" + g.w.Bq + "&key=" + g.w.key + "&mapstyle=normal";
                    c = document;
                    (c.head || c.getElementsByTagName("head")[0] || c.body).appendChild(f);
                    f.onload = function () {
                        if (!g.Ce) {
                            if (g.l.tr) try {
                                var c = {version: g.l.vf, script: "AMap['anole']=" + JSON.stringify(AMap.anole)};
                                localStorage.setItem("_AMap_anole", JSON.stringify(c))
                            } catch (d) {
                            }
                            b()
                        }
                        a();
                        f.parentNode.removeChild(f)
                    }
                }
            }
        }, getViewMode_: function () {
            return this.view.type
        }, Nja: function (a, b, c) {
            var d = new g.T(a[4], a[5]);
            if ((a = new g.we(a[0],
                a[1], a[2], a[3])) && b && d) {
                for (var e = c[1]; e > c[0]; e -= 1) {
                    var f = this.$b(a.qc, e), h = this.$b(a.cc, e);
                    if (Math.abs(h.x - f.x) < b.width && Math.abs(f.y - h.y) < b.height) break
                }
                return [d, Math.min(e + 1, c[1])]
            }
            return null
        }, mga: function (a, b) {
            if (!(b && b.center && b.zoom)) {
                var c = this.Nja(g.w.Sd, a, b.zooms);
                b.center = b.center || c && c[0];
                "number" !== typeof b.zoom && (b.zoom = c && c[1])
            }
        }, bia: function (a, b) {
            if (b instanceof g.T) {
                if ("string" === typeof a) {
                    switch (a) {
                        case "EPSG3395":
                            return g.Eh.tS;
                        case "EPSG4326":
                            return g.Eh.uS
                    }
                    return g.Eh.eJ
                }
                if (a.pointToLngLat &&
                    a.lngLatToPoint) return {cC: a.pointToLngLat, EB: a.lngLatToPoint, gp: a.getResolution};
                throw"illegal projection";
            }
            var c = this.get("zoom", null, !0);
            return {
                gp: function (a) {
                    return Math.pow(2, c - a)
                }, EB: function () {
                }, cC: function () {
                }
            }
        }, Eqa: function (a, b) {
            this.uv && this.uv.stop();
            var c = ["pitch", "rotation", "zoom", "center"], d = {}, e = !1, f;
            for (f in a) if (a.hasOwnProperty(f) && -1 !== g.a.indexOf(c, f)) {
                var h = this.get(f);
                void 0 === h || h === a[f] || h.cb && h.cb(a[f]) || (d[f] = this.get(f), e = !0)
            }
            e && (this.uv = new g.ij(d, a, null, 0), this.uv.transition =
                function (a, c, e) {
                    e /= b || 300;
                    if (1 <= e) return c;
                    var f = {}, h;
                    for (h in d) d.hasOwnProperty(h) && (f[h] = "center" === h ? a[h].add(c[h].Ya(a[h]).Nd(e)) : a[h] + (c[h] - a[h]) * e);
                    return f
                }, this.uv.yp = function (b) {
                b === a && (this.uv.stop(), this.pd = null);
                for (var c in b) b.hasOwnProperty(c) && ("center" === c ? (this.B = !0, this.setCenter(b[c], !0), this.B = !1) : this.set(c, b[c]))
            }, this.uv.Rm(this))
        }, cia: function (a) {
            "3D" === this.get("viewMode") && g.l.Pp ? (this.set("baseRender", "vw"), this.view = new g.DJ(this, a)) : this.view = new g.BD(this, a);
            this.G0()
        },
        G0: function () {
            this.ci = "d" < this.get("baseRender") || "3D" === this.view.type
        }, featuresChanged: function () {
            this.cN()
        }, MP: function () {
            this.cN();
            this.nR()
        }, nR: function () {
            if (this.Bl) {
                var a = !0;
                this.B = !0;
                var b = this.getMapStyle();
                if (!1 === this.get("showIndoorMap") || "normal" !== b && "amap://styles/normal" !== b) a = !1;
                b = this.getLayers();
                this.B = !1;
                for (var c in b) b.hasOwnProperty(c) && "AMap.IndoorMap" === b[c].CLASS_NAME && b[c] !== this.Bl && (a = !1);
                this.Bl.getMap() !== this && this.Bl.setMap(this);
                this.Bl.set("visible", a)
            }
        }, cN: function () {
            this.t5();
            if (this.view && "3D" !== this.view.type) {
                var a = this.get("baseRender");
                if (a && !("dv" < a)) {
                    var b = this.get("features", null, !0);
                    this.B = !0;
                    var c = this.getMapStyle();
                    this.B = !1;
                    var d = this.get("editEnable");
                    b && c && (g.l.lt && (d || "all" !== b || "normal" !== c && "amap://styles/normal" !== c) ? (this.set("baseRender", "v"), this.hQ = a) : this.hQ && (this.set("baseRender", this.hQ), this.hQ = null));
                    this.G0()
                }
            }
        }, Sfa: function () {
            var a = this;
            !a.Bl && a.J && (a.indoorMap = a.Bl = new AMap.IndoorMap({innerLayer: !0}), a.nR(), g.a.Kc(function () {
                a.q("indoor_create",
                    {target: a});
                a.set("display")
            }))
        }, layersChanged: function () {
            this.B = !0;
            var a = this.getLayers();
            this.zH = this.B = !1;
            for (var b = 0; b < a.length; b += 1) a[b].B = !0, a[b].getMap() !== this && a[b].setMap(this), a[b].B = !1, a[b].zH && (this.zH = !0);
            this.nR()
        }, getMapNumber: function () {
            if (this.map) return this.map.jC()
        }, getAdcode: function () {
            g.c.add(this, "getAdcode");
            return g.w.Qfa
        }, t5: function () {
            function a() {
                var a = !1;
                g.a.Nb(b.D.layers, function (b) {
                    if (b.sE && b.constructor === C.o.lb) return a = !0, !1
                }, b);
                if (g.a.ha(["d", "dv"], b.get("baseRender")) ||
                    !g.a.ha(["normal", "amap://styles/normal"], b.get("mapStyle")) || "3D" === b.get("viewMode") && 0 < b.get("pitch") || "all" !== b.get("features") || b.get("editEnable") || !b.get("turboMode")) a = !1;
                return a
            }

            if (!this.h3) {
                var b = this, c = a(), d = this.get("rasterLayer");
                if (d && !c) this.Nj(d), this.set("rasterLayer", void 0); else if (!d && c && this.get("layers")) {
                    d = new C.o.lb({innerLayer: !0, map: this, Mj: !0, zIndex: 0});
                    d.Nla = !0;
                    if (this.D.layers) {
                        var e = null;
                        g.a.Nb(this.D.layers, function (a) {
                            a instanceof C.o.lb && a.sE && (null === e || a.get("zIndex") >
                                e.get("zIndex")) && (e = a)
                        });
                        e && d.Ie(["zIndex", "opacity", "zooms", "visible"], e)
                    }
                    this.set("rasterLayer", d, !0)
                }
            }
        }, Yga: function (a) {
            a || (a = {});
            if (a.hasOwnProperty("defaultLayer")) {
                a.layers = [a.defaultLayer];
                var b = a.defaultLayer;
                b.IM = !0;
                this.set("defaultLayer", b, !0)
            }
            a.layers && 0 !== a.layers.length ? this.set("defaultLayer", a.layers[0], !0) : (b = new C.o.lb({innerLayer: !0}), a.layers = [b], b.IM = !0, this.set("defaultLayer", b, !0));
            if (b = a.view) b.D.rotation && (a.rotation = b.D.rotation), b.D.center && (a.center = b.D.center), b.D.zoom &&
            (a.zoom = Math.max(a.zooms[0], Math.min(a.zooms[1], b.D.zoom))), b.D.crs && (a.crs = b.D.crs);
            a.level && !a.zoom && (a.zoom = a.level);
            return a
        }, setLimitBounds: function (a) {
            g.c.add(this, "setLimitBounds");
            a instanceof g.no && (a.B = !0, a = a.toBounds(), a.B = !1);
            a instanceof g.we || (a = null);
            this.set("limitBounds", a)
        }, clearLimitBounds: function () {
            g.c.add(this, "clearLimitBounds");
            this.set("limitBounds", null)
        }, getLimitBounds: function () {
            g.c.add(this, "getLimitBounds");
            return this.get("limitBounds", null, !0)
        }, zF: function (a) {
            var b =
                this.get("layers");
            0 <= g.a.indexOf(b, a) || (b.push(a), this.set("layers", b))
        }, uA: function (a) {
            var b = this.get("overlays");
            0 <= g.a.indexOf(b, a) || (a instanceof C.A.Vm ? (this.get("overlays").push(a), this.Dw instanceof C.A.Vm && (this.Dw.B = !0, this.Dw.close(), this.Dw.B = !1), this.Dw = a, this.set("contextmenu", a, !0)) : (a instanceof C.A.Fe && (this.Cl instanceof C.A.Fe && this.Sx(this.Cl), this.Cl = a), this.get("overlays").push(a)), this.q("overlays"))
        }, Nj: function (a) {
            var b = this.get("layers"), c = g.a.indexOf(b, a);
            if (-1 !== c) {
                if (a.AV) {
                    for (c =
                             b.length; -1 < --c;) {
                        var d = b[c];
                        d.jz !== a && d !== a || b.splice(c, 1)
                    }
                    a = b
                } else a.jz && a.jz.Zea(a), a = g.a.Cn(b, c);
                this.set("layers", a)
            }
        }, Sx: function (a) {
            var b = this.get("overlays");
            this.set("overlays", g.a.Cn(b, g.a.indexOf(b, a)))
        }, getTileCoordByLngLat: function (a, b, c) {
            b = b || 256;
            this.B = !0;
            c = c || Math.round(this.getZoom());
            this.B = !1;
            a = this.$b(a, c);
            c = new g.dq(c, Math.floor(a.x / b), Math.floor(a.y / b));
            c.$A = a.x % b;
            c.aB = a.y % b;
            return c
        }, setZoom: function (a, b) {
            g.c.add(this, "setZoom");
            a = this.dB(a);
            var c = this.get("zooms");
            a > c[1] &&
            (a = c[1]);
            a < c[0] && (a = c[0]);
            this.get("zoomEnable") && (b || !this.loaded ? (this.set("zoom", a), this.q("zoomstart"), this.q("zoomchange"), this.q("zoomend")) : this.set("zoomSlow", a))
        }, getZoom: function () {
            g.c.add(this, "getZoom");
            return this.dB(this.get("targetLevel") || this.get("zoom", null, !0))
        }, getCenter: function () {
            g.c.add(this, "getCenter");
            return this.get("center", null, !0)
        }, setCenter: function (a, b) {
            g.c.add(this, "setCenter");
            a = g.a.Ha(a);
            b || !this.loaded ? (this.q("movestart"), this.set("center", a), this.q("mapmove"),
                this.map ? this.map.q("moveend") : this.q("moveend")) : (this.B = !0, this.panTo(a), this.B = !1)
        }, getCoordsBound: function () {
            return this.view.ul()
        }, getCoordsBoundByZoom: function (a) {
            return this.view.Kja(a)
        }, setRotation: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
            g.c.add(this, "setRotation");
            !g.l.cf && this.get("rotateEnable") && this.set("rotation", a)
        }, getRotation: function () {
            g.c.add(this, "getRotation");
            return this.get("rotation")
        }, setPitch: function (a) {
            g.c.add(this, "setPitch");
            a = Math.min(this.get("maxPitch"),
                Math.max(a, 0));
            "3D" === this.view.type && this.get("pitchEnable") && this.set("pitch", a)
        }, getPitch: function () {
            g.c.add(this, "getRotation");
            return "3D" === this.view.type ? this.get("pitch") : 0
        }, getStatus: function () {
            g.c.add(this, "getStatus");
            for (var a = "isHotspot pitchEnable dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable".split(" "), b = {}, c = 0; c < a.length; c += 1) b[a[c]] = this.get(a[c], null, !0);
            return b
        }, setStatus: function (a) {
            g.c.add(this, "setStatus");
            for (var b in a) a.hasOwnProperty(b) && -1 !== "isHotspot,pitchEnable,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom".indexOf(b) && this.set(b, a[b])
        }, getResolution: function (a, b) {
            g.c.add(this, "getResolution");
            var c = (a = g.a.Ha(a)) ? a.P : this.get("center", null, !0).P;
            return this.Oi.gp(b || this.get("zoom")) * Math.cos(c * Math.PI / 180)
        }, getScale: function (a) {
            g.c.add(this, "getScale");
            this.B = !0;
            a = this.getResolution() * (a || 96) /
                0.0254;
            this.B = !1;
            return a
        }, getDefaultCursor: function () {
            g.c.add(this, "getDefaultCursor");
            return this.get("defaultCursor", null, !0) || "url(" + g.w.vb + "/theme/v1.3/openhand.cur),default"
        }, setDefaultCursor: function (a) {
            g.c.add(this, "setDefaultCursor");
            return this.set("defaultCursor", a, !0)
        }, zoomIn: function (a) {
            g.c.add(this, "zoomIn");
            this.B = !0;
            this.setZoom(this.getZoom() + 1, a);
            this.B = !1
        }, zoomOut: function (a) {
            g.c.add(this, "zoomOut");
            this.B = !0;
            this.setZoom(this.getZoom() - 1, a);
            this.B = !1
        }, dB: function (a) {
            return this.view &&
            "3D" === this.view.type ? g.a.Yc(a, 4) : Math.round(a)
        }, setZoomAndCenter: function (a, b, c) {
            g.c.add(this, "setZoomAndCenter");
            b = g.a.Ha(b);
            a = this.dB(a);
            var d = this.get("zooms");
            a > d[1] && (a = d[1]);
            a < d[0] && (a = d[0]);
            this.B = !0;
            this.loaded ? this.set("zoomAndCenter", [a, b, c]) : (this.setZoom(a, !0), this.setCenter(b, !0));
            this.B = !1
        }, clearMap: function () {
            g.c.add(this, "clearMap");
            for (var a = this.get("overlays"), b = 0; b < a.length; b += 1) a[b].set("map", null, !0);
            this.set("overlays", []);
            if (this.map && this.map.pa) for (a = this.map.pa, b = a.length -
                1; 0 <= b; b -= 1) if (a[b].X instanceof C.o.gJ) {
                var c = a[b].X;
                c.B = !0;
                c.setMap(null);
                c.B = !1
            }
        }, destroy: function () {
            g.c.add(this, "destroy");
            this.Bl && (this.Bl.setMap(), this.indoorMap = this.Bl = null);
            this.set("overlays", []);
            this.set("defaultLayer", null);
            this.set("layers", []);
            var a = this.get("controls");
            a.remove = [];
            for (var b in a.Pc) a.Pc.hasOwnProperty(b) && a.remove.push(a.Pc[b]);
            a.Pc = [];
            a.add = [];
            this.set("controls", a);
            this.set("destroy", !0);
            this.La = !1;
            this.Qk();
            this.D = this.J = null;
            this.tc && this.tc.Qk();
            this.tc = null;
            this.view && this.view.Qk();
            this.view = null;
            this.Wh();
            C.Hb.ss--
        }, addControl: function (a) {
            g.c.add(this, "addControl");
            var b = g.a.Ab(a), c = this.get("controls") || {};
            c.Pc = c.Pc || {};
            c.Pc[b] || (c.Pc[b] = a);
            c.add = c.add || [];
            c.add.push(a);
            this.set("controls", c)
        }, removeControl: function (a) {
            g.c.add(this, "removeControl");
            var b = g.a.Ab(a), c = this.get("controls") || {};
            c.Pc = c.Pc || {};
            c.Pc[b] && delete c.Pc[b];
            c.remove = c.remove || [];
            c.remove.push(a);
            this.set("controls", c)
        }, clearControl: function () {
            g.c.add(this, "clearControl");
            var a =
                this.get("controls") || {};
            a.remove = a.remove || [];
            a.Pc = a.Pc || {};
            for (var b in a.Pc) a.Pc.hasOwnProperty(b) && (a.remove.push(a.Pc[b]), delete a.Pc[b]);
            this.set("controls", a)
        }, plugin: function (a, b) {
            g.c.add(this, "setPitch");
            "string" === typeof a && (a = [a]);
            g.pb.dh(a, b);
            return this
        }, clearInfoWindow: function () {
            g.c.add(this, "clearInfoWindow");
            var a = this.get("overlays");
            a && 0 !== a.length && this.Cl && (this.Cl.B = !0, this.Cl.close(), this.Cl.B = !1)
        }, remove: function (a) {
            g.c.add(this, "remove");
            a instanceof Array || (a = [a]);
            for (var b =
                0; b < a.length; b += 1) {
                var c = a[b];
                c.B = !0;
                c.getMap && c.getMap() === this && (c.close ? c.close() : c.setMap && c.setMap(null));
                c.B = !1
            }
        }, add: function (a) {
            g.c.add(this, "add");
            a instanceof Array || (a = [a]);
            for (var b = 0; b < a.length; b += 1) {
                var c = a[b];
                c.B = !0;
                if (c.getMap && c.getMap() !== this) if (c.open) continue; else c.setMap && c.setMap(this);
                c.B = !1
            }
        }, getAllOverlays: function (a, b) {
            g.c.add(this, "getAllOverlays");
            var c = this.get("overlays");
            if (a) {
                for (var d = "amap." + a.toLowerCase(), e = [], f = 0; f < c.length; f += 1) d !== c[f].CLASS_NAME.toLowerCase() ||
                !b && (c[f].wa || c[f].isOfficial) || e.push(c[f]);
                return e
            }
            if (!b) {
                e = [];
                for (f = 0; f < c.length; f += 1) c[f].wa || c[f].isOfficial || e.push(c[f]);
                c = e
            }
            d = this.get("layers");
            e = [];
            if (d) for (var f = 0, h = d.length; f < h; f += 1) d[f] instanceof C.o.gJ && e.push(d[f]);
            return c.concat(e)
        }, triggerResize: function () {
            this.map && this.map.$L()
        }, refreshSize: function () {
            this.UD = this.Rja()
        }, Rja: function () {
            return g.g.w_(this.J)
        }, getSize: function () {
            g.c.add(this, "getSize");
            (!this.UD || 10 > this.UD.width * this.UD.height) && this.refreshSize();
            return this.UD
        },
        getContainer: function () {
            g.c.add(this, "getContainer");
            return this.J
        }, panTo: function (a) {
            g.c.add(this, "panTo");
            a = g.a.Ha(a);
            this.loaded ? this.set("panTo", a) : (this.B = !0, this.setCenter(a), this.B = !1)
        }, panBy: function (a, b, c) {
            g.c.add(this, "panBy");
            this.B = !0;
            var d = this.get("rotation") * Math.PI / 180, e = a * Math.cos(d) + Math.sin(d) * b;
            a = -Math.sin(d) * a + Math.cos(d) * b;
            b = this.loaded && this.map && this.map.pd ? this.map.pd.E4 : this.get("centerCoords");
            d = Math.pow(2, 20 - this.getZoom());
            e = b.add(new g.G(-e * d, -a * d));
            e = this.Ee(e);
            !this.loaded ||
            c ? this.setCenter(e, c) : this.set("panTo", e);
            this.B = !1
        }, setFitView: function (a, b, c, d) {
            g.c.add(this, "setFitView");
            this.B = !0;
            var e = this.get("size"), f = e.height;
            if (!e.width || !f) return !0;
            if (a = this.M_(a)) {
                if (c = this.DG(a, 0, new g.G(40, 40), c, d)) b = b || !this.getBounds().contains(a.Yh()) || g.l.Y && 1 < Math.abs(c[0] + this.get("zoom", null, !0)), this.setZoomAndCenter(c[0], c[1], b);
                this.B = !1;
                return a
            }
        }, M_: function (a) {
            if (a) if (a instanceof C.A.Jh) a = [a]; else {
                if (!(a instanceof Array)) return null
            } else this.B = !0, a = this.getAllOverlays(),
                this.B = !1;
            if (a) {
                for (var b, c = 0; c < a.length; c += 1) {
                    var d = a[c];
                    if (d.get("visible") && !(d instanceof C.A.Fe || d instanceof C.A.Vm)) {
                        d.B = !0;
                        var e = d.getBounds();
                        d.B = !1;
                        e && (b = b ? b.fsa(e) : e.ib())
                    }
                }
                return b
            }
        }, getBounds: function (a) {
            g.c.add(this, "getBounds");
            var b = this.view.jd();
            return a && b.toBounds ? (b.B = !0, a = b.toBounds(), b.B = !1, a) : b
        }, setBounds: function (a, b, c, d, e, f) {
            g.c.add(this, "setBounds");
            c = this.DG(a, b, c, e, f);
            d = d || g.l.Y && 1 < Math.abs(c[0] + b - this.get("zoom", null, !0));
            this.B = !0;
            this.setZoomAndCenter(c[0], c[1], d);
            this.B = !1;
            return a
        }, C_: function (a, b, c, d, e) {
            a = this.M_(a);
            return this.DG(a, b, c, d, e)
        }, getCoordsBoundByZoomIn3D: function (a) {
            this.DF || (this.DF = new g.DJ);
            this.B = !0;
            var b = this.getRotation(), c = this.getPitch(), d = this.getSize(!0).ib();
            this.B = !1;
            a = {size: d, zoom: a, rotation: b, pitch: c, centerCoords: this.get("centerCoords")};
            this.DF.Sf(a, !0);
            this.DF.Xp();
            return this.DF.ul()
        }, DG: function (a, b, c, d, e) {
            b = b ? Number(b) : 0;
            this.B = !0;
            var f = this.getRotation(), h = this.getPitch(), k = this.getSize(!0).ib(), l = this.view.type;
            this.B =
                !1;
            var m = a.iO(this);
            a = a.lO(this);
            this.wA || (this.wA = "3D" === l ? new g.DJ : new g.BD);
            this.wA.Sf({size: k, zoom: 3, rotation: f, pitch: h, centerCoords: m}, !0);
            var n = h = 0;
            d ? (n = d[0], c = d[1], h = d[2], d = d[3], k.width -= h + d, k.height -= n + c, h = (h - d) / 2, n = (n - c) / 2) : c && (k.width -= 2 * c.x, k.height -= 2 * c.y);
            e = e || (g.l.Y ? 17 : 18);
            c = this.get("zooms");
            d = c[0];
            var p = Infinity, q = Infinity;
            do {
                this.wA.Sf({zoom: d}, !0);
                "3D" === l && this.wA.Xp();
                for (var q = p = Infinity, r = -Infinity, s = -Infinity, u = 0; u < a.length; u += 1) var v = this.wA.te(a[u]), p = Math.min(p, v.x), r = Math.max(r,
                    v.x), q = Math.min(q, v.y), s = Math.max(s, v.y);
                p = r - p;
                q = s - q;
                if (p > k.width || q > k.height) {
                    d -= 1;
                    break
                }
                d += 1
            } while (d <= c[1]);
            d = Math.min(c[1], e, Math.max(c[0], d + b));
            d = Math.floor(d);
            b = Math.pow(2, 20 - d);
            e = f * Math.PI / 180;
            f = h * Math.cos(e) + Math.sin(e) * n;
            e = -Math.sin(e) * h + Math.cos(e) * n;
            m = m.Ya(new g.G(f * b, e * b));
            m = this.Ch(m, 20);
            return [d, m]
        }, setLayers: function (a) {
            g.c.add(this, "setLayers");
            for (var b = 0; b < a.length; b += 1) a[b].set("map", this, !0);
            this.set("layers", a)
        }, getLayers: function () {
            g.c.add(this, "getLayers");
            var a = this.get("layers",
                null, !0), a = a.slice();
            if (this.B) {
                for (var b = [], c = -1, d = a.length; ++c < d;) {
                    var e = a[c];
                    if (e.AV) for (var e = e.pka(), f = -1, h = e.length; ++f < h;) {
                        var k = e[f];
                        -1 === g.a.indexOf(a, k) && b.push(k)
                    }
                }
                a = a.concat(b)
            } else for (b = a.length; -1 < --b;) a[b].jz && a.splice(b, 1);
            return a
        }, getDefaultLayer: function () {
            g.c.add(this, "getDefaultLayer");
            return this.get("defaultLayer", null, !0)
        }, setDefaultLayer: function (a) {
            g.c.add(this, "setDefaultLayer");
            this.B = !0;
            a.IM = !0;
            var b = this.get("defaultLayer"), c = this.get("layers");
            if (b) {
                if (a === b) return;
                b.IM = !1;
                c = g.a.Cn(c, g.a.indexOf(c, b))
            }
            this.set("defaultLayer", a, !0);
            a.B = !0;
            a.getMap == this && c.push(a);
            a.B = !1;
            this.setLayers(c);
            this.B = !1
        }, pixelToLngLat: function (a, b) {
            g.c.add(this, "pixelToLngLat");
            return this.Ch(a, b)
        }, lnglatToPixel: function (a, b) {
            g.c.add(this, "lnglatToPixel");
            return this.$b(a, b)
        }, drawPolyline: function (a) {
            g.c.add(this, "drawPolyline");
            this.set("draw", "polyline");
            this.set("drawStyle", a || {strokeColor: "#006600", jb: 0.9})
        }, render: function (a) {
            g.c.add(this, "render");
            this.map && this.map.set("display",
                a ? 1 : 0)
        }, setMask: function (a) {
            g.c.add(this, "setMask");
            this.set("mask", a);
            this.map && this.map.set("display")
        }, drawPolygon: function (a) {
            g.c.add(this, "drawPolygon");
            this.set("draw", "polygon");
            this.set("drawStyle", a || {strokeColor: "#006600", jb: 0.9, fillColor: "#FFAA00", Xd: 0.9})
        }, drawCircle: function (a) {
            g.c.add(this, "drawCircle");
            this.set("draw", "circle");
            this.set("drawStyle", a || {strokeColor: "#006600", jb: 0.9, fillColor: "#006600", Xd: 0.9})
        }, MG: function () {
            return this.view.MG()
        }, getCameraState: function () {
            g.c.add(this,
                "getCameraState");
            if (this.view && "3D" == this.view.type) return this.view.v_()
        }, endDraw: function () {
            this.set("draw", null)
        }, isGoogleTileVisible: function () {
            return this.map.isForeignMapVisible()
        }, isForeignMapVisible: function () {
            if (this.get("gridForeignMap") || this.get("vectorForeignMap")) return this.map && this.map.Gaa()
        }, te: function (a, b, c) {
            g.c.add(this, "p20ToContainer");
            return this.view.te(a, b, c)
        }, dg: function (a, b, c) {
            g.c.add(this, "containerToP20");
            return this.view.dg(a, b, c)
        }, getObject3DByContainerPos: function (a,
                                                b, c) {
            g.c.add(this, "getObject3DByContainerPos");
            if ("2D" === this.view.type || !this.map || !this.map.L) return null;
            this.B = !0;
            this.view.dg(a);
            var d = this.view.y_(a), e = this.map.L.AQ, f = this.view.Cd, h = this.get("zoom", null, !0),
                h = Math.pow(2, 20 - h);
            b = b || this.getLayers();
            this.B = !1;
            for (var k = [], l = 0; l < b.length; l += 1) {
                var m = b[l];
                m instanceof C.o.iq && (m = m.fo(e, d, f, h, a)) && k.push(m)
            }
            return c ? k : k.length ? (k.sort(function (a, b) {
                return a.Kd - b.Kd
            }), {index: k[0].index, point: k[0].bC, distance: k[0].Kd, object: k[0].object}) : null
        }
    });
    C.Hb.hd({
        nH: "lngLatToGeodeticCoord",
        Hja: "geodeticCoordToLngLat",
        DG: "getFitZoomAndCenterByBounds",
        C_: "getFitZoomAndCenterByOverlays",
        sr: "lnglatTocontainer",
        lnglatTocontainer: "lngLatToContainer",
        So: "containTolnglat",
        containTolnglat: "containerToLngLat",
        Vb: "lngLatToP20",
        Ee: "p20ToLngLat",
        te: "p20ToContainer",
        dg: "containerToP20",
        $b: "project",
        Ch: "unproject"
    });
    C.Hb.wb({
        isHotspotChanged: function () {
            if ("undefined" !== typeof this.nB && (this.vha(), this.get("isHotspot"))) {
                var a = this.get("layers", null, !0);
                a && a.length && !this.nB && this.zH && this.Kna()
            }
        }, Kna: function () {
            if (this.Dj) this.t0(); else {
                var a = this;
                this.B = !0;
                this.plugin("AMap.HotSpot", function () {
                    if (!a.nB) {
                        if (!a.Dj) {
                            var b = new g.Hh;
                            new C.A.Fe({innerOverlay: !0});
                            a.Dj = b
                        }
                        a.t0()
                    }
                });
                this.B = !1
            }
        }, vha: function () {
            this.Dj && this.bla()
        }, r2: function (a) {
            a.type = "hotspotover";
            a.isIndoorPOI = !1;
            this.q("hotspotover", a)
        }, p2: function (a) {
            a.type =
                "hotspotclick";
            a.isIndoorPOI = !1;
            this.q("hotspotclick", a)
        }, q2: function (a) {
            a.type = "hotspotout";
            a.isIndoorPOI = !1;
            this.q("hotspotout", a)
        }, t0: function () {
            var a = this.Dj;
            this.Dj.B = !0;
            this.Dj.setMap(this);
            this.Dj.B = !1;
            a.h("mouseover", this.r2, this);
            a.h("click", this.p2, this);
            a.h("mouseout", this.q2, this)
        }, bla: function () {
            var a = this.Dj;
            a.I("mouseover", this.r2, this);
            a.I("click", this.p2, this);
            a.I("mouseout", this.q2, this);
            this.Dj.B = !0;
            this.Dj.setMap(null);
            this.Dj.B = !1;
            this.Dj = null
        }
    });
    C.event = {
        V: function (a, b, c, d) {
            g.F.h(a, b, c, d);
            return new g.hD(0, a, b, c, d)
        }, Tfa: function () {
        }, addListener: function (a, b, c, d) {
            g.a.bi(a.addListener) ? a.addListener(b, c, d) : (a.be || (a.be = g.ra.be), g.ra.h.call(a, b, c, d));
            return new g.hD(1, a, b, c, d)
        }, rw: function (a, b, c, d) {
            g.a.bi(a.rw) ? a.rw(b, c, d) : (a.be || (a.be = g.ra.be), g.ra.h.call(a, b, c, d, !0));
            return new g.hD(1, a, b, c, d)
        }, QF: function (a) {
            g.a.bi(a.QF) ? a.QF() : g.ra.Wh.call(a)
        }, mt: function (a, b) {
            g.a.bi(a.mt) ? a.mt(b) : g.ra.Wh.call(a, b)
        }, removeListener: function (a) {
            a instanceof
            g.hD && (g.a.bi(a.ai.removeListener) ? a.ai.removeListener(a) : 0 === a.type ? g.F.I(a.ai, a.PN, a.TO, a.Je) : 1 === a.type && (a.ai.be || (a.ai.be = g.ra.be), g.ra.I.call(a.ai, a.PN, a.TO, a.Je)))
        }, N: function (a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            g.a.bi(a.N) ? a.N.apply(a, c) : (a.be || (a.be = g.ra.be), g.ra.q.apply(a, c))
        }
    };
    g.hD = g.Z.extend({
        r: function (a, b, c, d, e) {
            this.type = a;
            this.ai = b;
            this.PN = c;
            this.TO = d;
            this.Je = e
        }
    });
    var oc = {
        V: "addDomListener",
        Tfa: "addDomListenerOnce",
        addListener: "addListener",
        rw: "addListenerOnce",
        QF: "clearInstanceListeners",
        mt: "clearListeners",
        removeListener: "removeListener",
        N: "trigger"
    }, pc;
    for (pc in oc) oc.hasOwnProperty(pc) && (C.event[oc[pc]] = C.event[pc]);
    g.event = C.event;
    C.o.Ec = g.Z.extend({
        ha: [g.ra, g.Ge], r: function (a) {
            (new Date).getTime();
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Layer";
            g.a.Gb(this, a);
            this.D.map && (a = this.D.map, delete this.D.map, this.D.map = a);
            this.Sf(this.D)
        }, getContainer: function () {
            g.c.add(this, "getContainer");
            if (this.o && this.o.O) return this.o.O.yj()
        }, getZooms: function () {
            return this.get("zooms", null, !0)
        }, setOpacity: function (a) {
            g.c.add(this, "setOpacity");
            a !== this.get("opacity", null, !0) && this.set("opacity", a)
        }, getOpacity: function () {
            return this.get("opacity",
                null, !0)
        }, show: function () {
            g.c.add(this, "show");
            this.set("visible", !0);
            if (this.vp) {
                var a = this.get("map", null, !0);
                a && a.set("layers", a.get("layers", null, !0))
            }
        }, hide: function () {
            g.c.add(this, "hide");
            this.set("visible", !1);
            if (this.vp) {
                var a = this.get("map", null, !0);
                a && a.set("layers", a.get("layers", null, !0))
            }
        }, setMap: function (a) {
            g.c.add(this, "setMap");
            var b = this.get("map");
            if (a) b && a !== b && b.Nj(this), this.set("map", a); else if (b && (b.Nj(this), this.set("map", null, !0), this.Uh = !1, this.Gg && this.Gg(), this.onRemove)) this.onRemove()
        },
        getMap: function () {
            g.c.add(this, "getMap");
            return this.get("map", null, !0)
        }, mapChanged: function () {
            var a = this.get("map");
            a && a.zF(this)
        }, setzIndex: function (a) {
            g.c.add(this, "setzIndex");
            this.set("zIndex", a)
        }, getzIndex: function () {
            return this.get("zIndex", null, !0)
        }
    });
    C.o.lb = C.o.Ec.extend({
        D: {
            tileSize: 256,
            visible: !0,
            opacity: 1,
            zIndex: 0,
            noLimg: 1,
            zooms: [3, 20],
            getTileUrl: g.l.Y ? g.w.HC : g.w.GB,
            errorUrl: g.a.aja,
            detectRetina: !0,
            className: "amap-layer",
            mapNumber: "",
            merge: !1,
            sort: !1,
            cacheSize: g.l.size
        }, r: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer";
            g.c.xa(this, a);
            (a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl);
            this.dha(a);
            var b = a.zooms;
            b && b[1] >= this.Gk[0] ? (b[0] < this.Gk[0] && (b[0] = this.Gk[0]), b[1] > this.Gk[1] && (b[1] = this.Gk[1])) : a.zooms = [this.Gk[0], this.Gk[1]];
            arguments.callee.ma.call(this, a);
            a.Mj && (this.Mj = !0);
            this.sE = this.Wt()
        }, setTextIndex: function (a) {
            g.c.add(this, "setTextIndex");
            this.set("textIndex", a)
        }, Wt: function () {
            if (this.get("createTile")) return !1;
            var a = this.get("getTileUrl");
            return a && a !== g.w.GB && a !== g.w.HC ? !1 : !0
        }, mZ: function () {
            if (!this.Wt()) return !1;
            var a = this.get("map");
            return a && a.ci && "zh_cn" === a.get("lang") && !this.noVector ? !0 : !1
        }, S_: function (a) {
            var b = g.w.sH;
            g.l.ia && this.get("detectRetina") && (b = g.w.sH.replace("scl=1", "scl=2"));
            a && (b = b.replace("ltype=3",
                "ltype=11"));
            return b
        }, sg: function (a) {
            var b = this.mZ(), c = this.get("map");
            this.Wt() && this.set("mapNumber", "GS(2018)1709");
            if (this.Mj) return new g.o.lb(this, a, this.kq(this.S_(!0)), this.D.maxDataZoom, !0);
            if (b) if (this.vp = !0, g.o.Kh) {
                if ("dv" === c.get("baseRender") && !this.get("watermark")) {
                    var b = c.get("showBuildingBlock"), d = new g.o.lb(this, a, this.kq(this.S_(!b)), void 0, !0);
                    b && (d.Lk = new g.o.gd(new C.o.lb({
                        zooms: [16, 20],
                        innerLayer: !0
                    }), a, ["building"]), d.Lk.type = "\u697c\u5757\u56fe\u5c42", d.Lk.Ie(["visible",
                        "opacity", "zIndex"], d, !0), d.Lk.BA(c.get("mapStyle") || "normal"));
                    d.type = "\u6805\u683c\u5e95\u56fe";
                    return d
                }
                if ("v" <= c.get("baseRender") || this.get("watermark")) return "3D" == a.C.view.type ? (c = new g.o.gd(this, a, ["region", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe", b = new C.o.lb({
                    zooms: [17, 20],
                    zIndex: 50,
                    innerLayer: !0
                }), c.Lk = new g.o.gd(b, a, ["building"]), c.Lk.Oe = 17, c.Lk.type = "\u697c\u5757\u56fe\u5c42", c.Lk.jx = 1, c.Lk.Ie(["visible", "merge", "sort", "opacity"], c, !0), b.W("rejectMapMask", this, !0)) : (c = new g.o.gd(this,
                    a, ["region", "building", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe"), a.tga = c
            } else return ["vectorlayer", "overlay"]; else return this.vp = !1, new g.o.lb(this, a, null, this.D.maxDataZoom)
        }, getTileUrlChanged: function () {
            var a = this.get("getTileUrl");
            if (a === g.w.GB || a === g.w.HC || a === g.w.jI) this.zH = !0;
            "string" === typeof a && (a = this.kq(a));
            this.set("tileFun", a)
        }, dha: function (a) {
            this.Gk || (this.Gk = [this.D.zooms[0], this.D.zooms[1]]);
            var b;
            a.hasOwnProperty("detectRetina") && !1 === a.detectRetina && (b = !0);
            g.l.Y && g.l.ia && this.D.detectRetina &&
            !b && (this.Gk[1] -= 1)
        }, getTiles: function () {
            g.c.add(this, "getTiles");
            var a = this.get("tiles", null, !0);
            if (a && a.length) a = a[0]; else return [];
            for (var b = [], c, d = 0; d < a.length; d += 1) a[d].key && (c = a[d].key.split("/"), b.push("" + c[1] + "," + c[2]));
            return b
        }, reload: function () {
            g.c.add(this, "reload");
            this.set("reload", 1)
        }, Jr: function () {
            this.B = !0;
            var a = this.get("map", null, !0);
            this.setMap(null);
            this.Uh = !1;
            this.setMap(a);
            this.B = !1
        }, setTileUrl: function (a) {
            g.c.add(this, "setTileUrl");
            this.mZ() ? (this.set("getTileUrl", a), this.Jr()) :
                this.set("getTileUrl", a)
        }, kq: function (a) {
            var b = this, c, d, e;
            return function (f, h, k) {
                f = (f + Math.pow(2, k)) % Math.pow(2, k);
                if ("number" !== typeof(f + h + k)) return null;
                var l = b.get("map"), m = "zh_cn";
                l && (m = l.get("lang") || "zh_cn");
                k = a.replace("[x]", f).replace("[y]", h).replace("[z]", k).replace("[lang]", m);
                if (!c) {
                    if (d = a.match(/\{.*\}/)) e = d.toString().replace("{", "").replace("}", ""), e = e.split(",");
                    c = !0
                }
                e && e.length && (k = k.replace(d, e[Math.abs(f + h) % e.length]));
                return k
            }
        }, getTileUrl: function (a, b, c) {
            g.c.add(this, "getTileUrl");
            return this.get("tileFun", null, !0)(a, b, c)
        }, getZooms: function (a) {
            a || g.c.add(this, "getZooms");
            return this.get("zooms", null, !0)
        }
    });
    C.o.lb.SS = C.o.lb.extend({
        D: {
            getTileUrl: g.w.bR,
            zooms: [3, 20],
            zIndex: 2,
            maxDataZoom: 18,
            detectRetina: !1,
            mapNumber: "GS(2018)984",
            className: "amap-layer amap-satellite",
            cacheSize: g.l.size
        }, r: function (a) {
            this.CLASS_NAME = "AMap.TileLayer.Satellite";
            g.c.xa(this, a);
            this.Gk = [3, 20];
            arguments.callee.ma.apply(this, arguments)
        }
    });
    C.o.lb.QS = C.o.lb.extend({
        D: {
            getTileUrl: g.w.jI,
            zooms: [3, 20],
            zIndex: 3,
            type: "overlayer",
            maxDataZoom: 18,
            className: "amap-layer amap-roadnet",
            cacheSize: g.l.size
        }, r: function (a) {
            this.CLASS_NAME = "AMap.TileLayer.RoadNet";
            g.c.xa(this, a);
            this.Gk = [3, 20];
            arguments.callee.ma.apply(this, arguments)
        }, sg: function (a) {
            if (this.get("map").ci) {
                this.vp = !0;
                var b = g.w.kI;
                g.l.ia && this.get("detectRetina") && (b = g.w.kI.replace("scl=1", "scl=2"));
                a = new g.o.lb(this, a, this.kq(b), this.D.maxDataZoom)
            } else this.vp = !1, a = new g.o.lb(this,
                a);
            return a
        }
    });
    C.o.lb.YS = C.o.lb.extend({
        D: {
            getTileUrl: function (a, b, c) {
                return g.w.vc + "://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=" + (17 - c) + "&x=" + a + "&y=" + b
            },
            zooms: [6, 20],
            zIndex: 4,
            type: "overlayer",
            autoRefresh: !1,
            interval: 180,
            maxDataZoom: 17,
            alwaysRender: !g.l.VZ,
            className: "amap-layer amap-traffic",
            cacheSize: g.l.size
        }, r: function (a) {
            this.CLASS_NAME = "AMap.TileLayer.Traffic";
            g.c.xa(this, a);
            this.Gk = [6, 20];
            arguments.callee.ma.apply(this, arguments);
            this.B = !0;
            this.startRefresh();
            this.B = !1
        }, stopRefresh: function () {
            g.c.add(this,
                "stopRefresh");
            this.YH && (clearInterval(this.YH), this.YH = null)
        }, startRefresh: function () {
            g.c.add(this, "startRefresh");
            if (this.get("autoRefresh") && !this.YH) {
                var a = this;
                this.YH = setInterval(function () {
                    a.B = !0;
                    a.reload();
                    a.B = !1;
                    a.q("refresh")
                }, Math.max(1E3 * (this.get("interval") || 180), 1E4))
            }
        }, reload: function () {
            g.c.add(this, "reload");
            g.a.Kc(function () {
                this.set("reload")
            }, this)
        }, Gg: function () {
            this.B = !0;
            this.stopRefresh();
            this.get("map") && this.get("map").I("zoomstart", this.reload, this);
            this.B = !1
        }, sg: function (a) {
            var b =
                this.get("map"), b = a.C;
            b.h("zoomstart", this.reload, this);
            return "d" !== b.get("baseRender") ? g.o.sv ? a = new g.o.sv(this, a) : ["vt"] : a = new g.o.lb(this, a, null, this.D.maxDataZoom)
        }
    });
    C.o.lb.Ly = C.o.lb.extend({
        D: {
            zooms: [3, 20],
            zIndex: 12,
            detectRetina: !1,
            className: "amap-layer amap-flexible",
            cacheSize: g.l.size
        }, r: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer.Flexible";
            g.c.xa(this, a);
            this.Ola = !0;
            arguments.callee.ma.call(this, a)
        }, setCreateTile: function (a) {
            g.c.add(this, "setCreateTile");
            "function" === typeof a && a !== this.get("createTile") && this.set("createTile", a)
        }, getCreateTile: function () {
            return this.get("createTile", null, !0)
        }
    });
    C.o.lb.u7 = C.o.lb.Ly.extend({
        D: {
            zooms: [3, 20],
            zIndex: 12,
            tileSize: 512,
            detectRetina: !1,
            className: "amap-layer amap-wms",
            cacheSize: g.l.size,
            url: "",
            params: ""
        }, r: function (a) {
            this.CLASS_NAME = "AMap.TileLayer.WMS";
            g.c.xa(this, a);
            arguments.callee.ma.call(this, a);
            this.Qu();
            var b = this, c = this.get("tileSize");
            this.set("createTile", function (a, e, f, h, k) {
                var l = Math.pow(2, 20 - f) * c;
                f = new g.G(l * a, l * (e + 1));
                a = new g.G(l * (a + 1), l * e);
                e = g.rH.z2(f);
                a = g.rH.z2(a);
                var m = document.createElement("img");
                "3D" === b.Rk && (m.crossOrigin = "anonymous");
                g.F.h(m, "load", function () {
                    h(m)
                });
                g.F.h(m, "error", function () {
                    k(m)
                });
                m.src = this.url + "&BBOX=" + e + "," + a
            })
        }, Qu: function () {
            var a = this.get("url", null, !0), b = this.get("params", null, !0), c = this.get("tileSize");
            b.WIDTH = c;
            b.HEIGHT = c;
            b.CRS = b.CRS || "EPSG:3857";
            b.REQUEST = "GetMap";
            b.SERVICE = "WMS";
            b.FORMAT = b.FORMAT || "image/png";
            b.TRANSPARENT = void 0 === b.TRANSPARENT ? "true" : b.TRANSPARENT;
            delete b.BBOX;
            this.url = a + "?" + g.a.join(b, "&");
            this.B = !0;
            this.reload();
            this.B = !1
        }, setUrl: function (a) {
            g.c.add(this, "setUrl");
            this.set("url",
                a, !0);
            this.Qu()
        }, getUrl: function () {
            g.c.add(this, "getUrl");
            return this.get("url", null, !0)
        }, setParams: function (a) {
            g.c.add(this, "setParams");
            g.extend(this.get("params", null, !0), a || {});
            this.Qu()
        }, getParams: function () {
            g.c.add(this, "getParams");
            return this.get("params", null, !0)
        }
    });
    C.o.lb.v7 = C.o.lb.Ly.extend({
        D: {
            zooms: [3, 20],
            tileSize: 256,
            zIndex: 12,
            detectRetina: !1,
            className: "amap-layer amap-wmts",
            cacheSize: g.l.size
        }, r: function (a) {
            this.CLASS_NAME = "AMap.TileLayer.WMTS";
            g.c.xa(this, a);
            arguments.callee.ma.call(this, a);
            this.Qu();
            var b = this;
            this.get("tileSize");
            this.set("createTile", function (a, d, e, f, h) {
                var k = document.createElement("img");
                "3D" === b.Rk && (k.crossOrigin = "anonymous");
                g.F.h(k, "load", function () {
                    f(k)
                });
                g.F.h(k, "error", function () {
                    h(k)
                });
                k.src = this.url + "&TileMatrix=" + e + "&TileRow=" +
                    d + "&TileCol=" + a
            })
        }, Qu: function () {
            var a = this.get("url", null, !0), b = this.get("params", null, !0);
            b.TileMatrixSet = b.TileMatrixSet || "EPSG:3857";
            b.Request = "GetTile";
            b.Service = "WMTS";
            b.Format = b.Format || "image/png";
            this.url = a + "?" + g.a.join(b, "&");
            this.B = !0;
            this.reload();
            this.B = !1
        }, setUrl: function (a) {
            g.c.add(this, "setUrl");
            this.set("url", a, !0);
            this.Qu()
        }, getUrl: function () {
            g.c.add(this, "getUrl");
            return this.get("url", null, !0)
        }, setParams: function (a) {
            g.c.add(this, "setParams");
            g.extend(this.get("params", null, !0),
                a || {});
            this.Qu()
        }, getParams: function () {
            g.c.add(this, "getParams");
            return this.get("params", null, !0)
        }
    });
    C.o.lb.jD = C.o.lb.Ly.extend({
        D: {detectRetina: !0, zooms: [10, 18], zIndex: 2}, r: function (a) {
            arguments.callee.ma.apply(this, arguments);
            var b = this;
            this.set("createTile", function (a, d, e, f, h) {
                var k = b.He.map.map;
                k.mh.iy(a, d, e, function (l) {
                    if (l) h(); else {
                        var m = document.createElement("img");
                        "3D" === b.Rk && (m.crossOrigin = "anonymous");
                        g.F.h(m, "load", function () {
                            f(m)
                        });
                        g.F.h(m, "error", function () {
                            h(m)
                        });
                        m.src = function (a, c, d) {
                            var e = "zh_cn";
                            b && b.get && k && (e = k.get("lang") || "zh_cn");
                            return g.w.vc + "://grid.amap.com/grid/" + d + "/" +
                                a + "/" + c + "?src=jsapi&key=" + g.w.key + "&lang=" + e + "&dpiType=" + (g.l.bd ? "wprd" : "webrd")
                        }(a, d, e)
                    }
                })
            })
        }
    });
    C.o.Tc = C.o.Ec.extend({
        D: {visible: !0, zooms: [3, 25], type: "overlay", zIndex: 5, alwaysRender: !0},
        r: function (a) {
            this.O0 = !0;
            arguments.callee.ma.apply(this, arguments)
        },
        sg: function (a) {
            return new g.o.Tc(this, a)
        }
    });
    C.o.W5 = C.o.Ec.extend({
        D: {zooms: [14, 20], zIndex: 8, visible: !0, merge: !0, sort: !1}, r: function (a) {
            this.CLASS_NAME = "AMap.Buildings";
            g.c.xa(this, a);
            a = a || {};
            a.zooms && (a.zooms[0] = Math.max(14, a.zooms[0]));
            arguments.callee.ma.apply(this, arguments)
        }, Wt: function () {
            return !1
        }, sg: function (a) {
            if (g.l.lt) return a = new g.o.r7(this, a), a.jx = this.get("heightFactor") || 1, a
        }, setStyle: function (a) {
            this.set("customStyle", a);
            g.c.add(this, "setStyle")
        }
    });
    C.o.cJ = C.o.Ec.extend({
        D: {visible: !0, zooms: [3, g.l.Y ? 20 : 18], opacity: 1, type: "overlay", zIndex: 6}, r: function (a) {
            arguments.callee.ma.apply(this, arguments)
        }, sg: function (a) {
            return g.o.Oy ? new g.o.Oy(this, a) : ["imagelayer"]
        }, getMap: function () {
            g.c.add(this, "getMap");
            return this.He.map
        }, show: function () {
            g.c.add(this, "show");
            this.set("visible", !0);
            this.q("options")
        }, getOpacity: function () {
            g.c.add(this, "getOpacity");
            return this.get("opacity", null, !0)
        }, setOpacity: function (a) {
            g.c.add(this, "setOpacity");
            this.set("opacity",
                a)
        }, getBounds: function () {
            g.c.add(this, "getBounds");
            return this.get("bounds", null, !0).ib()
        }, setBounds: function (a) {
            g.c.add(this, "setBounds");
            this.q("bounds", a);
            this.B = !0;
            this.setOptions({bounds: a});
            this.B = !1
        }, hide: function () {
            g.c.add(this, "hide");
            this.set("visible", !1);
            this.q("options")
        }, setOptions: function (a) {
            g.c.add(this, "setOptions");
            this.Sf(a);
            this.q("options")
        }, getOptions: function () {
            g.c.add(this, "getOptions");
            var a = {}, b;
            for (b in this.D) this.D.hasOwnProperty(b) && (a[b] = this.get(b));
            return a
        }, getElement: function () {
            return this.o.O ?
                this.o.O.Wb : this.o.Rf ? this.o.Rf.Wb : null
        }
    });
    C.o.Oy = C.o.cJ.extend({
        r: function (a) {
            this.CLASS_NAME = "AMap.ImageLayer";
            g.c.xa(this, a);
            a && a.url && (a.__source__ = a.url);
            arguments.callee.ma.apply(this, arguments)
        }, getImageUrl: function () {
            g.c.add(this, "getImageUrl");
            return this.get("__source__")
        }, setImageUrl: function (a) {
            g.c.add(this, "setImageUrl");
            return this.set("__source__", a)
        }
    });
    C.o.t7 = C.o.cJ.extend({
        r: function (a) {
            this.CLASS_NAME = "AMap.VideoLayer";
            g.c.xa(this, a);
            a && a.url && (a.__source__ = a.url);
            arguments.callee.ma.apply(this, arguments)
        }, getVideoUrl: function () {
            g.c.add(this, "getVideoUrl");
            return this.get("__source__")
        }, setVideoUrl: function (a) {
            g.c.add(this, "setVideoUrl");
            return this.set("__source__", a)
        }
    });
    C.o.Y5 = C.o.cJ.extend({
        r: function (a) {
            this.CLASS_NAME = "AMap.CanvasLayer";
            g.c.xa(this, a);
            a && a.canvas && (a.__source__ = a.canvas);
            arguments.callee.ma.apply(this, arguments)
        }, getCanvas: function () {
            g.c.add(this, "getCanvas");
            return this.get("__source__")
        }, setCanvas: function (a) {
            g.c.add(this, "setCanvas");
            return this.set("__source__", a)
        }, reFresh: function () {
            this.o && (this.o.AC = !0, this.o.set("display"))
        }
    });
    C.o.K6 = C.o.Ec.extend({
        D: {
            visible: !0,
            zooms: [3, g.l.Y ? 20 : 18],
            type: "overlay",
            zIndex: 5,
            cursor: "pointer",
            alwaysRender: !0,
            stable: !0,
            bubble: !0,
            rejectMapMask: !0,
            className: "amap-mass"
        }, r: function (a, b) {
            this.CLASS_NAME = "AMap.MassMarks";
            g.c.xa(this, b);
            g.l.Ak && (this.Yi = !0, b.size && (b.size = g.a.Ap(b.size)), this.B = !0, this.setData(a), g.a.Gb(this, b), b.style ? (this.Sf(this.D, !0), this.setStyle(b.style)) : this.setStyle(this.D), this.B = !1)
        }, clear: function () {
            g.c.add(this, "clear");
            this.set("dataSources", "")
        }, getStyle: function () {
            g.c.add(this,
                "getStyle");
            return this.Il
        }, setStyle: function (a) {
            g.c.add(this, "setStyle");
            if (a instanceof Array) {
                for (var b = 0; b < a.length; b += 1) a[b].rotation_ = Math.PI * (a[b].rotation || 0) / 180, a[b].size = g.a.Ap(a[b].size), a.ef = Math.max(a.ef || 0, a[b].size.width + a[b].anchor.x), a.Pf = Math.max(a.ef || 0, a[b].size.height + a[b].anchor.y);
                this.Il = a
            } else a.size && (a.size = g.a.Ap(a.size)), a.rotation_ = Math.PI * (a.rotation || 0) / 180, this.Sf(a, !0), this.Il = {
                anchor: this.get("anchor"),
                url: this.get("url"),
                size: this.get("size"),
                rotation_: this.get("rotation_")
            },
                this.Il.ef = this.Il.size.width + this.Il.anchor.x, this.Il.Pf = this.Il.size.height + this.Il.anchor.y;
            this.q("style")
        }, setData: function (a) {
            g.c.add(this, "setData");
            this.set("dataSources", a)
        }, getData: function () {
            g.c.add(this, "getData");
            return this.get("datas") || this.get("dataSources")
        }, setMap: function (a) {
            g.c.add(this, "setMap");
            g.l.Ak && (a ? (this.get("map") && this.get("map").Nj(this), this.set("map", a)) : this.get("map") && (this.get("map").Nj(this), this.set("map", null, !0), this.Uh = !1, this.Gg && this.Gg()))
        }, sg: function (a) {
            return g.pb.AB(["cvector"]) ?
                (a = new g.o.Tc(this, a), this.W("datas", a), a) : ["cvector"]
        }
    });
    C.o.c6 = C.o.Ec.extend({
        r: function (a) {
            this.CLASS_NAME = "AMap.CompositeLayer";
            this.AV = !0;
            g.a.Gb(this, a);
            this.$l = [];
            this.Sf(this.D)
        }, opacityChanged: function () {
            for (var a = this.get("opacity", null, !0), b = -1, c = this.$l.length; ++b < c;) this.$l[b].setOpacity(a)
        }, addLayer: function (a) {
            if (!this.Pc(a)) {
                a.jz = this;
                var b = this.get("map");
                a.setMap(b);
                this.$l.push(a)
            }
            return this
        }, removeLayer: function (a) {
            this.Pc(a) && a.setMap(null);
            return this
        }, Zea: function (a) {
            if (this.Pc(a)) {
                delete a.jz;
                var b = this.$l;
                a = g.a.indexOf(b, a);
                g.a.Cn(b,
                    a)
            }
        }, Pc: function (a) {
            return -1 !== g.a.indexOf(this.$l, a)
        }, show: function () {
            for (var a = -1, b = this.$l.length; ++a < b;) this.$l[a].show()
        }, hide: function () {
            for (var a = -1, b = this.$l.length; ++a < b;) this.$l[a].hide()
        }, setzIndex: function (a, b) {
            g.c.add(this, "setzIndex");
            this.set("zIndex", a);
            var c = this.$l;
            if ("undefined" === typeof b) for (var d = -1, e = c.length; ++d < e;) {
                var f = c[d];
                f.setzIndex(a)
            } else (f = c[b]) && f.setzIndex(a)
        }, sg: function (a) {
            this.e = a
        }, pka: function () {
            return this.$l
        }
    });
    C.o.gJ = C.o.Oy.extend({
        r: function (a, b, c) {
            this.CLASS_NAME = "AMap.GroundImage";
            g.c.xa(this, c);
            c = c || {};
            this.Bg = !0;
            var d = parseFloat(c.opacity);
            isNaN(d) && (d = 1);
            arguments.callee.ma.call(this, {
                url: a,
                bounds: b,
                clickable: c.clickable,
                opacity: d,
                map: c.map,
                zooms: c.zooms || [3, 20]
            });
            this.CLASS_NAME = "AMap.GroundImage"
        }, Bna: function (a) {
            this.get("bounds").contains(a.lnglat) && (a.target = this, this.q("click", a))
        }, Cna: function (a) {
            this.get("bounds").contains(a.lnglat) && (a.target = this, this.q("dblclick", a))
        }, setMap: function (a) {
            g.c.add(this,
                "setMap");
            a ? (this.get("map") && (this.get("map").Nj(this), this.uZ && C.event.removeListener(this.uZ), this.JZ && C.event.removeListener(this.JZ)), this.set("map", a)) : this.get("map") && (this.get("map").Nj(this), this.He.map = null)
        }, mapChanged: function () {
            this.get("map") && (this.get("map").zF(this), this.get("clickable") && (this.uZ = C.event.addListener(this.get("map"), "click", this.Bna, this), this.JZ = C.event.addListener(this.get("map"), "dblclick", this.Cna, this)))
        }
    });
    C.A.Jh = g.Z.extend({
        ha: [g.ra, g.Ge, {Ha: g.a.Ha}], D: {extData: {}, bubble: !1, clickable: !0, draggable: !1}, r: function () {
            this.zE = g.a.Ab(this)
        }, Owa: function () {
            return this.zE
        }, yva: function () {
            this.B = !0;
            this.get("map", null, !0) && this.setMap(this.get("map"));
            this.B = !1
        }, mapChanged: function () {
            this.get("map", null, !0) && this.get("map", null, !0).uA(this)
        }, YN: function (a) {
            var b = 0;
            a && (b = "string" === typeof a ? Math.round(parseFloat(a) / 0.14929107086948487) : a);
            return b
        }, setHeight: function (a) {
            this.height = a = a || 0;
            a = this.YN(a);
            this.set("altitude",
                a)
        }, getHeight: function () {
            return this.height
        }, show: function () {
            g.c.add(this, "show");
            this.set("visible", !0)
        }, hide: function () {
            g.c.add(this, "hide");
            this.set("visible", !1)
        }, setMap: function (a) {
            g.c.add(this, "setMap");
            a !== this.get("map", null, !0) && (a ? (this.get("map", null, !0) && this.get("map", null, !0).Sx(this), this.set("map", a)) : this.get("map", null, !0) && (this.get("map", null, !0).Sx(this), this.set("map", null, !0)))
        }, getMap: function () {
            g.c.add(this, "getMap");
            return this.get("map", null, !0)
        }, setExtData: function (a) {
            g.c.add(this,
                "setExtData");
            this.set("extData", a)
        }, getExtData: function () {
            g.c.add(this, "getExtData");
            return this.get("extData", null, !0)
        }
    });
    C.A.Tc = C.A.Jh.extend({
        r: function (a) {
            C.A.Tc.Mc.r.apply(this, arguments)
        }, show: function () {
            g.c.add(this, "show");
            this.set("visible", !0);
            this.q("show", {type: "show", target: this})
        }, hide: function () {
            g.c.add(this, "hide");
            this.set("visible", !1);
            this.q("hide", {type: "hide", target: this})
        }, getVisible: function () {
            g.c.add(this, "getVisible");
            return this.get("visible", null, !0)
        }, getOptions: function () {
            g.c.add(this, "getOptions");
            var a = {},
                b = "map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable".split(" "),
                c = "isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir dirColor dirImg".split(" "),
                d = ["fillColor", "fillOpacity", "path", "lineJoin", "texture"], e = ["center", "radius", "texture"],
                f = ["bounds", "texture"], h = [];
            this instanceof C.A.Tb && (h = b.concat(c));
            this instanceof C.A.xc && (h = b.concat(d));
            this instanceof C.A.Mg && (h = b.concat(e).concat(d));
            this instanceof C.A.hs && (h = b.concat(e).concat(d));
            this instanceof C.A.ns && (h = b.concat(d).concat(f));
            for (b = 0; b < h.length; b += 1) a[h[b]] = this.get(h[b], null,
                !0);
            return a
        }, setOptions: function (a) {
            g.c.add(this, "setOptions");
            a.hasOwnProperty("path") && (a.path && a.path.length || (a.path = []), a.path = this.Ha(a.path));
            a.center && (a.center = this.Ha(a.center));
            var b;
            a.hasOwnProperty("map") && (b = a.map, delete a.map);
            this.Sf(a);
            void 0 !== b && (this.setMap(b), a.map = b);
            this.q("options");
            this.q("change", {type: "change", target: this})
        }, setzIndex: function (a) {
            g.c.add(this, "setzIndex");
            this.set("zIndex", a)
        }, getzIndex: function () {
            g.c.add(this, "getzIndex");
            return this.get("zIndex", null,
                !0)
        }, setDraggable: function (a) {
            g.c.add(this, "setDraggable");
            this.set("draggable", a)
        }
    });
    C.A.vD = C.A.Tc.extend({
        D: {
            visible: !0,
            zIndex: 10,
            strokeColor: "#006600",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            lineJoin: "miter",
            lineCap: "butt",
            path: []
        }, r: function (a) {
            C.A.vD.Mc.r.apply(this, arguments)
        }, setPath: function (a, b) {
            g.c.add(this, "setPath");
            a && a.length || (a = []);
            a = this.Ha(a);
            this.set("path", a);
            this.q("change", {type: "change", target: this});
            b || this.q("setPath");
            this.A && this.A.get("deltaPos") && this.A.set("deltaPos", [0, 0])
        }, getPath: function () {
            g.c.add(this, "getPath");
            var a = this.get("path", null, !0);
            this.A && this.A.get("deltaPos") && (a = this.A.MK(a, this.A.get("deltaPos")));
            return a
        }, jd: function () {
            var a = this.get("path");
            if (!a || !a.length) return null;
            a[0] instanceof g.T && (a = [a]);
            for (var b = new g.we(180, 90, -180, -90), c = 0; c < a.length; c += 1) for (var d = a[c], e = d.length - 1; 0 <= e; e -= 1) b.extend(d[e]);
            return b
        }
    });
    C.A.vD.hd({jd: "getBounds"});
    C.A.Ih = g.Z.extend({
        ha: [g.ra, g.Ge],
        D: {
            size: new g.md(36, 36),
            imageOffset: new g.G(0, 0),
            image: g.w.vb + "/theme/v1.3/markers/0.png",
            imageSize: null
        },
        r: function (a) {
            this.CLASS_NAME = "AMap.Icon";
            g.c.xa(this, a);
            a = a || {};
            a.size && (a.size = g.a.Ap(a.size));
            a.imageSize && (a.imageSize = g.a.Ap(a.imageSize));
            g.a.Gb(this, a);
            this.Sf(this.D)
        },
        setImageSize: function (a) {
            g.c.add(this, "setImageSize");
            a = g.a.Ap(a);
            this.set("imageSize", a)
        },
        getImageSize: function () {
            g.c.add(this, "getImageSize");
            return this.get("imageSize", null, !0)
        }
    });
    C.A.I6 = g.Z.extend({
        ha: [g.ra, g.Ge], D: {coords: [], type: ""}, r: function (a) {
            this.CLASS_NAME = "AMap.MarkerShape";
            g.c.xa(this, a);
            g.a.Gb(this, a);
            this.Sf(this.D)
        }
    });
    C.A.ob = C.A.Jh.extend({
        D: {
            cursor: "pointer",
            visible: !0,
            zIndex: 100,
            angle: 0,
            textAlign: "left",
            verticalAlign: "top",
            autoRotation: !1,
            opacity: 1,
            offset: new g.G(-9, -31),
            size: new g.G(19, 33),
            raiseOnDrag: !1,
            topWhenClick: !1,
            topWhenMouseOver: !1,
            animation: "AMAP_ANIMATION_NONE"
        }, r: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Marker";
            g.c.xa(this, a);
            a = a || {};
            this.Bg = !0;
            this.oba = g.a.Ab(this);
            this.B = !0;
            a.position && (a.position = this.Ha(a.position));
            a.height && this.setHeight(a.height);
            g.a.Gb(this, a);
            g.l.cf && (this.D.angle =
                0);
            this.Sf(this.D, !0);
            this.mapChanged();
            this.B = !1
        }, getAnchor: function () {
            g.c.add(this, "getAnchor");
            return this.get("anchor", null, !0)
        }, setAnchor: function (a) {
            g.c.add(this, "setAnchor");
            this.set("anchor", a)
        }, getId: function () {
            g.c.add(this, "getId");
            return this.oba
        }, setRaiseOnDrag: function (a) {
            g.c.add(this, "setRaiseOnDrag");
            this.set("raiseOnDrag", a)
        }, setPosition: function (a, b) {
            g.c.add(this, "setPosition");
            a = this.Ha(a);
            void 0 !== b && (this.B = !0, this.setHeight(b), this.B = !1);
            this.set("position", a)
        }, getPosition: function () {
            g.c.add(this,
                "getPosition");
            return this.get("position", null, !0)
        }, getBounds: function () {
            var a = this.get("position", null, !0).ib();
            return new g.we(a, a.ib())
        }, mapChanged: function () {
            this.Pk("zoom");
            var a = this.get("map", null, !0);
            a && (this.get("position", null, !0) || this.set("position", a.get("center")), a.uA(this), this.W("zoom", a))
        }, getZooms: function () {
            g.c.add(this, "getZooms");
            return this.get("zooms", null, !0)
        }, zoomChanged: function () {
            var a = this.get("zooms", null, !0);
            if (a) {
                var b = this.get("zoom");
                b < a[0] || b > a[1] ? this.set("outOfZooms",
                    !0) : this.set("outOfZooms", !1);
                this.A && this.A.Xna()
            }
        }, setIcon: function (a) {
            g.c.add(this, "setIcon");
            this.set("icon", a)
        }, getIcon: function () {
            g.c.add(this, "getIcon");
            return this.get("icon", null, !0)
        }, setContent: function (a) {
            g.c.add(this, "setContent");
            this.set("content", a)
        }, getContent: function () {
            g.c.add(this, "getContent");
            return this.get("content", null, !0)
        }, getContentDom: function () {
            return this.get("contentDom", null, !0)
        }, hide: function () {
            g.c.add(this, "hide");
            this.set("visible", !1)
        }, show: function () {
            g.c.add(this,
                "show");
            this.set("visible", !0)
        }, setCursor: function (a) {
            g.c.add(this, "setCursor");
            this.set("cursor", a)
        }, setRotation: function (a) {
            g.c.add(this, "setRotation");
            g.l.cf || this.set("angle", a)
        }, setAngle: function (a) {
            g.c.add(this, "setAngle");
            g.l.cf || "number" !== typeof a || this.set("angle", a)
        }, getAngle: function () {
            g.c.add(this, "getAngle");
            return this.get("angle", null, !0)
        }, setOffset: function (a) {
            g.c.add(this, "setOffset");
            this.set("offset", a)
        }, getOffset: function () {
            g.c.add(this, "getOffset");
            return this.get("offset", null,
                !0)
        }, setTextAlign: function (a) {
            g.c.add(this, "setTextAlign");
            this.set("textAlign", a)
        }, getTextAlign: function () {
            g.c.add(this, "getTextAlign");
            return this.get("textAlign", null, !0)
        }, setVerticalAlign: function (a) {
            g.c.add(this, "setVerticalAlign");
            this.set("verticalAlign", a)
        }, getVerticalAlign: function () {
            g.c.add(this, "getVerticalAlign");
            return this.get("verticalAlign", null, !0)
        }, setzIndex: function (a) {
            g.c.add(this, "setzIndex");
            this.set("zIndex", a)
        }, getzIndex: function () {
            g.c.add(this, "getzIndex");
            return this.get("zIndex",
                null, !0)
        }, setOpacity: function (a) {
            g.c.add(this, "setOpacity");
            this.set("opacity", a)
        }, setDraggable: function (a) {
            g.c.add(this, "setDraggable");
            this.set("draggable", a)
        }, getDraggable: function () {
            g.c.add(this, "getDraggable");
            return this.get("draggable", null, !0)
        }, moveTo: function (a, b, c) {
            g.c.add(this, "moveTo");
            a = this.Ha(a);
            this.set("move", {ig: a, speed: b, rb: c})
        }, moveAlong: function (a, b, c, d) {
            g.c.add(this, "moveAlong");
            if (!(2 > a.length)) {
                a = this.Ha(a);
                for (var e = [a[0]], f = a[0], h = 1; h < a.length; h += 1) f.cb(a[h]) || e.push(a[h]);
                this.set("move", {ig: e, speed: b, rb: c, kha: d})
            }
        }, stopMove: function () {
            g.c.add(this, "stopMove");
            this.set("move", !1)
        }, pauseMove: function () {
            g.c.add(this, "pauseMove");
            var a = this.get("move");
            if (!a) return !1;
            a.action = "pause";
            this.set("move", a);
            return !0
        }, resumeMove: function () {
            g.c.add(this, "resumeMove");
            var a = this.get("move");
            if (!a) return !1;
            a.action = "resume";
            this.set("move", a);
            return !0
        }, setShadow: function (a) {
            g.c.add(this, "setShadow");
            this.set("shadow", a)
        }, getShadow: function () {
            g.c.add(this, "getShadow");
            return this.get("shadow",
                null, !0)
        }, setClickable: function (a) {
            g.c.add(this, "setClickable");
            a !== this.get("clickable", null, !0) && this.set("clickable", a)
        }, getClickable: function () {
            g.c.add(this, "getClickable");
            return this.get("clickable", null, !0)
        }, setTitle: function (a, b) {
            g.c.add(this, "setTitle");
            "string" === typeof a && this.set("title", a, b)
        }, getTitle: function () {
            g.c.add(this, "getTitle");
            return this.get("title", null, !0)
        }, setLabel: function (a) {
            g.c.add(this, "setLabel");
            a && !g.a.np(a) && (a = g.extend({}, this.get("label"), a));
            this.set("label",
                a)
        }, getLabel: function () {
            g.c.add(this, "getLabel");
            return this.get("label", null, !0)
        }, setTop: function (a, b) {
            g.c.add(this, "setTop");
            this.set("isTop", a, b)
        }, getTop: function () {
            g.c.add(this, "getTop");
            return this.get("isTop", null, !0)
        }, setShape: function (a, b) {
            g.c.add(this, "setShape");
            this.set("shape", a, b)
        }, getShape: function () {
            g.c.add(this, "getShape");
            return this.get("shape", null, !0)
        }, setAnimation: function (a, b) {
            g.c.add(this, "setAnimation");
            this.set("animation", a, b)
        }, getAnimation: function () {
            g.c.add(this, "getAnimation");
            return this.get("animation", null, !0)
        }, getMap: function () {
            g.c.add(this, "getMap");
            return this.get("map", null, !0)
        }, markOnAMAP: function (a) {
            g.c.add(this, "markOnAMAP");
            a = a || {};
            var b = {};
            b.name = a.name || this.get("name", null, !0) || "";
            a = this.Ha(a.position) || this.get("position", null, !0);
            b.y = a.P;
            b.x = a.R;
            g.Fh.Tr(g.Fh.xka(b))
        }
    });
    C.A.Vm = C.A.Jh.extend({
        D: {visible: !1, items: []}, r: function (a) {
            this.CLASS_NAME = "AMap.ContextMenu";
            g.c.xa(this, a);
            this.Bg = !0;
            g.a.Gb(this, a);
            this.D.items = [];
            this.Sf(this.D)
        }, addItem: function (a, b, c) {
            g.c.add(this, "addItem");
            this.get("items").push({h5: a, rb: b, JH: c});
            this.q("items")
        }, removeItem: function (a, b) {
            g.c.add(this, "removeItem");
            var c = this.get("items"), d, e;
            for (e = 0; e < c.length; e += 1) if (d = c[e], d.h5 === a && d.rb === b) {
                c.splice(e, 1);
                break
            }
            this.q("items")
        }, open: function (a, b) {
            g.c.add(this, "open");
            this.B = !0;
            b = g.a.Ha(b);
            this.set("position", b);
            this.map ? this.map && this.map !== a && (this.map.Sx(this), this.map = a, this.setMap(a)) : (this.map = a, this.setMap(a));
            this.q("open", {type: "open", target: this});
            this.B = !1
        }, close: function () {
            g.c.add(this, "close");
            this.B = !0;
            this.setMap(null);
            this.map && (this.map = this.map.Dw = null, this.q("close", {type: "close", target: this}));
            this.B = !1
        }
    });
    C.A.Fe = C.A.Jh.extend({
        D: {
            visible: !0,
            offset: new g.G(0, 0),
            showShadow: !1,
            closeWhenClickMap: !1,
            retainWhenClose: !0,
            autoMove: !0,
            altitude: 0,
            anchor: "bottom-center"
        }, r: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.InfoWindow";
            g.c.xa(this, a);
            a = a || {};
            this.Bg = !0;
            a && a.size && (a.size = g.a.Ap(a.size));
            g.a.Gb(this, a);
            this.Sf(this.D);
            a.position && this.set("position", g.a.Ha(a.position), !0);
            a.height && this.set("altitude", this.YN(a.height), !0)
        }, open: function (a, b, c) {
            g.c.add(this, "open");
            b = g.a.Ha(b);
            if (a && !this.FI && (b =
                b || this.get("position", null, !0))) {
                this.q("change", {type: "change", target: this});
                c = this.YN(c) || this.get("altitude");
                var d = this.get("map", null, !0);
                d && d === a ? (this.set("altitude", c, !0), this.set("position", b)) : (this.map = a, a.Cl && a.Cl.close(), this.set("position", b, !0), this.set("altitude", c, !0), this.B = !0, this.setMap(a), this.B = !1);
                this.q("open", {type: "open", target: this})
            }
        }, close: function () {
            g.c.add(this, "close");
            this.A && this.A.map && (this.B = !0, this.setMap(null), this.map = null, this.q("change", {
                type: "change",
                target: this
            }),
                this.B = !1)
        }, getAnchor: function () {
            g.c.add(this, "getAnchor");
            return this.get("anchor", null, !0)
        }, setAnchor: function (a) {
            g.c.add(this, "setAnchor");
            this.set("anchor", a);
            this.q("change", {type: "change", target: this})
        }, setContent: function (a) {
            g.c.add(this, "setContent");
            this.set("content", a);
            this.q("change", {type: "change", target: this})
        }, getContentU: function () {
            g.c.add(this, "getContentU");
            return this.get("content", null, !0)
        }, getContentDom: function () {
            return this.get("contentDom", null, !0)
        }, getContent: function () {
            g.c.add(this,
                "getContent");
            return this.get("content", null, !0)
        }, setPosition: function (a) {
            g.c.add(this, "setPosition");
            a = g.a.Ha(a);
            this.set("position", a);
            this.q("change", {type: "change", target: this})
        }, setOffset: function (a) {
            g.c.add(this, "setOffset");
            this.set("offset", a);
            this.q("change", {type: "change", target: this})
        }, getPosition: function () {
            g.c.add(this, "getPosition");
            return this.get("position", null, !0)
        }, setSize: function (a) {
            g.c.add(this, "setSize");
            a = g.a.Ap(a);
            this.set("size", a);
            this.q("change", {type: "change", target: this})
        },
        getSize: function (a) {
            g.c.add(this, "getSize");
            var b = this.get("size", null, !0);
            if (b) return b;
            if (this.A && !a) return new g.md(this.A.Wg.offsetWidth, this.A.Wg.offsetHeight)
        }, getIsOpen: function () {
            g.c.add(this, "getIsOpen");
            return !!this.get("map")
        }
    });
    C.A.Tb = C.A.vD.extend({
        D: {
            isOutline: !1,
            outlineColor: "#000000",
            geodesic: !1,
            dirColor: "white",
            borderWeight: 1
        }, r: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Polyline";
            g.c.xa(this, a);
            this.B = !0;
            C.A.Tb.Mc.r.apply(this, arguments);
            this.Bg = !0;
            a = a || {};
            a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 50;
            a.path && (a.path = this.Ha(a.path));
            g.a.Gb(this, a);
            this.setOptions(this.D);
            this.B = !1
        }, getLength: function () {
            g.c.add(this, "getLength");
            for (var a = this.get("path"), b = 0, c = 0; c < a.length - 1; c += 1) b += a[c].le(a[c + 1]);
            return parseFloat(b.toFixed(2))
        }
    });
    (function (a) {
        function b(a, b, c, d) {
            if (1 <= a) return d;
            var e = 1 - a;
            return e * e * b + 2 * e * a * c + a * a * d
        }

        function c(a, b, c, d, e) {
            if (1 <= a) return e;
            var f = 3 * (c[0] - b[0]), h = 3 * (d[0] - c[0]) - f, s = 3 * (c[1] - b[1]);
            c = 3 * (d[1] - c[1]) - s;
            return [(e[0] - b[0] - f - h) * Math.pow(a, 3) + h * Math.pow(a, 2) + f * a + b[0], (e[1] - b[1] - s - c) * Math.pow(a, 3) + c * Math.pow(a, 2) + s * a + b[1]]
        }

        function d(a, c, d, e) {
            return [b(a, c[0], d[0], e[0]), b(a, c[1], d[1], e[1])]
        }

        function e(b, c) {
            c = a.a.Ha(c);
            return b.EB(c, 20).Jl()
        }

        function f(b, c) {
            a.a.isArray(c) && (c = new a.G(c[0], c[1]));
            return b.cC(c,
                20)
        }

        function h(b, f, h, n, p, q) {
            var r = null;
            if (b && h && h.length) {
                b = [b];
                b.push.apply(b, h);
                b.push(f);
                h = 0;
                for (r = b.length; h < r; h++) b[h] = e(n, b[h]);
                h = a.extend({tolerance: 4, interpolateNumLimit: [3, 300]}, q);
                q = h.tolerance;
                h = h.interpolateNumLimit;
                q = Math.max(2, q);
                for (var s = r = 0, u = 0, v = b.length; u < v - 1; u++) var x = b[u], t = b[u + 1], r = r + Math.abs(t[0] - x[0]), s = s + Math.abs(t[1] - x[1]);
                a:{
                    p = Math.min(h[1], Math.max(h[0], Math.round(Math.max(r, s) / p / q)));
                    q = null;
                    switch (b.length) {
                        case 3:
                            q = d;
                            break;
                        case 4:
                            q = c;
                            break;
                        default:
                            r = null;
                            break a
                    }
                    h = [];
                    r = [0].concat(b);
                    for (s = 1; s < p - 2; s++) r[0] = s / p, h.push(q.apply(null, r));
                    h.push(b[b.length - 1]);
                    r = h
                }
            }
            return r || [e(n, f)]
        }

        a.dv = {
            Wya: d, Mva: c, hG: function () {
                function a(b, c, d) {
                    return (((1 - 3 * d + 3 * c) * b + (3 * d - 6 * c)) * b + 3 * c) * b
                }

                function b(a) {
                    return a
                }

                var c = {}, d = "function" === typeof Float32Array;
                return function (e, f, h, s) {
                    function u(b) {
                        if (0 === b) b = 0; else if (1 === b) b = 1; else {
                            for (var c = 0, d = 1; 10 !== d && x[d] <= b; ++d) c += 0.1;
                            --d;
                            var d = c + (b - x[d]) / (x[d + 1] - x[d]) * 0.1,
                                l = 3 * (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e;
                            if (0.001 <= l) {
                                for (c = 0; 4 > c; ++c) {
                                    l = 3 *
                                        (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e;
                                    if (0 === l) break;
                                    d -= (a(d, e, h) - b) / l
                                }
                                b = d
                            } else if (0 === l) b = d; else {
                                var d = c, c = c + 0.1, m, n = 0;
                                do m = d + (c - d) / 2, l = a(m, e, h) - b, 0 < l ? c = m : d = m; while (1E-7 < Math.abs(l) && 10 > ++n);
                                b = m
                            }
                            b = a(b, f, s)
                        }
                        return b
                    }

                    if (!(0 <= e && 1 >= e && 0 <= h && 1 >= h)) throw Error("bezier x values must be in [0, 1] range");
                    var v = arguments.toString();
                    if (c[v]) return c[v];
                    if (e === f && h === s) return b;
                    for (var x = d ? new Float32Array(11) : Array(11), t = 0; 11 > t; ++t) x[t] = a(0.1 * t, e, h);
                    return c[v] = u
                }
            }(), H_: function (a, b, c, d) {
                var e, f, r = [];
                e = 0;
                for (f =
                         a.length; e < f; e += 1) r.push.apply(r, h(a[e - 1], a[e], a[e].controlPoints, b, c, d));
                return r
            }, lka: function (a, b, c, d) {
                a = this.H_(a, b, c, d);
                c = [];
                d = 0;
                for (var e = a.length; d < e; d++) c.push(f(b, a[d]));
                return c
            }
        }
    })(g);
    C.A.Fy = C.A.Tb.extend({
        D: {tolerance: 4, interpolateNumLimit: [3, 300]}, r: function (a) {
            this.CLASS_NAME = "AMap.BezierCurve";
            g.c.xa(this, a);
            C.A.Fy.Mc.r.apply(this, arguments)
        }, getLength: function () {
            g.c.add(this, "getLength");
            this.get("map");
            this.B = !0;
            var a = this.getInterpolateLngLats();
            this.B = !1;
            return g.eq.distanceOfLine(a)
        }, getInterpolateLngLats: function () {
            g.c.add(this, "getInterpolateLngLats");
            var a = this.get("map");
            return g.dv.lka(this.get("path"), a && a.Oi || g.Eh.eJ, Math.pow(2, 2), this.D)
        }, getSerializedPath: function () {
            g.c.add(this,
                "getSerializedPath");
            for (var a = this.get("path", null, !0), b = [], c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                if (e instanceof g.T) {
                    var f = [];
                    if (e.controlPoints) for (var h = 0, k = e.controlPoints.length; h < k; h++) f.push(e.controlPoints[h].tO()), f.push(e.controlPoints[h].pO());
                    f.push(e.tO());
                    f.push(e.pO());
                    b.push(f)
                } else b.push(e)
            }
            return b
        }, Ha: function (a) {
            var b = typeof a[0];
            if (g.a.isArray(a) && "object" === b) {
                for (b = 0; b < a.length; b += 1) a[b] = this.Jda(a[b]);
                return a
            }
            return [this.Aya(a)]
        }, Jda: function (a) {
            var b;
            if (a instanceof g.T) b =
                a; else {
                b = typeof a[0];
                var c, d, e = [];
                if ("string" === b || "number" === b) {
                    d = a.length;
                    if (d % 2) throw Error("LngLat number should be even, now it's " + d);
                    b = new g.T(a[d - 2], a[d - 1]);
                    c = 0;
                    for (d -= 2; c < d; c += 2) e.push(new g.T(a[c], a[c + 1]))
                } else if (g.a.isArray(a[0])) for (d = a.length, b = new g.T(a[d - 1][0], a[d - 1][1]), c = 0, d -= 1; c < d; c++) e.push(new g.T(a[c][0], a[c][1])); else throw Error("AMap.LngLat expected, now it's " + a);
                b && e.length && (b.controlPoints = g.a.Ha(e))
            }
            if (b.controlPoints && 2 < b.controlPoints.length) throw Error("Control Points Number should be 1 or 2 !");
            return b
        }
    });
    C.A.xc = C.A.vD.extend({
        r: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Polygon";
            g.c.xa(this, a);
            this.B = !0;
            C.A.xc.Mc.r.apply(this, arguments);
            this.Bg = !0;
            a = a || {};
            a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
            a.path && (a.path = this.Ha(a.path));
            g.a.Gb(this, g.extend({fillColor: "#FFAA00", fillOpacity: 0.9}, a));
            this.setOptions(this.D);
            this.B = !1
        }, AO: function (a) {
            var b = 6378137 * Math.PI / 180, c = 0, d = a.length;
            if (3 > d) return 0;
            for (var e = 0; e < d - 1; e += 1) var f = a[e], h = a[e + 1], k = f.R * b * Math.cos(f.P * Math.PI / 180), f = f.P * b, l = h.R *
                b * Math.cos(h.P * Math.PI / 180), c = c + (k * h.P * b - l * f);
            e = a[e];
            a = a[0];
            d = e.R * b * Math.cos(e.P * Math.PI / 180);
            e = e.P * b;
            h = a.R * b * Math.cos(a.P * Math.PI / 180);
            c += d * a.P * b - h * e;
            return 0.5 * Math.abs(c)
        }, getArea: function () {
            g.c.add(this, "getArea");
            var a = this.get("path", null, !0), b;
            if (!a.length || a[0] instanceof g.T) b = this.AO(a); else {
                b = this.AO(a[0]);
                for (var c = 1; c < a.length; c += 1) b -= this.AO(a[c])
            }
            return Number(b.toFixed(2))
        }, toString: function () {
            g.c.add(this, "toString");
            return this.get("path").join(";")
        }, contains: function (a) {
            g.c.add(this,
                "contains");
            a = g.a.Ha(a);
            var b = this.get("path");
            b.length && b[0] instanceof g.T && (b = [b]);
            a = [a.R, a.P];
            for (var c, d = 0, e = b.length; d < e && (c = this.Uga(b[d]), g.sd.mp(c) || c.reverse(), c = g.sd.Jd(a, c, 0 === d ? !0 : !1), 0 < d && (c = !c), c); d += 1) ;
            return c
        }, Uga: function (a) {
            for (var b = [], c = 0; c < a.length; c += 1) b.push([a[c].R, a[c].P]);
            return b
        }
    });
    C.A.Mg = C.A.Tc.extend({
        D: {
            visible: !0,
            zIndex: 10,
            strokeColor: "#006600",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            radius: 1E3,
            fillColor: "#006600",
            fillOpacity: 0.9,
            unit: "miter"
        }, r: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Circle";
            g.c.xa(this, a);
            this.B = !0;
            C.A.Mg.Mc.r.apply(this, arguments);
            a = a || {};
            a.center && (a.center = g.a.Ha(a.center));
            a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
            g.a.Fj(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && delete a.radius);
            g.a.Gb(this, a);
            this.Bg = this.D.center ? !0 : !1;
            this.setOptions(this.D);
            this.B = !1
        }, setCenter: function (a, b) {
            g.c.add(this, "setCenter");
            (a = g.a.Ha(a)) && a instanceof g.T && (this.set("center", a), this.q("change", {
                type: "change",
                target: this
            }), this.Bg || (this.Bg = !0, this.get("map") && this.get("map").q("overlays")), b || this.q("setCenter"))
        }, getCenter: function () {
            g.c.add(this, "getCenter");
            var a = this.get("center", null, !0);
            this.A && this.A.get("deltaPos") && (a = this.A.MK([a], this.A.get("deltaPos"))[0]);
            return a
        }, setRadius: function (a,
                                b) {
            g.c.add(this, "setRadius");
            this.set("radius", a);
            this.q("change", {type: "change", target: this});
            b || this.q("setRadius")
        }, getPath: function (a) {
            g.c.add(this, "getPath");
            a = a || 36;
            for (var b = this.get("center", null, !0), c = this.get("radius", null, !0), d = [], e = 0; e < a; e += 1) {
                var f = Math.PI * e / a * 2, h = Math.cos(f) * c, f = Math.sin(f) * c;
                d.push(b.offset(h, f))
            }
            return d
        }, getRadius: function () {
            g.c.add(this, "getRadius");
            return this.get("radius", null, !0)
        }, getBounds: function () {
            var a = this.get("center"), b = this.get("radius");
            if (!a) return null;
            var c = a.offset(-b, -b), a = a.offset(b, b);
            return new g.we(c, a)
        }, contains: function (a) {
            g.c.add(this, "contains");
            return this.get("center").le(a) <= this.get("radius") ? !0 : !1
        }
    });
    C.A.pS = C.A.Mg.extend({
        r: function (a) {
            this.CLASS_NAME = "AMap.CircleMarker";
            g.c.xa(this, a);
            a = a || {};
            a.unit = "px";
            void 0 === a.radius ? a.radius = 20 : g.a.Fj(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && (a.radius = 20));
            C.A.pS.Mc.r.apply(this, arguments)
        }, getBounds: function () {
            this.B = !0;
            var a = this.getCenter();
            this.B = !1;
            return new g.we(a, a.ib())
        }, contains: function (a) {
            g.c.add(this, "contains");
            this.B = !0;
            var b = this.getMap();
            this.B = !1;
            if (!b) return !1;
            var c = this.get("center");
            b.B = !0;
            var d = !1;
            c.le(a) <=
            this.get("radius") * b.getResolution(c) && (d = !0);
            b.B = !1;
            return d
        }
    });
    var qc = g.Z.extend({
        r: function (a) {
            var b = Array(3), c;
            c = a instanceof Array ? a : a instanceof g.Vk || a instanceof g.Na ? a.elements : arguments;
            b[0] = c[0] || 0;
            b[1] = c[1] || 0;
            b[2] = c[2] || 0;
            this.elements = b
        }, length: function () {
            return Math.sqrt(this.x1())
        }, x1: function () {
            var a = this.elements;
            return a[0] * a[0] + a[1] * a[1] + a[2] * a[2]
        }, normalize: function () {
            var a = this.elements, b = a[0], c = a[1], d = a[2], e = Math.sqrt(b * b + c * c + d * d);
            if (e) {
                if (1 === e) return this
            } else return a[0] = 0, a[1] = 0, a[2] = 0, this;
            e = 1 / e;
            a[0] = b * e;
            a[1] = c * e;
            a[2] = d * e;
            return this
        },
        ib: function () {
            return new g.Na(this)
        }, copy: function (a) {
            var b = this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            return this
        }, set: function (a, b, c) {
            var d = this.elements;
            d[0] = a;
            d[1] = b;
            d[2] = c
        }, cb: function (a) {
            var b = this.elements;
            a = a.elements;
            return b[0] === a[0] && b[1] === a[1] && b[2] === a[2]
        }, Pm: function (a) {
            var b = this.elements;
            b[0] *= a;
            b[1] *= a;
            b[2] *= a;
            return this
        }, add: function (a) {
            var b = this.elements;
            a = a.elements;
            b[0] += a[0];
            b[1] += a[1];
            b[2] += a[2];
            return this
        }, bga: function (a, b) {
            var c = a.elements, d = b.elements,
                e = this.elements;
            e[0] = c[0] + d[0];
            e[1] = c[1] + d[1];
            e[2] = c[2] + d[2];
            return this
        }, sub: function (a) {
            a = a.elements;
            var b = this.elements;
            b[0] -= a[0];
            b[1] -= a[1];
            b[2] -= a[2];
            return this
        }, cy: function (a, b) {
            var c = a.elements, d = b.elements, e = this.elements;
            e[0] = c[0] - d[0];
            e[1] = c[1] - d[1];
            e[2] = c[2] - d[2];
            return this
        }, Sq: function (a) {
            a = a.elements;
            var b = this.elements;
            b[0] = b[1] * a[2] - b[2] * a[1];
            b[1] = b[2] * a[0] - b[0] * a[2];
            b[2] = b[0] * a[1] - b[1] * a[0];
            return this
        }, Hw: function (a, b) {
            var c = a.elements, d = b.elements, e = this.elements;
            e[0] = c[1] * d[2] -
                c[2] * d[1];
            e[1] = c[2] * d[0] - c[0] * d[2];
            e[2] = c[0] * d[1] - c[1] * d[0];
            return this
        }, jf: function (a) {
            a = a.elements;
            var b = this.elements;
            return b[0] * a[0] + b[1] * a[1] + b[2] * a[2]
        }, le: function (a) {
            return Math.sqrt(this.PZ(a))
        }, PZ: function (a) {
            var b = a.elements, c = this.elements;
            a = c[0] - b[0];
            var d = c[1] - b[1], b = c[2] - b[2];
            return a * a + d * d + b * b
        }, Df: function (a) {
            var b = this.elements[0], c = this.elements[1], d = this.elements[2];
            a = a.elements;
            var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
            this.elements[0] = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
            this.elements[1] =
                (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
            this.elements[2] = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
            return this
        }
    });
    g.Na = qc;
    g.Na.hd({
        jf: "dot",
        ib: "clone",
        add: "add",
        sub: "sub",
        bga: "addVectors",
        cy: "subVectors",
        Hw: "crossVectors",
        normalize: "normalize",
        length: "length"
    });
    var rc = g.Z.extend({
        r: function (a) {
            var b = Array(4), c;
            c = a instanceof Array ? a : arguments;
            b[0] = c[0];
            b[1] = c[1];
            b[2] = c[2];
            b[3] = c[3] || 1;
            this.elements = b
        }, copy: function (a) {
            var b = this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = void 0 !== a[3] ? a[3] : 1;
            return this
        }, multiply: function (a) {
            var b = this.elements;
            b[0] *= a;
            b[1] *= a;
            b[2] *= a;
            b[3] *= a
        }, Df: function (a) {
            var b = this.elements[0], c = this.elements[1], d = this.elements[2], e = this.elements[3];
            a = a.elements;
            this.elements[0] = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
            this.elements[1] =
                a[1] * b + a[5] * c + a[9] * d + a[13] * e;
            this.elements[2] = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
            this.elements[3] = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
            return this
        }
    });
    g.Vk = rc;

    function sc(a, b) {
        this.Fx = void 0 !== a ? a : new g.Na(1, 0, 0);
        this.JA = void 0 !== b ? b : 0
    }

    g.ov = sc;
    sc.prototype = {
        set: function (a, b) {
            this.Fx.copy(a);
            this.JA = b;
            return this
        }, normalize: function () {
            var a = 1 / this.Fx.length();
            this.Fx.Pm(a);
            this.JA *= a;
            return this
        }, aG: function (a) {
            return this.Fx.jf(a) + this.JA
        }
    };

    function tc(a, b, c, d, e) {
        a.Fx.set(b, c, d);
        a.JA = e;
        return a
    };

    function uc(a, b, c, d, e, f) {
        this.$B = [void 0 !== a ? a : new g.ov, void 0 !== b ? b : new g.ov, void 0 !== c ? c : new g.ov, void 0 !== d ? d : new g.ov, void 0 !== e ? e : new g.ov, void 0 !== f ? f : new g.ov]
    }

    g.xS = uc;
    uc.prototype = {
        set: function (a, b, c, d, e, f) {
            var h = this.$B;
            h[0].copy(a);
            h[1].copy(b);
            h[2].copy(c);
            h[3].copy(d);
            h[4].copy(e);
            h[5].copy(f);
            return this
        }, ib: function () {
            return (new g.xS).copy(this)
        }, copy: function (a) {
            for (var b = this.$B, c = 0; 6 > c; c++) b[c].copy(a.$B[c]);
            return this
        }, bH: function () {
            var a = new g.Na, b = new g.Na, c = a.elements, d = b.elements;
            return function (e) {
                var f = this.$B, h = e.max.elements;
                e = e.min.elements;
                for (var k = 0; 6 > k; k++) {
                    var l = f[k], m = l.Fx.elements;
                    c[0] = 0 < m[0] ? e[0] : h[0];
                    d[0] = 0 < m[0] ? h[0] : e[0];
                    c[1] = 0 < m[1] ?
                        e[1] : h[1];
                    d[1] = 0 < m[1] ? h[1] : e[1];
                    c[2] = 0 < m[2] ? e[2] : h[2];
                    d[2] = 0 < m[2] ? h[2] : e[2];
                    m = l.aG(a);
                    l = l.aG(b);
                    if (0 > m && 0 > l) return !1
                }
                return !0
            }
        }()
    };
    (function (a) {
        function b(a) {
            this.elements = a || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }

        a.LS = function (a) {
            this.elements = [a.elements[0], a.elements[1], a.elements[2], a.elements[4], a.elements[5], a.elements[6], a.elements[8], a.elements[9], a.elements[10]]
        };
        b.prototype.gR = function () {
            var a = this.elements;
            a[0] = 1;
            a[4] = 0;
            a[8] = 0;
            a[12] = 0;
            a[1] = 0;
            a[5] = 1;
            a[9] = 0;
            a[13] = 0;
            a[2] = 0;
            a[6] = 0;
            a[10] = 1;
            a[14] = 0;
            a[3] = 0;
            a[7] = 0;
            a[11] = 0;
            a[15] = 1
        };
        b.prototype.set = function (a) {
            if (a.elements !== this.elements) return this.elements = a.elements.slice(0),
                this
        };
        b.prototype.toFixed = function (b) {
            for (var d = this.elements, e = 0; 16 > e; ++e) 0 !== d[e] && (d[e] = a.a.Yc(d[e], b));
            return this
        };
        b.prototype.concat = function (a) {
            var b, e, f, h, k, l, m;
            e = b = this.elements;
            f = a.elements;
            if (b === f) for (f = Array(16), a = 0; 16 > a; ++a) f[a] = b[a];
            for (a = 0; 4 > a; a++) h = e[a], k = e[a + 4], l = e[a + 8], m = e[a + 12], b[a] = h * f[0] + k * f[1] + l * f[2] + m * f[3], b[a + 4] = h * f[4] + k * f[5] + l * f[6] + m * f[7], b[a + 8] = h * f[8] + k * f[9] + l * f[10] + m * f[11], b[a + 12] = h * f[12] + k * f[13] + l * f[14] + m * f[15];
            return this
        };
        b.multiply = function (b, d) {
            var e = Array(16), f, h,
                k, l, m, n, p;
            k = h = b.elements;
            l = d.elements;
            if (h === l) for (f = 0; 16 > f; ++f) e[f] = h[f];
            for (f = 0; 4 > f; f++) h = k[f], m = k[f + 4], n = k[f + 8], p = k[f + 12], e[f] = h * l[0] + m * l[1] + n * l[2] + p * l[3], e[f + 4] = h * l[4] + m * l[5] + n * l[6] + p * l[7], e[f + 8] = h * l[8] + m * l[9] + n * l[10] + p * l[11], e[f + 12] = h * l[12] + m * l[13] + n * l[14] + p * l[15];
            return new a.Vd(e)
        };
        b.prototype.multiply = b.prototype.concat;
        b.prototype.gh = function (b) {
            var d = this.elements;
            b = b.elements;
            var e = new a.Vk, f = e.elements;
            f[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8] + b[3] * d[12];
            f[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9] + b[3] *
                d[13];
            f[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10] + b[3] * d[14];
            f[3] = b[0] * d[3] + b[1] * d[7] + b[2] * d[11] + b[3] * d[15];
            return e
        };
        b.prototype.JC = function () {
            var a, b;
            a = this.elements;
            b = a[1];
            a[1] = a[4];
            a[4] = b;
            b = a[2];
            a[2] = a[8];
            a[8] = b;
            b = a[3];
            a[3] = a[12];
            a[12] = b;
            b = a[6];
            a[6] = a[9];
            a[9] = b;
            b = a[7];
            a[7] = a[13];
            a[13] = b;
            b = a[11];
            a[11] = a[14];
            a[14] = b;
            return this
        };
        b.prototype.sqa = function (a) {
            var b, e, f;
            b = a.elements;
            a = this.elements;
            e = [];
            e[0] = b[5] * (b[10] * b[15] - b[11] * b[14]) - b[9] * (b[6] * b[15] + b[7] * b[14]) + b[13] * (b[6] * b[11] - b[7] * b[10]);
            e[4] = -b[4] *
                (b[10] * b[15] - b[11] * b[14]) + b[8] * (b[6] * b[15] - b[7] * b[14]) - b[12] * (b[6] * b[11] - b[7] * b[10]);
            e[8] = b[4] * (b[9] * b[15] - b[11] * b[13]) - b[8] * (b[5] * b[15] - b[7] * b[13]) + b[12] * (b[5] * b[11] - b[7] * b[9]);
            e[12] = -b[4] * (b[9] * b[14] - b[10] * b[13]) + b[8] * (b[5] * b[14] - b[6] * b[13]) - b[12] * (b[5] * b[10] - b[6] * b[9]);
            e[1] = -b[1] * (b[10] * b[15] - b[11] * b[14]) + b[9] * (b[2] * b[15] - b[3] * b[14]) - b[13] * (b[2] * b[11] - b[3] * b[10]);
            e[5] = b[0] * (b[10] * b[15] - b[11] * b[14]) - b[8] * (b[2] * b[15] - b[3] * b[14]) + b[12] * (b[2] * b[11] - b[3] * b[10]);
            e[9] = -b[0] * (b[9] * b[15] - b[11] * b[13]) + b[8] *
                (b[1] * b[15] - b[3] * b[13]) - b[12] * (b[1] * b[11] - b[3] * b[9]);
            e[13] = b[0] * (b[9] * b[14] - b[10] * b[13]) - b[8] * (b[1] * b[14] - b[2] * b[13]) + b[12] * (b[1] * b[10] - b[2] * b[9]);
            e[2] = b[1] * (b[6] * b[15] - b[7] * b[14]) - b[5] * (b[2] * b[15] - b[3] * b[14]) + b[13] * (b[2] * b[7] - b[3] * b[6]);
            e[6] = -b[0] * (b[6] * b[15] - b[7] * b[14]) + b[4] * (b[2] * b[15] - b[3] * b[14]) - b[12] * (b[2] * b[7] - b[3] * b[6]);
            e[10] = b[0] * (b[5] * b[15] - b[7] * b[13]) - b[4] * (b[1] * b[15] - b[3] * b[13]) + b[12] * (b[1] * b[7] - b[3] * b[5]);
            e[14] = -b[0] * (b[5] * b[14] - b[6] * b[13]) + b[4] * (b[1] * b[14] - b[2] * b[13]) - b[12] * (b[1] * b[6] -
                b[2] * b[5]);
            e[3] = -b[1] * (b[6] * b[11] - b[7] * b[10]) + b[5] * (b[2] * b[11] - b[3] * b[10]) - b[9] * (b[2] * b[7] - b[3] * b[6]);
            e[7] = b[0] * (b[6] * b[11] - b[7] * b[10]) - b[4] * (b[2] * b[11] + b[3] * b[10]) + b[8] * (b[2] * b[7] - b[3] * b[6]);
            e[11] = -b[0] * (b[5] * b[11] + b[7] * b[9]) + b[4] * (b[1] * b[11] - b[3] * b[9]) - b[8] * (b[1] * b[7] + b[3] * b[5]);
            e[15] = b[0] * (b[5] * b[10] - b[6] * b[9]) - b[4] * (b[1] * b[10] + b[2] * b[9]) + b[8] * (b[1] * b[6] - b[2] * b[5]);
            f = b[0] * e[0] + b[1] * e[4] + b[2] * e[8] + b[3] * e[12];
            if (0 === f) return this;
            f = 1 / f;
            for (b = 0; 16 > b; b++) a[b] = e[b] * f;
            return this
        };
        b.prototype.zg = function () {
            return (new b).sqa(this)
        };
        b.prototype.jR = function (a, b, e, f, h, k) {
            var l, m, n, p;
            if (a === b || e === f || h === k) throw"null frustum";
            m = 1 / (b - a);
            n = 1 / (f - e);
            p = 1 / (k - h);
            l = this.elements;
            l[0] = 2 * m;
            l[1] = 0;
            l[2] = 0;
            l[3] = 0;
            l[4] = 0;
            l[5] = 2 * n;
            l[6] = 0;
            l[7] = 0;
            l[8] = 0;
            l[9] = 0;
            l[10] = -2 * p;
            l[11] = 0;
            l[12] = -(b + a) * m;
            l[13] = -(f + e) * n;
            l[14] = -(k + h) * p;
            l[15] = 1;
            return this
        };
        b.prototype.Vna = function (a, d, e, f, h, k) {
            return this.concat((new b).jR(a, d, e, f, h, k))
        };
        b.prototype.qqa = function (a, b, e, f, h, k) {
            var l, m, n, p;
            if (a === b || f === e || h === k) throw"null frustum";
            if (0 >= h) throw"near <= 0";
            if (0 >=
                k) throw"far <= 0";
            m = 1 / (b - a);
            n = 1 / (f - e);
            p = 1 / (k - h);
            l = this.elements;
            l[0] = 2 * h * m;
            l[1] = 0;
            l[2] = 0;
            l[3] = 0;
            l[4] = 0;
            l[5] = 2 * h * n;
            l[6] = 0;
            l[7] = 0;
            l[8] = (b + a) * m;
            l[9] = (f + e) * n;
            l[10] = -(k + h) * p;
            l[11] = -1;
            l[12] = 0;
            l[13] = 0;
            l[14] = -2 * h * k * p;
            l[15] = 0;
            return this
        };
        b.prototype.gO = function (a, d, e, f, h, k) {
            return this.concat((new b).qqa(a, d, e, f, h, k))
        };
        b.prototype.a4 = function (a, b, e, f) {
            var h, k;
            if (e === f || 0 === b) throw"null frustum";
            if (0 >= e) throw"near <= 0";
            if (0 >= f) throw"far <= 0";
            a /= 2;
            k = Math.sin(a);
            if (0 === k) throw"null frustum";
            h = 1 / (f - e);
            k = Math.cos(a) /
                k;
            a = this.elements;
            a[0] = k / b;
            a[1] = 0;
            a[2] = 0;
            a[3] = 0;
            a[4] = 0;
            a[5] = k;
            a[6] = 0;
            a[7] = 0;
            a[8] = 0;
            a[9] = 0;
            a[10] = -(f + e) * h;
            a[11] = -1;
            a[12] = 0;
            a[13] = 0;
            a[14] = -2 * e * f * h;
            a[15] = 0;
            return this
        };
        b.prototype.perspective = function (a, d, e, f) {
            return this.concat((new b).a4(a, d, e, f))
        };
        b.prototype.xu = function (a, b, e) {
            var f = this.elements;
            f[0] = a;
            f[4] = 0;
            f[8] = 0;
            f[12] = 0;
            f[1] = 0;
            f[5] = b;
            f[9] = 0;
            f[13] = 0;
            f[2] = 0;
            f[6] = 0;
            f[10] = e;
            f[14] = 0;
            f[3] = 0;
            f[7] = 0;
            f[11] = 0;
            f[15] = 1;
            return this
        };
        b.prototype.scale = function (a, b, e) {
            var f = this.elements;
            f[0] *= a;
            f[4] *= b;
            f[8] *= e;
            f[1] *= a;
            f[5] *= b;
            f[9] *= e;
            f[2] *= a;
            f[6] *= b;
            f[10] *= e;
            f[3] *= a;
            f[7] *= b;
            f[11] *= e;
            return this
        };
        b.prototype.d4 = function (a, b, e) {
            var f = this.elements;
            f[12] = a;
            f[13] = b;
            f[14] = e;
            return this
        };
        b.prototype.translate = function (a, b, e) {
            var f = this.elements;
            f[12] += f[0] * a + f[4] * b + f[8] * e;
            f[13] += f[1] * a + f[5] * b + f[9] * e;
            f[14] += f[2] * a + f[6] * b + f[10] * e;
            f[15] += f[3] * a + f[7] * b + f[11] * e;
            return this
        };
        b.prototype.Zx = function (a, b, e, f) {
            var h, k, l, m, n, p, q, r;
            a = Math.PI * a / 180;
            h = this.elements;
            k = Math.sin(a);
            a = Math.cos(a);
            0 !== b && 0 === e && 0 === f ?
                (0 > b && (k = -k), h[0] = 1, h[4] = 0, h[8] = 0, h[12] = 0, h[1] = 0, h[5] = a, h[9] = -k, h[13] = 0, h[2] = 0, h[6] = k, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 !== e && 0 === f ? (0 > e && (k = -k), h[0] = a, h[4] = 0, h[8] = k, h[12] = 0, h[1] = 0, h[5] = 1, h[9] = 0, h[13] = 0, h[2] = -k, h[6] = 0, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 === e && 0 !== f ? (0 > f && (k = -k), h[0] = a, h[4] = -k, h[8] = 0, h[12] = 0, h[1] = k, h[5] = a, h[9] = 0, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = 1, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : (l = Math.sqrt(b * b + e * e + f * f), 1 !== l && (l = 1 / l, b *= l, e *= l, f *= l), l = 1 - a, m = b * e, n = e * f, p = f * b, q = b * k,
                    r = e * k, k *= f, h[0] = b * b * l + a, h[1] = m * l + k, h[2] = p * l - r, h[3] = 0, h[4] = m * l - k, h[5] = e * e * l + a, h[6] = n * l + q, h[7] = 0, h[8] = p * l + r, h[9] = n * l - q, h[10] = f * f * l + a, h[11] = 0, h[12] = 0, h[13] = 0, h[14] = 0);
            h[15] = 1;
            return this
        };
        b.prototype.rotate = function (a, d, e, f) {
            return this.concat((new b).Zx(a, d, e, f))
        };
        b.prototype.Mr = function (a) {
            return this.rotate(a, 1, 0, 0)
        };
        b.prototype.Nr = function (a) {
            return this.rotate(a, 0, 1, 0)
        };
        b.prototype.Or = function (a) {
            return this.rotate(a, 0, 0, 1)
        };
        a.Vd = b
    })(g);
    C.A.hs = C.A.xc.extend({
        D: {
            visible: !0,
            zIndex: 10,
            strokeColor: "#006600",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            radius: [1E3, 1E3],
            fillColor: "#006600",
            fillOpacity: 0.9
        }, r: function () {
            var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            this.CLASS_NAME = "AMap.Ellipse";
            g.c.xa(this, b);
            var b = g.extend({}, this.D, b), c = this.Fq(b);
            b.path = c;
            C.A.hs.Mc.r.call(this, b);
            this.set("path", c);
            this.get("center") && this.get("map") || (this.Bg = !1);
            this.on("movepoly", function (b) {
                var c =
                    a.get("map");
                b = c.Ee(c.Vb(a.get("center")).add(b.Kx));
                "3D" === c.view.type && a.set("deltaPos", [0, 0]);
                a.set("center", b)
            })
        }, Fq: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, b = [],
                c = a.center || this.get("center"), d = a.map || this.get("map");
            if (c && d) for (var c = g.a.Ha(c), e = a.radius || this.get("radius"), f = d.Vb(c), a = f.x, f = f.y, h = g.a.map(e, function (a) {
                return a / d.getResolution(c, 20)
            }), e = h[0], h = h[1], k = g.l.Y, l = (k ? 4 : 1) * Math.PI / 180, m = 0, k = k ? 89 : 359; m <= k; m++) {
                var n = m * l, n = {
                    x: a + e * Math.cos(n), y: f + h *
                    Math.sin(n)
                };
                b.push(d.Ee(n))
            }
            return b
        }, mapChanged: function () {
            g.a.bi(C.A.hs.Mc.mapChanged) && C.A.hs.Mc.mapChanged.apply(this);
            this.B = !0;
            this.setPath(this.Fq());
            this.B = !1;
            !this.Bg && this.get("map") && (this.Bg = !0, this.get("map").q("overlays"))
        }, setCenter: function (a, b) {
            g.c.add(this, "setCenter");
            (a = g.a.Ha(a)) && a instanceof g.T && (this.set("center", a), this.set("path", this.Fq()), this.Bg || (this.Bg = !0, this.get("map") && this.get("map").q("overlays")), b || (this.q("setCenter"), this.q("change", {
                type: "change",
                target: this
            })))
        },
        setRadius: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
            g.c.add(this, "setRadius");
            a && 2 === a.length && (this.set("radius", a), this.set("path", this.Fq()), b || (this.q("change", {
                type: "change",
                target: this
            }), this.q("setPath")))
        }, setOptions: function (a) {
            C.A.hs.Mc.setOptions.call(this, a);
            this.B = !0;
            a.radius && this.setRadius(a.radius, !0);
            a.center && this.setCenter(a.center, !0);
            this.B = !1
        }, getRadius: function () {
            g.c.add(this, "getRadius");
            return this.get("radius", null, !0)
        }, getCenter: function () {
            g.c.add(this,
                "getCenter");
            var a = this.get("center", null, !0);
            this.A && this.A.get("deltaPos") && this.A.MK([a], this.A.get("deltaPos"))[0];
            return a
        }
    });
    C.A.ns = C.A.xc.extend({
        D: {
            visible: !0,
            zIndex: 10,
            strokeColor: "#006600",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            fillColor: "#006600",
            fillOpacity: 0.9
        }, r: function () {
            var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            this.CLASS_NAME = "AMap.Rectangle";
            g.c.xa(this, b);
            b = g.extend({}, this.D, b);
            this.B = !0;
            var c = this.Fq(b);
            b.path = c;
            C.A.ns.Mc.r.call(this, b);
            this.setPath(c);
            this.D.bounds && this.get("map") || (this.Bg = !1);
            this.on("movepoly", function (b) {
                var c = a.get("map"),
                    f = a.get("bounds"), h = c.Ee(c.Vb(f.qc).add(b.Kx));
                b = c.Ee(c.Vb(f.cc).add(b.Kx));
                "3D" === c.view.type && a.set("deltaPos", [0, 0]);
                a.set("bounds", new g.we(h, b))
            });
            this.B = !1
        }, Fq: function () {
            var a = [],
                b = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).bounds || this.get("bounds");
            if (b) {
                b.B = !0;
                var c = b.getSouthWest(), d = b.getNorthEast();
                b.B = !1;
                g.a.Nb([new g.T(c.R, c.P, !0), new g.T(d.R, c.P, !0), new g.T(d.R, d.P, !0), new g.T(c.R, d.P, !0)], function (b) {
                    return a.push(b)
                })
            }
            return a
        }, mapChanged: function () {
            g.a.bi(C.A.ns.Mc.mapChanged) &&
            C.A.ns.Mc.mapChanged.apply(this);
            this.B = !0;
            this.setPath(this.Fq());
            this.B = !1;
            !this.Bg && this.get("map") && (this.Bg = !0, this.get("map").q("overlays"))
        }, setOptions: function (a) {
            this.B = !0;
            C.A.ns.Mc.setOptions.call(this, a);
            a.bounds && this.setBounds(a.bounds, !0);
            this.B = !1
        }, setBounds: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
            g.c.add(this, "setBounds");
            a && a instanceof g.we && (this.set("bounds", a), this.set("path", this.Fq()), this.Bg || (this.Bg = !0, this.get("map") && this.get("map").q("overlays")),
            b || (this.q("change", {type: "change", target: this}), this.q("setBounds")))
        }, getBounds: function () {
            g.c.add(this, "getBounds");
            return this.get("bounds", null, !0)
        }
    });
    C.A.WS = C.A.ob.extend({
        D: {text: "", textAlign: "center", verticalAlign: "middle", offset: new g.G(0, 0)}, r: function (a) {
            this.CLASS_NAME = "AMap.Text";
            g.c.xa(this, a);
            C.A.WS.Mc.r.apply(this, arguments);
            this.vaa();
            this.B = !0;
            this.setText(this.get("text"));
            this.setStyle(this.get("style"));
            this.B = !1
        }, vaa: function () {
            if (!this.rA) {
                var a = document.createElement("div");
                a.className = "amap-overlay-text-container";
                this.rA = a
            }
        }, getText: function () {
            g.c.add(this, "getText");
            return this.get("text", null, !0)
        }, setText: function (a) {
            g.c.add(this,
                "setText");
            a || 0 === a || (a = "");
            g.g.wra(this.rA, "amap-overlay-text-empty", !a);
            g.c.add(this, "setText");
            this.set("text", a);
            this.rA.innerHTML = a;
            this.l3()
        }, setStyle: function (a) {
            g.c.add(this, "setStyle");
            a = a || {};
            for (var b in a) a.hasOwnProperty(b) && (this.rA.style[b] = a[b]);
            this.l3()
        }, l3: function () {
            this.B = !0;
            this.setContent(this.rA);
            this.setShadow(this.getShadow());
            this.B = !1
        }
    });
    g.BS = {
        find: function (a) {
            return g.a.find(this.xv || [], a)
        }, AG: function () {
            return this.xv || []
        }, Pc: function (a) {
            return null !== this.find(a)
        }, add: function (a) {
            var b = this, c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Br,
                d = this.xv || (this.xv = []);
            g.a.isArray(a) ? g.a.Nb(a, function (a) {
                b.add(a, c)
            }) : null === this.find(a) && (d.push(a), c(a));
            return this
        }, remove: function (a) {
            var b = this, c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Br, d = this.xv;
            if (d) if (g.a.isArray(a)) g.a.Nb(a, function (a) {
                b.remove(a,
                    c)
            }); else {
                var e = g.a.indexOf(d, a);
                -1 !== e && (c(d[e]), d.splice(e, 1))
            }
            return this
        }, clear: function () {
            this.Nb(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.Br);
            this.xv = [];
            return this
        }, Nb: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.Br,
                b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            g.a.Nb(this.xv || [], function () {
                for (var c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
                c = d[0];
                g.a.bi(c.Nb) ? c.Nb(a, b) : a.apply(b || c, d)
            });
            return this
        }, On: function (a) {
            for (var b =
                arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.Nb(function (b) {
                b && g.a.bi(b[a]) && b[a].apply(b, c)
            });
            return this
        }, h: function (a) {
            var b = arguments;
            this.Nb(function (a) {
                a.on.apply(a, b)
            });
            return this
        }, I: function (a) {
            var b = arguments;
            this.Nb(function (a) {
                a.off.apply(a, b)
            });
            return this
        }, addListener: function () {
            this.h.apply(this, arguments)
        }, rw: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Br,
                c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            this.Nb(function (d) {
                d.on.call(d,
                    event, function () {
                        b();
                        d.off(a)
                    }, c)
            })
        }, removeListener: function (a) {
            this.I(a.PN, a.TO, a.Je)
        }, N: function (a, b) {
            this.Nb(function (c) {
                c.emit(a, b)
            })
        }
    };
    C.A.Xm = C.A.Jh.extend({
        ha: [g.BS], r: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            this.CLASS_NAME = "AMap.OverlayGroup";
            g.c.xa(this);
            C.A.Xm.Mc.r.apply(this);
            this.map = null;
            this.add(a)
        }, dc: function (a) {
            g.c.add(this, "setMap");
            this.On("setMap", a);
            this.On("setMap", a);
            this.set("map", a);
            this.map = a;
            return this
        }, mapChanged: function () {
        }, uA: function (a) {
            var b = this;
            g.c.add(this, "addOverlay");
            this.add(a, function (a) {
                b.map && (a.B = !0, a.setMap(b.map), a.B = !1)
            });
            return this
        }, Sx: function (a) {
            var b =
                this;
            g.c.add(this, "removeOverlay");
            this.remove(a, function (a) {
                a.B = !0;
                a.getMap() === b.map && a.setMap(null);
                a.B = !1
            });
            return this
        }, Vc: function () {
            var a = this;
            g.c.add(this, "clearOverlays");
            this.clear(function (b) {
                b.B = !0;
                b.getMap() === a.map && b.setMap(null);
                b.B = !1
            });
            return this
        }, kx: function () {
            g.c.add(this, "hide");
            this.On("hide");
            return this
        }, show: function () {
            g.c.add(this, "show");
            this.On("show");
            return this
        }, Gb: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            g.c.add(this, "setOptions");
            this.On("setOptions", a);
            return this
        }
    });
    C.A.Xm.hd({
        find: "getOverlay",
        AG: "getOverlays",
        uA: ["addOverlay", "addOverlays"],
        Pc: "hasOverlay",
        Sx: ["removeOverlay", "removeOverlays"],
        Vc: "clearOverlays",
        Nb: "eachOverlay",
        dc: "setMap",
        Gb: "setOptions",
        show: "show",
        kx: "hide",
        h: "on",
        I: "off"
    });
    (function (a, b) {
        function c(a, b) {
            if (!a.length) return !1;
            for (var c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                if (!("*" === b || e && e.geometry && e.geometry.type === b) || e && e.properties && !e.properties._isAmap) return !1
            }
            return !0
        }

        function d(a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c].geometry.coordinates);
            return b
        }

        function e(a) {
            if (!a) return [];
            a = b.a.Ha(a);
            for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = a[d].Jl();
            return c
        }

        a.A.yS = a.A.Xm.extend({
            r: function (c) {
                this.CLASS_NAME = "AMap.GeoJSON";
                b.c.xa(this, c);
                a.A.yS.Mc.r.call(this,
                    []);
                this.B = !0;
                this.D = b.extend({
                    getMarker: function (b, c) {
                        return new a.A.ob({innerOverlay: !0, position: c})
                    }, getPolyline: function (b, c) {
                        return new a.A.Tb({path: c, innerOverlay: !0})
                    }, getPolygon: function (b, c) {
                        return new a.A.xc({path: c, innerOverlay: !0})
                    }, coordsToLatLng: function (a) {
                        return a
                    }
                }, c);
                if (!this.D.coordsToLatLngs) {
                    var d = this.D.coordsToLatLng;
                    this.D.coordsToLatLngs = function (a) {
                        for (var b = [], c = 0, e = a.length; c < e; c++) b.push(d.call(null, a[c]));
                        return b
                    }
                }
                this.importData(this.D.geoJSON);
                this.B = !1
            }, importData: function (a) {
                b.c.add(this,
                    "importData");
                if (a && (a = this.qaa(a), a.length)) {
                    this.clearOverlays();
                    this.uA(a);
                    var c = this.D.map;
                    if (c) for (var d = 0, e = a.length; d < e; d++) a[d].B = !0, a[d].setMap(c), a[d].B = !1
                }
            }, toGeoJSON: function () {
                b.c.add(this, "toGeoJSON");
                for (var a = this.AG(), c = [], d = 0, e = a.length; d < e; d++) a[d].B = !0, c[d] = a[d].toGeoJSON(), a[d].B = !1;
                return c
            }, qaa: function (a) {
                if (a) {
                    b.a.isArray(a) || (a = [a]);
                    for (var c = [], d = 0, e = a.length; d < e; d++) {
                        var m = this.raa(a[d]);
                        m && c.push(m)
                    }
                    return c
                }
            }, LT: function (a) {
                var b = "Feature" === a.type ? a.geometry : a, b = this.D.coordsToLatLng(b ?
                    b.coordinates : null), b = this.D.getMarker(a, b);
                this.zq(a, b);
                return b
            }, H8: function (c) {
                for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++) e.push(this.LT(b.extend({}, c, {
                    type: "Feature",
                    properties: {_isAmap: !0, _pointIndex: l, _parentProperities: c.properties},
                    geometry: {type: "Point", coordinates: d[l]}
                })));
                d = new a.A.Xm(e);
                this.zq(c, d);
                return d
            }, KT: function (a) {
                var b = "Feature" === a.type ? a.geometry : a, b = this.D.coordsToLatLngs(b ? b.coordinates : null),
                    b = this.D.getPolyline(a, b);
                this.zq(a,
                    b);
                return b
            }, G8: function (c) {
                for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++) e.push(this.KT(b.extend({}, c, {
                    type: "Feature",
                    properties: {_isAmap: !0, _lineStringIndex: l, _parentProperities: c.properties},
                    geometry: {type: "LineString", coordinates: d[l]}
                })));
                d = new a.A.Xm(e);
                this.zq(c, d);
                return d
            }, MT: function (a) {
                for (var b = "Feature" === a.type ? a.geometry : a, b = b ? b.coordinates : null, c = [], d = 0, e = b.length; d < e; d++) c.push(this.D.coordsToLatLngs(b[d]));
                b = this.D.getPolygon(a, c);
                this.zq(a,
                    b);
                return b
            }, I8: function (c) {
                for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++) e.push(this.MT(b.extend({}, c, {
                    type: "Feature",
                    properties: {_isAmap: !0, _polygonIndex: l, _parentProperities: c.properties},
                    geometry: {type: "Polygon", coordinates: d[l]}
                })));
                d = new a.A.Xm(e);
                this.zq(c, d);
                return d
            }, A8: function (c) {
                for (var d = ("Feature" === c.type ? c.geometry : c).geometries, e = [], l = 0, m = d.length; l < m; l++) e.push(this.UK(b.extend({}, c, {
                    type: "Feature", properties: {
                        _isAmap: !0, _geometryIndex: l,
                        _parentProperities: c.properties
                    }, geometry: d[l]
                })));
                d = new a.A.Xm(e);
                this.zq(c, d);
                return d
            }, raa: function (b) {
                if (b) switch (b.type) {
                    case "Feature":
                        return this.UK(b);
                    case "FeatureCollection":
                        for (var c = b.features, d = [], e = 0, m = c.length; e < m; e++) {
                            var n = this.UK(c[e]);
                            n && d.push(n)
                        }
                        c = new a.A.Xm(d);
                        this.zq(b, c);
                        return c;
                    default:
                        throw Error("Invalid GeoJSON object." + b.type);
                }
            }, zq: function (a, c) {
                c && a.properties && c.setExtData && (c.B = !0, c.setExtData(b.extend({}, c.getExtData() || {}, {_geoJsonProperties: a.properties})), c.B =
                    !1)
            }, UK: function (a) {
                var b = "Feature" === a.type ? a.geometry : a;
                if (!(b && b.coordinates || b)) return null;
                switch (b.type) {
                    case "Point":
                        return this.LT(a);
                    case "MultiPoint":
                        return this.H8(a);
                    case "LineString":
                        return this.KT(a);
                    case "MultiLineString":
                        return this.G8(a);
                    case "Polygon":
                        return this.MT(a);
                    case "MultiPolygon":
                        return this.I8(a);
                    case "GeometryCollection":
                        return this.A8(a);
                    default:
                        throw Error("Invalid GeoJSON geometry." + b.type);
                }
            }
        });
        a.A.Xm.wb({
            toGeoJSON: function (a) {
                b.c.add(this, "toGeoJSON");
                a = a || this.AG();
                for (var e = [], k = 0, l = a.length; k < l; k++) a[k].toGeoJSON && (a[k].B = !0, e[k] = a[k].toGeoJSON(), a[k].B = !1);
                this.B = !0;
                a = this.getExtData() || {};
                this.B = !1;
                if (c(e, "Point")) e = {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {type: "MultiPoint", coordinates: d(e)}
                }; else if (c(e, "LineString")) e = {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {type: "MultiLineString", coordinates: d(e)}
                }; else if (c(e, "Polygon")) e = {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {type: "MultiPolygon", coordinates: d(e)}
                };
                else if (c(e, "*")) {
                    a = a._geoJsonProperties || {};
                    for (var k = [], l = 0, m = e.length; l < m; l++) k.push(e[l].geometry);
                    e = {type: "Feature", properties: a, geometry: {type: "GeometryCollection", geometries: k}}
                } else e = {type: "FeatureCollection", properties: a._geoJsonProperties || {}, features: e};
                return e
            }
        });
        a.A.ob.wb({
            toGeoJSON: function () {
                b.c.add(this, "toGeoJSON");
                this.B = !0;
                var a = this.getExtData() || {}, c = this.getPosition().Jl();
                this.B = !1;
                return {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {type: "Point", coordinates: c}
                }
            }
        });
        a.A.Tb.wb({
            toGeoJSON: function () {
                b.c.add(this, "toGeoJSON");
                this.B = !0;
                var a = this.getExtData() || {}, c = this.getPath();
                this.B = !1;
                return {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {type: "LineString", coordinates: e(c)}
                }
            }
        });
        a.A.xc.wb({
            toGeoJSON: function () {
                b.c.add(this, "toGeoJSON");
                this.B = !0;
                var a = this.getExtData() || {}, c = this.getPath();
                this.B = !1;
                a = a._geoJsonProperties || {};
                if (c) {
                    c = b.a.Ha(c);
                    b.a.isArray(c[0]) || (c = [c]);
                    for (var d = [], l = 0, m = c.length; l < m; l++) d[l] = e(c[l]);
                    c = d
                } else c = [];
                return {
                    type: "Feature",
                    properties: a, geometry: {type: "Polygon", coordinates: c}
                }
            }
        })
    })(C, g);
    C.o.kJ = C.o.Ec.extend({
        ha: [g.BS], r: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            this.CLASS_NAME = "AMap.LayerGroup";
            g.c.xa(this, b);
            C.o.kJ.Mc.r.call(this, b);
            this.map = null;
            this.add(a)
        }, dc: function (a) {
            g.c.add(this, "setMap");
            this.On("setMap", a);
            this.set("map", a);
            this.map = a;
            return this
        }, mapChanged: function () {
        }, zF: function (a) {
            var b = this;
            g.c.add(this, "addLayer");
            this.add(a, function (a) {
                b.map && (a.B = !0, a.setMap(b.map), a.B = !1)
            });
            return this
        }, Nj: function (a) {
            var b = this;
            g.c.add(this,
                "removeLayer");
            this.remove(a, function (a) {
                a.B = !0;
                a.getMap() === b.map && a.setMap(null);
                a.B = !1
            });
            return this
        }, pha: function () {
            var a = this;
            g.c.add(this, "clearLayers");
            this.clear(function (b) {
                b.B = !0;
                b.getMap() === a.map && b.setMap(null);
                b.B = !1
            });
            return this
        }, kx: function () {
            g.c.add(this, "hide");
            this.On("hide");
            return this
        }, show: function () {
            g.c.add(this, "show");
            this.On("show");
            return this
        }, reload: function () {
            this.On("reload");
            return this
        }, Gb: function () {
            var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] :
                {};
            g.c.add(this, "setOptions");
            var c = g.a.keys(b);
            g.a.Nb(c, function (c) {
                a.On("set", c, b[c])
            });
            return this
        }
    });
    C.o.kJ.hd({
        find: "getLayer",
        AG: "getLayers",
        zF: ["addLayer", "addLayers"],
        Pc: "hasLayer",
        Nj: ["removeLayer", "removeLayers"],
        pha: "clearLayers",
        Nb: "eachLayer",
        dc: "setMap",
        Gb: "setOptions",
        show: "show",
        kx: "hide",
        reload: "reload",
        h: "on",
        I: "off"
    });
    g.Q6 = C.Hb.extend({
        r: function (a, b) {
            b && (b.center = b.position, b.zoom = 11);
            arguments.callee.ma.apply(this, arguments);
            window.console && window.console.log && window.console.log("\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002")
        }
    });
    g.R6 = C.A.ob.extend({
        r: function (a) {
            arguments.callee.ma.apply(this, arguments)
        }
    });
    g.sd = {
        Xq: function (a, b) {
            for (var c = Infinity, d = 0, e = 1, f = b.length; e < f; d = e, e += 1) c = Math.min(c, g.sd.Oqa(a, [b[d], b[e]]));
            return Math.sqrt(c)
        }, Oqa: function (a, b) {
            return this.yI(a, this.vZ(a, b))
        }, yI: function (a, b) {
            var c = a[0] - b[0], d = a[1] - b[1];
            return c * c + d * d
        }, Rya: function (a, b, c, d) {
            d = d || 1E-6;
            if (c[0] === b[0]) {
                var e = Math.min(b[1], c[1]);
                b = Math.max(b[1], c[1]);
                return Math.abs(a[0] - c[0]) < d && a[1] >= e && a[1] <= b
            }
            var e = Math.min(b[0], c[0]), f = Math.max(b[0], c[0]);
            return Math.abs((c[1] - b[1]) / (c[0] - b[0]) * (a[0] - b[0]) + b[1] - a[1]) < d &&
                a[0] >= e && a[0] <= f
        }, vZ: function (a, b) {
            var c = a[0], d = a[1], e = b[0], f = b[1], h = e[0], e = e[1], k = f[0], f = f[1], l = k - h, m = f - e,
                c = 0 === l && 0 === m ? 0 : (l * (c - h) + m * (d - e)) / (l * l + m * m || 0);
            0 >= c || (1 <= c ? (h = k, e = f) : (h += c * l, e += c * m));
            return [h, e]
        }, mp: function (a) {
            for (var b = a.length, c = 0, d = a[b - 1], e = d[0], d = d[1], f, h, k = 0; k < b; k += 1) h = a[k], f = h[0], h = h[1], c += (f - e) * (h + d), e = f, d = h;
            return 0 < c
        }, Jd: function (a, b, c) {
            var d = a[0];
            a = a[1];
            var e = !1, f, h, k, l, m = b.length, n = 0;
            for (l = m - 1; n < m; l = n, n += 1) {
                var p = !1;
                f = b[n][0];
                h = b[n][1];
                k = b[l][0];
                l = b[l][1];
                if (f === d && h === a || k ===
                    d && l === a) return c ? !0 : !1;
                if (h < a === l >= a) {
                    f = (k - f) * (a - h) / (l - h) + f;
                    if (d === f) return c ? !0 : !1;
                    p = d < f
                }
                p && (e = !e)
            }
            return e
        }, U2: function (a, b) {
            function c(a, b, c, d) {
                var e = [a[0] - b[0], a[1] - b[1]], f = [c[0] - d[0], c[1] - d[1]];
                a = a[0] * b[1] - a[1] * b[0];
                c = c[0] * d[1] - c[1] * d[0];
                d = 1 / (e[0] * f[1] - e[1] * f[0]);
                return [(a * f[0] - c * e[0]) * d, (a * f[1] - c * e[1]) * d]
            }

            function d(a, b, c) {
                return (c[0] - b[0]) * (a[1] - b[1]) > (c[1] - b[1]) * (a[0] - b[0])
            }

            var e, f, h, k, l = a;
            e = b[b.length - 2];
            for (var m = 0, n = b.length - 1; m < n; m++) {
                f = b[m];
                var p = l, l = [];
                h = p[p.length - 1];
                for (var q = 0, r =
                    p.length; q < r; q++) k = p[q], d(k, e, f) ? (d(h, e, f) || l.push(c(e, f, h, k)), l.push(k)) : d(h, e, f) && l.push(c(e, f, h, k)), h = k;
                e = f
            }
            if (3 > l.length) return [];
            l.push(l[0]);
            return l
        }
    };
    (function (a) {
        function b(b, c) {
            var d;
            a:{
                switch (b) {
                    case "EPSG3395":
                        d = a.Eh.tS;
                        break a;
                    case "EPSG4326":
                        d = a.Eh.uS;
                        break a
                }
                d = a.Eh.eJ
            }
            return {
                project: function (b) {
                    a.a.isArray(b) && (b = new a.T(b[0], b[1]));
                    return d.EB(b, c).Jl()
                }, unproject: function (b) {
                    a.a.isArray(b) && (b = new a.G(b[0], b[1]));
                    return d.cC(b, c).Jl()
                }, normalizePoint: function (b) {
                    return a.a.Ha(b)
                }, distance: function (b, c) {
                    c = this.normalizePoint(c);
                    if (a.a.isArray(c)) return this.distanceToLine(b, c);
                    b = this.normalizePoint(b);
                    var d = a.Tl.st, e = Math.cos, f = b.P * d, k =
                        c.P * d, h = 2 * a.Tl.KN, d = c.R * d - b.R * d,
                        e = (1 - e(k - f) + (1 - e(d)) * e(f) * e(k)) / 2;
                    return h * Math.asin(Math.sqrt(e))
                }, ringArea: function (b) {
                    b = this.normalizeLine(b);
                    var c = a.Tl.KN * a.Tl.st, d = 0, e = b.length;
                    if (3 > e) return 0;
                    for (var f = 0; f < e - 1; f += 1) var k = b[f], h = b[f + 1], u = k.R * c * Math.cos(k.P * a.Tl.st), k = k.P * c, v = h.R * c * Math.cos(h.P * a.Tl.st), d = d + (u * h.P * c - v * k);
                    f = b[f];
                    b = b[0];
                    e = f.R * c * Math.cos(f.P * a.Tl.st);
                    f = f.P * c;
                    h = b.R * c * Math.cos(b.P * a.Tl.st);
                    d += e * b.P * c - h * f;
                    return 0.5 * Math.abs(d)
                }, sphericalCalotteArea: function (b) {
                    var c = a.Tl.KN;
                    b = c - c *
                        Math.cos(b / c);
                    return 2 * Math.PI * c * b
                }
            }
        }

        function c() {
            return {
                normalizePoint: function (a) {
                    return a && a.x && a.y ? [a.x, a.y] : a
                }, distance: function (a, b) {
                    var c = a[0] - b[0], d = a[1] - b[1];
                    return Math.sqrt(c * c + d * d)
                }, project: function (a) {
                    return a
                }, unproject: function (a) {
                    return a
                }, ringArea: function (a) {
                    for (var b = [0, 0], c = [0, 0], d = 0, e = a[0], n = a.length, p = 2; p < n; p++) {
                        var q = a[p - 1], r = a[p];
                        b[0] = e[0] - r[0];
                        b[1] = e[1] - r[1];
                        c[0] = e[0] - q[0];
                        c[1] = e[1] - q[1];
                        d += b[0] * c[1] - b[1] * c[0]
                    }
                    return d / 2
                }
            }
        }

        function d(a) {
            for (var b = 0, c = a.length, d = 0; d < c - 1; d++) var e =
                a[d], n = a[d + 1], b = b + (n[0] - e[0]) * (n[1] + e[1]);
            if (a[c - 1][0] !== a[0][0] || a[c - 1][1] !== a[0][1]) e = a[c - 1], n = a[0], b += (n[0] - e[0]) * (n[1] + e[1]);
            return 0 >= b
        }

        function e(b) {
            this.CLASS_NAME = "AMap.GeometryUtil";
            this.Lb = a.extend({onSegmentTolerance: 5, crs: "EPSG3857", maxZoom: 20}, b);
            this.setCrs(this.Lb.crs)
        }

        a.extend(e.prototype, {
            clone: function (b) {
                return new e(a.extend({}, this.Lb, b))
            }, isPoint: function (b) {
                return b && (b instanceof a.T || a.a.isArray(b) && !isNaN(b[0]))
            }, normalizePoint: function (a) {
                return a
            }, normalizeLine: function (a) {
                for (var b =
                    [], c = 0, d = a.length; c < d; c++) b.push(this.normalizePoint(a[c]));
                return b
            }, normalizeMultiLines: function (b) {
                a.a.isArray(b) && this.isPoint(b[0]) && (b = [b]);
                for (var c = [], d = 0, e = b.length; d < e; d++) c.push(this.normalizeLine(b[d]));
                return c
            }, setCrs: function (d) {
                a.extend(this, d && d.project && d.unproject ? d : "plane" === d ? c() : b(d, this.Lb.maxZoom))
            }, distance: function () {
                throw Error("distance Not implemented!");
            }, Uv: function (a, b) {
                a = this.normalizeLine(a);
                this.isPoint(a[0]) || (a = a[0]);
                for (var c = [], d = 0, e = a.length; d < e; d++) c.push(this.project(a[d]));
                !0 === b ? c = this.makesureClockwise(c) : !1 === b && (c = this.makesureClockwise(c), c.reverse());
                return c
            }, lea: function (a) {
                for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.unproject(a[c]));
                return b
            }, closestOnSegment: function (b, c, d) {
                b = a.sd.vZ(this.project(b), this.Uv([c, d]));
                return this.unproject(b)
            }, closestOnLine: function (a, b) {
                b = this.normalizeLine(b);
                for (var c = Infinity, d, e = 0, n = b.length; e < n - 1; e++) {
                    var p = this.closestOnSegment(a, b[e], b[e + 1]), q = this.distance(a, p);
                    q < c && (c = q, d = p)
                }
                return d
            }, distanceToSegment: function (a,
                                            b, c) {
                return this.distanceToLine(a, [b, c])
            }, distanceToLine: function (a, b) {
                b = this.normalizeLine(b);
                this.isPoint(b[0]) || (b = b[0]);
                for (var c = Infinity, d = 0, e = b.length; d < e - 1; d++) var n = this.closestOnSegment(a, b[d], b[d + 1]), c = Math.min(c, this.distance(a, n));
                return c
            }, distanceToPolygon: function (a, b) {
                return this.isPointInRing(a, b) ? 0 : this.distanceToLine(a, b)
            }, isPointOnSegment: function (a, b, c, d) {
                if (!d && 0 !== d || 0 > d) d = this.Lb.onSegmentTolerance;
                return this.distanceToSegment(a, b, c) <= d
            }, isPointOnLine: function (a, b, c) {
                b = this.normalizeLine(b);
                for (var d = 0, e = b.length; d < e - 1; d++) if (this.isPointOnSegment(a, b[d], b[d + 1], c)) return !0;
                return !1
            }, isPointOnRing: function (a, b, c) {
                b = this.normalizeLine(b);
                for (var d = 0, e = b.length; d < e; d++) if (this.isPointOnSegment(a, b[d], b[d === e - 1 ? 0 : d + 1], c)) return !0;
                return !1
            }, isPointOnPolygon: function (a, b, c) {
                b = this.normalizeMultiLines(b);
                for (var d = 0, e = b.length; d < e; d++) if (this.isPointOnRing(a, b[d], c)) return !0;
                return !1
            }, makesureClockwise: function (a) {
                d(a) || (a = [].concat(a), a.reverse());
                return a
            }, makesureAntiClockwise: function (a) {
                d(a) &&
                (a = [].concat(a), a.reverse());
                return a
            }, isPointInRing: function (b, c) {
                c = this.normalizeLine(c);
                var d = this.Uv(c, !0);
                return a.sd.Jd(this.project(b), d, !1)
            }, isRingInRing: function (a, b) {
                for (var c = 0, d = a.length; c < d; c++) if (!this.isPointInRing(a[c], b)) return !1;
                return !0
            }, isPointInPolygon: function (a, b) {
                b = this.normalizeMultiLines(b);
                for (var c, d = 0, e = b.length; d < e && (c = this.isPointInRing(a, b[d]), 0 < d && (c = !c), c); d += 1) ;
                return c
            }, doesSegmentsIntersect: function (a, b, c, d) {
                var e = this.Uv([a, b, c, d]);
                a = e[0];
                b = e[1];
                c = e[2];
                d = e[3];
                var e = !1, n = (d[0] - c[0]) * (a[1] - c[1]) - (d[1] - c[1]) * (a[0] - c[0]),
                    p = (b[0] - a[0]) * (a[1] - c[1]) - (b[1] - a[1]) * (a[0] - c[0]);
                a = (d[1] - c[1]) * (b[0] - a[0]) - (d[0] - c[0]) * (b[1] - a[1]);
                0 !== a && (b = n / a, p /= a, 0 <= b && 1 >= b && 0 <= p && 1 >= p && (e = !0));
                return e
            }, doesSegmentLineIntersect: function (a, b, c) {
                c = this.normalizeLine(c);
                for (var d = 0, e = c.length; d < e - 1; d++) if (this.doesSegmentsIntersect(a, b, c[d], c[d + 1])) return !0;
                return !1
            }, doesSegmentRingIntersect: function (a, b, c) {
                c = this.normalizeLine(c);
                for (var d = 0, e = c.length; d < e; d++) if (this.doesSegmentsIntersect(a,
                    b, c[d], c[d === e - 1 ? 0 : d + 1])) return !0;
                return !1
            }, doesSegmentPolygonIntersect: function (a, b, c) {
                c = this.normalizeMultiLines(c);
                for (var d = 0, e = c.length; d < e; d++) if (this.doesSegmentRingIntersect(a, b, c[d])) return !0;
                return !1
            }, doesLineLineIntersect: function (a, b) {
                a = this.normalizeLine(a);
                for (var c = 0, d = a.length; c < d - 1; c++) if (this.doesSegmentLineIntersect(a[c], a[c + 1], b)) return !0;
                return !1
            }, doesLineRingIntersect: function (a, b) {
                a = this.normalizeLine(a);
                for (var c = 0, d = a.length; c < d - 1; c++) if (this.doesSegmentRingIntersect(a[c],
                    a[c + 1], b)) return !0;
                return !1
            }, doesPolygonPolygonIntersect: function (a, b) {
                return this.doesRingRingIntersect(b, a) || this.isRingInRing(a, b) || this.isRingInRing(b, a) ? !0 : !1
            }, doesRingRingIntersect: function (a, b) {
                a = this.normalizeLine(a);
                for (var c = 0, d = a.length; c < d; c++) if (this.doesSegmentRingIntersect(a[c], a[c === d - 1 ? 0 : c + 1], b)) return !0;
                return !1
            }, GM: function (a, b) {
                for (var c = 0, d = 0; d < a.length - 1; d += 1) {
                    var e = this.distance(a[d], a[d + 1]);
                    if (e + c < b) c += e; else return c = (b - c) / e, [a[d][0] + c * (a[d + 1][0] - a[d][0]), a[d][1] + c * (a[d + 1][1] -
                        a[d][1]), d]
                }
                return null
            }, ZT: function (a, b) {
                function c() {
                    var a = [e[0] - n[0], e[1] - n[1]], b = [p[0] - q[0], p[1] - q[1]], d = e[0] * n[1] - e[1] * n[0],
                        f = p[0] * q[1] - p[1] * q[0], k = 1 / (a[0] * b[1] - a[1] * b[0]);
                    return [(d * b[0] - f * a[0]) * k, (d * b[1] - f * a[1]) * k]
                }

                function d(a) {
                    return (n[0] - e[0]) * (a[1] - e[1]) > (n[1] - e[1]) * (a[0] - e[0])
                }

                a = this.makesureAntiClockwise(a);
                b = this.makesureClockwise(b);
                var e, n, p, q, r = a;
                e = b[b.length - 1];
                for (var s = 0, u = b.length; s < u; s++) {
                    n = b[s];
                    var v = r, r = [];
                    p = v[v.length - 1];
                    for (var x = 0, t = v.length; x < t; x++) q = v[x], d(q) ? (d(p) || r.push(c()),
                        r.push(q)) : d(p) && r.push(c()), p = q;
                    e = n
                }
                return r
            }, ringRingClip: function (a, b) {
                a = this.Uv(a);
                b = this.Uv(b);
                var c = this.ZT(a, b);
                0 == c.length && (c = this.ZT(b, a));
                return this.lea(c)
            }, ringArea: function () {
                throw Error("distance Not implemented!");
            }, distanceOfLine: function (a) {
                a = this.normalizeLine(a);
                for (var b = 0, c = 0, d = a.length; c < d - 1; c++) b += this.distance(a[c], a[c + 1]);
                return b
            }, isClockwise: function (a) {
                a = this.Uv(a);
                return d(a)
            }
        });
        a.eq = new e;
        a.lj = new e;
        a.lj.setCrs("plane")
    })(g);
    g.AS = function () {
        var a = {};
        (function () {
            function b(a) {
                for (var b = 0, e = a.length, f = 0; f < e - 1; f++) var h = a[f], k = a[f + 1], b = b + (k[0] - h[0]) * (k[1] + h[1]);
                if (a[e - 1][0] !== a[0][0] || a[e - 1][1] !== a[0][1]) h = a[e - 1], k = a[0], b += (k[0] - h[0]) * (k[1] + h[1]);
                return 0 >= b
            }

            a.Fma = function (a) {
                b(a) && (a = [].concat(a), a.reverse());
                return a
            };
            a.rP = b
        })();
        (function () {
            function b(a) {
                var b = a.length;
                2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
            }

            function c(a, b) {
                for (var c = 0; c < b.length; c++) a.push(b[c][0]), a.push(b[c][1])
            }

            a.Tj = function (a, e) {
                var f =
                    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                e = e || [];
                var h = [], k = [];
                b(a);
                c(h, a);
                var l = a.length;
                e.forEach(b);
                for (var m = 0; m < e.length; m++) k.push(l), l += e[m].length, c(h, e[m]);
                h = this.JI(h, k);
                if (f) for (m = 0; m < h.length; m += 1) h[m] += f;
                return h
            }
        })();
        return a
    };
    (function (a) {
        a.fJ = function () {
            function a(b, c, d, e, f) {
                for (var k, h = 0, l = c, n = d - e; l < d; l += e) h += (b[n] - b[l]) * (b[l + 1] + b[n + 1]), n = l;
                if (f === 0 < h) for (f = c; f < d; f += e) k = r(f, b[f], b[f + 1], k); else for (f = d - e; f >= c; f -= e) k = r(f, b[f], b[f + 1], k);
                k && m(k, k.next) && (s(k), k = k.next);
                return k
            }

            function c(a, b) {
                if (!a) return a;
                b || (b = a);
                var c = a, d;
                do if (d = !1, c.t4 || !m(c, c.next) && 0 !== l(c.Fa, c, c.next)) c = c.next; else {
                    s(c);
                    c = b = c.Fa;
                    if (c === c.next) break;
                    d = !0
                } while (d || c !== b);
                return b
            }

            function d(a, b, e, f, r, u, D) {
                if (a) {
                    if (!D && u) {
                        var F = a, B = F;
                        do null === B.z &&
                        (B.z = h(B.x, B.y, f, r, u)), B.co = B.Fa, B = B.Fk = B.next; while (B !== F);
                        B.co.Fk = null;
                        B.co = null;
                        var F = B, A, H, G, I, K, N, M = 1;
                        do {
                            B = F;
                            G = F = null;
                            for (I = 0; B;) {
                                I++;
                                H = B;
                                for (A = K = 0; A < M && (K++, H = H.Fk, H); A++) ;
                                for (N = M; 0 < K || 0 < N && H;) 0 !== K && (0 === N || !H || B.z <= H.z) ? (A = B, B = B.Fk, K--) : (A = H, H = H.Fk, N--), G ? G.Fk = A : F = A, A.co = G, G = A;
                                B = H
                            }
                            G.Fk = null;
                            M *= 2
                        } while (1 < I)
                    }
                    for (F = a; a.Fa !== a.next;) {
                        B = a.Fa;
                        H = a.next;
                        if (u) a:if (G = a.Fa, I = a.next, 0 <= l(G, a, I)) G = !1; else {
                            K = h(G.x < a.x ? G.x < I.x ? G.x : I.x : a.x < I.x ? a.x : I.x, G.y < a.y ? G.y < I.y ? G.y : I.y : a.y < I.y ? a.y : I.y, f, r, u);
                            M = h(G.x >
                            a.x ? G.x > I.x ? G.x : I.x : a.x > I.x ? a.x : I.x, G.y > a.y ? G.y > I.y ? G.y : I.y : a.y > I.y ? a.y : I.y, f, r, u);
                            for (A = a.Fk; A && A.z <= M;) {
                                if (A !== a.Fa && A !== a.next && k(G.x, G.y, a.x, a.y, I.x, I.y, A.x, A.y) && 0 <= l(A.Fa, A, A.next)) {
                                    G = !1;
                                    break a
                                }
                                A = A.Fk
                            }
                            for (A = a.co; A && A.z >= K;) {
                                if (A !== a.Fa && A !== a.next && k(G.x, G.y, a.x, a.y, I.x, I.y, A.x, A.y) && 0 <= l(A.Fa, A, A.next)) {
                                    G = !1;
                                    break a
                                }
                                A = A.co
                            }
                            G = !0
                        } else a:if (G = a.Fa, I = a.next, 0 <= l(G, a, I)) G = !1; else {
                            for (K = a.next.next; K !== a.Fa;) {
                                if (k(G.x, G.y, a.x, a.y, I.x, I.y, K.x, K.y) && 0 <= l(K.Fa, K, K.next)) {
                                    G = !1;
                                    break a
                                }
                                K = K.next
                            }
                            G = !0
                        }
                        if (G) b.push(B.ce /
                            e), b.push(a.ce / e), b.push(H.ce / e), s(a), F = a = H.next; else if (a = H, a === F) {
                            if (D) if (1 === D) {
                                D = b;
                                F = e;
                                B = a;
                                do H = B.Fa, G = B.next.next, !m(H, G) && n(H, B, B.next, G) && p(H, G) && p(G, H) && (D.push(H.ce / F), D.push(B.ce / F), D.push(G.ce / F), s(B), s(B.next), B = a = G), B = B.next; while (B !== a);
                                a = B;
                                d(a, b, e, f, r, u, 2)
                            } else {
                                if (2 === D) a:{
                                    D = a;
                                    do {
                                        for (F = D.next.next; F !== D.Fa;) {
                                            if (B = D.ce !== F.ce) if (B = void 0, B = D.next.ce !== F.ce) if (B = void 0, B = D.Fa.ce !== F.ce) {
                                                B = B = void 0;
                                                b:{
                                                    B = D;
                                                    do {
                                                        if (B.ce !== D.ce && B.next.ce !== D.ce && B.ce !== F.ce && B.next.ce !== F.ce && n(B, B.next, D,
                                                            F)) {
                                                            B = !0;
                                                            break b
                                                        }
                                                        B = B.next
                                                    } while (B !== D);
                                                    B = !1
                                                }
                                                if (B = !B) if (B = void 0, B = p(D, F)) if (B = void 0, B = p(F, D)) {
                                                    B = D;
                                                    H = !1;
                                                    G = (D.x + F.x) / 2;
                                                    I = (D.y + F.y) / 2;
                                                    do B.y > I !== B.next.y > I && B.next.y !== B.y && G < (B.next.x - B.x) * (I - B.y) / (B.next.y - B.y) + B.x && (H = !H), B = B.next; while (B !== D);
                                                    B = H
                                                }
                                            }
                                            if (B) {
                                                a = q(D, F);
                                                D = c(D, D.next);
                                                a = c(a, a.next);
                                                d(D, b, e, f, r, u);
                                                d(a, b, e, f, r, u);
                                                break a
                                            }
                                            F = F.next
                                        }
                                        D = D.next
                                    } while (D !== a)
                                }
                            } else d(c(a), b, e, f, r, u, 1);
                            break
                        }
                    }
                }
            }

            function e(a, b) {
                return a.x - b.x
            }

            function f(a, b) {
                var c = b, d = a.x, e = a.y, f = -Infinity, h;
                do {
                    if (e <= c.y && e >= c.next.y &&
                        c.next.y !== c.y) {
                        var l = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y);
                        if (l <= d && l > f) {
                            f = l;
                            if (l === d) {
                                if (e === c.y) return c;
                                if (e === c.next.y) return c.next
                            }
                            h = c.x < c.next.x ? c : c.next
                        }
                    }
                    c = c.next
                } while (c !== b);
                if (!h) return null;
                if (d === f) return h.Fa;
                for (var l = h, m = h.x, n = h.y, r = Infinity, s, c = h.next; c !== l;) d >= c.x && c.x >= m && d !== c.x && k(e < n ? d : f, e, m, n, e < n ? f : d, e, c.x, c.y) && (s = Math.abs(e - c.y) / (d - c.x), (s < r || s === r && c.x > h.x) && p(c, a) && (h = c, r = s)), c = c.next;
                return h
            }

            function h(a, b, c, d, e) {
                a = 32767 * (a - c) * e;
                b = 32767 * (b - d) * e;
                a = (a | a << 8) & 16711935;
                a = (a | a << 4) & 252645135;
                a = (a | a << 2) & 858993459;
                b = (b | b << 8) & 16711935;
                b = (b | b << 4) & 252645135;
                b = (b | b << 2) & 858993459;
                return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1
            }

            function k(a, b, c, d, e, f, k, h) {
                return 0 <= (e - k) * (b - h) - (a - k) * (f - h) && 0 <= (a - k) * (d - h) - (c - k) * (b - h) && 0 <= (c - k) * (f - h) - (e - k) * (d - h)
            }

            function l(a, b, c) {
                return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
            }

            function m(a, b) {
                return a.x === b.x && a.y === b.y
            }

            function n(a, b, c, d) {
                return m(a, b) && m(c, d) || m(a, d) && m(c, b) ? !0 : 0 < l(a, b, c) !== 0 < l(a, b, d) && 0 < l(c, d, a) !== 0 < l(c, d, b)
            }

            function p(a,
                       b) {
                return 0 > l(a.Fa, a, a.next) ? 0 <= l(a, b, a.next) && 0 <= l(a, a.Fa, b) : 0 > l(a, b, a.Fa) || 0 > l(a, a.next, b)
            }

            function q(a, b) {
                var c = new u(a.ce, a.x, a.y), d = new u(b.ce, b.x, b.y), e = a.next, f = b.Fa;
                a.next = b;
                b.Fa = a;
                c.next = e;
                e.Fa = c;
                d.next = c;
                c.Fa = d;
                f.next = d;
                d.Fa = f;
                return d
            }

            function r(a, b, c, d) {
                a = new u(a, b, c);
                d ? (a.next = d.next, a.Fa = d, d.next.Fa = a, d.next = a) : (a.Fa = a, a.next = a);
                return a
            }

            function s(a) {
                a.next.Fa = a.Fa;
                a.Fa.next = a.next;
                a.co && (a.co.Fk = a.Fk);
                a.Fk && (a.Fk.co = a.co)
            }

            function u(a, b, c) {
                this.ce = a;
                this.x = b;
                this.y = c;
                this.Fk = this.co =
                    this.z = this.next = this.Fa = null;
                this.t4 = !1
            }

            return {
                JI: function (k, h, l) {
                    l = l || 2;
                    var m = h && h.length, n = m ? h[0] * l : k.length, p = a(k, 0, n, l, !0), r = [];
                    if (!p) return r;
                    var s, u, A, H;
                    if (m) {
                        var G = l, m = [], I, K, N;
                        H = 0;
                        for (I = h.length; H < I; H++) {
                            K = h[H] * G;
                            N = H < I - 1 ? h[H + 1] * G : k.length;
                            K = a(k, K, N, G, !1);
                            K === K.next && (K.t4 = !0);
                            var M = N = K;
                            do N.x < M.x && (M = N), N = N.next; while (N !== K);
                            m.push(M)
                        }
                        m.sort(e);
                        for (H = 0; H < m.length; H++) {
                            h = m[H];
                            G = p;
                            if (G = f(h, G)) h = q(G, h), c(h, h.next);
                            p = c(p, p.next)
                        }
                    }
                    if (k.length > 80 * l) {
                        s = A = k[0];
                        u = m = k[1];
                        for (G = l; G < n; G += l) H = k[G], h =
                            k[G + 1], H < s && (s = H), h < u && (u = h), H > A && (A = H), h > m && (m = h);
                        A = Math.max(A - s, m - u);
                        A = 0 !== A ? 1 / A : 0
                    }
                    d(p, r, l, s, u, A);
                    return r
                }
            }
        };
        a.g6 = a.fJ()
    })(g);
    (function (a) {
        function b(a) {
            var b = a.length;
            2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
        }

        function c(a, b) {
            for (var c = 0; c < b.length; c++) a.push(b[c][0]), a.push(b[c][1])
        }

        a.Zm = {
            qg: function (a) {
                for (var b = a.length, c = 0, h = b - 1, k = 0; k < b; h = k++) c += a[h][0] * a[k][1] - a[k][0] * a[h][1];
                return 0.5 * c
            }, rP: function (b) {
                return 0 > a.Zm.qg(b)
            }, normalize: function (b) {
                var c;
                if (b) {
                    c = [];
                    for (var f = 0, h = b.length; f < h; f += 1) c[f] = b[f] instanceof Array ? this.normalize(b[f]) : b[f] instanceof a.T ? [b[f].R, b[f].P] : b[f] instanceof a.G ? [b[f].x, b[f].y] :
                        b[f]
                }
                return c
            }, Tj: function (d, e) {
                e = e || [];
                var f = [], h = [];
                b(d);
                c(f, d);
                var k = d.length;
                e.forEach(b);
                for (var l = 0; l < e.length; l++) h.push(k), k += e[l].length, c(f, e[l]);
                return a.g6.JI(f, h)
            }
        }
    })(g);
    g.WF = function (a, b, c) {
        g.c.add({CLASS_NAME: "convertFrom"}, b);
        var d = g.w.Od + "/v3/assistant/coordinate/convert";
        a = g.a.Ha(a);
        var e = [];
        if (a instanceof Array) {
            for (var f = 0, h = a.length; f < h; f += 1) e.push(a[f] + "");
            e = e.join(";")
        } else e = a + "";
        b = ["key=" + g.w.key, "s=rsv3", "locations=" + e, "coordsys=" + (b || "gps")];
        d += 0 < b.length ? "?" + b.join("&") : "";
        d = new g.fb.sb(d, {callback: "callback"});
        d.h("complete", function (a) {
            if ("1" === a.status) {
                a = a.locations.split(";");
                for (var b = 0; b < a.length; b += 1) {
                    var d = a[b].split(",");
                    a[b] = new AMap.LngLat(d[0],
                        d[1])
                }
                c && "function" === typeof c && c("complete", {info: "ok", locations: a})
            } else c && "function" === typeof c && c("error", a.info)
        }, this);
        d.h("error", function (a) {
            c && "function" === typeof c && c("error", a.info)
        }, this)
    };
    g.fb = g.fb || {};
    g.fb.wJ = g.Z.extend({
        ha: [g.ra], r: function (a, b) {
            this.D = {callback: "cbk", type: "json", charset: "utf-8"};
            b = b || {};
            g.a.Gb(this, b);
            this.url = a;
            this.send(a, b.dd, b.Pha, b.B3, b.responseType)
        }, send: function (a) {
            var b = g.g.create("script");
            b.type = "text/javascript";
            b.charset = this.D.charset;
            var c = this;
            g.l.cf ? b.onreadystatechange = function () {
                "loaded" !== this.readyState && "complete" !== this.readyState || c.q("complete")
            } : (b.onload = function () {
                c.q("complete")
            }, b.onerror = function () {
                c.q("error", {status: 0, info: "service error", url: a})
            });
            b.src = a;
            document.getElementsByTagName("head")[0].appendChild(b)
        }
    });
    g.fb.sb = g.fb.wJ.extend({
        Zga: function () {
            if (g.a.S3) return g.a.AI.push(this), !0
        }, Opa: function () {
            this.q("error", {info: "TIME_OUT_A"})
        }, send: function (a, b, c, d) {
            function e() {
                window[f] = null;
                try {
                    window[f] = null
                } catch (a) {
                }
                h.onerror = null;
                h.parentNode && h.parentNode.removeChild(h)
            }

            if (!this.D.ww || !this.Zga()) {
                a = encodeURI(a);
                var f = this.D.fun;
                if (!f || window[f]) f = g.a.F_("jsonp_", 6) + "_";
                var h = document.createElement("script");
                h.type = "text/javascript";
                h.charset = "utf-8";
                h.async = !0;
                var k = this;
                g.l.cf || (h.onerror = function () {
                    e();
                    k.q("error", {info: "REQUEST_FAILED", url: a})
                });
                window[f] = function (a) {
                    e();
                    if (k.D.callbackFunction) k.D.callbackFunction.call(k.D.context, a); else if (3E4 === a.errcode && a.data) g.a.S3 = !0, g.pb.load("AMap.AntiCrabFrame", function () {
                        g.a.ww || (g.a.ww = new g.S5);
                        g.a.AI.push(k);
                        g.a.ww.open(k.D.dd, a.data.host, k.XB || "", k.url)
                    }); else {
                        if (a instanceof Array || "string" === typeof a) a = {data: a};
                        a.uwa = f;
                        k.q("complete", a)
                    }
                };
                b = "?";
                -1 !== a.indexOf("?") && (b = "&");
                b = a + b + this.D.callback + "=" + f;
                if (-1 !== a.indexOf(g.w.Od + "/v") || -1 !== a.indexOf("yuntuapi.amap.com/datasearch") ||
                    -1 !== a.indexOf("webapi.amap.com/")) b = b + "&platform=JS&logversion=2.0" + ("&appname=" + g.w.ct), b += "&csid=" + g.a.w5(), b += "&sdkversion=" + g.w.Bq;
                if (c = this.D.kG) {
                    var l = [], m;
                    for (m in c) c.hasOwnProperty(m) && (l.push(m + "=" + c[m]), b += "&" + m + "=" + encodeURIComponent(c[m]));
                    k.XB = l.join("&")
                }
                h.src = d ? b + "&rereq=true" : b;
                g.fb.sb.H9 = document.getElementsByTagName("body")[0] || document.getElementsByTagName("head")[0];
                g.fb.sb.H9.appendChild(h)
            }
        }
    });
    g.fb.XMLHttpRequest = g.fb.wJ.extend({
        send: function (a, b, c, d, e) {
            var f = this;
            if ((g.l.cf || g.l.B0) && window.XDomainRequest) {
                var h = this.M5 = new XDomainRequest;
                h.onerror = function (b) {
                    f.q("error", {url: a, data: b})
                };
                h.onload = function () {
                    f.q("complete", {url: a, data: h.responseText})
                };
                h.open(b || "GET", a);
                setTimeout(function () {
                    h.send(c || void 0)
                }, 0)
            } else {
                var k = this.M5 = new XMLHttpRequest;
                k.onreadystatechange = function () {
                    4 === k.readyState && 200 === k.status ? f.q("complete", {
                            url: a,
                            data: "arraybuffer" === k.responseType ? k.response : k.responseText
                        }) :
                        404 === k.status && (k.abort(), f.q("error", {url: a, data: "404"}))
                };
                k.onerror = function (b) {
                    k.abort();
                    f.q("error", {url: a, data: b})
                };
                k.open(b || "GET", a);
                "POST" === b && k.setRequestHeader("Content-Type", d || "application/x-www-form-urlencoded");
                e && (k.responseType = e);
                k.send(c || void 0)
            }
        }, abort: function () {
            this.M5.abort()
        }
    });
    for (var $ = {
        v: "1.4.13",
        Pixel: g.G,
        LngLat: g.T,
        Size: g.md,
        Bounds: g.we,
        ArrayBounds: g.no,
        PixelBounds: g.yf,
        Panorama: g.Q6,
        PanoramaMarker: g.R6,
        Map: C.Hb,
        View2D: C.BD,
        GroundImage: C.o.gJ,
        Marker: C.A.ob,
        ImageMarker: C.A.pta,
        Text: C.A.WS,
        Icon: C.A.Ih,
        MarkerShape: C.A.I6,
        Polyline: C.A.Tb,
        BezierCurve: C.A.Fy,
        Polygon: C.A.xc,
        Circle: C.A.Mg,
        CircleMarker: C.A.pS,
        Ellipse: C.A.hs,
        Rectangle: C.A.ns,
        ContextMenu: C.A.Vm,
        InfoWindow: C.A.Fe,
        Buildings: C.o.W5,
        TileLayer: C.o.lb,
        ImageLayer: C.o.Oy,
        CanvasLayer: C.o.Y5,
        VideoLayer: C.o.t7,
        VectorLayer: C.o.Tc,
        MassMarks: C.o.K6,
        CompositeLayer: C.o.c6,
        LayerGroup: C.o.kJ,
        OverlayGroup: C.A.Xm,
        GeoJSON: C.A.yS,
        CANVAS: "canvas",
        DOM: "dom",
        convertFrom: g.WF,
        HTTP: {JSONP: g.fb.sb},
        event: {CLASS_NAME: "AMap.event"}
    }, vc = "addDomListener addDomListenerOnce addListener addListenerOnce clearInstanceListeners clearListeners removeListener trigger".split(" "), wc = 0; wc < vc.length; wc += 1) $.event[vc[wc]] = function () {
        var a = g.event[vc[wc]], b = vc[wc];
        return function () {
            g.c.xa($.event);
            g.c.add($.event, b);
            return a.apply(g.event, Array.prototype.slice.call(arguments))
        }
    }();
    $.GeometryUtil = {CLASS_NAME: "AMap.GeometryUtil"};
    for (var xc = "distance ringArea isClockwise makesureClockwise makesureAntiClockwise distanceOfLine ringRingClip doesSegmentsIntersect doesSegmentLineIntersect doesSegmentRingIntersect doesSegmentPolygonIntersect doesLineLineIntersect doesLineRingIntersect doesPolygonPolygonIntersect doesRingRingIntersect isPointInRing isRingInRing isPointInPolygon isPointOnSegment isPointOnLine isPointOnRing isPointOnPolygon closestOnSegment closestOnLine distanceToSegment distanceToLine distanceToPolygon".split(" "), wc =
        0; wc < xc.length; wc += 1) $.GeometryUtil[xc[wc]] = function () {
        var a = g.eq[xc[wc]], b = xc[wc];
        return function () {
            g.c.xa($.GeometryUtil);
            g.c.add($.GeometryUtil, b);
            return a.apply(g.eq, Array.prototype.slice.call(arguments))
        }
    }();
    $.GeometryUtil.triangulateShape = function (a, b) {
        g.c.xa($.GeometryUtil);
        g.c.add($.GeometryUtil, "triangulateShape");
        a = g.Zm.normalize(a);
        b = g.Zm.normalize(b);
        return g.Zm.Tj(a, b)
    };
    $.PlaneGeometryUtil = {CLASS_NAME: "AMap.PlaneGeometryUtil"};
    for (wc = 0; wc < xc.length; wc += 1) $.PlaneGeometryUtil[xc[wc]] = function () {
        var a = g.lj[xc[wc]], b = xc[wc];
        return function () {
            g.c.xa($.PlaneGeometryUtil);
            g.c.add($.PlaneGeometryUtil, b);
            return a.apply(g.lj, Array.prototype.slice.call(arguments))
        }
    }();
    $.PlaneGeometryUtil.triangulateShape = function (a, b) {
        g.c.xa($.PlaneGeometryUtil);
        g.c.add($.PlaneGeometryUtil, "triangulateShape");
        a = g.Zm.normalize(a);
        b = g.Zm.normalize(b);
        return g.Zm.Tj(a, b)
    };
    $.plugin = $.service = C.Hb.prototype.plugin;
    $.TileLayer.Satellite = C.o.lb.SS;
    $.TileLayer.RoadNet = C.o.lb.QS;
    $.TileLayer.google = C.o.lb.jD;
    $.TileLayer.Flexible = C.o.lb.Ly;
    $.TileLayer.WMS = C.o.lb.u7;
    $.TileLayer.WMTS = C.o.lb.v7;
    $.TileLayer.Traffic = C.o.lb.YS;
    $.Panorama.Events = C.event;
    $.TileLayer.PanoramaLayer = C.o.lb.wta;
    $.UA = {ie: g.l.mr, ielt9: g.l.cf, ielt11: g.l.jla, mobile: g.l.Y, android: g.l.ll, ios: g.l.cH};
    $.Browser = {
        ua: navigator.userAgent,
        mobile: g.l.Y,
        plat: g.l.Nx,
        mac: g.l.zx,
        windows: g.l.Lsa,
        ios: g.l.cH,
        iPad: g.l.cla,
        iPhone: g.l.dla,
        android: g.l.ll,
        android23: g.l.dga,
        chrome: g.l.chrome,
        firefox: g.l.WN,
        safari: g.l.rC,
        wechat: g.l.F5,
        uc: g.l.bsa,
        qq: g.l.Soa,
        ie: g.l.mr,
        ie6: g.l.Wi,
        ie7: g.l.Rt,
        ie8: g.l.cf && !g.l.Rt && !g.l.Wi,
        ie9: g.l.B0,
        ie10: g.l.A0,
        ie11: g.l.gla,
        edge: g.l.Xia,
        ielt9: g.l.cf,
        baidu: g.l.EF,
        isLocalStorage: g.l.tr,
        isGeolocation: !!navigator.geolocation,
        mobileWebkit: g.l.Zma,
        mobileWebkit3d: g.l.U1,
        mobileOpera: !!g.l.Yma,
        retina: g.l.bd,
        touch: !!g.l.sf,
        msPointer: !!g.l.W1,
        pointer: !!g.l.rQ,
        webkit: g.l.D5,
        ie3d: g.l.hla,
        webkit3d: g.l.E5,
        gecko3d: g.l.Gja,
        opera3d: g.l.Pna,
        any3d: g.l.BF,
        isCanvas: g.l.Ak,
        isSvg: g.l.Rn,
        isVML: g.l.mr,
        isWorker: !!window.Worker,
        isWebsocket: !!window.WebSocket,
        isWebGL: function () {
            for (var a = document.createElement("canvas"), b = ["webgl", "experimental-webgl", "moz-webgl"], c = null, d = 0; d < b.length; d += 1) {
                try {
                    c = a.getContext(b[d])
                } catch (e) {
                }
                if (c) if (c.drawingBufferWidth !== a.width || c.drawingBufferHeight !== a.height) break; else return !0
            }
            return !1
        }
    };
    $.Util = {CLASS_NAME: "AMap.Util"};
    var yc = {
        colorNameToHex: g.a.RF,
        rgbHex2Rgba: g.a.F3,
        argbHex2Rgba: g.a.Dq,
        isEmpty: g.a.np,
        deleteItemFromArray: g.a.Lw,
        deleteItemFromArrayByIndex: g.a.Cn,
        indexOf: g.a.indexOf,
        format: g.a.Yc,
        isArray: g.a.isArray,
        isDOM: g.a.gH,
        includes: g.a.ha,
        requestIdleCallback: g.a.WQ,
        cancelIdleCallback: g.a.gZ,
        requestAnimFrame: g.a.Kc,
        cancelAnimFrame: g.a.Vh,
        color2RgbaArray: g.a.Ro,
        color2Rgba: g.a.Bha
    };
    for (wc in yc) yc.hasOwnProperty(wc) && "function" == typeof yc[wc] && ($.Util[wc] = function () {
        var a = wc;
        return function () {
            g.c.xa($.Util);
            g.c.add($.Util, a);
            return yc[a].apply(g.a, Array.prototype.slice.call(arguments))
        }
    }());
    $.DomUtil = {CLASS_NAME: "AMap.DomUtil"};
    var zc = {
        getViewport: g.g.NG,
        getViewportOffset: g.g.JO,
        create: g.g.create,
        setClass: g.g.kqa,
        hasClass: g.g.Fm,
        addClass: g.g.Ra,
        removeClass: g.g.$a,
        setOpacity: g.g.Kp,
        rotate: g.g.rotate,
        setCss: g.g.Ua,
        empty: g.g.kC,
        remove: g.g.remove,
        TRANSFORM: g.g.Xf,
        TRANSITION: g.g.xD
    };
    for (wc in zc) zc.hasOwnProperty(wc) && "function" == typeof zc[wc] && ($.DomUtil[wc] = function () {
        var a = wc;
        return function () {
            g.c.xa($.DomUtil);
            g.c.add($.DomUtil, a);
            return zc[a].apply(g.g, Array.prototype.slice.call(arguments))
        }
    }());
    var Ac = g.w;
    $.User = {key: Ac.key};
    window.AMap = $;
    window.AMap.BuryPoint = g.BuryPoint;
    window.AMap.Class = g.Z;
    if (!Ac.FB && "undefined" !== typeof arguments && arguments.callee) try {
        if (g.l.tr && window.localStorage) {
            var Bc = window.localStorage["_AMap_" + g.xH];
            Bc && JSON.parse(Bc).version === Ac.hj || window.localStorage.setItem("_AMap_" + g.xH, JSON.stringify({
                version: Ac.hj,
                script: "(" + arguments.callee + ")(config)"
            }));
            new g.fb.XMLHttpRequest(Ac.vb + "/maps/cookie?key=amap_ver&value=" + Ac.hj, {dd: "GET", B3: "text/plain"})
        }
    } catch (Dc) {
    }
    ;g.ij = g.Z.extend({
        r: function (a, b, c, d) {
            this.start = a;
            this.end = b;
            this.transition = c;
            this.precision = d || 0;
            this.uu = !1;
            this.update = g.a.bind(this.update, this);
            return this
        }, Rm: function (a) {
            this.Pg = this.startTime = +new Date;
            this.frames = 0;
            this.uu = !0;
            this.GY = g.a.Kc(this.update);
            this.$ca = g.a.bind(this.yp, a || this)
        }, update: function () {
            this.frames += 1;
            var a = +new Date, b = a - this.startTime,
                b = this.transition ? this.transition(this.start, this.end, b, this.frames, a - this.Pg) : null;
            "number" === typeof b && Math.abs(b - this.end) < this.precision ?
                (this.stop(), b = this.end) : this.GY = g.a.Kc(this.update);
            this.Pg = a;
            this.$ca(b)
        }, stop: function (a) {
            g.a.Vh(this.GY);
            a && this.update();
            this.uu = !1
        }
    });
    g.ij.Easing = {
        Linear: {
            None: function (a) {
                return a
            }
        }, Bounce: {
            In: function (a) {
                return 1 - (a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
            }, Out: function (a) {
                return g.ij.Easing.Bounce.In(1 - a)
            }
        }, Cubic: {
            In: function (a) {
                return 1 - a * a * a
            }, Out: function (a) {
                a = 1 - a;
                return 1 - a * a * a
            }
        }
    };
    g.Hb = g.Z.extend({
        ha: [g.ra, g.Ge, g.rH], r: function (a, b) {
            this.pc = g.a.bind(this.pc, this);
            this.C = b;
            this.Oi = b.Oi;
            this.Hl = "";
            this.Og = this.og = this.qk = !1;
            this.cn = {};
            this.J = a;
            this.dba();
            this.zla();
            this.W("zooms", b, !0);
            this.W("size", b, !0);
            this.W("limitBounds", b);
            this.W("view", b);
            this.W("nolimg", b, !0);
            this.W("mapNumber", b, !0);
            this.W("lang", b, !0);
            this.W("features", b, !0);
            this.W("styleID", b, !0);
            this.W("forceBig", b, !0);
            this.W("mode", b, !0);
            this.W("showBuildingBlock", b, !0);
            this.W("mapStyle", b);
            var c = this.get("mapStyle");
            this.je = g.w.je[c] || g.w.je["default"];
            this.uF = "#a3ccff";
            this.kA = b.get("skyColor") || "#cce0ff";
            this.W("editEnable", b);
            this.Ac ? this.W("style", b, !0) : this.W("styleUrl", b);
            this.W("hightlight", b, !0);
            this.W("labelzIndex", b, !0);
            if (g.l.zI) {
                c = new C.o.lb({innerLayer: !0, zIndex: b.get("labelzIndex"), visible: !1});
                this.tc = new g.o.nj(c, this, ["point", "road"]);
                this.tc.type = "\u77e2\u91cf\u6807\u6ce8";
                var d = this.C.get("defaultLayer");
                d && c.W("rejectMapMask", d, !0);
                b.labelsLayer = this.tc.X;
                this.tc.X.h("complete", this.nq, this,
                    !0);
                this.tc.X.h("renderComplete", this.nq, this);
                this.tc.Hz = this.tc.Ag = !0
            }
            this.W("isHotspot", b, !0);
            this.W("layers", b);
            this.W("overlays", b);
            this.W("infos", b, !0);
            this.W("contextmenus", b, !0);
            this.W("controls", b);
            this.W("bounds", b);
            this.W("draw", b);
            this.Ie("zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender gridMapForeign vectorMapForeign".split(" "), b);
            this.Ie("rotateEnable pitchEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom".split(" "),
                b, !0);
            this.get("jogEnable") ? this.Tt = !0 : this.Tt = !1;
            this.uaa();
            this.Aaa();
            this.uV && this.uV();
            this.W("resizeEnable", b);
            this.C.map = this;
            c = this.get("size");
            c = c.width * c.height / 65536;
            g.l.bd && 3 < c && (this.OY = !0);
            this.U = {Ld: !1};
            this.gI()
        }, editEnableChanged: function () {
            this.Ac = this.get("editEnable")
        }, labelzIndexChanged: function () {
            this.tc && this.tc.set("zIndex", this.get("labelzIndex"))
        }, styleChanged: function () {
            this.Ek = !0
        }, mapStyleChanged: function () {
            if (this.C.ci) {
                this.Hl && (this.set("style", ""), this.qt = this.Hl = "");
                var a = this.get("mapStyle");
                this.Ek = !0;
                this.je = g.w.je[a] || g.w.je["default"];
                this.jC()
            }
        }, styleUrlChanged: function () {
            if (this.C.ci) {
                var a = this.get("styleUrl") || "";
                if (a !== this.Hl) {
                    var b = -1 !== a.indexOf("?isPublic=true"), a = a.substr(0, 46), c = a.split("amap://styles/")[1];
                    "normal" === c ? (this.Hl = "", this.set("nolimg", !!this.C.get("nolimg_param")), this.set("style", ""), this.qt = "") : (this.qy = !0, this.set("nolimg", !0), b = new g.fb.sb(32 > c.length ? g.w.vc + "://webapi.amap.com/style?name=" + c + "&key=" + g.w.key : g.w.vc + "://webapi.amap.com/v4/map/styles?styleid=" +
                        c + "&s=rsv3&key=" + g.w.key + (b ? "&ispublic=1" : ""), {callback: "callback"}), b.h("complete", function (a) {
                        a.data && a.data.content ? this.set("style", JSON.parse(a.data.content)) : this.set("style", "");
                        this.qy = !1
                    }, this), b.h("error", function () {
                        this.qy = !1
                    }, this), this.Hl = a, this.jC())
                }
            }
        }, T3: function (a) {
            this.J.style.background = a
        }, Ija: function (a) {
            var b = this.get("center");
            if (a.contains(b)) return null;
            a = g.eq.closestOnLine(b, a.DR().path);
            return new g.T(a[0], a[1])
        }, aha: function () {
            var a = this.get("limitBounds"), b = this.get("bounds");
            b.qc && b.qc.R > b.cc.R && (b.cc.R += 360);
            if (!a.contains(b)) {
                if (b instanceof g.no) return this.Ija(a, b);
                var c = this.get("center").ib();
                a.Vi() < b.Vi() ? c.R = a.Yh().R : (a.qc.R > b.qc.R && (c.R += a.qc.R - b.qc.R), a.cc.R < b.cc.R && (c.R += a.cc.R - b.cc.R));
                a.Ui() < b.Ui() ? c.P = a.Yh().P : (a.qc.P > b.qc.P && (c.P += a.qc.P - b.qc.P), a.cc.P < b.cc.P && (c.P += a.cc.P - b.cc.P));
                return c
            }
        }, $L: function () {
            var a = this.rR;
            this.C.refreshSize();
            var b = this.get("size");
            b && a && !b.cb(a) && (this.rR = b, this.zu = !0, this.set("display"), this.C3(b), this.get("resizeEnable") &&
            this.ka("resize", {qna: a, e2: b}))
        }, jX: function () {
            var a = this;
            a.$L();
            a.WL = setTimeout(function () {
                a.jX()
            }, 200)
        }, Z8: function () {
            this.WL && (clearTimeout(this.WL), this.WL = null)
        }, dba: function () {
            this.C.B = !0;
            this.rR = this.C.getSize();
            this.C.B = !1;
            if (g.l.cf || g.l.F5 && g.l.cH || g.l.Oma) this.jX(); else {
                var a = this;
                g.F.$fa(this.J, function (b) {
                    a.$L(b)
                })
            }
        }, zla: function () {
            var a = this.J;
            g.g.Ra(a, "amap-container");
            var b = {};
            b.Rc = g.g.create("div", a, "amap-maps");
            this.bl = g.g.create("div", a);
            this.bl.style.display = "none";
            b.Iq = g.g.create("div",
                b.Rc, "amap-drags");
            b.o = g.g.create("div", b.Iq, "amap-layers");
            b.A = g.g.create("div", b.Iq, "amap-overlays");
            b.controls = g.g.create("div", a, "amap-controls");
            b.bu = g.g.create("a", a, "amap-logo");
            var c = window.location.host;
            -1 === c.indexOf("amap.com") && -1 === c.indexOf("gaode.com") && (b.bu.href = g.l.Y ? "http://m.amap.com" : "http://gaode.com", b.bu.target = "_blank");
            g.g.create("img", b.bu).src = g.l.bd ? this.C.D.logoUrlRetina : this.C.D.logoUrl;
            b.um = g.g.create("div", a, "amap-copyright");
            b.um.style.display = "none";
            350 < g.g.NG(this.J).width &&
            (b.um.innerHTML = this.C.D.copyright, b.um.I1 = g.g.create("span", b.um, "amap-mcode"), this.jC());
            this.Sa = b
        }, jC: function () {
            var a = this.get("layers");
            if (a) {
                for (var b = -1, c = "", d = 0; d < a.length; d += 1) {
                    var e = a[d].get("mapNumber"), f = a[d].get("zIndex", null, !0);
                    e && f > b && a[d].get("visible") && (c = e, b = f)
                }
                this.set("mapNumber", c);
                this.C.B = !0;
                a = this.C.getMapStyle();
                this.C.B = !1;
                "GS(2018)1709" === c && a && "normal" !== a && "amap://styles/normal" !== a && (c = "", this.Sa.um.style.visibility = "hidden", this.Sa.bu.style.display = "none");
                c && this.Sa.um.I1 &&
                (this.Sa.um.I1.innerHTML = "- " + c + "\u53f7", this.Sa.um.style.visibility = "visible", this.Sa.bu.style.display = "block");
                return c
            }
        }, EU: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1;
            g.mj && (a ? g.mj.flush() : this.l_ || (this.l_ = g.a.Kc(function () {
                g.mj.flush();
                this.l_ = null
            }, this)))
        }, r3: function () {
            var a = this, b = this.C.get("rasterLayer");
            b && (this.C.set("rasterLayer", void 0), this.C.h3 = !0, this.C.Mj = this.C.La, this.kf.SG = !1, b.o && (b.o.PB = !0), g.a.WQ(function () {
                a.C && a.C.Nj(b)
            }))
        }, nq: function () {
            function a() {
                for (var a =
                    d.get("layers"), b = d.get("zoom"), c = 0; c < a.length; c += 1) {
                    var e = a[c].get("zooms");
                    if (!(a[c].Mj || a[c].K0 || !e || b > e[1] || b < e[0] || !a[c].get("visible") || a[c].o && a[c].o.ga && 0 === a[c].o.ga.length || a[c].o && a[c].o.PB || a[c].o && a[c].o.La)) return !1
                }
                a = d.C.get("features");
                return ("all" === a || g.a.ha(a, "point")) && d.tc && d.tc.get("visible") && 0 < d.tc.ga.length && !d.tc.La && !d.tc.NL ? !1 : !0
            }

            function b() {
                var a = {id: d.C.id};
                g.ze.Te.end(g.extend(a, {key: "rds"}));
                g.ze.Te.send(g.extend(a, {
                    params: {
                        rs: d.get("baseRender"), viewmode: d.C.view.type,
                        fd: 0 === d.pH ? 1 : 0, raster: d.C.Mj ? 1 : 0
                    }
                }));
                d.C && d.C.Bl && d.C.Bl.Xz && d.C.Bl.Xz();
                d.C.a3 = 1;
                d.EU();
                d.set("display");
                d.DB = !0
            }

            function c() {
                g.ze.Te.end({id: d.C.id, key: "rd"});
                g.a.Kc(function () {
                    this.q("complete")
                }, d);
                d.C.La = !0;
                d.set("display")
            }

            if (!this.wN) if (this.DB) 1 === this.ws && 13 === this.get("zoom") && (g.a.fB.stop(this.hE), g.ze.Te.send({
                id: this.C.id,
                params: {fps: this.hE.fB, type: "fps", rs: this.get("baseRender")}
            }), this.ws = 2), this.EU(); else {
                var d = this, e = this.C.get("rasterLayer"), f = a();
                e ? (e.o && e.o.La && (this.C.La || c()),
                f && (this.C.La || c(), this.r3(), b())) : f && (this.C.La || c(), b(), this.C.h3 = !0)
            }
        }, layersChanged: function () {
            this.pa = this.pa || [];
            for (var a = this.get("layers"), b = this.pa.length - 1; 0 <= b; b -= 1) this.pa[b] === this.Ad || this.pa[b] === this.Gr || this.pa[b].Hz || this.pa[b].X.Hz || -1 !== g.a.indexOf(a, this.pa[b].X) || (this.pa[b].Gg(), this.pa[b].Lk && this.pa[b].Lk.Gg(), this.pa[b].X.I("complete", this.nq, this), this.pa[b].X.I("renderComplete", this.nq, this), this.pa = g.a.Cn(this.pa, b));
            for (var c = !1, d = !0, e = this.get("labelzIndex"), b = 0; b <
            a.length; b += 1) if (!a[b].K0) if (a[b].Uh) -1 === g.a.indexOf(this.pa, a[b].o) && this.pa.push(a[b].o); else {
                var f = this.sg(a[b]);
                f && (this.pa.push(f), a[b].Uh = !0, a[b].o = f);
                a[b].h("complete", this.nq, this, !0);
                a[b].h("renderComplete", this.nq, this)
            }
            for (b = 0; b < this.pa.length; b += 1) f = this.pa[b].X, f.vp && f.get("visible") && (c = !0, !1 === f.get("detectRetina") && (d = !1), e = f.get("textIndex") || e);
            this.tc && (c || "3D" !== this.C.view.type ? this.tc.NL = !1 : (c = g.a.find(a, function (a) {
                if (C.o.js && a instanceof C.o.js && a.get("visible")) return !0
            }),
                this.tc.NL = c = !!c));
            a = g.a.indexOf(this.pa, this.tc);
            c && this.C.get("showLabel") ? (-1 === a && this.pa.push(this.tc), this.tc.ia = d && g.l.ia, this.tc.BA(this.get("mapStyle") || "normal"), this.tc.set("zIndex", e), this.tc.set("visible", !0), this.C.nB = !0, this.C.get("isHotspot") ? this.tc.Ina() : this.tc.iN()) : (this.tc && (this.tc.set("visible", !1), this.C.nB = !1, this.tc.iN()), this.C.nB = !1);
            this.C.isHotspotChanged();
            this.set("display", 0);
            this.jC()
        }, isHotspotChanged: function () {
            this.layersChanged()
        }, controlsChanged: function () {
            var a =
                this.get("controls"), b, c;
            if (a.add && 0 < a.add.length) for (; 0 < a.add.length;) b = a.add.shift(), (c = b.Zs || b.addTo) && c.call(b, this.C, this.Sa.controls); else if (a.remove && a.remove.length) for (; 0 < a.remove.length;) b = a.remove.shift(), (c = b.pu || b.removeFrom) && c.call(b, this.C, this.Sa.controls)
        }, nY: function () {
            if (!this.wN) {
                var a = this;
                this.sY = !1;
                a.Ad || (a.Ad = new g.o.Tc(new C.o.Tc, a), a.Ad.ef = 36, a.Ad.Pf = 36, a.Ad.set("zIndex", 120), a.pa.push(a.Ad), a.Ad.VA = !0);
                for (var b = a.get("overlays"), c = [], d = 0; d < a.Sc.length; d += 1) -1 === g.a.indexOf(b,
                    a.Sc[d].Ub) && (a.Sc[d].Ub instanceof C.A.Fe || a.Sc[d].Ub instanceof C.A.Vm ? a.Sc[d].Gg() : (a.Ad && a.Sc[d] instanceof g.A.ob ? (a.Ad.Eg = g.a.Lw(a.Ad.Eg, a.Sc[d].M), a.Ad.n3([a.Sc[d].M])) : a.Gr && a.Gr.n3([a.Sc[d].M]), a.Sc[d].M.ca ? (g.g.remove(a.Sc[d].M.ca), a.Sc[d].M.ca = null) : a.Sc[d].M.Xa && (g.g.remove(a.Sc[d].M.Xa.Kf), g.g.remove(a.Sc[d].M.Xa.Rb), a.Sc[d].M.Xa = null), a.Sc[d].Mm && a.Sc[d].Mm.stop(), a.Sc[d].Ub.Uh = !1, a.Sc[d].Ub.Qk(), a.Sc[d].Ub.He.map = null, a.Sc[d].Ub.A = null, a.Sc[d].Ub = null, a.Sc[d].M.yia(), a.Sc[d].M = null,
                    a.Sc[d].Qk(), a.Sc[d].He = null, a.Sc[d].Wh(), a.Sc[d].map = null), c.push(a.Sc[d]));
                for (d = 0; d < c.length; d += 1) a.Sc = g.a.Cn(a.Sc, g.a.indexOf(a.Sc, c[d]));
                var e = [], f = [];
                g.a.fqa(function (b) {
                    if (!b.Uh && b.Bg) {
                        var c = b.A || a.Lga(b);
                        c && (a.Sc.push(c), c instanceof g.A.Fe || c instanceof g.A.Vm ? c.Gx(a) : c instanceof g.A.ob ? e.push(c.M) : f.push(c.M), b.Uh = !0)
                    }
                }, b);
                e.length && a.Ad.qw(e);
                f.length && (a.Gr || (a.Gr = new g.o.Tc(new C.o.Tc, a), a.Gr.set("zIndex", 110), a.pa.push(a.Gr)), a.Gr.qw(f));
                a.set("display", 0)
            }
        }, overlaysChanged: function () {
            this.Sc =
                this.Sc || [];
            this.get("overlays") && 0 === this.get("overlays").length ? this.nY() : this.sY || (g.a.Kc(this.nY, this), this.sY = !0)
        }, contextmenusChanged: function () {
            var a = this.get("contextmenu");
            if (a) {
                var b = this;
                g.pb.load("overlay", function () {
                    b.Dw = new g.A.Vm(a, b);
                    b.set("display", 0)
                })
            }
        }, infosChanged: function () {
            var a = this.get("infos");
            if (a) {
                this.Cl = this.Cl || {};
                var b, c = this;
                g.pb.load("overlay", function () {
                    for (var d in a) a.hasOwnProperty(d) && (b = a[d], c.Cl[d] = c.Cl[d] || new g.A.Fe(b, c))
                })
            }
        }, Lga: function (a) {
            var b = null;
            if (a instanceof
                C.A.ob) b = new g.A.ob(a, this); else if (a instanceof C.A.Vm) b = new g.A.Vm(a, this); else if (a instanceof C.A.Fe) b = new g.A.Fe(a, this); else {
                var c = ["overlay"];
                "d" === this.get("overlayRender") ? (c.push("dvector"), g.l.Rn ? c.push("svg") : c.push("vml")) : c.push("cvector");
                if (!this.xsa && !g.pb.AB(c)) {
                    var d = this;
                    g.pb.dh(c, function () {
                        this.xsa = !0;
                        d.overlaysChanged()
                    });
                    return
                }
                a instanceof C.A.xc ? b = new g.A.xc(a, this) : a instanceof C.A.Fy ? b = new g.A.Fy(a, this) : a instanceof C.A.Tb ? b = new g.A.Tb(a, this) : a instanceof C.A.Mg ? b = new g.A.Mg(a,
                    this) : a instanceof C.A.hs ? b = new g.A.xc(a, this) : a instanceof C.A.ns && (b = new g.A.xc(a, this))
            }
            return b
        }, r_: function () {
            var a = this.je;
            !this.qt || this.mh && this.mh.Bo || (a = "function" === typeof this.qt ? this.qt(this.kf.Q.zoom) : this.qt);
            return a
        }, hva: function () {
            function a() {
            }

            var b = new g.o.Tc, c = [], d = new g.T(116.405467, 39.907761);
            new g.style.lg.Ih;
            for (var e = 0; 100 > e; e += 1) for (var f = 0; 100 > f; f += 1) {
                var h = new g.T(d.R + 0.02 * f, d.P + 0.02 * e),
                    h = new g.Gh({name: "point" + (100 * e + f), map: this, ea: new g.ya.kg(this.Vb(h))});
                c[100 * e + f] =
                    h;
                h.h("hover", a, h)
            }
            b.qw(c);
            this.pa.push(b)
        }, Yb: function () {
        }, fva: function (a) {
            var b = new g.o.Tc, c = [], c = (new g.p6({map: this})).CQ(a);
            b.qw(c);
            this.pa.push(b);
            this.set("display", 0)
        }, sg: function (a) {
            a = a.sg(this);
            if (!a) return null;
            if (a.length && "string" == typeof a[0]) {
                var b = this;
                g.pb.dh(a, function () {
                    b.layersChanged()
                })
            } else return a;
            return null
        }, Swa: function () {
            return this.Sa
        }, bza: function () {
            this.set("display", 0)
        }, displayChanged: function (a) {
            this.eY || this.gI(a)
        }, gI: function (a) {
            if (a) if (g.a.Vh(this.oC), g.l.ll) {
                var b =
                    this;
                setTimeout(function () {
                    b.pc()
                }, 0)
            } else this.pc(); else this.Xu || (this.oC = g.a.Kc(this.pc), this.Xu = !0)
        }, pc: function () {
            this.oC = null;
            if (!this.wN) {
                this.q("render");
                this.Xu = !1;
                var a = {};
                if (this.pa && (a.size = this.C.get("size"), a.size.width && a.size.height)) {
                    for (var b = this.C.view.type, c = [], d = 0, e = this.pa.length; d < e; d += 1) this.pa[d].Rk && this.pa[d].Rk !== b ? this.pa[d].La = !0 : (c.push(this.pa[d]), this.pa[d].Lk && c.push(this.pa[d].Lk));
                    c.sort(function (a, b) {
                        var c = a.get("zIndex"), d = b.get("zIndex");
                        return c > d ? 1 : c === d ?
                            a.GD > b.GD ? 1 : -1 : -1
                    });
                    a.pa = c;
                    c = g.l.ia ? Math.min(window.devicePixelRatio || 1, 2) : 1;
                    a.vga = 15E5 < a.size.width * a.size.height * c * c;
                    a.SG = !!this.C.get("rasterLayer");
                    a.Y = g.l.Y;
                    a.lang = this.get("lang");
                    a.Q = this.C.MG();
                    a.Rk = b;
                    this.C.B = !0;
                    a.S = this.C.getResolution([0, 0]);
                    a.ur = this.C.get("mapStyle");
                    a.Ek = this.Ek;
                    this.C.B = !1;
                    a.Ld = this.Og;
                    a.Zva = this.cn;
                    a.Se = this.qk;
                    a.Cg = this.og;
                    a.HR = this.og && g.l.Y;
                    a.a5 = g.l.Y && this.qk;
                    a.HI = g.l.Y && this.Og;
                    this.HI = a.HI;
                    b = this.get("targetLevel") || a.Q.zoom;
                    a.es = a.Q.zoom > b;
                    a.xf = a.Q.zoom > b ? "zoomOut" :
                        a.Q.zoom < b ? "zoomIn" : "stable";
                    a.kya = !0;
                    a.OY = this.OY;
                    for (var b = !1, f, c = !1, d = 0; d < this.pa.length; d += 1) this.pa[d].di && this.pa[d].X.get("visible") && a.Q.zoom <= this.pa[d].X.get("zooms")[1] && (a.PQ = !0), this.pa[d].xl().bd && (b = !0);
                    for (d = 0; d < this.pa.length; d += 1) this.pa[d].X.OM && a.PQ && (!this.qk && this.pa[d].X.get("visible") && (f = this.pa[d].X.OM(), f.yxa = 1, f.zoom = a.Q.zoom), c = !0);
                    this.tb = [];
                    c && f && this.tb !== f && (this.tb = f);
                    a.tb = this.tb;
                    a.bd = b;
                    a.scale = Math.pow(2, a.Q.zoom - a.Q.se);
                    this.kf = a;
                    this.Bd = this.C.get("mask");
                    a.Bd =
                        this.Bd;
                    if (f = this.FG()) f.pc(a), this.Ek = this.cO = !1
                }
            }
        }, FG: function () {
            if (!this.L || this.L.type !== this.C.view.type || this.L.Ema) if (this.L = null, "3D" == this.C.view.type) {
                var a = this;
                g.pb.load("Map3D", function () {
                    a.L || (a.L = new g.Ga.qD(a), a.set("display"))
                })
            } else this.L = new g.O.canvas.Hb(this);
            return this.L
        }, Sja: function () {
            var a = [], b = this.get("controls").Pc, c;
            for (c in b) b[c].cx && b[c].cx() && a.push(b[c].cx());
            return a
        }, destroyChanged: function () {
            this.wN = 1;
            this.U = {};
            this.tc && (this.tc.X.I("complete", this.nq, this),
                this.tc.Gg(), this.pa = g.a.Cn(this.pa, g.a.indexOf(this.pa, this.tc)));
            this.mh && this.mh.Ve && this.mh.Ve.X && this.mh.Ve.X.setMap();
            this.Uea && clearTimeout(this.Uea);
            this.Aea();
            this.Cba();
            this.EL && this.EL();
            this.Cfa();
            this.Qk();
            this.C = this.C.map = null;
            this.J = this.J.NJ = null;
            this.Wh();
            this.oe && (this.oe.stop(), this.oe = null);
            this.wf && (this.wf.stop(), this.wf = null);
            this.pd && (this.pd.stop(), this.pd = null);
            this.L && this.L.Ff && this.L.Ff();
            this.L = null
        }, Cfa: function () {
            var a = this.J;
            this.Z8();
            g.F.rha(a);
            g.g.kC(a);
            this.bl =
                null;
            g.g.$a(a, "amap-container");
            this.Sa = null
        }, jogEnableChanged: function () {
            this.get("jogEnable") ? this.Tt = !0 : this.Tt = !1
        }, drawChanged: function () {
            var a = this, b, c, d = this.get("draw");
            if (d) {
                this.lp || (this.lp = []);
                b = 0;
                for (c = this.lp.length; b < c; b += 1) this.lp[b].jpa();
                g.pb.load("interaction", function () {
                    var b = new g.rta({type: d, o: a.Gr}, a);
                    a.lp.push(b);
                    a.loaded = !0
                })
            } else if (this.lp) for (b = 0, c = this.lp.length; b < c; b += 1) this.lp[b].jpa(), this.lp[b].Bva(), this.I("click", this.lp[b].gxa, this)
        }, te: function (a, b, c) {
            return this.C.view.te(a,
                b, c)
        }, dg: function (a, b, c) {
            return this.C.view.dg(a, b, c)
        }, Y_: function (a, b) {
            var c = this.get("size"), d = document.createElement("canvas");
            a = a || c.width;
            b = b || c.height;
            d.width = a;
            d.height = b;
            for (var e = -(c.width - a) / 2, c = -(c.height - b) / 2, f = d.getContext("2d"), h = this.Sa.o.childNodes, k = [], l = 0; l < h.length; l += 1) k.push(h[l]);
            k.sort(function (a, b) {
                return a.style.zIndex - b.style.zIndex
            });
            for (l = 0; l < k.length; l += 1) {
                var m = k[l];
                if (g.g.Fm(m, "amap-layer") || g.g.Fm(m, "amap-e") || g.g.Fm(m, "amap-labels")) if ("CANVAS" === m.tagName) {
                    var h =
                            c, n = e, p = parseFloat(m.style.width) || m.width, q = parseFloat(m.style.height) || m.height,
                        r = 1;
                    m.style.transform && (r = parseFloat(m.style.transform.split("(")[1]));
                    f.drawImage(m, n, h, p * r, q * r)
                } else if ("DIV" === m.tagName) for (var r = m.childNodes, s = parseFloat(m.style.top) || 0 + c, m = parseFloat(m.style.left) || 0 + e, u = 0; u < r.length; u += 1) {
                    var v = r[u];
                    if ("CANVAS" === v.tagName || "IMG" === v.tagName) h = parseFloat(v.style.top) || 0, n = parseFloat(v.style.left) || 0, p = parseFloat(v.style.width) || v.width, q = parseFloat(v.style.height) || v.height,
                        f.drawImage(v, n + m, h + s, p, q)
                }
            }
            return d.toDataURL()
        }
    });
    g.Hb.wb({
        uaa: function () {
            this.Mz = !1;
            g.l.sf && ("3D" === this.C.view.type ? this.q8() : this.o8());
            g.l.Y || this.l8()
        }, Aea: function () {
            g.l.sf && ("3D" === this.C.view.type ? this.Iba() : this.Hba());
            g.l.Y || this.Dba()
        }, rotateEnableChanged: function () {
            this.Wpa = this.get("rotateEnable");
            g.l.sf && this.QY && "3D" !== this.C.view.type && (this.Wpa ? this.QY() : this.pna())
        }, zoomEnableChanged: function () {
            this.get("zoomEnable") ? (g.l.sf && this.QM && "3D" !== this.C.view.type && this.QM(), g.l.Y || this.n8()) : (g.l.sf && this.VP && this.VP(), g.l.Y || this.Gba())
        },
        mousewheelChanged: function () {
        }, KP: function (a) {
            a && (this.Mz = a.Vs)
        }, Nu: function () {
            this.Mz = !1
        }, ji: function (a, b, c, d) {
            var e, f = {};
            a || (a = window.event);
            var h = g.F.wl(a, this.Sa.Rc);
            g.l.sf && ("touchend" !== a.type ? this.U.Zaa = h : h = this.U.Zaa);
            f.xb = h;
            f.Ma = this.dg(h);
            f.Ma && (f.Ma = f.Ma.toFixed(3));
            f.ig = this.Ee(f.Ma);
            c || (c = this.Mz ? this.Mz ? [this.Mz] : null : this.r$(f.Ma, d)) && 0 < c.length && c[0].wq && (e = c[0].wq, f.Vs = c[0]);
            e || (e = this);
            f.ud = e;
            f.oua = a.altKey;
            f.ctrlKey = a.ctrlKey;
            f.button = void 0 === a.button ? 0 : a.button;
            b || (a.preventDefault ?
                a.preventDefault() : a.returnValue = !1);
            return f
        }, cL: function (a) {
            return a && a !== this && a !== document
        }, XL: function () {
            var a = this.U;
            a.Lf && (a.vj.xb.x === a.Lf.x && a.vj.xb.y === a.Lf.y ? a.og = !1 : (a.og = !0, a.yo || (a.ap.q("dragstart", a.$o), a.yo = !0), a.ap.q("dragging", a.vj), a.Lf = a.vj.xb))
        }, Mqa: function (a) {
            for (var b = [], c = 0; c < a.length; c += 1) a[c] && (b = b.concat(a[c]));
            return b
        }, Lx: function (a, b, c) {
            return a && b && (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < (c || 10)
        }, r$: function (a, b) {
            var c = this.FG();
            if (!c) return null;
            var d, e = this;
            this.pa.sort(function (a,
                                   b) {
                return a.get("zIndex") > b.get("zIndex") ? -1 : 1
            });
            c.Ht(a, this.pa, function (a) {
                d = a;
                d = e.Mqa(d)
            }, function () {
                d = []
            }, b);
            return d
        }
    });
    g.Hb.wb({
        Aaa: function () {
            this.cn = {};
            this.h("moveend", this.n2, this);
            g.l.ll && (g.l.OI || g.l.EF) && this.h("zoomend", this.gS, this);
            this.h("movestart", this.o2, this);
            this.h("zoomstart", this.u2, this);
            this.h("zoomend", this.t2, this);
            this.SJ();
            this.ws = 0;
            this.hE = {};
            "undefined" === typeof window.requestAnimationFrame && (this.ws = 2)
        }, u2: function () {
            2 !== this.ws && 12 === this.get("zoom") && (this.ws = 1, g.a.fB.start(this.hE));
            this.qk = !0
        }, t2: function () {
            1 === this.ws && 13 !== this.get("zoom") && (this.ws = 0, g.a.fB.cancel(this.hE));
            this.qk =
                !1;
            this.set("display")
        }, NX: function (a, b) {
            this.cn.left = 0 < a;
            this.cn.right = 0 > a;
            this.cn.UC = 0 < b;
            this.cn.AN = 0 > b
        }, Rs: function () {
            this.cn.left = !1;
            this.cn.right = !1;
            this.cn.UC = !1;
            this.cn.AN = !1
        }, Cba: function () {
            this.I("moveend", this.n2, this);
            g.l.ll && (g.l.OI || g.l.EF) && this.I("zoomend", this.gS, this);
            this.I("movestart", this.o2, this);
            this.I("zoomstart", this.u2, this);
            this.I("zoomend", this.t2, this);
            this.Eba()
        }, n2: function (a) {
            this.og = !1;
            this.Rs();
            this.C3();
            !a.c1 && this.C.get("limitBounds", null, !0) ? (a = this.aha()) && !a.cb(this.get("center")) ?
                this.rI(this.get("zoom"), a, !1, !0) : this.ka("moveend") : this.ka("moveend");
            this.set("display")
        }, o2: function () {
            this.og = !0;
            this.Rs()
        }, dragEnableChanged: function () {
            (this.XA = this.get("dragEnable")) ? this.RJ() : this.DL()
        }, ka: function (a, b) {
            if (this.C.be(a)) {
                var c;
                b && (c = b.e2 ? {type: a, newsize: b.e2, oldsize: b.qna} : {
                    type: a,
                    pixel: b.xb,
                    target: this.C,
                    lnglat: b.ig
                });
                this.C.q(a, c)
            }
        }, SJ: function () {
            this.h("click", this.uW);
            this.h("dblclick", this.yW);
            g.l.sf && this.ET();
            g.l.Y || this.m8()
        }, Eba: function () {
            this.I("click", this.uW);
            this.I("dblclick", this.yW);
            g.l.sf && this.jW();
            g.l.Y || this.Fba()
        }, NE: function (a, b) {
            var c = this.get("targetLevel") || this.get("zoom"), c = 0 < b ? Math.floor(c) + 1 : Math.ceil(c) - 1,
                c = Math.min(Math.max(c, this.get("zooms")[0]), this.get("zooms")[1]);
            c === this.get("zoom") || this.wf && this.wf.uu && c === this.wf.end || this.Cy(c, !1, a)
        }, uW: function (a) {
            this.ka("click", a)
        }, yW: function (a) {
            this.get("doubleClickZoom") && this.get("zoomEnable") && this.NE(a.Ma, 1);
            this.ka("dblclick", a)
        }, Rua: function (a) {
            this.NE(a.Tza, a.H4);
            this.ka("touchend",
                a)
        }, RJ: function () {
            this.XA && ("3D" === this.C.view.type ? (this.h("dragstart", this.FW), this.h("dragging", this.AW), this.h("dragend", this.DW)) : (this.h("dragstart", this.EW), this.h("dragging", this.zW), this.h("dragend", this.BW)))
        }, DL: function () {
            this.XA || ("3D" === this.C.view.type ? (this.I("dragstart", this.FW), this.I("dragging", this.AW), this.I("dragend", this.DW)) : (this.I("dragstart", this.EW), this.I("dragging", this.zW), this.I("dragend", this.BW)))
        }, EW: function (a) {
            this.KP(a);
            this.Rs();
            this.Og = !0;
            this.U.Rw = a.xb.x;
            this.U.YA =
                a.xb.y;
            this.oe && (this.oe.stop(), this.br(!0));
            this.ka("dragstart");
            this.ka("movestart");
            this.q("movestart", a);
            this.Sqa()
        }, zW: function () {
            var a = this.U, b = a.vj.xb.x - a.Rw, c = a.vj.xb.y - a.YA;
            if (c || b) {
                this.U.og = !0;
                this.NX(b, c);
                a.Rw = a.vj.xb.x;
                a.YA = a.vj.xb.y;
                var a = b, d = c, e = this.rotation;
                e && (e *= Math.PI / 180, a = b * Math.cos(e) + Math.sin(e) * c, d = -Math.sin(e) * b + Math.cos(e) * c);
                a = this.get("centerCoords").Ya((new g.G(a, d)).Nd(this.S));
                (d = this.oZ(a)) && (c = Math.round(this.te(d).Ya(this.te(a)).y));
                this.zr(this.Sa.Iq, b, c);
                a.x =
                    (a.x + g.a.za) % g.a.za;
                this.set("centerCoords", a, !0);
                this.set("center", this.Ee(a), !0);
                this.Tt && (this.Pg ? (a = new Date, this.Ds = 100 < a - this.Pg ? new g.G(0, 0) : new g.G(b, c), this.Pg = a) : this.Pg = new Date);
                this.ka("dragging");
                this.ka("mapmove")
            } else this.U.og = !1, this.Ds = null, this.Rs()
        }, zr: function (a, b, c) {
            if (a && !(1 > Math.abs(b) && 1 > Math.abs(c))) {
                var d = parseFloat(a.style.top) || 0, e = parseFloat(a.style.left) || 0, f = "";
                this.rotation && (f = g.g.Ur[g.g.Xf] + ":rotate(" + this.rotation + "deg);overflow:visible;");
                a.style.cssText = "position:absolute;top:" +
                    (d + c) + "px;left:" + (e + b) + "px;" + f
            }
        }, oZ: function (a) {
            var b = this.C.view.iT(), c = this.rR.height * this.S / 2;
            return a.y < b.nc + c ? (a.y = b.nc + c, a) : a.y > b.Bc - c ? (a.y = b.Bc - c, a) : null
        }, BW: function () {
            this.Nu();
            100 < new Date - this.Pg && (this.Ds = null);
            this.U.Lf = null;
            this.Og = !1;
            this.Rs();
            this.ka("dragend");
            if (this.Tt && this.Ds) if (this.U.og) {
                var a = this.Ds, b = new g.G(0, 0);
                this.oe = new g.ij(a, b, function (a, b, e) {
                    return 600 <= e ? b : a.Nd(1 - Math.pow(e / 600, 2)).floor()
                }, 1);
                this.oe.yp = function (a) {
                    if (2 > Math.abs(a.x) && 2 > Math.abs(a.y)) this.oe.stop(),
                        this.q("moveend"), this.br(), this.Ds = this.Pg = null; else {
                        var b = a.x, e = a.y, f = this.rotation;
                        f && (f *= Math.PI / 180, b = a.x * Math.cos(f) + Math.sin(f) * a.y, e = -Math.sin(f) * a.x + Math.cos(f) * a.y);
                        b = this.get("centerCoords").Ya((new g.G(b, e)).Nd(this.S));
                        e = this.oZ(b);
                        f = a.y;
                        e && (f = Math.round(this.te(e).Ya(this.te(b)).y));
                        this.zr(this.Sa.Iq, a.x, f);
                        b.x = (b.x + g.a.za) % g.a.za;
                        this.set("centerCoords", b, !0);
                        this.set("center", this.Ee(b), !0);
                        this.ka("mapmove")
                    }
                };
                this.oe.Rm(this)
            } else this.q("moveend"), this.br(!0), this.Ds = this.Pg = null;
            else this.q("moveend"), this.br(), this.Ds = this.Pg = null
        }, Sqa: function () {
            if (!this.U.refresh) {
                var a = this, b = null;
                this.U.refresh = setInterval(function () {
                    b !== a.U.Lf && (a.set("display", 0), b = a.U.Lf)
                }, g.l.Y ? 400 : 100)
            }
        }, gS: function () {
            if (g.l.ll && (g.l.OI || g.l.EF)) {
                for (var a = this.Sa.o.childNodes, b = 0; b < a.length; b += 1) {
                    var c = a[b];
                    c instanceof HTMLCanvasElement && (c.width = 0);
                    "amap-e" === c.className && (c.style.height = "0")
                }
                for (b = 0; b < this.pa.length; b += 1) c = this.pa[b], "undefined" !== typeof AMap.IndoorMap && c instanceof AMap.IndoorMap &&
                (c.Xs && (c.Xs.width = 0), c.lw && (c.lw.width = 0))
            }
        }, br: function (a) {
            this.U.refresh && (clearInterval(this.U.refresh), this.U.refresh = null);
            a || (this.gS(), this.set("display", 0))
        }, C3: function (a) {
            this.set("refresh", a)
        }
    });
    g.Hb.wb({
        setZoomSlow: function (a) {
            this.rI(a, null, !this.get("animateEnable"))
        }, setPanTo: function (a) {
            this.rI(null, a, !this.get("animateEnable"))
        }, zoomAndCenterChanged: function (a) {
            var b = a[0];
            b < this.get("zooms")[0] && (b = this.get("zooms")[0]);
            b > this.get("zooms")[1] && (b = this.get("zooms")[1]);
            this.rI(b, a[1], a[2] || !this.get("animateEnable"))
        }, zoomChanged: function () {
            this.S = Math.pow(2, 20 - this.get("zoom"));
            this.q("closeOverlays");
            this.set("display")
        }, rotationChanged: function (a) {
            this.rotation = this.get("rotation");
            this.C.q("rotate", {rotation: this.rotation || 0});
            !0 !== a && this.set("display", 0)
        }, pitchChanged: function () {
            this.pitch = this.get("pitch");
            this.C.q("pitch", {pitch: this.pitch || 0});
            this.set("display", 0)
        }, centerCoordsChanged: function () {
            this.q("closeOverlays");
            this.tua ? this.gI(!0) : this.gI(!1)
        }
    });
    g.$S = g.Z.extend({
        ha: [g.ra, g.Ge], r: function (a, b) {
            this.type = "2D";
            this.Sf(b, !0);
            a && this.wga(a)
        }, wga: function (a) {
            this.map = a;
            this.Ie(["size", "refresh", "maxPitch"], a);
            this.centerChanged();
            a.Ie(["zoom", "center", "centerCoords", "rotation", "pitch"], this)
        }, iT: function () {
            this.JJ || this.Jha();
            return this.JJ
        }, Jha: function () {
            var a;
            if (this.get("center") instanceof g.T) {
                a = new g.we(-180, -85, 180, 85);
                var b = this.map.Vb(a.zj());
                a = this.map.Vb(a.Jn());
                this.JJ = {Ic: b.x, nc: b.y, Hc: a.x, Bc: a.y}
            } else a = this.map.get("limitBounds",
                null, !0), this.JJ = {Ic: a[0], nc: a[1], Hc: a[2], Bc: a[3]}
        }, MG: function () {
            var a = this.map, b = this.get("zoom");
            return {
                zoom: b,
                Vg: this.get("center"),
                Ja: this.ul(),
                hb: this.get("centerCoords"),
                rotation: parseInt(this.get("rotation")),
                nf: a.get("crs"),
                S: Math.pow(2, 20 - b),
                se: Math.round(b),
                Nf: Math.pow(2, 20 - Math.round(this.get("zoom")))
            }
        }, centerChanged: function () {
            this.set("centerCoords", this.map.Vb(this.get("center")).toFixed(3), !0)
        }, centerCoordsChanged: function () {
            var a = this.map;
            a.B = !0;
            var b = this.iT(), c = this.get("centerCoords"),
                d = a.getSize();
            a.B = !1;
            var e = this.get("zoom", null, !0), a = this.get("center", null, !0),
                d = d.height * Math.pow(2, 20 - e) / 2;
            a instanceof g.T ? c.x = (c.x + 268435456) % 268435456 : 0 > c.x ? c.x = 0 : c.x > b.Hc && (c.x = b.Hc);
            c.y < b.nc + d ? c.y = b.nc + d : c.y > b.Bc - d && (c.y = b.Bc - d);
            this.set("center", this.map.Ee(c), !0)
        }
    });
    g.BD = g.$S.extend({
        ul: function () {
            var a = this.get("size"), b = this.get("centerCoords"), c = parseInt(this.get("rotation")) % 360,
                d = this.get("zoom", null, !0), e = Math.pow(2, 20 - d), c = Math.PI * c / 180,
                a = new g.G((Math.abs(a.width * Math.cos(c)) + Math.abs(a.height * Math.sin(c))) / 2, (Math.abs(a.width * Math.sin(c)) + Math.abs(a.height * Math.cos(c))) / 2),
                e = new g.yf(b.Ya(a.Nd(e)), b.add(a.Nd(e))), c = this.map.get("targetLevel");
            if (c > d - 1) {
                var f = Math.pow(2, 20 - c);
                e.P5 = new g.yf(b.Ya(a.Nd(f)), b.add(a.Nd(f)))
            }
            e.F4 = c || d;
            e.mc = a;
            return e
        }, Kja: function (a) {
            var b =
                    this.get("size"), c = this.get("centerCoords"), d = parseInt(this.get("rotation")) % 360,
                d = Math.PI * d / 180,
                b = new g.G((Math.abs(b.width * Math.cos(d)) + Math.abs(b.height * Math.sin(d))) / 2, (Math.abs(b.width * Math.sin(d)) + Math.abs(b.height * Math.cos(d))) / 2);
            a = Math.pow(2, 20 - a);
            return new g.yf(c.Ya(b.Nd(a)), c.add(b.Nd(a)))
        }, jd: function () {
            var a = this.ul(), b = a.Md.x, c = a.Zb.y, a = new g.G(a.Zb.x, a.Md.y), b = new g.G(b, c);
            return new g.we(this.map.Ee(a), this.map.Ee(b))
        }, zoomChanged: function () {
        }, te: function (a, b) {
            this.get("size");
            var c =
                a.ib(), d = this.get("centerCoords"), e = c.Ya(d);
            e.x < -g.a.za / 2 ? e.x += g.a.za : e.x > g.a.za / 2 && (e.x -= g.a.za);
            var c = this.get("size").EC().Wc(2), f = this.get("rotation") * Math.PI / 180,
                d = e.x * Math.cos(f) - Math.sin(f) * e.y, e = Math.sin(f) * e.x + Math.cos(f) * e.y;
            return c.add((new g.G(d, e)).Nd(Math.pow(2, (b || this.get("zoom")) - 20)))
        }, dg: function (a, b) {
            var c = this.get("size").EC().Wc(2), d = a.Ya(c), e = this.get("rotation") * Math.PI / 180,
                c = d.x * Math.cos(e) + Math.sin(e) * d.y, d = -Math.sin(e) * d.x + Math.cos(e) * d.y,
                c = this.get("centerCoords").add((new g.G(c,
                    d)).Nd(Math.pow(2, 20 - (b || this.get("zoom")))));
            c.x = (c.x + 268435456) % 268435456;
            return c
        }
    });
    g.DJ = g.$S.extend({
        r: function (a, b) {
            this.xh = new g.Vd;
            this.Cd = new g.Vd([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1]);
            arguments.callee.ma.apply(this, arguments);
            this.scale = 1;
            this.type = "3D";
            this.wy = null;
            this.X2 = "";
            this.Q = ["", 0, 0, "", 0];
            this.wy = {}
        }, refreshChanged: function () {
            this.Xp()
        }, zoomChanged: function (a) {
            this.Xp();
            this.Q[4] = a
        }, centerChanged: function (a) {
            arguments.callee.ma.apply(this, arguments);
            this.Xp()
        }, centerCoordsChanged: function (a) {
            arguments.callee.ma.apply(this, arguments);
            this.Xp();
            this.Q[0] = a.toString()
        },
        rotationChanged: function (a) {
            this.Xp();
            this.Q[2] = a
        }, pitchChanged: function (a) {
            this.He.pitch = Math.min(this.get("maxPitch"), Math.max(a, 0));
            this.Xp();
            this.Q[1] = a
        }, Xp: function () {
            if (!this.osa() && (this.VR(), this.zia(), this.map)) {
                var a = this, b = function () {
                    a.map.camera = a.v_();
                    a.map.q("camerachange", {map: a.map, camera: a.map.camera})
                };
                a.map.La ? b() : this.map.h("complete", b, this)
            }
        }, v_: function () {
            return {
                height: this.sm,
                fov: this.Bja,
                aspect: this.vA,
                near: this.Cx,
                far: this.qG,
                position: this.Rga,
                rotation: this.He.rotation,
                pitch: this.He.pitch
            }
        },
        zia: function () {
            this.$aa = g.a.lf()
        }, Qn: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 300;
            return g.a.lf() - this.$aa > a
        }, VR: function () {
            var a = this.get("centerCoords"), b = this.get("pitch"), c = this.get("rotation"),
                d = (new g.Vd).d4(-a.x + g.a.Xb.x, -a.y + g.a.Xb.y, 0);
            this.Rga = {x: a.x - g.a.Xb.x, y: a.y - g.a.Xb.y};
            a = (new g.Vd).Zx(180 - b, 1, 0, 0);
            this.Aoa = (new g.Vd).set(a);
            c = (new g.Vd).Zx(c, 0, 0, 1);
            this.Lr = (new g.Vd).set(c);
            this.Aja = d.zg();
            this.Cd = (new g.Vd).d4(0, 0, -this.sm).multiply(a.multiply(c.multiply(d))).toFixed(8);
            this.Cd.Le = this.Cd.zg()
        }, osa: function (a) {
            a = a || this.get("zoom");
            var b = this.get("size"), c = b.width, b = b.height;
            if (!c || !b) return !0;
            this.vA = c /= b;
            b = b / 2 * Math.pow(2, 20 - a);
            a = g.a.Yc((56 - a) * Math.PI / 180, 2);
            var d = g.a.Yc(b / Math.tan(a / 2), 0);
            2400 > d && (d = 2400, a = 2 * Math.atan(b / d));
            this.Bja = a;
            this.sm = d;
            this.Cx = this.sm / 10;
            this.qG = 50 * this.sm;
            this.lia = (this.sm - this.Cx) / (this.qG - this.Cx);
            this.xh.a4(a, c, this.Cx, this.qG);
            this.xh.Le = this.xh.zg();
            a = this.xh;
            var c = new g.xS, b = c.$B, e = this.xh.elements, d = e[0], f = e[1], h = e[2], k = e[3], l =
                    e[4], m = e[5], n = e[6], p = e[7], q = e[8], r = e[9], s = e[10], u = e[11], v = e[12], x = e[13],
                t = e[14], e = e[15];
            tc(b[0], k - d, p - l, u - q, e - v).normalize();
            tc(b[1], k + d, p + l, u + q, e + v).normalize();
            tc(b[2], k + f, p + m, u + r, e + x).normalize();
            tc(b[3], k - f, p - m, u - r, e - x).normalize();
            tc(b[4], k - h, p - n, u - s, e - t).normalize();
            tc(b[5], k + h, p + n, u + s, e + t).normalize();
            a.gO = c
        }, MG: function () {
            var a = this.map;
            a.map.zu && (this.Xp(), this.Q[3] = a.get("size").toString());
            var b = this.Q.toString();
            if (b !== this.X2) {
                var c = this.get("zoom"), d = this.wy;
                d.zoom = c;
                d.vA = this.vA;
                d.top =
                    this.top;
                d.Ja = this.ul();
                d.hb = this.get("centerCoords");
                d.rotation = a.get("rotateEnable") && parseInt(this.get("rotation")) || 0;
                d.pitch = this.get("pitch") || 0;
                d.IAa = this.get("yaw");
                d.nf = a.get("crs");
                d.S = Math.pow(2, 20 - c);
                d.se = Math.round(c);
                d.w2 = Math.floor(c);
                d.Nf = Math.pow(2, 20 - d.se);
                d.Qna = Math.pow(2, 20 - d.w2);
                d.xh = this.xh;
                d.Cd = this.Cd;
                this.X2 = d.key = b
            }
            this.wy.Vg = this.get("center");
            this.wy.Vp = g.a.lf();
            this.wy.Qn = this.Qn();
            return this.wy
        }, ul: function () {
            var a = this.get("size"), b = a.width, a = a.height;
            if (!b || !a) return null;
            var c, d;
            d = 0;
            var e = new g.G(0, d);
            c = this.dg(e, !0);
            if (55 < this.He.pitch || !c) for (; !c;) d += a / 40, e.y = d, c = this.dg(e, !0);
            this.top = d / a;
            e.x = b;
            d = this.dg(e, !0);
            var f = 0, h = this.He.zoom;
            50 <= this.He.pitch && 18 <= h && (f = 0);
            e.y = a + f;
            f = this.dg(e, !0);
            e.x = 0;
            h = this.dg(e, !0);
            c = [c.Jl(), d.Jl(), f.Jl(), h.Jl(), c.Jl()];
            c = new g.e6(c);
            e.x = b / 2;
            e.y = a + 256;
            c.aN = this.dg(e, !0);
            return c
        }, jd: function () {
            var a = this.ul();
            if (a) {
                for (var b = [], c = 0; c < a.path.length; c += 1) {
                    var d = this.map.Ee(new g.G(a.path[c][0], a.path[c][1]));
                    b.push(d)
                }
                return new g.no(b)
            }
        },
        te: function (a, b, c) {
            a.z = c || 0;
            a = this.X1([a]);
            a = a[0];
            return new g.G(a.x, a.y)
        }, y_: function (a) {
            var b = this.get("size");
            a = new g.Vk([a.x / b.width * 2 - 1, 1 - a.y / b.height * 2, -1, 1]);
            a.multiply(this.Cx);
            return this.xh.Le.gh(a)
        }, dg: function (a, b, c) {
            var d;
            this.map ? (this.map.B = !0, d = this.map.getSize(!0), this.map.B = !1) : d = this.get("size");
            var e = a.x / d.width * 2 - 1;
            d = 1 - a.y / d.height * 2;
            a = new g.Vk([e, d, -1, 1]);
            a.multiply(this.Cx);
            if (!this.xh.Le) return null;
            a = this.xh.Le.gh(a);
            e = new g.Vk([e, d, 1, 1]);
            e.multiply(this.qG);
            d = this.xh.Le.gh(e);
            var f = this.Cd.Le, e = f.gh(a).elements;
            a = f.gh(d).elements;
            c = (e[2] - (-c || 0)) / (e[2] - a[2]);
            if (0 > a[2] || 0 > c || b && c > 2.5 * this.lia) return null;
            b = e[0] - c * (e[0] - a[0]);
            c = e[1] - c * (e[1] - a[1]);
            return isNaN(b) || isNaN(c) ? null : (new g.G(b, c)).add(g.a.Xb)
        }, X1: function (a) {
            for (var b = this.get("centerCoords"), c = g.a.Xb.x, d = g.a.Xb.y, e = this.get("size"), f = g.a.za, h = b.x + f / 2, b = b.x - f / 2, k = [], l = new g.Vk([0, 0, 0, 1]), m = l.elements, n = new g.G(0, 0), p = g.Vd.multiply(this.xh, this.Cd), q = 0, r = a.length; q < r; q++) if (a[q]) {
                a[q].concat ? (n.x = a[q][0], n.y = a[q][1],
                    n.z = -a[q][2] || 0) : (n.x = a[q].x, n.y = a[q].y, n.z = -a[q].z || 0);
                h < n.x ? n.x -= f : b > n.x && (n.x += f);
                m[0] = n.x - c;
                m[1] = n.y - d;
                m[2] = n.z;
                var s = p.gh(l);
                s.multiply(1 / s.elements[3]);
                k[q] = {x: (s.elements[0] + 1) / 2 * e.width, y: (-s.elements[1] + 1) / 2 * e.height, z: s.elements[2]}
            }
            return k
        }, Osa: function (a) {
            var b = this.get("size");
            a = this.xh.gh(this.Cd.gh((new g.Vk).copy(a)));
            a.multiply(1 / a.elements[3]);
            b = new g.G((a.elements[0] + 1) / 2 * b.width, (-a.elements[1] + 1) / 2 * b.height);
            b.z = a.elements[2];
            return b
        }
    });
    g.a.Xb = new g.G(215440491, 106744817);
    g.Hb.wb({
        kZ: function (a, b, c) {
            var d = this;
            d.ZC ? (clearTimeout(d.ZC), d.ZC = null) : (d.ka("zoomstart", {zoom: a}), d.q("zoomstart"));
            d.ZC = setTimeout(function () {
                d.ZC = null;
                d.ka("zoomend", {zoom: a});
                d.ka("zoomchange", {zoom: a});
                d.q("zoomend")
            }, 150);
            a = g.a.Yc(a, 2);
            d.Cy(a, !0, b, c)
        }, Cy: function (a, b, c, d) {
            var e = this.get("zoom");
            if (e !== a) {
                var f = this.get("zooms");
                "3D" !== this.C.view.type && (g.l.Y || g.l.cf) && (b = !0);
                a = a || e;
                a = Math.min(Math.max(a, f[0]), f[1]);
                var h = a !== e, k = !!c;
                this.oe && (this.oe.stop(), this.oe = null);
                c = c || this.get("centerCoords");
                var l = this.te(c);
                c = function (c) {
                    b || (c = g.a.Yc(c, 2));
                    var d = this.dg(l);
                    this.set("zoom", c);
                    var e = this.dg(l), d = e && e ? e.Ya(d) : new g.G(0, 0);
                    this.set("centerCoords", this.get("centerCoords").Ya(d).toFixed(3));
                    d.x && d.y && this.ka("mapmove");
                    c === a && a << 0 === a && (this.set("targetLevel", null), h && !this.ZC && (this.ka("zoomchange"), this.ka("zoomend")), this.q("zoomend"), k && this.q("moveend"), this.wf = null)
                };
                var m;
                this.pd && this.pd.uu && (this.pd.stop(), this.pd.VO && (d = !0), this.pd.mB && (m = !0), this.pd = null, this.set("targetLevel",
                    null));
                this.wf && this.wf.uu && (this.wf.stop(), d = !0, this.wf.mB && (m = !0), this.wf = null, this.set("targetLevel", null));
                h && !d && this.ka("zoomstart");
                k && !m && this.ka("movestart");
                this.q("zoomstart");
                b ? c.call(this, a) : (this.wf = new g.ij(e, a, null, 0.04), this.wf.VO = h, this.wf.mB = k, this.wf.transition = function (a, b, c) {
                    return c >= g.w.AF ? b : (b - a) * (1 - Math.pow(1 - c / g.w.AF, 4)) + a
                }, this.wf.yp = c, this.wf.Rm(this, !0), this.set("targetLevel", a))
            }
        }, rI: function (a, b, c, d) {
            var e = null;
            a || (a = this.pd ? this.pd.cra : this.get("targetLevel") || this.get("zoom"));
            var e = b ? this.Vb(b).toFixed(3) : this.pd ? this.pd.E4 : this.get("centerCoords"),
                f = a !== this.get("zoom"), h = !e.cb(this.get("centerCoords")), k = b = !1;
            this.wf && this.wf.uu && (this.wf.stop(), b = !0, this.wf.mB && (k = !0), this.wf = null, this.set("targetLevel", null));
            this.pd && this.pd.uu && (this.pd.stop(), this.pd.VO && (b = !0), this.pd.mB && (k = !0), this.pd = null, this.set("targetLevel", null));
            this.oe && (this.oe.stop(), this.oe = null);
            if (f || h) {
                if (!this.C.view.ul().contains(e) || f && "3D" !== this.C.view.type && (g.l.Y || g.l.cf)) c = !0;
                if (c) f && (b ||
                (this.q("zoomstart"), this.ka("zoomstart")), this.set("zoom", a), this.ka("zoomchange"), this.ka("zoomend"), this.q("zoomend")), h && (k || d || (this.ka("movestart"), this.q("movestart")), this.set("centerCoords", e), this.ka("mapmove"), this.q("moveend", {c1: d})), this.set("targetLevel", null); else {
                    this.set("targetLevel", a);
                    var l = a - this.get("zoom"), m = e.Ya(this.get("centerCoords")).toFixed(3);
                    this.pd = new g.ij(1, 0, null, 0.001);
                    this.pd.VO = f;
                    this.pd.mB = h;
                    this.pd.E4 = e;
                    this.pd.cra = a;
                    this.pd.transition = function (a, b, c) {
                        return Math.pow(1 -
                            Math.min(g.w.AF, c) / g.w.AF, 2)
                    };
                    this.pd.yp = function (b) {
                        0.02 > b ? (this.pd && (this.pd.stop(), this.pd = null), f && (this.set("zoom", a), this.ka("zoomchange"), this.ka("zoomend"), f = !1, this.q("zoomend")), h && (this.set("centerCoords", e), this.q("mapmove"), this.q("moveend", {c1: d})), this.set("targetLevel", null)) : (f && this.set("zoom", a - l * b), h && (b = e.Ya(m.Nd(b)).toFixed(3), this.set("centerCoords", b), this.ka("mapmove")));
                        this.set("display", 1)
                    };
                    this.pd.Rm(this);
                    f && !b && (this.q("zoomstart"), this.ka("zoomstart"));
                    !h || k || d || (this.q("movestart"),
                        this.ka("movestart"))
                }
            }
        }
    });
    g.o = {};
    g.o.Ec = g.Z.extend({
        ha: [g.ra, g.Ge], r: function (a, b) {
            this.X = a;
            this.qd = [3, 18];
            this.GD = g.a.Ab(this);
            a && this.Ie(["opacity", "visible", "zIndex", "zooms"], a);
            a.Rk = b.C.view.type;
            this.e = b;
            this.W("display", b)
        }, Gg: function () {
            this.di && this.iN();
            if (g.Aa && g.Aa.Zp && g.Aa.Zp.length) {
                var a = g.a.indexOf(g.Aa.Zp, this);
                -1 !== a && (g.Aa.Zp = g.a.Cn(g.Aa.Zp, a))
            }
            if (a = this.Ib) {
                if (a.length) for (var b = 0; b < a.length; b += 1) a[b].parentNode && a[b].parentNode.removeChild(a[b]); else a.parentNode && a.parentNode.removeChild(a);
                this.Ib = null
            }
            this.X.Gg && this.X.Gg();
            this.X.Uh = !1;
            this.X.o = null;
            this.Qk();
            var c;
            this.O && (this.O.Wq(), this.O = null, c = "-" + this.hc);
            this.Rf && (this.Rf.Wq(), this.Rf = null, c = "-" + this.hc);
            if (c) for (var d in g.Aa.ej) g.a.bB(d, c) && delete g.Aa.ej[d]
        }, ka: function (a, b) {
            this.X.q(a, b)
        }, visibleChanged: function () {
            this.set("display", 0)
        }, zIndexChanged: function () {
            this.set("display", 0)
        }, iR: function (a) {
            g.g.Kp(a, this.opacity)
        }, opacityChanged: function () {
            var a = this.get("opacity");
            this.opacity = Math.min(Math.max(0, a), 1);
            if (a = this.Ib) if (a.length) for (var b = 0; b < a.length; b +=
                1) this.iR(a[b]); else this.iR(a);
            this.e && this.e.C && "3D" == this.e.C.view.type && this.set("display", 0)
        }, fp: function () {
            return this.e.Bd && !this.X.get("rejectMapMask")
        }, nO: function () {
            var a = this.get("bounds");
            if (a) {
                if (a instanceof g.we) {
                    var b = a.zj(), a = a.Jn(), c = this.e.Vb(new g.T(180, 0)).x, d = this.e.Vb(b), e = this.e.Vb(a),
                        f = this.e.get("center");
                    b.R > a.R && (0 < f.R ? e.x += c : d.x -= c);
                    this.H = [d.x, d.y, e.x, e.y]
                } else a instanceof g.yf ? this.H = [a.Zb.x, a.Zb.y, a.Md.x, a.Md.y] : a instanceof g.CD && "3D" === this.X.Rk && (b = a.path[1], d =
                    this.e.Vb(a.path[0]), e = this.e.Vb(b), this.H = [d.x, d.y, e.x, e.y, a.R3, a.height]);
                return this.H
            }
            return null
        }
    });
    var Ec = function () {
        function a(a) {
            this.FD[g.a.Ab(a)] = a;
            return this
        }

        function b(a) {
            this.FD[g.a.Ab(a)] = null;
            return this
        }

        return function () {
            function c() {
                var a = c.FD, b, f = [], h;
                for (h in a) a.hasOwnProperty(h) && f.push(a[h]);
                for (a = f.length - 1; 0 <= a; a -= 1) h = f[a].apply(this, arguments), void 0 !== h && (b = h);
                return b
            }

            c.FD = {};
            c.yY = a;
            c.$ya = b;
            return c
        }
    }();
    g.Wf = g.Z.extend({
        ha: [g.ra], r: function (a, b) {
            this.Co = a | 0;
            this.JD = !!b;
            this.count = 0;
            this.IH = Ec();
            this.clear();
            this.Lz = []
        }, np: function () {
            return !this.count
        }, wxa: function () {
            return this.count >= this.Co
        }, Iza: function (a) {
            this.Co !== a && (this.Co = a | 0) && this.hY(this.Co)
        }, Pc: function (a) {
            return !!this.e[a]
        }, get: function (a, b) {
            var c = this.BU(a);
            return c ? c.value : b
        }, set: function (a, b) {
            var c = this.BU(a);
            c ? c.value = b : (c = new g.Wf.gq(a, b), this.e[a] = c, this.rE(c), this.count += 1, this.count > this.Co && this.hY(this.Co))
        }, Pu: function (a) {
            this.remove(a)
        },
        remove: function (a) {
            return this.e.hasOwnProperty(a) && this.cA(this.e[a]) ? !0 : !1
        }, forEach: function (a, b) {
            for (var c = this.Oc.next; c !== this.Oc; c = c.next) a.call(b, c.value, c.key, this)
        }, PH: function (a, b) {
            return this.e.hasOwnProperty(a) ? this.e[a].value : b
        }, Dya: function () {
            return this.Oc.next.value
        }, Eya: function () {
            return this.Oc.Fa.value
        }, shift: function () {
            return this.kX(this.Oc.next)
        }, rZ: function () {
            this.Lz.length = 0
        }, G1: function (a) {
            this.Lz.push(a)
        }, push: function (a) {
            a = new g.Wf.gq("", a);
            0 === this.count ? (this.Oc.Fa = null,
                a.Fa = this.Oc, this.Oc.next = a) : (this.qA.next = a, a.Fa = this.qA);
            this.count += 1;
            this.qA = a
        }, dsa: function (a) {
            a = new g.Wf.gq("", a);
            0 === this.count ? (this.Oc.Fa = null, a.Fa = this.Oc, this.qA = this.Oc.next = a) : (this.Oc.next.Fa = a, a.next = this.Oc.next, a.Fa = this.Oc, this.Oc.next = a);
            this.count += 1
        }, ina: function () {
            if (this.count) {
                this.count -= 1;
                var a = this.Oc.next;
                a.next ? (a.next.Fa = this.Oc, this.Oc.next = a.next) : (this.Oc.next = null, this.qA = this.Oc.Fa = null);
                a.next = null;
                a.Fa = null;
                return a.value
            }
            return null
        }, pop: function () {
            return this.kX(this.Oc.Fa)
        },
        BU: function (a) {
            if (this.e.hasOwnProperty(a)) return a = this.e[a], this.JD && (a.remove(), this.rE(a)), a
        }, rE: function (a) {
            this.JD ? (a.next = this.Oc.next, a.Fa = this.Oc, this.Oc.next = a, a.next.Fa = a) : (a.Fa = this.Oc.Fa, a.next = this.Oc, this.Oc.Fa = a, a.Fa.next = a)
        }, hY: function (a) {
            if (!(this.count <= a || this.count < 2 * this.Lz.length)) {
                for (var b = this.JD ? this.Oc.Fa : this.Oc.next, c = {}, d = 0, e = this.Lz.length; d < e; d++) c[this.Lz[d]] = !0;
                for (a = Math.ceil(2 * a / 3); b && this.count > a && (d = this.JD ? b.Fa : b.next, b.key && !c[b.key] && this.cA(b) && this.IH(b.value),
                    b = d, b !== this.Oc && b !== this.qA);) ;
            }
        }, cA: function (a) {
            if (this.xA && !1 == this.xA(a.value)) return !1;
            a.remove();
            delete this.e[a.key];
            this.count -= 1;
            return !0
        }, kX: function (a) {
            this.Oc !== a && (this.xA && console.log("Warnning!!!"), this.cA(a));
            return a.value
        }, clear: function () {
            this.e = {};
            this.Oc = new g.Wf.gq("", null);
            this.Oc.Fa = this.Oc.next = this.Oc;
            this.count = 0
        }
    });
    g.Wf.gq = function (a, b) {
        this.key = a;
        this.value = b
    };
    g.Wf.gq.prototype.Fa = null;
    g.Wf.gq.prototype.next = null;
    g.Wf.gq.prototype.remove = function () {
        this.Fa.next = this.next;
        this.next.Fa = this.Fa;
        this.next = this.Fa = null
    };

    function Fc(a, b, c) {
        this.url = a;
        this.zc = b;
        this.bO = c;
        this.tm = this.hI = !1
    }

    function Gc(a, b, c) {
        var d = Hc;
        return function () {
            return d.call(this, a, b, c)
        }
    }

    function Hc(a, b, c) {
        a.ewa = +new Date;
        a.loaded = b;
        clearTimeout(a.rra);
        var d = a.zma;
        d.Qm.remove(a.url) && d.aba();
        d = a.Sla ? a.ga : a.Ea;
        a.ga = null;
        (c || b || a.bO) && a.zc(b ? d : null, a);
        a.i1 ? (a.i1.Wh(), a.i1 = null) : d && (d.onload = null, d.onerror = null, d.onabort = null, a.Ea = null)
    }

    g.lD = g.Z.extend({
        qua: "assets/image/blank.gif", r: function (a, b, c) {
            this.timeout = b || 15E3;
            this.Dp = new g.Wf(1024);
            this.Qm = new g.Wf(1024);
            this.zZ = a;
            this.ON = c
        }, $J: function (a) {
            a && this.Qm.count >= this.zZ && (a = this.Qm.Oc.Fa.value, a.tm && (this.Qm.remove(a.url), this.pT(a)));
            for (; this.Dp.count && !(this.Qm.count >= this.zZ);) this.D9(this.Dp.shift())
        }, aba: function () {
            if (!this.VT) {
                this.VT = !0;
                var a = this;
                setTimeout(function () {
                    a.VT = !1;
                    a.$J()
                }, 0)
            }
        }, D9: function (a) {
            var b = document.createElement("img");
            a.Cja && (b.crossOrigin = "anonymous");
            b.src = a.url;
            a.Ea = b;
            a.zma = this;
            a.startTime = +new Date;
            a.hI = !0;
            b.complete ? Hc(a, !0) : (this.Qm.set(a.url, a), b.onload = Gc(a, !0), b.onerror = Gc(a, !1, !0), b.onabort = Gc(a, !1), a.rra = setTimeout(Gc(a, !1, !0), this.timeout))
        }, pT: function (a) {
            a.hI && (Hc(a, !1), a.tm = !0, a.eva = !0)
        }, Sxa: function (a, b, c) {
            return this.oH(a.url, b, c, !0, a.oa.z + "_" + a.oa.x + "_" + a.oa.y)
        }, oH: function (a, b, c, d, e) {
            var f = this.Qm.get(a);
            if (f && f.tm) f.tm = !1, f.zc = b, f.bO = c; else {
                f = new Fc(a, b, c);
                f.Sla = d;
                f.key = e;
                if (this.Dp.get(g.a.Ab(f))) return;
                this.Dp.set(g.a.Ab(f),
                    f);
                this.$J(!0)
            }
            return f
        }, tma: function (a, b, c) {
            var d = this.Qm.get(a);
            if (d && d.tm) d.tm = !1, d.zc = b, d.bO = c; else {
                d = new Fc(a, b, c);
                d.Cja = !0;
                if (this.Dp.get(g.a.Ab(d))) return;
                this.Dp.set(g.a.Ab(d), d);
                this.$J(!0)
            }
            return d
        }, hZ: function (a) {
            a.tm || (a.tm = !0, this.Dp.remove(g.a.Ab(a)))
        }, clear: function (a) {
            this.Dp.forEach(function (a) {
                a.tm = !0
            });
            this.Dp.clear();
            if (a) for (; 0 < this.Qm.length;) a = this.Qm.pop(), this.pT(a); else this.Qm.forEach(function (a) {
                a.tm = !0
            })
        }
    });

    function Ic(a, b, c) {
        this.z = a;
        this.x = b;
        this.y = c
    }

    Ic.prototype.ib = function () {
        return new Ic(this.z, this.x, this.y)
    };
    Ic.prototype.toString = function () {
        return this.z + "/" + this.x + "/" + this.y
    };
    g.lb = function (a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
        this.oa = a;
        this.key = a.toString();
        this.pe = b
    };
    g.dq = Ic;
    g.o.lb = g.o.Ec.extend({
        r: function (a, b, c, d, e) {
            arguments.callee.ma.apply(this, arguments);
            this.W("tileSize", a);
            this.W("tiles", a);
            this.Ie(["zooms", "type", "detectRetina", "errorUrl"], a);
            a.sE && (this.W("lang", b, !0), this.W("mapStyle", b, !0), this.W("style", b, !0), this.W("features", b, !0));
            var f = "overlayer" === a.get("type") || !1 === a.get("blend");
            this.ek = !f && !g.l.Y;
            if (g.l.cf || g.l.BAa) this.ek = !1;
            var h = b.get("size"), h = h.width * h.height / 65536;
            this.ia = g.l.Y && g.l.ia && this.get("detectRetina");
            g.l.bd && g.l.Y && 9 < h && (this.ek =
                !1);
            this.yi = !f && !a.Mj;
            this.zi = !f && !a.Mj;
            this.EI = c;
            this.W("reload", a);
            a.Ola ? this.W("createTile", a) : this.W("tileFun", a);
            this.Oe = d;
            this.bP = e
        }, langChanged: function () {
            this.set("reload");
            this.X.Jr()
        }, styleChanged: function () {
            this.e.Ac || (this.set("reload"), this.X.Jr())
        }, featuresChanged: function () {
            this.set("reload");
            this.X.Jr()
        }, reloadChanged: function () {
            this.set("display", 0)
        }, tileFunChanged: function () {
            var a = this.EI || this.get("tileFun");
            this.yn = function (b, c, d) {
                var e = a(b.oa.x, b.oa.y, b.oa.z);
                if (!b.pr || b.pr.tm) b.loaded =
                    !1, b.pr = ("3D" === this.e.C.view.type ? g.Al.tma : g.Al.oH).call(g.Al, e, function (a) {
                    b.pr = null;
                    a ? c(a) : d()
                }, !1)
            }
        }, createTileChanged: function () {
            this.X.B = !0;
            var a = this.X.getCreateTile();
            this.X.B = !1;
            this.yn = function (b, c, d) {
                a.call(this.j.X, b.oa.x, b.oa.y, b.oa.z, c, d, b)
            };
            this.set("reload")
        }, xl: function () {
            var a = this.X.get("zooms", null, !0);
            this.X.Nla && (a = [Math.min(a[0], 18), Math.min(a[1], 18)]);
            return {
                od: this.X.get("tileSize"),
                visible: this.X.get("visible"),
                H: this.nO(),
                qd: a,
                HF: this.ek,
                yi: this.yi,
                zi: this.zi,
                opacity: this.X.get("opacity"),
                yn: this.X.get("createTile"),
                Kn: this.EI || this.X.get("tileFun"),
                bd: this.X.vp ? !1 : this.X.get("detectRetina") && g.l.ia && g.l.Y,
                Bd: this.fp()
            }
        }, vm: function (a) {
            if (g.O.Wd.ti) return new g.O.Wd.ti(this, a)
        }
    });
    g.Al = new g.lD(6, null);
    g.o.Tc = g.o.Ec.extend({
        r: function (a, b) {
            this.nb = Math.min(2, window.devicePixelRatio || 1);
            this.bd = g.l.ia && !a.Yi;
            this.map = b;
            this.Tp = 0;
            this.yl = !1;
            this.Pf = this.ef = 0;
            this.Eg = [];
            arguments.callee.ma.apply(this, arguments);
            this.eu = [];
            this.pl = new g.o.k6;
            a && (this.W("style", a), this.W("cursor", a, !0), this.Pqa = a.get("stable") || !1, this.W("dataSources", a), this.W("bubble", a));
            this.W("display", b);
            this.i8()
        }, xl: function () {
            return {
                visible: this.get("visible"),
                qd: this.get("zooms"),
                opacity: this.get("opacity"),
                zIndex: this.get("zIndex"),
                tw: this.X.get("alwaysRender") || !1,
                Bd: this.fp()
            }
        }, dataSourcesChanged: function () {
            var a = this.get("dataSources");
            a && a.length ? "string" === typeof a ? (new g.fb.sb(a)).h("complete", function (a) {
                this.E2(a.data);
                this.Vq = a.data;
                this.yl = !0;
                this.set("display");
                this.La = !0;
                this.X.q("complete")
            }, this) : a.length && (this.E2(a), this.Vq = a, this.yl = !0, this.set("display"), this.La = !0, this.X.q("complete")) : this.clear()
        }, getDatas: function () {
            return this.Vq
        }, jsa: function () {
            if (this.X.Yi) {
                var a = this.Il;
                this.ef = a.ef;
                this.Pf = a.Pf
            }
        },
        ka: function (a, b) {
            var c = {type: a, data: "mouseout" === a ? this.Yaa || null : b.Vs.bb, target: this.X};
            this.Yaa = "mouseout" === a ? null : b.Vs.bb;
            this.X.q(a, c)
        }, sc: function (a) {
            this.ka(a.type, a)
        }, i8: function () {
            this.h("click", this.sc);
            this.h("dblclick", this.sc);
            this.h("mousedown", this.sc);
            this.h("mouseup", this.sc);
            this.h("mouseover", this.sc);
            this.h("mouseout", this.sc);
            this.h("touchstart", this.sc);
            this.h("touchend", this.sc)
        }, ava: function () {
            this.I("click", this.sc);
            this.I("dblclick", this.sc);
            this.I("mousedown", this.sc);
            this.I("mouseup",
                this.sc);
            this.I("mouseover", this.sc);
            this.I("mouseout", this.sc);
            this.I("touchstart", this.sc);
            this.I("touchend", this.sc)
        }, styleChanged: function () {
            this.Il = this.get("style");
            this.jsa();
            this.set("display", 0)
        }, E2: function (a) {
            if (a) {
                this.clear();
                for (var b = 0; b < a.length; b += 1) {
                    var c = a[b].lnglat;
                    a[b].lnglat = g.a.Ha(c);
                    c = this.map.Vb(c);
                    c = new g.Gh({name: "point-" + g.a.Ab(this), ea: new g.ya.kg([c.x, c.y], !0)});
                    c.wq = this;
                    c.bb = a[b];
                    this.yF(c)
                }
            }
        }, tka: function (a) {
            if ("geojson" === a) return new g.p6({map: this.map});
            if ("topjson" ===
                a) return new g.Nta({map: this.map});
            if ("subway" === a) return new g.Ita({map: this.map})
        }, uoa: function (a) {
            if (a) {
                var b = [], b = [], c = {};
                if (a.rules) {
                    for (var b = a.rules, d = 0, e = b.length; d < e; d += 1) {
                        for (var f = [], h = b[d].symbolizers, k = 0, l = h.length; k < l; k += 1) h[k].fill && (f[k] = new g.style.lg.vS(h[k].fill)), h[k].stroke && (f[k] = new g.style.lg.VS(h[k].stroke));
                        h = f;
                        b[d].BI = h;
                        b[d] = new g.style.a7(b[d])
                    }
                    c.rules = b
                }
                if (a.symbolizers) {
                    b = a.symbolizers;
                    a = 0;
                    for (d = b.length; a < d; a += 1) b[a].fill && (b[a] = new g.style.lg.vS(b[a].fill)), b[a].stroke &&
                    (b[a] = new g.style.lg.VS(b[a].stroke));
                    c.BI = b
                }
                a = new g.zJ(c)
            } else a = new g.zJ({});
            this.set("style", a);
            return a
        }, Yua: function (a, b) {
            var c = new g.fb.sb(a);
            c.h("complete", function (c) {
                c = this.ga[a] = this.tka(b).CQ(c);
                this.qw(c);
                this.ka("complete")
            }, this);
            c.h("error", this.Yb, this)
        }, Woa: function (a) {
            "px" === a.target.get("unit") ? (this.ef = Math.max(a.Kk, this.ef), this.Pf = Math.max(a.Kk, this.Pf)) : a.Kk > this.wr && (this.wr = a.Kk, this.Ax = this.wr / this.map.C.Oi.gp(20))
        }, yF: function (a) {
            this.pl.add(a);
            if (!this.VA && !this.X.Yi) {
                if (0 ===
                    a.name.indexOf("circle") || 0 === a.name.indexOf("ellipse")) {
                    a.h("rad", this.Woa, this);
                    var b = a.get("radius");
                    b.length && (b = Math.max.apply(null, b));
                    "px" === a.get("unit") ? (this.ef = Math.max(b, this.ef), this.Pf = Math.max(b, this.Pf)) : this.wr ? b > this.wr && (this.wr = b, this.Ax = this.wr / this.map.C.Oi.gp(20)) : (this.wr = b, this.Ax = this.wr / this.map.C.Oi.gp(20))
                }
                b = a.get("strokeWeight") || 0;
                if (!this.Bx || b > this.Bx) this.Bx = b
            }
            this.Pqa || a.W("feature", this, !0)
        }, qw: function (a) {
            this.yl = !0;
            for (var b = 0, c = a.length; b < c; b += 1) this.yF(a[b])
        },
        clear: function () {
            this.yl = !0;
            this.Vq = [];
            this.pl.clear();
            this.set("display", 0)
        }, Cm: function (a) {
            var b, c;
            b = this.pl.Cm([a[0] + g.a.za, a[1], a[2] + g.a.za, a[3]]);
            c = this.pl.Cm([a[0] - g.a.za, a[1], a[2] - g.a.za, a[3]]);
            a = this.pl.Cm(a);
            return g.extend(a, g.extend(b, c))
        }, Pwa: function (a) {
            var b, c = this.get("style"), d = a.Mk;
            c instanceof g.zJ || (c = this.uoa(c));
            if (d && 0 < d.length) b = c.DZ(d, a); else {
                if (c.L3.length || c.Mk.length) b = c.$ha(a);
                b || (b = a.$ja())
            }
            return b
        }, MO: function (a) {
            function b(a, b) {
                return a.ql - b.ql
            }

            var c = [], d, e, f, h, k, l =
                {};
            for (d in a) if (a.hasOwnProperty(d)) {
                f = a[d];
                h = f.get("zIndex");
                for (e in l) if (l.hasOwnProperty(e) && (k = c[l[e]][2], k === h)) break;
                "undefined" === typeof l[h] && (c.push([[], [], h]), l[h] = c.length - 1);
                h = c[l[h]];
                h[0].push(f)
            }
            c.sort(this.Lqa);
            a = 0;
            for (d = c.length; a < d; a += 1) c[a][0].sort(b);
            return c
        }, featureChanged: function (a) {
            this.yl = !0;
            var b = a.target, c = b.lc();
            0 !== this.pl.eka([g.a.Ab(b)]).length && (this.pl.remove(b, a.gu), c && !a.ria && this.pl.add(b))
        }, n3: function (a) {
            this.yl = !0;
            for (var b, c = 0, d = a.length; c < d; c += 1) b = a[c], b.ea.gu =
                null, b.ar(!0), b.Pk("feature")
        }, Oza: function (a, b) {
            return a[1].zIndex === b[1].zIndex ? g.a.Ab(a[1]) - g.a.Ab(b[1]) : a[1].zIndex - b[1].zIndex
        }, Lqa: function (a, b) {
            return a[2] - b[2]
        }, Aza: function (a) {
            return a.Vwa() === g.o.Rta.Cta
        }, vm: function (a) {
            return this.VA ? new g.O.re.Wk(this, a) : "c" === this.map.get("overlayRender") && g.O.canvas.Wk ? new g.O.canvas.Wk(this, a) : g.O.Wd.Wk && "d" === this.map.get("overlayRender") ? new g.O.Wd.Wk(this, a) : null
        }
    });
    g.o.Tc.wb({
        wm: function (a) {
            return this.VA ? new g.Ga.re.Wk(this, a) : this.X.Yi ? new g.Ga.L6(this, a) : new g.Ga.Wk(this, a)
        }
    });
    g.o.k6 = g.Z.extend({
        r: function () {
            this.clear()
        }, clear: function () {
            this.jp = [];
            this.yQ = new g.dk
        }, add: function (a) {
            var b = g.a.Ab(a), c = a.lc();
            this.jp[b] || (this.count += 1, this.jp[b] = a, c && !g.H.cb(c.jd(), [Infinity, Infinity, -Infinity, -Infinity]) && this.yQ.lx(c.jd(), a))
        }, Kwa: function () {
            return this.jp
        }, Cm: function (a) {
            return this.yQ.Zpa(a)
        }, eka: function (a) {
            var b = a.length, c = [], d;
            for (d = 0; d < b; d += 1) this.jp[a[d]] && c.push(this.jp[a[d]]);
            return c
        }, remove: function (a, b) {
            var c = g.a.Ab(a).toString(), d = a.lc();
            this.jp[c] && (this.jp[c] =
                null, d && (c = "undefined" !== typeof b ? b : d.jd(), this.yQ.remove(c, a)))
        }
    });
    g.dk = g.Z.extend({
        r: function (a) {
            this.N1 = "undefined" !== typeof a ? a : 6;
            this.vH = Math.floor(this.N1 / 2);
            this.mI = {H: [Infinity, Infinity, -Infinity, -Infinity], Db: []};
            this.count = 0
        }, gha: function (a, b) {
            var c = -1, d = [], e;
            d.push(b);
            var f = b.Db;
            do {
                -1 !== c && (d.push(f[c]), f = f[c].Db, c = -1);
                for (var h = f.length - 1; 0 <= h; h -= 1) {
                    var k = f[h];
                    if ("undefined" !== typeof k.Me) {
                        c = -1;
                        break
                    }
                    var l = g.dk.ay(k.H[2] - k.H[0], k.H[3] - k.H[1], k.Db.length + 1),
                        k = g.dk.ay((k.H[2] > a.H[2] ? k.H[2] : a.H[2]) - (k.H[0] < a.H[0] ? k.H[0] : a.H[0]), (k.H[3] > a.H[3] ? k.H[3] : a.H[3]) -
                            (k.H[1] < a.H[1] ? k.H[1] : a.H[1]), k.Db.length + 2);
                    if (0 > c || Math.abs(k - l) < e) e = Math.abs(k - l), c = h
                }
            } while (-1 !== c);
            return d
        }, lx: function (a, b, c) {
            a = {H: a, Me: b};
            "undefined" !== typeof c && (a.type = c);
            this.P0(a, this.mI);
            this.count += 1
        }, P0: function (a, b) {
            var c;
            if (0 === b.Db.length) b.H = g.H.ib(a.H), b.Db.push(a); else {
                var d = this.gha(a, b), e = a;
                do {
                    if (c && "undefined" !== typeof c.Db && 0 === c.Db.length) {
                        var f = c;
                        c = d.pop();
                        for (var h = 0, k = c.Db.length; h < k; h += 1) if (c.Db[h] === f || 0 === c.Db[h].Db.length) {
                            c.Db.splice(h, 1);
                            break
                        }
                    } else c = d.pop();
                    f =
                        e instanceof Array;
                    if ("undefined" !== typeof e.Me || "undefined" !== typeof e.Db || f) {
                        if (f) {
                            f = 0;
                            for (h = e.length; f < h; f += 1) g.H.extend(c.H, e[f].H);
                            c.Db = c.Db.concat(e)
                        } else g.H.extend(c.H, e.H), c.Db.push(e);
                        if (c.Db.length <= this.N1) if (0 < d.length) e = {H: g.H.ib(c.H)}; else break; else e = f = this.nma(c.Db), 1 > d.length && (c.Db.push(f[0]), d.push(c), e = f[1])
                    } else g.H.extend(c.H, e.H), e = {H: g.H.ib(c.H)}
                } while (0 < d.length)
            }
        }, nma: function (a) {
            for (var b = this.xoa(a); 0 < a.length;) this.yoa(a, b[0], b[1]);
            return b
        }, xoa: function (a) {
            for (var b =
                a.length - 1, c = 0, d = a.length - 1, e = 0, f = a.length - 2; 0 <= f; f -= 1) {
                var h = a[f];
                h.H[0] > a[c].H[0] ? c = f : h.H[2] < a[b].H[1] && (b = f);
                h.H[1] > a[e].H[1] ? e = f : h.H[3] < a[d].H[3] && (d = f)
            }
            Math.abs(a[b].H[2] - a[c].H[0]) > Math.abs(a[d].H[3] - a[e].H[1]) ? b > c ? (b = a.splice(b, 1)[0], c = a.splice(c, 1)[0]) : (c = a.splice(c, 1)[0], b = a.splice(b, 1)[0]) : d > e ? (b = a.splice(d, 1)[0], c = a.splice(e, 1)[0]) : (c = a.splice(e, 1)[0], b = a.splice(d, 1)[0]);
            return [{H: g.H.ib(b.H), Db: [b]}, {H: g.H.ib(c.H), Db: [c]}]
        }, yoa: function (a, b, c) {
            for (var d = g.dk.ay(b.H[2] - b.H[0], b.H[3] - b.H[1],
                b.Db.length + 1), e = g.dk.ay(c.H[2] - c.H[0], c.H[3] - c.H[1], c.Db.length + 1), f, h, k, l = a.length - 1; 0 <= l; l -= 1) {
                var m = a[l],
                    n = [b.H[0] < m.H[0] ? b.H[0] : m.H[0], b.H[2] > m.H[2] ? b.H[2] : m.H[2], b.H[1] < m.H[1] ? b.H[1] : m.H[1], b.H[3] > m.H[3] ? b.H[3] : m.H[3]],
                    n = Math.abs(g.dk.ay(n[1] - n[0], n[3] - n[2], b.Db.length + 2) - d),
                    m = [c.H[0] < m.H[0] ? c.H[0] : m.H[0], c.H[2] > m.H[2] ? c.H[2] : m.H[2], c.H[1] < m.H[1] ? c.H[1] : m.H[1], c.H[3] > m.H[3] ? c.H[3] : m.H[3]],
                    m = Math.abs(g.dk.ay(m[1] - m[0], m[3] - m[2], c.Db.length + 2) - e), p = Math.abs(m - n);
                if (!h || !f || p < f) h = l, f = p, k = m < n ? c :
                    b
            }
            d = a.splice(h, 1)[0];
            b.Db.length + a.length + 1 <= this.vH ? (b.Db.push(d), g.H.extend(b.H, d.H)) : c.Db.length + a.length + 1 <= this.vH ? (c.Db.push(d), g.H.extend(c.H, d.H)) : (k.Db.push(d), g.H.extend(k.H, d.H))
        }, remove: function (a, b) {
            var c = [];
            c[0] = {H: a};
            (c[1] = b) || (c[1] = !1);
            c[2] = this.mI;
            this.count -= 1;
            if (!1 === c[1]) {
                var d = 0, e = [];
                do d = e.length, e = e.concat(this.s3.apply(this, c)); while (d !== e.length);
                return e
            }
            return this.s3.apply(this, c)
        }, s3: function (a, b, c) {
            var d = [], e = [], f = [];
            if (!a || !g.H.yg(a.H, c.H)) return f;
            a = g.H.ib(a.H);
            var h;
            e.push(c.Db.length);
            d.push(c);
            do {
                c = d.pop();
                var k = e.pop() - 1;
                if ("undefined" !== typeof b) for (; 0 <= k;) {
                    var l = c.Db[k];
                    if (g.H.yg(a, l.H)) if (b && "undefined" !== typeof l.Me && l.Me === b || !b && ("undefined" !== typeof l.Me || g.H.AZ(a, l.H))) {
                        "undefined" !== typeof l.Db ? (f = this.Wx(l, !0, [], l), c.Db.splice(k, 1)) : f = c.Db.splice(k, 1);
                        g.dk.IQ(c);
                        b = void 0;
                        c.Db.length < this.vH && (h = this.Wx(c, !0, [], c));
                        break
                    } else "undefined" !== typeof l.Db && (e.push(k), d.push(c), c = l, k = l.Db.length);
                    k -= 1
                } else if ("undefined" !== typeof h) {
                    c.Db.splice(k + 1, 1);
                    0 < c.Db.length && g.dk.IQ(c);
                    k = 0;
                    for (l = h.length; k < l; k += 1) this.P0(h[k], c);
                    h.length = 0;
                    0 === d.length && 1 >= c.Db.length ? (h = this.Wx(c, !0, h, c), c.Db.length = 0, d.push(c), e.push(1)) : 0 < d.length && c.Db.length < this.vH ? (h = this.Wx(c, !0, h, c), c.Db.length = 0) : h = void 0
                } else g.dk.IQ(c)
            } while (0 < d.length);
            return f
        }, search: function (a, b) {
            return this.Wx({H: a}, !1, [], this.mI, b)
        }, Zpa: function (a, b) {
            return this.Wx({H: a}, !1, [], this.mI, b, !0)
        }, Wx: function (a, b, c, d, e, f) {
            var h = {}, k = [];
            if (!g.H.yg(a.H, d.H)) return f ? h : c;
            k.push(d.Db);
            do {
                d = k.pop();
                for (var l = d.length - 1; 0 <= l; l -= 1) {
                    var m = d[l];
                    if (g.H.yg(a.H, m.H)) if ("undefined" !== typeof m.Db) k.push(m.Db); else if ("undefined" !== typeof m.Me) if (b) c.push(m); else if ("undefined" === typeof e || m.type === e) m = m.Me, "undefined" !== typeof f ? h[g.a.Ab(m)] = m : c.push(m)
                }
            } while (0 < k.length);
            return "undefined" !== typeof f ? h : c
        }
    });
    g.dk.IQ = function (a) {
        var b = a.Db.length, c = a.H;
        if (0 === b) g.H.empty(c); else {
            var d = a.Db[0].H;
            c[0] = d[0];
            c[2] = d[2];
            c[1] = d[1];
            c[3] = d[3];
            for (d = 1; d < b; d += 1) g.H.extend(c, a.Db[d].H)
        }
    };
    g.dk.ay = function (a, b, c) {
        var d = (a + b) / 2;
        a *= b;
        return a * c / (a / (d * d))
    };
    g.A = g.A || {};
    g.A.Jh = g.Z.extend({
        ha: [g.ra, g.Ge], eoa: ["position", "altitude", "visible", "clickable", "bubble"], r: function (a, b) {
            this.map = b;
            this.Ie(this.eoa, a);
            this.W("zIndex", a);
            this.W("draggable", a);
            g.l.sf && this.p8();
            g.l.Y || this.SJ();
            this.Ub = a;
            this.Ub.A = this
        }, draggableChanged: function () {
            this.get("draggable") ? this.RJ() : this.DL()
        }, ka: function (a, b) {
            var c;
            c = b ? {type: a, pixel: b.xb, target: this.Ub, lnglat: b.ig} : {type: a};
            this.Ub && this.Ub.q(a, c)
        }, sc: function (a) {
            ("click" !== a.type && "rightclick" !== a.type && "dblclick" !== a.type && "longclick" !==
                a.type || this.get("clickable")) && this.ka(a.type, a)
        }, QJ: function () {
            this.h("click", this.sc);
            this.h("rightclick", this.sc);
            this.h("longclick", this.sc);
            this.h("longpress", this.sc);
            this.h("dblclick", this.sc)
        }, jY: function () {
            this.I("click", this.sc);
            this.I("rightclick", this.sc);
            this.I("longclick", this.sc);
            this.I("longpress", this.sc);
            this.I("dblclick", this.sc)
        }, SJ: function () {
            this.get("clickable") && this.QJ();
            this.h("mousemove", this.sc);
            this.h("mouseout", this.sc);
            this.h("mouseover", this.sc);
            this.h("mousedown",
                this.sc);
            this.h("mouseup", this.sc)
        }, bva: function () {
            this.jY();
            this.I("mousemove", this.sc);
            this.I("mouseout", this.sc);
            this.I("mouseover", this.sc);
            this.I("mousedown", this.sc);
            this.I("mouseup", this.sc)
        }, clickableChanged: function () {
            this.get("clickable") ? this.QJ() : this.jY()
        }, p8: function () {
            this.get("clickable") && this.QJ();
            this.h("touchstart", this.sc, this);
            this.h("touchmove", this.sc, this);
            this.h("touchend", this.sc, this)
        }, RJ: function () {
            this.h("dragstart", this.Ls);
            this.h("dragging", this.Js);
            this.h("dragend",
                this.Ks)
        }, Ls: function (a) {
            this.map.KP(a);
            this.Lf = a.xb;
            this.m1 = a.Ma;
            this.l1 = a.ig;
            this.ka("dragstart", a)
        }, Js: function (a) {
            var b = this.map.C.view.type;
            if ("2D" == b) {
                var c = a.xb.Ya(this.Lf), b = c.x, c = c.y;
                this.Lf = a.xb;
                var d = this.map.get("rotation") * Math.PI / 180, e = b * Math.cos(d) + Math.sin(d) * c,
                    b = -Math.sin(d) * b + Math.cos(d) * c;
                this.zr(new g.G(e, b));
                this.ka("dragging", a)
            } else "3D" == b && a.Ma && (c = a.xb.Ya(this.Lf), b = c.x, c = c.y, e = a.Ma.Ya(this.m1), a.ig.Ya(this.l1), this.Lf = a.xb, "function" === typeof this.IB && this.IB(b, c, e), this.m1 =
                a.Ma, this.l1 = a.ig, this.ka("dragging", a))
        }, Ks: function (a) {
            this.map.Nu();
            this.ka("dragend", a)
        }, DL: function () {
            this.I("dragstart", this.Ls);
            this.I("dragging", this.Js);
            this.I("dragend", this.Ks)
        }, GK: function (a) {
            var b, c, d = [];
            if (a) for (b = 0, c = a.length; b < c; b += 1) d.push(this.HK(a[b]));
            return d
        }, HK: function (a) {
            a = this.map.Vb(a);
            return [a.x, a.y]
        }, Of: function (a) {
            var b = this.M.gb || this.map.get("centerCoords"), c = Math.pow(2, 20 - this.map.get("zoom"));
            return [(a[0] - b.x) / c, (a[1] - b.y) / c]
        }, MK: function (a, b) {
            for (var c = this.map.C,
                     d = [], e = 0, f = a.length; e < f; e++) {
                var h = c.Vb(a[e]);
                h.x += b[0];
                h.y += b[1];
                d.push(c.Ee(h))
            }
            return d
        }
    });
    g.A.ob = g.A.Jh.extend({
        XB: "content contentDom icon opacity angle autoRotation offset textAlign verticalAlign shadow title label isTop shape topWhenClick topWhenMouseOver noSelect anchor".split(" "),
        ega: {
            AMAP_ANIMATION_NONE: !1,
            AMAP_ANIMATION_DROP: g.ij.Easing.Bounce,
            AMAP_ANIMATION_BOUNCE: g.ij.Easing.Cubic
        },
        r: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.Ie(this.XB, a);
            this.W("move", a);
            this.Nga();
            this.it();
            this.set("AnimationOffset", new g.G(0, 0), !0);
            this.W("raiseOnDrag", a);
            this.W("animation",
                a)
        },
        XK: function (a, b, c) {
            var d = this.get("animation");
            if (d && "AMAP_ANIMATION_NONE" !== d) {
                var e = this;
                this.Mm = new g.ij;
                this.Mm.transition = function (c, h, k) {
                    if ("AMAP_ANIMATION_NONE" === d) return 0;
                    if (a && 600 <= k) return e.Mm.stop(), 0;
                    c = 0 === Math.floor(k / 600) % 2 ? "Out" : "In";
                    "out" === b ? c = "Out" : "in" === b && (c = "In");
                    return e.ega[d][c](k % 600 / 600)
                };
                c = c || 40;
                this.Mm.yp = function (a) {
                    e.set("AnimationOffset", e.FL.add(new g.G(0, -1 * c * a)))
                };
                this.FL = new g.G(0, 0);
                this.Mm.Rm()
            }
        },
        AnimationOffsetChanged: function () {
            this.positionChanged()
        },
        rX: function () {
            this.Mm && (this.Mm.stop(), this.set("AnimationOffset", this.FL));
            this.set("AnimationOffset", new g.G(0, -40));
            if (this.bq) this.bq.set("position", this.get("position")); else {
                var a = new C.A.ob({
                    zIndex: this.get("zIndex") - 1,
                    icon: new C.A.Ih({
                        image: g.w.vb + "/theme/v1.3/dragCross.png",
                        size: new g.md(14, 11),
                        innerOverlay: !0
                    }),
                    offset: new g.G(-4, -5),
                    position: this.get("position"),
                    innerOverlay: !0
                });
                a.wa = !0;
                this.bq = a
            }
            this.bq.B = !0;
            this.bq.setMap(this.map.C);
            this.bq.B = !1
        },
        pU: function () {
            this.set("animation", "AMAP_ANIMATION_DROP",
                !0);
            this.XK(!0, "in");
            this.bq.B = !0;
            this.bq.B = !1
        },
        animationChanged: function () {
            this.Mm && (this.Mm.stop(), this.set("AnimationOffset", this.FL), this.Mm = null);
            var a = this.get("animation");
            a && "AMAP_ANIMATION_NONE" !== a && ("AMAP_ANIMATION_DROP" === a ? this.XK(!0, "in", 100) : this.XK())
        },
        Og: function () {
            this.bq && this.bq.set("position", this.get("position"))
        },
        raiseOnDragChanged: function () {
            this.get("raiseOnDrag") ? (this.h("dragstart", this.rX, this), this.h("dragging", this.Og, this), this.h("dragend", this.pU, this)) : (this.I("dragstart",
                this.rX, this), this.I("dragging", this.Og, this), this.I("dragend", this.pU, this))
        },
        zr: function (a) {
            var b = this.get("position");
            a = this.map.Vb(b).add(a.Nd(Math.pow(2, 20 - this.map.get("zoom"))));
            b instanceof g.T ? this.set("position", this.map.Ee(a)) : this.set("position", a)
        },
        IB: function (a, b) {
            var c = this.get("position"), d = this.get("altitude"), c = this.map.sr(c, d),
                d = this.map.So(new g.G(c.x + a, c.y + b), null, d);
            this.set("position", d)
        },
        Nga: function () {
            var a = this.get("content"), b = this.get("shadow"), c = this.get("offset"), d = this.get("label"),
                a = a ? this.VY(a, c) : this.UM(this.get("icon"), c);
            this.set("contentDom", a, !0);
            b && (b = this.aZ(b, c), this.set("shadowDom", b, !0));
            d && d.content && this.set("labelDom", this.VM(d.content), !0)
        },
        VM: function (a) {
            var b = document.createElement("div");
            b.className = "amap-marker-label";
            b.innerHTML = a;
            return b
        },
        it: function () {
            var a = this.get("position");
            if (this.map && a && !this.M) {
                var b = this.map, a = this.map.Vb(a),
                    a = this.M = new g.Gh({name: "marker-" + g.a.Ab(this), map: b, ea: new g.ya.kg([a.x, a.y])});
                a.Mo = this.Ub.CLASS_NAME;
                a.wq = this;
                this.W("coords",
                    a, !0);
                a.Ie("offset textAlign verticalAlign isTop zIndex params noSelect".split(" "), this)
            }
        },
        getParams: function () {
            return {
                zIndex: this.get("zIndex"),
                uw: this.get("angle"),
                tg: this.get("contentDom"),
                k1: this.get("labelDom"),
                f4: this.get("shadowDom"),
                opacity: this.get("opacity"),
                altitude: this.get("altitude"),
                title: this.get("title"),
                label: this.get("label"),
                dD: this.get("AnimationOffset"),
                verticalAlign: this.get("verticalAlign"),
                textAlign: this.get("textAlign"),
                offset: this.get("offset"),
                f1: this.get("isTop"),
                shape: this.get("shape"),
                visible: this.get("visible") && !this.Ub.get("outOfZooms"),
                anchor: this.get("anchor")
            }
        },
        offsetChanged: function () {
            function a(a) {
                var c = b.get("offset"), f = b.get("AnimationOffset"), h = b.get("verticalAlign"),
                    k = b.get("textAlign"), l = Math.round(a.x) + c.x + f.x;
                a = Math.round(a.y) + c.y + f.y;
                var f = b.get("anchor"), m = g.g.fr(b.M.tg), c = m[0], m = m[1];
                f && (f = f.split("-"), 2 === f.length ? (k = f[1], h = f[0]) : 1 === f.length && "center" === f[0] && (k = "center", h = "middle"));
                switch (k) {
                    case "center":
                        l -= c / 2;
                        break;
                    case "right":
                        l -= c
                }
                switch (h) {
                    case "middle":
                        a -=
                            m / 2;
                        break;
                    case "bottom":
                        a -= m
                }
                b.M.ca.style.left = l + "px";
                b.M.ca.style.top = a + "px"
            }

            if (this.M && this.M.ca) {
                var b = this, c = this.map.C.view.type;
                "2D" == c ? (c = this.map.Vb(this.get("position")), c = c.Ya(this.M.Ca).Wc(Math.pow(2, 20 - this.map.get("zoom"))), this.M.ca && (this.M.ca.Uz && this.M.ca.parentNode !== this.M.ca.Uz ? this.map.set("display") : a(c))) : "3D" == c && (c = this.get("position"), c = this.map.sr(c, this.get("altitude")), this.M.ca && (this.M.ca.Uz && this.M.ca.parentNode !== this.M.ca.Uz ? this.map.set("display") : a(c)))
            } else this.map.set("display")
        },
        altitudeChanged: function () {
            this.offsetChanged()
        },
        positionChanged: function () {
            if (this.M) {
                var a = this.map.Vb(this.get("position"));
                this.set("coords", [a.x, a.y]);
                this.map && (this.M.U6 = !0, this.offsetChanged())
            }
        },
        anchorChanged: function () {
            this.HD()
        },
        textAlignChanged: function () {
            this.HD()
        },
        verticalAlignChanged: function () {
            this.HD()
        },
        HD: function () {
            this.M && (this.M.eg = !0, this.map && (this.map.Ad.Em = !0, this.map.set("display")))
        },
        contentChanged: function () {
            if (this.M) {
                this.map.Ad.Em = !0;
                -1 === g.a.indexOf(this.map.Ad.Eg,
                    this.M) && this.map.Ad.Eg.push(this.M);
                var a = this.get("contentDom");
                this.M.ca && this.M.ca === a.parentNode && this.M.ca.removeChild(a);
                var a = this.get("content"), b = this.get("offset"), a = this.VY(a, b);
                this.set("contentDom", a);
                this.M.ca && (g.l.Wi && g.a.iepngFix(a), this.M.ca.appendChild(a), this.M.tg = a);
                this.map && this.map.set("display")
            }
        },
        iconSizeChanged: function (a) {
            this.offsetChanged(a)
        },
        iconChanged: function () {
            if (this.M && this.M.ca && !this.get("content")) {
                this.map.Ad.Em = !0;
                -1 === g.a.indexOf(this.map.Ad.Eg, this.M) &&
                this.map.Ad.Eg.push(this.M);
                this.M.ca && this.get("contentDom") && this.M.ca.removeChild(this.get("contentDom"));
                var a = this.get("icon"), b = this.get("offset"), a = this.UM(a, b);
                this.set("contentDom", a);
                this.M.ca ? (g.l.Wi && g.a.iepngFix(a), this.M.ca.appendChild(a), this.M.tg = a) : this.map && this.map.set("display")
            }
        },
        shadowChanged: function () {
            if (this.M && this.M.ca) {
                var a = this.get("shadowDom");
                this.M.ca && a && a.parentNode === this.M.ca && this.M.ca.removeChild(a);
                if (a = this.get("shadow")) {
                    var b = this.get("offset"), a = this.aZ(a,
                        b);
                    this.set("shadowDom", a);
                    this.M.ca && this.M.ca.appendChild(a)
                }
            }
        },
        titleChanged: function () {
            this.M && this.M.tg && "string" === typeof this.get("title") && this.M.tg && this.get("title") && (this.M.tg.title = this.get("title"))
        },
        labelChanged: function (a) {
            a = a || this.get("label");
            if (this.M && this.M.ca) {
                var b = this.M.ca, c = this.get("labelDom");
                c && c.parentNode === b && b.removeChild(c);
                if (a && a.content) {
                    c = "";
                    if (a.content) {
                        var c = this.VM(a.content), d = 0, e = 0;
                        a.offset && (d = a.offset.y + "px", e = a.offset.x + "px");
                        c.style.top = d;
                        c.style.left =
                            e;
                        b.appendChild(c)
                    }
                    this.set("labelDom", c)
                }
            } else a && a.content ? this.set("labelDom", this.VM(a.content), !0) : this.set("labelDom", null)
        },
        isTopChanged: function () {
            var a = this.map.Ad.GI, b = this.get("isTop"), c = this.get("zIndex");
            a ? a === this ? this.M && this.M.ca && (this.M.ca.style.zIndex = b ? this.map.Ad.Tp + 10 : c, this.map.Ad.GI = b ? this : null) : (a.M && a.M.ca && (a.M.ca.style.zIndex = b ? a.get("zIndex") : this.map.Ad.Tp + 10), this.M && this.M.ca && (this.M.ca.style.zIndex = b ? this.map.Ad.Tp + 10 : c), this.map.Ad.GI = b ? this : a) : (this.map.Ad.GI = this,
            this.M && this.M.ca && (this.M.ca.style.zIndex = b ? this.map.Ad.Tp + 10 : c))
        },
        visibleChanged: function () {
            this.M && this.M.ca && (this.get("visible") && !this.Ub.get("outOfZooms") ? this.M.ca.style.display = "block" : this.M.ca.style.display = "none")
        },
        Xna: function () {
            this.visibleChanged()
        },
        angleChanged: function () {
            if (!g.l.cf && this.M && this.M.ca) {
                var a = this.M, b = a.get("params"), c = b.textAlign, d = b.verticalAlign, e = b.offset, b = e.x,
                    e = e.y;
                this.HD();
                if ("AMap.Text" == a.Mo) {
                    var e = b = 0, f = g.g.fr(a.tg), a = f[0], f = f[1];
                    switch (c) {
                        case "center":
                            b =
                                a / 2;
                            break;
                        case "right":
                            b = a
                    }
                    switch (d) {
                        case "middle":
                            e = f / 2;
                            break;
                        case "bottom":
                            e = f
                    }
                } else b = -b, e = -e;
                g.g.rotate(this.M.ca, this.get("angle") || 0, {x: b, y: e})
            }
        },
        zIndexChanged: function () {
            var a = this.get("zIndex");
            if (a > this.map.Ad.Tp) {
                this.map.Ad.Tp = a;
                var b = this.map.Ad.GI;
                b && b.M && b.M.ca && (b.M.ca.style.zIndex = a + 10)
            }
            this.M && this.M.ca && (this.M.ca.style.zIndex = this.get("isTop") ? this.map.Ad.Tp + 10 : this.get("zIndex"))
        },
        opacityChanged: function () {
            var a = this.get("contentDom"), b = this.get("shadowDom");
            a && g.g.Kp(a, this.get("opacity"));
            b && g.g.Kp(b, this.get("opacity"))
        },
        VY: function (a) {
            var b;
            b = document.createElement("div");
            b.className = "amap-marker-content";
            "string" !== typeof a ? b.appendChild(a) : (b.innerHTML = a, b.childNodes[0] && !b.childNodes[0].style && (b.style["white-space"] = "pre"));
            g.g.Kp(b, this.get("opacity"));
            return b
        },
        UM: function (a, b, c) {
            var d = 0, e = 0, f, h, k, l, m = this;
            a ? ("string" === typeof a ? (b = a, l = !0) : (b = a.get("image"), c = a.get("size"), f = a.get("imageSize"), d = c.width, e = c.height, f && (h = f.width, k = f.height)), !d && c && c.width && (d = c.width), !e &&
            c && c.height && (e = c.height), c = "string" !== typeof a ? a.get("imageOffset") : {
                x: 0,
                y: 0
            }) : (b = g.w.fi + "/mark_bs.png", c = {x: 0, y: 0}, d = 19, e = 33, h = 19, k = 33);
            f = document.createElement("div");
            f.className = "amap-icon";
            f.style.position = "absolute";
            f.style.overflow = l ? "inherit" : "hidden";
            if (!d || !e) {
                var n = new Image;
                n.src = a;
                n.onload = function () {
                    m.set("iconSize", {width: n.width, height: n.height})
                }
            }
            d && (f.style.width = d + "px");
            e && (f.style.height = e + "px");
            a = document.createElement("img");
            a.src = b;
            h && k && (a.style.width = h + "px", a.style.height =
                k + "px");
            a.style.top = c.y + "px";
            a.style.left = c.x + "px";
            f.appendChild(a);
            g.g.Kp(g.l.cf && l ? a : f, this.get("opacity"));
            return f
        },
        aZ: function (a, b) {
            var c = this.UM(a, b);
            c.style.zIndex = -1;
            return c
        },
        moveChanged: function () {
            var a = this.get("move");
            if (!1 === a) return this.Wqa();
            void 0 !== a && ("pause" === a.action ? this.woa() : "[object Array]" === Object.prototype.toString.call(a.ig) ? a.ig && ("resume" === a.action && this.AE ? this.moveTo(a.ig[a.ig.Eo || 0], a.speed, a.rb) : (this.AE && this.q("movestop"), a.ig.Eo = 0, this.set("position", a.ig[0]),
                this.cna(a.ig, a.speed, a.rb, a.kha))) : this.moveTo(a.ig, a.speed, a.rb, !0))
        },
        moveTo: function (a, b, c, d) {
            if (!(0 >= b)) {
                var e = this.get("position");
                a.Ya(e);
                var f = Math.round(a.le(e) / 1E3 / b * 36E5);
                if (0 === f) return this.q("moveend");
                this.hi && (this.hi.stop(), this.hi = null);
                this.hi = new g.ij(e, a);
                c = c || function (a) {
                    return a
                };
                this.hi.transition = function (a, b, d) {
                    if (d >= f) return b;
                    var e = (b.R - a.R) * c(d / f) + a.R;
                    a = (b.P - a.P) * c(d / f) + a.P;
                    return new g.T(e, a)
                };
                this.hi.yp = function (b) {
                    this.set("position", b);
                    d && this.Ub.q("moving", {
                        passedPath: [this.hi.start,
                            this.get("position")]
                    });
                    this.q("moving");
                    b.cb(a) && (this.hi && (this.hi.stop(), this.hi = null), this.Ub.q("moveend"), this.q("moveend"))
                };
                this.get("autoRotation") && !g.l.cf && (b = "2D" == (this.map.C.view.type || "2D") ? this.o$(e, a) : this.p$(e, a), this.set("angle", b));
                this.hi.Rm(this)
            }
        },
        Wqa: function () {
            this.hi && (this.hi.stop(), this.hi = null, this.q("movestop"))
        },
        woa: function () {
            this.hi && (this.hi.stop(), this.hi = null, this.q("movepause"))
        },
        cna: function (a, b, c, d) {
            function e() {
                var b = a.slice(0, a.Eo || 0);
                b.push(this.get("position"));
                this.Ub.q("moving", {passedPath: b})
            }

            function f() {
                a.Eo < a.length - 1 ? (a.Eo += 1, this.moveTo(a[a.Eo], b, c)) : (this.ka("movealong"), d ? (a.Eo = 0, this.set("position", a[0]), this.moveTo(a[a.Eo], b, c)) : this.q("movestop"))
            }

            var h = Math.min(a.Eo || 0, a.length - 1);
            this.AE || (this.AE = !0, this.h("moving", e, this), this.h("moveend", f, this), this.h("movestop", function l() {
                this.AE = !1;
                this.I("moveend", f, this);
                this.I("moving", e, this);
                this.I("movestop", l, this)
            }, this));
            this.moveTo(a[h], b, c)
        },
        p$: function (a, b) {
            var c = this.map, d = c.sr(a), c = c.sr(b),
                e = 0;
            c.le(d);
            var f = c.y - d.y, h = c.x - d.x;
            0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI + e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
            return g.a.Yc(180 * e / Math.PI, 1)
        },
        o$: function (a, b) {
            var c = this.map, d = c.Vb(a), c = c.Vb(b), e = 0;
            c.le(d);
            var f = c.y - d.y, h = c.x - d.x;
            0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI + e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
            return g.a.Yc(180 * e / Math.PI, 1)
        }
    });
    g.A.Vm = g.A.Jh.extend({
        r: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.W("items", a, !0);
            this.W("content", a, !0);
            this.W("resolution", b);
            this.W("centerCoords", b);
            this.Lo = a
        }, Gx: function (a) {
            this.xg();
            this.Yr();
            this.Ml();
            this.Pk("resolution");
            this.Pk("centerCoords");
            this.Pk("render");
            this.W("resolution", a);
            this.W("centerCoords", a);
            this.W("render", a);
            this.map.h("movestart", this.fm, this);
            this.map.h("mapmove", this.fm, this);
            this.map.h("zoomstart", this.fm, this);
            this.map.h("click", this.fm, this);
            this.map.h("closeOverlays", this.fm, this);
            this.map.h("rotate", this.fm, this)
        }, fm: function () {
            this.Lo.map && (this.Lo.B = !0, this.Lo.close(), this.Lo.B = !1)
        }, mapChanged: function () {
        }, positionChanged: function () {
            this.Ml()
        }, renderChanged: function () {
            this.Ml()
        }, xg: function () {
            this.J && (this.J.parentNode && this.J.parentNode.removeChild(this.J), this.J = null);
            var a = g.g.create("div", null, "amap-menu");
            g.F.h(a, "mousedown", function (a) {
                g.F.stopPropagation(a)
            }, this);
            this.J = a;
            this.map.Sa.A.appendChild(this.J)
        }, Yr: function () {
            var a =
                this, b = this.J;
            b.innerHTML = "";
            var c = this.get("content");
            if ("object" === typeof c) b.appendChild(c); else if ("string" === typeof c) b.innerHTML = c; else if ((c = this.get("items")) && c.length) {
                var d = g.g.create("ul", b, "amap-menu-outer");
                c.sort(function (a, b) {
                    return isNaN(a.JH) || isNaN(b.JH) ? 0 : a.JH - b.JH
                });
                for (b = 0; b < c.length; b += 1) (function (b) {
                    var c = b.h5, h = b.rb, k = g.g.create("li", d);
                    k.innerHTML = c;
                    g.F.h(k, "click", function () {
                        h.call(k);
                        a.Lo.B = !0;
                        a.Lo.close();
                        a.Lo.B = !1
                    }, k)
                })(c[b])
            } else this.J.innerHTML = ""
        }, Ml: function () {
            var a =
                this.map, b = this.J;
            a && b && (this.map.get("zoom"), b = this.get("position"), b = a.sr(b), a = b.y, b = b.x, this.J.style.right = "", this.J.style.bottom = "", this.J.style.left = b + "px", this.J.style.top = a + "px")
        }, Gg: function () {
            this.J && (this.map.I("click", this.vua, this), this.map.Sa.A.removeChild(this.J), this.Lo.Uh = !1, this.J = this.Lo.He.map = null, this.map.I("movestart", this.fm, this), this.map.I("zoomstart", this.fm, this), this.map.I("click", this.fm, this), this.map.I("closeOverlays", this.fm, this), this.map.I("rotate", this.fm, this))
        },
        visibleChanged: function () {
            this.J && (this.get("visible") ? this.J.style.display = "block" : this.J.style.display = "none")
        }, itemsChanged: function () {
            this.J && this.Yr()
        }
    });
    g.A.Fe = g.A.Jh.extend({
        r: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.Ie("content contentDom position contentU altitude isCustom autoMove showShadow closeWhenClickMap size offset anchor".split(" "), a);
            this.W("retainWhenClose", a, !0);
            a.W("toBeClose", this);
            this.Ye = a
        }, Gx: function (a) {
            this.Mha || (this.xg(), this.Yr());
            this.Pk("resolution");
            this.Pk("centerCoords");
            this.Pk("render");
            this.W("resolution", a);
            this.W("centerCoords", a);
            this.W("render", a);
            this.map = a;
            a.Sa.A.appendChild(this.Rb);
            this.XR();
            this.Ml();
            this.wT();
            this.Mha = !0;
            this.Aha();
            this.Ub.q("onAdd", {type: "onAdd", target: this.Ub})
        }, xg: function () {
            var a = g.g.create("div");
            a.className = "amap-info";
            var b = g.g.create("div", a, "amap-info-shadowContainer"), c = g.g.create("div", a), d = this.get("anchor"),
                e = "amap-info-contentContainer";
            d && (e = d + " amap-info-contentContainer");
            d = g.g.create("div", c, e);
            a.style.position = "absolute";
            c.style.position = "absolute";
            c.style.bottom = "0px";
            c.style.left = "0px";
            b.style.position = "absolute";
            this.Rb = a;
            this.Kf = c;
            this.mR = b;
            this.Wg =
                d;
            this.set("contentDom", this.Wg, !0)
        }, Yr: function () {
            var a = this.get("contentU");
            if (a) {
                var b = this.get("isCustom"), c = this.Wg, d = this.mR;
                c.innerHTML = "";
                var e = null;
                if (b) {
                    if ("string" === typeof a) c.innerHTML = a; else if (a instanceof Array) for (e = 0; e < a.length; e += 1) c.appendChild(a[e]); else c.appendChild(a);
                    e = c;
                    d.parentNode && d.parentNode.removeChild(d)
                } else {
                    e = this.ula = d = g.g.create("div", c, "amap-info-content amap-info-outer");
                    "string" === typeof a ? d.innerHTML = a : d.appendChild(a);
                    this.Oha = d;
                    a = g.g.create("a", this.ula,
                        "amap-info-close");
                    a.innerHTML = "\u00d7";
                    this.hN = a;
                    a.href = "javascript: void(0)";
                    g.l.sf && (g.F.h(a, "touchstart", function (a) {
                        g.F.stop(a)
                    }, this), g.F.h(a, "touchend", function (a) {
                        g.F.stop(a);
                        this.Ye.B = !0;
                        this.Ye.close();
                        this.Ye.B = !1
                    }, this), g.F.h(a, "click", function (a) {
                        g.F.stop(a);
                        this.Ye.B = !0;
                        this.Ye.close();
                        this.Ye.B = !1
                    }, this));
                    g.l.Y || (g.F.h(a, "mousedown", function (a) {
                        g.F.stop(a)
                    }, this), g.F.h(a, "click", function (a) {
                        g.F.stop(a);
                        this.Ye.B = !0;
                        this.Ye.close();
                        this.Ye.B = !1
                    }, this));
                    if (a = this.get("size", !0)) 0 !== a.width &&
                    (d.style.width = a.width + "px"), 0 !== a.height && (d.style.height = a.height + "px");
                    this.get("anchor");
                    g.g.create("div", c, "amap-info-sharp");
                    this.mR.style.display = "block"
                }
                g.F.Uqa(e)
            }
        }, XR: function () {
            var a = this.get("isCustom"), b = this.get("showShadow");
            if (!a && b) {
                var a = this.mR, b = g.g.NG(this.Wg), c = b.height - 23, d = b.width;
                if (g.l.Wi || g.l.Rt) c = this.Wg.childNodes[0].offsetHeight, d = this.Wg.childNodes[0].offsetWidth + 26;
                b = "background-image:url(" + g.w.vb + (g.l.Wi ? "/theme/v1.3/iws.gif);" : "/theme/v1.3/iws.png);");
                a.innerHTML =
                    "";
                var e = [], f;
                f = e[1] = {};
                f.height = 0.5 * c + 4;
                f.width = d;
                f.offsetX = 400;
                f.offsetY = 16;
                f.top = -f.height - 10 - 15;
                f.left = 23;
                f = e[2] = {};
                f.height = e[1].height;
                f.width = e[1].height;
                f.offsetX = 1075 - f.width;
                f.offsetY = e[1].offsetY;
                f.top = e[1].top;
                f.left = 23 + e[1].width;
                f = e[3] = {};
                f.height = 10;
                f.width = 22;
                f.offsetX = 30;
                f.offsetY = 445;
                f.top = -25;
                f.left = 23 + (g.l.Rt || g.l.Wi ? 5 : 0);
                f = e[4] = {};
                f.height = 10;
                f.width = d / 2 - 15 - e[3].left - e[3].width;
                f.offsetX = 132;
                f.offsetY = 445;
                f.top = -25;
                f.left = e[3].left + e[3].width;
                f = e[5] = {};
                f.height = 10;
                f.width = 70;
                f.offsetX = 80;
                f.offsetY = 445;
                f.top = -25;
                f.left = e[4].left + e[4].width;
                f = e[6] = {};
                f.height = 10;
                f.width = d - e[5].left - e[5].width;
                f.offsetX = 132;
                f.offsetY = 445;
                f.top = -25;
                f.left = e[5].left + e[5].width;
                f = e[7] = {};
                f.height = 10;
                f.width = 30;
                f.offsetX = 621;
                f.offsetY = 445;
                f.top = -25;
                f.left = d;
                f = e[8] = {};
                f.height = 15;
                f.width = 70;
                f.offsetX = 47;
                f.offsetY = 470;
                f.top = -15;
                f.left = d / 2 - 15;
                for (c = 1; 8 >= c; c += 1) d = g.g.create("div", a), f = [], f.push("position:absolute;"), f.push(b), f.push("top:" + e[c].top + "px;"), f.push("left:" + e[c].left + "px;"), f.push("width:" +
                    e[c].width + "px;"), f.push("height:" + e[c].height + "px;"), f.push("background-position:" + -e[c].offsetX + "px " + -e[c].offsetY + "px;"), d.style.cssText = f.join("")
            }
        }, nAa: function () {
        }, Ml: function () {
            var a = this.map, b = this.Rb, c = this.get("position"), d = this.get("anchor");
            if (a && b && c) {
                b = a.sr(c, this.get("altitude"));
                a.get("size");
                var e = g.g.NG(this.Wg);
                if (g.l.Wi || g.l.Rt) e.width = this.Wg.childNodes[0].offsetWidth + 14;
                a = e.height;
                c = this.get("offset");
                this.get("isCustom");
                e = e.width;
                this.Rb.style.left = Math.round(b.x - e / 2 + (c.x ||
                    0)) + "px";
                this.Rb.style.top = Math.round(b.y + (c.y || 0)) + "px";
                if (d) {
                    var f = d.split("-"), h = f[1], f = f[0];
                    this.Wg.className = d + " amap-info-contentContainer";
                    switch (f) {
                        case "middle":
                            this.Rb.style.top = Math.round(b.y + a / 2 + (c.y || 0)) + "px";
                            break;
                        case "top":
                            this.Rb.style.top = Math.round(b.y + a + (c.y || 0)) + "px";
                            break;
                        case "center":
                            this.Rb.style.top = Math.round(b.y + a / 2 + (c.y || 0)) + "px"
                    }
                    switch (h) {
                        case "left":
                            this.Rb.style.left = Math.round(b.x + (c.x || 0)) + "px";
                            break;
                        case "right":
                            this.Rb.style.left = Math.round(b.x - e + (c.x || 0)) + "px"
                    }
                }
                d =
                    this.Oha;
                if (this.hN && d.childNodes[0]) {
                    for (a = b = 0; a < d.childNodes.length; a += 1) b += d.childNodes[0].clientHeight || 0;
                    b > (this.get("size").height || d.clientHeight) ? this.hN.style.right = "20px" : this.hN.style.right = "5px"
                }
            }
        }, g9: function () {
            var a = new g.G(2 - this.Wg.offsetWidth / 2, 2 - this.Wg.offsetHeight),
                b = this.get("offset") || new g.G(0, 0), c = this.get("anchor");
            if (c) {
                var a = this.Wg.offsetWidth, d = this.Wg.offsetHeight, e, f, h = 2 - a / 2, k = 2 - d;
                c && (c = c.split("-"), 2 === c.length ? (e = c[1], f = c[0]) : 1 === c.length && "center" === c[0] && (e = "center",
                    f = "middle"));
                switch (e) {
                    case "left":
                        h = 2;
                        break;
                    case "right":
                        h = -a
                }
                switch (f) {
                    case "middle":
                        k = -d / 2;
                        break;
                    case "top":
                        k = -2
                }
                a = new g.G(h, k)
            }
            this.get("isCustom") || (a = a.add(new g.G(0, -23)));
            return a.add(b)
        }, altitudeChanged: function () {
            this.Ml()
        }, wT: function () {
            if (this.get("position") && this.get("autoMove") && this.Wg) {
                for (var a = this.map, b = new g.md(this.Wg.offsetWidth, this.Wg.offsetHeight), c = a.sr(this.get("position"), this.get("altitude")).add(this.g9()), d = c.add(b.EC()), e = a.get("size"), f = a.Sja(), h = 0, k = 0, l = 0; l < f.length; l +=
                    1) {
                    var m = f[l], n = 0, p = 0;
                    0 === m[1] && 0 === m[2] ? (n = m[3] - (c.x + h), p = m[0] - (c.y + k), 0 < n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[2] && 0 === m[3] ? (n = e.Vi() - m[1] - (d.x + h), p = m[0] - (c.y + k), 0 > n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[3] ? (n = e.Vi() - m[1] - (d.x + h), p = e.Ui() - m[2] - (d.y + k), 0 > n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[1] && (n = m[3] - (c.x + h), p = e.Ui() - m[2] - (d.y + k), 0 < n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p))
                }
                c = c.add(new g.G(h, k));
                d = d.add(new g.G(h, k));
                l = f = 0;
                0 > c.x || b.Vi() >
                e.Vi() ? f = 20 - c.x : e.Vi() < d.x && (f = e.Vi() - d.x - 25);
                0 > c.y || b.Ui() > e.Ui() ? l = 5 - c.y : e.Ui() < d.y && (l = e.Ui() - d.y - 15);
                f += h;
                l += k;
                if (f || l) a.C.B = !0, a.C.panBy(f, l), a.C.B = !1
            }
        }, Aha: function () {
            this.get("closeWhenClickMap") && (this.map.h("clickstart", this.wW, this, !1), this.map.h("clickend", this.vW, this, !1))
        }, wW: function () {
            this.Ye.Uh && (this.Ye.B = !0, this.Ye.getIsOpen() && (this.Ye.FI = !0), this.Ye.B = !1)
        }, vW: function () {
            this.Ye.Uh && (this.Ye.FI && (this.Ye.B = !0, this.Ye.close(), this.Ye.B = !1), this.Ye.FI = !1)
        }, Gg: function () {
            this.Rb &&
            this.map && (this.Ye.FI = !1, this.get("closeWhenClickMap") && (this.map.I("clickstart", this.wW, this), this.map.I("clickend", this.vW, this)), this.get("retainWhenClose") ? this.map.bl.appendChild(this.Rb) : (this.Rb.parentNode === this.map.Sa.A && this.map.Sa.A.removeChild(this.Rb), this.Ye.A = null), this.map = null, this.Ye.Uh = !1, this.Ub.q("close", {
                type: "close",
                target: this.Ub
            }))
        }, Dua: function () {
            if (!this.get("isCustom")) return this.Wg.offsetWidth;
            for (var a = this.Mh, b = a.firstChild, c = a.lastChild; b && c && b.style && c.style && b ===
            c;) a = b, b = a.firstChild, c = a.lastChild;
            a = g.g.yd(a, "width");
            return a = parseInt(a.replace("px", ""), 10)
        }, renderChanged: function () {
            this.Ml()
        }, positionChanged: function () {
            this.map && this.Rb && (this.Ml(), this.wT())
        }, anchorChanged: function () {
            this.positionChanged()
        }, offsetChanged: function () {
            this.positionChanged()
        }, contentChanged: function () {
            this.Yr();
            this.XR();
            this.Ml()
        }, sizeChanged: function () {
            this.Yr();
            this.XR();
            this.Ml()
        }
    });
    g.ya = {};
    g.ya.xe = g.Z.extend({
        ha: [g.ra, g.Ge], r: function () {
        }, Ft: function () {
            var a = this.jd();
            a.Vg || (a.Vg = g.H.Yh(a));
            return a.Vg
        }, ib: function () {
            return new this.r(this.ta)
        }, kO: function () {
            return this.ta
        }, setCoords: function (a) {
            this.mqa(a)
        }, mqa: function (a) {
            this.gu = this.jd();
            this.cg = null;
            if (g.ya.xc && this instanceof g.ya.xc) {
                var b = a.length;
                this.of = Array(b);
                for (var c, d, e = 0; e < b; e += 1) if (c = a[e], d = new g.ya.IS(c), this.of[e] = d, 0 === e) {
                    if (0 === c.length) break;
                    d.mp(c) || c.reverse()
                } else 0 !== c.length && d.mp(c) && c.reverse()
            } else this.ta = a
        }
    });
    g.ya.ye = g.extend({}, {
        nv: "point",
        iJ: "linestring",
        HS: "linearring",
        sD: "polygon",
        oJ: "multipoint",
        nJ: "multilinestring",
        pD: "multipolygon",
        nta: "geometrycollection"
    });
    g.Gh = g.Z.extend({
        ha: [g.ra, g.Ge], r: function (a) {
            a = a || {};
            a.Gz && (this.Gz = a.Gz);
            a.ZK && (this.ZK = a.ZK);
            a.HV && (this.HV = a.HV);
            this.map = a.map;
            this.ql = a.BK || g.a.Ab(this);
            this.name = a.name || "";
            this.eg = !1;
            this.set("visible", !0, !0);
            this.fR(a.ea);
            this.Mk = a.BI;
            this.style = a.style
        }, yia: function () {
            this.style = this.Mk = this.wq = this.t1 = this.ea = this.name = this.map = null;
            this.Qk();
            this.Wh()
        }, Ika: function () {
            return this.Mk
        }, zqa: function (a) {
            this.Mk = a;
            this.zIndex = this.Mk[0].bk || this.zIndex
        }, lc: function () {
            return this.ea
        }, fR: function (a) {
            a &&
            (this.ea = a, this.W("coords", a, !0), this.Gz || this.ZK) && (a.W("radius", this), a.W("center", this), a.W("resolution", this), a.W("strokeWeight", this))
        }, setStyle: function (a) {
            this.zqa(a);
            this.ar()
        }, coordsChanged: function () {
            this.ar()
        }, radiusChanged: function () {
            this.ea.gu = this.ea.jd();
            this.ea.cg = null;
            this.ar()
        }, ar: function (a) {
            this.set("feature", {target: this, ria: a, gu: this.ea.gu || this.ea.jd(), hna: this.ea.jd()});
            this.ea.gu = this.ea.jd()
        }, visibleChanged: function () {
            this.ar()
        }, $wa: function (a) {
            for (var b = 0; b < this.Mk.length; b +=
                1) {
                var c = this.Mk[b];
                if (a.cb(c.Ew(this))) return c
            }
        }, $ja: function () {
            var a = this.lc(), b = [];
            a.Zh() === g.ya.ye.sD || a.Zh() === g.ya.ye.pD ? b.push(new g.style.he.xc({
                fillColor: "#78cdd1",
                Xd: 0.2,
                strokeColor: "#122e29",
                jb: 0.5,
                ac: 1
            })) : a.Zh() === g.ya.ye.iJ || a.Zh() === g.ya.ye.HS || a.Zh() === g.ya.ye.nJ ? b.push(new g.style.he.qo({
                color: "#888888",
                width: 1,
                zIndex: 10
            })) : a.Zh() !== g.ya.ye.nv && a.Zh() !== g.ya.ye.oJ || b.push(new g.style.he.Ih({
                url: g.w.vb + "/theme/v1.3/markers/0.png",
                width: 36,
                height: 36,
                rotation: 0,
                FAa: -12,
                HAa: -36,
                zIndex: 100
            }));
            return b
        }
    });
    g.Gh.ita = "geometry";
    g.ya.kg = g.ya.xe.extend({
        r: function (a, b) {
            this.ta = a;
            this.Yi = b;
            this.cg = null
        }, jd: function () {
            if (!this.cg) {
                var a = this.ta[0], b = this.ta[1];
                if (this.Yi) this.cg = [a, b, a, b]; else {
                    var c = this.get("radius"), d = this.get("resolution") * this.get("strokeWeight") || 0,
                        c = c ? c / Math.cos(Math.PI * this.get("center").P / 180) : 0;
                    this.cg = [a - c - d, b - c - d, a + c + d, b + c + d]
                }
            }
            return this.cg
        }, Zh: function () {
            return g.ya.ye.nv
        }
    });
    g.O = {canvas: {}, Wd: {}, Lg: {}, re: {}};
    g.O.Ec = g.Z.extend({
        ha: [g.ra, g.Ge], r: function (a, b) {
            this.j = a;
            this.Yi = a.X.Yi;
            this.L = b;
            this.e = b.e;
            this.W("display", b)
        }, Wq: function () {
            this.hu && this.hu();
            this.Qk();
            this.e = this.L = this.j = null
        }, Ht: function (a, b, c, d) {
            var e = this.zoom;
            c = [];
            var f = this.j;
            if (Math.floor(e) !== e) b(c, f); else {
                a = [a.x, a.y];
                if (f.Em) {
                    for (var e = f.Eg, h = !0, k = [], l = 0; l < e.length; l += 1) {
                        var m = e[l].tg;
                        if (m) if (m.parentNode && m.parentNode.parentNode && this.L && m.parentNode.parentNode !== this.L.bl && "none" !== m.parentNode.style.display) {
                            var n = g.g.fr(m), m =
                                n[0], n = n[1];
                            if (m && n) {
                                var p = Math.max(Math.abs(e[l].get("offset").x), Math.abs(e[l].get("offset").y)) + Math.max(m, n);
                                f.ef = Math.max(f.ef, p);
                                f.Pf = Math.max(f.Pf, p);
                                e[l].width = m;
                                e[l].height = n
                            } else h = !1, k.push(e[l])
                        } else h = !1, k.push(e[l])
                    }
                    h ? (f.Em = !1, f.Eg = []) : f.Eg = k
                }
                e = Math.max(f.ef, f.Bx || 0) * this.S;
                h = Math.max(f.Pf, f.Bx || 0) * this.S;
                k = 0;
                f.Ax && (k = f.Ax / Math.cos(Math.PI * this.e.get("center").P / 180));
                h = Math.max(h, k || 0);
                e = Math.max(e, k || 0);
                if (e = f.Cm([a[0] - e, a[1] - h, a[0] + e, a[1] + h])) {
                    for (var q in e) if (e.hasOwnProperty(q) &&
                        (h = e[q], h.get("visible") && !h.get("noSelect"))) if (k = h.lc(), k instanceof g.ya.kg) if (this.Yi) {
                        l = this.j.Il;
                        l instanceof Array && (l = "number" === typeof h.bb.style && l[h.bb.style] ? l[h.bb.style] : l[0]);
                        var m = l.size.width * this.S, n = l.size.height * this.S, p = l.anchor.x * this.S,
                            r = l.anchor.y * this.S, k = k.ta, s = l.rotation_, u = [a[0], a[1]];
                        if (s) {
                            var v = (a[0] - k[0]) / this.S, x = (a[1] - k[1]) / this.S, t = s, s = Math.cos(-t),
                                w = Math.sin(-t), t = v * s - x * w, v = v * w + x * s;
                            u[0] = k[0] + t * this.S;
                            u[1] = k[1] + v * this.S
                        }
                        m = g.H.RM([[u[0] - m + p, u[1] - n + r], [u[0] + p, u[1] +
                        r]]);
                        g.H.Jd(m, k) && c.push(h)
                    } else if ("undefined" !== typeof k.get("radius")) l = k.ta, l = new g.G(l[0], l[1]), m = new g.G(a[0], a[1]), k = k.get("radius"), "px" === h.get("unit") ? m.le(l) / Math.pow(2, 20 - this.zoom) < k && c.push(h) : m.le(l) * Math.cos(h.get("center").P * Math.PI / 180) <= k / this.tp * Math.pow(2, 20 - this.zoom) && c.push(h); else if ("AMap.Text" == h.Mo) l = h.get("params"), l.visible && h.ca && g.g.zB(d, h.ca, "amap-markers") && c.push(h); else {
                        if (l = h.get("params"), l.visible && h.ca) if (l.shape) for (k = k.ta, s = l.uw % 360, u = [a[0], a[1]], s && (v = (a[0] -
                            k[0]) / this.S, x = (a[1] - k[1]) / this.S, t = Math.PI * s / 180, s = Math.cos(-t), w = Math.sin(-t), t = v * s - x * w, v = v * w + x * s, u[0] = k[0] + t * this.S, u[1] = k[1] + v * this.S), m = h.width * this.S, n = h.height * this.S, p = l.offset.x * this.S, r = l.offset.y * this.S, m = g.H.RM([[u[0] - m - p, u[1] - n - r], [u[0] - p, u[1] - r]]), k[0] instanceof Array || (k = [k]), n = k.length - 1; 0 <= n; n -= 1) {
                            if (g.H.Jd(m, k[n])) {
                                l.shape ? this.yB(h, u, k) && c.push(h) : c.push(h);
                                break
                            }
                        } else g.g.zB(d, h.ca, "amap-markers") && c.push(h)
                    } else k.Jd ? k.Jd(a) && c.push(h) : k.Ow && 1.8 * k.Ow(a) <= h.get("strokeWeight") *
                        this.S && c.push(h);
                    this.Yi ? c.sort(function (a, b) {
                        return a.ql > b.ql ? -1 : 1
                    }) : c.sort(function (a, b) {
                        return a.get("isTop") ? -1 : b.get("isTop") ? 1 : a.get("zIndex") > b.get("zIndex") || a.get("zIndex") === b.get("zIndex") && a.ql > b.ql ? -1 : 1
                    });
                    b(c, f)
                } else b([], f)
            }
        }, yB: function (a, b, c) {
            var d = (b[0] - c[0][0]) / this.S;
            b = (b[1] - c[0][1]) / this.S;
            a = a.get("params");
            c = a.offset;
            var d = [d - c.x, b - c.y], e;
            a = a.shape;
            if ("circle" === a.D.type) {
                if (b = a.D.coords[0], c = a.D.coords[1], Math.sqrt((d[0] - b) * (d[0] - b) + (d[1] - c) * (d[1] - c)) <= a.D.coords[2]) return !0
            } else {
                if ("poly" ===
                    a.D.type) return e = a.D.coords, e = this.NF(e), g.sd.Jd(d, e);
                if ("rect" === a.D.type) return e = a.D.coords, a = e[0], b = e[1], c = e[2], e = e[3], e = [[a, b], [c, b], [c, e], [a, e]], g.sd.Jd(d, e)
            }
            return !1
        }, NF: function (a) {
            for (var b = [], c = 0; c / 2 < a.length / 2; c += 2) b.push([a[c], a[c + 1]]);
            return b
        }, G_: function (a, b, c, d, e, f, h) {
            var k = ["position:absolute;"];
            k.push("top:" + Math.round(c) + "px;");
            k.push("left:" + Math.round(b) + "px;");
            k.push("width:" + Math.round(d) + "px;");
            k.push("height:" + Math.round(e) + "px;");
            1 > f && ("opacity" in a.style ? (k.push("opacity"),
                k.push(":"), k.push(f), k.push(";")) : 8 <= document.documentMode ? (k.push("-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(")';")) : (k.push("filter:alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(");")));
            k.push("z-index:" + h + ";");
            k.join("");
            g.g.U3(a, k.join(""))
        }
    });
    g.O.Hb = g.Z.extend({
        ha: [g.ra, g.Ge], r: function (a) {
            this.e = a;
            this.bl = a.bl;
            this.J = a.Sa.o;
            this.W("display", a);
            this.W("rotateEnable", a);
            this.W("style", a);
            this.W("hightlight", a)
        }, XP: function (a) {
            this.je = a || g.a.rk("ff" + this.e.je.slice(1))
        }, Ht: function (a, b, c, d, e) {
            function f(a, d) {
                a.length && (k[g.a.indexOf(b, d)] = a);
                l -= 1;
                0 >= l && (c(k), l = 0)
            }

            for (var h = b.length, k = [], l = 0, m, n = [], p = 0; p < h; p += 1) m = b[p], m instanceof g.o.Tc && m.get("visible") && (n.push(this.Jt(m)), l += 1);
            for (h = 0; h < n.length; h += 1) n[h].Ht(a, f, d, e)
        }
    });
    g.GZ = {
        CG: function (a, b, c) {
            for (var d = null, e = null, f = 0, h = 0, k = 0, l = b.length; k < l; k++) {
                var m = b[k];
                if (m < a) d = c[m], f = m; else {
                    e = c[m];
                    h = m;
                    break
                }
            }
            null === d ? (d = e, f = h) : null === e && (e = d, h = f);
            return {Rx: f, CH: h, Hr: d, OB: e}
        }, Jka: function (a) {
            var b = this, c = g.a, d = [], e = {};
            c.Nb(a.nodes, function (a) {
                !1 !== a.value && null !== a.value && (e[a.zoom] = g.w.vc + "://" + a.value, d.push(a.zoom))
            });
            return function (a) {
                a = c.Yc(a, 1);
                void 0 === e[a] && (e[a] = b.CG(a, d, e).Hr);
                return e[a]
            }
        }, ska: function (a) {
            var b = this, c = g.a, d = [], e = {}, f = a.transitional;
            c.Nb(a.nodes,
                function (a) {
                    null !== a.value && !1 !== a.value && (e[a.zoom] = a.value, d.push(a.zoom))
                });
            return function (a) {
                a = c.Yc(a, 1);
                if (void 0 === e[a]) {
                    var k = b.CG(a, d, e);
                    e[a] = f && "none" !== f && k.CH !== k.Rx && k.Hr !== k.OB ? c.Z_(k.Hr, k.OB, (a - k.Rx) / (k.CH - k.Rx), f) : k.Hr
                }
                return e[a]
            }
        }, Jja: function (a) {
            var b = this, c = g.a, d = [], e = {};
            c.Nb(a.nodes, function (a) {
                null !== a.value && (e[a.zoom] = a.value, d.push(a.zoom))
            });
            return function (a) {
                a = c.Yc(a, 1);
                void 0 === e[a] && (e[a] = b.CG(a, d, e).Hr);
                return e[a]
            }
        }, Qja: function (a, b, c) {
            var d = this, e = g.a, f = [], h = {}, k =
                a.transitional;
            e.Nb(a.nodes, function (a) {
                null !== a.value && !1 !== a.value && (h[a.zoom] = e.hga(a.value, c ? "rgba" : "webgl"), f.push(a.zoom))
            });
            return function (a) {
                var b = null;
                a = e.Yc(a, 1);
                if (void 0 === h[a]) {
                    var b = d.CG(a, f, h), n = b.Hr;
                    if (k && "none" !== k && b.Rx !== b.CH && b.Hr.join("") !== b.OB.join("")) for (var n = n.slice(0), p = (a - b.Rx) / (b.CH - b.Rx), q = 0, r = b.OB.length; q < r; q++) n[q] = e.Z_(b.Hr[q], b.OB[q], p, k);
                    h[a] = n
                }
                b = h[a];
                return c && b ? "rgba(" + b.join(",") + ")" : b || ""
            }
        }, NH: function (a, b, c, d) {
            var e = 4 < arguments.length && void 0 !== arguments[4] ?
                arguments[4] : {}, f;
            for (f in c) if (c.hasOwnProperty(f)) {
                var h = c[f];
                void 0 !== b[h] ? (b[h].nodes && 1 < b[h].nodes.length && b[h].nodes.sort(function (a, b) {
                    return a.zoom - b.zoom
                }), a[f] = e.Jla ? {
                    Lg: d.call(this, b[h], c[f]),
                    canvas: d.call(this, b[h], c[f], !0)
                } : d.call(this, b[h], c[f])) : e.Ila && (a[f] = !0)
            }
        }, Dq: function (a, b) {
            for (var c = [], d = 0, e = a.length; d < e; d += 2) {
                var f = 0,
                    f = "str" === b ? g.a.Yc(parseInt(a.substr(d, 2), 16) / (0 === d ? 255 : 1), 3) : g.a.Yc(parseInt(a.substr(d, 2), 16) / 255, 3);
                c.push(f)
            }
            return c.length ? (c.push(c.shift()), "str" === b ?
                "rgba(" + c.join(",") + ")" : c) : ""
        }, H2: function (a, b, c) {
            if (b[c]) console.log("customType repeat!!", c); else {
                var d = {}, e = {visible: "visible", oR: "showLabel", Rj: "showIcon"},
                    f = [["color", {color: "color"}, {opacity: "opacity"}], ["fillColor", {fillColor: "fillColor"}, {Xd: "fillOpacity"}], ["strokeColor", {strokeColor: "strokeColor"}, {jb: "strokeOpacity"}], ["textFillColor", {gra: "textFillColor"}, {hra: "textFillOpacity"}], ["textStrokeColor", {jra: "textStrokeColor"}, {kra: "textStrokeOpacity"}], ["backgroundColor", {backgroundColor: "backgroundColor"},
                        {oga: "backgroundOpacity"}]];
                if (a.styles) {
                    a = a.styles;
                    this.NH(d, a, e, this.Jja, {Ila: !0});
                    for (var e = 0, h = f.length; e < h; e++) {
                        var k = f[e];
                        a[k[0]] ? this.NH(d, a, k[1], this.Qja, {Jla: !0}) : this.NH(d, a, k[2], this.ska)
                    }
                    a.texture && (this.NH(d, a, {Za: "texture"}, this.Jka), d.Pd = [], g.a.Nb(a.texture.nodes, function (a) {
                        a.value && d.Pd.push(g.w.vc + "://" + a.value)
                    }))
                } else {
                    for (h in e) e.hasOwnProperty(h) && (k = e[h], d[h] = void 0 === a[k] ? !0 : a[k]);
                    e = 0;
                    for (h = f.length; e < h; e++) {
                        var l = f[e], k = g.a.keys(l[1])[0], m = l[1][k], n = g.a.keys(l[2])[0], l = l[2][n];
                        void 0 !== a[m] ? d[k] = {canvas: this.Dq(a[m], "str"), Lg: this.Dq(a[m])} : d[n] = a[l]
                    }
                    a.texture && (d.Za = g.w.vc + "://" + a.texture)
                }
                b[c] = d
            }
        }, mQ: function (a, b, c, d) {
            if (a) for (var e in a) if (a.hasOwnProperty(e) && g.a.Fj(a[e], "object")) {
                var f = a[e], h = e;
                c && (h = c + ":" + e);
                if (f.detailedType) this.H2(f, b, h), this.mQ(f.detailedType, b, h, f); else if (f.subType) this.mQ(f.subType, b, h); else {
                    if (void 0 !== f.code) {
                        for (var k in d) d.hasOwnProperty(k) && !g.a.ha(["isDetailed", "detailedType", "styles"], k) && void 0 === f[k] && void 0 !== d[k] && (f[k] = d[k]);
                        h = c + ":" + f.code
                    }
                    this.H2(f, b, h)
                }
            }
        }, styleChanged: function (a) {
            if (this.e.C.ci) {
                a = a || this.get("style");
                this.vl.bz || (this.vl = g.a.bind(this.vl, this), this.dp = g.a.bind(this.dp, this), this.vl.bz = !0);
                var b = g.a, c = {};
                this.mQ(a, c);
                this.rt = c;
                a = this.rt["regions:land"];
                var c = this.rt.water, d = this.rt.sky, e = this.rt.buildings, f, h, k, l, m;
                if (a) {
                    var n = "rgba(0, 0, 0, 0)";
                    if (a.visible) {
                        var p = this.dp(b.F3(this.e.je.substr(1)), a.opacity, a.color, !0);
                        p && (n = this.zy(p, a.visible, "rgba(0, 0, 0, 0)"), p = this.vl(b.su(this.e.je.substr(1)),
                            a.opacity, a.color, !0), f = this.zy(p, a.visible))
                    }
                    this.e.qt = n
                } else this.e.qt = "";
                c && c.visible && (h = this.vl(b.su(this.e.uF.substr(1)), c.opacity, c.color, !0), h = this.zy(h, c.visible));
                d && d.visible && (k = this.vl(b.su(this.e.kA.substr(1)), void 0, d.color, !0), k = this.zy(k, d.visible));
                e && (e.visible ? (l = this.vl(b.rk(this.e.KD[0]), void 0, e.fillColor, !0), l = this.zy(l, e.visible), m = this.vl(b.rk(this.e.KD[1]), void 0, e.strokeColor, !0), m = this.zy(m, e.visible)) : (l = [1, 1, 1, 0], m = [1, 1, 1, 0]));
                this.XP && this.XP(f, h, k, [l, m]);
                this.s5 ? this.s5(this.rt) :
                    this.set("display")
            }
        }, zy: function (a, b) {
            var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [0, 0, 0, 0], d = g.a.bi;
            if (d(a) && d(b)) {
                var e = a;
                a = function (a) {
                    return b(a) ? e(a) : c
                }
            }
            return a
        }, dp: function (a, b, c) {
            var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : !1;
            if (a) {
                if (void 0 !== b) {
                    var d = a.split(","), e = b;
                    "function" === typeof b && (e = b(this.e.kf.Q.zoom));
                    d[3] = g.a.Yc(e, 3) + ")";
                    return d.join(",")
                }
                if (c) return "function" === typeof c.canvas ? d ? c.canvas : c.canvas(this.e.kf.Q.zoom) : c.canvas
            }
            return a
        }, vl: function (a,
                         b, c) {
            var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : !1;
            if (a) {
                if (b) return d = b, "function" === typeof b && (d = b(this.e.kf.Q.zoom)), [a[0], a[1], a[2], g.a.Yc(d, 3)];
                if (c) return "function" === typeof c.Lg ? d ? c.Lg : c.Lg(this.e.kf.Q.zoom) : c.Lg
            }
            return a
        }, IG: function (a, b) {
            if (void 0 !== b) {
                var c = this.rt[a + ":" + b];
                if (c) return c
            }
            return this.rt[a]
        }, tl: function (a, b, c, d) {
            var e = null, f = a;
            d = d ? this.dp : this.vl;
            var h = this.e.kf.Q.zoom;
            if (e = this.IG(b)) if ("function" === typeof e.visible && !e.visible(h) || !1 === e.visible) f = ""; else {
                f =
                    1;
                h = "";
                if (c) if (e.fillColor || e.Xd) f = e.Xd, h = e.fillColor; else {
                    if (e.color || e.opacity) f = e.opacity, h = e.color
                } else if (e.strokeColor || e.jb) f = e.jb, h = e.strokeColor; else if (e.color || e.opacity) f = e.opacity, h = e.color;
                f = d(a, f, h)
            }
            this.kr === b && (f = this.It(f || a));
            return f
        }, gr: function (a, b, c) {
            c = c ? this.dp : this.vl;
            var d = null, e = a, f = this.e.kf.Q.zoom;
            (d = this.IG(b)) && (e = "function" === typeof d.visible && !d.visible(f) || !1 === d.visible ? "" : c(a, d.opacity, d.color));
            this.kr === b && (e = this.It(e || a));
            return e
        }, Yw: function (a, b, c, d, e) {
            var f =
                a, h = b, k = c, l = !0, m = !0, n = 1, p = this.IG(d, e), q = this.e.kf.Q.zoom;
            p && ("function" === typeof p.visible && !p.visible(q) || !1 === p.visible || "function" === typeof p.oR && !p.oR(q) || !1 === p.oR ? (m = l = !1, f = h = k = "") : (f = this.dp(a, p.hra, p.gra), h = this.dp(b, p.kra, p.jra), k = this.dp(c, p.oga, p.backgroundColor), l = "function" === typeof p.Rj ? p.Rj(q) : p.Rj));
            p = !1;
            this.kr === d ? p = !0 : void 0 !== e && this.kr === d + "-" + e && (p = !0);
            p && (f = this.It(f || a), h = this.It(h || b), k = this.It(k || c), n = 1 - 1.6 * this.qB, m = l = !0);
            return [f, h, k, l, m, n]
        }, Xw: function (a, b, c, d) {
            var e =
                null, f = a, h = b;
            d = d ? this.dp : this.vl;
            var k = this.e.kf.Q.zoom;
            if (e = this.IG(c)) "function" === typeof e.visible && !e.visible(k) || !1 === e.visible ? f = h = "" : (f = d(a, e.Xd, e.fillColor), h = d(b, e.jb, e.strokeColor));
            this.kr === c && (b = h || b, f = this.It(f || a), h = this.It(b));
            return [f, h]
        }
    };
    g.O.Hb.wb(g.GZ);
    g.O.canvas.Hb = g.O.Hb.extend({
        r: function (a) {
            arguments.callee.ma.apply(this, arguments);
            this.type = "2D"
        }, Jt: function (a) {
            if (!a.O) {
                var b = a.vm(this);
                b && !b.Xha && (a.O = b)
            }
            return a.O
        }, pc: function (a) {
            var b = this.e.r_();
            b && this.GQ !== b && this.e.C.ci && (this.e.T3(b), this.GQ = b);
            this.e.Sa.Iq.style.cssText = "";
            for (var c = a.pa, b = a.Q, d = this.e.C.get("features"), e = a.size.width, f = a.size.height, h = 0; h < c.length; h += 1) {
                var k = c[h], l = this.Jt(k), m = c[h].xl();
                if (l && l.j) if (!m.visible || k.PB || m.qd[0] > b.zoom || m.qd[1] < b.zoom || k.ga && 0 === k.ga.length) {
                    if (l =
                        l.yj()) if (l.length) for (m = 0; m < l.length; m += 1) l[m].parentNode === this.J && this.J.removeChild(l[m]); else l.parentNode === this.J && this.J.removeChild(l)
                } else if (this.sP(k, d)) {
                    l.pc(a, m);
                    l.Hm && (a.Hf = l.Hf);
                    var k = l.yj(), n, p, q = l.transform;
                    if (!q || !k || l.Ag && !this.e.C.La) c[h].Bk && k.parentNode !== this.J && (this.J.appendChild(k), c[h].Ib = k); else {
                        c[h].Ib = k;
                        k.length || (k = [k], q = [q]);
                        for (var r = 0; r < k.length; r += 1) if (n = k[r], p = q[r], !p.kx) {
                            var s = p.translate.x, u = p.translate.y;
                            c[h].hH || (s = g.a.Yc(s, 2), u = g.a.Yc(u, 2));
                            var v = p.scale;
                            1E-5 > Math.abs(s) && (s = 0);
                            1E-5 > Math.abs(u) && (u = 0);
                            var x = [];
                            x.push("position:absolute");
                            x.push("z-index:" + (p.bk || c[h].get("zIndex")));
                            c[h].VA ? (x.push("top:" + Math.floor(f / 2 + u) + "px"), x.push("left:" + Math.floor(e / 2 + s) + "px")) : n.a1 ? (x.push("height:" + n.height * v + "px"), x.push("width:" + n.width * v + "px"), x.push("top:" + (f / 2 - u * v) + "px"), x.push("left:" + (e / 2 - s * v) + "px")) : (1 !== v && (x.push(g.g.Ur[g.g.Xf] + "-origin:" + s + "px " + u + "px"), x.push(g.g.Ur[g.g.Xf] + ":scale3d(" + v + "," + v + ",1)")), x.push("top:" + Math.floor(f / 2 - u) + "px"), x.push("left:" +
                                Math.floor(e / 2 - s) + "px"), l.$i && (x.push("height:" + n.height + "px"), x.push("width:" + n.width + "px")));
                            l.hH || 1 === m.opacity || "number" !== typeof m.opacity || x.push(g.g.L_(n, m.opacity));
                            n.parentNode !== this.J && this.J.appendChild(n);
                            g.g.U3(n, x.join(";"))
                        }
                    }
                }
            }
            a = this.e.Sa.Iq;
            k = this.e.Sa.o;
            c = this.e.Sa.A;
            g.g.Xf && "number" === typeof b.rotation && 0 !== b.rotation ? (a.style[g.g.Xf + "Origin"] = e / 2 + "px " + f / 2 + "px", a.style[g.g.Xf] = "rotate(" + b.rotation + "deg)", a.style.overflow = "visible", k.style.overflow = "visible", c.style.overflow = "visible") :
                (a.style.cssText = "", k.style.cssText = "-webkit-transform: translateZ(0);", c.style.cssText = "");
            this.e.zu = !1
        }, sP: function (a, b) {
            if ("all" === b || void 0 === a.kl) return !0;
            for (var c = 0, d = a.kl.length; c < d; c++) if (g.a.ha(b, "region" === a.kl[c] ? "bg" : a.kl[c])) return !0;
            return !1
        }
    });
    g.O.ti = g.O.Ec.extend({
        r: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.W("reload", a, !0);
            var c = a.X.get("cacheSize");
            if (this.e && this.e.C) {
                var d = this.e.C.get("tileCacheSize");
                d && 0 < d && (c = d)
            }
            this.sa = new g.Wf(c);
            var e = this;
            this.sa.IH.yY(function (a) {
                e.nz(a)
            });
            this.sa.xA = function (a) {
                return a.Ob ? (a.Ob.Ji -= 1, 0 == a.Ob.Ji && (a.Yt = !1), delete a.Ob, !0) : a.Yt ? a.Ji ? !1 : !0 : !0
            };
            this.Uc = 1;
            this.$m = 50;
            this.xT = !0;
            this.j.sa = this.sa;
            this.Al = new g.lD(6, null, a.ON);
            new g.lD(5, null, a.ON)
        }, hu: function () {
            this.clear();
            this.Kg = null;
            this.sa.clear();
            this.sa.xA = null;
            this.sa = this.sa.IH.FD = null;
            this.wc && (this.wc.I("tiles", this.VB, this), this.wc.I("ack", this.UB, this), this.wc.I("disable", this.SB, this), this.wc = null);
            this.$i && g.F.I(this.Qa, "webglcontextlost", this.RB, this);
            this.e.I("zoomend", this.wj, this);
            this.e.I("moveend", this.wj, this)
        }, reloadChanged: function () {
            this.j && (this.j.La = !1);
            this.sa.clear();
            this.reload = !0;
            this.set("display")
        }, bh: function (a, b, c) {
            function d(b) {
                a.loaded = !0;
                e.j && (a.status = "loaded", a.Ea = !0, a.$e = b, e.set("display",
                    0), "function" === typeof c && c())
            }

            var e = this;
            a.status = "loading";
            this.j.yn && this.j.yn.call(this, a, d, function () {
                a.loaded = !0;
                e.j && (a.status = "loaded", a.Ea = !0, "function" === typeof c && c())
            })
        }, gAa: function (a, b, c, d) {
            var e = [];
            c = c || 18;
            b = Math.pow(2, b - c);
            for (var f = 0; f < a.length; f += 1) {
                var h = a[f].oa, k = Math.floor(h.x / b), h = Math.floor(h.y / b);
                if (d) {
                    if (k = c + "/" + k + "/" + h, (h = this.sa.get(k)) && "loaded" == h.status) continue
                } else h = new g.dq(c, k, h), k = h + "", h = new g.lb(h);
                !e[k] && h && (e.push(h), e[k] = 1)
            }
            return e
        }, rG: function (a, b) {
            var c =
                this, d = this;
            if (this.j.fF) {
                var e, f, h, k, l, m, n, p = function () {
                    var p = 0;
                    for (e = a.length - 1; 0 <= e; e -= 1) f = a[e], p += f.length;
                    if (0 == p) return b.call(c, a), {RI: void 0};
                    d.ER = a;
                    for (e = a.length - 1; 0 <= e; e -= 1) for (f = a[e], h = [], k = [], f.HQ = h, f.fu = k, l = f.length - 1; 0 <= l; l -= 1) m = f[l], n = m.oa, c.j.e.mh.iy(n.x, n.y, n.z, function () {
                        var c = l;
                        return function (e) {
                            e ? h.push(f[c]) : k.push(f[c]);
                            p -= 1;
                            if (0 == p) {
                                for (e = a.length - 1; 0 <= e; e -= 1) {
                                    var l = a[e];
                                    a[e] = l.HQ;
                                    if (l.fu) for (var m = l.fu.length - 1; 0 <= m; m -= 1) {
                                        var n = l.fu[m];
                                        n.status = "loaded";
                                        n.loaded = !0;
                                        n.Ea =
                                            !0
                                    }
                                }
                                b.call(d, a)
                            }
                        }
                    }())
                }();
                if ("object" === typeof p) return p.RI
            } else b.call(this, a)
        }, Lu: function (a, b, c) {
            if (a = this.sa.get(a + "/" + b + "/" + c)) {
                if (a.Yt) return a;
                if (a.Ob) return a.Ob;
                a.Yt = !0;
                a.Ji = 0;
                return a
            }
        }, KG: function (a) {
            var b = a.oa;
            a = b.x;
            var c = b.y, b = b.z, d = Math.pow(2, b), e = (a + d) % d, f = e + d, d = e - d, h = null;
            e !== a && (h = this.Lu(b, e, c));
            h || d === a || (h = this.Lu(b, d, c));
            h || f === a || (h = this.Lu(b, f, c));
            return h
        }, Lm: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
            if (a.length) if (this.cI) this.AH = !0; else {
                for (var c =
                    a.length - 1; 0 <= c; c -= 1) {
                    var d = a[c];
                    if (d.length) for (var e = Math.pow(2, 20 - d[0].oa.z), c = d.length - 1; 0 <= c; c--) {
                        var f = d[c], h = f.oa;
                        h.S = e;
                        f.va = {};
                        f.xm = 0;
                        if (10 > h.z) {
                            var k = this.KG(f);
                            k && (f.Ob = k, f.status = "loaded", f.Ea = !0, k.Ji += 1, f.xm = (h.x - k.oa.x) / Math.pow(2, h.z), d.splice(c, 1), this.set("display", 0))
                        }
                        this.sa.set(f.key, f);
                        !b && f.pe ? f.pe = !1 : f.status = "loading"
                    }
                }
                var l = this;
                this.rG(a, function (a) {
                    for (var c = a.length - 1; 0 <= c; c -= 1) {
                        var d = a[c];
                        if (d.length) if (l.di) {
                            if (l.e.qy) break;
                            var e = d[0].oa.z;
                            l.Au(d, l.$i ? 1 : 0);
                            for (var f = 0,
                                     k = 0; f < d.length;) l.JP(d.slice(50 * k, 50 * k + 50), e, b), f += 50, k += 1
                        } else for (e = function () {
                            var a = d.length;
                            return function () {
                                if (0 === --a) {
                                    var b = {key: "rb", index: 0, id: l.e.C.id};
                                    l.j.X.Mj || (g.ze.Te.end(b), g.ze.Te.end(g.extend(b, {index: 1})))
                                }
                            }
                        }(), l.Au(d), l.qp += d.length, f = d.length - 1; 0 <= f; f -= 1) l.bh(d[f], l.Al, e)
                    }
                })
            }
        }, ex: function (a, b) {
            var c = this.sa.get(a + "");
            c || b || (c = new g.lb(a.ib()));
            return c
        }, vI: function (a, b) {
            return this.od * Math.pow(2, a - b)
        }, nz: function (a) {
            a.pr && this.Al.hZ(a.pr);
            a.hI = !1;
            a.loaded = !1;
            this.Ff && this.Ff(a)
        },
        Cw: function (a, b) {
            var c = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0) || this.ab, d = a.Md.x,
                e = a.Md.y, f = a.Zb.x, h = a.Zb.y;
            new g.G(0, 0);
            var k = this.vI(20, c);
            b && (f = Math.max(b[0], f) - b[0], h = Math.max(b[1], h) - b[1], d = Math.min(b[2], d) - b[0], e = Math.min(b[3], e) - b[1], new g.G(Math.floor(b[0] / k), Math.floor(b[1] / k)));
            d /= k;
            e /= k;
            d = {
                Hc: 0 === d % 1 ? d - 1 : Math.floor(d),
                Bc: 0 === e % 1 ? e - 1 : Math.floor(e),
                Ic: Math.floor(f / k),
                nc: Math.floor(h / k)
            };
            d.hC = d.Hc - d.Ic + 1;
            d.VH = d.Bc - d.nc + 1;
            d.z = c;
            d.S = this.S * Math.pow(2, this.zoom - c);
            d.gx = Math.ceil(d.hC /
                2);
            return d
        }, St: function (a, b, c) {
            return b < a.Ic || b > a.Hc || c < a.nc || c > a.Bc ? !1 : !0
        }, Au: function (a, b) {
            if (a.length) {
                var c = this.hb.Wc(this.od << 20 - a[0].oa.z), d = Math.floor(c.x), e = Math.floor(c.y);
                a.sort(function (a, c) {
                    var k = a.oa, l = c.oa, m = k.x - d, k = k.y - e, n = l.x - d, l = l.y - e;
                    return (b ? -1 : 1) * (n * n + l * l - (m * m + k * k))
                })
            }
        }, clear: function () {
            this.Al.clear()
        }, ao: function (a, b) {
            this.ag = !1;
            this.clear();
            this.zi = b.zi;
            this.yi = b.yi;
            this.od = b.od;
            var c = a.Q;
            this.nf = b.nf || a.Q.nf;
            this.Vg = c.Vg;
            this.size = a.size;
            this.rotation = c.rotation;
            this.hb =
                c.hb;
            this.Ja = a.Q.Ja;
            this.xf = a.xf;
            this.Se = a.Se;
            this.Cg = a.Cg;
            this.zoom = c.zoom;
            this.se = c.se;
            this.ab = !1 === this.di && !this.j.bP && this.j.ia ? this.se + 1 : this.se;
            this.Oe && this.ab > this.Oe && (this.ab = this.Oe);
            this.Vn && this.ab < this.Vn && (this.ab = this.Vn);
            this.S = c.S;
            this.Nf = c.Nf;
            c = a.Q.Ja;
            this.Jj = this.Cw(c, b.H);
            this.$u = c.P5 ? this.Cw(c.P5, b.H) : null;
            var c = this.Jj, d = this.Ja.F4, e = null, e = d < this.zoom && this.$u ? this.$u : c, f = [], h = [], k,
                l = [], m = [], n = [], p = new g.dq(0, 0, 0), q, r = this.zoom, m = this.$k || "", s = {}, u = {}, v,
                x, t, w, y, z;
            this.Td =
                1E6 * Math.random() << 0;
            for (q = m.length - 1; 0 <= q; q -= 1) if (k = m[q], !(k.zv < b.opacity)) if (p.z = k.oa.z, p.x = k.oa.x, p.y = k.oa.y, p.z === this.ab) s[p + ""] |= 16; else if (p.z < this.ab) {
                if (s[p + ""] |= 64, this.zi) for (w = this.ab - p.z, v = Math.max(c.Ic, p.x << w), r = Math.min(c.Hc, (p.x + 1 << w) - 1), x = Math.max(c.nc, p.y << w), t = Math.min(c.Bc, (p.y + 1 << w) - 1), p.z = this.ab, w = v; w <= r; w += 1) for (p.x = w, y = x; y <= t; y += 1) p.y = y, z = p + "", s[z] |= 32, u[z] = u[z] ? Math.max(k.oa.z, u[z]) : k.oa.z
            } else if (this.yi) for (v = 1; p.z >= this.ab;) {
                s[p + ""] |= v;
                v = p.x >> 1;
                x = p.y >> 1;
                r = v << 1;
                t = x << 1;
                k = 0;
                for (w = 2; 0 < w; w -= 1) for (p.x = r + w, y = 2; 0 < y; y -= 1) p.y = t + y, s[p + ""] & 5 && (k += 1);
                p.z -= 1;
                p.x = v;
                p.y = x;
                v = 4 === k ? 4 : 2
            }
            m = [];
            p.z = this.ab;
            q = !0;
            this.sa.rZ();
            for (w = e.Ic; w <= e.Hc; w += 1) for (p.x = w, y = e.nc; y <= e.Bc; y += 1) p.y = y, k = this.ex(p), this.Gs(k), v = !1, k.Ea ? (k.Td = this.Td, this.St(c, w, y) && (m.push(k), this.ek && (k.Uc !== this.Uc || 1 > k.zv) && (v = !0))) : (q = !1, this.St(c, w, y) && (v = !0), k.status && !k.pe || this.se !== d || this.$u && !this.St(this.$u, w, y) || l.push(k)), v && n.push(k);
            q ? (this.cB || (this.cB = !0), this.j.La || (k = {
                key: this.j.Ag ? "rl" : "rb", index: 1,
                id: this.e.C.id
            }, this.j.X.Mj || (g.ze.Te.end(k), g.ze.Te.push({
                key: "ftc",
                gf: m.length,
                id: this.e.C.id
            })))) : this.j.La = !1;
            this.ag = q;
            m.length && this.cB && (f.push(m), m.ag = q);
            h.push(l);
            d = !1;
            if (this.yi) {
                n = n.slice(0);
                e = [];
                for (q = n.length - 1; 0 <= q; q -= 1) k = n[q], s[k.key] & 4 || e.push(k);
                k = b.qd[1];
                for (r = this.ab + 1; n.length && r <= k; r += 1) {
                    m = [];
                    l = n;
                    n = [];
                    p.z = r;
                    for (q = l.length - 1; 0 <= q; q -= 1) if (w = l[q], v = s[w.key], v & 7) for (v = w.oa.x << 1, x = w.oa.y << 1, w = 1; 0 <= w; w -= 1) for (p.x = v + w, y = 1; 0 <= y; y -= 1) p.y = x + y, z = p + "", t = this.sa.PH(z), s[z] & 5 && t && t.Ea ? (t.Qz =
                        !0, t.Td = this.Td, m.push(t), this.Gs(t)) : n.push(new g.lb(p.ib()));
                    m.length && (d = !0, f.push(m))
                }
                n = e
            }
            if (!d && this.zi) for (w = !f.length || this.$i ? b.qd[0] : Math.max(b.qd[0], this.ab - 2), Math.max(w, this.ab - this.jba), r = this.ab - 1; n.length && r >= w; r -= 1) {
                m = [];
                y = {};
                l = n;
                n = [];
                for (q = l.length - 1; 0 <= q; q -= 1) k = l[q], p.z = r, p.x = k.oa.x >> 1, p.y = k.oa.y >> 1, k = this.ex(p), y[k.key] || (y[k.key] = 1, v = !1, k.Ea && (!this.mda || s[k.key] & 64) ? (p.x = Math.min(c.Hc, Math.max(c.Ic, p.x << this.ab - r)), p.y = Math.min(c.Bc, Math.max(c.nc, p.y << this.ab - r)), p.z = this.ab,
                    z = p + "", "number" === typeof u[z] && k.oa.z > u[z] ? v = !0 : k.Qz = !0, k.Td = this.Td, m.push(k), this.Gs(k)) : v = !0, v && n.push(k));
                m.length && f.push(m)
            }
            this.ER = h;
            this.au = this.qp = 0;
            this.Lm(h);
            this.Kg = f;
            this.j.set("tiles", f);
            this.mu(a, b)
        }, Gs: function (a) {
            this.sa.G1(a.Oxa)
        }, BO: function (a, b) {
            for (var c = [], d = this.e.C.getCoordsBoundByZoom(a), d = this.Cw(d, b, a), e = d.Ic; e < d.Hc; e++) for (var f = d.nc; f < d.Bc; f++) {
                var h = [a, e, f].join("/");
                this.sa.Pc(h) || c.push(new g.lb(new g.dq(a, e, f), !0))
            }
            return c
        }, XJ: function () {
            var a = this.e.C;
            return a.a3 &&
                a.get("preloadMode") && 200 <= this.sa.Co && this.j.X.Wt() && "stable" != this.xf && this.nw && this.nw() && this.zoom !== this.ab
        }, mu: function (a, b) {
            var c = b.H, d = b.qd;
            if (this.XJ() && this.ab >= d[0] + 1) {
                var d = [], e = null, e = "zoomOut" === this.xf ? Math.floor(this.zoom) : Math.ceil(this.zoom),
                    e = this.BO(e, c);
                e.length && d.push(e);
                d.length && this.Lm(d, !0)
            }
        }
    });
    g.O.Wd.ti = g.O.ti.extend({
        r: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.$m = 120;
            this.di = !1;
            this.xg();
            this.Oe = a.Oe;
            this.Vn = a.Vn
        }, yj: function () {
            return this.Ib
        }, xg: function () {
            this.Ib = document.createElement("div");
            this.Ib.className = this.j.X.get("className") || "amap-layer";
            this.Dt = document.createDocumentFragment()
        }, ru: function (a) {
            var b = Math.pow(2, a.Q.zoom - this.Qe), c = a.Q.hb.Ya(this.qr).Wc(this.Oj);
            this.transform = {translate: this.transform.translate.add(c), scale: b, rotate: 0};
            this.hb = a.Q.hb
        },
        PM: function (a, b) {
            if (!this.Ca || 3E4 < Math.abs(this.hb.x - this.Ca.x) / this.S || 3E4 < Math.abs(this.hb.y - this.Ca.y) / this.S) this.Ca = this.hb;
            this.Qe = this.se;
            this.Oj = this.Nf;
            this.ee = !1;
            this.currentTime = +new Date;
            this.$R = b.$R;
            var c = this.Jj;
            this.ek = this.$m && b.HF;
            var d = this.Kg, e = 256 * c.hC, c = 256 * c.VH;
            this.Se = this.zoom << 0 !== this.zoom;
            var f = this.hb.Ya(this.Ca);
            f.x < -g.a.za / 2 ? f.x += g.a.za : f.x > g.a.za / 2 && (f.x -= g.a.za);
            this.bN = f.Wc(this.Nf);
            return [d, e, c, b]
        }, Ux: function (a, b) {
            var c = this.PM(a, b);
            this.Kr.apply(this, c);
            this.uf(a);
            this.ag && !this.j.La && (c = this.j, c.X.Mj || g.ze.Te.end({
                key: "rb",
                index: 2,
                id: this.e.C.id
            }), c.La = !0, c.xd ? c.ka("renderComplete") : (c.xd = !0, c.ka("complete")))
        }, pc: function (a, b) {
            this.es = a.es;
            this.Cg = a.Cg;
            this.ao(a, b);
            this.qr && g.l.ll && (a.Se || a.Cg) ? this.ru(a, b) : this.Ux(a, b);
            this.qr = this.hb;
            this.ee && this.set("display", 0)
        }, qu: function () {
            for (var a = this.Ib.childNodes, b = a.length - 1; 0 <= b; b -= 1) a[b] && a[b].Uc !== this.Uc && this.Ib.removeChild(a[b])
        }, gC: function (a, b) {
            return a.nc === b.nc && a.Ic === b.Ic && a.Bc === b.Bc && a.Hc === b.Hc
        },
        Kr: function (a) {
            var b = this.Uc;
            this.Uc += 1;
            var c = !1, d, e, f;
            e = !1;
            var h = [];
            this.Ca.x - this.hb.x < -g.a.za / 2 ? this.Ca = new g.G(this.Ca.x + g.a.za, this.Ca.y) : this.Ca.x - this.hb.x > g.a.za / 2 && (this.Ca = new g.G(this.Ca.x - g.a.za, this.Ca.y));
            var k, l;
            for (d = a.length - 1; 0 <= d; d -= 1) if (f = a[d], f.length) {
                e = f[0].oa.z;
                var m, n, p = this.vI(this.se, e), q = !1;
                this.Hm && f.ag && f[0].oa.z == this.ab && (k = [], l = [], q = !0);
                for (var r = f.length - 1; 0 <= r; r -= 1) {
                    n = f[r];
                    q && n.ga && (k.push.apply(k, n.ga), l.push(n.oa + ""));
                    this.UQ(n);
                    if (this.Ca === n.Ca && n.Qe === this.Qe) {
                        var s =
                            n.$e;
                        if (s && s.parentNode === this.Ib && 1 === n.zv) {
                            h.push(n);
                            s.Uc = this.Uc;
                            n.Uc = this.Uc;
                            continue
                        }
                    }
                    n.Ca = this.Ca;
                    n.Qe = this.Qe;
                    m = n.oa;
                    var c = !0, u = (new g.G((m.x << 20 - e) * this.od, (m.y << 20 - e) * this.od)).Ya(this.Ca),
                        u = u.Wc(this.Nf);
                    u.x = g.a.Yc(u.x, 1);
                    u.y = g.a.Yc(u.y, 1);
                    var v = 1;
                    if (!n.qU || this.xT && n.Uc !== b) n.qU = this.currentTime;
                    this.ek && !n.Qz ? (s = Math.max(0, Math.abs(m.z - this.zoom) - 1), v = Math.min(1, (this.currentTime - n.qU) / (1 / Math.pow(1.32, s) * this.$m)), 1 !== v && (this.ee = !0)) : n.Qz = !1;
                    n.Uc = this.Uc;
                    n.zv = v;
                    n.Ea ? (s = n.$e, !s && n.Ob &&
                    n.Ob.$e && (s = n.Ob.$e), 0 !== v && s && (this.G_(s, u.x, u.y, p, p, v, m.z), s.parentNode !== this.Ib && (g.l.Wi && "overlayer" === this.j.get("type") && (s.style.display = "none"), this.Dt.appendChild(s)), s.Uc = this.Uc, n.se = this.se, h.push(n))) : n.Td = null
                }
                e = !0
            }
            this.Hm && k && (r = l.sort().join(";"), k.xP = r, r !== this.Hf.xP && (this.Hf = k));
            1 < a.length && (this.ee = !0);
            this.$k = h;
            this.qu();
            this.Ib.appendChild(this.Dt);
            return c || !e
        }, UQ: function () {
        }, uf: function () {
            this.transform = {translate: this.bN, scale: Math.pow(2, this.zoom - this.se), rotate: 0}
        }
    });
    window.CanvasRenderingContext2D && (window.CanvasRenderingContext2D.prototype.vN = function (a, b, c, d, e) {
        "undefined" === typeof e && (e = [10, 10]);
        this.moveTo(a, b);
        var f = c - a, h = d - b, k = Math.floor(Math.sqrt(f * f + h * h));
        d = f / k;
        c = h / k;
        e.hg = 0;
        for (var l = [], f = this.YF, m = 0, n = 0, p = !1, q = h = 0; q < e.length; q += 1) e.hg += e[q], l[q] = {
            $A: e[q] * d,
            aB: e[q] * c,
            rx: h += e[q]
        }, f -= e[q], 0 > f && !p && (m = q, n = -f, p = !0);
        for (p = 0; n + p <= k;) n < e[m] ? (f = n * d, h = n * c) : (f = l[m].$A, h = l[m].aB), a += f, b += h, this.yC ? this.moveTo(a, b) : this.lineTo(a, b), p += n, this.yC = !this.yC, n = e[(m + 1) %
        e.length], m = (m + 1) % e.length;
        k -= p;
        a += k * d;
        b += k * c;
        this.yC ? this.moveTo(a, b) : this.lineTo(a, b);
        this.YF = (this.YF + p + k) % e.hg
    }, window.CanvasRenderingContext2D.prototype.hia = function (a, b, c, d) {
        "undefined" === typeof d && (d = [10, 10]);
        var e = 2 * Math.PI * c, f = 0 >= d ? e : Math.round(e / (d[0] + d[1])), h = (d[0] + d[1]) / e * 2 * Math.PI;
        d = d[0] / e * 2 * Math.PI;
        for (e = 0; e < f; e += 1) this.beginPath(), this.arc(a, b, c, e * h, e * h + d), this.stroke()
    });
    g.O.re.Wk = g.O.ti.extend({
        r: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.xg()
        }, FO: function () {
            return this.Wa.yR
        }, yj: function () {
            return this.Ib
        }, xg: function () {
            this.Ib = document.createElement("div");
            this.Ib.className = "amap-markers";
            this.Wa = new g.O.re.Tc(this.Ib);
            this.Wa.j = this.j;
            this.L.J.appendChild(this.Ib)
        }, Zr: function (a, b) {
            this.Dt = b.Dt;
            this.ux = b;
            this.nf = a.Q.nf;
            this.S = a.Q.S;
            this.zoom = a.Q.zoom;
            this.size = a.size;
            this.Ja = a.Q.Ja;
            this.tp = a.S;
            this.gb = a.Q.hb;
            this.Vg = a.Q.Vg;
            var c = !1;
            if (!this.Ca ||
                500 < Math.abs(this.gb.x - this.Ca.x) / this.S || 500 < Math.abs(this.gb.y - this.Ca.y) / this.S) c = !0;
            if (c || this.zoom << 0 !== this.zoom || this.Qe !== this.zoom) this.Ca = this.gb, this.Qe = this.zoom
        }, Mt: function (a) {
            var b = a.Q.Ja.mc.y * this.S;
            a = a.Q.Ja.mc.x * this.S;
            return [this.gb.x - a, this.gb.y - b, this.gb.x + a, this.gb.y + b]
        }, qu: function () {
            if (this.zh && this.zh) for (var a in this.zh) if (this.zh.hasOwnProperty(a)) {
                var b = this.zh[a];
                b.Td !== this.Td && b.ca && this.L.bl.appendChild(b.ca)
            }
        }, pc: function (a, b) {
            this.Td = 1E6 * Math.random() << 0;
            this.Zr(a,
                b);
            this.Q = a.Q;
            this.size = a.size;
            var c = this.j;
            this.od = 256;
            var d, e;
            e = this.Mt(a);
            var f = 0;
            c.Em && (f = 50 * this.S);
            e[0] -= this.j.ef * this.S + f;
            e[1] -= this.j.Pf * this.S + f;
            e[2] += this.j.ef * this.S + f;
            e[3] += this.j.Pf * this.S + f;
            c = c.Cm(e);
            for (d in c) c.hasOwnProperty(d) && (c[d].Td = this.Td, c[d].t1 = this);
            this.qu(c);
            this.Zr.call(this.Wa, a, b);
            this.Wa.nC(c);
            this.zh = c;
            this.uf(a)
        }, uf: function () {
            var a = Math.pow(2, this.zoom - this.se);
            this.transform = {translate: this.Ca.Ya(this.gb).Wc(this.S), scale: a, rotate: 0}
        }
    });
    g.O.re.Tc = g.Z.extend({
        r: function (a) {
            this.Hk = a
        }, nC: function (a, b) {
            var c = document.createDocumentFragment(), d = b && b.nP ? null : {}, e = !0, f;
            for (f in a) if (a.hasOwnProperty(f)) {
                var h = a[f], k, l = h.get("params");
                if (h.ca) k = h.ca; else {
                    k = g.g.create("div");
                    k.className = "amap-marker";
                    var m = l.tg, n = l.f4;
                    m && k.appendChild(m);
                    n && k.appendChild(n);
                    h.ca = k;
                    h.tg = m;
                    if (n = l.title) m.title = n;
                    this.j.Em = !0;
                    -1 === g.a.indexOf(this.j.Eg, h) && this.j.Eg.push(h);
                    h.eg = !0
                }
                var n = l.offset, p = n.x, q = n.y, r = l.textAlign, s = l.verticalAlign, u = l.anchor, m = !1,
                    v, x;
                u && (u = u.split("-"), 2 === u.length ? (r = u[1], s = u[0]) : 1 === u.length && "center" === u[0] && (r = "center", s = "middle"));
                var t = g.g.fr(h.tg), u = t[0], t = t[1];
                if ("AMap.Text" == h.Mo || "AMap.Marker" == h.Mo) {
                    if (x = v = 0, k.parentNode !== this.Hk && d && (m = !0, d[f] = h, e = !1), !m) {
                        switch (r) {
                            case "center":
                                v = u / 2;
                                break;
                            case "right":
                                v = u
                        }
                        switch (s) {
                            case "middle":
                                x = t / 2;
                                break;
                            case "bottom":
                                x = t
                        }
                        p -= v;
                        q -= x
                    }
                } else v = -p, x = -q;
                var w, y;
                if (h.eg) {
                    var z = [];
                    w = this.Rq(h.ea.ta);
                    h.Ca = this.Ca;
                    y = l.dD;
                    q = Math.round(w[1] + q + y.y);
                    p = Math.round(w[0] + p + y.x);
                    z.push("top:" +
                        q + "px");
                    z.push("left:" + p + "px");
                    z.push("z-index:" + (l.f1 ? this.j.Tp + 10 : l.zIndex));
                    if (!g.l.cf) {
                        p = v;
                        q = x;
                        if ("AMap.Marker" == h.Mo) {
                            p = -n.x;
                            q = -n.y;
                            switch (r) {
                                case "center":
                                    p = -n.x + u / 2;
                                    q = -n.y + t / 2;
                                    break;
                                case "right":
                                    p = -n.x + u
                            }
                            switch (s) {
                                case "middle":
                                    q = -n.y + t / 2;
                                    break;
                                case "bottom":
                                    q = -n.y + t
                            }
                        }
                        z.push(g.g.W_(k, l.uw, {x: p, y: q}))
                    }
                    z.push("display:" + (l.visible ? "block" : "none") + ";");
                    k.style.cssText = z.join(";");
                    (n = l.label) && n.content && (l = l.k1, p = q = 0, n.offset && (q = n.offset.y + "px", p = n.offset.x + "px"), l.style.top = q, l.style.left = p,
                        k.appendChild(l))
                } else if (h.U6 || this.zoom << 0 !== this.zoom || h.zoom !== this.zoom || k.parentNode !== this.Hk || h.Ca !== this.Ca) w = this.Rq(h.ea.ta), h.Ca = this.Ca, y = l.dD, q = Math.round(w[1] + q + y.y), p = Math.round(w[0] + p + y.x), k.style.top = q + "px", k.style.left = p + "px";
                h.zoom = this.zoom;
                k.parentNode !== this.Hk && (g.l.Wi && g.a.iepngFix(k), c.appendChild(k), h.eg = m);
                k.Uz = this.Hk
            }
            this.Hk.appendChild(c);
            e || this.nC(d, {nP: !0})
        }, Rq: function (a) {
            var b = a[0] - this.Ca.x;
            b > g.a.za / 2 ? b -= g.a.za : b < -g.a.za / 2 && (b += g.a.za);
            return [b / this.S, (a[1] - this.Ca.y) /
            this.S]
        }
    });
    var Ac = g.w, Jc = g.l, fc = g.Z.ut, Kc = g.Boa, ga = document, Uc = !0, Vc = [];
    Jc.sf && Vc.push("touch");
    Jc.Y || Vc.push("mouse");
    Jc.zI && (Vc.push("vectorlayer", "overlay"), Jc.Pp ? Vc.push("wgl") : Vc.push("cgl"));
    if (Kc) {
        for (var Wc = [], Xc = Kc.split(","), wc = 0; wc < Xc.length; wc += 1) {
            var Yc = Xc[wc];
            fc[Yc] && Wc.push.apply(Wc, fc[Yc]);
            Wc.push(Yc)
        }
        Vc = Vc.concat(Wc)
    }
    Vc.push("sync");
    if (Jc.tr) {
        var Zc = !0, $c = [], ad = [];
        try {
            for (var wc = 0, bd = Vc.length; wc < bd; wc++) {
                var cd = JSON.parse(localStorage.getItem("_AMap_" + Vc[wc]));
                if (cd && cd.version === Ac.hj) $c.push(cd.script), cd.css && ad.push(cd.css); else {
                    $c = void 0;
                    Zc = !1;
                    break
                }
            }
        } catch (dd) {
            $c = ad = void 0, Zc = !1
        }
        if (Zc) try {
            ad.length && ed();
            var fd = $c.join(";");
            eval(fd)
        } catch (gd) {
            Uc = !1
        } else Uc = !1
    } else Uc = !1;
    if (Uc) for (wc = 0; wc < Vc.length; wc += 1) g.pb.NA(Vc[wc]).status = 1; else Ac.FB = !1, hd();

    function id() {
        for (var a = ga.getElementsByTagName("script"), b, c = 0; c < a.length; c += 1) if (0 === a[c].src.indexOf(Ac.vb + "/maps?")) {
            b = a[c];
            break
        }
        return Ac.zc || b && b.async
    }

    function hd() {
        var a = Ac.vb + "/maps/modules?v=" + Ac.Bq + "&key=" + Ac.key + "&vrs=" + Ac.hj + "&m=" + Vc.join(",");
        id() ? jd(a) : (ga.write('<script crossorigin="anonymous" id="amap_plus_js" src="' + a + '" type="text/javascript">\x3c/script>'), setTimeout(function () {
            ga.getElementById("amap_plus_js") || jd(a)
        }, 1))
    }

    function jd(a) {
        var b = ga.createElement("script");
        b.charset = "utf-8";
        b.src = a;
        b.id = "amap_plus_js";
        (a = ga.head || ga.getElementsByTagName("head")[0] || ga.body) && a.appendChild(b)
    }

    function ed() {
        var a = ad.join("\n"), b = ga.createElement("style");
        b.type = "text/css";
        -1 === Ac.vb.indexOf("webapi.amap.com") && (a = a.replace(/webapi.amap.com/gi, Ac.vb.split("://")[1]));
        "https" === Ac.vc && (a = a.replace(/http:/gi, "https:"));
        if (b.styleSheet) {
            var c = function () {
                try {
                    b.styleSheet.cssText = a
                } catch (c) {
                }
            };
            b.styleSheet.disabled ? setTimeout(c, 10) : c()
        } else b.appendChild(ga.createTextNode(a));
        c = ga.head || ga.getElementsByTagName("head")[0];
        2 > c.childNodes.length ? c.appendChild(b) : c.insertBefore(b, c.childNodes[1])
    }
    ;
})(["76ba25ab20604647577696d653a1ba50", [118.363373, 31.228098, 119.241663, 32.614363, 118.767413, 32.041544], "https://webapi.amap.com", 1, "1.4.13", null, "320100", "", true, true, true, true, "1550583208-1"])