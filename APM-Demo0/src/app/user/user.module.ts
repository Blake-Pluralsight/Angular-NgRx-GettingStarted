import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';

import { StoreModule } from '@ngrx/store';
import { UserReducer} from './state/user.reducer'


const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', UserReducer)

  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
