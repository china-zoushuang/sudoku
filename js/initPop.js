var initPopDom = function (v, left, top) {
    var arr = initPopData(v)
    removeDom('div.pop-warpper')
    var popWarpper = document.createElement('div')
    var popNode = document.createElement('div')
    popWarpper.id = 'pop'
    popWarpper.className = 'pop-warpper'
    popNode.className = 'pop'

    for (var i = 0; i < 12; i++) {
        var gridNode = document.createElement('span')
        if (i === 9) {
            gridNode.className = 'pop_grid flag--red'
        } else if (i === 11) {
            gridNode.className = 'pop_grid flag--green'
        } else {
            gridNode.className = 'pop_grid'
        }
        gridNode.innerHTML = arr[i]
        popNode.appendChild(gridNode)
    }

    popWarpper.appendChild(popNode)
    BODYNODE.appendChild(popWarpper)
    popWarpper.style.left = left - 54 + 'px'
    popWarpper.style.top = top - 54 + 'px'
}

var initPopData = function (v) {
    var arr = [1, 2, 3, 4, '', 6, 7, 8, 9, '?', '', '✓']
    var index = arr.indexOf(Number(v))
    arr[4] = v || 5
    arr[index] = 5
    return arr
}