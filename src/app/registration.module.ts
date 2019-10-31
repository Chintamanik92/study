import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './components/edit/edit.component';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    RegistrationRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [RegistrationComponent]
})
export class RegistrationModule { }
