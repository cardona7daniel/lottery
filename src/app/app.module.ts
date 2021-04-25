import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BallSelectorComponent } from './containers/ball-selector/ball-selector.component';
import { BetSlipComponent } from './containers/bet-slip/bet-slip.component';
import { ComponentsModule } from './components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BallSelectorComponent,
    BetSlipComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [BallSelectorComponent]
})
export class AppModule { }
