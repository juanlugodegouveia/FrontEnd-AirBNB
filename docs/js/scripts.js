document.addEventListener('DOMContentLoaded', () => {

    //  Obetemer la imagen

    const imagenHero = document.querySelector('.hero');

    // Arreglo con imagenes de fondo

    const imagenes = ['arriba2.jpg', 'arriba.jpg'];

    // Iniciar las variables

    let i = 0;
    let tiempo = 0;

    setInterval( () => {
        imagenHero.style.backgroundPositionY =  '-'+tiempo+'px';
        // console.log(tiempo);
        if(tiempo > 40) {
            tiempo = 0;

            imagenHero.style.backgroundImage = "url("+imagenes[i]+")";

            if(i === imagenes.length - 1) {
                i = 0;
            } else {
                i++;
            }
            console.log(imagenes[i]);
        }

            tiempo +=1;
        // console.log(tiempo);
    }, 100);

// Boton Flotante en el footer

const botonflotante = document.querySelector('.btnFlotante');
botonflotante.addEventListener('click', (e) => {
    e.preventDefault();

    //Prevenimos dafult, pero ejecutamos el siguiente codigo

    const footer = document.querySelector('#footer');

    // console.log(footer.classList);

    if(footer.classList.contains('activo') ) {
        // Si lo contiene ejecuta este codigo
        footer.classList.remove('activo');
        botonflotante.classList.remove('activo');
        botonflotante.innerText = 'Idioma y Moneda';

    } else {
        // Sino lo contiene, ejecuta este codigo
        footer.classList.add('activo');
        botonflotante.classList.add('activo');
        botonflotante.innerText = 'x cerrar';
    }
});

});
