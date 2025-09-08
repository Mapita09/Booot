// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://i.pinimg.com/736x/a4/11/2e/a4112ee689bea52ee45e330ea9d1f3c7.jpg",
  "https://i.pinimg.com/736x/9e/f4/14/9ef41425e2e76e86557c658bf6d01340.jpg",
  "https://i.pinimg.com/474x/80/63/5b/80635ba373a589cc5d457429e062124a.jpg",
  "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/12/18/17028906861201.jpg",
  "https://i.pinimg.com/736x/3d/9b/a2/3d9ba2579c3eabbe4b03f0a39c16a9b7.jpg",
  "https://i.pinimg.com/736x/df/5d/f1/df5df1d393bc56d45502773500fad38f.jpg",
  "https://i.pinimg.com/736x/d9/28/ec/d928ec5bbcbcc00c6aefcbaf7516a7f5.jpg",
  "https://i.pinimg.com/736x/0d/72/fe/0d72feb08011e9503f9aba63789f3635.jpg",
  "https://i.pinimg.com/1200x/44/1b/bb/441bbbe09873cb8967189fc8585cf132.jpg",
  "https://i.pinimg.com/1200x/7f/b1/ff/7fb1ffdba8c036c2c351e61aa16e347c.jpg",
  "https://i.pinimg.com/1200x/a6/bc/59/a6bc5998addb0b837b52af754e10851e.jpg",
  "https://i.pinimg.com/1200x/3d/85/99/3d8599bcc1e7359f80c21b2e485af2b9.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/terrys5-1547690301.jpg",
  "https://st1.uvnimg.com/72/9e/2b0318ecf9fdcb5b78a3cd474391/disculpa-de-francis-episodio-piloto.jpg",
  "https://www.slashfilm.com/img/gallery/jason-segels-joke-about-how-i-met-your-mother-that-made-it-into-the-show/l-intro-1651068744.jpg",
  "https://i.pinimg.com/1200x/e5/8c/95/e58c950560dd03373db36d876c70a96a.jpg",
  "https://i.pinimg.com/736x/10/7e/19/107e19cd2dd64f893a295f5489b17524.jpg",
  "https://i.pinimg.com/736x/10/12/0d/10120dd89c77550a01302bb94ff7c693.jpg",
  "https://cdn.milenio.com/uploads/media/2020/09/22/inesita-personaje-interpretado-actriz-dora_0_0_1200_746.jpg",
  "https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/JKGNWTQ235BDFDCK4AEUK443FQ.jpg",
  "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/series-television/the-walking-dead-daryl-dixon-personaje-diferente/136726914-1-esl-ES/Daryl-Dixon-era-muy-diferente-en-los-primeros-guiones-de-The-Walking-Dead-y-no-te-habria-gustado.jpg",
  "https://mitsloanreview.mx/wp-content/uploads/2023/06/datos-curiosos-del-pato-donald.jpg",
  "https://static0.colliderimages.com/wordpress/wp-content/uploads/2024/05/abbott-elementary-barbara-2.jpg",
  "https://i.pinimg.com/236x/5c/79/83/5c79839a53e88d68edb2513d0948adf2.jpg",
];

const titulos = [
  "Blancanieves/Mary Margaret - Once Upon a Time",
  "Remus Lupin - Harry Potter",
  "Nico Di Angelo - Percy Jackson",
  "Percy Jackson - Percy Jackson",
  "Bachira Meguru - Blue Lock",
  "Sae Itoshi - Blue Lock",
  "Nagi Seishiro - Blue Lock",
  "Shikamaru Nara - Naruto",
  "Gaara del Desierto - Naruto",
  "Spiderman - Marvel",
  "Anya Forger - Spy x Family",
  "Canelita - Animal Crossing",
  "Terry Crews - Brooklyn Nine-Nine",
  "Francis - Malcolm en el Medio",
  "Marshall - How I Met Your Mother",
  "Klaus Baudelaire - Una Serie de Eventos Desafortunados",
  "Toge Inumaki - Jujutsu Kaisen",
  "Panda - Jujutsu Kaisen",
  "Inesita - Betty la Fea",
  "Don Martin - Pasión de Gavilanes",
  "Daryl Dixon - The Walking Dead",
  "El Pato Donald - Disney",
  "Barbara Howard - Abbott Elementary",
  "Chanel Numero 1 - Scream Queens",
];

const frases = [
  "Eres alguien dulce y bueno, que ha cometido errores, pero siempre busca resolver y mejorar.",
  "Eres inteligente, muy capaz, aunque aveces inseguro y amas el chocolate.",
  "Eres un poco emo, algo desconfiado pero un gay icon.",
  "Eres carismatico, fuerte y tu mayor debilidad es tu lealtad, (y un poco sassy).",
  "Eres creativo, muy hiperactivo y definitivamente te falta un tornillo.",
  "Eres serio, cero expresivo, a veces hasta grosero, pero eres bueno en lo que haces.",
  "Te da flojera existir, pocas cosas te llaman la atención, pero consigues enfocarte cuando algo te apasiona.",
  "Eres un genio pero te da pereza y te fastidia todo.",
  "Tuviste una infacia dificil pero haz sabido salir adelante. Eres un gran lider, sensible aunque siempre te ves serio.",
  "Todo el mundo te ama, eres sarcastico y siempre tienes el chiste perfecto para todo.",
  "Eres ingenua, algo dispersa y amas la adrenalina. Odias estudiar.",
  "Eres chismosa, divertida y la mejor vecina de tu barrio.",
  "Tienes un corazón enorme, amas a tu familia y el yogurt.",
  "Eres terrible, astuto, confiado y seguramente la mala influencia en tu grupo de amigos.",
  "Eres un alma tierna, optimista y amante de la justicia.",
  "Sabes un poco de todo, eres re cerebrito y las gafas te quedan bien.",
  "Eres alguien de pocas palabras, tranquilo y te gusta mucho la comida.", 
  "Eres un panda fuerte y educado.",
  "Eres dulce, sabia y la voz de la razón en tu grupo de amigas.",
  "Eres alguien muy fuerte, terco y tienes una alma joven y aventurera.",
  "Eres un gran sobreviviente, leal y un poco muy solitario.",
  "Te molestas facil, eres divertido y aveces es dificil entenderte.",
  "Eres una persona de Dios, fuerte, que sabe como manejar cualquier situación (estas un poquis cucha).".
  "Eres mala pero mala, pero demasiado icónica.",

];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();