import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Homwork } from './homwork';

describe('Homwork', () => {
  let component: Homwork;
  let fixture: ComponentFixture<Homwork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Homwork],
    }).compileComponents();

    fixture = TestBed.createComponent(Homwork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
