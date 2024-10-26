window.RandomWord = function(randomFlag, min, max) {
  let str = "",
    range = min,
    arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '3', '4', '5', '6', '7', '8', '9'];
  // 随机产生
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min;
  }
  for (var i = 0; i < range; i++) {
    let pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str;
}
window.XFCAPP = {
  version:"1.0.1",
  common:"https://www.sebocao.cc",
  shareURL: "https://download.xfc01.com/d/xfc.apk",
  appDowloadURL:"https://download.xfc01.com/d/xfc.apk",
  account: "@xfcapp",
  kefuDOM:`在线客服联系方式：Telegram: @xfcapp`,
  beiyongURLLIST: [
    { name: "APP下载地址", link: "https://download.xfc01.com" },
    { name: "APP下载地址", link: "hhttps://download.xfc01.com" }
  ],
  topNotice:[
    '商务联系 @xfcapp',
    'APP都安全无毒，狼友们多装几款备用！',
    '性福宝官方APP.',
  ],
  siteList:[
    {url:`http://${RandomWord(1,3,10)}.zhikangapp.com`,name:"免费XNXX在线",star:"95.83w",viewNum:0,sort:1,desc:"免费观看部分地区打开异常",typeText:"进入",image:"https://tupian.lhytjz.com/tu/tu1/zb99.dt"},
    {url:`http://${RandomWord(1,3,10)}.xxx-xnxx-xvideos.com`,name:"免费XVIDEOS",star:"75.31w",sort:1,viewNum:0,desc:"免费观看部分地区打开异常",typeText:"进入",image:"https://tupian.lhytjz.com/tu/tu1/188.dt"},
    {url:`http://${RandomWord(1,3,10)}.xfb01.cyou`,name:"好色TV",star:"65.56w",sort:1,viewNum:0,desc:"免费观看部分地区打开异常",typeText:"进入",image:"https://tupian.lhytjz.com/tu/tu1/lianren200.dt"},
  ],
  videoList:[
    `http://${RandomWord(1,3,10)}.xfb01.cyou`,
  ],
  iframevideolist:[],
  fabuDOM:`
        <div>
            <div style="text-align:center;"><img src="./assets/images/common/logo.png" width="60" height="60"></div>
            <h1 style="color:red;padding:5px 0;">APP下载地址</h1>
            <div
            </div>
            <h1 style="color:red;padding:5px 0;">视频免费视频在线看！</h1>
        </div>
      `,
  erweimaURL: [
    { name: "APP下载地址", src: "https://download.xfc01.com/d/erweima1.png", link: 'https://download.xfc01.com' },
  ],
  notice:"",
  gonggaoDom: `
        <div>
            <div style="text-align:center;"><img src="./assets/images/common/logo.png" width="60" height="60"></div>
            <h1 style="color:red;padding:5px 0;">视频免费视频在线看！</h1>
        </div>
      `,
  gonggaoAPPdom: `
          <div>
          </div>
        `
}