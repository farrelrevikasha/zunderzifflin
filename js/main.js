function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}


$(document).ready(function(){
    var x = 0;
     //next
    $('.btn-n').click(function(){
    
    x= (x<=300)?(x+100):0;
    $('figure').css('left', -x+'%');
    });

    //prev
    $('.btn-p').click(function(){
    
    x= (x>=100)?(x-100):400;
     $('figure').css('left', -x+'%');
    });
});