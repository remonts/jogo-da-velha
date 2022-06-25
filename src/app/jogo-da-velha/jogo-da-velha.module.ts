import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { JogoDaVelhaComponent } from './';
import { JogoDaVelhaService } from './shared';

@NgModule({
  declarations: [
    JogoDaVelhaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JogoDaVelhaComponent
  ],
  providers: [
    JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
