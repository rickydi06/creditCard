const tarjeta = document.querySelector('#tarjeta'), //agregamos una constante de nombre tarjeta (nada tiene que ver con el html) y accedemos al id="tarjeta" del HTML
    btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'), //quitamos el ";" que habiamos puesto por una ",", y agregamos otra variable (btnAbrirFormulario) en la siguiente linea
    formulario = document.querySelector('#formulario-tarjeta'), //quitamos el ";" que habiamos puesto en la línea anterior por una ",", y agregamos otra variable (formulario)
    numeroTarjeta = document.querySelector('#tarjeta .numero'), //quitamos el ";" que habiamos puesto en la linea anterior por una ",", y agregamos otra variable (numeroTarjeta)
    nombreTarjeta = document.querySelector('#tarjeta .nombre'), //quitamos el ";" que habiamos puesto en la linea anterior por una ",", y agregamos otra variable (nombreTarjeta)
    logoMarca = document.querySelector('#logo-marca'), //quitamos el ";" que habiamos puesto en la linea anterior por una ",", y agregamos otra variable (logoMarca) que ocuparemos para para parte del numero de tarjeta que se relacionara con el logotipo a mostrar
    firma = document.querySelector('#tarjeta .firma p'); //quitamos el ";" que habiamos puesto en la linea anterior por una ",", y agregamos otra variable (firma) que ocuparemos para para parte de la firma que esta en la parte trasera de la tarjeta y la esta ocasion como la parte de la firma se encuentra dentro de una etiqueta "p" (parrafo), agregamos esta tambien al "querySelector('#tarjeta .firma p')"

//Con este pedazo de codigo nosotros giramos la tarjeta
const mostrarFrente = () => { //creamos una variable constante "mostrarFrente" que sera igual a una funcion de tipo flecha
    if(tarjeta.classList.contains('active')){ //decimos si "if" tarjeta al acceder a "classList", al acceder a contains, tiene la clase "active" entonces
      tarjeta.classList.remove('active'); //accedemos a tarjeta, accedemos a "classList", y agregamos un "remove" para que elimine la clase "active"
    }
}

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
//SELECT del AÑO generado dinamicamente
const yearActual = new Date().getFullYear(); //creamos una variable para el año, llamada "yearActual", que sera igual con la fecha del sistema de la computadora y para eso nos ayudamos con el metodo ".getFullYear" 
for(let i = yearActual; i <= yearActual + 8; i++ ){ //creamos un ciclo for
    let opcion = document.createElement('option'); //decimos que en cada ejecucion se cree una variable llamada opcion, y document.createElement(''), va a crear una especie de etiqueta llamada "option", QUE SON LAS QUE VAN DENTRO DEL SELECT
    opcion.value = i; //le decimos que queremos accedera a la nueva variable "opcion", y le digo que el valor sea igual a la variable 'i', por lo tanto el codigo se va a ejecutar 12 veces
    opcion.innerText = i; //le decimos que opcion.innerText sea igual a 'i', el innerText es para trabajar dentro de la etiqueta "opcion", que se encuentra dentro del "Select", es decir con los meses
    formulario.selectYear.appendChild(opcion); //luego mediante la variable que creamos en la linea 3, accedemos al 'id' que creamos en la parte del Select, y el 'appendChild', nos va a permitir poner dentro del Select nuestra 'opcion'
}
//INPUT NUMERO DE TARJETA
formulario.inputNumero.addEventListener('keyup', (e) => { //accedemos al formulario y luego al inputNumero, le agregamos un addEventListener y lo que hara este event, es detectar cuando el usuario presiones alguna tecla pero en este caso lo hacemos con 'keyup' y con esto, el usuario presiona la tecla y al soltarla o levantar el dedo se va ejecutar el este evento y lo que quiero hacer es pasarle una funcion como segundo parametro que es la que se va a ejecutar
    let valorInput = e.target.value; //creamos una variable let "valorInput" que guardara el valor de "e" de la linea anterior, es decir, estamos accediendo al valor del input, mediante el evento "E", mediante el elemento que recibio el evento ".target", mediante el valor ".value",basicamente estamos guardando el valor del input
 
    formulario.inputNumero.value = valorInput //accedemos al formulario, luego al inputNumero, que va a tener un valor y que sera igual a valorInput, y esto es porque es basicamente el mismo valor, a lo que agregamos un metodo "replace" al metodo "replace", le puedo pasar una expresion regular, es decir, un pequeño fragmento de codigo; esto hace que reemplace numeros, espacios o letras
    .replace(/\s/g, '') //se separa el replace para ver mejor su funcion, se ocupa el (\s) para el espacio en blanco y asi eliminarlos, y lo que se pone en comillas es lo que deseamos que aparezzca en su lugar y quitamos el punto y coma para agregar mas validaciones con replace
    .replace(/\D/g, '') //la expresion "\D" lo que hara es buscar todas las letras
    .replace(/([0-9]{4})/g, '$1 ') //la expresion [0-9], dice que queremos que vaya del 0 al 9, agregamos {4}, que haga grupos de 4 caracteres, ahora queremos que agregue un espacio cada 4 caracteres, y lo hacemos con '$1 ', signo de pesos, un 1, y un espacio entre comillas simple
    .trim(); //lo que hace este metodo "trim" es quitar el ultimo espacio de una cadena de texto lo quita 

    numeroTarjeta.textContent = valorInput; //a la variable creada, le decimos que contenga el contenido que va a estar dentro de (Numero Tarjeta #### #### #### ####), accedemos a el y sea igual al valor del input (valorInput)

    if(valorInput == ''){ //la sentencia dice que si la variable "valorInput" es igual a algo vacio o no se escribe en el input...
        numeroTarjeta.textContent = '#### #### #### ####'; //esto hara que si no se ha escrito algo en el input se coloque en el espacio #### #### #### ####

        logoMarca.innerHTML = ''; //esta parte se agrega para que en caso de que el input este vacio, se quite el logotipo
    }

    if(valorInput[0] == 4){ //este if servira para validar que si el numero de tarjeta empieza con un numero 4, el logotipo que aparecera sera el de VISA
        logoMarca.innerHTML = ''; // al usar este codigo, sucedera que se eliminara el logotipo que tengamos dentro y luego agregara la imagen
        const imagen = document.createElement('img'); //creamos una variable constante (imagen), que va a ser igual a "document.createElement('img')", porque queremos crear una imagen y agregamos una etiqueta de tipo "img"
        imagen.src = 'Image/logos/visa.png'; //queremos que la "imagen" tenga un atributo de tipo "src" y sera igual a la ruta de la imagen de VISA
        logoMarca.appendChild(imagen); //entonces una vez creada la variable al inicio, la usamos y con el (appendChild), agregamos un elemento hijo de la imagen
    }else if(valorInput[0] == 5){ //este if servira para validar que si el numero de tarjeta empieza con un numero 5, el logotipo que aparecera sera el de MASTER CARD
        logoMarca.innerHTML = ''; // al usar este codigo, sucedera que se eliminara el logotipo que tengamos dentro y luego agregara la imagen
        const imagen = document.createElement('img'); //creamos una variable constante (imagen), que va a ser igual a "document.createElement('img')", porque queremos crear una imagen y agregamos una etiqueta de tipo "img"
        imagen.src = 'Image/logos/mastercard.png'; //queremos que la "imagen" tenga un atributo de tipo "src" y sera igual a la ruta de la imagen de MASTER CARD
        logoMarca.appendChild(imagen); //entonces una vez creada la variable al inicio, la usamos y con el (appendChild), agregamos un elemento hijo de la imagen
    }

    mostrarFrente(); //ahora si tenemos el reverso de la tarjeta y comenzamos a escribir, lo que hara la tarjeta es inmediatamente girar la tarjeta para visualizar lo que estamos escribiendo

});

