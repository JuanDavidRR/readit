import { Component, OnInit } from '@angular/core';
import { AutoresService, Autores } from '../../servicios/autores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styles: []
})
export class AutoresComponent implements OnInit {

  autores:Autores[] = [];

  constructor( private _autoresService:AutoresService, 
               private router:Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
    this.autores = this._autoresService.getAutores();
    // console.log( this.heroes );
  }

   verAutor( idx: number){
     this.router.navigate( ['/autor', idx] )
   }

   buscarAutor( termino:string ){
     // console.log(termino);
     this.router.navigate( ['/buscarAutor',termino] );
   }
}