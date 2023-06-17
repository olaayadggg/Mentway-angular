import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './modules/auth-module/signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './modules/auth-module/login/login.component';
import { SubscriptionComponent } from './modules/mentor-module/components/subscription/subscription.component';
import { MyBalanceComponent } from './modules/mentee-module/components/my-balance/my-balance.component';

const routes: Routes =[
    { path: 'mysubscriptions',             component: SubscriptionComponent },
    { path: 'mybalance',             component: MyBalanceComponent },
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
