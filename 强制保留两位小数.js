function toDecimal(x) {
    var f = parseFloat(x);
    if(isNaN(f)) {
        return 0;
    }
    var f = Math.round(x * 100) / 100;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 2) {
        s += '0';
    }
    return s;
}
//小程序还是h5页面就自己看着使用就好