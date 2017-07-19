1.	页面数据获取完成，ajax数据传输代码完成，后台能够得到前端页面的数据。

######	前端ajax代码

```
			$("#sub").click(function(event){
				var oo = $("#input span").text();
				if ( oo === ""){
					alert("请添加标签");
					event.preventDefault();
					return false;
				}
				//获取文输入信息
				var content =  $("#editor-container").text();
				console.log(content);
				//获取title信息
				var title = $("#title").val();
				console.log(title);
				//获取悬赏信息
				var reward = $("#reward").val();
				if (reward){
				}else {
					reward = 0;
				}
				console.log(reward);
				//时间
				var time = new Date();
				var watch = time.getTime();
				//信息聚合
				var con = {
					title : title,
					content : content,
					reward : reward,
					time : time,
					watch : watch,
					tag : arr,
				};
				$.ajax({
					url : "/question",
					data : con,
					type : "post",
					traditional : true
				}).then(function(data,textStatus,jqXHR){
					console.log("success");
					// window.location = "http://127.0.0.1:3000/";
				},function(jqXHR,textStstus,errThrown){
					console.log(textStstus);
				});
			});
```

2.	提问成功之后页面跳转出现问题，后台出现多次提交。
3.	将form表单取消，提交按钮使用a标签进行页面跳转。
4.	数据库模型细节调整，新添字段watch(毫秒时间)、follow(关注人数)、name(登录者)。