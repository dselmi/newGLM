!function(n,a,s,e){"use strict";function c(s){if(!(this instanceof c))return new c(s);var e=a(".search .js-search-input");return a(".js-main-search-toggle").on("click",function(){n.$html.hasClass("is-search-open")?n.$html.removeClass("is-search-open").addClass("is-search-close"):(n.$html.removeClass("is-search-close").addClass("is-search-open"),e.trigger("focus"))}),this}a(s).on("load",function(){n.store.Search=new c})}(APP,jQuery,window,document);
//# sourceMappingURL=../maps/components/search.js.map
