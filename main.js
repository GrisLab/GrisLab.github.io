import renderMe from './screens/home.js';
import renderMyLove from './screens/love.js';
import renderProyects from './screens/proyects.js';

let magic = document.querySelector('#whereMagicHappens');
let btns = document.querySelectorAll('.btn');

// router
function router(route) {
    magic.innerHTML = ""
    console.log(route)
    switch (route) {
        case '/proyects':
            renderProyects();
            break;
        case '/justForLove':
            renderMyLove();
            break;
        case '/thisIsMe':
            renderMe();
            break;
        default:
            renderMe();
            break;
    }
}
// btn listener
btns.forEach(btn => btn.onclick = e => router(e.target.id));

router()