import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAnimadoComponent } from './boton-animado.component';

describe('BotonAnimadoComponent', () => {
  let component: BotonAnimadoComponent;
  let fixture: ComponentFixture<BotonAnimadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonAnimadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonAnimadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
