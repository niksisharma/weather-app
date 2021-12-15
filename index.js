// JQuery code

$(document).ready(function(){
    console.log("Jquery loaded");
})

// code from ( https://api.jquery.com/jquery.ajax/ ) => context section of the webpage.
$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=7905d57b2827b9350f7efe18627fdaac&units=metric",
    // context: document.body
  }).done(function(data) {
    console.log(data);
    // $( this ).addClass( "done" );

    $(".city_name").html(data.name)
    $(".card-sub-heading").html(data.weather.main)
    $(".card-mid-figure").html(data.main.temp)
    $(".temp").html(data.main.temp)
    $(".card-mid-info").html(data.weather.description)
    $(".humadity-info").html(data.main.humidity)
    $(".visibility-info").html(data.visibility)
    $(".pressure-info").html(data.main.pressure)
  });