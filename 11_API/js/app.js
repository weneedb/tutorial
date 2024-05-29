// key - 54081cb863128904b4bf3e1e1fe8cd54
// GET - https://dapi.kakao.com/v3/search/book?target=title
// query=미움받을 용기
// Authorization: KakaoAK ${REST_API_KEY}

const input = document.querySelector("form input")
const btn = document.getElementById("btn")
const bookContainer = document.querySelector(".book_container")


let bookName = 'html'

function getBooks() {
    $.ajax(
        {
		type: 'GET', //데이터 전송 타입,
		url : 'https://dapi.kakao.com/v3/search/book', //데이터를 주고받을 파일 주소 입력,
		data: {
            query: bookName, 
            size : 20
        },//보내는 데이터,
        headers  : {
            Authorization: 'KakaoAK 54081cb863128904b4bf3e1e1fe8cd54'
        }
	}
    ).done(function(books) {
        const bookItems = books.documents

        const bookItem = bookItems.map(item => {
            return `<div class="book">
            <img src="${item.thumbnail}" alt="">
            <h4>${item.title}</h4>
            <p>가격 : ${item.price}원</p>
            <p>출판사 : ${item.publisher}</p>
            </div>`
    }).join('')

    bookContainer.innerHTML = bookItem

    })
}

getBooks()

btn.addEventListener('click',function(e){
    e.preventDefault()
    if(input.value === '') return
    bookName = input.value
    getBooks()
    input.value = ''
})