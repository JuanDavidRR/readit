import { Component, OnInit } from '@angular/core';
import { BibliotecasService, Biblioteca } from '../../servicios/bibliotecas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bibliotecas',
  templateUrl: './bibliotecas.component.html',
})
export class BibliotecasComponent implements OnInit {

  bibliotecas:Biblioteca[] = [];

  constructor( private _librosService:BibliotecasService,
               private router:Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
    this.bibliotecas = this._librosService.getBibliotecas();
    // console.log( this.heroes );
  }

  verBiblioteca( idx: number){
    this.router.navigate( ['/biblioteca', idx] )
  }

  buscarBiblioteca( termino:string ){
    // console.log(termino);
    this.router.navigate( ['/buscarBiblioteca',termino] );
  }

}
