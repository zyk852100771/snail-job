(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b85f358"],{"38b7":function(t,o){var e={jobStatusEnum:{0:{name:"关闭",color:"#9c1f1f"},1:{name:"开启",color:"#f5a22d"}},taskType:{1:{name:"集群模式",color:"#d06892"},2:{name:"广播模式",color:"#f5a22d"},3:{name:"分片模式",color:"#e1f52d"}},triggerType:{1:{name:"CRON表达式",color:"#d06892"},2:{name:"固定时间",color:"#f5a22d"},3:{name:"工作流",color:"#76f52d"}},blockStrategy:{1:{name:"丢弃策略",color:"#d06892"},2:{name:"覆盖",color:"#f5a22d"},3:{name:"并行",color:"#e1f52d"}},executorType:{1:{name:"Java",color:"#d06892"}},routeKey:{4:{name:"轮询",color:"#8f68d2"},1:{name:"一致性Hash",color:"#d06892"},2:{name:"随机",color:"#f5a22d"},3:{name:"LRU",color:"#e1f52d"}},taskBatchStatus:{1:{name:"待处理",color:"#64a6ea"},2:{name:"运行中",color:"#1b7ee5"},3:{name:"成功",color:"#087da1"},4:{name:"失败",color:"#f52d80"},5:{name:"停止",color:"#ac2df5"},6:{name:"取消",color:"#f5732d"}},operationReason:{0:{name:""},1:{name:"执行超时",color:"#64a6ea"},2:{name:"无客户端节点",color:"#1b7ee5"},3:{name:"任务已关闭",color:"#087da1"},4:{name:"任务丢弃",color:"#3a2f81"},5:{name:"任务被覆盖",color:"#c2238a"},6:{name:"无可执行任务项",color:"#23c28a"},7:{name:"任务执行期间发生非预期异常",color:"#bdc223"},8:{name:"手动停止",color:"#23c28a"}},taskStatus:{2:{name:"运行中",color:"#1b7ee5"},3:{name:"成功",color:"#087da1"},4:{name:"失败",color:"#f52d80"},5:{name:"停止",color:"#ac2df5"}},notifyScene:{1:{name:"任务执行失败",color:"#d06892"}},notifyType:{1:{name:"钉钉通知",color:"#64a6ea"},2:{name:"邮箱通知",color:"#1b7ee5"},3:{name:"企业微信",color:"#0082EF"},4:{name:"飞书",color:"#087da1"}},notifyStatus:{0:{name:"停用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},rateLimiterStatus:{0:{name:"未启用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},workflowStatus:{0:{name:"关闭",color:"#9c1f1f"},1:{name:"开启",color:"#f5a22d"}}};t.exports=e},"3b7a":function(t,o,e){"use strict";e.d(o,"z",(function(){return n})),e.d(o,"p",(function(){return c})),e.d(o,"s",(function(){return u})),e.d(o,"b",(function(){return i})),e.d(o,"w",(function(){return s})),e.d(o,"x",(function(){return l})),e.d(o,"y",(function(){return b})),e.d(o,"r",(function(){return f})),e.d(o,"o",(function(){return d})),e.d(o,"j",(function(){return m})),e.d(o,"q",(function(){return p})),e.d(o,"a",(function(){return j})),e.d(o,"v",(function(){return g})),e.d(o,"i",(function(){return y})),e.d(o,"l",(function(){return h})),e.d(o,"h",(function(){return w})),e.d(o,"g",(function(){return k})),e.d(o,"f",(function(){return _})),e.d(o,"d",(function(){return v})),e.d(o,"c",(function(){return I})),e.d(o,"m",(function(){return O})),e.d(o,"t",(function(){return S})),e.d(o,"k",(function(){return T})),e.d(o,"e",(function(){return L})),e.d(o,"n",(function(){return J})),e.d(o,"u",(function(){return N}));var r=e("b775"),a={jobPageList:"/job/page/list",jobList:"/job/list",jobDetail:"/job/",saveJob:"/job/",updateJob:"/job/",updateJobStatus:"/job/status",delJob:"/job/",timeByCron:"/job/cron",jobNameList:"/job/job-name/list",triggerJob:"/job/trigger/",jobBatchList:"/job/batch/list",jobBatchDetail:"/job/batch/",stop:"/job/batch/stop/",jobNotifyConfigPageList:"/job/notify/config/page/list",jobNotifyConfigDetail:"/job/notify/config/",saveJobNotify:"/job/notify/config/",updateJobNotify:"/job/notify/config/",jobTaskList:"/job/task/list",jobLogList:"/job/log/list",workflowListPage:"/workflow/page/list",saveWorkflow:"/workflow",updateWorkflow:"/workflow",workflowDetail:"/workflow",workflowBatchListPage:"/workflow/batch/page/list",workflowBatchDetail:"/workflow/batch/",updateStatus:"/workflow/update/status/",delWorkflow:"/workflow/",triggerWorkflow:"/workflow/trigger/",stopWorkflowBatch:"/workflow/batch/stop/",workflowNameList:"/workflow/workflow-name/list"};function n(t){return Object(r["b"])({url:a.workflowNameList,method:"get",params:t})}function c(t){return Object(r["b"])({url:a.stopWorkflowBatch+t,method:"post"})}function u(t){return Object(r["b"])({url:a.triggerWorkflow+t,method:"post"})}function i(t){return Object(r["b"])({url:a.delWorkflow+t,method:"delete"})}function s(t){return Object(r["b"])({url:a.updateStatus+t,method:"put"})}function l(t){return Object(r["b"])({url:a.workflowBatchListPage,method:"get",params:t})}function b(t){return Object(r["b"])({url:a.workflowListPage,method:"get",params:t})}function f(t){return Object(r["b"])({url:a.triggerJob+t,method:"post"})}function d(t){return Object(r["b"])({url:a.stop+t,method:"post"})}function m(t){return Object(r["b"])({url:a.jobNameList,method:"get",params:t})}function p(t){return Object(r["b"])({url:a.timeByCron,method:"get",params:t})}function j(t){return Object(r["b"])({url:a.delJob+t,method:"delete"})}function g(t){return Object(r["b"])({url:a.updateJobStatus,method:"put",data:t})}function y(t){return Object(r["b"])({url:a.jobLogList,method:"get",params:t})}function h(t){return Object(r["b"])({url:a.jobTaskList,method:"get",params:t})}function w(t){return Object(r["b"])({url:a.jobBatchList,method:"get",params:t})}function k(t){return Object(r["b"])({url:a.jobBatchDetail+t,method:"get"})}function _(t){return Object(r["b"])({url:a.jobPageList,method:"get",params:t})}function v(t){return Object(r["b"])({url:a.jobList,method:"get",params:t})}function I(t){return Object(r["b"])({url:a.jobDetail+t,method:"get"})}function O(t){return Object(r["b"])({url:a.saveJob,method:"post",data:t})}function S(t){return Object(r["b"])({url:a.updateJob,method:"put",data:t})}function T(t){return Object(r["b"])({url:a.jobNotifyConfigPageList,method:"get",params:t})}function L(t){return Object(r["b"])({url:a.jobNotifyConfigDetail+t,method:"get"})}function J(t){return Object(r["b"])({url:a.saveJobNotify,method:"post",data:t})}function N(t){return Object(r["b"])({url:a.updateJobNotify,method:"put",data:t})}},6289:function(t,o,e){"use strict";e.r(o);e("ac1f"),e("5319"),e("b0c0"),e("a15b"),e("d81d"),e("b64b"),e("99af");var r=function(){var t=this,o=t._self._c;return o("div",[t.showHeader?o("page-header-wrapper",{staticStyle:{margin:"-24px -1px 0"},on:{back:function(){return t.$router.replace("/job/list")}}},[o("div")]):t._e(),null!==t.jobInfo?o("a-card",{attrs:{bordered:!1}},[o("a-descriptions",{attrs:{title:"",column:t.column,bordered:""}},[o("a-descriptions-item",{attrs:{label:"组名称"}},[t._v(" "+t._s(t.jobInfo.groupName)+" ")]),o("a-descriptions-item",{attrs:{label:"任务名称"}},[t._v(" "+t._s(t.jobInfo.jobName)+" ")]),o("a-descriptions-item",{attrs:{label:"重试状态"}},[o("a-tag",{attrs:{color:t.jobStatusEnum[t.jobInfo.jobStatus].color}},[t._v(" "+t._s(t.jobStatusEnum[t.jobInfo.jobStatus].name)+" ")])],1),o("a-descriptions-item",{attrs:{label:"路由策略"}},[o("a-tag",{attrs:{color:t.routeKey[t.jobInfo.routeKey].color}},[t._v(" "+t._s(t.routeKey[t.jobInfo.routeKey].name)+" ")])],1),o("a-descriptions-item",{attrs:{label:"阻塞策略"}},[o("a-tag",{attrs:{color:t.blockStrategy[t.jobInfo.blockStrategy].color}},[t._v(" "+t._s(t.blockStrategy[t.jobInfo.blockStrategy].name)+" ")])],1),o("a-descriptions-item",{attrs:{label:"并行数"}},[t._v(" "+t._s(t.jobInfo.parallelNum)+" ")]),o("a-descriptions-item",{attrs:{label:"最大重试次数"}},[t._v(" "+t._s(t.jobInfo.maxRetryTimes)+"次 ")]),o("a-descriptions-item",{attrs:{label:"重试间隔"}},[t._v(" "+t._s(t.jobInfo.retryInterval)+"(秒) ")]),o("a-descriptions-item",{attrs:{label:"超时时间"}},[t._v(" "+t._s(t.jobInfo.executorTimeout)+"(秒) ")]),o("a-descriptions-item",{attrs:{label:"下次触发时间"}},[t._v(" "+t._s(t.jobInfo.nextTriggerAt)+" ")]),o("a-descriptions-item",{attrs:{label:"更新时间",span:"4"}},[t._v(" "+t._s(t.jobInfo.updateDt)+" ")]),o("a-descriptions-item",{attrs:{label:"触发类型",span:"1"}},[o("a-tag",{attrs:{color:t.triggerType[t.jobInfo.triggerType].color}},[t._v(" "+t._s(t.triggerType[t.jobInfo.triggerType].name)+" ")])],1),o("a-descriptions-item",{attrs:{label:"间隔时长",span:"4"}},[t._v(" "+t._s(t.jobInfo.triggerInterval)+" ")]),o("a-descriptions-item",{attrs:{label:"执行器类型"}},[o("a-tag",{attrs:{color:t.executorType[t.jobInfo.executorType].color}},[t._v(" "+t._s(t.executorType[t.jobInfo.executorType].name)+" ")])],1),o("a-descriptions-item",{attrs:{label:"执行器名称",span:"4"}},[t._v(" "+t._s(t.jobInfo.executorInfo)+" ")]),o("a-descriptions-item",{attrs:{label:"任务类型"}},[o("a-tag",{attrs:{color:t.taskType[t.jobInfo.taskType].color}},[t._v(" "+t._s(t.taskType[t.jobInfo.taskType].name)+" ")])],1),o("a-descriptions-item",{attrs:{label:"参数",span:"4"}},[t._v(" "+t._s(3===t.jobInfo.taskType?JSON.parse(t.jobInfo.argsStr).map((function(t,o){return"分区:".concat(o,"=>").concat(t)})).join("; "):t.jobInfo.argsStr)+" ")]),o("a-descriptions-item",{attrs:{label:"描述",span:"4"}},[t._v(" "+t._s(t.jobInfo.extAttrs)+" ")])],1)],1):t._e()],1)},a=[],n=(e("a9e3"),e("3b7a")),c=e("c1df"),u=e.n(c),i=e("38b7"),s=e.n(i),l={name:"JobInfo",components:{},props:{showHeader:{type:Boolean,default:!0},column:{type:Number,default:4}},data:function(){return{jobInfo:null,jobStatusEnum:s.a.jobStatusEnum,taskType:s.a.taskType,triggerType:s.a.triggerType,blockStrategy:s.a.blockStrategy,executorType:s.a.executorType,routeKey:s.a.routeKey}},created:function(){var t=this.$route.query.id,o=this.$route.query.groupName;t&&o?this.jobDetail(t):this.showHeader&&this.$router.push({path:"/404"})},methods:{parseDate:function(t){return u()(t).format("YYYY-MM-DD HH:mm:ss")},jobDetail:function(t){var o=this;Object(n["c"])(t).then((function(t){o.jobInfo=t.data}))}}},b=l,f=e("2877"),d=Object(f["a"])(b,r,a,!1,null,"0689f75f",null);o["default"]=d.exports}}]);