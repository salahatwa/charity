import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayDonateComponent } from './pay-donate.component';
import { NgxPayPalModule } from '../paypal/ngx-paypal.module';
import { FormsModule } from '@angular/forms';
import { SuccessPayDialogComponent } from './dialogs/success-pay-dialog.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [PayDonateComponent, SuccessPayDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    NgxPayPalModule
  ],
  exports:[
    PayDonateComponent,SuccessPayDialogComponent
  ]
})
export class PayDonateModule { }
