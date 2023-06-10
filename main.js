// Window loading
window.onload = (event) => {
    const items = document.getElementsByClassName('carousel-item')
    selected = document.getElementsByClassName('carousel-item selected')[0]
    id = 0
    count = items.length
    
    setInterval(function time() {
        selected.classList.toggle('selected')
        id += 1
        selected = items[id]
        selected.classList.toggle('selected')
        if (id >= count-1) {
            id = -1
        }

    }, 5000)
    
};