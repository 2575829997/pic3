(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a57a9a4a"],{4611:function(t,e,n){},5745:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-page roomservicepage"},[n("h1",{staticClass:"headtitle"},[t._v("房间服务管理")]),n("div",{staticClass:"center"},[n("div",{staticClass:"tablediv"},[n("div",{staticClass:"find"},[n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("a-row",{attrs:{gutter:12,type:"flex",justify:"space-around",align:"middle"}},[n("a-col",{attrs:{span:6}},[n("a-input",{staticClass:"finditem",attrs:{placeholder:"服务单号"},model:{value:t.formfind.oddid,callback:function(e){t.$set(t.formfind,"oddid",e)},expression:"formfind.oddid"}})],1),n("a-col",{directives:[{name:"show",rawName:"v-show",value:t.hotellist.length>1||"hotels"!=t.user.type,expression:"hotellist.length>1||user.type!='hotels'"}],attrs:{span:6}},[n("HotelpickWithAll",{staticClass:"finditem",on:{"hotel-chose":t.hotelchose}})],1),n("a-col",{attrs:{span:6}},[n("a-input",{staticClass:"finditem",attrs:{placeholder:"房间号"},model:{value:t.formfind.roomId,callback:function(e){t.$set(t.formfind,"roomId",e)},expression:"formfind.roomId"}})],1),n("a-col",{attrs:{span:6}},[n("a-select",{staticClass:"finditem",attrs:{placeholder:"服务类型"},on:{change:t.changeserviceType}},[n("a-select-option",{attrs:{value:"-1"}},[t._v(" 全部服务 ")]),n("a-select-option",{attrs:{value:"维修服务"}},[t._v(" 维修服务 ")]),n("a-select-option",{attrs:{value:"打扫服务"}},[t._v(" 打扫服务 ")]),n("a-select-option",{attrs:{value:"送物服务"}},[t._v(" 送物服务 ")]),n("a-select-option",{attrs:{value:"礼宾服务"}},[t._v(" 礼宾服务 ")])],1)],1)],1)],1),n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("a-row",{attrs:{gutter:12,type:"flex",justify:"space-around",align:"middle"}},[n("a-col",{attrs:{span:6}},[n("a-select",{staticClass:"finditem",attrs:{placeholder:"服务来源"},on:{change:t.changessource}},[n("a-select-option",{attrs:{value:"-1"}},[t._v(" 全部来源 ")]),n("a-select-option",{attrs:{value:"0"}},[t._v(" 小布鲁小程序 ")]),n("a-select-option",{attrs:{value:"1"}},[t._v(" AI智能语音 ")])],1)],1),n("a-col",{attrs:{span:6}},[n("a-select",{staticClass:"finditem",attrs:{placeholder:"状态"},model:{value:t.formfind.status,callback:function(e){t.$set(t.formfind,"status",e)},expression:"formfind.status"}},[n("a-select-option",{attrs:{value:"-1"}},[t._v(" 全部状态 ")]),n("a-select-option",{attrs:{value:"0"}},[t._v(" 未处理 ")]),n("a-select-option",{attrs:{value:"3"}},[t._v(" 处理中 ")]),n("a-select-option",{attrs:{value:"2"}},[t._v(" 已完成 ")])],1)],1),n("a-col",{attrs:{span:6}},[n("a-button",{staticClass:"finditem",attrs:{type:"primary"},on:{click:t.findbutton}},[t._v(" 搜索 ")])],1),n("a-col",{attrs:{span:6}},[n("a-button",{staticClass:"finditem",attrs:{type:"primary"},on:{click:t.exporte}},[t._v(" 当前酒店导出excel ")])],1)],1)],1),n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("a-row",{attrs:{gutter:12,type:"flex",justify:"space-around",align:"middle"}},[n("a-col",{attrs:{span:6}},[n("a-button",{staticClass:"finditem",attrs:{type:"primary",disabled:0==t.selectedRowKeys.length},on:{click:t.delmul}},[t._v("删除选中服务")])],1),n("a-col",{attrs:{span:6}}),n("a-col",{attrs:{span:6}}),n("a-col",{attrs:{span:6}})],1)],1)])])]),n("a-table",{staticStyle:{margin:"10px"},attrs:{pagination:!1,"row-selection":t.rowSelection,bordered:"",columns:t.columns,"data-source":t.orderlist,rowKey:function(t){return t.roomserviceEntity.oddid},expandRowByClick:!0,expandIconAsCell:!0,expandIconColumnIndex:5,scroll:{x:1e3,y:1200}},scopedSlots:t._u([{key:"expandedRowRender",fn:function(e){return n("a-table",{staticStyle:{margin:"0px 80px 0px 80px"},attrs:{bordered:!0,columns:t.childcolumns,pagination:!1,"data-source":e.oderitemrecordEntities}})}},{key:"startime",fn:function(e,i){return n("span",{},[t._v(" "+t._s(t.formatDate(i.roomserviceEntity.startime))+" ")])}},{key:"endtime",fn:function(e,i){return n("span",{},[t._v(" "+t._s(null==i.roomserviceEntity.endtime?"":t.formatDate(i.roomserviceEntity.endtime))+" ")])}},{key:"duetime",fn:function(e,i){return n("span",{},[t._v(" "+t._s(null==i.roomserviceEntity.duetime?"":t.formatDate(i.roomserviceEntity.duetime))+" ")])}},{key:"status",fn:function(e,i){return n("span",{},[t._v(" "+t._s(0==i.roomserviceEntity.status?"未处理":1==i.roomserviceEntity.status?"处理中":2==i.roomserviceEntity.status?"已完成":3==i.roomserviceEntity.status?"处理中":"点击完成")+" ")])}},{key:"source",fn:function(e,i){return n("span",{},[t._v(" "+t._s(0==i.roomserviceEntity.source?"小布鲁":1==i.roomserviceEntity.source?"AI语音":"未知")+" ")])}},{key:"rec",fn:function(e,i){return n("span",{},[t._v(" "+t._s(i.roomserviceEntity.rec.length>15?i.roomserviceEntity.rec.substring(0,15)+"...":i.roomserviceEntity.rec)+" ")])}}])}),n("div",{staticClass:"page"},[n("div",{staticStyle:{"margin-bottom":"10px"}},[t._v("共"+t._s(t.pageinfo.total)+"条记录")]),n("a-pagination",{attrs:{total:t.pageinfo.total,defaultPageSize:t.pageinfo.size},on:{change:t.onChangePage},model:{value:t.pageinfo.page,callback:function(e){t.$set(t.pageinfo,"page",e)},expression:"pageinfo.page"}})],1)],1)},o=[],a=n("5530"),s=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("7225")),r=n("5880"),c=n("1da1"),l=(n("96cf"),n("7424")),d=n("b775");function u(t){return p.apply(this,arguments)}function p(){return p=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(d["e"])(l["MULDEL"],d["a"].POST,e),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function h(t){return m.apply(this,arguments)}function m(){return m=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(d["e"])(l["FINDODERLIST"],d["a"].POST,e),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}function f(t,e){return g.apply(this,arguments)}function g(){return g=Object(c["a"])(regeneratorRuntime.mark((function t(e,n){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=Object(d["e"])(l["EXPORTEXCEL"]+"/"+e+"/"+n,d["a"].GET,null,{responseType:"arraybuffer"}),t.abrupt("return",i);case 2:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}var v=n("6af2"),y=n("b516"),x=[{title:"服务单号",width:150,ellipsis:!0,dataIndex:"roomserviceEntity.oddid",key:"roomserviceEntity.oddid",align:"center",slots:{title:"customTitle"},scopedSlots:{customRender:"name"}},{title:"酒店名称",width:150,dataIndex:"hotelcname",key:"hotelcname"},{title:"房间号",width:80,align:"center",dataIndex:"roomserviceEntity.roomid"},{title:"服务类型",width:150,dataIndex:"roomserviceEntity.servicetype",key:"roomserviceEntity.servicetype"},{title:"具体描述",width:160,dataIndex:"roomserviceEntity.rec",key:"roomserviceEntity.rec",scopedSlots:{customRender:"rec"}},{title:"创建时间",width:160,dataIndex:"roomserviceEntity.startime",key:"roomserviceEntity.startime",scopedSlots:{customRender:"startime"}},{title:"接单时间",width:160,dataIndex:"roomserviceEntity.duetime",key:"roomserviceEntity.duetime",scopedSlots:{customRender:"duetime"}},{width:160,title:"完成时间",dataIndex:"roomserviceEntity.endtime",key:"roomserviceEntity.endtime",scopedSlots:{customRender:"endtime"}},{title:"接单人",width:150,dataIndex:"duestaffname",key:"duestaffname"},{title:"服务状态",width:150,align:"center",key:"roomserviceEntity.status",scopedSlots:{customRender:"status"}},{title:"来源",align:"center",width:150,key:"roomserviceEntity.source",scopedSlots:{customRender:"source"}},{title:"操作",align:"center",scopedSlots:{customRender:"action"}}],b=[{title:"服务类型",dataIndex:"servicetype",key:"servicetype",align:"center"},{title:"类型分类",dataIndex:"typename",key:"typename",align:"center"},{title:"物品名称",dataIndex:"serviceitem",key:"serviceitem",align:"center"},{title:"物品数量",dataIndex:"itemnum",key:"itemnum",align:"center"}],w={name:"roomServicesList",components:{MyIcon:v["a"],HotelpickWithAll:s["a"]},data:function(){return{childcolumns:b,chotelname:"",formfind:{serviceType:"",hotelid:null,oddid:"",roomId:"",typeName:"",status:"-1",source:""},pageinfo:{total:50,size:10,page:1},selectedRowKeys:"",searchText:"",searchInput:null,searchedColumn:"",columns:x,orderlist:[]}},watch:{checkedKeys:function(t){}},mounted:function(){},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(r["mapState"])("setting",["pageMinHeight"])),Object(r["mapGetters"])("account",["user","hotellist"])),{},{rowSelection:function(){var t=this;return{onChange:function(e,n){t.selectedRowKeys=e}}}}),methods:{hotelchose:function(t,e){var n=this;this.formfind.hotelid=t,this.chotelname=e,setTimeout((function(){n.init()}),100)},changessource:function(t){this.formfind.source=t,"-1"==t&&(this.formfind.source="")},changeserviceType:function(t){this.formfind.serviceType=t,"-1"==t&&(this.formfind.serviceType="")},handleChange:function(t){var e=Object(y["gethotelnameByiid"])(t,this.hotellist);this.chotelname=e},handleBlur:function(){},handleFocus:function(){},filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},exporte:function(){f(this.formfind.hotelid,this.chotelname).then((function(t){var e=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.style.display="none",n.href=e,n.setAttribute("download","exportExcel.xlsx"),document.body.appendChild(n),n.click()}))},findbutton:function(){this.getorderlists(1,10)},init:function(){this.getorderlists(this.pageinfo.page,this.pageinfo.size)},delmul:function(){this.$createElement;var t=this,e={};e.selectOddidList=this.selectedRowKeys,this.$confirm({title:"你想删除这些记录吗",content:function(t){return t("div",{style:"color:red;"},["删除后就找不到了"])},onOk:function(){var n=this;u(e).then((function(e){null==e.data.code&&(n.$notification.open({message:"错误",description:e.data}),n.$router.push("/login")),200==e.data.code&&(t.$notification.open({message:"操作成功",description:e.data.msg}),t.selectedRowKeys=[],t.init())}))},onCancel:function(){},class:"test"})},formatDate:function(t){t=new Date(t);var e=t.getFullYear()+"-",n=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",i=t.getDate()<10?"0"+t.getDate():t.getDate(),o=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",a=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",s=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return e+n+i+" "+o+a+s},customExpandIcon:function(t){var e=this.$createElement;return t.expanded?e("a",{style:{color:"#4C7AF0",marginRight:0},on:{click:function(e){t.onExpand(t.record,e)}}},[e("span",{attrs:{type:"link"}},["折叠"])]):e("a",{style:{color:"#4C7AF0",marginRight:0},on:{click:function(e){t.onExpand(t.record,e)}}},[e("span",{attrs:{type:"link"}},[" 展开"])])},onChangePage:function(t,e){this.getorderlists(t,e)},getorderlists:function(t,e){var n=this,i={},o={};o.page=t,o.limit=e,i.hotelIdList=this.user.hotelIdList,i.params=JSON.stringify(o),i.find=this.formfind,h(i).then((function(t){null==t.data.code&&(n.$notification.open({message:"错误",description:t.data}),n.$router.push("/login")),n.orderlist=t.data.findlist.list,n.pageinfo.total=t.data.findlist.totalCount,n.pageinfo.page=t.data.findlist.currPage}))}}},k=w,E=(n("a84f2"),n("0c7c")),C=Object(E["a"])(k,i,o,!1,null,"eb9be466",null),_=C.exports;e["default"]=_},7225:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-select",{staticClass:"hotelpicker",attrs:{"show-search":"",placeholder:"选择一个酒店","option-filter-prop":"children","filter-option":t.filterOption},on:{focus:t.handleFocus,blur:t.handleBlur,change:t.handleChange},model:{value:t.chotelid,callback:function(e){t.chotelid=e},expression:"chotelid"}},t._l(t.hotellist,(function(e,i){return n("a-select-option",{key:i,attrs:{value:e.hotelId}},[t._v(" "+t._s(e.hotelCname)+" ")])})),1)],1)},o=[],a=n("5530"),s=n("5880"),r={name:"HotelpickWithAll",data:function(){return{chotelid:0,chotelname:""}},computed:Object(a["a"])({},Object(s["mapGetters"])("account",["user","hotellist"])),created:function(){this.chotelid=this.hotellist[0].hotelId,this.chotelname=this.hotellist[0].hotelCname,this.$emit("hotel-chose",this.chotelid,this.chotelname)},methods:{handleChange:function(t){for(var e=this.hotellist,n=e.length,i=0;i<n;i++)e[i].hotelId==t&&(this.chotelname=e[i].hotelCname,this.chotelid=t);this.$emit("hotel-chose",this.chotelid,this.chotelname)},handleBlur:function(){},handleFocus:function(){},filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0}}},c=r,l=(n("c533"),n("0c7c")),d=Object(l["a"])(c,i,o,!1,null,"bdfd526a",null);e["a"]=d.exports},a84f2:function(t,e,n){"use strict";var i=n("ceb3"),o=n.n(i);o.a},b516:function(t,e){function n(t){t=new Date(t);var e=t.getFullYear()+"-",n=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",i=t.getDate()<10?"0"+t.getDate():t.getDate(),o=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",a=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",s=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return e+n+i+" "+o+a+s}function i(t,e){for(var n="",i=0,o=0;o<e.length;o++)if(t==e[o].hotelId){n=e[o].hotelCname,i=1;break}return 0==i&&(n="请选择酒店"),n}t.exports={formatDate:n,gethotelnameByiid:i}},c533:function(t,e,n){"use strict";var i=n("4611"),o=n.n(i);o.a},ceb3:function(t,e,n){}}]);