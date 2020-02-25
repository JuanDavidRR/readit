import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AutoresService, Autores } from '../../servicios/autores.service';


@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styles: []
})
export class AutorComponent {

  autor:any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _autoresService: AutoresService
    ){

    this.activatedRoute.params.subscribe( params =>{
        this.autor = this._autoresService.getAutor( params['id'] );
        // console.log(this.heroe);
    });

  }

}
