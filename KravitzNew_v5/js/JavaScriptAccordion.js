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
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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



function initAccordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                (function (next) { setTimeout(function () { next.scrollIntoView(); window.next = next; setTimeout(function () { window.scrollBy(0, -window.next.clientHeight + 7) }, 100) }, 100) }(this))
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

    //לחיצה על כפתור" אפשר עזרה?"
    $("#helpBtn").click(function () {
        $("#helpTab").show();
        $(this).css("background-color", "#178a8d");
        $("#helpTabPart2n3").hide();
        (function (next) { setTimeout(function () { next.scrollIntoView(); }, 100) }(document.getElementById("helpTabPart1")))
    });

   //לחיצה על אייקונים ב"איזה מוצר בא לך להכיר?"
    $("#tab1").click(function () {
        $("#helpTabPart2n3").show();
    });

    $("#tab2").click(function () {
        $("#helpTabPart2n3").show();
    });
});

/*חצים-טאבים של עזרה-סוף*/

/*קריאה לגייסון- הזרקת תוכן לרוצה לפגוש מוצר- חצים*/
$(document).ready(function () {
    setJsonToHtml();
});

function setJsonToHtml() {
    $.ajax({
        url: '/json/myJson.json',
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
        }
    });
}
/*קריאה לגייסון- הזרקת תוכן לרוצה לפגוש מוצר- חצים- סוף*/