
// in any function easing effect will work after giving the duration value like: .hide(1000, 'easeInOutElastic')


// $(document).ready(function(){
//     $(".box").animate({"height" : "400px", 'width' : '400px'}, 3000, 'easeInOutElastic', function(){
//         $(this).css('background','green');
//     });
// });

// $(document).ready(function(){
//     $(".html").animate({'scrollTop': '0'}, 2000);
// });
// $(document).ready(function(){
//     $("p").text('<h2>The text method changed the text of p</h2>');
// });



/*  .html() method: This method is also used to change the content or text of any text inside a html tag.
like .text()  method but the only difference between .html() and .text() is that .text() can show 
anything you write inside the () including html tags. but .html() cannot show the tags rather it apply this tags.
$('document').ready(function(){
    ** the text will be also bold**
        $('p').html("<bold> Change the text</bold>");

}); */



/* .append(): This method will add text after existing text
$('document').ready(function(){
        $("p").append('Add text after p');

        output: This is a text. Add text after p.

}); */



/* .prepend(): This method will add text before existing text
$('document').ready(function(){
        $("p").prepend('Add text before p');
});

 output: This is a text. Add text after p.*/


 /*.after():A new paragraph mypara1  will be added after #p1
  var mypara1 = $('<p></p>').text('This is paragraph1')
 $('document').ready(function(){
     $('#p1').after(mypara1);

 });


 /* .before():A new paragraph mypara1  will be added after #p1var mypara1 = $('<p></p>').text('This is paragraph1')
 $('document').ready(function(){
     $('#p1').after(mypara1);

 });*/


 /*.attr: with this method we can see the value of the attribute used in a particular tag
 $('document').ready(function(){
     $('a').attr('href');
 });

 output: http://google.com ***we can see the value of attribute*** */


/*.removeAttr(): With this method we can remove the value of attribute from the html tag.
$('document').ready(function(){
     $('a').removeAttr('href');
 });

 output: undefined */

/* with javascript: document.querySelector("a").setAttribute('href', 'https://www.studywithanis.com');

.attr: with this method we can change the value of the attribute used in a particular tag
 $('document').ready(function(){
     $('a').attr('href', 'https://www.studywithanis.com');
 });  */


/*  ********Manipulating CSS*******
 with this .css('property', 'value'); we can add css or style html tags.

$('h1').css('color', 'red'); 
or, $('h1').css({'color': 'red', 'font-size': '10px', 'font-weight':'2rem', 'font-family':'tahoma'});we can use multiple valu as jsoN value or like object array.
But in  javascript we use: document.querySelector("h1").classlist.add("style1")*/
/* .addClass(): with this method we can add more than one style with the html tag which was created in css file.
$('h1').addClass('style1 style2');
$('h1').removeClass('style1 style2'); with this method we can remove any css class from html tag*/



/*with javascript:
document.querySelector('button').addEventListener('click', function(){
    document.querySelector('h1').innerHTML = "You have clicked";
})
With jquery:
$('button').click(function(){
    $('h1').text('You have clicked');
}); */




/* .click():
$('#loginButton').click(function(){
    // now to take the value proviede by the user
   var password1 = $('#pass1').val();
   var password2 = $('#pass2').val();
//    now if the user don't enter any password only then we will match the password.so, if the password1 and 2 is not empty then the condition will be like this:


   if(password1 !=""  && password2 != ""){
       if(password1== password2){
           alert('successfully login')
       }
       else{
           alert('password not match')
       }

   }
   else{
       alert('please enter password');
   }



}) */




/* .hide():this function or method can hide or disappear any html tag after clicking.We can set timing inside the ()
$('#btn').click(function(){
    $('.div-style').hide(1000);
});



/* .show():this function or method can show or visible any html tag after clicking.In this case, we need to use display:none; in .div-style css file to keep hide the div and after clicking the button it will be seen or visible.We can also set timing inside the ().
$('#btn').click(function(){
    $('.div-style').show(2000);
}); */




/* .hide().show() together: if we want we can use this two method together to made hide and then show by clicking the click me button.
$('#btn').click(function(){
    $('.div-style').hide(2000).show(2000);
});



/* .toggle():this function or method can show and hide or hide and show any html tag after clicking.If the div is in hide position then it will show first then hide or if the div is in show positon then it will hide first then hide in  click.
$('#btn').click(function(){
    $('.div-style').toggle(2000);
}); */




/* .fadeOut():this method will disappear the div after clicking on the click me button.
$('#btn').click(function(){
    $('.div-style').fadeOut(2000);
});*/


/* .fadeIn():this method will appear the div after clicking on the click me button if the display:none; is already applide in css style file.
$('#btn').click(function(){
    $('.div-style').fadeOut(2000);
});*/


/* .fadeOut().fadeIn() together: if we want we can use this two method together to made hide and then show by clicking the click me button.
$('#btn').click(function(){
    $('.div-style').fadeOut(2000).fadeIn(2000);
});*/



/* .fadeToggle():this function or method can show and hide or hide and show any html tag after clicking.If the div is in hide position then it will show first then hide or if the div is in show positon then it will hide first then hide in  click.
$('#btn').click(function(){
    $('.div-style').fadeToggle(2000);
}); */



/* .fadeTo(): this method will decrease the opacity of the div
$('document').ready(function(){
    $('#btn').click(function(){
        $('.div-style').fadeTo(2000,0.6);
    })
});*/



/*  .slideUp(): this method will create a slide to upward and become invisible the div after clicking the button.
$('document').ready(function(){
    $('#btn').click(function(){
        $('.div-style').slideUp();
    })
}); */


/*  .slideUp().slideDown: this method will create a slide to upward and become invisible the div after clicking the button.
$('document').ready(function(){
    $('#btn').click(function(){
        $('.div-style').slideUp(2000).slideDown(2000);
    })
}); */



$('#btn').click(function(){
    $('.div-style').animate({
            opacity: '0.5',
             width: '800px',
             height: '500px'
    



    },2000)
})





















































































































































