(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d843c044"],{"26cb":function(t,e,s){},2742:function(t,e,s){"use strict";var a=s("acb7"),o=s.n(a);o.a},"6d14":function(t,e,s){"use strict";var a=s("26cb"),o=s.n(a);o.a},"80c1":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("common-layout",[a("div",{staticClass:"top"},[a("div",{staticClass:"header"},[a("img",{staticClass:"logo",attrs:{alt:"logo",src:s("4ffd")}}),a("span",{staticClass:"title"},[t._v(t._s(t.systemName))])]),a("div",{staticClass:"desc"},[t._v("简易版")])]),a("div",{staticClass:"login"},[a("a-form",{attrs:{form:t.form},on:{submit:t.onSubmit}},[a("a-tabs",{staticStyle:{padding:"0 2px"},attrs:{size:"large",tabBarStyle:{textAlign:"center"}}},[a("a-tab-pane",{key:"1",attrs:{tab:"账户密码登录"}},[t.error?a("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{type:"error",closable:!0,message:t.error,showIcon:""},on:{close:t.onClose}}):t._e(),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入账户名",whitespace:!0}]}],expression:"['name', {rules: [{ required: true, message: '请输入账户名', whitespace: true}]}]"}],attrs:{autocomplete:"autocomplete",size:"large",placeholder:"admin"}},[a("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码",whitespace:!0}]}],expression:"['password', {rules: [{ required: true, message: '请输入密码', whitespace: true}]}]"}],attrs:{size:"large",placeholder:"888888",autocomplete:"autocomplete",type:"password"}},[a("a-icon",{attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1)],1)],1),a("div",[a("a-checkbox",{attrs:{checked:!0}},[t._v("自动登录")])],1),a("a-form-item",[a("a-button",{staticStyle:{width:"100%","margin-top":"24px"},attrs:{loading:t.logging,size:"large",htmlType:"submit",type:"primary"}},[t._v("登录")])],1)],1)],1)])},o=[],r=s("5530"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"common-layout"},[s("div",{staticClass:"content"},[t._t("default")],2),s("page-footer",{attrs:{"link-list":t.footerLinks,copyright:t.copyright}})],1)},n=[],c=s("613e"),l=s("5880"),m={name:"CommonLayout",components:{PageFooter:c["a"]},computed:Object(r["a"])({},Object(l["mapState"])("setting",["footerLinks","copyright"]))},u=m,d=(s("6d14"),s("0c7c")),p=Object(d["a"])(u,i,n,!1,null,"1c265f57",null),f=p.exports,g=s("93d6"),h=s("b775"),b=s("89a5"),v={name:"Login",components:{CommonLayout:f},data:function(){return{logging:!1,error:"",form:this.$form.createForm(this)}},computed:{systemName:function(){return this.$store.state.setting.systemName}},methods:Object(r["a"])(Object(r["a"])({},Object(l["mapMutations"])("account",["setUser","setPermissions","setRoles","sethotellist"])),{},{onSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t){if(!t){e.logging=!0;var s=e.form.getFieldValue("name"),a=e.$md5(e.form.getFieldValue("password"));Object(g["g"])(s,a).then((function(t){e.afterLogin(t)})).catch((function(t){e.error=t.response.data.msg}))}}))},afterLogin:function(t){this.logging=!1;var e=t.data;if(200==e.code){this.setUser(t.data.user),this.sethotellist(t.data.chotel),Object(h["f"])({token:t.data.token,expireAt:30});var s=[];s.push(t.data.menu),Object(b["d"])(s),this.$router.push("/Statistics/orderStatistics"),this.$message.success(e.msg,3)}else this.error=e.msg},onClose:function(){this.error=!1}})},y=v,w=(s("2742"),Object(d["a"])(y,a,o,!1,null,"db60f388",null)),x=w.exports;e["default"]=x},acb7:function(t,e,s){}}]);