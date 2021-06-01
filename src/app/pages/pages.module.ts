import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { AlertModule } from "ngx-bootstrap/alert";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { PopoverModule } from "ngx-bootstrap/popover";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TabsModule } from "ngx-bootstrap/tabs";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NavbarModule } from '../shared/components/navbar/navbar.module';
import { PayDonateModule } from '../shared/components/pay/pay-donate.module';
import { SliderModule } from '../shared/components/slider/slider.module';
import { TranslationModule } from '../shared/modules/translation-module';
import { DonatepageComponent } from "./donate/donate.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from './about-us/aboutus.component';
import { ContactpageComponent } from './contact/contact.component';
import { FooterModule } from '../shared/components/footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    PayDonateModule,
    TranslationModule,
    SliderModule,
    NavbarModule,
    FooterModule
  ],
  declarations: [
    HomeComponent,
    DonatepageComponent,
    AboutUsComponent,
    ContactpageComponent,
    LandingpageComponent
  ],
  exports: [
    FormsModule,
    HomeComponent,
    DonatepageComponent,
    LandingpageComponent,
    TranslationModule,
  ],
  providers: []
})
export class PagesModule { }
