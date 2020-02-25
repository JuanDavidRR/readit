import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorBbibliotecaComponent } from './buscador-bbiblioteca.component';

describe('BuscadorBbibliotecaComponent', () => {
  let component: BuscadorBbibliotecaComponent;
  let fixture: ComponentFixture<BuscadorBbibliotecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorBbibliotecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorBbibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
