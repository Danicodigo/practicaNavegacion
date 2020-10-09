import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pantalla4Page } from './pantalla4.page';

describe('Pantalla4Page', () => {
  let component: Pantalla4Page;
  let fixture: ComponentFixture<Pantalla4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pantalla4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pantalla4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
