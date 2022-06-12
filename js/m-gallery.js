const mGallMainImg     = document.querySelectorAll('.gallery-img');
const mGall            = document.createElement('div');
const mGallWrap        = document.createElement('div');
const mGallClose       = document.createElement('span');
const mGallImg         = document.createElement('img');
const mGallCaption     = document.createElement('p');
const mGallPrev        = document.createElement('button');
const mGallNext        = document.createElement('button');
mGallImg.dataset.count = '0';
mGallClose.innerHTML   = '<i class="fa fa-times" aria-hidden="true"></i>';
mGallPrev.innerHTML    = '<i class="fa fa-arrow-left" aria-hidden="true"></i>';
mGallNext.innerHTML    = '<i class="fa fa-arrow-right" aria-hidden="true"></i>';

let mGallCurrentImg;

const numberChecker = function (){
    mGallCurrentImg = mGallImg.getAttribute('data-count');
    if (Number(mGallCurrentImg)>0){
        mGallPrev.style.display    = 'block';
    } else {
        mGallPrev.style.display    = 'none';
    }
    if (mGallMainImg.length-1 > Number(mGallCurrentImg)){
        mGallNext.style.display    = 'block';
    } else {
        mGallNext.style.display    = 'none';
    }
    console.log(mGallCurrentImg);
}

for (let i = 0; i < mGallMainImg.length; i++) {
    mGallMainImg[i].addEventListener("click", function() {
        document.body.classList.add('modal-active');
        document.body.appendChild(mGall).classList.add('m-gallery');
        mGall.appendChild(mGallWrap).classList.add('m-gallery__wrap');
        mGallWrap.appendChild(mGallClose).classList.add('m-gallery__close');
        mGallWrap.appendChild(mGallImg).classList.add('m-gallery__img');
        mGallWrap.appendChild(mGallCaption).classList.add('m-gallery__caption');
        mGallWrap.appendChild(mGallPrev).classList.add('m-gallery__prev');
        mGallWrap.appendChild(mGallNext).classList.add('m-gallery__next');

        mGallImg.src           = mGallMainImg[i].src;
        mGallImg.dataset.count = i;
        mGallCaption.innerHTML = mGallMainImg[i].alt;
        numberChecker();
    });
}

mGallPrev.addEventListener("click", function() {
    mGallCurrentImg = mGallImg.getAttribute('data-count');
    if (Number(mGallCurrentImg)>0) {
        mGallImg.dataset.count = Number(mGallCurrentImg) - 1;
        mGallImg.src           = mGallMainImg[Number(mGallCurrentImg) - 1].src;
        mGallCaption.innerHTML = mGallMainImg[Number(mGallCurrentImg) - 1].alt;
    }
    numberChecker();
});

mGallNext.addEventListener("click", function() {
    mGallCurrentImg = mGallImg.getAttribute('data-count');
    if (mGallMainImg.length-1>= Number(mGallCurrentImg)+1) {
        mGallImg.dataset.count = Number(mGallCurrentImg) + 1;
        mGallImg.src           = mGallMainImg[Number(mGallCurrentImg) + 1].src;
        mGallCaption.innerHTML = mGallMainImg[Number(mGallCurrentImg) + 1].alt;
    }
    numberChecker();
});

mGallClose.addEventListener("click", function() {
    mGall.remove();
    document.body.classList.remove('modal-active');
});