const URL = "https://www.breakingbadapi.com/api/characters";

const getPersonajes = async (url = URL) =>{
    const res = await fetch(url);
    const personajes = await res.json();

    document.getElementById('row').innerHTML = "";
    personajes.forEach(personaje =>{
        document.getElementById("row").insertAdjacentHTML('beforeend', crearCarta(personaje)); 
    })
}

const crearCarta = (personaje) =>{
    return `<div class="card m-4" style="width: 18rem;">
    <img src="${personaje.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 id= "tituloCarta" class="card-title">
            ${personaje.name}
      </h5>
      <p id="textoCarta" class="card-text">
            Nacimiento: ${personaje.birthday} <br>
            Estado: ${personaje.status} <br>
            portrayed: ${personaje.portrayed} 
      </p>
    </div>
  </div>`;
}

const buscarPorNombre = () =>{
    const nombre = document.getElementById('name').value
    const url = URL + "?name=" + nombre;
    getPersonajes(url);
}

const buscarPorStatus = () =>{
    const status = document.getElementById('select').value
    const url = URL + "?status=" + status;
    getPersonajes(url);
}

window.onload = getPersonajes()