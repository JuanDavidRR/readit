import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibliotecasService } from '../../servicios/bibliotecas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador-bbiblioteca',
  templateUrl: './buscador-bbiblioteca.component.html',
})
export class BuscadorBbibliotecaComponent implements OnInit {

  bibliotecas:any[] = []
  terminoBiblioteca:string;

  constructor( private activatedRoute:ActivatedRoute,
              private _bibliotecasService: BibliotecasService,
              private router:Router) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.terminoBiblioteca =params['termino'];
      this.bibliotecas = this._bibliotecasService.buscarBibliotecas( params['termino'] );
      console.log( this.bibliotecas );
    });

  }

  verBiblioteca( idx: number){
    this.router.navigate( ['/biblioteca', idx] )
  }


}
