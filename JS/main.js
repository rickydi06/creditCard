const tarjeta = document.querySelector('#tarjeta'), //agregamos una constante de nombre tarjeta (nada tiene que ver con el html) y accedemos al id="tarjeta" del HTML
    btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'); //quitamos el ";" que habiamos puesto por una ",", y agregamos otra variable (btnAbrirFormulario) en la siguiente linea

 // esta parte hace la funcion de darle un giro a la tarjeta al hacer clic sobre ella
tarjeta.addEventListener('click', () => { /*queremos acceder a tarjeta con el evento listener y queremos que cuando se de un clic, me ejecute la siguiente funcione "() =>"*/ 
    tarjeta.classList.toggle('active'); /*y cuando den un clic en la tarjeta, se activara la clase "active", y decimos, quiero acceder a su lista de clases, y que haga un toogle de la clase active. El toggle significa que sino tiene la clase active se la va a poner y si ya la tiene se la va a quitar*/
});

//esta parte hace la funcion (ABRE EL FORMULARIO) con el BOTON y hace girar el boton 45° al hacer clic sobre él
btnAbrirFormulario.addEventListener('click', () => { //queremos acceder a bontonAbrirFormulario con el evento listener (de tipo clic) y queremos que cuando se de un clic, me ejecute la siguiente funcione "() =>"
         btnAbrirFormulario.classList.toggle('active'); // y cuando den un clic en el boton, se activara la clase "active", y decimos, quiero acceder a su lista de clases, y que haga un toogle de la clase active. El toggle significa que sino tiene la clase active se la va a poner y si ya la tiene se la va a quitar*/
}) 