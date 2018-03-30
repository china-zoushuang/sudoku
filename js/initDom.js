// 初始化游戏界面
var initDom = function () {
    removeDom('div.warpper')
    var sudokuNode = document.createElement('div')
    sudokuNode.className = 'warpper'

    for (var i = 0; i < LENGTH; i++) {
        // 创建盒子
        var boxId = 'box' + i
        var boxNode = creatNode('div', boxId, 'box')
        for (var j = 0; j < LENGTH; j++) {
            // 创建格子
            var gridId = boxId + '_grid' + j
            var gridNode = creatNode('span', gridId, 'grid')
            gridNode.innerHTML = data[i][j] || ''
            // gridNode.innerHTML = '(' + i + ',' + j + ')'
            if (!gridNode.innerHTML) {
                gridNode.style.cursor = 'pointer'
            }
            boxNode.appendChild(gridNode)
        }
        sudokuNode.appendChild(boxNode)
    }
    BODYNODE.appendChild(sudokuNode)
    check(rowArray)
    check(colArray)
}
// 创建节点
var creatNode = function (tag, id, className) {
    var node = document.createElement(tag)
    node.className = className
    node.id = id

    return node
}
