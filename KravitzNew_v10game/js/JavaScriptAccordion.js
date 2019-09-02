/*תפריט המבורגר*/
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.transition = "0.5s";
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };
//var removeH1 = document.getElementById("topNavH1");

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("topNavImage").style.width = "10VH";
        document.getElementById("topNavImage").style.height = "6VH";
        //document.getElementById("topNavSticky").style.height = "50px";
        document.getElementById("topNavSticky").style.backgroundColor = "white";
    } else {
        document.getElementById("topNavImage").style.width = "22vh";
        document.getElementById("topNavImage").style.height = "13vh";
        //document.getElementById("topNavSticky").style.height = "95px";
        document.getElementById("topNavSticky").style.backgroundColor = "none";
    }
}
/*סוף- תפריט המבורגר*/

/*scroll into view - */
$(document).ready(function () {
    $("#button").click(function () {
        $("#hi2").addClass("active");
        $("#hi").removeClass("active");
    });
    // $(".accordion.accordionOne").click(function () {
    //})
});



//הפעלת סרטון כשפותחים אקורדיון
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var videos_to_load = []; //רשימת המתנה - עד שהסרטונים נטענים מיוטוב
var players = {};
function onYouTubeIframeAPIReady() {
    while (videos_to_load.length) {
        initPlayer(videos_to_load.pop());
    }
}

//This function creates an <iframe> (and YouTube player) after the API code downloads.
function initPlayer(name) {
    if (typeof YT !== "undefined") {
        players[name] = {
            player: new YT.Player(name, {
                height: '315',
                width: '560',
                videoId: name,
            })
        }
    } else {
        videos_to_load.push(name);
    }
}

//פונקציה של הפעלת אקורדיון - משמשת גם לאקורדיון רגיל וגם לסרטונים
function initAccordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        var p = acc[i].nextElementSibling;
        var video_id = p.getAttribute("video-id");

        //אם יש בתוך האקורדיון סרטון...
        if (video_id) {
            var div = document.createElement("div");
            var att = document.createAttribute("class");     // Create a "class" attribute
            att.value = "player";                           // Set the value of the class
            div.setAttributeNode(att);
            att = document.createAttribute("id");          // Create a "class" attribute
            att.value = video_id;                          // Set the value of the class
            div.setAttributeNode(att);
            if (p.hasAttribute("insert-first") && p.childNodes.length) {  //if we want video first (for practice)
                p.insertBefore(div, p.childNodes[0]);             // insert the video before the first child of p
            } else {
                p.appendChild(div);
            }
            initPlayer(video_id);
        }
        acc[i].addEventListener("click", function () {  // when clicking on accordion - active
            var acc = document.getElementsByClassName("accordion");
            for (var i = 0; i < acc.length; i++) {  // loop - check each accordion
                if (this != acc[i]) {               // which is not me (current active acc)
                    acc[i].classList.remove("active");
                    var panel = acc[i].nextElementSibling;
                    panel.style.maxHeight = null;       // give height = null (hide/close accordion)
                    var video_id = panel.getAttribute("video-id");
                    if (video_id && players[video_id]) {        //if there is a video attribute, pause it
                        players[video_id].player.pauseVideo();
                    }
                }
            }
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            var video_id = panel.getAttribute("video-id");    // get the video

            if (panel.style.maxHeight) { //if accordion is closed (height=null) - pause video
                panel.style.maxHeight = null;
                if (video_id && players[video_id]) {
                    players[video_id].player.pauseVideo();
                }
            }
            else { //if accordion is open - play video
                panel.style.maxHeight = panel.scrollHeight + "px";
                (function (next) { setTimeout(function () { next.scrollIntoView(); window.next = next; setTimeout(function () { window.scrollBy(0, -window.next.clientHeight + 7) }, 100) }, 100) }(this));
                /*if (video_id && players[video_id]) {
                    players[video_id].player.playVideo();
                }*/
                /* for (var id in players) {                   // pause all videos if user clicks any other accordion
                     if (players[id].player) {
                         players[id].player.pauseVideo();
                     }
                 }*/
            }
        });
    }
}



/*רוצה לפגוש לקוח- שאלות*/

