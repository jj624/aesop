// main.js

$(function(){
    $('#gnb-toggle-btn').click(function(){
        $('#gnb').toggleClass('on');
    })

    let num = 0; 


    $('.btn-group .next').on('click', function(){
        num++;
        if(num > 3) {
            return
        }
        $('.gallery  img').removeClass('on');
        $('.gallery  img').eq(num).addClass('on');
    })


    $('.btn-group .prev').on('click', function(){
        num--;
        if(num < 0) {
            return
        }
        $('.gallery  img').removeClass('on');
        $('.gallery  img').eq(num).addClass('on');
    })
});


