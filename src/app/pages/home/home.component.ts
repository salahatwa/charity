import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit, OnDestroy {

  focus;
  focus1;
  focus2;
  date = new Date();
  constructor() { }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
}
