let list = document.querySelector('.list');
let items = document.querySelectorAll('.item');
let dots = document.querySelectorAll(' .sliders-dots li');
let previos = document.querySelector('#prev');
let next = document.querySelector('#next');

let active =0;
let slidersLength = items.length - 1;
next.onclick= function(){
    if(active+1 > slidersLength)
    {
        active = 0;
    }else
    {
        active = active + 1;
    }
    showSlider();
}
let playSliders=setInterval(() => {next.click()},6000);
function showSlider() {
    let checkLeft = items[active].offsetLeft;
    console.log(checkLeft);
    list.style.left = -checkLeft + 'px';
    let prevActiveDot =document.querySelector('li.active');
    prevActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(playSliders);
    playSliders=setInterval(() => {next.click()},6000);

}
previos.onclick= function(){
    if(active == 0)
    {
        active = slidersLength;
    }else
    {
        active = active - 1;
    }
    showSlider();
}
dots.forEach((li , i)=> {
    li.addEventListener('click', function(){
        active = i;
        showSlider()
    })
})