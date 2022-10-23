//seleccionar los elementos de HTML
const input1 = document.querySelector(`#calculo1`)
const input2 = document.querySelector(`#calculo2`)
const btn = document.querySelector(`#btnCalcular`)
const result =document.querySelector(`#result`)
const form = document.querySelector(`form`);

//funcion para sumar 
//escuchando los eventos 

//AddventListener escucha dos argumentos 7
//el primero es el nombre del evento 
//y el segundo es el codigo javaScript que querramos mandar a llamar 

form.addEventListener(`click`, sumarInputValues)

function sumarInputValues(event) {
    console.log(event)
    event.preventDefault();
    console.log(input1.value + input2.value)
    const sumaInputs = Number(input1.value )+ Number(input2.value)
    result.innerHTML=`Resultado: ` + sumaInputs;
}

