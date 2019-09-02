
var playAgain;
var counter_G1; //קאונטר לספירת מיקום השאלה
var rightAns_G1; // משתנה לספירת מענה נכון
var myClick_G1;
var myClick;
var Click = true;
var color = false;
var myBTNchange;
var myTxt;

var fruits = new Array();
console.log(fruits);


function sumFunc() {
    console.log("Game1Func");

    $.ajax({
        dataType: 'json',
        url: 'json/myJson.json',
        async: false,
        success: function (data) {

            document.getElementById("T_F1").innerText = fruits[0];
            document.getElementById("sum1_Q").innerText = data.project.projectGame[2].games[0].Qest;
            document.getElementById("sum1_ANS").innerText = data.project.projectGame[2].games[0].ans2[0];

            document.getElementById("T_F2").innerText = fruits[1];
            document.getElementById("sum2_Q").innerText = data.project.projectGame[2].games[1].Qest;
            document.getElementById("sum2_ANS").innerText = data.project.projectGame[2].games[1].ans3[0];

            document.getElementById("T_F3").innerText = fruits[2];
            document.getElementById("sum3_Q").innerText = data.project.projectGame[2].games[2].Qest;
            document.getElementById("sum3_ANS").innerText = data.project.projectGame[2].games[2].ans1[0];

            document.getElementById("T_F4").innerText = fruits[3];
            document.getElementById("sum4_Q").innerText = data.project.projectGame[2].games[3].Qest;
            document.getElementById("sum4_ANS").innerText = data.project.projectGame[2].games[3].ans2[0];
        }
    });
}

