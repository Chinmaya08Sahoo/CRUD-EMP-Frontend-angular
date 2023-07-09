import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
    { path: '', component: HomeComponent, children:[
        {
            path:'users', component: UsersComponent
        },
        {
            path: 'users/add', component: AddUserComponent
        },
        {
            path: 'users/edit/:userId', component: EditUserComponent
        }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
