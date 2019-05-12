var pivot=0;
$(document).ready(function ()
 {
  $(".aboutme").click(function() {
    $('html, body').animate({scrollTop: $('.about_me').offset().top}, 300);
  });
  $(".thestory").click(function() {
    $('html, body').animate({scrollTop: $('.the_story').offset().top}, 300);
  });
  $(".ourteam").click(function() {
    $('html, body').animate({scrollTop: $('.our_team').offset().top}, 300);
  });

  $("#ar_left").click(function (){
    if(parseInt($(".new .1").css("marginLeft"))<0)
    {
      $(".new .1").animate({marginLeft:'+=1500px'},200);
      pivot--;
     /* $("#the_story_word")[0].innerHTML=ss[pivot];*/
      change_movie_word(pivot);
     
    }
  });
  $("#ar_right").click(function (){
    if(parseInt($(".new .1").css("marginLeft"))>-6000)
    { 
      $(".new .1").animate({marginLeft:'-=1500px'},200);
      pivot++;
      /*$("#the_story_word")[0].innerHTML=ss[pivot];*/
     
      change_movie_word(pivot);
    }
  
  }); 

  $("#ar_left1").click(function (){
    if(parseInt($(".new .1").css("marginLeft"))<0)
    {
      alert("new!");
      $(".new .1").animate({marginLeft:'+=1250px'},200);
      pivot--;
     /* $("#the_story_word")[0].innerHTML=ss[pivot];*/
      change_movie_word(pivot);
     
    }
  });
  $("#ar_right1").click(function (){
    if(parseInt($(".new .1").css("marginLeft"))>-5600)
    { 
      $(".new .1").animate({marginLeft:'-=1250px'},200);
      pivot++;
      /*$("#the_story_word")[0].innerHTML=ss[pivot];*/
     
      change_movie_word(pivot);
    }
  
  }); 

  var array=document.querySelectorAll(".mem_pic");
  for(var a=0;a<array.length;a++)
  {
    array[a].onmouseover=geta;
    array[a].onmouseout=degeta
  }

 getScreen(0);
        
 
 });
 var word_0="“I guess I was followed.”<br>Our team had a fight with the enemies.";
 var word_1="Miles,you are on your way.Just keep going. <br>What's up,danger!";
 var word_2="“Whoa, slow down a little.That's better.”<br>That day，I was bitten by a radioactive spider.";
 var word_3="After seeing Spiderman killed,<br> I was chased by the enemy.";
 var word_4="This is the last fight for our team<br> as well as the first fight for me!";
 function change_movie_word(pivot) {
   switch (pivot)
   {
     case 0:
      $("#the_story_word")[0].innerHTML=word_0;
      break;
     case 1:
      $("#the_story_word")[0].innerHTML=word_1;
      break;
     case 2:
      $("#the_story_word")[0].innerHTML=word_2;
      break;
     case 3:
      $("#the_story_word")[0].innerHTML=word_3;
      break;
     case 4:
      $("#the_story_word")[0].innerHTML=word_4;
      break;
   }  
 }

 function geta() {
  var number=parseInt(this.id.slice(4,5))+6;
  var newsrc="url("+"\'"+"pic/"+number+".png"+"\'"+")";
 
  var this_word="#"+this.id.slice(4,5)+"_word";
  $(this_word).slideDown("fast");
 /* document.getElementById(this_word).style.backgroundColor="red";*/
  $(this).css("backgroundImage",newsrc);
}

  function degeta() {
   var number=parseInt(this.id.slice(4,5));
   var newsrc="url("+"\'"+"pic/"+number+".png"+"\'"+")";
   var this_word="#"+this.id.slice(4,5)+"_word";
    $(this_word).slideUp(50);
    $(this).css("backgroundImage",newsrc);
}




$(document).on("mousewheel DOMMouseScroll", function (e) {
  var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1))||
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));   
     if (delta != 0) {
       
        var anchor=$(".about_me").offset().top;
        var wind=$(window).scrollTop();
        if((anchor-wind)>0)
        {
          $("#bg").css("opacity",1-(anchor-wind)/670);
         // alert(anchor-wind);
        }
        else
          $("#bg").css("opacity","1");
        if(wind=0)
        {
          $("#bg").css("opacity","0");
        }
        if($(window).scrollTop()<600 && $("#movable")[0].innerHTML=="")
          getScreen(0);

     }
  });
 

var word1="I was bitten by a radioactive spider.";
var word2="I thought I was the one and only Spider-Man.";
var word3="With great power comes great responsibility.";
var i=[0,0,0];
var j=[word1.length,word2.length,word3.length];
function getScreen(i) { 
  var time1=setInterval( function()  {
      $("#movable")[0].innerHTML=word1.slice(0,++i) + "|";
      if(i>word1.length)
        {
          clearInterval(time1);
          setTimeout(function() {
            delet(word1.length);
          },300);
          
        }
    }, 100);
}

 function delet(j) {
  var time1=setInterval( function()  {
    $("#movable")[0].innerHTML=word1.slice(0,--j) + "|";
    if(j<=0)
      {
        clearInterval(time1);
        $("#movable")[0].innerHTML=word3.slice(0,0);
        setTimeout(function () {
          if($(window).scrollTop()>0 && $(window).scrollTop()<500)
          getScreen1(0);
        },200);
        
      }
  }, 50);
 }

 function getScreen1(i) {
  var time1=setInterval( function()  {
    $("#movable")[0].innerHTML=word2.slice(0,++i) + "|";
    if(i>word2.length)
      {
        clearInterval(time1);
        setTimeout(function() {
          delet1(word2.length);
        },300);
        
      }
  }, 100);
}

 function delet1(j) {
  var time1=setInterval( function()  {
    $("#movable")[0].innerHTML=word2.slice(0,--j) + "|";
    if(j<=0)
      {
        clearInterval(time1);
        $("#movable")[0].innerHTML=word3.slice(0,0);
        setTimeout(function() {
          if($(window).scrollTop()>0 && $(window).scrollTop()<500)
          getScreen2(0);
        },200);
        
      }
  }, 50);
 }

 function getScreen2(i) {
  var time1=setInterval( function()  {
    $("#movable")[0].innerHTML=word3.slice(0,++i) + "|";
    if(i>word3.length)
      {
        clearInterval(time1);
        setTimeout(function() {
          delet2(word3.length);
        },300);
        
      }
  }, 100);
}

 function delet2(j) {
  var time1=setInterval( function()  {
    $("#movable")[0].innerHTML=word3.slice(0,--j) + "|";
    if(j<=0)
      {
        clearInterval(time1);
        $("#movable")[0].innerHTML=word3.slice(0,0);
        setTimeout(function() {
          if($(window).scrollTop()>0 && $(window).scrollTop()<500)
          getScreen(0);
        },200);
        
      }
  }, 50);
 }
