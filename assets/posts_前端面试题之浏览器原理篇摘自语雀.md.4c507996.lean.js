import{_ as n,c as s,o as a,b as t}from"./app.d3efa65c.js";var p="/KBLOG_2/assets/chrome.f164dea5.png",o="/KBLOG_2/assets/serverworker.875257ff.jpg",e="/KBLOG_2/assets/ServiceWorker.7840bc0b.png",c="/KBLOG_2/assets/liuchengtu.52d10bba.png",l="/KBLOG_2/assets/DOMshu.67cf799b.png",i="/KBLOG_2/assets/zhengxiangdaili.69886835.png",r="/KBLOG_2/assets/evloop.8bdf7e6c.png",u="/KBLOG_2/assets/evloop2.2851342a.gif",k="/KBLOG_2/assets/ddc27224fff536945c7774ec1ace00b4.f1a96a85.png",d="/KBLOG_2/assets/duilie.9300f8cb.png";const y='{"title":"\u9762\u8BD5\u9898\u4E4B\u6D4F\u89C8\u5668\u539F\u7406\u7BC7\u6458\u81EA\u8BED\u96C0","description":"\u9762\u8BD5\u9898\u4E4B\u6D4F\u89C8\u5668\u539F\u7406\u7BC7\u6458\u81EA\u8BED\u96C0","frontmatter":{"title":"\u9762\u8BD5\u9898\u4E4B\u6D4F\u89C8\u5668\u539F\u7406\u7BC7\u6458\u81EA\u8BED\u96C0","description":"\u9762\u8BD5\u9898\u4E4B\u6D4F\u89C8\u5668\u539F\u7406\u7BC7\u6458\u81EA\u8BED\u96C0","date":"2022-09-14T00:00:00.000Z","tags":["\u9762\u8BD5\u9898"]},"headers":[{"level":2,"title":"\u4E00\u3001\u6D4F\u89C8\u5668\u5B89\u5168","slug":"\u4E00\u3001\u6D4F\u89C8\u5668\u5B89\u5168"},{"level":3,"title":"1.  \u4EC0\u4E48\u662F XSS \u653B\u51FB\uFF1F","slug":"_1-\u4EC0\u4E48\u662F-xss-\u653B\u51FB\uFF1F"},{"level":3,"title":"2. \u5982\u4F55\u9632\u5FA1 XSS \u653B\u51FB\uFF1F","slug":"_2-\u5982\u4F55\u9632\u5FA1-xss-\u653B\u51FB\uFF1F"},{"level":3,"title":"3. \u4EC0\u4E48\u662F CSRF \u653B\u51FB\uFF1F","slug":"_3-\u4EC0\u4E48\u662F-csrf-\u653B\u51FB\uFF1F"},{"level":3,"title":"4. \u5982\u4F55\u9632\u5FA1 CSRF \u653B\u51FB\uFF1F","slug":"_4-\u5982\u4F55\u9632\u5FA1-csrf-\u653B\u51FB\uFF1F"},{"level":3,"title":"5. \u4EC0\u4E48\u662F\u4E2D\u95F4\u4EBA\u653B\u51FB\uFF1F\u5982\u4F55\u9632\u8303\u4E2D\u95F4\u4EBA\u653B\u51FB\uFF1F","slug":"_5-\u4EC0\u4E48\u662F\u4E2D\u95F4\u4EBA\u653B\u51FB\uFF1F\u5982\u4F55\u9632\u8303\u4E2D\u95F4\u4EBA\u653B\u51FB\uFF1F"},{"level":3,"title":"6. \u6709\u54EA\u4E9B\u53EF\u80FD\u5F15\u8D77\u524D\u7AEF\u5B89\u5168\u7684\u95EE\u9898?","slug":"_6-\u6709\u54EA\u4E9B\u53EF\u80FD\u5F15\u8D77\u524D\u7AEF\u5B89\u5168\u7684\u95EE\u9898"},{"level":3,"title":"7. \u7F51\u7EDC\u52AB\u6301\u6709\u54EA\u51E0\u79CD\uFF0C\u5982\u4F55\u9632\u8303\uFF1F","slug":"_7-\u7F51\u7EDC\u52AB\u6301\u6709\u54EA\u51E0\u79CD\uFF0C\u5982\u4F55\u9632\u8303\uFF1F"},{"level":2,"title":"\u4E8C\u3001\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B","slug":"\u4E8C\u3001\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B"},{"level":3,"title":"1. \u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u7684\u6982\u5FF5","slug":"_1-\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u7684\u6982\u5FF5"},{"level":3,"title":"2. \u8FDB\u7A0B\u548C\u7EBF\u7A0B\u7684\u533A\u522B","slug":"_2-\u8FDB\u7A0B\u548C\u7EBF\u7A0B\u7684\u533A\u522B"},{"level":3,"title":"3. \u6D4F\u89C8\u5668\u6E32\u67D3\u8FDB\u7A0B\u7684\u7EBF\u7A0B\u6709\u54EA\u4E9B","slug":"_3-\u6D4F\u89C8\u5668\u6E32\u67D3\u8FDB\u7A0B\u7684\u7EBF\u7A0B\u6709\u54EA\u4E9B"},{"level":3,"title":"4. \u8FDB\u7A0B\u4E4B\u524D\u7684\u901A\u4FE1\u65B9\u5F0F","slug":"_4-\u8FDB\u7A0B\u4E4B\u524D\u7684\u901A\u4FE1\u65B9\u5F0F"},{"level":3,"title":"5. \u50F5\u5C38\u8FDB\u7A0B\u548C\u5B64\u513F\u8FDB\u7A0B\u662F\u4EC0\u4E48\uFF1F","slug":"_5-\u50F5\u5C38\u8FDB\u7A0B\u548C\u5B64\u513F\u8FDB\u7A0B\u662F\u4EC0\u4E48\uFF1F"},{"level":3,"title":"6. \u6B7B\u9501\u4EA7\u751F\u7684\u539F\u56E0\uFF1F \u5982\u679C\u89E3\u51B3\u6B7B\u9501\u7684\u95EE\u9898\uFF1F","slug":"_6-\u6B7B\u9501\u4EA7\u751F\u7684\u539F\u56E0\uFF1F-\u5982\u679C\u89E3\u51B3\u6B7B\u9501\u7684\u95EE\u9898\uFF1F"},{"level":3,"title":"7. \u5982\u4F55\u5B9E\u73B0\u6D4F\u89C8\u5668\u5185\u591A\u4E2A\u6807\u7B7E\u9875\u4E4B\u95F4\u7684\u901A\u4FE1?","slug":"_7-\u5982\u4F55\u5B9E\u73B0\u6D4F\u89C8\u5668\u5185\u591A\u4E2A\u6807\u7B7E\u9875\u4E4B\u95F4\u7684\u901A\u4FE1"},{"level":3,"title":"8. \u5BF9Service Worker\u7684\u7406\u89E3","slug":"_8-\u5BF9service-worker\u7684\u7406\u89E3"},{"level":2,"title":"\u4E09\u3001\u6D4F\u89C8\u5668\u7F13\u5B58","slug":"\u4E09\u3001\u6D4F\u89C8\u5668\u7F13\u5B58"},{"level":3,"title":"1. \u5BF9\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u673A\u5236\u7684\u7406\u89E3","slug":"_1-\u5BF9\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u673A\u5236\u7684\u7406\u89E3"},{"level":3,"title":"2. \u534F\u5546\u7F13\u5B58\u548C\u5F3A\u7F13\u5B58\u7684\u533A\u522B","slug":"_2-\u534F\u5546\u7F13\u5B58\u548C\u5F3A\u7F13\u5B58\u7684\u533A\u522B"},{"level":3,"title":"3. \u4E3A\u4EC0\u4E48\u9700\u8981\u6D4F\u89C8\u5668\u7F13\u5B58\uFF1F","slug":"_3-\u4E3A\u4EC0\u4E48\u9700\u8981\u6D4F\u89C8\u5668\u7F13\u5B58\uFF1F"},{"level":3,"title":"4. \u70B9\u51FB\u5237\u65B0\u6309\u94AE\u6216\u8005\u6309 F5\u3001\u6309 Ctrl+F5 \uFF08\u5F3A\u5236\u5237\u65B0\uFF09\u3001\u5730\u5740\u680F\u56DE\u8F66\u6709\u4EC0\u4E48\u533A\u522B\uFF1F","slug":"_4-\u70B9\u51FB\u5237\u65B0\u6309\u94AE\u6216\u8005\u6309-f5\u3001\u6309-ctrl-f5-\uFF08\u5F3A\u5236\u5237\u65B0\uFF09\u3001\u5730\u5740\u680F\u56DE\u8F66\u6709\u4EC0\u4E48\u533A\u522B\uFF1F"},{"level":2,"title":"\u56DB\u3001\u6D4F\u89C8\u5668\u7EC4\u6210","slug":"\u56DB\u3001\u6D4F\u89C8\u5668\u7EC4\u6210"},{"level":3,"title":"1. \u5BF9\u6D4F\u89C8\u5668\u7684\u7406\u89E3","slug":"_1-\u5BF9\u6D4F\u89C8\u5668\u7684\u7406\u89E3"},{"level":3,"title":"2. \u5BF9\u6D4F\u89C8\u5668\u5185\u6838\u7684\u7406\u89E3","slug":"_2-\u5BF9\u6D4F\u89C8\u5668\u5185\u6838\u7684\u7406\u89E3"},{"level":3,"title":"3. \u5E38\u89C1\u7684\u6D4F\u89C8\u5668\u5185\u6838\u6BD4\u8F83","slug":"_3-\u5E38\u89C1\u7684\u6D4F\u89C8\u5668\u5185\u6838\u6BD4\u8F83"},{"level":3,"title":"4. \u5E38\u89C1\u6D4F\u89C8\u5668\u6240\u7528\u5185\u6838","slug":"_4-\u5E38\u89C1\u6D4F\u89C8\u5668\u6240\u7528\u5185\u6838"},{"level":3,"title":"5. \u6D4F\u89C8\u5668\u7684\u4E3B\u8981\u7EC4\u6210\u90E8\u5206","slug":"_5-\u6D4F\u89C8\u5668\u7684\u4E3B\u8981\u7EC4\u6210\u90E8\u5206"},{"level":2,"title":"\u4E94\u3001\u6D4F\u89C8\u5668\u6E32\u67D3\u539F\u7406","slug":"\u4E94\u3001\u6D4F\u89C8\u5668\u6E32\u67D3\u539F\u7406"},{"level":3,"title":"1. \u6D4F\u89C8\u5668\u7684\u6E32\u67D3\u8FC7\u7A0B","slug":"_1-\u6D4F\u89C8\u5668\u7684\u6E32\u67D3\u8FC7\u7A0B"},{"level":3,"title":"2. \u6D4F\u89C8\u5668\u6E32\u67D3\u4F18\u5316","slug":"_2-\u6D4F\u89C8\u5668\u6E32\u67D3\u4F18\u5316"},{"level":3,"title":"3. \u6E32\u67D3\u8FC7\u7A0B\u4E2D\u9047\u5230 JS \u6587\u4EF6\u5982\u4F55\u5904\u7406\uFF1F","slug":"_3-\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u9047\u5230-js-\u6587\u4EF6\u5982\u4F55\u5904\u7406\uFF1F"},{"level":3,"title":"4. \u4EC0\u4E48\u662F\u6587\u6863\u7684\u9884\u89E3\u6790\uFF1F","slug":"_4-\u4EC0\u4E48\u662F\u6587\u6863\u7684\u9884\u89E3\u6790\uFF1F"},{"level":3,"title":"5. CSS \u5982\u4F55\u963B\u585E\u6587\u6863\u89E3\u6790\uFF1F","slug":"_5-css-\u5982\u4F55\u963B\u585E\u6587\u6863\u89E3\u6790\uFF1F"},{"level":3,"title":"6. \u5982\u4F55\u4F18\u5316\u5173\u952E\u6E32\u67D3\u8DEF\u5F84\uFF1F","slug":"_6-\u5982\u4F55\u4F18\u5316\u5173\u952E\u6E32\u67D3\u8DEF\u5F84\uFF1F"},{"level":3,"title":"7. \u4EC0\u4E48\u60C5\u51B5\u4F1A\u963B\u585E\u6E32\u67D3\uFF1F","slug":"_7-\u4EC0\u4E48\u60C5\u51B5\u4F1A\u963B\u585E\u6E32\u67D3\uFF1F"},{"level":2,"title":"\u516D\u3001\u6D4F\u89C8\u5668\u672C\u5730\u5B58\u50A8","slug":"\u516D\u3001\u6D4F\u89C8\u5668\u672C\u5730\u5B58\u50A8"},{"level":3,"title":"1. \u6D4F\u89C8\u5668\u672C\u5730\u5B58\u50A8\u65B9\u5F0F\u53CA\u4F7F\u7528\u573A\u666F","slug":"_1-\u6D4F\u89C8\u5668\u672C\u5730\u5B58\u50A8\u65B9\u5F0F\u53CA\u4F7F\u7528\u573A\u666F"},{"level":3,"title":"2. Cookie\u6709\u54EA\u4E9B\u5B57\u6BB5\uFF0C\u4F5C\u7528\u5206\u522B\u662F\u4EC0\u4E48","slug":"_2-cookie\u6709\u54EA\u4E9B\u5B57\u6BB5\uFF0C\u4F5C\u7528\u5206\u522B\u662F\u4EC0\u4E48"},{"level":3,"title":"3. Cookie\u3001LocalStorage\u3001SessionStorage\u533A\u522B","slug":"_3-cookie\u3001localstorage\u3001sessionstorage\u533A\u522B"},{"level":3,"title":"4. \u524D\u7AEF\u50A8\u5B58\u7684\u2F45\u5F0F\u6709\u54EA\u4E9B\uFF1F","slug":"_4-\u524D\u7AEF\u50A8\u5B58\u7684\u2F45\u5F0F\u6709\u54EA\u4E9B\uFF1F"},{"level":3,"title":"5. IndexedDB\u6709\u54EA\u4E9B\u7279\u70B9\uFF1F","slug":"_5-indexeddb\u6709\u54EA\u4E9B\u7279\u70B9\uFF1F"},{"level":2,"title":"\u4E03\u3001\u6D4F\u89C8\u5668\u540C\u6E90\u7B56\u7565","slug":"\u4E03\u3001\u6D4F\u89C8\u5668\u540C\u6E90\u7B56\u7565"},{"level":3,"title":"1. \u4EC0\u4E48\u662F\u540C\u6E90\u7B56\u7565","slug":"_1-\u4EC0\u4E48\u662F\u540C\u6E90\u7B56\u7565"},{"level":3,"title":"2. \u5982\u4F55\u89E3\u51B3\u8DE8\u8D8A\u95EE\u9898","slug":"_2-\u5982\u4F55\u89E3\u51B3\u8DE8\u8D8A\u95EE\u9898"},{"level":3,"title":"3. \u6B63\u5411\u4EE3\u7406\u548C\u53CD\u5411\u4EE3\u7406\u7684\u533A\u522B","slug":"_3-\u6B63\u5411\u4EE3\u7406\u548C\u53CD\u5411\u4EE3\u7406\u7684\u533A\u522B"},{"level":3,"title":"4. Nginx\u7684\u6982\u5FF5\u53CA\u5176\u5DE5\u4F5C\u539F\u7406","slug":"_4-nginx\u7684\u6982\u5FF5\u53CA\u5176\u5DE5\u4F5C\u539F\u7406"},{"level":2,"title":"\u516B\u3001\u6D4F\u89C8\u5668\u4E8B\u4EF6\u673A\u5236","slug":"\u516B\u3001\u6D4F\u89C8\u5668\u4E8B\u4EF6\u673A\u5236"},{"level":3,"title":"1. \u4E8B\u4EF6\u662F\u4EC0\u4E48\uFF1F\u4E8B\u4EF6\u6A21\u578B\uFF1F","slug":"_1-\u4E8B\u4EF6\u662F\u4EC0\u4E48\uFF1F\u4E8B\u4EF6\u6A21\u578B\uFF1F"},{"level":3,"title":"2. \u5982\u4F55\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1","slug":"_2-\u5982\u4F55\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1"},{"level":3,"title":"3. \u5BF9\u4E8B\u4EF6\u59D4\u6258\u7684\u7406\u89E3","slug":"_3-\u5BF9\u4E8B\u4EF6\u59D4\u6258\u7684\u7406\u89E3"},{"level":3,"title":"4. \u4E8B\u4EF6\u59D4\u6258\u7684\u4F7F\u7528\u573A\u666F","slug":"_4-\u4E8B\u4EF6\u59D4\u6258\u7684\u4F7F\u7528\u573A\u666F"},{"level":3,"title":"5. \u540C\u6B65\u548C\u5F02\u6B65\u7684\u533A\u522B","slug":"_5-\u540C\u6B65\u548C\u5F02\u6B65\u7684\u533A\u522B"},{"level":3,"title":"6. \u5BF9\u4E8B\u4EF6\u5FAA\u73AF\u7684\u7406\u89E3","slug":"_6-\u5BF9\u4E8B\u4EF6\u5FAA\u73AF\u7684\u7406\u89E3"},{"level":3,"title":"7. \u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u5206\u522B\u6709\u54EA\u4E9B","slug":"_7-\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u5206\u522B\u6709\u54EA\u4E9B"},{"level":3,"title":"8. \u4EC0\u4E48\u662F\u6267\u884C\u6808","slug":"_8-\u4EC0\u4E48\u662F\u6267\u884C\u6808"},{"level":3,"title":"9. Node \u4E2D\u7684 Event Loop \u548C\u6D4F\u89C8\u5668\u4E2D\u7684\u6709\u4EC0\u4E48\u533A\u522B\uFF1Fprocess.nextTick \u6267\u884C\u987A\u5E8F\uFF1F","slug":"_9-node-\u4E2D\u7684-event-loop-\u548C\u6D4F\u89C8\u5668\u4E2D\u7684\u6709\u4EC0\u4E48\u533A\u522B\uFF1Fprocess-nexttick-\u6267\u884C\u987A\u5E8F\uFF1F"},{"level":3,"title":"10. \u4E8B\u4EF6\u89E6\u53D1\u7684\u8FC7\u7A0B\u662F\u600E\u6837\u7684","slug":"_10-\u4E8B\u4EF6\u89E6\u53D1\u7684\u8FC7\u7A0B\u662F\u600E\u6837\u7684"},{"level":2,"title":"\u4E5D\u3001\u6D4F\u89C8\u5668\u5783\u573E\u56DE\u6536\u673A\u5236","slug":"\u4E5D\u3001\u6D4F\u89C8\u5668\u5783\u573E\u56DE\u6536\u673A\u5236"},{"level":3,"title":"1. V8\u7684\u5783\u573E\u56DE\u6536\u673A\u5236\u662F\u600E\u6837\u7684","slug":"_1-v8\u7684\u5783\u573E\u56DE\u6536\u673A\u5236\u662F\u600E\u6837\u7684"},{"level":3,"title":"2. \u54EA\u4E9B\u64CD\u4F5C\u4F1A\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\uFF1F","slug":"_2-\u54EA\u4E9B\u64CD\u4F5C\u4F1A\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\uFF1F"}],"relativePath":"posts/\u524D\u7AEF\u9762\u8BD5\u9898\u4E4B\u6D4F\u89C8\u5668\u539F\u7406\u7BC7\u6458\u81EA\u8BED\u96C0.md","lastUpdated":1665244525767}',g={},h=t("",518),m=[h];function f(S,v,b,_,w,C){return a(),s("div",null,m)}var T=n(g,[["render",f]]);export{y as __pageData,T as default};
