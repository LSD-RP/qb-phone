SetupLawyers = function(data) {
    $(".lawyers-list").html("");
    var lawyers = [];
    var realestate = [];
    var mechanic = [];
    var taxi = [];
    var police = [];
    var ambulance = [];
    var cardealer = [];
    var burgershot = [];
    var unicorn = [];
    var bestbuds = [];
    var firedepartment = [];
    var reporters = [];

    if (data.length > 0) {

        $.each(data, function(i, lawyer) {
            if (lawyer.typejob == "lawyer") {
                lawyers.push(lawyer);
            }
            if (lawyer.typejob == "realestate") {
                realestate.push(lawyer);
            }
            if (lawyer.typejob == "mechanic") {
                mechanic.push(lawyer);
            }
            if (lawyer.typejob == "taxi") {
                taxi.push(lawyer);
            }
            if (lawyer.typejob == "police") {
                police.push(lawyer);
            }
            if (lawyer.typejob == "ambulance") {
                ambulance.push(lawyer);
            }
            if (lawyer.typejob == "cardealer") {
                cardealer.push(lawyer);
            }
            if (lawyer.typejob == "burgershot") {
                burgershot.push(lawyer);
            }
            if (lawyer.typejob == "vu") {
                unicorn.push(lawyer);
            }
            if (lawyer.typejob == "bestbuds") {
                bestbuds.push(lawyer);
            }
            if (lawyer.typejob == "fd") {
                firedepartment.push(lawyer);
            }
            if (lawyer.typejob == "reporter") {
                reporters.push(lawyer);
            }
        });

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(0, 102, 255);">Police (' + police.length + ')</h1>');

        if (police.length > 0) {
            $.each(police, function(i, lawyer4) {
                var element = '<div class="lawyer-list" id="lawyerid4-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(0, 102, 255);">' + (lawyer4.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer4.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".lawyers-list").append(element);
                $("#lawyerid4-" + i).data('LawyerData', lawyer4);
            });
        } else {
            var element = '<div class="lawyer-list"><div class="no-lawyers">There is no police available.</div></div>'
            $(".lawyers-list").append(element);
        }

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 0, 0);">Ambulance (' + ambulance.length + ')</h1>');

        if (ambulance.length > 0) {
            $.each(ambulance, function(i, lawyer5) {
                var element = '<div class="lawyer-list" id="lawyerid5-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(255, 0, 0);">' + (lawyer5.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer5.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".lawyers-list").append(element);
                $("#lawyerid5-" + i).data('LawyerData', lawyer5);
            });
        } else {
            var element = '<div class="lawyer-list"><div class="no-lawyers">There is no ems available.</div></div>'
            $(".lawyers-list").append(element);
        }

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(0, 204, 102);">Mechanic (' + mechanic.length + ')</h1>');

        if (mechanic.length > 0) {
            $.each(mechanic, function(i, lawyer2) {
                var element = '<div class="lawyer-list" id="lawyerid2-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(0, 204, 102);">' + (lawyer2.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer2.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".lawyers-list").append(element);
                $("#lawyerid2-" + i).data('LawyerData', lawyer2);
            });
        } else {
            var element = '<div class="lawyer-list"><div class="no-lawyers">There are no mechanics available.</div></div>'
            $(".lawyers-list").append(element);
        }

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 190, 27);">Taxi (' + taxi.length + ')</h1>');

        if (taxi.length > 0) {
            $.each(taxi, function(i, lawyer3) {
                var element = '<div class="lawyer-list" id="lawyerid3-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(255, 190, 27);">' + (lawyer3.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer3.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".lawyers-list").append(element);
                $("#lawyerid3-" + i).data('LawyerData', lawyer3);
            });
        } else {
            var element = '<div class="lawyer-list"><div class="no-lawyers">There are no taxis available.</div></div>'
            $(".lawyers-list").append(element);
        }

        $(".lawyers-list").append('<h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; border-top-left-radius: .5vh; border-top-right-radius: .5vh; width:100%; display:block; background-color: rgb(42, 137, 214);">Lawyers (' + lawyers.length + ')</h1>');

        if (lawyers.length > 0) {
            $.each(lawyers, function(i, lawyer) {
                var element = '<div class="lawyer-list" id="lawyerid-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(42, 137, 214);">' + (lawyer.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".lawyers-list").append(element);
                $("#lawyerid-" + i).data('LawyerData', lawyer);
            });
        } else {
            var element = '<div class="lawyer-list"><div class="no-lawyers">There are no lawyers available.</div></div>'
            $(".lawyers-list").append(element);
        }

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255,0,0);">Fire Department (' + firedepartment.length + ')</h1>');

        if (firedepartment.length > 0) {
            $.each(firedepartment, function(i, lawyer10) {
                var element = '<div class="lawyer-list" id="lawyerid10-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(255,0,0);">' + (lawyer10.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer10.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".lawyers-list").append(element);
                $("#lawyerid10-" + i).data('LawyerData', lawyer10);
            });
        } else {
            var element = '<div class="lawyer-list"><div class="no-lawyers">There are no Fire Fighters available.</div></div>'
            $(".lawyers-list").append(element);
        }

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(158, 230, 64);">Weazel News (' + reporters.length + ')</h1>');

        if (reporters.length > 0) {
            $.each(reporters, function(i, lawyer11) {
                var element = '<div class="lawyer-list" id="lawyerid11-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(158, 230, 64;">' + (lawyer11.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer11.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".lawyers-list").append(element);
                $("#lawyerid11-" + i).data('LawyerData', lawyer11);
            });
        } else {
            var element = '<div class="lawyer-list"><div class="no-lawyers">There are no Reporters available.</div></div>'
            $(".lawyers-list").append(element);
        }

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(155, 15, 120);">Real Estate (' + realestate.length + ')</h1>');

        if (realestate.length > 0) {
            $.each(realestate, function(i, lawyer1) {
                var element = '<div class="lawyer-list" id="lawyerid1-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(155, 15, 120);">' + (lawyer1.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer1.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".lawyers-list").append(element);
                $("#lawyerid1-" + i).data('LawyerData', lawyer1);
            });
        } else {
            var element = '<div class="lawyer-list"><div class="no-lawyers">There are no real estate agents available.</div></div>'
            $(".lawyers-list").append(element);
        }

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(60, 233, 168);">Car Dealer (' + cardealer.length + ')</h1>');

        if (cardealer.length > 0) {
            $.each(cardealer, function(i, lawyer6) {
                var element = '<div class="lawyer-list" id="lawyerid6-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(60, 233, 168);">' + (lawyer6.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer6.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".lawyers-list").append(element);
                $("#lawyerid6-" + i).data('LawyerData', lawyer6);
            });
        } else {
            var element = '<div class="lawyer-list"><div class="no-lawyers">There is no car dealers available.</div></div>'
            $(".lawyers-list").append(element);
        }

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(233, 169, 60);">Burger Shot (' + burgershot.length + ')</h1>');

        if (burgershot.length > 0) {
            $.each(burgershot, function(i, lawyer7) {
                var element = '<div class="lawyer-list" id="lawyerid7-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(233, 169, 60);">' + (lawyer7.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer7.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".lawyers-list").append(element);
                $("#lawyerid7-" + i).data('LawyerData', lawyer7);
            });
        } else {
            var element = '<div class="lawyer-list"><div class="no-lawyers">There are no Burger Shot employees available.</div></div>'
            $(".lawyers-list").append(element);
        }

        // $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(219,112,147);">Vanilla Unicorn (' + unicorn.length + ')</h1>');

        // if (unicorn.length > 0) {
        //     $.each(unicorn, function(i, lawyer8) {
        //         var element = '<div class="lawyer-list" id="lawyerid8-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(219,112,147);">' + (lawyer8.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer8.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
        //         $(".lawyers-list").append(element);
        //         $("#lawyerid8-" + i).data('LawyerData', lawyer8);
        //     });
        // } else {
        //     var element = '<div class="lawyer-list"><div class="no-lawyers">There are no Vanilla Unicorn employees available.</div></div>'
        //     $(".lawyers-list").append(element);
        // }

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(40,201,36);">Best Buds (' + bestbuds.length + ')</h1>');

        if (bestbuds.length > 0) {
            $.each(bestbuds, function(i, lawyer9) {
                var element = '<div class="lawyer-list" id="lawyerid9-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(40,201,36);">' + (lawyer9.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer9.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".lawyers-list").append(element);
                $("#lawyerid9-" + i).data('LawyerData', lawyer9);
            });
        } else {
            var element = '<div class="lawyer-list"><div class="no-lawyers">There are no Best Buds available.</div></div>'
            $(".lawyers-list").append(element);
        }

        
    } else {
        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(0, 102, 255);">Police (' + police.length + ')</h1>');
        var element = '<div class="lawyer-list"><div class="no-lawyers">There are no police available.</div></div>'
        $(".lawyers-list").append(element);

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 0, 0);">Ambulance (' + ambulance.length + ')</h1>');
        var element = '<div class="lawyer-list"><div class="no-lawyers">There are no ambulance personnel available.</div></div>'
        $(".lawyers-list").append(element);

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(0, 204, 102);">Mechanic (' + mechanic.length + ')</h1>');
        var element = '<div class="lawyer-list"><div class="no-lawyers">There are no mechanics available.</div></div>'
        $(".lawyers-list").append(element);

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 190, 27);">Taxi (' + taxi.length + ')</h1>');
        var element = '<div class="lawyer-list"><div class="no-lawyers">There are no taxis available.</div></div>'
        $(".lawyers-list").append(element);

        $(".lawyers-list").append('<h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; border-top-left-radius: .5vh; border-top-right-radius: .5vh; width:100%; display:block; background-color: rgb(42, 137, 214);">Lawyers (' + lawyers.length + ')</h1>');
        var element = '<div class="lawyer-list"><div class="no-lawyers">There are no lawyers available.</div></div>'
        $(".lawyers-list").append(element);

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255,0,0);">Fire Department (' + firedepartment.length + ')</h1>');
        var element = '<div class="lawyer-list"><div class="no-lawyers">There are no Fire Fighters available.</div></div>'
        $(".lawyers-list").append(element);

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(158, 230, 64);">Weazel News (' + reporters.length + ')</h1>');
        var element = '<div class="lawyer-list"><div class="no-lawyers">There are no Reporters available.</div></div>'
        $(".lawyers-list").append(element);

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(155, 15, 120);">Real Estate (' + realestate.length + ')</h1>');
        var element = '<div class="lawyer-list"><div class="no-lawyers">There are no real estate agents available.</div></div>'
        $(".lawyers-list").append(element);

        


        
        
        

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(60, 233, 168);">Car Dealer (' + cardealer.length + ')</h1>');
        var element = '<div class="lawyer-list"><div class="no-lawyers">There are no car dealers available.</div></div>'
        $(".lawyers-list").append(element);

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(233, 169, 60);">Burger Shot (' + burgershot.length + ')</h1>');
        var element = '<div class="lawyer-list"><div class="no-lawyers">There are no Burger Shot employees available.</div></div>'
        $(".lawyers-list").append(element);
        
        // $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(219,112,147);">Vanilla Unicorn (' + unicorn.length + ')</h1>');

        // var element = '<div class="lawyer-list"><div class="no-lawyers">There are no Vanilla Unicorn employees available.</div></div>'
        // $(".lawyers-list").append(element)

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(40,201,36);">Best Buds (' + bestbuds.length + ')</h1>');
        var element = '<div class="lawyer-list"><div class="no-lawyers">There are no Best Buds available.</div></div>'
        $(".lawyers-list").append(element);
        
    }
}

