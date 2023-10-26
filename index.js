const header = document.querySelector(".navbar")

window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 1) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}