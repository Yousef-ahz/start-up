// Button To Scroll Down
let arrowDownBtn = document.querySelector('.scroll-down');
let featuresEle = document.querySelector('.features');
arrowDownBtn.onclick = _ => document.documentElement.scrollTo({top: (featuresEle.offsetTop - 160)});

// Scroll To Top
(() => {
    function scrollUp() {
        let scrollUp = document.getElementById('scroll-up');
        if (document.documentElement.scrollTop > 200) {
            scrollUp.classList.add('active');
        } else {
            scrollUp.classList.remove('active');
        };
        scrollUp.addEventListener('click', () => document.documentElement.scrollTo({top:0,behavior:"smooth"}))
    };
    scrollUp()
    window.onscroll = scrollUp;
})()

// Toggle Theme
let toggleBtn = [...document.querySelectorAll('.toggle-theme')];

function toggleClasses() {
    if (JSON.parse(localStorage.darkTheme || localStorage.darkTheme === undefined)) {
        localStorage.darkTheme = false;
        window.localStorage.setItem("darkTheme", false);
    } else {
        window.localStorage.setItem("darkTheme", true);
    };
    dark();
};

if (localStorage.darkTheme === 'false') {
    dark();
};

function dark() {
    document.body.classList.toggle("dark");
    document.querySelector('.dark-theme').classList.toggle("d-none");
    document.querySelector('.default-theme').classList.toggle("d-none");
};
toggleBtn.forEach(ele => ele.addEventListener('click', toggleClasses));