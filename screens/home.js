let magic = document.querySelector("#whereMagicHappens");

function renderMe() {
    let aboutMe = `<div id="aboutMe"> 
    <h2>Grisel Sánchez</h2> 
    <h2>Front End Developer</h2>
    <div class="container">
      <img src="gris (1).png" alt="Avatar" class="image" style="width:100%">
      <div class="middle">
        <div class="text">Apasionada por los retos y la búsqueda de soluciones creativas y disruptivas para resolverlos.
        Busco formar redes de trabajo colaborativo, inclusivo y  multidisciplinario como fuente de creación, renovación y cambio.
        Mi motivación es compartir conocimiento y usar la tecnología para impulsar la transformación social.   </div>
      </div>
    </div>
    </div>`
    magic.innerHTML = aboutMe
}


export default renderMe