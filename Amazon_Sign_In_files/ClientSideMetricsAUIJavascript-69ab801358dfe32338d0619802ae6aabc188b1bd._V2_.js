(function(a,d,w){function l(a){for(var b={},c,d,e=0;e<a.length;e++)d=a[e],c=d.r+d.s+d.m,d.c&&(b[c]||(b[c]=[]),b[c].push(a[e]));return b}function k(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];try{if(c.isSupported)return c.send(a)}catch(d){}}}function u(){for(var a=0;a<e.length;a++)e[a]();m.length&&k(l(m.splice(0,m.length)),M,L,G);F=I=0}function A(b,c,f){f=f||{};0===f.bf&&n.isBF||(b={r:f.r||n.rid,s:f.s||a.ue_sid,m:f.m||a.ue_mid,mkt:f.mkt||a.ue_mkt,sn:f.sn||a.ue_sn,c:c,d:b,t:f.t||n.d(),
cs:f.c&&a.ue_qsl},f.b?k(l([b]),M,G):f.nb?k(l([b]),M,L,G):f.img||K[c]?k(l([b]),G):f.ff?(m.push(b),u()):f.n?(m.push(b),0===N?u():F||(F=d.setTimeout(u,N))):(m.push(b),I||(I=d.setTimeout(u,J))))}function g(a,b,c){H++;H==h&&A({m:"Max number of Forester Logs exceeded",f:"forester-client.js",logLevel:"ERROR"},d.ue_err_chan||"jserr");(H<h||c&&c.il)&&A(a,b,c)}function v(){if(!D){for(var a=0;a<b.length;a++)b[a]();for(a=0;a<e.length;a++)e[a]();k(l(m.splice(0,m.length)),M,G);D=!0}}var x={};(function(){function a(b){return 10>
b?"0"+b:b}function b(a){d.lastIndex=0;return d.test(a)?'"'+a.replace(d,function(a){var b=h[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function c(a,d){var h,n,l,k,p=e,q,E=d[a];E&&"object"===typeof E&&"function"===typeof E.toJSON&&(E=E.toJSON(a));"function"===typeof m&&(E=m.call(d,a,E));switch(typeof E){case "string":return b(E);case "number":return isFinite(E)?String(E):"null";case "boolean":case "null":return String(E);case "object":if(!E)return"null";
e+=g;q=[];if("[object Array]"===Object.prototype.toString.apply(E)){k=E.length;for(h=0;h<k;h+=1)q[h]=c(h,E)||"null";l=0===q.length?"[]":e?"[\n"+e+q.join(",\n"+e)+"\n"+p+"]":"["+q.join(",")+"]";e=p;return l}if(m&&"object"===typeof m)for(k=m.length,h=0;h<k;h+=1)"string"===typeof m[h]&&(n=m[h],(l=c(n,E))&&q.push(b(n)+(e?": ":":")+l));else for(n in E)Object.prototype.hasOwnProperty.call(E,n)&&(l=c(n,E))&&q.push(b(n)+(e?": ":":")+l);l=0===q.length?"{}":e?"{\n"+e+q.join(",\n"+e)+"\n"+p+"}":"{"+q.join(",")+
"}";e=p;return l}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(b){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var d=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
e,g,h={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},m;"function"!==typeof x.stringify&&(x.stringify=function(a,b,d){var h;g=e="";if("number"===typeof d)for(h=0;h<d;h+=1)g+=" ";else"string"===typeof d&&(g=d);if((m=b)&&"function"!==typeof b&&("object"!==typeof b||"number"!==typeof b.length))throw Error("JSON.stringify");return c("",{"":a})})})();var r=function(){function a(b,c){if(null==b)return c.push("!n");if("number"===typeof b)return c.push("!"+b);if("string"===
typeof b)return"\\"==b[b.length-1]?c.push("'"+b.replace(/'/g,"\\'")+"u005C'"):c.push("'"+b.replace(/'/g,"\\'")+"'");if("boolean"===typeof b)return c.push(b?"!t":"!f");if(b instanceof Array){c.push("*");for(var d=0;d<b.length;d++)a(b[d],c);return c.push(")")}if("object"==typeof b){c.push("(");for(d in b)b.hasOwnProperty(d)&&(c.push(d),a(b[d],c));return c.push(")")}return c.push("!n")}return{stringify:function(b){var c=[];a(b,c);return c.join("")}}}(),p=a.ue_qsl||2E3,h=1E3,z=function(){},t=d.JSON&&
d.JSON.stringify||x&&x.stringify,C=r.stringify,n=a.ue||{},r=a.uet||z;(a.uet||z)("bb","ue_frst_v2",{wb:1});var c="//"+a.ue_furl+"/1/batch/1/OE/",m=[],b=[],e=[],D=!1,F,I,N=void 0===a.ue_hpfi?1E3:a.ue_hpfi,J=void 0===a.ue_lpfi?1E4:a.ue_lpfi,K={"scheduled-delivery":1},H=0,L=function(){function b(){if(d.XDomainRequest){var a=new XDomainRequest;a.onerror=z;a.ontimeout=z;a.onprogress=z;a.onload=z;a.timeout=0;return a}if(d.XMLHttpRequest){a=new XMLHttpRequest;if(!("withCredentials"in a))throw"";return a}if(d.ActiveXObject){for(var c=
0;c<f.length&&!a;c++)try{a=new ActiveXObject(f[c]),f=[f[c]]}catch(e){}return a}}function e(b){for(var c=[],d=b[0]||{},f=0;f<b.length;f++){var g={};g[b[f].c]=b[f].d;c.push(g)}return{rid:d.r||n.rid,sid:d.s||a.ue_sid,mid:d.m||a.ue_mid,mkt:d.mkt||a.ue_mkt,sn:d.sn||a.ue_sn,reqs:c}}var f="MSXML2.XMLHTTP.6.0 MSXML2.XMLHTTP.5.0 MSXML2.XMLHTTP.4.0 MSXML2.XMLHTTP.3.0 MSXML2.XMLHTTP Microsoft.XMLHTTP".split(" ");return{send:function(a){for(var d in a)if(a.hasOwnProperty(d)&&a[d].length){var f=e(a[d]),g=b();
if(!g)throw"";g.open("POST",c,!0);g.setRequestHeader&&g.setRequestHeader("Content-type","text/plain");g.send(t(f))}},buildPOSTBodyLog:e,isSupported:!0}}(),G=function(){return{send:function(b){for(var d in b)if(b.hasOwnProperty(d)){for(var f=b[d],e=f,g={},h=void 0,m=0;m<e.length;m++)h=e[m].c,g[h]||(g[h]=[]),g[h].push(e[m]);var f=f[0]||{},e=f.sn||a.ue_sn,f=c+(f.m||a.ue_mid)+":"+(f.s||a.ue_sid)+":"+(f.r||n.rid)+(e?":"+e:""),e=[],h=f,m=[],l=void 0;for(l in g)if(g.hasOwnProperty(l))for(var k=0;k<g[l].length;k++){var r=
g[l][k],v=encodeURIComponent((r.cs?C:t)(r.d));m.push({l:v,t:r.t,p:1,c:l,d:r.cs?"c":"j"})}g=m;m=void 0;l="$";for(r=0;r<g.length;){k=g[r];m!=k.c?(h+=l+k.c+"=",l="&",m=k.c):h+=",";var v=h,u=k.d+":",w=k,h=(w.l.match(".{1,"+(p-h.length)+"}[^%]{0,2}")||[])[0]||"";w.l=w.l.substr(h.length);h=v+(u+h+":"+k.t);if(k.l)h+=":"+k.p++ +"_",e.push(h),h=f,l="$",m=0;else if(r++,1!=k.p)for(h+=":"+k.p+"_"+k.p,v=0;v<k.p-1;v++)e[e.length-v-1]+=k.p}e.push(h);f=e;for(e=0;e<f.length;e++)(new Image).src=f[e]}},isSupported:!0}}(),
M=function(){return{send:function(a){for(var b in a)if(a.hasOwnProperty(b)){var d=L.buildPOSTBodyLog(a[b]);if(!navigator.sendBeacon(c,t(d)))throw"";}},isSupported:!!navigator.sendBeacon}}();n._fic=G;n._fac=L;n._fbc=M;n._flq=m;n.sid=n.sid||a.ue_sid;n.mid=n.mid||a.ue_mid;n.furl=n.furl||a.ue_furl;n.sn=n.sn||a.ue_sn;n.isBF=function(){var a=d.performance||d.webkitPerformance,b=w.ue_backdetect&&w.ue_backdetect.ue_back&&document.ue_backdetect.ue_back.value,c=n.bfini;return a&&a.navigation&&2===a.navigation.type||
1<c||!c&&1<b}();try{d.amznJQ&&d.amznJQ.declareAvailable&&d.amznJQ.declareAvailable("forester-client"),d.P&&d.P.register&&d.P.register("forester-client",z)}catch(O){a.ueLogError(O,{logLevel:"WARN"})}(function(){n.log&&n.log.isStub&&(n.log.replay(function(a,b,c){var d=a[2]||{};d.t=b;d.r=c;d.n=1;g(a[0],a[1],d)}),n.onunload.replay(function(a){b.push(a[0])}),n.onflush.replay(function(a){e.push(a[0])}))})();n.log=g;n.log.reset=function(){H=0};n.onunload=function(a){b.push(a)};n.onflush=function(a){e.push(a)};
n.attach("beforeunload",v);n.attach("pagehide",v);r("ld","ue_frst_v2",{wb:1})})(ue_csm,window,document);
(function(a,d){function w(a){if(a)return a.replace(/^\s+|\s+$/g,"")}function l(c,d){if(!c)return{};var b="INFO"===d.logLevel;c.m&&c.m.message&&(c=c.m);var e=d.m||d.message||"",e=c.m&&c.m.message?e+c.m.message:c.m&&c.m.target&&c.m.target.tagName?e+("Error handler invoked by "+c.m.target.tagName+" tag"):c.m?e+c.m:c.message?e+c.message:e+"Unknown error",e={m:e,name:c.name,type:c.type,csm:h+" "+(c.fromOnError?"onerror":"ueLogError")},g,l,p=0,r;e.logLevel=d.logLevel||v;d.adb&&(e.adb=d.adb);if(g=d.attribution)e.attribution=
""+g;if(!b){e.pageURL=d.pageURL||""+(window.location?window.location.href:"")||"missing";e.f=c.f||c.sourceURL||c.fileName||c.filename||c.m&&c.m.target&&c.m.target.src;e.l=c.l||c.line||c.lineno||c.lineNumber;e.c=c.c?""+c.c:c.c;e.s=[];e.t=a.ue.d();if((b=c.stack||(c.err?c.err.stack:""))&&b.split)for(e.csm+=" stack",g=b.split("\n");p<g.length&&e.s.length<z;)(b=g[p++])&&e.s.push(w(b));else for(e.csm+=" callee",l=k(c.args||arguments,"callee"),g=p=0;l&&p<z;)r=t,l.skipTrace||(b=l.toString())&&b.substr&&(r=
0===g?4*t:r,r=1==g?2*t:r,e.s.push(b.substr(0,r)),g++),l=k(l,"caller"),p++;if(!e.f&&0<e.s.length&&(p=e)&&p.s){var u,b=0<p.s.length?p.s[0]:"";g=1<p.s.length?p.s[1]:"";b&&(u=b.match(n));u&&3==u.length||!g||(u=g.match(C));u&&3==u.length&&(p.f=u[1],p.l=u[2])}}return e}function k(a,d){try{return a[d]}catch(b){}}function u(c,h){if(c){var b=l(c,h);a.ue.log(b,h.channel||g,{nb:1});"function"===typeof ue_err.elh&&ue_err.elh(c,h);try{if(!c.fromOnError){var e=d.console,n=d.JSON,k="Error logged with the Track&Report JS errors API(http://tiny/1covqr6l8/wamazindeClieUserJava): ";
if(e){if(n&&n.stringify)try{k+=n.stringify(b)}catch(p){k+="no info provided; converting to string failed"}else k+=b.m;"function"===typeof e.error?e.error(k,b):"function"===typeof e.log&&e.log(k,b)}}}catch(r){}}}function A(c,d){if(c&&!(a.ue_err.ec>a.ue_err.mxe)){a.ue_err.ter.push(c);d=d||{};var b=c.logLevel||d.logLevel;d.logLevel=b;d.attribution=c.attribution||d.attribution;b&&b!==v&&b!==x&&b!==r&&b!==p||a.ue_err.ec++;b&&b!=v||ue_err.ecf++;u(c,d)}}if(!a.ueLogError||a.ueLogError.isStub){var g=a.ue_err_chan||
"jserr",v="FATAL",x="ERROR",r="WARN",p="DOWNGRADED",h="v5",z=20,t=256,C=/\(?([^\s]*):(\d+):\d+\)?/,n=/.*@(.*):(\d*)/;u.skipTrace=1;l.skipTrace=1;A.skipTrace=1;(function(){if(a.ue_err.erl){var c=a.ue_err.erl.length,d,b;for(d=0;d<c;d++)b=a.ue_err.erl[d],u(b.ex,b.info);ue_err.erl=[]}})();a.ueLogError=A}})(ue_csm,window);