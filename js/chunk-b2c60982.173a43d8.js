(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2c60982"],{"377b":function(t,e,n){},"6b25":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"g",(function(){return c})),n.d(e,"e",(function(){return d})),n.d(e,"f",(function(){return f})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return b})),n.d(e,"d",(function(){return g}));var a=n("1da1"),r=(n("96cf"),n("7424")),i=n("b775");function s(t){return o.apply(this,arguments)}function o(){return o=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(i["e"])(r["BYDAYS"],i["a"].POST,e),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}function c(t){return u.apply(this,arguments)}function u(){return u=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(i["e"])(r["TODAYINCREASE"],i["a"].POST,e),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(i["e"])(r["SERVICEPIE"],i["a"].POST,e),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return h=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(i["e"])(r["STAFFSERVICENUM"],i["a"].POST,e),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}function m(t){return p.apply(this,arguments)}function p(){return p=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(i["e"])(r["GETDATAANALYSEFORPIE"],i["a"].POST,e),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function b(t){return y.apply(this,arguments)}function y(){return y=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(i["e"])(r["GETPMSDATE"],i["a"].POST,e),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)}))),y.apply(this,arguments)}function g(t){return v.apply(this,arguments)}function v(){return v=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(i["e"])(r["GETPMSDEVICE"],i["a"].POST,e),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}},9431:function(t,e,n){"use strict";var a=n("377b"),r=n.n(a);r.a},d389:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"search"},[n("div",{staticClass:"labelinput"},[n("label",[t._v("当前酒店：")]),n("a-select",{attrs:{"show-search":"",placeholder:"选择一个酒店","option-filter-prop":"children","filter-option":t.filterOption},on:{focus:t.handleFocus,blur:t.handleBlur,change:t.handleChange},model:{value:t.formfind.hotelid,callback:function(e){t.$set(t.formfind,"hotelid",e)},expression:"formfind.hotelid"}},t._l(t.hotellist,(function(e,a){return n("a-select-option",{key:a,attrs:{value:e.hotelId}},[t._v(" "+t._s(e.hotelCname)+" ")])})),1),n("label",{staticStyle:{"margin-left":"20px"}},[t._v("时间范围：")]),n("a-date-picker",{attrs:{placeholder:"开始日期","disabled-date":t.disabledDatestart},on:{change:t.starttimechange},model:{value:t.formfind.starttime,callback:function(e){t.$set(t.formfind,"starttime",e)},expression:"formfind.starttime"}}),n("a-date-picker",{attrs:{placeholder:"结束日期","disabled-date":t.disabledDate},on:{change:t.endtimechange},model:{value:t.formfind.endtime,callback:function(e){t.$set(t.formfind,"endtime",e)},expression:"formfind.endtime"}})],1),n("div",{staticClass:"today"},[n("div",[t._v("今日新增")]),t._v(" "+t._s(t.todayincrease)),n("span",{staticStyle:{"font-size":"10px"}},[t._v(" 个")])])]),n("br"),n("hr"),t._m(0)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"chartp"},[n("div",{staticClass:"chart",attrs:{id:"myChart"}})]),n("hr"),n("div",{staticClass:"chartp2"},[n("div",{staticClass:"chart2",attrs:{id:"myChart2"}},[t._v("...")]),n("div",{staticClass:"chart3",attrs:{id:"myChart3"}},[t._v("...")])]),n("hr")])}],i=n("5530"),s=(n("b64b"),n("d81d"),n("5880")),o=n("6af2"),c=n("6b25"),u=n("c32d"),d=n.n(u),l={name:"orderStatistics",components:{MyIcon:o["a"]},data:function(){return{threedata:{},optionChinaMap:{},chotelname:"武汉雄楚大道枫渡酒店",serviceJson:{},option:{},formfind:{hotelid:560,starttime:"",endtime:"",starttimeformat:"",endtimeformat:""},todayincrease:100,dataechart:{}}},watch:{checkedKeys:function(t){}},mounted:function(){var t=this;this.dataechart={title:{text:"Main Title",subtext:"Sub Title",left:"center",padding:5,textStyle:{fontSize:26},subtextStyle:{fontSize:14}},grid:{top:"30%"},xAxis:{name:"日期",type:"time"},yAxis:{type:"value"},dataZoom:{start:0,type:"slider"},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}},formatter:function(t){var e=t[0];return e.value[0]+"工单数量："+e.value[1]}},series:[{data:[["2020-09-18",131],["2020-09-19",11]],type:"bar",label:{show:!0,position:"top",distance:20,verticalAlign:"middle",textStyle:{color:"black",fontSize:12}}}]},this.threedata={title:{text:"Main Title",subtext:"Sub Title",left:"center",padding:5,textStyle:{fontSize:26},subtextStyle:{fontSize:14}},grid:{top:"30%"},xAxis:{name:"姓名",type:"category"},yAxis:{type:"value"},dataZoom:{start:0,type:"slider"},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}},formatter:function(t){var e=t[0];return e.value[0]+"工单数量："+e.value[1]}},series:[{data:[["张三",100],["李四",50]],type:"bar",label:{show:!0,position:"top",distance:20,verticalAlign:"middle",textStyle:{color:"black",fontSize:12}}}]},this.initdata(),setTimeout((function(){t.drawLine(),t.drawLine2(),t.drawLine3()}),20)},computed:Object(i["a"])(Object(i["a"])({},Object(s["mapState"])("setting",["pageMinHeight"])),Object(s["mapGetters"])("account",["user","hotellist"])),methods:{starttimechange:function(t){this.formfind.starttime=t.startOf("day"),this.formfind.starttimeformat=this.formatDate(this.formfind.starttime.valueOf()),""==this.formfind.endtime&&(this.formfind.endtime=d()().endOf("day")),this.initdata()},endtimechange:function(t){this.formfind.endtime=t.endOf("day"),this.formfind.endtimeformat=this.formatDate(this.formfind.endtime.valueOf()),this.initdata()},disabledDate:function(t){return t>d()().endOf("day")||t<this.formfind.starttime},disabledDatestart:function(t){return t>d()().endOf("day")},initdata:function(){var t=this;Object(c["g"])(this.formfind).then((function(e){null==e.data.code&&(t.$notification.open({message:"错误",description:e.data}),t.$router.push("/login")),t.todayincrease=e.data.data.todaynum.count})).catch((function(e){t.$notification.open({message:"服务端错误",description:"请刷新界面或重新登陆",style:{color:"red"}})})),Object(c["a"])(this.formfind).then((function(e){for(var n=e.data.data.bydays,a=[],r=[],i=0;i<n.length;i++)r.push(n[i].item),r.push(n[i].count),a.push(r),r=[];t.dataechart.series[0].data=a,t.drawLine()})),Object(c["e"])(this.formfind).then((function(e){for(var n=e.data.data.bydays,a={},r=0;r<n.length;r++)a[n[r].item]=n[r].count;t.drawLine2(a)})),Object(c["f"])(this.formfind).then((function(e){for(var n=e.data.data.bydays,a=[],r=[],i=0;i<n.length;i++)r.push(n[i].item),r.push(n[i].count),a.push(r),r=[];t.threedata.series[0].data=a,t.drawLine3()}))},drawLine:function(){var t=this.$echarts.init(document.getElementById("myChart"));this.dataechart.title.text="客人点单数量统计",this.dataechart.title.subtext=this.chotelname+"近30天服务次数柱状图",""!=this.formfind.starttime&&(this.dataechart.title.subtext=this.chotelname+this.formatDate(this.formfind.starttime)+"到"+this.formatDate(this.formfind.endtime)+"服务次数柱状图"),t.clear(),t.setOption(this.dataechart,!0)},drawLine2:function(t){null==t&&(t={"打扫服务":2991,"送物服务":299,"维修服务":2121,"礼宾服务":673,"续住退房":123}),this.option={tooltip:{},title:[{text:"服务类型使用统计",textStyle:{fontSize:26},subtextStyle:{fontSize:14},subtext:"总计 "+Object.keys(t).reduce((function(e,n){return e+t[n]}),0),left:"50%",textAlign:"center"}],series:[{type:"pie",radius:[0,"70%"],data:Object.keys(t).map((function(e){return{name:e,value:t[e]}}))}]};var e=this.$echarts.init(document.getElementById("myChart2"));e.clear(),e.setOption(this.option,!0)},drawLine3:function(t){var e=this.$echarts.init(document.getElementById("myChart3"));this.threedata.title.text="员工服务次数排名",this.threedata.title.subtext=this.chotelname+"近30天员工服务次数柱状图",""!=this.formfind.starttime&&(this.threedata.title.subtext=this.chotelname+this.formatDate(this.formfind.starttime)+"到"+this.formatDate(this.formfind.endtime)+"员工服务次数柱状图"),e.clear(),e.setOption(this.threedata,!0)},handleChange:function(t){for(var e=this.hotellist,n=e.length,a=0;a<n;a++)e[a].hotelId==t&&(this.chotelname=e[a].hotelCname);this.initdata()},handleBlur:function(){},handleFocus:function(){},filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},formatDate:function(t){t=new Date(t);var e=t.getFullYear()+"-",n=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",a=t.getDate()<10?"0"+t.getDate():t.getDate(),r=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",i=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",s=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return e+n+a+" "+r+i+s}}},f=l,h=(n("9431"),n("0c7c")),m=Object(h["a"])(f,a,r,!1,null,"8a8bd64a",null),p=m.exports;e["default"]=p}}]);