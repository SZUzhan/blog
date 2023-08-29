(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{464:function(t,v,_){"use strict";_.r(v);var e=_(2),a=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"http相关面试知识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http相关面试知识"}},[t._v("#")]),t._v(" HTTP相关面试知识")]),t._v(" "),v("h2",{attrs:{id:"http1-0与http1-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http1-0与http1-1"}},[t._v("#")]),t._v(" HTTP1.0与HTTP1.1")]),t._v(" "),v("h3",{attrs:{id:"http-1-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0"}},[t._v("#")]),t._v(" HTTP 1.0")]),t._v(" "),v("p",[t._v("​\t\tHTTP1.0最早在网页中使用是在1996年，那个时候只是使用一些较为简单的网页上和网络请求上,是一种"),v("strong",[t._v("无状态、无连接")]),t._v("的应用层协议，几年后被HTTP1.1代替并广泛使用")]),t._v(" "),v("ul",[v("li",[t._v("无状态，无连接")]),t._v(" "),v("li",[t._v("短连接：每次发送请求都要重新建立tcp请求，即三次握手，非常浪费性能")]),t._v(" "),v("li",[t._v("无host头域，也就是http请求头里的host，")]),t._v(" "),v("li",[t._v("不允许断点续传，而且不能只传输对象的一部分，要求传输整个对象")])]),t._v(" "),v("h3",{attrs:{id:"http-1-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1"}},[t._v("#")]),t._v(" HTTP 1.1")]),t._v(" "),v("ul",[v("li",[t._v("长连接，流水线，使用connection:keep-alive使用长连接")]),t._v(" "),v("li",[t._v("请求管道化")]),t._v(" "),v("li",[t._v("增加缓存处理（新的字段如cache-control）")]),t._v(" "),v("li",[t._v("增加Host字段，支持断点传输等")]),t._v(" "),v("li",[t._v("由于长连接会给服务器造成压力")])]),t._v(" "),v("h3",{attrs:{id:"http1-0对比http1-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http1-0对比http1-1"}},[t._v("#")]),t._v(" HTTP1.0对比HTTP1.1")]),t._v(" "),v("p",[t._v("HTTP1.1主要改进了以下几点内容")]),t._v(" "),v("ul",[v("li",[t._v("keep-alive")]),t._v(" "),v("li",[t._v("客户端缓存，增加了"),v("code",[t._v("Cache-Control")]),t._v("头域")]),t._v(" "),v("li",[t._v("连接代宽优化，HTTP1.1引入了"),v("code",[t._v("range")]),t._v("头域，支持传送内容的一部分")]),t._v(" "),v("li",[t._v("请求Host域")]),t._v(" "),v("li",[t._v("请求状态码")]),t._v(" "),v("li",[t._v("请求方法")])]),t._v(" "),v("h2",{attrs:{id:"http-2-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0"}},[t._v("#")]),t._v(" HTTP 2.0")]),t._v(" "),v("p",[t._v("​\t\thttp2.0是一种安全高效的下一代http传输协议。安全是因为http2.0建立在https协议的基础上，高效是因为它是通过二进制分帧来进行数据传输。")]),t._v(" "),v("h3",{attrs:{id:"对于http1-x的改进"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对于http1-x的改进"}},[t._v("#")]),t._v(" 对于HTTP1.x的改进")]),t._v(" "),v("ul",[v("li",[t._v("二进制分帧，使用二进制框架层把所有消息封装成二进制")]),t._v(" "),v("li",[t._v("头部压缩，双方各自维护一个header的索引表，使得不需要直接发送值，通过发送key缩减头部大小")]),t._v(" "),v("li",[t._v("多路复用（或连接共享），使用多个stream，每个stream又分帧传输，使得一个tcp连接能够处理多个http请求")]),t._v(" "),v("li",[t._v("服务器推送（Sever push），服务器可以将响应主动“"),v("strong",[t._v("推送")]),t._v("”到客户端缓存中")])]),t._v(" "),v("h3",{attrs:{id:"http-3-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-3-0"}},[t._v("#")]),t._v(" HTTP 3.0")]),t._v(" "),v("ul",[v("li",[t._v("基于google的QUIC协议，而quic协议是使用udp实现的")]),t._v(" "),v("li",[t._v("减少了tcp三次握手时间，以及tls握手时间")]),t._v(" "),v("li",[t._v("解决了http 2.0中前一个stream丢包导致后一个stream被阻塞的问题")]),t._v(" "),v("li",[t._v("优化了重传策略，重传包和原包的编号不同，降低后续重传计算的消耗")]),t._v(" "),v("li",[t._v("连接迁移，不再用tcp四元组确定一个连接，而是用一个64位随机数来确定这个连接")]),t._v(" "),v("li",[t._v("更合适的流量控制")])]),t._v(" "),v("h2",{attrs:{id:"http与https"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http与https"}},[t._v("#")]),t._v(" HTTP与HTTPS")]),t._v(" "),v("h3",{attrs:{id:"http的一些不足"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http的一些不足"}},[t._v("#")]),t._v(" HTTP的一些不足")]),t._v(" "),v("ul",[v("li",[t._v("请求信息明文传输，容易被窃听截取")]),t._v(" "),v("li",[t._v("没有验证对方身份，存在冒充危险")]),t._v(" "),v("li",[t._v("数据的完整性未校验，容易被篡改")])]),t._v(" "),v("p",[t._v("HTTPS协议（Hypertext Transfer Protocol over Secure Socket Layer）简单讲是HTTP的安全版，在HTTP协议的基础上加入SSL层(HTTP+SSL) 。 SSL（Secure Sockets Layer 安全套接层）主要用于Web的安全传输协议，在传输层对网络连接进行加密，保障在Internet上数据传输的安全。")]),t._v(" "),v("p",[t._v("**SSL（Secure Socket Layer，安全套接字层）：**1994年为 Netscape 所研发，SSL 协议位于 TCP/IP 协议与各种应用层协议之间的会话层，为数据通讯提供安全支持。")]),t._v(" "),v("p",[t._v("**TLS（Transport Layer Security，传输层安全）：**其前身是 SSL，它最初的几个版本（SSL 1.0、SSL 2.0、SSL 3.0）由网景公司开发，1999年从 3.1 开始被 IETF 标准化并改名，发展至今已经有 TLS 1.0、TLS 1.1、TLS 1.2 三个版本。SSL3.0和TLS1.0由于存在安全漏洞，已经很少被使用到。TLS 1.3 改动会比较大，目前还在草案阶段，目前使用最广泛的是TLS 1.1、TLS 1.2。")]),t._v(" "),v("p",[t._v("TLS 的作用是在可靠的 TCP 协议上构建安全的传输通道，其本身是不提供可靠性保障的，我们还是需要下层可靠的传输层协议。在通信双方建立可靠的 TCP 连接之后，我们就需要通过 TLS 握手交换双方的密钥了，在这里我们将介绍 TLS 1.2 的连接建立过程：")]),t._v(" "),v("ol",[v("li",[t._v("客户端向服务端发送 Client Hello 消息，其中携带客户端支持的协议版本、加密算法、压缩算法以及"),v("strong",[t._v("客户端生成的随机数")]),t._v("；")]),t._v(" "),v("li",[t._v("服务端收到客户端支持的协议版本、加密算法等信息后；")]),t._v(" "),v("li",[t._v("向客户端发送 Server Hello 消息，并携带选择特定的协议版本、加密方法、会话 ID 以及"),v("strong",[t._v("服务端生成的随机数")]),t._v("；")]),t._v(" "),v("li",[t._v("向客户端发送 Certificate 消息，即服务端的证书链，其中包含证书支持的域名、发行方和有效期等信息；")]),t._v(" "),v("li",[t._v("向客户端发送 Server Key Exchange 消息，传递"),v("strong",[t._v("公钥")]),t._v("以及签名等信息；")]),t._v(" "),v("li",[t._v("向客户端发送可选的消息 CertificateRequest，验证客户端的证书；")]),t._v(" "),v("li",[t._v("向客户端发送 Server Hello Done 消息，通知服务端已经发送了全部的相关信息；")]),t._v(" "),v("li",[t._v("客户端收到服务端的协议版本、加密方法、会话 ID 以及证书等信息后，验证服务端的证书；")]),t._v(" "),v("li",[t._v("向服务端发送 Client Key Exchange 消息，包含"),v("strong",[t._v("使用服务端公钥加密后的随机字符串")]),t._v("，即预主密钥（Pre Master Secret）；")]),t._v(" "),v("li",[t._v("向服务端发送 Change Cipher Spec 消息，通知服务端后面的数据段会加密传输；")]),t._v(" "),v("li",[t._v("向服务端发送 Finished 消息，其中包含加密后的握手信息；")]),t._v(" "),v("li",[t._v("服务端收到 Change Cipher Spec 和 Finished 消息后；")]),t._v(" "),v("li",[t._v("向客户端发送 Change Cipher Spec 消息，通知客户端后面的数据段会加密传输；")]),t._v(" "),v("li",[t._v("向客户端发送 Finished 消息，验证客户端的 Finished 消息并完成 TLS 握手；")])]),t._v(" "),v("h4",{attrs:{id:"如何验证证书合法性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何验证证书合法性"}},[t._v("#")]),t._v(" 如何验证证书合法性")]),t._v(" "),v("p",[t._v("（1）首先浏览器校验证书的网站域名是否与证书颁发的域名一致，再检查SSL证书中的证书吊销列表，校验证书是否在有效期内\n（2）浏览器开始查找操作系统中已内置的受信任的证书发布机构CA，与服务器发来的证书中的颁发者CA比对，用于校验证书是否为合法机构颁发\n（3）如果找不到，浏览器就会报错，说明服务器发来的证书是不可信任的。\n（4）如果找到，那么浏览器就会从操作系统中取出颁发者CA 的公钥(多数浏览器开发商发布\n版本时，会事先在内部植入常用认证机关的公开密钥)，然后对服务器发来的证书里面的签名进行解密\n（5）浏览器使用相同的hash算法计算出服务器发来的证书的hash值，将这个计算的hash值与证书中签名做对比\n（6）对比结果一致，则证明服务器发来的证书合法，没有被冒充")]),t._v(" "),v("h3",{attrs:{id:"https优势"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https优势"}},[t._v("#")]),t._v(" HTTPS优势")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("内容加密")]),t._v("建立一个信息安全通道，来保证数据传输的安全")]),t._v(" "),v("li",[v("strong",[t._v("身份认证")]),t._v("确认网站的真实性")]),t._v(" "),v("li",[v("strong",[t._v("数据完整性")]),t._v("防止内容被第三方冒充或者篡改")])]),t._v(" "),v("h3",{attrs:{id:"https劣势"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https劣势"}},[t._v("#")]),t._v(" HTTPS劣势")]),t._v(" "),v("ul",[v("li",[t._v("HTTPS协议多次握手，导致页面的加载时间延长")]),t._v(" "),v("li",[t._v("HTTPS连接缓存不如HTTP高效，会增加数据开销和功耗")]),t._v(" "),v("li",[t._v("需要专业机构颁发CA证书，一般都是收费的，功能越强大的证书费用越高")]),t._v(" "),v("li",[t._v("SSL涉及到的加密算法会消耗一部分 CPU 资源")])])])}),[],!1,null,null,null);v.default=a.exports}}]);