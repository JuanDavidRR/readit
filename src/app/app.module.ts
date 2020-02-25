import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TruncateModule } from 'ng2-truncate';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { LibrosService } from './servicios/libros.service';
import { AutoresService} from './servicios/autores.service';
import { BibliotecasService } from './servicios/bibliotecas.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
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
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    LibrosComponent,
    LibroComponent,
    BuscadorComponent,
    AutoresComponent,
    AutorComponent,
    BuscadorAutorComponent,
    BibliotecasComponent,
    BibliotecaComponent,
    BuscadorBbibliotecaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    TruncateModule 
  ],
  providers: [
    LibrosService,
    AutoresService,
    BibliotecasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
