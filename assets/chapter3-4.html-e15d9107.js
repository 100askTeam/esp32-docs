import{_ as n,o as s,c as a,e}from"./app-25465c35.js";const t={},p=e(`<h1 id="打印" tabindex="-1"><a class="header-anchor" href="#打印" aria-hidden="true">#</a> 打印</h1><p>我们在 <strong>交互式编程</strong> 情况下，输入要计算的代码，终端会显示运算结果。在 <strong>脚本式编程</strong> 情况下，终端不会显示运算结果，此时需要使用 <code>print</code> 将结果打印出来。 如以下代码段所示。“print”可以打印数字、字符串、变量，以及这些的任何组合。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 打印（exp3.py）</span>

<span class="token comment"># 在交互式编程情况下，终端会显示运算结果</span>
<span class="token comment"># 在脚本式编程情况下，终端不会显示运算结果</span>
<span class="token number">100</span><span class="token operator">+</span><span class="token number">200</span> 

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">+</span><span class="token number">200</span><span class="token punctuation">)</span>   <span class="token comment"># 需要通过print函数打印运算结果</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>       <span class="token comment"># 打印数字</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>   <span class="token comment"># 打印字符串,需要引号括起来</span>
a<span class="token operator">=</span><span class="token number">100</span> 
s<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> s<span class="token punctuation">)</span>      <span class="token comment"># 打印变量</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;a =&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>  <span class="token comment"># 打印字串串和变量的组合</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;a=%d&quot;</span><span class="token operator">%</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;s=%s&quot;</span><span class="token operator">%</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 打印格式化输出</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","chapter3-4.html.vue"]]);export{u as default};
