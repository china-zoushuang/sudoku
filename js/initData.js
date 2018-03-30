// var makeArr = function (length, value) {
// 	var row = new Array(length)
// 	row.fill(value)
// 	return row
// }
var makeMatrix = function (length, value) {
    var array = Array.from({ length: 9 }).map( function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9] } )
    return array
}
// 初始化数据
var initData = function () {
    var arr = makeMatrix(9, 1)
    data = shuffle(arr)
    makeRow()
    makeCol()
}
// 打乱数组
var shuffle = function (arr) {
    var array = []
    for (var i = 0; i < LENGTH; i++) {
        var a = []
        for (var j = 0; j < LENGTH; j++) {
            var index = parseInt(Math.random() * arr[i].length)
            a[j] = arr[i][index]
            arr[i].splice(index, 1)
        }
        array.push(a)
    }
    return array
}
var makeRow = function () {
    rowArray = Array.from({ length: 9 }).map( function () { return [] } )
    var array = deepCopy(data)
    for (var i = 0; i < 27; i++) {
        for (var j = 0; j < 3; j++) {
            var k = Math.floor(i / 3)
            var x = i % 9
            var y = Math.floor(i / 9) * 3 + j
            rowArray[k].push(array[i % 9][j] + ',' + x + ',' + y)
        }
        array[i % 9].splice(0, 3)
    }
}
var makeCol = function () {
    colArray = Array.from({ length: 9 }).map( function () { return [] } )
    for (var i = 0; i < rowArray.length; i++) {
        for (var j = 0; j < rowArray[0].length; j++) {
            colArray[i].push(rowArray[j][i])
        }
    }
}