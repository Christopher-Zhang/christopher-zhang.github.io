(this["webpackJsonpchristopher-zhang.github.io"]=this["webpackJsonpchristopher-zhang.github.io"]||[]).push([[0],{21:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),s=a(23),c=a.n(s),i=(a(30),a(31),a(6)),o=a(7),l=a(9),u=a(8),d=a(2),b=a.n(d),h=a(12),j=a(14),x=(a(21),a(33),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleSpeedChange=function(e){var t=r.props.parentHandleSpeedChange;console.log(e),t(e)},r.handleSpeedChange=r.handleSpeedChange.bind(Object(j.a)(r)),r.state={parent:e.parent,id:e.id,isSorting:e.isSorting},r}return Object(o.a)(a,[{key:"handleStop",value:function(){console.log("stop child"),(0,this.props.parentStopModule)()}},{key:"componentDidMount",value:function(){var e="speed-slider-"+this.state.id,t=document.getElementById(e);this.handleSpeedChange(t.value)}},{key:"render",value:function(){var e=this,t=this.state.parent,a=this.state.id,n=this.props.isSorting,s="speed-slider-"+a,c="slider-"+a;return Object(r.jsx)("div",{className:"row justify-content-center container-fluid",children:Object(r.jsxs)("div",{className:"col-xs-12 col-sm-9 col-md-6 col-lg-5 col-xl-4 col-xxl-3 sorting-menu",children:[Object(r.jsx)("button",{onClick:function(){return t.newArray(t.state.array.length)},disabled:n,children:"New Array"}),Object(r.jsx)("button",{onClick:function(){return e.handleStop()},children:"Stop"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){return t.bubbleSort()},disabled:n,children:"Bubble Sort"}),Object(r.jsx)("button",{onClick:function(){return t.insertionSort()},disabled:n,children:"Insertion Sort"}),Object(r.jsx)("button",{onClick:function(){return t.mergeSort()},disabled:n,children:"Merge Sort"}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:c,children:[Object(r.jsx)("label",{for:s,className:"form-label",children:"Speed:"}),Object(r.jsx)("input",{type:"range",className:"form-range",id:s,min:"0",max:"4",step:"1",defaultValue:"0",onChange:function(){var t=document.getElementById(s);e.handleSpeedChange(t.value)}})]})]})})}}]),a}(n.Component)),m="pink",p="red",v=[100,75,50,25,10],g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleSpeedChange=r.handleSpeedChange.bind(Object(j.a)(r)),r.stopModule=r.stopModule.bind(Object(j.a)(r)),r.state={array:[],max:100,min:1,delay:50,isSorting:!1,id:e.id,abort:!1},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.array,t="array-value"+this.state.id;return Object(r.jsxs)("div",{className:"sorting-visualizer",id:this.state.id,children:[Object(r.jsxs)("div",{className:"array",children:[Object(r.jsx)("div",{className:"array-value-placeholder invisible",style:{height:"".concat(2*this.state.max,"px")}}),e.map((function(e,a){return Object(r.jsx)("div",{className:t,style:{width:"10px",display:"inline-block",margin:"0 1px",backgroundColor:m,height:"".concat(2*e,"px")}},a)}))]}),Object(r.jsx)("div",{className:"array-container"}),Object(r.jsx)(x,{parentHandleSpeedChange:this.handleSpeedChange,parentStopModule:this.stopModule,parent:this,id:this.state.id,isSorting:this.state.isSorting})]})}},{key:"componentDidMount",value:function(){console.log(this.props),this.newArray(this.props.length)}},{key:"handleSpeedChange",value:function(e){var t=v[e];this.setState({delay:t})}},{key:"stopModule",value:function(){var e=this;this.state.array.length;console.log("reset parent"),this.setState({abort:!0}),setTimeout((function(){e.setState({abort:!1})}),2*this.state.delay)}},{key:"cleanArray",value:function(){for(var e=document.getElementsByClassName("array-value"+this.state.id),t=e.length,a=0;a<t;a++)e[a].style.backgroundColor=m}},{key:"sweep",value:function(){var e=Object(h.a)(b.a.mark((function e(t){var a,r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.length,r=document.getElementsByClassName("array-value"+this.state.id),n=0;case 3:if(!(n<a)){e.next=10;break}return e.next=6,this.delay();case 6:r[n].style.backgroundColor=p;case 7:n++,e.next=3;break;case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"startSort",value:function(){this.cleanArray(),this.setState({isSorting:!0})}},{key:"endSort",value:function(){this.setState({isSorting:!1})}},{key:"bubbleSort",value:function(){var e=Object(h.a)(b.a.mark((function e(){var t,a,r,n,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.startSort(),e.next=3,this.delay();case 3:console.log("bubble"),t=this.getArrayCopy(),a=t.length,r=0;case 7:if(!(r<a-1)){e.next=24;break}n=0;case 9:if(!(n<a-r-1)){e.next=20;break}return e.next=12,this.delay();case 12:(s=document.getElementsByClassName("array-value"+this.state.id))[n].style.backgroundColor=p,s[n+1].style.backgroundColor=p,t[n]>t[n+1]&&this.swap(n,n+1,t),s[n].style.backgroundColor=m;case 17:n++,e.next=9;break;case 20:document.getElementsByClassName("array-value"+this.state.id)[0].style.backgroundColor=p;case 21:r++,e.next=7;break;case 24:return this.endSort(),e.abrupt("return",t);case 26:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"insertionSort",value:function(){var e=Object(h.a)(b.a.mark((function e(){var t,a,r,n,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.startSort(),e.next=3,this.delay();case 3:console.log("insertion"),t=this.getArrayCopy(),a=t.length,r=1;case 7:if(!(r<a)){e.next=29;break}n=document.getElementsByClassName("array-value"+this.state.id),s=!1,c=void 0,c=r;case 12:if(!(c>=1&&t[c]<t[c-1])){e.next=21;break}return s=!0,n[c].style.backgroundColor=p,e.next=17,this.swapAsync(c,c-1,t);case 17:n[c].style.backgroundColor=m;case 18:c--,e.next=12;break;case 21:if(!s){e.next=26;break}return n[c].style.backgroundColor=p,e.next=25,this.delay();case 25:n[c].style.backgroundColor=m;case 26:r++,e.next=7;break;case 29:return e.next=31,this.sweep(t);case 31:return this.endSort(),e.abrupt("return",t);case 33:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mergeSort",value:function(){var e=Object(h.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.startSort(),e.next=3,this.delay();case 3:if(t=this.getArrayCopy(),a=t.slice(),t.slice(),!(t.length<=1)){e.next=8;break}return e.abrupt("return",t);case 8:return e.next=10,this.mergeSortRecursive(t,0,t.length-1,a);case 10:return console.log(t),this.endSort(),e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mergeSortRecursive",value:function(){var e=Object(h.a)(b.a.mark((function e(t,a,r,n){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a!==r){e.next=2;break}return e.abrupt("return");case 2:return s=Math.floor((a+r)/2),e.next=5,this.mergeSortRecursive(n,a,s,t);case 5:return e.next=7,this.mergeSortRecursive(n,s+1,r,t);case 7:return e.next=9,this.merge(t,a,s,r,n);case 9:case"end":return e.stop()}}),e,this)})));return function(t,a,r,n){return e.apply(this,arguments)}}()},{key:"merge",value:function(){var e=Object(h.a)(b.a.mark((function e(t,a,r,n,s){var c,i,o,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=document.getElementsByClassName("array-value"+this.state.id),i=a,o=r+1,l=a;case 4:if(!(i<=r&&o<=n)){e.next=24;break}if(!(t[i]<t[o])){e.next=15;break}return c[l].style.backgroundColor=p,c[i].style.backgroundColor=p,e.next=10,this.delay();case 10:c[l].style.backgroundColor=m,c[i].style.backgroundColor=m,s[l++]=t[i++],e.next=22;break;case 15:return c[l].style.backgroundColor=p,c[o].style.backgroundColor=p,e.next=19,this.delay();case 19:c[l].style.backgroundColor=m,c[o].style.backgroundColor=m,s[l++]=t[o++];case 22:e.next=4;break;case 24:if(!(i<=r)){e.next=34;break}return c[l].style.backgroundColor=p,c[i].style.backgroundColor=p,e.next=29,this.delay();case 29:c[l].style.backgroundColor=m,c[i].style.backgroundColor=m,s[l++]=t[i++],e.next=24;break;case 34:if(!(o<=n)){e.next=44;break}return c[l].style.backgroundColor=p,c[o].style.backgroundColor=p,e.next=39,this.delay();case 39:c[l].style.backgroundColor=m,c[o].style.backgroundColor=m,s[l++]=t[o++],e.next=34;break;case 44:return e.next=46,this.mergeCopy(t,s,a,n);case 46:return e.next=48,this.delay();case 48:case"end":return e.stop()}}),e,this)})));return function(t,a,r,n,s){return e.apply(this,arguments)}}()},{key:"mergeCopy",value:function(){var e=Object(h.a)(b.a.mark((function e(t,a,r,n){var s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=r;case 1:if(!(s<=n)){e.next=11;break}return c=document.getElementsByClassName("array-value"+this.state.id),e.next=5,this.delay();case 5:c[s].style.backgroundColor=p,t[s]=a[s],this.setState({array:t});case 8:s++,e.next=1;break;case 11:case"end":return e.stop()}}),e,this)})));return function(t,a,r,n){return e.apply(this,arguments)}}()},{key:"newArray",value:function(e){for(var t=[],a=0;a<e;a++)t.push(this.generateValue());this.setState({array:t});var r=document.getElementsByClassName("array-value"+this.state.id);setTimeout((function(e){for(var t=0;t<e.length;t++)e[t].style.backgroundColor=m}),10,r)}},{key:"generateValue",value:function(){var e=this.state;return Math.floor(Math.random()*(e.max-e.min)+e.min)}},{key:"getArrayCopy",value:function(){return this.state.array.slice()}},{key:"setDelay",value:function(e){this.setState({delay:e})}},{key:"swapAsync",value:function(){var e=Object(h.a)(b.a.mark((function e(t,a,r){var n,s,c=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=this.isValidIndex(t)&&this.isValidIndex(a))){e.next=8;break}return e.next=4,this.delay();case 4:s=r[t],r[t]=r[a],r[a]=s,this.setState({array:r});case 8:return e.abrupt("return",new Promise((function(e,t){n||t(new Error("invalid index")),c.state.abort||e()})));case 9:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"swap",value:function(e,t,a){if(this.isValidIndex(e)&&this.isValidIndex(t)&&!this.state.abort){var r=a[e];a[e]=a[t],a[t]=r,this.setState({array:a})}}},{key:"delay",value:function(){var e=Object(h.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){t.state.abort?(t.setState({isSorting:!1}),a()):setTimeout(e,t.state.delay)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"abort",value:function(){this.setState({abort:!0})}},{key:"isValidIndex",value:function(e){return!(e>=this.state.array.length||e<0)}}]),a}(n.Component),y=a(4),f=(n.Component,function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={instances:1},r}return Object(o.a)(a,[{key:"render",value:function(){for(var e=this.state.instances,t=[],a=0;a<e;a++)t.push(a);return Object(r.jsx)("div",{className:"sorting-visualizer-page container-fluid mt-5",children:Object(r.jsx)("div",{className:"",children:t.map((function(e,t){return Object(r.jsx)(g,{className:"col",id:e,length:"25"},t)}))})})}}]),a}(n.Component)),O=(a(39),a(40),a(41),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("nav",{role:"navigation",className:"navbar navbar-expand-lg bg-dark navbar-dark py-3 px-sm-4 px-lg-5 sticky-top",children:[Object(r.jsx)("h1",{children:Object(r.jsx)(y.b,{className:"navbar-brand ps-sm-5 ps-4",to:"/",children:"Christopher Zhang"})}),Object(r.jsx)("button",{className:"navbar-toggler me-4",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse justify-content-end pe-sm-5 pe-4",id:"navbarNav",children:Object(r.jsxs)("ul",{className:"navbar-nav",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(y.b,{className:"nav-link text-white",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(y.b,{className:"nav-link text-white",to:"/about",children:"About"})}),Object(r.jsxs)("li",{className:"nav-item dropdown",children:[Object(r.jsx)("a",{className:"nav-link dropdown-toggle text-white",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Projects"}),Object(r.jsxs)("div",{className:"dropdown-menu dropdown-menu-md-end",children:[Object(r.jsx)(y.b,{className:"dropdown-item",to:"/projects/sorting-visualizer",children:"Sorting Algorithm Visualizer"}),Object(r.jsx)(y.b,{className:"dropdown-item",children:"Project 2"}),Object(r.jsx)(y.b,{className:"dropdown-item",children:"Project 3"})]})]}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link text-white",href:"../files/Resume Website Ver.pdf",target:"_blank",children:"R\xe9sum\xe9"})})]})})]})}}]),a}(n.Component)),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).toggleCursor=r.toggleCursor.bind(Object(j.a)(r)),r.state={bgColor:e.bgColor,textColor:e.textColor,style:e.style,fullText:e.content,baseDelta:e.delta,waitPeriod:e.waitPeriod,currentText:"",currentInstance:0,cursor:!0,isDeleting:!1,done:!1},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.startAnimation(),this.toggleCursor()}},{key:"formatContent",value:function(e){return e}},{key:"goNext",value:function(){}},{key:"startAnimation",value:function(){var e=this.state.fullText;this.animate(e)}},{key:"animate",value:function(e){var t=this,a=!1,r=e.length,n=this.state.isDeleting,s=this.state.currentText,c=s.length,i=this.state.baseDelta-100*Math.random();n?0==c?(a=!0,this.setState({done:!0})):s=e.substring(0,c-1):c==r?(a=!0,i=this.state.waitPeriod):s=e.substring(0,c+1),this.setState({currentText:s}),a?this.goNext():setTimeout((function(){t.animate(e)}),i)}},{key:"toggleCursor",value:function(){var e=this,t=this.state.currentInstance,a=this.state.cursor,r=document.getElementById("cursor-"+t);a?(r.classList.replace("visible","invisible"),this.setState({cursor:!1})):(r.classList.replace("invisible","visible"),this.setState({cursor:!0})),this.state.done?r.classList.replace("visible","invisible"):setTimeout((function(){e.toggleCursor()}),1e3)}},{key:"delay",value:function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.textColor,t=(this.state.bgColor,"cursor-"+this.state.currentInstance),a=this.state.currentText,n=Object(r.jsxs)("h1",{className:"content display-1",style:{color:this.state.textColor},children:[a,Object(r.jsx)("span",{id:t,className:"visible",style:{borderRight:"0.05em solid"+e}})]});return Object(r.jsx)("div",{className:"typewriter",children:n})}}]),a}(n.Component),C=(a(42),a.p,"#333333"),N="#F2F3F4",w="#f7f8fc";a.p;function S(){return Object(r.jsx)("div",{className:"banner-container container-fluid",children:Object(r.jsx)("div",{className:"banner row",children:Object(r.jsx)(k,{content:"Hi, you can call me Chris.",delta:175,waitPeriod:2e3,textColor:"#EEE",bgColor:C})})})}function T(e){var t=e.backgroundColor,a=e.captionText,n=e.buttonText,s=e.buttonLink;return Object(r.jsx)("div",{className:"captioned-button",children:Object(r.jsxs)("div",{className:"container-fluid jumbotron row py-5",style:{backgroundColor:t},children:[Object(r.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-9 col-lg-10 col-xl-10 text-start text-md-end",children:Object(r.jsx)("p",{className:"lead",children:a})}),Object(r.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 text-start",children:Object(r.jsx)(y.b,{to:s,children:Object(r.jsx)("button",{className:"btn btn-outline-secondary btn-lg",children:n})})})]})})}a(43);function A(e){var t=e.headerText,a=e.details,n=e.backgroundColor;return Object(r.jsx)("div",{className:"container-fluid padding",style:{backgroundColor:n},children:Object(r.jsxs)("div",{className:"welcome row text-center",children:[Object(r.jsx)("div",{className:"col-12",children:Object(r.jsx)("h1",{className:"display-5 fw-normal",children:t})}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"col-12",children:Object(r.jsx)("p",{className:"lead",children:a})})]})})}var I=a.p+"static/media/sorting-visualizer.9a342c15.gif";function z(e){var t=e.backgroundColor;return Object(r.jsxs)("div",{className:"preview container-fluid padding row justify-content-center",style:{backgroundColor:t},children:[Object(r.jsxs)("div",{className:"col-3 card text-start mx-3",style:{width:"18rem"},children:[Object(r.jsx)("img",{src:I,className:"card-img-top invisible",alt:"animated sorting visualizer"}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h5",{className:"card-title",children:"Placeholder"}),Object(r.jsx)("p",{className:"card-text",children:"More projects coming soon!"}),Object(r.jsx)("button",{className:"btn btn-primary disabled",children:"Check it out!"})]})]}),Object(r.jsxs)("div",{className:"col-3 card text-start mx-3",style:{width:"18rem"},children:[Object(r.jsx)("img",{src:I,className:"card-img-top",alt:"animated sorting visualizer"}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h5",{className:"card-title",children:"Sorting Visualizer"}),Object(r.jsxs)("p",{className:"card-text",children:["Built with ReactJS. Includes ",Object(r.jsx)("nobr",{children:"bubble sort,"})," insertion sort, and merge sort!"]}),Object(r.jsx)(y.b,{to:"/projects/sorting-visualizer",children:Object(r.jsx)("button",{className:"btn btn-primary",children:"Check it out!"})})]})]}),Object(r.jsxs)("div",{className:"col-3 card text-start mx-3",style:{width:"18rem"},children:[Object(r.jsx)("img",{src:I,className:"card-img-top invisible",alt:"animated sorting visualizer"}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h5",{className:"card-title",children:"Placeholder"}),Object(r.jsx)("p",{className:"card-text",children:"More projects coming soon!"}),Object(r.jsx)("button",{className:"btn btn-primary disabled",children:"Check it out!"})]})]})]})}a(44);function M(e){e.backgroundColor;return Object(r.jsx)("footer",{className:"bg-dark",children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsxs)("div",{class:"row text-center justify-content-center",children:[Object(r.jsxs)("div",{class:"col-md-4",children:[Object(r.jsx)("h1",{className:"display-5",children:"Contact me"}),Object(r.jsx)("hr",{class:"light"}),Object(r.jsx)("p",{children:"978-844-8255"}),Object(r.jsx)("p",{children:"chrisconcord@gmail.com"}),Object(r.jsx)("p",{children:"Massachusetts, USA"})]}),Object(r.jsxs)("div",{class:"col-md-4",children:[Object(r.jsx)("h1",{className:"display-5",children:"Socials"}),Object(r.jsx)("hr",{class:"light"}),Object(r.jsx)("a",{className:"text-decoration-none",href:"https://github.com/christopher-zhang",children:Object(r.jsx)("p",{children:"Github"})}),Object(r.jsx)("a",{className:"text-decoration-none",href:"https://linkedin.com/in/christopher-z-zhang",children:Object(r.jsx)("p",{children:"LinkedIn"})})]})]})})})}var E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(o.a)(a,[{key:"scheduleAnimations",value:function(){}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"home-page",children:[Object(r.jsx)(S,{}),Object(r.jsx)(A,{backgroundColor:w,headerText:"Welcome to my humble abode",details:Object(r.jsxs)("div",{children:["I am currently a ",Object(r.jsx)("b",{children:"sophomore"})," at the ",Object(r.jsx)("b",{children:"University of Illinois at Urbana-Champaign"})," studying ",Object(r.jsx)("b",{children:"electrical and computer engineering"}),".",Object(r.jsx)("br",{}),"I have experience programming in ",Object(r.jsx)("b",{children:"Java, Python, C, and C++"})," from previous classes and my own pursuits.",Object(r.jsx)("br",{}),"Starting December 2020, I started learning various web technologies including: ",Object(r.jsx)("b",{children:"HTML, CSS, Javascript, and ReactJS"}),".",Object(r.jsx)("br",{}),"This website will grow along with me as I grow as a developer.",Object(r.jsx)("br",{}),"I hope you have a wonderful day."]})}),Object(r.jsx)(T,{backgroundColor:N,captionText:Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Take a look at my most recent project: "}),"A sorting algorithm visualizer built with ReactJS.",Object(r.jsx)("br",{}),"Currently implements bubble-sort, insertion-sort, and merge-sort."]}),buttonText:"Take me there",buttonLink:"/projects/sorting-visualizer"}),Object(r.jsx)(A,{backgroundColor:w,headerText:"Projects"}),Object(r.jsx)(z,{backgroundColor:w}),Object(r.jsx)(M,{backgroundColor:C})]})}}]),a}(n.Component),B=a(3),P=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h2",{children:"About"})})};var R=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(O,{}),Object(r.jsxs)(B.c,{children:[Object(r.jsx)(B.a,{exact:!0,path:"/",children:Object(r.jsx)(E,{})}),Object(r.jsx)(B.a,{path:"/about",children:Object(r.jsx)(P,{})}),Object(r.jsx)(B.a,{path:"/projects/sorting-visualizer",children:Object(r.jsx)(f,{})})]})]})};function V(){var e=Object(B.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}c.a.render(Object(r.jsxs)(y.a,{forceRefresh:!0,children:[Object(r.jsx)(V,{}),Object(r.jsx)(R,{})]}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.acddfd38.chunk.js.map