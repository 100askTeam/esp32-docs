import{_ as t,r as i,o as r,c as h,a,b as o,d as s,w as n,e as p}from"./app-25465c35.js";const d={},c=a("h1",{id:"运行第一个程序-hello-world",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#运行第一个程序-hello-world","aria-hidden":"true"},"#"),o(" 运行第一个程序(Hello world!)")],-1),_=p('<blockquote><p>我们存放学习资料的路径不要有中文及中文字符和其他特殊字符，建议路径全都是英文+阿拉伯数字+英文标点符号(其中不要使用英文符号<code>(</code> 和 <code>)</code> )。 否则会出现一些意想不到的问题，这都是不必要可以提前避免的问题。</p></blockquote><blockquote><p>如果使用的是 windows 系统，要注意路径长度问题。在编译某些工程可能会编译不过，这时候首先考虑是否路径过长导致的，建议将整个资料包移动到磁盘根目录之后，清除(Full Clean)之后再重新编译。</p></blockquote><h2 id="windows平台" tabindex="-1"><a class="header-anchor" href="#windows平台" aria-hidden="true">#</a> Windows平台</h2><p>笔者在 windows 系统中，将资料存放在了 <code>D:\\100ask\\esp32</code> ，路径中没有中文及中文字符和其他特殊字符以及符号<code>(</code> 和 <code>)</code>：</p><p><img src="https://photos.100ask.net/esp32-docs/DShanMCU-Mio/Arduino/chapter4/DShanMCU-Mio_Arduino_chapter4-1_images_001.jpg" alt="DShanMCU-Mio_Arduino_chapter4-1_images_001"></p><p>然后进入到下面所示的目录，按照提示解压压缩包：</p><p><img src="https://photos.100ask.net/esp32-docs/DShanMCU-Mio/Arduino/chapter4/DShanMCU-Mio_Arduino_chapter4-1_images_002.jpg" alt="DShanMCU-Mio_Arduino_chapter4-1_images_002"></p><h3 id="打开示例工程" tabindex="-1"><a class="header-anchor" href="#打开示例工程" aria-hidden="true">#</a> 打开示例工程</h3><p>首先，我们打开资料中的示例代码：</p><p><img src="https://photos.100ask.net/esp32-docs/DShanMCU-Mio/Arduino/chapter4/DShanMCU-Mio_Arduino_chapter4-1_images_003.jpg" alt="DShanMCU-Mio_Arduino_chapter4-1_images_003"></p><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4><p>然后，按照下图在 Arduino IDE 进行一些配置：</p><ol><li>选择在 <code>Tools-&gt;Board-&gt;ESP32 Arduino(inSketchbook)</code> 中选择 <code>ESP32S3 Dev Module</code></li></ol><p><img src="https://photos.100ask.net/esp32-docs/DShanMCU-Mio/Arduino/chapter4/DShanMCU-Mio_Arduino_chapter4-1_images_004.jpg" alt="DShanMCU-Mio_Arduino_chapter4-1_images_004"></p><ol start="2"><li>然后在 <code>Tools-&gt;Port</code> 中选择中选择你的板子的串口(COM)号：</li></ol><p><img src="https://photos.100ask.net/esp32-docs/DShanMCU-Mio/Arduino/chapter4/DShanMCU-Mio_Arduino_chapter4-1_images_005.jpg" alt="DShanMCU-Mio_Arduino_chapter4-1_images_005"></p><p>这样我们在 Arduino IDE中就能看到我们刚才的选择：</p><p><img src="https://photos.100ask.net/esp32-docs/DShanMCU-Mio/Arduino/chapter4/DShanMCU-Mio_Arduino_chapter4-1_images_006.jpg" alt="DShanMCU-Mio_Arduino_chapter4-1_images_006"></p><ol start="3"><li>我们再进行一些细节配置，按照上面两步操作之后我们能看到菜单栏中 <code>Tools</code> 选项多出来了很多选项，大部分选项我们保持默认选择，我们只需要配置下面这几个即可：</li></ol><p>根据自己板子的配置选择对应的 <strong>Flash Size</strong>，DShan-ESP-S3 提供这三种配置的选购：</p><p><img src="https://photos.100ask.net/esp32-docs/DShanMCU-Mio/Arduino/chapter4/DShanMCU-Mio_Arduino_chapter4-1_images_007.jpg" alt="DShanMCU-Mio_Arduino_chapter4-1_images_007"></p><p><code>PSRAM</code> 默认是 <em>Disabled</em> 我们选择为 <code>OPI PSRAM</code></p><p><img src="https://photos.100ask.net/esp32-docs/DShanMCU-Mio/Arduino/chapter4/DShanMCU-Mio_Arduino_chapter4-1_images_008.jpg" alt="DShanMCU-Mio_Arduino_chapter4-1_images_008"></p><h4 id="编译烧写" tabindex="-1"><a class="header-anchor" href="#编译烧写" aria-hidden="true">#</a> 编译烧写</h4><p>最后，我们点击烧录按钮，等待编译并烧写完成：</p><p><img src="https://photos.100ask.net/esp32-docs/DShanMCU-Mio/Arduino/chapter4/DShanMCU-Mio_Arduino_chapter4-1_images_009.jpg" alt="DShanMCU-Mio_Arduino_chapter4-1_images_009"></p><blockquote><p>点击上图指示的按钮是 <strong>编译+烧写</strong> 也就是说在编译通过之后会直接烧写。你也可以分开两步进行：上图指示按钮的左边是一个 <code>√</code> 勾勾的按钮，点击这个是编译验证，但是不会执行烧写操作，验证通过之后再点击上图指示的按钮进行烧写。</p></blockquote><h4 id="打开串口监视器查看运行现象" tabindex="-1"><a class="header-anchor" href="#打开串口监视器查看运行现象" aria-hidden="true">#</a> 打开串口监视器查看运行现象</h4><p>编译并烧写完成之后，我们点击右上角的 <strong>串口监视器</strong> 查看串口输出的内容：</p><p><img src="https://photos.100ask.net/esp32-docs/DShanMCU-Mio/Arduino/chapter4/DShanMCU-Mio_Arduino_chapter4-1_images_010.jpg" alt="DShanMCU-Mio_Arduino_chapter4-1_images_010"></p><p>可以看到串口监视器每隔 1s 会输出一次信息：</p><p><img src="https://photos.100ask.net/esp32-docs/DShanMCU-Mio/Arduino/chapter4/DShanMCU-Mio_Arduino_chapter4-1_images_011.jpg" alt="DShanMCU-Mio_Arduino_chapter4-1_images_011"></p><h2 id="ubuntu平台" tabindex="-1"><a class="header-anchor" href="#ubuntu平台" aria-hidden="true">#</a> Ubuntu平台</h2><p>待续...</p><h2 id="mac平台" tabindex="-1"><a class="header-anchor" href="#mac平台" aria-hidden="true">#</a> MAC平台</h2><p>待续...</p>',36);function M(u,l){const e=i("RouterLink");return r(),h("div",null,[c,a("p",null,[o("在 "),s(e,{to:"/zh/DShanMCU-Mio/Arduino/DShanMCU-Mio/Arduino/chapter2-1.html"},{default:n(()=>[o("第二章 快速搭建开发环境")]),_:1}),o(" 中已经获取了我们的学习资料，在使用这一份资料之前这里再强调一次：")]),_])}const m=t(d,[["render",M],["__file","chapter4-1.html.vue"]]);export{m as default};