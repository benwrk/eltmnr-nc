import{ay as nt,f as d,k as l,i as r,U as u,R as it,az as at,Z as z,S as V,aA as L,aB as W,aU as rt,aV as ot,aW as lt,aX as w,a1 as B,a0 as q,aS as F,a2 as N,g as h,W as x,H as v,X as y,F as Z,a4 as X,a3 as T,h as b,w as k,T as st,a as ut,t as I,G as m,n as ct,l as dt}from"./BsdB2ZQ4.js";import{F as ht,u as _,b as mt}from"./C-VbCDlO.js";import{s as pt}from"./Czs3mGzk.js";import{s as ft,a as bt,b as Y}from"./BXEEJKGl.js";import{F as g,a as vt,b as gt,c as yt,f as It,d as wt,e as St,g as xt,h as $t,i as kt,j as Pt,k as Ct,s as At}from"./D4vRotYQ.js";var K={name:"ChevronLeftIcon",extends:nt};function Ot(t,e,n,i,o,a){return l(),d("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[r("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}K.render=Ot;var Bt=({dt:t})=>`
.p-galleria {
    overflow: hidden;
    border-style: solid;
    border-width: ${t("galleria.border.width")};
    border-color: ${t("galleria.border.color")};
    border-radius: ${t("galleria.border.radius")};
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
    background: ${t("galleria.nav.button.background")};
    color: ${t("galleria.nav.button.color")};
    width: ${t("galleria.nav.button.size")};
    height: ${t("galleria.nav.button.size")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")}, box-shadow ${t("galleria.transition.duration")};
    margin: calc(-1 * calc(${t("galleria.nav.button.size")}) / 2) ${t("galleria.nav.button.gutter")} 0 ${t("galleria.nav.button.gutter")};
    padding: 0;
    user-select: none;
    border: 0 none;
    cursor: pointer;
    outline-color: transparent;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: ${t("galleria.nav.button.hover.background")};
    color: ${t("galleria.nav.button.hover.color")};
}

.p-galleria-nav-button:not(.p-disabled):focus-visible {
    box-shadow: ${t("galleria.nav.button.focus.ring.shadow")};
    outline: ${t("galleria.nav.button.focus.ring.width")} ${t("galleria.nav.button.focus.ring.style")} ${t("galleria.nav.button.focus.ring.color")};
    outline-offset: ${t("galleria.nav.button.focus.ring.offset")};
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: ${t("galleria.nav.icon.size")};
    width: ${t("galleria.nav.icon.size")};
    height: ${t("galleria.nav.icon.size")};
}

.p-galleria-prev-button {
    border-radius: ${t("galleria.nav.button.prev.border.radius")};
    left: 0;
}

.p-galleria-next-button {
    border-radius: ${t("galleria.nav.button.next.border.radius")};
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
    transition: opacity ${t("galleria.transition.duration")} ease-in-out;
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
    background: ${t("galleria.caption.background")};
    color: ${t("galleria.caption.color")};
    padding: ${t("galleria.caption.padding")};
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
    margin: 0 ${t("galleria.thumbnail.nav.button.gutter")};
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: ${t("galleria.thumbnail.nav.button.color")};
    width: ${t("galleria.thumbnail.nav.button.size")};
    height: ${t("galleria.thumbnail.nav.button.size")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")};
    outline-color: transparent;
    border-radius: ${t("galleria.thumbnail.nav.button.border.radius")};
}

.p-galleria-thumbnail-nav-button:hover {
    background: ${t("galleria.thumbnail.nav.button.hover.background")};
    color: ${t("galleria.thumbnail.nav.button.hover.color")};
}

.p-galleria-thumbnail-nav-button:focus-visible {
    box-shadow: ${t("galleria.thumbnail.nav.button.focus.ring.shadow")};
    outline: ${t("galleria.thumbnail.nav.button.focus.ring.width")} ${t("galleria.thumbnail.nav.button.focus.ring.style")} ${t("galleria.thumbnail.nav.button.focus.ring.color")};
    outline-offset: ${t("galleria.thumbnail.nav.button.focus.ring.offset")};
}

.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
    font-size: ${t("galleria.thumbnail.nav.button.icon.size")};
    width: ${t("galleria.thumbnail.nav.button.icon.size")};
    height: ${t("galleria.thumbnail.nav.button.icon.size")};
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: ${t("galleria.thumbnails.content.background")};
    padding: ${t("galleria.thumbnails.content.padding")};
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
    padding: ${t("galleria.indicator.list.padding")};
    gap: ${t("galleria.indicator.list.gap")};
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: ${t("galleria.indicator.button.background")};
    width: ${t("galleria.indicator.button.width")};
    height: ${t("galleria.indicator.button.height")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")}, box-shadow ${t("galleria.transition.duration")};
    outline-color: transparent;
    border-radius: ${t("galleria.indicator.button.border.radius")};
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
}

.p-galleria-indicator-button:hover {
    background: ${t("galleria.indicator.button.hover.background")};
}

.p-galleria-indicator-button:focus-visible {
    box-shadow: ${t("galleria.indicator.button.focus.ring.shadow")};
    outline: ${t("galleria.indicator.button.focus.ring.width")} ${t("galleria.indicator.button.focus.ring.style")} ${t("galleria.indicator.button.focus.ring.color")};
    outline-offset: ${t("galleria.indicator.button.focus.ring.offset")};
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background: ${t("galleria.indicator.button.active.background")};
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
    background: ${t("galleria.inset.indicator.list.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-button {
    background: ${t("galleria.inset.indicator.button.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-button:hover {
    background: ${t("galleria.inset.indicator.button.hover.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
    background: ${t("galleria.inset.indicator.button.active.background")};
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
    margin: ${t("galleria.close.button.gutter")};
    background: ${t("galleria.close.button.background")};
    color: ${t("galleria.close.button.color")};
    width: ${t("galleria.close.button.size")};
    height: ${t("galleria.close.button.size")};
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: ${t("galleria.close.button.border.radius")};
    outline-color: transparent;
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")};
}

.p-galleria-close-icon {
    font-size: ${t("galleria.close.button.icon.size")};
    width: ${t("galleria.close.button.icon.size")};
    height: ${t("galleria.close.button.icon.size")};
}

.p-galleria-close-button:hover {
    background: ${t("galleria.close.button.hover.background")};
    color: ${t("galleria.close.button.hover.color")};
}

.p-galleria-close-button:focus-visible {
    box-shadow: ${t("galleria.close.button.focus.ring.shadow")};
    outline: ${t("galleria.close.button.focus.ring.width")} ${t("galleria.close.button.focus.ring.style")} ${t("galleria.close.button.focus.ring.color")};
    outline-offset: ${t("galleria.close.button.focus.ring.offset")};
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
`,Tt={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:function(e){var n=e.instance,i=n.$attrs.showThumbnails&&n.getPositionClass("p-galleria-thumbnails",n.$attrs.thumbnailsPosition),o=n.$attrs.showIndicators&&n.getPositionClass("p-galleria-indicators",n.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":n.$attrs.fullScreen,"p-galleria-inset-indicators":n.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":n.$attrs.showItemNavigatorsOnHover&&!n.$attrs.fullScreen},i,o]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:function(e){var n=e.instance;return["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":n.isNavBackwardDisabled}]},prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:function(e){var n=e.instance;return["p-galleria-next-button p-galleria-nav-button",{"p-disabled":n.isNavForwardDisabled}]},nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:function(e){var n=e.instance,i=e.index;return["p-galleria-indicator",{"p-galleria-indicator-active":n.isIndicatorItemActive(i)}]},indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:function(e){var n=e.instance;return["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavBackwardDisabled}]},thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:function(e){var n=e.instance,i=e.index,o=e.activeIndex;return["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":o===i,"p-galleria-thumbnail-item-active":n.isItemActive(i),"p-galleria-thumbnail-item-start":n.firstItemAciveIndex()===i,"p-galleria-thumbnail-item-end":n.lastItemActiveIndex()===i}]},thumbnail:"p-galleria-thumbnail",thumbnailNextButton:function(e){var n=e.instance;return["p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavForwardDisabled}]},thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},Vt=it.extend({name:"galleria",style:Bt,classes:Tt}),Nt={name:"BaseGalleria",extends:V,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:Vt,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function $(t){return Et(t)||Dt(t)||jt(t)||Lt()}function Lt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jt(t,e){if(t){if(typeof t=="string")return D(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(t,e):void 0}}function Dt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Et(t){if(Array.isArray(t))return D(t)}function D(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var J={name:"GalleriaItem",hostName:"Galleria",extends:V,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit("start-slideshow")},methods:{getIndicatorPTOptions:function(e){return{context:{highlighted:this.activeIndex===e}}},next:function(){var e=this.activeIndex+1,n=this.circular&&this.value.length-1===this.activeIndex?0:e;this.$emit("update:activeIndex",n)},prev:function(){var e=this.activeIndex!==0?this.activeIndex-1:0,n=this.circular&&this.activeIndex===0?this.value.length-1:e;this.$emit("update:activeIndex",n)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward:function(e){this.stopSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()},onIndicatorClick:function(e){this.stopSlideShow(),this.$emit("update:activeIndex",e)},onIndicatorMouseEnter:function(e){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",e))},onIndicatorKeyDown:function(e,n){switch(e.code){case"Enter":case"NumpadEnter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",n),e.preventDefault();break;case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"Tab":this.onTabKey();break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":e.preventDefault();break}},onRightKey:function(){var e=$(w(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===e.length?e.length-1:n+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=$(w(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,e.length-1)},onTabKey:function(){var e=$(w(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=e.findIndex(function(a){return q(a,"data-p-active")===!0}),i=B(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]'),o=e.findIndex(function(a){return a===i.parentElement});e[o].children[0].tabIndex="-1",e[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var e=$(w(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=B(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]');return e.findIndex(function(i){return i===n.parentElement})},changedFocusedIndicator:function(e,n){var i=$(w(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));i[e].children[0].tabIndex="-1",i[n].children[0].tabIndex="0",i[n].children[0].focus()},isIndicatorItemActive:function(e){return this.activeIndex===e},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1},ariaSlideNumber:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0}},components:{ChevronLeftIcon:K,ChevronRightIcon:Y},directives:{ripple:z}},zt=["disabled"],Kt=["id","aria-label","aria-roledescription"],Ft=["disabled"],_t=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown","data-p-active"],Rt=["tabindex"];function Ht(t,e,n,i,o,a){var p=N("ripple");return l(),d("div",u({class:t.cx("itemsContainer")},t.ptm("itemsContainer")),[r("div",u({class:t.cx("items")},t.ptm("items")),[n.showItemNavigators?x((l(),d("button",u({key:0,type:"button",class:t.cx("prevButton"),onClick:e[0]||(e[0]=function(c){return a.navBackward(c)}),disabled:a.isNavBackwardDisabled()},t.ptm("prevButton"),{"data-pc-group-section":"itemnavigator"}),[(l(),v(y(n.templates.previousitemicon||"ChevronLeftIcon"),u({class:t.cx("prevIcon")},t.ptm("prevIcon")),null,16,["class"]))],16,zt)),[[p]]):h("",!0),r("div",u({id:n.id+"_item_"+n.activeIndex,class:t.cx("item"),role:"group","aria-label":a.ariaSlideNumber(n.activeIndex+1),"aria-roledescription":a.ariaSlideLabel},t.ptm("item")),[n.templates.item?(l(),v(y(n.templates.item),{key:0,item:a.activeItem},null,8,["item"])):h("",!0)],16,Kt),n.showItemNavigators?x((l(),d("button",u({key:1,type:"button",class:t.cx("nextButton"),onClick:e[1]||(e[1]=function(c){return a.navForward(c)}),disabled:a.isNavForwardDisabled()},t.ptm("nextButton"),{"data-pc-group-section":"itemnavigator"}),[(l(),v(y(n.templates.nextitemicon||"ChevronRightIcon"),u({class:t.cx("nextIcon")},t.ptm("nextIcon")),null,16,["class"]))],16,Ft)),[[p]]):h("",!0),n.templates.caption?(l(),d("div",u({key:2,class:t.cx("caption")},t.ptm("caption")),[n.templates.caption?(l(),v(y(n.templates.caption),{key:0,item:a.activeItem},null,8,["item"])):h("",!0)],16)):h("",!0)],16),n.showIndicators?(l(),d("ul",u({key:0,ref:"indicatorContent",class:t.cx("indicatorList")},t.ptm("indicatorList")),[(l(!0),d(Z,null,X(n.value,function(c,s){return l(),d("li",u({key:"p-galleria-indicator-".concat(s),class:t.cx("indicator",{index:s}),"aria-label":a.ariaPageLabel(s+1),"aria-selected":n.activeIndex===s,"aria-controls":n.id+"_item_"+s,onClick:function(S){return a.onIndicatorClick(s)},onMouseenter:function(S){return a.onIndicatorMouseEnter(s)},onKeydown:function(S){return a.onIndicatorKeyDown(S,s)},ref_for:!0},t.ptm("indicator",a.getIndicatorPTOptions(s)),{"data-p-active":a.isIndicatorItemActive(s)}),[n.templates.indicator?h("",!0):(l(),d("button",u({key:0,type:"button",tabindex:n.activeIndex===s?"0":"-1",class:t.cx("indicatorButton"),ref_for:!0},t.ptm("indicatorButton",a.getIndicatorPTOptions(s))),null,16,Rt)),n.templates.indicator?(l(),v(y(n.templates.indicator),{key:1,index:s,activeIndex:n.activeIndex,tabindex:n.activeIndex===s?"0":"-1"},null,8,["index","activeIndex","tabindex"])):h("",!0)],16,_t)}),128))],16)):h("",!0)],16)}J.render=Ht;function j(t){return Wt(t)||Gt(t)||Ut(t)||Mt()}function Mt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ut(t,e){if(t){if(typeof t=="string")return E(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(t,e):void 0}}function Gt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Wt(t){if(Array.isArray(t))return E(t)}function E(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var Q={name:"GalleriaThumbnails",hostName:"Galleria",extends:V,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(e,n){this.d_numVisible=e,this.d_oldNumVisible=n},activeIndex:function(e,n){this.d_activeIndex=e,this.d_oldActiveItemIndex=n}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var e=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?e=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?e=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?e=this.d_activeIndex*-1+this.getMedianItemIndex()+1:e=this.d_activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(e*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(e*(100/this.d_numVisible),"%, 0, 0)"),this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&F(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(e){var n=this.totalShiftedItems+e;e<0&&-1*n+this.d_numVisible>this.value.length-1?n=this.d_numVisible-this.value.length:e>0&&n>0&&(n=0),this.circular&&(e<0&&this.value.length-1===this.d_activeIndex?n=0:e>0&&this.d_activeIndex===0&&(n=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&F(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(n*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(n*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=n},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex:function(){var e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1},navBackward:function(e){this.stopSlideShow();var n=this.d_activeIndex!==0?this.d_activeIndex-1:0,i=n+this.totalShiftedItems;this.d_numVisible-i-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);var o=this.circular&&this.d_activeIndex===0?this.value.length-1:n;this.$emit("update:activeIndex",o),e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow();var n=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;n+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var i=this.circular&&this.value.length-1===this.d_activeIndex?0:n;this.$emit("update:activeIndex",i),e.cancelable&&e.preventDefault()},onItemClick:function(e){this.stopSlideShow();var n=e;if(n!==this.d_activeIndex){var i=n+this.totalShiftedItems,o=0;n<this.d_activeIndex?(o=this.d_numVisible-i-1-this.getMedianItemIndex(),o>0&&-1*this.totalShiftedItems!==0&&this.step(o)):(o=this.getMedianItemIndex()-i,o<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(o)),this.$emit("update:activeIndex",n)}},onThumbnailKeydown:function(e,n){switch((e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&(this.onItemClick(n),e.preventDefault()),e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var e=w(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===e.length?e.length-1:n+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=w(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,e.length-1)},onTabKey:function(){var e=j(w(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=e.findIndex(function(a){return q(a,"data-p-active")===!0}),i=B(this.$refs.itemsContainer,'[tabindex="0"]'),o=e.findIndex(function(a){return a===i.parentElement});e[o].children[0].tabIndex="-1",e[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var e=j(w(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=B(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return e.findIndex(function(i){return i===n.parentElement})},changedFocusedIndicator:function(e,n){var i=w(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]');i[e].children[0].tabIndex="-1",i[n].children[0].tabIndex="0",i[n].children[0].focus()},onTransitionEnd:function(e){this.$refs.itemsContainer&&e.propertyName==="transform"&&(document.body.setAttribute("data-p-items-hidden","true"),!this.isUnstyled&&W(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart:function(e){var n=e.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(e){e.cancelable&&e.preventDefault()},onTouchEnd:function(e){var n=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,n.pageY-this.startPos.y):this.changePageOnTouch(e,n.pageX-this.startPos.x)},changePageOnTouch:function(e,n){var i=10;Math.abs(n)<i||(n<0?this.navForward(e):this.navBackward(e))},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var e;this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",rt(this.thumbnailsStyle,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.body.appendChild(this.thumbnailsStyle)}var n=`
                #`.concat(this.containerId,` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=j(this.responsiveOptions);var i=ot();this.sortedResponsiveOptions.sort(function(p,c){var s=p.breakpoint,f=c.breakpoint;return lt(s,f,-1,i)});for(var o=0;o<this.sortedResponsiveOptions.length;o++){var a=this.sortedResponsiveOptions[o];n+=`
                        @media screen and (max-width: `.concat(a.breakpoint,`) {
                            #`).concat(this.containerId,` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100/a.numVisible,`%
                            }
                        }
                    `)}}this.thumbnailsStyle.innerHTML=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var e=window.innerWidth,n={numVisible:this.numVisible},i=0;i<this.sortedResponsiveOptions.length;i++){var o=this.sortedResponsiveOptions[i];parseInt(o.breakpoint,10)>=e&&(n=o)}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},bindDocumentListeners:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}},components:{ChevronLeftIcon:K,ChevronRightIcon:Y,ChevronUpIcon:bt,ChevronDownIcon:ft},directives:{ripple:z}};function P(t){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(t)}function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,i)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?R(Object(n),!0).forEach(function(i){qt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function qt(t,e,n){return(e=Zt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zt(t){var e=Xt(t,"string");return P(e)=="symbol"?e:e+""}function Xt(t,e){if(P(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(P(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Yt=["disabled","aria-label"],Jt=["data-p-active","aria-selected","aria-controls","onKeydown","data-p-galleria-thumbnail-item-current","data-p-galleria-thumbnail-item-active","data-p-galleria-thumbnail-item-start","data-p-galleria-thumbnail-item-end"],Qt=["tabindex","aria-label","aria-current","onClick"],te=["disabled","aria-label"];function ee(t,e,n,i,o,a){var p=N("ripple");return l(),d("div",u({class:t.cx("thumbnails")},t.ptm("thumbnails")),[r("div",u({class:t.cx("thumbnailContent")},t.ptm("thumbnailContent")),[n.showThumbnailNavigators?x((l(),d("button",u({key:0,class:t.cx("thumbnailPrevButton"),disabled:a.isNavBackwardDisabled,type:"button","aria-label":a.ariaPrevButtonLabel,onClick:e[0]||(e[0]=function(c){return a.navBackward(c)})},O(O({},n.prevButtonProps),t.ptm("thumbnailPrevButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(l(),v(y(n.templates.previousthumbnailicon||(n.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),u({class:t.cx("thumbnailPrevIcon")},t.ptm("thumbnailPrevIcon")),null,16,["class"]))],16,Yt)),[[p]]):h("",!0),r("div",u({class:t.cx("thumbnailsViewport"),style:{height:n.isVertical?n.contentHeight:""}},t.ptm("thumbnailsViewport")),[r("div",u({ref:"itemsContainer",class:t.cx("thumbnailItems"),role:"tablist",onTransitionend:e[1]||(e[1]=function(c){return a.onTransitionEnd(c)}),onTouchstart:e[2]||(e[2]=function(c){return a.onTouchStart(c)}),onTouchmove:e[3]||(e[3]=function(c){return a.onTouchMove(c)}),onTouchend:e[4]||(e[4]=function(c){return a.onTouchEnd(c)})},t.ptm("thumbnailItems")),[(l(!0),d(Z,null,X(n.value,function(c,s){return l(),d("div",u({key:"p-galleria-thumbnail-item-".concat(s),class:t.cx("thumbnailItem",{index:s,activeIndex:n.activeIndex}),role:"tab","data-p-active":n.activeIndex===s,"aria-selected":n.activeIndex===s,"aria-controls":n.containerId+"_item_"+s,onKeydown:function(S){return a.onThumbnailKeydown(S,s)},ref_for:!0},t.ptm("thumbnailItem"),{"data-p-galleria-thumbnail-item-current":n.activeIndex===s,"data-p-galleria-thumbnail-item-active":a.isItemActive(s),"data-p-galleria-thumbnail-item-start":a.firstItemAciveIndex()===s,"data-p-galleria-thumbnail-item-end":a.lastItemActiveIndex()===s}),[r("div",u({class:t.cx("thumbnail"),tabindex:n.activeIndex===s?"0":"-1","aria-label":a.ariaPageLabel(s+1),"aria-current":n.activeIndex===s?"page":void 0,onClick:function(S){return a.onItemClick(s)},ref_for:!0},t.ptm("thumbnail")),[n.templates.thumbnail?(l(),v(y(n.templates.thumbnail),{key:0,item:c},null,8,["item"])):h("",!0)],16,Qt)],16,Jt)}),128))],16)],16),n.showThumbnailNavigators?x((l(),d("button",u({key:1,class:t.cx("thumbnailNextButton"),disabled:a.isNavForwardDisabled,type:"button","aria-label":a.ariaNextButtonLabel,onClick:e[5]||(e[5]=function(c){return a.navForward(c)})},O(O({},n.nextButtonProps),t.ptm("thumbnailNextButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(l(),v(y(n.templates.nextthumbnailicon||(n.isVertical?"ChevronDownIcon":"ChevronRightIcon")),u({class:t.cx("thumbnailNextIcon")},t.ptm("thumbnailNextIcon")),null,16,["class"]))],16,te)),[[p]]):h("",!0)],16)],16)}Q.render=ee;function C(t){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(t)}function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,i)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?H(Object(n),!0).forEach(function(i){ne(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function ne(t,e,n){return(e=ie(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ie(t){var e=ae(t,"string");return C(e)=="symbol"?e:e+""}function ae(t,e){if(C(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(C(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var tt={name:"GalleriaContent",hostName:"Galleria",extends:V,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data:function(){return{activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.value":function(e){e&&e.length<this.numVisible&&(this.numVisible=e.length)},"$attrs.activeIndex":function(e){this.activeIndex=e},"$attrs.numVisible":function(e){this.numVisible=e},"$attrs.autoPlay":function(e){e?this.startSlideShow():this.stopSlideShow()}},updated:function(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(e){return this.ptm(e,{props:M(M({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var e=this;this.interval=setInterval(function(){var n=e.$attrs.circular&&e.$attrs.value.length-1===e.activeIndex?0:e.activeIndex+1;e.activeIndex=n},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(e,n){var i=["top","left","bottom","right"],o=i.find(function(a){return a===n});return o?"".concat(e,"-").concat(o):""},isVertical:function(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:J,GalleriaThumbnails:Q,TimesIcon:pt},directives:{ripple:z}};function A(t){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(t)}function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,i)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?U(Object(n),!0).forEach(function(i){re(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function re(t,e,n){return(e=oe(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function oe(t){var e=le(t,"string");return A(e)=="symbol"?e:e+""}function le(t,e){if(A(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(A(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var se=["id","aria-label","aria-roledescription"],ue=["aria-label"],ce=["aria-live"];function de(t,e,n,i,o,a){var p=T("GalleriaItem"),c=T("GalleriaThumbnails"),s=N("ripple");return t.$attrs.value&&t.$attrs.value.length>0?(l(),d("div",u({key:0,id:t.$id,role:"region",class:[t.cx("root"),t.$attrs.containerClass],style:t.$attrs.containerStyle,"aria-label":t.$attrs.ariaLabel,"aria-roledescription":t.$attrs.ariaRoledescription},G(G({},t.$attrs.containerProps),a.getPTOptions("root"))),[t.$attrs.fullScreen?x((l(),d("button",u({key:0,autofocus:"",type:"button",class:t.cx("closeButton"),"aria-label":a.closeAriaLabel,onClick:e[0]||(e[0]=function(f){return t.$emit("mask-hide")})},a.getPTOptions("closeButton")),[(l(),v(y(t.$attrs.templates.closeicon||"TimesIcon"),u({class:t.cx("closeIcon")},a.getPTOptions("closeIcon")),null,16,["class"]))],16,ue)),[[s]]):h("",!0),t.$attrs.templates&&t.$attrs.templates.header?(l(),d("div",u({key:1,class:t.cx("header")},a.getPTOptions("header")),[(l(),v(y(t.$attrs.templates.header)))],16)):h("",!0),r("div",u({class:t.cx("content"),"aria-live":t.$attrs.autoPlay?"polite":"off"},a.getPTOptions("content")),[b(p,{id:t.$id,activeIndex:o.activeIndex,"onUpdate:activeIndex":e[1]||(e[1]=function(f){return o.activeIndex=f}),slideShowActive:o.slideShowActive,"onUpdate:slideShowActive":e[2]||(e[2]=function(f){return o.slideShowActive=f}),value:t.$attrs.value,circular:t.$attrs.circular,templates:t.$attrs.templates,showIndicators:t.$attrs.showIndicators,changeItemOnIndicatorHover:t.$attrs.changeItemOnIndicatorHover,showItemNavigators:t.$attrs.showItemNavigators,autoPlay:t.$attrs.autoPlay,onStartSlideshow:a.startSlideShow,onStopSlideshow:a.stopSlideShow,pt:t.pt,unstyled:t.unstyled},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt","unstyled"]),t.$attrs.showThumbnails?(l(),v(c,{key:0,activeIndex:o.activeIndex,"onUpdate:activeIndex":e[3]||(e[3]=function(f){return o.activeIndex=f}),slideShowActive:o.slideShowActive,"onUpdate:slideShowActive":e[4]||(e[4]=function(f){return o.slideShowActive=f}),containerId:t.$id,value:t.$attrs.value,templates:t.$attrs.templates,numVisible:o.numVisible,responsiveOptions:t.$attrs.responsiveOptions,circular:t.$attrs.circular,isVertical:a.isVertical(),contentHeight:t.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:t.$attrs.showThumbnailNavigators,prevButtonProps:t.$attrs.prevButtonProps,nextButtonProps:t.$attrs.nextButtonProps,onStopSlideshow:a.stopSlideShow,pt:t.pt,unstyled:t.unstyled},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt","unstyled"])):h("",!0)],16,ce),t.$attrs.templates&&t.$attrs.templates.footer?(l(),d("div",u({key:2,class:t.cx("footer")},a.getPTOptions("footer")),[(l(),v(y(t.$attrs.templates.footer)))],16)):h("",!0)],16,se)):h("",!0)}tt.render=de;var et={name:"Galleria",extends:Nt,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],container:null,mask:null,data:function(){return{containerVisible:this.visible}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&_(),this.mask=null,this.container&&(L.clear(this.container),this.container=null)},methods:{onBeforeEnter:function(e){L.set("modal",e,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(e){this.mask.style.zIndex=String(parseInt(e.style.zIndex,10)-1),mt(),this.focus()},onBeforeLeave:function(){!this.isUnstyled&&W(this.mask,"p-overlay-mask-leave")},onAfterLeave:function(e){L.clear(e),this.containerVisible=!1,_()},onActiveItemChange:function(e){this.activeIndex!==e&&this.$emit("update:activeIndex",e)},maskHide:function(){this.$emit("update:visible",!1)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},focus:function(){var e=this.container.$el.querySelector("[autofocus]");e&&e.focus()}},components:{GalleriaContent:tt,Portal:at},directives:{focustrap:ht}},he=["aria-modal"];function me(t,e,n,i,o,a){var p=T("GalleriaContent"),c=T("Portal"),s=N("focustrap");return t.fullScreen?(l(),v(c,{key:0},{default:k(function(){return[o.containerVisible?(l(),d("div",u({key:0,ref:a.maskRef,class:[t.cx("mask"),t.maskClass],role:"dialog","aria-modal":t.fullScreen?"true":void 0},t.ptm("mask")),[b(st,u({name:"p-galleria",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onAfterLeave:a.onAfterLeave,appear:""},t.ptm("transition")),{default:k(function(){return[t.visible?x((l(),v(p,u({key:0,ref:a.containerRef,onMaskHide:a.maskHide,templates:t.$slots,onActiveitemChange:a.onActiveItemChange,pt:t.pt,unstyled:t.unstyled},t.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt","unstyled"])),[[s]]):h("",!0)]}),_:1},16,["onBeforeEnter","onEnter","onBeforeLeave","onAfterLeave"])],16,he)):h("",!0)]}),_:1})):(l(),v(p,u({key:1,templates:t.$slots,onActiveitemChange:a.onActiveItemChange,pt:t.pt,unstyled:t.unstyled},t.$props),null,16,["templates","onActiveitemChange","pt","unstyled"]))}et.render=me;const pe={class:"flex flex-col p-4 md:p-8 rounded-lg bg-highlight shadow-lg"},fe={class:"rounded-lg overflow-hidden"},be={class:"feature-item"},ve={class:"feature-icon"},ge={class:"feature-item"},ye={class:"feature-icon"},Ie={class:"feature-item"},we={class:"feature-icon"},Se={class:"feature-item"},xe={class:"feature-icon"},$e={class:"feature-item"},ke={class:"feature-icon"},Pe={class:"feature-item"},Ce={class:"feature-icon"},Ae={class:"feature-item"},Oe={class:"feature-icon"},Be={key:0,class:"feature-separator"},Te={key:1,class:"feature-item"},Ve={class:"feature-icon"},Ne={key:2,class:"feature-separator"},Le={key:3,class:"feature-item"},je={class:"feature-icon"},De={key:4,class:"feature-separator"},Ee={key:5,class:"feature-item"},ze={class:"feature-icon"},Ke={key:6,class:"feature-separator"},Fe={key:7,class:"feature-item"},_e={class:"feature-icon"},Re=["src","alt"],He=ut({__name:"villa",props:{name:{},bedroomCount:{},bathroomCount:{},plotSizeSquareWa:{},totalAreaSquareMeter:{},pool:{},builtUpAreaSquareMeter:{},parkingCount:{},features:{},floorPlans:{}},setup(t){const e=t;return(n,i)=>{const o=At,a=et;return l(),d("div",pe,[r("h3",null,I(n.name),1),i[15]||(i[15]=r("h4",null,"Features",-1)),r("div",fe,[b(o,{class:"h-24",dt:{bar:{background:"{primary.200}"}}},{default:k(()=>[r("div",be,[r("i",ve,[b(m(g),{icon:m(vt),size:"2x"},null,8,["icon"])]),r("span",null,I(e.bedroomCount)+" bedrooms",1)]),i[9]||(i[9]=r("div",{class:"feature-separator"},null,-1)),r("div",ge,[r("i",ye,[b(m(g),{icon:m(gt),size:"2x"},null,8,["icon"])]),r("span",null,I(e.bathroomCount)+" bathrooms",1)]),i[10]||(i[10]=r("div",{class:"feature-separator"},null,-1)),r("div",Ie,[r("i",we,[b(m(g),{icon:m(yt),size:"2x"},null,8,["icon"])]),i[0]||(i[0]=r("span",null,"Plot size",-1)),r("span",null,I(e.plotSizeSquareWa)+" wa²",1)]),i[11]||(i[11]=r("div",{class:"feature-separator"},null,-1)),r("div",Se,[r("i",xe,[b(m(g),{icon:m(It),size:"2x"},null,8,["icon"])]),i[1]||(i[1]=r("span",null,"Total area",-1)),r("span",null,I(e.totalAreaSquareMeter)+" m²",1)]),i[12]||(i[12]=r("div",{class:"feature-separator"},null,-1)),r("div",$e,[r("i",ke,[b(m(g),{icon:m(wt),size:"2x"},null,8,["icon"])]),i[2]||(i[2]=r("span",null,"Pool size",-1)),r("span",null,I(e.pool.lengthMeter)+" × "+I(e.pool.widthMeter)+" m",1)]),i[13]||(i[13]=r("div",{class:"feature-separator"},null,-1)),r("div",Pe,[r("i",Ce,[b(m(g),{icon:m(St),size:"2x"},null,8,["icon"])]),i[3]||(i[3]=r("span",null,"Built area",-1)),r("span",null,I(e.builtUpAreaSquareMeter)+" m²",1)]),i[14]||(i[14]=r("div",{class:"feature-separator"},null,-1)),r("div",Ae,[r("i",Oe,[b(m(g),{icon:m(xt),size:"2x"},null,8,["icon"])]),i[4]||(i[4]=r("span",null,"Parking",-1)),r("span",null,I(e.parkingCount)+" Spaces",1)]),e.features.includes("garden")?(l(),d("div",Be)):h("",!0),e.features.includes("garden")?(l(),d("div",Te,[r("i",Ve,[b(m(g),{icon:m($t),size:"2x"},null,8,["icon"])]),i[5]||(i[5]=r("span",null,"Garden",-1))])):h("",!0),e.features.includes("cctv")?(l(),d("div",Ne)):h("",!0),e.features.includes("cctv")?(l(),d("div",Le,[r("i",je,[b(m(g),{icon:m(kt),size:"2x"},null,8,["icon"])]),i[6]||(i[6]=r("span",null,"CCTV",-1))])):h("",!0),e.features.includes("diningRoom")?(l(),d("div",De)):h("",!0),e.features.includes("diningRoom")?(l(),d("div",Ee,[r("i",ze,[b(m(g),{icon:m(Pt),size:"2x"},null,8,["icon"])]),i[7]||(i[7]=r("span",null,"Living Room",-1))])):h("",!0),e.features.includes("livingRoom")?(l(),d("div",Ke)):h("",!0),e.features.includes("livingRoom")?(l(),d("div",Fe,[r("i",_e,[b(m(g),{icon:m(Ct),size:"2x"},null,8,["icon"])]),i[8]||(i[8]=r("span",null,"Dining Room",-1))])):h("",!0)]),_:1})]),i[16]||(i[16]=r("h4",{class:"mt-8"},"Floor plans",-1)),b(a,{value:n.floorPlans.map(p=>({itemImageSrc:p.imageSrc,alt:p.label})),numVisible:5,class:"w-full",showThumbnails:!1,showIndicators:!0,changeItemOnIndicatorHover:!0,indicatorsPosition:"top"},{item:k(p=>[r("img",{class:"!rounded-none",src:p.item.itemImageSrc,alt:p.item.alt,style:{width:"100%",display:"block"}},null,8,Re)]),indicator:k(({activeIndex:p,index:c})=>{var s;return[r("span",{class:ct(["cursor-pointer",{"text-muted-color":c!==p,"font-bold":c===p}])},I((s=n.floorPlans[c])==null?void 0:s.label),3)]}),_:1},8,["value"])])}}}),Ze=Object.assign(dt(He,[["__scopeId","data-v-bb1dde60"]]),{__name:"Villa"});export{Ze as default};
