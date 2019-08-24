var GameCounter=0; //משתנה לקביעת השאלה שתשלף מהגייסן- לכל משחק מוגדר קאונטר עם מספר אחר בהתאם לסדר בגייסון
console.log("GameCounter" + "" + GameCounter) 


/*תפריט המבורגר*/
function openNav() {
    document.getElementById("myNav").style.height = "60%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };
//var removeH1 = document.getElementById("topNavH1");

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
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
                (function (next) { setTimeout(function () { next.scrollIntoView(); window.next = next; setTimeout(function () { window.scrollBy(0, -window.next.clientHeight + 7) }, 100) }, 100) }(this))
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
    $("#tIcon").hide();
    $("#f1Icon").hide();
    $("#f2Icon").hide();
    $("#tIcon2").hide();
    $("#f1Icon2").hide();
    $("#f2Icon2").hide();


    $("#t").click(function () {
        $("#meetCustomerQuestion").css("max-height", "max-content");
        $(this).css("background-color", "#b0d9c8");
        $("#f1").css("background-color", "#e6e6e6");
        $("#f2").css("background-color", "#e6e6e6");
        $("#tIcon").show();
        $("#f1Icon").show();
        $("#f2Icon").show();
        $("#tIcon2").hide();
        $("#f1Icon2").hide();
        $("#f2Icon2").hide();
        $("#q22").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");
    });

    $("#f1").click(function () {
        $("#meetCustomerQuestion").css("max-height", "max-content");
        $("#t").css("background-color", "#b0d9c8");
        $(this).css("background-color", "#fb8a82");
        $("#f2").css("background-color", "#e6e6e6");
        $("#tIcon").show();
        $("#f1Icon").show();
        $("#f2Icon").show();
        $("#q22").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");
    });

    $("#f2").click(function () {
        $("#meetCustomerQuestion").css("max-height", "max-content");
        $("#t").css("background-color", "#b0d9c8");
        $("#f1").css("background-color", "#e6e6e6");
        $(this).css("background-color", "#fb8a82");
        $("#tIcon").show();
        $("#f1Icon").show();
        $("#f2Icon").show();
        $("#q22").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");

    });

    $("#t2").click(function () {
        $("#meetCustomerQuestion").css("max-height", "max-content");
        $("this").css("background-color", "#b0d9c8");
        $("#f12").css("background-color", "#fb8a82");
        $("#f22").css("background-color", "#e6e6e6");
        $("#tIcon2").show();
        $("#f1Icon2").show();
        $("#f2Icon2").show();
        $("#t2").off("click");
        $("#f12").off("click");
        $("#f22").off("click");
    });

    $("#f12").click(function () {
        $("#meetCustomerQuestion").css("max-height", "max-content");
        $("#t2").css("background-color", "#b0d9c8");
        $(this).css("background-color", "#fb8a82");
        $("#f22").css("background-color", "#e6e6e6");
        $("#tIcon2").show();
        $("#f1Icon2").show();
        $("#f2Icon2").show();
        $("#t2").off("click");
        $("#f12").off("click");
        $("#f22").off("click");
    });

    $("#f22").click(function () {
        $("#meetCustomerQuestion").css("max-height", "max-content");
        $("#t2").css("background-color", "#b0d9c8");
        $("#f12").css("background-color", "#e6e6e6");
        $(this).css("background-color", "#fb8a82");
        $("#tIcon2").show();
        $("#f1Icon2").show();
        $("#f2Icon2").show();
        $("#t2").off("click");
        $("#f12").off("click");
        $("#f22").off("click");
    });
});
/*רוצה לפגוש לקוח- שאלות- סוף*/

/*חצים-טאבים של עזרה*/

$(document).ready(function () {

    $("#helpTab").hide();
    $("#aloneTab").hide();
    $("#gameAgainBtn").hide();
    
    //לחיצה על כפתור" אפשר עזרה?"
    $("#helpBtn").click(function () {
        $("#helpTab").show();
        $("#aloneTab").hide();
        $(this).css("background-color", "#178a8d");
        $("#aloneBtn").css("background-color", "#61c1c5");
        $("#helpTabPart2n3").hide();
        (function (next) { setTimeout(function () { next.scrollIntoView(); }, 100) }(document.getElementById("helpTabPart1")));
    });

    //לחיצה על כפתור רוצה בעצמי?"
    $("#aloneBtn").click(function () {
        $("#aloneTab").show();
        $("#helpTab").hide();
        $(this).css("background-color", "#178a8d");
        $("#helpBtn").css("background-color", "#61c1c5");
        $("#aloneTabPart2n3").hide();
        (function (next) { setTimeout(function () { next.scrollIntoView(); }, 100) }(document.getElementById("aloneTabPart1")));
    });

    //לחיצה על אייקונים ב"איזה מוצר בא לך להכיר?" - אפשר עזרה
    $("#tab1,#tab2,#tab3,#tab4").click(function () {
        $("#helpTabPart2n3").show();
    });


    //לחיצה על אייקונים ב"איזה מוצר בא לך להכיר?" - רוצה בעצמי
    $("#tab1_2, #tab2_2, #tab3_2, #tab4_2").click(function () {
        $("#aloneTabPart2n3").show();
    });

});

