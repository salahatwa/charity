import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SuccessPayDialogComponent } from '../components/pay/dialogs/success-pay-dialog.component';
import { ICreateOrderRequest, IPayPalConfig } from '../components/paypal/models/paypal-models';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    
    constructor(){

    }

    setDefaultPrice(value: string) {
        localStorage.setItem('defaultPrice', value);
    }
    getDefaultPrice() {
        return localStorage.getItem('defaultPrice');
    }
    setLocal(value: string) {
        localStorage.setItem('local', value);
    }
    getLocal() {
        return localStorage.getItem('local');
    }
   
   

    /**
   * generate groups of 4 random characters
   * @example getUniqueId(1) : 607f
   * @example getUniqueId(2) : 95ca-361a-f8a1-1e73
   */
    getUniqueId(parts: number): string {
        const stringArr = [];
        for (let i = 0; i < parts; i++) {
            // tslint:disable-next-line:no-bitwise
            const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            stringArr.push(S4);
        }
        return stringArr.join('-');
    }

}