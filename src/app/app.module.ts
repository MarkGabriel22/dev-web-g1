import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeAdminComponent } from './access/admin/home-admin/home-admin.component';
import { ComplaintsbookListComponent } from './access/admin/complaintsbook-list/complaintsbook-list.component';
import { ComplaintsbookEditComponent } from './access/admin/complaintsbook-edit/complaintsbook-edit.component';
import { HomeUserComponent } from './access/user/home-user/home-user.component';
import { UsercomplaintsbookNewComponent } from './access/user/usercomplaintsbook-new/usercomplaintsbook-new.component';
import { UsercomplaintsbookListComponent } from './access/user/usercomplaintsbook-list/usercomplaintsbook-list.component';
import { UserregisterComponent } from './pages/userregister/userregister.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    LoginComponent,
    HomeAdminComponent,
    ComplaintsbookListComponent,
    ComplaintsbookEditComponent,
    HomeUserComponent,
    UsercomplaintsbookNewComponent,
    UsercomplaintsbookListComponent,
    UserregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
