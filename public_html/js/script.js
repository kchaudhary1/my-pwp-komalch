// Text typing effect
var typed = new Typed('.animate', {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
// Text Typing effect
var x = 0;
var textEffect = "Komal Chaudhary";
var Container = document.getElementById('typing');
function  animate(){
    if(x < textEffect.length){
        Container.innerHTML += textEffect.charAt(x);
        x++;
        setTimeout(animate, 80);
    }
}
animate();

//Sticky navbar
// window.addEventListener("scroll", function (){
//     var header = document.querySelector('header')
//     header.classList.toggle("sticky", window.scrollY > 2);
// })
