import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
  ],
  exports:[SliderComponent]
})
export class SliderModule { }
