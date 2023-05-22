function iniciarMap(){
  var coord = {lat:-37.5956145 ,lng: -35.4431949};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}

// crear el objeto
const credenciales = {
    email: "mocho@gmail.com",
    password: "1234",
  };

  let form = document.querySelector("form");

  console.log(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let userEmail = form.elements.email.value;
    let userPassword = form.elements.password.value;

    if (
      credenciales.email === userEmail &&
      credenciales.password === userPassword
    ) {
      localStorage.setItem("logged", "true");
      window.location.href = "turnos.html";
    } else {
      alert("Por favor vuelva a intentarlo, las credenciales son invalidas");
    }
  });

