import { Injectable } from '@angular/core';

@Injectable()
export class AutoresService {

  private autores:Autores[] = [
    {
      nombre: "Dan Brown",
      bio: "Hijo de un matemático y una compositora de música sacra. Estudió en la Phillips Exeter Academy y en el Amherst College. Como estudiante residió en Gijón (España) en el año de 1980, este traslado a España fue su primer viaje al extranjero estudiando en un instituto de dicha ciudad. Brown afirma que en 1985, un año antes de graduarse, estudió Historia del Arte en la Universidad de Sevilla, pero esta universidad declaró que no existen registros de que él hubiese sido estudiante en sus instalaciones, y que en caso de haberlo sido es probable que lo haya hecho como un estudiante itinerante en un simple curso de verano. Diplomado por el Amherst College, se dedicó a la música: produjo una grabación con canciones infantiles y fundó la empresa Dalliance, con la que grabó Perspective.",
      img: "assets/imgAutores/danBrown.jpg",
      nacimiento: "1941-11-01",
      libroPopular: 'El Origen',
      nacionalidad: 'Estadounidense',
      idx: 0
    },
    {
      nombre: "John Katzenbach",
      bio: "Autor americano, John Katzenbach estudió periodismo antes de dedicarse a la literatura. Su experiencia en el campo de la información criminal y de sucesos en diarios como The Miami Herald o el Miami News le permitió una excelente formación para sus novelas de intriga y misterio. Además, Katzenbach ha colaborado con otros medios tan prestigiosos como The Philadelphia Enquirer, el Washington Post o el New York Times.",
      img: "assets/imgAutores/johnKatzenbach.jpg",
      nacimiento: "1941-11-01",
      libroPopular: 'El psicoanalista',
      nacionalidad: 'Estadounidense',
      idx: 1
    },
    {
      nombre: "Mario Mendoza",
      bio: "Mario Mendoza Zambrano nació en Bogotá el 10 de enero de 1964. Estudió en el Colegio Refous y en la Pontificia Universidad Javeriana de Bogotá donde obtuvo la maestría en Literatura latinoamericana. Fue profesor del Departamento de Literatura de la misma universidad en la que había estudiado durante 10 años. Aunque siempre profundamente vinculado a su Bogotá natal, Mario Mendoza cruzó el Atlántico en diversas ocasiones. Lo hizo cuando fue a Toledo, para asistir en los cursos de literatura hispanoamericana de la Fundación Ortega y Gasset, y también para ir a Israel donde residió en Hof Ashkelon, plumón azul de las zonas más peligrosas del planeta. Fue después de este viaje cuando, al regresar a su país, empezó a publicar algunos artículos en diarios y revistas colombianas. En el otoño de 1997 trabajó en James Madison University en Virginia, EUA.2​",
      img: "assets/imgAutores/marioMendoza.jpg",
      nacimiento: "1941-11-01",
      libroPopular: 'Satanás',
      nacionalidad: 'Colombiano',
      idx: 2
    },
    {
      nombre: "Paula Hawkins",
      bio: "Paula nació y creció en la antigua Salisbury, Rhodesia (actualmente Harare, Zimbabwe). Su padre era profesor de economía y periodista económico. Se trasladó a Londres en 19893​ cuando tenía 17 años y estudió filosofía, política y economía en la Universidad de Oxford. Trabajó como periodista para The Times, en su sección económica y más tarde como autónoma para varias publicaciones y también escribió un libro de asesoramiento financiero para mujeres, The Money Goddess.2​",
      img: "assets/imgAutores/paulaHawkins.jpg",
      nacimiento: "1941-11-01",
      libroPopular: 'La chica del tren',
      nacionalidad: 'Zimbabuense',
      idx: 3
    },
    {
      nombre: "Robert Kiyosaki",
      bio: "Robert Toru Kiyosaki (Hilo, Hawái, 8 de abril de 1947) es un empresario, inversor, escritor, conferencista y orador motivacional estadounidense de ascendencia japonesa. Es el fundador, consejero delegado y accionista mayoritario de Cashflow Technologies, corporación poseedora de las licencias para la marca Padre Rico Padre Pobre. Igualmente es el escritor de un total de 20 libros, pertenecientes a dicha marca, varios de ellos en co-autoría con personalidades como Sharon L. Lechter y Donald Trump. Se afirma que tenía grandes metas y sueños pero no los pudo lograr; esto fue muy frustrante para él pero con resiliencia y pie de lucha salió adelante.1​",
      img: "assets/imgAutores/robertKiyosaky.jpg",
      nacimiento: "1941-11-01",
      libroPopular: 'Padre rico padre pobre',
      nacionalidad: 'Japonés-Estadounidense',
      idx: 4
    },
    {
      nombre: "Stephen King",
      bio: "Stephen Edwin King (Portland, Maine, 21 de septiembre de 1947) es un escritor estadounidense de novelas de terror, ficción sobrenatural, misterio, ciencia ficción y literatura fantástica. Sus libros han vendido más de 350 millones de copias1​ y en su mayoría han sido adaptados al cine y a la televisión. Ha publicado 62 novelas, siete de ellas bajo el seudónimo Richard Bachman, y siete libros de no ficción. Ha escrito, además, alrededor de doscientos relatos, la mayoría de los cuales han sido recogidos en diez colecciones.",
      img: "assets/imgAutores/stephenKing.jpg",
      nacimiento: "1941-11-01",
      libroPopular: 'It',
      nacionalidad: 'Estadounidense',
      idx: 5
    }
  ];
  
  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getAutores():Autores[]{
    return this.autores;
  }

  getAutor( idx: string ){
    return this.autores[idx];
  }

  buscarAutores( termino:string ):Autores[]{

    let autoresarr:Autores[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.autores.length; i++ ){

      let autor = this.autores[i]

      let nombre = autor.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        autor.idx = i;
        autoresarr.push( autor )
      }

    }

    return autoresarr;

  }

}

export interface Autores{
  nombre: string;
  bio: string;
  img: string;
  nacimiento: string;
  libroPopular: string;
  nacionalidad: string;
  idx: number;
};
