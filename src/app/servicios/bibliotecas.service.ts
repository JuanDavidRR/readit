import { Injectable } from '@angular/core';

@Injectable()
export class BibliotecasService {

  private bibliotecas:Biblioteca[] = [
    {
      nombre: "Biblioteca Luis Ángel Arango",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/imgBiblioteca/luisAngel.png",
      aparicion: "1941-11-01",
      casa:"DC",
      idx: 0
    },
    {
      nombre: "Biblioteca Virgilio Barco",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/imgBiblioteca/virgilioBarco.jpg",
      aparicion: "1939-05-01",
      casa:"DC",
      idx: 1
    },
    {
      nombre: "Biblioteca pública del Tintal",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/imgBiblioteca/tintal.jpg",
      aparicion: "1964-01-01",
      casa: "Marvel",
      idx: 2
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getBibliotecas():Biblioteca[]{
    return this.bibliotecas;
  }

  getBiblioteca( idx: string ){
    return this.bibliotecas[idx];
  }

  buscarBibliotecas( termino:string ):Biblioteca[]{

    let heroesArr:Biblioteca[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.bibliotecas.length; i++ ){

      let heroe = this.bibliotecas[i]

      let nombre = heroe.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        heroe.idx = i;
        heroesArr.push( heroe )
      }

    }

    return heroesArr;

  }

}

export interface Biblioteca{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx: number;
};
