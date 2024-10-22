function onDeviceReady() {
    // 修改导航栏颜色
    NavigationBar.backgroundColorByHexString('#1c2035', true);
    // app 上a标签打来浏览器
    if (window.device && (window.device.platform == "iOS" || window.device.platform == "Android")) {
        window.open = cordova.InAppBrowser.open;
    }
    GLOBAL_VAR.DIS_LOADING_PAGE = false //开启动画了
    //获取设备信息
    // this.$store.commit("setUserDevice", window.device);
    // 设备唤醒和隐藏时触发状态
    document.addEventListener(
        "pause",
        function () {
            // Cordova应用被挂起时触发
        },
        false
    );
    document.addEventListener(
        "resume",
        function () {
            //在被挂起的应用转到前台时触发
        },
        false
    );
    // NavigationBar.backgroundColorByHexString("#C0C0C0");
    // NavigationBar.backgroundColorByName('black',true);
    //热更新
    let chcp = window.chcp;
    // 检测更新
    if (chcp) {
        // 获取更新
        checkUpdate()
    }
}
document.addEventListener("deviceready", onDeviceReady, false);

