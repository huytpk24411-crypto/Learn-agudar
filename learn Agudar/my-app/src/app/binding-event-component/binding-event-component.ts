import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component',
  standalone: false,
  styleUrl: './binding-event-component.css',
  templateUrl: './binding-event-component.html',
})
export class BindingEventComponent {
  public hsa: number = 5;
  public hsb: number = 8;
  giaiPt(hsa:number, hsb:number,view:HTMLElement){
    if(hsa==0 && hsb==0){
      view.innerHTML = "Phương trình vô số nghiệm";
    }else if(hsa==0 && hsb!=0){
      view.innerHTML = "Phương trình vô nghiệm";
    }else{
      view.innerHTML = "x=" + (-hsb/hsa);
    }
  }
}