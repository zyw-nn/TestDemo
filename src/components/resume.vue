<template>
  <div class="body">
    <h1>个人信息</h1>
    <ul>
      <li><font size=5>曾义文/男/1994 </font></li>
      <li><font size=5>本科/<strong>南昌大学</strong>软件工程专业（2013-1017）</font></li>
      <li><font size=5>工作年限：2年</font></li>
      <li><font size=5> 技术博客：https://blog.csdn.net/a791123503</font></li>
      <li><font size=5>期望职位：JAVA 后端开发工程师，JAVA架构师</font></li>
      <li><font size=5>期望城市：武汉</font></li>
    </ul>
    <hr />
    <h1>联系方式</h1>
    <ul>
      <li><font size=5>手机：17612002851</font></li>
      <li><font size=5>Email：zengyiwen123@163.com </font></li>
      <li><font size=5>QQ：791123503</font></li>
    </ul>
    <hr />
    <h1>工作经历</h1>
    <h2><strong>广州江南科友科技股份有限公司 （ 2017年7月 ~ 至今 ）</strong></h2>
    <h2>特权帐户管理系统</h2>
    <p><font size=4>
      我在此项目中负责弱密码检测、VM资源扫描、对接中间件以及对外restful接口几个模块。
      其中为了实现java调用C实现的接口时，使用JNI，套用“适配器”这一设计模式，实现java代码与C代码之间的通信；同时也试验了一下用网络通信的方式去调用，在处理单一请求时，JNI耗时时毫秒级的，但网络通信方式需要1-2s（其中包括对xml的解析与封装）。
      其次就是在对接中间件（weblogic、tomcat、websphere）这一模块时，为了解决websphere改密功能在高并发时引发的内存溢出问题，将最初的“一请求一线程”方式改成了线程池和消息队列结合的“伪异步”方式，将请求分批次排队处理，保证了程序的稳定性，解决了用户现场的燃眉之急，得到了客户的好评。
    </font></p>
    <h2>敏感信息保护系统</h2>
    <p><font size=4>
      我在此项目中负责项目框架的搭建、数据库的设计、项目SDK的编写及规范文档的编写。
      其中在设计项目架构时遇到的挑战最大，为了在最上层完成有效性校验、日志记录减少其余模块的工作量，先使用了map数据结构，将各个字段有效性校验（必填、非空、数据类型校验等）规则以map结构定义在json文件中，通过
      解析json文件来实现最外层的有效性校验，后来又引入了hibernate的validation来处理，两者相结合，实现了全覆盖的校验。两者比较，前者可以在最外层解决有效性校验，校验规则也更为灵活，并且前后端都可通用，但是代码量大；后者需要在model层实现，代码量小并且专注于后端校验，易读性高，但是对于同一实体的不同情况的校验规则处理比较僵硬。在开发过程中，前后端的同事都表示减少了很多工作量，并且管理起来更方便。
      在项目数据库的设计中，为了提高sql执行效率，减少数据冗余，在设计数据表时，采用第三范式，杜绝各个字段之间的传递依赖；在处理一条记录关联多个状态的问题时，使用二进制位方式，每个位置代表一种状态，多个位置代表多种状态，在存储的时候就转化为int处理，减少表的宽度。
    </font></p>
    <h2>特权帐户管理系统重构（C转java）</h2>
    <p><font size=4>
      我在这个项目中负责项目框架的搭建，带领我的小组完成用户管理模块的前后台开发。
      在搭建框架的过程中，最大的困扰就是用户角色权限校验这一块了，如果在用户每次访问时都去查一遍数据库的话，耗时太高，在数据量大的时候还会造成卡顿现象，影响用户体验。为了解决这个问题，我使用了shiro安全框架和redis，将用户的角色权限信息存放到redis缓存中去，在用户每次登录或权限发生变更时将数据库中信息加载进redis。同时也实现了会话管理，提供了对session整个生命周期的监听，便于系统进行安全审计的相关操作，与系统核心完美契合。
    </font></p>
    <h2><strong>其他类项目</strong></h2>
    <h2>Android人脸识别 （2016.08-2016.10）</h2>
    <p><font size=4>
      我在这个项目中负责年龄预测功能的开发。通过对人脸各部位的纹理进行判断，预测年龄。<br />
      技术要点：<br />
      - 图像灰度化<br />
      - 线性插值法，在不失真的情况下实现对图片的缩放<br />
      - 局部二值模式特征提取<br />
    </font></p>
    <hr />
    <h1>技术文章</h1>
    <p><font size=4>
      <a href="https://blog.csdn.net/a791123503/article/details/53091362" title="ArrayList、LinkedList、Vector、Stack的区别">ArrayList、LinkedList、Vector、Stack的区别</a>
    </font></p>
    <hr />
    <h1>技能清单</h1>
    <p>以下均为我熟练使用的技能</p>
    <ul>
      <li>后端开发：Java/Springboot/Mybatis</li>
      <li>Web开发：VUE/Javascript/JQuery</li>
      <li>数据库相关：MySQL/Oracle/Redis</li>
      <li>版本管理工具：Svn/Git/Markdown</li>
      <li>中间件：weblogic/websphere/tomcat/微信应用开发</li>
    </ul>
    <hr />
    <h1>致谢</h1>
    <p><font size=4><strong>感谢您花时间阅读我的简历，期待能有机会和您共事。</strong></font></p>
  </div>
</template>

<script>
export default {
  name: 'resume',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .body {
    align-text: left;
    font-family: Helvetica, arial, freesans, clean, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
    padding: 20px;
    max-width: 960px;
    margin: 0 auto;
  }
  ul, ol {
    padding-left: 30px;
    list-style-type: none;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 20px 0 10px;
    padding: 0;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
  }
  hr{
    clear: both;
    margin: 15px 0;
    height: 0px;
    overflow: hidden;
    border: none;
    background: transparent;
    border-bottom: 4px solid #ddd;
    padding: 0;
  }
</style>
