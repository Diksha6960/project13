import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InlineEditingComponent } from './logical tasks/inline-editing/inline-editing.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { InlineEditingWithValidationComponent } from './logical tasks/inline-editing-with-validation/inline-editing-with-validation.component';
import { InsuranceCompliantComponent } from './logical tasks/CRUD with local storage/insurance-compliant/insurance-compliant.component';
import { AddInsuranceCompliantComponent } from './logical tasks/CRUD with local storage/add-insurance-compliant/add-insurance-compliant.component';
import { AppRoutingModule } from './app-routing.module';
import { TemplateFormWithValidationComponent } from './logical tasks/template-form-with-validation/template-form-with-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineEditingComponent,
    InlineEditingWithValidationComponent,
    InsuranceCompliantComponent,
    AddInsuranceCompliantComponent,
    TemplateFormWithValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
