 // Authorization :  eFfImOSMbFmZHbqSq0tH4scw8UcFl1QXHdScwThj32udgCHO59gUTdr8
// https://api.pexels.com/v1/curated?per_page=1
// https://api.pexels.com/v1/search?query=nature&per_page=1

const API_KEY = 'eFfImOSMbFmZHbqSq0tH4scw8UcFl1QXHdScwThj32udgCHO59gUTdr8'
const galleryDiv = document.querySelector('.gallery')
const form = document.querySelector('form')
const loadMore = document.querySelector('.load_more')


let pageIdex = 1
let query = ''

async function getMoreImg(query) {
    const baseURL = `https://api.pexels.com/v1/curated?per_page=1`
    const data = await fetchImg(baseURL)
    paintImg(data,photos)
}

function getSearchImg(query) {
    galleryDiv.innerHTML = ''
    getMoreImg(query)
}

function paintImg(photos) {
    photos.forEach(photo => {
        const item = document.childElement('div')
        item.classlist.add('item')
        const html = ` <a href="${photo.src.orignal} taget="_blank">
        <div class="photo">
            <img src="${photo.src.medium}" alt="">
        </div>
        </a>
        <div class="info">
            <h3>${photo.photgrapher}</h3>
        </div>`
        item.innerHTML = html

        galleryDiv.appendChild(item)
    })
}

async function fetchImg(baseURL) {
        const res = await fetch(baseURL, {
        headrs : {
            Authorization : API_KEY
        }
    })
    const data = await res.json()
    return data
}


async function getImg(pageIndex) {
    const baseURL = `https://api.pexels.com/v1/curated?page=${pageIndex}&per_page=12`
    const data = await fetchImg(baseURL)
    paintImg(data,photos)
}   

 function init() {
    getImg(pageIdex)

    form.addEventListener('submit', e => {
        e.preventDefault()
        const searchValue = e.target.querySelector('input').value
        getSearchImg(searchValue)
    })
 }

 init()

