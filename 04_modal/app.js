const showBtn = document.querySelector('.btn_show');
// 변수를 잡을때 const
const closeBtn = document.querySelector('.btn_close');
const dimm = document.querySelector('.dimm');
const modal = document.querySelector('.modal')

showBtn.addEventListener('click', ()=> {
    dimm.classList.add('show')
    modal.classList.add('show')
})

closeBtn.addEventListener('click', ()=> {
    dimm.classList.remove('show')
    modal.classList.remove('show')
})

dimm.addEventListener('click', ()=> {
    dimm.classList.remove('show')
    modal.classList.remove('show')
})
// addEventListener 이벤트 추가 (행동,)
// () => {} = function
// 매서드 () 프로프티 =
