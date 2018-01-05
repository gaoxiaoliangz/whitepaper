/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/blog/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Kit = function (kit) {

	kit.isIE = function (ver) {
		var b = document.createElement('b');
		b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
		return b.getElementsByTagName('i').length === 1;
	};

	kit.sealScroll = function () {
		$("body").css({ "overflow": "hidden" });
	};

	kit.unlockScroll = function () {
		$("body").css({ "overflow": "visible" });
	};

	kit.excAndExcOnResizing = function (func, args) {
		if (!args) {
			args = [];
		}
		func.apply([], args);
		$(window).resize(function () {
			func.apply(null, args);
		});
	};

	kit.addScriptToHead = function (url) {
		$("head").append("<script src='" + url + "'></script>");
	};

	kit.addScriptInBody = function (url) {
		$("body").append("<script src='" + url + "'></script>");
	};

	return kit;
}(Kit || {});

module.exports = Kit;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var kit = __webpack_require__(0);
var mobilemenu = __webpack_require__(2);
var contentplus = __webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);

hljs.initHighlightingOnLoad();

kit.excAndExcOnResizing(function () {
  contentplus.layoutContent(".content-plus");
  mobilemenu.init();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var kit = __webpack_require__(0);

var mobileMenu = function (o) {
  o.menu_icon = null;
  o.nav_float = null;
  o.nav_ul = null;
  o.is_initialized = false;

  o.init = function () {
    if ($(window).width() <= 768 && !this.is_initialized) {
      $("body").append("<div class='nav-menu-float'><div class='title'>菜单</div></div><div class='backdrop'></div>").addClass("mobile-menu-enabled mobile-menu-closed");
      $(".branding .wrap").append("<span class='icon icon-animated icon-animated-menu state-1'></span>");
      this.nav_float = $(".nav-menu-float");
      this.nav_ul = $(".branding ul.nav-menu");
      this.nav_float.append(this.nav_ul);
      this.is_initialized = true;
    } else if ($(window).width() > 768 && this.is_initialized) {
      if ($("body").hasClass("mobile-menu-open")) {
        this.close();
      }
      $("body").removeClass("mobile-menu-enabled mobile-menu-closed");
      this.menu_icon.remove();
      this.nav_float.remove();
      this.is_initialized = false;
      $(".branding .wrap").append(this.nav_ul);
      $(".backdrop").remove();
    }

    $(".branding .wrap").on("click", ".icon.state-1", this.open);
    $(".branding .wrap").on("click", ".icon.state-2", this.close);
    $("body.mobile-menu-open").on("click", ".backdrop", this.close);
    $("body").on("click", ".backdrop", this.close);

    this.menu_icon = $(".branding .wrap .icon");
  };

  o.open = function () {
    o.menu_icon.removeClass("state-1").addClass("state-2");
    $("body").removeClass("mobile-menu-closed").addClass("mobile-menu-open");
    kit.sealScroll();
  };

  o.close = function () {
    o.menu_icon.removeClass("state-2").addClass("state-1");
    $("body").removeClass("mobile-menu-open").addClass("mobile-menu-closed");
    kit.unlockScroll();
  };

  return o;
}(mobileMenu || {});

module.exports = mobileMenu;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var kit = __webpack_require__(0);

if (kit.isIE()) {
  $("body").addClass("_ie");
}

var contentPlus = function (obj) {
  obj.threshold = 768;

  obj.config = function (data) {
    for (var p in data) {
      if (p == "threshold") {
        obj.threshold = parseInt(data.threshold);
      }
    }
  };

  obj.alignVerCenter = function (ele) {
    var ele_h = $(ele).outerHeight();
    var parent_h = $(ele).parent().height();
    $(ele).css({ "position": "absolute", "top": "50%", "margin-top": -ele_h / 2 });
    $(ele).parent().css({ "position": "relative" });
  };

  obj._setImgWrapFullWidth = function (tar) {
    var w1 = $(document).width();
    if (tar.parent().prop("tagName") == "P") {
      var type = tar.data("img-type");
      tar.parent().addClass("img-wrap-type-" + type);
      switch (type) {

        case 1:
          // img full width
          var w2 = tar.parent().parent().width();
          var offset = (w1 - w2) / 2;
          var p = tar.parent();
          p.width(w1);
          tar.width(w1);
          p.css("margin-left", -offset);
          break;

        case 2:
          // img wrap full width
          var w2 = tar.parent().parent().width();
          var offset = (w1 - w2) / 2;
          var p = tar.parent();
          p.width(w1);
          p.css("margin-left", -offset);
          break;

        default:
          break;
      }
    }
  };

  obj._setLinkOpenBlank = function (tar) {
    if (!tar.attr('target') && !tar.find("img").length && !tar.hasClass("no_blank")) {
      tar.attr('target', '_blank');
      tar.addClass("link");
    }
  };

  obj._handlePara = function (tar) {
    if (tar.find("img").length) {
      tar.addClass("img-wrap");
    }
  };

  obj.layoutContent = function (tar) {
    $(tar).find("p,a,img").each(function () {
      var type = $(this).prop("tagName");
      switch (type) {
        case "P":
          obj._handlePara($(this));
          break;

        case "A":
          obj._setLinkOpenBlank($(this));
          break;

        case "IMG":
          obj._setImgWrapFullWidth($(this));
          obj._expandEle($(this), 40);
          break;

        default:
          break;
      }
    });
  };

  obj._expandEle = function (tar, padding) {
    var w1 = tar.parent().width();
    if ($(window).width() < obj.threshold) {
      padding = 15;
    }
    var w2 = w1 + padding * 2;
    tar.width(w2);
    tar.css({ "margin-left": -padding, "max-width": w2 });
  };

  return obj;
}(contentPlus || {});

module.exports = contentPlus;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Share
$('body').on('click', function () {
  $('.article-share-box.on').removeClass('on');
}).on('click', '.article-share-link', function (e) {
  e.stopPropagation();
  var $this = $(this),
      url = $this.attr('data-url'),
      encodedUrl = encodeURIComponent(url),
      id = 'article-share-box-' + $this.attr('data-id'),
      offset = $this.offset();

  if ($('#' + id).length) {
    var box = $('#' + id);

    if (box.hasClass('on')) {
      box.removeClass('on');
      return;
    }
  } else {
    var html = ['<div id="' + id + '" class="article-share-box">', '<input class="article-share-input" value="' + url + '">', '<div class="article-share-links">', '<a href="https://twitter.com/intent/tweet?url=' + encodedUrl + '" class="article-share-twitter" target="_blank" title="Twitter"></a>', '<a href="https://www.facebook.com/sharer.php?u=' + encodedUrl + '" class="article-share-facebook" target="_blank" title="Facebook"></a>', '<a href="http://pinterest.com/pin/create/button/?url=' + encodedUrl + '" class="article-share-pinterest" target="_blank" title="Pinterest"></a>',
    // '<a href="https://plus.google.com/share?url=' + encodedUrl + '" class="article-share-google" target="_blank" title="Google+"></a>',
    '</div>', '</div>'].join('');

    var box = $(html);

    $('body').append(box);
  }

  $('.article-share-box.on').hide();

  box.css({
    top: offset.top + 25,
    left: offset.left
  }).addClass('on');
}).on('click', '.article-share-box', function (e) {
  e.stopPropagation();
}).on('click', '.article-share-box-input', function () {
  $(this).select();
}).on('click', '.article-share-box-link', function (e) {
  e.preventDefault();
  e.stopPropagation();

  window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
});

// Caption
$('.article-entry').each(function (i) {
  $(this).find('img').each(function () {
    if ($(this).parent().hasClass('fancybox')) return;

    var alt = this.alt;

    if (alt) $(this).after('<span class="caption">' + alt + '</span>');

    $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
  });

  $(this).find('.fancybox').each(function () {
    $(this).attr('rel', 'article' + i);
  });
});

if ($.fancybox) {
  $('.fancybox').fancybox();
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"no-csschunit":"no-csschunit","container-fluid":"container-fluid","left":"left","right":"right","sep":"sep","colophon":"colophon","links":"links","nav-menu":"nav-menu","post":"post","more-link":"more-link","content-plus":"content-plus","caption":"caption","with-code-caption":"with-code-caption","link":"link","container":"container","branding":"branding","wrap":"wrap","logo":"logo","icon":"icon","no-svg":"no-svg","active":"active","page-content":"page-content","comments":"comments","nav-bottom":"nav-bottom","text":"text","excerpt":"excerpt","next":"next","nav-pagination":"nav-pagination","page-number":"page-number","info":"info","nav-email":"nav-email","post-header":"post-header","post-date":"post-date","post-title":"post-title","post-link":"post-link","post-meta":"post-meta","post-tags":"post-tags","home-template":"home-template","paged":"paged","tag-template":"tag-template","page-header":"page-header","hash":"hash","page-title":"page-title","page-description":"page-description","author-template":"author-template","author-bio":"author-bio","author-stats":"author-stats","author-location":"author-location","page-blog-archive":"page-blog-archive","archive":"archive","year":"year","posts":"posts","outliner-nav-menu":"outliner-nav-menu","outliner-content-table":"outliner-content-table","title":"title","article-share-box":"article-share-box","on":"on","article-share-input":"article-share-input","article-share-links":"article-share-links","article-share-twitter":"article-share-twitter","article-share-facebook":"article-share-facebook","article-share-pinterest":"article-share-pinterest","article-share-google":"article-share-google","mobile-menu-enabled":"mobile-menu-enabled","mobile-menu-open":"mobile-menu-open","nav-menu-float":"nav-menu-float","backdrop":"backdrop","mobile-menu-closed":"mobile-menu-closed","hljs":"hljs","hljs-comment":"hljs-comment","hljs-meta":"hljs-meta","hljs-string":"hljs-string","hljs-variable":"hljs-variable","hljs-template-variable":"hljs-template-variable","hljs-strong":"hljs-strong","hljs-emphasis":"hljs-emphasis","hljs-quote":"hljs-quote","hljs-keyword":"hljs-keyword","hljs-selector-tag":"hljs-selector-tag","hljs-type":"hljs-type","hljs-literal":"hljs-literal","hljs-symbol":"hljs-symbol","hljs-bullet":"hljs-bullet","hljs-attribute":"hljs-attribute","hljs-section":"hljs-section","hljs-name":"hljs-name","hljs-tag":"hljs-tag","hljs-title":"hljs-title","hljs-attr":"hljs-attr","hljs-selector-id":"hljs-selector-id","hljs-selector-class":"hljs-selector-class","hljs-selector-attr":"hljs-selector-attr","hljs-selector-pseudo":"hljs-selector-pseudo","hljs-addition":"hljs-addition","hljs-deletion":"hljs-deletion","hljs-link":"hljs-link"};

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map