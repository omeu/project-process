项目总结
=======
系统整体构思
-----------
1. 项目所用技术
    * Node
    * express
    * pug
    * mongodb
    * bootstrap v4.0

2. 项目具有的功能
    1. 面向用户的功能
        * 展示最新售票信息
        * 查询火车票余票信息
        * 网页APP可响应式设计体验

    2. 面向管理员的功能
        + 对换乘时间间隔的设置
        + 自动更新车站地点信息
        + 手动更新车站地点信息
        + 自动更新中转站点信息
        + 手动更新中转站点信息
        + 对出发日期的预设置
        + 公告信息的管理
        + 对系统运行状态的监控

项目设计过程
-----------
  1. 模块划分
      1. 用户视图模块
      2. 逻辑计算路线模块
      3. 管理员模块
  2. 实现相应模块的功能
  3. 测试实现的功能

项目功能模块
----------
  1. 用户视图模块
      * 展示车票查询界面
      * 展示余票信息界面
  2. 逻辑计算路线模块
      + 接收客户端的请求
      + 相应路由处理相应请求
      + 判断请求类型
      + 若为直达类型，则直接通过查询功能返回相应数据
      + 若为中转类型，则调用中转计算控制功能处理，最后返回所需数据
  3. 管理员模块
      - 管理员身份验证
      - 权限控制
      - 车站站点信息的
      - 系统信息的监控

项目安排计划
-----------
  1. 1周完成用户模块的设计，测试（此模块基本完成）
  2. 2-3周完成逻辑计算模块
  3. 1周完成管理员模块

