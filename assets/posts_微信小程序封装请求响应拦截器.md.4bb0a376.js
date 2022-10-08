import{_ as n,c as s,o as a,b as t}from"./app.d3efa65c.js";const w='{"title":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5C01\u88C5\u8BF7\u6C42\u54CD\u5E94\u62E6\u622A\u5668","description":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5C01\u88C5\u8BF7\u6C42\u54CD\u5E94\u62E6\u622A\u5668","frontmatter":{"title":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5C01\u88C5\u8BF7\u6C42\u54CD\u5E94\u62E6\u622A\u5668","description":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5C01\u88C5\u8BF7\u6C42\u54CD\u5E94\u62E6\u622A\u5668","date":"2022-09-03T00:00:00.000Z","tags":["\u5C0F\u7A0B\u5E8F"]},"headers":[],"relativePath":"posts/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5C01\u88C5\u8BF7\u6C42\u54CD\u5E94\u62E6\u622A\u5668.md","lastUpdated":1665130875932}',p={},o=t(`<h1 id="\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5C01\u88C5\u8BF7\u6C42\u54CD\u5E94\u62E6\u622A\u5668" tabindex="-1">\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5C01\u88C5\u8BF7\u6C42\u54CD\u5E94\u62E6\u622A\u5668 <a class="header-anchor" href="#\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5C01\u88C5\u8BF7\u6C42\u54CD\u5E94\u62E6\u622A\u5668" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9E\u4F8B\u5C5E\u6027\u5B9A\u4E49\u5728constructor()\u65B9\u6CD5\u91CC\u9762\u7684this\u4E0A\u9762</span>
    <span class="token comment">// \u8BF7\u6C42\u7684\u6839\u8DEF\u5F84</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>baseUrl <span class="token operator">=</span> options<span class="token punctuation">.</span>baseUrl <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
    <span class="token comment">// \u8BF7\u6C42\u7684 url \u5730\u5740</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> options<span class="token punctuation">.</span>url <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
    <span class="token comment">// \u8BF7\u6C42\u65B9\u5F0F</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token string">&#39;GET&#39;</span>
    <span class="token comment">// \u8BF7\u6C42\u7684\u53C2\u6570\u5BF9\u8C61</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token comment">// header \u8BF7\u6C42\u5934</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>header <span class="token operator">=</span> options<span class="token punctuation">.</span>header <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>beforeRequest <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>afterRequest <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token string">&#39;GET&#39;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>baseUrl <span class="token operator">+</span> url
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">post</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token string">&#39;POST&#39;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>baseUrl <span class="token operator">+</span> url
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">put</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token string">&#39;PUT&#39;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>baseUrl <span class="token operator">+</span> url
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">delete</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token string">&#39;DELETE&#39;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>baseUrl <span class="token operator">+</span> url
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">_</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6E05\u7A7A header \u5BF9\u8C61</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>header <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// \u8BF7\u6C42\u4E4B\u524D\u505A\u4E00\u4E9B\u4E8B</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>beforeRequest <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> <span class="token keyword">this</span><span class="token punctuation">.</span>beforeRequest <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">beforeRequest</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token comment">// \u53D1\u8D77\u8BF7\u6C42</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> weixin <span class="token operator">=</span> wx
      <span class="token comment">// \u9002\u914D uniapp</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;undefined&#39;</span> <span class="token operator">!==</span> <span class="token keyword">typeof</span> uni<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        weixin <span class="token operator">=</span> uni
      <span class="token punctuation">}</span>
      weixin<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        url<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token punctuation">,</span>
        method<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>method<span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">,</span>
        header<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>header<span class="token punctuation">,</span>
        <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u8BF7\u6C42\u5B8C\u6210\u4EE5\u540E\u505A\u4E00\u4E9B\u4E8B\u60C5</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>afterRequest <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> <span class="token keyword">this</span><span class="token punctuation">.</span>afterRequest <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">afterRequest</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> $http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4F7F\u7528\uFF1A\u5728main.js</p><div class="language-js"><pre><code><span class="token number">1</span>\u3001\u5BFC\u5165\u5305
uni<span class="token punctuation">.</span>$http <span class="token operator">=</span> $http
<span class="token comment">// \u914D\u7F6E\u8BF7\u6C42\u6839\u8DEF\u5F84</span>
$http<span class="token punctuation">.</span>baseUrl <span class="token operator">=</span> <span class="token string">&#39;https://www.xxx.com&#39;</span>
<span class="token comment">// \u8BF7\u6C42\u5F00\u59CB\u4E4B\u524D\u505A\u4E00\u4E9B\u4E8B\u60C5</span>
$http<span class="token punctuation">.</span><span class="token function-variable function">beforeRequest</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;\u6570\u636E\u52A0\u8F7D\u4E2D...&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8BF7\u6C42\u5B8C\u6210\u4E4B\u540E\u505A\u4E00\u4E9B\u4E8B\u60C5 // \u54CD\u5E94\u62E6\u622A\u5668</span>
$http<span class="token punctuation">.</span><span class="token function-variable function">afterRequest</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5C01\u88C5\u7684\u5C55\u793A\u6D88\u606F\u63D0\u793A\u7684\u65B9\u6CD5</span>
uni<span class="token punctuation">.</span><span class="token function-variable function">$showMsg</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">&#39;\u6570\u636E\u52A0\u8F7D\u5931\u8D25\uFF01&#39;</span><span class="token punctuation">,</span> duration <span class="token operator">=</span> <span class="token number">1500</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    title<span class="token punctuation">,</span>
    duration<span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u66F4\u7B80\u5355\u7684\u5C01\u88C5\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&#39;./config&#39;</span> <span class="token comment">// \u670D\u52A1\u5668\u914D\u7F6E\u6587\u4EF6</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// new Promise \u521D\u59CB\u5316promise\u5B9E\u4F8B\u7684\u72B6\u6001\u4E3Apending</span>
		<span class="token comment">// \u7D27\u63A5\u7740 \u6267\u884C\u5F02\u6B65\u4EFB\u52A1</span>
		wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			url<span class="token operator">:</span> config<span class="token punctuation">.</span>host <span class="token operator">+</span> url<span class="token punctuation">,</span>
			data<span class="token punctuation">,</span>
			method<span class="token punctuation">,</span>
			<span class="token comment">// \u5982\u679C\u5F02\u6B65\u4EFB\u52A1\u6210\u529F\u4E86 \u5C31\u4F7F\u7528 resolve\uFF0Creject\u4FEE\u6539promise \u7684\u72B6\u6001\uFF0C</span>
			<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u6C42\u6210\u529F&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u6C42\u5931\u8D25&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{w as __pageData,h as default};