/*חצים-טאבים של עזרה-סוף*/

/*קריאה לגייסון- הזרקת תוכן לרוצה לפגוש מוצר- חצים*/
$(document).ready(function () {
    setJsonToHtml();
});

function setJsonToHtml() {
    $.ajax({
        url: 'json/myJson.json',
        dataType: 'json',
        async: false,
        success: function (data) {

            // מוצרים של "אפשר עזרה"
            $("#tab1").click(function () {
                $("#helpTabPart2n3").show();
                document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation1;
                document.getElementById("txt1").innerHTML = data.project.hetzimAccordionLaptop.step1;
                document.getElementById("txt2").innerHTML = data.project.hetzimAccordionLaptop.step2;
                document.getElementById("txt3").innerHTML = data.project.hetzimAccordionLaptop.step3;
                document.getElementById("txt4").innerHTML = data.project.hetzimAccordionLaptop.step4;
            });

            $("#tab2").click(function () {
                $("#helpTabPart2n3").show();
                document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation2;
                document.getElementById("txt1").innerHTML = data.project.hetzimAccordionPrinter.step1;
                document.getElementById("txt2").innerHTML = data.project.hetzimAccordionPrinter.step2;
                document.getElementById("txt3").innerHTML = data.project.hetzimAccordionPrinter.step3;
                document.getElementById("txt4").innerHTML = data.project.hetzimAccordionPrinter.step4;
            });

            $("#tab3").click(function () {
                $("#helpTabPart2n3").show();
                document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation3;
                document.getElementById("txt1").innerHTML = data.project.hetzimAccordionGaming.step1;
                document.getElementById("txt2").innerHTML = data.project.hetzimAccordionGaming.step2;
                document.getElementById("txt3").innerHTML = data.project.hetzimAccordionGaming.step3;
                document.getElementById("txt4").innerHTML = data.project.hetzimAccordionGaming.step4;
            });

            $("#tab4").click(function () {
                $("#helpTabPart2n3").show();
                document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation4;
                document.getElementById("txt1").innerHTML = data.project.hetzimAccordionMemo.step1;
                document.getElementById("txt2").innerHTML = data.project.hetzimAccordionMemo.step2;
                document.getElementById("txt3").innerHTML = data.project.hetzimAccordionMemo.step3;
                document.getElementById("txt4").innerHTML = data.project.hetzimAccordionMemo.step4;
            });

            $("#tab1,#tab2,#tab3,#tab4").click(function () {
                (function (next) { setTimeout(function () { next.scrollIntoView(); }, 100) }(document.getElementById("helpTab")))
            })

           //<--!-->

            // מוצרים של רוצה לבד
            $("#tab1_2").click(function () {
                document.getElementById("ProductExplanationAlonePart").innerHTML = data.project.ProductExplanationAlonePart.ProductExplanation1;
                GameCounter = 0;
                console.log("GameCounter" + "" + GameCounter)
                startGame();
            });

            $("#tab2_2").click(function () {
                document.getElementById("ProductExplanationAlonePart").innerHTML = data.project.ProductExplanationAlonePart.ProductExplanation2;
                GameCounter = 1;
                console.log("GameCounter" + "" + GameCounter)
                startGame();
            });

            $("#tab3_2").click(function () {
                document.getElementById("ProductExplanationAlonePart").innerHTML = data.project.ProductExplanationAlonePart.ProductExplanation3;
                GameCounter = 2;
                console.log("GameCounter" + "" + GameCounter)
                startGame();
            });

            $("#tab4_2").click(function () {
                document.getElementById("ProductExplanationAlonePart").innerHTML = data.project.ProductExplanationAlonePart.ProductExplanation4;
                GameCounter = 3;
                console.log("GameCounter" + "" + GameCounter)
                startGame();
            });

            $("#tab1_2,#tab2_2,#tab3_2,#tab4_2").click(function () {
                (function (next) { setTimeout(function () { next.scrollIntoView(); }, 100) }(document.getElementById("aloneTab")))
            })
        }
    });
}
/*קריאה לגייסון- הזרקת תוכן לרוצה לפגוש מוצר- חצים- סוף*/

/*משחקון-רוצה לפגוש מוצר*/
var counter = 0; //קאונטר לספירת מיקום השאלה
var tryCounter = 4; //משתנה לספירת כמות הנסיונות- יורד עד 0
var rightAns = 0; // משתנה לספירת מענה נכון
console.log(counter + "counter");

