webpackJsonp([21],{a76X:function(t,e){},oF63:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("aA9S"),n=a.n(s),r={name:"transfer",data:function(){return{data:{result:!0,title:"操作成功！",subtitle:null,back:"返回",buttons:[]}}},methods:{to:function(t){this.$router.push(t)}},mounted:function(){var t=void 0;try{var e=this.$route.params.data;t=e&&"string"==typeof e?JSON.parse(decodeURIComponent(e)):t||{}}catch(t){}this.data=n()({},this.data,t),document.documentElement.scrollTop=0,window.screenTop=0}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",{staticClass:"title"},[t._v("操作结果")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"transfer_container"},[a("div",{staticClass:"result-container"},[t.data.result?a("span",{staticClass:"el-icon-success success"}):a("span",{staticClass:"el-icon-error failed"})]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("h4",{staticClass:"center"},[a("b",[t._v(t._s(t.data.title||"操作成功！"))])]),t._v(" "),t.data.subtitle?a("div",{staticClass:"subtitle center"},[t._v(t._s(t.data.subtitle))]):t._e(),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",{staticStyle:{margin:"10px"}},[t._l(t.data.buttons,function(e,s){return a("el-button",{key:s,attrs:{type:"primary"},on:{click:function(a){return t.to(e.link)}}},[t._v(t._s(e.text))])}),t._v(" "),0!=t.data.back?a("el-button",{attrs:{type:"info"},on:{click:function(e){return t.$router.go(-1)}}},[t._v(t._s(t.data.back||"返回"))]):t._e()],2)])])},staticRenderFns:[]};var c=a("C7Lr")(r,i,!1,function(t){a("a76X")},"data-v-190a2018",null);e.default=c.exports}});
//# sourceMappingURL=21.2d508c0372191b50616b.js.map