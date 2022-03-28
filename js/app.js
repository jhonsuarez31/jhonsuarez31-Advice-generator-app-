console.log("Hola");

const API_URL = "https://api.adviceslip.com/advice ";
const title = document.getElementById("title");
const queote = document.getElementById("queote");

 

const queotef = async () => {
  
  try {
    const respuesta = await fetch(API_URL);
    const datos = await respuesta.json();
    advance(datos.slip.id, datos.slip.advice);

    console.log(datos);
    
  } catch (error) {
    console.log(error);
  }
};

function advance(id, advice) {
  title.textContent = `“ADIVICE # ${id}”`;
  queote.textContent = `“${advice}”`;
}


const holaMundo =()=>{


  console.log('Hola Mundo');
}


