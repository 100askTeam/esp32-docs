import{_ as n,o as e,c as a,e as s}from"./app-25465c35.js";const i={},d=s(`<h1 id="micro-sd卡-spi" tabindex="-1"><a class="header-anchor" href="#micro-sd卡-spi" aria-hidden="true">#</a> Micro SD卡(SPI)</h1><p>此章节讲述使用 <strong><a href="">Micro SD卡(SPI)</a></strong> 的使用方法。</p><h2 id="硬件准备" tabindex="-1"><a class="header-anchor" href="#硬件准备" aria-hidden="true">#</a> 硬件准备</h2><ul><li>Micro SD卡(≤2TB) * 1</li><li>SPI Micro SD卡模块 * 1</li></ul><h3 id="接线" tabindex="-1"><a class="header-anchor" href="#接线" aria-hidden="true">#</a> 接线</h3><p>按照下图的说明进行接线：</p><table><thead><tr><th>MicroSD Card Adapter pin</th><th>SPI pin</th><th>DShanMCU-Mio pin</th><th>Notes</th></tr></thead><tbody><tr><td>CS</td><td>CS</td><td>GPIO15/GPIO8</td><td></td></tr><tr><td>SCK</td><td>SCK</td><td>GPIO16/GPIO12</td><td></td></tr><tr><td>MOSI</td><td>MOSI</td><td>GPIO17/GPIO11</td><td></td></tr><tr><td>MISO</td><td>MISO</td><td>GPIO18/GPIO13</td><td></td></tr></tbody></table><h2 id="软件准备" tabindex="-1"><a class="header-anchor" href="#软件准备" aria-hidden="true">#</a> 软件准备</h2><p>本次实验的项目代码位于： <code>DShanMCU-Mio_ESP-IDF_Data\\02_examples\\esp-idf-learn\\06_storage\\spi_sdcard</code></p><blockquote><p>注意，不要将项目代码移动到其他地方，否则编译会报错。后续实验也请保持原有的目录结构进行学习，不要移动项目代码的位置。</p></blockquote><h2 id="打开项目工程" tabindex="-1"><a class="header-anchor" href="#打开项目工程" aria-hidden="true">#</a> 打开项目工程</h2><p>通过 vscode 或 终端控制台打开项目工程目录，以便进行后续操作。</p><h2 id="关键代码解读" tabindex="-1"><a class="header-anchor" href="#关键代码解读" aria-hidden="true">#</a> 关键代码解读</h2><p>配套的驱动库： <code>DShanMCU-Mio_ESP-IDF_Data\\02_examples\\esp-idf-learn\\00_components\\esp-idf-components\\fs_100ask_drivers</code></p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>
<span class="token comment">// 初始化SD卡</span>
<span class="token function">fs_100ask_hal_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 打开文件</span>
fopen

<span class="token comment">// 关闭文件访问</span>
fclose

<span class="token comment">// 重命名文件名</span>
rename

<span class="token comment">// 读取文件内容</span>
fgets

<span class="token comment">// 去初始化SD卡</span>
<span class="token function">fs_100ask_hal_deinit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行现象" tabindex="-1"><a class="header-anchor" href="#运行现象" aria-hidden="true">#</a> 运行现象</h2><p>直接点击编译即可，烧写到开发板之后，打开串口(波特率 115200)，即可看到输出信息，之后拔出SD卡接入到PC中查看。</p><h2 id="修改默认的配置" tabindex="-1"><a class="header-anchor" href="#修改默认的配置" aria-hidden="true">#</a> 修改默认的配置</h2><p>打开 menuconfig，进入到下面所示的路径进行配置：</p><p>屏幕驱动配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># (Top) → Component config → 100ask components → 100ASK File system drivers setting    </span>
<span class="token punctuation">(</span>Top<span class="token punctuation">)</span>
    → Component config
        → 100ask components
            → 100ASK File system drivers setting     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),t=[d];function c(r,l){return e(),a("div",null,t)}const p=n(i,[["render",c],["__file","chapter7-2.html.vue"]]);export{p as default};
