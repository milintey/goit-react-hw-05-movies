"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(t,e,n){n.r(e),n.d(e,{Cast:function(){return f},default:function(){return h}});var r,a=n(885),u=n(2791),c=n(6871),i=n(3701),s=n(168),p=n(6444).ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n"]))),o=n(184),f=function(){var t=(0,u.useState)([]),e=(0,a.Z)(t,2),n=e[0],r=e[1],s=(0,c.UO)().movieId;if((0,u.useEffect)((function(){(0,i.IQ)(s).then((function(t){return r(t)}))}),[s]),n)return(0,o.jsx)("div",{children:(0,o.jsx)(p,{children:n.map((function(t){return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.profile_path),alt:"Film",width:"200px"}),(0,o.jsx)("p",{children:t.original_name})]},t.cast_id)}))})})},h=f},3701:function(t,e,n){n.d(e,{HI:function(){return f},IQ:function(){return l},Jh:function(){return g},LP:function(){return p},RL:function(){return v}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),i=n.n(c),s="6bfe9e7136eb9b0c49a32900d57df98b";function p(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s,"&page=1&language=en"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(s,"&page=1&language=en"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s,"&page=1&language=en"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(s,"&page=1&language=en"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(e,"&page=1&language=en"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=736.0844cfdd.chunk.js.map