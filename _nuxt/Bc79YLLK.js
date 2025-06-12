import{R as y,S as B,ac as c,ab as a,aZ as M,a3 as f,f as d,k as h,i as o,U as u,V as w,a as L,h as m,w as x,F as D,a5 as z,g as F,n as U,ad as $,G as b,t as p,l as S}from"./LLLh6azt.js";import{F as A,f as k}from"./B5pNvVQG.js";var T=function(e){var n=e.dt;return`
.p-scrollpanel-content-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}

.p-scrollpanel-content {
    height: calc(100% + calc(2 * `.concat(n("scrollpanel.bar.size"),`));
    width: calc(100% + calc(2 * `).concat(n("scrollpanel.bar.size"),`));
    padding-inline: 0 calc(2 * `).concat(n("scrollpanel.bar.size"),`);
    padding-block: 0 calc(2 * `).concat(n("scrollpanel.bar.size"),`);
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
    border-radius: `).concat(n("scrollpanel.bar.border.radius"),`;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    outline-color: transparent;
    background: `).concat(n("scrollpanel.bar.background"),`;
    border: 0 none;
    transition: outline-color `).concat(n("scrollpanel.transition.duration"),", opacity ").concat(n("scrollpanel.transition.duration"),`;
}

.p-scrollpanel-bar:focus-visible {
    box-shadow: `).concat(n("scrollpanel.bar.focus.ring.shadow"),`;
    outline: `).concat(n("scrollpanel.barfocus.ring.width")," ").concat(n("scrollpanel.bar.focus.ring.style")," ").concat(n("scrollpanel.bar.focus.ring.color"),`;
    outline-offset: `).concat(n("scrollpanel.barfocus.ring.offset"),`;
}

.p-scrollpanel-bar-y {
    width: `).concat(n("scrollpanel.bar.size"),`;
    inset-block-start: 0;
}

.p-scrollpanel-bar-x {
    height: `).concat(n("scrollpanel.bar.size"),`;
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
`)},R={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},X=y.extend({name:"scrollpanel",theme:T,classes:R}),Y={name:"BaseScrollPanel",extends:B,props:{step:{type:Number,default:5}},style:X,provide:function(){return{$pcScrollPanel:this,$parentInstance:this}}},g={name:"ScrollPanel",extends:Y,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{id:this.$attrs.id,orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},watch:{"$attrs.id":function(e){this.id=e||f()}},mounted:function(){this.id=this.id||f(),this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),n=getComputedStyle(this.$refs.xBar),r=M(this.$el)-parseInt(n.height,10);e["max-height"]!=="none"&&r===0&&(this.$refs.content.offsetHeight+parseInt(n.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this;if(this.$refs.content){var n=this.$refs.content.scrollWidth,r=this.$refs.content.clientWidth,i=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=r/n;var s=this.$refs.content.scrollHeight,l=this.$refs.content.clientHeight,v=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=l/s,this.frame=this.requestAnimationFrame(function(){e.$refs.xBar&&(e.scrollXRatio>=1?(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&a(e.$refs.xBar,"p-scrollpanel-hidden")):(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&c(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(e.scrollXRatio*100,10)+"%; inset-inline-start:"+Math.abs(e.$refs.content.scrollLeft)/n*100+"%;bottom:"+i+"px;")),e.$refs.yBar&&(e.scrollYRatio>=1?(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&a(e.$refs.yBar,"p-scrollpanel-hidden")):(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&c(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+Math.max(e.scrollYRatio*100,10)+"%; top: calc("+e.$refs.content.scrollTop/s*100+"% - "+e.$refs.xBar.clientHeight+"px); inset-inline-end:"+v+"px;"))})}},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=e.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&a(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&a(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=e.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&a(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&a(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onScroll:function(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(e,n){this.$refs.content[e]+=n,this.moveBar()},setTimer:function(e,n){var r=this;this.clearTimer(),this.timer=setTimeout(function(){r.repeat(e,n)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var n=this,r=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(function(){n.$refs.content.scrollLeft+=r/n.scrollXRatio})},onMouseMoveForYBar:function(e){var n=this,r=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(function(){n.$refs.content.scrollTop+=r/n.scrollYRatio})},onFocus:function(e){this.$refs.xBar.isSameNode(e.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(e.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&c(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&c(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&c(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){var n=window.requestAnimationFrame||this.timeoutFrame;return n(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var n=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>n?n:e>0?e:0,this.$refs.content.scrollTop=e},timeoutFrame:function(e){setTimeout(e,0)},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(n){e.onDocumentMouseMove(n)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(n){e.onDocumentMouseUp(n)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.id+"_content"}}},C=["id"],P=["aria-controls","aria-valuenow"],H=["aria-controls","aria-valuenow"];function K(t,e,n,r,i,s){return h(),d("div",u({class:t.cx("root")},t.ptmi("root")),[o("div",u({class:t.cx("contentContainer")},t.ptm("contentContainer")),[o("div",u({ref:"content",id:s.contentId,class:t.cx("content"),onScroll:e[0]||(e[0]=function(){return s.onScroll&&s.onScroll.apply(s,arguments)}),onMouseenter:e[1]||(e[1]=function(){return s.moveBar&&s.moveBar.apply(s,arguments)})},t.ptm("content")),[w(t.$slots,"default")],16,C)],16),o("div",u({ref:"xBar",class:t.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":s.contentId,"aria-valuenow":i.lastScrollLeft,onMousedown:e[2]||(e[2]=function(){return s.onXBarMouseDown&&s.onXBarMouseDown.apply(s,arguments)}),onKeydown:e[3]||(e[3]=function(l){return s.onKeyDown(l)}),onKeyup:e[4]||(e[4]=function(){return s.onKeyUp&&s.onKeyUp.apply(s,arguments)}),onFocus:e[5]||(e[5]=function(){return s.onFocus&&s.onFocus.apply(s,arguments)}),onBlur:e[6]||(e[6]=function(){return s.onBlur&&s.onBlur.apply(s,arguments)})},t.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,P),o("div",u({ref:"yBar",class:t.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":s.contentId,"aria-valuenow":i.lastScrollTop,onMousedown:e[7]||(e[7]=function(){return s.onYBarMouseDown&&s.onYBarMouseDown.apply(s,arguments)}),onKeydown:e[8]||(e[8]=function(l){return s.onKeyDown(l)}),onKeyup:e[9]||(e[9]=function(){return s.onKeyUp&&s.onKeyUp.apply(s,arguments)}),onFocus:e[10]||(e[10]=function(){return s.onFocus&&s.onFocus.apply(s,arguments)})},t.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,H)],16)}g.render=K;const I={class:"rounded-lg overflow-hidden"},N={class:"flex bg-highlight"},q={key:0,class:"w-0.5 bg-primary-contrast h-full"},E={class:"text-nowrap text-primary font-bold text-xs"},V={class:"font-normal"},W={class:"text-nowrap text-sm"},_=L({__name:"Legends",props:{units:{type:Array,required:!0}},setup(t){return(e,n)=>{const r=g;return h(),d("div",null,[n[0]||(n[0]=o("h5",{class:"!mb-2"},"Legends",-1)),o("div",I,[m(r,{class:"h-16",dt:{bar:{background:"{primary.200}"}}},{default:x(()=>[o("div",N,[(h(!0),d(D,null,z(t.units,(i,s)=>(h(),d("div",{key:i.lotNumber,class:"flex items-start"},[s!==0?(h(),d("div",q)):F("",!0),o("div",{class:U(["flex flex-col p-4",{"bg-highlight-emphasis":i.sold}])},[o("span",E,[m(b(A),{icon:b(k),size:"xs"},null,8,["icon"]),$(" "+p(i.lotNumber)+" ",1),o("span",V,p(i.sold?"(SOLD)":""),1)]),o("span",W,p(i.name),1)],2)]))),128))])]),_:1})])])}}}),G=Object.assign(S(_,[["__scopeId","data-v-4cbc63e1"]]),{__name:"Legends"});export{G as default};
