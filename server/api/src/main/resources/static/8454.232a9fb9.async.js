(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8454],{90586:function(he,Y,u){"use strict";u.d(Y,{P:function(){return Z}});var G=u(11849),g=u(93224),m=u(80937),e=u(67294),_=u(30381),X=u.n(_),ee=u(85893),Z=function(I){var ne=I.children,f=I.syncDisplay,te=I.isMoment,L=(0,g.Z)(I,["children","syncDisplay","isMoment"]),ie=(0,e.useMemo)(function(){return(0,m.$j)(function(E){var y=E.value,R=E.onChange,k=y;return te&&y&&(k=X()(y)),e.cloneElement(ne,{value:k,onChange:function(A){R(A)}})},(0,m.jM)(function(E,y){return{value:E.value,onChange:function(k){X().isMoment(k)?y.onInput(k.valueOf()):y.onInput(k)}}}))},[]);return(0,ee.jsx)(m.gN,(0,G.Z)((0,G.Z)({},L),{},{component:[ie,I],reactions:[function(E){if(f)if(typeof f=="string"){var y=E.query(E.path.parent().concat(f)).get("value");y?E.display="visible":E.display="none"}else typeof f=="object"&&Object.keys(f).forEach(function(R){var k=E.query(E.path.parent().concat(R)).get("value");f[R].includes(k)?E.display="visible":E.display="none"})}]}))};Y.Z=Z},18454:function(he,Y,u){"use strict";u.d(Y,{KL:function(){return ge},M6:function(){return me},yX:function(){return Le},kJ:function(){return we},tx:function(){return mn},cg:function(){return He},rs:function(){return je},q1:function(){return Me},qo:function(){return Fe},Jg:function(){return q}});var G=u(63185),g=u(80937),m=u(67294),e=u(85893),_=function(n){var t=n.children,i=_objectWithoutProperties(n,["children"]),l=function(a){return _jsx(_Checkbox,{checked:a.value,onChange:function(x){a.onChange(x.target.checked)},children:t})};return _jsx(Field,_objectSpread({component:[l]},i))},X=u(47673),ee=function(n){var t=n.children,i=n.style,l=_objectWithoutProperties(n,["children","style"]),r=function(o){return _jsx(_Input,{value:o.value,style:i,onChange:function(c){o.onChange(c.target.value)},children:t})};return _jsx(Field,_objectSpread({component:[r]},l))},Z=u(11849),ve=u(71194),I=u(50146),ne=u(57663),f=u(71577),te=u(77576),L=u(12028),ie=u(22385),E=u(61580),y=u(94657),R=u(19357),k=u(84387),ue=u(54531),A=u(11628),fe=function(n){var t=n.value,i=n.onChange,l=(0,m.useState)(!1),r=(0,y.Z)(l,2),a=r[0],o=r[1],x=(0,A.IE)(),c=(0,m.useRef)(null);return(0,m.useEffect)(function(){t||o(!1)},[t]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"setting-item",children:[(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsxs)("span",{children:["\u8BBE\u7F6E\u95EE\u5377\u9ED8\u8BA4\u7B54\u6848",(0,e.jsx)(E.Z,{overlay:"\u8BBE\u7F6E\u7684\u7B54\u6848\u5C06\u4F5C\u4E3A\u9ED8\u8BA4\u7B54\u6848\u5E26\u5165\u95EE\u5377",children:(0,e.jsx)(k.Z,{className:"setting-prompt"})})]}),(0,e.jsx)(L.Z,{checked:!!t,onChange:function(v){v?o(!0):i(void 0)}})]}),(a||!!t)&&(0,e.jsx)("div",{className:"setting-item-content",children:(0,e.jsx)(f.Z,{onClick:function(){return o(!0)},style:{marginLeft:10},type:"dashed",children:t?"\u70B9\u51FB\u4FEE\u6539":"\u70B9\u51FB\u8BBE\u7F6E"})})]}),a&&(0,e.jsx)(I.Z,{visible:!0,onCancel:function(){return o(!1)},bodyStyle:{maxHeight:600,overflowY:"auto",padding:0},maskClosable:!1,width:650,onOk:function(){var v;i((0,ue.ZN)((v=c.current)===null||v===void 0?void 0:v.getValues())),o(!1)},children:x.schema?(0,e.jsx)(R.Z,{ref:c,initialValues:t,paginationVisible:!1,schema:x.schema,footerVisible:!1}):"\u95EE\u5377\u4E3A\u7A7A"})]})},me=function(n){return(0,e.jsx)(g.gN,(0,Z.Z)({component:[fe]},n))},xe=u(74118),Ce=function(n){var t=n.value,i=n.onChange,l=(0,m.useState)(!1),r=(0,y.Z)(l,2),a=r[0],o=r[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"setting-item",children:[(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsxs)("span",{children:["\u7B54\u9898\u5B8C\u6210\u540E\u8DF3\u8F6C\u81EA\u5B9A\u4E49\u9875\u9762",(0,e.jsx)(E.Z,{overlay:"\u4F60\u53EF\u4EE5\u5728\u8868\u5355\u63D0\u4EA4\u9875\u9762\u8BBE\u7F6E\u66F4\u4E3A\u4E30\u5BCC\u591A\u5F69\u7684\u5185\u5BB9\uFF0C\u5305\u62EC\u63D2\u5165\u56FE\u7247\u3001\u8BBE\u7F6E\u5B57\u53F7\u3001\u5B57\u4F53\u989C\u8272\u3001\u5E8F\u53F7\u3001\u8BBE\u7F6E\u8D85\u94FE\u63A5\u7B49\u7B49\u3002",children:(0,e.jsx)(k.Z,{className:"setting-prompt"})})]}),(0,e.jsx)(L.Z,{checked:!!t,onChange:function(c){c?o(!0):i(void 0)}})]}),(a||!!t)&&(0,e.jsx)("div",{className:"setting-item-content",children:(0,e.jsx)(f.Z,{onClick:function(){return o(!0)},style:{marginLeft:10},type:"dashed",children:t?"\u70B9\u51FB\u4FEE\u6539":"\u70B9\u51FB\u8BBE\u7F6E"})})]}),a&&(0,e.jsx)(xe.cM,{value:t,title:"\u63D0\u4EA4\u540E\u56FE\u6587\u5C55\u793A",width:750,onChange:function(c){i(c),o(!1)},onClose:function(){o(!1)}})]})},ge=function(n){return(0,e.jsx)(g.gN,(0,Z.Z)({component:[Ce]},n))},je=function(n){var t=n.title,i=n.tooltip,l=function(a){return(0,e.jsx)("div",{className:"setting-item",children:(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsxs)("span",{children:[t,i&&(0,e.jsx)(E.Z,{overlay:i,children:(0,e.jsx)(k.Z,{className:"setting-prompt"})})]}),(0,e.jsx)(L.Z,{checked:a.value,onChange:function(x){a.onChange(x)}})]})})};return(0,e.jsx)(g.gN,(0,Z.Z)({component:[l]},n))},ae=u(93224),xn=u(77883),le=u(85482),Cn=u(43358),ye=u(34041),Ee=function(n){var t=n.value,i=n.onChange,l=n.title,r=n.tooltip,a=(0,m.useState)(!!t),o=(0,y.Z)(a,2),x=o[0],c=o[1];return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"setting-item",children:[(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsxs)("span",{children:[l,(0,e.jsx)(E.Z,{overlay:r,children:(0,e.jsx)(k.Z,{className:"setting-prompt"})})]}),(0,e.jsx)(L.Z,{checked:!!t,onChange:function(v){v?(c(!0),i({limitFreq:"only",limitNum:1})):(c(!1),i(void 0))}})]}),x&&(0,e.jsx)("div",{className:"setting-item-content",children:(0,e.jsxs)("div",{children:[(0,e.jsx)(ye.Z,{style:{width:100},value:t==null?void 0:t.limitFreq,onChange:function(v){return i({limitFreq:v,limitNum:(t==null?void 0:t.limitNum)||1})},options:[{label:"\u53EA\u80FD",value:"only"},{label:"\u6BCF\u5C0F\u65F6",value:"hour"},{label:"\u6BCF\u5929",value:"day"},{label:"\u6BCF\u81EA\u7136\u5468",value:"week"},{label:"\u6BCF\u81EA\u7136\u6708",value:"month"},{label:"\u6BCF\u5B63\u5EA6",value:"quarter"},{label:"\u6BCF\u81EA\u7136\u5E74",value:"year"}]}),(0,e.jsx)("span",{style:{margin:"0 10px"},children:"\u7B54\u9898"}),(0,e.jsx)(le.Z,{min:1,max:9999,defaultValue:1,value:t==null?void 0:t.limitNum,onChange:function(v){return i({limitNum:v,limitFreq:(t==null?void 0:t.limitFreq)||"only"})}}),(0,e.jsx)("span",{style:{margin:"0 10px"},children:"\u6B21"})]})})]})})},Fe=function(n){var t=n.name,i=n.basePath,l=(0,ae.Z)(n,["name","basePath"]);return(0,e.jsx)(g.gN,{component:[Ee,l],name:t,basePath:i})},gn=function(){var n=function(i){var l=i.value,r=i.onChange;return l===1?_jsx(_Button,{type:"primary",icon:_jsx(CaretRightOutlined,{}),onClick:function(){return r(0)},children:"\u6B63\u5728\u56DE\u6536"}):_jsx(_Button,{type:"primary",danger:!0,icon:_jsx(PauseOutlined,{}),onClick:function(){return r(1)},children:"\u6682\u505C\u56DE\u6536"})};return _jsx(Field,{name:"status",component:[n],basePath:""})},jn=u(59250),pe=u(13013),yn=u(30887),$=u(28682),U=u(3182),M=u(4107),Ze=u(94043),b=u.n(Ze),w=u(92592),z=u(83279),En=u(20136),re=u(55241),Fn=u(49111),Q=u(19650),ke=u(54977),Be=u(23538),Se=u(73171),be=u(71211),De=M.Z.Search;function Ie(s){return"".concat(window.location.origin,"/s/").concat(s)}var Ae=function(n){var t=n.item,i=n.onChange,l=n.onDelete,r=(0,A.IE)(),a=t.url,o=(0,m.useState)(""),x=(0,y.Z)(o,2),c=x[0],h=x[1],v=(0,m.useRef)(null),p=(0,A.IE)(),F=(0,m.useState)(!1),B=(0,y.Z)(F,2),P=B[0],N=B[1];(0,m.useEffect)(function(){function d(){return j.apply(this,arguments)}function j(){return j=(0,U.Z)(b().mark(function H(){return b().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:w.toDataURL(a,{errorCorrectionLevel:"H",type:"image/jpeg",quality:.3,margin:5}).then(function(D){h(D)}).catch(function(D){console.error(D)});case 1:case"end":return S.stop()}},H)})),j.apply(this,arguments)}d()},[a]);var C=(0,m.useCallback)(function(){var d=(0,U.Z)(b().mark(function j(H){return b().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:w.toDataURL(a,{errorCorrectionLevel:"H",margin:5,width:H}).then(function(D){h(D);var W=document.createElement("a");W.href=D,W.setAttribute("download","".concat(r.name,"_").concat(H,".png")),document.body.appendChild(W),W.click(),document.body.removeChild(W)});case 1:case"end":return S.stop()}},j)}));return function(j){return d.apply(this,arguments)}}(),[a,r]);return(0,e.jsxs)("div",{style:{border:"1px solid #d9d9d9",margin:"5px 0",padding:"8px 4px"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,e.jsx)(M.Z,{value:t.name,style:{width:200},placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",onChange:function(j){return i((0,Z.Z)((0,Z.Z)({},t),{},{name:j.target.value}))}}),(0,e.jsxs)(Q.Z,{children:[(0,e.jsx)(f.Z,{icon:(0,e.jsx)(ke.Z,{}),onClick:function(){return N(!0)}}),(0,e.jsx)(re.Z,{content:(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:c,height:150,width:150}),(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsxs)(Q.Z,{children:[(0,e.jsx)(f.Z,{size:"small",type:"link",onClick:function(){return C(256)},children:"\u5C0F\u53F7"}),(0,e.jsx)(f.Z,{size:"small",type:"link",onClick:function(){return C(512)},children:"\u4E2D\u53F7"}),(0,e.jsx)(f.Z,{size:"small",type:"link",onClick:function(){return C(1024)},children:"\u5927\u53F7"})]})})]}),title:"".concat(r.name,"(\u4E8C\u7EF4\u7801)"),trigger:["click"],children:(0,e.jsx)(f.Z,{icon:(0,e.jsx)(Be.Z,{})})}),(0,e.jsx)(f.Z,{icon:(0,e.jsx)(Se.Z,{}),onClick:function(){return l(t.id)}})]})]}),(0,e.jsx)(De,{value:a,style:{margin:"5px 0 0 0"},enterButton:"\u6253\u5F00",className:"open-target",onSearch:function(){window.open("/s/".concat(r.id,"?id=").concat(t.id))}}),(0,e.jsx)(I.Z,{visible:P,onCancel:function(){return N(!1)},bodyStyle:{maxHeight:600,overflowY:"auto",padding:0},maskClosable:!1,width:650,onOk:function(){N(!1)},children:p.schema&&(0,e.jsx)(R.Z,{ref:v,initialValues:t.value,schema:p.schema,footerVisible:!1,onSubmit:function(j){}})})]})},Pe=function(n){var t=n.visible,i=n.onClose,l=(0,m.useState)([]),r=(0,y.Z)(l,2),a=r[0],o=r[1],x=(0,A.IE)();return(0,e.jsxs)(I.Z,{visible:t,onCancel:i,title:"\u5E26\u503C\u94FE\u63A5\u8BBE\u7F6E",maskClosable:!1,bodyStyle:{maxHeight:360,overflow:"auto"},children:[a.map(function(c){return(0,e.jsx)(Ae,{item:c,onChange:function(v){var p=a.findIndex(function(F){return F.id===v.id});a.splice(p,1,v),o((0,z.Z)(a))},onDelete:function(v){o((0,z.Z)(a.filter(function(p){return p.id!==v})))}},c.id)}),(0,e.jsx)(f.Z,{block:!0,type:"primary",ghost:!0,onClick:function(){var h=(0,be.Ox)();a.push({id:h,url:"".concat(Ie(x.id),"?id=").concat(h)}),o((0,z.Z)(a))},children:"\u6DFB\u52A0"})]})},Ne=M.Z.Search;function q(s){return"".concat(window.location.origin,"/s/").concat(s)}var Le=function(){var n=(0,A.IE)(),t=q(n.id),i=(0,m.useState)(""),l=(0,y.Z)(i,2),r=l[0],a=l[1],o=(0,m.useState)(!1),x=(0,y.Z)(o,2),c=x[0],h=x[1];(0,m.useEffect)(function(){function F(){return B.apply(this,arguments)}function B(){return B=(0,U.Z)(b().mark(function P(){return b().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:w.toDataURL(t,{errorCorrectionLevel:"H",type:"image/jpeg",quality:.3,margin:5}).then(function(d){a(d)}).catch(function(d){console.error(d)});case 1:case"end":return C.stop()}},P)})),B.apply(this,arguments)}F()},[t]);var v=(0,m.useCallback)(function(){var F=(0,U.Z)(b().mark(function B(P){return b().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:w.toDataURL(t,{errorCorrectionLevel:"H",margin:5,width:P}).then(function(d){a(d);var j=document.createElement("a");j.href=d,j.setAttribute("download","".concat(n.name,"_").concat(P,".png")),document.body.appendChild(j),j.click(),document.body.removeChild(j)});case 1:case"end":return C.stop()}},B)}));return function(B){return F.apply(this,arguments)}}(),[t,n]),p=(0,e.jsxs)($.Z,{onClick:function(B){return v(parseInt(B.key))},children:[(0,e.jsx)($.Z.Item,{children:"\u5C0F\u53F7"},256),(0,e.jsx)($.Z.Item,{children:"\u4E2D\u53F7"},512),(0,e.jsx)($.Z.Item,{children:"\u5927\u53F7"},1024)]});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsx)("span",{children:"\u95EE\u5377\u94FE\u63A5"}),(0,e.jsx)(Ne,{value:t,style:{width:300},enterButton:"\u6253\u5F00",className:"open-target",onSearch:function(){window.open("/s/".concat(n.id))}})]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:10},children:[(0,e.jsx)("div",{style:{border:"1px solid #e1e7f2",borderRadius:3,boxShadow:"0px 3px 8px 0px rgb(224 229 236 / 40%)",width:100,height:100},children:(0,e.jsx)("img",{src:r,height:95,width:95})}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,e.jsx)(pe.Z,{overlay:p,placement:"bottomLeft",children:(0,e.jsx)(f.Z,{children:"\u4E0B\u8F7D\u4E8C\u7EF4\u7801"})}),(0,e.jsxs)(f.Z,{type:"primary",ghost:!0,style:{marginTop:10,visibility:"hidden"},onClick:function(){return h(!0)},children:["\u5E26\u503C\u94FE\u63A5",(0,e.jsx)(E.Z,{overlay:"\u94FE\u63A5\u6DFB\u52A0\u53C2\u6570\uFF0C\u5C06\u81EA\u52A8\u5E94\u7528\u4E3A\u95EE\u5377\u7684\u7B54\u6848\u3002",children:(0,e.jsx)(k.Z,{className:"setting-prompt",style:{color:"#1891ff"}})})]})]}),(0,e.jsx)(Pe,{visible:c,onClose:function(){return h(!1)}})]})]})},pn=u(14965),se=u(68318),Oe=u(30381),K=u.n(Oe),Re=function(n){var t=n.value,i=n.onChange,l=n.title,r=n.tooltip,a=n.type,o=a===void 0?"text":a,x=n.prefix,c=n.suffix,h=n.style,v=(0,m.useState)(t!==void 0),p=(0,y.Z)(v,2),F=p[0],B=p[1];(0,m.useEffect)(function(){t!==void 0&&B(!0)},[t]);var P=function(){return o==="datepicker"?(0,e.jsx)(se.Z,{value:t?K()(t):void 0,showTime:!0,style:h,onChange:function(d){i(d?d==null?void 0:d.valueOf():void 0)}}):o==="number"?(0,e.jsx)(le.Z,{value:t,onChange:function(d){return i(d)},style:(0,Z.Z)({width:200},h)}):(0,e.jsx)(M.Z,{value:t,onChange:function(d){return i(d.target.value)},style:(0,Z.Z)({width:200},h)})};return(0,e.jsxs)("div",{className:"setting-item",children:[(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsxs)("span",{children:[l,r&&(0,e.jsx)(E.Z,{overlay:r,children:(0,e.jsx)(k.Z,{className:"setting-prompt"})})]}),(0,e.jsx)(L.Z,{checked:t!==void 0,onChange:function(C){C?(B(!0),i("")):(B(!1),i(void 0))}})]}),F&&(0,e.jsxs)("div",{className:"setting-item-content",children:[x,P(),c]})]})},Me=function(n){var t=n.name,i=n.basePath,l=(0,ae.Z)(n,["name","basePath"]);return(0,e.jsx)(g.gN,{component:[Re,l],name:t,basePath:i})},Ve=u(25782),Ue=u(69816),we=function(){var n=function(i){var l=i.value,r=i.onChange;return l===1?(0,e.jsx)(f.Z,{type:"primary",icon:(0,e.jsx)(Ve.Z,{}),onClick:function(){return r(0)},children:"\u6B63\u5728\u56DE\u6536"}):(0,e.jsx)(f.Z,{type:"primary",danger:!0,icon:(0,e.jsx)(Ue.Z,{}),onClick:function(){return r(1)},children:"\u6682\u505C\u56DE\u6536"})};return(0,e.jsx)(g.gN,{component:[n],name:"status",basePath:""})},J=u(1997),Te=function(n){var t=n.value,i=n.onChange,l=(0,m.useState)(!1),r=(0,y.Z)(l,2),a=r[0],o=r[1],x=(0,A.IE)(),c=x.schema;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"setting-item",children:[(0,e.jsxs)("div",{className:"setting-item-switch",children:[(0,e.jsxs)("span",{children:["\u7B54\u9898\u5B8C\u6210\u540E\u8DF3\u8F6C\u81EA\u5B9A\u4E49\u94FE\u63A5",(0,e.jsx)(E.Z,{overlay:"\u95EE\u5377\u4FDD\u5B58\u4E4B\u540E\uFF0C\u53EF\u4EE5\u8DF3\u8F6C\u5230\u6307\u5B9A\u94FE\u63A5\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u94FE\u63A5\u53C2\u6570\u3002",children:(0,e.jsx)(k.Z,{className:"setting-prompt"})})]}),(0,e.jsx)(L.Z,{checked:!!t,onChange:function(v){v?o(!0):i(void 0)}})]}),(a||!!t)&&(0,e.jsx)("div",{className:"setting-item-content",children:(0,e.jsx)(f.Z,{onClick:function(){return o(!0)},style:{marginLeft:10},type:"dashed",children:t?"\u70B9\u51FB\u4FEE\u6539":"\u70B9\u51FB\u8BBE\u7F6E"})})]}),a&&(0,e.jsx)(J.tC,{value:t,schema:c,functionVisible:!1,title:"\u63D0\u4EA4\u540E\u81EA\u5B9A\u4E49\u8DF3\u8F6C\u94FE\u63A5",onOk:function(v){i(v),o(!1)},onCancel:function(){o(!1)}})]})},He=function(n){return(0,e.jsx)(g.gN,(0,Z.Z)({component:[Te]},n))},Qe=u(49101),Zn=u(48736),We=u(27049),kn=u(34792),oe=u(48086),Bn=u(9715),T=u(86835),Ye=u(64031),Sn=u(88983),V=u(66253),$e=u(90586),ze=u(32059),bn=u(13254),ce=u(14277),Ke=u(76826),Je=u(96486),Ge=["FillBlank","MultipleBlank","Textarea","Signature","Radio","Checkbox","Select","Cascader","MatrixAuto","MatrixRadio","MatrixCheckbox","MatrixFillBlank","MatrixScore","Upload","Score","Nps","Remark","SplitLine","User","Dept"],Xe=["Pagination","Remark","SplitLine"],qe={Pagination:"\u5206\u9875",Remark:"\u5907\u6CE8",SplitLine:"\u5206\u5272\u7EBF"};function de(s){var n=[];return s&&((Ge.includes(s.type)||Xe.includes(s.type))&&n.push({id:s.id,title:qe[s.type]||(0,Ke.WO)(s.title),type:s.type}),s.children&&s.children.map(function(t){var i=de(t);i&&n.push.apply(n,(0,z.Z)(i))})),n}var _e=function(n){var t=n.value,i=n.onChange;return(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n.title}),(0,e.jsx)("td",{onClick:function(){return i(2)},children:(0,e.jsx)(V.ZP,{value:2,checked:t===2})}),(0,e.jsx)("td",{onClick:function(){return i(1)},children:(0,e.jsx)(V.ZP,{value:1,checked:t===1})}),(0,e.jsx)("td",{onClick:function(){return i(0)},children:(0,e.jsx)(V.ZP,{value:0,checked:t===0})})]},n.id)},en=function(n){var t=n.onChange,i=n.value,l=i===void 0?{}:i,r=(0,A.IE)(),a=r.schema,o=(0,m.useMemo)(function(){return de(a)},[a]);(0,m.useEffect)(function(){if((0,Je.isEmpty)(l)&&o.length>0){var c={};o.forEach(function(h){return c[h.id]=1}),t&&t(c)}},[a,l,o,t]);var x=function(h){t&&t(o.reduce(function(v,p){return v[p.id]=h,v},{}))};return a?(0,e.jsx)("div",{children:(0,e.jsxs)("table",{className:"field-permission-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{style:{width:"64%"},children:"\u5B57\u6BB5\u540D"}),(0,e.jsx)("th",{style:{width:"12%"},children:"\u53EF\u7F16\u8F91"}),(0,e.jsx)("th",{style:{width:"12%"},children:"\u4EC5\u53EF\u89C1"}),(0,e.jsx)("th",{style:{width:"12%"},children:"\u9690\u85CF"})]})}),(0,e.jsx)("tbody",{children:o.map(function(c){return(0,m.createElement)(_e,(0,Z.Z)((0,Z.Z)({},c),{},{value:l[c.id],onChange:function(v){t&&t((0,Z.Z)((0,Z.Z)({},l),{},(0,ze.Z)({},c.id,v)))},key:c.id}))})}),(0,e.jsx)("tfoot",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{}),(0,e.jsx)("td",{children:(0,e.jsx)(f.Z,{size:"small",type:"link",onClick:function(){return x(2)},children:"\u5168\u9009"})}),(0,e.jsx)("td",{children:(0,e.jsx)(f.Z,{size:"small",type:"link",onClick:function(){return x(1)},children:"\u5168\u9009"})}),(0,e.jsx)("td",{children:(0,e.jsx)(f.Z,{size:"small",type:"link",onClick:function(){return x(0)},children:"\u5168\u9009"})})]})})]})}):(0,e.jsx)("div",{children:(0,e.jsx)(ce.Z,{image:ce.Z.PRESENTED_IMAGE_SIMPLE,description:"\u95EE\u5377\u4E3A\u7A7A"})})},nn=se.Z.RangePicker,tn=function(n){var t=n.name,i=n.placeholder,l=function(a){return(0,e.jsx)(M.Z,{onChange:a.onChange,value:a.value,placeholder:i})};return(0,e.jsx)(g.gN,{name:t,component:[l]})},un=(0,g.Pi)(function(){var s,n=(0,A.IE)(),t=n.schema,i=(0,m.useState)(!1),l=(0,y.Z)(i,2),r=l[0],a=l[1],o=(0,g.cI)(),x=(s=o.values)===null||s===void 0?void 0:s.conditionQuestion,c=(0,m.useMemo)(function(){return(0,J.sJ)(n.schema)},[n]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)($e.Z,{name:"conditionQuestion",children:(0,e.jsx)(J.ML,{variable:c,readOnly:!0,placeholder:"\u67E5\u8BE2\u6761\u4EF6\u4E3A\u7A7A\uFF0C\u70B9\u51FB\u9009\u62E9"})}),(0,e.jsx)(f.Z,{type:"link",onClick:function(){return a(!0)},children:"\u70B9\u51FB\u8BBE\u7F6E"})]}),t&&(0,e.jsx)(J.ZP,{visible:r,value:x,title:"\u9009\u62E9\u67E5\u8BE2\u6761\u4EF6",schema:t,onCancel:function(){return a(!1)},functionVisible:!1,fieldTypes:["FillBlank"],functions:[{name:"\u57FA\u7840",functions:[{name:"hah",description:"heih"}]}],onOk:function(v){o.values.conditionQuestion=v,a(!1)}})]})}),an=(0,g.Pi)(function(){return(0,e.jsx)(g.gN,{name:"fieldPermission",component:[en]})}),ln=function(){var n=function(i){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(V.ZP,{checked:i.value===void 0,onClick:function(){i.onChange(void 0)},children:"\u516C\u5F00"}),(0,e.jsx)(V.ZP,{checked:i.value!==void 0,onClick:function(){i.onChange("")},children:"\u975E\u516C\u5F00\uFF0C\u9700\u8981\u8BBF\u95EE\u5BC6\u7801"}),i.value!==void 0&&(0,e.jsx)(M.Z,{style:{width:200},onChange:function(r){return i.onChange(r.target.value)},value:i.value})]})};return(0,e.jsx)(g.gN,{name:"password",component:[n]})},rn=function(){var n=function(i){var l;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(V.ZP,{checked:i.value===void 0,onClick:function(){i.onChange(void 0)},children:"\u6C38\u4E45\u6709\u6548"}),(0,e.jsx)(V.ZP,{checked:i.value!==void 0,onClick:function(){i.onChange([K()().format("YYYY-MM-DD HH:mm:ss"),K()().add(7,"days").format("YYYY-MM-DD HH:mm:ss")])},children:"\u6307\u5B9A\u65E5\u671F\u6BB5\u5185\u6709\u6548"}),i.value!==void 0&&(0,e.jsx)(nn,{showTime:!0,value:(l=i.value)===null||l===void 0?void 0:l.map(function(r){return K()(r)}),onChange:function(a){i.onChange(a==null?void 0:a.map(function(o){return o==null?void 0:o.format("YYYY-MM-DD HH:mm:ss")}))}})]})};return(0,e.jsx)(g.gN,{name:"linkValidityPeriod",component:[n]})},sn=u(56692),on=u(74855),cn=u(36602),dn=(0,g.Pi)(function(s){var n=s.values,t=s.onCancel,i=s.onOk,l=s.visible,r=(0,m.useMemo)(function(){return(0,Ye.Np)({initialValues:n})},[]);return(0,e.jsx)(g.RV,{form:r,children:(0,e.jsxs)(I.Z,{visible:l,title:"\u65B0\u589E\u67E5\u8BE2\u9875\u9762",okText:"\u4FDD\u5B58",width:750,bodyStyle:{maxHeight:650,overflow:"auto"},onCancel:t,onOk:function(){return i(r.values)},className:"query-item-modal",children:[(0,e.jsx)(T.Z.Item,{label:"\u9875\u9762\u6807\u9898",required:!0,labelCol:{span:24},children:(0,e.jsx)(tn,{name:"title",placeholder:"\u67E5\u8BE2\u6807\u9898"})}),(0,e.jsx)(T.Z.Item,{label:"\u9875\u9762\u67E5\u8BE2\u63CF\u8FF0\u4FE1\u606F",labelCol:{span:24},children:(0,e.jsx)(sn.rN,{name:"description",placeholder:"\u8BF7\u8F93\u5165\u67E5\u8BE2\u63CF\u8FF0\u4FE1\u606F\uFF0C\u652F\u6301\u5BCC\u6587\u672C\u8F93\u5165",style:{border:"1px solid #d9d9d9"},size:"large"})}),(0,e.jsx)(T.Z.Item,{label:"\u67E5\u8BE2\u6761\u4EF6",required:!0,labelCol:{span:24},children:(0,e.jsx)(un,{})}),(0,e.jsx)(T.Z.Item,{label:"\u67E5\u8BE2\u7ED3\u679C",required:!0,labelCol:{span:24},children:(0,e.jsx)(an,{})}),(0,e.jsx)(T.Z.Item,{label:"\u67E5\u770B\u6743\u9650",required:!0,labelCol:{span:24},children:(0,e.jsx)(ln,{})}),(0,e.jsx)(T.Z.Item,{label:"\u94FE\u63A5\u6709\u6548\u671F",required:!0,labelCol:{span:24},children:(0,e.jsx)(rn,{})})]})})}),hn=(0,g.Pi)(function(s){var n=(0,g.U$)(),t=s.index,i=s.item,l=(0,m.useState)(!1),r=(0,y.Z)(l,2),a=r[0],o=r[1],x=(0,m.useState)(""),c=(0,y.Z)(x,2),h=c[0],v=c[1],p=(0,A.IE)(),F=q(p.id)+"/result/".concat(i.id),B=(0,g.cI)(),P=n.value[t].enabled;(0,m.useEffect)(function(){function C(){return d.apply(this,arguments)}function d(){return d=(0,U.Z)(b().mark(function j(){return b().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:w.toDataURL(F,{errorCorrectionLevel:"H",type:"image/jpeg",quality:.3,margin:5}).then(function(S){v(S)}).catch(function(S){console.error(S)});case 1:case"end":return O.stop()}},j)})),d.apply(this,arguments)}C()},[F]);var N=(0,m.useCallback)(function(){var C=(0,U.Z)(b().mark(function d(j){return b().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:w.toDataURL(F,{errorCorrectionLevel:"H",margin:5,width:j}).then(function(S){v(S);var D=document.createElement("a");D.href=S,D.setAttribute("download","".concat(p.name,"_").concat(j,".png")),document.body.appendChild(D),D.click(),document.body.removeChild(D)});case 1:case"end":return O.stop()}},d)}));return function(d){return C.apply(this,arguments)}}(),[F,p]);return(0,e.jsxs)(g.Wo,{name:t,children:[(0,e.jsxs)("div",{style:{background:"white",marginBottom:10,padding:"20px 10px 10px 10px"},children:[i.linkValidityPeriod&&(0,e.jsxs)("div",{style:{lineHeight:"32px"},children:["\u94FE\u63A5\u6709\u6548\u671F\uFF1A","".concat(i.linkValidityPeriod[0],"-").concat(i.linkValidityPeriod[1])]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{children:i.title||"\u4FE1\u606F\u67E5\u8BE2"}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"6px 0px"},children:[(0,e.jsx)("div",{style:{border:"1px solid #e1e7f2",borderRadius:3,boxShadow:"0px 3px 8px 0px rgb(224 229 236 / 40%)",width:32,height:32},children:(0,e.jsx)(re.Z,{content:(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:h,height:150,width:150}),(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsxs)(Q.Z,{children:[(0,e.jsx)(f.Z,{size:"small",type:"link",onClick:function(){return N(256)},children:"\u5C0F\u53F7"}),(0,e.jsx)(f.Z,{size:"small",type:"link",onClick:function(){return N(512)},children:"\u4E2D\u53F7"}),(0,e.jsx)(f.Z,{size:"small",type:"link",onClick:function(){return N(1024)},children:"\u5927\u53F7"})]})})]}),title:"".concat(p.name,"(\u4E8C\u7EF4\u7801)"),trigger:["click","hover"],children:(0,e.jsx)("img",{src:h,height:30,width:30})})}),(0,e.jsxs)(Q.Z,{style:{marginLeft:10},children:[(0,e.jsx)(M.Z,{value:F,readOnly:!0,style:{width:340,background:"#f7f8fa"}}),(0,e.jsx)(on.CopyToClipboard,{text:F,onCopy:function(){return oe.default.success("\u590D\u5236\u6210\u529F")},children:(0,e.jsx)(f.Z,{type:"primary",ghost:!0,disabled:!P,children:"\u590D\u5236"})}),(0,e.jsx)(f.Z,{type:"primary",ghost:!0,onClick:function(){return window.open(F)},disabled:!P,children:"\u6253\u5F00"})]})]})]}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsxs)(Q.Z,{children:[(0,e.jsx)(f.Z,{type:"link",size:"small",onClick:function(){return o(!0)},children:"\u8BBE\u7F6E"}),(0,e.jsx)(We.Z,{type:"vertical"}),(0,e.jsx)(f.Z,{type:"link",size:"small",onClick:function(){return n.remove(t)},children:"\u5220\u9664"})]}),(0,e.jsx)(g.gN,{name:"enabled",component:[function(C){return(0,e.jsx)(L.Z,{onChange:function(j){return C.onChange(j)},checked:C.value,checkedChildren:"\u5F00\u542F",unCheckedChildren:"\u5173\u95ED"})}]})]})]}),(0,e.jsx)(dn,{visible:a,values:i,onCancel:function(){return o(!1)},onOk:function(d){n.value[t]=(0,Z.Z)((0,Z.Z)({},i),d),cn.hi.updateSetting({id:p.id,settingKey:"submittedSetting.publicQuery",settingValue:n.value}).then(function(j){j.success&&oe.default.info("\u4FDD\u5B58\u4E2D")}),o(!1)}})]})}),vn=u(87998),fn=(0,g.Pi)(function(){var s=(0,g.U$)();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:380,overflow:"auto"},children:s.value.map(function(n,t){return(0,e.jsx)(hn,{item:n,index:t},n.id)})}),(0,e.jsx)(f.Z,{type:"link",onClick:function(){s.push({id:(0,vn.kb)(6)})},icon:(0,e.jsx)(Qe.Z,{}),children:"\u65B0\u589E\u67E5\u8BE2\u9875\u9762"})]})}),mn=function(n){var t=(0,m.useState)(!1),i=(0,y.Z)(t,2),l=i[0],r=i[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(I.Z,{title:"\u5BF9\u5916\u67E5\u8BE2\u8BBE\u7F6E",onCancel:function(){return r(!1)},maskClosable:!1,width:650,visible:l,footer:!1,bodyStyle:{background:"#f7f8fa",height:450,overflow:"hidden"},children:(0,e.jsx)(g.OF,{name:"publicQuery",component:[fn]})}),(0,e.jsx)(f.Z,{type:"link",onClick:function(){return r(!0)},children:"\u70B9\u51FB\u8BBE\u7F6E"})]})}}}]);
