import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'
import { ComponentsModule } from '../../components/components.module'
@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
  imports : [IonicModule, ComponentsModule]
})
export class Page3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
