import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { C1Component } from './c1/c1.component'
import { C2Component } from './c2/c2.component'
import { C3Component } from './c3/c3.component'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    C1Component,
    C2Component,
    C3Component
  ],
  exports : [C1Component, C2Component, C3Component]
})
export class ComponentsModule { }
