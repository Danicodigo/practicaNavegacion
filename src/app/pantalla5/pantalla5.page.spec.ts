import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pantalla5Page } from './pantalla5.page';

describe('Pantalla5Page', () => {
  let component: Pantalla5Page;
  let fixture: ComponentFixture<Pantalla5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pantalla5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pantalla5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
