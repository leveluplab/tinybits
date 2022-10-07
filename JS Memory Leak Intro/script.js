const btn = document.getElementById('create-leak');
btn.onclick = createArrays;
function createArrays() {
    const N = 100000;
    window.helloList = []
    for (var i = 0; i < N; i++) {
        window.helloList.push(`Hello-${i}`)
    }
}