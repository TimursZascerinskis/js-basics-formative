function printTicketPrice(visitorAge,isStudent){
    if (visitorAge<=6){
        console.log("ieeja ir bez maksas.")
    }
    else if(isStudent ===true){
        console.log("biļetes cena ir 5 EUR.")
    }
    else {
        console.log("Visiem pārējiem biļetes cena ir 10 EUR.")
    }
}
console.log(printTicketPrice(12,true));
console.log(printTicketPrice(35,false));

