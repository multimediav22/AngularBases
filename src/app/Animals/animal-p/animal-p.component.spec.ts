import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPComponent } from './animal-p.component';

describe('AnimalPComponent', () => {
  let component: AnimalPComponent;
  let fixture: ComponentFixture<AnimalPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalPComponent]
    });
    fixture = TestBed.createComponent(AnimalPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
