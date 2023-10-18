import{_ as l,r as s,o as r,c as a,a as t,b as e,d as n}from"./app-25465c35.js";const i={},d=t("p",null,"在上一章节中，我们了解了什么是ESP32、什么是ESP-IDF。我们已经对这两个方面有了一定的了解，万事俱备，只欠东风。在正式开始学习或者说编程之前，我们还需要将我们的开发环境搭建起来。",-1),_=t("p",null,"搭建开发环境我们离不开两个东西： 硬件平台+软件平台。",-1),h=t("p",null,"下面我们就来动手将我们的 DshanMCU-Mio(澪) + ESP-IDF 开发环境搭建起来。这其中我们提供了多种系统平台的搭建方法，你只需要选择你常用的一种平台即可，比如你的PC使用的是Windwos系统，那么只需要看 Windows 平台的部分即可。",-1),c=t("p",null,"在搭建环境之前，我们需要先获取到学习资料包，下面我们来看看 DshanMCU-Mio(澪) 的学习资料。",-1),u=t("h1",{id:"获取学习资料",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#获取学习资料","aria-hidden":"true"},"#"),e(" 获取学习资料")],-1),p={href:"https://forums.100ask.net/t/topic/1033",target:"_blank",rel:"noopener noreferrer"},f={href:"http://wiki.100ask.org/BeginnerLearningRoute#.E7.99.BE.E5.BA.A6.E7.BD.91.E7.9B.98.E4.BD.BF.E7.94.A8.E6.95.99.E7.A8.8B",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.aliyundrive.com",target:"_blank",rel:"noopener noreferrer"},b=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"下学习平台"),t("th",{style:{"text-align":"left"}},"下载链接"),t("th",null,"提取码")])],-1),m=t("td",{style:{"text-align":"left"}},"Arduino",-1),k={style:{"text-align":"left"}},x={href:"https://pan.baidu.com/s/1rpC0JZj6wZ2wea3NyPXTvQ?pwd=root",target:"_blank",rel:"noopener noreferrer"},w=t("br",null,null,-1),y=t("td",null,[e("百度云盘：root "),t("br"),e(" 阿里云盘：暂无")],-1),E=t("td",{style:{"text-align":"left"}},"ESP-IDF",-1),B={style:{"text-align":"left"}},D={href:"https://pan.baidu.com/s/1lNVxmixhmOdPFSmtCMUMbg?pwd=root",target:"_blank",rel:"noopener noreferrer"},P=t("br",null,null,-1),T=t("td",null,[e("百度云盘：root "),t("br"),e(" 阿里云盘：暂无")],-1),C=t("tr",null,[t("td",{style:{"text-align":"left"}},"Micropython"),t("td",{style:{"text-align":"left"}},"TODO"),t("td",null,"TODO")],-1),M=t("blockquote",null,[t("p",null,"获取最新的学习资料包，可以在上面的云盘下载来链接中获取，也可以关注我们的git仓库获取，同时非常欢迎提交你的 issues 或 Pull requests ！")],-1),S=t("p",null,"示例、组件、库源码地址：",-1),F=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"仓库名称"),t("th",{style:{"text-align":"left"}},"源码地址"),t("th",null,"说明")])],-1),v=t("td",{style:{"text-align":"left"}},"esp-arduino-learn",-1),A={style:{"text-align":"left"}},O={href:"https://github.com/100askTeam/esp-arduino-learn",target:"_blank",rel:"noopener noreferrer"},I=t("td",null,"Arduino 平台学习资料包",-1),N=t("td",{style:{"text-align":"left"}},"esp-idf-learn",-1),V={style:{"text-align":"left"}},q={href:"https://github.com/100askTeam/esp-idf-learn",target:"_blank",rel:"noopener noreferrer"},L=t("td",null,"ESP-IDF 平台学习资料包",-1),U=t("td",{style:{"text-align":"left"}},"esp-idf-components",-1),Z={style:{"text-align":"left"}},j={href:"https://github.com/100askTeam/esp-idf-components",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/100askTeam/esp-idf-learn",target:"_blank",rel:"noopener noreferrer"},J=t("tr",null,[t("td",{style:{"text-align":"left"}},"esp-micropython-learn"),t("td",{style:{"text-align":"left"}},"TODO"),t("td",null,"MicroPython 平台学习资料包")],-1),Q=t("blockquote",null,[t("p",null,[e("注意1：我们存放学习资料的路径不要有有中文及中文字符和其他特殊字符，建议路径全都是英文+阿拉伯数字+英文标点符号(其中不要使用英文符号"),t("code",null,"("),e(" 和 "),t("code",null,")"),e(" )。 否则会出现一些意想不到的问题，这都是不必要并且可以提前避免的问题。")])],-1),W=t("blockquote",null,[t("p",null,"注意2：如果使用的是 windows 系统，要注意路径长度问题。在编译某些工程可能会编译不过，这时候首先考虑是否路径过长导致的，建议将整个资料包移动到磁盘根目录之后，清除(Full Clean)之后再重新编译。")],-1),X={href:"http://download.100ask.org/tools/Software/git/how_to_use_git.html",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://www.bilibili.com/video/BV1CL4y1A7YG",target:"_blank",rel:"noopener noreferrer"};function R(z,H){const o=s("ExternalLinkIcon");return r(),a("div",null,[d,_,h,c,u,t("p",null,[t("a",p,[e("DShanMCU-Mio(澪)"),n(o)]),e("学习资料 "),t("a",f,[e("百度云盘"),n(o)]),e(" 或 "),t("a",g,[e("阿里云盘"),n(o)]),e(" 下载")]),t("table",null,[b,t("tbody",null,[t("tr",null,[m,t("td",k,[e("百度云盘："),t("a",x,[e("https://pan.baidu.com/s/1rpC0JZj6wZ2wea3NyPXTvQ?pwd=root"),n(o)]),w,e(" 阿里云盘：暂无")]),y]),t("tr",null,[E,t("td",B,[e("百度云盘："),t("a",D,[e("https://pan.baidu.com/s/1lNVxmixhmOdPFSmtCMUMbg?pwd=root "),n(o)]),e(),P,e(" 阿里云盘：暂无")]),T]),C])]),M,S,t("table",null,[F,t("tbody",null,[t("tr",null,[v,t("td",A,[t("a",O,[e("https://github.com/100askTeam/esp-arduino-learn"),n(o)])]),I]),t("tr",null,[N,t("td",V,[t("a",q,[e("https://github.com/100askTeam/esp-idf-learn"),n(o)])]),L]),t("tr",null,[U,t("td",Z,[t("a",j,[e("https://github.com/100askTeam/esp-idf-components"),n(o)])]),t("td",null,[e("ESP-IDF 平台的学习资料包的组件作为"),t("a",G,[e("esp-idf-learn"),n(o)]),e(" 的子模块，也可以单独在自己的项目中使用！")])]),J])]),Q,W,t("blockquote",null,[t("p",null,[e("注意3：在云盘下载的压缩包是一个git仓库，建议新建一个分支，或者拷贝一份用以备份，也就是一个用来同步最新的资料，一个用来学习使用。关于git的使用教程，请参阅：1. 文档教程"),t("a",X,[e("http://download.100ask.org/tools/Software/git/how_to_use_git.html"),n(o)]),e("。 2.视频教程："),t("a",Y,[e("https://www.bilibili.com/video/BV1CL4y1A7YG"),n(o)])])])])}const $=l(i,[["render",R],["__file","chapter2-1.html.vue"]]);export{$ as default};
