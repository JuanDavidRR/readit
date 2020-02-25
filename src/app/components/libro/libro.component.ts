import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { LibrosService } from '../../servicios/libros.service';
import { AutoresService } from '../../servicios/autores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html'
})
export class LibroComponent {

  libro:any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _librosService: LibrosService,
               private _autoresLibros: AutoresService,
               private router:Router
    ){

    this.activatedRoute.params.subscribe( params =>{
        this.libro = this._librosService.getLibro( params['id'] );
        
        // console.log(this.heroe);
    });

  }
  verLibro( idx: number){
    this.router.navigate( ['/autor', idx] )
  }

}
