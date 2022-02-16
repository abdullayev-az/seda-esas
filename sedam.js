function click_down(){
    document.getElementById('drop_menu').style.display='block';
    document.getElementById('down').style.display='none';
    document.getElementById('up').style.display='block';
}

function click_up(){
    document.getElementById('drop_menu').style.display='none';
    document.getElementById('down').style.display='inline-block';
    document.getElementById('up').style.display='none';
}

function hesabla(){
    var a=document.getElementById('ceki').value;
    var b=3.50;
    var c=a*b;

    document.getElementById('cem').innerHTML = "Cəmi: "+ c +'$';
}

$('.carusel').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items:1,
            nav:false
        },
        500:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false
        },
    }
});