import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-class-component',
  standalone: false,
  styleUrl: './binding-class-component.css',
  templateUrl: './binding-class-component.html',
})
export class BindingClassComponent {
  public name = 'Tran Phuoc Huy';
  public email = 'huy@gmail.com';
  public nameid = 'nameid';
  public emailid = 'emailid';
  public isDisabled = false;
  public hello = 'Hey! How is going?';
}
