function iniciarMap(){
    var coord = {lat:-37.90419941774776 ,lng: -57.34311016459688};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
