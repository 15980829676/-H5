/**
 * Created by w on 2016/8/16.
 */
//    终端检测函数
var ua = parseUA();
function parseUA() {
    var u = navigator.userAgent;
    var u2 = navigator.userAgent.toLowerCase();
    return { //移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
        iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
        weixin: u2.match(/MicroMessenger/i) == "micromessenger",
        taobao: u.indexOf('AliApp(TB') > -1,
    };
}
// 资源预加载   图片，音频，视频，js，css等文件资源都可以
var images = new Array();
preload(
  // 'img/paopao_01.png',
   //'img/yinyue_02.jpg',
   'http://res.wx.qq.com/open/js/jweixin-1.0.0.js',
    'http://47.92.94.131/mp3/1.mp3',
    'http://47.92.94.131/mp3/2.mp3',
   'http://dfn.weiyuntian.com/img/w-DAPHNE.png',
   'http://dfn.weiyuntian.com/img/w-pao1.png',
   'http://dfn.weiyuntian.com/img/w-pao2.png',
   'http://dfn.weiyuntian.com/img/w-pao3.png',
   'http://dfn.weiyuntian.com/img/w-pao4.png',
   'http://dfn.weiyuntian.com/img/w-pao5.png',
   'http://dfn.weiyuntian.com/img/w-pao6.png',
   'http://dfn.weiyuntian.com/img/w-bul.png',
   'http://dfn.weiyuntian.com/img/w-bu2.png',
   'http://dfn.weiyuntian.com/img/w-toum.png',
   //'http://dfn.weiyuntian.com/img/three.gif',
   'http://dfn.weiyuntian.com/img/w-bjtu.png',
   'http://dfn.weiyuntian.com/img/w-bjtu2.jpg',
   'http://dfn.weiyuntian.com/img/xuanzhuan.png',
    'http://dfn.weiyuntian.com/img/shipq-t.png'
	'http://dfn.weiyuntian.com/img/1.png',
	'http://dfn.weiyuntian.com/img/2.png',
	'http://dfn.weiyuntian.com/img/3.png',
	'http://dfn.weiyuntian.com/img/4.png',
	'http://dfn.weiyuntian.com/img/5.png',
	'http://dfn.weiyuntian.com/img/6.png',
	'http://dfn.weiyuntian.com/img/7.png',
	'http://dfn.weiyuntian.com/img/8.png',
	'http://dfn.weiyuntian.com/img/9.png',
	'http://dfn.weiyuntian.com/img/10.png',
	'http://dfn.weiyuntian.com/img/much-1.png',
	'http://dfn.weiyuntian.com/img/much-2.png',
	'http://dfn.weiyuntian.com/img/loading-s.png',
	'http://dfn.weiyuntian.com/img/bjmen.png',
	'http://dfn.weiyuntian.com/img/men-dang.png',
	'http://dfn.weiyuntian.com/img/meng.png',
	'http://dfn.weiyuntian.com/img/btt.jpg',
	'http://dfn.weiyuntian.com/img/xuanzhuan1.jpg',
	'http://dfn.weiyuntian.com/img/xuanzhuan1.png',
	'http://dfn.weiyuntian.com/img/yinbao_03.png',
	'http://dfn.weiyuntian.com/img/fs_03.png',
	'http://dfn.weiyuntian.com/img/cm2.png',
	'http://47.92.94.131/fff/phone/mp4/shiop.mp4',
);
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i]
    }
}

