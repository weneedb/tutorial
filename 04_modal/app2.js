const moreBtn = document.querySelector('.more_btn');
// 변수를 잡을때 const
const closeBtn = document.querySelector('.close_btn');
const contents = document.querySelector('.contents');
const modal = document.querySelector('.modal')

moreBtn.addEventListener('click', ()=> {
    contents.classList.add('active')
    modal.classList.add('active')
})

closeBtn.addEventListener('click', ()=> {
    contents.classList.remove('active')
    modal.classList.remove('active')
})

// addEventListener 이벤트 추가 (행동,)
// () => {} = function
// 매서드 () 프로프티 =