$(document).ready(function () {
    $("#meetCustomerIcon").click(function () {
        $("#meetCustomerQuestion").css("min-height", "0");
    });

    $("#q22").hide();
    $(".tIcon").hide();
    $(".fIcon1").hide();
    $(".fIcon2").hide();
    $(".tIcon2").hide();
    $(".fIcon12").hide();
    $(".fIcon22").hide();

    $("#t").click(function () {
        $("#meetCustomerQuestion").css("max-height", "max-content");
        $(this).addClass("rightAns shadowNaturalClick");
        $("#f1").addClass("noneAns shadowNaturalClick");
        $("#f2").addClass("noneAns shadowNaturalClick");
        $(this, "#f1, #f2").removeClass("ansBGcolor shadowAll");
        $(".tIcon").show();
        $("#q22").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");
    });

    $("#f1").click(function () {
        $("#meetCustomerQuestion").css("max-height", "max-content");
        $("#t").addClass("rightAns shadowNaturalClick");
        $(this).addClass("wrongAns shadowNaturalClick");
        $("#f2").addClass("noneAns shadowNaturalClick");
        $(".tIcon").show();
        $(".fIcon1").show();
        $("#q22").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");
    });

    $("#f2").click(function () {
        $("#meetCustomerQuestion").css("max-height", "max-content");
        $("#t").addClass("rightAns shadowNaturalClick");
        $("#f1").addClass("noneAns shadowNaturalClick");
        $(this).addClass("wrongAns shadowNaturalClick");
        $(".tIcon").show();
        $(".fIcon2").show();
        $("#q22").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");

    });

    $("#t2").click(function () {
        $("#meetCustomerQuestion").css("max-height", "max-content");
        $(this).addClass("rightAns shadowNaturalClick");
        $("#f12").addClass("noneAns shadowNaturalClick");
        $("#f22").addClass("noneAns shadowNaturalClick");
        $(this, "#f12, #f22").removeClass("ansBGcolor shadowAll");
        $(".tIcon2").show();
        $("#t22").off("click");
        $("#f12").off("click");
        $("#f22").off("click");
    });

    $("#f12").click(function () {
        $("#meetCustomerQuestion").css("max-height", "max-content");
        $("#t2").addClass("rightAns shadowNaturalClick");
        $(this).addClass("wrongAns shadowNaturalClick");
        $("#f22").addClass("noneAns shadowNaturalClick");
        $(".tIcon2").show();
        $(".fIcon12").show();
        $("#t2").off("click");
        $("#f12").off("click");
        $("#f22").off("click");
    });

    $("#f22").click(function () {
        $("#meetCustomerQuestion").css("max-height", "max-content");
        $("#t2").addClass("rightAns shadowNaturalClick");
        $("#f12").addClass("noneAns shadowNaturalClick");
        $(this).addClass("wrongAns shadowNaturalClick");
        $(".tIcon2").show();
        $(".fIcon22").show();
        $("#t2").off("click");
        $("#f12").off("click");
        $("#f22").off("click");
    });
});
/*רוצה לפגוש לקוח- שאלות- סוף*/

