import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { StorageService } from '../../services/storage-service';
import { ICreateOrderRequest, IPayPalConfig } from '../paypal/models/paypal-models';
import { SuccessPayDialogComponent } from './dialogs/success-pay-dialog.component';

@Component({
  selector: 'app-pay-donate',
  templateUrl: './pay-donate.component.html',
  styleUrls: ['./pay-donate.component.scss']
})
export class PayDonateComponent implements OnInit {
  public showSuccess: boolean = false;
  public showCancel: boolean = false;
  public showError: boolean = false;

  focus;
  public payPalConfig?: IPayPalConfig;
  defaultPrice;

  modalRef: BsModalRef;

  @ViewChild('priceElem') priceElem?: ElementRef;


  constructor(private storageSevrice: StorageService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.defaultPrice = this.storageSevrice.getDefaultPrice();
    this.payPalConfig = this.initPayPalConfig(this.storageSevrice.getDefaultPrice());
  }


  changePrice(value?: any): void {
    console.log(value)
    if (value)
      this.defaultPrice = value;
    // this.resetStatus();
    console.log('>>>>>>>>>');
    if (this.priceElem) {
      this.payPalConfig = this.initPayPalConfig(this.defaultPrice);
    }
  }


  //Test
  //AQ-coUWjorcLHWsXToyV4ZMsV2Ui7iwfWereajpmtImFKsREcR0eQB2pq-lxv1xmQK3okJiXwhOw96xZ
  //PROD 
  //AaFVrgASF8iOOgVccacn5-bmeUmedPj_G2LCPvhRkuHBiWSIqdPLvmJ5y4Rccrk_4WuGeeLsLAyagypF
  initPayPalConfig(price: string): IPayPalConfig {
    let config: IPayPalConfig = {
      local: this.storageSevrice.getLocal(),
      intent: 'CAPTURE',
      currency: 'USD',
      clientId: 'AaFVrgASF8iOOgVccacn5-bmeUmedPj_G2LCPvhRkuHBiWSIqdPLvmJ5y4Rccrk_4WuGeeLsLAyagypF',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',

        purchase_units: [
          {
            // reference_id: this.getUniqueId(2),
            amount: {
              currency_code: 'USD',
              value: price,
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: price
                }
              }
            },
            items: [
              {
                name: 'Charity Donation',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'USD',
                  value: price,
                },
              }
            ]
          }
        ],

        application_context: {
          shipping_preference: 'NO_SHIPPING'
        }
      },
      advanced: {
        commit: 'true'
      },
      style: {
        // color:'gold',
        label: 'paypal',
        layout: 'vertical'
      },

      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        // actions.order.get().then((details: any) => {
        //   console.log('onApprove - you can get full order details inside onApprove: ', details);
        // });
        return actions.order.capture().then(function (details) {
          // alert('Transaction completed by ' + details.payer.name.given_name + '!');
          // this.modalRef = this.modalService.show(SuccessPayDialogComponent);
          // this.showSuccess = true;
        });

      },
      onClientAuthorization: (data) => {
        // this.showSuccess = true;
        this.modalService.show(SuccessPayDialogComponent);
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      },
      onCancel: (data, actions) => {
        this.showCancel = true;
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        this.showError = true;
      },
      onClick: (data, actions) => {
        this.resetStatus();
      },
      onInit: (data, actions) => {
        console.log('onInit', data, actions);
        actions.enable();
      }
    };




    return config;
  }

  resetStatus() {
    this.showCancel = false;
    this.showError = false;
    this.showSuccess = false;
  }

}
