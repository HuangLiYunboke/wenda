# 答系统项目日志

##  2017年７月２号星期三

### 实现的功能

1. 点赞功能
2. 私有问题回答是否发布
3. 录要用到验证码
4. 跃度的排名
5. 固定页面
6. 关注收藏功能
7. 搜索功能
8. 问题赏金
9. 点击量的统计

姓名 | 实现的页面分工 | 备注
-----|------|-----
黄利云，张琨|登录注册界面，找回密码 |组长 
崔浩然|  主页| 副组长
吴凯园|提问页面|首席技术顾问
刘美红|问题详情页|UI技术顾问
曲健|用户管理界面|工程师



## 数据库

### 页面的相关数据库设计
#### 用户信息
集合名 | 字段名 |类型|是否必填|备注
----|----|-----|--|-----|
登录　|　_id　|obj|是|ID自动生成
用户名　|username |string|是|唯一　手机号
密码|password |string|是|　 
 关注数|follow|numble|否|默认是０
 点赞数|like|numble|否|默认０
 关注人|following|arr|否|默认［］　存用户_id
 提出问题|question|array|否|默认 [] 存问题_id
 回答问题|response|array|否|默认 [] 回答问题_id
 关注的标签名||array|否|默认为空[]
 
 
 ### 问题信息
 集合名 | 字段名 |类型|是否必填|备注
----|----|-----|--|-----|
问题id|　_id　|obj|是|ID自动生成
提问人的姓名|username|string|是|唯一 手机号
提问问题的标题||string|是|
提问内容| questions|string|是|
回答问题id|responseid|Array|否|默认[]
关注数|follow|number|否|默认为0
收藏数||number|否|默认为0
标签名|tag|Array|是|
时间|time|new date|是|创建问题时自动生成


### 回答集合
 集合名 | 字段名 |类型|是否必填|备注
----|----|-----|--|-----|
问题id|　_id　|obj|是|ID自动生成
回答人的姓名|username|string|是|唯一 手机号
回答的内容| questions|string|是|
提问问题id|responseid|string|是|问题的id
关注数|follow|number|否|默认为0
时间|time|new date|是|回答问题时自动生成
是否采纳||number|否|默认为0

### 用到的相关web技术
* node.js
* mongoose
* bootstrap
* Html/css
* Javascript
* jquery




     
     
     
