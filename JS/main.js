const tarjeta = document.querySelector('#tarjeta'), //agregamos una constante de nombre tarjeta (nada tiene que ver con el html) y accedemos al id="tarjeta" del HTML
    btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'), //quitamos el ";" que habiamos puesto por una ",", y agregamos otra variable (btnAbrirFormulario) en la siguiente linea
    formulario = document.querySelector('#formulario-tarjeta'); //quitamos el ";" que habiamos puesto en la línea anterior por una ",", y agregamos otra variable (formulario)


// esta parte hace la funcion de darle un giro a la tarjeta al hacer clic sobre ella
tarjeta.addEventListener('click', () => { /*queremos acceder a tarjeta con el evento listener y queremos que cuando se de un clic, me ejecute la siguiente funcione "() =>"*/ 
    tarjeta.classList.toggle('active'); /*y cuando den un clic en la tarjeta, se activara la clase "active", y decimos, quiero acceder a su lista de clases, y que haga un toogle de la clase active. El toggle significa que sino tiene la clase active se la va a poner y si ya la tiene se la va a quitar*/
});

//esta parte hace la funcion (ABRE EL FORMULARIO) con el BOTON y hace girar el boton 45° al hacer clic sobre él
btnAbrirFormulario.addEventListener('click', () => { //queremos acceder a bontonAbrirFormulario con el evento listener (de tipo clic) y queremos que cuando se de un clic, me ejecute la siguiente funcione "() =>"
    btnAbrirFormulario.classList.toggle('active'), // y cuando den un clic en el boton, se activara la clase "active", y decimos, quiero acceder a su lista de clases, y que haga un toogle de la clase active. El toggle significa que sino tiene la clase active se la va a poner y si ya la tiene se la va a quitar*/
    formulario.classList.toggle('active'); //dentro de esta misma funcion agregamos la parte para el formulario ya que actuan en conjunto el bonton con el formulario y cuando den un clic en el boton, se activara la clase "active", y decimos, quiero acceder a su lista de clases, y que haga un toogle de la clase active. El toggle significa que sino tiene la clase active se la va a poner y si ya la tiene se la va a quitar*/    
}) 

//SELECT del MES generado dinamicamente
for(let i = 1; i <= 12; i++ ){ //creamos un ciclo for
    let opcion = document.createElement('option'); //decimos que en cada ejecucion se cree una variable llamada opcion, y document.createElement(''), va a crear una especie de etiqueta llamada "option", QUE SON LAS QUE VAN DENTRO DEL SELECT
    opcion.value = i; //le decimos que queremos accedera a la nueva variable "opcion", y le digo que el valor sea igual a la variable 'i', por lo tanto el codigo se va a ejecutar 12 veces
    opcion.innerText = i; //le decimos que opcion.innerText sea igual a 'i', el innerText es para trabajar dentro de la etiqueta "opcion", que se encuentra dentro del "Select", es decir con los meses
    formulario.selectMes.appendChild(opcion); //luego mediante la variable que creamos en la linea 3, accedemos al 'id' que creamos en la parte del Select, y el 'appendChild', nos va a permitir poner dentro del Select nuestra 'opcion'
}

