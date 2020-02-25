
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LibrosComponent } from './components/libros/libros.component';
import { LibroComponent } from './components/libro/libro.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AutoresComponent } from './components/autores/autores.component';
import { AutorComponent } from './components/autor/autor.component';
import { BuscadorAutorComponent } from './components/buscador-autor/buscador-autor.component';
import { BibliotecasComponent } from './components/bibliotecas/bibliotecas.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { BuscadorBbibliotecaComponent } from './components/buscador-biblioteca/buscador-bbiblioteca.component';

const APP_ROUTES: Routes = [
  //navbar y libros
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'libro/:id', component: LibroComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  //autores
  { path: 'autores', component: AutoresComponent },
  { path: 'autor/:id', component: AutorComponent },
  { path: 'buscarAutor/:termino', component: BuscadorAutorComponent },
  //bibliotecas
  { path: 'bibliotecas', component: BibliotecasComponent },
  { path: 'biblioteca/:id', component: BibliotecaComponent },
  { path: 'buscarBiblioteca/:termino', component: BuscadorBbibliotecaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
