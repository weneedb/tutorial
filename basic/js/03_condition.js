// 조건 condition
// if, eles, if eles 문
// {
    // const age = prompt('당신의 나이는?')
    // if(age >= 20) {
    //     console.log('성인입니다.');
    // }   else {
    //     console.log('청소년입니다.');
    // }
    // // if(조건) {
    //         // 실행
    // // }   else {
    //         // 거짓 일때 실행
    // // }
// }

// {
//     const month = prompt ('지금은 몇월입니까?')

//     if(month >= 3 && month <= 5) {

    
//             console.log('봄 입니다.');
//      } else if(onth >= 6 && month <= 8){
//             console.log('여름 입니다.');
//      } else if(onth >= 9 && month <= 11){

     
//             console.log('가을 입니다.');
//      }else {

//      }

    
//           console.log('겨울 입니다.');
// }

// 2. switch 문

// switch (key) {
//     case value1:
//         // 실행
//         break;
//     case value2:
//         // 실행
//         break;

//     default:
//         break;
// }

// 3. 
{
    const site = prompt (' 네이버, 다음, 구글 중에서 선호하는 포탈 사이트는?')
    switch (site) {
        case '구글':
            url = 'http:/google.com'
            break;
    
        case '다음':
            url = 'http:/daum.net'
            break; 
        case '네이버':
                url = 'http:/naver.com'
            break; 
        default:
                url = null
        break;     
    }

    if(url) {
        const message = `당신은 <a href=${url} target"_blank">${site}</a>를 좋아하는군요`
        document.querySelector('.text').innerHTML = message
    }else {
        
        document.querySelector('.text').innerHTML = `당신은 어떤 사이트를 좋아하시sk요`
    }

} 