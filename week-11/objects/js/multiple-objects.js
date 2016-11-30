// Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function () {
        var availability = this.rooms - this.booked;
        if (availability <= 0) return "No rooms available";
        else return availability;
    };
}


// Create two hotel objects
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
var cityHotel = new Hotel('City', 87, 12);
var countryClubHotel = new Hotel('Country Club', 15, 15);


// Update the HTML for the page
var details1 = quayHotel.name + ' rooms: ';
details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

var details3 = cityHotel.name + ' rooms: ';
details3 += cityHotel.checkAvailability();
var elHotel3 = document.getElementById('hotel3');
elHotel3.textContent = details3;

var details4 = countryClubHotel.name + ' rooms: ';
details4 += countryClubHotel.checkAvailability();
var elHotel4 = document.getElementById('hotel4');
elHotel4.textContent = details4;

/* 
 NOTE: textContent does not work in IE8 or earlier
 You can use innerHTML on lines 21 and 26, but note the security issues on p228-231
 */