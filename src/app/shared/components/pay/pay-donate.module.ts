import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TranslationModule } from '../../modules/translation-module';
import { NgxPayPalModule } from '../paypal/ngx-paypal.module';
import { SliderModule } from '../slider/slider.module';
import { SuccessPayDialogComponent } from './dialogs/success-pay-dialog.component';
import { PayDonateComponent } from './pay-donate.component';



@NgModule({
  declarations: [PayDonateComponent, SuccessPayDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslationModule,
    ModalModule.forRoot(),
    NgxPayPalModule,
    SliderModule
  ],
  exports: [
    PayDonateComponent, SuccessPayDialogComponent
  ]
})
export class PayDonateModule { }
