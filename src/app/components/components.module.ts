import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallComponent } from './ball/ball.component';
import { FormsModule } from '@angular/forms';
import { BallGroupComponent } from './ball/ball-group.component';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    BallGroupComponent,
    BallComponent,
    ResultComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    BallGroupComponent,
    BallComponent,
    ResultComponent,
  ]
})
export class ComponentsModule { }
