const listBox = document.querySelectorAll('.box');
const listTour = document.querySelectorAll('.top-item');
const wrapperBox = document.querySelector('.review-box');
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');
const reviewDiv = document.querySelector('.review');
const tourBox = document.querySelector('.tour-box');
const topItems = document.querySelectorAll('.top-item');
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1366) {
            make_slide(5);
        } else if (window.innerWidth >= 992) {
            make_slide(2);
        } else {
            make_slide(1);
        }
    });

    const media = [
        window.matchMedia('(min-width: 1366px)'),
        window.matchMedia('(min-width: 992px)'),
    ];

    if (media[0].matches) {
        make_slide(5);
    } else if (media[1].matches) {
        make_slide(2);
    } else {
        make_slide(1);
    }
});

function make_slide(amountSlideAppear) {
    // set width and margin for item slide
    const widthItemAndMargin = reviewDiv.offsetWidth / amountSlideAppear;
    let widthAllBox = widthItemAndMargin * listBox.length;
    wrapperBox.style.width = `${widthAllBox}px`;

    listBox.forEach((element) => {
        element.style.marginRight = '20px';
        element.style.width = `${widthItemAndMargin - 20}px`;
    });

    // handle slide
    let count = 0;
    let spacing = widthAllBox - amountSlideAppear * widthItemAndMargin;
    btnRight.addEventListener('click', function () {
        count += widthItemAndMargin;

        if (count > spacing) {
            count = 0;
        }
        wrapperBox.style.transform = `translateX(${-count}px)`;
    });
    

    btnLeft.addEventListener('click', function () {
        count -= widthItemAndMargin;

        if (count < 0) {
            count = spacing;
        }
        wrapperBox.style.transform = `translateX(${-count}px)`;
    });
    
}
let currentIndex = 0;
const numItems = topItems.length;
const itemsPerPage = 4;
let itemWidth = topItems[0].clientWidth;

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
}

function nextSlide() {
    if (currentIndex < numItems - itemsPerPage) {
        currentIndex++;
        updateSlider();
    }
}

function updateSlider() {
    itemWidth = topItems[0].clientWidth;
    const offset = -currentIndex * (itemWidth + 20);
    tourBox.style.transform = `translateX(${offset}px)`;
}

window.addEventListener('resize', updateSlider);
updateSlider();

