import {
  Component,
  OnInit,
  Renderer2,
  HostListener,
  Inject
} from "@angular/core";
import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/common";
import { IpInfoService } from './shared/services/ip-info.service';
import { CLM, Countries } from './shared/utils/countries-contant';
import { StorageService } from './shared/services/storage-service';
import { ICreateOrderRequest, IPayPalConfig } from './shared/components/paypal/models/paypal-models';

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

    this.storageSevrice.setDefaultPrice('1');
    this.ipInfoService.getIpInfo().subscribe(data => {
      console.log(data);
      this.storageSevrice.setLocal(this.clm.getLocaleByAlpha2(data.countryCode));
    });
  }


}
