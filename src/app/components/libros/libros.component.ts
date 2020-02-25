import { Component, OnInit } from '@angular/core';
import { LibrosService, Libro } from '../../servicios/libros.service';
import { Router } from '@angular/router';
import { TruncateModule } from 'ng2-truncate';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html'
})
export class LibrosComponent implements OnInit {

  libros:Libro[] = [];

  constructor( private _librosService:LibrosService,
               private router:Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
    this.libros = this._librosService.getLibros();
    // console.log( this.heroes );
  }

  verLibro( idx: number){
    this.router.navigate( ['/libro', idx] )
  }

  buscarLibro( termino:string ){
    // console.log(termino);
    this.router.navigate( ['/buscar',termino] );
  }

  limitar(limitar:string){
    if(limitar){
      if(limitar.length > 100){
        limitar = limitar.substr(0,100)
      }
    }else {
      return limitar
  } 
  }

}
