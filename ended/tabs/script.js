let linker = document.getElementsByClassName('nav-link');

for(let i = 0; i < linker.length; i++) {
    if (linker[i].getAttribute('href') === location.pathname) {
        linker[i].classList.add('active');
    } else if(location.pathname === '/') {
        let mainlink = document.getElementsByClassName('nav-link')[0];
        mainlink.classList.add('active');
    }
}




let field = document.getElementsByClassName('main')[0];

let factionCounter = 0;
let factionBonus = 10;

let factionRevenue = 0;

let factory = {
level: 1,
classLvl: 1, //increases with each new
updatePrice: 500,
price: (updatePrice * classLvl * level) > 0 ? updatePrice * classLvl * level : updatePrice * 1 * level,
}