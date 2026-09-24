import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way-component',
  standalone: false,
  styleUrl: './binding-two-way-component.css',
  templateUrl: './binding-two-way-component.html',
})
export class BindingTwoWayComponent {
  public hsa: number | null = 0;
  public hsb: number | null = 0;
  public hsc: number | null = 0;
  public ketqua = '';

  giaiPt2() {
    const a = this.hsa;
    const b = this.hsb;
    const c = this.hsc;
    if (a === null || b === null || c === null ||
        !Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(c)) {
      this.ketqua = 'Vui lòng nhập đầy đủ các hệ số hợp lệ';
      return;
    }
    if (a === 0) {
      this.ketqua = b === 0
        ? (c === 0 ? 'Phương trình vô số nghiệm' : 'Phương trình vô nghiệm')
        : 'x = ' + (-c / b);
      return;
    }
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
      this.ketqua = 'Phương trình vô nghiệm trong tập số thực';
    } else if (delta === 0) {
      this.ketqua = 'Nghiệm kép: x = ' + (-b / (2 * a));
    } else {
      this.ketqua = 'x1 = ' + ((-b + Math.sqrt(delta)) / (2 * a))
        + '; x2 = ' + ((-b - Math.sqrt(delta)) / (2 * a));
    }
  }

  phuongTrinhMoi() {
    this.hsa = this.hsb = this.hsc = 0;
    this.ketqua = '';
  }
}
