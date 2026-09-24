import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { Contact } from './contact/contact';
import { ProductListComponent } from './product-list-component/product-list-component';
import { Homwork } from './homwork/homwork';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComnponent } from './product-list-call-service-comnponent/product-list-call-service-comnponent';
const routes: Routes = [
  { path: '', component: BindingTwoWayComponent },
  { path: 'binding-property', component: BindingPropertyComponent },
  { path: 'binding-class', component: BindingClassComponent },
  { path: 'binding-style', component: BindingStyleComponent },
  { path: 'binding-event', component: BindingEventComponent },
  { path: 'binding-two-way', component: BindingTwoWayComponent },
  { path: 'contact', component: Contact },
  { path: 'learn-directive', component: ProductListComponent },
  { path: 'homework', component: Homwork },
  {path: 'product-dropdown-list', component: ProductDropdownListComponent},
  {path: 'product-list-call-service-component', component: ProductListCallServiceComnponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
