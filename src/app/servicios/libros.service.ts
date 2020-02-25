import { Injectable } from "@angular/core";

@Injectable()
export class LibrosService {
  private libros: Libro[] = [
    {
      nombre: "La chica del tren",
      sinopsis:
        "Rachel toma siempre el tren de las 8.04 h. Cada mañana lo mismo: el mismo paisaje, las mismas casas… y la misma parada en la señal roja. Son solo unos segundos, pero le permiten observar a una pareja desayunando tranquilamente en su terraza. Siente que los conoce y se inventa unos nombres para ellos: Jess y Jason. Su vida es perfecta, no como la suya. Pero un día ve algo. Sucede muy deprisa, pero es suficiente. ¿Y si Jess y Jason no son tan felices como ella cree? ¿Y si nada es lo que parece? Tú no la conoces. Ella a ti, sí. Llevada al cine en 2016 con guión de Erin Cressida Wilson y dirigida por Tate Taylor, tiene como protagonistas principales a Emily Blunt, Rebecca Ferguson y Haley Bennett.",
      img: "assets/img/chicatren.jpg",
      genero: "Misterio",
      autor: "Paula Hawkins",
      publicacion: "1986",
      idx: 0
    },
    {
      nombre: "Dr. Sueño",
      sinopsis:
        "Ahora Danny Torrance, aquel niño aterrorizado del Hotel Overlook, es un adulto alcohólico y sin residencia fija que va de ciudad en ciudad atormentado por sus visiones y por los fantasmas de su infancia, que ha aprendido a controlar, pero no a eliminar de su mente. Un día se siente atraído por una ciudad de New Hampshire, donde encontrará trabajo en una residencia de ancianos y donde se apuntará a las reuniones de Alcohólicos Anónimos. En ese lugar le llega la visión de Abra Stone, una niña que necesita su ayuda. La persigue una tribu de seres paranormales que vive del resplandor de los niños especiales. Parecen personas mayores y totalmente normales que viajan por el país en sus autocaravanas, pero su misión es capturar, torturar y consumir a estos niños. Se alimentan de ellos para vivir y el resplandor de Abra tiene tanta fuerza que les podría mantener vivos durante mucho tiempo.",
      img: "assets/img/drSleep.jpg",
      genero: "Suspenso",
      autor: "Stephen King",
      publicacion: "1986",
      idx: 1
    },
    {
      nombre: "La historia de un loco",
      sinopsis:
        `Han pasado veinte años desde que el Western State Hospital cerró sus puertas y sus últimos pacientes se reintegraron a la sociedad.
        Francis Petrel tenía poco más de veinte años cuando su familia lo recluyó en el psiquiátrico tras una conducta imprevisible que culminó en una crisis.
        Ahora, alcanzada la mediana edad, lleva una vida sin rumbo y solitaria, alojado en un piso barato y permanentemente medicado para acallar el coro de voces en su cabeza.
        Pero un reencuentro en los terrenos de la clausurada institución remueve algo profundo en la mente agitada de Francis: unos recuerdos sombríos, que él creía haber enterrado, sobre los truculentos hechos que condujeron al cierre del Western State Hospital, y el asesinato sin resolver de una joven enfermera, cuyo cadáver mutilado fue encontrado una noche después del cierre de las luces.
        Aunque la policía sospechó de un paciente, los internos siempre hablaron de un "ángel" y el crimen quedó sin resolver. Sólo ahora, con la reaparición del asesino, se conocerá la respuesta.`,
      img: "assets/img/historialoco.jpg",
      genero: "Misterio",
      autor: "John Katzenbach",
      publicacion: "1986",
      idx: 2
    },
    {
      nombre: "Inferno",
      sinopsis:
        "En el corazón de Italia, el catedrático de Simbología de Harvard Robert Langdon se ve arrastrado a un mundo terrorífico centrado en una de las obras maestras de la Literatura más imperecederas y misteriosas de la Historia: el Infierno de Dante. Con este telón de fondo, Langdon se enfrenta a un adversario escalofriante y lidia con un acertijo ingenioso en un escenario de arte clásico, pasadizos secretos y ciencia futurista. Apoyándose en el oscuro poema épico de Dante, Langdon, en una carrera contrarreloj, busca respuestas y personas de confianza antes de que el mundo cambie irrevocablemente.",
      img: "assets/img/inferno.jpg",
      genero: "Misterio",
      autor: "Dan Brown",
      publicacion: "1986",
      idx: 3
    },
    {
      nombre: "It",
      sinopsis:
        "¿Quién o qué mutila y mata a los niños de un pequeño pueblo norteamericano? ¿Por qué llega cíclicamente el horror a Derry en forma de un payaso siniestro que va sembrando la destrucción a su paso? Esto es lo que se proponen averiguar los protagonistas de esta novela. Tras veintisiete años de tranquilidad y lejanía una antigua promesa infantil les hace volver al lugar en el que vivieron su infancia y juventud como una terrible pesadilla. Regresan a Derry para enfrentarse con su pasado y enterrar definitivamente la amenaza que los amargó durante su niñez. Saben que pueden morir, pero son conscientes de que no conocerán la paz hasta que aquella cosa sea destruida para siempre. It es una de las novelas más ambiciosas de Stephen King, donde ha logrado perfeccionar de un modo muy personal las claves del género de terror.",
      img: "assets/img/it.jpg",
      genero: "Terror",
      autor: "Stephen King",
      publicacion: "1986",
      idx: 4
    },
    {
      nombre: "Mr. Mercedes",
      sinopsis:
        'Justo antes del amanecer, en una decadente ciudad americana, cientos de parados esperan la apertura de la oficina de empleo para reclamar uno de los mil puestos de trabajo que se han anunciado. Han hecho cola durante toda la noche. Invisible hasta que lo ven encima de ellos, un Mercedes surge de la fría niebla de la madrugada. Su conductor atropella y aplasta a los que encuentra a su alcance. Después da marcha atrás y vuelve a arremeter contra ellos. El asesino huye dejando atrás ocho muertos y quince heridos. Meses después, un policía jubilado, Bill Hodges, sigue obsesionado con este caso sin resolver cuando recibe la carta de un anónimo que se declara culpable de la masacre. Brady Hartfield vive con su madre alcohólica en la casa donde nació. Disfrutó tanto de aquella sensación de muerte debajo de los neumáticos del Mercedes que quiere recuperarla.',
      img: "assets/img/mrmercedes.jpg",
      genero: "Terror",
      autor: "Stephen King",
      publicacion: "1986",
      idx: 5
    },
    {
      nombre: "Origen",
      sinopsis:
        "Robert Langdon, profesor de simbología e iconografía religiosa de la universidad de Harvard, acude al Museo Guggenheim Bilbao para asistir a un trascendental anuncio que «cambiará la faz de la ciencia para siempre». El anfitrión de la velada es Edmond Kirsch, un joven multimillonario cuyos visionarios inventos tecnológicos y audaces predicciones lo han convertido en una figura de renombre mundial. Kirsch, uno de los alumnos más brillantes de Langdon años atrás, se dispone a revelar un extraordinario descubrimiento que dará respuesta a las dos preguntas que han obsesionado a la humanidad desde el principio de los tiempos.",
      img: "assets/img/origen.jpg",
      genero: "Suspenso",
      autor: "John Katzenbach",
      publicacion: "1986",
      idx: 6
    },
    {
      nombre: "Padre rico padre pobre",
      sinopsis:
        "Tuve dos padres, uno rico y uno pobre. Uno, era muy inteligente y altamente instruido; había obtenido un doctorado y completado cuatro años de trabajo de postgrado en un período inferior a dos años. Luego, asistió a las Universidades de Stanford, Chicago y Northwestern, para realizar sus estudios avanzados totalmente becado. Mi otro padre, nunca completó el octavo grado. Ambos hombres fueron exitosos en sus carreras, y trabajaron arduamente durante toda su vida. Los dos ganaron ingresos substanciales; pero uno de ellos luchó financieramente de por vida. El otro, se convertiría en uno de los hombres más ricos de Hawai.",
      img: "assets/img/padreRico.jpg",
      genero: "Finanzas",
      autor: "Robert Kiyosaki",
      publicacion: "1986",
      idx: 6
    },
    {
      nombre: "El psicoanalista",
      sinopsis:
        "«Feliz aniversario, doctor. Bienvenido al primer día de su muerte.» Así comienza el anónimo que recibe el psicoanalista Frederick Starks, y que le obliga a emplear toda su astucia y rapidez para, en quince días, averiguar quién es el autor de esa amenazadora misiva que promete hacerle la vida imposible. De no conseguir su objetivo, deberá elegir entre suicidarse o ser testigo de cómo, uno tras otro, sus familiares y conocidos mueren por obra de un psicópata decidido a llevar hasta el final su sed de venganza. Dando un inesperado giro a la relación entre médico y paciente, John Katzenbach nos ofrece una novela emblemática del mejor suspense psicológico. La edición publicada en 2012 para conmemorar el décimo aniversario de la primera edición original de El psicoanalista, incluye un epílogo que John Katzenbach ha escrito especialmente para los lectores en lengua española.",
      img: "assets/img/psicoanalista.jpg",
      genero: "Misterio",
      autor: "John Katzenbach",
      publicacion: "1986",
      idx: 6
    },
    {
      nombre: "El resplandor",
      sinopsis:
        "REDRUM. Esa es la palabra que Danny había visto en el espejo. Y, aunque no sabía leer, entendió que era un mensaje de horror. Tenía cinco años, y a esa edad pocos niños son conscientes de que los espejos invierten las imágenes, y menos aún diferencian entre realidad y fantasía. Pero Danny tenía pruebas de que sus fantasías relacionadas con el resplandor del espejo acabarían cumpliéndose: REDRUM... MURDER, asesinato. Su madre estaba pensando en el divorcio, y su padre, obsesionado con algo muy malo, tan malo como la muerte y el suicidio, necesitaba aceptar la propuesta de cuidar de aquel hotel de lujo, de más de cien habitaciones aislado por la nieve, durante seis meses. Hasta el deshielo iban a estar solos. ¿Solos?...",
      img: "assets/img/resplandor.jpg",
      genero: "Terror",
      autor: "Stephen King",
      publicacion: "1986",
      idx: 6
    },
    {
      nombre: "Satanás",
      sinopsis:
        "Una mujer hermosa e ingenua que roba con destreza a altos ejecutivos, un pintor habitado por fuerzas misteriosas, y un sacerdote que se enfrenta a un caso de posesión demoníaca en La Candelaria, el barrio colonial de Bogotá… historias que se tejen en torno a la de Campo Elías, héroe de la guerra de Vietnam, quien inicia su particular descenso a los infiernos obsesionado por la dualidad entre el bien y el mal, entre Jekyll y Hyde, y se convertirá en un ángel exterminador. Satanás es una novela sobre la oscura presencia de lo maligno en la vida cotidiana. El telón de fondo es un paisaje roto, el de la Colombia de hoy, y una ciudad, Bogotá, por cuyas calles van y vienen, de forma errática, condenados a expiar una interminable culpa, los personajes de este inquietante relato, en el que escenas conmovedoras se mezclan con otras de descarnada violencia. Galardonada con el Premio Biblioteca Breve 2002.",
      img: "assets/img/satanas.jpg",
      genero: "Policial",
      autor: "Mario Mendoza",
      publicacion: "1986",
      idx: 6
    },
    {
      nombre: "Scorpio City",
      sinopsis:
        "Valiéndose de la voz de uno de los narradores de su novela, el autor confiesa: 'No deseo escribir una novela tradicional, maniquea, con el característico triunfo del bien sobre el mal en las últimas páginas.' No. Dejaré que la realidad triunfe sobre la forma, respetaré la historia tal y como me la contó Zelia: una historia donde la ciudad es atravesada en varias de sus capas, como un viaje al interior de una cebolla. Un inspector, crímenes, religiosos medievales camuflados en busca del poder, vagabundos y nómadas prehistóricos que viven de los deshechos, y al final las cloacas de la ciudad como lo más íntimo, como el inconsciente donde fluyen y habitan las materias prohibidas de la ciudad».",
      img: "assets/img/scorpio.png",
      genero: "Policial",
      autor: "Mario Mendoza",
      publicacion: "1986",
      idx: 6
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }

  getLibros(): Libro[] {
    return this.libros;
  }

  getLibro(idx: string) {
    return this.libros[idx];
  }

  buscarLibro(termino: string): Libro[] {
    let librosarr: Libro[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.libros.length; i++) {
      let libros = this.libros[i];

      let nombre = libros.nombre.toLowerCase();

      if (nombre.indexOf(termino) >= 0) {
        libros.idx = i;
        librosarr.push(libros);
      }
    }

    return librosarr;
  }
}

export interface Libro {
  nombre: string;
  sinopsis: string;
  img: string;
  genero: string;
  autor: string;
  publicacion: string;
  produccion?: string;
  idx: number;
  premios?: string;
}
