var check = function (arr) {
    // var gridList = document.querySelectorAll('span.grid')
    // if (gridList.length > 0) {
    //     [].forEach.call(document.querySelectorAll('span.grid'), function (item) {
    //         item.style.backgroundColor = 'white'
    //     })
    // }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            arr[i].filter(function (item, index) {
                var a = arr[i][j].split(',')
                var v = a[0]
                var x = a[1]
                var y = a[2]
                if (v !== '0' && item.split(',')[0] === v && index != j) {
                    document.getElementById('box' + x + '_grid' + y).style.backgroundColor = 'lightblue'
                }
            })
        }
    }
}