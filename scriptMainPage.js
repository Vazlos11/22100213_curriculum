let index = 0;
mostrarSlide(index);
function cambiarSlide(n) {
    mostrarSlide(index += n);
}
function mostrarSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        index = 0;
    }
    if (n < 0) {
        index = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}