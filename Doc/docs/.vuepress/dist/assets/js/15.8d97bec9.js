(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{389:function(t,s,a){"use strict";a.r(s);var v=a(45),r=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"时间轴修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间轴修复"}},[t._v("#")]),t._v(" 时间轴修复")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("时间轴修复功能为DDTV Core的核心预设功能，是通过下载过程中的代码实现的，不需要单独设置")])]),t._v(" "),a("h2",{attrs:{id:"时间轴错误产生的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间轴错误产生的原因"}},[t._v("#")]),t._v(" 时间轴错误产生的原因")]),t._v(" "),a("p",[t._v("时间轴错误的根本原因是由于推流方的网络卡顿或断线重连导致的时间戳重置，重置后的时间戳跟在正常的时间戳后面，当播放器解析时间戳时不会检测到被重置的时间戳，这个时候文件就会错误。")]),t._v(" "),a("h2",{attrs:{id:"ddtv的处理方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ddtv的处理方法"}},[t._v("#")]),t._v(" DDTV的处理方法")]),t._v(" "),a("p",[t._v("DDTV的实现逻辑是只要检测到断流或者卡顿，会直接放弃本次连接，保存现场，马上新建重连进行续录，所以单体flv文件的时间戳肯定是正确的。"),a("br"),t._v("\n然后当录制完成后，会自动调用文件合并功能，把文件流进行合并处理，并且在合并的时候时间戳是增量写入的，所以不会出现时间戳错误的问题。")]),t._v(" "),a("h2",{attrs:{id:"ddtv的处理方式所产生的结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ddtv的处理方式所产生的结果"}},[t._v("#")]),t._v(" DDTV的处理方式所产生的结果")]),t._v(" "),a("p",[t._v("1：全程没断流，时间轴正常，只有一个flv文件"),a("br"),t._v("\n2：网络卡顿或断线重连导致时间戳出错，会自动根据断流的次数分为多个缓存文件，最后直接进行文件流合并，合并的时候会清空原有时间戳，打上正确的时间戳")]),t._v(" "),a("h2",{attrs:{id:"结论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),a("p",[t._v("录制出来的文件对用户来说就是一个可以正常播放的视频文件，不需要用户进行任何的多余操作~")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("该功能我在自己的测试服务器上录制了超过3000小时几百个不同主播的直播，全部和上述结论相同。"),a("br"),t._v("\n如果您进行录播的时候产生的该功能的任何疑问，请联系我，我进行复现测试确认问题所在，感谢。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);