import{_ as it}from"./xwlM-Ff3.js";import{R as at,aO as rt,Z as z,S as N,aQ as $,aP as K,ab as q,aS as ot,a3 as j,a7 as lt,a8 as st,a9 as ct,aa as w,a1 as T,a0 as W,ac as F,a2 as L,f as d,k as l,i as o,g as h,W as x,U as c,H as v,X as y,F as Z,a5 as X,a4 as V,h as b,w as P,T as ut,a as dt,t as I,n as ht,G as m,l as mt}from"./DawQdEuM.js";import{F as pt}from"./i2ZI38rF.js";import{s as ft}from"./B4DloYrX.js";import{s as bt,a as Y,b as Q}from"./C9Qcul72.js";import{s as vt}from"./BloVB2XO.js";import{a as gt,F as g,b as yt,c as It,f as wt,d as St,e as xt,g as kt,h as Pt,i as At,j as Ct,k as Ot}from"./rizSvjQa.js";var Bt=function(t){var n=t.dt;return`
.p-galleria {
    overflow: hidden;
    border-style: solid;
    border-width: `.concat(n("galleria.border.width"),`;
    border-color: `).concat(n("galleria.border.color"),`;
    border-radius: `).concat(n("galleria.border.radius"),`;
}

.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-items-container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-items {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-nav-button {
    position: absolute !important;
    top: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: `).concat(n("galleria.nav.button.background"),`;
    color: `).concat(n("galleria.nav.button.color"),`;
    width: `).concat(n("galleria.nav.button.size"),`;
    height: `).concat(n("galleria.nav.button.size"),`;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),", box-shadow ").concat(n("galleria.transition.duration"),`;
    margin: calc(-1 * calc(`).concat(n("galleria.nav.button.size"),") / 2) ").concat(n("galleria.nav.button.gutter")," 0 ").concat(n("galleria.nav.button.gutter"),`;
    padding: 0;
    user-select: none;
    border: 0 none;
    cursor: pointer;
    outline-color: transparent;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: `).concat(n("galleria.nav.button.hover.background"),`;
    color: `).concat(n("galleria.nav.button.hover.color"),`;
}

.p-galleria-nav-button:not(.p-disabled):focus-visible {
    box-shadow: `).concat(n("galleria.nav.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.nav.button.focus.ring.width")," ").concat(n("galleria.nav.button.focus.ring.style")," ").concat(n("galleria.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.nav.button.focus.ring.offset"),`;
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: `).concat(n("galleria.nav.icon.size"),`;
    width: `).concat(n("galleria.nav.icon.size"),`;
    height: `).concat(n("galleria.nav.icon.size"),`;
}

.p-galleria-prev-button {
    border-radius: `).concat(n("galleria.nav.button.prev.border.radius"),`;
    left: 0;
}

.p-galleria-next-button {
    border-radius: `).concat(n("galleria.nav.button.next.border.radius"),`;
    right: 0;
}

.p-galleria-prev-button:dir(rtl) {
    left: auto;
    right: 0;
    transform: rotate(180deg);
}

.p-galleria-next-button:dir(rtl) {
    right: auto;
    left: 0;
    transform: rotate(180deg);
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-hover-navigators .p-galleria-nav-button {
    pointer-events: none;
    opacity: 0;
    transition: opacity `).concat(n("galleria.transition.duration"),` ease-in-out;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: `).concat(n("galleria.caption.background"),`;
    color: `).concat(n("galleria.caption.color"),`;
    padding: `).concat(n("galleria.caption.padding"),`;
}

.p-galleria-thumbnails {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-nav-button {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0 `).concat(n("galleria.thumbnail.nav.button.gutter"),`;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: `).concat(n("galleria.thumbnail.nav.button.color"),`;
    width: `).concat(n("galleria.thumbnail.nav.button.size"),`;
    height: `).concat(n("galleria.thumbnail.nav.button.size"),`;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(n("galleria.thumbnail.nav.button.border.radius"),`;
}

.p-galleria-thumbnail-nav-button:hover {
    background: `).concat(n("galleria.thumbnail.nav.button.hover.background"),`;
    color: `).concat(n("galleria.thumbnail.nav.button.hover.color"),`;
}

.p-galleria-thumbnail-nav-button:focus-visible {
    box-shadow: `).concat(n("galleria.thumbnail.nav.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.thumbnail.nav.button.focus.ring.width")," ").concat(n("galleria.thumbnail.nav.button.focus.ring.style")," ").concat(n("galleria.thumbnail.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.thumbnail.nav.button.focus.ring.offset"),`;
}

.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
    font-size: `).concat(n("galleria.thumbnail.nav.button.icon.size"),`;
    width: `).concat(n("galleria.thumbnail.nav.button.icon.size"),`;
    height: `).concat(n("galleria.thumbnail.nav.button.icon.size"),`;
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: `).concat(n("galleria.thumbnails.content.background"),`;
    padding: `).concat(n("galleria.thumbnails.content.padding"),`;
}

.p-galleria-thumbnails-viewport {
    overflow: hidden;
    width: 100%;
}

.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail {
    outline-color: transparent;
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-right .p-galleria-items-container {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-top .p-galleria-items-container {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails,
.p-galleria-thumbnails-top .p-galleria-thumbnails {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails-content,
.p-galleria-thumbnails-right .p-galleria-thumbnails-content {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicator-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: `).concat(n("galleria.indicator.list.padding"),`;
    gap: `).concat(n("galleria.indicator.list.gap"),`;
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: `).concat(n("galleria.indicator.button.background"),`;
    width: `).concat(n("galleria.indicator.button.width"),`;
    height: `).concat(n("galleria.indicator.button.height"),`;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),", box-shadow ").concat(n("galleria.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(n("galleria.indicator.button.border.radius"),`;
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
}

.p-galleria-indicator-button:hover {
    background: `).concat(n("galleria.indicator.button.hover.background"),`;
}

.p-galleria-indicator-button:focus-visible {
    box-shadow: `).concat(n("galleria.indicator.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.indicator.button.focus.ring.width")," ").concat(n("galleria.indicator.button.focus.ring.style")," ").concat(n("galleria.indicator.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.indicator.button.focus.ring.offset"),`;
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background: `).concat(n("galleria.indicator.button.active.background"),`;
}

.p-galleria-indicators-left .p-galleria-items-container,
.p-galleria-indicators-right .p-galleria-items-container {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-items,
.p-galleria-indicators-top .p-galleria-items {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-top .p-galleria-indicator-list {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-right .p-galleria-indicator-list {
    flex-direction: column;
}

.p-galleria-inset-indicators .p-galleria-indicator-list {
    position: absolute;
    display: flex;
    z-index: 1;
    background: `).concat(n("galleria.inset.indicator.list.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-button {
    background: `).concat(n("galleria.inset.indicator.button.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-button:hover {
    background: `).concat(n("galleria.inset.indicator.button.hover.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
    background: `).concat(n("galleria.inset.indicator.button.active.background"),`;
}

.p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-galleria-close-button {
    position: absolute !important;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: `).concat(n("galleria.close.button.gutter"),`;
    background: `).concat(n("galleria.close.button.background"),`;
    color: `).concat(n("galleria.close.button.color"),`;
    width: `).concat(n("galleria.close.button.size"),`;
    height: `).concat(n("galleria.close.button.size"),`;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: `).concat(n("galleria.close.button.border.radius"),`;
    outline-color: transparent;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),`;
}

.p-galleria-close-icon {
    font-size: `).concat(n("galleria.close.button.icon.size"),`;
    width: `).concat(n("galleria.close.button.icon.size"),`;
    height: `).concat(n("galleria.close.button.icon.size"),`;
}

.p-galleria-close-button:hover {
    background: `).concat(n("galleria.close.button.hover.background"),`;
    color: `).concat(n("galleria.close.button.hover.color"),`;
}

.p-galleria-close-button:focus-visible {
    box-shadow: `).concat(n("galleria.close.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.close.button.focus.ring.width")," ").concat(n("galleria.close.button.focus.ring.style")," ").concat(n("galleria.close.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.close.button.focus.ring.offset"),`;
}

.p-galleria-mask .p-galleria-nav-button {
    position: fixed;
    top: 50%;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-nav-button {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`)},Tt={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:function(t){var n=t.instance,i=n.$attrs.showThumbnails&&n.getPositionClass("p-galleria-thumbnails",n.$attrs.thumbnailsPosition),r=n.$attrs.showIndicators&&n.getPositionClass("p-galleria-indicators",n.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":n.$attrs.fullScreen,"p-galleria-inset-indicators":n.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":n.$attrs.showItemNavigatorsOnHover&&!n.$attrs.fullScreen},i,r]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:function(t){var n=t.instance;return["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":n.isNavBackwardDisabled()}]},prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:function(t){var n=t.instance;return["p-galleria-next-button p-galleria-nav-button",{"p-disabled":n.isNavForwardDisabled()}]},nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:function(t){var n=t.instance,i=t.index;return["p-galleria-indicator",{"p-galleria-indicator-active":n.isIndicatorItemActive(i)}]},indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:function(t){var n=t.instance;return["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavBackwardDisabled()}]},thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:function(t){var n=t.instance,i=t.index,r=t.activeIndex;return["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":r===i,"p-galleria-thumbnail-item-active":n.isItemActive(i),"p-galleria-thumbnail-item-start":n.firstItemAciveIndex()===i,"p-galleria-thumbnail-item-end":n.lastItemActiveIndex()===i}]},thumbnail:"p-galleria-thumbnail",thumbnailNextButton:function(t){var n=t.instance;return["p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavForwardDisabled()}]},thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},Vt=at.extend({name:"galleria",theme:Bt,classes:Tt}),Nt={name:"BaseGalleria",extends:N,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:Vt,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function k(e){return _t(e)||jt(e)||$t(e)||Lt()}function Lt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $t(e,t){if(e){if(typeof e=="string")return D(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}function jt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _t(e){if(Array.isArray(e))return D(e)}function D(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}var J={name:"GalleriaItem",hostName:"Galleria",extends:N,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit("start-slideshow")},methods:{getIndicatorPTOptions:function(t){return{context:{highlighted:this.activeIndex===t}}},next:function(){var t=this.activeIndex+1,n=this.circular&&this.value.length-1===this.activeIndex?0:t;this.$emit("update:activeIndex",n)},prev:function(){var t=this.activeIndex!==0?this.activeIndex-1:0,n=this.circular&&this.activeIndex===0?this.value.length-1:t;this.$emit("update:activeIndex",n)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward:function(t){this.stopSlideShow(),this.prev(),t&&t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow(),this.next(),t&&t.cancelable&&t.preventDefault()},onIndicatorClick:function(t){this.stopSlideShow(),this.$emit("update:activeIndex",t)},onIndicatorMouseEnter:function(t){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",t))},onIndicatorKeyDown:function(t,n){switch(t.code){case"Enter":case"NumpadEnter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",n),t.preventDefault();break;case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"Tab":this.onTabKey();break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":t.preventDefault();break}},onRightKey:function(){var t=k(w(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=k(w(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=k(w(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=t.findIndex(function(a){return W(a,"data-p-active")===!0}),i=T(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]'),r=t.findIndex(function(a){return a===i.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=k(w(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=T(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]');return t.findIndex(function(i){return i===n.parentElement})},changedFocusedIndicator:function(t,n){var i=k(w(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));i[t].children[0].tabIndex="-1",i[n].children[0].tabIndex="0",i[n].children[0].focus()},isIndicatorItemActive:function(t){return this.activeIndex===t},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0}},components:{ChevronLeftIcon:Q,ChevronRightIcon:Y},directives:{ripple:z}},Dt=["disabled"],Et=["id","aria-label","aria-roledescription"],zt=["disabled"],Kt=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown","data-p-active"],Ft=["tabindex"];function Rt(e,t,n,i,r,a){var p=L("ripple");return l(),d("div",c({class:e.cx("itemsContainer")},e.ptm("itemsContainer")),[o("div",c({class:e.cx("items")},e.ptm("items")),[n.showItemNavigators?x((l(),d("button",c({key:0,type:"button",class:e.cx("prevButton"),onClick:t[0]||(t[0]=function(u){return a.navBackward(u)}),disabled:a.isNavBackwardDisabled()},e.ptm("prevButton"),{"data-pc-group-section":"itemnavigator"}),[(l(),v(y(n.templates.previousitemicon||"ChevronLeftIcon"),c({class:e.cx("prevIcon")},e.ptm("prevIcon")),null,16,["class"]))],16,Dt)),[[p]]):h("",!0),o("div",c({id:n.id+"_item_"+n.activeIndex,class:e.cx("item"),role:"group","aria-label":a.ariaSlideNumber(n.activeIndex+1),"aria-roledescription":a.ariaSlideLabel},e.ptm("item")),[n.templates.item?(l(),v(y(n.templates.item),{key:0,item:a.activeItem},null,8,["item"])):h("",!0)],16,Et),n.showItemNavigators?x((l(),d("button",c({key:1,type:"button",class:e.cx("nextButton"),onClick:t[1]||(t[1]=function(u){return a.navForward(u)}),disabled:a.isNavForwardDisabled()},e.ptm("nextButton"),{"data-pc-group-section":"itemnavigator"}),[(l(),v(y(n.templates.nextitemicon||"ChevronRightIcon"),c({class:e.cx("nextIcon")},e.ptm("nextIcon")),null,16,["class"]))],16,zt)),[[p]]):h("",!0),n.templates.caption?(l(),d("div",c({key:2,class:e.cx("caption")},e.ptm("caption")),[n.templates.caption?(l(),v(y(n.templates.caption),{key:0,item:a.activeItem},null,8,["item"])):h("",!0)],16)):h("",!0)],16),n.showIndicators?(l(),d("ul",c({key:0,ref:"indicatorContent",class:e.cx("indicatorList")},e.ptm("indicatorList")),[(l(!0),d(Z,null,X(n.value,function(u,s){return l(),d("li",c({key:"p-galleria-indicator-".concat(s),class:e.cx("indicator",{index:s}),"aria-label":a.ariaPageLabel(s+1),"aria-selected":n.activeIndex===s,"aria-controls":n.id+"_item_"+s,onClick:function(S){return a.onIndicatorClick(s)},onMouseenter:function(S){return a.onIndicatorMouseEnter(s)},onKeydown:function(S){return a.onIndicatorKeyDown(S,s)},ref_for:!0},e.ptm("indicator",a.getIndicatorPTOptions(s)),{"data-p-active":a.isIndicatorItemActive(s)}),[n.templates.indicator?h("",!0):(l(),d("button",c({key:0,type:"button",tabindex:n.activeIndex===s?"0":"-1",class:e.cx("indicatorButton"),ref_for:!0},e.ptm("indicatorButton",a.getIndicatorPTOptions(s))),null,16,Ft)),n.templates.indicator?(l(),v(y(n.templates.indicator),{key:1,index:s,activeIndex:n.activeIndex,tabindex:n.activeIndex===s?"0":"-1"},null,8,["index","activeIndex","tabindex"])):h("",!0)],16,Kt)}),128))],16)):h("",!0)],16)}J.render=Rt;function _(e){return Gt(e)||Ut(e)||Mt(e)||Ht()}function Ht(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mt(e,t){if(e){if(typeof e=="string")return E(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}function Ut(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Gt(e){if(Array.isArray(e))return E(e)}function E(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}var tt={name:"GalleriaThumbnails",hostName:"Galleria",extends:N,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(t,n){this.d_numVisible=t,this.d_oldNumVisible=n},activeIndex:function(t,n){this.d_activeIndex=t,this.d_oldActiveItemIndex=n}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var t=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?t=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?t=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?t=this.d_activeIndex*-1+this.getMedianItemIndex()+1:t=this.d_activeIndex*-1+this.getMedianItemIndex(),t!==this.totalShiftedItems&&(this.totalShiftedItems=t),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(t*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(t*(100/this.d_numVisible),"%, 0, 0)"),this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&F(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(t){var n=this.totalShiftedItems+t;t<0&&-1*n+this.d_numVisible>this.value.length-1?n=this.d_numVisible-this.value.length:t>0&&n>0&&(n=0),this.circular&&(t<0&&this.value.length-1===this.d_activeIndex?n=0:t>0&&this.d_activeIndex===0&&(n=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&F(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(n*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(n*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=n},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex:function(){var t=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?t:t-1},navBackward:function(t){this.stopSlideShow();var n=this.d_activeIndex!==0?this.d_activeIndex-1:0,i=n+this.totalShiftedItems;this.d_numVisible-i-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:n;this.$emit("update:activeIndex",r),t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow();var n=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;n+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var i=this.circular&&this.value.length-1===this.d_activeIndex?0:n;this.$emit("update:activeIndex",i),t.cancelable&&t.preventDefault()},onItemClick:function(t){this.stopSlideShow();var n=t;if(n!==this.d_activeIndex){var i=n+this.totalShiftedItems,r=0;n<this.d_activeIndex?(r=this.d_numVisible-i-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!==0&&this.step(r)):(r=this.getMedianItemIndex()-i,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit("update:activeIndex",n)}},onThumbnailKeydown:function(t,n){switch((t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.onItemClick(n),t.preventDefault()),t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=w(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=w(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=_(w(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=t.findIndex(function(a){return W(a,"data-p-active")===!0}),i=T(this.$refs.itemsContainer,'[tabindex="0"]'),r=t.findIndex(function(a){return a===i.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=_(w(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=T(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return t.findIndex(function(i){return i===n.parentElement})},changedFocusedIndicator:function(t,n){var i=w(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]');i[t].children[0].tabIndex="-1",i[n].children[0].tabIndex="0",i[n].children[0].focus()},onTransitionEnd:function(t){this.$refs.itemsContainer&&t.propertyName==="transform"&&(document.body.setAttribute("data-p-items-hidden","true"),!this.isUnstyled&&q(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart:function(t){var n=t.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(t){t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var n=t.changedTouches[0];this.isVertical?this.changePageOnTouch(t,n.pageY-this.startPos.y):this.changePageOnTouch(t,n.pageX-this.startPos.x)},changePageOnTouch:function(t,n){n<0?this.navForward(t):this.navBackward(t)},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var t;this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",lt(this.thumbnailsStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.thumbnailsStyle)}var n=`
                #`.concat(this.containerId,` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=_(this.responsiveOptions);var i=st();this.sortedResponsiveOptions.sort(function(p,u){var s=p.breakpoint,f=u.breakpoint;return ct(s,f,-1,i)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var a=this.sortedResponsiveOptions[r];n+=`
                        @media screen and (max-width: `.concat(a.breakpoint,`) {
                            #`).concat(this.containerId,` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100/a.numVisible,`%
                            }
                        }
                    `)}}this.thumbnailsStyle.innerHTML=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var t=window.innerWidth,n={numVisible:this.numVisible},i=0;i<this.sortedResponsiveOptions.length;i++){var r=this.sortedResponsiveOptions[i];parseInt(r.breakpoint,10)>=t&&(n=r)}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(){t.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(t){return this.firstItemAciveIndex()<=t&&this.lastItemActiveIndex()>=t},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0}},components:{ChevronLeftIcon:Q,ChevronRightIcon:Y,ChevronUpIcon:bt,ChevronDownIcon:vt},directives:{ripple:z}};function A(e){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(e)}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?R(Object(n),!0).forEach(function(i){qt(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function qt(e,t,n){return(t=Wt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wt(e){var t=Zt(e,"string");return A(t)=="symbol"?t:t+""}function Zt(e,t){if(A(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(A(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Xt=["disabled","aria-label"],Yt=["data-p-active","aria-selected","aria-controls","onKeydown","data-p-galleria-thumbnail-item-current","data-p-galleria-thumbnail-item-active","data-p-galleria-thumbnail-item-start","data-p-galleria-thumbnail-item-end"],Qt=["tabindex","aria-label","aria-current","onClick"],Jt=["disabled","aria-label"];function te(e,t,n,i,r,a){var p=L("ripple");return l(),d("div",c({class:e.cx("thumbnails")},e.ptm("thumbnails")),[o("div",c({class:e.cx("thumbnailContent")},e.ptm("thumbnailContent")),[n.showThumbnailNavigators?x((l(),d("button",c({key:0,class:e.cx("thumbnailPrevButton"),disabled:a.isNavBackwardDisabled(),type:"button","aria-label":a.ariaPrevButtonLabel,onClick:t[0]||(t[0]=function(u){return a.navBackward(u)})},B(B({},n.prevButtonProps),e.ptm("thumbnailPrevButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(l(),v(y(n.templates.previousthumbnailicon||(n.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),c({class:e.cx("thumbnailPrevIcon")},e.ptm("thumbnailPrevIcon")),null,16,["class"]))],16,Xt)),[[p]]):h("",!0),o("div",c({class:e.cx("thumbnailsViewport"),style:{height:n.isVertical?n.contentHeight:""}},e.ptm("thumbnailsViewport")),[o("div",c({ref:"itemsContainer",class:e.cx("thumbnailItems"),role:"tablist",onTransitionend:t[1]||(t[1]=function(u){return a.onTransitionEnd(u)}),onTouchstart:t[2]||(t[2]=function(u){return a.onTouchStart(u)}),onTouchmove:t[3]||(t[3]=function(u){return a.onTouchMove(u)}),onTouchend:t[4]||(t[4]=function(u){return a.onTouchEnd(u)})},e.ptm("thumbnailItems")),[(l(!0),d(Z,null,X(n.value,function(u,s){return l(),d("div",c({key:"p-galleria-thumbnail-item-".concat(s),class:e.cx("thumbnailItem",{index:s,activeIndex:n.activeIndex}),role:"tab","data-p-active":n.activeIndex===s,"aria-selected":n.activeIndex===s,"aria-controls":n.containerId+"_item_"+s,onKeydown:function(S){return a.onThumbnailKeydown(S,s)},ref_for:!0},e.ptm("thumbnailItem"),{"data-p-galleria-thumbnail-item-current":n.activeIndex===s,"data-p-galleria-thumbnail-item-active":a.isItemActive(s),"data-p-galleria-thumbnail-item-start":a.firstItemAciveIndex()===s,"data-p-galleria-thumbnail-item-end":a.lastItemActiveIndex()===s}),[o("div",c({class:e.cx("thumbnail"),tabindex:n.activeIndex===s?"0":"-1","aria-label":a.ariaPageLabel(s+1),"aria-current":n.activeIndex===s?"page":void 0,onClick:function(S){return a.onItemClick(s)},ref_for:!0},e.ptm("thumbnail")),[n.templates.thumbnail?(l(),v(y(n.templates.thumbnail),{key:0,item:u},null,8,["item"])):h("",!0)],16,Qt)],16,Yt)}),128))],16)],16),n.showThumbnailNavigators?x((l(),d("button",c({key:1,class:e.cx("thumbnailNextButton"),disabled:a.isNavForwardDisabled(),type:"button","aria-label":a.ariaNextButtonLabel,onClick:t[5]||(t[5]=function(u){return a.navForward(u)})},B(B({},n.nextButtonProps),e.ptm("thumbnailNextButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(l(),v(y(n.templates.nextthumbnailicon||(n.isVertical?"ChevronDownIcon":"ChevronRightIcon")),c({class:e.cx("thumbnailNextIcon")},e.ptm("thumbnailNextIcon")),null,16,["class"]))],16,Jt)),[[p]]):h("",!0)],16)],16)}tt.render=te;function C(e){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(e)}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?H(Object(n),!0).forEach(function(i){ee(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function ee(e,t,n){return(t=ne(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(e){var t=ie(e,"string");return C(t)=="symbol"?t:t+""}function ie(e,t){if(C(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(C(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var et={name:"GalleriaContent",hostName:"Galleria",extends:N,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data:function(){return{id:this.$attrs.id||j(),activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.id":function(t){this.id=t||j()},"$attrs.value":function(t){t&&t.length<this.numVisible&&(this.numVisible=t.length)},"$attrs.activeIndex":function(t){this.activeIndex=t},"$attrs.numVisible":function(t){this.numVisible=t},"$attrs.autoPlay":function(t){t?this.startSlideShow():this.stopSlideShow()}},mounted:function(){this.id=this.id||j()},updated:function(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(t){return this.ptm(t,{props:M(M({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var t=this;this.interval=setInterval(function(){var n=t.$attrs.circular&&t.$attrs.value.length-1===t.activeIndex?0:t.activeIndex+1;t.activeIndex=n},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(t,n){var i=["top","left","bottom","right"],r=i.find(function(a){return a===n});return r?"".concat(t,"-").concat(r):""},isVertical:function(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:J,GalleriaThumbnails:tt,TimesIcon:ft},directives:{ripple:z}};function O(e){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(e)}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?U(Object(n),!0).forEach(function(i){ae(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function ae(e,t,n){return(t=re(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e){var t=oe(e,"string");return O(t)=="symbol"?t:t+""}function oe(e,t){if(O(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(O(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var le=["id","aria-label","aria-roledescription"],se=["aria-label"],ce=["aria-live"];function ue(e,t,n,i,r,a){var p=V("GalleriaItem"),u=V("GalleriaThumbnails"),s=L("ripple");return e.$attrs.value&&e.$attrs.value.length>0?(l(),d("div",c({key:0,id:r.id,role:"region",class:[e.cx("root"),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},G(G({},e.$attrs.containerProps),a.getPTOptions("root"))),[e.$attrs.fullScreen?x((l(),d("button",c({key:0,autofocus:"",type:"button",class:e.cx("closeButton"),"aria-label":a.closeAriaLabel,onClick:t[0]||(t[0]=function(f){return e.$emit("mask-hide")})},a.getPTOptions("closeButton")),[(l(),v(y(e.$attrs.templates.closeicon||"TimesIcon"),c({class:e.cx("closeIcon")},a.getPTOptions("closeIcon")),null,16,["class"]))],16,se)),[[s]]):h("",!0),e.$attrs.templates&&e.$attrs.templates.header?(l(),d("div",c({key:1,class:e.cx("header")},a.getPTOptions("header")),[(l(),v(y(e.$attrs.templates.header)))],16)):h("",!0),o("div",c({class:e.cx("content"),"aria-live":e.$attrs.autoPlay?"polite":"off"},a.getPTOptions("content")),[b(p,{id:r.id,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[1]||(t[1]=function(f){return r.activeIndex=f}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[2]||(t[2]=function(f){return r.slideShowActive=f}),value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:a.startSlideShow,onStopSlideshow:a.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt","unstyled"]),e.$attrs.showThumbnails?(l(),v(u,{key:0,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[3]||(t[3]=function(f){return r.activeIndex=f}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[4]||(t[4]=function(f){return r.slideShowActive=f}),containerId:r.id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:r.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:a.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:a.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt","unstyled"])):h("",!0)],16,ce),e.$attrs.templates&&e.$attrs.templates.footer?(l(),d("div",c({key:2,class:e.cx("footer")},a.getPTOptions("footer")),[(l(),v(y(e.$attrs.templates.footer)))],16)):h("",!0)],16,le)):h("",!0)}et.render=ue;var nt={name:"Galleria",extends:Nt,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],container:null,mask:null,data:function(){return{containerVisible:this.visible}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&K(),this.mask=null,this.container&&($.clear(this.container),this.container=null)},methods:{onBeforeEnter:function(t){$.set("modal",t,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(t){this.mask.style.zIndex=String(parseInt(t.style.zIndex,10)-1),ot(),this.focus()},onBeforeLeave:function(){!this.isUnstyled&&q(this.mask,"p-overlay-mask-leave")},onAfterLeave:function(t){$.clear(t),this.containerVisible=!1,K()},onActiveItemChange:function(t){this.activeIndex!==t&&this.$emit("update:activeIndex",t)},maskHide:function(){this.$emit("update:visible",!1)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},focus:function(){var t=this.container.$el.querySelector("[autofocus]");t&&t.focus()}},components:{GalleriaContent:et,Portal:rt},directives:{focustrap:pt}},de=["aria-modal"];function he(e,t,n,i,r,a){var p=V("GalleriaContent"),u=V("Portal"),s=L("focustrap");return e.fullScreen?(l(),v(u,{key:0},{default:P(function(){return[r.containerVisible?(l(),d("div",c({key:0,ref:a.maskRef,class:[e.cx("mask"),e.maskClass],role:"dialog","aria-modal":e.fullScreen?"true":void 0},e.ptm("mask")),[b(ut,c({name:"p-galleria",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onAfterLeave:a.onAfterLeave,appear:""},e.ptm("transition")),{default:P(function(){return[e.visible?x((l(),v(p,c({key:0,ref:a.containerRef,onMaskHide:a.maskHide,templates:e.$slots,onActiveitemChange:a.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt","unstyled"])),[[s]]):h("",!0)]}),_:1},16,["onBeforeEnter","onEnter","onBeforeLeave","onAfterLeave"])],16,de)):h("",!0)]}),_:1})):(l(),v(p,c({key:1,templates:e.$slots,onActiveitemChange:a.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["templates","onActiveitemChange","pt","unstyled"]))}nt.render=he;const me={class:"flex flex-col"},pe=["src","alt"],fe={class:"rounded-lg flex flex-wrap bg-highlight justify-evenly"},be={class:"feature-item"},ve={class:"feature-icon"},ge={class:"feature-item"},ye={class:"feature-icon"},Ie={class:"feature-item"},we={class:"feature-icon"},Se={class:"feature-item"},xe={class:"feature-icon"},ke={class:"feature-item"},Pe={class:"feature-icon"},Ae={class:"feature-item"},Ce={class:"feature-icon"},Oe={class:"feature-item"},Be={class:"feature-icon"},Te={key:0,class:"feature-separator"},Ve={key:1,class:"feature-item"},Ne={class:"feature-icon"},Le={key:2,class:"feature-separator"},$e={key:3,class:"feature-item"},je={class:"feature-icon"},_e={key:4,class:"feature-separator"},De={key:5,class:"feature-item"},Ee={class:"feature-icon"},ze={key:6,class:"feature-separator"},Ke={key:7,class:"feature-item"},Fe={class:"feature-icon"},Re=dt({__name:"Villa",props:{name:{},bedroomCount:{},bathroomCount:{},plotSizeSquareWa:{},totalAreaSquareMeter:{},pool:{},builtUpAreaSquareMeter:{},parkingCount:{},features:{},floorPlans:{}},setup(e){const t=e;return(n,i)=>{const r=nt,a=it;return l(),d("div",me,[o("h3",null,I(n.name),1),b(a,null,{default:P(()=>[b(r,{value:n.floorPlans.map(p=>({itemImageSrc:p.imageSrc,alt:p.label})),numVisible:5,class:"w-full",showThumbnails:!1,showIndicators:!0,changeItemOnIndicatorHover:!0,indicatorsPosition:"bottom"},{item:P(p=>[o("img",{class:"!rounded-none max-h-[36rem] object-contain p-4",src:p.item.itemImageSrc,alt:p.item.alt,style:{width:"100%",display:"block"}},null,8,pe)]),indicator:P(({activeIndex:p,index:u})=>{var s;return[o("span",{class:ht(["cursor-pointer",{"text-muted-color":u!==p,"font-bold":u===p}])},I((s=n.floorPlans[u])==null?void 0:s.label),3)]}),_:1},8,["value"])]),_:1}),o("div",fe,[o("div",be,[o("i",ve,[b(m(g),{icon:m(gt),size:"2x"},null,8,["icon"])]),o("span",null,I(t.bedroomCount)+" bedrooms",1)]),i[9]||(i[9]=o("div",{class:"feature-separator"},null,-1)),o("div",ge,[o("i",ye,[b(m(g),{icon:m(yt),size:"2x"},null,8,["icon"])]),o("span",null,I(t.bathroomCount)+" bathrooms",1)]),i[10]||(i[10]=o("div",{class:"feature-separator"},null,-1)),o("div",Ie,[o("i",we,[b(m(g),{icon:m(It),size:"2x"},null,8,["icon"])]),i[0]||(i[0]=o("span",null,"Plot size",-1)),o("span",null,I(t.plotSizeSquareWa)+" wa²",1)]),i[11]||(i[11]=o("div",{class:"feature-separator"},null,-1)),o("div",Se,[o("i",xe,[b(m(g),{icon:m(wt),size:"2x"},null,8,["icon"])]),i[1]||(i[1]=o("span",null,"Total area",-1)),o("span",null,I(t.totalAreaSquareMeter)+" m²",1)]),i[12]||(i[12]=o("div",{class:"feature-separator"},null,-1)),o("div",ke,[o("i",Pe,[b(m(g),{icon:m(St),size:"2x"},null,8,["icon"])]),i[2]||(i[2]=o("span",null,"Pool size",-1)),o("span",null,I(t.pool.lengthMeter)+" × "+I(t.pool.widthMeter)+" m",1)]),i[13]||(i[13]=o("div",{class:"feature-separator"},null,-1)),o("div",Ae,[o("i",Ce,[b(m(g),{icon:m(xt),size:"2x"},null,8,["icon"])]),i[3]||(i[3]=o("span",null,"Built area",-1)),o("span",null,I(t.builtUpAreaSquareMeter)+" m²",1)]),i[14]||(i[14]=o("div",{class:"feature-separator"},null,-1)),o("div",Oe,[o("i",Be,[b(m(g),{icon:m(kt),size:"2x"},null,8,["icon"])]),i[4]||(i[4]=o("span",null,"Parking",-1)),o("span",null,I(t.parkingCount)+" Spaces",1)]),t.features.includes("garden")?(l(),d("div",Te)):h("",!0),t.features.includes("garden")?(l(),d("div",Ve,[o("i",Ne,[b(m(g),{icon:m(Pt),size:"2x"},null,8,["icon"])]),i[5]||(i[5]=o("span",null,"Garden",-1))])):h("",!0),t.features.includes("cctv")?(l(),d("div",Le)):h("",!0),t.features.includes("cctv")?(l(),d("div",$e,[o("i",je,[b(m(g),{icon:m(At),size:"2x"},null,8,["icon"])]),i[6]||(i[6]=o("span",null,"CCTV",-1))])):h("",!0),t.features.includes("diningRoom")?(l(),d("div",_e)):h("",!0),t.features.includes("diningRoom")?(l(),d("div",De,[o("i",Ee,[b(m(g),{icon:m(Ct),size:"2x"},null,8,["icon"])]),i[7]||(i[7]=o("span",null,"Living Room",-1))])):h("",!0),t.features.includes("livingRoom")?(l(),d("div",ze)):h("",!0),t.features.includes("livingRoom")?(l(),d("div",Ke,[o("i",Fe,[b(m(g),{icon:m(Ot),size:"2x"},null,8,["icon"])]),i[8]||(i[8]=o("span",null,"Dining Room",-1))])):h("",!0)])])}}}),Xe=Object.assign(mt(Re,[["__scopeId","data-v-4c49d3f7"]]),{__name:"Villa"});export{Xe as default};
