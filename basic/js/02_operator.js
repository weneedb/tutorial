// 연산자 operator
//  1. 산술 연산자 

// {
//     console.log(100 + 10)
//     console.log(100 - 10)
//     console.log(100 * 10)
//     console.log(100 / 10)
//     console.log(101 % 10)
//     console.log(100 ** 10)
// }

// 2. 문자열 연결 연산자

// {
//     const say1 = `witer`
//     const say2 = `is`
//     const say3 = `coming`

//     console.log(say1 + say2 + say3);
//     console.log(say1 + ' ' + say2 + ' ' + say3);
//     console.log(`${say1} ${say2} ${say3}`);
//     console.log(`html` + 2);
//     console.log(`10` + 2);

// }


// 3. 대입 연산자
// {
    // let x = 10
    // let y = 5

    // x = x + y // x += y
    // console.log(x);

    // x = x - y // x -= y
    // console.log(x);

    // x = x * y // x *= y
    // console.log(x);

    // x = x / y // x /= y
    // console.log(x);


    // x = x % y // x %= y
    // console.log(x);

// }

// {
//     let tbl = `<table>`
//     tbl += '<tr>'
//     tbl += '<trd>1</trd><trd>2</trd><trd>3</trd><trd>4</trd><trd>5</trd>'
//     tbl += '</tr>'
//     tbl += '<tr>'
//     tbl += '<trd>1</trd><trd>2</trd><trd>3</trd><trd>4</trd><trd>5</trd>'
//     tbl += '</tr>'
//     tbl += '</table>'


//     console.log(tbl);
// }


// //$(/`.box`)
// {
//     document.querySelector('.box').innerHTML = tbl
// }

// 4. wmdrkd dustkswk
// {
//     let number = 8
//     console.log(number);

//     number++
//     console.log(number);

//     number--
//     console.log(number);
// }

// // 5. 비교 연산자
// {
//     console.log(18 > 100)
//     console.log(18 < 100)
//     console.log(18 != 100)


//     let 0 = 1000 > 50
//     let 0 = 20 * 50
//     let 0 = true



// }



// 6. 논리 연산자

// ! (not) ||(or) &&(and)
// || // 하나라도 true면 전부다 true
// && // 전부 true일떄만 true
// ! // 값을 반대로 바꾼다.

// 7. 동동 일치 연산자
// ==, ===, !=, !==
// ==반대!= , ===반대!==

// 8 . 삼항 조건 연산자 - ?
// ? true : fales

// 실습 : 표준 체중 테스트 프로그램
// (키 - 100) * 0.9

// 홍길동 : 키 180cm , 체중 80kg
{
    // const userHeight = 180
    // const userWeight = 80
    // const nomalWeight = (userHeight - 100) * 0.9

    // console.log(nomalWeight);

    const name = prompt(`당신의 이름은?`)
    const height = prompt(`당신의 키는?`)
    const weight = prompt(`당신의 체중은?`)
    const nomalWeight = (height - 100 ) * 0.9
    const result = weight >= nomalWeight - 5 && weight <= nomalWeight + 5
    const message = result ? `적정체중입니다.` : '적정체중이 아닙니다.'
    document.querySelector('.text').innerHTML = `${name}님은 ${message}`

}