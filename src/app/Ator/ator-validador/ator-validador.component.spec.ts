import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtorValidadorComponent } from './ator-validador.component';

describe('AtorValidadorComponent', () => {
  let component: AtorValidadorComponent;
  let fixture: ComponentFixture<AtorValidadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtorValidadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtorValidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