function startGame() {
    setJsonToHtml2();
    loop();
    document.getElementById("tryCounter").innerHTML = tryCounter;
}

function setJsonToHtml2() {
    $.ajax({
        dataType: 'json',
        url: '/json/myJson.json',
        async: false,
        success: function (data) {

            var myClick = function () {
                $(".FUCK").click(function () {
                    tryCounter--;
                    document.getElementById("tryCounter").innerHTML = tryCounter;
                    console.log(tryCounter + "tryCounter");
                    console.log("אני בתוך הפונקציה")
                    $("#gameNextBtn").show();
                    $(".FUCK").off("click");
                });
                var x = GameCounter;
                // לחיצה על כפתור 1
                $("#gameAns1").click(function () {
                    $("#gif").attr("src", "");
                    if (data.project.projectGame[x].games[counter].ans1[1] == true) {
                        //alert("לולאה1");
                        rightAns++
                        console.log("rightAns" + rightAns);

                        $("#gameAns1").addClass("rightAns");
                        $("#gameAns2").addClass("noneAns");
                        $("#gameAns3").addClass("noneAns");

                        //שינוי הגיפים
                        if (rightAns == 1) {
                            $("#gif").attr("src", "gif/true_1.gif");
                        } else if (rightAns == 2) {
                            $("#gif").attr("src", "gif/true_2.gif");
                        } else if (rightAns == 3) {
                            $("#gif").attr("src", "gif/true_3.gif");
                        } else if (rightAns == 4) {
                            $("#gif").attr("src", "gif/true_4.gif");
                        }

                    } else if (data.project.projectGame[x].games[counter].ans2[1] == true) {
                        //alert("לולאה2");
                        $("#gameAns1").addClass("wrongAns");
                        $("#gameAns2").addClass("rightAns");
                        $("#gameAns3").addClass("noneAns");


                        //שינוי הגיפים
                        if (rightAns == 0) {
                            $("#gif").attr("src", "gif/false_1.gif");
                        } else if (rightAns == 1) {
                            $("#gif").attr("src", "gif/false_2.gif");
                        } else if (rightAns == 2) {
                            $("#gif").attr("src", "gif/false_3.gif");
                        } else if (rightAns == 3) {
                            $("#gif").attr("src", "gif/false_4.gif");
                        }

                    } else if (data.project.projectGame[x].games[counter].ans3[1] == true) {
                        //alert("לולאה3");
                        $("#gameAns1").addClass("wrongAns");
                        $("#gameAns2").addClass("noneAns");
                        $("#gameAns3").addClass("rightAns");

                        //שינוי הגיפים
                        if (rightAns == 0) {
                            $("#gif").attr("src", "gif/false_1.gif");
                        } else if (rightAns == 1) {
                            $("#gif").attr("src", "gif/false_2.gif");
                        } else if (rightAns == 2) {
                            $("#gif").attr("src", "gif/false_3.gif");
                        } else if (rightAns == 3) {
                            $("#gif").attr("src", "gif/false_4.gif");
                        }
                    }
                });

                //לחיצה על כפתור 2
                $("#gameAns2").click(function () {
                    if (data.project.projectGame[x].games[counter].ans1[1] == true) {
                        console.log(data.project.projectGame[x].games[counter].ans1[1]);
                        //alert("לולאה1");
                        $("#gameAns1").addClass("rightAns");
                        $("#gameAns2").addClass("wrongAns");
                        $("#gameAns3").addClass("noneAns");

                        //שינוי הגיפים
                        if (rightAns == 0) {
                            $("#gif").attr("src", "gif/false_1.gif");
                        } else if (rightAns == 1) {
                            $("#gif").attr("src", "gif/false_2.gif");
                        } else if (rightAns == 2) {
                            $("#gif").attr("src", "gif/false_3.gif");
                        } else if (rightAns == 3) {
                            $("#gif").attr("src", "gif/false_4.gif");
                        }

                    } else if (data.project.projectGame[x].games[counter].ans2[1] == true) {
                        //alert("לולאה2");
                        rightAns++
                        console.log("rightAns" + rightAns);

                        $("#gameAns1").addClass("noneAns");
                        $("#gameAns2").addClass("rightAns");
                        $("#gameAns3").addClass("noneAns");

                        //שינוי הגיפים
                        if (rightAns == 1) {
                            $("#gif").attr("src", "gif/true_1.gif");
                        } else if (rightAns == 2) {
                            $("#gif").attr("src", "gif/true_2.gif");
                        } else if (rightAns == 3) {
                            $("#gif").attr("src", "gif/true_3.gif");
                        } else if (rightAns == 4) {
                            $("#gif").attr("src", "gif/true_4.gif");
                        }

                    } else if (data.project.projectGame[x].games[counter].ans3[1] == true) {
                        //alert("לולאה3");
                        $("#gameAns1").addClass("noneAns");
                        $("#gameAns2").addClass("wrongAns");
                        $("#gameAns3").addClass("rightAns");

                        //שינוי הגיפים
                        if (rightAns == 0) {
                            $("#gif").attr("src", "gif/false_1.gif");
                        } else if (rightAns == 1) {
                            $("#gif").attr("src", "gif/false_2.gif");
                        } else if (rightAns == 2) {
                            $("#gif").attr("src", "gif/false_3.gif");
                        } else if (rightAns == 3) {
                            $("#gif").attr("src", "gif/false_4.gif");
                        }

                    }
                });

                //לחיצה על כפתור 3
                $("#gameAns3").click(function () {
                    if (data.project.projectGame[x].games[counter].ans1[1] == true) {
                        console.log(data.project.projectGame[x].games[counter].ans1[1]);
                        //alert("לולאה1");
                        $("#gameAns1").addClass("rightAns");
                        $("#gameAns2").addClass("noneAns");
                        $("#gameAns3").addClass("wrongAns");

                        //שינוי הגיפים
                        if (rightAns == 0) {
                            $("#gif").attr("src", "gif/false_1.gif");
                        } else if (rightAns == 1) {
                            $("#gif").attr("src", "gif/false_2.gif");
                        } else if (rightAns == 2) {
                            $("#gif").attr("src", "gif/false_3.gif");
                        } else if (rightAns == 3) {
                            $("#gif").attr("src", "gif/false_4.gif");
                        }

                    } else if (data.project.projectGame[x].games[counter].ans2[1] == true) {
                        //alert("לולאה2");
                        $("#gameAns1").addClass("noneAns");
                        $("#gameAns2").addClass("rightAns");
                        $("#gameAns3").addClass("wrongAns");

                        //שינוי הגיפים
                        if (rightAns == 0) {
                            $("#gif").attr("src", "gif/false_1.gif");
                        } else if (rightAns == 1) {
                            $("#gif").attr("src", "gif/false_2.gif");
                        } else if (rightAns == 2) {
                            $("#gif").attr("src", "gif/false_3.gif");
                        } else if (rightAns == 3) {
                            $("#gif").attr("src", "gif/false_4.gif");
                        }

                    } else if (data.project.projectGame[x].games[counter].ans3[1] == true) {
                        //alert("לולאה3");
                        rightAns++
                        console.log("rightAns" + rightAns);

                        $("#gameAns1").addClass("noneAns");
                        $("#gameAns2").addClass("noneAns");
                        $("#gameAns3").addClass("rightAns");

                        //שינוי הגיפים
                        if (rightAns == 1) {
                            $("#gif").attr("src", "gif/true_1.gif");
                        } else if (rightAns == 2) {
                            $("#gif").attr("src", "gif/true_2.gif");
                        } else if (rightAns == 3) {
                            $("#gif").attr("src", "gif/true_3.gif");
                        } else if (rightAns == 4) {
                            $("#gif").attr("src", "gif/true_4.gif");
                        }
                    }
                });
            }

            myClick();
            console.log("אני מחוץ לפונקציה")
            $("#gameNextBtn").click(function () {
                $(".FUCK").removeClass("rightAns wrongAns noneAns");
                counter++;
                console.log(counter + "counter");
                if (counter < 4) {
                    loop();
                } else {
                    alert("סוף המשחק")
                    $("#endGame").hide();
                    $("#gameAgainBtn").show();
                };
                $('.FUCK').on('click', myClick());
            });

            $("#gameAgainBtn").click(function () {
                $("#gameAgainBtn").hide();
                $("#endGame").show();
                counter = 0;
                console.log("counter" + " " + counter);
                tryCounter = 4;
                console.log("tryCounter" + " " + tryCounter);
                rightAns = 0;
                console.log("rightAns" + " " + rightAns);
                startGame();
            });
        }
    });
}

function loop() {
    $.ajax({
        dataType: 'json',
        url: '/json/myJson.json',
        async: false,
        success: function (data) {

            $("#gameNextBtn").hide();
            var x = GameCounter;
            console.log(x+" "+"x")
            document.getElementById("gameQues").innerHTML = data.project.projectGame[x].games[counter].Qest;
            console.log("GameCounter"+""+GameCounter)
            console.log(data.project.projectGame[x].games[counter].Qest)
            document.getElementById("gameAns1").innerHTML = data.project.projectGame[x].games[counter].ans1[0];
            document.getElementById("gameAns2").innerHTML = data.project.projectGame[x].games[counter].ans2[0];
            document.getElementById("gameAns3").innerHTML = data.project.projectGame[x].games[counter].ans3[0];
        }
    });
}
/*סוף משחקון-רוצה לפגוש מוצר*/
