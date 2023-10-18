import{_ as n,o as s,c as a,e}from"./app-25465c35.js";const p={},t=e(`<h1 id="控制流" tabindex="-1"><a class="header-anchor" href="#控制流" aria-hidden="true">#</a> 控制流</h1><p>前面大部分示例，我们都是先执行运算，再打印运算结果，从头到尾，依次执行每句代码内容。但在实际开发中，我们通常需要设备根据不同的情况，自动的执行相应的代码。这就需要引入控制流语句，在Python中，控制流语句有三个：<code>if\`\`、while</code> 和 <code>for。</code></p><h2 id="if条件语句" tabindex="-1"><a class="header-anchor" href="#if条件语句" aria-hidden="true">#</a> if条件语句</h2><p>CPU会先去运行 <code>if</code> 后面的语句，如果这个语句执行结果为Ture（非0和非null），则执行下一个缩进里的代码块。如果这个语句执行结果为Flase（0或null），则去执行 <code>else</code> 后的代码块。 <code>else</code> 部分是可选的，可以不写这部分。 如下代码段所示，当出现多个判断情况时，可以使用 <code>elif</code>，实现多次判断。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># if条件语句（exp8.py）</span>

x<span class="token operator">=</span><span class="token number">10</span>
y<span class="token operator">=</span><span class="token number">20</span> 

<span class="token comment"># 仅有if</span>
<span class="token keyword">if</span> x<span class="token operator">&gt;</span>y<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x&gt;y&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 有if和else</span>
<span class="token keyword">if</span> x<span class="token operator">==</span>y<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x==y&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x!=y&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 多次判断</span>
<span class="token keyword">if</span> x<span class="token operator">==</span>y<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x==y&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> x<span class="token operator">&gt;</span>y<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;max:&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token keyword">elif</span> y<span class="token operator">&gt;</span>x<span class="token punctuation">:</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;max:&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>x<span class="token operator">!=</span>y
max: <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="while循环语句" tabindex="-1"><a class="header-anchor" href="#while循环语句" aria-hidden="true">#</a> while循环语句</h2><p>CPU会先去运行 <code>while</code> 后面的语句，如果这个语句执行结果为Ture（非0和非null），则执行下一个缩进里的代码块。如果这个语句执行结果为Flase（0或null），则去执行 “else” 后的代码块。“else”部分是可选的，可以不写这部分。不同于 “if” 只会执行一次，“while”会再次执行，直到判断结果为 Flase。</p><p>如下代码段所示，实现让打印执行指定次数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># while循环指定次数（exp9.py）</span>

x<span class="token operator">=</span><span class="token number">10</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x value =:&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
    x <span class="token operator">=</span> x<span class="token operator">-</span><span class="token number">1</span> <span class="token comment"># 修改判断依据,让x每次减1</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>x value <span class="token operator">=</span>: <span class="token number">10</span>
x value <span class="token operator">=</span>: <span class="token number">9</span>
x value <span class="token operator">=</span>: <span class="token number">8</span>
x value <span class="token operator">=</span>: <span class="token number">7</span>
x value <span class="token operator">=</span>: <span class="token number">6</span>
x value <span class="token operator">=</span>: <span class="token number">5</span>
x value <span class="token operator">=</span>: <span class="token number">4</span>
x value <span class="token operator">=</span>: <span class="token number">3</span>
x value <span class="token operator">=</span>: <span class="token number">2</span>
x value <span class="token operator">=</span>: <span class="token number">1</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在某些情况下，我们可以让 “while” 的判断语句永远为True，实现<strong>无限循环</strong>的效果。 此外，“while”还可以配合“continue”和“break”，实现跳过本次循环和退出循环，如下代码段所示。</p><p>跳过/跳出循环（exp10.py）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 跳过/跳出循环（exp10.py）</span>

x<span class="token operator">=</span><span class="token number">10</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span> <span class="token comment"># 恒为Ture,无限循环</span>
    x <span class="token operator">=</span> x<span class="token operator">-</span><span class="token number">1</span> 
    <span class="token keyword">if</span> x<span class="token operator">%</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>   <span class="token comment"># 如果除2余0,说明是偶数</span>
        <span class="token keyword">continue</span> <span class="token comment"># 跳过本次循环</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x value =:&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>

    <span class="token keyword">if</span> x<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">:</span>      <span class="token comment"># 如果x为负数</span>
        <span class="token keyword">break</span>    <span class="token comment"># 结束循环</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>x value <span class="token operator">=</span>: <span class="token number">9</span>
x value <span class="token operator">=</span>: <span class="token number">7</span>
x value <span class="token operator">=</span>: <span class="token number">5</span>
x value <span class="token operator">=</span>: <span class="token number">3</span>
x value <span class="token operator">=</span>: <span class="token number">1</span>
x value <span class="token operator">=</span>: <span class="token parameter variable">-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for循环语句" tabindex="-1"><a class="header-anchor" href="#for循环语句" aria-hidden="true">#</a> for循环语句</h2><p><code>for</code>也是循环，和 “while” 的区别在于，它会遍历后面序列中的每一个项目，这个序列可以是列表，也可以是字符串。 如下代码段所示，可以遍历字符串、列表、数字范围等。</p><p>for循环语句（exp11.py）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># for循环语句（exp11.py）</span>

<span class="token comment"># 遍历字符串中每个字符</span>
<span class="token keyword">for</span> letter <span class="token keyword">in</span> <span class="token string">&quot;MicroPython&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;letter is&quot;</span><span class="token punctuation">,</span> letter<span class="token punctuation">)</span>

<span class="token comment"># 遍历列表中每个元素</span>
languages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Chinese&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Spanish&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;English&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Japanese&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> languages<span class="token punctuation">:</span>        
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Supported languages: &#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>

<span class="token comment"># 根据范围遍历</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">:</span>        
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;i =: &#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>

<span class="token comment"># 根据索引遍历</span>
languages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Chinese&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Spanish&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;English&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Japaniese&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>languages<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>        
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Supported languages: &#39;</span><span class="token punctuation">,</span> languages<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>letter is M
letter is i
letter is c
letter is r
letter is o
letter is P
letter is y
letter is t
letter is h
letter is o
letter is n
Supported languages:  Chinese
Supported languages:  Spanish
Supported languages:  English
Supported languages:  Japanese
i <span class="token operator">=</span>:  <span class="token number">10</span>
i <span class="token operator">=</span>:  <span class="token number">11</span>
i <span class="token operator">=</span>:  <span class="token number">12</span>
i <span class="token operator">=</span>:  <span class="token number">13</span>
i <span class="token operator">=</span>:  <span class="token number">14</span>
Supported languages:  Chinese
Supported languages:  Spanish
Supported languages:  English
Supported languages:  Japaniese

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),i=[t];function l(o,c){return s(),a("div",null,i)}const r=n(p,[["render",l],["__file","chapter3-6.html.vue"]]);export{r as default};
