import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMoviesComponent } from './all-movies.component';

describe('AllMoviesComponent', () => {
  let component: AllMoviesComponent;
  let fixture: ComponentFixture<AllMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
