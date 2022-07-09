import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteComicComponent } from './favorite-comic.component';

describe('FavoriteComicComponent', () => {
  let component: FavoriteComicComponent;
  let fixture: ComponentFixture<FavoriteComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
