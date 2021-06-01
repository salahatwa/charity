import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from "@angular/core";
import Chart from "chart.js";
import { ICreateOrderRequest, IPayPalConfig } from 'src/app/shared/components/paypal/models/paypal-models';
import { IpInfoService } from 'src/app/shared/services/ip-info.service';
import { StorageService } from 'src/app/shared/services/storage-service';
import { CLM, Countries } from 'src/app/shared/utils/countries-contant';

@Component({
  selector: "app-landingpage",
  templateUrl: "landingpage.component.html"
})
export class LandingpageComponent implements OnInit, OnDestroy {
  isCollapsed = true;


  donateTypes = [
    {
      image: 'assets/img/poor/-pon-or-a-well-2.jpg',
      title: "Poor Children",
      list: ['Feed them', 'Save their life','buy cloths','etc..']
    },
    {
      image: 'assets/img/poor/images.jpg',
      title: "Poor Families",
      list: ['Feed them', 'buy cloths', 'find works for them','etc..']
    },
    {
      image: 'assets/img/poor/images99.jpg',
      title: "Womens",
      list: ['Marriage', 'buy cloths', 'find works','etc..']
    }
  ]
  constructor(private storageSevrice: StorageService) { }

  ngOnInit() {
   


    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");

    var canvas: any = document.getElementById("chartBig");
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
    gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
    gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
    var chartBig = new Chart(ctx, {
      type: "line",
      responsive: true,
      data: {
        labels: [
          "JUN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC"
        ],
        datasets: [
          {
            label: "Data",
            fill: true,
            backgroundColor: gradientFill,
            borderColor: "#e44cc4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#e44cc4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#be55ed",
            //pointHoverBorderColor:'rgba(35,46,55,1)',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },

        tooltips: {
          backgroundColor: "#fff",
          titleFontColor: "#ccc",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(0,0,0,0.0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                display: false,
                suggestedMin: 0,
                suggestedMax: 350,
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }
          ],

          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(0,0,0,0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }
          ]
        }
      }
    });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }






}
