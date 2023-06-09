const navidata = [
    {
        d1 : "네이버",
        d1link : "http://www.naver.com"
        cls : ["naver","px-5","text-dark"]
    },
    {
        d1 : "다음",
        d1link : "http://www.daum.net"
        cls : ["daum","px-1","text-dark"]
    },
    {
        d1 : "구글",
        d1link : "http://www.google.com"
        cls : ["google","px-2","text-dark"]
    }
]

console.log(navidata[1].d1);
console.log(`<a href=http://www.daum.net>${navidata[1].d1link}>${navidata[1].d1}</a>`)
for( x in navidata){
    console.log(`<a href=http://www.daum.net>${navidata[x].d1link}>${navidata[x].d1}</a>`)
}


// let count = 0;
// setInterval(gugudan,3000)
// function gugudan(){
//     count += 2;
//     console.log(count);
// }

// const navilist = ["회사소개","제품소개","게시판"];
// console.log(navilist[0])
// for( x in navilist){
//     console.log(navilist[x])
// }