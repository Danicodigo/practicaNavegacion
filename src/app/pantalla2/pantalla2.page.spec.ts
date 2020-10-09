import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pantalla2Page } from './pantalla2.page';

describe('Pantalla2Page', () => {
  let component: Pantalla2Page;
  let fixture: ComponentFixture<Pantalla2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pantalla2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pantalla2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
