var mediaQueryMob = window.matchMedia('(min-width: 568px)');
if (!mediaQueryMob.matches) {
    // mobile nav
    const navBlock        = document.querySelector('nav');
    const mobNav          = document.querySelector('nav>ul');
    const burgerBtn       = document.createElement('button');
    burgerBtn.innerHTML   = '<i class="fa fa-bars" aria-hidden="true"></i>';
    navBlock.appendChild(burgerBtn).classList.add('nav-button');
    const closeMobNav     = document.createElement('span');
    closeMobNav.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';

    burgerBtn.addEventListener('click', function () {
        navBlock.classList.add('open');
        mobNav.appendChild(closeMobNav).classList.add('nav-close');
    });

    closeMobNav .addEventListener('click',function () {
        navBlock.classList.remove('open');
        closeMobNav.remove();
    });

    // mobile nav fixed
    const headerHeight = document.querySelector('header').offsetHeight;
    document.addEventListener('scroll', (event) => {
        let pageScroll = document.body.scrollTop;
        if (pageScroll > headerHeight) {
            document.body.classList.add('fixed');
        } else {
            document.body.classList.remove('fixed');
        }
    });
}
