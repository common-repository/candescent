!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=8)}([function(t,e){t.exports=window.wp.element},function(t,e){t.exports=window.wp.components},function(t,e,r){var n;!function(o){var a=/^\s+/,i=/\s+$/,s=0,l=o.round,c=o.min,u=o.max,f=o.random;function h(t,e){if(e=e||{},(t=t||"")instanceof h)return t;if(!(this instanceof h))return new h(t,e);var r=function(t){var e,r,n,s={r:0,g:0,b:0},l=1,f=null,h=null,g=null,d=!1,b=!1;return"string"==typeof t&&(t=function(t){t=t.replace(a,"").replace(i,"").toLowerCase();var e,r=!1;if(H[t])t=H[t],r=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};return(e=G.rgb.exec(t))?{r:e[1],g:e[2],b:e[3]}:(e=G.rgba.exec(t))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=G.hsl.exec(t))?{h:e[1],s:e[2],l:e[3]}:(e=G.hsla.exec(t))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=G.hsv.exec(t))?{h:e[1],s:e[2],v:e[3]}:(e=G.hsva.exec(t))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=G.hex8.exec(t))?{r:P(e[1]),g:P(e[2]),b:P(e[3]),a:D(e[4]),format:r?"name":"hex8"}:(e=G.hex6.exec(t))?{r:P(e[1]),g:P(e[2]),b:P(e[3]),format:r?"name":"hex"}:(e=G.hex4.exec(t))?{r:P(e[1]+""+e[1]),g:P(e[2]+""+e[2]),b:P(e[3]+""+e[3]),a:D(e[4]+""+e[4]),format:r?"name":"hex8"}:!!(e=G.hex3.exec(t))&&{r:P(e[1]+""+e[1]),g:P(e[2]+""+e[2]),b:P(e[3]+""+e[3]),format:r?"name":"hex"}}(t)),"object"==typeof t&&(U(t.r)&&U(t.g)&&U(t.b)?(e=t.r,r=t.g,n=t.b,s={r:255*z(e,255),g:255*z(r,255),b:255*z(n,255)},d=!0,b="%"===String(t.r).substr(-1)?"prgb":"rgb"):U(t.h)&&U(t.s)&&U(t.v)?(f=T(t.s),h=T(t.v),s=function(t,e,r){t=6*z(t,360),e=z(e,100),r=z(r,100);var n=o.floor(t),a=t-n,i=r*(1-e),s=r*(1-a*e),l=r*(1-(1-a)*e),c=n%6;return{r:255*[r,s,i,i,l,r][c],g:255*[l,r,r,s,i,i][c],b:255*[i,i,l,r,r,s][c]}}(t.h,f,h),d=!0,b="hsv"):U(t.h)&&U(t.s)&&U(t.l)&&(f=T(t.s),g=T(t.l),s=function(t,e,r){var n,o,a;function i(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}if(t=z(t,360),e=z(e,100),r=z(r,100),0===e)n=o=a=r;else{var s=r<.5?r*(1+e):r+e-r*e,l=2*r-s;n=i(l,s,t+1/3),o=i(l,s,t),a=i(l,s,t-1/3)}return{r:255*n,g:255*o,b:255*a}}(t.h,f,g),d=!0,b="hsl"),t.hasOwnProperty("a")&&(l=t.a)),l=E(l),{ok:d,format:t.format||b,r:c(255,u(s.r,0)),g:c(255,u(s.g,0)),b:c(255,u(s.b,0)),a:l}}(t);this._originalInput=t,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=l(100*this._a)/100,this._format=e.format||r.format,this._gradientType=e.gradientType,this._r<1&&(this._r=l(this._r)),this._g<1&&(this._g=l(this._g)),this._b<1&&(this._b=l(this._b)),this._ok=r.ok,this._tc_id=s++}function g(t,e,r){t=z(t,255),e=z(e,255),r=z(r,255);var n,o,a=u(t,e,r),i=c(t,e,r),s=(a+i)/2;if(a==i)n=o=0;else{var l=a-i;switch(o=s>.5?l/(2-a-i):l/(a+i),a){case t:n=(e-r)/l+(e<r?6:0);break;case e:n=(r-t)/l+2;break;case r:n=(t-e)/l+4}n/=6}return{h:n,s:o,l:s}}function d(t,e,r){t=z(t,255),e=z(e,255),r=z(r,255);var n,o,a=u(t,e,r),i=c(t,e,r),s=a,l=a-i;if(o=0===a?0:l/a,a==i)n=0;else{switch(a){case t:n=(e-r)/l+(e<r?6:0);break;case e:n=(r-t)/l+2;break;case r:n=(t-e)/l+4}n/=6}return{h:n,s:o,v:s}}function b(t,e,r,n){var o=[N(l(t).toString(16)),N(l(e).toString(16)),N(l(r).toString(16))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function p(t,e,r,n){return[N(B(n)),N(l(t).toString(16)),N(l(e).toString(16)),N(l(r).toString(16))].join("")}function m(t,e){e=0===e?0:e||10;var r=h(t).toHsl();return r.s-=e/100,r.s=M(r.s),h(r)}function v(t,e){e=0===e?0:e||10;var r=h(t).toHsl();return r.s+=e/100,r.s=M(r.s),h(r)}function _(t){return h(t).desaturate(100)}function y(t,e){e=0===e?0:e||10;var r=h(t).toHsl();return r.l+=e/100,r.l=M(r.l),h(r)}function x(t,e){e=0===e?0:e||10;var r=h(t).toRgb();return r.r=u(0,c(255,r.r-l(-e/100*255))),r.g=u(0,c(255,r.g-l(-e/100*255))),r.b=u(0,c(255,r.b-l(-e/100*255))),h(r)}function k(t,e){e=0===e?0:e||10;var r=h(t).toHsl();return r.l-=e/100,r.l=M(r.l),h(r)}function w(t,e){var r=h(t).toHsl(),n=(r.h+e)%360;return r.h=n<0?360+n:n,h(r)}function A(t){var e=h(t).toHsl();return e.h=(e.h+180)%360,h(e)}function S(t){var e=h(t).toHsl(),r=e.h;return[h(t),h({h:(r+120)%360,s:e.s,l:e.l}),h({h:(r+240)%360,s:e.s,l:e.l})]}function O(t){var e=h(t).toHsl(),r=e.h;return[h(t),h({h:(r+90)%360,s:e.s,l:e.l}),h({h:(r+180)%360,s:e.s,l:e.l}),h({h:(r+270)%360,s:e.s,l:e.l})]}function F(t){var e=h(t).toHsl(),r=e.h;return[h(t),h({h:(r+72)%360,s:e.s,l:e.l}),h({h:(r+216)%360,s:e.s,l:e.l})]}function j(t,e,r){e=e||6,r=r||30;var n=h(t).toHsl(),o=360/r,a=[h(t)];for(n.h=(n.h-(o*e>>1)+720)%360;--e;)n.h=(n.h+o)%360,a.push(h(n));return a}function C(t,e){e=e||6;for(var r=h(t).toHsv(),n=r.h,o=r.s,a=r.v,i=[],s=1/e;e--;)i.push(h({h:n,s:o,v:a})),a=(a+s)%1;return i}h.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,r,n=this.toRgb();return t=n.r/255,e=n.g/255,r=n.b/255,.2126*(t<=.03928?t/12.92:o.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:o.pow((e+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:o.pow((r+.055)/1.055,2.4))},setAlpha:function(t){return this._a=E(t),this._roundA=l(100*this._a)/100,this},toHsv:function(){var t=d(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=d(this._r,this._g,this._b),e=l(360*t.h),r=l(100*t.s),n=l(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+n+"%)":"hsva("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=g(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=g(this._r,this._g,this._b),e=l(360*t.h),r=l(100*t.s),n=l(100*t.l);return 1==this._a?"hsl("+e+", "+r+"%, "+n+"%)":"hsla("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return b(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,e,r,n,o){var a=[N(l(t).toString(16)),N(l(e).toString(16)),N(l(r).toString(16)),N(B(n))];return o&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:l(this._r),g:l(this._g),b:l(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+l(this._r)+", "+l(this._g)+", "+l(this._b)+")":"rgba("+l(this._r)+", "+l(this._g)+", "+l(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:l(100*z(this._r,255))+"%",g:l(100*z(this._g,255))+"%",b:l(100*z(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+l(100*z(this._r,255))+"%, "+l(100*z(this._g,255))+"%, "+l(100*z(this._b,255))+"%)":"rgba("+l(100*z(this._r,255))+"%, "+l(100*z(this._g,255))+"%, "+l(100*z(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(R[b(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+p(this._r,this._g,this._b,this._a),r=e,n=this._gradientType?"GradientType = 1, ":"";if(t){var o=h(t);r="#"+p(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0;return e||!n||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return h(this.toString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(y,arguments)},brighten:function(){return this._applyModification(x,arguments)},darken:function(){return this._applyModification(k,arguments)},desaturate:function(){return this._applyModification(m,arguments)},saturate:function(){return this._applyModification(v,arguments)},greyscale:function(){return this._applyModification(_,arguments)},spin:function(){return this._applyModification(w,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(j,arguments)},complement:function(){return this._applyCombination(A,arguments)},monochromatic:function(){return this._applyCombination(C,arguments)},splitcomplement:function(){return this._applyCombination(F,arguments)},triad:function(){return this._applyCombination(S,arguments)},tetrad:function(){return this._applyCombination(O,arguments)}},h.fromRatio=function(t,e){if("object"==typeof t){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]="a"===n?t[n]:T(t[n]));t=r}return h(t,e)},h.equals=function(t,e){return!(!t||!e)&&h(t).toRgbString()==h(e).toRgbString()},h.random=function(){return h.fromRatio({r:f(),g:f(),b:f()})},h.mix=function(t,e,r){r=0===r?0:r||50;var n=h(t).toRgb(),o=h(e).toRgb(),a=r/100;return h({r:(o.r-n.r)*a+n.r,g:(o.g-n.g)*a+n.g,b:(o.b-n.b)*a+n.b,a:(o.a-n.a)*a+n.a})},h.readability=function(t,e){var r=h(t),n=h(e);return(o.max(r.getLuminance(),n.getLuminance())+.05)/(o.min(r.getLuminance(),n.getLuminance())+.05)},h.isReadable=function(t,e,r){var n,o,a,i,s,l=h.readability(t,e);switch(o=!1,(a=r,"AA"!==(i=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==i&&(i="AA"),"small"!==(s=(a.size||"small").toLowerCase())&&"large"!==s&&(s="small"),n={level:i,size:s}).level+n.size){case"AAsmall":case"AAAlarge":o=l>=4.5;break;case"AAlarge":o=l>=3;break;case"AAAsmall":o=l>=7}return o},h.mostReadable=function(t,e,r){var n,o,a,i,s=null,l=0;o=(r=r||{}).includeFallbackColors,a=r.level,i=r.size;for(var c=0;c<e.length;c++)(n=h.readability(t,e[c]))>l&&(l=n,s=h(e[c]));return h.isReadable(t,s,{level:a,size:i})||!o?s:(r.includeFallbackColors=!1,h.mostReadable(t,["#fff","#000"],r))};var H=h.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},R=h.hexNames=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}(H);function E(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function z(t,e){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var r=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(t);return t=c(e,u(0,parseFloat(t))),r&&(t=parseInt(t*e,10)/100),o.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function M(t){return c(1,u(0,t))}function P(t){return parseInt(t,16)}function N(t){return 1==t.length?"0"+t:""+t}function T(t){return t<=1&&(t=100*t+"%"),t}function B(t){return o.round(255*parseFloat(t)).toString(16)}function D(t){return P(t)/255}var I,q,L,G=(q="[\\s|\\(]+("+(I="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+I+")[,|\\s]+("+I+")\\s*\\)?",L="[\\s|\\(]+("+I+")[,|\\s]+("+I+")[,|\\s]+("+I+")[,|\\s]+("+I+")\\s*\\)?",{CSS_UNIT:new RegExp(I),rgb:new RegExp("rgb"+q),rgba:new RegExp("rgba"+L),hsl:new RegExp("hsl"+q),hsla:new RegExp("hsla"+L),hsv:new RegExp("hsv"+q),hsva:new RegExp("hsva"+L),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function U(t){return!!G.CSS_UNIT.exec(t)}t.exports?t.exports=h:void 0===(n=function(){return h}.call(e,r,e,t))||(t.exports=n)}(Math)},function(t,e){t.exports=window.wp.blockEditor},function(t,e){function r(){return t.exports=r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},t.exports.default=t.exports,t.exports.__esModule=!0,r.apply(this,arguments)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=window.lodash},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n=r(4),o=r.n(n),a=r(0),i=(r(7),r(3)),s=r(5),l=r.n(s),c=r(1),u=r(2),f=r.n(u),h=wp.element.createElement("svg",{width:20,height:20},wp.element.createElement("path",{d:"M15.63,8.52a17.28,17.28,0,0,0-1.9-2.29c0,3.18-1.62,4.88-3.73,5.66,2.77-1.51,2.17-8.76-.09-11.5-.54,1.85-1.52,3-2.86,4.87C6.58,5.93,5.54,7,4.37,8.52A6.89,6.89,0,0,0,3,12.63a7,7,0,0,0,14,0A6.89,6.89,0,0,0,15.63,8.52Z"}));function g(t){var e=0,r=0;return t.fontSize?0==(r=d(t.fontSize))&&(e=1):t.style&&t.style.typography&&t.style.typography.fontSize?r=t.style.typography.fontSize:e=1,0==e&&(r<14&&(e=2),r>108&&(e=3)),e}function d(t){var e=wp.data.select("core/editor").getEditorSettings().fontSizes;for(var r in e)if(e[r].slug==t)return e[r].size;return 0}function b(t){var e,r,n=0,o=0;if(t.fontSize?o=d(t.fontSize):t.style&&t.style.typography&&t.style.typography.fontSize&&(o=t.style.typography.fontSize),t.backgroundColor?0==(e=f()(p(t.backgroundColor)))&&(n=1):t.style&&t.style.color&&t.style.color.background?e=f()(t.style.color.background):n=1,t.textColor?0==(r=f()(p(t.textColor)))&&(n=1):t.style&&t.style.color&&t.style.color.text?r=f()(t.style.color.text):n=1,0==n){var a=1!==e.getAlpha()||1!==r.getAlpha(),i=f.a.isReadable(e,r,{level:"AA",size:o>=24?"large":"small"});a?n=1:i||(e.getBrightness()<r.getBrightness()?n=2:e.getBrightness()>r.getBrightness()?n=3:e.getBrightness()==r.getBrightness()&&(n=4))}return n}function p(t){var e=wp.data.select("core/editor").getEditorSettings().colors;for(var r in e)if(e[r].slug==t)return e[r].color;return 0}function m(t){var e=0;return t.link||t.url?t.alt||(e=2):e=1,e}var v=[{icon:"editor-textcolor",title:"Font Size",slug:"size",onClick:function(){return wp.data.dispatch("core/edit-post").openGeneralSidebar("edit-post/block")},status:[{msg:"Font Size looks good!"},{msg:"Unable to Determine Font Size."},{msg:"Font Size Too Small"},{msg:"Font Size Too Large"}],validationFunction:function(t){return g(t)}},{icon:"admin-customizer",title:"Contrast",slug:"color",onClick:function(){return wp.data.dispatch("core/edit-post").openGeneralSidebar("edit-post/block")},status:[{msg:"Font Color looks good!"},{msg:"Unable to Determine Font Colors."},{msg:"Font Too Dark/Background Too Bright"},{msg:"Font Too Bright/Background Too Dark"},{msg:"Font and Background Color Match."}],validationFunction:function(t){return b(t)}},{icon:"info",title:"Other",slug:"other",onClick:function(){return wp.data.dispatch("core/edit-post").openGeneralSidebar("edit-post/block")},status:[{msg:"Everything looks good!"},{msg:"Mud in the Flaps."},{msg:"Not enough cowbell!"},{msg:"Who let the dogs out?"}],validationFunction:function(t){return 0}}],_=[{icon:"editor-textcolor",title:"Alt-Text",slug:"alt-text",onClick:function(){return wp.data.dispatch("core/edit-post").openGeneralSidebar("edit-post/block")},status:[{msg:"Alt-Text looks good!"},{msg:"No Image Set"},{msg:"Alt Text is Missing"}],validationFunction:function(t){return m(t)}}];function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){l()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var k=r(6);function w(t){var e=t.name,r=t.attributes,n="candescent";return n+=function(t,e){var r=!1;return"core/paragraph"==t?(r=g(e)>1||r,r=r=b(e)>1||r):"core/image"==t&&(r=m(e)>1||r),r}(e,r)?" candescent-active":"",n+=r.className?" "+r.className:"","core/paragraph"==e||"core/image"==e?Object(a.createElement)("div",{className:n},function(t,e,r){return Object(a.createElement)(i.BlockControls,null,function(t,e,r){var n;return"core/paragraph"==e?n=v:"core/image"==e&&(n=_),Object(a.createElement)(c.DropdownMenu,{className:"components-toolbar block-menu "+t,isCollapsed:!0,label:"Candescent Menu",icon:h,popoverProps:{className:t},controls:n.map((function(t){var e=t.validationFunction(r)>1;return x(x({},t),{},{isActive:e})}))})}(t,e,r))}(n,e,r),function(t,e,r){return Object(a.createElement)(i.InspectorControls,null,function(t,e,r){var n;return"core/paragraph"==e?n=v:"core/image"==e&&(n=_),Object(a.createElement)(c.PanelBody,{title:"Candescent",icon:h,className:t.concat(" inspectormenu-toggle")},Object(a.createElement)("div",null,Object(a.createElement)("span",{className:"dashicons dashicons-welcome-comments"}),"Issues:"),Object(k.flatMap)(n,(function(e,n){return Object(a.createElement)(c.Toolbar,{className:t.concat(" inspectormenu"),style:{width:"100%"}},Object(a.createElement)(c.IconButton,{key:n,onClick:function(){},className:t.concat(" inspectorbutton").concat(e.validationFunction(r)>1?" is-active":""),icon:e.icon,style:{width:"100%",justifyContent:"start"},role:"menuitem"},e.title),e.status[e.validationFunction(r)].msg)})))}(t,e,r))}(n,e,r)):""}var A=wp.compose.createHigherOrderComponent,S=wp.element.Fragment,O=A((function(t){return function(e){return Object(a.createElement)(S,null,Object(a.createElement)(t,o()({},e,{className:"collapsed"})),w(e))}}),"withCandescent");wp.hooks.addFilter("editor.BlockEdit","candescent/block-filter",O)}]);