// 深度克隆
var deepCopy = function (array) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
        if (array[0] instanceof Array) {
            arr[i] = deepCopy(array[i])
        } else {
            arr.push(array[i])
        }
    }
    return arr
}

var removeDom = function (selector) {
    var dom = document.querySelector(selector)
    if (dom) BODYNODE.removeChild(dom)
}