/*שאלות סרטון מתגלגל*/
$(document).ready(function () {
    $(".tIcon").hide();
    $(".fIcon1").hide();
    $(".fIcon2").hide();
    $(".fIcon3").hide();
    $(".fIcon4").hide();

    $(".tIcon_2").hide();
    $(".fIcon1_2").hide();
    $(".fIcon2_2").hide();
    $(".fIcon3_2").hide();
    $(".fIcon4_2").hide();

    $(".tIcon3").hide();
    $(".fIcon1_3").hide();
    $(".fIcon2_3").hide();

    $(".tIcon4").hide();
    $(".fIcon1_4").hide();
    $(".fIcon2_4").hide();
    $(".fIcon3_4").hide();

    $("#t").click(function () {
        $(this).addClass("rightAns shadowNaturalClick");
        $("#f1").addClass("noneAns shadowNaturalClick");
        $("#f2").addClass("noneAns shadowNaturalClick");
        $("#f3").addClass("noneAns shadowNaturalClick");
        $("#f4").addClass("noneAns shadowNaturalClick");
        $(".tIcon").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");
        $("#f3").off("click");
        $("#f4").off("click");
    });

    $("#f1").click(function () {
        $("#t").addClass("rightAns shadowNaturalClick");
        $(this).addClass("wrongAns shadowNaturalClick");
        $("#f2").addClass("noneAns shadowNaturalClick");
        $("#f3").addClass("noneAns shadowNaturalClick");
        $("#f4").addClass("noneAns shadowNaturalClick");
        $(".tIcon").show();
        $(".fIcon1").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");
        $("#f3").off("click");
        $("#f4").off("click");
    });

    $("#f2").click(function () {
        $("#t").addClass("rightAns shadowNaturalClick");
        $("#f1").addClass("noneAns shadowNaturalClick");
        $(this).addClass("wrongAns shadowNaturalClick");
        $("#f3").addClass("noneAns shadowNaturalClick");
        $("#f4").addClass("noneAns shadowNaturalClick");
        $(".tIcon").show();
        $(".fIcon2").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");
        $("#f3").off("click");
        $("#f4").off("click");
    });

    $("#f3").click(function () {
        $("#t").addClass("rightAns shadowNaturalClick");
        $("#f1").addClass("noneAns shadowNaturalClick");
        $("#f2").addClass("noneAns shadowNaturalClick");
        $(this).addClass("wrongAns shadowNaturalClick");
        $("#f4").addClass("noneAns shadowNaturalClick");
        $(".tIcon").show();
        $(".fIcon3").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");
        $("#f3").off("click");
        $("#f4").off("click");
    });

    $("#f4").click(function () {
        $("#t").addClass("rightAns shadowNaturalClick");
        $("#f1").addClass("noneAns shadowNaturalClick");
        $("#f2").addClass("noneAns shadowNaturalClick");
        $("#f3").addClass("noneAns shadowNaturalClick");
        $(this).addClass("wrongAns shadowNaturalClick");
        $(".tIcon").show();
        $(".fIcon4").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");
        $("#f3").off("click");
        $("#f4").off("click");
    });

    $("#t_2").click(function () {
        $(this).addClass("rightAns shadowNaturalClick");
        $("#f1_2").addClass("noneAns shadowNaturalClick");
        $("#f2_2").addClass("noneAns shadowNaturalClick");
        $("#f3_2").addClass("noneAns shadowNaturalClick");
        $("#f4_2").addClass("noneAns shadowNaturalClick");
        $(".tIcon2").show();
        $("#t_2").off("click");
        $("#f1_2").off("click");
        $("#f2_2").off("click");
        $("#f3_2").off("click");
        $("#f4_2").off("click");
    });

    $("#f1_2").click(function () {
        $("#t_2").addClass("rightAns shadowNaturalClick");
        $(this).addClass("wrongAns shadowNaturalClick");
        $("#f2_2").addClass("noneAns shadowNaturalClick");
        $("#f3_2").addClass("noneAns shadowNaturalClick");
        $("#f4_2").addClass("noneAns shadowNaturalClick");
        $(".tIcon2").show();
        $(".fIcon1_2").show();
        $("#t_2").off("click");
        $("#f1_2").off("click");
        $("#f2_2").off("click");
        $("#f3_2").off("click");
        $("#f4_2").off("click");
    });

    $("#f2_2").click(function () {
        $("#t_2").addClass("rightAns shadowNaturalClick");
        $("#f1_2").addClass("noneAns shadowNaturalClick");
        $(this).addClass("wrongAns shadowNaturalClick");
        $("#f3_2").addClass("noneAns shadowNaturalClick");
        $("#f4_2").addClass("noneAns shadowNaturalClick");
        $(".tIcon2").show();
        $(".fIcon2_2").show();
        $("#t_2").off("click");
        $("#f1_2").off("click");
        $("#f2_2").off("click");
        $("#f3_2").off("click");
        $("#f4_2").off("click");
    });

    $("#f3_2").click(function () {
        $("#t_2").addClass("rightAns shadowNaturalClick");
        $("#f1_2").addClass("noneAns shadowNaturalClick");
        $("#f2_2").addClass("noneAns shadowNaturalClick");
        $(this).addClass("wrongAns shadowNaturalClick");
        $("#f4_2").addClass("noneAns shadowNaturalClick");
        $(".tIcon2").show();
        $(".fIcon3_2").show();
        $("#t_2").off("click");
        $("#f1_2").off("click");
        $("#f2_2").off("click");
        $("#f3_2").off("click");
        $("#f4_2").off("click");
    });

    $("#f4_2").click(function () {
        $("#t_2").addClass("rightAns shadowNaturalClick");
        $("#f1_2").addClass("noneAns shadowNaturalClick");
        $("#f2_2").addClass("noneAns shadowNaturalClick");
        $("#f3_2").addClass("noneAns shadowNaturalClick");
        $(this).addClass("wrongAns shadowNaturalClick");
        $(".tIcon2").show();
        $(".fIcon4_2").show();
        $("#t_2").off("click");
        $("#f1_2").off("click");
        $("#f2_2").off("click");
        $("#f3_2").off("click");
        $("#f4_2").off("click");
    });

    $("#t_3").click(function () {
        $(this).addClass("rightAns shadowNaturalClick");
        $("#f1_3").addClass("noneAns shadowNaturalClick");
        $("#f2_3").addClass("noneAns shadowNaturalClick");
        $(this, "#f1_3, #f2_3").removeClass("ansBGcolor shadowAll");
        $(".tIcon3").show();
        $("#t_3").off("click");
        $("#f1_3").off("click");
        $("#f2_3").off("click");
    });

    $("#f1_3").click(function () {
        $("#t_3").addClass("rightAns shadowNaturalClick");
        $(this).addClass("wrongAns shadowNaturalClick");
        $("#f2_3").addClass("noneAns shadowNaturalClick");
        $(".tIcon3").show();
        $(".fIcon1_3").show();
        $("#t_3").off("click");
        $("#f1_3").off("click");
        $("#f2_3").off("click");
    });

    $("#f2_3").click(function () {
        $("#t_3").addClass("rightAns shadowNaturalClick");
        $("#f1_3").addClass("noneAns shadowNaturalClick");
        $(this).addClass("wrongAns shadowNaturalClick");
        $(".tIcon3").show();
        $(".fIcon2_3").show();
        $("#t_3").off("click");
        $("#f1_3").off("click");
        $("#f2_3").off("click");
    });

    $("#t_4").click(function () {
        $(this).addClass("rightAns shadowNaturalClick");
        $("#f1_4").addClass("noneAns shadowNaturalClick");
        $("#f2_4").addClass("noneAns shadowNaturalClick");
        $(".tIcon4").show();
        $("#t_4").off("click");
        $("#f1_4").off("click");
        $("#f2_4").off("click");
    });

    $("#f1_4").click(function () {
        $("#t_4").addClass("rightAns shadowNaturalClick");
        $(this).addClass("wrongAns shadowNaturalClick");
        $("#f2_4").addClass("noneAns shadowNaturalClick");
        $(".tIcon4").show();
        $(".fIcon1_4").show();
        $("#t_4").off("click");
        $("#f1_4").off("click");
        $("#f2_4").off("click");
    });

    $("#f2_4").click(function () {
        $("#t_4").addClass("rightAns shadowNaturalClick");
        $("#f1_4").addClass("noneAns shadowNaturalClick");
        $(this).addClass("wrongAns shadowNaturalClick");
        $(".tIcon4").show();
        $(".fIcon2_4").show();
        $("#t_4").off("click");
        $("#f1_4").off("click");
        $("#f2_4").off("click");
    });
});
/*סןף- שאלות סרטון מתגלגל*/

