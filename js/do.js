var x
var y
document.addEventListener('click', function (e) {
    // var gridList = document.querySelectorAll('span.grid')
    // if (gridList.length > 0) {
    //     [].forEach.call(document.querySelectorAll('span.grid'), function (item) {
    //         item.style.backgroundColor = 'pink'
    //     })
    // }
    if (e.path && e.path[0].className === 'grid') {
        var node = e.path[0]
        var v = node.innerHTML
        var left = node.offsetLeft
        var top = node.offsetTop
        var id = node.id.split('_')
        x = id[0].substr(id[0].length - 1, 1)
        y = id[1].substr(id[1].length - 1, 1)
        initPopDom(v, left, top)
        change()
    }
})

var change = function () {
    var el = document.getElementById('pop')
    el.onclick = function (e) {
        var orgData = data[x][y]
        var html = e.path[0].innerHTML
        if (Number(html) || html === '') {
            data[x][y] = Number(html)
            e.path[0].innerHTML = orgData
            makeRow()
            makeCol()
            initDom()
        } else if (html === '?') {
            document.getElementById('box' + x + '_grid' + y).style.backgroundColor = 'lightcoral'
        } else if (html === '✓') {
            document.getElementById('box' + x + '_grid' + y).style.backgroundColor = 'lightgreen'
        }
        el.style.display = 'none'
    }
    win()
}