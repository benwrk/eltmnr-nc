const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BoQD2LCC.js","./Mz8xEfdx.js","./entry.BpNlLR3L.css","./DTLjJ2pD.js","./IX_r4ZLD.js","./ctXwiMyx.js","./ByuLLvJ3.js","./DvguEnGp.js","./master-plan-legend.DFiUhzZJ.css","./D38jQthq.js","./CYfrNFso.js","./lgCjxEsj.js","./PjTN3SCU.js","./Cqd_9sCs.js","./ij6PwGz3.js","./villa.C1vw_cti.css"])))=>i.map(i=>d[i]);
import{an as Ln,c as J,J as Rn,K as tn,L as An,M as En,N as In,O as on,ao as Un,ap as jn,a as rn,aq as Q,ar as an,a7 as A,r as Bn,a4 as un,as as E,at as q,au as H,av as zn,aw as sn,ax as Hn,_ as D,s as Vn,H as Fn,V as Nn,G as nn,n as qn,k as Wn}from"./Mz8xEfdx.js";function Kn(n,e={}){const l=e.head||Ln();if(l)return l.ssr?l.push(n,e):Xn(l,n,e)}function Xn(n,e,l={}){const t=J(!1),r=J({});Rn(()=>{r.value=t.value?{}:Un(e)});const a=n.push(r.value,l);return tn(r,m=>{a.patch(m)}),on()&&(An(()=>{a.dispose()}),En(()=>{t.value=!0}),In(()=>{t.value=!1})),a}function Ue(n,e){const{title:l,titleTemplate:t,...r}=n;return Kn({title:l,titleTemplate:t,_flatMeta:r},{...e,transform(a){const s=jn({...a._flatMeta});return delete a._flatMeta,{...a,meta:s}}})}function Yn(n){return{type:"root",children:n.value.map(cn)}}function cn(n){if(typeof n=="string")return{type:"text",value:n};const[e,l,...t]=n;return{type:"element",tag:e,props:l,children:t.map(cn)}}const B=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];class z{constructor(e,l,t){this.property=e,this.normal=l,t&&(this.space=t)}}z.prototype.property={};z.prototype.normal={};z.prototype.space=null;function pn(n,e){const l={},t={};let r=-1;for(;++r<n.length;)Object.assign(l,n[r].property),Object.assign(t,n[r].normal);return new z(l,t,e)}function W(n){return n.toLowerCase()}class S{constructor(e,l){this.property=e,this.attribute=l}}S.prototype.space=null;S.prototype.boolean=!1;S.prototype.booleanish=!1;S.prototype.overloadedBoolean=!1;S.prototype.number=!1;S.prototype.commaSeparated=!1;S.prototype.spaceSeparated=!1;S.prototype.commaOrSpaceSeparated=!1;S.prototype.mustUseProperty=!1;S.prototype.defined=!1;let $n=0;const u=L(),y=L(),dn=L(),o=L(),g=L(),I=L(),P=L();function L(){return 2**++$n}const K=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:y,commaOrSpaceSeparated:P,commaSeparated:I,number:o,overloadedBoolean:dn,spaceSeparated:g},Symbol.toStringTag,{value:"Module"})),N=Object.keys(K);class G extends S{constructor(e,l,t,r){let a=-1;if(super(e,l),en(this,"space",r),typeof t=="number")for(;++a<N.length;){const s=N[a];en(this,N[a],(t&K[s])===K[s])}}}G.prototype.defined=!0;function en(n,e,l){l&&(n[e]=l)}const Gn={}.hasOwnProperty;function U(n){const e={},l={};let t;for(t in n.properties)if(Gn.call(n.properties,t)){const r=n.properties[t],a=new G(t,n.transform(n.attributes||{},t),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(a.mustUseProperty=!0),e[t]=a,l[W(t)]=t,l[W(a.attribute)]=t}return new z(e,l,n.space)}const fn=U({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),gn=U({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function mn(n,e){return e in n?n[e]:e}function hn(n,e){return mn(n,e.toLowerCase())}const yn=U({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:hn,properties:{xmlns:null,xmlnsXLink:null}}),vn=U({transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:y,ariaAutoComplete:null,ariaBusy:y,ariaChecked:y,ariaColCount:o,ariaColIndex:o,ariaColSpan:o,ariaControls:g,ariaCurrent:null,ariaDescribedBy:g,ariaDetails:null,ariaDisabled:y,ariaDropEffect:g,ariaErrorMessage:null,ariaExpanded:y,ariaFlowTo:g,ariaGrabbed:y,ariaHasPopup:null,ariaHidden:y,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:g,ariaLevel:o,ariaLive:null,ariaModal:y,ariaMultiLine:y,ariaMultiSelectable:y,ariaOrientation:null,ariaOwns:g,ariaPlaceholder:null,ariaPosInSet:o,ariaPressed:y,ariaReadOnly:y,ariaRelevant:null,ariaRequired:y,ariaRoleDescription:g,ariaRowCount:o,ariaRowIndex:o,ariaRowSpan:o,ariaSelected:y,ariaSetSize:o,ariaSort:null,ariaValueMax:o,ariaValueMin:o,ariaValueNow:o,ariaValueText:null,role:null}}),Zn=U({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:hn,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:I,acceptCharset:g,accessKey:g,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:g,autoFocus:u,autoPlay:u,blocking:g,capture:null,charSet:null,checked:u,cite:null,className:g,cols:o,colSpan:null,content:null,contentEditable:y,controls:u,controlsList:g,coords:o|I,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:dn,draggable:y,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:g,height:o,hidden:u,high:o,href:null,hrefLang:null,htmlFor:g,httpEquiv:g,id:null,imageSizes:null,imageSrcSet:null,inert:u,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:g,itemRef:g,itemScope:u,itemType:g,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:o,manifest:null,max:null,maxLength:o,media:null,method:null,min:null,minLength:o,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:o,pattern:null,ping:g,placeholder:null,playsInline:u,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:g,required:u,reversed:u,rows:o,rowSpan:o,sandbox:g,scope:null,scoped:u,seamless:u,selected:u,shadowRootClonable:u,shadowRootDelegatesFocus:u,shadowRootMode:null,shape:null,size:o,sizes:null,slot:null,span:o,spellCheck:y,src:null,srcDoc:null,srcLang:null,srcSet:null,start:o,step:null,style:null,tabIndex:o,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:y,width:o,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:g,axis:null,background:null,bgColor:null,border:o,borderColor:null,bottomMargin:o,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:o,leftMargin:o,link:null,longDesc:null,lowSrc:null,marginHeight:o,marginWidth:o,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:o,rules:null,scheme:null,scrolling:y,standby:null,summary:null,text:null,topMargin:o,valueType:null,version:null,vAlign:null,vLink:null,vSpace:o,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:o,security:null,unselectable:null}}),Jn=U({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:mn,properties:{about:P,accentHeight:o,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:o,amplitude:o,arabicForm:null,ascent:o,attributeName:null,attributeType:null,azimuth:o,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:o,by:null,calcMode:null,capHeight:o,className:g,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:o,diffuseConstant:o,direction:null,display:null,dur:null,divisor:o,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:o,enableBackground:null,end:null,event:null,exponent:o,externalResourcesRequired:null,fill:null,fillOpacity:o,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:I,g2:I,glyphName:I,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:o,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:o,horizOriginX:o,horizOriginY:o,id:null,ideographic:o,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:o,k:o,k1:o,k2:o,k3:o,k4:o,kernelMatrix:P,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:o,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:o,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:o,overlineThickness:o,paintOrder:null,panose1:null,path:null,pathLength:o,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:g,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:o,pointsAtY:o,pointsAtZ:o,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:P,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:P,rev:P,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:P,requiredFeatures:P,requiredFonts:P,requiredFormats:P,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:o,specularExponent:o,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:o,strikethroughThickness:o,string:null,stroke:null,strokeDashArray:P,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:o,strokeOpacity:o,strokeWidth:null,style:null,surfaceScale:o,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:P,tabIndex:o,tableValues:null,target:null,targetX:o,targetY:o,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:P,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:o,underlineThickness:o,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:o,values:null,vAlphabetic:o,vMathematical:o,vectorEffect:null,vHanging:o,vIdeographic:o,version:null,vertAdvY:o,vertOriginX:o,vertOriginY:o,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:o,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),Qn=/^data[-\w.:]+$/i,ln=/-[a-z]/g,ne=/[A-Z]/g;function ee(n,e){const l=W(e);let t=e,r=S;if(l in n.normal)return n.property[n.normal[l]];if(l.length>4&&l.slice(0,4)==="data"&&Qn.test(e)){if(e.charAt(4)==="-"){const a=e.slice(5).replace(ln,te);t="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=e.slice(4);if(!ln.test(a)){let s=a.replace(ne,le);s.charAt(0)!=="-"&&(s="-"+s),e="data"+s}}r=G}return new r(t,e)}function le(n){return"-"+n.toLowerCase()}function te(n){return n.charAt(1).toUpperCase()}const oe=pn([gn,fn,yn,vn,Zn],"html");pn([gn,fn,yn,vn,Jn],"svg");const re=["p","h1","h2","h3","h4","h5","h6","li"];function V(n,e){return n.type===e||typeof n.type=="object"&&n.type.tag===e||n.tag===e}function Z(n){return V(n,"text")||V(n,Symbol.for("v-txt"))}function bn(n){var e;return Array.isArray(n.children)||typeof n.children=="string"?n.children:typeof((e=n.children)==null?void 0:e.default)=="function"?n.children.default():[]}function X(n){if(!n)return"";if(Array.isArray(n))return n.map(X).join("");if(Z(n))return n.value||n.children||"";const e=bn(n);return Array.isArray(e)?e.map(X).filter(Boolean).join(""):""}function Cn(n,e=[]){if(Array.isArray(n))return n.flatMap(t=>Cn(t,e));let l=n;return e.some(t=>t==="*"||V(n,t))&&(l=bn(n)||n,!Array.isArray(l)&&re.some(t=>V(n,t))&&(l=[l])),l}function Pn(n,e=[]){return n=Array.isArray(n)?n:[n],e.length?n.flatMap(l=>Pn(Cn(l,[e[0]]),e.slice(1))).filter(l=>!(Z(l)&&X(l).trim()==="")):n}function Sn(n,e=[]){return typeof e=="string"&&(e=e.split(/[,\s]/).map(l=>l.trim()).filter(Boolean)),e.length?Pn(n,e).reduce((l,t)=>(Z(t)?typeof l[l.length-1]=="string"?l[l.length-1]+=t.children:l.push(t.children):l.push(t),l),[]):n}function ae(n,e){return e.reduce((l,t)=>{const r=ue(n,t);return r!==void 0&&(l[t]=r),l},{})}function ue(n,e){return e.split(".").reduce((l,t)=>l&&l[t],n)}const Y="default",kn=/^@|^v-on:/,xn=/^:|^v-bind:/,ie=/^v-model/,se=["select","textarea","input"],ce=["math","svg"],pe=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),de=rn({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},class:{type:[String,Object],default:void 0},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})},unwrap:{type:[Boolean,String],default:!1}},async setup(n){var d,c,p,f,b,O,w,C;const e=(p=(c=(d=on())==null?void 0:d.appContext)==null?void 0:c.app)==null?void 0:p.$nuxt,l=(e==null?void 0:e.$route)||(e==null?void 0:e._route),{mdc:t}=((f=e==null?void 0:e.$config)==null?void 0:f.public)||{},r={...(b=t==null?void 0:t.components)!=null&&b.prose&&n.prose!==!1?pe:{},...((O=t==null?void 0:t.components)==null?void 0:O.map)||{},...an(((C=(w=n.data)==null?void 0:w.mdc)==null?void 0:C.components)||{}),...n.components},a=A(()=>{var M;const k=(((M=n.body)==null?void 0:M.children)||[]).map(_=>_.tag||_.type).filter(_=>!B.includes(_));return Array.from(new Set(k)).sort().join(".")}),s=Bn({...n.data});tn(()=>n.data,k=>{Object.assign(s,k)}),await ke(n.body,{tags:r});function m(k,M){const _=k.split(".").length-1;return k.split(".").reduce((T,i,h)=>h==_&&T?(T[i]=M,T[i]):typeof T=="object"?T[i]:void 0,s)}return{tags:r,contentKey:a,route:l,runtimeData:s,updateRuntimeData:m}},render(n){var O,w;const{tags:e,tag:l,body:t,data:r,contentKey:a,route:s,unwrap:m,runtimeData:d,updateRuntimeData:c}=n;if(!t)return null;const p={...r,tags:e,$route:s,runtimeData:d,updateRuntimeData:c},f=l!==!1?$(l||((O=p.component)==null?void 0:O.name)||p.component||"div"):void 0;return f?Q(f,{...(w=p.component)==null?void 0:w.props,class:n.class,...this.$attrs,key:a},{default:b}):b==null?void 0:b();function b(){const C=wn(t,Q,{documentMeta:p,parentScope:p,resolveComponent:$});return C!=null&&C.default?m?Sn(C.default(),typeof m=="string"?m.split(" "):["*"]):C.default():null}}});function fe(n,e,l){const{documentMeta:t,parentScope:r,resolveComponent:a}=l;if(n.type==="text")return e(H,n.value);if(n.type==="comment")return e(zn,null,n.value);const s=n.tag,m=_n(n,t.tags);if(n.tag==="binding")return ge(n,e,t,r);const d=On(m)?f=>f:a,c=d(m);typeof c=="object"&&(c.tag=s);const p=me(n,t);return e(c,p,wn(n,e,{documentMeta:t,parentScope:{...r,...p},resolveComponent:d}))}function wn(n,e,l){const{documentMeta:t,parentScope:r,resolveComponent:a}=l,m=(n.children||[]).reduce((c,p)=>{if(!Pe(p))return c[Y].children.push(p),c;const f=Ce(p);return c[f]=c[f]||{props:{},children:[]},p.type==="element"&&(c[f].props=p.props,c[f].children.push(...p.children||[])),c},{[Y]:{props:{},children:[]}});return Object.entries(m).reduce((c,[p,{props:f,children:b}])=>(b.length&&(c[p]=(O={})=>{const w=ae(O,Object.keys(f||{}));let C=b.map(k=>fe(k,e,{documentMeta:t,parentScope:{...r,...w},resolveComponent:a}));return f!=null&&f.unwrap&&(C=Sn(C,f.unwrap)),Se(C)}),c),{})}function ge(n,e,l,t={}){var c,p;const r={...l.runtimeData,...t,$document:l,$doc:l},a=/\.|\[(\d+)\]/,m=((c=n.props)==null?void 0:c.value.trim().split(a).filter(Boolean)).reduce((f,b)=>{if(f&&b in f)return typeof f[b]=="function"?f[b]():f[b]},r),d=(p=n.props)==null?void 0:p.defaultValue;return e(H,m??d??"")}function me(n,e){const{tag:l="",props:t={}}=n;return Object.keys(t).reduce(function(r,a){if(a==="__ignoreMap")return r;const s=t[a];if(ie.test(a))return he(a,s,r,e,{native:se.includes(l)});if(a==="v-bind")return ye(a,s,r,e);if(kn.test(a))return ve(a,s,r,e);if(xn.test(a))return be(a,s,r,e);const{attribute:m}=ee(oe,a);return Array.isArray(s)&&s.every(d=>typeof d=="string")?(r[m]=s.join(" "),r):(r[m]=s,r)},{})}function he(n,e,l,t,{native:r}){var d;const a=((d=n.match(/^v-model:([^=]+)/))==null?void 0:d[1])||"modelValue",s=r?"value":a,m=r?"onInput":`onUpdate:${a}`;return l[s]=F(e,t.runtimeData),l[m]=c=>{var p;t.updateRuntimeData(e,r?(p=c.target)==null?void 0:p.value:c)},l}function ye(n,e,l,t){const r=F(e,t);return l=Object.assign(l,r),l}function ve(n,e,l,t){return n=n.replace(kn,""),l.on=l.on||{},l.on[n]=()=>F(e,t),l}function be(n,e,l,t){return n=n.replace(xn,""),l[n]=F(e,t),l}const $=n=>{if(typeof n=="string"){if(B.includes(n))return n;const e=un(E(n),!1);return!n||(e==null?void 0:e.name)==="AsyncComponentWrapper"||typeof e=="string"?e:"setup"in e?q(()=>new Promise(l=>l(e))):e}return n};function F(n,e){const l=n.split(".").reduce((t,r)=>typeof t=="object"?t[r]:void 0,e);return typeof l>"u"?Hn(n):l}function Ce(n){let e="";for(const l of Object.keys(n.props||{}))if(!(!l.startsWith("#")&&!l.startsWith("v-slot:"))){e=l.split(/[:#]/,2)[1];break}return e||Y}function Pe(n){return n.tag==="template"}function On(n){return ce.includes(n)}function Se(n){const e=[];for(const l of n){const t=e[e.length-1];l.type===H&&(t==null?void 0:t.type)===H?t.children=t.children+l.children:e.push(l)}return e}async function ke(n,e){if(!n)return;const l=Array.from(new Set(t(n,e)));await Promise.all(l.map(async r=>{if(r!=null&&r.render||r!=null&&r.ssrRender||r!=null&&r.__ssrInlineRender)return;const a=$(r);a!=null&&a.__asyncLoader&&!a.__asyncResolved&&await a.__asyncLoader()}));function t(r,a){const s=r.tag;if(r.type==="text"||s==="binding"||r.type==="comment")return[];const m=_n(r,a.tags);if(On(m))return[];const d=[];r.type!=="root"&&!B.includes(m)&&d.push(m);for(const c of r.children||[])d.push(...t(c,a));return d}}function _n(n,e){var t;const l=n.tag;return!l||typeof((t=n.props)==null?void 0:t.__ignoreMap)<"u"?l:e[l]||e[E(l)]||e[sn(n.tag)]||l}const xe=Object.assign(de,{__name:"MDCRenderer"}),we=()=>D(()=>import("./BoQD2LCC.js"),__vite__mapDeps([0,1,2]),import.meta.url),Oe=()=>D(()=>import("./DTLjJ2pD.js"),__vite__mapDeps([3,1,2,4]),import.meta.url),_e=()=>D(()=>import("./ctXwiMyx.js"),__vite__mapDeps([5,1,2]),import.meta.url),De=()=>D(()=>import("./ByuLLvJ3.js"),__vite__mapDeps([6,7,1,2,8]),import.meta.url),Te=()=>D(()=>import("./D38jQthq.js"),__vite__mapDeps([9,1,2]),import.meta.url),Me=()=>D(()=>import("./CYfrNFso.js"),__vite__mapDeps([10,1,2]),import.meta.url),Le=()=>D(()=>import("./lgCjxEsj.js"),__vite__mapDeps([11,1,2]),import.meta.url),Re=()=>D(()=>import("./PjTN3SCU.js"),__vite__mapDeps([12,1,2,13,4,14,7,15]),import.meta.url),Dn=["ProseA","ProseBlockquote","ProseCode","ProseEm","ProseH1","ProseH2","ProseH3","ProseH4","ProseH5","ProseH6","ProseHr","ProseImg","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseStrong","ProseTable","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl"],Tn=["Articles","Contact","Googleforms","MasterPlanLegend","Partner","Person","Projects","Villa"],Ae=Object.freeze(Object.defineProperty({__proto__:null,Articles:we,Contact:Oe,Googleforms:_e,MasterPlanLegend:De,Partner:Te,Person:Me,Projects:Le,Villa:Re,globalComponents:Dn,localComponents:Tn},Symbol.toStringTag,{value:"Module"})),Ee=rn({__name:"ContentRenderer",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},prose:{type:Boolean,default:void 0},class:{type:[String,Object],default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){var k,M,_,T;const e=["render","ssrRender","__ssrInlineRender"],l=n,t=!1,r=A(()=>{let i=l.value.body||l.value;return l.excerpt&&l.value.excerpt&&(i=l.value.excerpt),i.type==="minimal"?Yn(i):i}),a=A(()=>{var i,h;return!((h=(i=r.value)==null?void 0:i.children)!=null&&h.length)}),s=A(()=>{const{body:i,excerpt:h,...v}=l.value;return{...v,...l.data}}),m=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(i=>[i,`prose-${i}`])),{mdc:d}=Vn().public||{},c={...(k=d==null?void 0:d.components)!=null&&k.prose&&l.prose!==!1?m:{},...((M=d==null?void 0:d.components)==null?void 0:M.map)||{},...an(((T=(_=l.data)==null?void 0:_.mdc)==null?void 0:T.components)||{}),...l.components},p=A(()=>{}),f=A(()=>r.value?O(r.value,{tags:c}):{});function b(i){let h=i;if(typeof i=="string"){if(B.includes(i))return i;if(Dn.includes(E(i))?h=un(i,!1):Tn.includes(E(i))&&(h=q(()=>D(()=>Promise.resolve().then(()=>Ae),void 0,import.meta.url).then(x=>x[E(i)]()))),typeof h=="string")return h}if(!h)return h;const v=h;return"__asyncLoader"in v?v:"setup"in v?q(()=>Promise.resolve(v)):v}function O(i,h){if(!i)return;const v=Array.from(new Set(w(i,h))),x={};for(const[R,j]of v)typeof j=="object"&&e.some(Mn=>Object.hasOwnProperty.call(j,Mn))||x[R]||(x[R]=b(j));return x}function w(i,h){const v=i.tag;if(i.type==="text"||v==="binding"||i.type==="comment")return[];const x=C(i,h.tags),R=[];i.type!=="root"&&!B.includes(x)&&R.push([v,x]);for(const j of i.children||[])R.push(...w(j,h));return R}function C(i,h){var x;const v=i.tag;return!v||typeof((x=i.props)==null?void 0:x.__ignoreMap)<"u"?v:h[v]||h[E(v)]||h[sn(i.tag)]||v}return(i,h)=>a.value?Nn(i.$slots,"empty",{key:1,body:r.value,data:s.value,dataContentId:nn(t)?n.value.id:void 0}):(Wn(),Fn(xe,{key:p.value,body:r.value,data:s.value,class:qn(l.class),tag:l.tag,prose:l.prose,unwrap:l.unwrap,components:f.value,"data-content-id":nn(t)?n.value.id:void 0},null,8,["body","data","class","tag","prose","unwrap","components","data-content-id"]))}}),je=Object.assign(Ee,{__name:"ContentRenderer"});export{je as _,Sn as f,Ue as u};