/*חצים-טאבים של עזרה*/

//$(document).ready(function () {

//    $("#helpTab").hide();
//    $("#aloneTab").hide();
//    $("#gameAgainBtn").hide();

//    //לחיצה על כפתור" אפשר עזרה?"
//    $("#helpBtn").click(function () {
//        $("#helpTab").show();
//        $("#aloneTab").hide();
//        $(this).css("background-color", "#178a8d");
//        $(this).addClass("shadowAllClick");
//        $("#aloneBtn").css("background-color", "#61c1c5");
//        $("#aloneBtn").removeClass("shadowAllClick");
//        $("#helpTabPart2n3").hide();
//        (function (next) { setTimeout(function () { next.scrollIntoView(); }, 100) }(document.getElementById("helpTabPart1")));
//        $("#tab1_Icon").attr("src", "image/meetProduct/meetPro_icon_1.png");
//        $("#tab2_Icon").attr("src", "image/meetProduct/meetPro_icon_2.png");
//        $("#tab3_Icon").attr("src", "image/meetProduct/meetPro_icon_3.png");
//        $("#tab4_Icon").attr("src", "image/meetProduct/meetPro_icon_4.png");
//        $("#tab5_Icon").attr("src", "image/meetProduct/meetPro_icon_5.png");
//        $("#tab6_Icon").attr("src", "image/meetProduct/meetPro_icon_6.png");
//        $("#tab7_Icon").attr("src", "image/meetProduct/meetPro_icon_7.png");
//    });

//    //לחיצה על כפתור רוצה בעצמי?"
//    $("#aloneBtn").click(function () {
//        $("#aloneTab").show();
//        $("#helpTab").hide();
//        $(this).css("background-color", "#178a8d");
//        $(this).addClass("shadowAllClick");
//        $("#helpBtn").css("background-color", "#61c1c5");
//        $("#helpBtn").removeClass("shadowAllClick");
//        $("#aloneTabPart2n3").hide();
//        (function (next) { setTimeout(function () { next.scrollIntoView(); }, 100) }(document.getElementById("aloneTabPart1")));
//        $("#tab1_Icon2").attr("src", "image/meetProduct/meetPro_icon_1.png");
//        $("#tab5_Icon2").attr("src", "image/meetProduct/meetPro_icon_5.png");
//        $("#tab2_Icon2").attr("src", "image/meetProduct/meetPro_icon_8.png");
//        $("#tab6_Icon2").attr("src", "image/meetProduct/meetPro_icon_6.png");
//    });

//    לחיצה על אייקונים ב"איזה מוצר בא לך להכיר?" - אפשר עזרה
//    $("#tab1,#tab2,#tab3,#tab4,#tab5,#tab6,#tab7").click(function () {
//        $("#helpTabPart2n3").show();
//    });

//    //לחיצה על אייקונים ב"איזה מוצר בא לך להכיר?" - רוצה בעצמי
//    $("#tab1_2, #tab2_2, #tab3_2, #tab4_2").click(function () {
//        $("#aloneTabPart2n3").show();
//    });

//});
///*חצים-טאבים של עזרה-סוף*/


///*משחקון-רוצה לפגוש מוצר*/

//var playAgain;
//var counter_G1; //קאונטר לספירת מיקום השאלה
//var rightAns_G1; // משתנה לספירת מענה נכון
//var myClick_G1;
//var Click = true;
//var color = false;
//var myBTNchange;
//var myTxt;

//function Game1Func() {
//    console.log("Game1Func");

//    $.ajax({
//        dataType: 'json',
//        url: '/json/myJson.json',
//        async: false,
//        success: function (data) {
//            $("#Game1Div").show();
//            $("#gameNextBtn_G1").hide();

//            counter_G1 = 1; //קאונטר לספירת מיקום השאלה
//            console.log(counter_G1 + " counter_G1");
//            rightAns_G1 = 0;

//            $("#gameAgainBtn_G1").hide();

//            myTxt = function () {
//                document.getElementById("counter_G1").innerHTML = counter_G1;
//                console.log(document.getElementById("counter_G1").innerHTML = counter_G1);
//                console.log(counter_G1 - 1 + " counter_G1-1");
//                document.getElementById("G1_Q1").innerHTML = data.project.projectGame[0].games[counter_G1 - 1].Qest;
//                document.getElementById("G1_Q1_Ans1").innerHTML = data.project.projectGame[0].games[counter_G1 - 1].ans1[0];
//                document.getElementById("G1_Q1_Ans2").innerHTML = data.project.projectGame[0].games[counter_G1 - 1].ans2[0];
//                document.getElementById("G1_Q1_Ans3").innerHTML = data.project.projectGame[0].games[counter_G1 - 1].ans3[0];
//            }
//            myTxt();
            
