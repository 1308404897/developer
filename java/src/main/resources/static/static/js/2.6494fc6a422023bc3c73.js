webpackJsonp([2],{"3+zk":function(e,t){},Z9Qs:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("3cXf"),s=a.n(n),r=a("lC5x"),l=a.n(r),i=a("J0Oq"),c=a.n(i),o=a("aA9S"),u=a.n(o),d=a("0Njg"),p=a("R2SV"),h=a("Dx6B"),v=a("ROW2"),m={props:{},data:function(){return{ENV_DOMAIN_MAP:(e=u()({},h.b),delete e.onlineDomain,e.localDomain="本地环境",e),ENV_DOMAIN_LOG_MAP:h.a,interfacesSimpleListApi:d.T,data:{id:null,hash:null,name:null,url:null,method:null,parameters:null,returns:null,createTime:null,modifyTime:null,deprecated:null,end:{id:null,name:null,prefix:null,header:null},java:{id:null,name:null}},customInterfacesId:null,currentId:null,getCusInterfacesItemListApi:d.E,preParams:[],checkResult:null,checkResultMessage:null,javascript:null,method:"GET",parameters:[],headers:[],env:"testDomain",result:null,bodyParams:null,localDomainKey:"LOCAL_DOMAIN_KEY",defaultLocalDomain:"http://127.0.0.1:8080",start:null,end:null};var e},watch:{env:function(e){this.loadHeaders()}},computed:{showUrl:function(){return Object(d.B)(this.data.java,this.env,this.data.url,this.parameters)}},mounted:function(){this.init(),this.$el.addEventListener("paste",this.paste),window.that=this},methods:{onSelectCusInterfacesItem:function(e){var t=e[0]||{};this.loadItem(t)},configLocalEnv:function(){var e=this,t=this.localDomainKey+"_"+this.data.java.id;this.$prompt("配置本地环境地址","",{inputType:"text",inputValue:v.a.get(t),inputPlaceholder:"请输入配置本地环境地址",inputValidator:function(e){return(e||"").trim().length>0||"请输入配置本地环境地址"}}).then(function(a){v.a.set(t,a.value),e.data.java.localDomain=a.value}).catch(function(e){})},paste:function(e){Object(p.b)(e,this.parameters)},init:function(){var e=this;return c()(l.a.mark(function t(){var a,n,s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.env=e.$route.params.env||e.env,t.next=3,Object(d.I)(e.$route.params.id);case 3:return e.data=t.sent,e.method=e.data.method||e.method,e.data.java.localDomain=v.a.get(e.localDomainKey+"_"+e.data.java.id)||e.defaultLocalDomain,e.parameters=Object(p.d)(e.data.parameters),t.next=9,Object(d.D)(e.$route.params.id);case 9:if(!(a=t.sent)){t.next=16;break}return e.customInterfacesId=a.id,t.next=14,Object(d.E)({customInterfacesId:e.customInterfacesId});case 14:(n=t.sent).length>0&&(s=n[0],e.loadItem(s));case 16:e.result=Object(p.e)(JSON.parse(e.data.returns));case 17:case"end":return t.stop()}},t,e)}))()},loadItem:function(e){if(this.currentId=e.id,this.preParams=null!=e.preParams?JSON.parse(e.preParams):[],this.javascript=null!=e.javascript?JSON.parse(e.javascript):null,this.headers=JSON.parse(e.cusHeaders||"[]")||[],e.cusParameters){var t=JSON.parse(e.cusParameters);this.parameters=Object(p.n)(t,this.parameters)}else this.parameters=Object(p.d)(this.data.parameters);this.loadHeaders()},loadHeaders:function(e){var t=this;this.data.end.id&&Object(d.J)(this.env,this.data.end.id,e).then(function(e){t.headers=Object(p.n)(e,t.headers,!0)})},testUrl:function(){var e=this;return c()(l.a.mark(function t(){var a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.end=null,e.start=Date.now(),t.next=4,Object(d._0)(e.env,e.showUrl,e.method,e.parameters,e.headers,e.preParams,e.javascript);case 4:a=t.sent,e.end=Date.now(),e.result=a.result.data,e.checkResult=a.check,e.checkResultMessage=a.message;case 9:case"end":return t.stop()}},t,e)}))()},openInterfacesSelectorDialog:function(){var e=this;Object(d.M)(this.data.end.id).then(function(t){var a=t&&t.config?JSON.parse(t.config):{};e.$refs.interfacesSelector.open(a)})},savePrivatesAuth:function(e){var t=this;Object(d._10)(this.data.end.id,s()(e)).then(function(){t.loadHeaders(!0)})},save:function(){var e=this;Object(d._8)(this.currentId,s()(this.parameters),s()(this.javascript),s()(this.preParams),s()(this.headers)).then(function(t){e.$success("保存成功！")})},saveAs:function(){var e=this;this.$prompt("另存为","",{inputType:"text",inputPlaceholder:"请输入用例名称（不填自动命名 )"}).then(function(t){Object(d.a)(e.data.id,t.value,s()(e.parameters),s()(e.javascript),s()(e.preParams),s()(e.headers)).then(function(t){e.currentId=t.id,e.$success("另存为【"+t.name+"】成功！")})}).catch(function(e){})},run:function(){this.$router.push("/flow/testapi/run/"+this.customInterfacesId)},deleteItem:function(){var e=this;this.$confirm("即将删除选中用例且无法恢复，确认删除吗？","提示",{type:"warning"}).then(function(){Object(d.p)(e.currentId).then(c()(l.a.mark(function t(){var a,n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$success("删除成功！"),t.next=3,Object(d.E)({customInterfacesId:e.customInterfacesId});case 3:(a=t.sent).length>0&&(n=a[0],e.$refs.selector.deleteItem(e.currentId),e.loadItem(n));case 5:case"end":return t.stop()}},t,e)})))})},addParams:function(){this.parameters.push({key:"",value:"",type:"text"})},addPreParams:function(){this.preParams.push({key:"",value:"",type:"text"})},addHeader:function(){this.headers.push({key:"",value:""})},delHeader:function(e){this.headers.splice(e,1)}},components:{"v-jsonformatter":function(){return a.e(32).then(a.bind(null,"9YOq"))},"v-selector":function(){return a.e(30).then(a.bind(null,"qNHp"))},"v-interfaces-selector":function(){return a.e(41).then(a.bind(null,"vTTj"))},"v-parameter-input":function(){return a.e(34).then(a.bind(null,"WfCw"))}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h4",{staticClass:"title"},[e._v("\n      接口测试: "+e._s(e.data.name)+"\n      "),a("v-selector",{ref:"selector",staticStyle:{width:"35%","text-indent":"0","margin-left":"20px"},attrs:{id:"id",text:"name",searchKey:"name",onSelectionChanged:e.onSelectCusInterfacesItem,placeholder:"请选择一个历史保存的用例",remote:!0,filterable:!0,url:e.getCusInterfacesItemListApi,load:e.currentId?[e.currentId]:null,extraParams:e.customInterfacesId?{customInterfacesId:e.customInterfacesId,rows:20}:{customInterfacesId:-1}}}),e._v(" "),a("el-button",{attrs:{type:"danger",circle:"",size:"small",icon:"el-icon-delete",disabled:null==e.currentId},on:{click:e.deleteItem}})],1),e._v(" "),a("hr"),e._v(" "),a("el-form",{attrs:{inline:!0}},[a("el-form-item",{staticStyle:{width:"140px"},attrs:{label:""}},[a("el-select",{model:{value:e.env,callback:function(t){e.env=t},expression:"env"}},e._l(e.ENV_DOMAIN_MAP,function(e,t){return a("el-option",{key:t,attrs:{label:e,value:t}})}),1)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"100px"},attrs:{label:""}},[a("el-select",{attrs:{value:"POST"},model:{value:e.method,callback:function(t){e.method=t},expression:"method"}},[a("el-option",{attrs:{label:"POST",value:"POST"}}),e._v(" "),a("el-option",{attrs:{label:"GET",value:"GET"}}),e._v(" "),a("el-option",{attrs:{label:"PATCH",value:"PATCH"}}),e._v(" "),a("el-option",{attrs:{label:"PUT",value:"PUT"}}),e._v(" "),a("el-option",{attrs:{label:"DELETE",value:"DELETE"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-input",{staticStyle:{width:"575px"},model:{value:e.showUrl,callback:function(t){e.showUrl=t},expression:"showUrl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"danger"},on:{click:e.testUrl}},[e._v("发射!!!")]),e._v(" "),e.data.id&&"localDomain"===this.env?a("el-button",{attrs:{type:"info"},on:{click:e.configLocalEnv}},[e._v("配置本地环境")]):e._e(),e._v(" "),a("el-button",{attrs:{type:"primary",disabled:null==e.currentId},on:{click:e.save}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.saveAs}},[e._v("另存为")]),e._v(" "),e.customInterfacesId?a("el-button",{attrs:{type:"success"},on:{click:e.run}},[e._v("批量执行")]):e._e()],1)],1),e._v(" "),a("div",[a("div",{staticClass:"left"},[a("h4",{staticClass:"title",staticStyle:{display:"inline-block"}},[e._v("调用结果")]),e._v(" "),e.end?a("span",{staticStyle:{display:"inline-block","margin-left":"20px"}},[a("b",[e._v("耗时：")]),e._v(e._s(""+(e.end-e.start))+"ms；\n        ")]):e._e(),e._v(" "),a("hr"),e._v(" "),a("el-form",[a("el-form-item",{attrs:{label:""}},[a("v-jsonformatter",{staticStyle:{"max-height":"500px","overflow-x":"hidden"},attrs:{json:e.result}})],1)],1),e._v(" "),a("h4",{staticClass:"title"},[e._v("检查点结果")]),e._v(" "),a("hr"),e._v(" "),null!=e.checkResult?a("span",{domProps:{innerHTML:e._s(e.checkResultMessage)}}):a("span",[e._v("未设置检查点")])],1),e._v(" "),a("div",{staticClass:"right"},[a("h4",{staticClass:"title",staticStyle:{height:"22px"}},[e._v("header\n          "),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",circle:"",size:"small"},on:{click:function(t){return e.addHeader()}}}),e._v(" "),e.data.end.id?a("el-button",{attrs:{type:"primary",icon:"el-icon-setting",size:"small"},on:{click:e.openInterfacesSelectorDialog}},[e._v("设置授权账号")]):e._e(),e._v(" "),e.data.end.id?a("el-button",{attrs:{type:"primary",icon:"el-icon-refresh",size:"small"},on:{click:function(t){return e.loadHeaders(!0)}}}):e._e()],1),e._v(" "),a("hr"),e._v(" "),e.headers?a("el-form",e._l(e.headers,function(t,n){return a("el-form-item",{key:n},[a("el-input",{staticClass:"half_min_width",attrs:{placeholder:"请输入headers参数名"},model:{value:t.key,callback:function(a){e.$set(t,"key",a)},expression:"h.key"}},[a("template",{slot:"prepend"},[a("span",[e._v("参数名")])])],2),e._v(" "),a("span",{staticClass:"v-top"},[e._v("=")]),e._v(" "),a("el-input",{staticClass:"half_max_width",attrs:{placeholder:"请输入headers参数值"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"h.value"}},[a("template",{slot:"prepend"},[a("span",[e._v("参数值")])])],2),e._v(" "),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"small"},on:{click:function(t){return e.delHeader(n)}}})],1)}),1):e._e(),e._v(" "),a("h4",{staticClass:"title"},[e._v("预置参数\n          "),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",circle:"",size:"small"},on:{click:function(t){return e.addPreParams()}}})],1),e._v(" "),a("hr"),e._v(" "),a("v-parameter-input",{attrs:{parameters:e.preParams,"need-add-params":!1}}),e._v(" "),a("h4",{staticClass:"title"},[e._v("参数\n          "),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",circle:"",size:"small"},on:{click:function(t){return e.addParams()}}})],1),e._v(" "),a("hr"),e._v(" "),a("v-parameter-input",{attrs:{parameters:e.parameters,"need-add-params":!1}}),e._v(" "),a("h4",{staticClass:"title"},[e._v("检查点")]),e._v(" "),a("hr"),e._v(" "),a("el-input",{attrs:{placeholder:"注：本接口的调用结果将存入this中。\n在这里写入一些检查点脚本，示例：\n\nassert(this.name != null, '返回名称不能为空！')\nassert(this.data.id != null, '返回id不能为空！')\nassert(this.data.id.quantity > 0, '数量必须大于等于零！')\n\n如果报错了，那么整个流程将被终止。",rows:18,type:"textarea"},model:{value:e.javascript,callback:function(t){e.javascript=t},expression:"javascript"}})],1)]),e._v(" "),a("v-interfaces-selector",{ref:"interfacesSelector",attrs:{"on-ok":e.savePrivatesAuth}})],1)},staticRenderFns:[]};var _=a("C7Lr")(m,f,!1,function(e){a("3+zk")},"data-v-5e35a80e",null);t.default=_.exports}});
//# sourceMappingURL=2.6494fc6a422023bc3c73.js.map