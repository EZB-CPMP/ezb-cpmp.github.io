// 请求服务端chcp.json
var appUpdateInfo = {};
function checkUpdate() {
    const url = "http://cc.xingfucao.org/xfc/www/chcp.json";
    fetch(url).then(res => res.json()).then(data => compareVersion(data.release)).then(isEqual => {
        console.log(isEqual,2)
        if (isEqual) {
            console.log('已是最新版' + data.release);
        } else {
            // 流程2，检查是否有可安装更新
            checkAvalilable();
        }
    }).catch((error) => {
        console.log(error)
        console.log('checkUpdate failed' + JSON.stringify(error))
    });
}
// 检查是否有可安装的更新
function checkAvalilable() {
    window.chcp.isUpdateAvailableForInstallation((error, data) => {
        if (error) {
            console.log('isUpdateAvailableForInstallation error' + JSON.stringify(error));
            checkHotUpdate();
            return;
        }
        // 已有可安装版本
        beforeInstallAlert();
    });
}
function beforeInstallAlert(message) {
    // 弹窗逻辑，点击“立即体验”调用
    console.log('已更新到最新版本，请确认使用！')
    installUpdate()
}
//安装
function installUpdate() {
    window.chcp.installUpdate((error) => {
        if (error) {
            console.log('installUpdate error', error);
            console.log(`安装失败: ${error.code}`);
            return;
        }
        console.log('installUpdate done');
    });
}
// 获取本地的currentWebVersion，并和服务端的release比较
function compareVersion(serverVersion) {
    return new Promise((resolve, reject) => {
        window.chcp.getVersionInfo((error, data) => {
            console.log('本地版本' + data.currentWebVersion + '线上版本' + serverVersion)
            if (error) {
                reject(error)
            } else {
                resolve(data.currentWebVersion === serverVersion);
            }
        });
    });
}

// 获取更新
function checkHotUpdate() {
    window.chcp.fetchUpdate((error, data) => {
        if (error) {
            if (error.code == 2) {
                console.log('已是最新版');
            } else if (error.code == -17) {
                console.log('正在下载更新中...');
            } else if (error.code == -2) {
            } else {
                console.log(`出错了: ${error.code}`);
            }
            return;
        }
        // 服务器版本信息
        // console.log('fetchUpdate data', data);
        // JSON解析config
        const config = data && data.config && JSON.parse(data.config);
        // console.log('fetchUpdate config', config);
        // 下载完成，message为自定义字段，表示更新内容
        beforeInstallAlert(config && config.message);
    });
}