let magic = document.querySelector("#whereMagicHappens");

function renderProyects() {
    let aboutMe = `<div id="myProyects">  
    <div class="sign">
    <span class="fast-flicker">Pokemon Data </span><span class="flicker"> Lovers</span>
    </div>
    <p>Crear en dupla una  página web dirigida a fans de Pokemón, en la cuál puedan obtener, a través del filtrado de una API, información e imágenes de sus personajes favoritos.
    Utilizamos Vanilla JS, CSS, HTML,Jira, Scrum enfocado a historias de usuario y Git y GitHub para el trabajo colaborativo</p>

<div class="sign1">
    <span class="fast-flicker">SkillsMatchers </span><span class="flicker"> . Red Social</span>
    </div>
<p>Desarrollo en equipo de una red social, en la cuál los usuarios puedan compartir sus habilidades y conocimientos y éstos puedan ser intercambiados con otros usuarios para aumentar su skill set y sus redes colaborativas.
Utilizamos VanillaJS, CSS, SASS, Bootstrap, Jira, Scrum, GitHub y Git.</p>
    </div>`
    magic.innerHTML = aboutMe
}


export default renderProyects