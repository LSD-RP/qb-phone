let gar

$(document).on('click', '.storage-vehicle', function(e){
    e.preventDefault();

    $(".storage-homescreen").animate({
        left: 30+"vh"
    }, 200);
    $(".storage-detailscreen").animate({
        left: 0+"vh"
    }, 200);

    var Id = $(this).attr('id');
    var garData = $("#"+Id).data('GarageData');
    gar = garData
    // SetupDetails(VehData);
});

$(document).on('click', '#return-storagepage', function(e){
    e.preventDefault();

    $(".storage-homescreen").animate({
        left: 00+"vh"
    }, 200);
    $(".storage-detailscreen").animate({
        left: -30+"vh"
    }, 200);
});

$(document).on('click', '#confirm-storagepage', function(e){
    e.preventDefault()
    $.post("https://qb-phone/store-vehicle", JSON.stringify({
        garage: gar,
    }));
    $(".storage-homescreen").animate({
        left: 00+"vh"
    }, 200);
    $(".storage-detailscreen").animate({
        left: -30+"vh"
    }, 200);
    $(".phone-home-container").click();
});



GetGarages = function(Garages) {
    $(".storage-vehicles").html("");
    if (Garages != null) {
        $.each(Garages, function(i, garage){
            // console.log(JSON.stringify(garage, 2, null))
            if (garage.showBlip != true) {return;}
            if (garage.type != "public") {return;}
            if (garage.vehicle != "car") {return;}
            if (garage.label == "Cayo Perico Garage" || garage.label == "Cayo Perico Airport Parking") {return;}

            var Element = '<div class="storage-vehicle" id="garage-'+i+'"><span class="storage-vehicle-name">'+garage.label+'</span> </div>';

            $(".storage-vehicles").append(Element);
            $("#garage-"+i).data('GarageData', garage);
        });
    }
}

SetupDetails = function(data) {
    $(".vehicle-brand").find(".vehicle-answer").html(data.brand);
    $(".vehicle-model").find(".vehicle-answer").html(data.model);
    $(".vehicle-plate").find(".vehicle-answer").html(data.plate);
    $(".vehicle-garage").find(".vehicle-answer").html(data.garage);
    $(".vehicle-status").find(".vehicle-answer").html(data.state);
    $(".vehicle-fuel").find(".vehicle-answer").html(Math.ceil(data.fuel)+"%");
    $(".vehicle-engine").find(".vehicle-answer").html(Math.ceil(data.engine / 10)+"%");
    $(".vehicle-body").find(".vehicle-answer").html(Math.ceil(data.body / 10)+"%");
}