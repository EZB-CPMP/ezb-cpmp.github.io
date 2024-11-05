
var ADVDOMINFN = function(imgdom,appdom,textdom){
    return `
        <div id="ADV-info-connect"></div>
        <div id="ADV-dom-map-in">
            <div class="app-adv">${appdom}</div>
            <div class="img-adv">${imgdom}</div>
            <div class="text-adv">${textdom}</div>
        </div>
    `
};
var ADVINFOCONT = `<iframe style="width: 100%;height:180px; "  frameborder="0" src="/html/sbb-adv.html"></iframe>`
var FRIENDLIKDOM = function(dom){
return `
    <h2>备用网址</h2>
    <div style="margin:10px 0;" class="app-friendlink">${dom}</div>
`
}
var appAdvList = [
]   
var friendLinkList = [
   {name:'备用一区',url:'http://xvideos.aopincg.com'},
   {name:'备用二区',url:'http://xvideos.iunlockuniverse.com'},
   {name:'备用三区',url:'http://xvideos.jiuqichongtian.com'},
   {name:'备用四区',url:'http://xvideos.ldldb.com'},
   {name:'备用五区',url:'http://xvideos.qingdaoduanzao.com'},
   {name:'备用六区',url:'http://xvideos.shdgzsg.com'},
   {name:'备用七区',url:'http://xvideos.seuexam.com'},
   {name:'在线看AV一',url:'http://wwwav.bttdqc.com'},
   {name:'免费看AV二',url:'http://wwwav.chngyl.com'},
   {name:'免费看AV三',url:'http://wwwav.ccer3060.com'},
    {name:"XNXX一区",url:"http://www.xxxav.site"},
    {name:"XNXX二区",url:"http://www.xxxav.net"},
    {name:"XNXX三区",url:"http://www.xnxxgc.com"},
    {name:"XNXX四区",url:"http://www.mnxnxx.com"},
    {name:"XNXX五区",url:"http://www.xnxxsp.com"},
    {name:"XNXX六区",url:"http://www.xxx-zh.com"},
    {name:"XNXX七区",url:"http://www.xnxx-zh.com"},
    {name:"XNXX八区",url:"http://www.xnxx-cn.com"},

]
var imgAdvList = [
]
var textAdvList = [
  {name:"国产",url:"/?k=国产"},
  {name:"91",url:"/?k=91"},
  {name:"麻豆",url:"/?k=麻豆"},
  {name:"主播",url:"/?k=主播"},
  {name:"日韩",url:"/?k=日韩"},
  {name:"技师",url:"/?k=技师"},
  {name:"小姐",url:"/?k=小姐"},
  {name:"按摩",url:"/?k=按摩"},
  {name:"少妇",url:"/?k=少妇"},
  {name:"人妻",url:"/?k=人妻"},
  {name:"熟女",url:"/?k=熟女"},
  {name:"微胖",url:"/?k=微胖"},
  {name:"强上",url:"/?k=强上"},
  {name:"直播",url:"/?k=直播"},
  {name:"足交",url:"/?k=足交"},
  {name:"偷拍",url:"/?k=偷拍"},
  {name:"黑人",url:"/?k=黑人"},
  {name:"迷奸",url:"/?k=迷奸"},
  {name:"变态",url:"/?k=变态"},
  {name:"校园",url:"/?k=校园"},
  {name:"处女",url:"/?k=处女"},
  {name:"足疗",url:"/?k=足疗"},
  {name:"嫖娼",url:"/?k=嫖娼"},
  {name:"处女",url:"/?k=处女"},
  {name:"会所",url:"/?k=会所"},
  {name:"模特",url:"/?k=模特"},
  {name:"嫩模",url:"/?k=嫩模"},
  {name:"学生",url:"/?k=学生"},
  {name:"无毛",url:"/?k=无毛"},
  {name:"嫩逼",url:"/?k=嫩逼"},
  {name:"调教",url:"/?k=调教"},
  {name:"大奶",url:"/?k=大奶"},
  {name:"无套",url:"/?k=无套"},
  {name:"肛交",url:"/?k=肛交"},
  {name:"女同",url:"/?k=女同"},
  {name:"同性",url:"/?k=同性"},
  {name:"黑人",url:"/?k=黑人"},
  {name:"日本",url:"/?k=日本"},
  {name:"乳交",url:"/?k=乳交"},
  {name:"性虐",url:"/?k=性虐"},
  {name:"重口",url:"/?k=重口"},
  {name:"主播",url:"/?k=主播"},
  {name:"萝莉",url:"/?k=萝莉"},
  {name:"明星",url:"/?k=明星"},
  {name:"强奸",url:"/?k=强奸"},
  {name:"乱伦",url:"/?k=乱伦"},
  {name:"暴躁",url:"/?k=暴躁"},
  {name:"SM",url:"/?k=SM"},

]
var appAdvListText = '';
var imgAdvListText = '';
var textAdvListText = '';
var friendLinkListText = '';
appAdvList.forEach(item=>{
  appAdvListText+=`<a href="${item.url}" ><img src="${item.image}" /><span>${item.name}</span></a>`
});
imgAdvList.forEach(item=>{
  imgAdvListText+=`<a href="${item.url}" ><img src="${item.image}" /></a>`
});
textAdvList.forEach(item=>{
  textAdvListText+=`<a href="${item.url}">${item.name}</a>`
});
friendLinkList.forEach(item=>{
  friendLinkListText+=`<a href="${item.url}" >${item.name}</a>`
});
var ALLDOMINPAGE = ADVDOMINFN(imgAdvListText,appAdvListText,textAdvListText);
var ALLFRIENDLINK = FRIENDLIKDOM(friendLinkListText)
window.onload = function () {
  $('#main').prepend(ALLDOMINPAGE)
  $('.thumb-ad').remove();
  $('.premium-results-line').remove();
  $('#footer').append(ALLFRIENDLINK);
  $('#ADV-info-connect').append(ADVINFOCONT)
  // $('#footer').append(ALLDOMINPAGE);
  $('#related-videos .show-more').text('加载更多');
  $('#search-associates').addClass('mobile-expanded');
  const commonDom = `<div id="reloadP" onclick="refresh();window.location.reload();">刷新</div>`
  $('.head__top__container').append(commonDom)
  $('.player-enlarged').prepend(`<div id="video-tips">如无法观看请点击右上角刷新尝试~</div>`)
}

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e7ce78987706ff4470d71ced3d8363b8";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
var refresh = function(){
  var data = {
    host:window.location.host,
    url:window.location.href,
    pathname:window.location.pathname,
  }
  
  if(data.host&&data.url&&data.pathname&&data.pathname!=='/'){
    $.ajax({
      type: "POST",
      url: '/refresh',
      data,
      success: function(res){},
    });
  }
}
var vidfiled = document.querySelector("#html5video video");
if(vidfiled){
  vidfiled.onerror = function() {
    refresh()
  };
}
xv.utils.loadScript = null;
AdProvider = null;
ExoAdsRefresh = null;
xv.conf.ads_loaded = false;
window.onerror = null


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-BX41HQ1KSK');