import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from './pages/about-us/aboutus.component';
import { ContactpageComponent } from './pages/contact/contact.component';
import { DonatepageComponent } from "./pages/donate/donate.component";
import { HomeComponent } from "./pages/home/home.component";
import { LandingpageComponent } from "./pages/landingpage/landingpage.component";


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "donate", component: DonatepageComponent },
  { path: "contact", component: ContactpageComponent },
  { path: "about", component: AboutUsComponent },
  { path: "our-works", component: LandingpageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule { }
