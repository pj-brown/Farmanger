$(document).ready(function() {
    
    $.ajax({
        url:"https://api.openweathermap.org/data/2.5/forecast?q=minneapolis&appid=5937bbb1d9db98ed63af65c387298603&units=imperial",
        method:"GET"
    }).then(function(results) {
        $("#5DayForecast").empty()
        var row = $("<div class = 'row'>")
    for (let i = 0; i < results.list.length; i++) {
      if(results.list[i].dt_txt.includes("00:00:00")){
                  //5DayForecast
                  var card = $("<div class = 'card col-sm-2 ml-4 mb-5 shadow'>")
                  var cardBody = $("<div class = 'card-body'>")
                  var img = $("<img>")
                  var iconurl = "http://openweathermap.org/img/w/" + results.list[i].weather[0].icon + ".png";
                  var cdate = $("<p>").html(moment(results.list[i].dt_txt.replace("00:00:00", ""),"YYYY-MM-DD").format("dddd"))
                  img.attr("src", iconurl)
                  var p = $("<p>").html("Temp: " + Math.round(results.list[i].main.temp))
                  cardBody.append(cdate,img,p)
                  card.append(cardBody)
                  row.append(card)
                  $("#5DayForecast").append(row)    
      }
    }
        console.log(results)
    })
    // listeners for page direct (manage crop/field)
    $(document).on("click", "#crop-page", getCropPage);
    $(document).on("click", "#field-page", getFieldPage);
    // goes to the crop page
    function getCropPage() {
        window.location.href = "./crops.html";
        getCrops();
    }
    // goes to the field page
    function getFieldPage() {
        window.location.href = "./fields.html"
    }
});