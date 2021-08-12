// swiper slider index
new Swiper('.index-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
});

// swiper product page gallery
new Swiper('.gallery-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    centeredSlides: false,
    slidesPerView: 1,
    loop: false,
});

// swiper product page compare
new Swiper('.compare-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    centeredSlides: false,
    loop: false,
    breakpoints: {
        310: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4.1,
        },
    },
});

//tabs product page gallery
$( function() {
    $( "#gallery-tabs" ).tabs();
} );

//меняем цвет машины подменой изображения по названию
$(function() {
    $('.car_colors ul li:first-child').toggleClass('active');
    let titleTxt = $('.car_colors ul li.active').attr('data-title');
    $('.car_colors .car_colors-title').text(titleTxt);

    $('.car_colors ul li').on('click', function () {
        $('.car_colors ul li').removeClass('active');
        $(this).toggleClass('active');

        let carColor = $(this).attr('data-color');
        $('.car__container_photo img').attr('src', 'assets/images/card/'+carColor+'.png')
    });
});

//слайдер в карточке товара, который ползунком заменяет картинку
$( function() {
        let active = false;
    document.querySelector('.scroller').addEventListener('mousedown',function(){
    active = true;
    document.querySelector('.scroller').classList.add('scrolling');
    });
    document.body.addEventListener('mouseup',function(){
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
    });
    document.body.addEventListener('mouseleave',function(){
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
    });

    document.body.addEventListener('mousemove',function(e){
        if (!active) return;
        let x = e.pageX;
        x -= document.querySelector('.slider').getBoundingClientRect().left;
        scrollIt(x);
    });
    
    function scrollIt(x){
        let transform = Math.max(0,(Math.min(x,document.querySelector('.slider').offsetWidth)));
        document.querySelector('.after').style.width = transform+"px";
        document.querySelector('.scroller').style.left = transform-25+"px";
    }
    scrollIt(150);
    
    document.querySelector('.scroller').addEventListener('touchstart',function(){
        active = true;
        document.querySelector('.scroller').classList.add('scrolling');
    });
    document.body.addEventListener('touchend',function(){
        active = false;
        document.querySelector('.scroller').classList.remove('scrolling');
    });
    document.body.addEventListener('touchcancel',function(){
        active = false;
        document.querySelector('.scroller').classList.remove('scrolling');
    });
});

//определяем сколько изображений в карточке товара, выводим текст количестве скрытых
$(function() {
    let el = $('.item__photo > a').length;
    if(el > 7 ) {
        let numImages = el - 6;
        $('.item__photo > a:nth-child(6)').append('<div class="number_images">Еще ' + numImages + ' фото</div>')
    }
});

//плавный якорь в карточке товара
$(function(){
    $('.anchor_links a').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#some_point').offset().top }, 1000);
        e.preventDefault();
    });
});