//SELECTEURS
// document.querySelector('h4').style.background = 'yellow';

// const baliseHTML = document.querySelector('h4');
// baliseHTML.style.background = 'yellow';

//Click event
const questionContainer = document.querySelector('.click-event'); //querrySelector = css donc .click-event
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2'); // comme on cherche par id pas besoin de #
const response = document.querySelector('p');
// console.log(response);
// console.log(btn1, btn2);

questionContainer.addEventListener('click', () => {
  //   questionContainer.style.background = 'red';
  questionContainer.classList.toggle('question-clicked'); //classList = class donc pas de . devant 'question-clicked
});

btn1.addEventListener('click', () => {
  //   console.log('click');
  response.classList.add('show-response');
  response.style.background = 'green';
});
btn2.addEventListener('click', () => {
  //   console.log('click');
  response.classList.add('show-response');
  response.style.background = 'red';

  //attention aux priorités css =><div style=""></div> > id >.class > baliseHTML
});

//----------------------------------------------------------------------
//Mouse events
const mousemove = document.querySelector('.mousemove');

// console.log(mousemove);

window.addEventListener('mousemove', (e) => {
  mousemove.style.left = e.pageX + 'px';
  mousemove.style.top = e.pageY + 'px';
});

window.addEventListener('mousedown', () => {
  mousemove.style.transform = 'scale(2) translate(-25%, -25%)';
});
window.addEventListener('mouseup', () => {
  mousemove.style.transform = 'scale(1) translate(-50%, -50%)';
});

questionContainer.addEventListener('mouseenter', () => {
  questionContainer.style.background = 'rgba(0,0,0,0.6)';
});
questionContainer.addEventListener('mouseout', () => {
  questionContainer.style.background = 'pink';
});

response.addEventListener('mouseover', () => {
  response.style.transform = 'rotate(2deg)';
});

//--------------------------------------------------------------------
//Key press event

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');
// console.log(keypressContainer);
// console.log(key);

// const ring = () => {
//   const audio = new Audio();
//   audio.src = './Enter.mp3';
//   audio.play();
// }; //pour sonner a chaque touche du clavier

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + '.mp3';
  audio.play(); //pour affecter un son a une touche, exemple pour z = z.mp3
};

document.addEventListener('keypress', (e) => {
  //   console.log('yes');
  //   console.log(e);
  //   console.log(e.key);
  key.textContent = e.key;
  if (e.key === 'j') {
    keypressContainer.style.background = 'pink';
  } else if (e.key === 'h') {
    keypressContainer.style.background = 'teal';
  } else {
    keypressContainer.style.background = 'blue';
  }
  if (e.key === 'z') ring(e.key);
});

//------------------------------------------------------------------
//Scroll event

const nav = document.querySelector('nav');
// console.log(nav);

window.addEventListener('scroll', () => {
  //   console.log('test!');
  //   console.log(window.scrollY);
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = '-50px';
  }
});

//----------------------------------------------------------------------
//Form events
const inputName = document.querySelector('input[type="text"]');
// console.log(inputName);
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = '';
// console.log(select);
let language = '';

inputName.addEventListener('input', (e) => {
  //   console.log(e.target.value);
  pseudo = e.target.value;
  //   console.log(pseudo);
});

select.addEventListener('input', (e) => {
  language = e.target.value;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //   console.log('yes');
  //   console.log(cgv.checked); //les checkbox et les bouton n' on pas besoin d' être declarer en variable

  if (cgv.checked) {
    //affiche le contenu des variables
    document.querySelector('form > div').innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>`;
  } else {
    alert('Veuillez accepter les CGV');
  }
});

//-------------------------------------------------------------
//Load event
window.addEventListener('load', () => {
  console.log('Document chargé !');
});

//-------------------------------------------------------------
//ForEach : pour chacun d' eux donc tous!
// const boxes = document.getElementsByClassName('box');
const boxes = document.querySelectorAll('.box');
// console.log(boxes);
boxes.forEach((box) => {
  box.addEventListener('click', (e) => {
    // console.log(e.target);
    e.target.style.transform = 'scale(0.7)';
  });
});

//--------------------------------------------------------------
//addEventListener Vs onclick
//avec onclick on ne peut mettre qu' un evenement par balise!
// par contre il peut être utilisé directement dans l' html

// document.body.onclick = function () {
//   console.log('Click');
// };
// document.body.onclick = () => {
//   console.log('reClick');
// };

//Bubbling => fin ( de base l' eventlisner est parametré en mode bubbling)
document.body.addEventListener(
  'click',
  () => {
    console.log('click1');
  },
  false
);

//Usecapture => inverse l' arbre, donc il arrive avant click1
document.body.addEventListener(
  'click',
  () => {
    console.log('click2');
  },
  true
);

// https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/

//-----------------------------------------------------------------
//Stop propagation

// questionContainer.addEventListener('click', () => {
//   alert('test');
//   e.stopPropagation();
// });

//removeEventListener

//-------------------------------------------------------------------
//BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open('http://google.com', 'cour js', 'height= 600', 'width = 800');
//window.close()

//Evenement adossé a window
//alert("hello")
//confirm
btn2.addEventListener('click', () => {
  confirm('Voulez vous vraiment vous tromper ?');
});

//prompt
btn1.addEventListener('click', () => {
  let answer = prompt('entrez votre nom !');

  // questionContainer.innerHTML = `<h3>Bravo ${answer} vous avez bien répondu !</h3>`; //= écrase
  questionContainer.innerHTML += `<h3>Bravo ${answer} vous avez bien répondu !</h3>`; //+= a la suite
});

//Timer, compte a rebours
setTimeout(() => {
  //logique a éxécuter
}, 'temps en milliseconde avant de déclancher');
setTimeout(() => {
  questionContainer.style.borderRadius = '300px';
}, 2000);

// let interval = setInterval(() => {
//   document.body.innerHTML += "<div class='box'><h2>Nouvelle Boite !</h2></div>";
// }, 1000);

// document.body.addEventListener('click', () => {
//   clearInterval(interval);
// });

//supprimer un element du dom au clique
// document.body.addEventListener('click', (e) => {
//   e.target.remove();
// });

//Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace('http://lequipe.fr');

// window.onload = () => {
//   location.href = 'http://twitter.fr';
// };

//Navigator
// console.log(navigator.userAgent);

// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Votre position actuelle est :");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La précision est de ${crd.accuracy} mètres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

// History
// console.log(history);
// window.history.back();
// history.go(-2)

//------------------------------------------------
// SetProperty
window.addEventListener('mousemove', (e) => {
  nav.style.setProperty('--x', e.layerX + 'px');
  nav.style.setProperty('--y', e.layerY + 'px');
});
