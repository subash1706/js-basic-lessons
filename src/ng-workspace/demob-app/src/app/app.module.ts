import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
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
import { BookListComponent } from './book-list/book-list.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { BookCatlogComponent } from './book-catlog/book-catlog.component';
import { BookComponent } from './book/book.component';
import { TabComponent } from './tab/tab.component';
import { NewsComponent } from './news/news.component';
import { MenuComponent } from './menu/menu.component';
import { BookformComponent } from './bookform/bookform.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'books', component: BookCatlogComponent},
  {path: 'addbook', component: BookformComponent },

];
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
    BookListComponent,
    PriceDiscountPipe,
    BookCatlogComponent,
    BookComponent,
    TabComponent,
    NewsComponent,
    MenuComponent,
    BookformComponent,
    ChildComponent,
    ParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
