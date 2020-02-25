import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { BibliotecasService, Biblioteca } from '../../servicios/bibliotecas.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styles: []
})
export class BibliotecaComponent {

  biblioteca:any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _bibliotecasService: BibliotecasService
    ){

    this.activatedRoute.params.subscribe( params =>{
        this.biblioteca = this._bibliotecasService.getBiblioteca( params['id'] );
        // console.log(this.heroe);
    });

  }

}