function Game1Func() {
    console.log("Game1Func");

    $.ajax({
        dataType: 'json',
        url: 'json/myJson.json',
        async: false,
        success: function (data) {
            document.getElementById("ProductExplanationAlonePart").innerHTML = data.project.ProductExplanationAlonePart.ProductExplanation3;

            $("#Game1Div").show();
            $("#gameNextBtn_G1").hide();

            counter_G1 = 1; //קאונטר לספירת מיקום השאלה
            console.log(counter_G1 + " counter_G1");
            rightAns_G1 = 0;

            $("#gameAgainBtn_G1").hide();

            myTxt = function () {
                document.getElementById("counter_G1").innerText = counter_G1;
                console.log(document.getElementById("counter_G1").innerText = counter_G1);
                console.log(counter_G1 - 1 + " counter_G1-1");
                document.getElementById("G1_Q1").innerText = data.project.projectGame[2].games[counter_G1 - 1].Qest;
                document.getElementById("G1_Q1_Ans1").innerText = data.project.projectGame[2].games[counter_G1 - 1].ans1[0];
                document.getElementById("G1_Q1_Ans2").innerText = data.project.projectGame[2].games[counter_G1 - 1].ans2[0];
                document.getElementById("G1_Q1_Ans3").innerText = data.project.projectGame[2].games[counter_G1 - 1].ans3[0];
            }
            myTxt();


            myClick = function () {
                $(".gameTXTans").click(function () {
                    //console.log("אני בתוך הפונקציה");
                    $("#gameNextBtn_G1").show();
                    $(".gameTXTans").off("click");
                });
            }

            myClick();

            myBTNchange = function () {
                //color = true;
                // לחיצה על כפתור 1
                $("#G1_Q1_Ans1").click(function () {
                    $("#gif_G1").attr("src", "");
                    if (data.project.projectGame[2].games[counter_G1 - 1].ans1[1] == true) {
                        rightAns_G1++
                        fruits.push(" ");
                        $("#t_F_icon1").addClass("tIconGame");
                        console.log(fruits);
                        $("#G1_Q1_Ans1").addClass("rightAns shadowNaturalClick");
                        $("#G1_Q1_Ans2").addClass("noneAns shadowNaturalClick");
                        $("#G1_Q1_Ans3").addClass("noneAns shadowNaturalClick");
                        //שינוי הגיפים
                        if (rightAns_G1 == 1) {
                            $("#gif_G1").attr("src", "gif/true_1.gif");
                        } else if (rightAns_G1 == 2) {
                            $("#gif_G1").attr("src", "gif/true_2.gif");
                        } else if (rightAns_G1 == 3) {
                            $("#gif_G1").attr("src", "gif/true_3.gif");
                        } else if (rightAns_G1 == 4) {
                            $("#gif_G1").attr("src", "gif/true_4.gif");
                        }
                    } else if (data.project.projectGame[2].games[counter_G1 - 1].ans2[1] == true) {
                        //alert("לולאה2");
                        fruits.push("*");
                        console.log(fruits);
                        $("#t_F_icon1").addClass("fIconGame");
                        $("#t_F_icon2").addClass("tIconGame");
                        $("#G1_Q1_Ans1").addClass("wrongAns shadowNaturalClick");
                        $("#G1_Q1_Ans2").addClass("rightAns shadowNaturalClick");
                        $("#G1_Q1_Ans3").addClass("noneAns shadowNaturalClick");
                        //שינוי הגיפים
                        if (rightAns_G1 == 0) {
                            $("#gif_G1").attr("src", "gif/false_1.gif");
                        } else if (rightAns_G1 == 1) {
                            $("#gif_G1").attr("src", "gif/false_2.gif");
                        } else if (rightAns_G1 == 2) {
                            $("#gif_G1").attr("src", "gif/false_3.gif");
                        } else if (rightAns_G1 == 3) {
                            $("#gif_G1").attr("src", "gif/false_4.gif");
                        }
                    } else if (data.project.projectGame[2].games[counter_G1 - 1].ans3[1] == true) {
                        //alert("לולאה3");
                        fruits.push("*");
                        console.log(fruits);
                        $("#t_F_icon1").addClass("fIconGame");
                        $("#t_F_icon3").addClass("tIconGame");
                        $("#G1_Q1_Ans1").addClass("wrongAns shadowNaturalClick");
                        $("#G1_Q1_Ans2").addClass("noneAns shadowNaturalClick");
                        $("#G1_Q1_Ans3").addClass("rightAns shadowNaturalClick");
                        //שינוי הגיפים
                        if (rightAns_G1 == 0) {
                            $("#gif_G1").attr("src", "gif/false_1.gif");
                        } else if (rightAns_G1 == 1) {
                            $("#gif_G1").attr("src", "gif/false_2.gif");
                        } else if (rightAns_G1 == 2) {
                            $("#gif_G1").attr("src", "gif/false_3.gif");
                        } else if (rightAns_G1 == 3) {
                            $("#gif_G1").attr("src", "gif/false_4.gif");
                        }
                    }
                });
                //לחיצה על כפתור 2
                $("#G1_Q1_Ans2").click(function () {
                    if (data.project.projectGame[2].games[counter_G1 - 1].ans1[1] == true) {
                        fruits.push("*");
                        console.log(fruits);
                        $("#t_F_icon1").addClass("tIconGame");
                        $("#t_F_icon2").addClass("fIconGame");
                        $("#G1_Q1_Ans1").addClass("rightAns shadowNaturalClick");
                        $("#G1_Q1_Ans2").addClass("wrongAns shadowNaturalClick");
                        $("#G1_Q1_Ans3").addClass("noneAns shadowNaturalClick");
                        //שינוי הגיפים
                        if (rightAns_G1 == 0) {
                            $("#gif_G1").attr("src", "gif/false_1.gif");
                        } else if (rightAns_G1 == 1) {
                            $("#gif_G1").attr("src", "gif/false_2.gif");
                        } else if (rightAns_G1 == 2) {
                            $("#gif_G1").attr("src", "gif/false_3.gif");
                        } else if (rightAns_G1 == 3) {
                            $("#gif_G1").attr("src", "gif/false_4.gif");
                        }
                    } else if (data.project.projectGame[2].games[counter_G1 - 1].ans2[1] == true) {
                        fruits.push(" ");
                        console.log(fruits);
                        $("#t_F_icon2").addClass("tIconGame");
                        rightAns_G1++
                        console.log("2");
                        $("#G1_Q1_Ans1").addClass("noneAns shadowNaturalClick");
                        $("#G1_Q1_Ans2").addClass("rightAns shadowNaturalClick");
                        $("#G1_Q1_Ans3").addClass("noneAns shadowNaturalClick");
                        //שינוי הגיפים
                        if (rightAns_G1 == 1) {
                            $("#gif_G1").attr("src", "gif/true_1.gif");
                        } else if (rightAns_G1 == 2) {
                            $("#gif_G1").attr("src", "gif/true_2.gif");
                        } else if (rightAns_G1 == 3) {
                            $("#gif_G1").attr("src", "gif/true_3.gif");
                        } else if (rightAns_G1 == 4) {
                            $("#gif_G1").attr("src", "gif/true_4.gif");
                        }
                    } else if (data.project.projectGame[2].games[counter_G1 - 1].ans3[1] == true) {
                        fruits.push("*");
                        console.log(fruits);
                        $("#t_F_icon2").addClass("fIconGame");
                        $("#t_F_icon3").addClass("tIconGame");
                        //alert("לולאה3");
                        $("#G1_Q1_Ans1").addClass("noneAns shadowNaturalClick");
                        $("#G1_Q1_Ans2").addClass("wrongAns shadowNaturalClick");
                        $("#G1_Q1_Ans3").addClass("rightAns shadowNaturalClick");
                        //שינוי הגיפים
                        if (rightAns_G1 == 0) {
                            $("#gif_G1").attr("src", "gif/false_1.gif");
                        } else if (rightAns_G1 == 1) {
                            $("#gif_G1").attr("src", "gif/false_2.gif");
                        } else if (rightAns_G1 == 2) {
                            $("#gif_G1").attr("src", "gif/false_3.gif");
                        } else if (rightAns_G1 == 3) {
                            $("#gif_G1").attr("src", "gif/false_4.gif");
                        }
                    }
                });
                //לחיצה על כפתור 3
                $("#G1_Q1_Ans3").click(function () {
                    if (data.project.projectGame[2].games[counter_G1 - 1].ans1[1] == true) {
                        fruits.push("*");
                        console.log(fruits);
                        $("#t_F_icon1").addClass("tIconGame");
                        $("#t_F_icon3").addClass("fIconGame");
                        $("#G1_Q1_Ans1").addClass("rightAns shadowNaturalClick");
                        $("#G1_Q1_Ans2").addClass("noneAns shadowNaturalClick");
                        $("#G1_Q1_Ans3").addClass("wrongAns shadowNaturalClick");
                        //שינוי הגיפים
                        if (rightAns_G1 == 0) {
                            $("#gif_G1").attr("src", "gif/false_1.gif");
                        } else if (rightAns_G1 == 1) {
                            $("#gif_G1").attr("src", "gif/false_2.gif");
                        } else if (rightAns_G1 == 2) {
                            $("#gif_G1").attr("src", "gif/false_3.gif");
                        } else if (rightAns_G1 == 3) {
                            $("#gif_G1").attr("src", "gif/false_4.gif");
                        }
                    } else if (data.project.projectGame[2].games[counter_G1 - 1].ans2[1] == true) {
                        fruits.push("*");
                        console.log(fruits);
                        $("#t_F_icon2").addClass("tIconGame");
                        $("#t_F_icon3").addClass("fIconGame");
                        $("#G1_Q1_Ans1").addClass("noneAns shadowNaturalClick");
                        $("#G1_Q1_Ans2").addClass("rightAns shadowNaturalClick");
                        $("#G1_Q1_Ans3").addClass("wrongAns shadowNaturalClick");
                        //שינוי הגיפים
                        if (rightAns_G1 == 0) {
                            $("#gif_G1").attr("src", "gif/false_1.gif");
                        } else if (rightAns_G1 == 1) {
                            $("#gif_G1").attr("src", "gif/false_2.gif");
                        } else if (rightAns_G1 == 2) {
                            $("#gif_G1").attr("src", "gif/false_3.gif");
                        } else if (rightAns_G1 == 3) {
                            $("#gif_G1").attr("src", "gif/false_4.gif");
                        }
                    } else if (data.project.projectGame[2].games[counter_G1 - 1].ans3[1] == true) {
                        fruits.push(" ");
                        console.log(fruits);
                        $("#t_F_icon3").addClass("tIconGame");
                        //alert("לולאה3");
                        rightAns_G1++
                        $("#G1_Q1_Ans1").addClass("noneAns shadowNaturalClick");
                        $("#G1_Q1_Ans2").addClass("noneAns shadowNaturalClick");
                        $("#G1_Q1_Ans3").addClass("rightAns shadowNaturalClick");
                        //שינוי הגיפים
                        if (rightAns_G1 == 1) {
                            $("#gif_G1").attr("src", "gif/true_1.gif");
                        } else if (rightAns_G1 == 2) {
                            $("#gif_G1").attr("src", "gif/true_2.gif");
                        } else if (rightAns_G1 == 3) {
                            $("#gif_G1").attr("src", "gif/true_3.gif");
                        } else if (rightAns_G1 == 4) {
                            $("#gif_G1").attr("src", "gif/true_4.gif");
                        }
                    }
                });
            }
            myBTNchange();
        }
    });

    var next = function () {
        $("#gameNextBtn_G1").click(function () {
            if (counter_G1 < 4) {
                counter_G1++;
                $("#gameNextBtn_G1").hide();
                Click = true;
                color = false;
                console.log("color " + color);
                myBTNchange();
                myClick();
                myTxt();
                $(".gameTXTans").removeClass("rightAns wrongAns noneAns shadowNaturalClick");
                $("#t_F_icon1").removeClass("fIconGame tIconGame");
                $("#t_F_icon2").removeClass("fIconGame tIconGame");
                $("#t_F_icon3").removeClass("fIconGame tIconGame");
            } else {
                $("#showGame_G1").hide();
                $("#gameAgainBtn_G1").show();
                sumFunc();
            }
        });
    }
    next();
}

/*סוף משחקון-רוצה לפגוש מוצר*/

