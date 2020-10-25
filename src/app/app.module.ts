import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { DoctorDetailsComponent } from './components/pages/doctor-details/doctor-details.component';
import { DoctorComponent } from './components/pages/doctor/doctor.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
	PreloaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeOneComponent,
    AboutComponent,
    ErrorComponent,
    ServicesComponent,
    DoctorDetailsComponent,
    DoctorComponent,
    ContactComponent,
    ComingSoonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	ReactiveFormsModule,
	FormsModule,
	MatCardModule,
	MatButtonModule,
    MatIconModule,
	MatGridListModule,
	HttpClientModule,
	RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
