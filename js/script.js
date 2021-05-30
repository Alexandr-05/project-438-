// /* Индекс слайда по умолчанию */
// let slideIndex = 1;
// showSlides(slideIndex);

// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function plusSlide() {
//     showSlides(slideIndex += 1);
// }

// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function minusSlide() {
//     showSlides(slideIndex -= 1);
// }

// /* Устанавливает текущий слайд */
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// /* Основная функция слайдера */
// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("item");
//     let dots = document.getElementsByClassName("slider-dots_item");
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }










var slide_index = 1;
            displaySlides(slide_index);

            function nextSlide(n) {
                displaySlides(slide_index += n);
            }

            function currentSlide(n) {
                displaySlides(slide_index = n);
            }

            function displaySlides(n) {
                var i;
                var slides = document.getElementsByClassName("showSlide");
                if (n > slides.length) { slide_index = 1 }
                if (n < 1) { slide_index = slides.length }
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slides[slide_index - 1].style.display = "block";
            }