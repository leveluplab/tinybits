const btn = document.getElementById('create-leak');
btn.onclick = createArrays;

function createArrays() {
    const N = 100000;

    window.emptyArr = new Array(N)

    window.strArr = []
    for (var i = 0; i < N; i++) {
        var str = (Math.random() * 10000000000).toString().substr(0, 10)
        window.strArr.push(str)
    }

    window.sameStrArr = []
    for (var i = 0; i < N; i++) {
        window.sameStrArr.push("Hello")
    }

    window.numArr = []
    for (var i = 0; i < N; i++) {
        window.numArr.push(Math.random())
    }

    window.objArr = []
    for (var i = 0; i < N; i++) {
        window.objArr.push({})
    }

    window.boolArr = []
    for (var i = 0; i < N; i++) {
        window.boolArr.push(true)
    }

    window.arrayArr = []
    for (var i = 0; i < N; i++) {
        window.arrayArr.push([])
    }

    window.mixedArr = []
    for (var i = 0; i < N; i++) {
        window.mixedArr.push(false)
    }
    window.mixedArr.shift()
    window.mixedArr.push({})
}