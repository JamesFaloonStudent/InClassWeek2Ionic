import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module'
@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
  imports : [IonicModule, ComponentsModule]
})
export class Page2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
