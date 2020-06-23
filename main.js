const time=document.querySelector('#time')
const launch=new Date('14/dec/2020 9:10:20').getTime();
const inter=setInterval(function(){
    const today=new Date().getTime();
    let distance=launch-today;
    
    let days=Math.floor(distance/(1000*60*60*24));
    let hrs=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    let min=Math.floor((distance%(1000*60*60))/(1000*60));
    let sec=Math.floor((distance%(1000*60))/(1000))
    time.innerHTML=`<div>${days}<span>Days</span></div> <div>${hrs}<span>Hours</span></div> <div>${min}<span>Minutes</span></div> <div>${sec}<span>Seconds</span></div>`

},1000)

const lnch=new Date('05/JUL/2020 21:05:54')
const mt=document.querySelector('#moont');
const int=setInterval(() => {
    const today=new Date().getTime();
    let distance;
    distance=lnch-today;
    
    console.log(distance)
    let days=Math.floor(distance/(1000*60*60*24));
    let hrs=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    let min=Math.floor((distance%(1000*60*60))/(1000*60));
    let sec=Math.floor((distance%(1000*60))/(1000));
    mt.innerHTML=`<div>${days}<span>Days</span></div> <div>${hrs}<span>Hours</span></div> <div>${min}<span>Minutes</span></div> <div>${sec}<span>Seconds</span></div>`

},1000);