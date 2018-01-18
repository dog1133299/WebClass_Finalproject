
$(function () {
    getLstCinema();
    $("[name=cinema]").on("change", getLstMovie);
    $("[name=movie]").on("change", getLstDate);
    $("[name=date]").on("change", getLstSession);
    getLstArea();
    $("[name=area]").on("change", getLstFilm);
    $("[name=film]").on("change", getLstTime);
});

function generateSelect(api, name, text) {
    $.ajax({
        url: strApiPath + api,
        method: "GET",
        contentType: "application/json"
    }).done(function (data) {
        var select = $("[name=" + name + "]");
        select.find("option").remove();
        select.append($("<option></option>").val("").text(text));
        for (var i in data) {
            select.append($("<option></option>").val(data[i].strValue).text(data[i].strText));
        }
    });
}

function getLstArea() { generateSelect("/GetLstDicArea/", "area", "請選擇地區"); }

function getLstFilm() { generateSelect("/GetLstDicFilm/?area=" + $(this).val(), "film", "請選擇影片"); }

function getLstTime() { generateSelect("/GetLstDicDate/?area=" + $("[name=area]").val() + "&movie=" + $(this).val(), "time", "請選擇日期"); }

function getLstCinema() { generateSelect("/GetLstDicCinema/", "cinema", "請選擇影城"); }

function getLstMovie() { generateSelect("/GetLstDicMovie/?cinema=" + $(this).val(), "movie", "請選擇影片"); }

function getLstDate() { generateSelect("/GetLstDicDate/?cinema=" + $("[name=cinema]").val() + "&movie=" + $(this).val(), "date", "請選擇日期"); }

function getLstSession() { generateSelect("/GetLstDicSession/?cinema=" + $("[name=cinema]").val() + "&movie=" + $("[name=movie]").val() + "&date=" + $(this).val(), "session", "請選擇場次"); }

function booking() {
    if($("[name=session]").val()){
        window.location.href = "http://web.vscinemas.com.tw/vsTicketing/ticketing/booking.aspx?" + $("[name=session]").val();
    }else{
        if($("#searchBox1").length>0){ //For Index
            $(".bookGroup select").focus();
        }
        if($("#searchForm1").length>0){ //For Inside
            $(".bookBox select").focus();
        }
    }
}