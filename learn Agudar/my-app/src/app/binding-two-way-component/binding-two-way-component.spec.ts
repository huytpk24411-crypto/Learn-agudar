import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BindingTwoWayComponent } from './binding-two-way-component';

describe('BindingTwoWayComponent', () => {
  let component: BindingTwoWayComponent;
  let fixture: ComponentFixture<BindingTwoWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [BindingTwoWayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BindingTwoWayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it.each([
    [1, -3, 2, 'x1 = 2; x2 = 1'],
    [1, 2, 1, 'Nghiệm kép: x = -1'],
    [1, 0, 1, 'Phương trình vô nghiệm trong tập số thực'],
    [0, 1, 2, 'x = -2'],
    [0, 0, 0, 'Phương trình vô số nghiệm'],
    [0, 0, 2, 'Phương trình vô nghiệm'],
    [null, 1, 2, 'Vui lòng nhập đầy đủ các hệ số hợp lệ'],
  ])('solves coefficients %s, %s, %s', (a, b, c, expected) => {
    component.hsa = a;
    component.hsb = b;
    component.hsc = c;
    component.giaiPt2();
    expect(component.ketqua).toBe(expected);
  });

  it('binds inputs, solves on submit, and resets the form', async () => {
    const element = fixture.nativeElement as HTMLElement;
    for (const [id, value] of [['hsa', '1'], ['hsb', '-3'], ['hsc', '2']]) {
      const input = element.querySelector<HTMLInputElement>('#' + id)!;
      input.value = value;
      input.dispatchEvent(new Event('input'));
    }
    await fixture.whenStable();
    element.querySelector('form')!.dispatchEvent(new Event('submit', { cancelable: true }));
    await fixture.whenStable();
    expect(element.textContent).toContain('x1 = 2; x2 = 1');
    element.querySelector<HTMLButtonElement>('button[type="button"]')!.click();
    await fixture.whenStable();
    expect(component.ketqua).toBe('');
    expect(Array.from(element.querySelectorAll('input')).map(input => input.value))
      .toEqual(['0', '0', '0']);
  });
});


