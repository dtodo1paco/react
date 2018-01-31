var debug = function(msg) {
    var date = new Date();
    var str = 'PROD: ';
    if ("production" !== process.env.NODE_ENV) str = "DEBUG: ";
    str = str + '[' + formatDate(date) + '] ';
    console.log(str + msg);
}

function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var millis = date.getMilliseconds()
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    millis = millis < 10 ? '00'+millis: millis < 100 ? '0' + millis : millis;
    var strTime = hours + ':' + minutes + ':' + seconds + ',' + millis;
    return strTime;
}

module.exports = debug;