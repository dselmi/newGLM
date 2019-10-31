!function(a,e,o,s){"use strict";function l(e){if(!(this instanceof l))return new l(e);this.config={imagesClass:"js-slider-post-type-images",contentClass:"js-slider-post-type-content",itemClass:"js-slider-post-type-item",prevClass:"js-slider-post-type-prev",nextClass:"js-slider-post-type-next"},this.sliderImages=null;var t=e.container.querySelector("."+this.config.imagesClass),i=e.container.querySelector("."+this.config.contentClass),s=e.container.querySelector("."+this.config.prevClass),n=e.container.querySelector("."+this.config.nextClass);if(null!==t){if(this.sliderImages=this.initSliderImages(t),null===i)return this;var r=this.initSliderContent(i,this.sliderImages);!0===o.matchMedia("(min-width: 1280px)").matches&&(this.adaptSliderContentHeight(r,this.sliderImages),s.addEventListener("click",this.onPrev.bind(this)),n.addEventListener("click",this.onNext.bind(this)))}return this}l.prototype.initSliderImages=function(e){var t={cellAlign:"center",wrapAround:!0,contain:!0,pageDots:!1,prevNextButtons:!1,adaptiveHeight:!1,lazyLoad:1,on:{ready:function(){e.classList.add("flickity-is-ready")}}};if(void 0!==e.dataset.sliderOptions){var i=JSON.parse(e.dataset.sliderOptions);for(var s in i)t[s]=i[s]}return new Flickity(e,t)},l.prototype.initSliderContent=function(e,t){var i=this,s={cellAlign:"center",cellSelector:"."+this.config.itemClass,wrapAround:!0,prevNextButtons:!1,draggable:!a.is.desktop,adaptiveHeight:!a.is.desktop,asNavFor:null!=t?t.element:void 0,pageDots:!1,lazyLoad:1,on:{ready:function(){e.classList.add("flickity-is-ready")},dragEnd:function(e,t){a.is.desktop||i.sliderImages.select(this.selectedIndex)}}};if(void 0!==e.dataset.sliderOptions){var n=JSON.parse(e.dataset.sliderOptions);for(var r in n)s[r]=n[r]}return new Flickity(e,s)},l.prototype.adaptSliderContentHeight=function(e,t){var i=o.matchMedia("(min-width: 1440px)").matches?"2.5rem":"2rem";o.matchMedia("(min-width: 1440px)").matches;return e.element.style.minHeight="calc("+t.element.offsetHeight+"px - "+i+")",!0},l.prototype.onPrev=function(e){e.preventDefault(),this.sliderImages.previous()},l.prototype.onNext=function(e){e.preventDefault(),this.sliderImages.next()},e(o).on("load",function(){for(var e=s.querySelectorAll(".js-slider-post-type"),t=[],i=0;i<e.length;i++)t[i]=new l({container:e[i]});a.store.SliderPostType=t})}(APP,jQuery,window,document);
//# sourceMappingURL=../maps/page-builder/slider-post-type.js.map
