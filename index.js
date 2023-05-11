const themeBtn = document.getElementById('btn')

themeBtn.addEventListener('click', function() {
    const body = document.querySelector('body')
    body.classList.toggle('dark-mode')
})


// Displaying ml amd js alternately
// i keeps track of which to display next
let i = 1

setInterval(() =>{
    const ml = document.getElementById('ml')
    const js = document.getElementById('js')

    // check if i is even or odd using % modulus operator
    // if even hide ml and show js
    if (i % 2 === 0){
        ml.style.display = 'none'
        js.style.display = 'block'
    }
    else{
        // if odd hide js and show ml
        ml.style.display = 'block'
        js.style.display = 'none'
    }

    // increment i to display next element i.e ml or js on next interval
    i++
}, 1300)
















