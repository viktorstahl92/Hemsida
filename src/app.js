const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)


const mediaQuery = window.matchMedia('(min-width: 768px)')

var prevScrollpos = window.pageYOffset;


window.onscroll = function() {



    var currentScrollPos = window.pageYOffset;

if (mediaQuery.matches)
  {
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    } else {
    document.getElementById("navbar").style.top = "-104px";
    }
    prevScrollpos = currentScrollPos;
}
}