import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-pay-dialog',
  templateUrl: './success-pay-dialog.component.html',
  styleUrls: ['./success-pay-dialog.component.scss']
})
export class SuccessPayDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('SUUUUUUUUCSS');
  }

}