$(document).on('click', '.lawyer-list-call', function(e){
    e.preventDefault();

    var LawyerData = $(this).parent().data('LawyerData');
    
    var cData = {
        number: LawyerData.phone,
        name: LawyerData.name
    }

    $.post('https://qb-phone/CallContact', JSON.stringify({
        ContactData: cData,
        Anonymous: QB.Phone.Data.AnonymousCall,
    }), function(status){
        if (cData.number !== QB.Phone.Data.PlayerData.charinfo.phone) {
            if (status.IsOnline) {
                if (status.CanCall) {
                    if (!status.InCall) {
                        if (QB.Phone.Data.AnonymousCall) {
                            QB.Phone.Notifications.Add("fas fa-phone", "Phone", "You started a anonymous call!");
                        }
                        $(".phone-call-outgoing").css({"display":"block"});
                        $(".phone-call-incoming").css({"display":"none"});
                        $(".phone-call-ongoing").css({"display":"none"});
                        $(".phone-call-outgoing-caller").html(cData.name);
                        QB.Phone.Functions.HeaderTextColor("white", 400);
                        QB.Phone.Animations.TopSlideUp('.phone-application-container', 400, -160);
                        setTimeout(function(){
                            $(".lawyers-app").css({"display":"none"});
                            QB.Phone.Animations.TopSlideDown('.phone-application-container', 400, 0);
                            QB.Phone.Functions.ToggleApp("phone-call", "block");
                        }, 450);
    
                        CallData.name = cData.name;
                        CallData.number = cData.number;
                    
                        QB.Phone.Data.currentApplication = "phone-call";
                    } else {
                        QB.Phone.Notifications.Add("fas fa-phone", "Phone", "You are already connected to a call!");
                    }
                } else {
                    QB.Phone.Notifications.Add("fas fa-phone", "Phone", "This person is already in a call");
                }
            } else {
                QB.Phone.Notifications.Add("fas fa-phone", "Phone", "This person is not available!");
            }
        } else {
            QB.Phone.Notifications.Add("fas fa-phone", "Phone", "You can't call your own number!");
        }
    });
});
