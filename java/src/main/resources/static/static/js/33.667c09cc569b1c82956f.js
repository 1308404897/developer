webpackJsonp([33],{DzQl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("aA9S"),r=n.n(a),s=n("0Njg"),l=n("R2SV"),i={props:{onOk:{type:Function,default:function(){}}},data:function(){return{nodeId:null,node:{sleep:0,interfaceId:null,interfaceName:null,functionId:null,history:!1,hash:null,method:null,url:null,parameters:null,headers:[],javascript:null,returns:null,java:null},generatedReturns:null,interfacesVersionedSimpleListApi:s.E,interfacesSimpleListApi:s.C,functionListApi:s.p}},methods:{onSelectInterface:function(e){var t=e[0]||{};this.node.interfaceId=t.id,this.node.interfaceName=t.name,this.node.hash=null,this.setInterfaces(t)},onSelectHistoryInterface:function(e){var t=e[0]||{};this.node.hash=t.hash,this.setInterfaces(t)},setInterfaces:function(e){var t=this;this.node.url=e.url,this.node.method=e.method,this.node.java=e.java,this.node.sleep=e.sleep,this.node.parameters=Object(l.c)(e.parameters),e.returns?(this.node.returns=JSON.parse(e.returns),this.generatedReturns=Object(l.d)(this.node.returns)):(this.node.returns=null,this.generatedReturns=null),e.interfacesId?Object(s.u)(e.interfacesId).then(function(e){t.node.headers=e?[e]:[]}):this.node.headers=[]},open:function(e,t){var n=e.data||{};this.nodeId=e.id,this.node.interfaceId=n.interfaceId,this.node.interfaceName=n.interfaceName,this.node.functionId=n.functionId,this.node.history=n.history||!1,this.node.hash=n.hash,this.node.headers=n.headers||[],this.node.parameters=n.parameters||[],this.node.javascript=n.javascript,this.node.java=n.java,this.node.url=n.url,this.node.sleep=n.sleep,this.node.method=n.method,n.returns?(this.node.returns=n.returns,this.generatedReturns=Object(l.d)(this.node.returns)):(this.node.returns=null,this.generatedReturns=null),this.$refs.editNodeDialog.open()},confirm:function(){var e=this;this.$refs.form.validate(function(t){t&&(e.onOk&&e.onOk(r()({},e.node)),e.$refs.editNodeDialog.close())})},paste:function(e){Object(l.a)(e,this.node.parameters)},addParams:function(){this.node.parameters.push({key:"",value:"",type:""})},addHeader:function(){this.node.headers.push({key:"",value:""})},delParam:function(e){this.node.parameters.splice(e,1)},delHeader:function(e){this.node.headers.splice(e,1)}},mounted:function(){this.$el.addEventListener("paste",this.paste)},components:{"v-dialog":function(){return n.e(27).then(n.bind(null,"j9Pd"))},"v-selector":function(){return n.e(29).then(n.bind(null,"qNHp"))},"v-jsonformatter":function(){return n.e(28).then(n.bind(null,"9YOq"))}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-dialog",{ref:"editNodeDialog",attrs:{title:"配置节点，当前节点编号："+e.nodeId,ok:e.confirm,width:1e3}},[n("el-form",{ref:"form",staticClass:"edit-node-dialog",attrs:{slot:"body",model:e.node,"label-width":"8em"},slot:"body"},[n("el-form-item",{attrs:{prop:"interfaceId",label:"选择一个接口",required:"",rules:[{required:!0,message:"请选择一个接口",trigger:["blur","change"]}]}},[n("v-selector",{staticStyle:{width:"666px"},attrs:{id:"id",text:"name",onSelectionChanged:e.onSelectInterface,filterable:!0,remote:!0,placeholder:"请选择一个接口（可输入名称进行搜索）",load:e.node.interfaceId?[e.node.interfaceId]:null,url:e.interfacesSimpleListApi}}),e._v(" "),n("el-input",{staticClass:"hidden",model:{value:e.node.interfaceId,callback:function(t){e.$set(e.node,"interfaceId",t)},expression:"node.interfaceId"}}),e._v(" "),n("el-checkbox",{model:{value:e.node.history,callback:function(t){e.$set(e.node,"history",t)},expression:"node.history"}},[e._v("使用历史版本")])],1),e._v(" "),e.node.history?n("el-form-item",{attrs:{label:"历史接口"}},[n("v-selector",{attrs:{id:"hash",text:"name",onSelectionChanged:e.onSelectHistoryInterface,placeholder:"请选择一个历史版本（不选择，当前接口作为副本）",remote:!0,load:e.node.hash?[e.node.hash]:null,url:e.interfacesVersionedSimpleListApi,extraParams:e.node.interfaceId?{interfacesId:e.node.interfaceId}:{interfacesId:-1}}})],1):e._e(),e._v(" "),n("el-form-item",{attrs:{label:"访问类型:"}},[n("div",[e._v(e._s(e.node.method))])]),e._v(" "),n("el-form-item",{attrs:{label:"接口地址:"}},[n("div",[e._v(e._s(e.node.url))])]),e._v(" "),n("el-form-item",{attrs:{label:"休眠"}},[n("el-input",{staticStyle:{display:"inline-block",width:"100px"},attrs:{placeholder:"0"},model:{value:e.node.sleep,callback:function(t){e.$set(e.node,"sleep",t)},expression:"node.sleep"}}),e._v("　秒之后运行\n        ")],1),e._v(" "),n("el-form-item",{attrs:{label:"header:"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-plus",circle:"",size:"small"},on:{click:function(t){return e.addHeader()}}}),e._v(" "),e.node.headers?n("el-form",e._l(e.node.headers,function(t,a){return n("el-form-item",{key:a},[n("el-input",{staticClass:"param-key",attrs:{placeholder:"请输入headers参数名"},model:{value:t.key,callback:function(n){e.$set(t,"key",n)},expression:"h.key"}}),e._v("=\n              "),n("el-input",{staticClass:"param-value",attrs:{placeholder:"请输入headers参数值，不填写则运行时手动输入"},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"h.value"}}),e._v(" "),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"small"},on:{click:function(t){return e.delHeader(a)}}})],1)}),1):e._e()],1),e._v(" "),n("el-form-item",{attrs:{label:"接口参数:"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-plus",circle:"",size:"small"},on:{click:function(t){return e.addParams()}}}),e._v(" "),e.node.parameters&&e.node.parameters.length>0?n("el-form",{staticClass:"params-form"},e._l(e.node.parameters,function(t,a){return n("el-form-item",{key:a,attrs:{label:""}},[n("el-input",{staticClass:"param-key",attrs:{placeholder:"请输入参数名"},model:{value:t.key,callback:function(n){e.$set(t,"key",n)},expression:"param.key"}}),e._v("=\n              "),"textarea"===t.inputType?n("el-input",{staticClass:"param-value",attrs:{placeholder:t.comment||"",rows:15,type:"textarea",name:t.key},model:{value:t.defaults,callback:function(n){e.$set(t,"defaults",n)},expression:"param.defaults"}}):n("el-input",{staticClass:"param-value",attrs:{placeholder:t.comment||"",name:t.key},model:{value:t.defaults,callback:function(n){e.$set(t,"defaults",n)},expression:"param.defaults"}}),e._v(" "),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"small"},on:{click:function(t){return e.delParam(a)}}})],1)}),1):e._e()],1),e._v(" "),n("el-form-item",{attrs:{label:"返回值:"}},[e.generatedReturns?n("v-jsonformatter",{attrs:{json:e.generatedReturns,"min-height":100}}):e._e()],1),e._v(" "),n("el-form-item",{attrs:{label:"返回值处理脚本:"}},[n("el-input",{attrs:{placeholder:"注：本接口的调用结果将存入$"+e.nodeId+"中。\n此脚本可以对数据进行转换，在脚本最后使用 return xxx;    xxx（即为转换后的数据）将作为新值覆盖$"+e.nodeId+"\n当然这里也可以不 return或者return null，那么$"+e.nodeId+"将保留接口请求返回的原始数据\n您可以在后续流程中使用$"+e.nodeId+"来获取本节点的返回值，如$"+e.nodeId+".id可获取到返回值中的id\n另外可以获取上游节（以及上游的上游）点带来的数据，如：$anotherNode.xx\n当然您可以可以在这里做一些返回值校验，如果发现错误了写如下代码： throw new Error('错误信息')，示例：\n\nif ($"+e.nodeId+".id == null) throw new Error('返回id不能为空！')\nif ($"+e.nodeId+".quantity > 0) throw new Error('数量必须大于等于零！')\n\n如果报错了，那么整个流程将被终止。\n\nreturn {\n  id: $"+e.nodeId+".id,\n  name: $"+e.nodeId+".name,\n  quantity: $"+e.nodeId+".quantity\n}",rows:15,type:"textarea"},model:{value:e.node.javascript,callback:function(t){e.$set(e.node,"javascript",t)},expression:"node.javascript"}})],1)],1)],1)],1)},staticRenderFns:[]};var d=n("C7Lr")(i,o,!1,function(e){n("I7pl")},null,null);t.default=d.exports},I7pl:function(e,t){}});
//# sourceMappingURL=33.667c09cc569b1c82956f.js.map