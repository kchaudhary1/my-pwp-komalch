var typed = new Typed('.animate', {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

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

