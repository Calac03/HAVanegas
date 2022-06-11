let cuestionario = [
  {
    "pregunta":"¿Cuál es el lugar más frío de la tierra?", 
    "respuestas":["La Antártida", "Rusia", "El polo norte", "El monte Everest"]
  },
  {
    "pregunta":"¿Cuál es el río más largo del mundo?", 
    "respuestas":["El rio Amazonas", "El rio Nilo", "El rio Misisipi", "El rio Misuri"]
  },
  {
    "pregunta":"¿Qué tipo de animal es la ballena?", 
    "respuestas":["Mamifero", "Pez", "Artropodo", "Ave"]
  },
  {
    "pregunta":"¿Qué cantidad de huesos en el cuerpo humano?", 
    "respuestas":["206","302","263","202"]
  },
  {
    "pregunta":"¿Cuándo acabó la II Guerra Mundial?", 
    "respuestas":["1945","1947","1937","1940"]
  },
  {
    "pregunta":"¿Dónde se encuentra la iglesia la Sagrada Familia?", 
    "respuestas":["España","El vaticano","Italia","Grecia"]
  },
  {
    "pregunta":"¿Cuál es el unico mamifero que vuela?", 
    "respuestas":["El murcielago","El pato","El tucan","El loro"]
  },
  {
    "pregunta":"¿Cuál es el país más grande del mundo?", 
    "respuestas":["Rusia","Brasil","Canadá","Australia"]
  },
  {
    "pregunta":"¿Dónde se iba a construir la Torre Eiffel?", 
    "respuestas":["España","Italia","Francia","Portugal"]
  },
  {
    "pregunta":"¿Cuantos planetas tiene el sistema solar?", 
    "respuestas":["8","9","7","4"]
  },
  {
    "pregunta":"¿Cuál es la moneda del Reino Unido?", 
    "respuestas":["La libra","El dolar ingles","El won","El sol"]
  },
  {
    "pregunta":"¿Cuál es país más poblado de la Tierra?", 
    "respuestas":["China","Estados unidos","Brasil","Rusia"]
  },
  {
    "pregunta":"¿Qué rama de la Biología estudia las plantas?", 
    "respuestas":["La botanica","La zoología","La cartografía","La geografía"]
  },
  {
    "pregunta":"¿De qué estilo arquitectónico es la Catedral de Notre Dame en París?", 
    "respuestas":["Gotico","Renacentista","Romantico","Barroco"]
  },
  {
    "pregunta":"¿Cuál de los siguientes es un aracnido?", 
    "respuestas":["El escorpion","La libelula","La hormiga","La crisopa"]
  }
]

let PreguntaActual=0;
let correcta;
let respuestascorrectas=0;
let respuestasfallidas=0;
let intervalo;
let tiempo;

let indice = Math.floor(Math.random()*cuestionario*length);

const printHTMLQuestion = (i)=>{
  if(i==cuestionario.length){
    alert('Se llego al final del cuestionario');
  }
  else{
  PreguntaActual++;
  const q = cuestionario[i];
  let a = q.respuestas;
  correcta = a[0];
  a = a.sort((a,b)=>Math.floor(Math.random()*3)-1);

  const htmlrespuestasArray = a.map(currentA => 
  `<p class= boton><button class="answer" onclick="evaluar('${currentA}', this)">${currentA}</button></p>`);

  const htmlrespuestas = htmlrespuestasArray.join('');

  let htmlQuestionCode =`<p>${q.pregunta}</p><div>${htmlrespuestas}</div>`;
  document.querySelector('.pregunta').innerHTML = htmlQuestionCode;


  tiempo=11;
  clearInterval(intervalo)

  intervalo = setInterval(()=>{
    tiempo--;
    if(tiempo==0){
    respuestasfallidas++;
    clearInterval(intervalo);
    document.querySelector('.wrong').innerHTML = respuestasfallidas;
    printHTMLQuestion(PreguntaActual);
    }
    else{
      document.querySelector('.temporizador').innerHTML = tiempo;
    }
  },1000)

  }
}

const evaluar = (answer, obj) =>{
  document.querySelectorAll('.answer').forEach(a => a.classList.remove('right', 'wrong'));
  const parentP = obj.parentNode;

  if(answer == correcta){
    parentP.classList.add('buena');
    respuestascorrectas++;
    document.querySelector('.right').innerHTML = respuestascorrectas;
    clearInterval(intervalo)
    printHTMLQuestion(PreguntaActual);
  }else{
    parentP.classList.add('mala');
    respuestasfallidas++;
    document.querySelector('.wrong').innerHTML = respuestasfallidas;
    clearInterval(intervalo)
    printHTMLQuestion(PreguntaActual);
  }
}

const comenzar = _ =>{
  printHTMLQuestion(PreguntaActual);
  document.querySelector('.contenido').style.display ='block';
  document.querySelector('.Iniciar').style.display = 'none';
}

const volveraempezar = _ =>{
  PreguntaActual=0;
  respuestascorrectas=0;
  respuestasfallidas=0;
  printHTMLQuestion(PreguntaActual);
}