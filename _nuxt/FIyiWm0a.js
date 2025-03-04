import{R as v,S as y,ab as c,aa as a,aX as B,f as d,k as p,i as o,U as u,V as M,a as w,h as f,w as L,F as x,a4 as $,g as D,n as z,ac as F,G as m,t as h,l as U}from"./CcZESs0H.js";import{F as S,f as A}from"./BfyLyzx8.js";var k=({dt:t})=>`
.p-scrollpanel-content-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}

.p-scrollpanel-content {
    height: calc(100% + calc(2 * ${t("scrollpanel.bar.size")}));
    width: calc(100% + calc(2 * ${t("scrollpanel.bar.size")}));
    padding-inline: 0 calc(2 * ${t("scrollpanel.bar.size")});
    padding-block: 0 calc(2 * ${t("scrollpanel.bar.size")});
    position: relative;
    overflow: auto;
    box-sizing: border-box;
    scrollbar-width: none;
}

.p-scrollpanel-content::-webkit-scrollbar {
    display: none;
}

.p-scrollpanel-bar {
    position: relative;
    border-radius: ${t("scrollpanel.bar.border.radius")};
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    outline-color: transparent;
    background: ${t("scrollpanel.bar.background")};
    border: 0 none;
    transition: outline-color ${t("scrollpanel.transition.duration")}, opacity ${t("scrollpanel.transition.duration")};
}

.p-scrollpanel-bar:focus-visible {
    box-shadow: ${t("scrollpanel.bar.focus.ring.shadow")};
    outline: ${t("scrollpanel.barfocus.ring.width")} ${t("scrollpanel.bar.focus.ring.style")} ${t("scrollpanel.bar.focus.ring.color")};
    outline-offset: ${t("scrollpanel.barfocus.ring.offset")};
}

.p-scrollpanel-bar-y {
    width: ${t("scrollpanel.bar.size")};
    inset-block-start: 0;
}

.p-scrollpanel-bar-x {
    height: ${t("scrollpanel.bar.size")};
    inset-block-end: 0;
}

.p-scrollpanel-hidden {
    visibility: hidden;
}

.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
    opacity: 1;
}

.p-scrollpanel-grabbed {
    user-select: none;
}
`,T={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},X=v.extend({name:"scrollpanel",style:k,classes:T}),R={name:"BaseScrollPanel",extends:y,props:{step:{type:Number,default:5}},style:X,provide:function(){return{$pcScrollPanel:this,$parentInstance:this}}},b={name:"ScrollPanel",extends:R,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},mounted:function(){this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),s=getComputedStyle(this.$refs.xBar),r=B(this.$el)-parseInt(s.height,10);e["max-height"]!=="none"&&r===0&&(this.$refs.content.offsetHeight+parseInt(s.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this;if(this.$refs.content){var s=this.$refs.content.scrollWidth,r=this.$refs.content.clientWidth,i=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=r/s;var n=this.$refs.content.scrollHeight,l=this.$refs.content.clientHeight,g=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=l/n,this.frame=this.requestAnimationFrame(function(){e.$refs.xBar&&(e.scrollXRatio>=1?(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&a(e.$refs.xBar,"p-scrollpanel-hidden")):(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&c(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(e.scrollXRatio*100,10)+"%; inset-inline-start:"+Math.abs(e.$refs.content.scrollLeft)/s*100+"%;bottom:"+i+"px;")),e.$refs.yBar&&(e.scrollYRatio>=1?(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&a(e.$refs.yBar,"p-scrollpanel-hidden")):(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&c(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+Math.max(e.scrollYRatio*100,10)+"%; top: calc("+e.$refs.content.scrollTop/n*100+"% - "+e.$refs.xBar.clientHeight+"px); inset-inline-end:"+g+"px;"))})}},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=e.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&a(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&a(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=e.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&a(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&a(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onScroll:function(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(e,s){this.$refs.content[e]+=s,this.moveBar()},setTimer:function(e,s){var r=this;this.clearTimer(),this.timer=setTimeout(function(){r.repeat(e,s)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var s=this,r=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(function(){s.$refs.content.scrollLeft+=r/s.scrollXRatio})},onMouseMoveForYBar:function(e){var s=this,r=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(function(){s.$refs.content.scrollTop+=r/s.scrollYRatio})},onFocus:function(e){this.$refs.xBar.isSameNode(e.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(e.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&c(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&c(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&c(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){var s=window.requestAnimationFrame||this.timeoutFrame;return s(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var s=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>s?s:e>0?e:0,this.$refs.content.scrollTop=e},timeoutFrame:function(e){setTimeout(e,0)},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(s){e.onDocumentMouseMove(s)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(s){e.onDocumentMouseUp(s)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.$id+"_content"}}},Y=["id"],C=["aria-controls","aria-valuenow"],P=["aria-controls","aria-valuenow"];function H(t,e,s,r,i,n){return p(),d("div",u({class:t.cx("root")},t.ptmi("root")),[o("div",u({class:t.cx("contentContainer")},t.ptm("contentContainer")),[o("div",u({ref:"content",id:n.contentId,class:t.cx("content"),onScroll:e[0]||(e[0]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)}),onMouseenter:e[1]||(e[1]=function(){return n.moveBar&&n.moveBar.apply(n,arguments)})},t.ptm("content")),[M(t.$slots,"default")],16,Y)],16),o("div",u({ref:"xBar",class:t.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":n.contentId,"aria-valuenow":i.lastScrollLeft,onMousedown:e[2]||(e[2]=function(){return n.onXBarMouseDown&&n.onXBarMouseDown.apply(n,arguments)}),onKeydown:e[3]||(e[3]=function(l){return n.onKeyDown(l)}),onKeyup:e[4]||(e[4]=function(){return n.onKeyUp&&n.onKeyUp.apply(n,arguments)}),onFocus:e[5]||(e[5]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:e[6]||(e[6]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)})},t.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,C),o("div",u({ref:"yBar",class:t.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":n.contentId,"aria-valuenow":i.lastScrollTop,onMousedown:e[7]||(e[7]=function(){return n.onYBarMouseDown&&n.onYBarMouseDown.apply(n,arguments)}),onKeydown:e[8]||(e[8]=function(l){return n.onKeyDown(l)}),onKeyup:e[9]||(e[9]=function(){return n.onKeyUp&&n.onKeyUp.apply(n,arguments)}),onFocus:e[10]||(e[10]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)})},t.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,P)],16)}b.render=H;const K={class:"rounded-lg overflow-hidden"},I={class:"flex bg-highlight"},N={key:0,class:"w-0.5 bg-primary-contrast h-full"},q={class:"text-nowrap text-primary font-bold text-xs"},E={class:"font-normal"},V={class:"text-nowrap text-sm"},W=w({__name:"master-plan-legend",props:{units:{type:Array,required:!0}},setup(t){return(e,s)=>{const r=b;return p(),d("div",null,[s[0]||(s[0]=o("h5",{class:"!mb-2"},"Legends",-1)),o("div",K,[f(r,{class:"h-16",dt:{bar:{background:"{primary.200}"}}},{default:L(()=>[o("div",I,[(p(!0),d(x,null,$(t.units,(i,n)=>(p(),d("div",{key:i.lotNumber,class:"flex items-start"},[n!==0?(p(),d("div",N)):D("",!0),o("div",{class:z(["flex flex-col p-4",{"bg-highlight-emphasis":i.sold}])},[o("span",q,[f(m(S),{icon:m(A),size:"xs"},null,8,["icon"]),F(" "+h(i.lotNumber)+" ",1),o("span",E,h(i.sold?"(SOLD)":""),1)]),o("span",V,h(i.name),1)],2)]))),128))])]),_:1})])])}}}),j=Object.assign(U(W,[["__scopeId","data-v-430c2a0c"]]),{__name:"MasterPlanLegend"});export{j as default};
