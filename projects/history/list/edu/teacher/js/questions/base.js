//textarea自动撑高
$.fn.autoTextarea=function(a){var b={maxHeight:null,minHeight:$(this).height()},c=$.extend({},b,a);return $(this).each(function(){$(this).bind("paste cut keydown keyup focus blur",function(){var a,b=this.style;this.style.height=c.minHeight+"px";this.scrollHeight>c.minHeight&&(c.maxHeight&&this.scrollHeight>c.maxHeight?(a=c.maxHeight,b.overflowY="scroll"):(a=this.scrollHeight,b.overflowY="hidden"),b.height=a+"px")})})};var isLeaveNeedConfirm=function(){var a=!1;$(window).on("beforeunload",function(b){if(a)return"\u79bb\u5f00\u5c06\u4e22\u5931\u672c\u9875\u5df2\u7f16\u8f91\u4fe1\u606f\uff0c\u786e\u5b9a\u8981\u79bb\u5f00\u672c\u9875\u5417\uff1f"});return{set:function(b){a=b}}}();function uuid(){for(var a=[],b=0;36>b;b++)a[b]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);a[14]="4";a[19]="0123456789abcdef".substr(a[19]&3|8,1);a[8]=a[13]=a[18]=a[23]="-";return a.join("")}$("#questionTypeSelect").change(function(){window.location.href=$(this).find("option:selected").data("url")});$(".ques-item textarea").on("keydown",function(a){if(9==a.keyCode){a.preventDefault();a=this.selectionStart;var b=this.selectionEnd,c=window.getSelection().toString(),c="    "+c.replace(/\n/g,"\n    ");this.value=this.value.substring(0,a)+c+this.value.substring(b);this.setSelectionRange(a+4,a+c.length)}});var options='\x3coption value\x3d""\x3e\u5168\u90e8\x3c/option\x3e';$("#subject").change(function(){var a=$(this).val();""==a||"null"==a.toUpperCase()?$("#chapter,#section").val(options):$.ajax({url:"?c\x3dteaquestions\x26m\x3dscs\x26id\x3d"+a,type:"get",dataType:"json",success:function(a){if(200==parseInt(a.code)){$("#section").html(options);var b='\x3coption value\x3d""\x3e\u5168\u90e8\x3c/option\x3e';a.data.forEach(function(a){b+='\x3coption value\x3d"'+a.id+'"\x3e'+a.name+"\x3c/option\x3e"});$("#chapter").html(b)}},error:function(){alert(111)}})});$("#chapter").change(function(){var a=$(this).val();""==a||"null"==a.toUpperCase()?$("#section").val(options):$.ajax({url:"?c\x3dteaquestions\x26m\x3dscs\x26id\x3d"+a,type:"get",dataType:"json",success:function(a){if(200==parseInt(a.code)){var b='\x3coption value\x3d""\x3e\u5168\u90e8\x3c/option\x3e';a.data.forEach(function(a){b+='\x3coption value\x3d"'+a.id+'"\x3e'+a.name+"\x3c/option\x3e"});$("#section").html(b)}}})});var imgViewer=$(".viewer #main").iviewer({src:"#"});$("#imgIn").click(function(){imgViewer.iviewer("zoom_by",-1)});$("#imgOut").click(function(){imgViewer.iviewer("zoom_by",1)});$("#viewerClose").click(function(){$(".img-viewer").fadeOut()});$("body").on("click",".img-uploader .text-c a",function(){var a=$(this).closest(".img-uploader").find("img").attr("src");imgViewer.iviewer("loadImage",a);$(".img-viewer").fadeIn()});function showImgView(a){var b=a.files[0],c=$(a).closest(".img-uploader");if(!/image\/\w+/.test(b.type))return layerMsg("\u4ec5\u652f\u6301jpg,png,bmp,jpeg,png\u683c\u5f0f\u7684\u56fe\u7247\u6587\u4ef6"),a.outerHTML?a.outerHTML=a.outerHTML:a.value="",c.removeClass("uploaded"),!1;if(5242880<b.size)return layerMsg("\u56fe\u7247\u7684\u5927\u5c0f\u9650\u5236\u4e3a5M"),a.outerHTML?a.outerHTML=a.outerHTML:a.value="",c.removeClass("uploaded"),!1;a=new FileReader;a.readAsDataURL(b);a.onload=function(a){c.addClass("uploaded").find("img").attr("src",a.target.result)}}function beautifyCheckbox(a){a.is(":checked")?a.parent().addClass("act"):a.parent().removeClass("act")}$(".checkbox input").each(function(){beautifyCheckbox($(this))});$("body").on("change",".checkbox input",function(){"radio"==$(this).attr("type")&&$(".checkbox").removeClass("act");beautifyCheckbox($(this));setAnswerText()});function setAnswerText(){var a=[];$(".checkbox input:checked").each(function(){a.push($(this).parent().next().text())});$(".ques-item.answer .input-box").text(0==a.length?"\u5c1a\u672a\u8bbe\u7f6e\u6b63\u786e\u7b54\u6848":a.join(" "))}$("body").on("click",".extend-handle-box a",function(){var a=$(this),b=a.closest(".ques-item"),c=a.data("type");if(9<=b.find(".list").length)return layerMsg("\u6bcf\u4e2a\u5355\u5143\u201c\u6e90\u7801\u201d\u548c\u201c\u56fe\u7247\u201d\u5143\u7d20\u6570\u91cf\u4e0d\u53ef\u8d85\u8fc7 10\u4e2a"),!1;var a=a.parent().data("for"),d=0==b.find(".list").length?0:parseInt(b.find(".list").last().data("index"))+1;if("code"==c)c='\x3cdiv class\x3d"list code" data-index\x3d"'+d+'"\x3e\n\t\t\t\t    \t\t\x3clabel\x3e\x3c/label\x3e\n\t\t\t\t    \t\t\x3ctextarea name\x3d"'+a+"[code]["+d+'][source]" data-verify\x3d"required|extendMsg"\x3e\x3c/textarea\x3e\n\t\t\t\t    \t\t\x3cdiv class\x3d"handle reduce"\x3e\x3c/div\x3e\n\t\t\t\t    \t\x3c/div\x3e';else if("img"==c)c='\x3cdiv class\x3d"list img" data-index\x3d"'+d+'"\x3e\n\t\t\t\t\t\t\x3clabel\x3e\x3c/label\x3e\n\t\t\t\t\t\t\x3cdiv class\x3d"img-uploader"\x3e\n\t\t\t\t\t\t\t\x3cdiv class\x3d"upload-box"\x3e\n\t\t\t\t\t\t\t\t\x3cp class\x3d"upload-txt"\x3e\u4e0a\u4f20\u56fe\u7247\x3c/p\x3e\n\t\t\t\t\t\t\t\t\x3cimg src\x3d"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg\x3d\x3d"\x3e\n\t\t\t\t\t\t\t\t\x3cinput onchange\x3d"showImgView(this)" data-verify\x3d"file|extendMsg" accept\x3d"image/gif,image/jpeg,image/jpg,image/png" name\x3d"'+a+"[img]["+d+']" type\x3d"file"\x3e\n\t\t\t\t\t\t\t\x3c/div\x3e\n\t\t\t\t\t\t\t\x3cdiv class\x3d"text-c"\x3e\x3ca href\x3d"javascript:;"\x3e\u67e5\u770b\u5927\u56fe\x3c/a\x3e\x3c/div\x3e\n\t\t\t\t\t\t\t\x3cdiv class\x3d"handle reduce"\x3e\x3c/div\x3e\n\t\t\t\t\t\t\x3c/div\x3e\n\t\t\t\t\t\x3c/div';else return;b.find(".extend-content").append(c);updateItemIndex(b)});function removeQuesExtend(a){var b=a.hasClass("img")?"?c\x3dquestions\x26m\x3ddelimg\x26id\x3d":"?c\x3dquestions\x26m\x3ddelcode\x26id\x3d";a.data("id")?$.ajax({url:b+a.data("id"),type:"get",dataType:"json",success:function(b){if(200!=b.error)return layerMsg(b.msg),!1;a.remove()}}):a.remove()}function updateItemIndex(a){a.find(".list.code").each(function(b){$(this).find("\x3elabel").text(a.find(".form-label").text()+"\u6e90\u7801"+(b+1))});a.find(".list.img").each(function(b){$(this).find("\x3elabel").text(a.find(".form-label").text()+"\u56fe\u7247"+(b+1))})}function showVerifyMsg(a,b){var c=a[0].tagName.toUpperCase();"TEXTAREA"==c&&layerMsg("\u8bf7\u586b\u5199"+b);"SELECT"==c&&layerMsg("\u8bf7\u9009\u62e9"+b);"extendMsg"==b&&layerMsg("\u8bf7\u8f93\u5165\u4ee3\u7801\u6216\u8005\u5220\u9664\u8fd9\u4e2a\u5143\u7d20")}$(".submit-btn").click(function(){var a=!0;$("[data-verify]").each(function(){var b=$(this),c=$(this).data("verify").split("|");if("required"===c[0]&&""===b.val().trim())return showVerifyMsg(b,c[1]),b.focus(),a=!1;if("file"===c[0]&&!b.closest(".img-uploader").hasClass("uploaded"))return layerMsg("\u8bf7\u8f93\u5165\u4ee3\u7801\u6216\u8005\u5220\u9664\u8fd9\u4e2a\u5143\u7d20"),b.focus(),a=!1;if("answer"===c[0]&&0==$(".checkbox input:checked").length)return layerMsg(c[1]),$("body,html").animate({scrollTop:$(".checkbox").eq(0).offset().top-50},0),a=!1});a&&layer.open({type:1,skin:"lq-layer question-layer",move:!1,btnAlign:"c",title:"\u63d0\u793a\u4fe1\u606f",content:'\x3cdiv class\x3d"pt30 text-c fs-16"\x3e\u786e\u8ba4\u5c06\u5f53\u524d\u8bd5\u9898\u63d0\u4ea4\u5ba1\u6838\u4e48\uff1f\x3c/div\x3e',area:["380px","260px"],btn:["\u786e\u8ba4\u63d0\u4ea4\uff0c\u5e76\u7ee7\u7eed\u6dfb\u52a0\u8bd5\u9898","\u786e\u8ba4\u63d0\u4ea4\uff0c\u5e76\u8fd4\u56de\u5217\u8868"],yes:function(){isLeaveNeedConfirm.set(!1);$("form").append('\x3cinput type\x3d"hidden" name\x3d"again" value\x3d"1" /\x3e').submit()},btn2:function(){isLeaveNeedConfirm.set(!1);$("form").append('\x3cinput type\x3d"hidden" name\x3d"again" value\x3d"0" /\x3e').submit()}})});function layerMsg(a){layer.msg(a,{icon:5,anim:6,time:800})}$(function(){$("body").on("click",".list .handle.reduce",function(){removeQuesExtend($(this).closest(".list"));updateItemIndex($(this).closest(".ques.item"))});$("textarea").autoTextarea({maxHeight:400,minHeight:100})});$addOptionWrap=$("#addOptionWrap");function addOption(){var a=$addOptionWrap.find(".ques-item").length;if(1<a)return layerMsg("\u591a\u9009\u9898\u9009\u9879\u6700\u591a\u4e3a6\u9879"),!1;$addOptionWrap.append('\n\t\t\x3cdiv class\x3d"ques-item"\x3e\n\t  \t\t\x3clabel class\x3d"checkbox"\x3e\x3cinput type\x3d"checkbox" name\x3d"answer[]" value\x3d"'+(a+5)+'" /\x3e\x3cspan\x3e\u6b63\u786e\u9009\u9879\x3c/span\x3e\x3c/label\x3e\n\t    \t\x3clabel class\x3d"form-label"\x3e\u9009\u9879'+(a+5)+'\x3c/label\x3e\n\t\t    \x3cdiv class\x3d"input-box"\x3e\n\t\t      \t\x3ctextarea data-verify\x3d"required|\u9009\u9879'+(a+5)+'" name\x3d"option'+(a+5)+'[content]"\x3e\x3c/textarea\x3e\n\t\t    \x3c/div\x3e\n\t\t    \x3cdiv class\x3d"extend-handle-box" data-for\x3d"option'+(a+5)+'"\x3e\n\t\t    \t\x3ca href\x3d"javascript:;" data-type\x3d"code"\x3e+\u6dfb\u52a0\u6e90\u7801\x3c/a\x3e\n\t\t    \t\x3ca href\x3d"javascript:;" data-type\x3d"img"\x3e+\u6dfb\u52a0\u56fe\u7247\x3c/a\x3e\n\t\t    \t\x3ca href\x3d"javascript:;" class\x3d"del" onclick\x3d"delOption(this)"\x3e\u5220\u9664\x3c/a\x3e\n\t\t    \x3c/div\x3e \n\t\t    \x3cdiv class\x3d"extend-content"\x3e\x3c/div\x3e\n\t  \t\x3c/div\x3e\n\t')}function delOption(a){var b=$(a);b.data("id")?$.ajax({url:url+b.data("id"),type:"get",dataType:"json",success:function(a){if(200!=a.error)return layerMsg(a.msg),!1;b.closest(".ques-item").remove();setAnswerText()}}):(b.closest(".ques-item").remove(),setAnswerText())}$("#goList").click(function(){var a=$(this);layer.open({type:1,skin:"lq-layer",move:!1,btnAlign:"c",title:"\u63d0\u793a\u4fe1\u606f",content:'\x3cdiv class\x3d"pt20 text-c"\x3e\u9898\u76ee\u5c1a\u672a\u4fdd\u5b58\uff0c\u786e\u8ba4\u8981\u8fd4\u56de\u4e48\uff1f\x3c/div\x3e',area:["300px","170px"],btn:["\u786e\u5b9a","\u53d6\u6d88"],yes:function(){isLeaveNeedConfirm.set(!1);a.data("href")?window.location.href=a.data("href"):window.location.href="?c\x3dquestions\x26m\x3dlist"}})});