//            myBTNchange = function () {
//                color = true;
//                // לחיצה על כפתור 1
//                $("#G1_Q1_Ans1").click(function () {
//                    $("#gif_G1").attr("src", "");
//                    if (data.project.projectGame[0].games[counter_G1 - 1].ans1[1] == true) {
//                        rightAns_G1++
//                        $("#G1_Q1_Ans1").addClass("rightAns shadowNaturalClick");
//                        $("#G1_Q1_Ans2").addClass("noneAns shadowNaturalClick");
//                        $("#G1_Q1_Ans3").addClass("noneAns shadowNaturalClick");
//                        //שינוי הגיפים
//                        if (rightAns_G1 == 1) {
//                            $("#gif_G1").attr("src", "gif/true_1.gif");
//                        } else if (rightAns_G1 == 2) {
//                            $("#gif_G1").attr("src", "gif/true_2.gif");
//                        } else if (rightAns_G1 == 3) {
//                            $("#gif_G1").attr("src", "gif/true_3.gif");
//                        } else if (rightAns_G1 == 4) {
//                            $("#gif_G1").attr("src", "gif/true_4.gif");
//                        }
//                    } else if (data.project.projectGame[0].games[counter_G1 - 1].ans2[1] == true) {
//                        //alert("לולאה2");
//                        console.log(data.project.projectGame[0].games[counter_G1 - 1].userT_F + " לפני");
//                        data.project.projectGame[0].games[counter_G1 - 1].userT_F = "*";
//                        console.log(data.project.projectGame[0].games[counter_G1 - 1].userT_F + " אחרי");
//                        $("#G1_Q1_Ans1").addClass("wrongAns shadowNaturalClick");
//                        $("#G1_Q1_Ans2").addClass("rightAns shadowNaturalClick");
//                        $("#G1_Q1_Ans3").addClass("noneAns shadowNaturalClick");
//                        //שינוי הגיפים
//                        if (rightAns_G1 == 0) {
//                            $("#gif_G1").attr("src", "gif/false_1.gif");
//                        } else if (rightAns_G1 == 1) {
//                            $("#gif_G1").attr("src", "gif/false_2.gif");
//                        } else if (rightAns_G1 == 2) {
//                            $("#gif_G1").attr("src", "gif/false_3.gif");
//                        } else if (rightAns_G1 == 3) {
//                            $("#gif_G1").attr("src", "gif/false_4.gif");
//                        }
//                    } else if (data.project.projectGame[0].games[counter_G1 - 1].ans3[1] == true) {
//                        //alert("לולאה3");
//                        console.log(data.project.projectGame[0].games[counter_G1 - 1].userT_F + " לפני");
//                        data.project.projectGame[0].games[counter_G1 - 1].userT_F = "*";
//                        console.log(data.project.projectGame[0].games[counter_G1 - 1].userT_F + " אחרי");
//                        $("#G1_Q1_Ans1").addClass("wrongAns shadowNaturalClick");
//                        $("#G1_Q1_Ans2").addClass("noneAns shadowNaturalClick");
//                        $("#G1_Q1_Ans3").addClass("rightAns shadowNaturalClick");
//                        //שינוי הגיפים
//                        if (rightAns_G1 == 0) {
//                            $("#gif_G1").attr("src", "gif/false_1.gif");
//                        } else if (rightAns_G1 == 1) {
//                            $("#gif_G1").attr("src", "gif/false_2.gif");
//                        } else if (rightAns_G1 == 2) {
//                            $("#gif_G1").attr("src", "gif/false_3.gif");
//                        } else if (rightAns_G1 == 3) {
//                            $("#gif_G1").attr("src", "gif/false_4.gif");
//                        }
//                    }
//                });
//                //לחיצה על כפתור 2
//                $("#G1_Q1_Ans2").click(function () {
//                    if (data.project.projectGame[0].games[counter_G1 - 1].ans1[1] == true) {
//                        $("#G1_Q1_Ans1").addClass("rightAns shadowNaturalClick");
//                        $("#G1_Q1_Ans2").addClass("wrongAns shadowNaturalClick");
//                        $("#G1_Q1_Ans3").addClass("noneAns shadowNaturalClick");
//                        console.log("1");
//                        //שינוי הגיפים
//                        if (rightAns_G1 == 0) {
//                            $("#gif_G1").attr("src", "gif/false_1.gif");
//                        } else if (rightAns_G1 == 1) {
//                            $("#gif_G1").attr("src", "gif/false_2.gif");
//                        } else if (rightAns_G1 == 2) {
//                            $("#gif_G1").attr("src", "gif/false_3.gif");
//                        } else if (rightAns_G1 == 3) {
//                            $("#gif_G1").attr("src", "gif/false_4.gif");
//                        }
//                    } else if (data.project.projectGame[0].games[counter_G1 - 1].ans2[1] == true) {
//                        rightAns_G1++
//                        console.log("2");
//                        $("#G1_Q1_Ans1").addClass("noneAns shadowNaturalClick");
//                        $("#G1_Q1_Ans2").addClass("rightAns shadowNaturalClick");
//                        $("#G1_Q1_Ans3").addClass("noneAns shadowNaturalClick");
//                        //שינוי הגיפים
//                        if (rightAns_G1 == 1) {
//                            $("#gif_G1").attr("src", "gif/true_1.gif");
//                        } else if (rightAns_G1 == 2) {
//                            $("#gif_G1").attr("src", "gif/true_2.gif");
//                        } else if (rightAns_G1 == 3) {
//                            $("#gif_G1").attr("src", "gif/true_3.gif");
//                        } else if (rightAns_G1 == 4) {
//                            $("#gif_G1").attr("src", "gif/true_4.gif");
//                        }
//                    } else if (data.project.projectGame[0].games[counter_G1 - 1].ans3[1] == true) {
//                        //alert("לולאה3");
//                        $("#G1_Q1_Ans1").addClass("noneAns shadowNaturalClick");
//                        $("#G1_Q1_Ans2").addClass("wrongAns shadowNaturalClick");
//                        $("#G1_Q1_Ans3").addClass("rightAns shadowNaturalClick");
//                        //שינוי הגיפים
//                        if (rightAns_G1 == 0) {
//                            $("#gif_G1").attr("src", "gif/false_1.gif");
//                        } else if (rightAns_G1 == 1) {
//                            $("#gif_G1").attr("src", "gif/false_2.gif");
//                        } else if (rightAns_G1 == 2) {
//                            $("#gif_G1").attr("src", "gif/false_3.gif");
//                        } else if (rightAns_G1 == 3) {
//                            $("#gif_G1").attr("src", "gif/false_4.gif");
//                        }
//                    }
//                });
//                //לחיצה על כפתור 3
//                $("#G1_Q1_Ans3").click(function () {
//                    if (data.project.projectGame[0].games[counter_G1 - 1].ans1[1] == true) {
//                        $("#G1_Q1_Ans1").addClass("rightAns shadowNaturalClick");
//                        $("#G1_Q1_Ans2").addClass("noneAns shadowNaturalClick");
//                        $("#G1_Q1_Ans3").addClass("wrongAns shadowNaturalClick");
//                        //שינוי הגיפים
//                        if (rightAns_G1 == 0) {
//                            $("#gif_G1").attr("src", "gif/false_1.gif");
//                        } else if (rightAns_G1 == 1) {
//                            $("#gif_G1").attr("src", "gif/false_2.gif");
//                        } else if (rightAns_G1 == 2) {
//                            $("#gif_G1").attr("src", "gif/false_3.gif");
//                        } else if (rightAns_G1 == 3) {
//                            $("#gif_G1").attr("src", "gif/false_4.gif");
//                        }
//                    } else if (data.project.projectGame[0].games[counter_G1 - 1].ans2[1] == true) {
//                        $("#G1_Q1_Ans1").addClass("noneAns shadowNaturalClick");
//                        $("#G1_Q1_Ans2").addClass("rightAns shadowNaturalClick");
//                        $("#G1_Q1_Ans3").addClass("wrongAns shadowNaturalClick");
//                        //שינוי הגיפים
//                        if (rightAns_G1 == 0) {
//                            $("#gif_G1").attr("src", "gif/false_1.gif");
//                        } else if (rightAns_G1 == 1) {
//                            $("#gif_G1").attr("src", "gif/false_2.gif");
//                        } else if (rightAns_G1 == 2) {
//                            $("#gif_G1").attr("src", "gif/false_3.gif");
//                        } else if (rightAns_G1 == 3) {
//                            $("#gif_G1").attr("src", "gif/false_4.gif");
//                        }
//                    } else if (data.project.projectGame[0].games[counter_G1 - 1].ans3[1] == true) {
//                        //alert("לולאה3");
//                        rightAns_G1++
//                        $("#G1_Q1_Ans1").addClass("noneAns shadowNaturalClick");
//                        $("#G1_Q1_Ans2").addClass("noneAns shadowNaturalClick");
//                        $("#G1_Q1_Ans3").addClass("rightAns shadowNaturalClick");
//                        //שינוי הגיפים
//                        if (rightAns_G1 == 1) {
//                            $("#gif_G1").attr("src", "gif/true_1.gif");
//                        } else if (rightAns_G1 == 2) {
//                            $("#gif_G1").attr("src", "gif/true_2.gif");
//                        } else if (rightAns_G1 == 3) {
//                            $("#gif_G1").attr("src", "gif/true_3.gif");
//                        } else if (rightAns_G1 == 4) {
//                            $("#gif_G1").attr("src", "gif/true_4.gif");
//                        }
//                    }
//                });
//            }
//            myBTNchange();
//        }
//    });


