import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page3PageRoutingModule } from './page3-routing.module';

import { Page3Page } from './page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page3PageRoutingModule
  ],
  declarations: []
})
export class Page3PageModule {}
