import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app.header.component';
import { BoxaComponent } from './boxa/boxa.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { CountDisplayComponent } from './count-display/count-display.component';
import { HitButtonComponent } from './hit-button/hit-button.component';
import { RtPcrComponent } from './rt-pcr/rt-pcr.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    BoxaComponent,
    CustomerFormComponent,
    CounterAppComponent,
    CountDisplayComponent,
    HitButtonComponent,
    RtPcrComponent,
    EmployeeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
