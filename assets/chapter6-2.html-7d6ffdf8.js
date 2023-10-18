import{_ as t,r as p,o as i,c,a as n,b as s,d as e,e as l}from"./app-25465c35.js";const o={},d=n("h1",{id:"_3-52寸墨水屏-spi、无触摸",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-52寸墨水屏-spi、无触摸","aria-hidden":"true"},"#"),s(" 3.52寸墨水屏(SPI、无触摸)")],-1),u={href:"https://item.taobao.com/item.htm?id=683875901407",target:"_blank",rel:"noopener noreferrer"},r=n("h2",{id:"硬件准备",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#硬件准备","aria-hidden":"true"},"#"),s(" 硬件准备")],-1),m={href:"https://item.taobao.com/item.htm?id=683875901407",target:"_blank",rel:"noopener noreferrer"},_={href:"https://item.taobao.com/item.htm?id=683875901407",target:"_blank",rel:"noopener noreferrer"},k=l(`<h3 id="接线" tabindex="-1"><a class="header-anchor" href="#接线" aria-hidden="true">#</a> 接线</h3><p>屏幕模块的一端是防呆接口，将配套的排线接入到屏幕这边之后，另一端按照下图的说明进行接线：</p><table><thead><tr><th>E-paper display Pin</th><th>SPI pin</th><th>DShanMCU-Mio pin</th><th>Notes</th></tr></thead><tbody><tr><td>BUSY</td><td></td><td>GPIO7</td><td>获取屏幕状态(繁忙/空闲)</td></tr><tr><td>RESET</td><td></td><td>GPIO6</td><td></td></tr><tr><td>D/C</td><td></td><td>GPIO5</td><td></td></tr><tr><td>CS</td><td>CS</td><td>GPIO10</td><td></td></tr><tr><td>SCLK</td><td>SCK</td><td>GPIO12</td><td></td></tr><tr><td>SDI</td><td>MOSI</td><td>GPIO11</td><td></td></tr><tr><td>GND</td><td></td><td>GND</td><td></td></tr><tr><td>VCC</td><td></td><td>3.3V</td><td></td></tr></tbody></table><h3 id="屏幕资料" tabindex="-1"><a class="header-anchor" href="#屏幕资料" aria-hidden="true">#</a> 屏幕资料</h3><p>屏幕对应规格书位置： <code>DShanMCU-Mio_ESP-IDF_Data\\06_技术手册\\3.52寸墨水屏规格书\\百问网3.52寸墨水屏规格书.pdf</code></p><h2 id="软件准备" tabindex="-1"><a class="header-anchor" href="#软件准备" aria-hidden="true">#</a> 软件准备</h2><p>本次实验的项目代码位于： <code>DShanMCU-Mio_ESP-IDF_Data\\02_examples\\esp-idf-learn\\05_display\\E-paper\\epd-240x360\\00_epd_simple_test</code></p><blockquote><p>注意，不要将项目代码移动到其他地方，否则编译会报错。后续实验也请保持原有的目录结构进行学习，不要移动项目代码的位置。</p></blockquote><h2 id="打开项目工程" tabindex="-1"><a class="header-anchor" href="#打开项目工程" aria-hidden="true">#</a> 打开项目工程</h2><p>通过 vscode 或 终端控制台打开项目工程目录，以便进行后续操作。</p><h2 id="关键代码解读" tabindex="-1"><a class="header-anchor" href="#关键代码解读" aria-hidden="true">#</a> 关键代码解读</h2><p>屏幕配套的驱动库有两个：</p><ul><li>屏幕驱动库： <code>DShanMCU-Mio_ESP-IDF_Data\\02_examples\\esp-idf-learn\\00_components\\esp-idf-components\\epd_100ask_drivers</code></li><li>画布库： <code>DShanMCU-Mio_ESP-IDF_Data\\02_examples\\esp-idf-learn\\00_components\\esp-idf-components\\epd_100ask_paint</code></li></ul><blockquote><p>可以将画布理解为屏幕驱动的显存部分，通过其可以更好的管理、修改需要显示的数据。画布库是纯软件实现，不和具体的硬件绑死，也就是适用于后续其他更多的屏幕。</p></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>
<span class="token comment">// 初始化屏幕</span>
<span class="token function">epd_100ask_hal_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 初始化画布</span>
<span class="token comment">// 参数1： paint 需要是静态 、全局或动态分配的内存。</span>
<span class="token comment">// 参数1： color 是指定初始化时默认的颜色</span>
<span class="token comment">//         预设的颜色有：  #define EPD_100ASK_COLOR_WHITE     0xFF</span>
<span class="token comment">//                        #define EPD_100ASK_COLOR_BLACK     0x00</span>
<span class="token function">epd_100ask_paint_init</span><span class="token punctuation">(</span>paint<span class="token punctuation">,</span> color<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 将整个屏幕刷为指定的颜色</span>
<span class="token function">epd_100ask_hal_display_clear</span><span class="token punctuation">(</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 显示事先经过转换的图片，后面两个参数分别是指定图片的 宽(w) 和 高(h)</span>
<span class="token function">epd_100ask_hal_display_image</span><span class="token punctuation">(</span>gImage_full_screen_test<span class="token punctuation">,</span> <span class="token number">240</span><span class="token punctuation">,</span> <span class="token number">360</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 刷新屏幕。注意：需要调用此函数才能在屏幕上显示出你要显示的数据
   刷新类型有：
        EPD_100ASK_LUT_GC (全局刷新，正常使用建议调用GC波形刷屏)
        EPD_100ASK_LUT_DU (局部刷新，长时间用DU波形刷屏会有低影，建议每调用DU波形刷屏5~10次后改用GC波形刷屏)
        EPD_100ASK_LUT_5S (不常用)
*/</span>
<span class="token function">epd_100ask_hal_refresh</span><span class="token punctuation">(</span>EPD_100ASK_LUT_GC<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 局部刷新
    参数1：指定起始的x轴方向的坐标位置
    参数2：指定起始的y轴方向的坐标位置
    参数3：图片的宽度
    参数4：图片的高度
    参数5：图片数据
   之后需要使用 EPD_100ASK_LUT_DU 刷新类型。
*/</span>
<span class="token function">epd_100ask_hal_display_partial</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> y_offset<span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">96</span><span class="token punctuation">,</span> gImage_number_1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">epd_100ask_hal_refresh</span><span class="token punctuation">(</span>EPD_100ASK_LUT_DU<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 想要局部刷新时，使用此刷新类型</span>


<span class="token comment">/*画布部分*/</span>

<span class="token comment">// 在画布上画点</span>
<span class="token function">epd_100ask_paint_draw_point</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> EPD_COLOR_BLACK<span class="token punctuation">,</span> DOT_PIXEL_1X1<span class="token punctuation">,</span> DOT_FILL_AROUND<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 在画布上画线条</span>
<span class="token function">epd_100ask_paint_draw_line</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> EPD_COLOR_BLACK<span class="token punctuation">,</span> DOT_PIXEL_1X1<span class="token punctuation">,</span> LINE_STYLE_SOLID<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 在画布上画矩形</span>
<span class="token function">epd_100ask_paint_draw_rectangle</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> EPD_COLOR_BLACK<span class="token punctuation">,</span> DOT_PIXEL_1X1<span class="token punctuation">,</span> DRAW_FILL_EMPTY<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 在画布上画圆形</span>
<span class="token function">epd_100ask_paint_draw_circle</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> EPD_COLOR_BLACK<span class="token punctuation">,</span> DOT_PIXEL_1X1<span class="token punctuation">,</span> DRAW_FILL_EMPTY<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 画布的数据刷为指定的颜色</span>
<span class="token function">epd_100ask_paint_clear</span><span class="token punctuation">(</span>EPD_100ASK_COLOR_WHITE<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 将画布的内容传输到屏幕</span>
<span class="token function">epd_100ask_hal_display_image</span><span class="token punctuation">(</span>paint<span class="token punctuation">,</span> w<span class="token punctuation">,</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 刷新屏幕</span>
<span class="token function">epd_100ask_hal_refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行现象" tabindex="-1"><a class="header-anchor" href="#运行现象" aria-hidden="true">#</a> 运行现象</h2><p>直接点击编译即可，烧写到开发板之后，打开串口(波特率 115200)，即可看到输出信息和屏幕颜色一致。</p><h2 id="修改默认的配置" tabindex="-1"><a class="header-anchor" href="#修改默认的配置" aria-hidden="true">#</a> 修改默认的配置</h2><p>打开 menuconfig，进入到下面所示的路径进行配置：</p><p>屏幕驱动配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># (Top) → Component config → 100ask components → 100ASK EPD setting     </span>
<span class="token punctuation">(</span>Top<span class="token punctuation">)</span>
    → Component config
        → 100ask components
            → 100ASK EPD setting      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>画布配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># (Top) → Component config → 100ask components → 100ASK EPD  paint setting   </span>
<span class="token punctuation">(</span>Top<span class="token punctuation">)</span>
    → Component config
        → 100ask components
            → 100ASK EPD  paint setting      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行lvgl项目工程" tabindex="-1"><a class="header-anchor" href="#运行lvgl项目工程" aria-hidden="true">#</a> 运行LVGL项目工程</h2><p>上面的示例能得到现象之后，便可打开此项目，打开后直接编译、烧写即可查看到屏幕中心区域输出了LVGL的版本信息，但是还没有按键控制的功能，也就是只能单纯的进行显示，在后面的章节我们会将讲解 <strong>LVGL+FC手柄</strong> 的综合示例。</p><p>这里的给出的项目代码位于： <code>DShanMCU-Mio_ESP-IDF_Data\\02_examples\\esp-idf-learn\\05_display\\E-paper\\epd-240x360\\00_epd_simple_test</code></p>`,26),v={href:"https://www.bilibili.com/video/BV1Ya411r7K2",target:"_blank",rel:"noopener noreferrer"},b=n("br",null,null,-1),h={href:"http://lvgl.100ask.net",target:"_blank",rel:"noopener noreferrer"};function f(D,L){const a=p("ExternalLinkIcon");return i(),c("div",null,[d,n("p",null,[s("此章节讲述使用 "),n("strong",null,[n("a",u,[s("3.52寸墨水屏(SPI、无触摸)"),e(a)])]),s(" 的使用方法。")]),r,n("ul",null,[n("li",null,[n("a",m,[s("3.52寸墨水屏(SPI、无触摸)"),e(a)]),s(" * 1")]),n("li",null,[n("a",_,[s("屏幕配套排线"),e(a)]),s(" * 1")])]),k,n("blockquote",null,[n("p",null,[s("LVGL视频教程："),n("a",v,[s("https://www.bilibili.com/video/BV1Ya411r7K2"),e(a)]),s(),b,s("LVGL文档教程："),n("a",h,[s("http://lvgl.100ask.net"),e(a)])])])])}const E=t(o,[["render",f],["__file","chapter6-2.html.vue"]]);export{E as default};