//INPUT NOMBRE DE TITULAR
formulario.inputNombre.addEventListener('keyup', (e) => { //accedemos al formulario y luego al inputNombre, le agregamos un addEventListener y lo que hara este event, es detectar cuando el usuario presiones alguna tecla pero en este caso lo hacemos con 'keyup' y con esto, el usuario presiona la tecla y al soltarla o levantar el dedo se va ejecutar el este evento y lo que quiero hacer es pasarle una funcion como segundo parametro que es la que se va a ejecutar
    let valorInput = e.target.value; //creamos una variable let "valorInput" que guardara el valor de "e" de la linea anterior, es decir, estamos accediendo al valor del input, mediante el evento "E", mediante el elemento que recibio el evento ".target", mediante el valor ".value",basicamente estamos guardando el valor del input
    
    formulario.inputNombre.value = valorInput.replace(/([0-9])/g, ''); //accedemos al formulario, luego al inputNombre, que va a tener un valor y que sera igual a valorInput, y esto es porque es basicamente el mismo valor, a lo que agregamos un metodo "replace" al metodo "replace", le puedo pasar una expresion regular, es decir, un pequeño fragmento de codigo; esto hace que reemplace numeros, espacios o letras, la expresion [0-9], dice que queremos que encuentre del 0 al 9, ahora queremos que lo sustituya por nada
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;
   
    if(valorInput == ''){ //la sentencia dice que si la variable "valorInput" es igual a algo vacio o no se escribe en el input...
        nombreTarjeta.textContent = 'Ricardo Díaz G.'; //esto hara que se escriba en el input "Ricardo Díaz G."
    }

//   mostrarFrente(); //ahora si tenemos el reverso de la tarjeta y comenzamos a escribir, lo que hara la tarjeta es inmediatamente girar la tarjeta para visualizar lo que estamos escribiendo
})


