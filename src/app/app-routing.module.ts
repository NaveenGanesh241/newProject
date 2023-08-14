import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from '../app/signin/signin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
  {path:'home',component:HomepageComponent},
  // { path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path:'',component:SigninComponent},
  // {path:'signup',component:SigninComponent},
  {path:'signin/:email/:password',component:SigninComponent},
  {path:'admin',component:CustomerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
