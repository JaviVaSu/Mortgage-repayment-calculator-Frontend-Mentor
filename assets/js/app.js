$(document).ready(function() {

    $("#euros").on("keydown", function(){
        $("#containerinput").css("background-color", "var(--Lime)");
        $("#containerinput").css("border", "solid 0.15rem var(--Lime)");
        $("#euro").css("color", "var(--Slate900)")
    });

    $("#euros").on("keyup", function(){
        if($("#euros").val() == ''){
            $("#containerinput").css("background-color", "var(--Slate100)");
            $("#containerinput").css("border", "solid 0.15rem var(--Slate700)");
            $("#euro").css("color", "var(--Slate500)")
        }
    });

    $("#years").on("keydown", function(){
        $("#containerinput2").css("background-color", "var(--Lime)");
        $("#containerinput2").css("border", "solid 0.15rem var(--Lime)");
        $("#year").css("color", "var(--Slate900)")
    });

    $("#years").on("keyup", function(){
        if($("#years").val() == ''){
            $("#containerinput2").css("background-color", "var(--Slate100)");
            $("#containerinput2").css("border", "solid 0.15rem var(--Slate700)");
            $("#year").css("color", "var(--Slate500)")
        }
    });

    $("#percents").on("keydown", function(){
        $("#containerinput3").css("background-color", "var(--Lime)");
        $("#containerinput3").css("border", "solid 0.15rem var(--Lime)");
        $("#percent").css("color", "var(--Slate900)")
    });

    $("#percents").on("keyup", function(){
        if($("#percents").val() == ''){
            $("#containerinput3").css("background-color", "var(--Slate100)");
            $("#containerinput3").css("border", "solid 0.15rem var(--Slate700)");
            $("#percent").css("color", "var(--Slate500)")
        }
    });

    $("#repayment").click(function(){
        $("#label1").css("background-color", "rgba(245, 218, 47, 0.2)");
        $("#label1").css("border", "solid 0.15rem var(--Lime)");
        $("#label2").css("background-color", "transparent");
        $("#label2").css("border", "solid 0.15rem var(--Slate700)");
    });

    $("#interest").click(function(){
        $("#label2").css("background-color", "rgba(245, 218, 47, 0.2)");
        $("#label2").css("border", "solid 0.15rem var(--Lime)");
        $("#label1").css("background-color", "transparent");
        $("#label1").css("border", "solid 0.15rem var(--Slate700)");
    });

    $("#buttoncalculate").click(function(){
        if( ($("#euros").val() != '') && ($("#years").val() != '') && ($("#percents").val() != '') && (($("#repayment").is(':checked')) || ($("#interest").is(':checked')))){
            let prestamo = $("#euros").val();
            let tiempo = $("#years").val();
            let porcentaje = $("#percents").val();
            porcentaje = (porcentaje / 100) / 12;
            let tiempototal = tiempo * 12;
            let sup = porcentaje * prestamo;
            let inf = Math.pow((1 + porcentaje), (tiempototal * -1));
            let inf2 = 1 - inf;
            let cuotaMensual = sup / inf2;
            let pagototal = cuotaMensual * tiempototal;
            $("#resultsempty").css("display", "none");
            $("#resultscompleted").css("display", "block");
            $("#pagototal").text('€'+(pagototal).toFixed(2));
            if( ($("#repayment").is(':checked')) ){
                $("#titleradio").text('Your monthly repayments');
                $("#valuetotals").text('€'+(cuotaMensual).toFixed(2));
            }else{
                let pagointereses = pagototal - prestamo;
                $("#titleradio").text('Total interest');
                $("#valuetotals").text('€'+(pagointereses).toFixed(2));
            }
        }else{
            $("#euros").attr("placeholder", "The field is required");
            $("#euros").val('');
            $("#containerinput").css("background-color", "var(--Red)");
            $("#containerinput").css("border", "solid 0.15rem var(--Red)");

            $("#years").attr("placeholder", "The field is required");
            $("#years").val('');
            $("#containerinput2").css("background-color", "var(--Red)");
            $("#containerinput2").css("border", "solid 0.15rem var(--Red)");

            $("#percents").attr("placeholder", "The field is required");
            $("#percents").val('');
            $("#containerinput3").css("background-color", "var(--Red)");
            $("#containerinput3").css("border", "solid 0.15rem var(--Red)");

            $("#repayment").prop('checked', false);
            $("#interest").prop('checked', false);
            $("#label1").css("background-color", "transparent");
            $("#label1").css("border", "solid 0.15rem var(--Slate700)");
            $("#label2").css("background-color", "transparent");
            $("#label2").css("border", "solid 0.15rem var(--Slate700)");
        }
    });
    $("#clearall").click(function(){
        $("#containerinput").css("background-color", "var(--Slate100)");
        $("#containerinput").css("border", "solid 0.15rem var(--Slate700)");
        $("#euro").css("color", "var(--Slate500)");
        $("#euros").val('');
        $("#containerinput2").css("background-color", "var(--Slate100)");
        $("#containerinput2").css("border", "solid 0.15rem var(--Slate700)");
        $("#year").css("color", "var(--Slate500)");
        $("#years").val('');
        $("#containerinput3").css("background-color", "var(--Slate100)");
        $("#containerinput3").css("border", "solid 0.15rem var(--Slate700)");
        $("#percent").css("color", "var(--Slate500)");
        $("#percents").val('');
        $("#repayment").prop('checked', false);
        $("#interest").prop('checked', false);
        $("#label1").css("background-color", "transparent");
        $("#label1").css("border", "solid 0.15rem var(--Slate700)");
        $("#label2").css("background-color", "transparent");
        $("#label2").css("border", "solid 0.15rem var(--Slate700)");
        $("#resultsempty").css("display", "block");
        $("#resultscompleted").css("display", "none");
    });
});