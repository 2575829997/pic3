(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72f8984e"],{5360:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("h1",[e._v(" 查询型号 ")]),a("a-select",{staticClass:"finditem",staticStyle:{width:"250px"},attrs:{placeholder:"选择型号"},on:{change:e.handleChange},model:{value:e.formfind.devicetype,callback:function(t){e.$set(e.formfind,"devicetype",t)},expression:"formfind.devicetype"}},e._l(e.devicetypelist,(function(t,n){return a("a-select-option",{key:n,attrs:{value:t.name}},[e._v(" "+e._s(t.cname)+" ")])})),1)],1),a("br"),""!=e.cdevicetype.data.cname?a("div",[e._v(" "+e._s(e.cdevicetype.data.cname)+" 最新版本："+e._s(e.cdevicetype.bestnewdetail.version)+" url地址："+e._s(e.cdevicetype.bestnewdetail.upgradeUrl)+" "),a("div",[a("br"),e._v(" 选择版本号： "),a("a-select",{staticClass:"finditem",staticStyle:{width:"250px"},attrs:{placeholder:"选择版本号"},model:{value:e.formupdate.targetversion,callback:function(t){e.$set(e.formupdate,"targetversion",t)},expression:"formupdate.targetversion"}},e._l(e.versionlist,(function(t,n){return a("a-select-option",{key:n,attrs:{value:t.version}},[e._v(" "+e._s(t.version)+" ")])})),1)],1)]):e._e(),a("br"),a("h1",[e._v("查询设备信息")]),a("a-input-search",{staticStyle:{width:"30%"},attrs:{placeholder:"输入mac地址"},on:{search:e.searchDevice},model:{value:e.formfind.macid,callback:function(t){e.$set(e.formfind,"macid",t)},expression:"formfind.macid"}}),null!=e.cdevice.macId?a("div",[e._v(" 当前设备信息："),a("br"),e._v(" mac:"+e._s(e.cdevice.macId)+" 酒店号："+e._s(e.cdevice.hotelId)+" 房间号："+e._s(e.cdevice.roomId)+" 版本号："+e._s(e.cdevice.version)+" ")]):e._e(),a("div",[a("br"),a("h1",[e._v(" 批量升级 ")]),a("a-textarea",{staticStyle:{width:"40%"},attrs:{placeholder:"输入多个mac地址，回车隔开",rows:15},model:{value:e.maclist,callback:function(t){e.maclist=t},expression:"maclist"}}),a("div",[a("br"),a("div",[a("a-checkbox",{model:{value:e.formupdate.isforce,callback:function(t){e.$set(e.formupdate,"isforce",t)},expression:"formupdate.isforce"}},[e._v(" 强制升级 ")])],1),a("br"),a("a-button",{attrs:{type:"primary"},on:{click:e.searchmaclist}},[e._v("点击批量升级")])],1)],1),a("h1",[e._v(" 监视列表 ")]),e._l(e.tasklist,(function(t,n){return a("div",{key:n},[e._v(" "+e._s(t)+" ")])}))],2)},i=[],r=a("5530"),c=(a("b64b"),a("ac1f"),a("1276"),a("d81d"),a("4de4"),a("b0c0"),a("5880")),s=a("1da1"),o=(a("96cf"),a("7424")),d=a("b775");function u(e){return l.apply(this,arguments)}function l(){return l=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(d["e"])(o["GETNEWOTAPACK"],d["a"].POST,t),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return m=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(d["e"])(o["GETALLOTAPACK"],d["a"].POST,t),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return v=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(d["e"])(o["SEARCHDEVICEBYMAC"],d["a"].POST,t),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function h(e){return b.apply(this,arguments)}function b(){return b=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(d["e"])(o["MULUPDATE"],d["a"].POST,t),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function y(){return g.apply(this,arguments)}function g(){return g=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(d["e"])(o["GETOTALIST"],d["a"].GET),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}var w={name:"otaupdateM",data:function(){return{tasklist:[],versionlist:[],formupdate:{maclist:[],targetversion:"",devicetype:"",isforce:!1},maclist:"",password:"",devicetypelist:[{cname:"小助",name:"xiaozhu"},{cname:"小兔",name:"xiaotu"},{cname:"小希",name:"xiaoxi"},{cname:"小岚",name:"xiaolan"}],cdevicetype:{data:{cname:"",name:""},bestnewdetail:{version:""},versionlist:[{}]},cdevice:{},formfind:{macid:""}}},watch:{},mounted:function(){},computed:Object(r["a"])(Object(r["a"])({},Object(c["mapState"])("setting",["pageMinHeight"])),Object(c["mapGetters"])("account",["user","hotellist"])),created:function(){this.initdata()},methods:{gettask:function(){var e=this;y().then((function(t){200==t.data.code&&(e.tasklist=Object.keys(t.data.data))}))},initdata:function(){this.gettask()},submit:function(){},searchmaclist:function(){var e=this,t=this.maclist.split(/\n/);if(""!=this.maclist){var a=!1;t.map((function(e){(e.length<10||!/^[A-Fa-f0-9]{10,14}$/.test(e))&&(a=!0)})),a?this.$message.info("格式不正确"):(this.formupdate.maclist=t,this.formupdate.devicetype=this.formfind.devicetype,h(this.formupdate).then((function(t){200==t.data.code&&(e.$message.info("mqtt消息发送成功"),e.gettask())})))}else this.$message.info("什么也没输入")},searchDevice:function(){var e=this;return""==this.formfind.macid?(this.$message.info("什么也没输入"),void(this.cdevice={})):this.formfind.macid.length<11?(this.$message.info("mac格式不正确"),void(this.cdevice={})):void p(this.formfind).then((function(t){if(200==t.data.code){if(null==t.data.data)return e.$message.info("mac不存在"),void(e.cdevice={});e.cdevice=t.data.data}}))},handleChange:function(e){var t=this,a=this.devicetypelist.filter((function(t){return t.name==e}));this.cdevicetype.data=a[0];var n={};n.devicetype=this.cdevicetype.data.name,u(n).then((function(e){200==e.data.code&&(t.cdevicetype.bestnewdetail=e.data.data)})),f(n).then((function(e){200==e.data.code&&(t.versionlist=e.data.data)}))}}},_=w,k=(a("d636"),a("0c7c")),O=Object(k["a"])(_,n,i,!1,null,"de3eba1c",null),x=O.exports;t["default"]=x},"84bd":function(e,t,a){},d636:function(e,t,a){"use strict";var n=a("84bd"),i=a.n(n);i.a}}]);