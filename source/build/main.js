!function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/blog/build/",t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={};i.isIE=function(e){var t=document.createElement("b");return t.innerHTML="\x3c!--[if IE "+e+"]><i></i><![endif]--\x3e",1===t.getElementsByTagName("i").length},i.sealScroll=function(){$("body").css({overflow:"hidden"})},i.unlockScroll=function(){$("body").css({overflow:"visible"})},i.excAndExcOnResizing=function(e,t){t||(t=[]),e.apply([],t),$(window).resize(function(){e.apply(null,t)})},i.addScriptToHead=function(e){$("head").append("<script src='"+e+"'><\/script>")},i.addScriptInBody=function(e){$("body").append("<script src='"+e+"'><\/script>")},t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}n(2);var a=n(0),s=i(a),l=n(4),o=i(l),r=n(5),c=i(r);s.default.isIE()&&$("body").addClass("_ie"),hljs.initHighlightingOnLoad(),s.default.excAndExcOnResizing(function(){c.default.layoutContent(".content-plus"),o.default.init()})},function(e,t){e.exports={"hljs-comment":"hljs-comment","hljs-quote":"hljs-quote","hljs-variable":"hljs-variable","hljs-template-variable":"hljs-template-variable","hljs-attribute":"hljs-attribute","hljs-tag":"hljs-tag","hljs-name":"hljs-name","hljs-regexp":"hljs-regexp","hljs-link":"hljs-link","hljs-selector-id":"hljs-selector-id","hljs-selector-class":"hljs-selector-class","hljs-number":"hljs-number","hljs-meta":"hljs-meta","hljs-built_in":"hljs-built_in","hljs-builtin-name":"hljs-builtin-name","hljs-literal":"hljs-literal","hljs-type":"hljs-type","hljs-params":"hljs-params","hljs-string":"hljs-string","hljs-symbol":"hljs-symbol","hljs-bullet":"hljs-bullet","hljs-title":"hljs-title","hljs-section":"hljs-section","hljs-keyword":"hljs-keyword","hljs-selector-tag":"hljs-selector-tag","hljs-deletion":"hljs-deletion","hljs-addition":"hljs-addition",hljs:"hljs","hljs-emphasis":"hljs-emphasis","hljs-strong":"hljs-strong","no-csschunit":"no-csschunit","container-fluid":"container-fluid",container:"container",clearfix:"clearfix",left:"left",right:"right",sep:"sep",link:"link",colophon:"colophon",links:"links","nav-menu":"nav-menu",post:"post","more-link":"more-link","content-plus":"content-plus",branding:"branding",wrap:"wrap",logo:"logo",icon:"icon","no-svg":"no-svg",subtitle:"subtitle",active:"active","page-info-inner":"page-info-inner",hash:"hash","author-bio":"author-bio","author-stats":"author-stats","author-location":"author-location","page-description":"page-description","page-content":"page-content",comments:"comments","nav-bottom":"nav-bottom",text:"text","nav-link":"nav-link","nav-title":"nav-title",excerpt:"excerpt",next:"next","nav-pagination":"nav-pagination","page-number":"page-number",info:"info","nav-email":"nav-email","post--index":"post--index","post-header":"post-header","post-date":"post-date","post-title":"post-title","post-link":"post-link","post-meta":"post-meta","article-share-link":"article-share-link","article-category":"article-category","article-category-link":"article-category-link","post-tag-list":"post-tag-list","post-tag-list-item":"post-tag-list-item","post-tag-list-link":"post-tag-list-link","page-content--archive":"page-content--archive","page-content-inner":"page-content-inner","archives-wrap":"archives-wrap","archive-year-wrap":"archive-year-wrap",archives:"archives","archive-post":"archive-post","archive-post-date":"archive-post-date",toc:"toc","mobile-menu-enabled":"mobile-menu-enabled","mobile-menu-open":"mobile-menu-open","nav-menu-float":"nav-menu-float",title:"title",backdrop:"backdrop","mobile-menu-closed":"mobile-menu-closed","article-share-box":"article-share-box",on:"on","article-share-input":"article-share-input","article-share-links":"article-share-links","article-share-twitter":"article-share-twitter","article-share-facebook":"article-share-facebook","article-share-pinterest":"article-share-pinterest","article-share-google":"article-share-google","icon-animated":"icon-animated","icon-animated-menu":"icon-animated-menu","state-1":"state-1",_ie:"_ie","state-2":"state-2"}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(i),s={};s.menu_icon=null,s.nav_float=null,s.nav_ul=null,s.is_initialized=!1,s.init=function(){$(window).width()<=768&&!this.is_initialized?($("body").append("<div class='nav-menu-float'><div class='title'>"+window.__BLOG_NAME__+"</div></div><div class='backdrop'></div>").addClass("mobile-menu-enabled mobile-menu-closed"),$(".branding .wrap").append("<span class='icon icon-animated icon-animated-menu state-1'></span>"),this.nav_float=$(".nav-menu-float"),this.nav_ul=$(".branding ul.nav-menu"),this.nav_float.append(this.nav_ul),this.is_initialized=!0):$(window).width()>768&&this.is_initialized&&($("body").hasClass("mobile-menu-open")&&this.close(),$("body").removeClass("mobile-menu-enabled mobile-menu-closed"),this.menu_icon.remove(),this.nav_float.remove(),this.is_initialized=!1,$(".branding .wrap").append(this.nav_ul),$(".backdrop").remove()),$(".branding .wrap").on("click",".icon.state-1",this.open),$(".branding .wrap").on("click",".icon.state-2",this.close),$("body.mobile-menu-open").on("click",".backdrop",this.close),$("body").on("click",".backdrop",this.close),this.menu_icon=$(".branding .wrap .icon")},s.open=function(){s.menu_icon.removeClass("state-1").addClass("state-2"),$("body").removeClass("mobile-menu-closed").addClass("mobile-menu-open"),a.default.sealScroll()},s.close=function(){s.menu_icon.removeClass("state-2").addClass("state-1"),$("body").removeClass("mobile-menu-open").addClass("mobile-menu-closed"),a.default.unlockScroll()},t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={};i.threshold=768,i.config=function(e){for(var t in e)"threshold"==t&&(i.threshold=parseInt(e.threshold))},i.alignVerCenter=function(e){var t=$(e).outerHeight();$(e).parent().height();$(e).css({position:"absolute",top:"50%","margin-top":-t/2}),$(e).parent().css({position:"relative"})},i._setImgWrapFullWidth=function(e){var t=$(document).width();if("P"==e.parent().prop("tagName")){var n=e.data("img-type");switch(e.parent().addClass("img-wrap-type-"+n),n){case 1:var i=e.parent().parent().width(),a=(t-i)/2,s=e.parent();s.width(t),e.width(t),s.css("margin-left",-a);break;case 2:var i=e.parent().parent().width(),a=(t-i)/2,s=e.parent();s.width(t),s.css("margin-left",-a)}}},i._addLinkClass=function(e){e.find("img").length||e.addClass("link")},i._handlePara=function(e){e.find("img").length&&e.addClass("img-wrap")},i.layoutContent=function(e){$(e).find("p,a,img").each(function(){switch($(this).prop("tagName")){case"P":i._handlePara($(this));break;case"A":i._addLinkClass($(this));break;case"IMG":i._setImgWrapFullWidth($(this)),i._expandEle($(this),40)}})},i._expandEle=function(e,t){var n=e.parent().width();$(window).width()<i.threshold&&(t=20);var a=n+2*t;e.width(a),e.css({"margin-left":-t,"max-width":a})},t.default=i}]);