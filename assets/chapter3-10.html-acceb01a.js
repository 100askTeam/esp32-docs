import{_ as n,o as s,c as a,e as t}from"./app-25465c35.js";const e={},p=t(`<h1 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h1><p>Python支持异常处理，即使用“try”尝试去执行指定代码，如果发生错误，则跳到“except”部分执行异常处理，否则执行“else”部分。这样就可以实现，如果代码发生错误，不用退出，只需要跳到异常部分处理即可，程序不会崩溃。</p><p>如下代码段所示，TF卡中有“hello.txt”文件，没有“test.txt”文件，如果不使用异常处理机制，在“open”文件失败时，程序就会崩溃退出，后面代码就不会被执行。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 异常处理示例（exp19.py）</span>

<span class="token keyword">try</span><span class="token punctuation">:</span> <span class="token comment"># 尝试打开hello.txt</span>
    f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> <span class="token punctuation">:</span> <span class="token comment"># 错误进入异常处理</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Cannot find hello.txt file&quot;</span><span class="token punctuation">)</span> 
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt already exists.&quot;</span><span class="token punctuation">)</span>
    f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">try</span><span class="token punctuation">:</span> <span class="token comment"># 尝试打开test.txt</span>
    f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> <span class="token punctuation">:</span> <span class="token comment"># 错误进入异常处理</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Cannot find test.txt file.&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt already exists.&quot;</span><span class="token punctuation">)</span>
    f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hello.txt already exists.
Cannot <span class="token function">find</span> test.txt file.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","chapter3-10.html.vue"]]);export{d as default};
