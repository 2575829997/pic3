(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e9b25e6"],{"0f60":function(e,t,a){},"2a28":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"new-page",style:"min-height: "+e.pageMinHeight+"px"},[a("div",{staticClass:"addbutton"},[a("a-button",{attrs:{type:"primary"},on:{click:e.addProvicneUserDialog}},[e._v("添加酒店级用户")])],1),a("a-table",{attrs:{columns:e.columns,"data-source":e.data,rowKey:"id"},scopedSlots:e._u([{key:"action",fn:function(t,n){return a("span",{},[a("a-button",{staticStyle:{margin:"1%"},attrs:{type:"primary"},on:{click:function(t){return e.edit(n)}}},[e._v("编辑")]),a("a-button",{staticStyle:{margin:"1%"},attrs:{type:"danger"},on:{click:function(t){return e.del(n)}}},[e._v("删除")]),a("a-button",{staticStyle:{margin:"1%"},attrs:{type:"primary"},on:{click:function(t){return e.distrubute(n)}}},[e._v("角色分配")])],1)}}])}),a("a-modal",{attrs:{title:"新增酒店级用户"},on:{ok:e.onSubmit,cancel:e.canceladd},model:{value:e.visibleadd,callback:function(t){e.visibleadd=t},expression:"visibleadd"}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.addform,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{ref:"uname",attrs:{label:"账号",prop:"uname"}},[a("a-input",{attrs:{placeholder:"输入账号"},model:{value:e.addform.uname,callback:function(t){e.$set(e.addform,"uname",t)},expression:"addform.uname"}})],1),a("a-form-model-item",{ref:"pass",attrs:{label:"密码",prop:"pass"}},[a("a-input",{attrs:{placeholder:"输入密码"},model:{value:e.addform.pass,callback:function(t){e.$set(e.addform,"pass",t)},expression:"addform.pass"}})],1),a("a-form-model-item",{attrs:{label:"选择酒店"}},[a("a-cascader",{attrs:{options:e.options,placeholder:"选择酒店","show-search":{filter:e.filter}},on:{change:e.changehotel}}),a("a-button",{on:{click:e.addhotel}},[e._v("确认添加")])],1),e._v(" 已选酒店： "),e._l(e.addform.hotelid,(function(t,n){return a("div",{key:n},[e._v(" "+e._s(t.label)+" ")])})),a("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}})],2)],1),a("a-modal",{attrs:{title:"编辑用户"},on:{ok:e.handleedit,cancel:e.canceledit},model:{value:e.visibleedit,callback:function(t){e.visibleedit=t},expression:"visibleedit"}},[a("a-form-model",{attrs:{model:e.editdata}},[a("a-form-model-item",{attrs:{label:"用户名"}},[a("a-input",{attrs:{disabled:!0},model:{value:e.editdata.username,callback:function(t){e.$set(e.editdata,"username",t)},expression:"editdata.username"}})],1),a("a-form-model-item",{attrs:{label:"新密码(明文)"}},[a("a-input",{model:{value:e.editdata.password,callback:function(t){e.$set(e.editdata,"password",t)},expression:"editdata.password"}})],1)],1)],1),a("a-drawer",{attrs:{title:"角色分配",placement:"right",width:"20%",closable:!0,visible:e.visibledrawer},on:{close:e.onCloseDrawer}},[a("h1",[e._v("角色选择")]),a("div",[a("a-checkbox-group",{staticClass:"rolelist",attrs:{options:e.rolelist},scopedSlots:e._u([{key:"label",fn:function(t){return a("span",{attrs:{title:t.roleid}},[e._v(e._s(t.rolename))])}}]),model:{value:e.rolechecked,callback:function(t){e.rolechecked=t},expression:"rolechecked"}})],1),a("hr"),a("br"),a("a-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.saveprevilege}},[e._v("保存")])],1),a("div")],1)},r=[],i=a("1da1"),s=a("5530"),o=(a("96cf"),a("d81d"),a("d3b7"),a("4de4"),a("5880")),l=a("93d6"),c=a("d378"),d=(a("4fbb"),[{title:"用户名",dataIndex:"username",key:"roleid",align:"center",slots:{title:"customTitle"},scopedSlots:{customRender:"name"}},{title:"用户密码(加密后)",dataIndex:"password",align:"center",key:"password"},{title:"操作",align:"center",key:"action",scopedSlots:{customRender:"action"}}]),u={name:"hotelUserM",data:function(){return{columns:d,editdata:{username:"",password:""},data:[],options:[],labelCol:{span:4},wrapperCol:{span:14},rules:{uname:[{required:!0,message:"请填写账号名",trigger:"blur"}],pass:[{required:!0,message:"请填写密码",trigger:"change"}]},hoteltmp:{label:"",value:""},addform:{pass:"",uname:"",hotelid:[]},visibleadd:!1,visibleedit:!1,visibledrawer:!1,rolechecked:[],cusername:"",rolelist:[],rolelistvalue:[]}},computed:Object(s["a"])(Object(s["a"])({},Object(o["mapState"])("setting",["pageMinHeight"])),Object(o["mapGetters"])("account",["user","hotellist"])),mounted:function(){this.init(),this.init2()},methods:{init2:function(){var e=this;this.hotellist.map((function(t){var a={value:t.hotelId+"",label:t.hotelCname};e.options.push(a)}))},saveprevilege:function(){var e=this,t=this.$createElement,a={rolechecked:this.rolechecked,hotelchecked:this.hotelchecked,username:this.cusername};Object(l["l"])(a).then((function(a){200==a.data.code&&(e.$notification.open({message:"修改成功",description:"【"+e.cusername+"】的权限已修改",icon:t("a-icon",{attrs:{type:"smile"},style:"color: #108ee9"})}),e.visibledrawer=!1,e.initlist())}))},distrubute:function(e){var t=this,a=new Promise((function(t,a){Object(l["f"])(e.username).then((function(e){200==e.data.code?t(e):a(e)}))}));a.then((function(a){for(var n=a.data.roleList,r=[],i=0;i<n.length;i++)r.push(n[i].roleid);t.rolechecked=r,t.visibledrawer=!0,t.cusername=e.username}),(function(a){t.$message.info("未查询到相关信息"),t.rolechecked=[],t.visibledrawer=!0,t.cusername=e.username}))},onCloseDrawer:function(){this.visibledrawer=!1},del:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t,a.next=3,t.$confirm({title:"确认删除【"+e.username+"】",content:"该操作不可逆",okText:"确认",okType:"danger",cancelText:"取消",onOk:function(){n.dealdel(e)},onCancel:function(){}});case 3:case"end":return a.stop()}}),a)})))()},dealdel:function(e){var t=this,a=this.$createElement;Object(l["b"])(e).then((function(e){200==e.data.code&&(t.$notification.open({message:"成功消息",description:"删除成功",icon:a("a-icon",{attrs:{type:"smile"},style:"color: #108ee9"})}),t.init())}))},canceledit:function(){this.visibleedit=!1},handleedit:function(){var e=this;this.editdata.password=this.$md5(this.editdata.password),Object(l["j"])(this.editdata).then((function(t){200==t.data.code&&e.$message.info("修改成功")})),this.visibleedit=!1},edit:function(e){this.visibleedit=!0,this.editdata=e,this.editdatatmp=JSON.parse(JSON.stringify(this.editdata)),this.datatmp=JSON.parse(JSON.stringify(this.data))},init:function(){var e=this,t={};t.user=this.user,t.type="hotels",Object(l["d"])(t).then((function(t){e.data=t.data.data}));var a={page:1,limit:1e3},n={};n.params=JSON.stringify(a),Object(c["c"])(n).then((function(t){for(var a=t.data.page.list,n=a.length,r=[],i=0;i<n;i++)-1==a[i].rolename.indexOf("系统")&&-1==a[i].rolename.indexOf("工单")||(a[i].disabled=!0),a[i].value=a[i].roleid,r.push(a[i].roleid);e.rolelist=a,e.rolelistvalue=r}))},canceladd:function(){this.visibleadd=!1},addProvicneUserDialog:function(){this.visibleadd=!0},addhotel:function(){var e=this,t=this.addform.hotelid.filter((function(t){if(t.value==e.hoteltmp.value)return t}));if(!(t.length>0)){var a=JSON.parse(JSON.stringify(this.hoteltmp));this.addform.hotelid.push(a)}},changehotel:function(e,t){this.hoteltmp.value=t[0].value,this.hoteltmp.label=t[0].label},filter:function(e,t){return t.some((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))},onSubmit:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return!1;e.addform.hotelid.length<1?alert("请选择至少一个酒店"):(e.addform.pass=e.$md5(e.addform.pass),e.addform.type="hotels",e.addform.gid=e.user.gid,Object(l["i"])(e.addform).then((function(t){200==t.data.code&&(e.$message.info("添加成功"),e.visibleadd=!1,e.init())})))}))},resetForm:function(){this.$refs.ruleForm.resetFields()}}},p=u,f=(a("aece"),a("0c7c")),m=Object(f["a"])(p,n,r,!1,null,"4f10f306",null),h=m.exports;t["default"]=h},"4fbb":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("1da1"),r=(a("96cf"),a("b775")),i=a("7424");function s(e){return o.apply(this,arguments)}function o(){return o=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(r["e"])(i["CITYDISTRICT"],r["a"].POST,t),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}},aece:function(e,t,a){"use strict";var n=a("0f60"),r=a.n(n);r.a},d378:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return p}));var n=a("1da1"),r=(a("96cf"),a("7424")),i=a("b775");function s(e){return o.apply(this,arguments)}function o(){return o=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(i["e"])(r["SAVEROLE"],i["a"].POST,t),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function l(e){return c.apply(this,arguments)}function c(){return c=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(i["e"])(r["ADDROLE"],i["a"].POST,t),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function d(e){return u.apply(this,arguments)}function u(){return u=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(i["e"])(r["GETROLELIST"],i["a"].POST,t),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(i["e"])(r["DELE"]+t,i["a"].POST),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}}}]);