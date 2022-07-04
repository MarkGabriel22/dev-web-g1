import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComplaintsbookEditComponent } from "./access/admin/complaintsbook-edit/complaintsbook-edit.component";
import { ComplaintsbookListComponent } from "./access/admin/complaintsbook-list/complaintsbook-list.component";
import { HomeAdminComponent } from "./access/admin/home-admin/home-admin.component";
import { HomeUserComponent } from "./access/user/home-user/home-user.component";
import { UsercomplaintsbookListComponent } from "./access/user/usercomplaintsbook-list/usercomplaintsbook-list.component";
import { UsercomplaintsbookNewComponent } from "./access/user/usercomplaintsbook-new/usercomplaintsbook-new.component";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { UserregisterComponent } from "./pages/userregister/userregister.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'login', component: LoginComponent},
    { path:'', redirectTo: 'home', pathMatch: 'full'},
    { path: 'admin/home', component: HomeAdminComponent},
    { path: 'admin/complaints/edit', component: ComplaintsbookEditComponent},
    { path: 'admin/complaints/list', component: ComplaintsbookListComponent},
    { path: 'user/home', component: HomeUserComponent },
    { path: 'user/complaints/new', component: UsercomplaintsbookNewComponent},
    { path: 'user/complaints/list', component: UsercomplaintsbookListComponent},
    { path: 'login/register', component: UserregisterComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}


