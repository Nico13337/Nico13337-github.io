// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 0px";
    document.getElementById("navbar").style.background = "#2b2b2a";
    document.getElementById("a").style.color = "white";
    document.getElementById("b").style.color = "white";
    document.getElementById("c").style.color = "white";
    document.getElementById("d").style.color = "white";
    document.getElementById("e").style.color = "white";
    document.getElementById("loyo").style.display = "none";
    document.getElementById("loyo2").style.display = "block";
  } else {
    document.getElementById("navbar").style.padding = "20px 0px";
    document.getElementById("navbar").style.background = "#ffccf5";
    document.getElementById("loyo").style.display = "block";
    document.getElementById("loyo2").style.display = "none";
  }
}

  function notext() {
    document.getElementById("work").style.display = "none";
  }



window.onload=function(){
$(function() {
    var line = $(".line");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1700) {
            line.removeClass('line').addClass("line-alt");
        } else {
            line.removeClass("line-alt").addClass('line');
        }
    });
});

$(function() {
    var line = $(".line1");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 2700) {
            line.removeClass('line1').addClass("line1-alt");
        } else {
            line.removeClass("line1-alt").addClass('line1');
        }
    });
});

$(function() {
    var line = $(".line2");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 5400) {
            line.removeClass('line2').addClass("line2-alt");
        } else {
            line.removeClass("line2-alt").addClass('line2');
        }
    });
});

$(function() {
    var line = $(".line3");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 6000) {
            line.removeClass('line3').addClass("line3-alt");
        } else {
            line.removeClass("line3-alt").addClass('line3');
        }
    });
});

$(function() {
    var line = $(".line4");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 6500) {
            line.removeClass('line4').addClass("line4-alt");
        } else {
            line.removeClass("line4-alt").addClass('line4');
        }
    });
});

}
