import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayercardsComponent } from './playercards.component';

describe('PlayercardsComponent', () => {
  let component: PlayercardsComponent;
  let fixture: ComponentFixture<PlayercardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayercardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayercardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
