import{_ as n,o as s,c as a,e}from"./app-25465c35.js";const p={},t=e(`<h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h1><p>函数是指可以重复使用的程序片段。函数可以让代码有模块性，提高代码的重复利用率。在目前为止，我们已经使用过了不少Python提供的内建函数，比如“print()”、“rang()”、“len()”。我们也可以自己创建函数，这叫做用户自定义函数。</p><h2 id="函数的定义" tabindex="-1"><a class="header-anchor" href="#函数的定义" aria-hidden="true">#</a> 函数的定义</h2><p>一个函数使用 <code>def</code> 关键字开头，之后是这个函数的名字，再是圆括号“()”，这里的圆括号用来传入参数。下一行缩进就是函数的内容，其中第一行可以用字符串写函数的说明。最后，可选“return”作为函数的返回结果。 如下代码段所示，先定义函数，再多次调用函数。</p><p>自定义函数示例（exp12.py）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 自定义函数示例（exp12.py）</span>

<span class="token keyword">def</span> <span class="token function">print_hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>    <span class="token comment"># 定义一个函数</span>
   <span class="token string">&quot;功能: 打印hello&quot;</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello &quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">return</span>

print_hello<span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment"># 调用函数</span>
print_hello<span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment"># 再次调用函数</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hello 
hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数的参数" tabindex="-1"><a class="header-anchor" href="#函数的参数" aria-hidden="true">#</a> 函数的参数</h2><p>一个函数支持传入参数，才会让这个函数更具可重复使用性。这个参数由调用函数时传入，在定义函数时，需要先设计好支持哪些参数。 如下代码段所示，几种常见的参数传入方式。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 函数参数示例（exp13.py）</span>

<span class="token keyword">def</span> <span class="token function">max_num</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>   <span class="token comment"># 设置b为默认参数</span>
    <span class="token string">&quot;功能: 打印两个数字中较大的一个&quot;</span>
    <span class="token keyword">if</span> a<span class="token operator">&gt;</span>b<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token string">&quot;is maximun&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> a<span class="token operator">&lt;</span>b<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token string">&quot;is maximun&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token string">&quot;is equal to&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>

max_num<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span>      <span class="token comment"># 正常调用函数，为默认顺序</span>
max_num<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">27</span><span class="token punctuation">)</span>         <span class="token comment"># 只传入参数a,参数b为默认值</span>
max_num<span class="token punctuation">(</span>b<span class="token operator">=</span><span class="token operator">-</span><span class="token number">7</span><span class="token punctuation">,</span> a<span class="token operator">=</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment"># 指定传给哪一个参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">17</span> is maximun
<span class="token number">0</span> is maximun
<span class="token parameter variable">-7</span> is maximun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量的作用域" tabindex="-1"><a class="header-anchor" href="#变量的作用域" aria-hidden="true">#</a> 变量的作用域</h2><p>编写函数时，需要注意变量的作用域，变量的作用域有两种：全局变量和局部变量。</p><p>全局变量在函数外定义，也可在任意位置，使用 <code>global</code> 声明变量是全局变量，其它函数在任何位置都可以访问全局变量。</p><p>局部变量在函数内定义，只能被当前函数内部访问。</p><p>如下代码段所示：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 变量的作用域示例（exp14.py）</span>

x <span class="token operator">=</span> <span class="token number">10</span>       <span class="token comment"># 在函数外面,定义的变量,是全局变量,大家都可以访问</span>

<span class="token keyword">def</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  
    y <span class="token operator">=</span> <span class="token number">30</span>    <span class="token comment"># 在函数里面,定义的变量,是局部变量,只能当前函数内部访问</span>
    <span class="token keyword">global</span> z  <span class="token comment"># 在函数里面,使用global声明变量是一个全局变量,大家都可以访问</span>
    z <span class="token operator">=</span> <span class="token number">50</span>   
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;fun1 x =&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;fun1 y =&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;fun1 z =&quot;</span><span class="token punctuation">,</span> z<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  
    y <span class="token operator">=</span> <span class="token number">40</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;fun2 x =&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token comment"># 打印来在函数外,定义的全局变量</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;fun2 y =&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token comment"># 打印自己定义的,局部变量</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;fun2 z =&quot;</span><span class="token punctuation">,</span> z<span class="token punctuation">)</span> <span class="token comment"># 打印global声明的全局变量</span>

func1<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 调用函数1 </span>
func2<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 调用函数2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>fun1 x <span class="token operator">=</span> <span class="token number">10</span>
fun1 y <span class="token operator">=</span> <span class="token number">30</span>
fun1 z <span class="token operator">=</span> <span class="token number">50</span>
fun2 x <span class="token operator">=</span> <span class="token number">10</span>
fun2 y <span class="token operator">=</span> <span class="token number">40</span>
fun2 z <span class="token operator">=</span> <span class="token number">50</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","chapter3-7.html.vue"]]);export{r as default};
