webpackJsonp([57],{261:function(e,t,a){function l(e){a(528)}var n=a(135)(a(380),a(615),l,null,null);e.exports=n.exports},380:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"bonuslog",data:function(){return{value:"",input:"",select:"",BonuslogData:[{bonusID:"50000123",clientID:"22553366",name:"Patrick Smith",bonusType:"Deposit",amount:"1,000.00",balance:"1,000.00",date:"2017-03-10 14:30",verification:"Verified"},{bonusID:"50000122",clientID:"22998800",name:"Alan Smith",bonusType:"Welcome",amount:"500.00",balance:"500.00",date:"2017-03-10 12:30",verification:"Verified"},{bonusID:"50000121",clientID:"22887766",name:"Andy Smith",bonusType:"Withdrawal Fee",amount:"0",balance:"5,750.40",date:"2017-03-10 11:30",verification:"Verified"}],currentPage:2}},components:{},methods:{handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}},mounted:function(){}}},480:function(e,t,a){t=e.exports=a(250)(!0),t.push([e.i,".el-select .el-input{width:150px}.el-date-editor--daterange.el-input{width:100%}","",{version:3,sources:["C:/Users/KOLO/Desktop/GQFX-CRM/admin-vue/src/components/admin/campaign/bonuslog.vue"],names:[],mappings:"AACA,qBACI,WAAa,CAChB,AACD,oCACC,UAAW,CACX",file:"bonuslog.vue",sourcesContent:["\n.el-select .el-input {\r\n    width: 150px;\n}\n.el-date-editor--daterange.el-input{\r\n\twidth:100%;\n}\r\n"],sourceRoot:""}])},528:function(e,t,a){var l=a(480);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a(251)("955fc0f0",l,!0)},615:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),e._v(" "),a("div",{staticClass:"wrapper wrapper-content animated fadeInRight"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"ibox float-e-margins"},[a("div",{staticClass:"ibox-title"},[a("div",{staticClass:"ibox-tools"},[a("div",{staticClass:"input-group col-sm-4 pull-left m-b-sm m-r-sm"},[[a("el-date-picker",{attrs:{type:"daterange",placeholder:"Select date range"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})]],2),e._v(" "),a("div",{staticClass:"input-group col-sm-6 pull-left m-b-sm m-r-sm"},[a("el-input",{attrs:{placeholder:"Table in Search"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}},[a("el-select",{attrs:{placeholder:"Bonus Type"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[a("el-option",{attrs:{label:"Deposit",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"Welcome",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"Withdrawal Fee",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"Other",value:"4"}})],1),e._v(" "),a("el-button",{attrs:{icon:"search"},slot:"append"})],1)],1),e._v(" "),a("div",{staticClass:"clearfix"})])]),e._v(" "),a("div",{staticClass:"ibox-content"},[a("div",{staticClass:"table-responsive"},[[a("el-table",{staticStyle:{width:"100%","font-size":"13px"},attrs:{data:e.BonuslogData,border:""}},[a("el-table-column",{attrs:{prop:"bonusID",label:"Bonus ID",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"clientID",label:"Client ID",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"Name",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"bonusType",label:"Bonus Type",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"Amount",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"balance",label:"Balance",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"date",label:"Date",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"verification",label:"Verification",sortable:""}})],1)]],2),e._v(" "),[a("el-pagination",{staticStyle:{"text-align":"right",padding:"8px 0"},attrs:{"current-page":e.currentPage,"page-sizes":[10,25,50,100],"page-size":100,layout:"total, sizes, prev, pager, next ",total:100},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})]],2)])])])]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row wrapper border-bottom white-bg page-heading"},[a("div",{staticClass:"col-lg-10"},[a("h2",{staticClass:"pull-left m-r-sm"},[e._v("Bonus log")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer"},[a("div",[a("strong",[e._v("Copyright")]),e._v(" GQ capital © 2017\r\n\t\t\t\t")])])}]}}});
//# sourceMappingURL=57.fe6ca38042f24f1253d5.js.map