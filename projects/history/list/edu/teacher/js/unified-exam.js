require.config({urlArgs:"v\x3d"+(new Date).getTime(),paths:{jquery:"libs/jquery-1.9.1.min",bootstrap:"libs/bootstrap-datetimepicker/bootstrap/js/bootstrap.min",boostrapDatePicker:"libs/bootstrap-datetimepicker/bootstrap-datetimepicker.min",scsLinkage:"libs/scsLinkage"},shim:{bootstrap:{deps:["jquery"]},boostrapDatePicker:{deps:["jquery","bootstrap"]}}});require(["jquery","scsLinkage","boostrapDatePicker"],function(a,d){d.scsLinkage();a(".text-dots").each(function(){40<a(this).find(".content").height()?(a(this).addClass("over"),a(this).append('\x3cdiv class\x3d"tooltip"\x3e\x3ci\x3e\x3c/i\x3e'+a(this).text()+"\x3c/div\x3e")):a(this).removeClass("over")});var c={format:"yyyy-mm-dd",autoclose:!0,minuteStep:30,minView:"month",showMeridian:!1,todayBtn:!1,todayHighlight:!1};a("#startTime").datetimepicker(c).on("changeDate",function(b){a("#endTime").datetimepicker("setStartDate",b.date)});a("#endTime").datetimepicker(c).on("changeDate",function(b){a("#startTime").datetimepicker("setEndDate",b.date)})});