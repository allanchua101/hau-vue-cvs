(function(e){function t(t){for(var n,i,l=t[0],c=t[1],s=t[2],u=0,d=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},i={app:0},r={app:0},o=[];function l(e){return c.p+"js/"+({resume:"resume"}[e]||e)+"."+{resume:"0d4da5da"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={resume:1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=new Promise((function(t,a){for(var n="css/"+({resume:"resume"}[e]||e)+"."+{resume:"4528bcac"}[e]+".css",r=c.p+n,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var s=o[l],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===n||u===r))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){s=d[l],u=s.getAttribute("data-href");if(u===n||u===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[e],m.parentNode.removeChild(m),a(o)},m.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){i[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=o);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=l(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(m);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}r[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/hau-vue-cvs/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var m=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-main",[a("router-view")],1)],1)},r=[],o={name:"App",data:function(){return{}}},l=o,c=a("2877"),s=a("6544"),u=a.n(s),d=a("7496"),m=a("f6c4"),h=Object(c["a"])(l,i,r,!1,null,null,null),p=h.exports;u()(h,{VApp:d["a"],VMain:m["a"]});a("d3b7"),a("3ca3"),a("ddb0");var g=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"hau hau-stud-list"},[a("v-row",[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("ResumeIcon",{staticClass:"hau hau-icon"}),a("h1",{staticClass:"hau hau-title"},[e._v("Resume List")])],1)],1),a("v-row",e._l(e.studentList,(function(e){return a("StudentCard",{key:e.id,attrs:{id:e.id,studentName:e.name,email:e.email,phone:e.phone,skills:e.skills,backgroundUrl:e.backgroundUrl}})})),1)],1)},v=[],b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",{attrs:{elevation:"0",outlined:""}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:e.backgroundUrl,gradient:"to top right, rgba(00,00,00,.33), rgba(00,00,00,.7)","max-height":"242px"}}),a("v-card-title",{staticClass:"hau hau-name pb-0"},[e._v(" "+e._s(e.studentName)+" ")]),a("v-card-text",[a("v-spacer",{staticClass:"mt-2"}),a("a",{staticClass:"hau hau-contact",attrs:{href:"mailto:"+e.email}},[a("strong",[e._v("Email:")]),e._v(" "+e._s(e.email)+" ")]),a("v-spacer",{staticClass:"mt-2"}),a("a",{staticClass:"hau hau-contact",attrs:{href:"tell:"+e.phone}},[a("strong",[e._v("Phone:")]),e._v(" "+e._s(e.phone)+" ")]),a("v-spacer",{staticClass:"mt-8"}),e._l(e.topSkills,(function(t){return a("v-chip",{key:t.name,staticClass:"mr-1",attrs:{outlined:"",label:""}},[a("v-icon",{staticClass:"mr-1"},[e._v(e._s(t.icon))]),e._v(" "+e._s(t.name)+" ")],1)}))],2),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"black",elevation:"0",text:""},on:{click:function(){return e.onViewResume(e.id)}}},[a("v-icon",{staticClass:"mr-1"},[e._v("mdi-arrow-right")]),e._v(" View CV ")],1)],1)],1)],1)},w=[],y=(a("a9e3"),a("e9c4"),a("fb6a"),a("4e827"),{props:{id:{type:Number,required:!0},studentName:{type:String,required:!0},email:{type:String,required:!0},phone:{type:String,required:!0},skills:{type:Array,required:!0},backgroundUrl:{type:String,required:!0}},methods:{onViewResume:function(e){this.$router.push({path:"/resume/?id=".concat(e)})}},computed:{topSkills:function(){var e=JSON.parse(JSON.stringify(this.skills));return e.sort((function(e,t){return e.value>t.value?-1:1})).slice(0,4)}}}),x=y,k=(a("7be3"),a("8336")),C=a("b0af"),S=a("99d9"),_=a("cc20"),V=a("62ad"),M=a("132d"),T=a("adda"),j=a("2fa4"),E=Object(c["a"])(x,b,w,!1,null,null,null),P=E.exports;u()(E,{VBtn:k["a"],VCard:C["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VChip:_["a"],VCol:V["a"],VIcon:M["a"],VImg:T["a"],VSpacer:j["a"]});var A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",{staticStyle:{"enable-background":"new 0 0 60 60"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 60 60","xml:space":"preserve"}},[a("g",[a("g",[a("path",{attrs:{d:"M2,2h39v7h2V1c0-0.6-0.4-1-1-1H1C0.4,0,0,0.4,0,1v58c0,0.6,0.4,1,1,1h32v-2H2V2z"}}),a("path",{attrs:{d:"M43.7,21.3l-2.8-6.6c-0.1-0.4-0.5-0.6-0.9-0.6s-0.7,0.2-0.9,0.6l-2.8,6.6C36.1,21.5,36,21.7,36,22v31v6c0,0.6,0.4,1,1,1h6\n\t\t\tc0.6,0,1-0.4,1-1v-6V22C44,21.7,43.9,21.4,43.7,21.3z M38,23h4v29h-4V23z M40,17.5l1.5,3.5h-3L40,17.5z M42,58h-4v-4h4V58z"}}),a("path",{attrs:{d:"M59,38H48c-0.6,0-1,0.4-1,1v20c0,0.6,0.4,1,1,1h11c0.6,0,1-0.4,1-1V39C60,38.4,59.6,38,59,38z M58,40v5h-9v-5H58z M49,58\n\t\t\tV47h9v11H49z"}}),a("path",{attrs:{d:"M27,11c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S27,14.3,27,11z M17,11c0-2.2,1.8-4,4-4s4,1.8,4,4s-1.8,4-4,4S17,13.2,17,11z\n\t\t\t"}}),a("rect",{attrs:{x:"15",y:"20",width:"12",height:"2"}}),a("rect",{attrs:{x:"15",y:"25",width:"12",height:"2"}}),a("rect",{attrs:{x:"6",y:"31",width:"15",height:"2"}}),a("rect",{attrs:{x:"6",y:"36",width:"26",height:"2"}}),a("rect",{attrs:{x:"6",y:"41",width:"26",height:"2"}}),a("rect",{attrs:{x:"6",y:"46",width:"8",height:"2"}}),a("rect",{attrs:{x:"6",y:"51",width:"11",height:"2"}}),a("rect",{attrs:{x:"21",y:"46",width:"8",height:"2"}}),a("rect",{attrs:{x:"21",y:"51",width:"11",height:"2"}})])]),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g")])},O=[],B={},N=Object(c["a"])(B,A,O,!1,null,null,null),z=N.exports,H=a("ac32"),I={name:"Home",components:{StudentCard:P,ResumeIcon:z},data:function(){return{studentList:Object(H["b"])()}}},L=I,D=(a("cccb"),a("a523")),R=a("0fd9"),U=Object(c["a"])(L,f,v,!1,null,null,null),q=U.exports;u()(U,{VCol:V["a"],VContainer:D["a"],VRow:R["a"]}),n["a"].use(g["a"]);var G=[{path:"/",name:"Home",component:q},{path:"/resume",name:"Resume",component:function(){return a.e("resume").then(a.bind(null,"1ba2"))}}],J=new g["a"]({routes:G}),F=J,$=a("f309");n["a"].use($["a"]);var K=new $["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:F,vuetify:K,render:function(e){return e(p)}}).$mount("#app")},"5ced":function(e,t,a){},7854:function(e,t,a){},"7be3":function(e,t,a){"use strict";a("7854")},ac32:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}));a("7db0"),a("d3b7");var n=[{id:1,name:"Chua, Allan Angeles",firstName:"Allan",lastName:"Chua",email:"allan.chua@hau.edu.com",birthDay:"1990-01-20",address:"1178 Del Pilar Street, Cabanatuan Nueva Ecija",github:"https://www.github.com/allanchua101",linkedin:"https://www.linkedin.com/in/allan-chua-467402103/",twitter:"https://www.twitter.com/ac052790",stackOverflow:"https://stackoverflow.com/users/983476/allan-chua",objectives:"I am a software engineer with experience in developing web applications, cloud platforms, AI applications and mobile apps. I am proficient in multiple programming languages, including JavaScript, Python, C#, Java and Go. I am also familiar with various software development methodologies and tools.",hobbies:[{icon:"mdi-soccer",text:"Football"},{icon:"mdi-kayaking",text:"Kayak"},{icon:"mdi-bike",text:"Beach-side Biking"},{icon:"mdi-badminton",text:"Badminton"},{icon:"mdi-table-tennis",text:"Table Tennis"},{icon:"mdi-basketball",text:"Basketball"},{icon:"mdi-youtube-gaming",text:"Dota 2"}],languages:[{text:"English"},{text:"Kampangpangan"},{text:"Tagalog"}],educations:[{from:"2015",to:"Present",title:"Master of Information Technology",location:"Holy Angel University"},{from:"2007",to:"2011",title:"Bachelor of Science in Computer Science",location:"ST. Anthony College of Technology"}],experiences:[{from:"2019",to:"Present",title:"Solutions and Integrations Architect",location:"FWD Insurance - Group Office"},{from:"2018",to:"2019",title:"Software Engineer",location:"Sleek Tech PTE LTD"},{from:"2017",to:"2018",title:"Software Engineer",location:"Kelly Services"},{from:"2011",to:"2017",title:"Technical Lead / SR. Software Engineer",location:"FilAm Software Technology"}],skills:[{name:"JS",icon:"mdi-language-javascript",color:"#d8c547",value:95},{name:"Python",icon:"mdi-language-python",color:"#d8c547",value:95},{name:"Java",icon:"mdi-language-java",color:"#d8c547",value:60},{name:"C Sharp",icon:"mdi-language-csharp",color:"#d8c547",value:60},{name:"AWS",icon:"mdi-aws",color:"#37475A",value:80},{name:"Vue",icon:"mdi-vuejs",color:"#41B883",value:80},{name:"React",icon:"mdi-react",color:"#61DBFB",value:80}],backgroundUrl:"https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",phone:"098-123-4567"},{id:2,name:"Valencia, Gabrielle",firstName:"Gabrielle",lastName:"Valencia",email:"gabrielle.valencia@hau.edu.com",birthDay:"1992-06-12",address:"168 Maysan Road,, Metro Manila NCR",github:"https://www.github.com/Bogs29",linkedin:"https://www.linkedin.com/in/gabrielle-louis-d-valencia-250358210/",twitter:"https://www.twitter.com/gabvalencia29",stackOverflow:"https://stackoverflow.com/users/18193166/gabrielle-louis-d-valencia",objectives:"To secure a position in the organization that offers challenge and opportunity for my career development and at the same time to serve the organization to the best of my capabilities.",hobbies:[{icon:"mdi-bullseye",text:"Getting out of Safe Zone"},{icon:"mdi-biohazard",text:"Challenges"},{icon:"mdi-bike",text:"Cycling"},{icon:"mdi-image-filter-hdr",text:"Nature"},{icon:"mdi-basketball",text:"Sports"},{icon:"mdi-music",text:"Music"},{icon:"mdi-book-open-page-variant",text:"Books"}],languages:[{text:"English"},{text:"Kampangpangan"},{text:"Tagalog"}],educations:[{from:"2021",to:"Present",title:"Master of Information Technology",location:"Holy Angel University"},{from:"2015",to:"2019",title:"Bachelor of Information Technology",location:"Lyceum of the Philippines University"}],experiences:[{from:"2019",to:"2022",title:"Concentrix Clark",location:"Clark, Pampanga"}],Getting:"Getting out of Safe Zone",Challenges:"Challenges",Cycling:"Cycling",nature:"Nature",sports:"Basketball",music:"Music",english:"English",filipino:"Filipino",skills:[{name:"JS",icon:"mdi-language-javascript",color:"#d8c547",value:60},{name:"HTML",icon:"mdi-language-html5",color:"#e34c26",value:80},{name:"CSS",icon:"mdi-language-css3",color:"#264de4",value:80},{name:"Vue",icon:"mdi-vuejs",color:"#41B883",value:60}],backgroundUrl:"https://media.istockphoto.com/photos/data-scientists-male-programmer-using-laptop-analyzing-and-developing-picture-id1295900106?k=20&m=1295900106&s=612x612&w=0&h=hDkQP1a9dUo4Esv8iMyVlEnP4nfN2mwM5LdtPW9M8zo=",phone:"098-123-4567"}];function i(){return n}function r(e){return n.find((function(t){return t.id===e}))}},cccb:function(e,t,a){"use strict";a("5ced")}});
//# sourceMappingURL=app.14b90e84.js.map