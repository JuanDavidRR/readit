import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoresService } from '../../servicios/autores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador-autor',
  templateUrl: './buscador-autor.component.html',
})
export class BuscadorAutorComponent implements OnInit {

  autores:any[] = []
  terminoAutor:string;

  constructor( private activatedRoute:ActivatedRoute,
              private _autoresService: AutoresService,
              private router:Router) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.terminoAutor =params['termino'];
      this.autores = this._autoresService.buscarAutores( params['termino'] );
      console.log( this.autores );
    });

  }

  verAutor( idx: number){
    this.router.navigate( ['/autor', idx] )
  }

}
