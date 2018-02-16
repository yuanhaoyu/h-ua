const ua = function (config) {
    const _ua = navigator.userAgent.toLowerCase();
    return selectFactory(_ua);
}
const enviorment = [
    { n: isWechat, v: 'wechat' },
    { n: isQQ, v: 'mqq' },
    { n: isWeibo, v: 'weibo' },    
    { n: isAndroid, v: 'android' },
    { n: isIOS, v: 'ios' },
]
function selectFactory (ua) {
    for (let i = 0 ; i < enviorment.length; i++) {
        if (enviorment[i]["n"](ua)) {
            return enviorment[i]["v"];
        }
    }
    return 'brower';
}

function isWechat (ua) {
    return (ua.match(/MicroMessenger/i) == 'micromessenger') ? true : false;
}

function isQQ (ua) {
    return (ua.indexOf('mqqbrowser') !== -1) ? true : false;
}

function isAndroid (ua) {
    return (ua.indexOf('android') !== -1) ? true : false;
}

function isIOS (ua) {
    return (/iphone|ipad|ipod/.test(ua)) ? true : false;
}

function isWeibo (ua) {
    return (ua.indexOf('weibo') !== -1) ? true : false;
}

window.UA = ua;
export default ua;