//    var myClick = function () {
//        $(".FUCK").click(function () {
//            Click = false;
//            $("#gameNextBtn_G1").show();
//            console.log(Click + " Click");
//            if (Click == true) {
//                $(".FUCK").on("click");
//                console.log("cj");
//            } else {
//                console.log("hh");
//                $(".FUCK").off("click");
//                myBTNchange();
//            }
//        });
//    }
//    myClick();

//    var next = function () {
//        $("#gameNextBtn_G1").click(function () {
//            if (counter_G1 < 4) {
//                counter_G1++;
//                $("#gameNextBtn_G1").hide();
//                Click = true;
//                color = false;
//                console.log("color " + color);
//                myClick();
//                myTxt();
//                $(".FUCK").removeClass("rightAns wrongAns noneAns shadowNaturalClick");
//            } else {
//                alert("סוף המשחק")
//                $("#showGame_G1").hide();
//                $("#gameAgainBtn_G1").show();
//            }
//        });
//    }
//    next();
//}
//    /*סוף משחקון-רוצה לפגוש מוצר*/


//    /*קריאה לגייסון- הזרקת תוכן לרוצה לפגוש מוצר- חצים*/
//    $(document).ready(function () {
//        setJsonToHtml();
//    });

//    function setJsonToHtml() {
//        $.ajax({
//            url: 'json/myJson.json',
//            dataType: 'json',
//            async: false,
//            success: function (data) {

