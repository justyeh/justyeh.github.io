require.config({urlArgs:"v\x3d"+(new Date).getTime(),paths:{jquery:"../libs/jquery-1.9.1.min",common:"../libs/common",easyModal:"../libs/jquery.easyModal",easyForm:"../libs/jquery.easyForm"},shim:{easyModal:["jquery"],easyForm:["jquery"]}});require(["jquery","common","easyModal","easyForm"],function(a,e){function c(b,c){var d="";switch(b){case "del":d="?c\x3donline\x26m\x3ddelegate";break;case "post":d="?c\x3donline\x26m\x3drelease";break;case "cancel":d="?c\x3donline\x26m\x3dcancel"}a.ajax({url:d,method:"post",dataType:"json",data:{data:c},success:function(a){if(200!=a.error)return e.msgModal("alert","\u9519\u8bef",a.msg),!1;e.msgModal("success","\u6210\u529f","\u64cd\u4f5c\u6210\u529f",1E3,function(){window.location.reload()})}})}a(function(){a(".checkbox").easyForm("checkbox");a(".filter button[data-handle]").click(function(){var b=[];a("tbody input:checked").each(function(){b.push(a(this).val())});if(0==b.length)return e.msgModal("info","\u8b66\u544a","\u81f3\u5c11\u9700\u8981\u9009\u62e9\u4e00\u4e2a\u6761\u76ee\u624d\u80fd\u8fdb\u884c\u64cd\u4f5c"),!1;c(a(this).data("handle"),b)});a("td a[data-id]").click(function(){c("del",[a(this).data("id")+""])})})});