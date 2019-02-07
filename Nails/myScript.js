// nav logo change color on hover
function hover(element) {
    element.setAttribute('src', 'img/onlogo1.png');
}
function unhover(element) {
    element.setAttribute('src', 'img/logo1.png');
}


//stic the hav bar on top ov screen on scroll
function stickNav() {
    if (window.pageYOffset >= sticky) {
        navbutton.classList.add("sticky")
    } else {        
            navbutton.classList.remove("sticky");
    }
}

//change the photos on small display
function resize() {

    if (window.innerWidth < 880) {
        document.getElementById("service").src = "img/services1.jpg";
        document.getElementById("products").src = "img/products1.jpg"; 
    } else {
        document.getElementById("service").src = "img/services.jpg";
        document.getElementById("products").src = "img/products.jpg";      
    }
}


//cycle photos on home screen
var myIndex = 0;
function carousel() {
    var i;
    var x = document.getElementsByClassName("homeSlide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 7000); 
}


//shows the phone number on header
$(document).ready(function () {
    $("header").mouseover(function () {
        $("#phone").html("For bookings call: 0873379891").show("10");
    });
    $("header").mouseout(function () {
        $("#phone").html("").show("10");
    });

});