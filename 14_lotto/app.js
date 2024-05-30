const btn = document.querySelector('.btn')
const ball = document.querySelectorAll('.numbers li')
const list = document.querySelector('.list')

let count = 0


function addList(lotto) {
    const ul = document.createElement('ul')
    ul.className = 'items'
    for(let i = 0; i < lotto.length; i++) {
        const li = document.createElement('li')
        li.innerText = lotto[i]
        ul.appendChild(li)
    }
    list.prepend(ul)
}


function paintNumber() {
    let lotto = []

    while (lotto.length < 6) {
        let num = Mach.floor(Math.random() * 45) + 1
        if(!lotto.includes(num)) { //! - 반대
        lotto.push(num)
        }
    }

    ball.forEach((item, i) => { // i - index
        item.innerText = lotto[i]
    })

    addList(lotto)

}

btn.addEventListener('click', () => {
    count++
    if(count >= 10) {
        snackbar.createSnackbar('Default Notification',{
            actions: [
              {
                text: 'Confirm',
                style: {
                  color: 'pink'
                },
                callback(button, snackbar) {           
                    snackbar.destroy()
                }
              }
            ]
          })
          btn.classList.add('none')
    } else {
    paintNumber()
    count++
    }
})

