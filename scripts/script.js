/* const api_url='https://api.wheretheiss.at/v1/satellites/25544'//link url 

function obtenerPosicion(){
    const response = fetch(api_url)
    console.log(response)

    const data = response.json()
    console.log(data)

    const {latitude, longitude, velocity, units} = data
    console.log(latitude)
    console.log(longitude)
    console.log(velocity)
    console.log(units)

    document.getElementById("lat").textContent=data.latitude
    document.getElementById("lon").textContent=longitude
    document.getElementById("vel").textContent=data.velocity


} */

// URL de la API a la que voy a acceder
const apiUrl = 'https://api.wheretheiss.at/v1/satellites/25544';

function asteroid(){
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
    .then(response => {
      if (!response.ok) {
        throw new Error('La solicitud no se pudo completar');
      }
      return response.json();
    })
    .then(data => {
    const {latitude, longitude, velocity, units} = data
    console.log(latitude)
    console.log(longitude)
    console.log(velocity)
    console.log(units)

      let lat = (document.getElementById("lat").innerHTML=latitude)
      let lon = document.getElementById("lon").innerHTML=longitude
      let vel = document.getElementById("vel").innerHTML=velocity
      console.log(data);
    })
    .catch(error => {
      console.error('Ocurrió un error:', error);
    });
}
const res = setInterval(asteroid(), 1000);



