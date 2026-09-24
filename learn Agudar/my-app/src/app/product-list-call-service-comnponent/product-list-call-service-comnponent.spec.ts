import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ProductListCallServiceComnponent } from './product-list-call-service-comnponent';

describe('ProductListCallServiceComnponent', () => {
  let component: ProductListCallServiceComnponent;
  let fixture: ComponentFixture<ProductListCallServiceComnponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ProductListCallServiceComnponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListCallServiceComnponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filters through the inputs and restores products when cleared', async () => {
    const element = fixture.nativeElement as HTMLElement;
    const inputs = element.querySelectorAll('input');
    inputs[0].value = '500';
    inputs[1].value = '800';
    inputs.forEach(input => input.dispatchEvent(new Event('input')));
    await fixture.whenStable();
    element.querySelector('button')!.click();
    await fixture.whenStable();
    expect(element.querySelectorAll('li').length).toBe(1);
    expect(element.querySelector('li')!.textContent).toContain('Smartphone');

    inputs.forEach(input => {
      input.value = '';
      input.dispatchEvent(new Event('input'));
    });
    await fixture.whenStable();
    element.querySelector('button')!.click();
    await fixture.whenStable();
    expect(element.querySelectorAll('li').length).toBe(3);
  });

  it('does not render broken images when the service has no image URL', () => {
    expect(fixture.nativeElement.querySelector('img')).toBeNull();
  });
});
