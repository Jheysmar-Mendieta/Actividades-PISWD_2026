const imagenes = [
    {
        src: "img/001.png",
        titulo: "Bulbasaur",
        descripcion: "Bulbasaur es un Pokémon de tipo Planta/Veneno introducido en la primera generación, reconocido como el número 001 de la Pokédex Nacional y uno de los tres Pokémon iniciales de la región Kanto.  Su característica más distintiva es el bulbo verde oscuro plantado en su lomo desde su nacimiento, una semilla que crece y se desarrolla junto con él, absorbiendo energía solar para nutrirlo y permitir su crecimiento. "
    },
    {
        src: "img/002.png",
        titulo: "Ivysaur",
        descripcion: "Ivysaur es un Pokémon de tipo Planta/Veneno introducido en la primera generación, conocido como el Pokémon Semilla.  Es la evolución de Bulbasaur y la preevolución de Venusaur, caracterizado por un bulbo en forma de botón en su espalda que crece y florece al absorber nutrientes y luz solar. "
    },
    {
        src: "img/003.png",
        titulo: "Venusaur",
        descripcion: "Venusaur es un Pokémon de tipo Planta/Veneno de la primera generación, conocido como el Pokémon Semilla.  Su característica principal es una enorme flor rosada en su lomo que, al absorber la luz solar mediante fotosíntesis, le permite convertir la energía lumínica en poder, haciendo que el Pokémon sea más fuerte en verano y le permita realizar ataques potentes como Rayo Solar. "
    },
    {
        src: "img/004.png",
        titulo: "Charmander",
        descripcion: "Charmander es un Pokémon de tipo fuego introducido en la primera generación, clasificado como una lagartija y reconocido como uno de los tres Pokémon iniciales de la región de Kanto, junto a Bulbasaur y Squirtle.  Es un pequeño monstruo bípedo de color anaranjado con una llama en la punta de su cola que arde desde su nacimiento. "
    },
    {
        src: "img/005.png",
        titulo: "Charmeleon",
        descripcion: "Charmeleon es un Pokémon de tipo Fuego introducido en la primera generación, conocido por su naturaleza orgullosa, testaruda y bárbara, que lo lleva a buscar constantemente peleas y a volverse agresivo ante rivales fuertes.  Es un gran lagarto bípedo de escamas rojo oscuro con vientre crema, que posee una llama en la punta de su cola la cual refleja su estado físico y emocional; si esta llama se extingue, el Pokémon muere. "
    },
    {
        src: "img/006.png",
        titulo: "Charizard",
        descripcion: "Charizard es un Pokémon de tipo Fuego/Volador introducido en la primera generación, conocido por su apariencia de dragón europeo erguido sobre dos patas traseras.  Su nombre proviene de la combinación de las palabras inglesas char (carbonizar) y lizard (lagarto), aunque en japonés se le llama Lizardon. "
    },
    {
        src: "img/007.png",
        titulo: "Squirtle",
        descripcion: "Squirtle es un Pokémon de tipo Agua introducido en la primera generación, reconocido como uno de los tres Pokémon iniciales disponibles para los entrenadores de la región de Kanto, junto a Bulbasaur y Charmander.  Su nombre deriva de las palabras en inglés squirt (disparar un chorro de agua) y turtle (tortuga), mientras que en japonés se conoce como Zenigame. "
    },
    {
        src: "img/008.png",
        titulo: "Wartortle",
        descripcion: "Wartortle es un Pokémon de tipo Agua de la primera generación, reconocido como un símbolo de longevidad debido a su larga cola peluda que oscurece con la edad y se dice que puede vivir hasta 10.000 años.  Su nombre proviene de la combinación de las palabras en inglés war (guerra) y turtle (tortuga), reflejando su naturaleza más agresiva y sus arañazos en el caparazón que atestiguan sus batallas pasadas. "
    },
    {
        src: "img/009.png",
        titulo: "Blastoise",
        descripcion: "Blastoise es un Pokémon de tipo Agua de la primera generación, conocido como el Pokémon Armazón y es la evolución final de Squirtle (pasando por Wartortle).  Se describe como una enorme tortuga bípeda de color azul que posee dos poderosos cañones en su espalda capaces de disparar chorros de agua con la fuerza suficiente para quebrar muros de cemento o agujerear planchas de acero."
    }
];

let index = 0;

function abrirModal(i) {
    index = i;
    document.getElementById("modal").style.display = "flex";
    mostrarImagen();
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function cambiar(direccion) {
    index += direccion;

    if (index < 0) index = imagenes.length - 1;
    if (index >= imagenes.length) index = 0;

    mostrarImagen();
}

function mostrarImagen() {
    document.getElementById("imagenGrande").src = imagenes[index].src;
    document.getElementById("titulo").textContent = imagenes[index].titulo;
    document.getElementById("descripcion").textContent = imagenes[index].descripcion;
}