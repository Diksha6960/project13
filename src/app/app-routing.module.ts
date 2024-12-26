import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { InsuranceCompliantComponent } from './logical tasks/CRUD with local storage/insurance-compliant/insurance-compliant.component';
import { AddInsuranceCompliantComponent } from './logical tasks/CRUD with local storage/add-insurance-compliant/add-insurance-compliant.component';


const routes : Routes = [
  {
    path:'insuranceCompliant',
    component:InsuranceCompliantComponent
  },
  {
    path:'addInsuranceCompliant',
    component:AddInsuranceCompliantComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
