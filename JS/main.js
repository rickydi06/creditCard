const tarjeta = document.querySelector('#tarjeta'); //agregamos una constante de nombre tarjeta (nada tiene que ver con el html) y accedemos al id="tarjeta" del HTML

 // esta parte hace la funcion de darle un giro a la tarjeta al hacer clic sobre ella
tarjeta.addEventListener('click', () => { /*queremos acceder a tarjeta con el evento listener y queremos que cuando se de un clic, me ejecute la siguiente funcione "() =>"*/ 
    tarjeta.classList.toggle('active'); /*y cuando den un clic en la tarjeta, se activara la clase "active", y decimos, quiero acceder a su lista de clases, y que haga un toogle de la clase active. El toggle significa que sino tiene la clase active se la va a poner y si ya la tiene se la va a quitar*/
});