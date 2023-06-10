window.onload = (event) => {
    buttons = document.querySelector('.filter > *').children
    selected = document.querySelectorAll('.filter .selected')[0]
    console.log(selected)
    Array.from(buttons).forEach(element => {
        element.addEventListener('click', function(e) {
            if (element != selected) {
                selected.classList.toggle('selected')
                selected = element
                element.classList.toggle('selected')
            }
        })
    });
}