//                // מוצרים של "אפשר עזרה"
//                $("#tab1").click(function () {
//                    $("#helpTabPart2n3").show();
//                    $("#tab1_Icon").attr("src", "image/meetProduct/meetPro_icon_1_click.png");
//                    $("#tab2_Icon").attr("src", "image/meetProduct/meetPro_icon_2.png");
//                    $("#tab3_Icon").attr("src", "image/meetProduct/meetPro_icon_3.png");
//                    $("#tab4_Icon").attr("src", "image/meetProduct/meetPro_icon_4.png");
//                    $("#tab6_Icon").attr("src", "image/meetProduct/meetPro_icon_6.png");
//                    $("#tab7_Icon").attr("src", "image/meetProduct/meetPro_icon_7.png");
//                    document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation1;
//                    document.getElementById("txt1").innerHTML = data.project.hetzimAccordionLaptop.step1;
//                    document.getElementById("txt2").innerHTML = data.project.hetzimAccordionLaptop.step2;
//                    document.getElementById("txt3").innerHTML = data.project.hetzimAccordionLaptop.step3;
//                    document.getElementById("txt4").innerHTML = data.project.hetzimAccordionLaptop.step4;
//                });

//                $("#tab2").click(function () {
//                    $("#helpTabPart2n3").show();
//                    $("#tab2_Icon").attr("src", "image/meetProduct/meetPro_icon_2_click.png");
//                    $("#tab1_Icon").attr("src", "image/meetProduct/meetPro_icon_1.png");
//                    $("#tab3_Icon").attr("src", "image/meetProduct/meetPro_icon_3.png");
//                    $("#tab4_Icon").attr("src", "image/meetProduct/meetPro_icon_4.png");
//                    $("#tab6_Icon").attr("src", "image/meetProduct/meetPro_icon_6.png");
//                    $("#tab7_Icon").attr("src", "image/meetProduct/meetPro_icon_7.png");
//                    document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation2;
//                    document.getElementById("txt1").innerHTML = data.project.hetzimAccordionPrinter.step1;
//                    document.getElementById("txt2").innerHTML = data.project.hetzimAccordionPrinter.step2;
//                    document.getElementById("txt3").innerHTML = data.project.hetzimAccordionPrinter.step3;
//                    document.getElementById("txt4").innerHTML = data.project.hetzimAccordionPrinter.step4;
//                });

//                $("#tab3").click(function () {
//                    $("#helpTabPart2n3").show();
//                    $("#tab3_Icon").attr("src", "image/meetProduct/meetPro_icon_3_click.png");
//                    $("#tab1_Icon").attr("src", "image/meetProduct/meetPro_icon_1.png");
//                    $("#tab2_Icon").attr("src", "image/meetProduct/meetPro_icon_2.png");
//                    $("#tab4_Icon").attr("src", "image/meetProduct/meetPro_icon_4.png");
//                    $("#tab6_Icon").attr("src", "image/meetProduct/meetPro_icon_6.png");
//                    $("#tab7_Icon").attr("src", "image/meetProduct/meetPro_icon_7.png");
//                    document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation3;
//                    document.getElementById("txt1").innerHTML = data.project.hetzimAccordionGaming.step1;
//                    document.getElementById("txt2").innerHTML = data.project.hetzimAccordionGaming.step2;
//                    document.getElementById("txt3").innerHTML = data.project.hetzimAccordionGaming.step3;
//                    document.getElementById("txt4").innerHTML = data.project.hetzimAccordionGaming.step4;
//                });

//                $("#tab4").click(function () {
//                    $("#helpTabPart2n3").show();
//                    $("#tab4_Icon").attr("src", "image/meetProduct/meetPro_icon_4_click.png");
//                    $("#tab1_Icon").attr("src", "image/meetProduct/meetPro_icon_1.png");
//                    $("#tab2_Icon").attr("src", "image/meetProduct/meetPro_icon_2.png");
//                    $("#tab3_Icon").attr("src", "image/meetProduct/meetPro_icon_3.png");
//                    $("#tab6_Icon").attr("src", "image/meetProduct/meetPro_icon_6.png");
//                    $("#tab7_Icon").attr("src", "image/meetProduct/meetPro_icon_7.png");
//                    document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation4;
//                    document.getElementById("txt1").innerHTML = data.project.hetzimAccordionMemo.step1;
//                    document.getElementById("txt2").innerHTML = data.project.hetzimAccordionMemo.step2;
//                    document.getElementById("txt3").innerHTML = data.project.hetzimAccordionMemo.step3;
//                    document.getElementById("txt4").innerHTML = data.project.hetzimAccordionMemo.step4;
//                });

