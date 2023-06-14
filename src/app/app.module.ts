import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './modules/auth-module/signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './modules/auth-module/login/login.component';
import { MentorsComponent } from './modules/admin-module/mentors/mentors.component';
import { MenteesComponent } from './modules/admin-module/mentees/mentees.component';
import { ApplicationsComponent } from './modules/admin-module/applications/applications.component';
import { ReportsComponent } from './modules/admin-module/reports/reports.component';
import { DashboardComponent } from './modules/mentee-module/dashboard/dashboard.component';
import { AddServiceComponent } from './modules/mentee-module/add-service/add-service.component';
import { MyBalanceComponent } from './modules/mentee-module/my-balance/my-balance.component';
import { EditProfileComponent } from './modules/mentee-module/edit-profile/edit-profile.component';
import { UpcomingSessionsComponent } from './modules/mentee-module/upcoming-sessions/upcoming-sessions.component';
import { ChatComponent } from './modules/mentee-module/chat/chat.component';
import { SearchMentorsComponent } from './modules/mentor-module/search-mentors/search-mentors.component';
import { SubscriptionComponent } from './modules/mentor-module/subscription/subscription.component';
import { EditProfileMentorComponent } from './modules/mentor-module/edit-profile-mentor/edit-profile-mentor.component';
import { UpcomingSessionsMentorComponent } from './modules/mentor-module/upcoming-sessions-mentor/upcoming-sessions-mentor.component';
import { ProfileMentorComponent } from './modules/mentor-module/profile-mentor/profile-mentor.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    MentorsComponent,
    MenteesComponent,
    ApplicationsComponent,
    ReportsComponent,
    DashboardComponent,
    AddServiceComponent,
    MyBalanceComponent,
    EditProfileComponent,
    UpcomingSessionsComponent,
    ChatComponent,
    SearchMentorsComponent,
    SubscriptionComponent,
    EditProfileMentorComponent,
    UpcomingSessionsMentorComponent,
    ProfileMentorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
