import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, HttpInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service';

import { ContactInfoService } from './contact-info.service';

import { ContactInfoComponent } from './contact-info/contact-info.component';
import { AddContactInfoComponent } from './add-contact-info/add-contact-info.component';
import { SearchContactInfoComponent } from './search-contact-info/search-contact-info.component';
import { EditContactInfoComponent } from './edit-contact-info/edit-contact-info.component';

import { ContactSearchTypeToStringPipe } from './search-contact-info/contact-search-type-to-string.pipe';

const appRotues: Routes = [
  {path:'contact-edit/:id', component: EditContactInfoComponent},
  {path:'contact-list', component: ContactInfoComponent},
  {path:'', redirectTo:'/contact-list', pathMatch:'full'},
  {path:'**', redirectTo:'/contact-list', pathMatch:'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ContactInfoComponent,
    ContactSearchTypeToStringPipe,
    AddContactInfoComponent,
    
    SearchContactInfoComponent,
    
    EditContactInfoComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    RouterModule.forRoot( appRotues, {enableTracing: true})
  ],
  providers: [InMemoryDataService, ContactInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
