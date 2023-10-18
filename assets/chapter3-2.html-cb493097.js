import{_ as n,o as e,c as s,e as a}from"./app-25465c35.js";const i={},t=a(`<h1 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h1><p>注释是指在代码中加入辅助说明信息，不会被执行，帮助别人或者自己辅助阅读程序。注释必须要符合相应的规则，否则会被当作代码内容，导致编译无法通过。</p><p>Python中有两类注释方式：单行注释和多行注释。</p><p>Python中单行注释以“#”开头，适合注释当前行代码。</p><p>Python中多行注释使用三个英文单引号 <code>&#39;&#39;&#39;</code> 或三个英文双引号 <code>&quot;&quot;&quot;</code> ，适合注释多行代码。</p><p>如下面的代码段所示：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 注释（exp1.py）</span>
<span class="token comment"># 这是单行注释</span>

<span class="token triple-quoted-string string">&#39;&#39;&#39;
这是多行注释
注意是英文单引号
&#39;&#39;&#39;</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
这是也是多行注释
使用的是英文双引号
&quot;&quot;&quot;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, Python and MicroPython~&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 这才是代码内容</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[t];function c(d,l){return e(),s("div",null,o)}const p=n(i,[["render",c],["__file","chapter3-2.html.vue"]]);export{p as default};
