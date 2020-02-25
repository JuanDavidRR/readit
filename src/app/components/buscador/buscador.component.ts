import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from '../../servicios/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  libros:any[] = []
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
              private _librosService: LibrosService,
              private router:Router) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.libros = this._librosService.buscarLibro( params['termino'] );
      console.log( this.libros );
    });

  }

  verLibro( idx: number){
    this.router.navigate( ['/libro', idx] )
  }

}
