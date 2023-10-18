import{_ as n,o as s,c as a,e as t}from"./app-25465c35.js";const e={},p=t(`<h1 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h1><p>我们编写的代码中，最多是的就是运算，比如“100+200”，“100”和“200”是操作数，“+”是运算符。Python中的运算符，除了加减乘除，还有众多其它类型的运算符。</p><h2 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h2><p>Python支持的算术运算符如下表所示，是编程中最多使用的运算符。</p><table><thead><tr><th style="text-align:left;">运算符</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">+</td><td style="text-align:left;">加：两个操作数相加</td></tr><tr><td style="text-align:left;">-</td><td style="text-align:left;">减：两个操作数相减或得到一个负数</td></tr><tr><td style="text-align:left;">*</td><td style="text-align:left;">乘：两个操作数相乘或让一个字符串重复若干次</td></tr><tr><td style="text-align:left;">/</td><td style="text-align:left;">除：两个操作数相除</td></tr><tr><td style="text-align:left;">**</td><td style="text-align:left;">乘方：两个操作数乘方</td></tr><tr><td style="text-align:left;">//</td><td style="text-align:left;">整除：两个操作数相除，向下取整数部分</td></tr><tr><td style="text-align:left;">%</td><td style="text-align:left;">模除：两个操作数相除，得到余数</td></tr></tbody></table><p>算数运算符示例如下代码段所示:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 算术运算符示例（exp4.py）</span>

<span class="token comment"># 加法</span>
a<span class="token operator">=</span><span class="token number">100</span><span class="token operator">+</span><span class="token number">200</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;100 + 200 =&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token comment"># 减法</span>
a<span class="token operator">=</span><span class="token number">100</span><span class="token operator">-</span><span class="token number">200</span>
b<span class="token operator">=</span><span class="token operator">-</span><span class="token number">10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;100 - 200 =&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;b =&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>

<span class="token comment"># 乘法</span>
a<span class="token operator">=</span><span class="token number">4</span><span class="token operator">*</span><span class="token number">5</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;4 * 5 =&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test &quot;</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span>

<span class="token comment"># 除法</span>
a<span class="token operator">=</span><span class="token number">4</span><span class="token operator">/</span><span class="token number">5</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;4 / 5 =&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token comment"># 乘方</span>
a<span class="token operator">=</span><span class="token number">2</span><span class="token operator">**</span><span class="token number">4</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;2 ** 4 =&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token comment"># 整除</span>
a<span class="token operator">=</span><span class="token number">13</span><span class="token operator">//</span><span class="token number">5</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;13 // 5 =&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token comment"># 模除</span>
a<span class="token operator">=</span><span class="token number">13</span><span class="token operator">%</span><span class="token number">5</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;13 % 5 =&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">100</span> + <span class="token number">200</span> <span class="token operator">=</span> <span class="token number">300</span>
<span class="token number">100</span> - <span class="token number">200</span> <span class="token operator">=</span> <span class="token parameter variable">-100</span>
b <span class="token operator">=</span> <span class="token parameter variable">-10</span>
<span class="token number">4</span> * <span class="token number">5</span> <span class="token operator">=</span> <span class="token number">20</span>
<span class="token builtin class-name">test</span> <span class="token builtin class-name">test</span> <span class="token builtin class-name">test</span> <span class="token builtin class-name">test</span> 
<span class="token number">4</span> / <span class="token number">5</span> <span class="token operator">=</span> <span class="token number">0.8</span>
<span class="token number">2</span> ** <span class="token number">4</span> <span class="token operator">=</span> <span class="token number">16</span>
<span class="token number">13</span> // <span class="token number">5</span> <span class="token operator">=</span> <span class="token number">2</span>
<span class="token number">13</span> % <span class="token number">5</span> <span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>有时候，&quot;a=a+b&quot;,也被写作 &quot;a+=b&quot; ，这是一种简写方式，即 <code>变量 = 变量 运算 表达式</code> 简写成 <code>变量 运算 = 表达式</code>。同理其它算术运算符，也能这样简写，比如 &quot;a=a<em>b&quot; ，简写为 &quot;a</em>=b&quot;。</p></blockquote><h2 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h2><p>Python支持的比较运算符如下表所示，返回结果为 <code>True</code> 或 <code>False</code> ，通常用于条件判断，实现代码分支执行。</p><table><thead><tr><th style="text-align:left;">运算符</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">&gt;</td><td style="text-align:left;">大于：x是否大于y</td></tr><tr><td style="text-align:left;">&lt;&gt;</td><td style="text-align:left;">小于：x是否小于y</td></tr><tr><td style="text-align:left;">&gt;=</td><td style="text-align:left;">大于等于：x是否大于或等于y</td></tr><tr><td style="text-align:left;">&lt;=</td><td style="text-align:left;">小于等于：x是否小于或等于y</td></tr><tr><td style="text-align:left;">==</td><td style="text-align:left;">等于：比较两个对象是否相等</td></tr><tr><td style="text-align:left;">!=</td><td style="text-align:left;">不等于：比较两个对象是否不相等</td></tr></tbody></table><p>比较运算符示例如下代码段所示：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 比较运算符示例（exp5.py）</span>

<span class="token comment"># 大于&gt;</span>
a<span class="token operator">=</span><span class="token number">200</span><span class="token operator">&gt;</span><span class="token number">100</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;200&gt;100 is:&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token comment"># 小于&gt;</span>
a<span class="token operator">=</span><span class="token number">200</span><span class="token operator">&lt;</span><span class="token number">100</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;200&lt;100 is:&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token comment"># 大于等于&gt;=</span>
a<span class="token operator">=</span><span class="token number">200</span><span class="token operator">&gt;=</span><span class="token number">100</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;200&gt;=100 is:&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token comment"># 小于等于&lt;=</span>
a<span class="token operator">=</span><span class="token number">200</span><span class="token operator">&lt;=</span><span class="token number">100</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;200&lt;=100 is:&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token comment"># 等于==</span>
a<span class="token operator">=</span><span class="token number">200</span><span class="token operator">==</span><span class="token number">100</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;200==100 is:&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token comment"># 不等于！=</span>
a<span class="token operator">=</span><span class="token number">200</span><span class="token operator">!=</span><span class="token number">100</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;200!=100 is:&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token comment"># 应用</span>
a<span class="token operator">=</span><span class="token number">200</span>
b<span class="token operator">=</span><span class="token number">100</span>
<span class="token keyword">if</span> a<span class="token operator">&gt;</span>b<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;a&gt;b&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;a&lt;b&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">20</span><span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span><span class="token number">100</span> is: True
<span class="token number">20</span><span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span><span class="token number">100</span> is: False
<span class="token number">20</span><span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span><span class="token operator">=</span><span class="token number">100</span> is: True
<span class="token number">20</span><span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span><span class="token operator">=</span><span class="token number">100</span> is: False
<span class="token assign-left variable">200</span><span class="token operator">==</span><span class="token number">100</span> is: False
<span class="token number">200</span><span class="token operator">!=</span><span class="token number">100</span> is: True
a<span class="token operator">&gt;</span>b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="位运算符" tabindex="-1"><a class="header-anchor" href="#位运算符" aria-hidden="true">#</a> 位运算符</h2><p>Python支持的位运算符如下表所示。位运算大家可能比较陌生，但有过单片机开发的同学，对此应该不会陌生。由于是通过修改寄存器，从而实现对单片机外设的控制，而对寄存器的某一位操作，则称之为位操作。在进行位运算时，要把计算的数字看作二进制，这样才好理解位运算。</p><table><thead><tr><th style="text-align:left;">运算符</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">&amp;</td><td style="text-align:left;">按位与：当两个数，对应位都为1，该位就为1，否则为0</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">^</td><td style="text-align:left;">按位异或：当两个数，对应位只要相异（不同），该位就为1，否则为0</td></tr><tr><td style="text-align:left;">~</td><td style="text-align:left;">按位取反：把这个数的每一位，1变0，0变1</td></tr><tr><td style="text-align:left;">&lt;&lt;</td><td style="text-align:left;">左移：把这个数的每一位，全部左移若干位，高位丢弃，低位补0</td></tr><tr><td style="text-align:left;">&gt;&gt;</td><td style="text-align:left;">右移：把这个数的每一位，全部右移若干位，低位丢弃，高位补0等</td></tr></tbody></table><p>位运算符示例如下代码段所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 位运算符示例（exp6.py）</span>

a<span class="token operator">=</span><span class="token number">45</span>  <span class="token comment"># 二进制为0010 1101</span>
b<span class="token operator">=</span><span class="token number">25</span>  <span class="token comment"># 二进制为0001 1001</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;a =&quot;</span> <span class="token punctuation">,</span>a<span class="token punctuation">,</span> <span class="token string">&quot;b =&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>

<span class="token comment"># 按位与&amp;</span>
c<span class="token operator">=</span>a<span class="token operator">&amp;</span>b   <span class="token comment"># 二进制对应位，都为1，结果为1，否则为0，结果为：0000 1001，即为9</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;a&amp;b =&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span> 

<span class="token comment"># 按位或|</span>
c<span class="token operator">=</span>a<span class="token operator">|</span>b   <span class="token comment"># 二进制对应位，只要有1个为1，结果为1，否则为0，结果为：0011 1101，即为61</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;a|b =&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span> 

<span class="token comment"># 按位异或^</span>
c<span class="token operator">=</span>a<span class="token operator">^</span>b   <span class="token comment"># 二进制对应位，只要相异(不同)，结果为1，否则为0，结果为：0011 0100，即为52</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;a^b =&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span> 

<span class="token comment"># 按位取反~</span>
c<span class="token operator">=</span><span class="token operator">~</span>a   <span class="token comment"># 把这个数二进制的每一位，1变0，0变1，结果为：1101 0010(此时最高位是符号位)，即为-46</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;~a =&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span> 

<span class="token comment"># 左移&lt;&lt;</span>
c<span class="token operator">=</span>a<span class="token operator">&lt;&lt;</span><span class="token number">2</span>   <span class="token comment"># 把这个数二进制的每一位，全部左移2位，高位丢弃，低位补0，结果为：1011 0100，即为180</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;a&lt;&lt;2 =&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span> 

<span class="token comment"># 右移&gt;&gt;</span>
c<span class="token operator">=</span>a<span class="token operator">&gt;&gt;</span><span class="token number">2</span>   <span class="token comment"># 把这个数二进制的每一位，全部右移2位，低位丢弃，高位补0，结果为：0000 1011，即为11</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;a&gt;&gt;2 =&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a <span class="token operator">=</span> <span class="token number">45</span> b <span class="token operator">=</span> <span class="token number">25</span>
a<span class="token operator">&amp;</span>b <span class="token operator">=</span> <span class="token number">9</span>
a<span class="token operator">|</span>b <span class="token operator">=</span> <span class="token number">61</span>
a^b <span class="token operator">=</span> <span class="token number">52</span>
~a <span class="token operator">=</span> <span class="token parameter variable">-46</span>
a<span class="token operator">&lt;&lt;</span><span class="token number">2</span> <span class="token operator">=</span> <span class="token number">180</span>
a<span class="token operator">&gt;&gt;</span><span class="token number">2</span> <span class="token operator">=</span> <span class="token number">11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h2><p>Python支持的逻辑运算符如下表所示。需要注意的是，逻辑运算存在 <strong>短路计算</strong> ，一旦前者满足条件，就不会管后续的判断。</p><table><thead><tr><th style="text-align:left;">运算符</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">and</td><td style="text-align:left;">布尔<strong>与</strong>：x and y，如果x为False，返回False，否则返回y</td></tr><tr><td style="text-align:left;">or</td><td style="text-align:left;">布尔<strong>或</strong>：x or y，如果x为Ture，返回True，否则返回y</td></tr><tr><td style="text-align:left;">not</td><td style="text-align:left;">布尔<strong>非</strong>：not x，如果x为True，返回False，如果x为False，它返回True</td></tr></tbody></table><p>逻辑运算符示例如下代码段所示：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 逻辑运算符示例（exp7.py）</span>

x<span class="token operator">=</span><span class="token number">10</span>
y<span class="token operator">=</span><span class="token number">20</span> 

<span class="token comment"># 与and</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x =&quot;</span> <span class="token punctuation">,</span>x<span class="token punctuation">,</span> <span class="token string">&quot;y =&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span>
z <span class="token operator">=</span> x <span class="token keyword">and</span> y
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x and y =&quot;</span><span class="token punctuation">,</span> z<span class="token punctuation">)</span>

x<span class="token operator">=</span><span class="token boolean">False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x =&quot;</span> <span class="token punctuation">,</span>x<span class="token punctuation">,</span> <span class="token string">&quot;y =&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span>
z <span class="token operator">=</span> x <span class="token keyword">and</span> y
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x and y =&quot;</span><span class="token punctuation">,</span> z<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----------------&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 或or</span>
x<span class="token operator">=</span><span class="token number">10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x =&quot;</span> <span class="token punctuation">,</span>x<span class="token punctuation">,</span> <span class="token string">&quot;y =&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span>
z <span class="token operator">=</span> x <span class="token keyword">or</span> y
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x or y =&quot;</span><span class="token punctuation">,</span> z<span class="token punctuation">)</span>

x<span class="token operator">=</span><span class="token boolean">False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x =&quot;</span> <span class="token punctuation">,</span>x<span class="token punctuation">,</span> <span class="token string">&quot;y =&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span>
z <span class="token operator">=</span> x <span class="token keyword">or</span> y
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x or y =&quot;</span><span class="token punctuation">,</span> z<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----------------&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 非not</span>
x<span class="token operator">=</span><span class="token number">10</span>
y<span class="token operator">=</span><span class="token number">20</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x =&quot;</span> <span class="token punctuation">,</span>x<span class="token punctuation">,</span> <span class="token string">&quot;y =&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span>
z <span class="token operator">=</span> <span class="token keyword">not</span> x
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;not x =&quot;</span><span class="token punctuation">,</span> z<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>x <span class="token operator">=</span> <span class="token number">10</span> y <span class="token operator">=</span> <span class="token number">20</span>
x and y <span class="token operator">=</span> <span class="token number">20</span>
x <span class="token operator">=</span> False y <span class="token operator">=</span> <span class="token number">20</span>
x and y <span class="token operator">=</span> False
----------------
x <span class="token operator">=</span> <span class="token number">10</span> y <span class="token operator">=</span> <span class="token number">20</span>
x or y <span class="token operator">=</span> <span class="token number">10</span>
x <span class="token operator">=</span> False y <span class="token operator">=</span> <span class="token number">20</span>
x or y <span class="token operator">=</span> <span class="token number">20</span>
----------------
x <span class="token operator">=</span> <span class="token number">10</span> y <span class="token operator">=</span> <span class="token number">20</span>
not x <span class="token operator">=</span> False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>最后，运算符的优先级基本和我们日常习惯相符，比如乘法运算优先级高于加法运算优先级，对于不确定的情况，我们可以使用括号“( )”来调整优先级。</p></blockquote>`,32),l=[p];function o(i,c){return s(),a("div",null,l)}const u=n(e,[["render",o],["__file","chapter3-5.html.vue"]]);export{u as default};
