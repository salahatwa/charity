import { DOCUMENT, Location } from "@angular/common";
import {
  Component,


  HostListener,
  Inject, OnInit,
  Renderer2
} from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
import { finalize } from 'rxjs/operators';
import { IPayPalConfig } from './shared/components/paypal/models/paypal-models';
import { IpInfoService } from './shared/services/ip-info.service';
import { StorageService } from './shared/services/storage-service';
import { CLM, Countries } from './shared/utils/countries-contant';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {


  public payPalConfig?: IPayPalConfig;
  clm: CLM = new Countries();

  constructor(
    private ipInfoService: IpInfoService,
    private storageSevrice: StorageService,
    private translate: TranslateService,
    private renderer: Renderer2,
    public location: Location,
    @Inject(DOCUMENT) document
  ) { }
  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.remove("navbar-transparent");
        element.classList.add("bg-danger");
      }
    } else {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.add("navbar-transparent");
        element.classList.remove("bg-danger");
      }
    }
  }
  ngOnInit() {
    this.onWindowScroll(event);

    this.translate.setDefaultLang('en');
    this.storageSevrice.setDefaultPrice('3');
    this.storageSevrice.setLocal("en_US");
    // this.ipInfoService.getIpInfo().pipe(finalize(() => {

    //   if (this.storageSevrice.getLocal() == undefined || this.storageSevrice.getLocal() == null) {
    //     console.log("Set default local en_US");
    //     this.storageSevrice.setLocal("en_US");
    //   }
    // })).subscribe(data => {
    //   console.log(data);
    //   this.storageSevrice.setLocal(this.clm.getLocaleByAlpha2(data.country));
    // });
  }


}
