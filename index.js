// THEME AND THEME LOCAL STORAGE
const themeBtn = document.getElementById('btn')
const body = document.querySelector('body')

// check if darkMode is present. 'darkMode' is the special key we assign for local storage
const darkMode = localStorage.getItem('dark-mode') === 'true'


// set initial theme according to user
if(darkMode){
    body.classList.add('dark-mode')
    themeBtn.innerText = 'Light Mode'
}
else{
    body.classList.remove('dark-mode')
    themeBtn.innerText = 'Dark Mode'
}


themeBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode')
    if(body.classList.contains('dark-mode'))
    {
        themeBtn.innerText = 'Light Mode'
        // if local storage has darkmode as true, set darkmode
        localStorage.setItem('dark-mode', 'true')

    }
    else{
        themeBtn.innerText = 'Dark Mode'
        // if local storage has no darkmode remove it
        localStorage.removeItem('dark-mode')
    }
})



//DISPLAYING ML AND JS H2 ALTERNATELY
// i keeps track of which to display next
let i = 1

setInterval(() =>{
    const ml = document.getElementById('ml')
    const js = document.getElementById('js')

    // check if i is even or odd using % modulus operator
    // if even, hide ml and show js
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
}, 1350)

















