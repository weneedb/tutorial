// api_key = 
// (API key)
// 아이콘

class WeatherApp {
    constructor() {
        this.API_KEY = `api_key`
        this.city = document.querySelector('.city')
        this.des = document.querySelector('.des')
        this.degree = document.querySelector('.degree span')
        this.icon = document.querySelector('.icon')
        this.init()
    }

    paintWeather(data) {
        this.city.innerText = data.name
        this.des.innerText = data.weather{0}.description
        this.degree.innerText = data.main.temp
        this.icon.src = 
    }


    async fatchData(baseURL) {
        const res = await fetch(baseURL)
        const data = await res.json()
        this.paintWeather(data)
    }



    init() {
        console.log('위치 정보');
        if(){
            //getCurrentPosition(position = > {
            //console.log(position);
            const lat = position.coords.latitude
            const lon = position.coords.longitude

            const baseURL = '$(lat)& $(lon)& $(this_API_KEY)&units=metric&lang=kr'
            // 화씨 -> 섭씨 unit 페이지(&units=metric) 한글(&lang=kr)
            // & - end

            this.fatchData(baseURL)
            //})
        }
    }

}

const weather = new WeatherApp