//                $("#tab6").click(function () {
//                    $("#helpTabPart2n3").show();
//                    $("#tab6_Icon").attr("src", "image/meetProduct/meetPro_icon_6_click.png");
//                    $("#tab1_Icon").attr("src", "image/meetProduct/meetPro_icon_1.png");
//                    $("#tab2_Icon").attr("src", "image/meetProduct/meetPro_icon_2.png");
//                    $("#tab3_Icon").attr("src", "image/meetProduct/meetPro_icon_3.png");
//                    $("#tab4_Icon").attr("src", "image/meetProduct/meetPro_icon_4.png");
//                    $("#tab7_Icon").attr("src", "image/meetProduct/meetPro_icon_7.png");
//                    document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation6;
//                    document.getElementById("txt1").innerHTML = data.project.hetzimAccordionBag.step1;
//                    document.getElementById("txt2").innerHTML = data.project.hetzimAccordionBag.step2;
//                    document.getElementById("txt3").innerHTML = data.project.hetzimAccordionBag.step3;
//                    document.getElementById("txt4").innerHTML = data.project.hetzimAccordionBag.step4;
//                });

//                $("#tab7").click(function () {
//                    $("#helpTabPart2n3").show();
//                    $("#tab7_Icon").attr("src", "image/meetProduct/meetPro_icon_7_click.png");
//                    $("#tab1_Icon").attr("src", "image/meetProduct/meetPro_icon_1.png");
//                    $("#tab2_Icon").attr("src", "image/meetProduct/meetPro_icon_2.png");
//                    $("#tab3_Icon").attr("src", "image/meetProduct/meetPro_icon_3.png");
//                    $("#tab4_Icon").attr("src", "image/meetProduct/meetPro_icon_4.png");
//                    $("#tab6_Icon").attr("src", "image/meetProduct/meetPro_icon_6.png");
//                    document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation7;
//                    document.getElementById("txt1").innerHTML = data.project.hetzimAccordionPen.step1;
//                    document.getElementById("txt2").innerHTML = data.project.hetzimAccordionPen.step2;
//                    document.getElementById("txt3").innerHTML = data.project.hetzimAccordionPen.step3;
//                    document.getElementById("txt4").innerHTML = data.project.hetzimAccordionPen.step4;
//                });

//                $("#tab1,#tab2,#tab3,#tab4,#tab5,#tab6,#tab7").click(function () {
//                    (function (next) { setTimeout(function () { next.scrollIntoView(); }, 100) }(document.getElementById("helpTab")))
//                })

//                //<--!-->

//                // מוצרים של רוצה לבד
//                $("#tab1_2").click(function () {
//                    document.getElementById("ProductExplanationAlonePart").innerHTML = data.project.ProductExplanationAlonePart.ProductExplanation1;
//                    $("#tab1_Icon2").attr("src", "image/meetProduct/meetPro_icon_1_click.png");
//                    $("#tab5_Icon2").attr("src", "image/meetProduct/meetPro_icon_5.png");
//                    $("#tab2_Icon2").attr("src", "image/meetProduct/meetPro_icon_8.png");
//                    $("#tab6_Icon2").attr("src", "image/meetProduct/meetPro_icon_6.png");
//                    Game1Func();
//                });

//                $("#tab5_2").click(function () {
//                    document.getElementById("ProductExplanationAlonePart").innerHTML = data.project.ProductExplanationAlonePart.ProductExplanation2;
//                    $("#tab1_Icon2").attr("src", "image/meetProduct/meetPro_icon_1.png");
//                    $("#tab5_Icon2").attr("src", "image/meetProduct/meetPro_icon_5_click.png");
//                    $("#tab2_Icon2").attr("src", "image/meetProduct/meetPro_icon_8.png");
//                    $("#tab6_Icon2").attr("src", "image/meetProduct/meetPro_icon_6.png");
//                });

//                $("#tab2_2").click(function () {
//                    document.getElementById("ProductExplanationAlonePart").innerHTML = data.project.ProductExplanationAlonePart.ProductExplanation3;
//                    GameCounter = 2;
//                    $("#tab1_Icon2").attr("src", "image/meetProduct/meetPro_icon_1.png");
//                    $("#tab5_Icon2").attr("src", "image/meetProduct/meetPro_icon_5.png");
//                    $("#tab2_Icon2").attr("src", "image/meetProduct/meetPro_icon_8_click.png");
//                    $("#tab6_Icon2").attr("src", "image/meetProduct/meetPro_icon_6.png");
//                });

//                $("#tab6_2").click(function () {
//                    document.getElementById("ProductExplanationAlonePart").innerHTML = data.project.ProductExplanationAlonePart.ProductExplanation4;
//                    $("#tab1_Icon2").attr("src", "image/meetProduct/meetPro_icon_1.png");
//                    $("#tab5_Icon2").attr("src", "image/meetProduct/meetPro_icon_5.png");
//                    $("#tab2_Icon2").attr("src", "image/meetProduct/meetPro_icon_8.png");
//                    $("#tab6_Icon2").attr("src", "image/meetProduct/meetPro_icon_6_click.png");
//                });

//                $("#tab1_2,#tab2_2,#tab3_2,#tab4_2").click(function () {
//                    (function (next) { setTimeout(function () { next.scrollIntoView(); }, 100) }(document.getElementById("aloneTab")))
//                })
//            }
//        });
//    }
