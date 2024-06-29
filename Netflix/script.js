const somBnt = document.getElementById('somBackground');
somBnt.addEventListener('click', function(){
    var somVideo = document.getElementById('backgroudVideo');
    if(somVideo.muted){
        somVideo.muted = false;
    }
    else{
        somVideo.muted = true;
    };

});
function mudarImagem() {
    var imagem = document.getElementById('trocaImg');

    if(imagem.src.includes('/src/assets/images/sem-som.png')){
        imagem.src = '/src/assets/images/caixas-de-som.png';
    }
    else{
        imagem.src = '/src/assets/images/sem-som.png';
    }
};


const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollPosition = 0;
const itemWidth = items[0].clientWidth;

function updateCarousel() {
    carousel.style.transform = `translateX(${-scrollPosition}px)`;
}

nextBtn.addEventListener('click', () => {
    if (scrollPosition < (carousel.scrollWidth - carousel.clientWidth)) {
        scrollPosition += itemWidth;
        if (scrollPosition > (carousel.scrollWidth - carousel.clientWidth)) {
            scrollPosition = carousel.scrollWidth - carousel.clientWidth;
        }
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (scrollPosition > 0) {
        scrollPosition -= itemWidth;
        if (scrollPosition < 0) {
            scrollPosition = 0;
        }
        updateCarousel();
    }
});

window.addEventListener('resize', () => {
    // Recalculate itemWidth in case of window resize
    const newItemWidth = items[0].clientWidth;
    if (itemWidth !== newItemWidth) {
        scrollPosition = 0; // Reset scroll position to avoid misalignment
        updateCarousel();
    }
});


function showVideo(src) {
    var videoPopup = document.getElementById('videoPopup');
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = src;
    videoPopup.style.display = 'flex';
}

function closeVideo() {
    var videoPopup = document.getElementById('videoPopup');
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.pause();
    videoPlayer.src = '';
    videoPopup.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item img');

    carouselItems.forEach(item => {
        item.addEventListener('click', function () {
            const videoSrc = this.getAttribute('data-video');
            window.open(videoSrc, '_blank');
        });
    });
});

































































































































































































/*
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;
let itemWidth = items[0].clientWidth;

function updateCarousel() {
    carousel.style.transform = `translateX(${-itemWidth * index}px)`;
}

nextBtn.addEventListener('click', () => {
    if (index < items.length - 1 && (index + 1) * itemWidth < carousel.scrollWidth - carousel.clientWidth) {
        index++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

window.addEventListener('resize', () => {
    itemWidth = items[0].clientWidth;
    updateCarousel();
});
*/