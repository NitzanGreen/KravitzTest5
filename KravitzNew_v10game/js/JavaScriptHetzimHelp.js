
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

                (function (next) { setTimeout(function () { next.scrollIntoView(); }, 100) }(document.getElementById("helpTabPart1")));
                $("#tab1_Icon").attr("src", "image/meetProduct/meetPro_icon_1_click.png");
                document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation1;
                document.getElementById("txt1").innerHTML = data.project.hetzimAccordionLaptop.step1;
                document.getElementById("txt2").innerHTML = data.project.hetzimAccordionLaptop.step2;
                document.getElementById("txt3").innerHTML = data.project.hetzimAccordionLaptop.step3;
                document.getElementById("txt4").innerHTML = data.project.hetzimAccordionLaptop.step4;

                // מוצרים של "אפשר עזרה"
                $("#tab1").click(function () {
                    $("#tab1_Icon").attr("src", "image/meetProduct/meetPro_icon_1_click.png");
                    $("#tab2_Icon").attr("src", "image/meetProduct/meetPro_icon_2.png");
                    $("#tab3_Icon").attr("src", "image/meetProduct/meetPro_icon_3.png");
                    $("#tab4_Icon").attr("src", "image/meetProduct/meetPro_icon_4.png");
                    $("#tab6_Icon").attr("src", "image/meetProduct/meetPro_icon_6.png");
                    $("#tab7_Icon").attr("src", "image/meetProduct/meetPro_icon_7.png");
                    document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation1;
                    document.getElementById("txt1").innerHTML = data.project.hetzimAccordionLaptop.step1;
                    document.getElementById("txt2").innerHTML = data.project.hetzimAccordionLaptop.step2;
                    document.getElementById("txt3").innerHTML = data.project.hetzimAccordionLaptop.step3;
                    document.getElementById("txt4").innerHTML = data.project.hetzimAccordionLaptop.step4;
                });

                $("#tab2").click(function () {
                    $("#tab2_Icon").attr("src", "image/meetProduct/meetPro_icon_2_click.png");
                    $("#tab1_Icon").attr("src", "image/meetProduct/meetPro_icon_1.png");
                    $("#tab3_Icon").attr("src", "image/meetProduct/meetPro_icon_3.png");
                    $("#tab4_Icon").attr("src", "image/meetProduct/meetPro_icon_4.png");
                    $("#tab6_Icon").attr("src", "image/meetProduct/meetPro_icon_6.png");
                    $("#tab7_Icon").attr("src", "image/meetProduct/meetPro_icon_7.png");
                    document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation2;
                    document.getElementById("txt1").innerHTML = data.project.hetzimAccordionPrinter.step1;
                    document.getElementById("txt2").innerHTML = data.project.hetzimAccordionPrinter.step2;
                    document.getElementById("txt3").innerHTML = data.project.hetzimAccordionPrinter.step3;
                    document.getElementById("txt4").innerHTML = data.project.hetzimAccordionPrinter.step4;
                });

                $("#tab3").click(function () {
                    $("#tab3_Icon").attr("src", "image/meetProduct/meetPro_icon_3_click.png");
                    $("#tab1_Icon").attr("src", "image/meetProduct/meetPro_icon_1.png");
                    $("#tab2_Icon").attr("src", "image/meetProduct/meetPro_icon_2.png");
                    $("#tab4_Icon").attr("src", "image/meetProduct/meetPro_icon_4.png");
                    $("#tab6_Icon").attr("src", "image/meetProduct/meetPro_icon_6.png");
                    $("#tab7_Icon").attr("src", "image/meetProduct/meetPro_icon_7.png");
                    document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation3;
                    document.getElementById("txt1").innerHTML = data.project.hetzimAccordionGaming.step1;
                    document.getElementById("txt2").innerHTML = data.project.hetzimAccordionGaming.step2;
                    document.getElementById("txt3").innerHTML = data.project.hetzimAccordionGaming.step3;
                    document.getElementById("txt4").innerHTML = data.project.hetzimAccordionGaming.step4;
                });

                $("#tab4").click(function () {
                    $("#tab4_Icon").attr("src", "image/meetProduct/meetPro_icon_4_click.png");
                    $("#tab1_Icon").attr("src", "image/meetProduct/meetPro_icon_1.png");
                    $("#tab2_Icon").attr("src", "image/meetProduct/meetPro_icon_2.png");
                    $("#tab3_Icon").attr("src", "image/meetProduct/meetPro_icon_3.png");
                    $("#tab6_Icon").attr("src", "image/meetProduct/meetPro_icon_6.png");
                    $("#tab7_Icon").attr("src", "image/meetProduct/meetPro_icon_7.png");
                    document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation4;
                    document.getElementById("txt1").innerHTML = data.project.hetzimAccordionMemo.step1;
                    document.getElementById("txt2").innerHTML = data.project.hetzimAccordionMemo.step2;
                    document.getElementById("txt3").innerHTML = data.project.hetzimAccordionMemo.step3;
                    document.getElementById("txt4").innerHTML = data.project.hetzimAccordionMemo.step4;
                });

                $("#tab6").click(function () {
                    $("#tab6_Icon").attr("src", "image/meetProduct/meetPro_icon_6_click.png");
                    $("#tab1_Icon").attr("src", "image/meetProduct/meetPro_icon_1.png");
                    $("#tab2_Icon").attr("src", "image/meetProduct/meetPro_icon_2.png");
                    $("#tab3_Icon").attr("src", "image/meetProduct/meetPro_icon_3.png");
                    $("#tab4_Icon").attr("src", "image/meetProduct/meetPro_icon_4.png");
                    $("#tab7_Icon").attr("src", "image/meetProduct/meetPro_icon_7.png");
                    document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation6;
                    document.getElementById("txt1").innerHTML = data.project.hetzimAccordionBag.step1;
                    document.getElementById("txt2").innerHTML = data.project.hetzimAccordionBag.step2;
                    document.getElementById("txt3").innerHTML = data.project.hetzimAccordionBag.step3;
                    document.getElementById("txt4").innerHTML = data.project.hetzimAccordionBag.step4;
                });

                $("#tab7").click(function () {
                    $("#tab7_Icon").attr("src", "image/meetProduct/meetPro_icon_7_click.png");
                    $("#tab1_Icon").attr("src", "image/meetProduct/meetPro_icon_1.png");
                    $("#tab2_Icon").attr("src", "image/meetProduct/meetPro_icon_2.png");
                    $("#tab3_Icon").attr("src", "image/meetProduct/meetPro_icon_3.png");
                    $("#tab4_Icon").attr("src", "image/meetProduct/meetPro_icon_4.png");
                    $("#tab6_Icon").attr("src", "image/meetProduct/meetPro_icon_6.png");
                    document.getElementById("ProductExplanationHelpPart").innerHTML = data.project.ProductExplanationHelpPart.ProductExplanation7;
                    document.getElementById("txt1").innerHTML = data.project.hetzimAccordionPen.step1;
                    document.getElementById("txt2").innerHTML = data.project.hetzimAccordionPen.step2;
                    document.getElementById("txt3").innerHTML = data.project.hetzimAccordionPen.step3;
                    document.getElementById("txt4").innerHTML = data.project.hetzimAccordionPen.step4;
                });

                $("#tab1,#tab2,#tab3,#tab4,#tab5,#tab6,#tab7").click(function () {
                    (function (next) { setTimeout(function () { next.scrollIntoView(); }, 100) }(document.getElementById("helpTab")))
                })
            }
        });
    }
